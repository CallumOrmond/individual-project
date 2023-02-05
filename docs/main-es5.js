function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/algorithm-page/algorithm-navbar/algorithm-navbar.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithm-navbar/algorithm-navbar.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AlgorithmNavbarComponent */

  /***/
  function srcAppAlgorithmPageAlgorithmNavbarAlgorithmNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmNavbarComponent", function () {
      return AlgorithmNavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlgorithmNavbarComponent = /*#__PURE__*/function () {
      function AlgorithmNavbarComponent() {
        _classCallCheck(this, AlgorithmNavbarComponent);
      }

      _createClass(AlgorithmNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlgorithmNavbarComponent;
    }();

    AlgorithmNavbarComponent.ɵfac = function AlgorithmNavbarComponent_Factory(t) {
      return new (t || AlgorithmNavbarComponent)();
    };

    AlgorithmNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlgorithmNavbarComponent,
      selectors: [["algorithm-navbar"]],
      decls: 0,
      vars: 0,
      template: function AlgorithmNavbarComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FsZ29yaXRobS1uYXZiYXIvYWxnb3JpdGhtLW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'algorithm-navbar',
          templateUrl: './algorithm-navbar.component.html',
          styleUrls: ['./algorithm-navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithm-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/algorithm-page/algorithm-page.component.ts ***!
    \************************************************************/

  /*! exports provided: AlgorithmPageComponent */

  /***/
  function srcAppAlgorithmPageAlgorithmPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmPageComponent", function () {
      return AlgorithmPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-guide-dialog/animation-guide-dialog.component */
    "./src/app/algorithm-page/animation-guide-dialog/animation-guide-dialog.component.ts");
    /* harmony import */


    var _edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component */
    "./src/app/algorithm-page/edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component.ts");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/canvas/canvas.service */
    "./src/app/algorithm-page/services/canvas/canvas.service.ts");
    /* harmony import */


    var _animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./animations/algorithm-animation.service */
    "./src/app/algorithm-page/animations/algorithm-animation.service.ts");
    /* harmony import */


    var _utils_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../utils/utils.service */
    "./src/app/utils/utils.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/algorithm-page/sidebar/sidebar.component.ts");
    /* harmony import */


    var _animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./animation-container/agent-titles/agent-titles.component */
    "./src/app/algorithm-page/animation-container/agent-titles/agent-titles.component.ts");
    /* harmony import */


    var angular_resize_event__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular-resize-event */
    "./node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
    /* harmony import */


    var _playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./playback-controls/playback-controls.component */
    "./src/app/algorithm-page/playback-controls/playback-controls.component.ts");

    var _c0 = ["canvas"];

    function AlgorithmPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 27);
      }
    }

    function AlgorithmPageComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.SRstableText);
      }
    }

    function AlgorithmPageComponent_mat_icon_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_mat_icon_19_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.stopTutorial();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "disabled": a0
      };
    };

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "col-md-9": a0,
        "col-md-12": a1,
        "moveContentToTop": a2
      };
    }; // -------------------------------------------------- FILE DESCRIPTION

    /*
    
    algorithm-page.component.ts
    
    This is the Typescript file for the algorithm page (algorithm-page.component.html).
    
    Purpose:
      - Acts as a "main" class for the algorithm page
      - Mediates interaction between all other services
    
    Flow:
      - When algorithm page is to be loaded, run the constructor, injecting all necessary services
      - ngOnInit() is then run, linking the global canvas variable for the canvasService (having a canvasService allows us to make calls to draw elements from anywhere)
      - Set listener functions for the following actions:
        - keypress down:
            handleKeyboardEvent(event: KeyboardEvent): void
        - home link (algmatch) clicked:
            async goHome(): Promise<void>
        - generate new preferences button clicked:
            async generateNewPreferences(): Promise<void>
        - toggle sidebar button clicked:
            async toggleSidebar(): Promise<void>
    
    Functions in this file:
      - ngOnInit(): void
      - ngAfterViewInit(): void
      - handleKeyboardEvent(event: KeyboardEvent): void
    
      - openEditPreferencesDialog(): void
      - openAnimationGuideDialog(): void
    
      - async goHome(): Promise<void>
      - async generateNewPreferences(): Promise<void>
      - async toggleSidebar(): Promise<void>
    
      - nextTutorialStep(): void
      - startTutorial(): void
      - sidebarTutorial(): void
      - mainContentTutorial(): void
      - stopTutorial(): void
    
    */
    // -------------------------------------------------- CODE


    var AlgorithmPageComponent = /*#__PURE__*/function () {
      // --------------------------------------------------------------------------------- | INIT FUNCTIONS
      function AlgorithmPageComponent(playback, // injecting the playback service
      algorithmService, // injecting the algorithm service
      drawService, // injecting the canvas service
      animation, utils, dialog, // injecting the dialog component
      router // injecting the router service (for programmatic route navigation)
      ) {
        _classCallCheck(this, AlgorithmPageComponent);

        this.playback = playback;
        this.algorithmService = algorithmService;
        this.drawService = drawService;
        this.animation = animation;
        this.utils = utils;
        this.dialog = dialog;
        this.router = router;
        this.showCode = false;
        this.dialogOpen = false;
        this.duringAnimation = false;
        this.firstSelection = true;
        this.algorithm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''); // where SR is going to generate a stable matching or a unstable matching

        this.SRstable = true;
        this.SRstableText = "Generating Stable Matchings";
      } // function that runs when page is created


      _createClass(AlgorithmPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // set the global canvas element (in the canvasService) to the canvas on this page
          this.drawService.canvas = this.canvas;
          this.drawService.ctx = this.canvas.nativeElement.getContext('2d'); // debugging: use the following lines (113-121) to test individual algorithms
          // you can use this in conjunction with changing the routing in order to direct to the animation page (so you don't have to keep selecting an algorithm through the main page, etc.)
          // let group1 = 5;
          // let group2 = 5;
          // // let alg: string = "smp-man-gs";
          // let alg: string = "hr-resident-egs";
          // this.algorithmService.numberOfGroup1Agents = group1;
          // this.algorithmService.numberOfGroup2Agents = group2;
          // this.algorithmService.currentAlgorithm = this.algorithmService.mapOfAvailableAlgorithms.get(alg);
          // this.playback.setAlgorithm(alg, group1, group2);

          this.drawService.initialise(); // (un)comment the line below to (disable)/enable working algorithm selection

          this.playback.setAlgorithm(this.algorithmService.currentAlgorithm.id, this.algorithmService.numberOfGroup1Agents, this.algorithmService.numberOfGroup2Agents); // initialise all of the popovers for the tutorial (they won't appear without this function)

          $(function () {
            $('[data-toggle="popover"]').popover();
          }); // initialise the tutorial to the beginning

          this.tutorialStep = 0;
        } // function that runs when page is visible to user

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.animation.loadPage();
        } // creating a listener function for keydown events
        // Key:
        // (< arrow) or (a) == backstep in algorithm
        // (> arrow) or (d) == forward step in algorithm
        // (r) or (#) == generate new preferences
        // (e) or (]) == open edit preferences dialog

      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (!this.dialogOpen && this.tutorialStep == 0) {
            // disable events on tutorial or edit preferences open
            if (event.key == "ArrowRight" || event.key == "d") {
              if (!(!this.playback.pause || this.playback.stepCounter >= this.playback.numCommands)) {
                this.playback.forwardStep();
              }
            } else if (event.key == "ArrowLeft" || event.key == "a") {
              if (!(!this.playback.pause || this.playback.stepCounter == 0)) {
                this.playback.backStep();
              }
            } else if (event.key == " ") {
              if (!(this.playback.stepCounter >= this.playback.numCommands)) {
                this.playback.toggle();
              }
            } else if (event.key == "r" || event.key == "#") {
              this.generateNewPreferences();
            } else if (event.key == "e" || event.key == "]") {
              this.openEditPreferencesDialog();
            }
          }
        } // --------------------------------------------------------------------------------- | GENERAL FUNCTIONS
        // open the edit preferences dialog with a callback function

      }, {
        key: "openEditPreferencesDialog",
        value: function openEditPreferencesDialog() {
          var _this = this;

          var dialogRef = this.dialog.open(_edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditPreferencesDialogComponent"]);
          this.dialogOpen = true;
          dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogOpen = false;
          });
        } // open the animation guide dialog with a callback function

      }, {
        key: "openAnimationGuideDialog",
        value: function openAnimationGuideDialog() {
          var _this2 = this;

          var dialogRef = this.dialog.open(_animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AnimationGuideDialogComponent"]);
          this.dialogOpen = true;
          dialogRef.afterClosed().subscribe(function (result) {
            _this2.dialogOpen = false;
          });
        } // --------------------------------------------------------------------------------- | ON CLICK FUNCTIONS
        // function run when home link clicked
        // start animation for going home, delay 1000ms, then change route to home

      }, {
        key: "goHome",
        value: function goHome() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.animation.goHome();
                    _context.next = 3;
                    return this.utils.delay(1000);

                  case 3:
                    this.router.navigateByUrl("/");

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // function run when generate new preferences button clicked

      }, {
        key: "generateNewPreferences",
        value: function generateNewPreferences() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var command, a, i;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // clears any code highlighting
                    command = this.playback.commandList[this.playback.previousStepCounter];
                    a = document.getElementById("line" + command["lineNumber"]);
                    a.style.backgroundColor = "";
                    a.style.color = ""; // animates changing of preferences (fade in/out)

                    this.animation.fadeCanvasOut();
                    _context2.next = 7;
                    return this.utils.delay(300);

                  case 7:
                    for (i = 0; i < 1; i++) {
                      // let agent1Count: number = Math.floor(Math.random() * (9 - 2) + 2);
                      // let agent2Count: number = Math.floor(Math.random() * (9 - 2) + 2);
                      // this.playback.setAlgorithm(this.algorithmService.currentAlgorithm.id, agent1Count, agent2Count);
                      console.log(this.algorithmService.currentAlgorithm.name);

                      if (this.algorithmService.currentAlgorithm.name == "Stable Roommates Problem") {
                        console.log("yes", this.SRstable);
                        this.playback.setAlgorithm(this.algorithmService.currentAlgorithm.id, this.algorithmService.numberOfGroup1Agents, this.algorithmService.numberOfGroup2Agents, null, this.SRstable);
                      } else {
                        this.playback.setAlgorithm(this.algorithmService.currentAlgorithm.id, this.algorithmService.numberOfGroup1Agents, this.algorithmService.numberOfGroup2Agents);
                      }
                    }

                    this.animation.fadeCanvasIn();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // function run when toggle sidebar button clicked (top left)

      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var mainContent;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.duringAnimation = true;
                    mainContent = document.getElementById("mainContent");

                    if (this.showCode) {
                      _context3.next = 12;
                      break;
                    }

                    // hide sidebar and content
                    this.animation.hideSidebar();
                    this.animation.hideMainContent();
                    _context3.next = 7;
                    return this.utils.delay(700);

                  case 7:
                    // show sidebar and content
                    mainContent.style.position = "";
                    this.animation.showMainContent();
                    this.showCode = !this.showCode;
                    _context3.next = 20;
                    break;

                  case 12:
                    // hide content
                    this.animation.hideMainContent();
                    _context3.next = 15;
                    return this.utils.delay(400);

                  case 15:
                    // show sidebar
                    this.showCode = !this.showCode;
                    this.animation.showSidebar();
                    _context3.next = 19;
                    return this.utils.delay(200);

                  case 19:
                    // show content
                    this.animation.showMainContent();

                  case 20:
                    _context3.next = 22;
                    return this.utils.delay(200);

                  case 22:
                    this.duringAnimation = false;

                  case 23:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ChangeStableSR",
        value: function ChangeStableSR() {
          if (this.SRstable == true) {
            this.SRstable = false;
            this.SRstableText = "Generating Unstable Matchings";
          } else {
            this.SRstable = true;
            this.SRstableText = "Generating Stable Matchings";
          }

          console.log("New SR setting", this.SRstable);
        } // --------------------------------------------------------------------------------- | TUTORIAL FUNCTIONS
        // function run when ">" arrow clicked in tutorial
        // progresses to next stage of tutorial

      }, {
        key: "nextTutorialStep",
        value: function nextTutorialStep() {
          // step 1 (shows sidebar so tutorial doesn't break)
          if (this.tutorialStep == 0) {
            if (this.showCode) {
              this.toggleSidebar();
            }

            this.startTutorial(); // step 2
          } else if (this.tutorialStep == 1) {
            this.sidebarTutorial(); // step 3
          } else if (this.tutorialStep == 2) {
            this.mainContentTutorial(); // step 4
          } else if (this.tutorialStep == 3) {
            this.stopTutorial();
          }
        } // functions to hide/show appropriate popovers for tutorial steps

      }, {
        key: "startTutorial",
        value: function startTutorial() {
          this.tutorialStep += 1;
          $('.navbarPopover').popover('show');
        }
      }, {
        key: "sidebarTutorial",
        value: function sidebarTutorial() {
          this.tutorialStep += 1;
          $('.navbarPopover').popover('hide');
          $('.sidebarPopover').popover('show');
        }
      }, {
        key: "mainContentTutorial",
        value: function mainContentTutorial() {
          this.tutorialStep += 1;
          $('.sidebarPopover').popover('hide');
          $('.mainContentPopover').popover('show');
        }
      }, {
        key: "stopTutorial",
        value: function stopTutorial() {
          this.tutorialStep = 0;
          $('.navbarPopover').popover('hide');
          $('.sidebarPopover').popover('hide');
          $('.mainContentPopover').popover('hide');
        }
      }]);

      return AlgorithmPageComponent;
    }();

    AlgorithmPageComponent.ɵfac = function AlgorithmPageComponent_Factory(t) {
      return new (t || AlgorithmPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_5__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_6__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_7__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_8__["AlgorithmAnimationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
    };

    AlgorithmPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AlgorithmPageComponent,
      selectors: [["algorithm-page"]],
      viewQuery: function AlgorithmPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      hostBindings: function AlgorithmPageComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function AlgorithmPageComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      decls: 38,
      vars: 44,
      consts: [["class", "covering-panel", 4, "ngIf"], [1, "navbar", "alg-navbar", "sticky-top", "navbar-light", "p-0", "moveToTop", "shadow-lg"], [1, "col-3", "text-left", "align-middle", 2, "height", "100%"], [1, "align-middle", 2, "display", "inline-block", "height", "100%"], ["data-toggle", "popover", "data-placement", "bottom", "title", "Menu button", "data-content", "Click this to hide or expand the sidebar underneath when not in this tutorial!", "data-trigger", "manual", 1, "navbarIconButton", "unselectable", "mr-4", "navbarPopover", 3, "matTooltip", "ngClass", "click"], ["matTooltip", "Go Home", 1, "unselectable", 2, "cursor", "pointer", "vertical-align", "-2px", 3, "ngClass", "click"], [1, "display-1", 2, "font-size", "20px"], ["id", "alg"], ["id", "match"], ["data-toggle", "popover", "data-placement", "bottom", "title", "Tutorial", "data-content", "This short tutorial will walk you through the sections of this page. Click the arrow in the top right to move to the next step of the tutorial! Or you can click the x, also in the top right of the screen, to stop the tutorial.", "data-trigger", "manual", 1, "col-6", "text-center", "navbarPopover"], [2, "color", "white", "font-size", "0.98rem", "font-weight", "350"], [1, "col-3", "text-right"], ["class", "col", 4, "ngIf"], ["matTooltip", "New", "mat-button", "", 1, "navbarIconButton", "unselectable", "mr-4", 3, "ngClass", "click"], ["class", "navbarIconButton unselectable mr-4", "matTooltip", "Stop Tutorial", 3, "click", 4, "ngIf"], ["matTooltip", "Generate New Random Preferences", 1, "navbarIconButton", "unselectable", "mr-4", 3, "ngClass", "click"], ["matTooltip", "Edit Preferences", "mat-button", "", 1, "navbarIconButton", "unselectable", "mr-4", 3, "ngClass", "click"], [1, "navbarIconButton", "unselectable", "mr-4", 3, "matTooltip", "ngClass", "click"], ["matTooltip", "Animation Guide", 1, "navbarIconButton", "unselectable", "mr-4", 3, "ngClass", "click"], ["data-toggle", "popover", "data-placement", "bottom", "title", "Actions", "data-content", "In order from left to right, you can: stop this tutorial, generate new preferences, edit preferences, toggle all preferences or only relevant preferences, see an animation guide, or advance the tutorial.", "data-trigger", "manual", 1, "navbarIconButton", "unselectable", "mr-2", "navbarPopover", 3, "matTooltip", "ngClass", "click"], [1, "container-fluid", "main"], [3, "showCode", "tutorialStep", "showCodeChange", "tutorialStepChange"], ["id", "mainContent", 1, "grid-container-algorithm", "ml-sm-auto", 2, "background-color", "white", "height", "100%", "display", "grid", "grid-template-rows", "0.39fr 3.4fr 0.8fr", "padding-left", "0px", "padding-right", "0px", 3, "ngClass"], [3, "showCode", "showCodeChange"], ["id", "parent", "data-toggle", "popover", "data-placement", "left", "title", "Algorithm Display", "data-content", "This is where you can see the animation for the algorithm! Green lines mean there is a matching between 2 circles, and red lines mean there is a proposal currently being considered. If you want more information, click on the info button next to the tutorial button!", "data-trigger", "manual", 1, "mainContentPopover", 2, "min-height", "400px", 3, "resized"], ["id", "myCanvas", 2, "min-height", "280px", "max-width", "100%", "height", "100%"], ["canvas", ""], [1, "covering-panel"], [1, "col"], ["matTooltip", "Stop Tutorial", 1, "navbarIconButton", "unselectable", "mr-4", 3, "click"]],
      template: function AlgorithmPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlgorithmPageComponent_div_0_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_4_listener($event) {
            ctx.toggleSidebar();
            return $event.stopImmediatePropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_a_click_6_listener() {
            return ctx.goHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "alg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "match");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AlgorithmPageComponent_div_16_Template, 3, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_17_listener() {
            return ctx.ChangeStableSR();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AlgorithmPageComponent_mat_icon_19_Template, 2, 0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_20_listener() {
            return ctx.generateNewPreferences();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_22_listener() {
            return ctx.openEditPreferencesDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_24_listener($event) {
            ctx.drawService.alwaysShowPreferences = !ctx.drawService.alwaysShowPreferences;
            ctx.drawService.redrawCanvas();
            return $event.stopImmediatePropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_26_listener() {
            return ctx.openAnimationGuideDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmPageComponent_Template_mat_icon_click_28_listener() {
            return ctx.nextTutorialStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "sidebar", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showCodeChange", function AlgorithmPageComponent_Template_sidebar_showCodeChange_31_listener($event) {
            return ctx.showCode = $event;
          })("tutorialStepChange", function AlgorithmPageComponent_Template_sidebar_tutorialStepChange_31_listener($event) {
            return ctx.tutorialStep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "agent-titles", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showCodeChange", function AlgorithmPageComponent_Template_agent_titles_showCodeChange_33_listener($event) {
            return ctx.showCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resized", function AlgorithmPageComponent_Template_div_resized_34_listener() {
            return ctx.drawService.redrawCanvas();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "canvas", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "playback-controls");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tutorialStep != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", ctx.showCode ? "Expand Panel" : "Close Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.tutorialStep != 0 || ctx.duringAnimation));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showCode ? "menu" : "menu_open");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, ctx.tutorialStep != 0 || ctx.duringAnimation));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.algorithmService.currentAlgorithm.name, " / ", ctx.algorithmService.currentAlgorithm.algorithm, " / ", ctx.algorithmService.currentAlgorithm.orientation[0], "-Oriented");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithmService.currentAlgorithm.name == "Stable Roommates Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c1, ctx.tutorialStep != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tutorialStep != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c1, ctx.tutorialStep != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c1, ctx.tutorialStep != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", ctx.drawService.alwaysShowPreferences ? "Show All Preferences" : "Only Show Relevant Preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c1, ctx.tutorialStep != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.drawService.alwaysShowPreferences ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c1, ctx.tutorialStep != 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", ctx.tutorialStep == 0 ? "Tutorial" : "Advance Tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c1, ctx.duringAnimation));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tutorialStep == 0 ? "help_outline" : "arrow_forward_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCode", ctx.showCode)("tutorialStep", ctx.tutorialStep);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](40, _c2, !ctx.showCode, ctx.showCode, ctx.tutorialStep == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCode", ctx.showCode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"], _animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_16__["AgentTitlesComponent"], angular_resize_event__WEBPACK_IMPORTED_MODULE_17__["ResizedDirective"], _playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_18__["PlaybackControlsComponent"]],
      styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.single-center-item[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 100%;\n  justify-items: center;\n  align-items: center;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n  display: grid;\n  grid-template-rows: 1fr 3fr 1fr;\n  justify-items: center;\n  align-items: center;\n}\n\n.title-container[_ngcontent-%COMP%] {\n  min-height: 100px;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.vertical-center[_ngcontent-%COMP%] {\n  min-height: 100%;\n  \n  display: flex;\n  align-items: center;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.feather[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  vertical-align: text-bottom;\n}\n\n\n\n.alg-navbar[_ngcontent-%COMP%] {\n  background-color: #24282c;\n  height: 50px;\n  font-family: \"DM Sans\";\n  z-index: 1000;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem;\n  background-color: rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);\n}\n\n.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.form-control-dark[_ngcontent-%COMP%]:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\n}\n\n\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\n\n#alg[_ngcontent-%COMP%] {\n  color: #ff3c00;\n  transition: 200ms color;\n}\n\n#match[_ngcontent-%COMP%] {\n  color: #e100ff;\n  transition: 200ms color;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]   #alg[_ngcontent-%COMP%] {\n  color: #ffae00;\n}\n\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]   #match[_ngcontent-%COMP%] {\n  color: #ff009d;\n}\n\n.navbarIconButton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  vertical-align: middle;\n  color: #999999;\n  transition: 200ms color;\n}\n\n.navbarIconButton[_ngcontent-%COMP%]:hover {\n  color: #c2c2c2;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  \n  outline: 99999px solid rgba(0, 0, 0, 0.3);\n  \n  outline: calc(100 * (1vw + 1vh - 1vmin)) solid rgba(0, 0, 0, 0.3);\n  \n  outline: 100vmax solid rgba(0, 0, 0, 0.3);\n}\n\n.dim[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);\n  \n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  \n  border-radius: 60px;\n}\n\n.covering-panel[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  height: 100vh;\n  position: fixed;\n  width: 100%;\n  z-index: 500;\n}\n\n.moveNavbarToTop[_ngcontent-%COMP%] {\n  z-index: 600;\n}\n\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0 px;\n}\n\ndiv[_ngcontent-%COMP%]   .bs-popover-left[_ngcontent-%COMP%] {\n  margin-left: 10rem !important;\n}\n\n.popoverPositioning[_ngcontent-%COMP%] {\n  margin-left: 10rem !important;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #616161;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 0px;\n  padding-left: 0px;\n  height: calc(100% - 50px) !important;\n  overflow-x: hidden;\n  font-family: \"DM Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2UvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcYXBwXFxhbGdvcml0aG0tcGFnZVxcYWxnb3JpdGhtLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FsZ29yaXRobS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtBQ0RKOztBREtBO0VBQ0ksZ0JBQUE7RUFBbUIsaURBQUE7RUFFbkIsYUFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUU7RUFDRSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRE9FOztFQUFBOztBQUlBO0VBQ0UseUJFeERXO0VGeURYLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNMSjs7QURRRTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSw4Q0FBQTtBQ0xKOztBRFFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0FDTEo7O0FEUUU7RUFDRSx5QkFBQTtFQUNBLCtDQUFBO0FDTEo7O0FEUUU7O0VBQUE7O0FBS0E7RUFBaUIsMkNBQUE7QUNObkI7O0FEU0U7RUFDRSxjRXRHYTtFRnVHYix1QkFBQTtBQ05KOztBRFNBO0VBQ0ksY0UxR2U7RUYyR2YsdUJBQUE7QUNOSjs7QURTQTtFQUNFLHFCQUFBO0FDTkY7O0FEU0E7RUFDSSxjRWpIMkI7QUQyRy9COztBRFNBO0VBQ0ksY0VwSDZCO0FEOEdqQzs7QURTQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNFbEhXO0VGbUhYLHVCQUFBO0FDTkY7O0FEU0E7RUFDRSxjRXRIaUI7QURnSG5COztBRFNBO0VBTUUsUUFBQTtFQUNBLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLGlFQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtBQ1hGOztBRGVBO0VBQ0UsMkNBQUE7RUFBMkMsV0FBQTtFQUMzQyw0Q0FBQTtFQUE0QyxzQkFBQTtFQUM1QyxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEY0E7RUFDRSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsNkJBQUE7QUNYRjs7QURjQTtFQUNFLDZCQUFBO0FDWEY7O0FEY0E7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUNYRjs7QURjQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9hbGdvcml0aG0tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5zaW5nbGUtY2VudGVyLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcblxyXG4udmVydGljYWwtY2VudGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7ICAvKiBGYWxsYmFjayBmb3IgYnJvd3NlcnMgZG8gTk9UIHN1cHBvcnQgdmggdW5pdCAqL1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0aGVyIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qXHJcbiAgICogTmF2YmFyXHJcbiAgICovXHJcbiAgXHJcbiAgLmFsZy1uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdmJhci1jb2xvcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRE0gU2Fucyc7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC1kYXJrIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogVXRpbGl0aWVzXHJcbiAgICovXHJcbiAgXHJcbiAgLy8gLmJvcmRlci10b3AgeyBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDsgfVxyXG4gIC5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDt9XHJcblxyXG5cclxuICAjYWxnIHtcclxuICAgIGNvbG9yOiAkbG9nby1hbGctY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcclxufVxyXG5cclxuI21hdGNoIHtcclxuICAgIGNvbG9yOiAkbG9nby1tYXRjaC1jb2xvcjtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGNvbG9yO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIgc3BhbiAjYWxnIHtcclxuICAgIGNvbG9yOiAkbG9nby1hbGctaG92ZXItYWxncGFnZS1jb2xvcjtcclxufVxyXG5cclxuYTpob3ZlciBzcGFuICNtYXRjaCB7XHJcbiAgICBjb2xvcjogJGxvZ28tbWF0Y2gtaG92ZXItYWxncGFnZS1jb2xvcjtcclxufVxyXG5cclxuLm5hdmJhckljb25CdXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAkaWNvbi1jb2xvcjtcclxuICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcclxufVxyXG5cclxuLm5hdmJhckljb25CdXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAkaWNvbi1ob3Zlci1jb2xvcjtcclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gIC8vIHRvcDogNTBweDtcclxuICAvLyBsZWZ0OiA1MHB4O1xyXG4gIC8qIElFOCAqL1xyXG4gIG91dGxpbmU6IDk5OTk5cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC8qIElFOSsgKi9cclxuICBvdXRsaW5lOiBjYWxjKDEwMCAqICgxdncgKyAxdmggLSAxdm1pbikpIHNvbGlkIHJnYmEoMCwwLDAsLjMpO1xyXG4gIC8qIGZvciBvdGhlciBicm93c2VycyAqL1xyXG4gIG91dGxpbmU6IDEwMHZtYXggc29saWQgcmdiYSgwLDAsMCwuMyk7XHJcbiAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5kaW0ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCByZ2JhKDAsMCwwLCAwLjUpOyAvKiBmb3IgSUUgKi9cclxuICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYmEoMCwwLDAsIDAuNSk7IC8qIGZvciByZWFsIGJyb3dzZXJzICovXHJcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcclxufVxyXG5cclxuLmNvdmVyaW5nLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjYpOyAgLy8gb3BhcXVlIGJsYWNrXHJcbiAgaGVpZ2h0OiAxMDB2aDsgICAgICAgICAgICAgICAgIC8vIGhlaWdodCBvZiB0aGUgdmlld3BvcnRcclxuICBwb3NpdGlvbjogZml4ZWQ7ICAgICAgICAgICAgICAgLy8gYWx3YXlzIGNvdmVyIHRoZSBzY3JlZW5cclxuICB3aWR0aDogMTAwJTsgICAgICAgICAgICAgICAgICAgLy8gd2lkdGggb2YgdGhlIHZpZXdwb3J0XHJcbiAgei1pbmRleDogNTAwOyAgICAgICAgICAgICAgICAgICAvLyBzdGF5IG9uIHRvcCBvZiBvdGhlciBlbGVtZW50c1xyXG59XHJcblxyXG4ubW92ZU5hdmJhclRvVG9wIHtcclxuICB6LWluZGV4OiA2MDA7XHJcbn1cclxuXHJcbi5tb3ZlQ29udGVudFRvVG9wIHtcclxuICB6LWluZGV4OiA1OTk7XHJcbn1cclxuXHJcblxyXG4ubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgLm1hdC10eXBvZ3JhcGh5IGgzIHtcclxuICBtYXJnaW46IDAgMCAwIHB4O1xyXG59XHJcblxyXG5kaXYgLmJzLXBvcG92ZXItbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3BvdmVyUG9zaXRpb25pbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbG9yOiAjNjE2MTYxO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCkgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJztcclxufSIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLnNpbmdsZS1jZW50ZXItaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIGRvIE5PVCBzdXBwb3J0IHZoIHVuaXQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5mZWF0aGVyIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG4vKlxuICogTmF2YmFyXG4gKi9cbi5hbGctbmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjgyYztcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LWZhbWlseTogXCJETSBTYW5zXCI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLm5hdmJhciAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cblxuLypcbiAqIFV0aWxpdGllc1xuICovXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2QzZDNkICFpbXBvcnRhbnQ7XG59XG5cbiNhbGcge1xuICBjb2xvcjogI2ZmM2MwMDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgY29sb3I7XG59XG5cbiNtYXRjaCB7XG4gIGNvbG9yOiAjZTEwMGZmO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciBzcGFuICNhbGcge1xuICBjb2xvcjogI2ZmYWUwMDtcbn1cblxuYTpob3ZlciBzcGFuICNtYXRjaCB7XG4gIGNvbG9yOiAjZmYwMDlkO1xufVxuXG4ubmF2YmFySWNvbkJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRyYW5zaXRpb246IDIwMG1zIGNvbG9yO1xufVxuXG4ubmF2YmFySWNvbkJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjYzJjMmMyO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgLyogSUU4ICovXG4gIG91dGxpbmU6IDk5OTk5cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBJRTkrICovXG4gIG91dGxpbmU6IGNhbGMoMTAwICogKDF2dyArIDF2aCAtIDF2bWluKSkgc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBmb3Igb3RoZXIgYnJvd3NlcnMgKi9cbiAgb3V0bGluZTogMTAwdm1heCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5kaW0ge1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBmb3IgSUUgKi9cbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIGZvciByZWFsIGJyb3dzZXJzICovXG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG59XG5cbi5jb3ZlcmluZy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNTAwO1xufVxuXG4ubW92ZU5hdmJhclRvVG9wIHtcbiAgei1pbmRleDogNjAwO1xufVxuXG4ubW92ZUNvbnRlbnRUb1RvcCB7XG4gIHotaW5kZXg6IDU5OTtcbn1cblxuLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsIC5tYXQtdHlwb2dyYXBoeSBoMyB7XG4gIG1hcmdpbjogMCAwIDAgcHg7XG59XG5cbmRpdiAuYnMtcG9wb3Zlci1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wb3BvdmVyUG9zaXRpb25pbmcge1xuICBtYXJnaW4tbGVmdDogMTByZW0gIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjNjE2MTYxO1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xufSIsIi8vIEFsbCBjb2xvdXJzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRsb2dvLWFsZy1jb2xvcjogI2ZmM2MwMDtcclxuJGxvZ28tbWF0Y2gtY29sb3I6ICNlMTAwZmY7XHJcblxyXG4kbG9nby1hbGctaG92ZXItYWxncGFnZS1jb2xvcjogI2ZmYWUwMDtcclxuJGxvZ28tbWF0Y2gtaG92ZXItYWxncGFnZS1jb2xvcjogI2ZmMDA5ZDtcclxuXHJcbiRuYXZiYXItY29sb3I6ICMyNDI4MmM7XHJcbiRib3JkZXItY29sb3I6ICMzZDNkM2Q7XHJcblxyXG4kc2lkZWJhci1jb2xvcjogIzFiMWYyMztcclxuXHJcblxyXG4kaWNvbi1jb2xvcjogIzk5OTk5OTtcclxuJGljb24taG92ZXItY29sb3I6ICNjMmMyYzI7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlgorithmPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'algorithm-page',
          templateUrl: './algorithm-page.component.html',
          styleUrls: ['./algorithm-page.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_5__["PlaybackService"]
        }, {
          type: _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_6__["AlgorithmRetrievalService"]
        }, {
          type: _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_7__["CanvasService"]
        }, {
          type: _animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_8__["AlgorithmAnimationService"]
        }, {
          type: _utils_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      }, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['canvas', {
            "static": true
          }]
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/abstract-classes/EgsOneToMany.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/abstract-classes/EgsOneToMany.ts ***!
    \****************************************************************************/

  /*! exports provided: EgsOneToMany */

  /***/
  function srcAppAlgorithmPageAlgorithmsAbstractClassesEgsOneToManyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EgsOneToMany", function () {
      return EgsOneToMany;
    });
    /* harmony import */


    var _ExtendedGaleShapley__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ExtendedGaleShapley */
    "./src/app/algorithm-page/algorithms/abstract-classes/ExtendedGaleShapley.ts"); // this file is the implementation for SM - EGS


    var EgsOneToMany = /*#__PURE__*/function (_ExtendedGaleShapley_) {
      _inherits(EgsOneToMany, _ExtendedGaleShapley_);

      var _super = _createSuper(EgsOneToMany);

      function EgsOneToMany() {
        _classCallCheck(this, EgsOneToMany);

        return _super.apply(this, arguments);
      }

      _createClass(EgsOneToMany, [{
        key: "breakAssignment",
        value: function breakAssignment(currentAgent, potentialProposee) {
          var _this3 = this;

          // if w is currently assigned to someone {
          this.update(4, {
            "%woman%": potentialProposee.name
          });

          if (potentialProposee.match.length >= 1) {
            // break the provisional assignment of r to h'
            // let matchPosition: number = potentialProposee.match[0].match.findIndex((agent: { name: string }) => agent.name == potentialProposee.name);
            var matchPosition = this.findPositionInMatches(potentialProposee, potentialProposee.match[0]);

            if (potentialProposee.match[0].ranking.filter(function (agent) {
              return agent.match[0] != currentAgent;
            }).length > 0 && !this.freeAgentsOfGroup1.includes(potentialProposee.match[0].name) && potentialProposee.match[0].ranking.length > 0) {
              this.freeAgentsOfGroup1.push(potentialProposee.match[0].name);
            }

            this.removeArrayFromArray(this.currentLines, [this.getLastCharacter(potentialProposee.match[0].name), this.getLastCharacter(potentialProposee.name), "green"]);
            this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(potentialProposee.match[0].name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(potentialProposee.match[0].name)).findIndex(function (woman) {
              return woman == _this3.getLastCharacter(potentialProposee.name);
            }), "grey");
            this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(potentialProposee.name), matchPosition, "grey");
            this.update(5, {
              "%woman%": potentialProposee.name,
              "%currentPartner%": potentialProposee.match[0].name
            });
            potentialProposee.ranking.splice(matchPosition, 1);
            potentialProposee.match[0].ranking.splice(this.findPositionInMatches(potentialProposee.match[0], potentialProposee), 1);
          } else {
            // } (r is not currently assigned)
            this.update(6, {
              "%woman%": potentialProposee.name
            });
          }
        }
      }, {
        key: "provisionallyAssign",
        value: function provisionallyAssign(currentAgent, potentialProposee) {
          var _this4 = this;

          // provisionally assign r to h;
          var agentLastChar = this.getLastCharacter(currentAgent.name);
          var proposeeLastChar = this.getLastCharacter(potentialProposee.name);
          this.removeArrayFromArray(this.currentLines, [agentLastChar, proposeeLastChar, "red"]);
          var greenLine = [agentLastChar, proposeeLastChar, "green"];
          this.currentLines.push(greenLine); // this.findPositionInMatches(currentAgent, potentialProposee));

          this.changePreferenceStyle(this.group1CurrentPreferences, agentLastChar, this.originalGroup1CurrentPreferences.get(agentLastChar).findIndex(function (woman) {
            return woman == _this4.getLastCharacter(potentialProposee.name);
          }), "green");
          this.changePreferenceStyle(this.group2CurrentPreferences, proposeeLastChar, this.findPositionInMatches(potentialProposee, currentAgent), "green");
          this.update(7, {
            "%man%": currentAgent.name,
            "%woman%": potentialProposee.name
          });
          potentialProposee.match[0] = currentAgent;
          currentAgent.match.push(potentialProposee);
        }
      }, {
        key: "removeRuledOutPreferences",
        value: function removeRuledOutPreferences(currentAgent, potentialProposee) {
          var _this5 = this;

          var currentAgentPosition = potentialProposee.ranking.findIndex(function (agent) {
            return agent.name == currentAgent.name;
          });
          var proposeeRankingClearCounter = currentAgentPosition + 1; // for each successor h' of h on r's list {

          this.update(8, {
            "%man%": currentAgent.name,
            "%woman%": potentialProposee.name
          });

          for (var i = currentAgentPosition + 1; i < potentialProposee.ranking.length; i++) {
            // "Woman: " + potentialProposee.name);
            var proposeePosition = this.findPositionInMatches(potentialProposee.ranking[i], potentialProposee);
            this.relevantPreferences.push(this.getLastCharacter(potentialProposee.ranking[i].name)); // potentialProposee.ranking[i].name);
            // potentialProposee.ranking[i].ranking[proposeePosition]);
            // remove h' and r from each other's lists

            this.update(9, {
              "%nextWorstMan%": potentialProposee.ranking[i].name,
              "%woman%": potentialProposee.name
            });
            this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(potentialProposee.ranking[i].name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(potentialProposee.ranking[i].name)).findIndex(function (woman) {
              return woman == _this5.getLastCharacter(potentialProposee.name);
            }), "grey");
            this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(potentialProposee.name), proposeeRankingClearCounter, "grey");
            this.update(10, {
              "%nextWorstMan%": potentialProposee.ranking[i].name,
              "%woman%": potentialProposee.name
            }); // potentialProposee.ranking[i].name);
            // potentialProposee.name);

            potentialProposee.ranking[i].ranking.splice(proposeePosition, 1);
            potentialProposee.ranking.splice(i, 1);
            i -= 1;
            proposeeRankingClearCounter++;
            this.relevantPreferences.pop();
          }

          this.update(11, {
            "%man%": currentAgent.name,
            "%woman%": potentialProposee.name
          });
        }
      }]);

      return EgsOneToMany;
    }(_ExtendedGaleShapley__WEBPACK_IMPORTED_MODULE_0__["ExtendedGaleShapley"]);
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/abstract-classes/ExtendedGaleShapley.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/abstract-classes/ExtendedGaleShapley.ts ***!
    \***********************************************************************************/

  /*! exports provided: ExtendedGaleShapley */

  /***/
  function srcAppAlgorithmPageAlgorithmsAbstractClassesExtendedGaleShapleyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtendedGaleShapley", function () {
      return ExtendedGaleShapley;
    });
    /* harmony import */


    var _MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./MatchingAlgorithm */
    "./src/app/algorithm-page/algorithms/abstract-classes/MatchingAlgorithm.ts");

    var ExtendedGaleShapley = /*#__PURE__*/function (_MatchingAlgorithm__W) {
      _inherits(ExtendedGaleShapley, _MatchingAlgorithm__W);

      var _super2 = _createSuper(ExtendedGaleShapley);

      function ExtendedGaleShapley() {
        _classCallCheck(this, ExtendedGaleShapley);

        return _super2.apply(this, arguments);
      }

      _createClass(ExtendedGaleShapley, [{
        key: "match",
        value: function match() {
          // assign each resident to be free;
          this.update(1);

          while (this.freeAgentsOfGroup1.length > 0) {
            // this.currentlySelectedAgents = [];
            // this.relevantPreferences = [];
            // while (some hospital h is undersubscribed) and (h's preference list contains a resident r not provisionally assigned to h) {
            var currentAgent = this.group1Agents.get(this.freeAgentsOfGroup1[0]); // this.currentlySelectedAgents.push(this.getLastCharacter(currentAgent.name));
            // this.relevantPreferences.push(this.getLastCharacter(currentAgent.name));
            // if all potential proposees are gone, remove 

            if (currentAgent.ranking.length <= 0 || !this.getNextPotentialProposee(currentAgent)) {
              this.freeAgentsOfGroup1.shift();
            } else {
              this.update(2, {
                "%currentAgent%": currentAgent.name
              }); // r := first such resident on h's list;

              var potentialProposee = this.getNextPotentialProposee(currentAgent); // let agentLastChar = this.getLastCharacter(currentAgent.name);
              // let proposeeLastChar = this.getLastCharacter(potentialProposee.name);
              // this.currentlySelectedAgents.push(proposeeLastChar);
              // this.relevantPreferences.push(proposeeLastChar);
              // this.changePreferenceStyle(this.group1CurrentPreferences, agentLastChar, this.originalGroup1CurrentPreferences.get(agentLastChar).findIndex(woman => woman == this.getLastCharacter(potentialProposee.name)), "red");
              // this.changePreferenceStyle(this.group2CurrentPreferences, proposeeLastChar, this.findPositionInMatches(potentialProposee, currentAgent), "red");
              // let redLine = [agentLastChar, proposeeLastChar, "red"];
              // this.currentLines.push(redLine);

              this.update(3, {
                "%currentAgent%": currentAgent.name,
                "%potentialProposee%": potentialProposee.name
              }); // if h is fully subscribed, then break the assignment of the worst resident of that hospital

              this.breakAssignment(currentAgent, potentialProposee);
              this.provisionallyAssign(currentAgent, potentialProposee);
              this.removeRuledOutPreferences(currentAgent, potentialProposee);

              if (this.shouldContinueMatching(currentAgent)) {
                this.freeAgentsOfGroup1.shift();
              }
            }
          }

          this.currentlySelectedAgents = [];
          this.relevantPreferences = []; // a stable matching has been found

          this.update(12);
          return;
        }
      }]);

      return ExtendedGaleShapley;
    }(_MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__["MatchingAlgorithm"]);
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/abstract-classes/GaleShapley.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/abstract-classes/GaleShapley.ts ***!
    \***************************************************************************/

  /*! exports provided: GaleShapley */

  /***/
  function srcAppAlgorithmPageAlgorithmsAbstractClassesGaleShapleyTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GaleShapley", function () {
      return GaleShapley;
    });
    /* harmony import */


    var _MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./MatchingAlgorithm */
    "./src/app/algorithm-page/algorithms/abstract-classes/MatchingAlgorithm.ts");

    var GaleShapley = /*#__PURE__*/function (_MatchingAlgorithm__W2) {
      _inherits(GaleShapley, _MatchingAlgorithm__W2);

      var _super3 = _createSuper(GaleShapley);

      function GaleShapley() {
        _classCallCheck(this, GaleShapley);

        return _super3.call(this);
      }

      return GaleShapley;
    }(_MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__["MatchingAlgorithm"]);
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/abstract-classes/MatchingAlgorithm.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/abstract-classes/MatchingAlgorithm.ts ***!
    \*********************************************************************************/

  /*! exports provided: MatchingAlgorithm */

  /***/
  function srcAppAlgorithmPageAlgorithmsAbstractClassesMatchingAlgorithmTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchingAlgorithm", function () {
      return MatchingAlgorithm;
    });

    var MatchingAlgorithm = /*#__PURE__*/function () {
      function MatchingAlgorithm() {
        _classCallCheck(this, MatchingAlgorithm);

        this.group1Agents = new Map();
        this.group2Agents = new Map();
        this.algorithmData = {
          commands: new Array(),
          descriptions: new Array()
        };
        this.SRstable = true;
        this.currentLine = [];
        this.originalGroup1CurrentPreferences = new Map();
        this.originalGroup2CurrentPreferences = new Map();
        this.group1CurrentPreferences = new Map();
        this.group2CurrentPreferences = new Map();
        this.currentlySelectedAgents = [];
        this.currentLines = [];
        this.algorithmSpecificData = {};
        this.relevantPreferences = [];
        this.stable = false;
      }

      _createClass(MatchingAlgorithm, [{
        key: "initialise",
        value: function initialise(numberOfAgents) {
          var numberOfGroup2Agents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : numberOfAgents;
          this.freeAgentsOfGroup1 = [];
          this.group1Agents = new Map();
          this.group2Agents = new Map();
          this.algorithmData = {
            commands: new Array(),
            descriptions: new Array()
          };
          this.currentLine = [];
          this.group1CurrentPreferences = new Map();
          this.group2CurrentPreferences = new Map();
          this.currentlySelectedAgents = [];
          this.currentLines = [];
          this.algorithmSpecificData = {};
          this.relevantPreferences = [];
          this.numberOfAgents = numberOfAgents;
          this.numberOfGroup2Agents = numberOfGroup2Agents;
          this.stable = false;
        }
      }, {
        key: "generateAgents",
        value: function generateAgents() {
          for (var i = 1; i < this.numberOfAgents + 1; i++) {
            var group1AgentName = this.group1Name + i;
            this.group1Agents.set(group1AgentName, {
              name: group1AgentName,
              match: new Array(),
              ranking: new Array()
            });
            this.freeAgentsOfGroup1.push(group1AgentName);
          }

          var currentLetter = 'A';

          for (var _i = 1; _i < this.numberOfGroup2Agents + 1; _i++) {
            var group2AgentName = this.group2Name + currentLetter;
            this.group2Agents.set(group2AgentName, {
              name: group2AgentName,
              match: new Array(),
              ranking: new Array()
            });
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }
        } // generates rankings for all agents
        // changes agent.ranking

      }, {
        key: "generatePreferences",
        value: function generatePreferences() {
          for (var _i2 = 0, _Array$from = Array.from(this.group1Agents.values()); _i2 < _Array$from.length; _i2++) {
            var agent = _Array$from[_i2];
            var agent1Rankings = Array.from(new Map(this.group2Agents).values());
            this.shuffle(agent1Rankings);
            this.group1Agents.get(agent.name).ranking = agent1Rankings;
          }

          for (var _i3 = 0, _Array$from2 = Array.from(this.group2Agents.values()); _i3 < _Array$from2.length; _i3++) {
            var _agent = _Array$from2[_i3];
            var agent2Rankings = Array.from(new Map(this.group1Agents).values());
            this.shuffle(agent2Rankings);
            this.group2Agents.get(_agent.name).ranking = agent2Rankings;
          }
        }
      }, {
        key: "populatePreferences",
        value: function populatePreferences(preferences) {
          // console.log("preferences", preferences);
          var tempCopyList;

          for (var _i4 = 0, _Array$from3 = Array.from(this.group1Agents.keys()); _i4 < _Array$from3.length; _i4++) {
            var agent = _Array$from3[_i4];
            tempCopyList = []; // this.group1Agents.get(agent).ranking = preferences.get(this.getLastCharacter(String(agent)));

            var _iterator = _createForOfIteratorHelper(preferences.get(this.getLastCharacter(String(agent)))),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var preferenceAgent = _step.value;
                tempCopyList.push(this.group2Agents.get(this.group2Name + preferenceAgent));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.group1Agents.get(agent).ranking = tempCopyList;
          }

          for (var _i5 = 0, _Array$from4 = Array.from(this.group2Agents.keys()); _i5 < _Array$from4.length; _i5++) {
            var _agent2 = _Array$from4[_i5];
            tempCopyList = []; // this.group1Agents.get(agent).ranking = preferences.get(this.getLastCharacter(String(agent)));

            var _iterator2 = _createForOfIteratorHelper(preferences.get(this.getLastCharacter(String(_agent2)))),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _preferenceAgent = _step2.value;
                tempCopyList.push(this.group1Agents.get(this.group1Name + _preferenceAgent));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.group2Agents.get(_agent2).ranking = tempCopyList;
          }

          console.log(this.group1Agents);
          console.log(this.group2Agents);
        } // FROM: https://javascript.info/task/shuffle

      }, {
        key: "shuffle",
        value: function shuffle(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t

            var _ref = [array[j], array[i]];
            array[i] = _ref[0];
            array[j] = _ref[1];
          }
        }
      }, {
        key: "getGroupRankings",
        value: function getGroupRankings(agents) {
          var matches = new Map();

          for (var _i6 = 0, _Array$from5 = Array.from(agents.values()); _i6 < _Array$from5.length; _i6++) {
            var agent = _Array$from5[_i6];
            var preferenceList = [];

            var _iterator3 = _createForOfIteratorHelper(agent.ranking),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var match = _step3.value;
                preferenceList.push(match.name.slice(match.name.length - 1));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var identifier = agent.name.slice(agent.name.length - 1); // console.log()

            matches.set(identifier, preferenceList);
          }

          return matches;
        }
      }, {
        key: "clone",
        value: function clone(mapIn) {
          var mapCloned = new Map();
          mapIn.forEach(function (str, key, mapObj) {
            //products.slice(0) clone array
            mapCloned.set(key, str.slice(0));
          });
          return mapCloned;
        }
      }, {
        key: "update",
        value: function update(step, stepVariables) {
          var currentStep = {
            lineNumber: step,
            freeAgents: Object.assign([], this.freeAgentsOfGroup1),
            matches: new Map(),
            stepVariables: stepVariables,
            group1CurrentPreferences: this.clone(this.group1CurrentPreferences),
            group2CurrentPreferences: this.clone(this.group2CurrentPreferences),
            currentlySelectedAgents: JSON.parse(JSON.stringify(this.currentlySelectedAgents)),
            currentLines: JSON.parse(JSON.stringify(this.currentLines)),
            algorithmSpecificData: JSON.parse(JSON.stringify(this.algorithmSpecificData)),
            relevantPreferences: JSON.parse(JSON.stringify(this.relevantPreferences))
          };
          this.algorithmData.commands.push(currentStep);
        }
      }, {
        key: "getMatches",
        value: function getMatches() {
          var matches = new Map();

          for (var i = 1; i < this.numberOfGroup2Agents + 1; i++) {
            var agentName = this.group2Name + String.fromCharCode(i + 64);
            var agent = this.group2Agents.get(agentName);
            var matchList = new Array();

            var _iterator4 = _createForOfIteratorHelper(agent.match),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var match = _step4.value;
                matchList.push(match.name);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            matches.set(agent.name, matchList);
          }

          return matches;
        }
      }, {
        key: "findPositionInMatches",
        value: function findPositionInMatches(currentAgent, agentToFind) {
          var position = currentAgent.ranking.findIndex(function (agent) {
            return agent.name == agentToFind.name;
          });
          return position;
        }
      }, {
        key: "findPositionInOriginalMatches",
        value: function findPositionInOriginalMatches(currentAgent, agentToFind) {
          var originalPreferences = this.originalGroup1CurrentPreferences.get(currentAgent.name[currentAgent.name.length - 1]); // console.log("Group1", originalPreferences)

          var position = originalPreferences.indexOf(agentToFind.name[agentToFind.name.length - 1]);
          return position;
        }
      }, {
        key: "findPositionInOriginalMatchesGroup2",
        value: function findPositionInOriginalMatchesGroup2(currentAgent, agentToFind) {
          var originalPreferences = this.originalGroup2CurrentPreferences.get(currentAgent.name[currentAgent.name.length - 1]); // console.log("Group2", originalPreferences)

          var position = originalPreferences.indexOf(agentToFind.name[agentToFind.name.length - 1]);
          return position;
        } // findPositionInOriginalMatches(currentAgent: Agent, agentToFind: Agent) {
        //     let originalPreferences = this.originalGroup1CurrentPreferences.get(currentAgent.name[currentAgent.name.length - 1]);
        //     console.log("originalPreferences", originalPreferences)
        //     return 0
        // }

      }, {
        key: "getLastCharacter",
        value: function getLastCharacter(name) {
          return name.slice(name.length - 1);
        }
      }, {
        key: "checkArrayEquality",
        value: function checkArrayEquality(a, b) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return false;
            }
          }

          return true;
        } // used to remove elements from currentLines

      }, {
        key: "removeArrayFromArray",
        value: function removeArrayFromArray(a, b) {
          var arrayPositionCounter = 0;

          var _iterator5 = _createForOfIteratorHelper(a),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var subArray = _step5.value;

              if (this.checkArrayEquality(subArray, b)) {
                a.splice(arrayPositionCounter, 1);
              }

              arrayPositionCounter++;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        } // remove all lines in array that start at person

      }, {
        key: "removePersonFromArray",
        value: function removePersonFromArray(a, person) {
          var arrayPositionCounter = 0;

          var _iterator6 = _createForOfIteratorHelper(a),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var subArray = _step6.value;

              if (subArray[0] == person) {
                a.splice(arrayPositionCounter, 1);
              }

              arrayPositionCounter++;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        } // remove all lines leeding to a person from the array

      }, {
        key: "removeTargetFromArray",
        value: function removeTargetFromArray(a, person) {
          var arrayPositionCounter = 0;

          var _iterator7 = _createForOfIteratorHelper(a),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var subArray = _step7.value;

              if (subArray[1] == person) {
                a.splice(arrayPositionCounter, 1);
              }

              arrayPositionCounter++;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } // #53D26F (green)
        // #C4C4C4 (grey)
        // changePreferenceStyle(preferenceList: Object, person: string, position: number, style: string) {

      }, {
        key: "changePreferenceStyle",
        value: function changePreferenceStyle(preferenceList, person, position, style) {
          var currentAgent = ""; // console.log("inner", preferenceList, preferenceList.get(person), preferenceList.get(person)[position], person, position, style)

          if (preferenceList.get(person)[position].includes("#")) {
            currentAgent = preferenceList.get(person)[position].charAt(preferenceList.get(person)[position].length - 2);
          } else {
            currentAgent = preferenceList.get(person)[position].charAt(preferenceList.get(person)[position].length - 1);
          }

          if (style == "green") {
            style = "#53D26F";
          } else if (style == "red") {
            style = "#EB2A2A";
          } else if (style == "grey") {
            style = "#C4C4C4";
          } else if (style == "black") {
            style = "#000000";
          }

          preferenceList.get(person)[position] = "{" + style + currentAgent + "}";
        } // check if no unmatched pair like each other more than their current partners

      }, {
        key: "checkStability",
        value: function checkStability(allMatches) {
          var stability = true; // for all women

          var _iterator8 = _createForOfIteratorHelper(allMatches.keys()),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var agent = _step8.value;
              var agentMatches = allMatches.get(agent); // if agent has matches

              if (agentMatches.length > 0) {
                // find the position of the last ranked match (for Stable Marriage this will be the only match)
                var lastAgentPosition = this.getLastMatch(agent, agentMatches);
                var agentPreferences = this.group2Agents.get(agent).ranking; // for every agent, x, better than match, check:
                //   - if x isn't one of the matches (for HR), then
                //      - check if x likes currentAgent more than their match
                //          - if yes, stability = false
                //          - if no, stability = true

                for (var i = lastAgentPosition - 1; i >= 0; i--) {
                  if (!agentMatches.includes(agentPreferences[i].name)) {
                    var matchPosition = this.findPositionInOriginalMatches(agentPreferences[i], agentPreferences[i].match[0]);
                    var currentAgentPosition = this.findPositionInOriginalMatches(agentPreferences[i], this.group2Agents.get(agent));

                    if (currentAgentPosition < matchPosition) {
                      stability = false;
                    }
                  }
                }
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }

          return stability;
        }
      }, {
        key: "getLastMatch",
        value: function getLastMatch(currentAgent, agentMatches) {
          var furthestIndex = 0;

          var _iterator9 = _createForOfIteratorHelper(agentMatches),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var matchAgent = _step9.value;
              var matchPosition = this.findPositionInMatches(this.group2Agents.get(currentAgent), this.group1Agents.get(matchAgent));

              if (matchPosition > furthestIndex) {
                furthestIndex = matchPosition;
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return furthestIndex;
        }
      }, {
        key: "run",
        value: function run(numberOfAgents) {
          var numberOfGroup2Agents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : numberOfAgents;
          var preferences = arguments.length > 2 ? arguments[2] : undefined;
          var SRstable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          if (numberOfGroup2Agents != numberOfAgents) {
            this.initialise(numberOfAgents, numberOfGroup2Agents);
          } else {
            this.initialise(numberOfAgents);
          }

          if (numberOfGroup2Agents == 0) {
            console.log("0 agents in group 2");
          }

          console.log("run", SRstable);

          if (SRstable) {
            console.log(SRstable, "true");
            this.SRstable = true;
          } else {
            console.log(SRstable, "false");
            this.SRstable = false;
          }

          this.generateAgents();

          if (preferences) {
            this.populatePreferences(preferences);
          } else {
            this.generatePreferences();
          }

          this.group1CurrentPreferences = this.getGroupRankings(this.group1Agents);
          this.originalGroup1CurrentPreferences = this.getGroupRankings(this.group1Agents);
          this.group2CurrentPreferences = this.getGroupRankings(this.group2Agents);
          this.originalGroup2CurrentPreferences = this.getGroupRankings(this.group2Agents);
          this.match();
          this.stable = this.checkStability(this.getMatches());

          if (!this.stable) {
            console.log("Matching is not stable!");
            return undefined;
          }

          return this.algorithmData;
        }
      }]);

      return MatchingAlgorithm;
    }();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/abstract-classes/StableRoomMates.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/abstract-classes/StableRoomMates.ts ***!
    \*******************************************************************************/

  /*! exports provided: StableRoomMates */

  /***/
  function srcAppAlgorithmPageAlgorithmsAbstractClassesStableRoomMatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StableRoomMates", function () {
      return StableRoomMates;
    });
    /* harmony import */


    var _MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./MatchingAlgorithm */
    "./src/app/algorithm-page/algorithms/abstract-classes/MatchingAlgorithm.ts");

    var StableRoomMates = /*#__PURE__*/function (_MatchingAlgorithm__W3) {
      _inherits(StableRoomMates, _MatchingAlgorithm__W3);

      var _super4 = _createSuper(StableRoomMates);

      function StableRoomMates() {
        _classCallCheck(this, StableRoomMates);

        return _super4.call(this); // console.log("StableRoomMates Class");
      }

      _createClass(StableRoomMates, [{
        key: "generatePreferences",
        value: function generatePreferences() {
          console.log("Gen Pref", this.SRstable);
          var data2 = [["2", "4", "6", "3", "5"], ["4", "5", "6", "1", "3"], ["4", "5", "6", "1", "2"], ["6", "3", "1", "5", "2"], ["6", "3", "4", "2", "1"], ["1", "2", "4", "3", "5"]];
          var unstable4 = [["2", "3", "4"], ["3", "1", "4"], ["1", "2", "4"], ["1", "2", "3"]];
          var unstable6_1 = [["4", "6", "5", "2", "3"], ["5", "4", "3", "6", "1"], ["4", "5", "2", "1", "6"], ["5", "3", "1", "6", "2"], ["6", "2", "1", "4", "3"], ["3", "2", "4", "5", "1"]];
          var unstable6_2 = [['5', '4', '3', '2', '6'], ['3', '5', '6', '1', '4'], ['5', '1', '4', '6', '2'], ['3', '2', '1', '6', '5'], ['2', '3', '6', '4', '1'], ['5', '1', '2', '4', '3']];
          var unstable6_3 = [['5', '2', '6', '4', '3'], ['4', '1', '6', '3', '5'], ['5', '2', '6', '1', '4'], ['5', '2', '6', '1', '3'], ['6', '4', '1', '2', '3'], ['1', '5', '4', '2', '3']];
          var unstable8_1 = [['3', '8', '7', '4', '5', '6', '2'], ['5', '3', '4', '1', '6', '7', '8'], ['8', '6', '2', '7', '1', '4', '5'], ['2', '1', '5', '7', '8', '6', '3'], ['4', '1', '7', '2', '6', '8', '3'], ['8', '1', '2', '4', '3', '5', '7'], ['3', '6', '8', '4', '2', '1', '5'], ['7', '1', '5', '4', '6', '3', '2']];
          var unstable8_2 = [['2', '7', '4', '5', '3', '6', '8'], ['1', '4', '5', '7', '3', '8', '6'], ['1', '7', '8', '5', '2', '6', '4'], ['8', '5', '1', '6', '7', '3', '2'], ['2', '6', '1', '8', '4', '3', '7'], ['5', '3', '2', '7', '1', '4', '8'], ['5', '2', '8', '6', '3', '4', '1'], ['3', '1', '7', '5', '6', '4', '2']];
          var unstable8_3 = [['7', '6', '5', '3', '4', '2', '8'], ['5', '6', '4', '1', '8', '3', '7'], ['2', '7', '8', '6', '5', '1', '4'], ['8', '3', '6', '2', '5', '7', '1'], ['1', '7', '3', '8', '6', '2', '4'], ['1', '2', '8', '5', '7', '4', '3'], ['1', '2', '8', '6', '5', '3', '4'], ['7', '2', '3', '1', '5', '4', '6']];
          var count = 0;
          var name = "p";
          var nonStableSRInstacens6 = [unstable6_1, unstable6_2, unstable6_3];
          var nonStableSRInstacens8 = [unstable8_1, unstable8_2, unstable8_3];
          var random = 0;
          var instance = []; // generate a random SR instance 

          if (this.SRstable) {
            console.log("Generating Stable");

            for (var _i7 = 0, _Array$from6 = Array.from(this.group1Agents.values()); _i7 < _Array$from6.length; _i7++) {
              var agent = _Array$from6[_i7];
              var agent1Rankings = Array.from(new Map(this.group1Agents).values());
              var selfIndex = agent1Rankings.indexOf(agent);
              agent1Rankings.splice(selfIndex, 1);
              this.shuffle(agent1Rankings);
              this.group1Agents.get(agent.name).ranking = agent1Rankings;
            } // pick a non-stable instance 

          } else {
            console.log("Generating UnStable");

            if (this.numberOfAgents == 2) {
              this.SRstable = true;
            } else if (this.numberOfAgents == 4) {
              instance = unstable4;
            } else if (this.numberOfAgents == 6) {
              random = Math.floor(Math.random() * nonStableSRInstacens6.length);
              instance = nonStableSRInstacens6[random];
            } else if (this.numberOfAgents == 8) {
              random = Math.floor(Math.random() * nonStableSRInstacens8.length);
              instance = nonStableSRInstacens8[random];
            } else {
              instance = [];
            }

            var _iterator10 = _createForOfIteratorHelper(this.group1Agents.entries()),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                    key = _step10$value[0],
                    person = _step10$value[1];

                for (var i = 0; i < this.group1Agents.size - 1; i++) {
                  person.ranking[i] = this.group1Agents.get(name + String(instance[count][i]));
                }

                count++;
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          } // for (let [key, person] of this.group1Agents.entries()){   
          //     for (let i = 0 ; i < this.group1Agents.size - 1 ; i++){
          //         //console.log(this.group1Agents.get(data2[count][i]), data2[count][i]);
          //         person.ranking[i] = this.group1Agents.get(name + String(data4[count][i]));
          //     }
          //     count++;
          // }

        }
      }, {
        key: "populatePreferences",
        value: function populatePreferences(preferences) {
          console.log("preferences", preferences);
          var tempCopyList;

          for (var _i8 = 0, _Array$from7 = Array.from(this.group1Agents.keys()); _i8 < _Array$from7.length; _i8++) {
            var agent = _Array$from7[_i8];
            tempCopyList = []; // this.group1Agents.get(agent).ranking = preferences.get(this.getLastCharacter(String(agent)));

            var _iterator11 = _createForOfIteratorHelper(preferences.get(this.getLastCharacter(String(agent)))),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var preferenceAgent = _step11.value;
                tempCopyList.push(this.group1Agents.get(this.group1Name + preferenceAgent));
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            this.group1Agents.get(agent).ranking = tempCopyList;
          }

          for (var _i9 = 0, _Array$from8 = Array.from(this.group2Agents.keys()); _i9 < _Array$from8.length; _i9++) {
            var _agent3 = _Array$from8[_i9];
            tempCopyList = []; // this.group1Agents.get(agent).ranking = preferences.get(this.getLastCharacter(String(agent)));

            var _iterator12 = _createForOfIteratorHelper(preferences.get(this.getLastCharacter(String(_agent3)))),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _preferenceAgent2 = _step12.value;
                tempCopyList.push(this.group1Agents.get(this.group1Name + _preferenceAgent2));
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            this.group2Agents.get(_agent3).ranking = tempCopyList;
          }

          console.log(this.group1Agents);
          console.log(this.group2Agents);
        }
      }]);

      return StableRoomMates;
    }(_MatchingAlgorithm__WEBPACK_IMPORTED_MODULE_0__["MatchingAlgorithm"]);
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/algorithm-services/hr-hospital-egs/hr-hospital-egs.service.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/algorithm-services/hr-hospital-egs/hr-hospital-egs.service.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: HrHospitalEgsService */

  /***/
  function srcAppAlgorithmPageAlgorithmsAlgorithmServicesHrHospitalEgsHrHospitalEgsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrHospitalEgsService", function () {
      return HrHospitalEgsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_classes_GaleShapley__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../abstract-classes/GaleShapley */
    "./src/app/algorithm-page/algorithms/abstract-classes/GaleShapley.ts");

    var HrHospitalEgsService = /*#__PURE__*/function (_abstract_classes_Gal) {
      _inherits(HrHospitalEgsService, _abstract_classes_Gal);

      var _super5 = _createSuper(HrHospitalEgsService);

      function HrHospitalEgsService() {
        var _this6;

        _classCallCheck(this, HrHospitalEgsService);

        _this6 = _super5.apply(this, arguments);
        _this6.group1Name = "resident";
        _this6.group2Name = "hospital";
        _this6.group2Agents = new Map();
        _this6.hospitalCapacity = new Map();
        _this6.freeAgentsOfGroup2 = new Array();
        return _this6;
      }

      _createClass(HrHospitalEgsService, [{
        key: "generateAgents",
        value: function generateAgents() {
          for (var i = 1; i < this.numberOfAgents + 1; i++) {
            var group1AgentName = this.group1Name + i;
            this.group1Agents.set(group1AgentName, {
              name: group1AgentName,
              match: new Array(),
              ranking: new Array()
            });
            this.freeAgentsOfGroup1.push(group1AgentName);
          }

          var currentLetter = 'A';

          for (var _i10 = 1; _i10 < this.numberOfGroup2Agents + 1; _i10++) {
            var group2AgentName = this.group2Name + currentLetter;
            var availableSpaces = this.getRandomInt(1, this.numberOfAgents - 2);
            this.group2Agents.set(group2AgentName, {
              name: group2AgentName,
              match: new Array(),
              ranking: new Array(),
              availableSpaces: availableSpaces
            }); //   console.log(group2AgentName)
            //   console.log(this.freeAgentsOfGroup2)

            this.freeAgentsOfGroup2.push(group2AgentName);
            this.hospitalCapacity[currentLetter] = availableSpaces;
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }

          this.algorithmSpecificData["hospitalCapacity"] = this.hospitalCapacity;
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
        } // returns next possible resident for a hospital - null if none
        // one that is not assigned to the hospital and is on the hospitals preferance list

      }, {
        key: "getNextPotentialProposee",
        value: function getNextPotentialProposee(hospital) {
          // for each resident in ranking 
          for (var i = 0; i < hospital.ranking.length; i++) {
            var proposee = hospital.ranking[i]; // if resident is not assigned to hospital - return

            if (proposee.match[0] != hospital) {
              return proposee;
            }
          } // return null there are no un assigned residents 


          return null;
        }
      }, {
        key: "getWorstResident",
        value: function getWorstResident(hospital) {
          var positionMap = new Map();

          var _iterator13 = _createForOfIteratorHelper(hospital.match),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var resident = _step13.value;
              positionMap.set(this.findPositionInMatches(hospital, resident), resident);
            } // use destructuring assingment to extract data from array into distinct variables
            // return the worst resident from the hospital's matches

          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return positionMap.get(Math.max.apply(Math, _toConsumableArray(Array.from(positionMap.keys()))));
        }
      }, {
        key: "breakAssignment",
        value: function breakAssignment(resident, hospital) {
          var _this7 = this;

          // console.log("break Assignment")
          // console.log(resident.name, resident.match[0].name, hospital.name)
          // get pos in each rankings lists to remove later 
          var matchPosition_resident = this.findPositionInMatches(hospital, resident);
          var matchPosition_hospital = this.findPositionInMatches(resident, hospital);
          var matchPosition_resident_original = this.findPositionInOriginalMatchesGroup2(hospital, resident); // console.log(matchPosition_resident, matchPosition_hospital)
          // console.log(hospital.ranking)

          this.removeArrayFromArray(this.currentLines, [this.getLastCharacter(resident.name), this.getLastCharacter(hospital.name), "green"]);
          this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(resident.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(resident.name)).findIndex(function (h) {
            return h == _this7.getLastCharacter(hospital.name);
          }), "grey");
          this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(hospital.name), matchPosition_resident_original, "red"); // unassign r and h'

          this.update(5, {
            "%oldHospital%": resident.match[0].name,
            "%resident%": resident.name
          });
          this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(hospital.name), matchPosition_resident_original, "grey");
          this.update(1); // remove hospital from resident match 

          resident.match.splice(0, 1); // remove resident from hospital match 

          hospital.match.splice(hospital.match.findIndex(function (agent) {
            return agent.name == resident.name;
          }), 1); // REMOVE EACH OTHER FROM RANKING LIST 

          hospital.ranking.splice(matchPosition_resident, 1); // HOSPITAL 

          resident.ranking.splice(matchPosition_hospital, 1); //RESIDENT 

          var hospitalLastChar = this.getLastCharacter(hospital.name);
          var currentHospitalCapacity = this.algorithmSpecificData["hospitalCapacity"][hospitalLastChar];
          this.algorithmSpecificData["hospitalCapacity"][hospitalLastChar] = String(currentHospitalCapacity).charAt(currentHospitalCapacity.length); // console.log("rankings after - h / r")
          // console.log(hospital.ranking, resident.ranking)
        }
      }, {
        key: "provisionallyAssign",
        value: function provisionallyAssign(resident, hospital) {
          var _this8 = this;

          // provisionally assign r to h;
          var agentLastChar = this.getLastCharacter(resident.name);
          var proposeeLastChar = this.getLastCharacter(hospital.name);
          this.removeArrayFromArray(this.currentLines, [agentLastChar, proposeeLastChar, "red"]);
          var greenLine = [agentLastChar, proposeeLastChar, "green"];
          this.currentLines.push(greenLine);
          this.changePreferenceStyle(this.group1CurrentPreferences, agentLastChar, this.originalGroup1CurrentPreferences.get(agentLastChar).findIndex(function (h) {
            return h == _this8.getLastCharacter(hospital.name);
          }), "green");
          this.changePreferenceStyle(this.group2CurrentPreferences, proposeeLastChar, this.findPositionInMatches(hospital, resident), "green");

          if (hospital.match.length >= hospital.availableSpaces - 1) {
            this.algorithmSpecificData["hospitalCapacity"][proposeeLastChar] = "{#53D26F" + this.algorithmSpecificData["hospitalCapacity"][proposeeLastChar] + "}";
          }

          resident.match[0] = hospital;
          hospital.match.push(resident);
        }
      }, {
        key: "removeRuledOutPreferences",
        value: function removeRuledOutPreferences(resident, hospital) {
          var _this9 = this;

          if (hospital.match.length >= hospital.availableSpaces) {
            var worstResident = this.getWorstResident(hospital);
            var worstResidentPosition = this.findPositionInMatches(hospital, worstResident);
            var hospitalRankingClearCounter = worstResidentPosition + 1; // for each successor h' of h on r's list 

            this.update(7, {
              "%resident%": resident.name,
              "%hospital%": hospital.name
            });

            for (var i = worstResidentPosition + 1; i < hospital.ranking.length; i++) {
              var hospitalPosition = this.findPositionInMatches(hospital.ranking[i], hospital);
              this.relevantPreferences.push(this.getLastCharacter(hospital.ranking[i].name));
              this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(hospital.ranking[i].name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(hospital.ranking[i].name)).findIndex(function (h) {
                return h == _this9.getLastCharacter(hospital.name);
              }), "grey");
              this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(hospital.name), hospitalRankingClearCounter, "grey"); // remove r' and h from each others preferance list

              this.update(8, {
                "%hospital%": hospital.name,
                "%resident%": hospital.ranking[i].name
              });
              hospital.ranking[i].ranking.splice(hospitalPosition, 1);
              hospital.ranking.splice(i, 1);
              i -= 1;
              hospitalRankingClearCounter++;
              this.relevantPreferences.pop();
            }
          }
        }
      }, {
        key: "print_matches",
        value: function print_matches() {
          var _iterator14 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {// console.log(key, resident.match)

              var _step14$value = _slicedToArray(_step14.value, 2),
                  key = _step14$value[0],
                  resident = _step14$value[1];
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          var _iterator15 = _createForOfIteratorHelper(this.group2Agents.entries()),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {// console.log(key, hospital.match)

              var _step15$value = _slicedToArray(_step15.value, 2),
                  _key = _step15$value[0],
                  hospital = _step15$value[1];
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }, {
        key: "shouldContinueMatching",
        value: function shouldContinueMatching(hospital) {
          return true;
        } // returns true if there is a resident on the list that is not matched with that hospital 

      }, {
        key: "checkHospitalPreferanceList",
        value: function checkHospitalPreferanceList(hospital) {
          var _iterator16 = _createForOfIteratorHelper(hospital.ranking),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var resident = _step16.value;

              // if they are not matched to the hospital 
              if (resident.match[0] != hospital) {
                return true;
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          return false;
        } // returns all the hospitals that should be looked at 
        // they are undersubbed and there is someone not assigned to them that the hospital wants 

      }, {
        key: "checkFreeHospitals",
        value: function checkFreeHospitals() {
          var freeHospitals = [];

          var _iterator17 = _createForOfIteratorHelper(this.group2Agents.entries()),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var _step17$value = _slicedToArray(_step17.value, 2),
                  key = _step17$value[0],
                  hospital = _step17$value[1];

              var hospitalCap = this.algorithmSpecificData["hospitalCapacity"][this.getLastCharacter(hospital.name)]; // if hospital in undersubbed and there is someone on the list that is not assigned to them 

              if (hospital.match.length < hospitalCap && this.checkHospitalPreferanceList(hospital)) {
                freeHospitals.push(hospital.name);
              }
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          return freeHospitals;
        }
      }, {
        key: "match",
        value: function match() {
          // this.group1Agents - residents 
          // this.group2Agents - hospitals
          // console.log("groups")
          // console.log(this.group1Agents, this.group1Agents)
          // "Set each hospital and resident to be completely free",
          this.update(1); // while a HOSPITAL h is under-subscribed and 
          // h's list contains a a RESIDENT r not assigned to h

          var counter_break = 0;

          while (this.freeAgentsOfGroup2.length > 0) {
            // get first hospital on list 
            var currentHospital = this.group2Agents.get(this.freeAgentsOfGroup2[0]); // "While some hospital h is - undersubscibed, 
            // and has a resident r on h's preferance list that is no assigned to h",

            this.update(2, {
              "%hospital%": currentHospital.name
            }); // console.log(currentHospital)

            if (currentHospital.ranking.length <= 0 || !this.getNextPotentialProposee(currentHospital)) {
              this.freeAgentsOfGroup2.shift();
            } else {
              var potentialProposee = this.getNextPotentialProposee(currentHospital); // a RESIDENT r that is not assigned to h, but is on its pref list 
              // "r := first resident on h's prefernace list not assigned to h",

              this.update(3, {
                "%resident%": potentialProposee.name
              }); // console.log("potentialProposee", potentialProposee)
              // if proposee is assigned to a different hospital then un assign
              // if r is assigned to another hospital h

              this.update(4, {
                "%resident%": potentialProposee.name
              });

              if (potentialProposee.match[0] != null) {
                this.breakAssignment(potentialProposee, potentialProposee.match[0]);
              } // MATHCING MIGHT NOT STABLE 
              // VIZ HAS BEEN WORKED ON WITH COMMENTS NEEDS TESTING 
              // UPDATES MAY BE IN WRONG PLACE TO ACCOMADATE THE CHNAGING VIZ LINES - NEEDS TESTING 
              // provisionally assign r to h


              this.provisionallyAssign(potentialProposee, currentHospital);
              this.update(6, {
                "%resident%": potentialProposee.name,
                "%hospital%": currentHospital.name
              });
              this.removeRuledOutPreferences(potentialProposee, currentHospital);
              this.freeAgentsOfGroup2 = this.checkFreeHospitals(); // continous loop as guessed + not clear way to define/get free hospitals
              // rankings should be deleted until convergence?

              this.freeAgentsOfGroup2 = this.checkFreeHospitals(); // console.log("free Agents on iteration", counter_break, this.freeAgentsOfGroup2)

              if (this.shouldContinueMatching(currentHospital)) {
                this.freeAgentsOfGroup1.shift();
              }
            } // breaking to stop infinite loop 
            // break;


            counter_break = counter_break + 1; // console.log(counter_break > 20)

            if (counter_break > 200) {
              // console.log("Done ---- Done ----")
              break;
            }
          } // stable matching found 


          this.update(9);
          this.print_matches();
          return;
        }
      }]);

      return HrHospitalEgsService;
    }(_abstract_classes_GaleShapley__WEBPACK_IMPORTED_MODULE_1__["GaleShapley"]);

    HrHospitalEgsService.ɵfac = function HrHospitalEgsService_Factory(t) {
      return ɵHrHospitalEgsService_BaseFactory(t || HrHospitalEgsService);
    };

    HrHospitalEgsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HrHospitalEgsService,
      factory: HrHospitalEgsService.ɵfac,
      providedIn: 'root'
    });

    var ɵHrHospitalEgsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](HrHospitalEgsService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrHospitalEgsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/algorithm-services/hr-resident-egs/hr-resident-egs.service.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/algorithm-services/hr-resident-egs/hr-resident-egs.service.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: HrResidentEgsService */

  /***/
  function srcAppAlgorithmPageAlgorithmsAlgorithmServicesHrResidentEgsHrResidentEgsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrResidentEgsService", function () {
      return HrResidentEgsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_classes_ExtendedGaleShapley__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../abstract-classes/ExtendedGaleShapley */
    "./src/app/algorithm-page/algorithms/abstract-classes/ExtendedGaleShapley.ts");

    var HrResidentEgsService = /*#__PURE__*/function (_abstract_classes_Ext) {
      _inherits(HrResidentEgsService, _abstract_classes_Ext);

      var _super6 = _createSuper(HrResidentEgsService);

      function HrResidentEgsService() {
        var _this10;

        _classCallCheck(this, HrResidentEgsService);

        _this10 = _super6.apply(this, arguments);
        _this10.group1Name = "resident";
        _this10.group2Name = "hospital";
        _this10.group2Agents = new Map();
        _this10.hospitalCapacity = new Map();
        return _this10;
      }

      _createClass(HrResidentEgsService, [{
        key: "generateAgents",
        value: function generateAgents() {
          for (var i = 1; i < this.numberOfAgents + 1; i++) {
            var group1AgentName = this.group1Name + i;
            this.group1Agents.set(group1AgentName, {
              name: group1AgentName,
              match: new Array(),
              ranking: new Array()
            });
            this.freeAgentsOfGroup1.push(group1AgentName);
          }

          var currentLetter = 'A';

          for (var _i11 = 1; _i11 < this.numberOfGroup2Agents + 1; _i11++) {
            var group2AgentName = this.group2Name + currentLetter;
            var availableSpaces = this.getRandomInt(1, this.numberOfAgents - 2);
            this.group2Agents.set(group2AgentName, {
              name: group2AgentName,
              match: new Array(),
              ranking: new Array(),
              availableSpaces: availableSpaces
            });
            this.hospitalCapacity[currentLetter] = availableSpaces;
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }

          this.algorithmSpecificData["hospitalCapacity"] = this.hospitalCapacity;
        }
      }, {
        key: "print_matches",
        value: function print_matches() {
          var _iterator18 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _step18$value = _slicedToArray(_step18.value, 2),
                  key = _step18$value[0],
                  resident = _step18$value[1];

              console.log(key, resident.match);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          var _iterator19 = _createForOfIteratorHelper(this.group2Agents.entries()),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _step19$value = _slicedToArray(_step19.value, 2),
                  _key2 = _step19$value[0],
                  hospital = _step19$value[1];

              console.log(_key2, hospital.match);
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
        }
      }, {
        key: "getRandomInt",
        value: function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
      }, {
        key: "getWorstResident",
        value: function getWorstResident(hospital) {
          var positionMap = new Map();

          var _iterator20 = _createForOfIteratorHelper(hospital.match),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var resident = _step20.value;
              positionMap.set(this.findPositionInMatches(hospital, resident), resident);
            } // use destructuring assingment to extract data from array into distinct variables
            // return the worst resident from the hospital's matches

          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          return positionMap.get(Math.max.apply(Math, _toConsumableArray(Array.from(positionMap.keys()))));
        }
      }, {
        key: "getNextPotentialProposee",
        value: function getNextPotentialProposee(hospital) {
          // return first hospital on r's list
          return hospital.ranking[0];
        }
      }, {
        key: "breakAssignment",
        value: function breakAssignment(resident, hospital) {
          var _this11 = this;

          this.update(4, {
            "%hospital%": hospital.name,
            "%capacity%": hospital.availableSpaces,
            "%resident%": resident.name
          });

          if (hospital.match.length >= hospital.availableSpaces) {
            var worstResident = this.getWorstResident(hospital);
            this.update(5, {
              "%hospital%": hospital.name,
              "%worstResident%": worstResident.name
            });
            var matchPosition = this.findPositionInMatches(hospital, worstResident);
            this.removeArrayFromArray(this.currentLines, [this.getLastCharacter(worstResident.name), this.getLastCharacter(hospital.name), "green"]);
            this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(worstResident.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(worstResident.name)).findIndex(function (h) {
              return h == _this11.getLastCharacter(hospital.name);
            }), "grey");
            this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(hospital.name), matchPosition, "grey");
            this.freeAgentsOfGroup1.push(worstResident.name);
            hospital.match.splice(hospital.match.findIndex(function (agent) {
              return agent.name == worstResident.name;
            }), 1);
            hospital.ranking.splice(matchPosition, 1);
            worstResident.match.splice(0, 1);
            worstResident.ranking.splice(this.findPositionInMatches(worstResident, hospital), 1);
            var hospitalLastChar = this.getLastCharacter(hospital.name);
            var currentHospitalCapacity = this.algorithmSpecificData["hospitalCapacity"][hospitalLastChar];
            this.algorithmSpecificData["hospitalCapacity"][hospitalLastChar] = String(currentHospitalCapacity).charAt(currentHospitalCapacity.length - 2);
            this.update(6, {
              "%hospital%": hospital.name,
              "%worstResident%": worstResident.name
            });
          }
        }
      }, {
        key: "provisionallyAssign",
        value: function provisionallyAssign(resident, hospital) {
          var _this12 = this;

          // provisionally assign r to h;
          var agentLastChar = this.getLastCharacter(resident.name);
          var proposeeLastChar = this.getLastCharacter(hospital.name);
          this.removeArrayFromArray(this.currentLines, [agentLastChar, proposeeLastChar, "red"]);
          var greenLine = [agentLastChar, proposeeLastChar, "green"];
          this.currentLines.push(greenLine);
          this.changePreferenceStyle(this.group1CurrentPreferences, agentLastChar, this.originalGroup1CurrentPreferences.get(agentLastChar).findIndex(function (h) {
            return h == _this12.getLastCharacter(hospital.name);
          }), "green");
          this.changePreferenceStyle(this.group2CurrentPreferences, proposeeLastChar, this.findPositionInMatches(hospital, resident), "green");

          if (hospital.match.length >= hospital.availableSpaces - 1) {
            this.algorithmSpecificData["hospitalCapacity"][proposeeLastChar] = "{#53D26F" + this.algorithmSpecificData["hospitalCapacity"][proposeeLastChar] + "}";
          }

          this.update(7, {
            "%resident%": resident.name,
            "%hospital%": hospital.name
          });
          resident.match[0] = hospital;
          hospital.match.push(resident);
        }
      }, {
        key: "removeRuledOutPreferences",
        value: function removeRuledOutPreferences(resident, hospital) {
          var _this13 = this;

          this.update(8, {
            "%resident%": resident.name,
            "%hospital%": hospital.name
          });

          if (hospital.match.length >= hospital.availableSpaces) {
            var worstResident = this.getWorstResident(hospital);
            var worstResidentPosition = this.findPositionInMatches(hospital, worstResident);
            this.update(9, {
              "%hospital%": hospital.name,
              "%worstResident%": worstResident.name
            });
            var hospitalRankingClearCounter = worstResidentPosition + 1; // for each successor h' of h on r's list {

            for (var i = worstResidentPosition + 1; i < hospital.ranking.length; i++) {
              var hospitalPosition = this.findPositionInMatches(hospital.ranking[i], hospital);
              this.relevantPreferences.push(this.getLastCharacter(hospital.ranking[i].name));
              this.update(10, {
                "%hospital%": hospital.name,
                "%nextResident%": hospital.ranking[i].name
              });
              this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(hospital.ranking[i].name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(hospital.ranking[i].name)).findIndex(function (h) {
                return h == _this13.getLastCharacter(hospital.name);
              }), "grey");
              this.changePreferenceStyle(this.group2CurrentPreferences, this.getLastCharacter(hospital.name), hospitalRankingClearCounter, "grey");
              hospital.ranking[i].ranking.splice(hospitalPosition, 1); // remove h' and r from each other's lists

              this.update(11, {
                "%hospital%": hospital.name,
                "%nextResident%": hospital.ranking[i].name
              });
              hospital.ranking.splice(i, 1);
              i -= 1;
              hospitalRankingClearCounter++;
              this.relevantPreferences.pop();
            }
          }
        }
      }, {
        key: "shouldContinueMatching",
        value: function shouldContinueMatching(hospital) {
          return true;
        }
      }]);

      return HrResidentEgsService;
    }(_abstract_classes_ExtendedGaleShapley__WEBPACK_IMPORTED_MODULE_1__["ExtendedGaleShapley"]);

    HrResidentEgsService.ɵfac = function HrResidentEgsService_Factory(t) {
      return ɵHrResidentEgsService_BaseFactory(t || HrResidentEgsService);
    };

    HrResidentEgsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HrResidentEgsService,
      factory: HrResidentEgsService.ɵfac,
      providedIn: 'root'
    });

    var ɵHrResidentEgsService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](HrResidentEgsService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrResidentEgsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/algorithm-services/smp-man-egs/egs-stable-marriage.service.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/algorithm-services/smp-man-egs/egs-stable-marriage.service.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: EgsStableMarriageService */

  /***/
  function srcAppAlgorithmPageAlgorithmsAlgorithmServicesSmpManEgsEgsStableMarriageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EgsStableMarriageService", function () {
      return EgsStableMarriageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_classes_EgsOneToMany__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../abstract-classes/EgsOneToMany */
    "./src/app/algorithm-page/algorithms/abstract-classes/EgsOneToMany.ts");

    var EgsStableMarriageService = /*#__PURE__*/function (_abstract_classes_Egs) {
      _inherits(EgsStableMarriageService, _abstract_classes_Egs);

      var _super7 = _createSuper(EgsStableMarriageService);

      function EgsStableMarriageService() {
        var _this14;

        _classCallCheck(this, EgsStableMarriageService);

        _this14 = _super7.apply(this, arguments);
        _this14.group1Name = "man";
        _this14.group2Name = "woman";
        return _this14;
      }

      _createClass(EgsStableMarriageService, [{
        key: "shouldContinueMatching",
        value: function shouldContinueMatching(currentAgent) {
          return true;
        }
      }, {
        key: "getNextPotentialProposee",
        value: function getNextPotentialProposee(currentAgent) {
          return currentAgent.ranking[0];
        }
      }]);

      return EgsStableMarriageService;
    }(_abstract_classes_EgsOneToMany__WEBPACK_IMPORTED_MODULE_1__["EgsOneToMany"]);

    EgsStableMarriageService.ɵfac = function EgsStableMarriageService_Factory(t) {
      return ɵEgsStableMarriageService_BaseFactory(t || EgsStableMarriageService);
    };

    EgsStableMarriageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EgsStableMarriageService,
      factory: EgsStableMarriageService.ɵfac,
      providedIn: 'root'
    });

    var ɵEgsStableMarriageService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](EgsStableMarriageService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgsStableMarriageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/algorithm-services/smp-man-gs/gs-stable-marriage.service.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/algorithm-services/smp-man-gs/gs-stable-marriage.service.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: GsStableMarriageService */

  /***/
  function srcAppAlgorithmPageAlgorithmsAlgorithmServicesSmpManGsGsStableMarriageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GsStableMarriageService", function () {
      return GsStableMarriageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_classes_GaleShapley__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../abstract-classes/GaleShapley */
    "./src/app/algorithm-page/algorithms/abstract-classes/GaleShapley.ts");

    var GsStableMarriageService = /*#__PURE__*/function (_abstract_classes_Gal2) {
      _inherits(GsStableMarriageService, _abstract_classes_Gal2);

      var _super8 = _createSuper(GsStableMarriageService);

      function GsStableMarriageService() {
        var _this15;

        _classCallCheck(this, GsStableMarriageService);

        _this15 = _super8.apply(this, arguments);
        _this15.group1Name = "man";
        _this15.group2Name = "woman";
        _this15.group1Agents = new Map();
        return _this15;
      }

      _createClass(GsStableMarriageService, [{
        key: "generateAgents",
        value: function generateAgents() {
          for (var i = 1; i < this.numberOfAgents + 1; i++) {
            var group1AgentName = this.group1Name + i;
            this.group1Agents.set(group1AgentName, {
              name: group1AgentName,
              match: new Array(),
              ranking: new Array(),
              lastProposed: 0
            });
            this.freeAgentsOfGroup1.push(group1AgentName);
          }

          var currentLetter = 'A';

          for (var _i12 = 1; _i12 < this.numberOfGroup2Agents + 1; _i12++) {
            var group2AgentName = this.group2Name + currentLetter;
            this.group2Agents.set(group2AgentName, {
              name: group2AgentName,
              match: new Array(),
              ranking: new Array()
            });
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }
        }
      }, {
        key: "match",
        value: function match() {
          var _this16 = this;

          this.update(1); // console.log("\n\nAlgorithm Steps:");
          //   console.log("Here", this.group1Agents)
          //   console.log(this.getGroupRankings(this.group1Agents))
          // 2: while some man m is free do

          var _loop = function _loop() {
            _this16.currentlySelectedAgents = [];
            _this16.relevantPreferences = [];

            var man = _this16.group1Agents.get(_this16.freeAgentsOfGroup1[0]);

            _this16.relevantPreferences.push(man["name"].substring(3));

            _this16.currentlySelectedAgents.push(man["name"].substring(3)); //   console.log("in loop", man.name)


            _this16.update(2, {
              "%man%": man.name
            }); // console.log("-------");
            // 3: w = most preferred woman on m’s list to which he has not yet proposed;


            var woman = man.ranking[man.lastProposed];

            _this16.currentlySelectedAgents.push(woman["name"].substring(5));

            _this16.relevantPreferences.push(woman["name"].substring(5));

            var redLine = [man["name"].substring(3), woman["name"].substring(5), "red"];

            _this16.currentLines.push(redLine);

            var greenLine = []; //   console.log("change...", woman["name"].substring(5), this.findPositionInMatches(woman, man), "red")

            _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, man), "red");

            _this16.changePreferenceStyle(_this16.group1CurrentPreferences, man["name"].substring(3), _this16.findPositionInMatches(man, woman), "red");

            _this16.update(3, {
              "%woman%": woman.name,
              "%man%": man.name
            }); // console.log("Man: " + man["name"]);
            // console.log("Woman: " + woman["name"]);


            man.lastProposed += 1; // man["ranking"].shift();

            _this16.update(4, {
              "%woman%": woman.name
            });

            if (woman.match.length <= 0) {
              // console.log(woman["name"] + " was free, so matching her with " + man["name"]);
              woman.match.splice(0, 1);
              woman.match.push(man);
              man.match[0] = woman;

              _this16.freeAgentsOfGroup1.shift(); // colour preferences (for when a partner is instantly selected)


              _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, man), "green");

              _this16.changePreferenceStyle(_this16.group1CurrentPreferences, man["name"].substring(3), _this16.findPositionInMatches(man, woman), "green");

              _this16.removeArrayFromArray(_this16.currentLines, redLine); // this.currentLines = this.currentLines.filter(arr => arr[0] != redLine[0] && arr[1] != redLine[1] && arr[2] != redLine[2]);


              greenLine = [man["name"].substring(3), woman["name"].substring(5), "green"];

              _this16.currentLines.push(greenLine);

              _this16.update(5, {
                "%woman%": woman.name,
                "%man%": man.name
              });
            } else {
              _this16.relevantPreferences.push(woman.match[0].name.substring(3));

              _this16.update(6, {
                "%woman%": woman.name,
                "%man%": man.name,
                "%match%": woman.match[0].name
              });

              var manName = man.name;

              _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, man), "red"); // console.log("Index of current match (" + woman["match"]["name"] + "): " + woman["ranking"].findIndex(((man: { name: string; }) => man.name == woman["match"]["name"])));
              // console.log("Index of man (" + man["name"] + "): " + woman["ranking"].findIndex(((man: { name: string; }) => man.name == manName)) );


              _this16.update(7, {
                "%woman%": woman.name,
                "%man%": man.name,
                "%match%": woman.match[0].name
              });

              if (woman.ranking.findIndex(function (man) {
                return man.name == woman.match[0].name;
              }) > woman.ranking.findIndex(function (man) {
                return man.name == manName;
              })) {
                _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, woman["match"][0]), "grey");

                _this16.changePreferenceStyle(_this16.group1CurrentPreferences, woman.match[0].name.substring(3), _this16.findPositionInMatches(woman.match[0], woman), "grey");

                _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, man), "green");

                _this16.removeArrayFromArray(_this16.currentLines, redLine);

                _this16.removeArrayFromArray(_this16.currentLines, [woman.match[0].name.substring(3), woman["name"].substring(5), "green"]); // console.log(woman["name"] + " prefers " + man["name"] + " (current match) to " + woman["match"]["name"] + " (" + woman["match"]["name"] + " is free, " + man["name"] + " engaged to " + woman["name"] + ")");


                var match = woman.match[0].name;

                _this16.freeAgentsOfGroup1.push(match);

                woman.match[0] = man;
                greenLine = [man["name"].substring(3), woman["name"].substring(5), "green"];

                _this16.currentLines.push(greenLine);

                _this16.changePreferenceStyle(_this16.group1CurrentPreferences, man["name"].substring(3), _this16.findPositionInMatches(man, woman), "green");

                _this16.freeAgentsOfGroup1.shift();

                _this16.update(8, {
                  "%woman%": woman.name,
                  "%man%": man.name,
                  "%match%": match
                });
              } else {
                _this16.changePreferenceStyle(_this16.group1CurrentPreferences, man["name"].substring(3), _this16.findPositionInMatches(man, woman), "grey");

                _this16.changePreferenceStyle(_this16.group2CurrentPreferences, woman["name"].substring(5), _this16.findPositionInMatches(woman, man), "grey"); // this.currentLines = this.currentLines.filter(arr => arr[0] != redLine[0] && arr[1] != redLine[1] && arr[2] != redLine[2]);


                _this16.removeArrayFromArray(_this16.currentLines, redLine);

                _this16.update(9, {
                  "%woman%": woman.name,
                  "%man%": man.name,
                  "%match%": woman.match[0].name
                }); // console.log(woman["name"] + " prefers " + woman["match"]["name"] + " to " + man["name"] + " (no change)");


                _this16.update(10);
              }
            }
          };

          while (this.freeAgentsOfGroup1.length > 0) {
            _loop();
          } // let matches = this.generateMatches();


          this.currentlySelectedAgents = [];
          this.relevantPreferences = [];
          this.update(11);

          for (var _i13 = 0, _Array$from9 = Array.from(this.group2Agents.values()); _i13 < _Array$from9.length; _i13++) {
            var woman = _Array$from9[_i13];
            woman.match[0].match[0] = woman;
          }

          return;
        }
      }]);

      return GsStableMarriageService;
    }(_abstract_classes_GaleShapley__WEBPACK_IMPORTED_MODULE_1__["GaleShapley"]);

    GsStableMarriageService.ɵfac = function GsStableMarriageService_Factory(t) {
      return ɵGsStableMarriageService_BaseFactory(t || GsStableMarriageService);
    };

    GsStableMarriageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GsStableMarriageService,
      factory: GsStableMarriageService.ɵfac,
      providedIn: 'root'
    });

    var ɵGsStableMarriageService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GsStableMarriageService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GsStableMarriageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/algorithms/algorithm-services/smp-room-irv/stable-room-irv.service.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/algorithm-page/algorithms/algorithm-services/smp-room-irv/stable-room-irv.service.ts ***!
    \******************************************************************************************************/

  /*! exports provided: StableRoomIrvService */

  /***/
  function srcAppAlgorithmPageAlgorithmsAlgorithmServicesSmpRoomIrvStableRoomIrvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StableRoomIrvService", function () {
      return StableRoomIrvService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_classes_StableRoomMates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../abstract-classes/StableRoomMates */
    "./src/app/algorithm-page/algorithms/abstract-classes/StableRoomMates.ts");

    var StableRoomIrvService = /*#__PURE__*/function (_abstract_classes_Sta) {
      _inherits(StableRoomIrvService, _abstract_classes_Sta);

      var _super9 = _createSuper(StableRoomIrvService);

      ///////////////////////////////////////////////////
      function StableRoomIrvService() {
        var _this17;

        _classCallCheck(this, StableRoomIrvService);

        _this17 = _super9.call(this);
        _this17.group1Name = "p";
        _this17.group2Name = "Other";
        _this17.group1Agents = new Map();
        _this17.personkey = {}; // console.log("Super call");

        return _this17;
      }

      _createClass(StableRoomIrvService, [{
        key: "generateAgents",
        value: function generateAgents() {
          // make each person 
          for (var i = 1; i < this.numberOfAgents + 1; i++) {
            var group1AgentName = this.group1Name + i;
            this.group1Agents.set(group1AgentName, {
              name: group1AgentName,
              match: new Array(),
              ranking: new Array(),
              lastProposed: null
            });
            this.freeAgentsOfGroup1.push(group1AgentName);
          } // fill data structures for group2 - Other - might not be used


          var currentLetter = 'A';

          for (var _i14 = 1; _i14 < this.numberOfGroup2Agents + 1; _i14++) {
            var group2AgentName = this.group2Name + currentLetter;
            this.group2Agents.set(group2AgentName, {
              name: group2AgentName,
              match: new Array(),
              ranking: new Array()
            });
            this.personkey[String(_i14)] = String(_i14);
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }

          this.algorithmSpecificData["SR"] = true;
        } ///////////////////////////////////////////////////
        // checks is anyone is assigned to a person, returns assigned person if true, null otherwise 

      }, {
        key: "assign_check",
        value: function assign_check(assinged) {
          // console.log("---Assing Check---")
          var _iterator21 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step21;

          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _step21$value = _slicedToArray(_step21.value, 2),
                  key = _step21$value[0],
                  person = _step21$value[1];

              // if assigned then 
              if (person.lastProposed != null) {
                if (person.lastProposed.name == assinged) {
                  // console.log("assigned", person.lastProposed.name, key)
                  return key;
                }
              }
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }

          return null;
        } // makes sure noone is assigned to person "free"
        // loop through all people - if they are - assign them to null

      }, {
        key: "free",
        value: function free(person_free) {
          // console.log("---Free Person---")
          var _iterator22 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step22;

          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _step22$value = _slicedToArray(_step22.value, 2),
                  key = _step22$value[0],
                  person = _step22$value[1];

              // if assigned then set to null
              if (person.lastProposed != null) {
                if (person.lastProposed.name == person_free) {
                  //free a 
                  this.update(8, {
                    "%old_person%": person.name,
                    "%selected%": person_free
                  });
                  this.removePersonFromArray(this.currentLines, this.getLastCharacter(person.name)); // add new free person to list 

                  this.freeAgentsOfGroup1.push(this.getLastCharacter(person.name));
                  person.lastProposed = null; // console.log(this.group1Agents);
                }
              }
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
        } // del agent1 from agent2 ranking 
        // del agent2 from agent1 ranking 

      }, {
        key: "delete_pair",
        value: function delete_pair(agent1, agent2) {
          // console.log("---Delete---");
          var agent1index = agent2.ranking.indexOf(agent1);

          if (agent1index != -1) {
            // console.log("Delete --- ", agent1.name, " From ", agent2.name);
            agent2.ranking.splice(agent1index, 1);
          }

          var agent2index = agent1.ranking.indexOf(agent2);

          if (agent2index != -1) {
            // console.log("Delete --- ", agent2.name, " From ", agent1.name);
            agent1.ranking.splice(agent2index, 1);
          } // grey out elms from visual lists


          this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(agent1.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(agent1.name)).indexOf(this.getLastCharacter(agent2.name)), "grey");
          this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(agent2.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(agent2.name)).indexOf(this.getLastCharacter(agent1.name)), "grey");
        }
      }, {
        key: "print_rankings",
        value: function print_rankings(agent) {
          for (var i = 0; i < agent.ranking.length; i++) {
            console.log("Element", i, agent.ranking[i]);
          }
        } // returns a map of agents that are free - not assigned to anyone 

      }, {
        key: "check_free_agents",
        value: function check_free_agents() {
          var free_agents = new Map();

          var _iterator23 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var _step23$value = _slicedToArray(_step23.value, 2),
                  key = _step23$value[0],
                  person = _step23$value[1];

              // if assigned then 
              if (person.lastProposed == null) {
                free_agents.set(key, person);
              }
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }

          return free_agents;
        } // returns a list of the agent keys that have more than one preferance 

      }, {
        key: "check_pref_count",
        value: function check_pref_count() {
          var agents_multiple_prefs = new Map();

          var _iterator24 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _step24$value = _slicedToArray(_step24.value, 2),
                  key = _step24$value[0],
                  person = _step24$value[1];

              // if person has more than one person in their ranking 
              if (person.ranking.length > 1) {
                agents_multiple_prefs.set(key, person); // console.log("Agent with multiple prefs", key, person.ranking.length)
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }

          return agents_multiple_prefs;
        } // checks if any preferance lists are empty

      }, {
        key: "check_pref_list_empty",
        value: function check_pref_list_empty() {
          var free_agents = new Map();

          var _iterator25 = _createForOfIteratorHelper(this.group1Agents.entries()),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _step25$value = _slicedToArray(_step25.value, 2),
                  key = _step25$value[0],
                  person = _step25$value[1];

              if (person.ranking.length < 1) {
                return true;
              }
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          return false;
        } // returns a persons ranking as a string 

      }, {
        key: "objs_toString",
        value: function objs_toString(ranking) {
          var s = ""; // go through each ranking and add to string 

          var _iterator26 = _createForOfIteratorHelper(ranking),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var person = _step26.value;
              s = s + person.name;
              s = s + ", ";
            } // remove extra comma added before 

          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          s = s.slice(0, -2);
          return s;
        }
      }, {
        key: "match",
        value: function match() {
          // console.log("Start")
          // console.log(this.group1Agents)
          var free_agents = new Map();
          free_agents = this.check_free_agents(); // Set each person to be free

          this.update(1);
          console.log("--- new info ---");
          console.log("Matches");

          var _iterator27 = _createForOfIteratorHelper(free_agents.entries()),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _step27$value = _slicedToArray(_step27.value, 2),
                  _key4 = _step27$value[0],
                  _person2 = _step27$value[1];

              var x = [];

              var _iterator33 = _createForOfIteratorHelper(_person2.ranking),
                  _step33;

              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var p = _step33.value;
                  x.push(p.name);
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }

              console.log(x);
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          var last_person = null;
          var last_pref = null;
          var count = 0;

          while (free_agents.size > 0) {
            this.currentlySelectedAgents = [];
            this.relevantPreferences = []; // console.log("match.irv");
            // console.log(this.group1Agents);
            // console.log(this.group2Agents);

            var redLine = ["1", "B", "red"]; //loop through each agent in the list 

            var _iterator28 = _createForOfIteratorHelper(free_agents.entries()),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _step28$value = _slicedToArray(_step28.value, 2),
                    key = _step28$value[0],
                    person = _step28$value[1];

                //While some person p is free (not assigned to someone)
                this.update(2, {
                  "%person%": person.name
                }); //let person: Person = this.group1Agents.get(this.freeAgentsOfGroup1[0]);
                // console.log("------------------")
                // console.log(person);
                // console.log(person.name);
                // console.log(person.ranking);
                // console.log(person.match);
                // console.log(person.lastProposed);
                //if person p has a empty preferance list

                this.update(3, {
                  "%person%": person.name
                }); // if there is no more preferances for a agent - no stable matchong exists

                if (person.ranking.length < 1) {
                  console.log("NO STABLE MATHCING - empty preferance list"); //end - no stable mathcing

                  this.update(4); // if stable == true then regenerate 

                  if (this.SRstable) {
                    console.log("ReRun");
                    this.run(this.numberOfAgents, this.numberOfGroup2Agents, null, this.SRstable);
                  }

                  return;
                } // change prevouis highlights back to black 


                if (last_person != null) {
                  this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(last_person.name), last_pref, "black");
                } // store prevouis person


                last_person = person;
                last_pref = this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person.name)).indexOf(this.getLastCharacter(person.ranking[0].name)), //highlight pref in persons list 
                this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(person.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person.name)).indexOf(this.getLastCharacter(person.ranking[0].name)), "red"); //person b := first preferance on p's list

                this.update(5, {
                  "%person%": person.name,
                  "%selected%": person.ranking[0].name
                });
                var pref = person.ranking[0]; // console.log("Pref check --- ", person.name, pref.name, person.ranking)

                redLine = [this.getLastCharacter(person.name), this.personkey[this.getLastCharacter(pref.name)], "red"];
                this.currentLines.push(redLine); // update free agents - remove first elm

                this.freeAgentsOfGroup1.shift(); //assign p to b

                this.update(6, {
                  "%person%": person.name,
                  "%selected%": pref.name
                }); //if someone is assigned to their most prefered person, then unassign them and assign current agent to them 

                var check = this.assign_check(pref.name); // if any person a is assigned to person b

                this.update(7, {
                  "%person%": person.name,
                  "%selected%": pref.name
                });

                if (check != null) {
                  this.free(pref.name); //free a 
                  //this.update(8) -- done in function 
                }

                person.lastProposed = pref;
                this.update(9, {
                  "%person%": person.name,
                  "%selected%": pref.name,
                  "%list%": this.objs_toString(pref.ranking)
                }); // loop through ranking 

                while (true) {
                  //get last elm of ranking
                  var remove = pref.ranking.slice(-1)[0]; // if elm is the current person then stop

                  if (remove.name == person.name) {
                    break;
                  } //delele elm from pref ranking list
                  // delete perd from elm ranking list 
                  // console.log("del", remove.name, pref.name)


                  this.delete_pair(pref, remove); // for each person c less preferded than p on b's, preferance list

                  this.update(10, {
                    "%person%": person.name,
                    "%removee%": remove.name
                  });
                } //person.ranking = person.ranking.slice(0, 3);
                // console.log("Before", free_agents);


                free_agents = this.check_free_agents(); // console.log("After", free_agents);
              } // console.log("ENDER")
              // for (let data of this.group1Agents.values()){
              //   console.log(data.name, " ---> ", data.lastProposed, data.ranking)
              // }
              // Place holder 
              // need to re-generate smaples to give stable mathcing 
              // OR leave in, in some form to show not everything has a stable matching 

            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }

            count++;

            if (count > 100) {
              console.log("No Stable Mathcing");
              return;
            }
          } // fix last highlights number 


          this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(last_person.name), last_pref, "black");
          var agents_multiple_prefs = this.check_pref_count(); ////// PAHSE 2
          // while there are agents that have more than 1 person in their prefrance list 

          var finished_people = [];

          while (agents_multiple_prefs.size > 0) {
            // console.log("There is agents with multiple prefs")
            // console.log(agents_multiple_prefs)
            //loop through those^ agents
            var _iterator29 = _createForOfIteratorHelper(agents_multiple_prefs.entries()),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _step29$value = _slicedToArray(_step29.value, 2),
                    _key3 = _step29$value[0],
                    _person = _step29$value[1];

                // While some person p has more than 1 preferance left
                this.update(11, {
                  "%person%": _person.name,
                  "%list%": this.objs_toString(_person.ranking)
                }); // look for rotations in perosn p's preferance list 

                this.update(12, {
                  "%person%": _person.name
                });
                var rotation_pairs = [];
                console.log("Checking poeple left", agents_multiple_prefs);
                console.log(_person.name);
                console.log(_person.ranking);
                var starting_agent = _person; // starting person

                var second_pref = _person.ranking[1]; //the starting persons second prefered person

                var _last_pref = second_pref.ranking.slice(-1)[0]; //the second preferned persons last preferd person
                // list of pairs to call delete on

                rotation_pairs.push([_last_pref, second_pref]); // Loop until there is a loop through people until back to the starting person

                var counter = 0;

                while (starting_agent != _last_pref) {
                  // console.log("adding pairs ")  
                  counter++; // stops infinite loops - break if there is no cycle through all the people 

                  if (counter > agents_multiple_prefs.size) {
                    break;
                  } // console.log("HERE")
                  // console.log(second_pref)
                  // console.log(last_pref)
                  // console.log("last_pref", last_pref)


                  second_pref = agents_multiple_prefs.get(_last_pref.name).ranking[1]; // update to be second pref of last_pref

                  _last_pref = second_pref.ranking.slice(-1)[0]; // update like above with new second_pref
                  // add to list 

                  rotation_pairs.push([_last_pref, second_pref]);
                } // if rotation r is found


                this.update(13, {
                  "%rotation%": this.objs_toString(rotation_pairs)
                }); // temp remove %rotation%
                // console.log("Found rotation", rotation_pairs)

                var deleted_pairs = [];

                for (var pair = 0; pair < rotation_pairs.length; pair++) {
                  // console.log("looping dels")
                  // if pair not already deleted 
                  if (!deleted_pairs.includes(rotation_pairs[pair])) {
                    // console.log("deleting", rotation_pairs[pair])
                    this.delete_pair(rotation_pairs[pair][0], rotation_pairs[pair][1]);
                    deleted_pairs.push(rotation_pairs[pair]); // delete pairs in rotation r

                    this.update(14, {
                      "%person%": rotation_pairs[pair][1].name,
                      "%removee%": rotation_pairs[pair][0].name
                    }); // update lines 

                    var _iterator30 = _createForOfIteratorHelper(this.group1Agents.entries()),
                        _step30;

                    try {
                      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                        var _step30$value = _slicedToArray(_step30.value, 2),
                            key_inner = _step30$value[0],
                            person_inner = _step30$value[1];

                        if (person_inner.ranking.length == 1 && !finished_people.includes(person_inner.name)) {
                          // remove lines starting from person_inner
                          this.removePersonFromArray(this.currentLines, this.getLastCharacter(person_inner.name)); // this.free(person_inner.lastProposed.name)
                          // HERE ^^^ WORKIGN ON UPDATEING FREE LIST IN PHASE 2 - ISSUE: DONT KNOW WHO GETS UNASSIGNED WHEN SOMEONE IS SET TO FREE, COULD LOOP AND CHECK ALL, 
                          // add the 
                          // this.freeAgentsOfGroup1.push(person_inner.lastProposed.name)
                          // let person_inner propose to their last remaining person

                          person_inner.lastProposed = person_inner.ranking.slice(0)[0]; // remove lines going to their new proposal

                          this.removeTargetFromArray(this.currentLines, this.personkey[this.getLastCharacter(person_inner.lastProposed.name)]); // with lines are green early, without overlapping reds 

                          this.removePersonFromArray(this.currentLines, this.personkey[this.getLastCharacter(person_inner.lastProposed.name)]); // update value in list 

                          this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(person_inner.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(person_inner.name)).indexOf(this.getLastCharacter(person_inner.ranking[0].name)), "green"); // draw line to new proposal from, to, colour

                          var line = [this.getLastCharacter(person_inner.name), this.personkey[this.getLastCharacter(person_inner.lastProposed.name)], "green"];
                          this.currentLines.push(line); // add person to finished person list 

                          finished_people.push(_person);
                        }
                      }
                    } catch (err) {
                      _iterator30.e(err);
                    } finally {
                      _iterator30.f();
                    }
                  } else {
                    // everything deleted 
                    // update 
                    break;
                  }
                } // conditions to end if stable matching is found 


                agents_multiple_prefs = this.check_pref_count(); // console.log("checking number of agents with multiple preferances")
                // console.log(agents_multiple_prefs)

                if (agents_multiple_prefs.size < 1) {
                  break;
                } // if a person b has 1 perferance left


                this.update(15); // update preferancees 

                var _iterator31 = _createForOfIteratorHelper(this.group1Agents.entries()),
                    _step31;

                try {
                  for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                    var _step31$value = _slicedToArray(_step31.value, 2),
                        _key_inner = _step31$value[0],
                        _person_inner = _step31$value[1];

                    if (_person_inner.ranking.length == 1) {
                      _person_inner.lastProposed = _person_inner.ranking.slice(0)[0];
                      var _line = [this.getLastCharacter(_person_inner.name), this.personkey[this.getLastCharacter(_person_inner.lastProposed.name)], "green"]; // let line = ["1", "B", "green"]
                      // this.currentLines.push(line)
                      // person b := last preferance

                      this.update(16, {
                        "%person%": _person_inner.name,
                        "%preferance%": _person_inner.lastProposed.name
                      });
                    }
                  } // if any people have empty preferance lists - no mathcong

                } catch (err) {
                  _iterator31.e(err);
                } finally {
                  _iterator31.f();
                }

                this.update(17, {
                  "%person%": _person.name
                });

                if (this.check_pref_list_empty() == true) {
                  // end - no stable matching
                  this.update(18);
                  console.log("No Stable matching"); // if stable == true then regenerate 

                  if (this.SRstable) {
                    console.log("ReRun");
                    this.run(this.numberOfAgents, this.numberOfGroup2Agents, null, this.SRstable);
                  }

                  return;
                } // needed to rest the for loop for the new values within the many_pref_list
                // this list is updated to remove people that no longer have many preferances 
                // ^ 


                break;
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          } // if PHASE 2 is not done - update viz


          if (agents_multiple_prefs.size == 0) {
            var _iterator32 = _createForOfIteratorHelper(this.group1Agents.entries()),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _step32$value = _slicedToArray(_step32.value, 2),
                    _key_inner2 = _step32$value[0],
                    _person_inner2 = _step32$value[1];

                if (_person_inner2.ranking.length == 1) {
                  // update value in list 
                  this.changePreferenceStyle(this.group1CurrentPreferences, this.getLastCharacter(_person_inner2.name), this.originalGroup1CurrentPreferences.get(this.getLastCharacter(_person_inner2.name)).indexOf(this.getLastCharacter(_person_inner2.ranking[0].name)), "green");
                  this.removePersonFromArray(this.currentLines, this.getLastCharacter(_person_inner2.name));
                  this.removeTargetFromArray(this.currentLines, this.personkey[this.getLastCharacter(_person_inner2.lastProposed.name)]);
                  _person_inner2.lastProposed = _person_inner2.ranking.slice(0)[0];
                  var _line2 = [this.getLastCharacter(_person_inner2.name), this.personkey[this.getLastCharacter(_person_inner2.lastProposed.name)], "green"]; // let line = ["1", "B", "green"]

                  this.currentLines.push(_line2);
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }

          this.update(19); // console.log("group1agents at end", this.group1Agents, agents_multiple_prefs)
          // if stable == false then regenerate - until a unstable instance is found  
          // if (!this.SRstable){
          //   this.run(this.numberOfAgents, this.numberOfGroup2Agents, null, this.SRstable)
          // }

          return;
        }
      }]);

      return StableRoomIrvService;
    }(_abstract_classes_StableRoomMates__WEBPACK_IMPORTED_MODULE_1__["StableRoomMates"]);

    StableRoomIrvService.ɵfac = function StableRoomIrvService_Factory(t) {
      return new (t || StableRoomIrvService)();
    };

    StableRoomIrvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StableRoomIrvService,
      factory: StableRoomIrvService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StableRoomIrvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/animation-container/agent-titles/agent-titles.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/algorithm-page/animation-container/agent-titles/agent-titles.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AgentTitlesComponent */

  /***/
  function srcAppAlgorithmPageAnimationContainerAgentTitlesAgentTitlesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgentTitlesComponent", function () {
      return AgentTitlesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AgentTitlesComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.playback.description);
      }
    }

    var AgentTitlesComponent = /*#__PURE__*/function () {
      function AgentTitlesComponent(algorithmService, playback) {
        _classCallCheck(this, AgentTitlesComponent);

        this.algorithmService = algorithmService;
        this.playback = playback;
      }

      _createClass(AgentTitlesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AgentTitlesComponent;
    }();

    AgentTitlesComponent.ɵfac = function AgentTitlesComponent_Factory(t) {
      return new (t || AgentTitlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_2__["PlaybackService"]));
    };

    AgentTitlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgentTitlesComponent,
      selectors: [["agent-titles"]],
      inputs: {
        showCode: "showCode"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "d-flex", "justify-content-around", "flex-wrap", "flex-md-nowrap", "align-items-center", 2, "height", "120px", "border-bottom", "1px solid rgba(184, 184, 184, 0.658)"], ["id", "lhsName", 1, "h2", "mt-3"], ["class", "row text-center border-bottom mr-3", "style", "position: fixed; height:114px; width: 350px;", 4, "ngIf"], ["id", "rhsName", 1, "h2", "mt-3"], [1, "row", "text-center", "border-bottom", "mr-3", 2, "position", "fixed", "height", "114px", "width", "350px"], [1, "col", "h2", "sidebarPopover", "my-auto", "text-center", 2, "font-weight", "400", "font-size", "1vw", "line-height", "1.5vw"]],
      template: function AgentTitlesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AgentTitlesComponent_div_3_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.algorithmService.pluralMap.get(ctx.algorithmService.currentAlgorithm.orientation[0]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.algorithmService.pluralMap.get(ctx.algorithmService.currentAlgorithm.orientation[1]));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FuaW1hdGlvbi1jb250YWluZXIvYWdlbnQtdGl0bGVzL2FnZW50LXRpdGxlcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentTitlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'agent-titles',
          templateUrl: './agent-titles.component.html',
          styleUrls: ['./agent-titles.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]
        }, {
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_2__["PlaybackService"]
        }];
      }, {
        showCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/animation-container/animation-container.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/algorithm-page/animation-container/animation-container.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AnimationContainerComponent */

  /***/
  function srcAppAlgorithmPageAnimationContainerAnimationContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationContainerComponent", function () {
      return AnimationContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimationContainerComponent = /*#__PURE__*/function () {
      function AnimationContainerComponent() {
        _classCallCheck(this, AnimationContainerComponent);
      }

      _createClass(AnimationContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationContainerComponent;
    }();

    AnimationContainerComponent.ɵfac = function AnimationContainerComponent_Factory(t) {
      return new (t || AnimationContainerComponent)();
    };

    AnimationContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimationContainerComponent,
      selectors: [["app-animation-container"]],
      decls: 0,
      vars: 0,
      template: function AnimationContainerComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FuaW1hdGlvbi1jb250YWluZXIvYW5pbWF0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animation-container',
          templateUrl: './animation-container.component.html',
          styleUrls: ['./animation-container.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/animation-container/canvas-display/canvas-display.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/algorithm-page/animation-container/canvas-display/canvas-display.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: CanvasDisplayComponent */

  /***/
  function srcAppAlgorithmPageAnimationContainerCanvasDisplayCanvasDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasDisplayComponent", function () {
      return CanvasDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CanvasDisplayComponent = /*#__PURE__*/function () {
      function CanvasDisplayComponent() {
        _classCallCheck(this, CanvasDisplayComponent);
      }

      _createClass(CanvasDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CanvasDisplayComponent;
    }();

    CanvasDisplayComponent.ɵfac = function CanvasDisplayComponent_Factory(t) {
      return new (t || CanvasDisplayComponent)();
    };

    CanvasDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CanvasDisplayComponent,
      selectors: [["app-canvas-display"]],
      decls: 0,
      vars: 0,
      template: function CanvasDisplayComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FuaW1hdGlvbi1jb250YWluZXIvY2FudmFzLWRpc3BsYXkvY2FudmFzLWRpc3BsYXkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-canvas-display',
          templateUrl: './canvas-display.component.html',
          styleUrls: ['./canvas-display.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/animation-guide-dialog/animation-guide-dialog.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/algorithm-page/animation-guide-dialog/animation-guide-dialog.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AnimationGuideDialogComponent */

  /***/
  function srcAppAlgorithmPageAnimationGuideDialogAnimationGuideDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationGuideDialogComponent", function () {
      return AnimationGuideDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AnimationGuideDialogComponent = /*#__PURE__*/function () {
      function AnimationGuideDialogComponent() {
        _classCallCheck(this, AnimationGuideDialogComponent);
      }

      _createClass(AnimationGuideDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationGuideDialogComponent;
    }();

    AnimationGuideDialogComponent.ɵfac = function AnimationGuideDialogComponent_Factory(t) {
      return new (t || AnimationGuideDialogComponent)();
    };

    AnimationGuideDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimationGuideDialogComponent,
      selectors: [["app-animation-guide-dialog"]],
      decls: 30,
      vars: 0,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mb-2"], [1, "row", "mb-4"], [1, "col-md-2"], ["src", "assets/images/greenCircle.svg"], [1, "col-md-10", "my-auto"], [1, "col-md-5"], ["src", "assets/images/redLine.svg"], [1, "col-md-7", "my-auto"], [1, "row"], ["src", "assets/images/greenLine.svg"], ["mat-dialog-action", "", "align", "end", 1, "mb-2"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function AnimationGuideDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Animation Guide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Green border around circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ": This agent is currently selected.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Red line between two circles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ": 1 is currently considering proposing to A.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Green line between two circles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ": 1 is provisionally assigned/engaged to A.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2FuaW1hdGlvbi1ndWlkZS1kaWFsb2cvYW5pbWF0aW9uLWd1aWRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationGuideDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animation-guide-dialog',
          templateUrl: './animation-guide-dialog.component.html',
          styleUrls: ['./animation-guide-dialog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/animations/algorithm-animation.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/algorithm-page/animations/algorithm-animation.service.ts ***!
    \**************************************************************************/

  /*! exports provided: AlgorithmAnimationService */

  /***/
  function srcAppAlgorithmPageAnimationsAlgorithmAnimationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmAnimationService", function () {
      return AlgorithmAnimationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlgorithmAnimationService = /*#__PURE__*/function () {
      function AlgorithmAnimationService() {
        _classCallCheck(this, AlgorithmAnimationService);
      }

      _createClass(AlgorithmAnimationService, [{
        key: "loadPage",
        value: function loadPage() {
          // animation for sliding the navbar down from Y-150 its position
          anime({
            targets: '.navbar',
            easing: 'easeOutQuint',
            translateY: [-150, 0],
            delay: 200,
            duration: 900
          }); // animation for sliding the sidebar right from X-500 its position

          anime({
            targets: '.sidebar',
            easing: 'easeInOutQuint',
            translateX: [-500, 0],
            delay: 270,
            duration: 1000
          }); // animation for fading the sidebar content in as the sidebar slides in

          anime({
            targets: '#sidebarContent',
            easing: 'easeInOutQuint',
            opacity: [0, 1],
            delay: 270,
            duration: 1500
          }); // animation for fading the main content in as the sidebar finishes sliding in

          anime({
            targets: '#mainContent',
            easing: 'easeInOutQuint',
            opacity: [0, 1],
            delay: 670,
            duration: 900
          });
        }
      }, {
        key: "goHome",
        value: function goHome() {
          anime({
            targets: '.navbar',
            easing: 'easeOutQuint',
            translateY: [0, -150],
            // opacity: [0, 1],
            delay: 400,
            duration: 900
          });
          anime({
            targets: '.sidebar',
            easing: 'easeInOutQuint',
            translateX: [0, -500],
            // opacity: [0, 1],
            duration: 600
          });
          anime({
            targets: '#sidebarContent',
            easing: 'easeInOutQuint',
            // translateX: [-1500, 0],
            opacity: [1, 0],
            duration: 600
          });
          anime({
            targets: '#mainContent',
            easing: 'easeInOutQuint',
            // translateX: [-1500, 0],
            opacity: [1, 0],
            duration: 600
          });
        }
      }, {
        key: "fadeCanvasOut",
        value: function fadeCanvasOut() {
          anime({
            targets: '#myCanvas',
            easing: 'easeInOutQuint',
            // translateX: [-1500, 0],
            opacity: [1, 0],
            duration: 300
          });
        }
      }, {
        key: "fadeCanvasIn",
        value: function fadeCanvasIn() {
          anime({
            targets: '#myCanvas',
            easing: 'easeInOutQuint',
            // translateX: [-1500, 0],
            opacity: [0, 1],
            duration: 300
          });
        }
      }, {
        key: "hideSidebar",
        value: function hideSidebar() {
          anime({
            targets: '.sidebar',
            easing: 'easeInOutQuint',
            translateX: [0, -800],
            delay: 200,
            duration: 700
          });
        }
      }, {
        key: "showSidebar",
        value: function showSidebar() {
          anime({
            targets: '.sidebar',
            easing: 'easeInOutQuint',
            translateX: [-500, 0],
            // opacity: [0, 1],
            duration: 600
          });
          anime({
            targets: '#sidebarContent',
            easing: 'easeInOutQuint',
            // translateX: [-1500, 0],
            opacity: [0, 1],
            duration: 600
          });
        }
      }, {
        key: "hideMainContent",
        value: function hideMainContent() {
          anime({
            targets: '#mainContent',
            easing: 'easeInOutQuint',
            opacity: [1, 0],
            duration: 500
          });
        }
      }, {
        key: "showMainContent",
        value: function showMainContent() {
          anime({
            targets: '#mainContent',
            easing: 'easeInOutQuint',
            opacity: [0, 1],
            duration: 500
          });
        }
      }]);

      return AlgorithmAnimationService;
    }();

    AlgorithmAnimationService.ɵfac = function AlgorithmAnimationService_Factory(t) {
      return new (t || AlgorithmAnimationService)();
    };

    AlgorithmAnimationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlgorithmAnimationService,
      factory: AlgorithmAnimationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmAnimationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/code-display/code-display.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/algorithm-page/code-display/code-display.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CodeDisplayComponent */

  /***/
  function srcAppAlgorithmPageCodeDisplayCodeDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeDisplayComponent", function () {
      return CodeDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CodeDisplayComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "line", i_r2 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r1, " ");
      }
    }

    var CodeDisplayComponent = /*#__PURE__*/function () {
      function CodeDisplayComponent(playback, algService) {
        _classCallCheck(this, CodeDisplayComponent);

        this.playback = playback;
        this.algService = algService;
        this.animate = true;
      }

      _createClass(CodeDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.algorithm = this.algService.currentAlgorithm.id;
        }
      }]);

      return CodeDisplayComponent;
    }();

    CodeDisplayComponent.ɵfac = function CodeDisplayComponent_Factory(t) {
      return new (t || CodeDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]));
    };

    CodeDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CodeDisplayComponent,
      selectors: [["code-display"]],
      decls: 6,
      vars: 1,
      consts: [["data-toggle", "popover", "data-placement", "left", "title", "Code Display", "data-content", "This highlights the current line that's being executed in the algorithm as you play or drag the playback slider.", "data-trigger", "manual", "data-template", "<div class=\"popover fade show bs-popover-right popoverPositioning blackText\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>", 1, "border-bottom", "sidebarPopover", "mr-2", 2, "background-color", "#1b1f23", "max-width", "100%"], [1, "pt-4", "pl-3", 2, "color", "rgb(231, 231, 231)", "font-weight", "300", "margin-bottom", "0", "padding-bottom", "0", "font-size", "1.4vw"], [2, "white-space", "pre", "height", "100%", "vertical-align", "middle", "font-size", "0.8vw", "line-height", "1.2vw", "margin", "0", "color", "rgb(231, 231, 231)", "width", "100%"], [1, "pt-3", "pb-4", 2, "width", "100%", "display", "table", "margin", "0", "vertical-align", "middle", "background-color", "#1b1f23", "padding-left", "30px"], ["style", "display: table-row; width: 100%; vertical-align: middle; margin: 0; ", 3, "id", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "width", "100%", "vertical-align", "middle", "margin", "0", 3, "id"], [1, "pl-2", 2, "vertical-align", "middle", "width", "100%", "tab-size", "0.8vw", "word-wrap", "break-word", "white-space", "pre-wrap"]],
      template: function CodeDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pseudocode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CodeDisplayComponent_div_5_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.algService.currentAlgorithm.code);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["li[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2UvY29kZS1kaXNwbGF5L0M6XFxVc2Vyc1xcY2FsbHVcXEw0IFByb2plY3RcXGluZGl2aWR1YWwtcHJvamVjdC9zcmNcXGFwcFxcYWxnb3JpdGhtLXBhZ2VcXGNvZGUtZGlzcGxheVxcY29kZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9jb2RlLWRpc3BsYXkvY29kZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2NvZGUtZGlzcGxheS9jb2RlLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxpOjptYXJrZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufSIsImxpOjptYXJrZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufSJdfQ== */", ".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'code-display',
          templateUrl: './code-display.component.html',
          styleUrls: ['./code-display.component.scss', '../sidebar/sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }, {
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/algorithm-page/edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: EditPreferencesDialogComponent */

  /***/
  function srcAppAlgorithmPageEditPreferencesDialogEditPreferencesDialogEditPreferencesDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPreferencesDialogComponent", function () {
      return EditPreferencesDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/canvas/canvas.service */
    "./src/app/algorithm-page/services/canvas/canvas.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function EditPreferencesDialogComponent_div_11_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_11_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number of Men and Women");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPreferencesDialogComponent_div_11_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.generatePreferenceString();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPreferencesDialogComponent_div_11_mat_error_5_Template, 4, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditPreferencesDialogComponent_div_11_mat_error_6_Template, 2, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.numberOfGroup1Agents.hasError("min") || ctx_r0.numberOfGroup1Agents.hasError("max"));
      }
    }

    function EditPreferencesDialogComponent_div_12_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_12_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_12_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_12_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number of Residents");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPreferencesDialogComponent_div_12_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.generatePreferenceString();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPreferencesDialogComponent_div_12_mat_error_5_Template, 4, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditPreferencesDialogComponent_div_12_mat_error_6_Template, 2, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number of Hospitals");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPreferencesDialogComponent_div_12_Template_input_ngModelChange_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.generatePreferenceString();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPreferencesDialogComponent_div_12_mat_error_11_Template, 4, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditPreferencesDialogComponent_div_12_mat_error_12_Template, 2, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup1Agents.hasError("min") || ctx_r1.numberOfGroup1Agents.hasError("max"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.numberOfGroup2Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup2Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup2Agents.hasError("min") || ctx_r1.numberOfGroup2Agents.hasError("max"));
      }
    }

    function EditPreferencesDialogComponent_div_13_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_13_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input an even number between 1 and 10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Number of Men and Women");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPreferencesDialogComponent_div_13_Template_input_ngModelChange_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.generatePreferenceString();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditPreferencesDialogComponent_div_13_mat_error_5_Template, 4, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditPreferencesDialogComponent_div_13_mat_error_6_Template, 2, 0, "mat-error", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.numberOfGroup1Agents.hasError("min") || ctx_r2.numberOfGroup1Agents.hasError("max"));
      }
    }

    function EditPreferencesDialogComponent_h2_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preferences Missing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_span_22_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPreferencesDialogComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditPreferencesDialogComponent_span_22_span_3_Template, 2, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;
        var lastItem_r22 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r21, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !lastItem_r22);
      }
    }

    var EditPreferencesDialogComponent = /*#__PURE__*/function () {
      function EditPreferencesDialogComponent(algorithmService, playbackService, canvasService, dialogRef, _snackBar) {
        _classCallCheck(this, EditPreferencesDialogComponent);

        this.algorithmService = algorithmService;
        this.playbackService = playbackService;
        this.canvasService = canvasService;
        this.dialogRef = dialogRef;
        this._snackBar = _snackBar;
        this.group1Preferences = new Map();
        this.group2Preferences = new Map();
        this.preferences = "";
        this.equalGroups = false;
        this.numberOfGroup1Agents = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.algorithmService.numberOfGroup1Agents, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9)]);
        this.numberOfGroup2Agents = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.algorithmService.numberOfGroup2Agents, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9)]);
        this.valid = true;
      }

      _createClass(EditPreferencesDialogComponent, [{
        key: "onEnter",
        value: function onEnter() {
          if (!(this.numberOfGroup1Agents.errors && this.numberOfGroup2Agents.errors)) {
            this.generateAlgorithmPreferences();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.group1Preferences = this.playbackService.commandList[0]["group1CurrentPreferences"];
          this.group2Preferences = this.playbackService.commandList[0]["group2CurrentPreferences"];
          this.preferencesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.preferences);

          if (this.algorithmService.currentAlgorithm.equalGroups) {
            this.equalGroups = true;
          }

          this.generatePreferenceString(); // console.log(this.formString)
        }
      }, {
        key: "generatePreferenceString",
        value: function generatePreferenceString() {
          var _this18 = this;

          var preferenceString = this.algorithmService.pluralMap.get(this.algorithmService.currentAlgorithm.orientation[0]) + "\n";
          var currentLine = "";
          var counter = 0;
          this.missingPreferences = [];

          if (this.equalGroups) {
            this.numberOfGroup2Agents.setValue(this.numberOfGroup1Agents.value);
          }

          if (this.algorithmService.numberOfGroup1Agents < this.numberOfGroup1Agents.value || this.algorithmService.numberOfGroup2Agents < this.numberOfGroup2Agents.value) {
            var numbersToAdd = [];
            var lettersToAdd = [];

            for (var i = this.algorithmService.numberOfGroup2Agents + 1; i <= this.numberOfGroup2Agents.value; i++) {
              lettersToAdd.push(String.fromCharCode(i + 64));
            }

            for (var _i15 = this.algorithmService.numberOfGroup1Agents + 1; _i15 <= this.numberOfGroup1Agents.value; _i15++) {
              numbersToAdd.push(String(_i15));
            }

            var _iterator34 = _createForOfIteratorHelper(this.group1Preferences),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var agent = _step34.value;

                if (Number(agent[0]) <= this.numberOfGroup1Agents.value) {
                  currentLine = "";
                  this.shuffle(lettersToAdd);
                  var id = agent[0];

                  var _newPreferences2 = agent[1].filter(function (pref) {
                    return pref.charCodeAt(0) - 64 <= _this18.numberOfGroup2Agents.value;
                  }).concat(lettersToAdd);

                  currentLine = id + ": " + _newPreferences2.join(", ");
                  currentLine += "\n";
                  preferenceString += currentLine;
                }
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            for (var _i16 = this.algorithmService.numberOfGroup1Agents + 1; _i16 <= this.numberOfGroup1Agents.value; _i16++) {
              var newPreferences = Array.from(this.group1Preferences.values())[0].concat(lettersToAdd).filter(function (pref) {
                return pref.charCodeAt(0) - 64 <= _this18.numberOfGroup2Agents.value;
              });
              this.shuffle(newPreferences);
              currentLine = _i16 + ": " + newPreferences.join(", ");
              currentLine += "\n";
              preferenceString += currentLine;
            }

            preferenceString += "\n" + this.algorithmService.pluralMap.get(this.algorithmService.currentAlgorithm.orientation[1]) + "\n";

            var _iterator35 = _createForOfIteratorHelper(this.group2Preferences),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _agent4 = _step35.value;

                if (Number(_agent4[0].charCodeAt(0) - 64) <= this.numberOfGroup2Agents.value) {
                  currentLine = "";
                  this.shuffle(numbersToAdd);
                  var _id = _agent4[0];

                  var _newPreferences3 = _agent4[1].filter(function (pref) {
                    return pref <= _this18.numberOfGroup1Agents.value;
                  }).concat(numbersToAdd);

                  currentLine = _id + ": " + _newPreferences3.join(", ");
                  currentLine += "\n";
                  preferenceString += currentLine;
                }
              } // console.log(this.numberOfGroup2Agents.value);

            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            for (var _i17 = this.algorithmService.numberOfGroup2Agents + 1; _i17 <= this.numberOfGroup2Agents.value; _i17++) {
              var _newPreferences = Array.from(this.group2Preferences.values())[0].concat(numbersToAdd).filter(function (pref) {
                return pref <= _this18.numberOfGroup1Agents.value;
              });

              this.shuffle(_newPreferences);
              currentLine = String.fromCharCode(_i17 + 64) + ": " + _newPreferences.join(", ");
              currentLine += "\n";
              preferenceString += currentLine;
            }
          } else {
            var _iterator36 = _createForOfIteratorHelper(this.group1Preferences),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _agent6 = _step36.value;
                currentLine = "";

                if (counter < this.numberOfGroup1Agents.value) {
                  var _id3 = _agent6[0];
                  var _currentPreferences = _agent6[1];
                  var _newPreferences5 = [];

                  var _iterator39 = _createForOfIteratorHelper(_currentPreferences),
                      _step39;

                  try {
                    for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                      var _preference = _step39.value;

                      if (_preference.charCodeAt(0) - 65 < this.numberOfGroup2Agents.value) {
                        _newPreferences5.push(_preference);
                      }
                    }
                  } catch (err) {
                    _iterator39.e(err);
                  } finally {
                    _iterator39.f();
                  }

                  currentLine = _id3 + ": " + _newPreferences5.join(", ");
                  currentLine += "\n";
                  preferenceString += currentLine;
                }

                counter++;
              } // console.log(this.algorithmService, "name here")

            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }

            if (this.algorithmService.currentAlgorithm.name != "Stable Roommates Problem" || true) {
              preferenceString += "\n" + this.algorithmService.pluralMap.get(this.algorithmService.currentAlgorithm.orientation[1]) + "\n";
              counter = 0;

              var _iterator37 = _createForOfIteratorHelper(this.group2Preferences),
                  _step37;

              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var _agent5 = _step37.value;
                  currentLine = "";

                  if (counter < this.numberOfGroup2Agents.value) {
                    var _id2 = _agent5[0];
                    var currentPreferences = _agent5[1];
                    var _newPreferences4 = [];

                    var _iterator38 = _createForOfIteratorHelper(currentPreferences),
                        _step38;

                    try {
                      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                        var preference = _step38.value;

                        if (Number(preference) <= this.numberOfGroup1Agents.value) {
                          _newPreferences4.push(preference);
                        }
                      }
                    } catch (err) {
                      _iterator38.e(err);
                    } finally {
                      _iterator38.f();
                    }

                    currentLine = _id2 + ": " + _newPreferences4.join(", ");
                    currentLine += "\n";
                    preferenceString += currentLine;
                  }

                  counter++;
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }
            }
          }

          this.formString = preferenceString.slice(0, -1);
        }
      }, {
        key: "generateAlgorithmPreferences",
        value: function generateAlgorithmPreferences() {
          var preferenceString = this.formString;
          console.log("---");
          console.log(preferenceString);
          var newPreferences = new Map();
          console.log(preferenceString.split("\n"));

          var _iterator40 = _createForOfIteratorHelper(preferenceString.split("\n")),
              _step40;

          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
              var line = _step40.value;

              if (this.checkIfPreference(line)) {
                if (this.checkValidity) {
                  line = line.replace(/:\s+,/g, ':');
                  line = line.replace(/,\s+,/g, ',');
                  line = line.replace(/, $/g, '');
                  line = line.replace(/,$/g, '');
                  line = line.replace(/\s+/g, ''); // remove whitespace from line from https://stackoverflow.com/questions/24580912/trim-all-white-space-from-string-javascript

                  var agentId = line.slice(0, line.indexOf(":"));
                  var agentPreferences = line.slice(line.indexOf(":") + 1).split(",");

                  if (agentPreferences.slice().length == 1) {
                    agentPreferences = Array(this.numberOfGroup1Agents.value - 1).fill("1");
                  }

                  newPreferences.set(agentId, agentPreferences.slice());
                  console.log(agentPreferences.slice());
                }
              }
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }

          var command = this.playbackService.commandList[this.playbackService.previousStepCounter];
          var a = document.getElementById("line" + command["lineNumber"]);
          a.style.backgroundColor = "";
          a.style.color = "";
          this.algorithmService.numberOfGroup1Agents = Number(this.numberOfGroup1Agents.value);
          this.algorithmService.numberOfGroup2Agents = Number(this.numberOfGroup2Agents.value);
          this.canvasService.initialise();
          this.playbackService.setAlgorithm(this.algorithmService.currentAlgorithm.id, this.algorithmService.numberOfGroup1Agents, this.algorithmService.numberOfGroup2Agents, newPreferences);
          this.dialogRef.close();

          this._snackBar.open("Preferences changed", "Dismiss", {
            duration: 2000
          });
        }
      }, {
        key: "checkIfPreference",
        value: function checkIfPreference(str) {
          var re = /^.:/;
          return re.test(str);
        }
      }, {
        key: "checkValidity",
        value: function checkValidity(str) {
          return true;
        }
      }, {
        key: "generateMissingPreferences",
        value: function generateMissingPreferences(preferenceString) {
          var newPreferences = new Map();
          this.missingPreferences = []; // dont check for SR

          if (this.algorithmService.currentAlgorithm.name == "Stable Roommates Problem") {
            return;
          }

          var _iterator41 = _createForOfIteratorHelper(preferenceString.split("\n")),
              _step41;

          try {
            for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
              var line = _step41.value;

              if (this.checkIfPreference(line)) {
                if (this.checkValidity) {
                  line = line.replace(/:\s+,/g, ':');
                  line = line.replace(/,\s+,/g, ',');
                  line = line.replace(/, $/g, '');
                  line = line.replace(/,$/g, '');
                  line = line.replace(/\s+/g, ''); // remove whitespace from line from https://stackoverflow.com/questions/24580912/trim-all-white-space-from-string-javascript

                  var agentId = line.slice(0, line.indexOf(":"));
                  var agentPreferences = line.slice(line.indexOf(":") + 1).split(",");
                  newPreferences.set(agentId, agentPreferences.slice());
                }
              }
            } // console.log(newPreferences);
            // console.log("\n\n");

          } catch (err) {
            _iterator41.e(err);
          } finally {
            _iterator41.f();
          }

          this.valid = true; // let missingPreferences: Array<Array<string>> = [];

          var _iterator42 = _createForOfIteratorHelper(newPreferences),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var agent = _step42.value;
              // let currentPreferences: Array<string> = agent[1];
              var _agentId = agent[0];
              var currentPreferences = agent[1];
              var isGroup1 = isNaN(Number(_agentId)); // console.log(agentId);
              // console.log(currentPreferences);
              // console.log(isGroup1);
              // console.log("\n");

              for (var i = 1; i <= (isGroup1 ? this.numberOfGroup1Agents.value : this.numberOfGroup2Agents.value); i++) {
                // console.log(isGroup1 ? i : String.fromCharCode(i + 64));
                var currentNumInPreference = false;

                var _iterator43 = _createForOfIteratorHelper(currentPreferences),
                    _step43;

                try {
                  for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                    var _preference2 = _step43.value;

                    // console.log(isGroup1 ? String(i) : String.fromCharCode(i + 64));
                    // console.log(preference);
                    if ((isGroup1 ? String(i) : String.fromCharCode(i + 64)) == _preference2) {
                      // console.log("here");
                      // boolean array?
                      currentNumInPreference = true;
                    }
                  }
                } catch (err) {
                  _iterator43.e(err);
                } finally {
                  _iterator43.f();
                }

                if (!currentNumInPreference) {
                  // console.log("(" + agentId + ", " + (isGroup1 ? String(i) : String.fromCharCode(i + 64)) + ")");
                  // console.log([agentId, (isGroup1 ? String(i) : String.fromCharCode(i + 64))])
                  // console.log([(isGroup1 ? String(i) : String.fromCharCode(i + 64)), agentId]);
                  // console.log([agentId, (isGroup1 ? String(i) : String.fromCharCode(i + 64))] == ["1", "D"]);
                  // console.log(this.checkArrayEquality([agentId, (isGroup1 ? String(i) : String.fromCharCode(i + 64))], ["1", "D"]));
                  var added = false;

                  var _iterator44 = _createForOfIteratorHelper(this.missingPreferences),
                      _step44;

                  try {
                    for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                      var preference = _step44.value;

                      if (this.checkArrayEquality(preference, [isGroup1 ? String(i) : String.fromCharCode(i + 64), _agentId])) {
                        added = true;
                        console.log("???");
                        console.log(this.missingPreferences.indexOf(preference));
                        this.missingPreferences.splice(this.missingPreferences.indexOf(preference), 1);
                      }
                    }
                  } catch (err) {
                    _iterator44.e(err);
                  } finally {
                    _iterator44.f();
                  }

                  if (!added) {
                    this.missingPreferences.push([_agentId, isGroup1 ? String(i) : String.fromCharCode(i + 64)]);
                  } // if (missingPreferences.includes([(isGroup1 ? String(i) : String.fromCharCode(i + 64)), agentId])) {
                  //   missingPreferences.splice(missingPreferences.indexOf([(isGroup1 ? String(i) : String.fromCharCode(i + 64)), agentId]), 1);
                  // } else {
                  //   missingPreferences.push([agentId, (isGroup1 ? String(i) : String.fromCharCode(i + 64))]);
                  // }
                  // console.log("make valid = false here!");

                }
              } // console.log("-----------");

            } // console.log(this.group1Preferences);

          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }

          this.valid = this.missingPreferences.length == 0;
          console.log(this.missingPreferences);
          console.log(this.valid);
        } // [1, 2, 3, 4]
        // [4, 3, 2, 1]
        // [1, 4], [1, 3], [1, 2], [1, 1]
        // false, false, false, true
        // FROM: https://javascript.info/task/shuffle

      }, {
        key: "shuffle",
        value: function shuffle(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t

            var _ref2 = [array[j], array[i]];
            array[i] = _ref2[0];
            array[j] = _ref2[1];
          }
        }
      }, {
        key: "checkArrayEquality",
        value: function checkArrayEquality(a, b) {
          for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return false;
            }
          }

          return true;
        }
      }]);

      return EditPreferencesDialogComponent;
    }();

    EditPreferencesDialogComponent.ɵfac = function EditPreferencesDialogComponent_Factory(t) {
      return new (t || EditPreferencesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_3__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    EditPreferencesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPreferencesDialogComponent,
      selectors: [["app-edit-preferences-dialog"]],
      hostBindings: function EditPreferencesDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function EditPreferencesDialogComponent_keydown_enter_HostBindingHandler() {
            return ctx.onEnter();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        algorithm: "algorithm"
      },
      decls: 27,
      vars: 12,
      consts: [[2, "min-width", "300px"], [1, "example-form", "pl-3"], ["class", "row justify-content-start", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], [1, "mt-2"], [1, "example-full-width", 2, "width", "100%", "height", "fit-content"], ["matInput", "", "placeholder", "1: A, B, C, D, E", "cdkTextareaAutosize", "", 2, "overflow", "hidden", 3, "ngModel", "value", "ngModelChange"], ["autosize", "cdkTextareaAutosize"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12", "text-right"], ["mat-stroked-button", "", 3, "disabled", "click"], [1, "row", "justify-content-start"], [2, "width", "200px"], ["type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "1", "max", "9", "oninput", "this.value = this.value > 0 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "formControl", "ngModelChange"], [1, "row", "justify-content-center"], [1, "mr-1", 2, "width", "200px"], ["type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "2", "max", "9", "oninput", "this.value = this.value > 1 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "formControl", "ngModelChange"], [1, "ml-1", 2, "width", "200px"], ["type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "1", "max", "10", "oninput", "this.value = this.value > 0 && this.value < 11 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "formControl", "ngModelChange"]],
      template: function EditPreferencesDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Any preferences should be in the form: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditPreferencesDialogComponent_div_11_Template, 7, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditPreferencesDialogComponent_div_12_Template, 13, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditPreferencesDialogComponent_div_13_Template, 7, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Input New Preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter your custom preferences here (separated by commas)!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPreferencesDialogComponent_Template_textarea_ngModelChange_19_listener($event) {
            return ctx.formString = $event;
          })("ngModelChange", function EditPreferencesDialogComponent_Template_textarea_ngModelChange_19_listener($event) {
            return ctx.generateMissingPreferences($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EditPreferencesDialogComponent_h2_21_Template, 2, 0, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditPreferencesDialogComponent_span_22_Template, 4, 2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPreferencesDialogComponent_Template_button_click_25_listener() {
            return ctx.generateAlgorithmPreferences();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Generate!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Click on the number below and use arrow keys to change the number of ", ctx.algorithmService.pluralMap.get(ctx.algorithmService.currentAlgorithm.orientation[0]).toLowerCase(), " and ", ctx.algorithmService.pluralMap.get(ctx.algorithmService.currentAlgorithm.orientation[1]).toLowerCase(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" <", ctx.algorithmService.currentAlgorithm.orientation[0].toLowerCase(), "/", ctx.algorithmService.currentAlgorithm.orientation[1].toLowerCase(), " number>: <preferences separated by commas> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.algorithmService.currentAlgorithm.name == "Stable Marriage Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.algorithmService.currentAlgorithm.name == "Hospitals/Residents Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.algorithmService.currentAlgorithm.name == "Stable Roommates Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.formString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.missingPreferences.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.missingPreferences);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.missingPreferences.length != 0 || ctx.numberOfGroup1Agents.errors && ctx.numberOfGroup2Agents.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_10__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL2VkaXQtcHJlZmVyZW5jZXMtZGlhbG9nL2VkaXQtcHJlZmVyZW5jZXMtZGlhbG9nL2VkaXQtcHJlZmVyZW5jZXMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPreferencesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-preferences-dialog',
          templateUrl: './edit-preferences-dialog.component.html',
          styleUrls: ['./edit-preferences-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }, {
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_3__["PlaybackService"]
        }, {
          type: _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, {
        algorithm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keydown.enter']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/mat-animated-icon/mat-animated-icon.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/algorithm-page/mat-animated-icon/mat-animated-icon.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MatAnimatedIconComponent */

  /***/
  function srcAppAlgorithmPageMatAnimatedIconMatAnimatedIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnimatedIconComponent", function () {
      return MatAnimatedIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "animate": a0
      };
    };

    var MatAnimatedIconComponent = /*#__PURE__*/function () {
      function MatAnimatedIconComponent() {
        _classCallCheck(this, MatAnimatedIconComponent);

        this.animateFromParent = false;
      }

      _createClass(MatAnimatedIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.colorStart);
          // console.log(this.colorEnd);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.animateFromParent) this.animate = !this.animate;
        }
      }]);

      return MatAnimatedIconComponent;
    }();

    MatAnimatedIconComponent.ɵfac = function MatAnimatedIconComponent_Factory(t) {
      return new (t || MatAnimatedIconComponent)();
    };

    MatAnimatedIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatAnimatedIconComponent,
      selectors: [["mat-animated-icon"]],
      inputs: {
        start: "start",
        end: "end",
        colorStart: "colorStart",
        colorEnd: "colorEnd",
        animate: "animate",
        animateFromParent: "animateFromParent"
      },
      decls: 2,
      vars: 5,
      consts: [[3, "ngClass", "color", "click"]],
      template: function MatAnimatedIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnimatedIconComponent_Template_mat_icon_click_0_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx.animate ? ctx.colorEnd : ctx.colorStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.animate));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.animate ? ctx.end : ctx.start);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: ["[_nghost-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transition: transform 0.25s;\n}\n[_nghost-%COMP%]   .material-icons.animate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2UvbWF0LWFuaW1hdGVkLWljb24vQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcYXBwXFxhbGdvcml0aG0tcGFnZVxcbWF0LWFuaW1hdGVkLWljb25cXG1hdC1hbmltYXRlZC1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9tYXQtYW5pbWF0ZWQtaWNvbi9tYXQtYW5pbWF0ZWQtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLDJCQUFBO0FDSEo7QURJSTtFQUNFLHlCQUFBO0FDRk47QURPQTtFQUNJLGVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL21hdC1hbmltYXRlZC1pY29uL21hdC1hbmltYXRlZC1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbi8vICAgQGluY2x1ZGUgbWF0LWRlc2lnbi1pY29uLW1peGluKCk7XHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cztcclxuICAgICYuYW5pbWF0ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5tYXQtaWNvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCI6aG9zdCAubWF0ZXJpYWwtaWNvbnMge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXM7XG59XG46aG9zdCAubWF0ZXJpYWwtaWNvbnMuYW5pbWF0ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbm1hdC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnimatedIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-animated-icon',
          templateUrl: './mat-animated-icon.component.html',
          styleUrls: ['./mat-animated-icon.component.scss']
        }]
      }], function () {
        return [];
      }, {
        start: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        end: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animateFromParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/playback-controls/playback-controls.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/algorithm-page/playback-controls/playback-controls.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PlaybackControlsComponent */

  /***/
  function srcAppAlgorithmPagePlaybackControlsPlaybackControlsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaybackControlsComponent", function () {
      return PlaybackControlsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../mat-animated-icon/mat-animated-icon.component */
    "./src/app/algorithm-page/mat-animated-icon/mat-animated-icon.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0(a0) {
      return {
        "disabled": a0
      };
    };

    var PlaybackControlsComponent = /*#__PURE__*/function () {
      function PlaybackControlsComponent(playback, algService) {
        _classCallCheck(this, PlaybackControlsComponent);

        this.playback = playback;
        this.algService = algService;
      }

      _createClass(PlaybackControlsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "formatLabel",
        value: function formatLabel(value) {
          // pause
          value = 3050 - value; // play? (maybe not cause so many changes to this.timeInBetween value)

          if (value >= 1000) {
            return Math.round(value / 1000) + 's';
          }

          return value;
        }
      }, {
        key: "updateSpeed",
        value: function updateSpeed(val) {
          this.playback.speed = 3050 - val;
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return PlaybackControlsComponent;
    }();

    PlaybackControlsComponent.ɵfac = function PlaybackControlsComponent_Factory(t) {
      return new (t || PlaybackControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]));
    };

    PlaybackControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaybackControlsComponent,
      selectors: [["playback-controls"]],
      inputs: {
        algorithm: "algorithm"
      },
      decls: 32,
      vars: 21,
      consts: [[1, "container-fluid", "py-3", 2, "background-color", "rgb(241, 241, 241)", "border-top", "0.6px solid rgb(124, 124, 124)"], [1, "row", 2, "height", "100%"], ["data-toggle", "popover", "data-placement", "top", "title", "Playback Controls", "data-content", "Use the controls below to interact with the algorithm! Play or step through at a pace you choose with the speed slider, or use the position slider at the bottom to drag through the algorithm!", "data-trigger", "manual", 1, "col-12", "mainContentPopover", "my-auto"], [1, "playback-block"], [1, "row", "justify-content-center"], [1, "mt-2", "mr-2", 2, "padding-top", "4px"], ["thumbLabel", "", "tickInterval", "1000", "min", "50", "max", "3000", "value", "2500", 3, "displayWith", "input"], ["timeSlider", ""], [1, "mt-2", "ml-2", 2, "padding-top", "4px"], ["id", "restartButton", "aria-hidden", "false", "aria-label", "Example home icon", 1, "playbackButton", "unselectable", "disabled", "mr-2", 2, "cursor", "pointer", 3, "ngClass", "click"], ["id", "backButton", "aria-hidden", "false", "aria-label", "Example home icon", 1, "playbackButton", "unselectable", "mr-2", 2, "cursor", "pointer", 3, "ngClass", "click"], ["id", "playButton", "start", "play_arrow", "end", "pause", "colorStart", "none", "colorEnd", "none", 1, "playbackButton", "unselectable", 3, "animate", "ngClass", "click"], ["id", "forwardButton", "aria-hidden", "false", "aria-label", "Example home icon", 1, "playbackButton", "unselectable", "ml-2", 2, "cursor", "pointer", 3, "ngClass", "click"], ["id", "endButton", "aria-hidden", "false", "aria-label", "Example home icon", 1, "playbackButton", "unselectable", "ml-2", 2, "cursor", "pointer", 3, "ngClass", "click"], ["id", "stepCounter", 1, "mt-2", "mr-3", 2, "padding-top", "4px", "width", "5px"], ["thumbLabel", "", "tickInterval", "1", "min", "0", 2, "width", "80%", "max-width", "600px", 3, "ngModel", "max", "ngModelChange", "input"], ["slider", ""]],
      template: function PlaybackControlsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Slow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-slider", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PlaybackControlsComponent_Template_mat_slider_input_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            return ctx.updateSpeed(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaybackControlsComponent_Template_mat_icon_click_15_listener() {
            return ctx.playback.restart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "skip_previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaybackControlsComponent_Template_mat_icon_click_17_listener() {
            return ctx.playback.backStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "fast_rewind");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-animated-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaybackControlsComponent_Template_mat_animated_icon_click_19_listener() {
            return ctx.playback.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaybackControlsComponent_Template_mat_icon_click_20_listener() {
            return ctx.playback.forwardStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "fast_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaybackControlsComponent_Template_mat_icon_click_22_listener() {
            return ctx.playback.goToEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "skip_next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-slider", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlaybackControlsComponent_Template_mat_slider_ngModelChange_28_listener($event) {
            return ctx.playback.stepCounter = $event;
          })("input", function PlaybackControlsComponent_Template_mat_slider_input_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.playback.onSliderChange(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.playback.stepCounter == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.playback.pause || ctx.playback.stepCounter == 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", !ctx.playback.pause)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.playback.stepCounter >= ctx.playback.numCommands));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, !ctx.playback.pause || ctx.playback.stepCounter >= ctx.playback.numCommands));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.playback.stepCounter >= ctx.playback.numCommands));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playback.stepCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.playback.numCommands);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playback.stepCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playback.numCommands);
        }
      },
      directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_6__["MatAnimatedIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: [".playbackButton[_ngcontent-%COMP%] {\n  transition: color 0.2s ease;\n}\n\n.playbackButton[_ngcontent-%COMP%]:hover {\n  color: #666666;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #8a8a8a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2UvcGxheWJhY2stY29udHJvbHMvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcYXBwXFxhbGdvcml0aG0tcGFnZVxccGxheWJhY2stY29udHJvbHNcXHBsYXliYWNrLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9wbGF5YmFjay1jb250cm9scy9wbGF5YmFjay1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3BsYXliYWNrLWNvbnRyb2xzL3BsYXliYWNrLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXliYWNrQnV0dG9uIHtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnBsYXliYWNrQnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogIzhhOGE4YTtcclxufSIsIi5wbGF5YmFja0J1dHRvbiB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLnBsYXliYWNrQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzhhOGE4YTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaybackControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'playback-controls',
          templateUrl: './playback-controls.component.html',
          styleUrls: ['./playback-controls.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }, {
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }];
      }, {
        algorithm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/services/canvas/canvas.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/algorithm-page/services/canvas/canvas.service.ts ***!
    \******************************************************************/

  /*! exports provided: CanvasService */

  /***/
  function srcAppAlgorithmPageServicesCanvasCanvasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return CanvasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");

    var CanvasService = /*#__PURE__*/function () {
      function CanvasService(algService) {
        _classCallCheck(this, CanvasService);

        this.algService = algService; // HTML drawing properties

        this.sizes = [];
        this.baseSize = undefined;
        this.font = undefined;
        this.controlChars = "{}\n\t";
        this.spaceSize = 0;
        this.tabSize = 8; // in spaceSize units

        this.tabs = function () {
          var t = [];

          for (var i = 0; i < 100; i += 8) {
            t.push(i);
          }

          ;
          return t;
        }(); // circle properties


        this.radiusOfCircles = 30;
        this.yMargin = 0.15;
        this.xMargin = 0.3; // font properties

        this.fontSize = 20;
        this.alwaysShowPreferences = false;
        this.lineSizes = new Map();
        this.firstRun = true;
      }

      _createClass(CanvasService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCommand",
        value: function setCommand(command) {
          this.currentCommand = command;
          this.redrawCanvas();
        }
      }, {
        key: "initialise",
        value: function initialise() {
          // this.lineSizes = new Map();
          this.firstRun = true;
        } // Idea:
        // Start from middle of canvas and 

      }, {
        key: "calculateEqualDistance",
        value: function calculateEqualDistance() {
          var canvas = document.getElementById("myCanvas");
          var LHSHeightOffset = 0;
          var RHSHeightOffset = 0;

          if (this.algService.numberOfGroup1Agents == 8) {
            LHSHeightOffset = 8;
            this.radiusOfCircles = 27;
          } else if (this.algService.numberOfGroup1Agents == 9) {
            LHSHeightOffset = 6;
            this.radiusOfCircles = 21;
          } else {
            LHSHeightOffset = 0;
            this.radiusOfCircles = 30;
          }

          if (this.algService.numberOfGroup2Agents == 8) {
            RHSHeightOffset = 8;
            this.radiusOfCircles = 27;
          } else if (this.algService.numberOfGroup2Agents == 9) {
            RHSHeightOffset = 6;
            this.radiusOfCircles = 21;
          } else {
            RHSHeightOffset = 0;
            this.radiusOfCircles = 30;
          }

          var effectiveHeight = canvas.height - canvas.height * this.yMargin;
          var effectiveWidth = canvas.width - canvas.width * this.xMargin;
          var spaceBetweenCircles = effectiveHeight / this.algService.numberOfGroup1Agents + LHSHeightOffset;
          var canvasMiddle = effectiveHeight / 2 + 40; // center points of the canvas for SR circles 

          var centerX = effectiveWidth / 2 + canvas.width * 0.15;
          var centerY = effectiveHeight / 2; // console.log(canvasMiddle);

          this.positions = {}; // canvas Middle 

          this.positions["middleX"] = centerX;
          this.positions["middleY"] = centerY; // LHS Positions

          if (this.algService.numberOfGroup1Agents % 2 == 1) {
            // plot middle circle
            this.positions["circle" + Math.floor(this.algService.numberOfGroup1Agents / 2 + 1)] = {
              positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
              positionY: canvasMiddle
            }; // plot circles above middle
            // console.log("above middle");

            for (var i = Math.floor(this.algService.numberOfGroup1Agents / 2); i > 0; i--) {
              // console.log(i);
              this.positions["circle" + i] = {
                positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
                positionY: canvasMiddle - (Math.ceil(this.algService.numberOfGroup1Agents / 2) - i) * spaceBetweenCircles
              };
            } // plot circles below middle
            // console.log("below middle");


            for (var _i18 = Math.ceil(this.algService.numberOfGroup1Agents / 2) + 1; _i18 < this.algService.numberOfGroup1Agents + 1; _i18++) {
              // console.log(i);
              this.positions["circle" + _i18] = {
                positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
                positionY: canvasMiddle + (_i18 - Math.ceil(this.algService.numberOfGroup1Agents / 2)) * spaceBetweenCircles
              };
            } // console.log(this.positions);

          } else {
            // plot middle circle
            // console.log(Math.floor(this.algService.numberOfGroup1Agents / 2));
            // console.log((Math.ceil(this.algService.numberOfGroup1Agents / 2)) + 1);
            this.positions["circle" + Math.floor(this.algService.numberOfGroup1Agents / 2)] = {
              positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
              positionY: canvasMiddle - spaceBetweenCircles / 2
            }; // plot middle circle

            this.positions["circle" + (Math.ceil(this.algService.numberOfGroup1Agents / 2) + 1)] = {
              positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
              positionY: canvasMiddle + spaceBetweenCircles / 2
            }; // plot circles above middle
            // console.log("above middle");

            for (var _i19 = Math.floor(this.algService.numberOfGroup1Agents / 2) - 1; _i19 > 0; _i19--) {
              // console.log(i);
              this.positions["circle" + _i19] = {
                positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
                positionY: canvasMiddle - spaceBetweenCircles / 2 - (Math.ceil(this.algService.numberOfGroup1Agents / 2) - _i19) * spaceBetweenCircles
              };
            } // // plot circles below middle
            // console.log("below middle");


            for (var _i20 = Math.ceil(this.algService.numberOfGroup1Agents / 2) + 2; _i20 < this.algService.numberOfGroup1Agents + 1; _i20++) {
              // console.log(i);
              this.positions["circle" + _i20] = {
                positionX: this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? canvas.width * this.xMargin - 35 : canvas.width * this.xMargin,
                positionY: canvasMiddle + spaceBetweenCircles / 2 + (_i20 - Math.ceil(this.algService.numberOfGroup1Agents / 2 + 1)) * spaceBetweenCircles
              };
            } // console.log(this.positions);

          }

          spaceBetweenCircles = effectiveHeight / this.algService.numberOfGroup2Agents + RHSHeightOffset; // console.log(this.algService.numberOfGroup2Agents);
          // RHS Circles 

          if (this.algService.numberOfGroup2Agents % 2 == 1) {
            // plot middle circle
            this.positions["circle" + String.fromCharCode(Math.floor(this.algService.numberOfGroup2Agents / 2 + 1 + 64))] = {
              positionX: canvas.width - canvas.width * this.xMargin,
              positionY: canvasMiddle
            }; // plot circles above middle
            // console.log("above middle");

            for (var _i21 = Math.floor(this.algService.numberOfGroup2Agents / 2); _i21 > 0; _i21--) {
              // console.log(i);
              this.positions["circle" + String.fromCharCode(_i21 + 64)] = {
                positionX: canvas.width - canvas.width * this.xMargin,
                positionY: canvasMiddle - (Math.ceil(this.algService.numberOfGroup2Agents / 2) - _i21) * spaceBetweenCircles
              };
            } // plot circles below middle
            // console.log("below middle");


            for (var _i22 = Math.ceil(this.algService.numberOfGroup2Agents / 2) + 1; _i22 < this.algService.numberOfGroup2Agents + 1; _i22++) {
              // console.log(i);
              this.positions["circle" + String.fromCharCode(_i22 + 64)] = {
                positionX: canvas.width - canvas.width * this.xMargin,
                positionY: canvasMiddle + (_i22 - Math.ceil(this.algService.numberOfGroup2Agents / 2)) * spaceBetweenCircles
              };
            } // console.log(this.positions);

          } else {
            // plot middle circle
            // console.log(Math.floor(this.algService.numberOfGroup1Agents / 2));
            // console.log((Math.ceil(this.algService.numberOfGroup1Agents / 2)) + 1);
            // console.log(String.fromCharCode(Math.floor(this.algService.numberOfGroup2Agents / 2) + 64));
            this.positions["circle" + String.fromCharCode(Math.floor(this.algService.numberOfGroup2Agents / 2) + 64)] = {
              positionX: canvas.width - canvas.width * this.xMargin,
              positionY: canvasMiddle - spaceBetweenCircles / 2
            }; // plot middle circle

            this.positions["circle" + String.fromCharCode(Math.ceil(this.algService.numberOfGroup2Agents / 2) + 1 + 64)] = {
              positionX: canvas.width - canvas.width * this.xMargin,
              positionY: canvasMiddle + spaceBetweenCircles / 2
            }; // plot circles above middle
            // console.log("above middle");

            for (var _i23 = Math.floor(this.algService.numberOfGroup2Agents / 2) - 1; _i23 > 0; _i23--) {
              // console.log(i);
              this.positions["circle" + String.fromCharCode(_i23 + 64)] = {
                positionX: canvas.width - canvas.width * this.xMargin,
                positionY: canvasMiddle - spaceBetweenCircles / 2 - (Math.ceil(this.algService.numberOfGroup2Agents / 2) - _i23) * spaceBetweenCircles
              };
            } // // plot circles below middle
            // console.log("below middle");


            for (var _i24 = Math.ceil(this.algService.numberOfGroup2Agents / 2) + 2; _i24 < this.algService.numberOfGroup2Agents + 1; _i24++) {
              // console.log(i);
              this.positions["circle" + String.fromCharCode(_i24 + 64)] = {
                positionX: canvas.width - canvas.width * this.xMargin,
                positionY: canvasMiddle + spaceBetweenCircles / 2 + (_i24 - Math.ceil(this.algService.numberOfGroup2Agents / 2 + 1)) * spaceBetweenCircles
              };
            }
          }
        }
      }, {
        key: "calculateEqualDistance1Group",
        value: function calculateEqualDistance1Group() {
          var canvas = document.getElementById("myCanvas");
          var LHSHeightOffset = 0;
          var RHSHeightOffset = 0;

          if (this.algService.numberOfGroup1Agents == 8) {
            LHSHeightOffset = 8;
            this.radiusOfCircles = 27;
          } else if (this.algService.numberOfGroup1Agents == 9) {
            LHSHeightOffset = 6;
            this.radiusOfCircles = 21;
          } else {
            LHSHeightOffset = 0;
            this.radiusOfCircles = 30;
          }

          if (this.algService.numberOfGroup2Agents == 8) {
            RHSHeightOffset = 8;
            this.radiusOfCircles = 27;
          } else if (this.algService.numberOfGroup2Agents == 9) {
            RHSHeightOffset = 6;
            this.radiusOfCircles = 21;
          } else {
            RHSHeightOffset = 0;
            this.radiusOfCircles = 30;
          }

          var effectiveHeight = canvas.height - canvas.height * this.yMargin;
          var effectiveWidth = canvas.width - canvas.width * this.xMargin;
          var spaceBetweenCircles = effectiveHeight / this.algService.numberOfGroup1Agents + LHSHeightOffset; // center points of the canvas for SR circles 

          var centerX = effectiveWidth / 2 + canvas.width * 0.15;
          var centerY = effectiveHeight / 2; // console.log(canvasMiddle);

          this.positions = {}; // canvas Middle 

          this.positions["middleX"] = centerX;
          this.positions["middleY"] = centerY; // positions 

          var number = this.algService.numberOfGroup1Agents;
          var angle = Math.PI * 2 / number;
          var r = 200; // number to rotated the circle, so that numbering looks more natural 

          var offset = 3; // Draw LHS circles in orange

          for (var i = 2; i < this.algService.numberOfGroup1Agents + 2; i++) {
            this.positions["circle" + (i - 1)] = {
              positionX: r * Math.cos(angle * i) + centerX,
              positionY: r * Math.sin(angle * i) + centerY
            };
          }
        }
      }, {
        key: "drawLHSCircles",
        value: function drawLHSCircles() {
          console.log("LHS draw positions", this.positions);
          this.ctx.beginPath();
          this.ctx.fillStyle = "#FF6332"; // Draw LHS circles in orange

          for (var i = 1; i < this.algService.numberOfGroup1Agents + 1; i++) {
            var posX = this.positions["circle" + i].positionX;
            var posY = this.positions["circle" + i].positionY;
            this.ctx.moveTo(posX + this.radiusOfCircles, posY);
            this.ctx.arc(posX, posY, this.radiusOfCircles, 0, Math.PI * 2, true);
          }

          this.ctx.fill();
          this.ctx.stroke(); // Draw text (numbers)

          for (var _i25 = 1; _i25 < this.algService.numberOfGroup1Agents + 1; _i25++) {
            var _posX = this.positions["circle" + _i25].positionX;
            var _posY = this.positions["circle" + _i25].positionY;
            this.ctx.fillStyle = "black";
            this.ctx.font = this.radiusOfCircles + 'px Arial';
            this.ctx.fillText(String(_i25), _posX - 8, _posY + 10, 20);
          }
        }
      }, {
        key: "drawRHSCircles",
        value: function drawRHSCircles() {
          this.ctx.beginPath();
          this.ctx.fillStyle = "#CA32FF";
          var currentLetter = 'A'; // Draw RHS circles in orange

          for (var i = 0; i < this.algService.numberOfGroup2Agents; i++) {
            var posX = this.positions["circle" + currentLetter].positionX;
            var posY = this.positions["circle" + currentLetter].positionY;
            this.ctx.moveTo(posX + this.radiusOfCircles, posY);
            this.ctx.arc(posX, posY, this.radiusOfCircles, 0, Math.PI * 2, true);
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }

          this.ctx.fill();
          this.ctx.stroke();
          currentLetter = 'A'; // Draw text (numbers)

          for (var _i26 = 1; _i26 < this.algService.numberOfGroup2Agents + 1; _i26++) {
            var _posX2 = this.positions["circle" + currentLetter].positionX;
            var _posY2 = this.positions["circle" + currentLetter].positionY;
            this.ctx.fillStyle = "black";
            this.ctx.font = this.radiusOfCircles + 'px Arial';
            this.ctx.fillText(currentLetter, _posX2 - 9, _posY2 + 11, 20);
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }
        }
      }, {
        key: "drawCircles1Group",
        value: function drawCircles1Group() {
          this.ctx.beginPath();
          this.ctx.fillStyle = "#FF6332"; // number to rotated the circle, so that numbering looks more natural 

          var offset = 1; // Draw LHS circles in orange

          for (var i = 1; i < this.algService.numberOfGroup1Agents + 1; i++) {
            var posX = this.positions["circle" + i].positionX;
            var posY = this.positions["circle" + i].positionY;
            this.ctx.moveTo(posX + this.radiusOfCircles, posY);
            this.ctx.arc(posX, posY, this.radiusOfCircles, 0, Math.PI * 2, true);
          } // colours circles 


          this.ctx.fill();
          this.ctx.stroke();

          for (var _i27 = offset; _i27 < this.algService.numberOfGroup1Agents + offset; _i27++) {
            var _posX3 = this.positions["circle" + _i27].positionX;
            var _posY3 = this.positions["circle" + _i27].positionY;
            this.ctx.fillStyle = "black";
            this.ctx.font = this.radiusOfCircles + 'px Arial';
            this.ctx.fillText(String(_i27 - offset + 1), _posX3 - 8, _posY3 + 10, 20);
          }
        }
      }, {
        key: "drawLine1Group",
        value: function drawLine1Group(line) {
          var color = line[2];

          if (color == "red") {
            this.ctx.strokeStyle = "#EB2A2A";
          } else if (color == "green") {
            this.ctx.strokeStyle = "#53D26F";
          }

          this.ctx.lineWidth = 3;
          var xLen = this.positions["circle" + line[1]].positionX - this.positions["circle" + line[0]].positionX;
          var yLen = this.positions["circle" + line[1]].positionY - this.positions["circle" + line[0]].positionY; // halfX = this.positions["circle" + line[0]].positionX + (xLen * (1 - Math.abs(this.radiusOfCircles / yLen)))
          // halfY = this.positions["circle" + line[0]].positionY + (yLen * (1 - Math.abs(this.radiusOfCircles / yLen))) 

          var halfX = this.positions["circle" + line[0]].positionX + xLen * 0.8;
          var halfY = this.positions["circle" + line[0]].positionY + yLen * 0.8;
          var angle = Math.atan(yLen / xLen);
          var newX = 0;
          var newY = 0;
          var right = false; // if starting < ending - pointing right- canvas in bottum right quadrent

          if (this.positions["circle" + line[0]].positionX < this.positions["circle" + line[1]].positionX) {
            right = true;
          } else {
            right = false;
          } // draw arrow 


          this.ctx.beginPath();
          this.ctx.moveTo(this.positions["circle" + line[0]].positionX, this.positions["circle" + line[0]].positionY);

          if (color != "green") {
            this.ctx.lineTo(halfX, halfY);

            if (right) {
              newX = halfX + 20 * Math.cos(angle + 3 * Math.PI / 4);
              newY = halfY + 20 * Math.sin(angle + 3 * Math.PI / 4);
            } else {
              newX = halfX + 20 * Math.cos(angle + Math.PI / 4);
              newY = halfY + 20 * Math.sin(angle + Math.PI / 4);
            }

            this.ctx.lineTo(newX, newY);
            this.ctx.lineTo(halfX, halfY);

            if (right) {
              newX = halfX + 20 * Math.cos(angle - 3 * Math.PI / 4);
              newY = halfY + 20 * Math.sin(angle - 3 * Math.PI / 4);
            } else {
              newX = halfX + 20 * Math.cos(angle - Math.PI / 4);
              newY = halfY + 20 * Math.sin(angle - Math.PI / 4);
            }

            this.ctx.lineTo(newX, newY);
          } else {
            this.ctx.lineTo(this.positions["circle" + line[1]].positionX, this.positions["circle" + line[1]].positionY);
          }

          this.ctx.stroke();
          this.ctx.strokeStyle = "#000000";
          this.ctx.lineWidth = 1;
        }
      }, {
        key: "drawLine",
        value: function drawLine(line) {
          var color = line[2];

          if (color == "red") {
            this.ctx.strokeStyle = "#EB2A2A";
          } else if (color == "green") {
            this.ctx.strokeStyle = "#53D26F";
          }

          this.ctx.lineWidth = 3;
          this.ctx.beginPath();
          this.ctx.moveTo(this.positions["circle" + line[0]].positionX, this.positions["circle" + line[0]].positionY);
          this.ctx.lineTo(this.positions["circle" + line[1]].positionX, this.positions["circle" + line[1]].positionY);
          this.ctx.stroke();
          this.ctx.strokeStyle = "#000000";
          this.ctx.lineWidth = 1;
        }
      }, {
        key: "drawAllPreferences",
        value: function drawAllPreferences() {
          this.ctx.font = this.fontSize + 'px Arial';
          var group1PreferenceList = Object.values(this.currentCommand["group1CurrentPreferences"]);

          if (group1PreferenceList.length <= 0) {
            group1PreferenceList = Array.from(this.currentCommand["group1CurrentPreferences"].values());
          }

          for (var i = 1; i < this.algService.numberOfGroup1Agents + 1; i++) {
            this.drawText(this.ctx, group1PreferenceList[i - 1].join(", "), this.positions["circle" + i].positionX - this.lineSizes.get(String(i)) * 2 - 65, this.positions["circle" + i].positionY + 7, this.fontSize);
          } // only draw group2 if it is not SR


          var group2PreferenceList = Object.values(this.currentCommand["group2CurrentPreferences"]);
          var currentLetter = 'A';

          if (group2PreferenceList.length <= 0) {
            group2PreferenceList = Array.from(this.currentCommand["group2CurrentPreferences"].values());
          }

          for (var _i28 = 1; _i28 < this.algService.numberOfGroup2Agents + 1; _i28++) {
            this.drawText(this.ctx, group2PreferenceList[_i28 - 1].join(", "), this.positions["circle" + currentLetter].positionX + (this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? 115 : 65), this.positions["circle" + currentLetter].positionY + 7, this.fontSize);
            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }
        }
      }, {
        key: "drawAllPreferences1Group",
        value: function drawAllPreferences1Group() {
          this.ctx.font = this.fontSize + 'px Arial';
          var group1PreferenceList = Object.values(this.currentCommand["group1CurrentPreferences"]);

          if (group1PreferenceList.length <= 0) {
            group1PreferenceList = Array.from(this.currentCommand["group1CurrentPreferences"].values());
          }

          var num = this.algService.numberOfGroup1Agents;

          for (var i = 1; i < num / 2 + 1; i++) {
            this.drawText(this.ctx, group1PreferenceList[i - 1].join(", "), this.positions["circle" + i].positionX - this.lineSizes.get(String(i)) * 2 - 65, this.positions["circle" + i].positionY + 7, this.fontSize);
          }

          for (var _i29 = num / 2 + 1; _i29 < num + 1; _i29++) {
            this.drawText(this.ctx, group1PreferenceList[_i29 - 1].join(", "), this.positions["circle" + _i29].positionX + 65, this.positions["circle" + _i29].positionY + 7, this.fontSize);
          }
        }
      }, {
        key: "drawRelevantPreferences",
        value: function drawRelevantPreferences() {
          var group1PreferenceList = Object.values(this.currentCommand["group1CurrentPreferences"]);

          if (group1PreferenceList.length <= 0) {
            group1PreferenceList = Array.from(this.currentCommand["group1CurrentPreferences"].values());
          }

          var group2PreferenceList = Object.values(this.currentCommand["group2CurrentPreferences"]);

          if (group2PreferenceList.length <= 0) {
            group2PreferenceList = Array.from(this.currentCommand["group2CurrentPreferences"].values());
          }

          var _iterator45 = _createForOfIteratorHelper(this.currentCommand["relevantPreferences"]),
              _step45;

          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var agent = _step45.value;

              if (agent.match(/[A-Z]/i)) {
                this.drawText(this.ctx, group2PreferenceList[agent.charCodeAt(0) - 65].join(", "), this.positions["circle" + agent].positionX + (this.currentCommand["algorithmSpecificData"]["hospitalCapacity"] ? 115 : 65), this.positions["circle" + agent].positionY + 7, this.fontSize);
              } else {
                this.drawText(this.ctx, group1PreferenceList[agent - 1].join(", "), this.positions["circle" + agent].positionX - this.lineSizes.get(agent) * 2 - 65, this.positions["circle" + agent].positionY + 7, this.fontSize);
              }
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
        }
      }, {
        key: "drawHospitalCapacity",
        value: function drawHospitalCapacity() {
          var hospitalCapacityMap = this.currentCommand["algorithmSpecificData"]["hospitalCapacity"];
          this.ctx.font = this.fontSize + 'px Arial';
          var currentLetter = 'A';

          for (var i = 1; i < this.algService.numberOfGroup2Agents + 1; i++) {
            var currentCapacity = hospitalCapacityMap[currentLetter];
            this.drawText(this.ctx, "(" + String(currentCapacity) + ")", this.positions["circle" + currentLetter].positionX + 60, this.positions["circle" + currentLetter].positionY + 7, this.fontSize); // this.ctx.fillText(group2PreferenceList[i-1].join(", "), this.positions["circle" + currentLetter].positionX + 65, this.positions["circle" + currentLetter].positionY + 7);

            currentLetter = String.fromCharCode((currentLetter.charCodeAt(0) + 1 - 65) % 26 + 65);
          }
        }
      }, {
        key: "selectCircles",
        value: function selectCircles(circles) {
          var originalLineWidth = this.ctx.lineWidth;
          var originalStrokeStyle = this.ctx.strokeStyle;
          this.ctx.lineWidth = 4;
          this.ctx.strokeStyle = "#53D26F";

          var _iterator46 = _createForOfIteratorHelper(circles),
              _step46;

          try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
              var agent = _step46.value;
              this.ctx.beginPath();
              var posX = this.positions["circle" + agent].positionX;
              var posY = this.positions["circle" + agent].positionY;
              this.ctx.moveTo(posX + this.radiusOfCircles, posY);
              this.ctx.arc(posX, posY, this.radiusOfCircles, 0, Math.PI * 2, true);
              this.ctx.stroke();
            }
          } catch (err) {
            _iterator46.e(err);
          } finally {
            _iterator46.f();
          }

          this.ctx.lineWidth = originalLineWidth;
          this.ctx.strokeStyle = originalStrokeStyle;
        }
      }, {
        key: "getNextTab",
        value: function getNextTab(x) {
          var i = 0;

          while (i < this.tabs.length) {
            if (x < this.tabs[i] * this.tabSize * this.spaceSize) {
              return this.tabs[i] * this.tabSize * this.spaceSize;
            }

            i++;
          }

          return this.tabs[i - 1] * this.tabSize * this.spaceSize;
        }
      }, {
        key: "getFontSize",
        value: function getFontSize(font) {
          var numFind = /[0-9]+/;
          var number = Number(numFind.exec(font)[0]);

          if (isNaN(number)) {
            throw Error("SimpleTextStyler Cant find font size");
          }

          return Number(number);
        }
      }, {
        key: "setFont",
        value: function setFont() {
          var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.ctx.font;
          this.font = this.ctx.font = font;
          this.baseSize = this.getFontSize(font);

          for (var i = 32; i < 256; i++) {
            this.sizes[i - 32] = this.ctx.measureText(String.fromCharCode(i)).width / this.baseSize;
          }

          this.spaceSize = this.sizes[0];
        } // FROM: https://stackoverflow.com/questions/43904201/how-can-i-colour-different-words-in-the-same-line-with-html5-canvas
        // adapted for use in this project

      }, {
        key: "drawText",
        value: function drawText(context, text, x, y, size) {
          var i, len, subText;
          var w, scale;
          var xx, yy, ctx;
          var state = [];

          if (text === undefined) {
            return;
          }

          xx = x;
          yy = y;

          if (!context.setTransform) {
            // simple test if this is a 2D context
            if (context.ctx) {
              ctx = context.ctx;
            } // may be a image with attached ctx?
            else {
                return;
              }
          } else {
            ctx = context;
          }

          function renderText(text) {
            ctx.save();
            ctx.fillStyle = colour;
            ctx.translate(x, y);
            ctx.scale(scale, scale);
            ctx.fillText(text, 0, 0);
            ctx.restore();
          }

          var colour = ctx.fillStyle;
          ctx.font = this.font;
          len = text.length;
          subText = "";
          w = 0;
          i = 0;
          scale = size / this.baseSize;

          while (i < len) {
            var c = text[i];
            var cc = text.charCodeAt(i);

            if (cc < 256) {
              // only ascii
              if (this.controlChars.indexOf(c) > -1) {
                if (subText !== "") {
                  scale = size / this.baseSize;
                  renderText(subText);
                  x += w;
                  w = 0;
                  subText = "";
                }

                if (c === "\n") {
                  // return move to new line
                  x = xx;
                  y += size;
                } else if (c === "\t") {
                  // tab move to next tab
                  x = this.getNextTab(x - xx) + xx;
                } else if (c === "{") {
                  // Text format delimiter                       
                  state.push({
                    size: size,
                    colour: colour,
                    x: x,
                    y: y
                  });
                  i += 1;
                  var t = text[i];

                  if (t === "#") {
                    colour = text.substr(i, 7);
                    i += 6;
                  }
                } else if (c === "}") {
                  var s = state.pop();
                  y = s.y;
                  size = s.size;
                  colour = s.colour;
                  scale = size / this.baseSize;
                }
              } else {
                subText += c;
                w += this.sizes[cc - 32] * size;
              }
            }

            i += 1;
          }

          if (subText !== "") {
            renderText(subText);
          }
        }
      }, {
        key: "redrawCanvas",
        value: function redrawCanvas(command) {
          if (command) {
            this.currentCommand = command;
          }

          var canvas = document.getElementById("myCanvas");
          var parent = document.getElementById("parent");
          canvas.width = parent.offsetWidth - 20;
          canvas.height = parent.offsetHeight - 20;

          if (this.firstRun) {
            this.originalGroup1Preferences = Array.from(this.currentCommand["group1CurrentPreferences"].values());
            this.originalGroup2Preferences = Array.from(this.currentCommand["group2CurrentPreferences"].values());
            this.firstRun = false;
          }

          this.lineSizes = new Map();

          for (var i = 1; i < this.algService.numberOfGroup1Agents + 1; i++) {
            var lineSize = this.ctx.measureText(this.originalGroup1Preferences[i - 1].join(", ")).width;
            this.lineSizes.set(String(i), lineSize);
          }

          this.setFont(); // this.drawLineBetween("circle1", "circleE", "red")
          // this.drawLineBetween("circle1", "circleB");
          // draw circles
          // if SR Algorithm

          if (this.currentCommand["algorithmSpecificData"]["SR"]) {
            // draw lines between circles (matches and relations)
            var _iterator47 = _createForOfIteratorHelper(this.currentCommand["currentLines"]),
                _step47;

            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var line = _step47.value;
                this.drawLine1Group(line);
              } // update positions of all canvas elements

            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }

            this.calculateEqualDistance1Group();
            this.drawCircles1Group();
          } else {
            // draw lines between circles (matches and relations)
            var _iterator48 = _createForOfIteratorHelper(this.currentCommand["currentLines"]),
                _step48;

            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var _line3 = _step48.value;
                this.drawLine(_line3);
              } // update positions of all canvas elements

            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }

            this.calculateEqualDistance();
            this.drawLHSCircles();
            this.drawRHSCircles();
          }

          if (this.currentCommand) {
            if (this.currentCommand["algorithmSpecificData"]["hospitalCapacity"]) {
              this.drawHospitalCapacity();
            }

            if (this.currentCommand["relevantPreferences"].length >= 1 && this.alwaysShowPreferences) {
              this.drawRelevantPreferences();
            } else {
              // preferances drawn differently for SR
              if (this.currentCommand["algorithmSpecificData"]["SR"]) {
                this.drawAllPreferences1Group();
              } else {
                this.drawAllPreferences();
              }
            }
          }

          this.selectCircles(this.currentCommand["currentlySelectedAgents"]);
        }
      }]);

      return CanvasService;
    }();

    CanvasService.ɵfac = function CanvasService_Factory(t) {
      return new (t || CanvasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]));
    };

    CanvasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanvasService,
      factory: CanvasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/services/execution/execution.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/algorithm-page/services/execution/execution.service.ts ***!
    \************************************************************************/

  /*! exports provided: ExecutionService */

  /***/
  function srcAppAlgorithmPageServicesExecutionExecutionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecutionService", function () {
      return ExecutionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");

    var ExecutionService = /*#__PURE__*/function () {
      // add the services for any new algorithms here
      function ExecutionService(algorithmRetrieval) {
        _classCallCheck(this, ExecutionService);

        this.algorithmRetrieval = algorithmRetrieval;
        this.commandMap = {};
        this.commandList = {};
      }

      _createClass(ExecutionService, [{
        key: "initialise",
        value: function initialise() {
          this.commandMap = {};
          this.commandList = {};
        }
      }, {
        key: "getExecutionFlow",
        value: function getExecutionFlow(algorithm, numberOfAgents) {
          var numberOfGroup2Agents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : numberOfAgents;
          var preferences = arguments.length > 3 ? arguments[3] : undefined;
          var SRstable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          this.initialise();
          var algorithmService = this.algorithmRetrieval.mapOfAvailableAlgorithms.get(algorithm).service;
          this.commandMap = this.algorithmRetrieval.mapOfAvailableAlgorithms.get(algorithm).helpTextMap; // console.log(this.commandMap);

          console.log("get execution flow", SRstable);
          var commandList = algorithmService.run(numberOfAgents, numberOfGroup2Agents, preferences, SRstable);
          commandList.descriptions = this.generateDescriptions(commandList);
          console.log(commandList); // this.drawService.redrawCanvas(commandList["commands"][0]);

          return commandList;
        } // --------------------------------------------------------- FUNCTIONS TO GENERATE LINE DESCRIPTIONS

      }, {
        key: "generateDescriptions",
        value: function generateDescriptions(commandList) {
          var descriptions = [];

          var _iterator49 = _createForOfIteratorHelper(commandList["commands"]),
              _step49;

          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var step = _step49.value;
              var lineNumber = step["lineNumber"];
              var stepVariables = step["stepVariables"];

              if (stepVariables) {
                descriptions.push(this.generateMessage(lineNumber, stepVariables));
              } else {
                descriptions.push(this.commandMap[lineNumber]);
              }
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }

          return descriptions;
        }
      }, {
        key: "generateMessage",
        value: function generateMessage(commandNum, replacements) {
          var str = this.commandMap[commandNum]; // FROM: https://stackoverflow.com/questions/7975005/format-a-javascript-string-using-placeholders-and-an-object-of-substitutions

          str = str.replace(/%\w+%/g, function (all) {
            return replacements[all] || all;
          });
          return str;
        }
      }]);

      return ExecutionService;
    }();

    ExecutionService.ɵfac = function ExecutionService_Factory(t) {
      return new (t || ExecutionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]));
    };

    ExecutionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExecutionService,
      factory: ExecutionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecutionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/services/playback/playback.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/algorithm-page/services/playback/playback.service.ts ***!
    \**********************************************************************/

  /*! exports provided: PlaybackService */

  /***/
  function srcAppAlgorithmPageServicesPlaybackPlaybackServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaybackService", function () {
      return PlaybackService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _execution_execution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../execution/execution.service */
    "./src/app/algorithm-page/services/execution/execution.service.ts");
    /* harmony import */


    var _canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../canvas/canvas.service */
    "./src/app/algorithm-page/services/canvas/canvas.service.ts");

    var PlaybackService = /*#__PURE__*/function () {
      function PlaybackService(exeService, drawService) {
        _classCallCheck(this, PlaybackService);

        this.exeService = exeService;
        this.drawService = drawService; // playback variables

        this.firstRun = true;
        this.pause = true;
        this.speed = 500;
        this.description = "Click play to run the program below!";
      }

      _createClass(PlaybackService, [{
        key: "initialise",
        value: function initialise() {
          this.algorithmData = {};
          this.commandList = [];
          this.currentCommand = {};
        }
      }, {
        key: "resetPlaybackData",
        value: function resetPlaybackData() {
          this.firstRun = true;
          this.stepCounter = 0;
          this.previousStepCounter = 0;
          this.currentLine = 0;
          this.pause = true;
          this.description = "Click play to run the program below!";
        }
      }, {
        key: "setAlgorithm",
        value: function setAlgorithm(algorithm, numberOfAgents) {
          var numberOfGroup2Agents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : numberOfAgents;
          var preferences = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var SRstable = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          this.initialise();
          console.log("Set algorithm", SRstable);
          this.algorithmData = this.exeService.getExecutionFlow(algorithm, numberOfAgents, numberOfGroup2Agents, preferences, SRstable);
          this.commandList = this.algorithmData["commands"];
          this.resetPlaybackData();
          this.numCommands = this.commandList.length - 1; // console.log(this.algorithmData);

          this.updateCurrentCommand();
        }
      }, {
        key: "setSpeed",
        value: function setSpeed(milliseconds) {
          this.speed = milliseconds;
        }
      }, {
        key: "updateCurrentCommand",
        value: function updateCurrentCommand() {
          if (this.previousStepCounter != this.stepCounter) {
            this.previousStepCounter = this.stepCounter;
          }

          this.currentCommand = this.algorithmData["commands"][this.stepCounter];
          this.description = this.algorithmData["descriptions"][this.stepCounter];
          this.currentLine = this.currentCommand["lineNumber"];
          this.drawService.redrawCanvas(this.currentCommand);
        }
      }, {
        key: "restart",
        value: function restart() {
          this.pause = true;
          this.uncolourCurrentLine();
          this.stepCounter = 0;
          this.updateCurrentCommand();
          this.colourCurrentLine();
        }
      }, {
        key: "goToEnd",
        value: function goToEnd() {
          this.pause = true;
          this.uncolourCurrentLine();
          this.stepCounter = this.numCommands;
          this.updateCurrentCommand();
          this.colourCurrentLine();
        }
      }, {
        key: "backStep",
        value: function backStep() {
          this.uncolourCurrentLine();

          if (this.stepCounter > 0) {
            this.stepCounter--;
          }

          this.updateCurrentCommand();
          this.colourCurrentLine();
        }
      }, {
        key: "forwardStep",
        value: function forwardStep() {
          this.uncolourCurrentLine();

          if (this.stepCounter < this.numCommands) {
            this.stepCounter++;
          }

          this.updateCurrentCommand();
          this.colourCurrentLine();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (this.firstRun) {
                      this.firstRun = false;
                      this.pause = false;
                      this.play();
                    } else {
                      if (this.pause) {
                        this.pause = false;
                        this.play();
                      } else {
                        this.pause = true;
                      }
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "play",
        value: function play() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.stepCounter < this.numCommands)) {
                      _context5.next = 11;
                      break;
                    }

                    if (!this.pause) {
                      _context5.next = 5;
                      break;
                    }

                    console.log("Paused at step " + this.stepCounter + "!");
                    console.log("Current Line: " + this.currentLine);
                    return _context5.abrupt("break", 11);

                  case 5:
                    this.colourCurrentLine();
                    _context5.next = 8;
                    return this.sleep(this.speed);

                  case 8:
                    if (!this.pause) {
                      // console.log(this.stepCounter + " | " + this.numCommands);
                      this.uncolourCurrentLine();
                      this.stepCounter++;
                      this.updateCurrentCommand();

                      if (this.stepCounter >= this.numCommands) {
                        this.pause = true;
                      }
                    }

                    _context5.next = 0;
                    break;

                  case 11:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "sleep",
        value: function sleep(msec) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", new Promise(function (resolve) {
                      return setTimeout(resolve, msec);
                    }));

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        }
      }, {
        key: "uncolourCurrentLine",
        value: function uncolourCurrentLine() {
          var codeLineHTML = document.getElementById("line" + this.currentLine);
          codeLineHTML.style.backgroundColor = "";
          codeLineHTML.style.color = "";
        }
      }, {
        key: "colourCurrentLine",
        value: function colourCurrentLine() {
          var codeLineHTML = document.getElementById("line" + this.currentLine);
          codeLineHTML.style.backgroundColor = "black";
          codeLineHTML.style.color = "#37FF00";
        }
      }, {
        key: "onSliderChange",
        value: function onSliderChange(val) {
          if (this.firstRun) {
            this.firstRun = false;
          }

          if (this.previousStepCounter != this.stepCounter) {
            this.previousStepCounter = this.stepCounter;
          }

          this.pause = true;
          this.stepCounter = val;
          var command = this.commandList[this.previousStepCounter];
          var a = document.getElementById("line" + command["lineNumber"]);
          a.style.backgroundColor = "";
          a.style.color = "";
          this.updateCurrentCommand();
          this.colourCurrentLine();
        }
      }]);

      return PlaybackService;
    }();

    PlaybackService.ɵfac = function PlaybackService_Factory(t) {
      return new (t || PlaybackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_execution_execution_service__WEBPACK_IMPORTED_MODULE_2__["ExecutionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]));
    };

    PlaybackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PlaybackService,
      factory: PlaybackService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaybackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _execution_execution_service__WEBPACK_IMPORTED_MODULE_2__["ExecutionService"]
        }, {
          type: _canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/sidebar/alg-description/alg-description.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/algorithm-page/sidebar/alg-description/alg-description.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AlgDescriptionComponent */

  /***/
  function srcAppAlgorithmPageSidebarAlgDescriptionAlgDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgDescriptionComponent", function () {
      return AlgDescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");

    var AlgDescriptionComponent = /*#__PURE__*/function () {
      function AlgDescriptionComponent(playback) {
        _classCallCheck(this, AlgDescriptionComponent);

        this.playback = playback;
      }

      _createClass(AlgDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlgDescriptionComponent;
    }();

    AlgDescriptionComponent.ɵfac = function AlgDescriptionComponent_Factory(t) {
      return new (t || AlgDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]));
    };

    AlgDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlgDescriptionComponent,
      selectors: [["alg-description"]],
      decls: 3,
      vars: 1,
      consts: [["id", "descriptionDiv", 1, "row", "text-center", "border-bottom", "px-5"], ["id", "algorithmDescription", "data-toggle", "popover", "data-placement", "left", "title", "Current Line Description", "data-content", "This gives you a description of what's happening in the algorithm at this step with reference to the variables involved.", "data-trigger", "manual", "data-template", "<div class=\"popover fade show bs-popover-right popoverPositioning blackText\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>", 1, "col-12", "h2", "sidebarPopover", "my-auto", "text-center", "pr-4"]],
      template: function AlgDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.playback.description, " ");
        }
      },
      styles: ["#descriptionDiv[_ngcontent-%COMP%] {\n  height: 114px;\n}\n\n#algorithmDescription[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1vw;\n  line-height: 1.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9hbGctZGVzY3JpcHRpb24vQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcYXBwXFxhbGdvcml0aG0tcGFnZVxcc2lkZWJhclxcYWxnLWRlc2NyaXB0aW9uXFxhbGctZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvYWxnLWRlc2NyaXB0aW9uL2FsZy1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL2FsZy1kZXNjcmlwdGlvbi9hbGctZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiX2NvbG9yc1wiLCBcIl9mb250c1wiO1xyXG5cclxuXHJcbiNkZXNjcmlwdGlvbkRpdiB7XHJcbiAgICBoZWlnaHQ6MTE0cHhcclxufVxyXG5cclxuI2FsZ29yaXRobURlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjV2dztcclxufSIsIiNkZXNjcmlwdGlvbkRpdiB7XG4gIGhlaWdodDogMTE0cHg7XG59XG5cbiNhbGdvcml0aG1EZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBsaW5lLWhlaWdodDogMS41dnc7XG59Il19 */", ".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'alg-description',
          templateUrl: './alg-description.component.html',
          styleUrls: ['./alg-description.component.scss', '../sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/sidebar/execution-log/execution-log.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/algorithm-page/sidebar/execution-log/execution-log.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ExecutionLogComponent */

  /***/
  function srcAppAlgorithmPageSidebarExecutionLogExecutionLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecutionLogComponent", function () {
      return ExecutionLogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExecutionLogComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r1, ". ");
      }
    }

    var ExecutionLogComponent = /*#__PURE__*/function () {
      function ExecutionLogComponent(playback) {
        _classCallCheck(this, ExecutionLogComponent);

        this.playback = playback;
      }

      _createClass(ExecutionLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExecutionLogComponent;
    }();

    ExecutionLogComponent.ɵfac = function ExecutionLogComponent_Factory(t) {
      return new (t || ExecutionLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]));
    };

    ExecutionLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExecutionLogComponent,
      selectors: [["execution-log"]],
      decls: 5,
      vars: 1,
      consts: [["id", "executionTrace", "data-toggle", "popover", "data-placement", "left", "title", "Execution Trace", "data-content", "This will fill out as you play the algorithm with a log of all current line descriptions, so you can go back and get a better idea of what happens at certain parts in the algorithm!", "data-trigger", "manual", "data-template", "<div class=\"popover fade show bs-popover-right popoverPositioning blackText\" style=\"color:black\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>", 1, "sidebarPopover"], [1, "pt-4", "pl-3", 2, "color", "rgb(231, 231, 231)", "font-weight", "300", "margin-bottom", "0", "padding-bottom", "0", "font-size", "1.4vw"], ["start", "0", 1, "pt-3", "pb-4", 2, "width", "100%", "display", "table", "margin", "0", "vertical-align", "middle", "background-color", "#1b1f23", "padding-left", "30px", "font-size", "0.8vw", "line-height", "1.2vw"], ["class", "mb-4 pr-2", 4, "ngFor", "ngForOf"], [1, "mb-4", "pr-2"]],
      template: function ExecutionLogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Execution Log ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExecutionLogComponent_li_4_Template, 2, 1, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playback.algorithmData["descriptions"].slice(0, ctx.playback.stepCounter + 1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvZXhlY3V0aW9uLWxvZy9leGVjdXRpb24tbG9nLmNvbXBvbmVudC5zY3NzIn0= */", ".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecutionLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'execution-log',
          templateUrl: './execution-log.component.html',
          styleUrls: ['./execution-log.component.scss', '../sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/sidebar/free-agents/free-agents.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/algorithm-page/sidebar/free-agents/free-agents.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FreeAgentsComponent */

  /***/
  function srcAppAlgorithmPageSidebarFreeAgentsFreeAgentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FreeAgentsComponent", function () {
      return FreeAgentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FreeAgentsComponent_span_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FreeAgentsComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FreeAgentsComponent_span_7_span_3_Template, 2, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var lastItem_r2 = ctx.last;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.slice(item_r1.length - 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !lastItem_r2);
      }
    }

    var FreeAgentsComponent = /*#__PURE__*/function () {
      function FreeAgentsComponent(playback, // injecting the playback service
      algorithmService) {
        _classCallCheck(this, FreeAgentsComponent);

        this.playback = playback;
        this.algorithmService = algorithmService;
      } // injecting the algorithm service) { }


      _createClass(FreeAgentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FreeAgentsComponent;
    }();

    FreeAgentsComponent.ɵfac = function FreeAgentsComponent_Factory(t) {
      return new (t || FreeAgentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]));
    };

    FreeAgentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FreeAgentsComponent,
      selectors: [["free-agents"]],
      decls: 9,
      vars: 2,
      consts: [[1, "border-bottom", "align-items-center"], [1, "row", "align-items-center", "mx-2", 2, "height", "100%"], [1, "col-4", "pr-2", 2, "font-size", "22px"], [2, "font-size", "0.9vw"], [1, "col-8", "text-center", "pr-5", "py-3", 2, "font-size", "0.9vw"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function FreeAgentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " [ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FreeAgentsComponent_span_7_Template, 4, 5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Free ", ctx.algorithmService.pluralMap.get(ctx.algorithmService.currentAlgorithm.orientation[0]), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playback.commandList[ctx.playback.stepCounter]["freeAgents"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvZnJlZS1hZ2VudHMvZnJlZS1hZ2VudHMuY29tcG9uZW50LnNjc3MifQ== */", ".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FreeAgentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'free-agents',
          templateUrl: './free-agents.component.html',
          styleUrls: ['./free-agents.component.scss', '../sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }, {
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/sidebar/pseudocode/pseudocode.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/algorithm-page/sidebar/pseudocode/pseudocode.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PseudocodeComponent */

  /***/
  function srcAppAlgorithmPageSidebarPseudocodePseudocodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PseudocodeComponent", function () {
      return PseudocodeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PseudocodeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "line", i_r2 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r1, " ");
      }
    }

    var PseudocodeComponent = /*#__PURE__*/function () {
      function PseudocodeComponent(playback, algService) {
        _classCallCheck(this, PseudocodeComponent);

        this.playback = playback;
        this.algService = algService;
        this.animate = true;
      }

      _createClass(PseudocodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.algorithm = this.algService.currentAlgorithm.id;
        }
      }]);

      return PseudocodeComponent;
    }();

    PseudocodeComponent.ɵfac = function PseudocodeComponent_Factory(t) {
      return new (t || PseudocodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]));
    };

    PseudocodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PseudocodeComponent,
      selectors: [["pseudocode"]],
      decls: 6,
      vars: 1,
      consts: [["data-toggle", "popover", "data-placement", "left", "title", "Code Display", "data-content", "This highlights the current line that's being executed in the algorithm as you play or drag the playback slider.", "data-trigger", "manual", "data-template", "<div class=\"popover fade show bs-popover-right popoverPositioning blackText\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>", 1, "border-bottom", "sidebarPopover", "mr-2", 2, "background-color", "#1b1f23", "max-width", "100%"], [1, "pt-4", "pl-3", 2, "color", "rgb(231, 231, 231)", "font-weight", "300", "margin-bottom", "0", "padding-bottom", "0", "font-size", "1.4vw"], [2, "white-space", "pre", "height", "100%", "vertical-align", "middle", "font-size", "0.8vw", "line-height", "1.2vw", "margin", "0", "color", "rgb(231, 231, 231)", "width", "100%"], [1, "pt-3", "pb-4", 2, "width", "100%", "display", "table", "margin", "0", "vertical-align", "middle", "background-color", "#1b1f23", "padding-left", "30px"], ["style", "display: table-row; width: 100%; vertical-align: middle; margin: 0; ", 3, "id", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "width", "100%", "vertical-align", "middle", "margin", "0", 3, "id"], [1, "pl-2", 2, "vertical-align", "middle", "width", "100%", "tab-size", "0.8vw", "word-wrap", "break-word", "white-space", "pre-wrap"]],
      template: function PseudocodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pseudocode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PseudocodeComponent_div_5_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.algService.currentAlgorithm.code);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvcHNldWRvY29kZS9wc2V1ZG9jb2RlLmNvbXBvbmVudC5zY3NzIn0= */", ".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PseudocodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pseudocode',
          templateUrl: './pseudocode.component.html',
          styleUrls: ['./pseudocode.component.scss', '../sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }, {
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-page/sidebar/sidebar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/algorithm-page/sidebar/sidebar.component.ts ***!
    \*************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppAlgorithmPageSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/playback/playback.service */
    "./src/app/algorithm-page/services/playback/playback.service.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/canvas/canvas.service */
    "./src/app/algorithm-page/services/canvas/canvas.service.ts");
    /* harmony import */


    var _animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../animations/algorithm-animation.service */
    "./src/app/algorithm-page/animations/algorithm-animation.service.ts");
    /* harmony import */


    var src_app_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/utils/utils.service */
    "./src/app/utils/utils.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "col-md-3 d-md-block": a0,
        "moveContentToTop": a1
      };
    };

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(playback, // injecting the playback service
      algorithmService, // injecting the algorithm service
      drawService, // injecting the canvas service
      animation, utils, dialog, // injecting the dialog component
      router // injecting the router service (for programmatic route navigation)
      ) {
        _classCallCheck(this, SidebarComponent);

        this.playback = playback;
        this.algorithmService = algorithmService;
        this.drawService = drawService;
        this.animation = animation;
        this.utils = utils;
        this.dialog = dialog;
        this.router = router;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_4__["AlgorithmAnimationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["sidebar"]],
      inputs: {
        showCode: "showCode",
        tutorialStep: "tutorialStep"
      },
      decls: 7,
      vars: 4,
      consts: [[1, "d-none", "sidebar", 3, "ngClass"], [1, "sidebar-sticky", "shadow-lg"], ["id", "sidebarContent", 1, "grid-container-algorithm"], [2, "overflow", "auto"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "alg-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "free-agents");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "pseudocode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "execution-log", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, !ctx.showCode, ctx.tutorialStep == 2));
        }
      },
      styles: [".sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  \n  padding: 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n}\n.sidebar-sticky[_ngcontent-%COMP%] {\n  background-color: #1b1f23;\n  color: #e7e7e7;\n  position: absolute;\n  top: 48px;\n  \n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: #999;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n#sidebarContent[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 0.2fr 0.15fr 0.1fr 2fr;\n  grid-auto-rows: minmax(100px, auto);\n}\n.moveContentToTop[_ngcontent-%COMP%] {\n  z-index: 599;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #3d3d3d !important;\n}\nli[_ngcontent-%COMP%]::marker {\n  font-family: Roboto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGFsZ29yaXRobS1wYWdlXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGdvcml0aG0tcGFnZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcc3R5bGluZ3NcXF9jb2xvcnMuc2NzcyIsInNyYy9hcHAvYWxnb3JpdGhtLXBhZ2Uvc2lkZWJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsaW5nc1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7O0VBQUE7QUFJQztFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxVQUFBO0VBQ0EsNkNBQUE7QUNESjtBRElFO0VBQ0UseUJFTlk7RUZPWixjR2hCaUI7RUhpQmpCLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLHFCQUFBO0VBQ1gsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNkRBQUE7QUNDdEI7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0NKO0FERUU7O0VBRUUsY0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUFpQiwyQ0FBQTtBQ0VuQjtBREFFO0VBQ0UsbUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1wYWdlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJfY29sb3JzXCIsIFwiX2ZvbnRzXCI7XHJcbiAgXHJcbiAgLypcclxuICAgKiBTaWRlYmFyXHJcbiAgICovXHJcbiAgXHJcbiAgIC5zaWRlYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7IC8qIEJlaGluZCB0aGUgbmF2YmFyICovXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1jb2xvcjtcclxuICAgIGNvbG9yOiAkc2lkZWJhci10ZXh0LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4OyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuZmVhdGhlciB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhckNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMC4xNWZyIDAuMWZyIDJmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbiAgLm1vdmVDb250ZW50VG9Ub3Age1xyXG4gICAgei1pbmRleDogNTk5O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O31cclxuXHJcbiAgbGk6Om1hcmtlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gIH0iLCIvKlxuICogU2lkZWJhclxuICovXG4uc2lkZWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2lkZWJhci1zdGlja3kge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIzO1xuICBjb2xvcjogI2U3ZTdlNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXG4uc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzaWRlYmFyQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAwLjE1ZnIgMC4xZnIgMmZyO1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm1vdmVDb250ZW50VG9Ub3Age1xuICB6LWluZGV4OiA1OTk7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZDNkM2QgIWltcG9ydGFudDtcbn1cblxubGk6Om1hcmtlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59IiwiLy8gQWxsIGNvbG91cnMgZm9yIHRoZSBhcHAgYXJlIGRlZmluZWQgaGVyZVxyXG5cclxuJGxvZ28tYWxnLWNvbG9yOiAjZmYzYzAwO1xyXG4kbG9nby1tYXRjaC1jb2xvcjogI2UxMDBmZjtcclxuXHJcbiRsb2dvLWFsZy1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmZhZTAwO1xyXG4kbG9nby1tYXRjaC1ob3Zlci1hbGdwYWdlLWNvbG9yOiAjZmYwMDlkO1xyXG5cclxuJG5hdmJhci1jb2xvcjogIzI0MjgyYztcclxuJGJvcmRlci1jb2xvcjogIzNkM2QzZDtcclxuXHJcbiRzaWRlYmFyLWNvbG9yOiAjMWIxZjIzO1xyXG5cclxuXHJcbiRpY29uLWNvbG9yOiAjOTk5OTk5O1xyXG4kaWNvbi1ob3Zlci1jb2xvcjogI2MyYzJjMjsiLCIvLyBhbGwgZm9udHMgYW5kIGZvbnQtY29sb3JzIGZvciB0aGUgYXBwIGFyZSBkZWZpbmVkIGhlcmVcclxuXHJcbiRzaWRlYmFyLXRleHQtY29sb3I6ICNlN2U3ZTc7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_playback_playback_service__WEBPACK_IMPORTED_MODULE_1__["PlaybackService"]
        }, {
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }, {
          type: _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]
        }, {
          type: _animations_algorithm_animation_service__WEBPACK_IMPORTED_MODULE_4__["AlgorithmAnimationService"]
        }, {
          type: src_app_utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, {
        showCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tutorialStep: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/algorithm-retrieval.service.ts":
  /*!************************************************!*\
    !*** ./src/app/algorithm-retrieval.service.ts ***!
    \************************************************/

  /*! exports provided: AlgorithmRetrievalService */

  /***/
  function srcAppAlgorithmRetrievalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmRetrievalService", function () {
      return AlgorithmRetrievalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _algorithm_page_algorithms_algorithm_services_smp_man_gs_gs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./algorithm-page/algorithms/algorithm-services/smp-man-gs/gs-stable-marriage.service */
    "./src/app/algorithm-page/algorithms/algorithm-services/smp-man-gs/gs-stable-marriage.service.ts");
    /* harmony import */


    var _algorithm_page_algorithms_algorithm_services_smp_man_egs_egs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./algorithm-page/algorithms/algorithm-services/smp-man-egs/egs-stable-marriage.service */
    "./src/app/algorithm-page/algorithms/algorithm-services/smp-man-egs/egs-stable-marriage.service.ts");
    /* harmony import */


    var _algorithm_page_algorithms_algorithm_services_hr_resident_egs_hr_resident_egs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./algorithm-page/algorithms/algorithm-services/hr-resident-egs/hr-resident-egs.service */
    "./src/app/algorithm-page/algorithms/algorithm-services/hr-resident-egs/hr-resident-egs.service.ts");
    /* harmony import */


    var _algorithm_page_algorithms_algorithm_services_smp_room_irv_stable_room_irv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./algorithm-page/algorithms/algorithm-services/smp-room-irv/stable-room-irv.service */
    "./src/app/algorithm-page/algorithms/algorithm-services/smp-room-irv/stable-room-irv.service.ts");
    /* harmony import */


    var _algorithm_page_algorithms_algorithm_services_hr_hospital_egs_hr_hospital_egs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./algorithm-page/algorithms/algorithm-services/hr-hospital-egs/hr-hospital-egs.service */
    "./src/app/algorithm-page/algorithms/algorithm-services/hr-hospital-egs/hr-hospital-egs.service.ts"); // ------------------------------------------------------- ALGORITHM TEMPLATE
    // [
    //   "smp-man-egs", {
    //     id: "smp-man-egs",
    //     name: "Stable Marriage Problem",
    //     orientation: ["Man", "Woman"],
    //     algorithm: "Extended Gale-Shapley Stable Matching",
    //     service: null,
    //     description: "The stable marriage problem is the problem of finding a stable matching between two equally sized sets of elements. In this case: <b>men and women</b>.<br><br>To do this, the Extended Gale-Shapley Stable Marriage algorithm is used.",
    //     helpTextMap: {
    //     },
    //   }
    // ],
    // -------------------------------------------------------


    var AlgorithmRetrievalService = /*#__PURE__*/function () {
      function AlgorithmRetrievalService(gsStableMarriageService, egsStableMarriageService, HrResidentEgsService, StableRoomIrvService, HrHospitalEgsService) {
        _classCallCheck(this, AlgorithmRetrievalService);

        this.gsStableMarriageService = gsStableMarriageService;
        this.egsStableMarriageService = egsStableMarriageService;
        this.HrResidentEgsService = HrResidentEgsService;
        this.StableRoomIrvService = StableRoomIrvService;
        this.HrHospitalEgsService = HrHospitalEgsService;
        this.numberOfGroup1Agents = 5;
        this.numberOfGroup2Agents = 5;
        this.mapOfAvailableAlgorithms = new Map([["smp-man-gs", {
          id: "smp-man-gs",
          name: "Stable Marriage Problem",
          orientation: ["Man", "Woman"],
          equalGroups: true,
          algorithm: "Gale-Shapley Stable Matching",
          service: this.gsStableMarriageService,
          description: "The stable marriage problem is the problem of finding a stable matching between two equally sized sets of elements. In this case: <b>men and women</b>.<br><br>To do this, the Gale-Shapley Stable Marriage algorithm is used.",
          helpTextMap: {
            1: "Ensure there are no pre-existing matches between men and women",
            2: "While there is still a man without a match, select the first one (%man%)",
            3: "%woman% is selected as %man%'s most preferred woman who he has not yet proposed to",
            4: "Checking to see if %woman% has a match",
            5: "%woman% was free, so matching her with %man%",
            6: "%woman% is currently matched to %match%, so can't instantly engage %woman% and %man%",
            7: "Checking if %woman% likes %match% more than %man%",
            8: "%woman% likes %man% (current proposer) more than %match% (current match) so free %match% and engage %woman% and %man%",
            9: "%woman% likes %match% more than %man%",
            10: "No change to anyone's matches",
            11: "A stable matching has been generated."
          },
          code: ["set each person to be free;", "while some man m is free do:", "\tw = next most preferred woman on m’s list;", "\tif w is free then", "\t\tassign m to w;", "\telse", "\t\tif w prefers m to her current partner m' then", "\t\t\tassign m to w to be engaged and set m' to be free;", "\t\telse", "\t\t\tw rejects m’s proposal and remains with m';", "the stable matching consists of all n engagements"]
        }], ["smp-man-egs", {
          id: "smp-man-egs",
          name: "Stable Marriage Problem",
          orientation: ["Man", "Woman"],
          equalGroups: true,
          algorithm: "Extended Gale-Shapley Stable Matching",
          service: this.egsStableMarriageService,
          description: "The stable marriage problem is the problem of finding a stable matching between two equally sized sets of elements. In this case: <b>men and women</b>.<br><br>To do this, the Extended Gale-Shapley Stable Marriage algorithm is used.",
          helpTextMap: {
            1: "Set all men and women to have no engagements",
            2: "While there are some men who are not engaged, select the next one (%currentAgent%)",
            3: "%potentialProposee% is selected as %currentAgent%'s most preferred woman who he has not yet proposed to",
            4: "Check if %woman% is currently engaged to someone",
            5: "%woman% is engaged to %currentPartner%, so break the engagement between them",
            6: "%woman% is not engaged, so continue with algorithm",
            7: "Engage %man% and %woman%",
            8: "Select each man with a worse preference ranking than %man% on %woman%\'s list",
            9: "%nextWorstMan% is chosen as the next worst man on %woman%\'s preference list",
            10: "Remove %nextWorstMan% and %woman% from each other\'s lists",
            11: "All men worse than %man% on %woman%\'s preference list have been removed",
            12: "A stable matching between men and women has been found"
          },
          code: ["set each person to be free;", "while some man m is free {", "\tw = first woman on m's list", "\tif w is currently engaged to someone {", "\t\tbreak engagement between w and w's current partner", "\t}", "\tprovisionally engage m and w", "\tfor each successor m'' of m on w's list {", "\t\tm'' = next worst man on w's preference list", "\t\tremove m'' from w's preference list and vice versa", "\t}", "}" // a stable matching between men and women has been found
          ]
        }], ["hr-resident-egs", {
          id: "hr-resident-egs",
          name: "Hospitals/Residents Problem",
          orientation: ["Resident", "Hospital"],
          equalGroups: false,
          algorithm: "Extended Gale-Shapley Stable Matching",
          service: this.HrResidentEgsService,
          description: "The Hospitals/Residents Problem is the problem of finding a stable matching between a set of <b>hospitals and residents</b>, where a hospital can take multiple residents.<br><br>This is the <b>resident-oriented</b> version of the algorithm, so <b>residents will propose to hospitals</b>.<br><br>To do this, the Extended Gale-Shapley Stable Marriage algorithm is used.",
          helpTextMap: {
            1: "Clear the matches of all residents and hospitals",
            2: "The next resident who doesn't have a match and still has some hospitals in their preference list is selected (%currentAgent%\)",
            3: "The first hospital on %currentAgent%\'s preference list is selected (%potentialProposee%)",
            4: "Check if %hospital% is currently full: is it already matched with %capacity% resident(s)? If not, provisionally assign %resident% to %hospital%",
            5: "%hospital%'s number of residents is equal to its max capacity, so choose the worst resident assigned to %hospital% (%worstResident%)",
            6: "Clear the match between %hospital% and %worstResident%",
            7: "Assign %resident% to %hospital%",
            8: "Check if %hospital% is full after assigning %resident% to %hospital%",
            9: "%hospital% is fully subscribed, so choose the worst resident assigned to them (%worstResident%) and remove each successor from %hospital%'s preference list",
            10: "%nextResident% is chosen as the next resident to be removed from %hospital%'s list",
            11: "Remove %nextResident% from %hospital%'s list",
            12: "A stable matching between residents and hospitals has been found"
          },
          code: ["set each hospital and resident to be completely free;", "while (some resident r is free) and (r has a nonempty list)", "\th := first hospital on r's list", "\tif h is fully subscribed then", "\t\tr' := worst resident provisionally assigned to h", "\t\tassign r' to be free (clear match)", "\tprovisionally assign r to h", "\tif h is fully subscribed (after assigning r to h) then", "\t\ts := worst resident provisionally assigned to h", "\t\tfor each successor s' of s on h's list", "\t\t\tremove s' and h from each other's lists", "the stable matching consists of all n engagements"]
        }], // ADD NEW ALGORITHMS UNDER HERE
        ["smp-room-irv", {
          id: "smp-room-irv",
          name: "Stable Roommates Problem",
          orientation: ["Person", "Person"],
          equalGroups: true,
          algorithm: "Stable Roommates - Irving's Algorithm",
          service: this.StableRoomIrvService,
          description: "The stable roommates problem is the problem of finding a stable matching between 1 group of elements. In this case <b>people</b>.<br> <br>To do this the Irving’s algorithm is used ",
          helpTextMap: {
            1: "Set all people to be free",
            2: "While some person %person% has not been assigned to a anyone and has a non-empty preferance list",
            3: "check if %person%\'s preferance list is empty",
            4: "end the algorithm, there is no stable matching",
            5: "the first person on %person%\'s preferance list is selected - %selected%",
            6: "set %person%\ to be provisonally assigned to selected person %selected%",
            7: "check if any other person, other than %person% is assigned to %selected% ",
            8: "If they are, then unassign them. unassign %old_person% from %selected%",
            9: "look through %selected%\'s preferance list - %list%, for each person less prefered than %person%",
            10: "remove %removee% from %person%\'s preferance list and remove %person% from %removee%\'s preferance list",
            11: "While some person %person% has more then 1 person left in their preferance list - %list%",
            12: "look for rotations within %person%\'s preferance list, that is a cycle of ordered pairs through preferance lists",
            13: "if a rotation is found",
            14: "delete pairs in rotation - remove %removee% from %person%\'s preferance list and remove %person% from %removee%\'s preferance list",
            15: "check if any person has only 1 preferance left",
            16: "assign %person% to the last person in their preferance list - %preferance%",
            17: "check if %person%\'s preferance list is empty",
            18: "end the algorithm, there is no stable matching",
            19: "Stable mathcing found."
          },
          code: ["Set each person to be free", "While some person p is free (not assigned to someone)", "\t if person p has a empty preferance list", "\t\t end - no stable matching", "\t person b := first preferance on p's list", "\t assign p to b", "\t if any person a is assigned to person b", "\t\t free a", "\t for each person c less preferded than p on b's, preferance list", "\t\t remove c from p's list and remove p from c's list", // 10 lines so far 
          // PAHSE 2
          "While some person p has more than 1 preferance left", "look for rotations in perosn p's preferance list", "if rotation r is found", "\t delete pairs in rotation r", "\t if a person b has 1 perferance left", "\t\t person b := last preferance", "if any people have empty preferance lists", "\t end - no stable matching", "done" // 11 ---> 17 lines 
          ]
        }], ["hr-hospital-egs", {
          id: "hr-hospital-egs",
          name: "Hospitals/Residents Problem",
          orientation: ["Hospital", "Resident"],
          equalGroups: false,
          algorithm: "Extended Gale-Shapley Stable Matching",
          service: this.HrHospitalEgsService,
          description: "The Hospitals/Residents Problem is the problem of finding a stable matching between a set of <b>hospitals and residents</b>, where a hospital can take multiple residents.<br><br>This is the <b>hospital-oriented</b> version of the algorithm, so <b>hospitals will propose to residents</b>.<br><br>To do this, the Extended Gale-Shapley Stable Marriage algorithm is used.",
          helpTextMap: {
            1: "Set all hospitals and residents to be completely free",
            2: "While some hospital (%hospital%) is undersubscribed and has a resident on their preferance list that is not assigned to them",
            3: "Set r to %resident% from hospital's preferance list",
            4: "If %resident% is assigned to another hospital, unassign them from each other",
            5: "Unassign %resident% and %oldHospital% from each other",
            6: "Assign %resident% and %hospital% to each other",
            7: "For each resident r' after %resident% on %hospital%'s preferance list, remove them from each others preferance list",
            8: "remove %resident% from %hospital%'s preferance list and %hospital% from %resident%'s preferance list",
            9: "Stable matching is found"
          },
          code: ["Set each hospital and resident to be completely free", "While some hospital h is undersubscibed, and has a resident on their preferance list", "\t r := first resident on h's prefernace list not assigned to h", "\t if r is assigned to another hospital h'", "\t\t unassign r and h'", "\t provisionally assign r to h", "\t for each successor r' of r on h's list", "\t\t remove r' and h from each others preferance list", "stable matching is found "]
        }]]);
        this.pluralMap = new Map([["Man", "Men"], ["Woman", "Women"], ["Resident", "Residents"], ["Hospital", "Hospitals"], ["Person", "People"]]);
      }

      _createClass(AlgorithmRetrievalService, [{
        key: "getListOfAlgorithms",
        value: function getListOfAlgorithms() {
          return Array.from(this.mapOfAvailableAlgorithms.values());
        }
      }]);

      return AlgorithmRetrievalService;
    }();

    AlgorithmRetrievalService.ɵfac = function AlgorithmRetrievalService_Factory(t) {
      return new (t || AlgorithmRetrievalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_page_algorithms_algorithm_services_smp_man_gs_gs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_1__["GsStableMarriageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_page_algorithms_algorithm_services_smp_man_egs_egs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_2__["EgsStableMarriageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_page_algorithms_algorithm_services_hr_resident_egs_hr_resident_egs_service__WEBPACK_IMPORTED_MODULE_3__["HrResidentEgsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_page_algorithms_algorithm_services_smp_room_irv_stable_room_irv_service__WEBPACK_IMPORTED_MODULE_4__["StableRoomIrvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_page_algorithms_algorithm_services_hr_hospital_egs_hr_hospital_egs_service__WEBPACK_IMPORTED_MODULE_5__["HrHospitalEgsService"]));
    };

    AlgorithmRetrievalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlgorithmRetrievalService,
      factory: AlgorithmRetrievalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmRetrievalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _algorithm_page_algorithms_algorithm_services_smp_man_gs_gs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_1__["GsStableMarriageService"]
        }, {
          type: _algorithm_page_algorithms_algorithm_services_smp_man_egs_egs_stable_marriage_service__WEBPACK_IMPORTED_MODULE_2__["EgsStableMarriageService"]
        }, {
          type: _algorithm_page_algorithms_algorithm_services_hr_resident_egs_hr_resident_egs_service__WEBPACK_IMPORTED_MODULE_3__["HrResidentEgsService"]
        }, {
          type: _algorithm_page_algorithms_algorithm_services_smp_room_irv_stable_room_irv_service__WEBPACK_IMPORTED_MODULE_4__["StableRoomIrvService"]
        }, {
          type: _algorithm_page_algorithms_algorithm_services_hr_hospital_egs_hr_hospital_egs_service__WEBPACK_IMPORTED_MODULE_5__["HrHospitalEgsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animations/fadeAnimation.ts":
  /*!*********************************************!*\
    !*** ./src/app/animations/fadeAnimation.ts ***!
    \*********************************************/

  /*! exports provided: simpleFadeAnimation */

  /***/
  function srcAppAnimationsFadeAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "simpleFadeAnimation", function () {
      return simpleFadeAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var simpleFadeAnimation = // the fade-in/fade-out animation.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('simpleFadeAnimation', [// the "in" style determines the "resting" state of the element when it is visible.
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    })), // fade in when created. this could also be written as transition('void => *')
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms 0ms cubic-bezier(0.5, 0, 0.75, 0)')]), // fade out when destroyed. this could also be written as transition('void => *')
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    })))]);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'individual-project';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./routing/app-routing.module */
    "./src/app/routing/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./algorithm-page/algorithm-page.component */
    "./src/app/algorithm-page/algorithm-page.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _algorithm_page_mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./algorithm-page/mat-animated-icon/mat-animated-icon.component */
    "./src/app/algorithm-page/mat-animated-icon/mat-animated-icon.component.ts");
    /* harmony import */


    var _algorithm_page_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./algorithm-page/playback-controls/playback-controls.component */
    "./src/app/algorithm-page/playback-controls/playback-controls.component.ts");
    /* harmony import */


    var _algorithm_page_code_display_code_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./algorithm-page/code-display/code-display.component */
    "./src/app/algorithm-page/code-display/code-display.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var angular_resize_event__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! angular-resize-event */
    "./node_modules/angular-resize-event/__ivy_ngcc__/fesm2015/angular-resize-event.js");
    /* harmony import */


    var _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home-page/home-content/home-content.component */
    "./src/app/home-page/home-content/home-content.component.ts");
    /* harmony import */


    var _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home-page/about-content/about-content.component */
    "./src/app/home-page/about-content/about-content.component.ts");
    /* harmony import */


    var _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./home-page/algorithm-content/algorithm-content.component */
    "./src/app/home-page/algorithm-content/algorithm-content.component.ts");
    /* harmony import */


    var _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home-page/feedback-content/feedback-content.component */
    "./src/app/home-page/feedback-content/feedback-content.component.ts");
    /* harmony import */


    var _home_page_algorithm_content_algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home-page/algorithm-content/algorithm-card/algorithm-card.component */
    "./src/app/home-page/algorithm-content/algorithm-card/algorithm-card.component.ts");
    /* harmony import */


    var _home_page_icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home-page/icon-banner/icon-banner.component */
    "./src/app/home-page/icon-banner/icon-banner.component.ts");
    /* harmony import */


    var _home_page_feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home-page/feedback-banner/feedback-banner.component */
    "./src/app/home-page/feedback-banner/feedback-banner.component.ts");
    /* harmony import */


    var _home_page_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./home-page/navbar/navbar.component */
    "./src/app/home-page/navbar/navbar.component.ts");
    /* harmony import */


    var _algorithm_page_edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./algorithm-page/edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component */
    "./src/app/algorithm-page/edit-preferences-dialog/edit-preferences-dialog/edit-preferences-dialog.component.ts");
    /* harmony import */


    var _algorithm_page_animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./algorithm-page/animation-guide-dialog/animation-guide-dialog.component */
    "./src/app/algorithm-page/animation-guide-dialog/animation-guide-dialog.component.ts");
    /* harmony import */


    var _algorithm_page_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./algorithm-page/sidebar/sidebar.component */
    "./src/app/algorithm-page/sidebar/sidebar.component.ts");
    /* harmony import */


    var _algorithm_page_sidebar_alg_description_alg_description_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./algorithm-page/sidebar/alg-description/alg-description.component */
    "./src/app/algorithm-page/sidebar/alg-description/alg-description.component.ts");
    /* harmony import */


    var _algorithm_page_sidebar_free_agents_free_agents_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./algorithm-page/sidebar/free-agents/free-agents.component */
    "./src/app/algorithm-page/sidebar/free-agents/free-agents.component.ts");
    /* harmony import */


    var _algorithm_page_sidebar_pseudocode_pseudocode_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./algorithm-page/sidebar/pseudocode/pseudocode.component */
    "./src/app/algorithm-page/sidebar/pseudocode/pseudocode.component.ts");
    /* harmony import */


    var _algorithm_page_sidebar_execution_log_execution_log_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./algorithm-page/sidebar/execution-log/execution-log.component */
    "./src/app/algorithm-page/sidebar/execution-log/execution-log.component.ts");
    /* harmony import */


    var _algorithm_page_algorithm_navbar_algorithm_navbar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./algorithm-page/algorithm-navbar/algorithm-navbar.component */
    "./src/app/algorithm-page/algorithm-navbar/algorithm-navbar.component.ts");
    /* harmony import */


    var _algorithm_page_animation_container_animation_container_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./algorithm-page/animation-container/animation-container.component */
    "./src/app/algorithm-page/animation-container/animation-container.component.ts");
    /* harmony import */


    var _algorithm_page_animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./algorithm-page/animation-container/agent-titles/agent-titles.component */
    "./src/app/algorithm-page/animation-container/agent-titles/agent-titles.component.ts");
    /* harmony import */


    var _algorithm_page_animation_container_canvas_display_canvas_display_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./algorithm-page/animation-container/canvas-display/canvas-display.component */
    "./src/app/algorithm-page/animation-container/canvas-display/canvas-display.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angular_resize_event__WEBPACK_IMPORTED_MODULE_22__["AngularResizedEventModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmPageComponent"], _algorithm_page_mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_18__["MatAnimatedIconComponent"], _algorithm_page_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_19__["PlaybackControlsComponent"], _algorithm_page_code_display_code_display_component__WEBPACK_IMPORTED_MODULE_20__["CodeDisplayComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__["HomePageComponent"], _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_23__["HomeContentComponent"], _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_24__["AboutContentComponent"], _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_25__["AlgorithmContentComponent"], _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_26__["FeedbackContentComponent"], _home_page_algorithm_content_algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_27__["AlgorithmCardComponent"], _home_page_icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_28__["IconBannerComponent"], _home_page_feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_29__["FeedbackBannerComponent"], _home_page_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__["NavbarComponent"], _algorithm_page_edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_31__["EditPreferencesDialogComponent"], _algorithm_page_animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_32__["AnimationGuideDialogComponent"], _algorithm_page_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["SidebarComponent"], _algorithm_page_sidebar_alg_description_alg_description_component__WEBPACK_IMPORTED_MODULE_34__["AlgDescriptionComponent"], _algorithm_page_sidebar_free_agents_free_agents_component__WEBPACK_IMPORTED_MODULE_35__["FreeAgentsComponent"], _algorithm_page_sidebar_pseudocode_pseudocode_component__WEBPACK_IMPORTED_MODULE_36__["PseudocodeComponent"], _algorithm_page_sidebar_execution_log_execution_log_component__WEBPACK_IMPORTED_MODULE_37__["ExecutionLogComponent"], _algorithm_page_algorithm_navbar_algorithm_navbar_component__WEBPACK_IMPORTED_MODULE_38__["AlgorithmNavbarComponent"], _algorithm_page_animation_container_animation_container_component__WEBPACK_IMPORTED_MODULE_39__["AnimationContainerComponent"], _algorithm_page_animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_40__["AgentTitlesComponent"], _algorithm_page_animation_container_canvas_display_canvas_display_component__WEBPACK_IMPORTED_MODULE_41__["CanvasDisplayComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angular_resize_event__WEBPACK_IMPORTED_MODULE_22__["AngularResizedEventModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmPageComponent"], _algorithm_page_mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_18__["MatAnimatedIconComponent"], _algorithm_page_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_19__["PlaybackControlsComponent"], _algorithm_page_code_display_code_display_component__WEBPACK_IMPORTED_MODULE_20__["CodeDisplayComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__["HomePageComponent"], _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_23__["HomeContentComponent"], _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_24__["AboutContentComponent"], _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_25__["AlgorithmContentComponent"], _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_26__["FeedbackContentComponent"], _home_page_algorithm_content_algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_27__["AlgorithmCardComponent"], _home_page_icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_28__["IconBannerComponent"], _home_page_feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_29__["FeedbackBannerComponent"], _home_page_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__["NavbarComponent"], _algorithm_page_edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_31__["EditPreferencesDialogComponent"], _algorithm_page_animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_32__["AnimationGuideDialogComponent"], _algorithm_page_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["SidebarComponent"], _algorithm_page_sidebar_alg_description_alg_description_component__WEBPACK_IMPORTED_MODULE_34__["AlgDescriptionComponent"], _algorithm_page_sidebar_free_agents_free_agents_component__WEBPACK_IMPORTED_MODULE_35__["FreeAgentsComponent"], _algorithm_page_sidebar_pseudocode_pseudocode_component__WEBPACK_IMPORTED_MODULE_36__["PseudocodeComponent"], _algorithm_page_sidebar_execution_log_execution_log_component__WEBPACK_IMPORTED_MODULE_37__["ExecutionLogComponent"], _algorithm_page_algorithm_navbar_algorithm_navbar_component__WEBPACK_IMPORTED_MODULE_38__["AlgorithmNavbarComponent"], _algorithm_page_animation_container_animation_container_component__WEBPACK_IMPORTED_MODULE_39__["AnimationContainerComponent"], _algorithm_page_animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_40__["AgentTitlesComponent"], _algorithm_page_animation_container_canvas_display_canvas_display_component__WEBPACK_IMPORTED_MODULE_41__["CanvasDisplayComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angular_resize_event__WEBPACK_IMPORTED_MODULE_22__["AngularResizedEventModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_algorithm_page_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["SidebarComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_42__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["ɵangular_packages_router_router_l"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_44__["Dir"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["CdkScrollable"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_46__["MatOptgroup"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSlider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardAvatar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogActions"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_47__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_47__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatTextareaAutosize"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipComponent"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArrayName"], angular_resize_event__WEBPACK_IMPORTED_MODULE_22__["ResizedDirective"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmPageComponent"], _algorithm_page_mat_animated_icon_mat_animated_icon_component__WEBPACK_IMPORTED_MODULE_18__["MatAnimatedIconComponent"], _algorithm_page_playback_controls_playback_controls_component__WEBPACK_IMPORTED_MODULE_19__["PlaybackControlsComponent"], _algorithm_page_code_display_code_display_component__WEBPACK_IMPORTED_MODULE_20__["CodeDisplayComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__["HomePageComponent"], _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_23__["HomeContentComponent"], _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_24__["AboutContentComponent"], _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_25__["AlgorithmContentComponent"], _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_26__["FeedbackContentComponent"], _home_page_algorithm_content_algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_27__["AlgorithmCardComponent"], _home_page_icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_28__["IconBannerComponent"], _home_page_feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_29__["FeedbackBannerComponent"], _home_page_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_30__["NavbarComponent"], _algorithm_page_edit_preferences_dialog_edit_preferences_dialog_edit_preferences_dialog_component__WEBPACK_IMPORTED_MODULE_31__["EditPreferencesDialogComponent"], _algorithm_page_animation_guide_dialog_animation_guide_dialog_component__WEBPACK_IMPORTED_MODULE_32__["AnimationGuideDialogComponent"], _algorithm_page_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_33__["SidebarComponent"], _algorithm_page_sidebar_alg_description_alg_description_component__WEBPACK_IMPORTED_MODULE_34__["AlgDescriptionComponent"], _algorithm_page_sidebar_free_agents_free_agents_component__WEBPACK_IMPORTED_MODULE_35__["FreeAgentsComponent"], _algorithm_page_sidebar_pseudocode_pseudocode_component__WEBPACK_IMPORTED_MODULE_36__["PseudocodeComponent"], _algorithm_page_sidebar_execution_log_execution_log_component__WEBPACK_IMPORTED_MODULE_37__["ExecutionLogComponent"], _algorithm_page_algorithm_navbar_algorithm_navbar_component__WEBPACK_IMPORTED_MODULE_38__["AlgorithmNavbarComponent"], _algorithm_page_animation_container_animation_container_component__WEBPACK_IMPORTED_MODULE_39__["AnimationContainerComponent"], _algorithm_page_animation_container_agent_titles_agent_titles_component__WEBPACK_IMPORTED_MODULE_40__["AgentTitlesComponent"], _algorithm_page_animation_container_canvas_display_canvas_display_component__WEBPACK_IMPORTED_MODULE_41__["CanvasDisplayComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_42__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_42__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/home-page/about-content/about-content.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home-page/about-content/about-content.component.ts ***!
    \********************************************************************/

  /*! exports provided: AboutContentComponent */

  /***/
  function srcAppHomePageAboutContentAboutContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutContentComponent", function () {
      return AboutContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/fadeAnimation */
    "./src/app/animations/fadeAnimation.ts");

    var AboutContentComponent = /*#__PURE__*/function () {
      function AboutContentComponent() {
        _classCallCheck(this, AboutContentComponent);
      }

      _createClass(AboutContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutContentComponent;
    }();

    AboutContentComponent.ɵfac = function AboutContentComponent_Factory(t) {
      return new (t || AboutContentComponent)();
    };

    AboutContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutContentComponent,
      selectors: [["app-about-content"]],
      decls: 51,
      vars: 1,
      consts: [[1, "aboutContent"], [1, "container", "text-center", "py-5", "my-5", "col-sm-11", "col-lg-8", "col-xl-6"], [1, "title-text"], [1, "divider", "my-4"], [2, "color", "#464d57"], [1, "py-5", 2, "background-color", "#f6f6f8"], [1, "container", "my-5", 2, "font-family", "DM Sans"], [1, "row", "pt-3"], [1, "col-12"], [2, "font-size", "40px", "line-height", "50px", "font-weight", "600"], [1, "pr-5", 2, "font-size", "20px", "line-height", "30px", "font-weight", "300"], [1, "", 2, "height", "150px"], [1, "row", "pb-5"], ["id", "homePageRow3Text", 1, "col-lg-6", "col-sm-12", "my-auto"], [2, "font-size", "20px", "line-height", "30px", "font-weight", "300"], [1, "col-lg-6", "col-sm-12", "pl-5"], [1, "mx-auto", 2, "width", "300px", "height", "300px", "overflow", "hidden", "border-radius", "50%", "border", "3px solid rgb(180, 180, 180)"], ["src", "assets/images/liam.jpg", "id", "homePageRow3Content", "alt", "me", 2, "margin", "0 auto", "margin-left", "-8.2%", "margin-top", "-14%", "height", "140%", "width", "auto"]],
      template: function AboutContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hi, I'm Liam!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This app was developed for my final year project at the University of Glasgow.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This app is a matching algorithm animator proposed by Sofiat Olaosebikan, my supervisor for this project, and developed as part of my final year individual project over the course of 6 months. The idea of this app was to create a slick, easy to use learning tool for matching algorithms - that is, algorithms that involve the stable matching of 2 groups through various criteria. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Although this project is not as polished or feature-rich as I would like it to be, due to time and other constraints, I hope you like it and are also able to give me some feedback on what I could improve! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This app is created for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "desktop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " use - so will look the best on larger screens - I currently have no plans to optimise it for mobile devices so elements may not appear properly on smaller screens/windows. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " To get started or learn more, head over to the Algorithms page where you can select an algorithm to run in different scenarios. Currently there are 3 options, and due to time constraints, I have no plans to add more. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "More about me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " I'm Liam! A 4th year Computer Scientist at the University of Glasgow. When I'm not developing, I'm usually playing games, piano or learning whatever I can! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " If you want to know more about me, head down to the bottom of the page and check out my social links! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Help and special mentions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " A big thank you to Sofiat Olaosebikan for helping me throughout the process and looking out for me to make sure on track, even in such a hectic year. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Also, thank you to Sarah, my partner, for your constant support and helping me out of my lowest lows. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@simpleFadeAnimation", "in");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9hYm91dC1jb250ZW50L2Fib3V0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */", ".divider[_ngcontent-%COMP%] {\n  background-color: #D7D7D7;\n  height: 1px;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2058FF;\n  font-family: \"DM Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcY2FsbHVcXEw0IFByb2plY3RcXGluZGl2aWR1YWwtcHJvamVjdC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURjQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc3VidGl0bGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuYm9keS10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gfVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMjA1OEZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJ1xyXG59IiwiLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIwNThGRjtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xufSJdfQ== */", ".mat-badge-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 0px;\n}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%] {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%] {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%] {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.mat-chip[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-calendar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-calendar-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.34375em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 150%;\n  line-height: 1.125;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 1.125em;\n  line-height: 1.125;\n}\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.34375em;\n}\n.mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.34375em;\n}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.4375em 0;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.28125em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.25em 0 0.75em 0;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: -0.0625em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select-trigger[_ngcontent-%COMP%] {\n  height: 1.125em;\n}\n.mat-slide-toggle-content[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-step-sub-label-error[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.mat-step-label-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-step-label-selected[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-tab-group[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.mat-tooltip-handset[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-simple-snackbar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n.mat-tree[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n    opacity: 0.6;\n  }\n}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n@-webkit-keyframes cdk-text-field-autofill-start {\n  \n}\n@keyframes cdk-text-field-autofill-start {\n  \n}\n@-webkit-keyframes cdk-text-field-autofill-end {\n  \n}\n@keyframes cdk-text-field-autofill-end {\n  \n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-animation: cdk-text-field-autofill-start 0s 1ms;\n          animation: cdk-text-field-autofill-start 0s 1ms;\n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  -webkit-animation: cdk-text-field-autofill-end 0s 1ms;\n          animation: cdk-text-field-autofill-end 0s 1ms;\n}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #24292e;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #2058FF;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #f44336;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #24292e;\n}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #2058FF;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #b0b0b0;\n}\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: #fff;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #24292e;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #2058FF;\n  color: #fff;\n}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #f44336;\n}\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: #000;\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #fff;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #24292e;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #2058FF;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: #000;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  color: #fff;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: #fff;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n  color: #fff;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-table[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  color: #fff;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #fff;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n  color: #fff;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(96, 163, 252, 0.4);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #fff;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: #fff;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.4);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px #fff;\n}\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: #fff;\n  }\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #24292e;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #2058FF;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #24292e;\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #2058FF;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #f44336;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #c5cae9;\n}\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #24292e;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #ff80ab;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #ff80ab;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #2058FF;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #ffcdd2;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #ffcdd2;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #f44336;\n}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #24292e;\n}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #2058FF;\n}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #f44336;\n}\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #24292e;\n}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #2058FF;\n}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #f44336;\n}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #24292e;\n}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(96, 163, 252, 0.54);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(96, 163, 252, 0.2);\n}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: #fff;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  color: #fff;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #f44336;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3);\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #24292e;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: #fff;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #24292e;\n  color: #fff;\n}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #2058FF;\n  color: #fff;\n}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: #fff;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: #2058FF;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"DM Sans\", sans-serif;\n  overflow: overlay;\n  font-size: 1em;\n  line-height: 1.5;\n}\n@media (min-width: 64em) {\n  body[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    line-height: 1.8;\n  }\n}\n@media (min-width: 85.375em) {\n  body[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n@media (min-width: 120em) {\n  body[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n}\n@media (min-width: 160em) {\n  body[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n}\n.unselectable[_ngcontent-%COMP%] {\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 15px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  overflow: visible;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.popoverPositioning[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 300px !important;\n  margin-left: 10rem !important;\n  z-index: 3000;\n}\n.blackText[_ngcontent-%COMP%] {\n  color: black;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #000000;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #242424;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  z-index: 500;\n}\n.startButton[_ngcontent-%COMP%] {\n  background-color: #2058FF;\n  transition: 200ms background-color;\n}\n.startButton[_ngcontent-%COMP%]:hover {\n  background-color: #1140ce;\n}\n.title-text[_ngcontent-%COMP%] {\n  font-size: 3.2em;\n  line-height: 1.6em;\n}\n@media only screen and (max-width: 576px) {\n  .video[_ngcontent-%COMP%] {\n    height: 270px;\n  }\n}\n@media only screen and (min-width: 576px) {\n  .video[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .video[_ngcontent-%COMP%] {\n    height: 410px;\n  }\n}\n@media (min-width: 120em) {\n  .title-text[_ngcontent-%COMP%] {\n    padding-top: 7vh;\n    font-size: 4em;\n    line-height: 1.6em;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    height: 540px;\n  }\n}\n@media (min-width: 160em) {\n  .title-text[_ngcontent-%COMP%] {\n    padding-top: 7vh;\n    font-size: 4.6em;\n    line-height: 1.6em;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtY29udGVudC9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtY29udGVudC9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxjdXN0b21Bbmd1bGFyVGhlbWUuc2NzcyIsInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLWNvbnRlbnQvQzpcXFVzZXJzXFxjYWxsdVxcTDQgUHJvamVjdFxcaW5kaXZpZHVhbC1wcm9qZWN0L3NyY1xcYXBwXFxob21lLXBhZ2VcXGhvbWUtY29udGVudFxcaG9tZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7RUFBbUIsZ0JBQUE7RUFBZ0IsZUFBQTtFQUFlLGlEQUFBO0FDS2xEO0FETG1HO0VBQW9DLGNBQUE7QUNTdkk7QURUcUo7RUFBb0MsZUFBQTtBQ2F6TDtBRGJ3TTtFQUF5Qyx3REFBQTtFQUF3RCxzQkFBQTtFQUFzQixnQkFBQTtBQ21CL1Q7QURuQitVO0VBQXNDLHdEQUFBO0VBQXdELHNCQUFBO0VBQXNCLGdCQUFBO0FDeUJuYztBRHpCbWQ7RUFBNkMsd0RBQUE7RUFBd0Qsc0JBQUE7RUFBc0IsZUFBQTtBQytCOWtCO0FEL0I2bEI7RUFBNkMsd0RBQUE7RUFBd0Qsc0JBQUE7RUFBc0IsZ0JBQUE7QUNxQ3h0QjtBRHJDd3VCO0VBQTJCLHFFQUFBO0VBQXFFLGdCQUFBO0FDMEN4MEI7QUQxQ3cxQjtFQUEyQixxRUFBQTtFQUFxRSxnQkFBQTtBQytDeDdCO0FEL0N3OEI7RUFBNkIsd0RBQUE7RUFBd0Qsc0JBQUE7QUNvRDdoQztBRHBEbWpDO0VBQXNDLHdEQUFBO0VBQXdELHNCQUFBO0FDeURqcEM7QUR6RHVxQztFQUE0QyxnQkFBQTtBQzZEbnRDO0FEN0RtdUM7RUFBd0Isd0RBQUE7RUFBd0Qsc0JBQUE7QUNrRW56QztBRGxFeTBDO0VBQThDLDBEQUFBO0VBQTBELHVCQUFBO0VBQXVCLGdCQUFBO0FDd0V4OEM7QUR4RXc5QztFQUE4Qyx3REFBQTtFQUF3RCx1QkFBQTtFQUF1QixnQkFBQTtBQzhFcmxEO0FEOUVxbUQ7RUFBOEMsd0RBQUE7RUFBd0Qsd0JBQUE7RUFBd0IsZ0JBQUE7QUNvRm51RDtBRHBGbXZEO0VBQThDLHdEQUFBO0VBQXdELHNCQUFBO0VBQXNCLGdCQUFBO0FDMEYvMkQ7QUQxRiszRDtFQUE0Qix3REFBQTtFQUF3RCxzQkFBQTtBQytGbjlEO0FEL0Z5K0Q7RUFBNEcsaURBQUE7RUFBaUQsZUFBQTtFQUFlLGdCQUFBO0FDcUdycEU7QURyR3FxRTtFQUFtQixpREFBQTtBQ3lHeHJFO0FEekd5dUU7RUFBVSxpREFBQTtBQzZHbnZFO0FEN0dveUU7RUFBZ0IsZUFBQTtFQUFlLGdCQUFBO0FDa0huMEU7QURsSG0xRTtFQUFpQyxlQUFBO0FDc0hwM0U7QUR0SG00RTtFQUFxQyxlQUFBO0FDMEh4NkU7QUQxSHU3RTtFQUFjLGlEQUFBO0FDOEhyOEU7QUQ5SHMvRTtFQUF5QyxpQkFBQTtBQ2tJL2hGO0FEbElnakY7RUFBVSxlQUFBO0VBQWUsZ0JBQUE7QUN1SXprRjtBRHZJeWxGO0VBQStFLGVBQUE7QUMySXhxRjtBRDNJdXJGO0VBQVcsaURBQUE7QUMrSWxzRjtBRC9JbXZGO0VBQWlCLGVBQUE7RUFBZSxnQkFBQTtBQ29KbnhGO0FEcEpteUY7RUFBMkIsZUFBQTtBQ3dKOXpGO0FEeEo2MEY7RUFBYyxpREFBQTtBQzRKMzFGO0FENUo0NEY7RUFBbUIsZUFBQTtBQ2dLLzVGO0FEaEs4NkY7RUFBcUQsZUFBQTtFQUFlLGdCQUFBO0FDcUtsL0Y7QURyS2tnRztFQUE4QixlQUFBO0VBQWUsZ0JBQUE7QUMwSy9pRztBRDFLK2pHO0VBQWtCLHdEQUFBO0VBQXdELHNCQUFBO0FDK0t6b0c7QUQvSytwRztFQUE0QixpREFBQTtFQUFpRCxlQUFBO0VBQWUsZ0JBQUE7QUNxTDN2RztBRHJMMndHO0VBQTZCLHdEQUFBO0VBQXdELHNCQUFBO0FDMExoMkc7QUQxTHMzRztFQUFnQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixpREFBQTtFQUFpRCxzQkFBQTtBQ2tNMytHO0FEbE1pZ0g7RUFBd0IseUJBQUE7QUNzTXpoSDtBRHRNa2pIO0VBQWtFLGVBQUE7RUFBZSxrQkFBQTtBQzJNbm9IO0FEM01xcEg7RUFBZ0YsYUFBQTtFQUFhLFlBQUE7QUNnTmx2SDtBRGhOOHZIO0VBQW9HLGVBQUE7RUFBZSxrQkFBQTtBQ3FOajNIO0FEck5tNEg7RUFBc0IsZ0JBQUE7RUFBZSx1Q0FBQTtBQzBOeDZIO0FEMU44OEg7RUFBa0wsNkNBQUE7RUFBNkMsc0JBQUE7QUMrTjdxSTtBRC9ObXNJO0VBQXlILDZDQUFBO0VBQTZDLHNCQUFBO0FDb096Mkk7QURwTyszSTtFQUE4QixlQUFBO0VBQWUsc0JBQUE7QUN5TzU2STtBRHpPaThJO0VBQXNCLGNBQUE7QUM2T3Y5STtBRDdPcStJO0VBQTBCLGlCQUFBO0FDaVAvL0k7QURqUGdoSjtFQUFrQyxjQUFBO0VBQWMsMEJBQUE7RUFBeUIsZ0NBQUE7QUN1UHpsSjtBRHZQeW5KO0VBQTBELHNCQUFBO0FDMlBucko7QUQzUHlzSjtFQUF3RCxtQkFBQTtBQytQandKO0FEL1BteEo7RUFBb1Asb0ZBQUE7RUFBb0YsaURBQUE7RUFBaUQsc0JBQUE7QUNxUTVvSztBRHJRa3FLO0VBQWlLLHNGQUFBO0VBQXNGLGlEQUFBO0VBQWlELHNCQUFBO0FDMlExOEs7QUQzUWcrSztFQUEwSixzRkFBQTtFQUFzRixpREFBQTtFQUFpRCxzQkFBQTtBQ2lSandMO0FEalJ1eEw7RUFBd0QsY0FBQTtBQ3FSLzBMO0FEclI2MUw7RUFBNEQsY0FBQTtBQ3lSejVMO0FEelJ1Nkw7RUFBb0UsMEJBQUE7RUFBeUIsZ0NBQUE7QUM4UnBnTTtBRDlSb2lNO0VBQWE7SUFBb1AsNkNBQUE7RUNtU255TTs7RURuU2cxTTtJQUFpSyw2Q0FBQTtFQ3VTai9NOztFRHZTOGhOO0lBQTBKLDRDQUFBO0VDMlN4ck47QUFDRjtBRDVTdXVOO0VBQXNELDBCQUFBO0FDK1M3eE47QUQvU3F6TjtFQUFzRCxjQUFBO0VBQWMsa0JBQUE7QUNvVHozTjtBRHBUMjROO0VBQWdQLDZDQUFBO0VBQTZDLHNCQUFBO0FDeVR4cU87QUR6VDhyTztFQUF3Siw2Q0FBQTtFQUE2QyxzQkFBQTtBQzhUbjRPO0FEOVR5NU87RUFBeUQsb0JBQUE7QUNrVWw5TztBRGxVcytPO0VBQXlELGNBQUE7RUFBYyxtQkFBQTtBQ3VVN2lQO0FEdlVna1A7RUFBc1AsNkNBQUE7RUFBNkMsc0JBQUE7QUM0VW4yUDtBRDVVeTNQO0VBQTJKLDZDQUFBO0VBQTZDLHNCQUFBO0FDaVZqa1E7QURqVnVsUTtFQUE0QyxlQUFBO0FDcVZub1E7QURyVmtwUTtFQUFnRSxtQkFBQTtFQUFtQixnQkFBQTtFQUFnQix1QkFBQTtFQUF1QixjQUFBO0VBQWMsc0JBQUE7QUM2VjF4UTtBRDdWZ3pRO0VBQThGLGVBQUE7QUNpVzk0UTtBRGpXNjVRO0VBQXdCLHFCQUFBO0FDcVdyN1E7QURyVzA4UTtFQUFlLGlEQUFBO0VBQWlELGVBQUE7RUFBZSxnQkFBQTtBQzJXemhSO0FEM1d5aVI7RUFBNEQsaURBQUE7RUFBaUQsZUFBQTtBQ2dYdHBSO0FEaFhxcVI7RUFBa0IsaURBQUE7QUNvWHZyUjtBRHBYd3VSO0VBQVksaURBQUE7QUN3WHB2UjtBRHhYcXlSO0VBQW9CLGVBQUE7QUM0WHp6UjtBRDVYdzBSO0VBQTBCLGlEQUFBO0FDZ1lsMlI7QURoWW01UjtFQUE2QixpREFBQTtFQUFpRCxlQUFBO0VBQWUsZ0JBQUE7QUNzWWgvUjtBRHRZZ2dTO0VBQThDLGlEQUFBO0FDMFk5aVM7QUQxWStsUztFQUFnQixlQUFBO0VBQWUsZ0JBQUE7QUMrWTluUztBRC9ZOG9TO0VBQTBCLG1CQUFBO0FDbVp4cVM7QURuWjJyUztFQUFzQixlQUFBO0FDdVpqdFM7QUR2Wmd1UztFQUF5QixlQUFBO0VBQWUsZ0JBQUE7QUM0Wnh3UztBRDVad3hTO0VBQWUsaURBQUE7QUNnYXZ5UztBRGhhdzFTO0VBQTZCLGlEQUFBO0VBQWlELGVBQUE7RUFBZSxnQkFBQTtBQ3NhcjdTO0FEdGFxOFM7RUFBNkcsd0RBQUE7RUFBd0Qsc0JBQUE7RUFBc0IsU0FBQTtBQzRhaG9UO0FENWF5b1Q7RUFBYSxpREFBQTtFQUFpRCxlQUFBO0VBQWUsZ0JBQUE7RUFBZ0IsbUJBQUE7QUNtYnR1VDtBRG5ieXZUO0VBQXFCLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixtQkFBQTtBQ3liN3lUO0FEemJnMFQ7RUFBZSxpREFBQTtBQzZiLzBUO0FEN2JnNFQ7RUFBaUIsaURBQUE7QUNpY2o1VDtBRGpjazhUO0VBQThCLGVBQUE7QUNxY2grVDtBRHJjKytUO0VBQXdDLG1CQUFBO0VBQW1CLGdCQUFBO0VBQWdCLHVCQUFBO0VBQXVCLGNBQUE7RUFBYyxzQkFBQTtBQzZjL2xVO0FEN2NxblU7RUFBdUQsZUFBQTtBQ2lkNXFVO0FEamQyclU7RUFBZ0MsZUFBQTtBQ3FkM3RVO0FEcmQwdVU7RUFBMEMsbUJBQUE7RUFBbUIsZ0JBQUE7RUFBZ0IsdUJBQUE7RUFBdUIsY0FBQTtFQUFjLHNCQUFBO0FDNmQ1MVU7QUQ3ZGszVTtFQUF5RCxlQUFBO0FDaWUzNlU7QURqZTA3VTtFQUE4QixpREFBQTtFQUFpRCxlQUFBO0VBQWUsZ0JBQUE7QUN1ZXhoVjtBRHZld2lWO0VBQXFDLGVBQUE7QUMyZTdrVjtBRDNlNGxWO0VBQStDLG1CQUFBO0VBQW1CLGdCQUFBO0VBQWdCLHVCQUFBO0VBQXVCLGNBQUE7RUFBYyxzQkFBQTtBQ21mbnRWO0FEbmZ5dVY7RUFBOEQsZUFBQTtBQ3VmdnlWO0FEdmZzelY7RUFBdUMsZUFBQTtBQzJmNzFWO0FEM2Y0MlY7RUFBaUQsbUJBQUE7RUFBbUIsZ0JBQUE7RUFBZ0IsdUJBQUE7RUFBdUIsY0FBQTtFQUFjLHNCQUFBO0FDbWdCcitWO0FEbmdCMi9WO0VBQWdFLGVBQUE7QUN1Z0Izalc7QUR2Z0Iwa1c7RUFBcUMsaURBQUE7RUFBaUQsZUFBQTtFQUFlLGdCQUFBO0FDNmdCL3FXO0FEN2dCK3JXO0VBQVksaURBQUE7RUFBaUQsZUFBQTtBQ2toQjV2VztBRGxoQjJ3VztFQUFvQix3REFBQTtFQUF3RCxzQkFBQTtBQ3VoQnYxVztBRHZoQjYyVztFQUFxQixpREFBQTtFQUFpRCxlQUFBO0FDNGhCbjdXO0FENWhCazhXO0VBQTRCLGNBQUE7RUFBYyxvQkFBQTtFQUFvQixrQkFBQTtFQUFrQixnQkFBQTtBQ21pQmxoWDtBRG5pQmtpWDtFQUFVLGlEQUFBO0FDdWlCNWlYO0FEdmlCNmxYO0VBQXFDLGdCQUFBO0VBQWdCLGVBQUE7QUM0aUJscFg7QUQ1aUJpcVg7RUFBWSxnQkFBQTtFQUFnQixrQkFBQTtBQ2lqQjdyWDtBRGpqQitzWDtFQUF3Qix3QkFBQTtBQ3FqQnZ1WDtBRHJqQit2WDtFQUFpQyxpQkFBQTtBQ3lqQmh5WDtBRHpqQml6WDtFQUFvQixrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixvQkFBQTtFQUFvQiw2REFBQTtFQUE0RCxtQkFBQTtBQ2lrQno3WDtBRGprQjQ4WDtFQUE4QyxhQUFBO0FDcWtCMS9YO0FEcmtCdWdZO0VBQXFCLFNBQUE7RUFBUyxtQkFBQTtFQUFtQixXQUFBO0VBQVcsWUFBQTtFQUFZLGdCQUFBO0VBQWdCLFVBQUE7RUFBVSxrQkFBQTtFQUFrQixVQUFBO0VBQVUsVUFBQTtFQUFVLHdCQUFBO0VBQXdCLHFCQUFBO0FDbWxCdnFZO0FEbmxCNHJZO0VBQW1ELG9CQUFBO0VBQW9CLE1BQUE7RUFBTSxPQUFBO0VBQU8sWUFBQTtFQUFZLFdBQUE7QUMybEI1eFk7QUQzbEJ1eVk7RUFBdUIsZUFBQTtFQUFlLGFBQUE7QUNnbUI3MFk7QURobUIwMVk7RUFBNkIsYUFBQTtBQ29tQnYzWTtBRHBtQm80WTtFQUE0QixhQUFBO0VBQWEsa0JBQUE7RUFBa0IsYUFBQTtBQzBtQi83WTtBRDFtQjQ4WTtFQUFrQixrQkFBQTtFQUFrQixvQkFBQTtFQUFvQixzQkFBQTtFQUFzQixhQUFBO0VBQWEsYUFBQTtFQUFhLGVBQUE7RUFBZSxnQkFBQTtBQ29uQm5rWjtBRHBuQm1sWjtFQUFzQixrQkFBQTtFQUFrQixNQUFBO0VBQU0sU0FBQTtFQUFTLE9BQUE7RUFBTyxRQUFBO0VBQVEsYUFBQTtFQUFhLG9CQUFBO0VBQW9CLHdDQUFBO0VBQXdDLDBEQUFBO0VBQTBELFVBQUE7QUNpb0I1eFo7QURqb0JzeVo7RUFBbUQsVUFBQTtBQ3FvQnoxWjtBRHJvQm0yWjtFQUE4QztJQUFtRCxZQUFBO0VDMG9CbDhaO0FBQ0Y7QUQzb0JnOVo7RUFBMkIsK0JBQUE7QUM4b0IzK1o7QUQ5b0JzZ2E7RUFBaUcsVUFBQTtBQ2twQnZtYTtBRGxwQmluYTtFQUE2QyxrQkFBQTtFQUFrQixhQUFBO0VBQWEsYUFBQTtFQUFhLHNCQUFBO0VBQXNCLGNBQUE7RUFBYyxlQUFBO0FDMnBCOXVhO0FEM3BCNnZhO0VBQXdCLGVBQUE7RUFBZSxXQUFBO0VBQVcsa0JBQUE7QUNpcUIveWE7QURqcUJpMGE7RUFBeUMsSUFBQTtBQ3FxQjEyYTtBRHJxQmkwYTtFQUF5QyxJQUFBO0FDcXFCMTJhO0FEcnFCZzNhO0VBQXVDLElBQUE7QUN3cUJ2NWE7QUR4cUJnM2E7RUFBdUMsSUFBQTtBQ3dxQnY1YTtBRHhxQjY1YTtFQUFvRCx1REFBQTtVQUFBLCtDQUFBO0FDMnFCajlhO0FEM3FCZ2diO0VBQTBELHFEQUFBO1VBQUEsNkNBQUE7QUMrcUIxamI7QUQvcUJ1bWI7RUFBK0IsWUFBQTtBQ21yQnRvYjtBRG5yQmtwYjtFQUF5Qyx5QkFBQTtFQUF5QixrQ0FBQTtFQUFrQyx1QkFBQTtFQUF1QiwyQkFBQTtBQzByQjd3YjtBRDFyQnd5YjtFQUFpRCx5QkFBQTtFQUF5QixrQ0FBQTtFQUFrQyxvQkFBQTtBQ2dzQnA1YjtBRGhzQnc2YjtFQUFvQixvQ0FBQTtBQ29zQjU3YjtBRHBzQjQ5YjtFQUFZLDBCQUFBO0FDd3NCeCtiO0FEeHNCOC9iO0VBQXdGLCtCQUFBO0FDNHNCdGxjO0FENXNCaW5jO0VBQTZFLCtCQUFBO0FDZ3RCOXJjO0FEaHRCeXRjO0VBQXVCLCtCQUFBO0VBQTJCLDBCQUFBO0FDcXRCM3djO0FEcnRCaXljO0VBQWdDLDBCQUFBO0FDeXRCajBjO0FEenRCdTFjO0VBQWdFLGNBQUE7QUM2dEJ2NWM7QUQ3dEJxNmM7RUFBK0QsY0FBQTtBQ2l1QnArYztBRGp1QmsvYztFQUE2RCxjQUFBO0FDcXVCL2lkO0FEcnVCNmpkO0VBQW9CLDBCQUFBO0FDeXVCamxkO0FEenVCdW1kO0VBQTJDLDBCQUFBO0FDNnVCbHBkO0FEN3VCd3FkO0VBQXFCLDBCQUFBO0FDaXZCN3JkO0FEanZCbXRkO0VBQTRCLGNBQUE7QUNxdkIvdWQ7QURydkI2dmQ7RUFBOEIsY0FBQTtBQ3l2QjN4ZDtBRHp2Qnl5ZDtFQUEwRixtQkFBQTtBQzZ2Qm40ZDtBRDd2QnM1ZDtFQUF3SixtQkFBQTtBQ2l3QjlpZTtBRGp3QmlrZTtFQUFvRixtQkFBQTtBQ3F3QnJwZTtBRHJ3QndxZTtFQUEwSCxtQkFBQTtBQ3l3Qmx5ZTtBRHp3QnF6ZTtFQUFrQix3SEFBQTtBQzZ3QnYwZTtBRDd3QjY3ZTtFQUFrQix5SEFBQTtBQ2l4Qi84ZTtBRGp4QnNrZjtFQUFrQix5SEFBQTtBQ3F4QnhsZjtBRHJ4QitzZjtFQUFrQix5SEFBQTtBQ3l4Qmp1ZjtBRHp4QncxZjtFQUFrQiwwSEFBQTtBQzZ4QjEyZjtBRDd4QmsrZjtFQUFrQiwwSEFBQTtBQ2l5QnAvZjtBRGp5QjRtZ0I7RUFBa0IsMkhBQUE7QUNxeUI5bmdCO0FEcnlCdXZnQjtFQUFrQiwySEFBQTtBQ3l5Qnp3Z0I7QUR6eUJrNGdCO0VBQWtCLDJIQUFBO0FDNnlCcDVnQjtBRDd5QjZnaEI7RUFBa0IsMkhBQUE7QUNpekIvaGhCO0FEanpCd3BoQjtFQUFtQiw0SEFBQTtBQ3F6QjNxaEI7QURyekJxeWhCO0VBQW1CLDRIQUFBO0FDeXpCeHpoQjtBRHp6Qms3aEI7RUFBbUIsNEhBQUE7QUM2ekJyOGhCO0FEN3pCK2ppQjtFQUFtQiw0SEFBQTtBQ2kwQmxsaUI7QURqMEI0c2lCO0VBQW1CLDRIQUFBO0FDcTBCL3RpQjtBRHIwQnkxaUI7RUFBbUIsNEhBQUE7QUN5MEI1MmlCO0FEejBCcytpQjtFQUFtQiw2SEFBQTtBQzYwQnovaUI7QUQ3MEJvbmpCO0VBQW1CLDZIQUFBO0FDaTFCdm9qQjtBRGoxQmt3akI7RUFBbUIsNkhBQUE7QUNxMUJyeGpCO0FEcjFCZzVqQjtFQUFtQiw2SEFBQTtBQ3kxQm42akI7QUR6MUI4aGtCO0VBQW1CLDhIQUFBO0FDNjFCamprQjtBRDcxQjZxa0I7RUFBbUIsOEhBQUE7QUNpMkJoc2tCO0FEajJCNHprQjtFQUFtQiw4SEFBQTtBQ3EyQi8wa0I7QURyMkIyOGtCO0VBQW1CLDhIQUFBO0FDeTJCOTlrQjtBRHoyQjBsbEI7RUFBbUIsOEhBQUE7QUM2MkI3bWxCO0FENzJCeXVsQjtFQUFvQix5QkFBQTtFQUF5QiwwQkFBQTtBQ2szQnR4bEI7QURsM0I0eWxCO0VBQXlCLGFBQUE7QUNzM0JyMGxCO0FEdDNCazFsQjtFQUF3QixnQkFBQTtFQUFnQiwwQkFBQTtBQzIzQjEzbEI7QUQzM0JnNWxCO0VBQXNELDBIQUFBO0FDKzNCdDhsQjtBRC8zQjhqbUI7RUFBOEUsZ0JBQUE7QUNtNEI1b21CO0FEbjRCNHBtQjtFQUF3RywwQkFBQTtBQ3U0QnB3bUI7QUR2NEIweG1CO0VBQW1CLFdBQUE7RUFBVyxtQkFBQTtBQzQ0Qnh6bUI7QUQ1NEIyMG1CO0VBQTZDLGtCQUFBO0VBQWtCLGdCQUFBO0FDaTVCMTRtQjtBRGo1QjA1bUI7RUFBcUMsbUJBQUE7RUFBbUIsV0FBQTtBQ3M1Qmw5bUI7QUR0NUI2OW1CO0VBQW1DLFdBQUE7RUFBVyxtQkFBQTtBQzI1QjNnbkI7QUQzNUI4aG5CO0VBQVcsa0JBQUE7QUMrNUJ6aW5CO0FELzVCMmpuQjtFQUFxQyxhQUFBO0FDbTZCaG1uQjtBRG42QjZtbkI7RUFBdUMsbUJBQUE7RUFBbUIsMEJBQUE7QUN3NkJ2cW5CO0FEeDZCNnJuQjtFQUFtQixrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixxQkFBQTtFQUFxQixrQkFBQTtFQUFrQix1Q0FBQTtFQUF1QyxxQkFBQTtFQUFxQixnQkFBQTtFQUFnQixtQkFBQTtFQUFtQix1QkFBQTtFQUF1QixvQkFBQTtBQ3E3Qmo1bkI7QURyN0JxNm5CO0VBQW1GLGdCQUFBO0FDeTdCeC9uQjtBRHo3Qndnb0I7RUFBb0MsZUFBQTtBQzY3QjVpb0I7QUQ3N0Iyam9CO0VBQW9DLFdBQUE7RUFBVyxZQUFBO0VBQVksaUJBQUE7QUNtOEJ0bm9CO0FEbjhCdW9vQjtFQUFvRCxTQUFBO0FDdThCM3JvQjtBRHY4Qm9zb0I7RUFBb0QsWUFBQTtBQzI4Qnh2b0I7QUQzOEJvd29CO0VBQXFELFdBQUE7QUMrOEJ6em9CO0FELzhCbzBvQjtFQUErRCxVQUFBO0VBQVUsWUFBQTtBQ285Qjc0b0I7QURwOUJ5NW9CO0VBQW9ELFlBQUE7QUN3OUI3OG9CO0FEeDlCeTlvQjtFQUE4RCxXQUFBO0VBQVcsV0FBQTtBQzY5QmxpcEI7QUQ3OUI2aXBCO0VBQXVFLFVBQUE7QUNpK0JwbnBCO0FEaitCOG5wQjtFQUFpRixVQUFBO0VBQVUsV0FBQTtBQ3MrQnp0cEI7QUR0K0JvdXBCO0VBQXNFLFdBQUE7QUMwK0IxeXBCO0FEMStCcXpwQjtFQUFnRixXQUFBO0VBQVcsVUFBQTtBQysrQmg1cEI7QUQvK0IwNXBCO0VBQXFDLFdBQUE7RUFBVyxZQUFBO0VBQVksaUJBQUE7QUNxL0J0OXBCO0FEci9CdStwQjtFQUFxRCxVQUFBO0FDeS9CNWhxQjtBRHovQnNpcUI7RUFBcUQsYUFBQTtBQzYvQjNscUI7QUQ3L0J3bXFCO0VBQXNELFdBQUE7QUNpZ0M5cHFCO0FEamdDeXFxQjtFQUFnRSxVQUFBO0VBQVUsWUFBQTtBQ3NnQ252cUI7QUR0Z0MrdnFCO0VBQXFELFlBQUE7QUMwZ0NwenFCO0FEMWdDZzBxQjtFQUErRCxXQUFBO0VBQVcsV0FBQTtBQytnQzE0cUI7QUQvZ0NxNXFCO0VBQXdFLFdBQUE7QUNtaEM3OXFCO0FEbmhDdytxQjtFQUFrRixVQUFBO0VBQVUsWUFBQTtBQ3doQ3BrckI7QUR4aENnbHJCO0VBQXVFLFlBQUE7QUM0aEN2cHJCO0FENWhDbXFyQjtFQUFpRixXQUFBO0VBQVcsV0FBQTtBQ2lpQy92ckI7QURqaUMwd3JCO0VBQW9DLFdBQUE7RUFBVyxZQUFBO0VBQVksaUJBQUE7QUN1aUNyMHJCO0FEdmlDczFyQjtFQUFvRCxVQUFBO0FDMmlDMTRyQjtBRDNpQ281ckI7RUFBb0QsYUFBQTtBQytpQ3g4ckI7QUQvaUNxOXJCO0VBQXFELFdBQUE7QUNtakMxZ3NCO0FEbmpDcWhzQjtFQUErRCxVQUFBO0VBQVUsWUFBQTtBQ3dqQzlsc0I7QUR4akMwbXNCO0VBQW9ELFlBQUE7QUM0akM5cHNCO0FENWpDMHFzQjtFQUE4RCxXQUFBO0VBQVcsV0FBQTtBQ2lrQ252c0I7QURqa0M4dnNCO0VBQXVFLFdBQUE7QUNxa0NyMHNCO0FEcmtDZzFzQjtFQUFpRixVQUFBO0VBQVUsWUFBQTtBQzBrQzM2c0I7QUQxa0N1N3NCO0VBQXNFLFlBQUE7QUM4a0M3L3NCO0FEOWtDeWd0QjtFQUFnRixXQUFBO0VBQVcsV0FBQTtBQ21sQ3BtdEI7QURubEMrbXRCO0VBQTRCLDZIQUFBO0VBQTJILGdCQUFBO0VBQWdCLDBCQUFBO0FDeWxDdHh0QjtBRHpsQzR5dEI7RUFBaUQsY0FBQTtFQUFjLHVCQUFBO0FDOGxDMzJ0QjtBRDlsQ2s0dEI7RUFBcUYsY0FBQTtBQ2ttQ3Y5dEI7QURsbUNxK3RCO0VBQWtGLGNBQUE7QUNzbUN2anVCO0FEdG1DcWt1QjtFQUE0RSxjQUFBO0FDMG1DanB1QjtBRDFtQytwdUI7RUFBMGIsMEJBQUE7QUM4bUN6bHZCO0FEOW1DK212QjtFQUFtSyx5QkFBQTtBQ2tuQ2x4dkI7QURsbkMyeXZCO0VBQWdLLHlCQUFBO0FDc25DMzh2QjtBRHRuQ28rdkI7RUFBMEoseUJBQUE7QUMwbkM5bndCO0FEMW5DdXB3QjtFQUE2Siw2QkFBQTtBQzhuQ3B6d0I7QUQ5bkNpMXdCO0VBQTZHLFlBQUE7RUFBVyw4QkFBQTtBQ21vQ3o4d0I7QURub0N1K3dCO0VBQTBCLGdCQUFBO0FDdW9Damd4QjtBRHZvQ2loeEI7RUFBb0MsaUNBQUE7QUMyb0NyanhCO0FEM29Da2x4QjtFQUEyRCwwQkFBQTtFQUFzQixzQkFBQTtBQ2dwQ25xeEI7QURocEN5cnhCO0VBQTJHLFdBQUE7QUNvcENweXhCO0FEcHBDK3l4QjtFQUF1RyxXQUFBO0FDd3BDdDV4QjtBRHhwQ2k2eEI7RUFBK0YsV0FBQTtBQzRwQ2hneUI7QUQ1cEMyZ3lCO0VBQW9qQiwwQkFBQTtBQ2dxQy9qekI7QURocUNxbHpCO0VBQTJHLHlCQUFBO0FDb3FDaHN6QjtBRHBxQ3l0ekI7RUFBdUcseUJBQUE7QUN3cUNoMHpCO0FEeHFDeTF6QjtFQUErRix5QkFBQTtBQzRxQ3g3ekI7QUQ1cUNpOXpCO0VBQW9qQixxQ0FBQTtBQ2dyQ3JnMUI7QURockNzaTFCO0VBQTJMLDBDQUFBO0FDb3JDanUxQjtBRHByQ3V3MUI7RUFBdUwsMENBQUE7QUN3ckM5NzFCO0FEeHJDbysxQjtFQUErSywwQ0FBQTtBQzRyQ25wMkI7QUQ1ckN5cjJCO0VBQWlHLHdIQUFBO0FDZ3NDMXgyQjtBRGhzQ2c1MkI7RUFBaUQseUhBQUE7QUNvc0NqODJCO0FEcHNDd2ozQjtFQUF3RSwySEFBQTtBQ3dzQ2hvM0I7QUR4c0N5djNCO0VBQTJELHdIQUFBO0FDNHNDcHozQjtBRDVzQzA2M0I7RUFBbUYsMkhBQUE7QUNndEM3LzNCO0FEaHRDc240QjtFQUFpSSw0SEFBQTtBQ290Q3Z2NEI7QURwdENpMzRCO0VBQXVHLHdIQUFBO0FDd3RDeDk0QjtBRHh0QzhrNUI7RUFBdUQseUhBQUE7QUM0dENybzVCO0FENXRDNHY1QjtFQUFpSCxnQkFBQTtBQ2d1QzcyNUI7QURodUM2MzVCO0VBQW1CLDBCQUFBO0FDb3VDaDU1QjtBRHB1Q3M2NUI7RUFBb0QscUNBQUE7QUN3dUMxOTVCO0FEeHVDMi81QjtFQUF1QywwQkFBQTtFQUFzQixnQkFBQTtBQzZ1Q3hqNkI7QUQ3dUN3azZCO0VBQXdFLHNCQUFBO0FDaXZDaHA2QjtBRGp2Q3NxNkI7RUFBbUYsMENBQUE7QUNxdkN6djZCO0FEcnZDK3g2QjtFQUE2RixpQkFBQTtFQUFpQiwyQ0FBQTtBQzB2Qzc0NkI7QUQxdkNvNzZCO0VBQThHLGlCQUFBO0VBQWlCLGtCQUFBO0VBQWtCLHlDQUFBO0FDZ3dDcms3QjtBRGh3QzBtN0I7RUFBMkIseUJBQUE7RUFBeUIsMEJBQUE7QUNxd0M5cDdCO0FEcndDb3I3QjtFQUFpRSwwQkFBQTtBQ3l3Q3J2N0I7QUR6d0MydzdCO0VBQTRCLDBCQUFBO0VBQXNCLHNCQUFBO0FDOHdDN3o3QjtBRDl3Q20xN0I7RUFBa0UsZ0JBQUE7QUNreENyNTdCO0FEbHhDcTY3QjtFQUFzRCx5QkFBQTtBQ3N4QzM5N0I7QUR0eENvLzdCO0VBQWlILHFDQUFBO0FDMHhDcm04QjtBRDF4Q3NvOEI7RUFBVSxnQkFBQTtFQUFnQiwwQkFBQTtBQyt4Q2hxOEI7QUQveENzcjhCO0VBQXdDLHlIQUFBO0FDbXlDOXQ4QjtBRG55Q3ExOEI7RUFBc0Qsd0hBQUE7QUN1eUMzNDhCO0FEdnlDaWc5QjtFQUFtQiwwQkFBQTtBQzJ5Q3BoOUI7QUQzeUMwaTlCO0VBQW9CLGlDQUFBO0FDK3lDOWo5QjtBRC95QzJsOUI7RUFBd0IsYUFBQTtBQ216Q25uOUI7QURuekNnbzlCO0VBQTZCLDBCQUFBO0FDdXpDN3A5QjtBRHZ6Q3VyOUI7RUFBd0IseUJBQUE7QUMyekMvczlCO0FEM3pDd3U5QjtFQUE0SCx5QkFBQTtBQyt6Q3AyOUI7QUQvekM2MzlCO0VBQTBILHlCQUFBO0FDbTBDdi85QjtBRG4wQ2doK0I7RUFBc0gseUJBQUE7QUN1MEN0bytCO0FEdjBDK3ArQjtFQUFnSix5QkFBQTtBQzIwQy95K0I7QUQzMEN3MCtCO0VBQXNFLHFCQUFBO0FDKzBDOTQrQjtBRC8wQ202K0I7RUFBMkMsMEJBQUE7QUNtMUM5OCtCO0FEbjFDbysrQjtFQUFrQyxzQkFBQTtBQ3UxQ3RnL0I7QUR2MUM0aC9CO0VBQW1LLG1CQUFBO0FDMjFDL3IvQjtBRDMxQ2t0L0I7RUFBaUssbUJBQUE7QUMrMUNuMy9CO0FELzFDczQvQjtFQUE2SixtQkFBQTtBQ20yQ25pZ0M7QURuMkNzamdDO0VBQTRCLHlCQUFBO0VBQXlCLDBCQUFBO0FDdzJDM21nQztBRHgyQ2lvZ0M7RUFBNkMsMEJBQUE7RUFBc0IsWUFBQTtBQzYyQ3BzZ0M7QUQ3MkMrc2dDO0VBQTJELHlIQUFBO0FDaTNDMXdnQztBRGozQ2k0Z0M7RUFBMkUsYUFBQTtBQ3EzQzU4Z0M7QURyM0N3OWdDO0VBQThDLFlBQUE7QUN5M0N0Z2hDO0FEejNDaWhoQztFQUFtQyxnQkFBQTtBQzYzQ3BqaEM7QUQ3M0Nva2hDO0VBQTBELHlCQUFBO0VBQXlCLFdBQUE7QUNrNEN2cGhDO0FEbDRDa3FoQztFQUEyRSxXQUFBO0VBQVcsWUFBQTtBQ3U0Q3h2aEM7QUR2NENtd2hDO0VBQThFLDBDQUFBO0FDMjRDajFoQztBRDM0Q3UzaEM7RUFBdUQseUJBQUE7RUFBeUIsV0FBQTtBQ2c1Q3Y4aEM7QURoNUNrOWhDO0VBQXdFLFdBQUE7RUFBVyxZQUFBO0FDcTVDcmlpQztBRHI1Q2dqaUM7RUFBMkUsMENBQUE7QUN5NUMzbmlDO0FEejVDaXFpQztFQUF5RCx5QkFBQTtFQUF5QixXQUFBO0FDODVDbnZpQztBRDk1Qzh2aUM7RUFBMEUsV0FBQTtFQUFXLFlBQUE7QUNtNkNuMWlDO0FEbjZDODFpQztFQUE2RSwwQ0FBQTtBQ3U2QzM2aUM7QUR2NkNpOWlDO0VBQVcsZ0JBQUE7QUMyNkM1OWlDO0FEMzZDNCtpQztFQUF1SixtQkFBQTtBQys2Q25vakM7QUQvNkNzcGpDO0VBQXdGLHdDQUFBO0FDbTdDOXVqQztBRG43Q2t4akM7RUFBaUIsMEJBQUE7QUN1N0NueWpDO0FEdjdDeXpqQztFQUEyQiwwQkFBQTtBQzI3Q3AxakM7QUQzN0MwMmpDO0VBQW9CLHFDQUFBO0FDKzdDOTNqQztBRC83Qys1akM7RUFBK0gsMEJBQUE7QUNtOEM5aGtDO0FEbjhDb2prQztFQUEyQiwwQkFBQTtBQ3U4Qy9ra0M7QUR2OENxbWtDO0VBQTBDLCtCQUFBO0FDMjhDL29rQztBRDM4QzBxa0M7RUFBeUIsMEJBQUE7QUMrOENuc2tDO0FELzhDeXRrQztFQUFnQywwQkFBQTtFQUFzQix5QkFBQTtBQ285Qy93a0M7QURwOUN3eWtDO0VBQTZGLDBCQUFBO0FDdzlDcjRrQztBRHg5QzI1a0M7RUFBaVcscUNBQUE7QUM0OUM1dmxDO0FENTlDNnhsQztFQUEwRCxpQ0FBQTtBQ2crQ3YxbEM7QURoK0NvM2xDO0VBQXNGLGlDQUFBO0FDbytDMThsQztBRHArQ3UrbEM7RUFBNEIseUJBQUE7RUFBeUIsV0FBQTtBQ3krQzVobUM7QUR6K0N1aW1DO0VBQXdELHdDQUFBO0FDNitDL2xtQztBRDcrQ21vbUM7RUFBb0QsZ0NBQUE7QUNpL0N2cm1DO0FEai9DdXRtQztFQUF3QiwwSEFBQTtFQUF3SCxzQkFBQTtFQUFzQiwwQkFBQTtBQ3UvQzczbUM7QUR2L0NtNW1DO0VBQStELHlCQUFBO0VBQXlCLFdBQUE7QUM0L0MzK21DO0FENS9Dcy9tQztFQUEyRix5Q0FBQTtBQ2dnRGpsbkM7QURoZ0Rzbm5DO0VBQXVGLGdDQUFBO0FDb2dEN3NuQztBRHBnRDZ1bkM7RUFBNkQseUJBQUE7RUFBeUIsV0FBQTtBQ3lnRG4wbkM7QUR6Z0Q4MG5DO0VBQXlGLHdDQUFBO0FDNmdEdjZuQztBRDdnRDI4bkM7RUFBcUYsZ0NBQUE7QUNpaERoaW9DO0FEamhEZ2tvQztFQUE4Qix3SEFBQTtBQ3FoRDlsb0M7QURyaERvdG9DO0VBQThCLGNBQUE7QUN5aERsdm9DO0FEemhEZ3dvQztFQUF5QyxjQUFBO0FDNmhEenlvQztBRDdoRHV6b0M7RUFBdUMsY0FBQTtBQ2lpRDkxb0M7QURqaUQ0Mm9DO0VBQXNCLDhIQUFBO0VBQTRILGdCQUFBO0VBQWdCLDBCQUFBO0FDdWlEOWdwQztBRHZpRG9pcEM7RUFBYSxxQ0FBQTtBQzJpRGpqcEM7QUQzaURrbHBDO0VBQXNCLHVDQUFBO0FDK2lEeG1wQztBRC9pRDJvcEM7RUFBcUIsZ0JBQUE7RUFBZ0IsMEJBQUE7QUNvakRocnBDO0FEcGpEc3NwQztFQUFtRCx5SEFBQTtBQ3dqRHp2cEM7QUR4akRnM3BDO0VBQWdCLHFDQUFBO0FDNGpEaDRwQztBRDVqRGk2cEM7RUFBbVMsK0JBQUE7QUNna0Rwc3FDO0FEaGtEK3RxQztFQUFvQjtJQUFvRyxnQkFBQTtFQ3FrRHIxcUM7QUFDRjtBRHRrRHcycUM7RUFBa0MsMEJBQUE7QUN5a0QxNHFDO0FEemtEZzZxQztFQUF3RSwwQkFBQTtBQzZrRHgrcUM7QUQ3a0Q4L3FDO0VBQWdELDBCQUFBO0FDaWxEOWlyQztBRGpsRG9rckM7RUFBMEssY0FBQTtBQ3FsRDl1ckM7QURybEQ0dnJDO0VBQXNCLHlCQUFBO0FDeWxEbHhyQztBRHpsRHV5ckM7RUFBVSx5QkFBQTtBQzZsRGp6ckM7QUQ3bERzMHJDO0VBQWtELGNBQUE7QUNpbUR4M3JDO0FEam1EczRyQztFQUE2RCxjQUFBO0FDcW1EbjhyQztBRHJtRGk5ckM7RUFBMkQsY0FBQTtBQ3ltRDVnc0M7QUR6bUQwaHNDO0VBQTZDLGNBQUE7QUM2bUR2a3NDO0FEN21EcWxzQztFQUF1QixxQ0FBQTtBQ2luRDVtc0M7QURqbkQ2b3NDO0VBQW1ELHlCQUFBO0FDcW5EaHNzQztBRHJuRHl0c0M7RUFBOEQseUJBQUE7QUN5bkR2eHNDO0FEem5EZ3pzQztFQUE0RCx5QkFBQTtBQzZuRDUyc0M7QUQ3bkRxNHNDO0VBQTZHLGNBQUE7QUNpb0RsL3NDO0FEam9EZ2d0QztFQUF3SCxjQUFBO0FDcW9EeG50QztBRHJvRHNvdEM7RUFBc0gsY0FBQTtBQ3lvRDV2dEM7QUR6b0Qwd3RDO0VBQTZELGNBQUE7QUM2b0R2MHRDO0FEN29EcTF0QztFQUFxSyxjQUFBO0FDaXBEMS90QztBRGpwRHdndUM7RUFBdUkseUJBQUE7QUNxcEQvb3VDO0FEcnBEd3F1QztFQUFXLGNBQUE7QUN5cERucnVDO0FEenBEaXN1QztFQUF3RCwwQkFBQTtBQzZwRHp2dUM7QUQ3cEQrd3VDO0VBQTRDLDBCQUFBO0FDaXFEM3p1QztBRGpxRGkxdUM7RUFBNEQscUNBQUE7QUNxcUQ3NHVDO0FEcnFEODZ1QztFQUFvRiw0R0FBQTtFQUE0Ryx5QkFBQTtFQUF5QiwyQkFBQTtBQzJxRHZvdkM7QUQzcURrcXZDO0VBQThELHFDQUFBO0FDK3FEaHV2QztBRC9xRGl3dkM7RUFBc0YsNEdBQUE7RUFBNEcseUJBQUE7RUFBeUIsMkJBQUE7QUNxckQ1OXZDO0FEcnJEdS92QztFQUFxRCxxQ0FBQTtBQ3lyRDVpd0M7QUR6ckQ2a3dDO0VBQTZFLHFDQUFBO0FDNnJEMXB3QztBRDdyRDJyd0M7RUFBa0UscUNBQUE7QUNpc0Q3dndDO0FEanNEOHh3QztFQUE4RSwwQkFBQTtBQ3FzRDUyd0M7QURyc0RrNHdDO0VBQTBGLDZCQUFBO0FDeXNENTl3QztBRHpzRHkvd0M7RUFBMkQsMEJBQUE7QUM2c0RwanhDO0FEN3NEMGt4QztFQUFpRSwwQkFBQTtBQ2l0RDNveEM7QURqdERpcXhDO0VBQTZFLGNBQUE7QUNxdEQ5dXhDO0FEcnRENHZ4QztFQUF3RixjQUFBO0FDeXREcDF4QztBRHp0RGsyeEM7RUFBc0YsY0FBQTtBQzZ0RHg3eEM7QUQ3dERzOHhDO0VBQStHLGNBQUE7QUNpdURyanlDO0FEanVEbWt5QztFQUFpRiwwQkFBQTtBQ3F1RHBweUM7QURydUQwcXlDO0VBQW1GLDBCQUFBO0FDeXVEN3Z5QztBRHp1RG14eUM7RUFBc0IsY0FBQTtBQzZ1RHp5eUM7QUQ3dUR1enlDO0VBQXFCLGNBQUE7QUNpdkQ1MHlDO0FEanZEMDF5QztFQUFtQixjQUFBO0FDcXZENzJ5QztBRHJ2RDIzeUM7RUFBb0UsMEJBQUE7QUN5dkQvN3lDO0FEenZEcTl5QztFQUF3SCwwQkFBQTtBQzZ2RDdrekM7QUQ3dkRtbXpDO0VBQW1CLG9CQUFBO0FDaXdEdG56QztBRGp3RDBvekM7RUFBZ0MsMEJBQUE7QUNxd0QxcXpDO0FEcndEMG96QztFQUFnQywwQkFBQTtBQ3F3RDFxekM7QURyd0Rnc3pDO0VBQXFDLDBCQUFBO0FDeXdEcnV6QztBRHp3RDJ2ekM7RUFBOEMsMEJBQUE7QUM2d0R6eXpDO0FEN3dEK3p6QztFQUF5QywwQkFBQTtBQ2l4RHgyekM7QURqeEQ4M3pDO0VBQStCLG9CQUFBO0FDcXhENzV6QztBRHJ4RGk3ekM7RUFBd0Usb0JBQUE7QUN5eER6L3pDO0FEenhENmcwQztFQUEyRixjQUFBO0FDNnhEeG0wQztBRDd4RHNuMEM7RUFBOEIsMEJBQUE7QUNpeURwcDBDO0FEanlEMHEwQztFQUFnQywwQkFBQTtBQ3F5RDFzMEM7QURyeURndTBDO0VBQThCLDBCQUFBO0FDeXlEOXYwQztBRHp5RG94MEM7RUFBd0Isc0JBQUE7QUM2eUQ1eTBDO0FEN3lEazAwQztFQUFnTSwrQkFBQTtBQ2l6RGxnMUM7QURqekQ2aDFDO0VBQStHLCtCQUFBO0FDcXpENW8xQztBRHJ6RHVxMUM7RUFBZ0IsZ0JBQUE7QUN5ekR2cjFDO0FEenpEdXMxQztFQUE4QywwSEFBQTtBQzZ6RHJ2MUM7QUQ3ekQ2MjFDO0VBQWUsdUJBQUE7RUFBdUIsMEJBQUE7QUNrMERuNTFDO0FEbDBEeTYxQztFQUF5RCwwQkFBQTtBQ3MwRGwrMUM7QUR0MER3LzFDO0VBQXdFLDBCQUFBO0FDMDBEaGsyQztBRDEwRHNsMkM7RUFBdUwsK0JBQUE7QUM4MEQ3dzJDO0FEOTBEd3kyQztFQUFlLGdCQUFBO0FDazFEdnoyQztBRGwxRHUwMkM7RUFBNEQsMEJBQUE7QUNzMURuNDJDO0FEdDFEeTUyQztFQUFrRCx5Q0FBQTtFQUFxQywyQ0FBQTtBQzIxRGgvMkM7QUQzMUR1aDNDO0VBQXlDLHlDQUFBO0FDKzFEaGszQztBRC8xRHFtM0M7RUFBdU0saUNBQUE7QUNtMkQ1eTNDO0FEbjJEeTAzQztFQUE2QixhQUFBO0FDdTJEdDIzQztBRHYyRG0zM0M7RUFBeUIseUJBQUE7QUMyMkQ1NDNDO0FEMzJEcTYzQztFQUE4Qix5QkFBQTtBQysyRG44M0M7QUQvMkQ0OTNDO0VBQTBELGFBQUE7QUNtM0R0aDRDO0FEbjNEbWk0QztFQUFzRCx5QkFBQTtBQ3UzRHpsNEM7QUR2M0RrbjRDO0VBQTJELHlCQUFBO0FDMjNEN3E0QztBRDMzRHNzNEM7RUFBd0QsYUFBQTtBQyszRDl2NEM7QUQvM0QydzRDO0VBQW9ELHlCQUFBO0FDbTREL3o0QztBRG40RHcxNEM7RUFBeUQseUJBQUE7QUN1NERqNTRDO0FEdjREMDY0QztFQUFpRCxlQUFBO0FDMjREMzk0QztBRDM0RDArNEM7RUFBdUUsZUFBQTtBQys0RGpqNUM7QUQvNERnazVDO0VBQW1FLGVBQUE7QUNtNURubzVDO0FEbjVEa3A1QztFQUF3QixpQ0FBQTtBQ3U1RDFxNUM7QUR2NUR1czVDO0VBQXdFLHFCQUFBO0FDMjVEL3c1QztBRDM1RG95NUM7RUFBMlMseUJBQUE7QUMrNUQvazZDO0FELzVEd202QztFQUF1RSxxQkFBQTtBQ202RC9xNkM7QURuNkRvczZDO0VBQXVTLHlCQUFBO0FDdTZEMys2QztBRHY2RG9nN0M7RUFBcUUscUJBQUE7QUMyNkR6azdDO0FEMzZEOGw3QztFQUErUix5QkFBQTtBQys2RDczN0M7QUQvNkRzNTdDO0VBQTRJLGlDQUFBO0FDbTdEbGk4QztBRG43RCtqOEM7RUFBd0kscUNBQUE7QUN1N0R2czhDO0FEdjdEd3U4QztFQUE4RCwwQkFBQTtBQzI3RHR5OEM7QUQzN0Q0ejhDO0VBQXNDLHNCQUFBO0FDKzdEbDI4QztBRC83RHczOEM7RUFBa0IsMEJBQUE7QUNtOEQxNDhDO0FEbjhEZzY4QztFQUF3QiwwQkFBQTtBQ3U4RHg3OEM7QUR2OEQ4ODhDO0VBQXVDLDBCQUFBO0FDMjhEci84QztBRDM4RDJnOUM7RUFBa0IsMEJBQUE7QUMrOEQ3aDlDO0FELzhEbWo5QztFQUFrQixnQkFBQTtBQ205RHJrOUM7QURuOURxbDlDO0VBQWdELDBIQUFBO0FDdTlEcm85QztBRHY5RDZ2OUM7RUFBcUUsK0JBQUE7QUMyOURsMDlDO0FEMzlENjE5QztFQUEwRCxjQUFBO0FDKzlEdjU5QztBRC85RHE2OUM7RUFBeUQsY0FBQTtBQ20rRDk5OUM7QURuK0Q0KzlDO0VBQXVELGNBQUE7QUN1K0RuaStDO0FEditEaWorQztFQUFpRSxjQUFBO0FDMitEbG4rQztBRDMrRGdvK0M7RUFBa0UsMEJBQUE7QUMrK0RscytDO0FELytEd3QrQztFQUFzQix5QkFBQTtFQUF5QiwwQkFBQTtBQ28vRHZ3K0M7QURwL0Q2eCtDO0VBQVksc0JBQUE7RUFBc0IsMEJBQUE7QUN5L0QveitDO0FEei9EcTErQztFQUE0QixzQkFBQTtBQzYvRGozK0M7QUQ3L0R1NCtDO0VBQWtDLDZIQUFBO0FDaWdFejYrQztBRGpnRW9pL0M7RUFBaUIsMkNBQUE7QUNxZ0Vyai9DO0FEcmdFNGwvQztFQUFnQywwQ0FBQTtFQUFzQyxrQkFBQTtBQzBnRWxxL0M7QUQxZ0Vvci9DO0VBQTJCLDBDQUFBO0VBQXNDLGtCQUFBO0FDK2dFcnYvQztBRC9nRXV3L0M7RUFBMEMsaUJBQUE7RUFBaUIsMkNBQUE7QUNvaEVsMC9DO0FEcGhFeTIvQztFQUFzQyxvQ0FBQTtBQ3doRS80L0M7QUR4aEUrNi9DO0VBQXNELHlCQUFBO0FDNGhFcisvQztBRDVoRTgvL0M7RUFBb0QsMENBQUE7QUNnaUVsamdEO0FEaGlFd2xnRDtFQUFrRCx5QkFBQTtBQ29pRTFvZ0Q7QURwaUVtcWdEO0VBQWtFLHlCQUFBO0FDd2lFcnVnRDtBRHhpRTh2Z0Q7RUFBZ0UseUNBQUE7QUM0aUU5emdEO0FENWlFbTJnRDtFQUE4RCx5QkFBQTtBQ2dqRWo2Z0Q7QURoakUwN2dEO0VBQStELHlCQUFBO0FDb2pFei9nRDtBRHBqRWtoaEQ7RUFBNkQseUNBQUE7QUN3akUva2hEO0FEeGpFb25oRDtFQUEyRCx5QkFBQTtBQzRqRS9xaEQ7QUQ1akV3c2hEO0VBQXdELHNCQUFBO0FDZ2tFaHdoRDtBRGhrRXN4aEQ7RUFBd0IseUhBQUE7RUFBdUgseUJBQUE7QUNxa0VyNmhEO0FEcmtFODdoRDtFQUFzQixxQ0FBQTtBQ3lrRXA5aEQ7QUR6a0VxL2hEO0VBQTZCLHFDQUFBO0FDNmtFbGhpRDtBRDdrRW1qaUQ7RUFBd0cseUJBQUE7QUNpbEUzcGlEO0FEamxFb3JpRDtFQUEwQyxXQUFBO0FDcWxFOXRpRDtBRHJsRXl1aUQ7RUFBcUcseUJBQUE7QUN5bEU5MGlEO0FEemxFdTJpRDtFQUF5QyxXQUFBO0FDNmxFaDVpRDtBRDdsRTI1aUQ7RUFBK0YseUJBQUE7QUNpbUUxL2lEO0FEam1FbWhqRDtFQUF1QyxXQUFBO0FDcW1FMWpqRDtBRHJtRXFrakQ7RUFBdUIseUNBQUE7QUN5bUU1bGpEO0FEem1FaW9qRDtFQUF5RixxQ0FBQTtBQzZtRTF0akQ7QUQ3bUUydmpEO0VBQXFJLHFDQUFBO0FDaW5FaDRqRDtBRGpuRWk2akQ7RUFBd0QscUNBQUE7QUNxbkV6OWpEO0FEcm5FMC9qRDtFQUE2QyxxQ0FBQTtBQ3luRXZpa0Q7QUR6bkV3a2tEO0VBQW9KLHFDQUFBO0FDNm5FNXRrRDtBRDduRTZ2a0Q7RUFBNEsscUNBQUE7QUNpb0V6NmtEO0FEam9FMDhrRDtFQUE2RSxpQ0FBQTtFQUE2Qiw2QkFBQTtBQ3NvRXBqbEQ7QUR0b0VpbGxEO0VBQTRLLGlDQUFBO0FDMG9FN3ZsRDtBRDFvRTB4bEQ7RUFBb04saUNBQUE7QUM4b0U5K2xEO0FEOW9FMmdtRDtFQUFpRCxnQ0FBQTtBQ2twRTVqbUQ7QURscEV3bG1EO0VBQXlDLDZIQUFBO0VBQTZILG1JQUFBO0FDdXBFOXZtRDtBRHZwRWk0bUQ7RUFBdUMsOEhBQUE7QUMycEV4Nm1EO0FEM3BFc2luRDtFQUFrRyxxQ0FBQTtBQytwRXhvbkQ7QUQvcEV5cW5EO0VBQW9CO0lBQXVCLGdCQUFBO0VDb3FFbHRuRDtBQUNGO0FEcnFFcXVuRDtFQUFxRSwwQkFBQTtBQ3dxRTF5bkQ7QUR4cUVnMG5EO0VBQWdDLHFDQUFBO0VBQWlDLFdBQUE7QUM2cUVqNG5EO0FEN3FFNDRuRDtFQUErSCx5QkFBQTtFQUF5QixXQUFBO0FDa3JFcGlvRDtBRGxyRStpb0Q7RUFBNEMsNkJBQUE7RUFBNkIsY0FBQTtBQ3VyRXhub0Q7QUR2ckVzb29EO0VBQXVELDBCQUFBO0FDMnJFN3JvRDtBRDNyRW10b0Q7RUFBc0QsY0FBQTtBQytyRXp3b0Q7QUQvckV1eG9EO0VBQThDLHNCQUFBO0FDbXNFcjBvRDtBRG5zRTIxb0Q7RUFBbUMsc0NBQUE7QUN1c0U5M29EO0FEdnNFZzZvRDtFQUEwRyxxQ0FBQTtBQzJzRTFncEQ7QUQzc0UyaXBEO0VBQXVCLGNBQUE7QUMrc0Vsa3BEO0FEL3NFZ2xwRDtFQUFpQyw0Q0FBQTtBQ210RWpucEQ7QURudEV5cHBEO0VBQStGLHlDQUFBO0VBQXFDLG1CQUFBO0FDd3RFN3hwRDtBRHh0RWd6cEQ7RUFBNkIsMEJBQUE7QUM0dEU3MHBEO0FENXRFbTJwRDtFQUErRCwwQkFBQTtBQ2d1RWw2cEQ7QURodUV3N3BEO0VBQW1DLGlDQUFBO0FDb3VFMzlwRDtBRHB1RXcvcEQ7RUFBdUUsaUNBQUE7QUN3dUUvanFEO0FEeHVFNGxxRDtFQUFnRyxtQkFBQTtFQUFtQixnQkFBQTtBQzZ1RS9zcUQ7QUQ3dUUrdHFEO0VBQWdyQiwwQ0FBQTtBQ2l2RS80ckQ7QURqdkVxN3JEO0VBQWtGLHlCQUFBO0FDcXZFdmdzRDtBRHJ2RWdpc0Q7RUFBZ0ksc0JBQUE7QUN5dkVocXNEO0FEenZFc3JzRDtFQUF3cUIsMENBQUE7QUM2dkU5MXREO0FEN3ZFbzR0RDtFQUFnRix5QkFBQTtBQ2l3RXA5dEQ7QURqd0U2K3REO0VBQTRILHNCQUFBO0FDcXdFem11RDtBRHJ3RStudUQ7RUFBd3BCLDBDQUFBO0FDeXdFdnh2RDtBRHp3RTZ6dkQ7RUFBNEUseUJBQUE7QUM2d0V6NHZEO0FEN3dFazZ2RDtFQUFvSCxzQkFBQTtBQ2l4RXRod0Q7QURqeEU0aXdEO0VBQXd3QiwwQ0FBQTtBQ3F4RXB6eEQ7QURyeEUwMXhEO0VBQThWLHlCQUFBO0FDeXhFeHJ5RDtBRHp4RWl0eUQ7RUFBc04sV0FBQTtBQzZ4RXY2eUQ7QUQ3eEVrN3lEO0VBQTBSLCtCQUFBO0FDaXlFNXN6RDtBRGp5RXV1ekQ7RUFBb0osa0JBQUE7QUNxeUUzM3pEO0FEcnlFNjR6RDtFQUE0TixzQ0FBQTtBQ3l5RXptMEQ7QUR6eUUybzBEO0VBQXNILDJDQUFBO0FDNnlFancwRDtBRDd5RXd5MEQ7RUFBZ3dCLDBDQUFBO0FDaXpFeGkyRDtBRGp6RThrMkQ7RUFBd1YseUJBQUE7QUNxekV0NjJEO0FEcnpFKzcyRDtFQUFrTixXQUFBO0FDeXpFanAzRDtBRHp6RTRwM0Q7RUFBc1IsK0JBQUE7QUM2ekVsNzNEO0FEN3pFNjgzRDtFQUFrSixrQkFBQTtBQ2kwRS9sNEQ7QURqMEVpbjREO0VBQTBOLHNDQUFBO0FDcTBFMzA0RDtBRHIwRTYyNEQ7RUFBb0gsMkNBQUE7QUN5MEVqKzREO0FEejBFd2c1RDtFQUFndkIsMENBQUE7QUM2MEV4djZEO0FENzBFOHg2RDtFQUE0VSx5QkFBQTtBQ2kxRTFtN0Q7QURqMUVtbzdEO0VBQTBNLFdBQUE7QUNxMUU3MDdEO0FEcjFFdzE3RDtFQUE4USwrQkFBQTtBQ3kxRXRtOEQ7QUR6MUVpbzhEO0VBQThJLGtCQUFBO0FDNjFFL3c4RDtBRDcxRWl5OEQ7RUFBc04sc0NBQUE7QUNpMkV2LzhEO0FEajJFeWg5RDtFQUFnSCwyQ0FBQTtBQ3EyRXpvOUQ7QURyMkVncjlEO0VBQWEsbUJBQUE7RUFBbUIsMEJBQUE7QUMwMkVodDlEO0FEMTJFc3U5RDtFQUF5QixtQkFBQTtFQUFtQixXQUFBO0FDKzJFbHg5RDtBRC8yRTZ4OUQ7RUFBd0IsbUJBQUE7RUFBbUIsV0FBQTtBQ28zRXgwOUQ7QURwM0VtMTlEO0VBQXNCLG1CQUFBO0VBQW1CLFdBQUE7QUN5M0U1MzlEO0FEejNFdTQ5RDtFQUE0SCw4QkFBQTtBQzYzRW5nK0Q7QUQ3M0VpaStEO0VBQTRNLGNBQUE7QUNpNEU3dStEO0FEajRFMnYrRDtFQUFnQyx5QkFBQTtBQ3E0RTN4K0Q7QURyNEVveitEO0VBQWEsaUNBQUE7QUN5NEVqMCtEO0FEejRFODErRDtFQUFVLGdCQUFBO0FDNjRFeDIrRDtBRDc0RXczK0Q7RUFBcUMsMEJBQUE7QUNpNUU3NStEO0FEajVFbTcrRDtFQUF5QiwrQkFBQTtFQUEyQixtQkFBQTtFQUFtQiwySEFBQTtBQ3U1RTEvK0Q7QUR2NUVtbi9EO0VBQTRCLGNBQUE7QUMyNUUvby9EO0FGaDRFQTtFQUFhLFlBQUE7QUVvNEViO0FGbjRFQTtFQUNFLFNBQUE7RUFBVyxrQ0FBQTtFQUFvQyxpQkFBQTtFQUMvQyxjQVZlO0VBV2YsZ0JBUmlCO0FFZzVFbkI7QUZ0NEVFO0VBTEY7SUFNSSxnQkFBQTtJQUNBLGdCQUFBO0VFeTRFRjtBQUNGO0FGdjRFRTtFQVZGO0lBV0ksZ0JBQUE7RUUwNEVGO0FBQ0Y7QUZ4NEVFO0VBZEY7SUFlSSxnQkFBQTtFRTI0RUY7QUFDRjtBRno0RUU7RUFsQkY7SUFtQkksZ0JBQUE7RUU0NEVGO0FBQ0Y7QUZ6NEVBO0VBQ0ksMkJBQUE7RUFFQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUU0NEVKO0FGejRFQSxVQUFBO0FBQ0E7RUFDRSxVQUFBO0FFNDRFRjtBRno0RUEsV0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRTQ0RUY7QUZ6NEVBLG9CQUFBO0FBQ0E7RUFDRSxnQkFBQTtBRTQ0RUY7QUZ6NEVBO0VBQ0UsWUFBQTtBRTQ0RUY7QUZ6NEVBO0VBQ0UsaUJBQUE7QUU0NEVGO0FGejRFQTtFQUNFLGFBQUE7QUU0NEVGO0FGejRFQTtFQUNFLDBCQUFBO0VBRUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUUyNEVGO0FGeDRFQTtFQUNFLFlBQUE7QUUyNEVGO0FGeDRFQTtFQUFjLDZCQUFBO0FFNDRFZDtBRjM0RUE7RUFBaUIsZ0NBQUE7QUUrNEVqQjtBRjk0RUE7RUFBd0IsWUFBQTtBRWs1RXhCO0FDci9FQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUR3L0VKO0FDci9FQTtFQUNJLHlCQUFBO0FEdy9FSjtBQ3IvRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FEdy9FSjtBQ3AvRUE7RUFRSTtJQUNJLGFBQUE7RURnL0VOO0FBQ0Y7QUM1K0VBO0VBTUk7SUFDSSxhQUFBO0VEeStFTjtBQUNGO0FDcitFQTtFQU1JO0lBQ0ksYUFBQTtFRGsrRU47QUFDRjtBQzk5RUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VEZytFTjs7RUM3OUVFO0lBQ0ksYUFBQTtFRGcrRU47QUFDRjtBQzU5RUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRDg5RU47O0VDMzlFRTtJQUNJLGFBQUE7RUQ4OUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1jb250ZW50L2hvbWUtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbkBpbXBvcnQgJ2N1c3RvbUFuZ3VsYXJUaGVtZS5zY3NzJztcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRicC1zbWFsbDogNDhlbTsgLy8gNzY4cHhcclxuJGJwLW1lZGl1bTogNjRlbTsgLy8gMTAyNHB4XHJcbiRicC1sYXJnZTogODUuMzc1ZW07IC8vIDEzNjZweFxyXG4kYnAteGxhcmdlOiAxMjBlbTsgLy8gMTkyMHB4XHJcbiRicC14eGxhcmdlOiAxNjBlbTsgLy8gMjU2MHB4XHJcblxyXG4vLyBNZWRpYSBRdWVyaWVzXHJcbiRtcS1zbWFsbDogXCIobWluLXdpZHRoOiAjeyRicC1zbWFsbH0pXCI7XHJcbiRtcS1tZWRpdW06IFwiKG1pbi13aWR0aDogI3skYnAtbWVkaXVtfSlcIjtcclxuJG1xLWxhcmdlOiBcIihtaW4td2lkdGg6ICN7JGJwLWxhcmdlfSlcIjtcclxuJG1xLXhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14bGFyZ2V9KVwiO1xyXG4kbXEteHhsYXJnZTogXCIobWluLXdpZHRoOiAjeyRicC14eGxhcmdlfSlcIjtcclxuJG1xLXJldGluYTogXCIoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpXCI7XHJcblxyXG4vLyBGb250LVNpemVcclxuJGJhc2UtZm9udC1zaXplOiAxZW07XHJcblxyXG4vLyBMaW5lLUhlaWdodFxyXG4kYmFzZS1saW5lLWhlaWdodDogMS41O1xyXG4kaGVhZGVyLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuXHJcbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwOyBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7IG92ZXJmbG93OiBvdmVybGF5O1xyXG4gIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAkYmFzZS1saW5lLWhlaWdodDtcclxuXHJcbiAgQG1lZGlhICN7JG1xLW1lZGl1bX0ge1xyXG4gICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS4yO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRiYXNlLWxpbmUtaGVpZ2h0KjEuMjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAjeyRtcS1sYXJnZX0ge1xyXG4gICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS4zO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICN7JG1xLXhsYXJnZX0ge1xyXG4gICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqMS40O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICN7JG1xLXh4bGFyZ2V9IHtcclxuICAgIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjEuNjtcclxuICB9XHJcbn1cclxuXHJcbi51bnNlbGVjdGFibGUge1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA3cHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcclxuICBvdmVyZmxvdzp2aXNpYmxlO1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wb3BvdmVyUG9zaXRpb25pbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIC8vIHRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMzAwMDtcclxufVxyXG5cclxuLmJsYWNrVGV4dCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm9yZGVyLXRvcCB7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwOyB9XHJcbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNDI0MjQ7IH1cclxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHsgei1pbmRleDogNTAwOyB9IiwiLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTJweDtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHtmb250LXNpemU6OXB4fS5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZToyNHB4fS5tYXQtaDEsLm1hdC1oZWFkbGluZSwubWF0LXR5cG9ncmFwaHkgaDF7Zm9udDo0MDAgMjRweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDE2cHh9Lm1hdC1oMiwubWF0LXRpdGxlLC5tYXQtdHlwb2dyYXBoeSBoMntmb250OjUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWgzLC5tYXQtc3ViaGVhZGluZy0yLC5tYXQtdHlwb2dyYXBoeSBoM3tmb250OjQwMCAxNnB4LzI4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMHB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuNjcpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS1zdHJvbmcsLm1hdC1ib2R5LTJ7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1zbWFsbCwubWF0LWNhcHRpb257Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDVlbTttYXJnaW46MCAwIDU2cHh9Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wMmVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAwNWVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtYnV0dG9uLXRvZ2dsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtc3VidGl0bGUsLm1hdC1jYXJkLWNvbnRlbnR7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVse2xpbmUtaGVpZ2h0OjI0cHh9Lm1hdC1jaGlwe2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LTAuODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjY2NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY2NjY2NjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzUzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjY2NjY2N2VtKX1AbWVkaWEgcHJpbnR7Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSl9fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjI1ZW0gMCAuNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjA5Mzc1ZW07bWFyZ2luLXRvcDotMC41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MWVtIDAgMWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuODQzNzVlbTttYXJnaW4tdG9wOi0wLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZ3JpZC10aWxlLWhlYWRlciwubWF0LWdyaWQtdGlsZS1mb290ZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotMC4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5tYXQtcmFkaW8tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItdmVydGljYWwsLm1hdC1zdGVwcGVyLWhvcml6b250YWx7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0Om5vcm1hbH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZTpub3QoOmVtcHR5KXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06c2NhbGUoMCl9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50e2Rpc3BsYXk6bm9uZX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1vdmVybGF5LWNvbnRhaW5lciwuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtc310ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemV7cmVzaXplOm5vbmV9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ3twYWRkaW5nOjJweCAwICFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2hlaWdodDphdXRvICFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94e3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OjAgIWltcG9ydGFudH0ubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1vcHRpb257Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksLm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtb3B0aW9uLm1hdC1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCk7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtb3B0aW9uLm1hdC1vcHRpb24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojMjQyOTJlfS5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiMyMDU4RkZ9Lm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOiNmNDQzMzZ9Lm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXBzZXVkby1jaGVja2JveHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVye2NvbG9yOiNmYWZhZmF9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7Y29sb3I6I2IwYjBiMH0ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiMyNDI5MmV9Lm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZXtiYWNrZ3JvdW5kOiMyMDU4RkZ9Lm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCwubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWR7YmFja2dyb3VuZDojYjBiMGIwfS5tYXQtZWxldmF0aW9uLXowe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MXtib3gtc2hhZG93OjBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoye2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejN7Ym94LXNoYWRvdzowcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NHtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16NXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16Nntib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejd7Ym94LXNoYWRvdzowcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo4e2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16OXtib3gtc2hhZG93OjBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEwe2JveC1zaGFkb3c6MHB4IDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejExe2JveC1zaGFkb3c6MHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEye2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejEze2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE0e2JveC1zaGFkb3c6MHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE1e2JveC1zaGFkb3c6MHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE2e2JveC1zaGFkb3c6MHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxN3tib3gtc2hhZG93OjBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTh7Ym94LXNoYWRvdzowcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE5e2JveC1zaGFkb3c6MHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMHtib3gtc2hhZG93OjBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIxe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjJ7Ym94LXNoYWRvdzowcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyM3tib3gtc2hhZG93OjBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejI0e2JveC1zaGFkb3c6MHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWFwcC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10aGVtZS1sb2FkZWQtbWFya2Vye2Rpc3BsYXk6bm9uZX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpe2JhY2tncm91bmQ6I2ZmZn0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLWNvbnRlbnR7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiMyNDI5MmV9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnR7b3V0bGluZTpzb2xpZCAxcHg7Ym9yZGVyLXJhZGl1czowfS5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiMyMDU4RkY7Y29sb3I6I2ZmZn0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoMC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxle3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiMyNDI5MmV9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiMyMDU4RkZ9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMjQyOTJlfS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiMyMDU4RkZ9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Y29sb3I6cmdiYSgwLDAsMCwuODcpO2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQsLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50e2NvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LWZhYi5tYXQtcHJpbWFyeSwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzI0MjkyZX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1mYWIubWF0LWFjY2VudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLC5tYXQtZmFiLm1hdC13YXJuLC5tYXQtbWluaS1mYWIubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym94LXNoYWRvdzpub25lfS5tYXQtYnV0dG9uLXRvZ2dsZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX1bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlKy5tYXQtYnV0dG9uLXRvZ2dsZXtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtib3JkZXItdG9wOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJke2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpO2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWR7YmFja2dyb3VuZC1jb2xvcjojYmRiZGJkfS5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmR7Ym9yZGVyOnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhICFpbXBvcnRhbnR9Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiMyMDU4RkZ9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojMjQyOTJlfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojMjA1OEZGfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmU7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGO2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtdGFibGV7YmFja2dyb3VuZDojZmZmfS5tYXQtdGFibGUgdGhlYWQsLm1hdC10YWJsZSB0Ym9keSwubWF0LXRhYmxlIHRmb290LG1hdC1oZWFkZXItcm93LG1hdC1yb3csbWF0LWZvb3Rlci1yb3csW21hdC1oZWFkZXItcm93XSxbbWF0LXJvd10sW21hdC1mb290ZXItcm93XSwubWF0LXRhYmxlLXN0aWNreXtiYWNrZ3JvdW5kOmluaGVyaXR9bWF0LXJvdyxtYXQtaGVhZGVyLXJvdyxtYXQtZm9vdGVyLXJvdyx0aC5tYXQtaGVhZGVyLWNlbGwsdGQubWF0LWNlbGwsdGQubWF0LWZvb3Rlci1jZWxse2JvcmRlci1ib3R0b20tY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaGVhZGVyLWNlbGx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2VsbCwubWF0LWZvb3Rlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNhbGVuZGFyLWFycm93e2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZGF0ZXBpY2tlci10b2dnbGUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtY2FsZW5kYXItYm9keS1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3Zlcj4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlPi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjE4KX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMjQyOTJlO2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjMsODEsMTgxLC40KX0ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudHtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzIwNThGRjtjb2xvcjojZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoOTYsMTYzLDI1MiwuNCl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ0LDY3LDU0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggI2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmV7Y29sb3I6IzI0MjkyZX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50e2NvbG9yOiMyMDU4RkZ9Lm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWRpYWxvZy1jb250YWluZXJ7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kaXZpZGVye2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZGl2aWRlci12ZXJ0aWNhbHtib3JkZXItcmlnaHQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtZXhwYW5zaW9uLXBhbmVse2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWFjdGlvbi1yb3d7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZDojZmZmfX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiwubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXXtjb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntjb2xvcjppbmhlcml0fS5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojMjQyOTJlfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudHtjb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm57Y29sb3I6I2Y0NDMzNn0ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlcntjb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojMjQyOTJlfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJue2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6IzI0MjkyZX0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50LC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtiYWNrZ3JvdW5kLXNpemU6NHB4IDEwMCU7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0LXh9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZXtjb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojMjQyOTJlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjA2KX0ubWF0LWljb24ubWF0LXByaW1hcnl7Y29sb3I6IzI0MjkyZX0ubWF0LWljb24ubWF0LWFjY2VudHtjb2xvcjojMjA1OEZGfS5tYXQtaWNvbi5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCwubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6IzI0MjkyZX0ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50e2NhcmV0LWNvbG9yOiMyMDU4RkZ9Lm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCwubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbGlzdC1pdGVtLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2VlZX0ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LW1lbnUtcGFuZWx7YmFja2dyb3VuZDojZmZmfS5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LW1lbnUtaXRlbXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtcGFnaW5hdG9ye2JhY2tncm91bmQ6I2ZmZn0ubWF0LXBhZ2luYXRvciwubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7Ym9yZGVyLXJpZ2h0OjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1wYWdpbmF0b3ItZmlyc3QsLm1hdC1wYWdpbmF0b3ItbGFzdHtib3JkZXItdG9wOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCl9Lm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNjNWNhZTl9Lm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2M1Y2FlOX0ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5ke2ZpbGw6I2ZmODBhYn0ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjgwYWJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMDU4RkZ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVye2JhY2tncm91bmQtY29sb3I6I2ZmY2RkMn0ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwubWF0LXNwaW5uZXIgY2lyY2xle3N0cm9rZTojMjQyOTJlfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGV7c3Ryb2tlOiMyMDU4RkZ9Lm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xle3N0cm9rZTojZjQ0MzM2fS5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiMyNDI5MmV9Lm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6IzIwNThGRn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9Lm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZXtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc2VsZWN0LXBhbmVse2JhY2tncm91bmQ6I2ZmZn0ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6IzI0MjkyZX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojMjA1OEZGfS5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvd3tjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kcmF3ZXItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2h7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKXtib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRyYXdlci1zaWRle2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmR7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZXtib3JkZXItbGVmdDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9Lm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzIwNThGRn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDk2LDE2MywyNTIsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzIwNThGRn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSg2Myw4MSwxODEsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzI0MjkyZX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjU0KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntib3gtc2hhZG93OjBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6IzI0MjkyZX0ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6I2ZmZn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dHtjb2xvcjojZmZmfS5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDk2LDE2MywyNTIsLjIpfS5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1ie2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7YmFja2dyb3VuZC1pbWFnZTotbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KX0ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrc3tiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KX0ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDQpfUBtZWRpYShob3Zlcjogbm9uZSl7Lm1hdC1zdGVwLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOm5vbmV9fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29ue2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNTQpO2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e2JhY2tncm91bmQtY29sb3I6IzI0MjkyZTtjb2xvcjojZmZmfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3J7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Y29sb3I6I2Y0NDMzNn0ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwubWF0LXN0ZXBwZXItdmVydGljYWx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7Ym9yZGVyLWxlZnQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZXtib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNvcnQtaGVhZGVyLWFycm93e2NvbG9yOiM3NTc1NzV9Lm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpfS5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMTIpO2JvcmRlci1ib3R0b206bm9uZX0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhcltjbGFzcyo9bWF0LWJhY2tncm91bmQtXXtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDpub25lfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk3LDIwMiwyMzMsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDEyOCwxNzEsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMjA1OEZGfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgxOTcsMjAyLDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiMyNDI5MmV9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMTI4LDE3MSwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiMyMDU4RkZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmt7Y29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdG9vbGJhcntiYWNrZ3JvdW5kOiNmNWY1ZjU7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiMyNDI5MmU7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LWFjY2VudHtiYWNrZ3JvdW5kOiMyMDU4RkY7Y29sb3I6I2ZmZn0ubWF0LXRvb2xiYXIubWF0LXdhcm57YmFja2dyb3VuZDojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVlLC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOmluaGVyaXR9Lm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sdGlwe2JhY2tncm91bmQ6cmdiYSg5Nyw5Nyw5NywuOSl9Lm1hdC10cmVle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtiYWNrZ3JvdW5kOiMzMjMyMzI7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntjb2xvcjojMjA1OEZGfVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAubWF0LXR5cG9ncmFwaHkgaDMge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAwcHg7XG59XG5cbi5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAubWF0LXR5cG9ncmFwaHkgaDQge1xuICBmb250OiA0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWg1LCAubWF0LXR5cG9ncmFwaHkgaDUge1xuICBmb250OiA0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbn1cblxuLm1hdC1oNiwgLm1hdC10eXBvZ3JhcGh5IGg2IHtcbiAgZm9udDogNDAwIGNhbGMoMTRweCAqIDAuNjcpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgLm1hdC10eXBvZ3JhcGh5IHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1ib2R5IHAsIC5tYXQtYm9keS0xIHAsIC5tYXQtdHlwb2dyYXBoeSBwIHtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbn1cblxuLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgZm9udDogNDAwIDEycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1kaXNwbGF5LTQsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNCB7XG4gIGZvbnQ6IDMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIG1hcmdpbjogMCAwIDU2cHg7XG59XG5cbi5tYXQtZGlzcGxheS0zLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTMge1xuICBmb250OiA0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1kaXNwbGF5LTIsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMiB7XG4gIGZvbnQ6IDQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMSB7XG4gIGZvbnQ6IDQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDY0cHg7XG59XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUsIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNoZWNrYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tYXQtY2hpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLCAubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCwgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sIC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLCAubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci10b3A6IDAuODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLCAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0wLjg0Mzc1ZW07XG4gIHBhZGRpbmctdG9wOiAwLjg0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4zNDM3NWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBtYXJnaW4tdG9wOiAwLjY2NjY2NjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY2NjY2NjdlbSk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAwO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM1MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjI4MTI1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjI1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwLjU0MTY2NjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjY2NjY2NjY2NjdlbSk7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSk7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC43NWVtIDA7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjA5Mzc1ZW07XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuODQzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyLCAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmUsIC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksIC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogLTAuMDYyNWVtO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10b29sYmFyLCAubWF0LXRvb2xiYXIgaDEsIC5tYXQtdG9vbGJhciBoMiwgLm1hdC10b29sYmFyIGgzLCAubWF0LXRvb2xiYXIgaDQsIC5tYXQtdG9vbGJhciBoNSwgLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10cmVlLW5vZGUsIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1yaXBwbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQge1xuICAvKiEqL1xufVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQge1xuICAvKiEqL1xufVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksIC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVyIHtcbiAgY29sb3I6ICNmYWZhZmE7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgY29sb3I6ICNiMGIwYjA7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMyNDI5MmU7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjMjA1OEZGO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiMGIwYjA7XG59XG5cbi5tYXQtZWxldmF0aW9uLXowIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejMge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16NCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16NSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16NiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejcge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEwIHtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejExIHtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEyIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEzIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE0IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE1IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE2IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNyB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MTgge1xuICBib3gtc2hhZG93OiAwcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE5IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTlweCAyOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIxIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjIge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjJweCAzNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMyB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejI0IHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzI0MjkyZTtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyMDU4RkY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG59XG5cbi5tYXQtYmFkZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtYmFkZ2UtaGlkZGVuIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2I5YjliOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LCAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtOHB4O1xufVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC04cHg7XG59XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTZweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE2cHg7XG59XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTZweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTZweDtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC04cHg7XG59XG5cbltkaXI9cnRsXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC04cHg7XG59XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtOHB4O1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC04cHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTFweDtcbn1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTExcHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTIycHg7XG59XG5cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjJweDtcbn1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjJweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTIycHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTExcHg7XG59XG5cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTFweDtcbn1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTFweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTExcHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTE0cHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTE0cHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMjhweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTI4cHg7XG59XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjhweDtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMjhweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNHB4O1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTRweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xNHB4O1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNHB4O1xufVxuXG4ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICBmaWxsOiAjZmFmYWZhO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgc3Ryb2tlOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7XG59XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogI2IwYjBiMDtcbn1cblxuLm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjMjQyOTJlO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICMyMDU4RkY7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU0O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCwgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LCBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxubWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LCB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSwgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbiwgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSwgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLCAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC40KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDU4RkY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDE2MywgMjUyLCAwLjQpO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC40KTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICNmZmY7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICMyMDU4RkY7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWFjdGlvbi1yb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1oaW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQge1xuICBjb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCwgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSwgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMyMDU4RkY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4ubWF0LWljb24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC1pY29uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1pY29uLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLCAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLm1hdC1saXN0LW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LW9wdGlvbjpmb2N1cywgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cywgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLCAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLCAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLCAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXBhZ2luYXRvci1maXJzdCwgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCwgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjYzVjYWU5O1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjYWU5O1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmZjgwYWI7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODBhYjtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDU4RkY7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjZmZjZGQyO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICMyNDI5MmU7XG59XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwgLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMjA1OEZGO1xufVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbltkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbltkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgMTYzLCAyNTIsIDAuNTQpO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjU0KTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC41NCk7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsIC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCwgLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgMTYzLCAyNTIsIDAuMik7XG59XG5cbi5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsIC5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwgLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCwgLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZDpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG59XG5cbi5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSwgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLm1hdC10YWItbmF2LWJhciwgLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLCAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDIwMiwgMjMzLCAwLjMpO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjgsIDE3MSwgMC4zKTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1OEZGO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDUsIDIxMCwgMC4zKTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMjAyLCAyMzMsIDAuMyk7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjgsIDE3MSwgMC4zKTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNSwgMjEwLCAwLjMpO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzI0MjkyZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZDogIzIwNThGRjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSwgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsIC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwgLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSwgLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LCAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCA5NywgOTcsIDAuOSk7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tYXQtdHJlZS1ub2RlLCAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2dyb3VuZDogIzMyMzIzMjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBjb2xvcjogIzIwNThGRjtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgZm9udC1zaXplOiAxZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4NS4zNzVlbSkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MGVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cbn1cblxuLnVuc2VsZWN0YWJsZSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBvcG92ZXJQb3NpdGlvbmluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAzMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTByZW0gIWltcG9ydGFudDtcbiAgei1pbmRleDogMzAwMDtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI0MjQyNDtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgei1pbmRleDogNTAwO1xufVxuXG4uc3RhcnRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA1OEZGO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uc3RhcnRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MGNlO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMy4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudmlkZW8ge1xuICAgIGhlaWdodDogMjcwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnZpZGVvIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC52aWRlbyB7XG4gICAgaGVpZ2h0OiA0MTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7XG4gIC50aXRsZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogN3ZoO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgfVxuXG4gIC52aWRlbyB7XG4gICAgaGVpZ2h0OiA1NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MGVtKSB7XG4gIC50aXRsZS10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogN3ZoO1xuICAgIGZvbnQtc2l6ZTogNC42ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICB9XG5cbiAgLnZpZGVvIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uc3RhcnRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNThGRjtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5zdGFydEJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0MGNlO1xyXG59XHJcblxyXG4udGl0bGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZSozLjI7XHJcbiAgICBsaW5lLWhlaWdodDogJGJhc2UtZm9udC1zaXplKjEuNjtcclxufVxyXG5cclxuLy8gdW5kZXIgc21hbGxcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLy8gLnRpdGxlLXRleHQge1xyXG4gICAgLy8gICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgIC8vICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAudmlkZW8ge1xyXG4gICAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNtYWxsXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC8vIC50aXRsZS10ZXh0IHtcclxuICAgIC8vICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDcycHg7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnZpZGVvIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtZWRpdW1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLy8gLnRpdGxlLXRleHQge1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogNC42cmVtO1xyXG4gICAgLy8gICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC52aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAjeyRtcS14bGFyZ2V9IHtcclxuICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogN3ZoO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGJhc2UtZm9udC1zaXplKjQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRiYXNlLWZvbnQtc2l6ZSoxLjY7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvIHtcclxuICAgICAgICBoZWlnaHQ6IDU0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHRyYSBsYXJnZVxyXG5AbWVkaWEgI3skbXEteHhsYXJnZX0ge1xyXG4gICAgLnRpdGxlLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3dmg7XHJcbiAgICAgICAgZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUqNC42O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkYmFzZS1mb250LXNpemUqMS42O1xyXG4gICAgfVxyXG5cclxuICAgIC52aWRlbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIH1cclxufSJdfQ== */"],
      data: {
        animation: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-content',
          templateUrl: './about-content.component.html',
          styleUrls: ['./about-content.component.scss', '../home-page.component.scss', '../home-content/home-content.component.scss'],
          animations: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/algorithm-content/algorithm-card/algorithm-card.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/home-page/algorithm-content/algorithm-card/algorithm-card.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: MyErrorStateMatcher, AlgorithmCardComponent */

  /***/
  function srcAppHomePageAlgorithmContentAlgorithmCardAlgorithmCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmCardComponent", function () {
      return AlgorithmCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AlgorithmCardComponent_div_17_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_17_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Number of Men and Women");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AlgorithmCardComponent_div_17_Template_input_keyup_enter_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.numberOfGroup1Agents.hasError("required") || ctx_r8.numberOfGroup1Agents.hasError("max") || ctx_r8.numberOfGroup1Agents.hasError("min") ? "" : ctx_r8.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlgorithmCardComponent_div_17_mat_error_5_Template, 4, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AlgorithmCardComponent_div_17_mat_error_6_Template, 2, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx_r0.algorithm.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.numberOfGroup1Agents.hasError("min") || ctx_r0.numberOfGroup1Agents.hasError("max"));
      }
    }

    function AlgorithmCardComponent_div_18_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_18_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_18_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_18_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please input a number between 1 and 9 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Number of Residents");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AlgorithmCardComponent_div_18_Template_input_keyup_enter_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.numberOfGroup1Agents.hasError("required") || ctx_r14.numberOfGroup1Agents.hasError("max") || ctx_r14.numberOfGroup1Agents.hasError("min") || ctx_r14.numberOfGroup2Agents.hasError("required") || ctx_r14.numberOfGroup2Agents.hasError("max") || ctx_r14.numberOfGroup2Agents.hasError("min") ? "" : ctx_r14.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlgorithmCardComponent_div_18_mat_error_5_Template, 4, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AlgorithmCardComponent_div_18_mat_error_6_Template, 2, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Number of Hospitals");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function AlgorithmCardComponent_div_18_Template_input_keyup_enter_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.numberOfGroup1Agents.hasError("required") || ctx_r16.numberOfGroup1Agents.hasError("max") || ctx_r16.numberOfGroup1Agents.hasError("min") || ctx_r16.numberOfGroup2Agents.hasError("required") || ctx_r16.numberOfGroup2Agents.hasError("max") || ctx_r16.numberOfGroup2Agents.hasError("min") ? "" : ctx_r16.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AlgorithmCardComponent_div_18_mat_error_11_Template, 4, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AlgorithmCardComponent_div_18_mat_error_12_Template, 2, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup1Agents.hasError("min") || ctx_r1.numberOfGroup1Agents.hasError("max"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.numberOfGroup2Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup2Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.numberOfGroup2Agents.hasError("min") || ctx_r1.numberOfGroup2Agents.hasError("max"));
      }
    }

    function AlgorithmCardComponent_div_19_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " This field is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_19_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please input a even number between 1 and 8 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AlgorithmCardComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Number of People");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AlgorithmCardComponent_div_19_Template_input_keypress_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.evenOnly($event);
        })("keyup.enter", function AlgorithmCardComponent_div_19_Template_input_keyup_enter_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.numberOfGroup1Agents.hasError("required") || ctx_r21.numberOfGroup1Agents.hasError("max") || ctx_r21.numberOfGroup1Agents.hasError("min") ? "" : ctx_r21.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AlgorithmCardComponent_div_19_mat_error_5_Template, 4, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AlgorithmCardComponent_div_19_mat_error_6_Template, 2, 0, "mat-error", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx_r2.algorithm.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r2.numberOfGroup1Agents);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numberOfGroup1Agents.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numberOfGroup1Agents.hasError("min") || ctx_r2.numberOfGroup1Agents.hasError("max"));
      }
    }

    function AlgorithmCardComponent_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmCardComponent_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generate Preferences");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.numberOfGroup1Agents.hasError("required") || ctx_r3.numberOfGroup1Agents.hasError("max") || ctx_r3.numberOfGroup1Agents.hasError("min"));
      }
    }

    function AlgorithmCardComponent_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmCardComponent_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generate Preferences");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.numberOfGroup1Agents.hasError("required") || ctx_r4.numberOfGroup1Agents.hasError("max") || ctx_r4.numberOfGroup1Agents.hasError("min") || ctx_r4.numberOfGroup2Agents.hasError("required") || ctx_r4.numberOfGroup2Agents.hasError("max") || ctx_r4.numberOfGroup2Agents.hasError("min"));
      }
    }

    function AlgorithmCardComponent_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlgorithmCardComponent_button_23_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.onGeneratePreferences();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generate Preferences");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.numberOfGroup1Agents.hasError("required") || ctx_r5.numberOfGroup1Agents.hasError("max") || ctx_r5.numberOfGroup1Agents.hasError("min"));
      }
    }
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var AlgorithmCardComponent = /*#__PURE__*/function () {
      // matcher = new MyErrorStateMatcher();
      function AlgorithmCardComponent(algorithmService, router) {
        _classCallCheck(this, AlgorithmCardComponent);

        this.algorithmService = algorithmService;
        this.router = router;
        this.numberOfGroup1Agents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[2|4|6|8|10]")]);
        this.numberOfGroup2Agents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9)]);
      }

      _createClass(AlgorithmCardComponent, [{
        key: "evenOnly",
        value: function evenOnly(event) {
          if (event.key == "enter") {
            return true;
          }

          if (["2", "4", "6", "8", "1", "0"].includes(event.key)) {
            return true;
          }

          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {} // on clicking "Generate Preferences" change the global algorithm to the one passed into this dialog

      }, {
        key: "onGeneratePreferences",
        value: function onGeneratePreferences() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.algorithmService.currentAlgorithm = this.algorithm;
                    this.algorithmService.numberOfGroup1Agents = this.numberOfGroup1Agents.value;

                    if (this.numberOfGroup2Agents.value == '') {
                      this.algorithmService.numberOfGroup2Agents = this.numberOfGroup1Agents.value;
                    } else {
                      this.algorithmService.numberOfGroup2Agents = this.numberOfGroup2Agents.value;
                    }

                    anime({
                      targets: '.main-page',
                      easing: 'easeOutQuint',
                      opacity: [1, 0],
                      duration: 500
                    });
                    anime({
                      targets: '.navbar',
                      easing: 'easeOutQuint',
                      translateY: [0, -150],
                      opacity: [1, 0],
                      delay: 300,
                      duration: 500
                    });
                    _context7.next = 7;
                    return this.delay(700);

                  case 7:
                    this.router.navigateByUrl("/animation", {
                      skipLocationChange: true
                    });

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return AlgorithmCardComponent;
    }();

    AlgorithmCardComponent.ɵfac = function AlgorithmCardComponent_Factory(t) {
      return new (t || AlgorithmCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_3__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AlgorithmCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AlgorithmCardComponent,
      selectors: [["algorithm-card"]],
      inputs: {
        algorithm: "algorithm"
      },
      decls: 24,
      vars: 10,
      consts: [[1, "card", "px-1"], [1, "card-body"], [1, "row", "mt-2"], [1, "col-7"], [1, "card-title", 2, "font-size", "30px", "font-weight", "400"], [1, "col-5", "mt-2", "pr-4", "text-right"], [1, "card-subtitle", "text-muted", 2, "font-size", "20px", "font-weight", "400"], [1, "card-subtitle", "mb-4", "text-muted", 2, "font-size", "22px", "font-weight", "400"], [1, "mt-3", 2, "height", "150px", "overflow", "scroll"], [1, "card-text", 2, "font-size", "18px", "line-height", "25px", "font-weight", "400", 3, "innerHTML"], [1, "divider", "mt-3"], [1, "row", "mt-4"], [1, "example-form", "pl-3"], ["class", "row justify-content-start", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], [1, "col-5", "text-right"], ["class", "cardButton", "mat-stroked-button", "", "style", "border-radius: 70px; width: 220px; height: 45px;", "cdkFocusInitial", "", 3, "disabled", "click", 4, "ngIf"], [1, "row", "justify-content-start"], [2, "width", "200px"], ["type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "1", "max", "9", "onkeydown", "if(event.key==='.'){event.preventDefault();}", "oninput", "this.value = this.value > 0 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "id", "formControl", "keyup.enter"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "mr-1", 2, "width", "200px"], ["id", "hr1", "type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "2", "max", "9", "oninput", "this.value = this.value > 1 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "formControl", "keyup.enter"], [1, "ml-1", 2, "width", "200px"], ["id", "hr2", "type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "2", "max", "9", "oninput", "this.value = this.value > 1 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "formControl", "keyup.enter"], ["type", "number", "matInput", "", "placeholder", "5", "value", "5", "min", "1", "max", "10", "onkeydown", "if(event.key==='.'){event.preventDefault();}", "oninput", "this.value = this.value > 0 && this.value < 10 ? (!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null) : Number(String(this.value).charAt(1))", "onDrag", "return false", "onDrop", "return false", "onPaste", "return false", 3, "id", "formControl", "keypress", "keyup.enter"], ["mat-stroked-button", "", "cdkFocusInitial", "", 1, "cardButton", 2, "border-radius", "70px", "width", "220px", "height", "45px", 3, "disabled", "click"], [2, "font-size", "18px", "font-weight", "500", "color", "black"]],
      template: function AlgorithmCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AlgorithmCardComponent_div_17_Template, 7, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AlgorithmCardComponent_div_18_Template, 13, 6, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AlgorithmCardComponent_div_19_Template, 7, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AlgorithmCardComponent_button_21_Template, 3, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AlgorithmCardComponent_button_22_Template, 3, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AlgorithmCardComponent_button_23_Template, 3, 1, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.algorithm.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.algorithm.orientation[0], "-Oriented");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.algorithm.algorithm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.algorithm.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Stable Marriage Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Hospitals/Residents Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Stable Roommates Problem");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Stable Marriage Problem" && !(ctx.numberOfGroup1Agents.hasError("required") || ctx.numberOfGroup1Agents.hasError("max") || ctx.numberOfGroup1Agents.hasError("min")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Hospitals/Residents Problem" && !(ctx.numberOfGroup1Agents.hasError("required") || ctx.numberOfGroup1Agents.hasError("max") || ctx.numberOfGroup1Agents.hasError("min") || ctx.numberOfGroup2Agents.hasError("required") || ctx.numberOfGroup2Agents.hasError("max") || ctx.numberOfGroup2Agents.hasError("min")));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.algorithm.name == "Stable Roommates Problem" && !(ctx.numberOfGroup1Agents.hasError("required") || ctx.numberOfGroup1Agents.hasError("max") || ctx.numberOfGroup1Agents.hasError("min")));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlgorithmCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'algorithm-card',
          templateUrl: './algorithm-card.component.html',
          styleUrls: ['./algorithm-card.component.scss', '../../home-page.component.scss', '../../home-content/home-content.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_3__["AlgorithmRetrievalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        algorithm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home-page/algorithm-content/algorithm-content.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/home-page/algorithm-content/algorithm-content.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AlgorithmContentComponent */

  /***/
  function srcAppHomePageAlgorithmContentAlgorithmContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmContentComponent", function () {
      return AlgorithmContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/fadeAnimation */
    "./src/app/animations/fadeAnimation.ts");
    /* harmony import */


    var src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./algorithm-card/algorithm-card.component */
    "./src/app/home-page/algorithm-content/algorithm-card/algorithm-card.component.ts");

    function AlgorithmContentComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "algorithm-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var algorithm_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("algorithm", algorithm_r1);
      }
    }

    var AlgorithmContentComponent = /*#__PURE__*/function () {
      function AlgorithmContentComponent(algorithmRetrieval) {
        _classCallCheck(this, AlgorithmContentComponent);

        this.algorithmRetrieval = algorithmRetrieval;
      }

      _createClass(AlgorithmContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlgorithmContentComponent;
    }();

    AlgorithmContentComponent.ɵfac = function AlgorithmContentComponent_Factory(t) {
      return new (t || AlgorithmContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]));
    };

    AlgorithmContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlgorithmContentComponent,
      selectors: [["app-algorithm-content"]],
      decls: 22,
      vars: 2,
      consts: [[1, "algorithmContent"], [1, "container", "text-center", "py-5", "my-5"], [1, "title-text"], [1, "row", "pt-3", "justify-content-center"], [1, "col-9", "pr-5", "text-center"], [1, "lead", 2, "font-size", "1.6rem", "line-height", "2.5rem", "font-family", "DM Sans"], [1, "py-5", 2, "background-color", "#f6f6f8"], [1, "container-fluid", "mt-3", "mb-5"], [1, "text-center"], [1, "title-text", 2, "color", "#464d57"], [1, "row", "justify-content-center", "mb-4"], [1, "col-6", "text-center"], [1, "", 2, "font-size", "1.2rem", "line-height", "2rem", "font-family", "DM Sans"], [1, "row", "my-5", "mx-5", "justify-content-center"], ["class", "col-xl-6 col-sm-12 mb-5", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "col-sm-12", "mb-5"], [3, "algorithm"]],
      template: function AlgorithmContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn a matching algorithm!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Using this app you can pick a problem (currently either Stable Marriage or Hospital/Residents) and see how the Gale-Shapley and Extended Gale-Shapley algorithms are used in those scenarios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Problems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "If it's your first time using this app, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "try the algorithm on the left with 5 men and women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", then click on the question mark on the top right when the algorithm loads to get a short walkthrough of the functions of the app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AlgorithmContentComponent_div_21_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@simpleFadeAnimation", "in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.algorithmRetrieval.getListOfAlgorithms());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _algorithm_card_algorithm_card_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmCardComponent"]],
      data: {
        animation: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-algorithm-content',
          templateUrl: './algorithm-content.component.html',
          styleUrls: ['./algorithm-content.component.scss', '../home-page.component.scss', '../home-content/home-content.component.scss'],
          animations: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
        }]
      }], function () {
        return [{
          type: src_app_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmRetrievalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/feedback-banner/feedback-banner.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home-page/feedback-banner/feedback-banner.component.ts ***!
    \************************************************************************/

  /*! exports provided: FeedbackBannerComponent */

  /***/
  function srcAppHomePageFeedbackBannerFeedbackBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackBannerComponent", function () {
      return FeedbackBannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FeedbackBannerComponent = /*#__PURE__*/function () {
      function FeedbackBannerComponent() {
        _classCallCheck(this, FeedbackBannerComponent);
      }

      _createClass(FeedbackBannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedbackBannerComponent;
    }();

    FeedbackBannerComponent.ɵfac = function FeedbackBannerComponent_Factory(t) {
      return new (t || FeedbackBannerComponent)();
    };

    FeedbackBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackBannerComponent,
      selectors: [["feedback-banner"]],
      decls: 9,
      vars: 0,
      consts: [["id", "feedbackBanner", 1, "py-5", 2, "background-color", "#1b1f23"], [1, "text-center", "pt-2", "px-5"], [1, "mb-4", 2, "color", "white", "font-weight", "400"], [1, "mb-5", 2, "color", "white", "font-weight", "400"], ["mat-flat-button", "", "routerLink", "/feedback", 1, "feedbackButton", 2, "border-radius", "70px", "width", "170px", "height", "45px"], [2, "font-size", "18px", "font-weight", "500", "color", "black", "outline", "none"]],
      template: function FeedbackBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " If you have any feedback for me, or anything you'd like to see in this app, click the button below to be navigated to the feedback page, or contact me at one of my socials! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I'm currently actively working on the app, however as it is part of my final year university project, I will eventually stop. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Give Feedback!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".feedbackButton[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  transition: 200ms background-color;\n}\n\n.feedbackButton[_ngcontent-%COMP%]:hover {\n  background-color: #b8b8b8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2ZlZWRiYWNrLWJhbm5lci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGhvbWUtcGFnZVxcZmVlZGJhY2stYmFubmVyXFxmZWVkYmFjay1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9mZWVkYmFjay1iYW5uZXIvZmVlZGJhY2stYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9mZWVkYmFjay1iYW5uZXIvZmVlZGJhY2stYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRiYWNrQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5mZWVkYmFja0J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg0LCAxODQsIDE4NClcclxufSIsIi5mZWVkYmFja0J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIHRyYW5zaXRpb246IDIwMG1zIGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5mZWVkYmFja0J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGI4Yjg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'feedback-banner',
          templateUrl: './feedback-banner.component.html',
          styleUrls: ['./feedback-banner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/feedback-content/feedback-content.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/home-page/feedback-content/feedback-content.component.ts ***!
    \**************************************************************************/

  /*! exports provided: FeedbackContentComponent */

  /***/
  function srcAppHomePageFeedbackContentFeedbackContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackContentComponent", function () {
      return FeedbackContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/fadeAnimation */
    "./src/app/animations/fadeAnimation.ts");

    var FeedbackContentComponent = /*#__PURE__*/function () {
      function FeedbackContentComponent() {
        _classCallCheck(this, FeedbackContentComponent);
      }

      _createClass(FeedbackContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedbackContentComponent;
    }();

    FeedbackContentComponent.ɵfac = function FeedbackContentComponent_Factory(t) {
      return new (t || FeedbackContentComponent)();
    };

    FeedbackContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedbackContentComponent,
      selectors: [["app-feedback-content"]],
      decls: 44,
      vars: 1,
      consts: [[1, "feedbackContent"], [1, "container", "text-center", "py-5", "my-5", "col-sm-11", "col-lg-8", "col-xl-6"], [1, "title-text"], [1, "divider", "my-4"], [2, "color", "#464d57"], [1, "py-5", 2, "background-color", "#f6f6f8"], [1, "container", "my-5", 2, "font-family", "DM Sans"], [1, "row", "pt-3"], [1, "col-12"], [2, "font-size", "40px", "line-height", "50px", "font-weight", "600"], [2, "font-size", "20px", "line-height", "30px", "font-weight", "300"], [1, "", 2, "height", "150px"], [2, "font-size", "18px", "line-height", "30px", "font-weight", "300"]],
      template: function FeedbackContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I would greatly appreciate any feedback!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I am collecting feedback to improve this app through Google Forms! Check below for details!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Evaluation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "If you'd like to help me out, I'd really appreciate you spending the time to go through and do my evaluation of this app. It's at this Google Forms link.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "If there's anything you'd like to mention that my evaluation doesn't cover, please contact me at 2314991L@student.gla.ac.uk. I'd love to hear any and all opinions!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Future Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "As this is a university project, there's a limit on what I can feasibly do in the time given, especially alongside the rest of my studies. However, below is a list of features, fixes and improvements I would love to make, if I had the time:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Implementation of more algorithms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Functionality to edit number of available spaces for hospitals through edit preferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "A more robust, user friendly implementation of the edit preferences system");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "A more in-depth, high quality tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Screen responsiveness (app responding properly to different screen sizes)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mobile version of the web app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "More polish - ensuring no bugs and other oddities with presentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User friendly system to create their own algorithms - possibly \"writing code\" or combining blocks of logic to create matching algorithms?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "If there's anything you think would be a great addition to this app, please go through my evaluation and add your thoughts!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@simpleFadeAnimation", "in");
        }
      },
      data: {
        animation: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feedback-content',
          templateUrl: './feedback-content.component.html',
          styleUrls: ['./feedback-content.component.scss', '../home-page.component.scss', '../home-content/home-content.component.scss'],
          animations: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-content/home-content.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home-page/home-content/home-content.component.ts ***!
    \******************************************************************/

  /*! exports provided: HomeContentComponent */

  /***/
  function srcAppHomePageHomeContentHomeContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function () {
      return HomeContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/animations/fadeAnimation */
    "./src/app/animations/fadeAnimation.ts");

    var _c0 = ["animationVid"];
    var _c1 = ["descriptionVid"];

    var HomeContentComponent = /*#__PURE__*/function () {
      function HomeContentComponent() {
        _classCallCheck(this, HomeContentComponent);
      }

      _createClass(HomeContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var vid = this.animationVid.nativeElement;
          vid.muted = true;
          vid.play();
          vid = this.descriptionVid.nativeElement;
          vid.muted = true;
          vid.play();
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return HomeContentComponent;
    }();

    HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) {
      return new (t || HomeContentComponent)();
    };

    HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeContentComponent,
      selectors: [["home-content"]],
      viewQuery: function HomeContentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.animationVid = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.descriptionVid = _t.first);
        }
      },
      decls: 39,
      vars: 1,
      consts: [[1, "homeContent"], [1, "titleContent"], [1, "container", "text-center", "pt-5", "col-sm-11", "col-lg-8", "col-xl-5"], [1, "title-text"], [1, "container", "pb-5", "mb-5", "text-center"], ["id", "animationVideo", "autoplay", "", "muted", "", "loop", "", "src", "assets/animations/algAnimation.mp4", "type", "video/mp4", 1, "video"], ["animationVid", ""], [1, "py-5", 2, "background-color", "#f6f6f8", "font-family", "DM Sans"], [1, "container", "my-5"], [1, "row", "pt-5"], ["id", "homePageRow1Text", 1, "col-lg-6", "col-sm-12", "my-auto", "text-right", "pr-5"], [2, "font-size", "40px", "line-height", "50px", "font-weight", "600"], [2, "font-size", "20px", "line-height", "30px", "font-weight", "300"], [1, "col-lg-6", "col-sm-12", "mx-auto", "text-center"], ["id", "homePageRow1Content", "id", "descriptionVideo", "autoplay", "", "muted", "", "loop", "", "src", "assets/animations/descriptions.mp4", "type", "video/mp4", "width", "80%", 1, "video", 2, "border", "1px solid rgb(180, 180, 180)", "height", "auto", "border-radius", "30px"], ["descriptionVid", ""], [1, "", 2, "height", "150px"], [1, "row", "mt-5"], [1, "col-lg-6", "col-sm-12", "mt-5", "my-auto"], [1, "mx-auto", 2, "width", "300px", "height", "300px", "overflow", "hidden", "border-radius", "50%", "background", "white", "border", "1px solid rgb(180, 180, 180)"], ["src", "assets/images/codeDisplayWhite.PNG", "id", "homePageRow2Content", 2, "margin", "0 auto", "margin-left", "5%", "margin-top", "5%", "height", "100%", "width", "auto"], ["id", "homePageRow2Text", 1, "col-lg-6", "col-sm-12", "my-auto", "pl-5"], [1, "row", "pb-5"], ["id", "homePageRow3Text", 1, "col-lg-6", "col-sm-12", "my-auto", "text-right", "pr-5"], [1, "col-lg-6", "col-sm-12", "pl-5"], ["src", "assets/images/playbackControlUnchanged.PNG", "id", "homePageRow3Content", 2, "margin", "0 auto", "margin-left", "-15.2%", "margin-top", "17%", "height", "60%", "width", "auto"]],
      template: function HomeContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Learn, visualise and walk through matching algorithms at your own pace.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "video", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Perfect for beginners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "With a simple, intuitive interface, learn how the Gale-Shapley and Extended Gale-Shapley matching algorithms work in different problems with step-by-step playback.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "video", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Learn visually");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Decide to play each algorithm with pseudocode shown or not in conjunction with a visual representation of matching.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Control your learning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Use the playback controls for each algorithm to control the speed you learn.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@simpleFadeAnimation", "in");
        }
      },
      data: {
        animation: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home-content',
          templateUrl: './home-content.component.html',
          styleUrls: ['./home-content.component.scss', '../home-page.component.scss'],
          animations: [src_app_animations_fadeAnimation__WEBPACK_IMPORTED_MODULE_1__["simpleFadeAnimation"]]
        }]
      }], function () {
        return [];
      }, {
        animationVid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['animationVid']
        }],
        descriptionVid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['descriptionVid']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/home-page/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icon-banner/icon-banner.component */
    "./src/app/home-page/icon-banner/icon-banner.component.ts");
    /* harmony import */


    var _feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feedback-banner/feedback-banner.component */
    "./src/app/home-page/feedback-banner/feedback-banner.component.ts");

    function HomePageComponent_feedback_banner_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "feedback-banner");
      }
    }

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(router) {
        _classCallCheck(this, HomePageComponent);

        this.router = router;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    anime({
                      targets: '.navbar',
                      easing: 'easeInOutQuint',
                      translateY: [-150, 0],
                      opacity: [0, 1],
                      delay: 100,
                      duration: 1000
                    });
                    anime({
                      targets: '.main-page',
                      easing: 'easeInOutQuint',
                      opacity: [0, 1],
                      // translateY: [-100, 0],
                      delay: 550,
                      duration: 900
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      decls: 6,
      vars: 1,
      consts: [[1, "main-page"], ["outlet", "outlet"], [4, "ngIf"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePageComponent_feedback_banner_4_Template, 1, 0, "feedback-banner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "icon-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.router.url === "/feedback"));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _icon_banner_icon_banner_component__WEBPACK_IMPORTED_MODULE_5__["IconBannerComponent"], _feedback_banner_feedback_banner_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackBannerComponent"]],
      styles: [".divider[_ngcontent-%COMP%] {\n  background-color: #D7D7D7;\n  height: 1px;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2058FF;\n  font-family: \"DM Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcY2FsbHVcXEw0IFByb2plY3RcXGluZGl2aWR1YWwtcHJvamVjdC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURjQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc3VidGl0bGUge1xyXG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4vLyB9XHJcblxyXG4vLyAuYm9keS10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gfVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMjA1OEZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJ1xyXG59IiwiLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLnRpdGxlLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIwNThGRjtcbiAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/icon-banner/icon-banner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home-page/icon-banner/icon-banner.component.ts ***!
    \****************************************************************/

  /*! exports provided: IconBannerComponent */

  /***/
  function srcAppHomePageIconBannerIconBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconBannerComponent", function () {
      return IconBannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IconBannerComponent = /*#__PURE__*/function () {
      function IconBannerComponent() {
        _classCallCheck(this, IconBannerComponent);
      }

      _createClass(IconBannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconBannerComponent;
    }();

    IconBannerComponent.ɵfac = function IconBannerComponent_Factory(t) {
      return new (t || IconBannerComponent)();
    };

    IconBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IconBannerComponent,
      selectors: [["icon-banner"]],
      decls: 7,
      vars: 0,
      consts: [[1, "py-5", "text-center"], ["href", "https://github.com/liamlau/individual-project", "target", "#blank", 2, "margin", "0 1em"], ["height", "50px", "id", "github-icon", "aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "github", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", 1, "svg-inline--fa", "fa-github", "fa-w-16", "fa-2x"], ["fill", "currentColor", "d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z", 1, "github-icon"], ["href", "https://www.linkedin.com/in/liam-lau-01b2b31b0/", "target", "#blank", 2, "margin", "0 1em"], ["height", "50px", "id", "linkedin-icon", "aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "linkedin", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-linkedin", "fa-w-14", "fa-2x"], ["fill", "currentColor", "d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z", 1, "linkedin-icon"]],
      template: function IconBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".github-icon[_ngcontent-%COMP%] {\n  color: #1b1f23;\n  transition: 200ms color;\n}\n\na[_ngcontent-%COMP%]:hover   .github-icon[_ngcontent-%COMP%] {\n  color: #5e5e5e;\n}\n\n.facebook-icon[_ngcontent-%COMP%] {\n  color: #4968ad;\n  transition: 200ms color;\n}\n\na[_ngcontent-%COMP%]:hover   .facebook-icon[_ngcontent-%COMP%] {\n  color: #6c8aca;\n}\n\n.linkedin-icon[_ngcontent-%COMP%] {\n  color: #2867b2;\n  transition: 200ms color;\n}\n\na[_ngcontent-%COMP%]:hover   .linkedin-icon[_ngcontent-%COMP%] {\n  color: #518bd3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2ljb24tYmFubmVyL0M6XFxVc2Vyc1xcY2FsbHVcXEw0IFByb2plY3RcXGluZGl2aWR1YWwtcHJvamVjdC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxpY29uLWJhbm5lclxcaWNvbi1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9pY29uLWJhbm5lci9pY29uLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9pY29uLWJhbm5lci9pY29uLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5naXRodWItaWNvbiB7XHJcbiAgICBjb2xvcjogIzFiMWYyMztcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGNvbG9yO1xyXG59XHJcblxyXG5hOmhvdmVyIC5naXRodWItaWNvbiB7XHJcbiAgICBjb2xvcjogIzVlNWU1ZTtcclxufVxyXG5cclxuLmZhY2Vib29rLWljb24ge1xyXG4gICAgY29sb3I6ICM0OTY4YWQ7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcclxufVxyXG5cclxuYTpob3ZlciAuZmFjZWJvb2staWNvbiB7XHJcbiAgICBjb2xvcjogIzZjOGFjYTtcclxufVxyXG5cclxuLmxpbmtlZGluLWljb24ge1xyXG4gICAgY29sb3I6ICMyODY3YjI7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcclxufVxyXG5cclxuYTpob3ZlciAubGlua2VkaW4taWNvbiB7XHJcbiAgICBjb2xvcjogIzUxOGJkMztcclxufSIsIi5naXRodWItaWNvbiB7XG4gIGNvbG9yOiAjMWIxZjIzO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcbn1cblxuYTpob3ZlciAuZ2l0aHViLWljb24ge1xuICBjb2xvcjogIzVlNWU1ZTtcbn1cblxuLmZhY2Vib29rLWljb24ge1xuICBjb2xvcjogIzQ5NjhhZDtcbiAgdHJhbnNpdGlvbjogMjAwbXMgY29sb3I7XG59XG5cbmE6aG92ZXIgLmZhY2Vib29rLWljb24ge1xuICBjb2xvcjogIzZjOGFjYTtcbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBjb2xvcjogIzI4NjdiMjtcbiAgdHJhbnNpdGlvbjogMjAwbXMgY29sb3I7XG59XG5cbmE6aG92ZXIgLmxpbmtlZGluLWljb24ge1xuICBjb2xvcjogIzUxOGJkMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'icon-banner',
          templateUrl: './icon-banner.component.html',
          styleUrls: ['./icon-banner.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home-page/navbar/navbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/home-page/navbar/navbar.component.ts ***!
    \******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppHomePageNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/about", "/algorithms", "/feedback"];
    };

    var _c1 = function _c1(a0) {
      return {
        "active": a0
      };
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.componentMap = {
          "/": ".homeContent",
          "/about": ".aboutContent",
          "/algorithms": ".algorithmContent",
          "/feedback": ".feedbackContent"
        };
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fadeCurrentPage",
        value: function fadeCurrentPage() {
          anime({
            targets: [this.componentMap[this.router.url]],
            easing: 'easeInOutQuint',
            opacity: [1, 0],
            duration: 400
          });
        }
      }, {
        key: "goToPage",
        value: function goToPage(page) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    if (this.router.url == page) {
                      _context9.next = 5;
                      break;
                    }

                    this.fadeCurrentPage();
                    _context9.next = 4;
                    return this.delay(400);

                  case 4:
                    this.router.navigateByUrl(page, {
                      skipLocationChange: true
                    });

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["navbar"]],
      decls: 19,
      vars: 13,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-light", 2, "background-color", "white", "font-family", "DM Sans"], [1, "navbar-brand", "pl-5", "mt-5", "mb-4", 2, "cursor", "pointer", 3, "click"], [1, "display-1", 2, "font-size", "40px"], ["id", "alg"], ["id", "match"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "mt-4", "mr-5"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "ml-5"], [1, "navbar-nav", "ml-auto", "pt-5", "pb-3", "pr-5"], ["id", "homeLink", 1, "nav-item", "nav-link", "mr-5", 2, "font-size", "23px", "font-weight", "600", "cursor", "pointer", 3, "ngClass", "click"], ["id", "aboutLink", 1, "nav-item", "nav-link", "mr-5", 2, "font-size", "23px", "font-weight", "600", "cursor", "pointer", 3, "ngClass", "click"], ["id", "algorithmsLink", 1, "nav-item", "nav-link", "mr-4", "pr-3", 2, "font-size", "23px", "font-weight", "600", "cursor", "pointer", 3, "ngClass", "click"], ["id", "feedbackLink", 1, "nav-item", "nav-link", "mr-4", 2, "font-size", "23px", "font-weight", "600", "cursor", "pointer", 3, "ngClass", "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_1_listener() {
            return ctx.goToPage("/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "alg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "match");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
            return ctx.goToPage("/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() {
            return ctx.goToPage("/about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() {
            return ctx.goToPage("/algorithms");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Algorithms");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() {
            return ctx.goToPage("/feedback");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0).includes(ctx.router.url)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.router.url == "/about"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx.router.url == "/algorithms"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.router.url == "/feedback"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["#alg[_ngcontent-%COMP%] {\n  color: #d44b21;\n  transition: 200ms color;\n}\n\n#match[_ngcontent-%COMP%] {\n  color: #9810ca;\n  transition: 200ms color;\n}\n\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]   #alg[_ngcontent-%COMP%] {\n  color: #ff3c00;\n}\n\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]   #match[_ngcontent-%COMP%] {\n  color: #bb00ff;\n}\n\na[_ngcontent-%COMP%] {\n  transition: 200ms color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL25hdmJhci9DOlxcVXNlcnNcXGNhbGx1XFxMNCBQcm9qZWN0XFxpbmRpdmlkdWFsLXByb2plY3Qvc3JjXFxhcHBcXGhvbWUtcGFnZVxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbGcge1xyXG4gICAgY29sb3I6ICNkNDRiMjE7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcclxufVxyXG5cclxuI21hdGNoIHtcclxuICAgIGNvbG9yOiAjOTgxMGNhO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgY29sb3I7XHJcbn1cclxuXHJcbmE6aG92ZXIgc3BhbiAjYWxnIHtcclxuICAgIGNvbG9yOiAjZmYzYzAwO1xyXG59XHJcblxyXG5hOmhvdmVyIHNwYW4gI21hdGNoIHtcclxuICAgIGNvbG9yOiAjYmIwMGZmO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zIGNvbG9yO1xyXG59IiwiI2FsZyB7XG4gIGNvbG9yOiAjZDQ0YjIxO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcbn1cblxuI21hdGNoIHtcbiAgY29sb3I6ICM5ODEwY2E7XG4gIHRyYW5zaXRpb246IDIwMG1zIGNvbG9yO1xufVxuXG5hOmhvdmVyIHNwYW4gI2FsZyB7XG4gIGNvbG9yOiAjZmYzYzAwO1xufVxuXG5hOmhvdmVyIHNwYW4gI21hdGNoIHtcbiAgY29sb3I6ICNiYjAwZmY7XG59XG5cbmEge1xuICB0cmFuc2l0aW9uOiAyMDBtcyBjb2xvcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing/algorithm-guard.ts":
  /*!********************************************!*\
    !*** ./src/app/routing/algorithm-guard.ts ***!
    \********************************************/

  /*! exports provided: AlgorithmGuard */

  /***/
  function srcAppRoutingAlgorithmGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlgorithmGuard", function () {
      return AlgorithmGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../algorithm-retrieval.service */
    "./src/app/algorithm-retrieval.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlgorithmGuard = /*#__PURE__*/function () {
      function AlgorithmGuard(algorithmService, _router) {
        _classCallCheck(this, AlgorithmGuard);

        this.algorithmService = algorithmService;
        this._router = _router;
      }

      _createClass(AlgorithmGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.algorithmService.currentAlgorithm) {
            return true;
          }

          this._router.navigate(['/']);

          return false;
        }
      }]);

      return AlgorithmGuard;
    }();

    AlgorithmGuard.ɵfac = function AlgorithmGuard_Factory(t) {
      return new (t || AlgorithmGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AlgorithmGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlgorithmGuard,
      factory: AlgorithmGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlgorithmGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _algorithm_retrieval_service__WEBPACK_IMPORTED_MODULE_1__["AlgorithmRetrievalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/routing/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _algorithm_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./algorithm-guard */
    "./src/app/routing/algorithm-guard.ts");
    /* harmony import */


    var _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../algorithm-page/algorithm-page.component */
    "./src/app/algorithm-page/algorithm-page.component.ts");
    /* harmony import */


    var _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home-page/about-content/about-content.component */
    "./src/app/home-page/about-content/about-content.component.ts");
    /* harmony import */


    var _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../home-page/algorithm-content/algorithm-content.component */
    "./src/app/home-page/algorithm-content/algorithm-content.component.ts");
    /* harmony import */


    var _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../home-page/feedback-content/feedback-content.component */
    "./src/app/home-page/feedback-content/feedback-content.component.ts");
    /* harmony import */


    var _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../home-page/home-content/home-content.component */
    "./src/app/home-page/home-content/home-content.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");

    var routes = [{
      path: '',
      component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
      children: [{
        path: '',
        component: _home_page_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
        data: {
          animation: 'HomePage'
        }
      }, {
        path: 'about',
        component: _home_page_about_content_about_content_component__WEBPACK_IMPORTED_MODULE_4__["AboutContentComponent"],
        data: {
          animation: 'AboutPage'
        }
      }, {
        path: 'algorithms',
        component: _home_page_algorithm_content_algorithm_content_component__WEBPACK_IMPORTED_MODULE_5__["AlgorithmContentComponent"]
      }, {
        path: 'feedback',
        component: _home_page_feedback_content_feedback_content_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackContentComponent"]
      }]
    }, {
      path: 'animation',
      component: _algorithm_page_algorithm_page_component__WEBPACK_IMPORTED_MODULE_3__["AlgorithmPageComponent"],
      canActivate: [_algorithm_guard__WEBPACK_IMPORTED_MODULE_2__["AlgorithmGuard"]]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/utils.service.ts":
  /*!****************************************!*\
    !*** ./src/app/utils/utils.service.ts ***!
    \****************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppUtilsUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService() {
        _classCallCheck(this, UtilsService);
      }

      _createClass(UtilsService, [{
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ɵfac = function UtilsService_Factory(t) {
      return new (t || UtilsService)();
    };

    UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilsService,
      factory: UtilsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\callu\L4 Project\individual-project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map