/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_template_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/template-engine */ \"./src/lib/template-engine.js\");\n/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/templates */ \"./src/lib/templates.js\");\n/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/application */ \"./src/lib/application.js\");\n/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/helpers */ \"./src/lib/helpers.js\");\n\n\n\n\n\nconst app = document.querySelector('.app')\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    _lib_application__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderScreen(app, _lib_templates__WEBPACK_IMPORTED_MODULE_1__.levelTemplate, levelConfig)\n})\n\nconst gameConfig = {\n    fn: [dealCards, cardsControl],\n}\n\nconst levelConfig = {\n    fn: [levelListener],\n}\n\nfunction levelListener() {\n    const levelList = document.querySelector('.level__list')\n    const startBtn = document.querySelector('.btn')\n\n    levelList.addEventListener('click', ({ target }) => {\n        levelList.childNodes.forEach((el) => {\n            el.classList.remove('active')\n        })\n        target.parentNode.classList.add('active')\n        _lib_application__WEBPACK_IMPORTED_MODULE_2__[\"default\"].level = target.dataset.value\n    })\n\n    startBtn.addEventListener('click', () => {\n        _lib_application__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderScreen(app, _lib_templates__WEBPACK_IMPORTED_MODULE_1__.gameTemplate, gameConfig)\n        console.log(_lib_application__WEBPACK_IMPORTED_MODULE_2__[\"default\"].level)\n    })\n}\n\nfunction cardsControl() {\n    const cards = document.querySelector('.cards')\n    const allCards = cards.querySelectorAll('.card')\n    allCards.forEach((card) => {\n        card.addEventListener('click', () => {\n            card.classList.toggle('card--open')\n        })\n    })\n}\n\nfunction dealCards() {\n    const cards = document.querySelector('.cards')\n\n    for (let i = 0; i < _lib_helpers__WEBPACK_IMPORTED_MODULE_3__[\"default\"][_lib_application__WEBPACK_IMPORTED_MODULE_2__[\"default\"].level]; i++) {\n        cards.appendChild((0,_lib_template_engine__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(_lib_templates__WEBPACK_IMPORTED_MODULE_1__.cardTemplate))\n    }\n}\n\n\n//# sourceURL=webpack://card_pairs-master/./src/app.js?");

/***/ }),

/***/ "./src/lib/application.js":
/*!********************************!*\
  !*** ./src/lib/application.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _template_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-engine */ \"./src/lib/template-engine.js\");\n\n\nconst application = {\n    renderScreen: function (block, template, config) {\n        block.textContent = ''\n        block.appendChild((0,_template_engine__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(template))\n\n        config['fn'].forEach((fn) => fn())\n    },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (application);\n\n\n//# sourceURL=webpack://card_pairs-master/./src/lib/application.js?");

/***/ }),

/***/ "./src/lib/helpers.js":
/*!****************************!*\
  !*** ./src/lib/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dificultLevel = {\n    1: 6,\n    2: 12,\n    3: 18,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dificultLevel);\n\n\n//# sourceURL=webpack://card_pairs-master/./src/lib/helpers.js?");

/***/ }),

/***/ "./src/lib/template-engine.js":
/*!************************************!*\
  !*** ./src/lib/template-engine.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"templateEngine\": () => (/* binding */ templateEngine)\n/* harmony export */ });\nfunction templateEngine(block) {\n    if (block === undefined || block === null || block === false) {\n        return document.createTextNode('')\n    }\n\n    if (\n        typeof block === 'string' ||\n        typeof block === 'number' ||\n        block === true\n    ) {\n        return document.createTextNode(block)\n    }\n\n    if (Array.isArray(block)) {\n        const fragment = document.createDocumentFragment()\n\n        block.forEach((item) => {\n            const el = templateEngine(item)\n\n            fragment.appendChild(el)\n        })\n\n        return fragment\n    }\n\n    const element = document.createElement(block.tag)\n\n    if (block.classNames) {\n        element.classList.add(...[].concat(block.classNames.filter(Boolean)))\n    }\n\n    if (block.attrs) {\n        const keys = Object.keys(block.attrs)\n\n        keys.forEach((key) => {\n            element.setAttribute(key, block.attrs[key])\n        })\n    }\n\n    const content = templateEngine(block.content)\n\n    element.appendChild(content)\n\n    return element\n}\n\n\n//# sourceURL=webpack://card_pairs-master/./src/lib/template-engine.js?");

/***/ }),

/***/ "./src/lib/templates.js":
/*!******************************!*\
  !*** ./src/lib/templates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardTemplate\": () => (/* binding */ cardTemplate),\n/* harmony export */   \"gameTemplate\": () => (/* binding */ gameTemplate),\n/* harmony export */   \"levelTemplate\": () => (/* binding */ levelTemplate)\n/* harmony export */ });\nconst levelTemplate = {\n    tag: 'div',\n    classNames: ['level__choice'],\n    content: [\n        {\n            tag: 'h2',\n            classNames: ['level__title'],\n            content: 'Выбери сложность',\n        },\n        {\n            tag: 'ul',\n            classNames: ['level__list'],\n            content: [\n                {\n                    tag: 'li',\n                    classNames: ['level__item'],\n                    content: [\n                        {\n                            tag: 'button',\n                            classNames: ['level__button'],\n                            attrs: { 'data-value': '1' },\n                            content: 1,\n                        },\n                    ],\n                },\n                {\n                    tag: 'li',\n                    classNames: ['level__item'],\n                    content: [\n                        {\n                            tag: 'button',\n                            classNames: ['level__button'],\n                            attrs: { 'data-value': '2' },\n                            content: 2,\n                        },\n                    ],\n                },\n                {\n                    tag: 'li',\n                    classNames: ['level__item'],\n                    content: [\n                        {\n                            tag: 'button',\n                            classNames: ['level__button'],\n                            attrs: { 'data-value': '3' },\n                            content: 3,\n                        },\n                    ],\n                },\n            ],\n        },\n        {\n            tag: 'button',\n            classNames: ['btn', 'choice__btn'],\n            content: 'Старт',\n        },\n    ],\n}\n\nconst gameTemplate = {\n    tag: 'div',\n    classNames: ['gamescreen'],\n    content: [\n        {\n            tag: 'div',\n            classNames: ['game__header'],\n            content: [\n                {\n                    tag: 'div',\n                    classNames: ['game__timer'],\n                    content: '00.00',\n                },\n                {\n                    tag: 'button',\n                    classNames: ['btn', 'btn__restart'],\n                    content: 'Начать заново',\n                },\n            ],\n        },\n        {\n            tag: 'div',\n            classNames: ['game__board'],\n            content: [\n                {\n                    tag: 'div',\n                    classNames: ['cards'],\n                    content: '',\n                },\n            ],\n        },\n    ],\n}\n\nconst cardTemplate = {\n    tag: 'div',\n    classNames: ['card__container'],\n    content: [\n        {\n            tag: 'div',\n            classNames: ['card'],\n            content: [\n                {\n                    tag: 'div',\n                    classNames: ['back'],\n                    content: '',\n                },\n                {\n                    tag: 'div',\n                    classNames: ['front'],\n                    content: '',\n                },\n            ],\n        },\n    ],\n}\n\n\n//# sourceURL=webpack://card_pairs-master/./src/lib/templates.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;