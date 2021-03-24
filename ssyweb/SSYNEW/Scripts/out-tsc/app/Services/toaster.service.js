var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
var ToasterService = /** @class */ (function () {
    function ToasterService() {
    }
    ToasterService.prototype.showSuccessMessage = function (message, action) {
        //this.snackBar.open(message, action, {
        //    duration: 3000,
        //    extraClasses: ['success']
        //});
    };
    ToasterService.prototype.showErrorMessage = function (message, action) {
        //if (action === '') {
        //    this.snackBar.open(message, action, {
        //        duration: 3000,
        //        extraClasses: ['error']
        //    });
        //} else {
        //    this.snackBar.open(message, action, {
        //        extraClasses: ['error']
        //    });
        //}
    };
    ToasterService.prototype.showWarningMessage = function (message, action) {
        //if (action === '') {
        //    this.snackBar.open(message, action, {
        //        duration: 3000,
        //        extraClasses: ['warning']
        //    });
        //} else {
        //    this.snackBar.open(message, action, {
        //        extraClasses: ['warning']
        //    });
        //}
    };
    ToasterService.prototype.showOkCancel = function (message, action) {
        //const snackBarRef = this.snackBar.openFromComponent(ToasterDiallog, {
        //    data: message,
        //    extraClasses: ['warning', 'has-action']
        //});
        //snackBarRef.instance.dialogRef = snackBarRef;
        var result = new Subject();
        //const subscription = snackBarRef.instance.okCancel.subscribe(flag => {
        //    result.next(flag);
        //});
        //snackBarRef.afterDismissed().subscribe(() => {
        //    subscription.unsubscribe();
        //});
        return result.asObservable();
    };
    ToasterService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());
export { ToasterService };
//# sourceMappingURL=toaster.service.js.map