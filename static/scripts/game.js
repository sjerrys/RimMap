(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preload = require('states/Preload');

var _Preload2 = _interopRequireDefault(_Preload);

var _DynamicLoad = require('states/DynamicLoad');

var _DynamicLoad2 = _interopRequireDefault(_DynamicLoad);

var _PreloadAssets = require('states/PreloadAssets');

var _PreloadAssets2 = _interopRequireDefault(_PreloadAssets);

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		window.PhaserGlobal = { disableAudio: true };
		// Phaser.WEBGL_MULTI

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1024, 720, Phaser.WEBGL_MULTI, 'window', null, false, true));

		_this.state.add('Boot', _Boot2.default, false);
		_this.state.add('Preload', _Preload2.default, false);
		_this.state.add('DynamicLoad', _DynamicLoad2.default, false);
		_this.state.add('PreloadAssets', _PreloadAssets2.default, false);

		_this.state.add('GameState', _GameState2.default, false);

		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"states/Boot":2,"states/DynamicLoad":3,"states/GameState":4,"states/Preload":5,"states/PreloadAssets":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Boot = function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
	}

	_createClass(Boot, [{
		key: 'preload',
		value: function preload() {
			this.load.image('preloadBar', 'assets/loader.png');
			this.load.image('preloadBg', 'assets/loaderBg.png');

			this.load.json("vanillaAssets", "assets/vanillaAssets.json");

			this.load.json("modAssets", "assets/modAssets.json"); //TODO ADD VERSIONS?


			this.load.script('assetLoader', 'assets/phaser-asset-loader-0.0.1.min.js');
		}
	}, {
		key: 'create',
		value: function create() {
			//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.stage.backgroundColor = '#14171a';

			this.game.state.start("Preload");
		}
	}]);

	return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Utils = require("utils/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var DynamicLoad = function (_Phaser$State) {
  _inherits(DynamicLoad, _Phaser$State);

  function DynamicLoad() {
    _classCallCheck(this, DynamicLoad);

    return _possibleConstructorReturn(this, (DynamicLoad.__proto__ || Object.getPrototypeOf(DynamicLoad)).apply(this, arguments));
  }

  _createClass(DynamicLoad, [{
    key: "create",
    value: function create() {
      this.worldSize = {
        x: 0,
        y: 0,
        z: 0
      };
      this.toLoadJson = {
        "image": {}
      };
      this.loadingDelta = 0;
      this.game.hd = false;
      this.utils = new _Utils2.default(this.game);
    }
  }, {
    key: "loadWorld",
    value: function loadWorld(json) {
      //SETUP LOADING
      var rawSizes = null;

      //IF MANY MAPS
      if (json.savegame.game.maps.li.length) {
        json.savegame.game.maps.li = json.savegame.game.maps.li[0];
      }

      rawSizes = json.savegame.game.maps.li.mapInfo.size;

      var sizes = this.utils.getPosition(rawSizes);

      this.worldSize.x = sizes[0];
      this.worldSize.y = sizes[2];
      this.worldSize.z = sizes[1];

      var allAssets = null;
      var thingList = json.savegame.game.maps.li.things.thing;
      var furnitureList = [];
      //MAKE FURNITURE LIST
      for (var i = 0; i < json.savegame.game.maps.li.things.thing.length; i++) {

        if (json.savegame.game.maps.li.things.thing[i].def == "MinifiedThing" || json.savegame.game.maps.li.things.thing[i].def == "MinifiedFurniture" || json.savegame.game.maps.li.things.thing[i].def == "MinifiedSculpture") {
          furnitureList.push(json.savegame.game.maps.li.things.thing[i].innerContainer.innerList.li);
        }
      }

      var totalAssets = thingList.concat(furnitureList);
      var toLoadAssets = this.getUniqueStuff(totalAssets);

      var vanillaAssets = this.game.cache.getJSON("vanillaAssets"); //Add more
      var modAssets = this.game.cache.getJSON("modAssets"); //Add more


      for (var _i = 0; _i < toLoadAssets.length; _i++) {

        var filterName = this.utils.getStuffName(toLoadAssets[_i]);
        //Loop through all the unique assets and add to array

        if (vanillaAssets.image[filterName] !== undefined) {
          this.toLoadJson.image[filterName] = vanillaAssets.path + vanillaAssets.image[filterName];
        } else if (modAssets.image[filterName] !== undefined) {
          this.toLoadJson.image[filterName] = modAssets.path + modAssets.image[filterName];
        }
      }
      this.startMap(json);
    }
  }, {
    key: "getUniqueStuff",
    value: function getUniqueStuff(allStuff) {
      return [].concat(_toConsumableArray(new Set(allStuff.map(function (stuff) {
        return stuff.def;
      }))));
    }
  }, {
    key: "showHD",
    value: function showHD() {
      this.game.hd = true;
    }
  }, {
    key: "hideHD",
    value: function hideHD() {
      this.game.hd = false;
    }
  }, {
    key: "startMap",
    value: function startMap(json) {
      this.game.state.start('PreloadAssets', true, false, this.toLoadJson, json);
    }
  }]);

  return DynamicLoad;
}(Phaser.State);

