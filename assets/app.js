/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/js/nav.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle */ "./src/js/toggle.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // This class contains all of our custom JS.

var App = /*#__PURE__*/function () {
  // All nav menus that need JS.
  // All class toggles.
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "navs", {});

    _defineProperty(this, "toggles", []);

    // Init nav menus, pass through needed elements.
    this.initNavs(document.querySelectorAll('[data-nav]')); // Init toggles, pass through needed elements.

    this.initToggles(document.querySelectorAll('[data-toggle]'));
  } // Handle navs


  _createClass(App, [{
    key: "initNavs",
    value: function initNavs(navs) {
      var _this = this;

      // Create a nav instance for each element with the data-nav attribute.
      navs.forEach(function (elem) {
        // The value of the data-nav attribute of the element.
        var name = elem.dataset.nav; // We can access a specific nav by key. The key used is the value of the data-nav attribute of the element.

        _this.navs[name] = new _nav__WEBPACK_IMPORTED_MODULE_0__.default(elem, name);
      });
    } // Handle toggles

  }, {
    key: "initToggles",
    value: function initToggles(toggles) {
      var _this2 = this;

      // For each element that needs a class toggled on it.
      toggles.forEach(function (elem) {
        // Make a new instance and add it to our array.
        _this2.toggles = [].concat(_toConsumableArray(_this2.toggles), [new _toggle__WEBPACK_IMPORTED_MODULE_1__.default(elem, elem.dataset.toggle)]);
      });
    }
  }]);

  return App;
}(); // Init our "App".


var app = new App();

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Nav = /*#__PURE__*/function () {
  function Nav(elem, name) {
    _classCallCheck(this, Nav);

    // Set the nav element and name.
    this.elem = elem;
    this.name = name; // Init navs, depending on which nav is which.

    if (this.name === 'primary') {
      this.initPrimary();
    }
  }

  _createClass(Nav, [{
    key: "initPrimary",
    value: function initPrimary() {
      // Create an observer for when a sticky nav is at the top of the screen.
      this.observer = new IntersectionObserver(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            e = _ref2[0];

        return e.target.classList.toggle('sticky-active', e.intersectionRatio < 1);
      }, {
        threshold: [1]
      }); // Observe the nav element.

      this.observer.observe(this.elem);
    }
  }]);

  return Nav;
}();



/***/ }),

