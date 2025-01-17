let file = null;
let oldTile = null;
let clickCount = 0;

let phaserState = Phaser.GAMES[0].state;

let loadingMsg = document.getElementById("loadingMsg");
let ui = document.getElementById("ui");
let blackout = document.getElementById("blackout");
let uploadFileName = document.getElementById("uploadFileName")

let mainGameBar = document.getElementById("mainGameBar");
let settingsBar = document.getElementById("settingsBar");
let reloadButton = document.getElementById("reloadButton");
let fileManager = document.getElementById("filemanager");

let mapSize = document.getElementById("MapSize");
let saveName = document.getElementById("FileName");
let versionNumber = document.getElementById("MapVersion");
let colonyName = document.getElementById("ColonyName");

let hdCheckbox = document.getElementById('hdCheckbox');
let stuffCheckbox = document.getElementById('stuffCheckbox');
let mountainCheckbox = document.getElementById('mountainCheckbox');
let resourceCheckbox = document.getElementById('resourceCheckbox');
let deepResourceCheckbox = document.getElementById('deepResourceCheckbox');

let shareBox = document.getElementById("shareBox");

let terrainName = document.getElementById("terrainName");
let stuffName = document.getElementById("stuffName");
let resourceName = document.getElementById("resourceName");
let deepResourceName = document.getElementById("deepResourceName");

let clipBoard = new ClipboardJS('.copyBtn');

let loadedMapName = "";

let finishedFrontendLoading = false;

ui.style.display = "none";
setInterval(updateTick, 250);

function updateTick() {

  //document.getElementById("LoadingText").textContent = phaserState.callbackContext.loadingDelta;

  switch (phaserState.current) {

    case "DynamicLoad":
      if (ui.style.display == "none") {
        ui.style.display = "block";
        let url = null;
        if (window.document.referrer) {
          url = new URL(window.document.referrer); //window.document.referrer;//document.location;
        } else {
          url = new URL(document.location); //window.document.referrer;//document.location;
        }
        if (url != null) {
          params = new URLSearchParams(url.search.substring(1))
          let urlMapId = params.get("mapid")
          if (urlMapId !== null) {
            loadSave(urlMapId, false);
          }
        }
      }
      break;
    case "PreloadAssets":
      ui.style.display = "none";
      blackout.style.display = "none";
      settingsBar.style.display = "none";
      break;
    case "GameState":

      if (phaserState.callbackContext.currentTile) {
        updateTileText();
      }

      if (phaserState.callbackContext.loadingFinished == true) {
        blackout.style.display = "none";

        if (finishedFrontendLoading != true) {
          ui.style.display = "block";
          mainGameBar.style.display = "block";
          finishedFrontendLoading = true;
          reloadButton.style.display = "block";

          if (file) {
            if (file.name !== undefined) {
            shareButton.style.display = "block";
              uploadFileName.textContent = file.name;
            }
          }
        }
      } else if (phaserState.callbackContext.loadingFinished == false) {
        blackout.style.display = "block";
        if (finishedFrontendLoading == false) {
          ui.style.display = "block";
          if (loadedMapName != "") {
            loadingMsg.textContent = "Rendering " + loadedMapName + " " + "(" + (phaserState.callbackContext.loadingDelta * 20) + "%)";
            mapSize.textContent = phaserState.callbackContext.worldSize.x + " x " + phaserState.callbackContext.worldSize.y;
            versionNumber.textContent = phaserState.callbackContext.mapInfo.gameVersion;
            colonyName.textContent = phaserState.callbackContext.mapInfo.colonyName;
          }
        }
      }
      break;
  }
}

let toggleHD = function() {
  blackout.style.display = "block";
  loadingMsg.textContent = "Loading HD...";

  if (hdCheckbox.checked) {
    alert("HD graphics are experimental and may crash your web browser.\nProcede with caution");

    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.showHD();
    }, 1000);
  } else {
    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.hideHD();
    }, 1000);
  }


}

let updateTileText = function() {
  let currentTile = phaserState.callbackContext.currentTile;
  if (currentTile != oldTile) {
    oldTile = currentTile;
    terrainName.textContent = currentTile.terrainTile;
    stuffName.textContent = currentTile.stuffTile;
    resourceName.textContent = currentTile.resourceTile;
    deepResourceName.textContent = currentTile.deepResourceTile;
  }
}

let toggleMountain = function() {
  blackout.style.display = "block";
  loadingMsg.textContent = "Loading mountains...";

  if (mountainCheckbox.checked) {
    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.showMountains();
    }, 1000);
  } else {
    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.hideMountains();
    }, 1000);
  }
}
let toggleResource = function() {

  phaserState.callbackContext.loadingFinished = false;
  loadingMsg.textContent = "Loading resources...";
  if (resourceCheckbox.checked) {
    setTimeout(() => {
      phaserState.callbackContext.showResources();
    }, 1000);
  } else {
    setTimeout(() => {
      phaserState.callbackContext.hideResources();
    }, 1000);
  }
}
let toggleDeepResource = function() {
  //blackout.style.display = "block";
  phaserState.callbackContext.loadingFinished = false;
  loadingMsg.textContent = "Loading deep resources...";
  if (deepResourceCheckbox.checked) {
    setTimeout(() => {
      phaserState.callbackContext.showDeepResources();
    }, 1000);
  } else {
    setTimeout(() => {
      phaserState.callbackContext.hideDeepResources();
    }, 1000);
  }
}
let togglePlanning = function() {
  //blackout.style.display = "block";
  phaserState.callbackContext.loadingFinished = false;
  loadingMsg.textContent = "Loading Planning...";
  if (planningCheckbox.checked) {
    setTimeout(() => {
      phaserState.callbackContext.showPlanning();
    }, 1000);
  } else {
    setTimeout(() => {
      phaserState.callbackContext.hidePlanning();
    }, 1000);
  }
}
let toggleStuff = function() {
  blackout.style.display = "block";
  loadingMsg.textContent = "Loading stuff...";

  if (stuffCheckbox.checked) {
    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.showStuff();
    }, 1000);
  } else {
    setTimeout(() => {
      blackout.style.display = "none";
      phaserState.callbackContext.hideStuff();
    }, 1000);
  }
}