exports.default = DynamicLoad;

},{"utils/Utils":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Utils = require("utils/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
  _inherits(GameState, _Phaser$State);

  function GameState() {
    _classCallCheck(this, GameState);

    return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
  }

  _createClass(GameState, [{
    key: "create",
    value: function create() {

      this.json = this.game.json;

      this.fastRender = true;

      this.center = {
        x: this.game.world.centerX,
        y: this.game.world.centerY
      };

      this.SCREENWIDTH = this.game.width;
      this.SCREENHEIGHT = this.game.height;

      this.MOUSEBOUNDS = 25;

      this.worldSize = {
        x: 0,
        y: 0,
        z: 0
      };
      this.exp = false;
      this.utils = new _Utils2.default(this.game);

      if (this.game.hd == false) {
        this.zoomLevel = 0.5;
        this.zoomRate = 0.5;
        this.minZoom = 0.5;
        this.maxZoom = 2;
      } else {
        this.zoomLevel = 1;
        this.zoomRate = 0.5;
        this.minZoom = 1;
        this.maxZoom = 2.5;
      }

      this.mapInfo = { //RAW MAP DATA (arrays)
        "height": 0,
        "width": 0,
        "name": null,
        "colonyName": "",
        "gameVersion": "",
        "topTerrainGrid": [],
        "underTerrainGrid": [],
        "resourceRefGrid": [],
        "deepResourceGrid": [],
        "deepResourceCount": [],
        "planningGrid": [],
        "roofGrid": [],
        "stuffGrid": [],
        "stuffRefGrid": []
      };

      this.cursors = this.currentTile = this.topTerrainGridLayer = //TILEMAPS/BITMAP IMAGES
      this.underTerrainGridLayer = this.resourceGridLayer = this.deepResourceGridLayer = this.rocksGridLayer = this.snowGridLayer = this.rocksLayer = this.mountainsLayer = this.stuffLayer = this.resourceLayer = this.deepResourceLayer = this.planningLayer = this.roofLayer = this.centerMarker = this.currentBounds = this.marker = null;

      this.rockGrid = [];
      this.game.forceSingleUpdate = false;
      this.game.stage.backgroundColor = '#1f271d';

      this.game.stage.smoothed = false;

      this.game.multiTexture = true;

      this.loading = false;
      this.loadingFinished = false;
      this.LOADDELAY = 10; //A small tick to allow the UI to update the loading state
      this.loadingDeltaWait = this.LOADDELAY;
      this.loadingDelta = 0;

      this.clickDepth = 0;
      this.clickIndex = 0;
      this.oldStuffTile = null;

      this.worldScale = this.minZoom;
      this.distance = 0;
      this.olddistance = 0;
      this.groupScale = 0;
      this.distancedelta = 0;
      this.easing = 1; //0.1;
      this.mapSizeCurrent;
      this.mapSizeMax;
      this.prevScale = {};
      this.nextScale = {};
      this.zoompoint = {
        x: 0,
        y: 0
      };
      this.scrollZoomRate = 1024 * this.utils.SCALESIZE;
      this.scrolling = true;
      this.padding = 2;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.loadingDelta == 0) {

        this.terrainGridLayer = this.game.add.group();

        console.log(this.loadingDelta);
        this.buildMapInfo(this.json);

        var url = null;
        if (window.document.referrer) {
          url = new URL(window.document.referrer);
        } else {
          url = new URL(document.location);
        }
        if (url != null) {
          params = new URLSearchParams(url.search.substring(1));
          var urlMapId = params.get("test");
          if (urlMapId !== null) {
            this.exp = true;
          }
        }

        if (this.exp) {
          this.renderTerrainTileMap();
        } else {
          this.renderTerrain();
        }
      }
      if (this.loadingDelta > 0 && this.loadingDeltaWait > 0 && this.loadingFinished == false) {
        if (this.loadingSprite) {
          this.loadingSprite.scale.setTo(0.5 * this.loadingDelta);
        }
        this.loadingDeltaWait--;
      } else {
        this.loading = true;
      }

      if (this.loading && this.loadingFinished == false) {
        if (this.loadingDelta == 1) {

          console.log(this.loadingDelta);

          this.rocksGridLayer = this.game.add.group();
          this.mountainsLayer = this.game.add.group();
          this.stuffGridLayer = this.game.add.group();
          this.resourceGridLayer = this.game.add.group();
          this.deepResourceGridLayer = this.game.add.group();
          this.planningLayer = this.game.add.group();

          for (var i = 0; i < this.worldSize.x; i++) {
            if (!this.rockGrid[i]) {
              this.rockGrid[i] = [];
            }
            for (var j = 0; j < this.worldSize.y; j++) {
              this.rockGrid[i][j] = 0;
            }
          }

          //RENDER TILEMAP
          this.renderStuff();
          this.renderWalls();
          this.renderMountain();

          //this.renderPlanTileMap();
          if (!this.exp) {
            this.terrainLayer = this.renderBitmap(this.terrainGridLayer);
          }
          this.markerInit();

          this.loadingDelta = 2;
          this.loadingDeltaWait = this.LOADDELAY;
          this.loading = false;
        } else if (this.loadingDelta == 2) {
          console.log(this.loadingDelta);

          this.stuffLayer = this.renderBitmap(this.stuffGridLayer);

          this.loadingDelta = 3;
          this.loadingDeltaWait = this.LOADDELAY;
          this.loading = false;
        } else if (this.loadingDelta == 3) {
          console.log(this.loadingDelta);

          //for scrolling
          this.groupScale = this.stuffLayer.scale.x;

          this.rocksGridLayer.add(this.mountainsLayer);

          this.rocksLayer = this.renderBitmap(this.rocksGridLayer);

          this.mountainsLayer.destroy();
          this.loadingDelta = 4;
          this.loadingDeltaWait = this.LOADDELAY;
          this.loading = false;

          this.scaleMap(this.groupScale);
        } else if (this.loadingDelta == 4) {
          console.log(this.loadingDelta);

          this.mapSizeMax = this.mapInfo.width;
          this.mapSizeCurrent = this.mapSizeMax;
          this.worldScale = 1;

          this.game.input.mouseWheel.callback = function (event) {
            var wheelDelt = _this2.game.input.mouseWheel.delta;

            if (wheelDelt < 0) {

              if (_this2.mapSizeCurrent > _this2.mapSizeMax) {
                _this2.mapSizeCurrent -= _this2.scrollZoomRate;
              } else {
                _this2.mapSizeCurrent -= _this2.scrollZoomRate;
                _this2.mapSizeCurrent = Phaser.Math.clamp(_this2.mapSizeCurrent, _this2.SCREENWIDTH * 2, _this2.mapSizeMax);
              }
            } else {
              if (_this2.mapSizeCurrent < _this2.mapSizeMax) {
                _this2.mapSizeCurrent += _this2.scrollZoomRate;
                _this2.mapSizeCurrent = Phaser.Math.clamp(_this2.mapSizeCurrent, _this2.SCREENWIDTH * 2, _this2.mapSizeMax);
              } else if (_this2.mapSizeCurrent < _this2.mapSizeMax * 2) {
                _this2.mapSizeCurrent += _this2.scrollZoomRate;
              }
            }

            _this2.worldScale = _this2.mapSizeCurrent / _this2.mapSizeMax;

            _this2.rescalefactorx = _this2.mapInfo.width / (_this2.mapInfo.width * _this2.groupScale); // multiply by rescalefactor to get original world value
            _this2.rescalefactory = _this2.mapInfo.height / (_this2.mapInfo.height * _this2.groupScale);

            _this2.prevScale.x = _this2.groupScale;
            _this2.prevScale.y = _this2.groupScale;

            _this2.nextScale.x = _this2.prevScale.x + (_this2.worldScale - _this2.groupScale);
            _this2.nextScale.y = _this2.prevScale.y + (_this2.worldScale - _this2.groupScale);

            var xAdjust = (_this2.zoompoint.x - _this2.game.camera.x) * (_this2.nextScale.x - _this2.prevScale.x);
            var yAdjust = (_this2.zoompoint.y - _this2.game.camera.y) * (_this2.nextScale.y - _this2.prevScale.y);

            //Only move screen if we're not the same scale
            if (_this2.prevScale.x != _this2.nextScale.x || _this2.prevScale.y != _this2.nextScale.y) {

              var scaleAdjustX = _this2.nextScale.x / _this2.prevScale.x;
              var scaleAdjustY = _this2.nextScale.y / _this2.prevScale.y;
              var focusX = _this2.game.camera.x * scaleAdjustX + xAdjust * _this2.rescalefactorx;
              var focusY = _this2.game.camera.y * scaleAdjustY + yAdjust * _this2.rescalefactory;

              _this2.game.camera.x = focusX;
              _this2.game.camera.y = focusY;
            }
            //now actually scale the stage
            _this2.groupScale += _this2.worldScale - _this2.groupScale; //easing
            _this2.scaleMap(_this2.groupScale);
          };

          this.currentBounds = new Phaser.Rectangle(-this.mapInfo.width * 2, -this.mapInfo.height * 2, this.mapInfo.width * 4, this.mapInfo.height * 4);
          this.game.camera.bounds = null;
          this.game.camera.focusOnXY(this.mapInfo.width / 2, this.mapInfo.height / 2);

          this.cursors = this.game.input.keyboard.createCursorKeys();
          this.plusKey = this.game.input.keyboard.addKey(Phaser.Keyboard.EQUALS).onDown.add(function () {
            if (this.zoomLevel - this.zoomRate >= this.minZoom) {
              this.zoomMap(this.zoomLevel - this.zoomRate);
            }
          }, this);
          this.minusKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UNDERSCORE).onDown.add(function () {
            if (this.zoomLevel + this.zoomRate < this.maxZoom) {
              this.zoomMap(this.zoomLevel + this.zoomRate);
            }
          }, this);

          this.game.input.onDown.add(this.getTileProperties, this);

          this.loadingDelta = 5;
          this.loading = false;
          this.loadingDeltaWait = this.LOADDELAY;
          this.loadingFinished = true;
        }
      }
      if (this.loadingFinished == true && this.loadingDelta == 5) {

        // wheelzoom
        if (this.isMouseOut()) {

          var scrollRate = this.utils.TILESIZE / this.zoomLevel;

          if (this.game.input.mousePointer.x > this.SCREENWIDTH - this.MOUSEBOUNDS) {
            this.game.camera.x += scrollRate;
          }
          if (this.game.input.mousePointer.x < 0 + this.MOUSEBOUNDS) {
            this.game.camera.x -= scrollRate;
          }
          if (this.game.input.mousePointer.y > this.SCREENHEIGHT - this.MOUSEBOUNDS) {
            this.game.camera.y += scrollRate;
          }
          if (this.game.input.mousePointer.y < 0 + this.MOUSEBOUNDS) {
            this.game.camera.y -= scrollRate;
          }
          if (this.cursors.up.isDown) {
            this.game.camera.y -= scrollRate;
          } else if (this.cursors.down.isDown) {
            this.game.camera.y += scrollRate;
          }
          if (this.cursors.left.isDown) {
            this.game.camera.x -= scrollRate;
          } else if (this.cursors.right.isDown) {
            this.game.camera.x += scrollRate;
          }
        }
        // move camera / pan
        if (this.game.input.activePointer.isDown && !this.game.input.pointer2.isDown) {
          if (this.oldcamera) {
            // if moving the world always continue from the last position
            if (this.isMouseOut()) {
              this.game.camera.x += this.oldcamera.x - this.game.input.activePointer.position.x;
              this.game.camera.y += this.oldcamera.y - this.game.input.activePointer.position.y;
            }
          }
          this.oldcamera = this.game.input.activePointer.position.clone();
        } else {
          if (this.isMouseOut()) {

            this.zoompoint.x = this.game.input.mousePointer.worldX;
            this.zoompoint.y = this.game.input.mousePointer.worldY;

            if (this.topTerrainGridLayer) {
              this.marker.x = this.topTerrainGridLayer.getTileX(this.game.input.activePointer.worldX * this.zoomLevel) * this.utils.TILESIZE / this.zoomLevel;
              this.marker.y = this.topTerrainGridLayer.getTileY(this.game.input.activePointer.worldY * this.zoomLevel) * this.utils.TILESIZE / this.zoomLevel;
            } else {

              var x = Phaser.Math.snapTo(this.game.input.activePointer.worldX - this.utils.TILESIZE / 2 / this.zoomLevel, this.utils.TILESIZE / this.zoomLevel);
              var y = Phaser.Math.snapTo(this.game.input.activePointer.worldY - this.utils.TILESIZE / 2 / this.zoomLevel, this.utils.TILESIZE / this.zoomLevel);

              this.marker.x = x;
              this.marker.y = y;
            }
          }
          this.oldcamera = null;
        }
        this.scrolling = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.game.debug.text(this.game.time.fps || '--', 20, 50, "#ffffff");
    }
  }, {
    key: "buildMapInfo",
    value: function buildMapInfo(json) {

      //SETUP LOADING
      var rawSizes = null;
      if (json.savegame.game.maps.li.length) {
        json.savegame.game.maps.li = json.savegame.game.maps.li[0];
      }
      rawSizes = json.savegame.game.maps.li.mapInfo.size;

      var sizes = this.utils.getPosition(rawSizes);

      this.worldSize.x = sizes[0];
      this.worldSize.y = sizes[2];
      this.worldSize.z = sizes[1];

      this.utils.worldSize = this.worldSize;

      this.loadingDelta = 1;

      this.mapInfo.width = this.utils.TILESIZE * this.worldSize.x;
      this.mapInfo.height = this.utils.TILESIZE * this.worldSize.y;

      this.mapInfo.gameVersion = json.savegame.meta.gameVersion;

      //GET COLONY NAME
      for (var i = 0; i < json.savegame.game.world.factionManager.allFactions.li.length; i++) {
        if (json.savegame.game.world.factionManager.allFactions.li[i].def == "PlayerColony" || json.savegame.game.world.factionManager.allFactions.li[i].def == "PlayerTribe") {
          this.mapInfo.colonyName = json.savegame.game.world.factionManager.allFactions.li[i].name;
        }
      }

      this.mapInfo.topTerrainGrid = this.utils.decompress(json.savegame.game.maps.li.terrainGrid.topGridDeflate);
      this.mapInfo.underTerrainGrid = this.utils.decompress(json.savegame.game.maps.li.terrainGrid.underGridDeflate);
      //this.mapInfo.roofTerrainGrid = this.utils.decompress(json.savegame.game.maps.li.roofGrid);
      this.mapInfo.resourceRefGrid = this.utils.decompress(json.savegame.game.maps.li.compressedThingMapDeflate);

      this.mapInfo.deepResourceGrid = this.utils.decompress(json.savegame.game.maps.li.deepResourceGrid.defGridDeflate);
      this.mapInfo.deepResourceCount = this.utils.decompress(json.savegame.game.maps.li.deepResourceGrid.countGridDeflate);

      this.mapInfo.planningGrid = json.savegame.game.maps.li.designationManager.allDesignations.li;

      this.mapInfo.topTerrainGrid = this.utils.mapTextures(this.mapInfo.topTerrainGrid, "terrain", this.mapInfo.underTerrainGrid);
      this.mapInfo.stuffGrid = json.savegame.game.maps.li.things.thing;

      console.log(json.savegame);

      //this.temperatureCache.temperaturesDeflate
      //this.mapInfo.snowGridLayer = this.utils.decompress(json.savegame.game.maps.li.snowGrid.depthGridDeflate);
    }
  }, {
    key: "renderBitmap",
    value: function renderBitmap(group, center) {

      var outputGroup = this.game.add.group();
      var groupPosX = 0;
      var groupPosY = 0;
      var renderOutput = null;
      var bmd = null;

      if (center) {
        groupPosX = -this.mapInfo.width / 2;
        groupPosY = this.mapInfo.height / 2;
        group.pivot.x = -this.mapInfo.width / 2;
        group.pivot.y = -this.mapInfo.height / 2;
      } else {
        groupPosX = 0;
        groupPosY = this.mapInfo.height;
        group.pivot.x = 0;
        group.pivot.y = 0;
      }

      group.position.x = groupPosX;
      group.position.y = groupPosY;

      //This is the BitmapData we're going to be drawing to
      bmd = this.game.add.bitmapData(this.mapInfo.width, this.mapInfo.height, false);
      renderOutput = bmd.addToWorld(0, 0, 0, 0, 0.5, 0.5);

      this.game.stage.updateTransform();
      bmd.baseTexture.resolution = 0.5;
      bmd.disableTextureUpload = true;
      bmd.drawGroup(group);
      outputGroup.add(renderOutput);
      groupPosY = this.mapInfo.height;
      groupPosX = -this.mapInfo.width;
      bmd = null;
      group.destroy(true, false);

      return outputGroup;
    }
  }, {
    key: "renderTerrain",
    value: function renderTerrain() {
      var masterIndex = 0;
      var terrainSprite = null;
      for (var i = 0; i < this.worldSize.x; i++) {
        for (var j = 0; j < this.worldSize.y; j++) {
          terrainSprite = this.game.add.sprite(j * this.utils.TILESIZE, -((i + 1) * this.utils.TILESIZE), 'tileMap', this.mapInfo.topTerrainGrid[masterIndex]);
          this.terrainGridLayer.add(terrainSprite);
          masterIndex++;
        }
      }
    }
  }, {
    key: "renderTerrainTileMap",
    value: function renderTerrainTileMap() {
      //Deprecated due to zoom in out being choppy
      this.game.cache.addTilemap('dynamicMap', null, this.utils.makeCSV(this.mapInfo.topTerrainGrid), Phaser.Tilemap.CSV);
      var tileMap = this.game.add.tilemap('dynamicMap', this.utils.TILESIZE, this.utils.TILESIZE);
      tileMap.addTilesetImage('tiles', 'tiles', this.utils.TILESIZE, this.utils.TILESIZE);
      //  0 is important
      this.topTerrainGridLayer = tileMap.createLayer(0);
      this.topTerrainGridLayer.renderSettings.enableScrollDelta = false;

      this.topTerrainGridLayer.resizeWorld();
    }
  }, {
    key: "renderStuff",
    value: function renderStuff() {

      var thingPos = null;
      var thingSprite = null;
      var rockUnderSprite = null;
      var filterName = null;

      for (var i = this.mapInfo.stuffGrid.length - 1; i > 0; i--) {

        filterName = this.utils.getStuffName(this.mapInfo.stuffGrid[i].def);
        thingPos = this.utils.getPosition(this.mapInfo.stuffGrid[i].pos);

        //First check if the stuff is a damged rock if so add it to rocks and discard
        //Second check if its not a wall, sandbag, animal or anything undesiraable
        if (this.utils.isResource(this.mapInfo.stuffGrid[i].def)) {
          this.rockGrid[thingPos[2]][thingPos[0]] = 1;
          var mappedResource = 0;
          switch (this.mapInfo.stuffGrid[i].def) {
            case "Limestone":
              mappedResource = 138;
              break;
            case "Granite":
              mappedResource = 84;
              break;
            case "Marble":
              mappedResource = 212;
              break;
            case "Sandstone":
              mappedResource = 67;
              break;
            case "Slate":
              mappedResource = 197;
              break;
            case "MineableComponents":
            case "MineableComponentsIndustrial":
              mappedResource = 56;
              break;
            case "MineableGold":
              mappedResource = 229;
              break;
            case "MineableUranium":
              mappedResource = 103;
              break;
            case "MineableSteel":
              mappedResource = 156;
              break;
            case "MineableJade":
              mappedResource = 127;
              break;
            case "MineableSilver":
              mappedResource = 194;
              break;
            case "MineablePlasteel":
              mappedResource = 17;
              break;
          }

          this.mapInfo.resourceRefGrid[thingPos[2] * this.worldSize.y + thingPos[0]] = mappedResource;
        } else if (this.mapInfo.stuffGrid[i].def != "Sandbags" && !this.utils.isWall(this.mapInfo.stuffGrid[i].def) && this.utils.isAllowedStuff(filterName) && this.utils.isAnimal(filterName)) {

          thingSprite = this.game.add.sprite(thingPos[0] * this.utils.TILESIZE, -(thingPos[2] * this.utils.TILESIZE), filterName);

          if (this.mapInfo.stuffGrid[i].def != "WoodLog" && //Dont color sprites that are pre-colored
          this.mapInfo.stuffGrid[i].def != "Steel" && this.mapInfo.stuffGrid[i].def != "Plasteel" && this.mapInfo.stuffGrid[i].def != "Jade" && this.mapInfo.stuffGrid[i].def != "Silver" && this.mapInfo.stuffGrid[i].def != "Gold" && this.mapInfo.stuffGrid[i].def != "Uranium") {

            thingSprite = this.utils.colorSprite(thingSprite, this.mapInfo.stuffGrid[i]);
            //x_Meat does not change color depending on animal so just color it all
            if (filterName == "Meat") {
              thingSprite.tint = this.utils.MEAT;
            }
          }

          //Rotate the thing correctly
          thingSprite.scale.setTo(this.utils.SCALESIZE);

          thingSprite = this.utils.thingAlign(thingSprite, this.mapInfo.stuffGrid[i]);
          //IF MINIFIED
          if (this.mapInfo.stuffGrid[i].def == "MinifiedThing" || this.mapInfo.stuffGrid[i].def == "MinifiedFurniture" || this.mapInfo.stuffGrid[i].def == "MinifiedSculpture") {

            if (this.mapInfo.stuffGrid[i].innerContainer.innerList.li.def) {
              var innerThingName = this.utils.getStuffName(this.mapInfo.stuffGrid[i].innerContainer.innerList.li.def);

              var innerThingSprite = this.game.add.sprite(thingPos[0] * this.utils.TILESIZE, -(thingPos[2] * this.utils.TILESIZE), innerThingName);

              innerThingSprite.height = this.utils.TILESIZE;
              innerThingSprite.width = this.utils.TILESIZE;

              innerThingSprite = this.utils.colorSprite(innerThingSprite, this.mapInfo.stuffGrid[i].innerContainer.innerList.li);
              //innerThingSprite.scale.setTo(this.utils.SCALESIZE);
              innerThingSprite = this.utils.thingAlign(innerThingSprite, this.mapInfo.stuffGrid[i]);

              this.stuffGridLayer.add(innerThingSprite);
            }
          }
          //IF GROWTH
          if (this.mapInfo.stuffGrid[i].growth) {
            if (this.mapInfo.stuffGrid[i].growth <= 0.1) {
              thingSprite.destroy();
            } else {
              thingSprite.scale.setTo(this.mapInfo.stuffGrid[i].growth * this.utils.SCALESIZE);
            }
          }

          if (this.mapInfo.stuffGrid[i].def == "Human") {
            console.log(this.mapInfo.stuffGrid[i].faction);
          }

          if (thingSprite) {
            this.stuffGridLayer.add(thingSprite);
            if (this.mapInfo.stuffGrid[i].def == "SteamGeyser" || this.mapInfo.stuffGrid[i].def == "Shelf" || this.mapInfo.stuffGrid[i].def == "PlantPot" || this.mapInfo.stuffGrid[i].def == "HydroponicsBasin") {
              this.stuffGridLayer.sendToBack(thingSprite);
            }
          }
        } //printsprite
      } //End for Loop
    }
  }, {
    key: "renderResourceTileMap",
    value: function renderResourceTileMap() {

      var masterIndex = 0;
      var resourceSprite = null;
      var resourceTint = null;
      var resourceGraphic = null;

      for (var i = 0; i < this.worldSize.x; i++) {
        for (var j = 0; j < this.worldSize.y; j++) {
          if (this.mapInfo.resourceRefGrid[masterIndex] > 0) {
            resourceSprite = null;
            resourceTint = null;
            resourceGraphic = null;

            switch (this.mapInfo.resourceRefGrid[masterIndex]) {
              case 78:
                //Marble chunk
                resourceGraphic = "chunk";
                resourceTint = this.utils.MARBLE;
                break;
              case 119:
                //Limestone chunk
                resourceGraphic = "chunk";
                resourceTint = this.utils.LIMESTONE;
                break;
              case 252:
                //Granite chunk
                resourceGraphic = "chunk";
                resourceTint = this.utils.GRANITE;
                break;
              case 102:
                //Slate chunk
                resourceGraphic = "chunk";
                resourceTint = this.utils.SLATE;
                break;
              case 47:
                //Sandstone chunk
                resourceGraphic = "chunk";
                resourceTint = this.utils.SANDSTONE;
                break;
              case 241:
                //Metal Chunk
                resourceGraphic = "slag";
                break;
              case 17:
                //Plasteel
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.PLASTEEL;
                break;
              case 93:
              case 56:
                //compactmach
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.COMPONENTS;
                break;
              case 157:
              case 156:
                //Steel
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.STEEL;
                break;
              case 103:
                //Uruianum
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.URANIUM;
                break;
              case 229:
                //GOLD
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.GOLD;
                break;
              case 194:
                // Sliver
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.SILVER;
                break;
              case 127:
                // Jade
                resourceGraphic = 'resourceTint';
                resourceTint = this.utils.JADE;
                break;
            }

            if (resourceGraphic) {
              resourceSprite = this.game.add.sprite(j * this.utils.TILESIZE, -((i + 1) * this.utils.TILESIZE), resourceGraphic);
              resourceSprite.scale.setTo(this.utils.SCALESIZE);
              if (resourceTint) {
                resourceSprite.tint = resourceTint;
              }
              this.resourceGridLayer.add(resourceSprite);
            }
          }
          masterIndex++;
        }
      }
    }
  }, {
    key: "renderDeepResourceTileMap",
    value: function renderDeepResourceTileMap() {

      var masterIndex = 0;
      var deepResourceSprite = null;
      for (var i = 0; i < this.worldSize.x; i++) {
        for (var j = 0; j < this.worldSize.y; j++) {
          if (this.mapInfo.deepResourceGrid[masterIndex] > 0) {
            deepResourceSprite = this.game.add.sprite(j * this.utils.TILESIZE, -((i + 1) * this.utils.TILESIZE), 'resourceTint');
            deepResourceSprite.scale.setTo(this.utils.SCALESIZE);

            switch (this.mapInfo.deepResourceGrid[masterIndex]) {
              case 243:
                //Plasteel
                deepResourceSprite.tint = this.utils.PLASTEEL;
                break;
              case 97:
                //Chemfuel
                deepResourceSprite.tint = 0x00ff00;
                break;
              case 251:
                //Steel
                deepResourceSprite.tint = this.utils.STEEL;
                break;
              case 160:
                //Uruianum
                deepResourceSprite.tint = this.utils.URANIUM;
                break;
              case 125:
                //GOLD
                deepResourceSprite.tint = this.utils.GOLD;
                break;
              case 80:
                // Sliver
                deepResourceSprite.tint = this.utils.SILVER;
                break;
              case 22:
                // Jade
                deepResourceSprite.tint = this.utils.JADE;
                break;
              default:
                deepResourceSprite.tint = 0x00ff00;
            }

            this.deepResourceGridLayer.add(deepResourceSprite);
          }
          masterIndex++;
        }
      }
    }
  }, {
    key: "renderSnowTileMap",
    value: function renderSnowTileMap() {

      var masterIndex = 0;
      var snowSprite = null;
      for (var i = 0; i < this.worldSize.x; i++) {
        for (var j = 0; j < this.worldSize.y; j++) {
          if (this.mapInfo.snowGridLayer[masterIndex] > 0) {
            snowSprite = this.game.add.sprite(j * this.utils.TILESIZE, -((i + 1) * this.utils.TILESIZE), 'resourceTint');
            snowSprite.scale.setTo(this.utils.SCALESIZE);
            snowSprite.tint = 0xffffff;
            this.deepResourceGridLayer.add(snowSprite);
          }
          masterIndex++;
        }
      }
    }
  }, {
    key: "renderPlanning",
    value: function renderPlanning() {

      var planPos = null;
      var planSprite = null;

      for (var i = this.mapInfo.planningGrid.length - 1; i > 0; i--) {
        planPos = this.utils.getPosition(this.mapInfo.planningGrid[i].target);
        planSprite = this.game.add.sprite(planPos[0] * this.utils.TILESIZE, -(planPos[2] * this.utils.TILESIZE), "Plan");
        planSprite.tint = 0xffffff;
        planSprite.scale.setTo(this.utils.SCALESIZE);
        this.planningLayer.add(planSprite);
      }
    }
  }, {
    key: "renderWalls",
    value: function renderWalls() {
      var walls = [];
      var sandbags = [];

      var wallSprite = null;
      var sandbagSprite = null;

      var thingPos = null;
      //BUILD EMPTY WALL ARRAY
      for (var i = 0; i < this.worldSize.x; i++) {
        if (!this.mapInfo.stuffRefGrid[i]) {
          this.mapInfo.stuffRefGrid[i] = [];
          walls[i] = [];
          sandbags[i] = [];
        }
        for (var j = 0; j < this.worldSize.y; j++) {
          this.mapInfo.stuffRefGrid[i][j] = [];
          walls[i][j] = 0;
          sandbags[i][j] = 0;
        }
      }

      for (var _i = 0; _i < this.mapInfo.stuffGrid.length; _i++) {
        thingPos = this.utils.getPosition(this.mapInfo.stuffGrid[_i].pos);
        this.mapInfo.stuffRefGrid[thingPos[0]][thingPos[2]].push(this.mapInfo.stuffGrid[_i]);
        if (this.utils.isWall(this.mapInfo.stuffGrid[_i].def)) {
          walls[thingPos[0]][thingPos[2]] = 1;
        } else if (this.mapInfo.stuffGrid[_i].def == "Sandbags") {
          sandbags[thingPos[0]][thingPos[2]] = 1;
        }
      }

      for (var _i2 = this.mapInfo.stuffGrid.length - 1; _i2 > 0; _i2--) {
        thingPos = this.utils.getPosition(this.mapInfo.stuffGrid[_i2].pos);
        if (this.utils.isWall(this.mapInfo.stuffGrid[_i2].def)) {
          var chunk = [];
          var direction = null;
          var wallStuff = null;

          if (walls[thingPos[0] + 1]) {
            chunk = [[0, walls[thingPos[0]][thingPos[2] + 1], 0], [walls[thingPos[0] - 1][thingPos[2]], 1, walls[thingPos[0] + 1][thingPos[2]]], [0, walls[thingPos[0]][thingPos[2] - 1], 0]];
          }

          switch (this.mapInfo.stuffGrid[_i2].stuff) {
            case "BlocksGranite":
            case "BlocksSlate":
            case "BlocksMarble":
            case "BlocksLimestone":
            case "BlocksSandstone":
              wallStuff = "brickWallTiles";
              break;
            case "WoodLog":
              wallStuff = "woodWallTiles";
              break;
            default:
              wallStuff = "wallTiles";
          }

          direction = this.utils.matchWall(chunk);
          wallSprite = this.game.add.sprite(thingPos[0] * this.utils.TILESIZE, -(thingPos[2] * this.utils.TILESIZE), wallStuff, direction);
          wallSprite = this.utils.colorSprite(wallSprite, this.mapInfo.stuffGrid[_i2]);
          wallSprite.scale.setTo(this.utils.SCALESIZE);
          wallSprite.anchor.setTo(0.1, 0.9);
          this.stuffGridLayer.add(wallSprite);
        } else if (this.mapInfo.stuffGrid[_i2].def == "Sandbags") {
          var _chunk = [];
          var _direction = null;
          if (sandbags[thingPos[0] + 1]) {
            _chunk = [[0, sandbags[thingPos[0]][thingPos[2] + 1], 0], [sandbags[thingPos[0] - 1][thingPos[2]], 1, sandbags[thingPos[0] + 1][thingPos[2]]], [0, sandbags[thingPos[0]][thingPos[2] - 1], 0]];
          }
          _direction = this.utils.matchWall(_chunk);
          sandbagSprite = this.game.add.sprite(thingPos[0] * this.utils.TILESIZE, -(thingPos[2] * this.utils.TILESIZE), 'sandbagTiles', _direction);
          sandbagSprite.tint = this.utils.SAND;
          sandbagSprite.scale.setTo(this.utils.SCALESIZE);
          sandbagSprite.anchor.setTo(0.1, 0.9);
          this.stuffGridLayer.add(sandbagSprite);
        } //End Wall Sandbag elseif
      } //End For
    }
  }, {
    key: "renderMountain",
    value: function renderMountain() {
      //IF WALL CHOOSE WALL SPRITE
      var chunk = [];
      var masterIndex = 0;
      var rockSprite = void 0;
      var rockTint = void 0;

      for (var i = 0; i < this.worldSize.x; i++) {
        for (var j = 0; j < this.worldSize.y; j++) {
          if (this.mapInfo.resourceRefGrid[masterIndex] > 0) {
            switch (this.mapInfo.resourceRefGrid[masterIndex]) {
              case 78: //Marble chunk
              case 119: //Limestone chunk
              case 252: //Granite chunk
              case 102: //Slate chunk
              case 47: //Sandstone chunk
              case 241:
                //Metal Chunk
                this.rockGrid[i][j] = 0; //Ignore Rock chunks
                break;
              default:
                this.rockGrid[i][j] = 1;
            }
          }
          masterIndex++;
        }
      }
      masterIndex = 0;
      var direction = null;
      var rockTintSprite = null;

      for (var _i3 = 0; _i3 < this.worldSize.x; _i3++) {
        for (var _j = 0; _j < this.worldSize.y; _j++) {
          if (this.rockGrid[_i3][_j] == 1) {
            if (this.rockGrid[_i3 - 1] && this.rockGrid[_j - 1] && this.rockGrid[_i3 + 1] && this.rockGrid[_j + 1]) {
              chunk = [[0, this.rockGrid[_i3 + 1][_j], 0], [this.rockGrid[_i3][_j - 1], 1, this.rockGrid[_i3][_j + 1]], [0, this.rockGrid[_i3 - 1][_j], 0]];
              direction = this.utils.matchWall(chunk);
            } else {
              direction = null;
            }

            //Decide color here
            if (direction != null) {
              rockSprite = this.game.add.sprite(_j * this.utils.TILESIZE, -(_i3 * this.utils.TILESIZE), 'rockTiles', direction);

              rockSprite.anchor.setTo(0.1, 0.9);
              switch (this.mapInfo.resourceRefGrid[masterIndex]) {//USE TERRAIN
                case 67:
                  rockSprite.tint = this.utils.SANDSTONE;
                  break;
                case 197:
                  rockSprite.tint = this.utils.SLATE;
                  break;
                case 84:
                  rockSprite.tint = this.utils.GRANITE;
                  break;
                case 212:
                  rockSprite.tint = this.utils.MARBLE;
                  break;
                case 139:
                case 138:
                  rockSprite.tint = this.utils.LIMESTONE;
                  break;
                case 93:
                case 56:
                  rockSprite.tint = this.utils.COMPONENTS;
                  break;
                case 229:
                  rockSprite.tint = this.utils.GOLD;
                  break;
                case 103:
                  rockSprite.tint = this.utils.URANIUM;
                  break;
                case 157:
                case 156:
                  rockSprite.tint = this.utils.STEEL;
                  break;
                case 127:
                  rockSprite.tint = this.utils.JADE;
                  break;
                case 194:
                  rockSprite.tint = this.utils.SILVER;
                  break;
              }
              rockSprite.scale.setTo(this.utils.SCALESIZE);
              this.rocksGridLayer.add(rockSprite);
            }
            //Tint all rock tiles and add to mountain group
            rockTint = null;
            rockTint = this.game.add.sprite(_j * this.utils.TILESIZE, -((_i3 + 1) * this.utils.TILESIZE), 'rockTint');
            //this has a weird problem
            rockTint.scale.setTo(this.utils.SCALESIZE);
            this.mountainsLayer.add(rockTint);
          }
          masterIndex++;
        }
      }
    }
  }, {
    key: "hideStuff",
    value: function hideStuff() {
      this.stuffLayer.alpha = 0;
    }
  }, {
    key: "showStuff",
    value: function showStuff() {
      this.stuffLayer.alpha = 1;
    }
  }, {
    key: "hideResources",
    value: function hideResources() {
      this.resourceLayer.alpha = 0;
      this.loadingFinished = true;
    }
  }, {
    key: "showResources",
    value: function showResources() {
      var _this3 = this;

      this.loadingFinished = false;
      if (!this.resourceLayer) {
        var oldCam = {
          x: this.game.camera.x,
          y: this.game.camera.y
        };
        this.game.camera.x = 0;
        this.game.camera.y = 0;
        setTimeout(function () {
          _this3.renderResourceTileMap();
          _this3.resourceLayer = _this3.renderBitmap(_this3.resourceGridLayer, true);
          _this3.resourceLayer.scale.set(1 / _this3.zoomLevel);
          setTimeout(function () {
            _this3.game.camera.x = oldCam.x;
            _this3.game.camera.y = oldCam.y;
            _this3.loadingFinished = true;
          }, 500);
        }, 500);
      } else {
        this.resourceLayer.alpha = 1;
        this.loadingFinished = true;
      }
    }
  }, {
    key: "hideDeepResources",
    value: function hideDeepResources() {
      this.deepResourceLayer.alpha = 0;
      this.loadingFinished = true;
    }
  }, {
    key: "showDeepResources",
    value: function showDeepResources() {
      var _this4 = this;

      this.loadingFinished = false;
      if (!this.deepResourceLayer) {
        var oldCam = {
          x: this.game.camera.x,
          y: this.game.camera.y
        };
        this.game.camera.x = 0;
        this.game.camera.y = 0;
        setTimeout(function () {
          _this4.renderDeepResourceTileMap();
          //this.renderSnowTileMap();
          _this4.deepResourceLayer = _this4.renderBitmap(_this4.deepResourceGridLayer, true);
          _this4.deepResourceLayer.scale.set(1 / _this4.zoomLevel);
          setTimeout(function () {
            _this4.game.camera.x = oldCam.x;
            _this4.game.camera.y = oldCam.y;
            _this4.loadingFinished = true;
          }, 500);
        }, 500);
      } else {
        this.deepResourceLayer.alpha = 1;
        this.loadingFinished = true;
      }
    }
  }, {
    key: "hideMountains",
    value: function hideMountains() {
      this.rocksLayer.alpha = 0;
    }
  }, {
    key: "showMountains",
    value: function showMountains() {
      this.rocksLayer.alpha = 1;
    }
  }, {
    key: "showPlanning",
    value: function showPlanning() {
      var _this5 = this;

      this.loadingFinished = false;
      if (!this.planningLayer) {
        var oldCam = {
          x: this.game.camera.x,
          y: this.game.camera.y
        };
        this.game.camera.x = 0;
        this.game.camera.y = 0;
        setTimeout(function () {
          _this5.renderPlanning();
          _this5.planningLayer = _this5.renderBitmap(_this5.planningLayer, true);
          _this5.planningLayer.scale.set(1 / _this5.zoomLevel);
          setTimeout(function () {
            _this5.game.camera.x = oldCam.x;
            _this5.game.camera.y = oldCam.y;
            _this5.loadingFinished = true;
          }, 500);
        }, 500);
      } else {
        this.planningLayer.alpha = 1;
        this.loadingFinished = true;
      }
    }
  }, {
    key: "hidePlanning",
    value: function hidePlanning() {
      this.planningLayer.alpha = 0;
      this.loadingFinished = true;
    }
  }, {
    key: "scaleMap",
    value: function scaleMap(scale) {

      this.marker.scale.setTo(scale);

      if (this.topTerrainGridLayer) {
        this.topTerrainGridLayer.setScale(scale, scale);
        this.topTerrainGridLayer.resize(this.game.width / scale, this.game.height / scale);
        this.topTerrainGridLayer.resizeWorld();
      } else {
        this.terrainLayer.scale.set(scale);
      }

      this.stuffLayer.scale.set(scale);

      this.zoomLevel = 1 / scale;

      if (this.rocksLayer) {
        this.rocksLayer.scale.set(scale);
      }
      if (this.resourceLayer) {
        this.resourceLayer.scale.set(scale);
      }
      if (this.deepResourceLayer) {
        this.deepResourceLayer.scale.set(scale);
      }
      if (this.planningLayer) {
        this.planningLayer.scale.set(scale);
      }
    }
  }, {
    key: "zoomMap",
    value: function zoomMap(iZoom) {

      this.zoomLevel = iZoom;

      this.stuffLayer.scale.set(1 / this.zoomLevel);

      if (this.rocksLayer) {
        this.rocksLayer.scale.set(1 / this.zoomLevel);
      }
      if (this.resourceLayer) {
        this.resourceLayer.scale.set(1 / this.zoomLevel);
      }
      if (this.deepResourceLayer) {
        this.deepResourceLayer.scale.set(1 / this.zoomLevel);
      }
      if (this.planningLayer) {
        this.planningLayer.scale.set(1 / this.zoomLevel);
      }
      this.marker.scale.setTo(1 / this.zoomLevel);

      if (this.topTerrainGridLayer) {
        this.topTerrainGridLayer.setScale(1 / this.zoomLevel, 1 / this.zoomLevel);
        this.topTerrainGridLayer.resize(this.game.width * this.zoomLevel, this.game.height * this.zoomLevel);
        this.topTerrainGridLayer.resizeWorld();
      } else {
        this.terrainLayer.scale.set(1 / this.zoomLevel);
      }
    }
  }, {
    key: "markerInit",
    value: function markerInit() {
      this.marker = this.game.add.graphics();
      this.marker.lineStyle(2, 0xFF4444, 1);
      this.marker.drawRect(0, 0, this.utils.TILESIZE, this.utils.TILESIZE);
    }
  }, {
    key: "getTileProperties",
    value: function getTileProperties() {

      this.currentTile = {
        "terrainTile": null,
        "resourceTile": null,
        "deepResourceTile": null,
        "stuffTile": null, //count manage
        "totalHealth": 0,
        "currentHealth": 0
      };
      var x = 0;
      var y = 0;
      var flippedY = 0;
      var terrainTile = null;
      if (this.topTerrainGridLayer) {
        x = this.topTerrainGridLayer.getTileX(this.game.input.activePointer.worldX * this.zoomLevel); // 4 * ZOOM
        y = this.topTerrainGridLayer.getTileY(this.game.input.activePointer.worldY * this.zoomLevel);
        flippedY = Math.abs(y - this.worldSize.y);
        flippedY = flippedY - 1;
        terrainTile = this.topTerrainGridLayer.map.getTile(x, y, this.topTerrainGridLayer);
      } else {
        x = Phaser.Math.snapTo(this.game.input.activePointer.worldX - this.utils.TILESIZE / 2 / this.zoomLevel, this.utils.TILESIZE / this.zoomLevel);
        y = Phaser.Math.snapTo(this.game.input.activePointer.worldY - this.utils.TILESIZE / 2 / this.zoomLevel, this.utils.TILESIZE / this.zoomLevel);

        x = Math.round(x / this.utils.TILESIZE * this.zoomLevel);
        y = Math.round(y / this.utils.TILESIZE * this.zoomLevel);

        flippedY = Math.abs(y - this.worldSize.y);
        flippedY = flippedY - 1;
        terrainTile = this.mapInfo.topTerrainGrid[flippedY * this.worldSize.y + x];
        //console.log(terrainTile + " - " + this.mapInfo.topTerrainGrid[flippedY * this.worldSize.y + x]);
      }
      var stuffTile = null;
      var resourceTile = null;
      var deepResourceTile = null;

      if (x >= 0 && x <= this.worldSize.x && y >= 0 && y <= this.worldSize.y) {
        stuffTile = this.mapInfo.stuffRefGrid[x][flippedY];
        resourceTile = this.mapInfo.resourceRefGrid[flippedY * this.worldSize.y + x];
        deepResourceTile = this.mapInfo.deepResourceGrid[flippedY * this.worldSize.y + x];
      }

      if (terrainTile != null) {
        if (this.topTerrainGridLayer) {
          this.currentTile.terrainTile = this.utils.getTerrainName(terrainTile.index + 1) + " - " + (terrainTile.index + 1);
        } else {
          this.currentTile.terrainTile = this.utils.getTerrainName(terrainTile + 1) + " - " + (terrainTile + 1);
        }
      }
      if (stuffTile) {
        this.oldStuffTile = stuffTile;

        if (stuffTile[0]) {
          console.log(stuffTile);

          this.clickDepth = stuffTile.length;

          if (stuffTile != this.oldStuffTile) {
            this.clickIndex = 0;
          } else if (this.clickIndex < this.clickDepth - 1) {
            this.clickIndex++;
          } else {
            this.clickIndex = 0;
          }
          if (stuffTile[this.clickIndex]) {
            var stuffMaterial = stuffTile[this.clickIndex].stuff;
            var stuffName = stuffTile[this.clickIndex].def;
            var stuffHealth = stuffTile[this.clickIndex].health;
            var stuffStack = stuffTile[this.clickIndex].stackCount;
            this.currentTile.stuffTile = (stuffMaterial ? stuffMaterial + " " : "") + stuffName + (stuffStack ? " x" + stuffStack : "") + (stuffHealth ? " (" + stuffHealth + " HP)" : "");
          }
        }
      }
      if (resourceTile) {
        this.currentTile.resourceTile = this.utils.getResourceName(resourceTile) + " - " + resourceTile;
      }
      if (deepResourceTile) {
        this.currentTile.deepResourceTile = this.utils.getDeepResourceName(deepResourceTile) + " x" + this.mapInfo.deepResourceCount[(flippedY - 1) * this.worldSize.y + x] + " - " + deepResourceTile;
      }
    }
  }, {
    key: "isMouseOut",
    value: function isMouseOut() {

      if (this.topTerrainGridLayer) {
        if (this.topTerrainGridLayer.getTileX(this.game.input.activePointer.worldX * this.zoomLevel) >= 0 && this.topTerrainGridLayer.getTileX(this.game.input.activePointer.worldX * this.zoomLevel) < this.worldSize.x && this.topTerrainGridLayer.getTileY(this.game.input.activePointer.worldY * this.zoomLevel) >= 0 && this.topTerrainGridLayer.getTileY(this.game.input.activePointer.worldY * this.zoomLevel) < this.worldSize.y) {
          return true;
        } else {
          return false;
        }
      } else {
        var x = Math.round(this.game.input.activePointer.worldX / this.utils.TILESIZE * this.zoomLevel);
        var y = Math.round(this.game.input.activePointer.worldY / this.utils.TILESIZE * this.zoomLevel);
        var flippedY = Math.abs(y - this.worldSize.y);
        if (x >= 0 && x < this.worldSize.x && y >= 0 && y < this.worldSize.y) {
          return true;
        } else {
          return false;
        }
      }
    }
  }]);

  return GameState;
}(Phaser.State);

