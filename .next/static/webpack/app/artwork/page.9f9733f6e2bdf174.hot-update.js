"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/artwork/page",{

/***/ "(app-pages-browser)/./src/app/components/Lightbox.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Lightbox.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gallery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_photo_album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-photo-album */ \"(app-pages-browser)/./node_modules/react-photo-album/dist/index.mjs\");\n/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yet-another-react-lightbox */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/index.js\");\n/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yet-another-react-lightbox/styles.css */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/styles.css\");\n/* harmony import */ var yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/fullscreen */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js\");\n/* harmony import */ var yet_another_react_lightbox_plugins_slideshow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/slideshow */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js\");\n/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/index.js\");\n/* harmony import */ var yet_another_react_lightbox_plugins_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/zoom */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js\");\n/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yet-another-react-lightbox/plugins/thumbnails.css */ \"(app-pages-browser)/./node_modules/yet-another-react-lightbox/dist/plugins/thumbnails/thumbnails.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import optional lightbox plugins\n\n\n\n\n\nconst photos = [\n    {\n        src: \"/img/gallery/1.jpg\",\n        width: 634,\n        height: 799\n    },\n    {\n        src: \"/img/gallery/2.jpg\",\n        width: 634,\n        height: 799\n    },\n    {\n        src: \"/img/gallery/3.jpg\",\n        width: 1000,\n        height: 667\n    },\n    {\n        src: \"/img/gallery/4.jpg\",\n        width: 1000,\n        height: 667\n    },\n    {\n        src: \"/img/gallery/5.jpg\",\n        width: 634,\n        height: 799\n    },\n    {\n        src: \"/img/gallery/7.jpg\",\n        width: 1920,\n        height: 1280\n    },\n    {\n        src: \"/img/gallery/8.jpg\",\n        width: 1920,\n        height: 1280\n    },\n    {\n        src: \"/img/gallery/9.jpg\",\n        width: 1920,\n        height: 1280\n    },\n    {\n        src: \"/img/gallery/10.jpg\",\n        width: 1280,\n        height: 853\n    },\n    {\n        src: \"/img/gallery/11.jpg\",\n        width: 1920,\n        height: 1280\n    },\n    {\n        src: \"/img/gallery/12.jpg\",\n        width: 1920,\n        height: 1280\n    },\n    {\n        src: \"/img/gallery/13.jpg\",\n        width: 1920,\n        height: 1280\n    }\n];\nfunction Gallery() {\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_photo_album__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                photos: photos,\n                layout: \"masonry\",\n                targetRowHeight: 150,\n                onClick: (param)=>{\n                    let { index } = param;\n                    return setIndex(index);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/sebastiannadeau/Desktop/Graphic Design/Website/michael-corker-artwork/src/app/components/Lightbox.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                slides: photos,\n                open: index >= 0,\n                index: index,\n                close: ()=>setIndex(-1),\n                // enable optional lightbox plugins\n                plugins: [\n                    yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    yet_another_react_lightbox_plugins_slideshow__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n                    yet_another_react_lightbox_plugins_zoom__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/sebastiannadeau/Desktop/Graphic Design/Website/michael-corker-artwork/src/app/components/Lightbox.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Gallery, \"2JAv0Na7iCnml2ia58x/maqis+c=\");\n_c = Gallery;\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9MaWdodGJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDVTtBQUNPO0FBQ0g7QUFFL0MsbUNBQW1DO0FBQ29DO0FBQ0Y7QUFDRTtBQUNaO0FBQ0E7QUFFM0QsTUFBTU8sU0FBUztJQUNiO1FBQUVDLEtBQUs7UUFBc0JDLE9BQU87UUFBS0MsUUFBUTtJQUFJO0lBQ3JEO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBS0MsUUFBUTtJQUFJO0lBQ3JEO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBTUMsUUFBUTtJQUFJO0lBQ3REO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBTUMsUUFBUTtJQUFJO0lBQ3REO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBS0MsUUFBUTtJQUFJO0lBQ3JEO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0lBQ3ZEO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0lBQ3ZEO1FBQUVGLEtBQUs7UUFBc0JDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0lBQ3ZEO1FBQUVGLEtBQUs7UUFBdUJDLE9BQU87UUFBTUMsUUFBUTtJQUFJO0lBQ3ZEO1FBQUVGLEtBQUs7UUFBdUJDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0lBQ3hEO1FBQUVGLEtBQUs7UUFBdUJDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0lBQ3hEO1FBQUVGLEtBQUs7UUFBdUJDLE9BQU87UUFBTUMsUUFBUTtJQUFLO0NBQ3pEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXBDLHFCQUNFOzswQkFDRSw4REFBQ0MseURBQVVBO2dCQUFDTSxRQUFRQTtnQkFBUU8sUUFBTztnQkFBVUMsaUJBQWlCO2dCQUFLQyxTQUFTO3dCQUFDLEVBQUVKLEtBQUssRUFBRTsyQkFBS0MsU0FBU0Q7Ozs7Ozs7MEJBRXBHLDhEQUFDVixrRUFBUUE7Z0JBQ1BlLFFBQVFWO2dCQUNSVyxNQUFNTixTQUFTO2dCQUNmQSxPQUFPQTtnQkFDUE8sT0FBTyxJQUFNTixTQUFTLENBQUM7Z0JBQ3ZCLG1DQUFtQztnQkFDbkNPLFNBQVM7b0JBQUNqQixxRkFBVUE7b0JBQUVDLG9GQUFTQTtvQkFBRUMscUZBQVVBO29CQUFFQywrRUFBSUE7aUJBQUM7Ozs7Ozs7O0FBSTFEO0dBakJ3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0xpZ2h0Ym94LnRzeD8zNTU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaG90b0FsYnVtIGZyb20gXCJyZWFjdC1waG90by1hbGJ1bVwiO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveFwiO1xuaW1wb3J0IFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvc3R5bGVzLmNzc1wiO1xuXG4vLyBpbXBvcnQgb3B0aW9uYWwgbGlnaHRib3ggcGx1Z2luc1xuaW1wb3J0IEZ1bGxzY3JlZW4gZnJvbSBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvZnVsbHNjcmVlblwiO1xuaW1wb3J0IFNsaWRlc2hvdyBmcm9tIFwieWV0LWFub3RoZXItcmVhY3QtbGlnaHRib3gvcGx1Z2lucy9zbGlkZXNob3dcIjtcbmltcG9ydCBUaHVtYm5haWxzIGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3RodW1ibmFpbHNcIjtcbmltcG9ydCBab29tIGZyb20gXCJ5ZXQtYW5vdGhlci1yZWFjdC1saWdodGJveC9wbHVnaW5zL3pvb21cIjtcbmltcG9ydCBcInlldC1hbm90aGVyLXJlYWN0LWxpZ2h0Ym94L3BsdWdpbnMvdGh1bWJuYWlscy5jc3NcIjtcblxuY29uc3QgcGhvdG9zID0gW1xuICB7IHNyYzogXCIvaW1nL2dhbGxlcnkvMS5qcGdcIiwgd2lkdGg6IDYzNCwgaGVpZ2h0OiA3OTkgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzIuanBnXCIsIHdpZHRoOiA2MzQsIGhlaWdodDogNzk5IH0sXG4gIHsgc3JjOiBcIi9pbWcvZ2FsbGVyeS8zLmpwZ1wiLCB3aWR0aDogMTAwMCwgaGVpZ2h0OiA2NjcgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzQuanBnXCIsIHdpZHRoOiAxMDAwLCBoZWlnaHQ6IDY2NyB9LFxuICB7IHNyYzogXCIvaW1nL2dhbGxlcnkvNS5qcGdcIiwgd2lkdGg6IDYzNCwgaGVpZ2h0OiA3OTkgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzcuanBnXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEyODAgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzguanBnXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEyODAgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzkuanBnXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEyODAgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzEwLmpwZ1wiLCB3aWR0aDogMTI4MCwgaGVpZ2h0OiA4NTMgfSxcbiAgeyBzcmM6IFwiL2ltZy9nYWxsZXJ5LzExLmpwZ1wiLCB3aWR0aDogMTkyMCwgaGVpZ2h0OiAxMjgwIH0sXG4gIHsgc3JjOiBcIi9pbWcvZ2FsbGVyeS8xMi5qcGdcIiwgd2lkdGg6IDE5MjAsIGhlaWdodDogMTI4MCB9LFxuICB7IHNyYzogXCIvaW1nL2dhbGxlcnkvMTMuanBnXCIsIHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEyODAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaG90b0FsYnVtIHBob3Rvcz17cGhvdG9zfSBsYXlvdXQ9XCJtYXNvbnJ5XCIgdGFyZ2V0Um93SGVpZ2h0PXsxNTB9IG9uQ2xpY2s9eyh7IGluZGV4IH0pID0+IHNldEluZGV4KGluZGV4KX0gLz5cblxuICAgICAgPExpZ2h0Ym94XG4gICAgICAgIHNsaWRlcz17cGhvdG9zfVxuICAgICAgICBvcGVuPXtpbmRleCA+PSAwfVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIGNsb3NlPXsoKSA9PiBzZXRJbmRleCgtMSl9XG4gICAgICAgIC8vIGVuYWJsZSBvcHRpb25hbCBsaWdodGJveCBwbHVnaW5zXG4gICAgICAgIHBsdWdpbnM9e1tGdWxsc2NyZWVuLCBTbGlkZXNob3csIFRodW1ibmFpbHMsIFpvb21dfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBob3RvQWxidW0iLCJMaWdodGJveCIsIkZ1bGxzY3JlZW4iLCJTbGlkZXNob3ciLCJUaHVtYm5haWxzIiwiWm9vbSIsInBob3RvcyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiR2FsbGVyeSIsImluZGV4Iiwic2V0SW5kZXgiLCJsYXlvdXQiLCJ0YXJnZXRSb3dIZWlnaHQiLCJvbkNsaWNrIiwic2xpZGVzIiwib3BlbiIsImNsb3NlIiwicGx1Z2lucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Lightbox.tsx\n"));

/***/ })

});