(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\winbe\GitHub Projects\4-semester-project\web-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1wpZ":
/*!************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-batch/create-batch.component */ "xALl");
/* harmony import */ var _operations_operations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/operations.component */ "6F+d");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/resources.component */ "Ys4B");
/* harmony import */ var _visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualization/visualization.component */ "UpRY");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "B1sB");






class MainDashboardComponent {
}
MainDashboardComponent.ɵfac = function MainDashboardComponent_Factory(t) { return new (t || MainDashboardComponent)(); };
MainDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainDashboardComponent, selectors: [["app-main-dashboard"]], decls: 7, vars: 0, consts: [[1, "wrapper", "enableFlex", "columnFlex", "spaceBetweenFlex"], [1, "enableFlex", "rowFlex", "spaceBetweenFlex", "wrapFlex"], [1, "flexSizeOne"], [1, "flexSizeTwo"]], template: function MainDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-create-batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-operations", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-resources", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_1__["CreateBatchComponent"], _operations_operations_component__WEBPACK_IMPORTED_MODULE_2__["OperationsComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__["ResourcesComponent"], _visualization_visualization_component__WEBPACK_IMPORTED_MODULE_4__["VisualizationComponent"], _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceComponent"]], styles: ["@media (max-width: 800px) {\r\n    .rowFlex[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        justify-content: normal;\r\n        align-content: normal;\r\n    }\r\n    .container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoibWFpbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnJvd0ZsZXgge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "4CrT":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-batch-reports/batch-reports-table/batch-reports-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BatchReportsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchReportsTable", function() { return BatchReportsTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a1) { return ["/batch-report/batch", a1]; };
function BatchReportsTable_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const batch_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, batch_r1.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](batch_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](batch_r1.value.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](batch_r1.value.Products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](batch_r1.value.DateTime);
} }
class BatchReportsTable {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
        this.span = 7;
        this.back = 0;
        this.next = 7;
        this.backAvailable = false;
        this.nextAvailable = false;
        this.socketIOService.emit("selectAllData", null);
        this.socketIOService.listen("selectAllData").subscribe((data) => {
            this.BatchReports = new Map(data.map(i => [i.BatchId, i]));
        });
    }
    goNext() {
        if (this.next < this.BatchReports.size) {
            this.back = this.back + this.span;
            this.next = this.next + this.span;
        }
    }
    goBack() {
        if (this.back != 0) {
            this.back = this.back - this.span;
            this.next = this.next - this.span;
        }
    }
}
BatchReportsTable.ɵfac = function BatchReportsTable_Factory(t) { return new (t || BatchReportsTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
BatchReportsTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BatchReportsTable, selectors: [["app-batch-reports-table"]], decls: 21, vars: 9, consts: [[1, "enableFlex", "columnFlex", "container"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "enableFlex", "spaceBetweenFlex"], ["id", "test", 1, "btnDefault", "btnSuccess", 3, "disabled", "click"], [1, "btnDefault", "btnSuccess", 3, "disabled", "click"], [3, "routerLink"]], template: function BatchReportsTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Batch reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Batch ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Beer Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BatchReportsTable_tr_13_Template, 9, 7, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchReportsTable_Template_button_click_17_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BatchReportsTable_Template_button_click_19_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NEXT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, ctx.BatchReports), ctx.back, ctx.next));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.backAvailable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    border-collapse: collapse;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 1.7em;\r\n    margin-bottom: 30px;\r\n    color: var(--primary-text-color);\r\n    text-align: left;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 30px 0px 30px 10px;\r\n    color: var(--third-text-color);\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    padding-bottom: 10px;\r\n    padding-left: 10px;\r\n    color: var(--third-text-color);\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:not(:first-of-type):hover {\r\n    background-color: var(--batch-row-hover-color);\r\n    cursor: pointer;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:first-of-type {\r\n    border-bottom: 2px solid var(--third-text-color);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.3em;\r\n    }\r\n    th[_ngcontent-%COMP%] {\r\n        font-size: 0.9em;\r\n    }\r\n    td[_ngcontent-%COMP%] {\r\n        font-size: 0.9em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdGNoLXJlcG9ydHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJiYXRjaC1yZXBvcnRzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4IDMwcHggMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGlyZC10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxudGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10aGlyZC10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxudHI6bm90KDpmaXJzdC1vZi10eXBlKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXRjaC1yb3ctaG92ZXItY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50cjpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10aGlyZC10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgICB0aCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxuICAgIHRkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "6F+d":
/*!*******************************************************************!*\
  !*** ./src/app/main-dashboard/operations/operations.component.ts ***!
  \*******************************************************************/
/*! exports provided: OperationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsComponent", function() { return OperationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socketio.service */ "bgkY");


class OperationsComponent {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
    }
    sendMessage(request) {
        switch (request) {
            case 'stop':
                this.socketIOService.emit('execute', 'stop');
                break;
            case 'abort':
                this.socketIOService.emit('execute', 'abort');
                break;
            case 'reset':
                this.socketIOService.emit('execute', 'reset');
                break;
            case 'clear':
                this.socketIOService.emit('execute', 'clear');
                break;
        }
    }
}
OperationsComponent.ɵfac = function OperationsComponent_Factory(t) { return new (t || OperationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
OperationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperationsComponent, selectors: [["app-operations"]], decls: 11, vars: 0, consts: [[1, "container", "enableFlex", "flexSizeOne", "centerLeftFlex", "columnFlex", "spaceBetweenFlex", "shadow"], [1, "btnDefault", "btnWarning", 3, "click"]], template: function OperationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_3_listener() { return ctx.sendMessage("stop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "STOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_5_listener() { return ctx.sendMessage("abort"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ABORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_7_listener() { return ctx.sendMessage("clear"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CLEAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_9_listener() { return ctx.sendMessage("reset"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    height: 270px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoib3BlcmF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "6rJU":
/*!******************************************************!*\
  !*** ./src/app/main-header/main-header.component.ts ***!
  \******************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets.service */ "8aCc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _switch_color_switch_color_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch-color/switch-color.components */ "brtR");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "75Ck");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications/notifications.component */ "ZPQk");






class MainHeaderComponent {
    constructor(assetsService) {
        this.assetsService = assetsService;
    }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_service__WEBPACK_IMPORTED_MODULE_1__["AssetsService"])); };
MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainHeaderComponent, selectors: [["app-main-header"]], decls: 9, vars: 1, consts: [[1, "wrapper"], [1, "enableFlex", "spaceBetweenFlex"], ["routerLink", "/dashboard", "routerLinkActive", "active"], [3, "src"], [1, "enableFlex", "centerRightFlex", "wrapFlex"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-switch-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.mainLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _switch_color_switch_color_components__WEBPACK_IMPORTED_MODULE_3__["SwitchColorComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n    background-color: var(--header-bg-color);\r\n    padding: 15px 0 15px 0;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        margin-bottom: 10px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6Im1haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XHJcbn1cclxuXHJcbmhlYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC53cmFwcGVyIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgc3BhbiBzcGFuIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "75Ck":
/*!****************************************************************!*\
  !*** ./src/app/main-header/search-bar/search-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_assets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/assets.service */ "8aCc");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1) { return ["/batch-report/batch", a1]; };
class SearchBarComponent {
    constructor(assetsService, socketIOService, formBuilder) {
        this.assetsService = assetsService;
        this.socketIOService = socketIOService;
        this.formBuilder = formBuilder;
        this.searchForm = this.formBuilder.group({
            searchValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
        this.searchBatch = "";
        this.socketIOService.listen("selectBatch").subscribe((data) => {
            this.searchBatch = data;
        });
    }
    search() {
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            let searchValue = Number(this.searchForm.value.searchValue);
            if (searchValue != 0) {
                this.socketIOService.emit("selectBatch", Number(this.searchForm.value.searchValue.match(/\d+/g)));
                document.getElementById("batch").style.display = "block";
            }
            else {
                document.getElementById("batch").style.display = "none";
            }
        }, 500);
    }
    hide() {
        document.getElementById("batch").style.display = "none";
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_assets_service__WEBPACK_IMPORTED_MODULE_2__["AssetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_3__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 7, vars: 6, consts: [[1, "enableFlex", "rowFlex", "centerLeftFlex"], [3, "formGroup"], ["formControlName", "searchValue", "type", "text", "placeholder", "Search by batch id...", 3, "keyup"], [3, "src"], ["id", "batch", 3, "routerLink", "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_2_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchBarComponent_Template_span_click_4_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.searchIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.searchBatch.BatchId));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Batch ", ctx.searchBatch.BatchId, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["input[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    width: 335px;\r\n    margin-left: 25px;\r\n    border-radius: 25px;\r\n    padding-left: 45px;\r\n    background-color: var(--search-bg-color);\r\n    color: var(--third-text-color);\r\n    box-shadow: inset 0px 0px 5px rgba(68, 68, 68, 0.1);\r\n    font-size: 0.9em;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--third-text-color);\r\n    z-index: 1;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 18px;\r\n    margin-left: 40px;\r\n    z-index: 4;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n    width: 100%;\r\n    max-width: 390px;\r\n    position: absolute;\r\n    background-color: var(--search-bg-color);\r\n    z-index: 1;\r\n    margin: 70px 0 0 25px;\r\n    border-radius: 0 0 12px 12px;\r\n    padding-top: 19px;\r\n    border-bottom: 1px solid var(--search-border-color);\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 10px 10px 10px 18px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--search-hover-color);\r\n    cursor: pointer;\r\n    border-radius: 0 0 12px 12px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    img[_ngcontent-%COMP%] {\r\n        margin: 5px 0 0 15px;\r\n    }\r\n    input[_ngcontent-%COMP%] {\r\n        margin: 10px 0 0 0;\r\n        width: 250px;\r\n    }\r\n    span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        max-width: 305px;\r\n        margin: 80px 0 0 0;\r\n        z-index: 2;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLDhCQUE4QjtJQUM5QixtREFBbUQ7SUFDbkQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAzMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iZy1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhpcmQtdGV4dC1jb2xvcik7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCByZ2JhKDY4LCA2OCwgNjgsIDAuMSk7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLXRleHQtY29sb3IpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG5zcGFuIHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzOTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYXJjaC1iZy1jb2xvcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiA3MHB4IDAgMCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxOXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNlYXJjaC1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG5zcGFuIHNwYW4gcCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuc3BhbiBzcGFuIHA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VhcmNoLWhvdmVyLWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDAgMTVweDtcclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbiBzcGFuIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwNXB4O1xyXG4gICAgICAgIG1hcmdpbjogODBweCAwIDAgMDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "8aCc":
/*!***********************************!*\
  !*** ./src/app/assets.service.ts ***!
  \***********************************/
/*! exports provided: AssetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsService", function() { return AssetsService; });
class AssetsService {
    constructor() {
        this.changeAssets("light");
    }
    changeAssets(theme) {
        switch (theme) {
            case "light":
                this.mainLogo = "assets/ajatek_logo_1.png";
                this.bellIcon = "assets/icons/bell-icon.png";
                this.searchIcon = "assets/icons/search-icon.png";
                this.dashboardIcon = "assets/icons/dashboard-icon.png";
                this.batchReportIcon = "assets/icons/batch-report-icon.png";
                this.statisticalAnalysisIcon = "assets/icons/statistical-analysis-icon.png";
                this.temperatureIcon = "assets/icons/temperature-icon.png";
                this.batchIdIcon = "assets/icons/batch-id-icon.png";
                this.producedIcon = "assets/icons/produced-icon.png";
                this.humidityIcon = "assets/icons/humidity-icon.png";
                this.amountToProduceIcon = "assets/icons/amount-to-produce-icon.png";
                this.acceptableProductsIcon = "assets/icons/acceptable-products-icon.png";
                this.vibrationIcon = "assets/icons/vibration-icon.png";
                this.productsPerMinuteIcon = "assets/icons/products-per-minute-icon.png";
                this.defectProductsIcon = "assets/icons/defect-products-icon.png";
                this.navigationMenuIcon = "assets/icons/navigation-menu-icon.png";
                break;
            case "dark":
                this.mainLogo = "assets/ajatek_logo_2.png";
                this.bellIcon = "assets/icons/white-mode/bell-icon.png";
                this.searchIcon = "assets/icons/white-mode/search-icon.png";
                this.dashboardIcon = "assets/icons/white-mode/dashboard-icon.png";
                this.batchReportIcon = "assets/icons/white-mode/batch-report-icon.png";
                this.statisticalAnalysisIcon = "assets/icons/white-mode/statistical-analysis-icon.png";
                this.temperatureIcon = "assets/icons/white-mode/temperature-icon.png";
                this.batchIdIcon = "assets/icons/white-mode/batch-id-icon.png";
                this.producedIcon = "assets/icons/white-mode/produced-icon.png";
                this.humidityIcon = "assets/icons/white-mode/humidity-icon.png";
                this.amountToProduceIcon = "assets/icons/white-mode/amount-to-produce-icon.png";
                this.acceptableProductsIcon = "assets/icons/white-mode/acceptable-products-icon.png";
                this.vibrationIcon = "assets/icons/white-mode/vibration-icon.png";
                this.productsPerMinuteIcon = "assets/icons/white-mode/products-per-minute-icon.png";
                this.defectProductsIcon = "assets/icons/white-mode/defect-products-icon.png";
                this.navigationMenuIcon = "assets/icons/white-mode/navigation-menu-icon.png";
                break;
        }
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "B1sB":
/*!*********************************************************************!*\
  !*** ./src/app/main-dashboard/maintenance/maintenance.component.ts ***!
  \*********************************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");


class MaintenanceComponent {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
        this.data = "";
        this.maxMaintenance = 65535;
        this.socketIOService.listen("data").subscribe((data) => {
            this.data = data;
        });
    }
    getMaintenance() {
        let i = Number((this.data.Maintenance / this.maxMaintenance * 100).toFixed(0));
        document.getElementById("maintenanceMeter").style.width = i + "%";
        return i;
    }
}
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
MaintenanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 7, vars: 1, consts: [[1, "container", "enableFlex", "centerFlex", "columnFlex", "shadow"], ["id", "maintenanceMeterBg", 1, "enableFlex", "centerLeftFlex", "shadow"], ["id", "maintenanceMeter"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Efficiency ", ctx.getMaintenance() || 100, "%");
    } }, styles: ["#maintenanceMeterBg[_ngcontent-%COMP%] {\r\n    background-color: var(--meter-back-bg-color);\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    position: relative;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n}\r\n\r\n#maintenanceMeterBg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 1em;\r\n    color: var(--secondary-text-color);\r\n    position: absolute;\r\n    width: inherit;\r\n    text-align: center;\r\n    z-index: 2;\r\n}\r\n\r\n#maintenanceMeter[_ngcontent-%COMP%] {\r\n    background-color: var(--secondary-meter-bg-color);\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px 0 20px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoibWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWludGVuYW5jZU1ldGVyQmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWV0ZXItYmFjay1iZy1jb2xvcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI21haW50ZW5hbmNlTWV0ZXJCZyBoMyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNtYWludGVuYW5jZU1ldGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1tZXRlci1iZy1jb2xvcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Bv2G":
/*!**************************************************************!*\
  !*** ./src/app/main-navigation/main-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: MainNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function() { return MainNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets.service */ "8aCc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MainNavigationComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Batch reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Statistial Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.dashboardIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.batchReportIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.statisticalAnalysisIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MainNavigationComponent {
    constructor(assetsService) {
        this.assetsService = assetsService;
        this.hideMobileNav = false;
    }
    showMobileNav() {
        if (this.hideMobileNav) {
            this.hideMobileNav = false;
        }
        else {
            this.hideMobileNav = true;
        }
    }
}
MainNavigationComponent.ɵfac = function MainNavigationComponent_Factory(t) { return new (t || MainNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_service__WEBPACK_IMPORTED_MODULE_1__["AssetsService"])); };
MainNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavigationComponent, selectors: [["app-main-navigation"]], decls: 19, vars: 5, consts: [[1, "wrapper"], ["id", "desktopNav", 1, "enableFlex", "rowFlex", "wrapFlex"], ["routerLink", "/dashboard", "routerLinkActive", "active"], [1, "enableFlex", "rowFlex", "centerFlex"], [3, "src"], ["routerLink", "/batch-reports", "routerLinkActive", "active"], ["routerLink", "/statistical-analysis", "routerLinkActive", "active"], ["id", "mobileNav", 1, "enableFlex", "columnFlex"], ["id", "burgerMenuIcon", 1, "enableFlex", "rowFlex", "centerRightFlex", 3, "click"], [4, "ngIf"], [1, "enableFlex", "rowFlex", "centerLeftFlex"]], template: function MainNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Batch reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Statistial Analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavigationComponent_Template_li_click_16_listener() { return ctx.showMobileNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainNavigationComponent_span_18_Template, 13, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.dashboardIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.batchReportIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.statisticalAnalysisIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.navigationMenuIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideMobileNav);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    background-color: var(--navigation-bg-color);\r\n    margin-bottom: 20px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: var(--primary-text-color);\r\n    padding: 20px 30px 20px 30px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 -6px 0 var(--navigation-hover-color);\r\n    cursor: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 27px;\r\n    margin-right: 10px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #desktopNav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    span[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n        background-color: var(--navigation-hover-color);\r\n    }\r\n    #burgerMenuIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        cursor: pointer;\r\n        width: 35px;\r\n    }\r\n    #mobileNav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n        background-color: var(--header-bg-color);\r\n    }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n    #mobileNav[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7SUFDZjtJQUNBO1FBQ0ksd0NBQXdDO0lBQzVDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJtYWluLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWJnLWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbnVsIGE6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNnB4IDAgdmFyKC0tbmF2aWdhdGlvbi1ob3Zlci1jb2xvcik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsIGxpIGltZyB7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAjZGVza3RvcE5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHNwYW4gbGk6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24taG92ZXItY29sb3IpO1xyXG4gICAgfVxyXG4gICAgI2J1cmdlck1lbnVJY29uIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgI21vYmlsZU5hdiBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICNtb2JpbGVOYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "EzRm":
/*!******************************************************!*\
  !*** ./src/app/main-footer/main-footer.component.ts ***!
  \******************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainFooterComponent {
}
MainFooterComponent.ɵfac = function MainFooterComponent_Factory(t) { return new (t || MainFooterComponent)(); };
MainFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainFooterComponent, selectors: [["app-main-footer"]], decls: 7, vars: 0, consts: [[1, "wrapper", "enableFlex", "columnFlex", "centerFlex"]], template: function MainFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "USER INTERFACE DEVELOPED BY GROUP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Jonas Svane, Arem Dogan, Emma Johanne Bovtrup, Andreas Schmidt Temberg, Karthikan Vimalarasan and Wahid Tobias Winberg Razzaghi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    background: url('footer.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 300px;\r\n    color: var(--third-text-color);\r\n    font-size: 0.95em;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    margin: 40px 0 10px 0;\r\n    z-index: 1;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-style: italic;\r\n    line-height: 30px;\r\n    width: 100%;\r\n    max-width: 600px;\r\n    z-index: 1;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    height: inherit;\r\n    width: 100%;\r\n    background-color: var(--footer-bg-color);\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    footer[_ngcontent-%COMP%] {\r\n        font-size: 0.8em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoibWFpbi1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Zvb3Rlci5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLXRleHQtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgMTBweCAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmctY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-header/main-header.component */ "6rJU");
/* harmony import */ var _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-navigation/main-navigation.component */ "Bv2G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-footer/main-footer.component */ "EzRm");





class AppComponent {
    constructor() {
        this.title = 'Ajatek';
    }
    onActivate() {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-main-footer");
    } }, directives: [_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__["MainHeaderComponent"], _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_2__["MainNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_4__["MainFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ToE8":
/*!**********************************************************************************!*\
  !*** ./src/app/main-statistical-analysis/main-statistical-analysis.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainStatisticalAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainStatisticalAnalysis", function() { return MainStatisticalAnalysis; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socketio.service */ "bgkY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./barchart/barchart.component */ "fkvP");
/* harmony import */ var _linechart_linechart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linechart/linechart.component */ "yOr5");







class MainStatisticalAnalysis {
    constructor(socketIOService, formBuilder, route) {
        this.socketIOService = socketIOService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.statsForm = this.formBuilder.group({
            batchValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
        const routeParams = this.route.snapshot.paramMap;
        const batchIdFromRoute = Number(routeParams.get("batchId"));
        if (batchIdFromRoute != 0) {
            this.socketIOService.emit("selectLogs", batchIdFromRoute);
        }
    }
    findBatch() {
        this.socketIOService.emit("selectLogs", Number(this.statsForm.value.batchValue));
    }
}
MainStatisticalAnalysis.ɵfac = function MainStatisticalAnalysis_Factory(t) { return new (t || MainStatisticalAnalysis)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MainStatisticalAnalysis.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainStatisticalAnalysis, selectors: [["app-statistical-analysis"]], decls: 9, vars: 1, consts: [[1, "wrapper"], [1, "container"], [1, "enableFlex", "rowFlex", "centerFlex", 3, "formGroup", "ngSubmit"], ["formControlName", "batchValue", "type", "number", "placeholder", "Search batch..."], ["id", "btnStart", "type", "submit", "value", "Find", 1, "btnDefault", "btnSuccess", "shadow"]], template: function MainStatisticalAnalysis_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Statistical analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MainStatisticalAnalysis_Template_form_ngSubmit_4_listener() { return ctx.findBatch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-barchart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-linechart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.statsForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _barchart_barchart_component__WEBPACK_IMPORTED_MODULE_4__["BarchartComponent"], _linechart_linechart_component__WEBPACK_IMPORTED_MODULE_5__["LinechartComponent"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 1.7em;\r\n    margin-bottom: 30px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\ninput[type=\"number\"][_ngcontent-%COMP%] {\r\n    border: 2px solid var(--input-border-color);\r\n    background-color: var(--input-border-bg-color);\r\n    color: var(--third-text-color);\r\n    padding: 10px;\r\n    border-radius: 12px;\r\n    margin: 0 5px 0 5px;\r\n    font-size: 0.8em;\r\n    width: 100%;\r\n    max-width: 240px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder {\r\n    color: var(--third-text-color);\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.3em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc3RhdGlzdGljYWwtYW5hbHlzaXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5Qyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6Im1haW4tc3RhdGlzdGljYWwtYW5hbHlzaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJvcmRlci1iZy1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhpcmQtdGV4dC1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbjogMCA1cHggMCA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "UpRY":
/*!*************************************************************************!*\
  !*** ./src/app/main-dashboard/visualization/visualization.component.ts ***!
  \*************************************************************************/
/*! exports provided: VisualizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizationComponent", function() { return VisualizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socketio.service */ "bgkY");
/* harmony import */ var src_app_assets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/assets.service */ "8aCc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VisualizationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Batch id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Produced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Humidity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Amount to produce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Acceptable products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Vibration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Product per minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Defect products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.temperatureIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.Temperature || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.batchIdIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.BatchId || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.producedIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.ProdProcessedCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.humidityIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.Humidity || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.amountToProduceIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.Products || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.acceptableProductsIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.ProdProcessedCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.vibrationIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.Vibration || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.productsPerMinuteIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 18, data_r1.CurSpeed || 0, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.assetsService.defectProductsIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.ProdDefectiveCount || 0);
} }
class VisualizationComponent {
    constructor(socketIOService, assetsService) {
        this.socketIOService = socketIOService;
        this.assetsService = assetsService;
        this.realtimeData = [""];
    }
    ngOnInit() {
        this.socketIOService.listen("data").subscribe((data) => {
            this.realtimeData.push(data);
        });
    }
}
VisualizationComponent.ɵfac = function VisualizationComponent_Factory(t) { return new (t || VisualizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assets_service__WEBPACK_IMPORTED_MODULE_2__["AssetsService"])); };
VisualizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualizationComponent, selectors: [["app-visualization"]], decls: 5, vars: 5, consts: [[1, "container", "shadow"], [1, "enableFlex", "centerFlex"], ["class", "enableFlex flexRow spaceAroundFlex wrapFlex", 4, "ngFor", "ngForOf"], [1, "enableFlex", "flexRow", "spaceAroundFlex", "wrapFlex"], [1, "enableFlex", "rowFlex", "centerFlex", "rtvbox"], [1, "enableFlex", "columnFlex", "centerFlex"], [3, "src"]], template: function VisualizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Real time visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisualizationComponent_div_3_Template, 65, 21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 1, ctx.realtimeData, ctx.realtimeData.length - 1, ctx.realtimeData.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".rtvbox[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 280px;\r\n    padding: 25px 0 25px 0;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    font-weight: bold;\r\n    color: var(--primary-text-color);\r\n    text-transform: uppercase;\r\n    margin-top: 7px;\r\n    width: 100%;\r\n    max-width: 100px;\r\n    text-align: center;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 1.7em;\r\n    color: var(--primary-text-color);\r\n    margin-left: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InZpc3VhbGl6YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ydHZib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogMjVweCAwIDI1cHggMDtcclxufVxyXG5cclxuc3BhbiBzcGFuIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG5zcGFuIHNwYW4gaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Ys4B":
/*!*****************************************************************!*\
  !*** ./src/app/main-dashboard/resources/resources.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");


class ResourcesComponent {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
        this.data = "";
        this.maxResources = 35000;
        this.socketIOService.listen("data").subscribe((data) => {
            this.data = data;
        });
    }
    getResource(resource) {
        let i;
        switch (resource) {
            case "Barley":
                i = Number((this.data.Barley / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceBarley").style.width = i + "%";
                break;
            case "Yeast":
                i = Number((this.data.Yeast / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceYeast").style.width = i + "%";
                break;
            case "Hops":
                i = Number((this.data.Hops / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceHops").style.width = i + "%";
                break;
            case "Malt":
                i = Number((this.data.Malt / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceMalt").style.width = i + "%";
                break;
            case "Wheat":
                i = Number((this.data.Wheat / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceWheat").style.width = i + "%";
                break;
        }
        return i;
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["app-resources"]], decls: 23, vars: 5, consts: [[1, "container", "enableFlex", "centerLeftFlex", "columnFlex", "spaceBetweenFlex", "shadow"], [1, "resourceBg", "enableFlex", "centerLeftFlex", "shadow"], ["id", "resourceBarley"], ["id", "resourceYeast"], ["id", "resourceHops"], ["id", "resourceMalt"], ["id", "resourceWheat"]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Barley ", ctx.getResource("Barley") || 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Yeast ", ctx.getResource("Yeast") || 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hops ", ctx.getResource("Hops") || 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Malt ", ctx.getResource("Malt") || 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wheat ", ctx.getResource("Wheat") || 100, "%");
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n    height: 270px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.resourceBg[_ngcontent-%COMP%] {\r\n    background-color: var(--meter-back-bg-color);\r\n    width: 100%;\r\n    border-radius: 12px;\r\n    padding: 10px 0 10px 0;\r\n    position: relative;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 1em;\r\n    color: var(--secondary-text-color);\r\n    position: absolute;\r\n    width: inherit;\r\n    text-align: center;\r\n    z-index: 2;\r\n}\r\n\r\n#resourceBarley[_ngcontent-%COMP%], #resourceYeast[_ngcontent-%COMP%], #resourceHops[_ngcontent-%COMP%], #resourceMalt[_ngcontent-%COMP%], #resourceWheat[_ngcontent-%COMP%] {\r\n    background-color: var(--primary-meter-bg-color);\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px 0 10px 0;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7Ozs7O0lBS0ksK0NBQStDO0lBQy9DLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoicmVzb3VyY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJlc291cmNlQmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWV0ZXItYmFjay1iZy1jb2xvcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnNwYW4gaDMge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4jcmVzb3VyY2VCYXJsZXksXHJcbiNyZXNvdXJjZVllYXN0LFxyXG4jcmVzb3VyY2VIb3BzLFxyXG4jcmVzb3VyY2VNYWx0LFxyXG4jcmVzb3VyY2VXaGVhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LW1ldGVyLWJnLWNvbG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socketio.service */ "bgkY");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-header/main-header.component */ "6rJU");
/* harmony import */ var _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-navigation/main-navigation.component */ "Bv2G");
/* harmony import */ var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-footer/main-footer.component */ "EzRm");
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ "1wpZ");
/* harmony import */ var _main_dashboard_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-dashboard/create-batch/create-batch.component */ "xALl");
/* harmony import */ var _main_dashboard_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-dashboard/visualization/visualization.component */ "UpRY");
/* harmony import */ var _main_header_switch_color_switch_color_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-header/switch-color/switch-color.components */ "brtR");
/* harmony import */ var _main_header_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-header/search-bar/search-bar.component */ "75Ck");
/* harmony import */ var _main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-header/notifications/notifications.component */ "ZPQk");
/* harmony import */ var _main_dashboard_operations_operations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-dashboard/operations/operations.component */ "6F+d");
/* harmony import */ var _main_dashboard_resources_resources_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-dashboard/resources/resources.component */ "Ys4B");
/* harmony import */ var _main_dashboard_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-dashboard/maintenance/maintenance.component */ "B1sB");
/* harmony import */ var _main_batch_reports_main_batch_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-batch-reports/main-batch-reports.component */ "atB+");
/* harmony import */ var _main_statistical_analysis_main_statistical_analysis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-statistical-analysis/main-statistical-analysis.component */ "ToE8");
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets.service */ "8aCc");
/* harmony import */ var _main_batch_reports_batch_reports_table_batch_reports_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main-batch-reports/batch-reports-table/batch-reports-table.component */ "4CrT");
/* harmony import */ var _main_single_batch_report_main_single_batch_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main-single-batch-report/main-single-batch-report.component */ "z5Dy");
/* harmony import */ var _main_statistical_analysis_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-statistical-analysis/barchart/barchart.component */ "fkvP");
/* harmony import */ var _main_statistical_analysis_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main-statistical-analysis/linechart/linechart.component */ "yOr5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ providers: [_socketio_service__WEBPACK_IMPORTED_MODULE_5__["SocketIOService"], _assets_service__WEBPACK_IMPORTED_MODULE_21__["AssetsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["MainDashboardComponent"] },
                { path: 'dashboard', component: _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["MainDashboardComponent"] },
                { path: 'batch-reports', component: _main_batch_reports_main_batch_reports_component__WEBPACK_IMPORTED_MODULE_19__["MainBatchReports"] },
                { path: 'statistical-analysis', component: _main_statistical_analysis_main_statistical_analysis_component__WEBPACK_IMPORTED_MODULE_20__["MainStatisticalAnalysis"] },
                { path: 'statistical-analysis/batch/:batchId', component: _main_statistical_analysis_main_statistical_analysis_component__WEBPACK_IMPORTED_MODULE_20__["MainStatisticalAnalysis"] },
                { path: 'batch-report/batch/:batchId', component: _main_single_batch_report_main_single_batch_report_component__WEBPACK_IMPORTED_MODULE_23__["MainSingleBatchReport"] }
            ]),
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_7__["MainHeaderComponent"],
        _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["MainNavigationComponent"],
        _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_9__["MainFooterComponent"],
        _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["MainDashboardComponent"],
        _main_dashboard_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_11__["CreateBatchComponent"],
        _main_dashboard_visualization_visualization_component__WEBPACK_IMPORTED_MODULE_12__["VisualizationComponent"],
        _main_header_switch_color_switch_color_components__WEBPACK_IMPORTED_MODULE_13__["SwitchColorComponent"],
        _main_header_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_14__["SearchBarComponent"],
        _main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsComponent"],
        _main_dashboard_operations_operations_component__WEBPACK_IMPORTED_MODULE_16__["OperationsComponent"],
        _main_dashboard_resources_resources_component__WEBPACK_IMPORTED_MODULE_17__["ResourcesComponent"],
        _main_dashboard_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_18__["MaintenanceComponent"],
        _main_batch_reports_main_batch_reports_component__WEBPACK_IMPORTED_MODULE_19__["MainBatchReports"],
        _main_batch_reports_batch_reports_table_batch_reports_table_component__WEBPACK_IMPORTED_MODULE_22__["BatchReportsTable"],
        _main_single_batch_report_main_single_batch_report_component__WEBPACK_IMPORTED_MODULE_23__["MainSingleBatchReport"],
        _main_statistical_analysis_main_statistical_analysis_component__WEBPACK_IMPORTED_MODULE_20__["MainStatisticalAnalysis"],
        _main_statistical_analysis_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_24__["BarchartComponent"],
        _main_statistical_analysis_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_25__["LinechartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"]] }); })();


