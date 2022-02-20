"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_staff_CreateStaff_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "CreateStaff",
  components: {
    Header: function Header() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Header */ "./resources/js/components/Header.vue"));
    },
    Nav: function Nav() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Nav_vue-_422b0").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Nav.vue */ "./resources/js/components/Nav.vue"));
    }
  },
  created: function created() {
    this.getHelpers();
  },
  data: function data() {
    return {
      staff: {
        surname: "",
        othername: "",
        email: "",
        phone: "",
        dept: 0,
        step: 0,
        level: 0,
        bank: 0,
        bank_sort_code: "",
        state: 0,
        lga: 0,
        staff_id: "",
        remark: "",
        status: "",
        nhf_number: "",
        rsa_code: "",
        rsa_pin: "",
        conpcass: "",
        gender: 0,
        union: 0,
        dob: "",
        appointment_date: "",
        last_promotion_date: "",
        month_of_increment: "",
        branch: "",
        coops_deposit: ""
      },
      departments: [],
      levels: [],
      steps: [],
      banks: [],
      states: [],
      lgas: [],
      unions: []
    };
  },
  methods: {
    getHelpers: function getHelpers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("create-helpers", {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem("token"))
                  }
                });

              case 2:
                response = _context.sent;
                _this.departments = response.data.data.departments;
                _this.steps = response.data.data.steps;
                _this.levels = response.data.data.levels;
                _this.banks = response.data.data.banks;
                _this.states = response.data.data.states;
                _this.unions = response.data.data.unions;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStateLga: function getStateLga(state_id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("lga-helper/" + state_id, {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem("token"))
                  }
                });

              case 2:
                response = _context2.sent;
                _this2.lgas = response.data.data.lgas;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    createStaff: function createStaff() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("staffs", {
                  staff_id: _this3.staff.staff_id,
                  surname: _this3.staff.surname,
                  other_name: _this3.staff.othername,
                  department_id: _this3.staff.dept,
                  conpcass: _this3.staff.conpcass,
                  step_id: _this3.staff.step,
                  sex: _this3.staff.gender,
                  union_id: _this3.staff.union,
                  dob: _this3.staff.dob,
                  appointment_date: _this3.staff.appointment_date,
                  last_promotion_date: _this3.staff.last_promotion_date,
                  month_of_increment: _this3.staff.month_of_increment,
                  email: _this3.staff.email,
                  level_id: _this3.staff.level,
                  state_id: _this3.staff.state,
                  lga_id: _this3.staff.lga,
                  remark: _this3.staff.remark,
                  bank_id: _this3.staff.bank,
                  branch: _this3.staff.branch,
                  bank_sort_code: _this3.staff.bank_sort_code,
                  bvn: _this3.staff.bvn,
                  nhf_number: _this3.staff.nhf_number,
                  rsa_code: _this3.staff.rsa_code,
                  rsa_pin: _this3.staff.rsa_pin,
                  status: _this3.staff.status,
                  phone_number: _this3.staff.phone,
                  coops_deposit: _this3.staff.coops_deposit
                }, {
                  headers: {
                    Authorization: "Bearer ".concat(localStorage.getItem("token"))
                  }
                });

              case 3:
                response = _context3.sent;

                _this3.$toasted.success(response.data.message);

                _this3.clearDate();

                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                _this3.$toasted.error(_context3.t0.response.data.message);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    clearDate: function clearDate() {
      this.staff.staff_id = "";
      this.staff.surname = "";
      this.staff.othername = "";
      this.staff.dept = "";
      this.staff.conpcass = "";
      this.staff.step = "";
      this.staff.gender = "";
      this.staff.union = "";
      this.staff.dob = "";
      this.staff.appointment_date = "";
      this.staff.last_promotion_date = "";
      this.staff.month_of_increment = "";
      this.staff.email = "";
      this.staff.level = "";
      this.staff.state = "";
      this.staff.lga = "";
      this.staff.remark = "";
      this.staff.bank = "";
      this.staff.branch = "";
      this.staff.bank_sort_code = "";
      this.staff.bvn = "";
      this.staff.nhf_number = "";
      this.staff.rsa_code = "";
      this.staff.rsa_pin = "";
      this.staff.status = "";
      this.staff.phone = "";
      this.staff.coops_deposit = "";
    }
  }
});

/***/ }),