/***/ "./src/js/toggle.js":
/*!**************************!*\
  !*** ./src/js/toggle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toggle)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Toggle = /*#__PURE__*/function () {
  function Toggle(elem, name) {
    _classCallCheck(this, Toggle);

    // Set element and name of element that will have a class toggled on it.
    this.elem = elem;
    this.name = name; // Get all elements that will trigger a class change.

    this.triggers = document.querySelectorAll("[data-toggle-trigger=\"".concat(this.name, "\"]")); // Init events

    this.initEvents();
  } // Init our click event


  _createClass(Toggle, [{
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      // For each trigger
      this.triggers.forEach(function (trigger) {
        // When a trigger is clicked
        trigger.addEventListener('click', function (e) {
          // Don't visit whatever the href attribute is set to.
          e.preventDefault(); // Toggle a class, based on a data attribute on the trigger element.

          _this.elem.classList.toggle(trigger.dataset.toggleClass);
        });
      });
    }
  }]);

  return Toggle;
}();



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkAlpaca_Life_Collection_Shopify_Theme"] = self["webpackChunkAlpaca_Life_Collection_Shopify_Theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/css/style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQixJQUFMLENBQVVZLFNBQVYsQ0FBb0JQLE1BQXBCLENBQTJCYSxPQUFPLENBQUNoQixPQUFSLENBQWdCbUIsV0FBM0M7QUFDSCxTQU5EO0FBT0gsT0FURDtBQVVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUUvQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9BbHBhY2EtTGlmZS1Db2xsZWN0aW9uLVNob3BpZnktVGhlbWUvLi9zcmMvanMvbmF2LmpzIiwid2VicGFjazovL0FscGFjYS1MaWZlLUNvbGxlY3Rpb24tU2hvcGlmeS1UaGVtZS8uL3NyYy9qcy90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FscGFjYS1MaWZlLUNvbGxlY3Rpb24tU2hvcGlmeS1UaGVtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL0FscGFjYS1MaWZlLUNvbGxlY3Rpb24tU2hvcGlmeS1UaGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0FscGFjYS1MaWZlLUNvbGxlY3Rpb24tU2hvcGlmeS1UaGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0FscGFjYS1MaWZlLUNvbGxlY3Rpb24tU2hvcGlmeS1UaGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQWxwYWNhLUxpZmUtQ29sbGVjdGlvbi1TaG9waWZ5LVRoZW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL3RvZ2dsZVwiO1xuXG4vLyBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCBvZiBvdXIgY3VzdG9tIEpTLlxuY2xhc3MgQXBwIHtcbiAgLy8gQWxsIG5hdiBtZW51cyB0aGF0IG5lZWQgSlMuXG4gIG5hdnMgPSB7fVxuICAvLyBBbGwgY2xhc3MgdG9nZ2xlcy5cbiAgdG9nZ2xlcyA9IFtdXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSW5pdCBuYXYgbWVudXMsIHBhc3MgdGhyb3VnaCBuZWVkZWQgZWxlbWVudHMuXG4gICAgdGhpcy5pbml0TmF2cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYXZdJykpXG5cbiAgICAvLyBJbml0IHRvZ2dsZXMsIHBhc3MgdGhyb3VnaCBuZWVkZWQgZWxlbWVudHMuXG4gICAgdGhpcy5pbml0VG9nZ2xlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGVdJykpXG4gIH1cblxuICAvLyBIYW5kbGUgbmF2c1xuICBpbml0TmF2cyhuYXZzKSB7XG4gICAgLy8gQ3JlYXRlIGEgbmF2IGluc3RhbmNlIGZvciBlYWNoIGVsZW1lbnQgd2l0aCB0aGUgZGF0YS1uYXYgYXR0cmlidXRlLlxuICAgIG5hdnMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1uYXYgYXR0cmlidXRlIG9mIHRoZSBlbGVtZW50LlxuICAgICAgbGV0IG5hbWUgPSBlbGVtLmRhdGFzZXQubmF2XG5cbiAgICAgIC8vIFdlIGNhbiBhY2Nlc3MgYSBzcGVjaWZpYyBuYXYgYnkga2V5LiBUaGUga2V5IHVzZWQgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLW5hdiBhdHRyaWJ1dGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICB0aGlzLm5hdnNbbmFtZV0gPSBuZXcgTmF2KGVsZW0sIG5hbWUpXG4gICAgfSlcbiAgfVxuXG4gIC8vIEhhbmRsZSB0b2dnbGVzXG4gIGluaXRUb2dnbGVzKHRvZ2dsZXMpIHtcbiAgICAvLyBGb3IgZWFjaCBlbGVtZW50IHRoYXQgbmVlZHMgYSBjbGFzcyB0b2dnbGVkIG9uIGl0LlxuICAgIHRvZ2dsZXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIC8vIE1ha2UgYSBuZXcgaW5zdGFuY2UgYW5kIGFkZCBpdCB0byBvdXIgYXJyYXkuXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBbXG4gICAgICAgICAgLi4udGhpcy50b2dnbGVzLFxuICAgICAgICAgIG5ldyBUb2dnbGUoZWxlbSwgZWxlbS5kYXRhc2V0LnRvZ2dsZSlcbiAgICAgIF1cbiAgICB9KVxuICB9XG59XG5cbi8vIEluaXQgb3VyIFwiQXBwXCIuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYge1xuICBjb25zdHJ1Y3RvcihlbGVtLCBuYW1lKSB7XG4gICAgLy8gU2V0IHRoZSBuYXYgZWxlbWVudCBhbmQgbmFtZS5cbiAgICB0aGlzLmVsZW0gPSBlbGVtXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgLy8gSW5pdCBuYXZzLCBkZXBlbmRpbmcgb24gd2hpY2ggbmF2IGlzIHdoaWNoLlxuICAgIGlmICh0aGlzLm5hbWUgPT09ICdwcmltYXJ5Jykge1xuICAgICAgdGhpcy5pbml0UHJpbWFyeSgpXG4gICAgfVxuICB9XG5cbiAgaW5pdFByaW1hcnkoKSB7XG4gICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGZvciB3aGVuIGEgc3RpY2t5IG5hdiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZV0pID0+IGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3N0aWNreS1hY3RpdmUnLCBlLmludGVyc2VjdGlvblJhdGlvIDwgMSksXG4gICAgICB7IHRocmVzaG9sZDogWzFdIH1cbiAgICApXG4gICAgLy8gT2JzZXJ2ZSB0aGUgbmF2IGVsZW1lbnQuXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbSwgbmFtZSkge1xuICAgICAgICAvLyBTZXQgZWxlbWVudCBhbmQgbmFtZSBvZiBlbGVtZW50IHRoYXQgd2lsbCBoYXZlIGEgY2xhc3MgdG9nZ2xlZCBvbiBpdC5cbiAgICAgICAgdGhpcy5lbGVtID0gZWxlbVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICAgICAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IHdpbGwgdHJpZ2dlciBhIGNsYXNzIGNoYW5nZS5cbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRvZ2dsZS10cmlnZ2VyPVwiJHt0aGlzLm5hbWV9XCJdYClcblxuICAgICAgICAvLyBJbml0IGV2ZW50c1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKVxuICAgIH1cblxuICAgIC8vIEluaXQgb3VyIGNsaWNrIGV2ZW50XG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgLy8gRm9yIGVhY2ggdHJpZ2dlclxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIGEgdHJpZ2dlciBpcyBjbGlja2VkXG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgdmlzaXQgd2hhdGV2ZXIgdGhlIGhyZWYgYXR0cmlidXRlIGlzIHNldCB0by5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBhIGNsYXNzLCBiYXNlZCBvbiBhIGRhdGEgYXR0cmlidXRlIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtLmNsYXNzTGlzdC50b2dnbGUodHJpZ2dlci5kYXRhc2V0LnRvZ2dsZUNsYXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2FwcFwiOiAwLFxuXHRcInN0eWxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rQWxwYWNhX0xpZmVfQ29sbGVjdGlvbl9TaG9waWZ5X1RoZW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua0FscGFjYV9MaWZlX0NvbGxlY3Rpb25fU2hvcGlmeV9UaGVtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbl9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2pzL2FwcC5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Nzcy9zdHlsZS5jc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJOYXYiLCJUb2dnbGUiLCJBcHAiLCJpbml0TmF2cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluaXRUb2dnbGVzIiwibmF2cyIsImZvckVhY2giLCJlbGVtIiwibmFtZSIsImRhdGFzZXQiLCJuYXYiLCJ0b2dnbGVzIiwidG9nZ2xlIiwiYXBwIiwiaW5pdFByaW1hcnkiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImludGVyc2VjdGlvblJhdGlvIiwidGhyZXNob2xkIiwib2JzZXJ2ZSIsInRyaWdnZXJzIiwiaW5pdEV2ZW50cyIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=