let uploadSave = function(input) {
  file = input.files[0];
  if (file) {
    blackout.style.display = "block";

    let reader = new FileReader();
    //SHOW BLACKOUT
    fileManager.style.display = "none";

    reader.readAsText(file, "UTF-8");
    reader.onload = function(evt) {
      loadedMapName = file.name;
      saveName.textContent = file.name;

      //REMOVE WHITESPACE
      let data = evt.target.result.replace(/\n[\s]*\n?/gm, "");

      //PARSE THE XML
      let loadedXML = parseXml(data);

      //CONVERT THE XML TO JSON
      let saveGameJson = xmlToJson(loadedXML);

      settingsBar.style.display = "none";

      //SEND JSON TO PHASER
      phaserState.callbackContext.loadWorld(saveGameJson);
    }
    reader.onprogress = function(data) {
      if (data.lengthComputable) {
        loadingMsg.textContent = "Uploading " + loadedMapName + " (" + Math.round((data.loaded / data.total) * 100) + "%)";
      }
    }
    reader.onerror = function(evt) {
    }
  }
}

function loadSave(fileName, local) {

  let req = new XMLHttpRequest();
  if (local) {
    req.open("GET", "maps/" + fileName, true);
  } else {
    req.open("GET", "https://api.jamessimo.com/rws-storage/" + fileName, true);
  }
  blackout.style.display = "block";
  fileManager.style.display = "none";
  settingsBar.style.display = "none";

  req.onloadstart = function() {
    loadingMsg.textContent = "Downloading file...";
  }
  req.onreadystatechange = req.onprogress = function() {
    let length = this.getResponseHeader("Content-Length"); //console.log(length);
    if (length != null) {
      loadingMsg.textContent = "Downloading " + fileName + " (" + Math.round((this.responseText.length / length) * 100) + "%)";
    }
  }
  req.onload = function() {

    if (req.status == 200) {
      loadedMapName = fileName;
      saveName.textContent = fileName;
      //console.log(this.responseText);

      let data = this.responseText.replace(/\n[\s]*\n?/gm, "");

      //PARSE THE XML
      let loadedXML = parseXml(data);

      //CONVERT THE XML TO JSON
      let saveGameJson = xmlToJson(loadedXML);

      //SEND JSON TO PHASER
      phaserState.callbackContext.loadWorld(saveGameJson);
    } else {
      blackout.style.display = "none";
      alert("Error " + req.status + " from server. Link expired");
      parent.location = "https://jamessimo.itch.io/rimmap"
    }

  }
  req.send();
}
parseXml = function(xmlStr) {
  return (new window.DOMParser()).parseFromString(xmlStr, "text/xml");
};

let uploadFileIO = function() {
  if (file) {
    let formData = new FormData();
    formData.append("rwsFile", file);

    let req = new XMLHttpRequest();

    req.open("POST", "https://api.jamessimo.com/upload", true);

    //req.setRequestHeader("Content-Type", "application/octet-stream");

    req.onloadstart = function() {
      blackout.style.display = "block";
      phaserState.callbackContext.loadingFinished = false;
      loadingMsg.textContent = "Uploading file...";
    }

    req.onprogress = function(data){
      console.log(data);
      if (data) {
        loadingMsg.textContent = "Uploading " + loadedMapName + " (" + Math.round((data.loaded / data.total) * 100) + "%)";
      }

    }
    req.onreadystatechange = function() {

      if (req.readyState === 4 && req.status === 200) {
        console.log(req.response);
        let jsonRespose = JSON.parse(req.response);
        document.getElementById("generatedURL").value = "https://jamessimo.itch.io/rimmap/?mapid=" + jsonRespose.filename;
        document.getElementById("clip").style.display = "block";
      }
      phaserState.callbackContext.loadingFinished = true;
      blackout.style.display = "none";

    }
    req.send(formData);
  }
}

let toggleShareBox = function() {

  if (shareBox.style.display == "block") {
    shareBox.style.display = "none";
  } else {
    shareBox.style.display = "block";
  }
}

function xmlToJson(xml) {
  // Create the return object
  let obj = {};

  if (xml.nodeType == 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        let attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) { // text
    obj = xml.nodeValue;
  }

  // do children
  // If just one text node inside
  if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
    obj = xml.childNodes[0].nodeValue;
  } else if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      let item = xml.childNodes.item(i);
      let nodeName = item.nodeName;
      if (typeof(obj[nodeName]) == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof(obj[nodeName].push) == "undefined") {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}