/***/ "./resources/js/views/backend/staff/CreateStaff.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/backend/staff/CreateStaff.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true& */ "./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true&");
/* harmony import */ var _CreateStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateStaff.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ad7d526a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/staff/CreateStaff.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateStaff.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateStaff_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateStaff_vue_vue_type_template_id_ad7d526a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/staff/CreateStaff.vue?vue&type=template&id=ad7d526a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      {
        staticClass:
          "d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary",
      },
      [
        _c("Nav"),
        _vm._v(" "),
        _c("div", { staticClass: "h-screen flex-grow-1 overflow-y-lg-auto" }, [
          _c(
            "header",
            { staticClass: "bg-surface-primary border-bottom pt-6 pb-5" },
            [
              _c("div", { staticClass: "container-fluid" }, [
                _c("div", { staticClass: "mb-npx" }, [
                  _c("div", { staticClass: "row align-items-center" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6 col-12 text-sm-end" }, [
                      _c(
                        "div",
                        { staticClass: "mx-n1" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn d-inline-flex btn-sm btn-dark mx-1",
                              attrs: {
                                to: "/staffs",
                                "data-toggle": "modal",
                                "data-target": "#form",
                              },
                            },
                            [
                              _c("span", { staticClass: " pe-2" }, [
                                _c("i", { staticClass: "bi bi-plus" }),
                              ]),
                              _vm._v(" "),
                              _c("span", [_vm._v("Staff List")]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("main", { staticClass: "py-6 bg-surface-secondary" }, [
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "card shadow border-0 mb-7" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "container" }, [
                  _c("div", [
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "row jumbotron" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "surname" } }, [
                          _vm._v("Surname"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.surname,
                              expression: "staff.surname",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "surname",
                            placeholder: "Enter surname",
                            required: "",
                          },
                          domProps: { value: _vm.staff.surname },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "surname",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "other-name" } }, [
                          _vm._v("Othername"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.othername,
                              expression: "staff.othername",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "other-name",
                            placeholder: "Enter othername",
                            required: "",
                          },
                          domProps: { value: _vm.staff.othername },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "othername",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.email,
                              expression: "staff.email",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "email",
                            placeholder: "Enter email.",
                            required: "",
                          },
                          domProps: { value: _vm.staff.email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "email", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "staff-id" } }, [
                          _vm._v("Staff ID"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.staff_id,
                              expression: "staff.staff_id",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "staff-id",
                            placeholder: "Enter staff id",
                            required: "",
                          },
                          domProps: { value: _vm.staff.staff_id },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "staff_id",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "phone-number" } }, [
                          _vm._v("Phone"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.phone,
                              expression: "staff.phone",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "phone-number",
                            placeholder: "Enter phone number",
                            required: "",
                          },
                          domProps: { value: _vm.staff.phone },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "phone", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "dob" } }, [
                          _vm._v("Date Of Birth"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.dob,
                              expression: "staff.dob",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "dob", required: "" },
                          domProps: { value: _vm.staff.dob },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "dob", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "coops-deposit" } }, [
                          _vm._v("Coops Deposit"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.coops_deposit,
                              expression: "staff.coops_deposit",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "coops-deposit",
                            placeholder: "Enter coops deposit",
                            required: "",
                          },
                          domProps: { value: _vm.staff.coops_deposit },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "coops_deposit",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "conpcass" } }, [
                          _vm._v("Conpcass"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.conpcass,
                              expression: "staff.conpcass",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "conpcass",
                            placeholder: "Enter conpcass",
                            required: "",
                          },
                          domProps: { value: _vm.staff.conpcass },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "conpcass",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "appointment-date" } }, [
                          _vm._v("Appointment Date"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.appointment_date,
                              expression: "staff.appointment_date",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            id: "appointment-date",
                            required: "",
                          },
                          domProps: { value: _vm.staff.appointment_date },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "appointment_date",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "last-promotion" } }, [
                          _vm._v("Last Promotion"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.last_promotion_date,
                              expression: "staff.last_promotion_date",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            id: "last-promotion",
                            required: "",
                          },
                          domProps: { value: _vm.staff.last_promotion_date },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "last_promotion_date",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "Country" } }, [
                          _vm._v("Bank"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.bank,
                                expression: "staff.bank",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "bank",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select a bank"),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.banks, function (bank, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: bank.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(bank.bank_name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "bvn" } }, [_vm._v("BVN")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.bvn,
                              expression: "staff.bvn",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            id: "bvn",
                            placeholder: "Enter bvn",
                            required: "",
                          },
                          domProps: { value: _vm.staff.bvn },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "bvn", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", [_vm._v("Bank Branch")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.branch,
                              expression: "staff.branch",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Enter bank branch.",
                            required: "",
                          },
                          domProps: { value: _vm.staff.branch },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "branch", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "dpt" } }, [
                          _vm._v("Department"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.dept,
                                expression: "staff.dept",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "dept",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select a department"),
                            ]),
                            _vm._v(" "),
                            _vm._l(
                              _vm.departments,
                              function (department, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    staticClass: "form-control",
                                    domProps: { value: department.id },
                                  },
                                  [
                                    _vm._v(
                                      " " +
                                        _vm._s(department.name) +
                                        "\n                                            "
                                    ),
                                  ]
                                )
                              }
                            ),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "Country" } }, [
                          _vm._v("Level"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.level,
                                expression: "staff.level",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "level",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select a level"),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.levels, function (lev, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: lev.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(lev.name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "Country" } }, [
                          _vm._v("Step"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.step,
                                expression: "staff.step",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "step",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select a step"),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.steps, function (stp, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: stp.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(stp.name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "nhf-number" } }, [
                          _vm._v("NHF Number"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.nhf_number,
                              expression: "staff.nhf_number",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "nhf-number",
                            placeholder: "Enter nhf-number",
                            required: "",
                          },
                          domProps: { value: _vm.staff.nhf_number },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "nhf_number",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "rsa-code" } }, [
                          _vm._v("RSA Code"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.rsa_code,
                              expression: "staff.rsa_code",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "rsa-code",
                            placeholder: "Enter rsa-code",
                            required: "",
                          },
                          domProps: { value: _vm.staff.rsa_code },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "rsa_code",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "rsa-pin" } }, [
                          _vm._v("RSA Pin"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.rsa_pin,
                              expression: "staff.rsa_pin",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "rsa-pin",
                            placeholder: "Enter rsa-pin",
                            required: "",
                          },
                          domProps: { value: _vm.staff.rsa_pin },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "rsa_pin",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "remark" } }, [
                          _vm._v("Remark"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.remark,
                              expression: "staff.remark",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "remark",
                            placeholder: "Enter remark",
                            required: "",
                          },
                          domProps: { value: _vm.staff.remark },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "remark", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6 form-group" }, [
                        _c("label", { attrs: { for: "status" } }, [
                          _vm._v("Status"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.status,
                              expression: "staff.status",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "status",
                            placeholder: "Enter status",
                            required: "",
                          },
                          domProps: { value: _vm.staff.status },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.staff, "status", $event.target.value)
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "inc" } }, [
                          _vm._v("Month of Increment"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.month_of_increment,
                              expression: "staff.month_of_increment",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "date", id: "inc", required: "" },
                          domProps: { value: _vm.staff.month_of_increment },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "month_of_increment",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "srt_code" } }, [
                          _vm._v("Bank sort code"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.staff.bank_sort_code,
                              expression: "staff.bank_sort_code",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", id: "srt_code", required: "" },
                          domProps: { value: _vm.staff.bank_sort_code },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.staff,
                                "bank_sort_code",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "Country" } }, [
                          _vm._v("Union"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.union,
                                expression: "staff.union",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "union",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select staff union"),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.unions, function (union, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: union.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(union.union_name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "cod" } }, [
                          _vm._v("State of Origin"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.state,
                                expression: "staff.state",
                              },
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.staff,
                                    "state",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function ($event) {
                                  return _vm.getStateLga(_vm.staff.state)
                                },
                              ],
                            },
                          },
                          [
                            _c(
                              "option",
                              {
                                attrs: {
                                  "data-countryCode": "US",
                                  value: "0",
                                  selected: "",
                                },
                              },
                              [_vm._v("Select State")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.states, function (state, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: state.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(state.state_name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "lga" } }, [
                          _vm._v("Local government area"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.lga,
                                expression: "staff.lga",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { id: "lga" },
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "lga",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "form-control",
                                attrs: { value: "0", selected: "" },
                              },
                              [_vm._v("Select local government area")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.lgas, function (lga, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  staticClass: "form-control",
                                  domProps: { value: lga.id },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(lga.lga_name) +
                                      "\n                                            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4 form-group" }, [
                        _c("label", { attrs: { for: "sex" } }, [
                          _vm._v("Gender"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.staff.gender,
                                expression: "staff.gender",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { id: "gender" },
                            on: {
                              change: function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.staff,
                                  "gender",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "0" } }, [
                              _vm._v("Select gender"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "male" } }, [
                              _vm._v("Male"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "female" } }, [
                              _vm._v("Female"),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12 form-group mb-0" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-dark btn-sm float-right",
                            on: {
                              click: function ($event) {
                                return _vm.createStaff()
                              },
                            },
                          },
                          [_vm._v("Submit")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 col-12 mb-4 mb-sm-0" }, [
      _c("h1", { staticClass: "h2 mb-0 ls-tight" }, [_vm._v("Onboard Staff")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Add New Staff")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-3 offset-9 form-group" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "file", placeholder: "Select profile image" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);