"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navbar: function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Navbar auto */ \n\nconst Navbar = ()=>{\n    const navLinks = [\n        {\n            name: \"logo\",\n            path: \"/\"\n        },\n        {\n            name: \"Fitness\",\n            path: \"/fitness\"\n        },\n        {\n            name: \"Care\",\n            path: \"/care\"\n        },\n        {\n            name: \"Mind\",\n            path: \"/mind\"\n        },\n        {\n            name: \"Store\",\n            path: \"/store\"\n        },\n        {\n            name: \"Location\",\n            path: \"/location\"\n        },\n        {\n            name: \"Login\",\n            path: \"/login\"\n        },\n        {\n            name: \"Cart\",\n            path: \"/cart\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navContainer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: navLinks === null || navLinks === void 0 ? void 0 : navLinks.map((link, ind)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: link.path,\n                            children: link.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\priya\\\\OneDrive\\\\Documents\\\\GitHub\\\\Nextjs\\\\src\\\\components\\\\navbar.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, undefined)\n                    }, ind, false, {\n                        fileName: \"C:\\\\Users\\\\priya\\\\OneDrive\\\\Documents\\\\GitHub\\\\Nextjs\\\\src\\\\components\\\\navbar.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\priya\\\\OneDrive\\\\Documents\\\\GitHub\\\\Nextjs\\\\src\\\\components\\\\navbar.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\priya\\\\OneDrive\\\\Documents\\\\GitHub\\\\Nextjs\\\\src\\\\components\\\\navbar.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\priya\\\\OneDrive\\\\Documents\\\\GitHub\\\\Nextjs\\\\src\\\\components\\\\navbar.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTZCO0FBRXRCLE1BQU1DLFNBQVM7SUFDbEIsTUFBTUMsV0FBVztRQUNiO1lBQUVDLE1BQU07WUFDUEMsTUFBTTtRQUNQO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7S0FDRDtJQUNMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNYLDRFQUFDRTswQkFDSU4scUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVTyxJQUFJLENBQUNDLE1BQUtDLG9CQUNqQiw4REFBQ0M7a0NBQ0csNEVBQUNaLGtEQUFJQTs0QkFBQ2EsTUFBTUgsS0FBS047c0NBQU9NLEtBQUtQOzs7Ozs7dUJBRHhCUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0IsRUFBQztLQS9DWVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzP2E1NjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2TGlua3MgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcImxvZ29cIiwgXHJcbiAgICAgICAgIHBhdGg6IFwiL1wiIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJGaXRuZXNzXCIsXHJcbiAgICAgICAgICBwYXRoOiBcIi9maXRuZXNzXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNhcmVcIixcclxuICAgICAgICAgIHBhdGg6IFwiL2NhcmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWluZFwiLFxyXG4gICAgICAgICAgcGF0aDogXCIvbWluZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdG9yZVwiLFxyXG4gICAgICAgICAgcGF0aDogXCIvc3RvcmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTG9jYXRpb25cIixcclxuICAgICAgICAgIHBhdGg6IFwiL2xvY2F0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICBwYXRoOiBcIi9sb2dpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXJ0XCIsXHJcbiAgICAgICAgICBwYXRoOiBcIi9jYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZDb250YWluZXJcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7bmF2TGlua3M/Lm1hcCgobGluayxpbmQpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5wYXRofT57bGluay5uYW1lfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZiYXIiLCJuYXZMaW5rcyIsIm5hbWUiLCJwYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/navbar.js\n"));

/***/ })

});