exports.default = GameState;

},{"utils/Utils":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preload = function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload() {
      //  Set-up our preloader sprite
      var preloadBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadBg');
      preloadBg.anchor.setTo(0.5);

      this.preloadBar = this.add.sprite(this.game.world.centerX - 256, this.game.world.centerY, 'preloadBar');
      this.load.setPreloadSprite(this.preloadBar);

      this.preloadBar.anchor.setTo(0, 0.5);

      this.game.load.spritesheet('wallTiles', 'assets/vanilla/WallTilemap.png', 80, 80, 16);
      this.game.load.spritesheet('brickWallTiles', 'assets/vanilla/BrickTileMap.png', 80, 80, 16);
      this.game.load.spritesheet('woodWallTiles', 'assets/vanilla/WoodTilemap.png', 80, 80, 16);
      this.game.load.spritesheet('rockTiles', 'assets/vanilla/Rock_Atlas.png', 80, 80, 16);
      this.game.load.spritesheet('sandbagTiles', 'assets/vanilla/Sandbags_Atlas.png', 80, 80, 16);
      this.game.load.image('chunk', 'assets/vanilla/RockLowA.png');
      this.game.load.image('slag', 'assets/vanilla/MetalDebrisA.png');

      this.game.load.image('Plan', 'assets/Plan.png');
      this.game.load.image('rockTint', 'assets/rockTint.png');
      this.game.load.image('resourceTint', 'assets/resourceTint.png');

      this.game.load.script('pako', 'assets/pako.min.js');
      this.game.load.script('base64js', 'assets/base64js.min.js');

      //new AssetLoader(this.game, this.game.cache.getJSON("assets"));
    }
  }, {
    key: 'create',
    value: function create() {
      var tween = this.add.tween(this.preloadBar).to({
        alpha: 0
      }, 1000, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(this.startMainMenu, this);
    }
  }, {
    key: 'startMainMenu',
    value: function startMainMenu() {
      this.game.state.start('DynamicLoad');
    }
  }]);

  return Preload;
}(Phaser.State);