/***/ }),

/***/ "ZPQk":
/*!**********************************************************************!*\
  !*** ./src/app/main-header/notifications/notifications.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets.service */ "8aCc");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/batch-report/batch", a1]; };
function NotificationsComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, notification_r2.BatchId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Batch production (ID: ", notification_r2.BatchId, ") has been completed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r2.DateTime);
} }
function NotificationsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_div_4_div_4_Template, 8, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.notifications);
} }
class NotificationsComponent {
    constructor(assetsService, socketIOService) {
        this.assetsService = assetsService;
        this.socketIOService = socketIOService;
        this.notifications = [];
        this.numberOfNotifications = this.notifications.length;
        this.hidden = false;
        this.socketIOService.listen("insertData").subscribe((data) => {
            this.notifications.push(data);
            this.numberOfNotifications = this.notifications.length;
            document.getElementById("button").classList.add("blink");
        });
    }
    changeHidden() {
        if (this.hidden == true) {
            this.hidden = false;
            this.notifications = [];
        }
        else if (this.hidden == false && this.notifications.length != 0) {
            this.hidden = true;
            this.numberOfNotifications = 0;
            document.getElementById("button").classList.remove("blink");
        }
    }
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_assets_service__WEBPACK_IMPORTED_MODULE_1__["AssetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"])); };
NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 5, vars: 3, consts: [["id", "button", 1, "enableFlex", "centerFlex", "shadow", 3, "click"], ["id", "alertReminder", 1, "shadow"], [3, "src"], ["id", "notificationDisplay", "class", "shadow", 4, "ngIf"], ["id", "notificationDisplay", 1, "shadow"], ["id", "triangle"], ["id", "notificationDisplayInnerBox", "class", "enableFlex columnFlex rightFlex", 3, "routerLink", 4, "ngFor", "ngForOf"], ["id", "notificationDisplayInnerBox", 1, "enableFlex", "columnFlex", "rightFlex", 3, "routerLink"], ["id", "line"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_Template_span_click_0_listener() { return ctx.changeHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_div_4_Template, 5, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfNotifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.assetsService.bellIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["#button[_ngcontent-%COMP%] {\r\n    background-color: var(--container-bg-color);\r\n    width: 27px;\r\n    height: 25px;\r\n    padding: 5px;\r\n    margin-left: 25px;\r\n    border-radius: 12px;\r\n}\r\n\r\n#button[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--bell-alert-bg-color);\r\n    cursor: pointer;\r\n}\r\n\r\n#alertReminder[_ngcontent-%COMP%] {\r\n    background-color: var(--bell-alert-bg-color);\r\n    position: absolute;\r\n    margin: 0 0 25px 25px;\r\n    padding: 3px 7px 3px 7px;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 0.7em;\r\n    color: var(--secondary-text-color);\r\n    z-index: 1;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 19px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #button[_ngcontent-%COMP%] {\r\n        margin: 10px 0 0 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n.blink[_ngcontent-%COMP%] {\r\n    background-color: var(--container-bg-color);\r\n    animation: blink 1s linear infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    0% {\r\n        background-color: var(--container-bg-color);\r\n    }\r\n    49% {\r\n        background-color: var(--container-bg-color)\r\n    }\r\n    50% {\r\n        background-color: var(--bell-alert-bg-color);\r\n    }\r\n    99% {\r\n        background-color: var(--bell-alert-bg-color);\r\n    }\r\n    100% {\r\n        background-color: var(--container-bg-color);\r\n    }\r\n}\r\n\r\n\r\n\r\n#notificationDisplay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin: 15px 0 0 -200px;\r\n    background-color: var(--notification-bg-color);\r\n    border-radius: 12px;\r\n    z-index: 10;\r\n}\r\n\r\n#notificationDisplay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 0.9em;\r\n    text-transform: uppercase;\r\n    padding: 6px 20px 6px 15px;\r\n    border-radius: 12px 12px 0 0;\r\n    background-color: var(--notification-header-bg-color);\r\n    color: var( --secondary-text-color)\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%] {\r\n    padding: 14px 20px 14px 15px;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]   #line[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    background-color: var(--notification-line-color);\r\n    width: 100%;\r\n    height: 2px;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n    margin-bottom: 6px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]:hover {\r\n    background-color: var(--notification-hover-color);\r\n    cursor: pointer;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]:last-of-type:hover {\r\n    border-radius: 0 0 12px 12px;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type {\r\n    color: var( --secondary-text-color);\r\n    background-color: var(--notification-alert-bg-color);\r\n    font-size: 0.7em;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    padding: 2px 7px 2px 7px;\r\n    border-radius: 12px;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\r\n    font-weight: bold;\r\n}\r\n\r\n#notificationDisplayInnerBox[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(3) {\r\n    font-style: italic;\r\n}\r\n\r\n#triangle[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 14px solid transparent;\r\n    border-right: 14px solid transparent;\r\n    border-bottom: 12px solid var(--notification-header-bg-color);\r\n    margin: -11px 0 0 230px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    #triangle[_ngcontent-%COMP%] {\r\n        margin-left: 140px;\r\n    }\r\n    #notificationDisplay[_ngcontent-%COMP%] {\r\n        margin-left: -135px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUdBLFlBQVk7O0FBRVo7SUFDSSwyQ0FBMkM7SUFDM0MsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0k7UUFDSSwyQ0FBMkM7SUFDL0M7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSwyQ0FBMkM7SUFDL0M7QUFDSjs7QUFHQSwyQkFBMkI7O0FBRTNCO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixxREFBcUQ7SUFDckQ7QUFDSjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnREFBZ0Q7SUFDaEQsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0RBQW9EO0lBQ3BELGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLDZEQUE2RDtJQUM3RCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXItYmctY29sb3IpO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbiNidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVsbC1hbGVydC1iZy1jb2xvcik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNhbGVydFJlbWluZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlbGwtYWxlcnQtYmctY29sb3IpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweCAyNXB4O1xyXG4gICAgcGFkZGluZzogM3B4IDdweCAzcHggN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgI2J1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqIEJsaW5rICoqL1xyXG5cclxuLmJsaW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lci1iZy1jb2xvcik7XHJcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWJnLWNvbG9yKTtcclxuICAgIH1cclxuICAgIDQ5JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyLWJnLWNvbG9yKVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWxsLWFsZXJ0LWJnLWNvbG9yKTtcclxuICAgIH1cclxuICAgIDk5JSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVsbC1hbGVydC1iZy1jb2xvcik7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXItYmctY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyoqIE5vdGlmaWNhdGlvbiBkaXNwbGF5ICoqL1xyXG5cclxuI25vdGlmaWNhdGlvbkRpc3BsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMCAtMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tYmctY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9uRGlzcGxheSBoMyB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4IDZweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1oZWFkZXItYmctY29sb3IpO1xyXG4gICAgY29sb3I6IHZhciggLS1zZWNvbmRhcnktdGV4dC1jb2xvcilcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbkRpc3BsYXlJbm5lckJveCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTRweCAxNXB4O1xyXG59XHJcblxyXG4jbm90aWZpY2F0aW9uRGlzcGxheUlubmVyQm94ICNsaW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGlmaWNhdGlvbi1saW5lLWNvbG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbn1cclxuXHJcbiNub3RpZmljYXRpb25EaXNwbGF5SW5uZXJCb3ggcCB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbiNub3RpZmljYXRpb25EaXNwbGF5SW5uZXJCb3g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90aWZpY2F0aW9uLWhvdmVyLWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbkRpc3BsYXlJbm5lckJveDpsYXN0LW9mLXR5cGU6aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbkRpc3BsYXlJbm5lckJveCBwOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgY29sb3I6IHZhciggLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3RpZmljYXRpb24tYWxlcnQtYmctY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDJweCA3cHggMnB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbiNub3RpZmljYXRpb25EaXNwbGF5SW5uZXJCb3ggcDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI25vdGlmaWNhdGlvbkRpc3BsYXlJbm5lckJveCBwOm50aC1vZi10eXBlKDMpIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuI3RyaWFuZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMnB4IHNvbGlkIHZhcigtLW5vdGlmaWNhdGlvbi1oZWFkZXItYmctY29sb3IpO1xyXG4gICAgbWFyZ2luOiAtMTFweCAwIDAgMjMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgI3RyaWFuZ2xlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICAjbm90aWZpY2F0aW9uRGlzcGxheSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMzVweDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "atB+":
/*!********************************************************************!*\
  !*** ./src/app/main-batch-reports/main-batch-reports.component.ts ***!
  \********************************************************************/
/*! exports provided: MainBatchReports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBatchReports", function() { return MainBatchReports; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _batch_reports_table_batch_reports_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batch-reports-table/batch-reports-table.component */ "4CrT");


class MainBatchReports {
}
MainBatchReports.ɵfac = function MainBatchReports_Factory(t) { return new (t || MainBatchReports)(); };
MainBatchReports.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBatchReports, selectors: [["app-batch-reports"]], decls: 2, vars: 0, consts: [[1, "wrapper", "enableFlex", "columnFlex"]], template: function MainBatchReports_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-batch-reports-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_batch_reports_table_batch_reports_table_component__WEBPACK_IMPORTED_MODULE_1__["BatchReportsTable"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWJhdGNoLXJlcG9ydHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "bgkY":
/*!*************************************!*\
  !*** ./src/app/socketio.service.ts ***!
  \*************************************/
/*! exports provided: SocketIOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIOService", function() { return SocketIOService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");


class SocketIOService {
    constructor() {
        this.url = 'http://localhost:5000';
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])(this.url);
    }
    emit(event, request) {
        this.socket.emit(event, request);
    }
    listen(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(event, (data) => {
                subscriber.next(data);
            });
        });
    }
}


/***/ }),

/***/ "brtR":
/*!*********************************************************************!*\
  !*** ./src/app/main-header/switch-color/switch-color.components.ts ***!
  \*********************************************************************/
/*! exports provided: SwitchColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchColorComponent", function() { return SwitchColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_assets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/assets.service */ "8aCc");


class SwitchColorComponent {
    constructor(assetsService) {
        this.assetsService = assetsService;
        this.switched = false;
        this.lightThemeColors = new Map([
            ["--body-bg-color", "#f4f6fa"],
            ["--primary-text-color", "#000000"],
            ["--secondary-text-color", "#ffffff"],
            ["--third-text-color", "#666766"],
            ["--header-bg-color", "#dfe4ea"],
            ["--navigation-bg-color", "#d1d6e0"],
            ["--navigation-hover-color", "#f59d19"],
            ["--btn-success-bg-color", "#53b36e"],
            ["--btn-success-border-color", "#31ac60"],
            ["--btn-warning-bg-color", "#3996d3"],
            ["--btn-warning-border-color", "#2a81bb"],
            ["--primary-meter-bg-color", "#f49d16"],
            ["--secondary-meter-bg-color", "#354a5e"],
            ["--meter-back-bg-color", "#d0d6e0"],
            ["--bell-alert-bg-color", "#f59d19"],
            ["--notification-alert-bg-color", "#31ac60"],
            ["--notification-bg-color", "#dfe4ea"],
            ["--notification-header-bg-color", "#666766"],
            ["--notification-line-color", "#666766"],
            ["--notification-hover-color", "#f4f6fa"],
            ["--container-bg-color", "#ffffff"],
            ["--search-bg-color", "#d0d6e0"],
            ["--search-border-color", "#666766"],
            ["--switch-color", "#666766"],
            ["--switch-bg-color", "#ffffff"],
            ["--input-border-color", "#bababa"],
            ["--input-border-bg-color", "#ffffff"],
            ["--batch-row-hover-color", "#f4f6fa"],
            ["--batch-row-border-color", "#d1d6e0"],
            ["--footer-bg-color", "rgba(255, 255, 255, 0.75)"]
        ]);
        this.darkThemeColors = new Map([
            ["--body-bg-color", "#2c3e50"],
            ["--primary-text-color", "#ffffff"],
            ["--secondary-text-color", "#ffffff"],
            ["--third-text-color", "#ffffff"],
            ["--header-bg-color", "#3d5369"],
            ["--navigation-bg-color", "#34495e"],
            ["--navigation-hover-color", "#f59d19"],
            ["--btn-success-bg-color", "#53b36e"],
            ["--btn-success-border-color", "#31ac60"],
            ["--btn-warning-bg-color", "#3996d3"],
            ["--btn-warning-border-color", "#2a81bb"],
            ["--primary-meter-bg-color", "#f49d16"],
            ["--secondary-meter-bg-color", "#718093"],
            ["--meter-back-bg-color", "#2c3e50"],
            ["--bell-alert-bg-color", "#f59d19"],
            ["--notification-alert-bg-color", "#31ac60"],
            ["--notification-bg-color", "#3d5369"],
            ["--notification-header-bg-color", "#2c3e50"],
            ["--notification-line-color", "#666766"],
            ["--notification-hover-color", "#34495e"],
            ["--container-bg-color", "#354a5e"],
            ["--search-bg-color", "#2c3e50"],
            ["--search-border-color", "#354a5e"],
            ["--switch-color", "#ffffff"],
            ["--switch-bg-color", "#2c3e50"],
            ["--input-border-color", "#2b3d4f"],
            ["--input-border-bg-color", "#354a5e"],
            ["--batch-row-hover-color", "#2c3e50"],
            ["--batch-row-border-color", "#2c3e50"],
            ["--footer-bg-color", "rgba(0, 0, 0, 0.75)"]
        ]);
    }
    changeTheme() {
        if (this.switched == false) {
            document.getElementById("dot").style.transition = ".4s";
            document.getElementById("dot").style.transform = "translate(23px)";
            this.assetsService.changeAssets("dark");
            for (let [key, value] of this.darkThemeColors) {
                document.documentElement.style.setProperty(key.toString(), value.toString());
            }
            this.switched = true;
        }
        else if (this.switched) {
            document.getElementById("dot").style.transition = ".4s";
            document.getElementById("dot").style.transform = "translate(1px)";
            this.assetsService.changeAssets("light");
            for (let [key, value] of this.lightThemeColors) {
                document.documentElement.style.setProperty(key.toString(), value.toString());
            }
            this.switched = false;
        }
    }
}
SwitchColorComponent.ɵfac = function SwitchColorComponent_Factory(t) { return new (t || SwitchColorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_assets_service__WEBPACK_IMPORTED_MODULE_1__["AssetsService"])); };
SwitchColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchColorComponent, selectors: [["app-switch-color"]], decls: 7, vars: 0, consts: [[1, "enableFlex", "rowFlex", "centerFlex"], [1, "enableFlex", "rowFlex", "shadow"], ["id", "dot", 3, "click"]], template: function SwitchColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LIGHT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchColorComponent_Template_span_click_4_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DARK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n    width: 42px;\r\n    background-color: var(--switch-bg-color);\r\n    margin: 0 10px 0 10px;\r\n    padding: 4px;\r\n    border-radius: 25px;\r\n}\r\n\r\n#dot[_ngcontent-%COMP%] {\r\n    border-radius: 25px;\r\n    padding: 4px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background-color: var(--switch-color);\r\n}\r\n\r\n#dot[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 0.7em;\r\n    color: var(--switch-color);\r\n}\r\n\r\ninput[type=radio][_ngcontent-%COMP%] {\r\n    height: 17px;\r\n    width: 17px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC1jb2xvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSiIsImZpbGUiOiJzd2l0Y2gtY29sb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdj5kaXYge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYmctY29sb3IpO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuI2RvdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zd2l0Y2gtY29sb3IpO1xyXG59XHJcblxyXG4jZG90OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgY29sb3I6IHZhcigtLXN3aXRjaC1jb2xvcik7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9dIHtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIHdpZHRoOiAxN3B4XHJcbn0iXX0= */"] });


