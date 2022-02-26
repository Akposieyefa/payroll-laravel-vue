"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Nav_vue-_422b2"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Nav",
  methods: {
    onLogout: function onLogout() {
      axios.post("http://127.0.0.1:8000/api/v1/logout", {
        token: localStorage.getItem("token")
      }, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("token"))
        }
      });
      localStorage.removeItem("token");
      this.$router.push("/");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../css/index.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./resources/js/css/index.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_css_index_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#logo[data-v-7cd4f788] {\n    width: 100px;\n    height: 90px;\n    margin-left: 3rem;\n    margin-top: -1rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7cd4f788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7cd4f788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7cd4f788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Nav.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Nav.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=7cd4f788&scoped=true& */ "./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true&");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js& */ "./resources/js/components/Nav.vue?vue&type=script&lang=js&");
/* harmony import */ var _Nav_vue_vue_type_style_index_0_id_7cd4f788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& */ "./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7cd4f788",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Nav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Nav.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Nav.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_style_index_0_id_7cd4f788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=style&index=0&id=7cd4f788&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Nav_vue_vue_type_template_id_7cd4f788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Nav.vue?vue&type=template&id=7cd4f788&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Nav.vue?vue&type=template&id=7cd4f788&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg",
      attrs: { id: "navbarVertical" },
    },
    [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0",
              attrs: { to: "/dashboard", href: "#" },
            },
            [
              _c("img", {
                attrs: {
                  src: _vm.asset("img/logo.jpeg"),
                  id: "logo",
                  alt: "Website Logo",
                },
              }),
            ]
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "sidebarCollapse" },
            },
            [
              _c("ul", { staticClass: "navbar-nav" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/dashboard" } },
                      [
                        _c("i", { staticClass: "bi bi-house" }),
                        _vm._v(" Dashboard\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: "/departments" },
                      },
                      [
                        _c("i", { staticClass: "bi bi-bar-chart" }),
                        _vm._v(" Departments\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/banks" } },
                      [
                        _c("i", { staticClass: "bi bi-server" }),
                        _vm._v(" Bank\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/levels" } },
                      [
                        _c("i", { staticClass: "bi bi-chat" }),
                        _vm._v(" Levels\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/steps" } },
                      [
                        _c("i", { staticClass: "bi bi-bookmarks" }),
                        _vm._v(" Steps\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/staffs" } },
                      [
                        _c("i", { staticClass: "bi bi-people" }),
                        _vm._v("  Staffs\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/payrolls" } },
                      [
                        _c("i", { staticClass: "bi bi-file-diff" }),
                        _vm._v("  Payroll\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      { staticClass: "nav-link", attrs: { to: "/profile" } },
                      [
                        _c("i", { staticClass: "bi bi-person-square" }),
                        _vm._v("  My Profile\n                    "),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function ($event) {
                          return _vm.onLogout()
                        },
                      },
                    },
                    [
                      _c("i", { staticClass: "bi bi-box-arrow-left" }),
                      _vm._v(" Logout\n                    "),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler ms-n2",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#sidebarCollapse",
          "aria-controls": "sidebarCollapse",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-user d-lg-none" }, [
      _c("div", { staticClass: "dropdown" }, [
        _c(
          "a",
          {
            attrs: {
              href: "#",
              id: "sidebarAvatar",
              role: "button",
              "data-bs-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
          },
          [
            _c("div", { staticClass: "avatar-parent-child" }, [
              _c("img", {
                staticClass: "avatar avatar- rounded-circle",
                attrs: {
                  alt: "Image Placeholder",
                  src: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
                },
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "avatar-child avatar-badge bg-success",
              }),
            ]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu dropdown-menu-end",
            attrs: { "aria-labelledby": "sidebarAvatar" },
          },
          [
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Profile"),
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Settings"),
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Billing"),
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
              _vm._v("Logout"),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);