exports.default = Preload;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PreloadAssets = function (_Phaser$State) {
  _inherits(PreloadAssets, _Phaser$State);

  function PreloadAssets() {
    _classCallCheck(this, PreloadAssets);

    return _possibleConstructorReturn(this, (PreloadAssets.__proto__ || Object.getPrototypeOf(PreloadAssets)).apply(this, arguments));
  }

  _createClass(PreloadAssets, [{
    key: 'init',
    value: function init(assets, json) {
      this.toLoadJson = assets;
      this.json = json;
    }
  }, {
    key: 'preload',
    value: function preload() {
      //  Set-up our preloader sprite
      var preloadBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadBg');
      preloadBg.anchor.setTo(0.5);

      this.preloadBar = this.add.sprite(this.game.world.centerX - 256, this.game.world.centerY, 'preloadBar');
      this.load.setPreloadSprite(this.preloadBar);

      this.preloadBar.anchor.setTo(0, 0.5);

      this.text = this.game.add.text(256, this.game.world.centerY + 64, 'Click to start load', { font: "normal 18px Arial", align: 'left', fill: '#ffffff' });

      if (this.game.hd == false) {
        this.game.load.image('tiles', 'assets/ShiftTilemap16.bmp');
        this.game.load.spritesheet('tileMap', 'assets/ShiftTilemap16.bmp', 16, 16);
      } else {
        this.game.load.image('tiles', 'assets/ShiftTilemap32.bmp');
        this.game.load.spritesheet('tileMap', 'assets/ShiftTilemap32.bmp', 32, 32);
      }

      new AssetLoader(this.game, this.toLoadJson);

      this.game.load.onFileComplete.add(this.fileComplete, this);
      this.game.load.onLoadComplete.add(this.onLoadComplete, this);

      this.game.time.advancedTiming = true;
      this.game.antialias = false;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
    }
  }, {
    key: 'create',
    value: function create() {
      var tween = this.add.tween(this.preloadBar).to({
        alpha: 0
      }, 250, Phaser.Easing.Linear.None, true);
      //tween.onComplete.add(this.startMainRender, this);
    }
  }, {
    key: 'fileComplete',
    value: function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
      this.text.setText("Downloading assets: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    }
  }, {
    key: 'onLoadComplete',
    value: function onLoadComplete() {
      this.text.setText("Downloaded all assets! Start rendering...");
      this.game.json = this.json;
      this.game.state.start('GameState');
    }
  }]);

  return PreloadAssets;
}(Phaser.State);

exports.default = PreloadAssets;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Utils = function () {
  function Utils(game) {
    _classCallCheck(this, Utils);

    this.game = game;
    this.worldSize = {
      x: 0,
      y: 0,
      z: 0
    };

    if (this.game.hd == false) {
      this.TILESIZE = 16; //default
      this.SCALESIZE = 0.25;
    } else {
      this.TILESIZE = 32; //orginal 64, cut in half to save memory.
      this.SCALESIZE = 0.5;
    }

    this.GRANITE = 0x635e5b;
    this.LIMESTONE = 0x5f5c44;
    this.SANDSTONE = 0x756157;
    this.MARBLE = 0x777877;
    this.SLATE = 0x3a3a39;
    this.SAND = 0x998864;

    this.WOOD = 0xBF6C2A;
    this.STEEL = 0xb7b7b7;
    this.PLASTEEL = 0x7bafae;
    this.COMPONENTS = 0x755808;
    this.GOLD = 0xD0B703;
    this.SILVER = 0x939086;
    this.URANIUM = 0x727272;
    this.JADE = 0x438347;

    this.ALPACA = 0xedd8ae;
    this.ALPHABEAVER = 0x735348;
    this.FOXARCTIC = 0xc8c8c8;
    this.WOLFARCTIC = 0xc8c8c8;
    this.BOOMALOPE = 0xb0966a;
    this.BOOMRAT = 0x73251c;
    this.CAPYBARA = 0xb97d4f;
    this.CARIBOU = 0xad634d;
    this.CASSOWARY = 0x505050;
    this.CAT = 0xbdab9f;
    this.CHICKEN = 0xc89655;
    this.CAMEL = 0xb7a23a;
    this.CHINCHILLA = 0xb2aa9e;
    this.COBRA = 0x716257;
    this.COUGAR = 0xb18870;
    this.COW = 0xc9c9c9;
    this.DEER = 0xa26a39;
    this.DROMEDARY = 0xccb496;
    this.ELEPHANT = 0x827e77;
    this.ELK = 0xa26a39;
    this.EMU = 0x7a6d63;
    this.FOXFENNEC = 0xc5a167;
    this.GAZELLE = 0xd6863b;
    this.GRIZZLYBEAR = 0x705241;
    this.HARE = 0x83806c;
    this.HUMAN = 0xd3c28f;
    this.HUSKY = 0x898585;
    this.IBEX = 0x998171;
    this.IGUANA = 0x65743a;
    this.LABRADORRETRIEVER = 0xdcc6a0;
    this.LYNX = 0xad9b8a;
    this.MEGASCARAB = 0x726b54;
    this.MEGASLOTH = 0xbda174;
    this.MEGASPIDER = 0x9a7d5e;
    this.MONKEY = 0x7c351d;
    this.MUFFALO = 0x98aaae;
    this.OSTRICH = 0x4c5363;
    this.PANTHER = 0x3c3c3c;
    this.PIG = 0xae967e;
    this.POLARBEAR = 0xb4b4b4;
    this.RACCOON = 0xaeacae;
    this.RAT = 0x6e5f52;
    this.FOXRED = 0xb26422;
    this.RHINOCEROS = 0x969696;
    this.SNOWHARE = 0xb4b4b4;
    this.SPELOPEDE = 0x9c947d;
    this.SQUIRREL = 0x8c5524;
    this.THRUMBO = 0xe9e9e9;
    this.WOLFTIMBER = 0x736e64;
    this.TORTOISE = 0x474f31;
    this.TURKEY = 0x505050;
    this.WARG = 0x7b6859;
    this.WILDBOAR = 0xae967e;
    this.YORKSHIRETERRIER = 0xd1a827;

    this.LEATHER = 0xa26a39;
    this.SYNTHREAD = 0xb0e5de;

    this.MEAT = 0xB03030;

    this.DEVILSTRAND = 0x8c1d10;
    this.CLOTH = 0xc3c0b0;
  }

  _createClass(Utils, [{
    key: 'getStuffName',
    value: function getStuffName(stuff) {
      var regex = new RegExp('\_(.*)'); /// after _
      var preRegex = new RegExp('^(.+?)_'); /// before _
      var outputName = null;
      if (regex.exec(stuff)) {
        if (preRegex.exec(stuff)[1] == "Shell" || preRegex.exec(stuff)[1] == "TrapIED") {
          outputName = stuff;
        } else if (preRegex.exec(stuff)[1] == "Plant") {
          //VERSION 0.19
          outputName = preRegex.exec(stuff)[1] + regex.exec(stuff)[1];
        } else if (preRegex.exec(stuff)[1] == "Filth" || preRegex.exec(stuff)[1] == "Dirt" || preRegex.exec(stuff)[1] == "Blood" || preRegex.exec(stuff)[1] == "Leather" || preRegex.exec(stuff)[1] == "Blueprint" || preRegex.exec(stuff)[1] == "Install" || preRegex.exec(stuff)[1] == "Frame" || preRegex.exec(stuff)[1] == "Meat") {
          outputName = preRegex.exec(stuff)[1];
        } else {
          outputName = regex.exec(stuff)[1];
        }
      } else {
        outputName = stuff;
      }
      return outputName;
    }
  }, {
    key: 'getTerrainName',
    value: function getTerrainName(id) {
      var output = null;
      switch (id) {
        case 1:
          //Concrete
          output = "Concrete";
          break;
        case 2:
          //Paved
          output = "Paved";
          break;
        case 3:
          //Wood
          output = "Wood Floor";
          break;
        case 4:
          //metal //IF UNDER
          output = "Metal";
          break;
        case 5:
          //silver //IF UNDER
          output = "Silver";
          break;
        case 6:
          //gold  //IF UNDER
          output = "Gold";
          break;
        case 7:
          //sterile //If under
          output = "Sterile";
          break;
        case 8:
          //red
          output = "Red Carpet";
          break;
        case 9:
          //green
          output = "Green Carpet";
          break;
        case 10:
          //blue
          output = "Blue Carpet";
          break;
        case 11:
          //cream
          output = "Cream Carpet";
          break;
        case 12:
          //dark
          output = "Dark Carpet";
          break;
        case 13:
          //burned wood
          output = "Burned Wood Floor";
          break;
        case 14:
          //burned carpet
          output = "Burned Carpet";
          break;
        case 15:
          //sandstone tile
          output = "Sandstone Tile";
          break;
        case 16:
          //granite tile
          output = "Granite Tile";
          break;
        case 17:
          //limestone tile
          output = "Limestone Tile";
          break;
        case 18:
          //slate tile
          output = "Slate Tile";
          break;
        case 19:
          //Marble tile
          output = "Marble Tile";
          break;
        case 20:
          //Sandstone flag
          output = "Sandstone Flagstone";
          break;
        case 21:
          //Granite flag
          output = "Granite Flagstone";
          break;
        case 22:
          //Limestone flag
          output = "Limestone Flagstone";
          break;
        case 23:
          //Slate flag
          output = "Slate Flagstone";
          break;
        case 24:
          //Marble flagstone
          output = "Marble Flagstone";
          break;
        case 25:
          //sand
          output = "Sand";
          break;
        case 26:
          //soil
          output = "Soil";
          break;
        case 27:
          //marshy soil
          output = "Marshy Soil";
          break;
        case 28:
          // rich soil
          output = "Rich Soil";
          break;
        case 29:
          //mud
          output = "Mud";
          break;
        case 30:
          //marsh
          output = "Marsh";
          break;
        case 31:
          //gravel
          output = "Gravel";
          break;
        case 32:
          //lichen covered
          output = "Lichen Covered Dirt";
          break;
        case 33:
          //ice
          output = "Ice";
          break;
        case 34:
          //broken asphalt
          output = "Broken Asphalt";
          break;
        case 35:
          // packed dirt
          output = "Packed Dirt";
          break;
        case 36:
          //underwall
          output = "Underwall";
          break;
        case 37:
          //deep water
          output = "Deep Water";
          break;
        case 38:
          //moving deep water
          output = "Moving Deep Water";
          break;
        case 39:
          //shallow water
          output = "Shallow Water";
          break;
        case 40:
          //shallow ocean
          output = "Shallow Ocean";
          break;
        case 40:
          //shallow moving water
          output = "Shallow Moving Water";
          break;
        case 41:
          //rough sandstone
          output = "Rough Sandstone";
          break;
        case 42:
          // rough hewn sandstone
          output = "Rough Hewn Sandstone";
          break;
        case 43:
          //smooth sandstone
          output = "Smooth Sandstone";
          break;
        case 44:
          // rough granite
          output = "Rough Granite";
          break;
        case 45:
          // rough hewn granite
          output = "Rough Hewn Granite";
          break;
        case 46:
          //smooth granite
          output = "Smooth Granite";
          break;
        case 47:
          //rough limestone
          output = "Rough Limestone";
          break;
        case 48:
          // rought hewn limestone
          output = "Rough Hewn Limestone";
          break;
        case 49:
          //smooth limestone
          output = "Smooth Limestone";
          break;
        case 50:
          //rough slate
          output = "Rough Slate";
          break;
        case 51:
          //rough hewn slate
          output = "Rough Hewn Slate";
          break;
        case 52:
          //smooth slate
          output = "Smooth Slate";
          break;
        case 53:
          //rough marble
          output = "Rough Marble";
          break;
        case 54:
          //rough hewn marble
          output = "Rough Hewn Marble";
          break;
        case 55:
          //smooth marble
          output = "Smooth Marble";
          break;
        default:
          output = id + " - no tile found";
      }
      return output;
    }
  }, {
    key: 'getResourceName',
    value: function getResourceName(id) {
      var output = null;
      switch (id) {
        case 139:
        case 138:
          //Limestone
          output = "Limestone";
          break;
        case 84:
          //Granite
          output = "Granite";
          break;
        case 212:
          //Marble
          output = "Marble";
          break;
        case 67:
          //Sandstonerock
          output = "Sandstone";
          break;
        case 197:
          //Slate
          output = "Slate";
          break;
        case 17:
          //Plasteel
          output = "Plasteel";
          break;
        case 93:
        case 56:
          //compactsteel
          output = "Compacted Machinery";
          break;
        case 157:
        case 156:
          //Steel
          output = "Steel";
          break;
        case 103:
          //Uranium
          output = "Uranium";
          break;
        case 194:
          // Sliver
          output = "Sliver";
          break;
        case 229:
          //Gold
          output = "Gold";
          break;
        case 127:
          // Jade
          output = "Jade";
          break;
        case 102:
          //Slate
          output = "Slate Chunk";
          break;
        case 78:
          // Marble
          output = "Marble Chunk";
          break;
        case 119:
          // Limestone
          output = "Limestone Chunk";
          break;
        case 252:
          // Granite
          output = "Granite Chunk";
          break;
        case 47:
          // Sandstone
          output = "Sandstone Chunk";
          break;
        case 241:
          // Metal Chunk
          output = "Metal Chunk";
          break;

        default:
          output = null;
      }
      return output;
    }
  }, {
    key: 'getDeepResourceName',
    value: function getDeepResourceName(id) {
      var output = null;
      switch (id) {

        case 251:
          //Steel
          output = "Steel";
          break;
        case 97:
          // Fuel
          output = "Chemfuel";
          break;
        case 160:
          //Uruianum
          output = "Uruianum";
          break;
        case 243:
          //plasteel
          output = "Plasteel";
          break;
        case 125:
          //Gold
          output = "Gold";
          break;
        case 22:
          //Jade
          output = "Jade";
          break;
        case 80:
          //Silver
          output = "Silver";
          break;
        default:
          output = null;
      }
      return output;
    }
  }, {
    key: 'decompress',
    value: function decompress(rawGrid) {
      //TOPGRID
      //DECODE BASE 64 TO BINARY
      var binary = atob(rawGrid);
      var output = [];
      //INFLATE/DECOMPRESS TOPGRID
      try {
        output = pako.inflate(binary, {
          raw: true
        });
      } catch (err) {
        console.log(err);
      }
      return this.delaceArray(output);
    }

    /*  //EXPERIMENTAL DONT USE
    newDecompress(rawGrid) {
        //TOPGRID
        //DECODE BASE 64 TO BINARY
        let binary = atob(rawGrid);
        let output = [];
        //INFLATE/DECOMPRESS TOPGRID
        try {
          output = pako.inflate(binary, {
            windowBits : 0,
            raw: true
          });
    
        } catch (err) {
          console.log(err);
        }
    
        //output =  this.Base64Encode(output);
        return output;
      }
    
    
      Base64Encode(str, encoding = 'utf-8') {
        var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);
        return base64js.fromByteArray(bytes);
      }
    
      Base64Decode(str, encoding = 'utf-8') {
        var bytes = base64js.toByteArray(str);
        return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
      }
      */

  }, {
    key: 'getPosition',
    value: function getPosition(raw) {
      //Remove the () + comma seperate the x y z
      var formattedSize = raw.replace(/[(-)]/g, '');
      //Split out into an array
      formattedSize = formattedSize.split(",");
      //Loop through the array to make it all ints
      for (var i = 0; i < formattedSize.length; i++) {
        formattedSize[i] = parseInt(formattedSize[i]);
      }
      return formattedSize;
    }
  }, {
    key: 'getColor',
    value: function getColor(raw) {
      //Remove the () + comma seperate the x y z
      var formattedSize = raw.replace(/[RGBA(-)]/g, '');
      //Split out into an array
      formattedSize = formattedSize.split(",");
      //Loop through the array to make it all ints
      for (var i = 0; i < formattedSize.length; i++) {
        var byte = Math.floor(formattedSize[i] >= 1.0 ? 255 : formattedSize[i] * 256.0);
        formattedSize[i] = byte;
      }
      return formattedSize;
    }
  }, {
    key: 'delaceArray',
    value: function delaceArray(iArray) {
      var masterIndex = 0;
      var outputArray = [];

      //Delace array
      for (var r = this.worldSize.x; r > 0; r--) {
        for (var c = this.worldSize.y * 2; c > 0; c--) {
          if (c % 2 === 0) {
            //Have to skip every other byte due to weird decompression error
            // outputArray.push(iArray[masterIndex] ^ iArray[masterIndex + 1]);
            outputArray.push(iArray[masterIndex]);
          }
          masterIndex++;
        }
      }
      return outputArray;
    }

    //Make array 2D

  }, {
    key: 'formatArray',
    value: function formatArray(iArray) {
      var masterIndex = 0;
      var outputArray = [];
      var row = [];
      for (var y = 0; y < this.worldSize.y; y++) {
        row = [];
        for (var x = 0; x < this.worldSize.x; x++) {
          row.push(iArray[masterIndex]);
          masterIndex++;
        }
        outputArray.push(row);
      }
      outputArray = outputArray.reverse();
      return outputArray;
    }
  }, {
    key: 'colorSprite',
    value: function colorSprite(sprite, thingRef) {
      //If thing has stuff do stuff case, if not do based on names
      var currentSprite = null;

      if (thingRef.color) {
        var rawColor = this.getColor(thingRef.color);
        var hexColor = Phaser.Color.getColor(rawColor[0], rawColor[1], rawColor[2]);
        sprite.tint = hexColor;
      } else {
        if (thingRef.stuff) {
          currentSprite = thingRef.stuff;
        } else {
          currentSprite = thingRef.def;
        }
        switch (currentSprite) {
          case "ChunkSandstone":
          case "SmoothedSandstone":
          case "BlocksSandstone":
            sprite.tint = this.SANDSTONE;
            break;
          case "ChunkGranite":
          case "SmoothedGranite":
          case "BlocksGranite":
            sprite.tint = this.GRANITE;
            break;
          case "ChunkSlate":
          case "SmoothedSlate":
          case "BlocksSlate":
            sprite.tint = this.SLATE;
            break;
          case "ChunkLimestone":
          case "SmoothedLimestone":
          case "BlocksLimestone":
            sprite.tint = this.LIMESTONE;
            break;
          case "ChunkMarble":
          case "SmoothedMarble":
          case "BlocksMarble":
            sprite.tint = this.MARBLE;
            break;
          case "WoodLog":
            sprite.tint = this.WOOD;
            break;
          case "Cloth":
            sprite.tint = this.CLOTH;
            break;
          case "ToolCabinet":
            sprite.tint = 0x60725f;
            break;
          case "Leather_Bluefur":
          case "WoolMuffalo":
          case "Muffalo_Leather":
            sprite.tint = this.MUFFALO;
            break;
          case "WoolAlpaca":
          case "Alpaca_Leather":
            sprite.tint = this.ALPACA;
            break;

          case "DevilstrandCloth":
            sprite.tint = this.DEVILSTRAND;
            break;
          case "Alphabeaver_Leather":
            sprite.tint = this.ALPHABEAVER;
            break;
          case "FoxArctic_Leather":
            sprite.tint = this.FOXARCTIC;
            break;
          case "WolfArctic_Leather":
            sprite.tint = this.WOLFARCTIC;
            break;
          case "Boomalope_Leather":
            sprite.tint = this.BOOMALOPE;
            break;
          case "Boomrat_Leather":
            sprite.tint = this.BOOMRAT;
            break;
          case "Capybara_Leather":
            sprite.tint = this.CAPYBARA;
            break;
          case "Caribou_Leather":
            sprite.tint = this.CARIBOU;
            break;
          case "WoolCamel":
          case "Leather_Camel":
          case "Camel_Leather":
            sprite.tint = this.CAMEL;
            break;
          case "Cassowary_Leather":
            sprite.tint = this.CASSOWARY;
            break;
          case "Cat_Leather":
            sprite.tint = this.CAT;
            break;
          case "Chicken_Leather":
            sprite.tint = this.CHICKEN;
            break;
          case "Leather_Chinchilla":
          case "Chinchilla_Leather":
            sprite.tint = this.CHINCHILLA;
            break;
          case "Cobra_Leather":
            sprite.tint = this.ALPACA;
            break;
          case "Cougar_Leather":
            sprite.tint = this.COUGAR;
            break;
          case "Cow_Leather":
            sprite.tint = this.COW;
            break;
          case "Deer_Leather":
            sprite.tint = this.DEER;
            break;
          case "Dromedary_Leather":
            sprite.tint = this.DROMEDARY;
            break;
          case "Leather_Elephant":
          case "Elephant_Leather":
            sprite.tint = this.ELEPHANT;
            break;
          case "Elk_Leather":
            sprite.tint = this.ELK;
            break;
          case "Emu_Leather":
            sprite.tint = this.EMU;
            break;
          case "FoxFennec_Leather":
            sprite.tint = this.FOXFENNEC;
            break;
          case "Gazelle_Leather":
            sprite.tint = this.GAZELLE;
            break;
          case "Leather_Bear":
          case "GrizzlyBear_Leather":
            sprite.tint = this.GRIZZLYBEAR;
            break;
          case "Hare_Leather":
            sprite.tint = this.HARE;
            break;
          case "Husky_Leather":
            sprite.tint = this.HUSKY;
            break;
          case "Ibex_Leather":
            sprite.tint = this.IBEX;
            break;

          case "Leather_Lizard":
          case "Iguana_Leather":
            sprite.tint = this.IGUANA;
            break;
          case "Leather_Dog":
          case "LabradorRetriever_Leather":
            sprite.tint = this.LABRADORRETRIEVER;
            break;
          case "Lynx_Leather":
            sprite.tint = this.LYNX;
            break;
          case "Leather_Heavy":
          case "WoolMegasloth":
          case "Megasloth_Leather":
            sprite.tint = this.MEGASLOTH;
            break;
          case "Monkey_Leather":
            sprite.tint = this.MONKEY;
            break;
          case "Leather_Bird":
          case "Ostrich_Leather":
            sprite.tint = this.OSTRICH;
            break;

          case "Leather_Panthera":
          case "Panther_Leather":
            sprite.tint = this.PANTHER;
            break;
          case "Leather_Pig":
          case "Pig_Leather":
            sprite.tint = this.PIG;
            break;
          case "PolarBear_Leather":
            sprite.tint = this.POLARBEAR;
            break;
          case "Raccoon_Leather":
            sprite.tint = this.RACCOON;
            break;
          case "Ratkin_Cloth":
          case "Ratkin_Leather":
          case "Rat_Leather":
            sprite.tint = this.RAT;
            break;
          case "Leather_Fox":
          case "FoxRed_Leather":
            sprite.tint = this.FOXRED;
            break;
          case "Leather_Rhinoceros":
          case "Rhinoceros_Leather":
            sprite.tint = this.RHINOCEROS;
            break;
          case "Snowhare_Leather":
            sprite.tint = this.SNOWHARE;
            break;
          case "Leather_Light":
          case "Squirrel_Leather":
            sprite.tint = this.SQUIRREL;
            break;
          case "Leather_Wolf":
          case "WolfTimber_Leather":
            sprite.tint = this.WOLFTIMBER;
            break;
          case "Tortoise_Leather":
            sprite.tint = this.TORTOISE;
            break;
          case "Turkey_Leather":
            sprite.tint = this.TURKEY;
            break;
          case "Warg_Leather":
            sprite.tint = this.WARG;
            break;
          case "WildBoar_Leather":
            sprite.tint = this.WILDBOAR;
            break;
          case "Leather_Dog":
          case "YorkshireTerrier_Leather":
            sprite.tint = this.YORKSHIRETERRIER;
            break;
          case "Leather_Thrumbo":
            sprite.tint = this.THRUMBO;
            break;
          case "Leather_Plain":
            sprite.tint = this.LEATHER;
            break;
          case "Leather_Patch":
            sprite.tint = 0x5a4b3c;
            break;
          case "Leather_Human":
          case "Human_Leather":
            sprite.tint = this.HUMAN;
            break;
          case "Steel":
            sprite.tint = this.STEEL;
            break;
          case "Plasteel":
            sprite.tint = this.PLASTEEL;
            break;
          case "Jade":
            sprite.tint = this.JADE;
            break;
          case "Gold":
            sprite.tint = this.GOLD;
            break;
          case "Silver":
            sprite.tint = this.SILVER;
            break;
          case "Uranium":
            sprite.tint = this.URANIUM;
            break;
          case "StandingLamp_Red":
            sprite.tint = 0xFF0000;
            break;
          case "StandingLamp_Blue":
            sprite.tint = 0x0000FF;
            break;
          case "StandingLamp_Green":
            sprite.tint = 0x00FF00;
            break;
          case "Synthread":
            sprite.tint = this.SYNTHREAD;
            break;
          case "Blueprint":
            sprite.alpha = 0.5;
            sprite.tint = 0x99eeff;
            break;
          default:
          //thingSprite.tint = 0xffffff;
        }
      }

      return sprite;
    }
  }, {
    key: 'matchWall',
    value: function matchWall(chunk) {

      var direction = 0;

      var single = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
      var straightN = [[0, 1, 0], [0, 1, 0], [0, 0, 0]];
      var straightE = [[0, 0, 0], [0, 1, 1], [0, 0, 0]];
      var straightS = [[0, 0, 0], [0, 1, 0], [0, 1, 0]];
      var straightW = [[0, 0, 0], [1, 1, 0], [0, 0, 0]];
      var cross = [[0, 1, 0], [1, 1, 1], [0, 1, 0]];
      var straightV = [[0, 1, 0], [0, 1, 0], [0, 1, 0]];
      var straightH = [[0, 0, 0], [1, 1, 1], [0, 0, 0]];
      var teeN = [[0, 1, 0], [1, 1, 1], [0, 0, 0]];
      var teeE = [[0, 1, 0], [0, 1, 1], [0, 1, 0]];
      var teeS = [[0, 0, 0], [1, 1, 1], [0, 1, 0]];
      var teeW = [[0, 1, 0], [1, 1, 0], [0, 1, 0]];
      var lN = [[0, 1, 0], [0, 1, 1], [0, 0, 0]];
      var lE = [[0, 0, 0], [0, 1, 1], [0, 1, 0]];
      var lS = [[0, 0, 0], [1, 1, 0], [0, 1, 0]];
      var lW = [[0, 1, 0], [1, 1, 0], [0, 0, 0]];

      if (this.matchArrays(straightH, chunk)) {
        direction = 6;
      } else if (this.matchArrays(straightV, chunk)) {
        direction = 9;
      } else if (this.matchArrays(straightN, chunk)) {
        direction = 13;
      } else if (this.matchArrays(straightE, chunk)) {
        direction = 14;
      } else if (this.matchArrays(straightS, chunk)) {
        direction = 8;
      } else if (this.matchArrays(straightW, chunk)) {
        direction = 4;
      } else if (this.matchArrays(cross, chunk)) {
        direction = 3;
        //direction = null;
      } else if (this.matchArrays(teeN, chunk)) {
        direction = 7;
      } else if (this.matchArrays(teeE, chunk)) {
        direction = 11;
      } else if (this.matchArrays(teeS, chunk)) {
        direction = 2;
      } else if (this.matchArrays(teeW, chunk)) {
        direction = 1;
      } else if (this.matchArrays(lN, chunk)) {
        direction = 15;
      } else if (this.matchArrays(lE, chunk)) {
        direction = 10;
      } else if (this.matchArrays(lS, chunk)) {
        direction = 0;
      } else if (this.matchArrays(lW, chunk)) {
        direction = 5;
      } else if (this.matchArrays(single, chunk)) {
        direction = 12;
      } else {
        //  console.log(chunk);
      }
      return direction;
    }
  }, {
    key: 'thingAlign',
    value: function thingAlign(sprite, data) {

      var outputSprite = sprite;

      if (data.rot) {
        if (data.rot == 1) {
          outputSprite.angle = 90;
        }
        if (data.rot == 2) {
          outputSprite.angle = 180;
        }
        if (data.rot == 3) {
          outputSprite.angle = -90;
        }
      }

      //1X1
      if (outputSprite.height == this.TILESIZE && outputSprite.width == this.TILESIZE) {
        outputSprite.anchor.setTo(0, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(1, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(1, 0);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0);
          }
        }
        //2X1
      } else if (outputSprite.height == this.TILESIZE * 2 && outputSprite.width == this.TILESIZE) {
        //

        outputSprite.anchor.setTo(0, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(1, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(1, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0.5);
          }
        }
        //1X4
      } else if (outputSprite.height == this.TILESIZE * 4 && outputSprite.width == this.TILESIZE) {
        //

        outputSprite.anchor.setTo(0, 0.75);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(1, 0.75);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(1, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0.5);
          }
        }
        //2x1
      } else if (outputSprite.height == this.TILESIZE && outputSprite.width == this.TILESIZE * 2) {
        outputSprite.anchor.setTo(0, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.5, 0);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0);
          }
        }
        //4x2
      } else if (outputSprite.height == this.TILESIZE * 4 && outputSprite.width == this.TILESIZE * 2) {
        outputSprite.anchor.setTo(0, 0.75);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.6, 0.6);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(1, 0.5);
          }
        }
        //4x2
      } else if (outputSprite.height == this.TILESIZE * 2 && outputSprite.width == this.TILESIZE * 4) {
        outputSprite.anchor.setTo(0.4, 0.75);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.6, 0.6);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(1, 0.5);
          }
        }
        //2x2
      } else if (outputSprite.height == this.TILESIZE * 2 && outputSprite.width == this.TILESIZE * 2) {

        outputSprite.anchor.setTo(0, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.5, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0.5);
          }
        }
        //3x2
      } else if (outputSprite.height == this.TILESIZE * 2 && outputSprite.width == this.TILESIZE * 3) {

        outputSprite.anchor.setTo(0.35, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.5, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0.35, 0.6);
          }
        }
        //2x3
      } else if (outputSprite.height == this.TILESIZE * 3 && outputSprite.width == this.TILESIZE * 2) {

        outputSprite.anchor.setTo(0, 0.65);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.5, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0.5);
          }
        }

        //3x3
      } else if (outputSprite.height == this.TILESIZE * 3 && outputSprite.width == this.TILESIZE * 3) {
        outputSprite.anchor.setTo(0.35, 0.65);
        if (data.rot == 1) {
          outputSprite.anchor.setTo(0.5, 0.5);
        }
        if (data.rot == 2) {
          outputSprite.anchor.setTo(0.65, 0.35);
        }
        if (data.rot == 3) {
          outputSprite.anchor.setTo(0.5, 0.5);
        }
        //3X1
      } else if (outputSprite.height == this.TILESIZE && outputSprite.width == this.TILESIZE * 3) {
        outputSprite.anchor.setTo(0.35, 1);
        if (data.rot == 1) {
          outputSprite.anchor.setTo(0.65, 1);
        }
        if (data.rot == 2) {
          outputSprite.anchor.setTo(0.65, 0);
        }
        if (data.rot == 3) {
          outputSprite.anchor.setTo(0.35, 0);
        }
        //4x4
      } else if (outputSprite.height == this.TILESIZE * 4 && outputSprite.width == this.TILESIZE * 4) {
        if (!data.rot) {
          outputSprite.anchor.setTo(0.25, 0.75);
        }
        if (data.rot == 1) {
          outputSprite.anchor.setTo(0.5, 0.75);
        }
        if (data.rot == 2) {
          outputSprite.anchor.setTo(0.5, 0.5);
        }
        if (data.rot == 3) {
          outputSprite.anchor.setTo(0.75, 0.25);
        }
        //6x6
      } else if (outputSprite.height == this.TILESIZE * 6 && outputSprite.width == this.TILESIZE * 6) {
        outputSprite.anchor.setTo(0.35, 0.65);
        //5x2
      } else if (outputSprite.height == this.TILESIZE * 2 && outputSprite.width == this.TILESIZE * 5) {
        outputSprite.anchor.setTo(0.4, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.6, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(1, 0.5);
          }
        }
        //3x4
      } else if (outputSprite.height == this.TILESIZE * 4 && outputSprite.width == this.TILESIZE * 3) {
        outputSprite.anchor.setTo(0.5, 0.35);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 0.65);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.65, 0.5);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0.35, 0.5);
          }
        }
        //4x1
      } else if (outputSprite.height == this.TILESIZE && outputSprite.width == this.TILESIZE * 4) {
        outputSprite.anchor.setTo(0, 1);
        if (data.rot) {
          if (data.rot == 1) {
            outputSprite.anchor.setTo(0.5, 1);
          }
          if (data.rot == 2) {
            outputSprite.anchor.setTo(0.5, 0);
          }
          if (data.rot == 3) {
            outputSprite.anchor.setTo(0, 0);
          }
        }
      } else {
        outputSprite.anchor.setTo(0, 1);
      }
      return outputSprite;
    }
  }, {
    key: 'matchArrays',
    value: function matchArrays(a, b) {
      for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
          if (a[i][j] != b[i][j]) {
            return false;
          }
        }
      }
      return true;
    }

    //Is this a wall?

  }, {
    key: 'isWall',
    value: function isWall(stuff) {
      switch (stuff) {
        case "Wall":
        case "SmoothedGranite":
        case "SmoothedSandstone":
        case "SmoothedLimestone":
        case "SmoothedMarble":
        case "SmoothedSlate":
          return true;
          break;
        default:
          return false;
      }
    }
  }, {
    key: 'isResource',
    value: function isResource(stuff) {
      switch (stuff) {
        case "Granite":
        case "Limestone":
        case "Sandstone":
        case "Marble":
        case "Slate":
        case "MineableSteel":
        case "MineableUranium":
        case "MineableGold":
        case "MineableJade":
        case "MineableSilver":
        case "MineableComponents":
        case "MineableComponentsIndustrial":
        case "MineablePlasteel":
          return true;
          break;
        default:
          return false;
      }
    }
    //Is this stuff allowed? Return true
    //Used so we dont render stuff like dirt and pawns

  }, {
    key: 'isAllowedStuff',
    value: function isAllowedStuff(stuff) {

      var preRegex = new RegExp('(.*)\_');

      if (preRegex.exec(stuff)) {
        //0.19 Change everyhing to Filth_xxx
        if (preRegex.exec(stuff)[1] == "Filth" || preRegex.exec(stuff)[1] == "Blueprint") return false;
      }

      switch (stuff) {
        case "Filth":
        case "Trash":
        case "AnimalFilth":
        case "Vomit":
        case "Blood":
        case "Slime":
        case "CorpseBile":
        case "RubbleBuilding":
        case "FilthDirt":
        case "FilthBlood":
        case "FilthAnimalFilth":
        case "FilthAsh":
        case "FilthCorpseBile":
        case "FilthVomit":
        case "FilthAmnioticFluid":
        case "FilthSlime":
        case "FilthBloodInsect":
        case "FilthFireFoam":
        case "FilthSand":
        case "Blight":
        case "PowerConduit":
        case "PowerConduitInvisible": //COMMON MOD
        case "sewagePipeStuff": //MOD
        case "SandbagRubble":
        case "Corpse_Leather":
        case "Centipede_Corpse":
        case "Scyther_Corpse":
        case "Corpse":
        case "Frame":
        case "Letter":
        case "Short":
        case "Blueprint":
        case "Blueprint_Install":
        case "Install":
        case "RectTrigger":
        case "RockRubble":
        case "RubbleRock":
        case "BuildingRubble":
        case "SlagRubble":
        case "Centipede":
        case "Scyther":
        case "Lancer":
        case "ActiveDropPod":
        case "Fire":
        case "Spark":
          return false;
          break;
        case "Human":
          return false;
          break;
        default:
          return true;
      }
    }
  }, {
    key: 'isAnimal',
    value: function isAnimal(stuff) {
      switch (stuff) {
        case "Alpaca":
        case "Alphabeaver":
        case "FoxArctic":
        case "Fox_Arctic":
        case "WolfArctic":
        case "Wolf_Arctic":
        case "Boomalope":
        case "Boomrat":
        case "Capybara":
        case "Caribou":
        case "Cassowary":
        case "Cat":
        case "Chicken":
        case "Chinchilla":
        case "Cobra":
        case "Cougar":
        case "Cow":
        case "Deer":
        case "Dromedary":
        case "Elephant":
        case "Elk":
        case "Emu":
        case "FoxFennec":
        case "Fox_Fennec":
        case "Gazelle":
        case "GrizzlyBear":
        case "Hare":
        case "Husky":
        case "Ibex":
        case "Iguana":
        case "LabradorRetriever":
        case "Lynx":
        case "Megascarab":
        case "Megasloth":
        case "Megaspider":
        case "Monkey":
        case "Muffalo":
        case "Ostrich":
        case "Panther":
        case "Pig":
        case "PolarBear":
        case "Raccoon":
        case "Rat":
        case "FoxRed":
        case "Fox_Red":
        case "Rhinoceros":
        case "Snowhare":
        case "Spelopede":
        case "Squirrel":
        case "Thrumbo":
        case "WolfTimber":
        case "Wolf_Timber":
        case "Tortoise":
        case "Turkey":
        case "Warg":
        case "WildBoar":
        case "YorkshireTerrier":
        case "Grizzly":
        case "Timber":
          return false;
          break;
        default:
          return true;
      }
    }
  }, {
    key: 'makeCSV',
    value: function makeCSV(iArray) {

      var outputCSV = '';
      var dataArray = this.formatArray(iArray);

      for (var y = 0; y < this.worldSize.y; y++) {
        for (var x = 0; x < this.worldSize.x; x++) {
          if (dataArray[y][x] == undefined) {
            console.log('No data @ ' + ' ' + y + ' ' + x);
          }
          if (dataArray[y][x] != undefined) {
            outputCSV += dataArray[y][x];
          }
          if (x < this.worldSize.x - 1) {
            outputCSV += ',';
          }
        }
        if (y < this.worldSize.y - 1) {
          outputCSV += "\n";
        }
      }
      return outputCSV;
    }

    //maps raw rimworld IDs to Tilemap IDs

  }, {
    key: 'mapTextures',
    value: function mapTextures(iArray, param, underGrid) {

      if (param == "terrain") {
        //Fix For tiles Metal, Silver, Gold and Sterile tiles
        for (var j = 0; j < iArray.length; j++) {
          if (iArray[j] == 101 || iArray[j] == 246 || iArray[j] == 37 || iArray[j] == 199) {
            if (underGrid[j] != 0) {
              //Just shift the ID up one since we only care about tiles under dirt
              iArray[j] += 1;
            }
          }
        }

        for (var i = 0; i < iArray.length; i++) {
          //TINT THE TERRAIN TILE
          switch (iArray[i]) {
            case 2:
              //Concrete
              iArray[i] = 1;
              break;
            case 235:
              //Paved
              iArray[i] = 2;
              break;
            case 70:
              //Wood
              iArray[i] = 3;
              break;
            case 247:
              //metal //IF UNDER
              iArray[i] = 4;
              break;
            case 38:
              //silver //IF UNDER
              iArray[i] = 5;
              break;
            case 200:
              //gold  //IF UNDER
              iArray[i] = 6;
              break;
            case 102:
              //sterile //If under
              iArray[i] = 7;
              break;
            case 174:
              //red
              iArray[i] = 8;
              break;
            case 232:
              //green
              iArray[i] = 9;
              break;
            case 202:
              //blue
              iArray[i] = 10;
              break;
            case 46:
              //cream
              iArray[i] = 11;
              break;
            case 231:
              //dark
              iArray[i] = 12;
              break;
            case 41:
              //burned wood
              iArray[i] = 13;
              break;
            case 171:
              //burned carpet
              iArray[i] = 14;
              break;
            case 88:
              //sandstone tile
              iArray[i] = 15;
              break;
            case 224:
              //granite tile
              iArray[i] = 16;
              break;
            case 160:
              //limestone tile
              iArray[i] = 17;
              break;
            case 219:
              //slate tile
              iArray[i] = 18;
              break;
            case 126:
              //Marble tile
              iArray[i] = 19;
              break;
            case 173:
              //slate flag
              iArray[i] = 20;
              break;
            case 169:
              //sandstone flag
              iArray[i] = 21;
              break;
            case 245:
              //granite flag
              iArray[i] = 22;
              break;
            case 59:
              //limestone flag
              iArray[i] = 23;
              break;
            case 1:
              //marble flagstone
              iArray[i] = 24;
              break;
            case 166:
              //sand
              iArray[i] = 25;
              break;
            case 161:
              //soil
              iArray[i] = 26;
              break;
            case 239:
              //marshy soil
              iArray[i] = 27;
              break;
            case 115:
              // rich soil
              iArray[i] = 28;
              break;
            case 48:
              //mud
              iArray[i] = 29;
              break;
            case 6:
              //marsh
              iArray[i] = 30;
              break;
            case 73:
              //gravel
              iArray[i] = 31;
              break;
            case 158:
              //lichen covered
              iArray[i] = 32;
              break;
            case 255:
              //ice
              iArray[i] = 33;
              break;
            case 205:
              //broken asphalt
              iArray[i] = 34;
              break;
            case 78:
              // packed dirt
              iArray[i] = 35;
              break;
            case 37:
              //underwall
              iArray[i] = 36;
              break;
            case 140:
              //deep water //DEEPOCEANWATER MISSING!!!!
              iArray[i] = 37;
              break;
            case 58:
              //moving deep water
              iArray[i] = 38;
              break;
            case 181:
              //shallow water
              iArray[i] = 39;
              break;
            case 137:
              //shallow ocean
              iArray[i] = 40;
              break;
            case 212:
              //shallow moving water
              iArray[i] = 40;
              break;
            case 56:
              //rough sandstone
              iArray[i] = 41;
              break;
            case 246:
              // rough hewn sandstone
              iArray[i] = 42;
              break;
            case 154:
              //smooth sandstone
              iArray[i] = 43;
              break;
            case 222:
              // rough granite
              iArray[i] = 44;
              break;
            case 116:
              // rough hewn granite
              iArray[i] = 45;
              break;
            case 199:
              //smooth granite
              iArray[i] = 46;
              break;
            case 99:
              //rough limestone
              iArray[i] = 47;
              break;
            case 82:
              // rought hewn limestone
              iArray[i] = 48;
              break;
            case 238:
              //smooth limestone
              iArray[i] = 49;
              break;
            case 148:
              //rough slate
              iArray[i] = 50;
              break;
            case 101:
              //rough hewn slate
              iArray[i] = 51;
              break;
            case 184:
              //smooth slate
              iArray[i] = 52;
              break;
            case 57:
              //rough marble
              iArray[i] = 53;
              break;
            case 135:
              //rough hewn marble
              iArray[i] = 54;
              break;
            case 208:
              //smooth marble
              iArray[i] = 55;
              break;
            case 21:
              //Moving river water?
              iArray[i] = 38;
              break;
            case 71:
              //Bridge
              iArray[i] = 3;
              break;
            case 153:
              //Softsand
              iArray[i] = 25;
              break;
            default:
              console.log(iArray[i]);
          }
          iArray[i] = iArray[i] -= 1; //fix for index offset
        }
      }
      return iArray;
    }
  }]);

  return Utils;
}();

exports.default = Utils;

},{}]},{},[1])
//# sourceMappingURL=game.js.map