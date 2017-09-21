/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  var game = new _game2.default();
  var sound = $('#sound');
  window.toggleMute = function () {
    if (sound[0].muted) {
      sound[0].muted = false;
    } else {
      sound[0].muted = true;
    }
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView() {
    _classCallCheck(this, GameView);

    this.board = new _board2.default();
    this.setListeners();
    this.render();
    this.sound = $('#sound');
  }

  _createClass(GameView, [{
    key: 'setListeners',
    value: function setListeners() {
      var _this = this;

      $('body').keydown(function (e) {
        switch (e.key) {
          case 'ArrowUp':
            _this.board.move('up');
            _this.render();
            break;
          case 'ArrowDown':
            _this.board.move('down');
            _this.render();
            break;
          case 'ArrowRight':
            _this.board.move('right');
            _this.render();
            break;
          case 'ArrowLeft':
            _this.board.move('left');
            _this.render();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var $row = void 0,
          $square = void 0;
      for (var i = 0; i < this.board.grid.length; i++) {
        $row = $('#row' + (i + 1));
        $row.empty();
        this.board.grid[i].forEach(function (square) {
          if (square > 0) {
            $square = $('<li class="image-' + square + '"><p>' + square + '</p></li>');
          } else {
            $square = $('<li></li>');
          }
          $row.append($square);
        });
      }
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const _ = require('./node_modules/underscore/underscore.js')

var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.grid = [];
    for (var i = 0; i < 4; i++) {
      this.grid.push([0, 0, 0, 0]);
    }

    this.setupBoard();
  }

  _createClass(Board, [{
    key: 'setupBoard',
    value: function setupBoard() {
      this.newNumber();
      this.newNumber();
    }
  }, {
    key: 'newNumber',
    value: function newNumber() {
      var x = void 0,
          y = void 0;

      var _randomPos = this.randomPos();

      var _randomPos2 = _slicedToArray(_randomPos, 2);

      x = _randomPos2[0];
      y = _randomPos2[1];

      while (this.grid[x][y]) {
        var _randomPos3 = this.randomPos();

        var _randomPos4 = _slicedToArray(_randomPos3, 2);

        x = _randomPos4[0];
        y = _randomPos4[1];
      }

      this.grid[x][y] = 2;
    }
  }, {
    key: 'randomPos',
    value: function randomPos() {
      var x = Math.floor(Math.random() * 4);
      var y = Math.floor(Math.random() * 4);
      return [x, y];
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      var result = true;
      this.grid.forEach(function (row) {
        row.forEach(function (space) {
          if (space === 0) {
            result = false;
          }
        });
      });
      return result;
    }
  }, {
    key: 'move',
    value: function move(direction) {
      var _this = this,
          _ref,
          _ref2;

      var oldGrid = this.grid;
      var newGrid = [];
      var zippedGrid = void 0;
      switch (direction) {
        case 'right':
          this.grid.forEach(function (row) {
            newGrid.push(_this.compact(row));
          });
          this.grid = newGrid;
          break;
        case 'left':
          this.grid.forEach(function (row) {
            newGrid.push(_this.compact(row.reverse()).reverse());
          });
          this.grid = newGrid;
          break;
        case 'up':
          zippedGrid = (_ref = _).zip.apply(_ref, _toConsumableArray(this.grid));
          zippedGrid.forEach(function (row) {
            newGrid.push(_this.compact(row.reverse()).reverse());
          });
          this.grid = _.unzip(newGrid);
          break;
        case 'down':
          zippedGrid = (_ref2 = _).zip.apply(_ref2, _toConsumableArray(this.grid));
          zippedGrid.forEach(function (row) {
            newGrid.push(_this.compact(row));
          });
          this.grid = _.unzip(newGrid);
          break;
      }

      if (!this.sameGrid(oldGrid, this.grid)) {
        this.newNumber();
      }
    }
  }, {
    key: 'sameGrid',
    value: function sameGrid(oldGrid, newGrid) {
      var flag = true;
      oldGrid.forEach(function (row, idx) {
        row.forEach(function (space, idx2) {
          if (newGrid[idx][idx2] !== space) {
            flag = false;
          }
        });
      });
      return flag;
    }
  }, {
    key: 'compact',
    value: function compact(array) {
      var flag = true;
      var row = array.slice(0);
      var count = void 0;
      while (flag) {
        flag = false;
        count = 2;
        while (count > -1) {
          if (row[count] === row[count + 1] && row[count] > 0) {
            row[count] = 0;
            row[count + 1] = row[count + 1] * 2;
            flag = true;
          } else if (row[count + 1] === 0 && row[count] > 0) {
            row[count + 1] = row[count];
            row[count] = 0;
            flag = true;
          }
          count = count - 1;
        }
      }
      return row;
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map