/***/ }),

/***/ "fkvP":
/*!**************************************************************************!*\
  !*** ./src/app/main-statistical-analysis/barchart/barchart.component.ts ***!
  \**************************************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");



class BarchartComponent {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
        this.barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color'),
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Amount',
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                        }
                    }]
            },
            title: {
                display: true,
                fontSize: 18,
                text: 'Total, defect and acceptable products',
                fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
            },
            legend: {
                labels: {
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                }
            }
        };
        this.barChartLabels = [''];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            {
                data: [],
                label: 'Acceptable Products',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
            },
            {
                data: [],
                label: 'Defect Products',
                backgroundColor: "rgba(243, 98, 98, 0.5)"
            }
        ];
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            this.initBarChart(data);
        });
    }
    initBarChart(data) {
        this.barChartData = [
            {
                data: [data.ProdProcessedCount[data.ProdProcessedCount.length - 1]],
                label: 'Acceptable Products',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
                hoverBackgroundColor: "rgba(13, 255, 0, 0.7)"
            },
            {
                data: [data.ProdDefectiveCount[data.ProdDefectiveCount.length - 1]],
                label: 'Defect Products',
                backgroundColor: "rgba(243, 98, 98, 0.5)",
                hoverBackgroundColor: "rgba(243, 98, 98, 0.7)"
            }
        ];
    }
}
BarchartComponent.ɵfac = function BarchartComponent_Factory(t) { return new (t || BarchartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
BarchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarchartComponent, selectors: [["app-barchart"]], decls: 2, vars: 6, consts: [[1, "container", "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "plugins", "legend", "chartType"]], template: function BarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiYmFyY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "xALl":
/*!***********************************************************************!*\
  !*** ./src/app/main-dashboard/create-batch/create-batch.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBatchComponent", function() { return CreateBatchComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socketio.service */ "bgkY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CreateBatchComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", type_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r1.value);
} }
class CreateBatchComponent {
    constructor(socketIOService, formBuilder, elementRef) {
        this.socketIOService = socketIOService;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.messageForm = this.formBuilder.group({
            batchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            productType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            productAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            machineSpeed: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
        this.beerTypes = new Map([[0, "Pilsner"], [1, "Wheat"], [2, "IPA"], [3, "Stout"], [4, "Ale"], [5, "Alcohol Free"]]);
        this.speedTypes = [435, 50, 85, 275, 65, 50];
        this.startDisabled = false;
        this.startText = "start";
        this.socketIOService.listen("insertData").subscribe(() => {
            this.startDisabled = false;
            this.startText = "start";
            this.elementRef.nativeElement.querySelector("#btnStart").classList.add("btnSuccess");
        });
    }
    sendMessage(request) {
        this.startDisabled = true;
        this.startText = "running...";
        this.elementRef.nativeElement.querySelector("#btnStart").classList.remove("btnSuccess");
        this.socketIOService.emit('selectBatch', null);
        this.messageForm.value.productType = Number(this.messageForm.value.productType);
        switch (this.messageForm.value.productType) {
            case 0:
                this.messageForm.value.machineSpeed = this.speedTypes[0];
                break;
            case 1:
                this.messageForm.value.machineSpeed = this.speedTypes[1];
                break;
            case 2:
                this.messageForm.value.machineSpeed = this.speedTypes[2];
                break;
            case 3:
                this.messageForm.value.machineSpeed = this.speedTypes[3];
                break;
            case 4:
                this.messageForm.value.machineSpeed = this.speedTypes[4];
                break;
            case 5:
                this.messageForm.value.machineSpeed = this.speedTypes[5];
                break;
        }
        switch (request) {
            case "start":
                this.socketIOService.emit('execute', this.messageForm.value);
                break;
        }
        this.messageForm.reset();
    }
}
CreateBatchComponent.ɵfac = function CreateBatchComponent_Factory(t) { return new (t || CreateBatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CreateBatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateBatchComponent, selectors: [["app-create-batch"]], decls: 11, vars: 6, consts: [[1, "container", "enableFlex", "columnFlex", "centerFlex", "shadow"], [1, "enableFlex", "rowFlex", "centerFlex", "wrapFlex", 3, "formGroup", "ngSubmit"], ["formControlName", "productType", 1, "shadow"], ["disabled", "", "value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "productAmount", "placeholder", "Enter amount...", 1, "shadow"], ["id", "btnStart", "type", "submit", 1, "btnDefault", "btnSuccess", "shadow", 3, "disabled", "value"], [3, "value"]], template: function CreateBatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateBatchComponent_Template_form_ngSubmit_3_listener() { return ctx.sendMessage("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Choose product type...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CreateBatchComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.messageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.beerTypes));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.startText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.startDisabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: ["form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ninput[type=\"number\"][_ngcontent-%COMP%] {\r\n    border: 2px solid var(--input-border-color);\r\n    background-color: var(--input-border-bg-color);\r\n    color: var(--third-text-color);\r\n    padding: 10px;\r\n    border-radius: 12px;\r\n    margin: 0 5px 0 5px;\r\n    font-size: 0.8em;\r\n    width: 100%;\r\n    max-width: 240px;\r\n}\r\n\r\ninput[type=\"number\"][_ngcontent-%COMP%]::placeholder {\r\n    color: var(--third-text-color);\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n    border: 2px solid var(--input-border-color);\r\n    background-color: var(--input-border-bg-color);\r\n    color: var(--third-text-color);\r\n    padding: 10px 0 10px 10px;\r\n    border-radius: 12px;\r\n    margin: 0 5px 0 5px;\r\n    font-size: 0.8em;\r\n    width: 100%;\r\n    max-width: 240px;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n    background-color: var(--input-border-bg-color);\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    form[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n        margin-bottom: 20px;\r\n    }\r\n    form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:first-of-type {\r\n        margin-top: 5px;\r\n    }\r\n    form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-of-type {\r\n        margin: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iYXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5Qyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsOENBQThDO0lBQzlDLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTs7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6ImNyZWF0ZS1iYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWJnLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGlyZC10ZXh0LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwIDVweCAwIDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS10aGlyZC10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlci1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1ib3JkZXItYmctY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNDBweDtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtYm9yZGVyLWJnLWNvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBmb3JtIGlucHV0LFxyXG4gICAgZm9ybSBzZWxlY3Qge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtIHNlbGVjdDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICBmb3JtIGlucHV0Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "yOr5":
/*!****************************************************************************!*\
  !*** ./src/app/main-statistical-analysis/linechart/linechart.component.ts ***!
  \****************************************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socketio.service */ "bgkY");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");



class LinechartComponent {
    constructor(socketIOService) {
        this.socketIOService = socketIOService;
        this.lineChartData = [
            {
                data: [],
                label: "Total products",
                borderColor: 'rgba(13, 255, 0, 1)',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
                lineTension: 0.2
            },
            {
                data: [],
                label: "Defective products",
                borderColor: 'rgba(243, 98, 98, 1)',
                backgroundColor: "rgba(243, 98, 98, 0.5)",
                lineTension: 0.2
            }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Amount',
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                        }
                    }],
                xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Time',
                            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                        }
                    }]
            },
            title: {
                display: true,
                fontSize: 18,
                fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color'),
                text: 'Produced product over time'
            },
            legend: {
                labels: {
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                }
            },
        };
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            this.initLineChart(data);
        });
    }
    initLineChart(data) {
        let time = [];
        for (let i = 0; i < data.ProdProcessedCount.length - 1; i++) {
            time[i] = i;
        }
        this.lineChartLabels = time;
        data.ProdProcessedCount.shift();
        this.lineChartData = [
            {
                data: data.ProdProcessedCount,
                label: "Total products",
                borderColor: 'rgba(13, 255, 0, 1)',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
            },
            {
                data: data.ProdDefectiveCount,
                label: "Defective products",
                borderColor: 'rgba(243, 98, 98, 1)',
                backgroundColor: "rgba(243, 98, 98, 0.5)",
            }
        ];
    }
}
LinechartComponent.ɵfac = function LinechartComponent_Factory(t) { return new (t || LinechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socketio_service__WEBPACK_IMPORTED_MODULE_1__["SocketIOService"])); };
LinechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinechartComponent, selectors: [["app-linechart"]], decls: 2, vars: 6, consts: [[1, "container", "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "plugins"]], template: function LinechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: [".container[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVjaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6ImxpbmVjaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "z5Dy":
/*!********************************************************************************!*\
  !*** ./src/app/main-single-batch-report/main-single-batch-report.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainSingleBatchReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSingleBatchReport", function() { return MainSingleBatchReport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socketio.service */ "bgkY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a1) { return ["/statistical-analysis/batch", a1]; };
function MainSingleBatchReport_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beer type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Amount processed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Acceptable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Defective");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Speed used");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Show statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Batch ID (", ctx_r0.batch.BatchId, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.batch.DateTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.batch.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.logs.ProdProcessedCount[ctx_r0.logs.ProdProcessedCount.length - 1] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.logs.ProdProcessedCount[ctx_r0.logs.ProdProcessedCount.length - 1] - ctx_r0.logs.ProdDefectiveCount[ctx_r0.logs.ProdDefectiveCount.length - 1] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.logs.ProdDefectiveCount[ctx_r0.logs.ProdDefectiveCount.length - 1] || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 8, ctx_r0.batch.CurSpeed, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.batch.BatchId));
} }
class MainSingleBatchReport {
    constructor(route, socketIOService) {
        this.route = route;
        this.socketIOService = socketIOService;
        const routeParams = this.route.snapshot.paramMap;
        const batchIdFromRoute = Number(routeParams.get("batchId"));
        this.socketIOService.emit("selectBatch", batchIdFromRoute);
        this.socketIOService.listen("selectBatch").subscribe((data) => {
            this.batch = data;
        });
        this.socketIOService.emit("selectLogs", batchIdFromRoute);
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            this.logs = data;
        });
    }
}
MainSingleBatchReport.ɵfac = function MainSingleBatchReport_Factory(t) { return new (t || MainSingleBatchReport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketIOService"])); };
MainSingleBatchReport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSingleBatchReport, selectors: [["app-main-single-batch-report"]], decls: 2, vars: 1, consts: [[1, "wrapper"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "enableFlex", "rowFlex", "spaceBetweenFlex"], [1, "enableFlex", "rowFlex", "centerRightFlex"], [1, "btnDefault", "btnSuccess", 3, "routerLink"]], template: function MainSingleBatchReport_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainSingleBatchReport_div_1_Template, 37, 13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.batch != undefined && ctx.logs != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n    font-size: 1.7em;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid var(--batch-row-border-color);\r\n}\r\n\r\nspan[_ngcontent-%COMP%]:last-of-type {\r\n    border: 0;\r\n    margin-top: 35px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\r\n    font-style: italic;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: var(--third-text-color);\r\n    font-size: 1.1em;\r\n    margin: 35px 0 35px 0;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.3em;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: 0.9em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2luZ2xlLWJhdGNoLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoibWFpbi1zaW5nbGUtYmF0Y2gtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYXRjaC1yb3ctYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuc3BhbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuc3BhbiBwOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgY29sb3I6IHZhcigtLXRoaXJkLXRleHQtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIG1hcmdpbjogMzVweCAwIDM1cHggMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map