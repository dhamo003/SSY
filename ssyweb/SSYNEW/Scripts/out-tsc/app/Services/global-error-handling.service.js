var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ToasterService } from './toaster.service';
import { Router } from '@angular/router';
import { ErrorMessage } from './error-message';
import * as StackTrace from 'stacktrace-js';
var GlobalErrorHandlingService = /** @class */ (function () {
    function GlobalErrorHandlingService(injector, toaster, router) {
        this.injector = injector;
        this.toaster = toaster;
        this.router = router;
    }
    GlobalErrorHandlingService.prototype.handleError = function (error) {
        var message = this.GetErrorMessage(error);
        var url = this.GetUrl();
        var user = this.GetUser();
        var stacktrace = this.GetStacktrace(error);
        var eventId = this.GenerateRandomString();
        // check the status of the error and throw error accordingly
        if (error.status === 0) {
            this.toaster.showErrorMessage(ErrorMessage.serverError, '');
            return Observable.throw(error);
        }
        else if (error.status === 401 || error.status === 403) {
            this.toaster.showErrorMessage(ErrorMessage.sessionExpired, '');
            return Observable.of(error.message);
        }
        else if (error.status === 400 || error.status === 404) {
            this.toaster.showErrorMessage(ErrorMessage.badRequest, '');
            return Observable.of(error.message);
        }
        else if (error.status === 408) {
            this.toaster.showErrorMessage(ErrorMessage.timeout, '');
            return Observable.of(error.message);
        }
        else if (error.status >= 500) {
            this.toaster.showErrorMessage(ErrorMessage.serverError, '');
            return Observable.of(error.message);
        }
        return Observable.throw(error);
    };
    GlobalErrorHandlingService.prototype.GetErrorMessage = function (error) {
        var message = '';
        try {
            message = error.message ? error.message : error.toString();
        }
        catch (error) {
            message = 'error will parsing error object.';
        }
        return message;
    };
    GlobalErrorHandlingService.prototype.GetUrl = function () {
        var url = '';
        try {
            var location_1 = this.injector.get(LocationStrategy);
            url = location_1 instanceof PathLocationStrategy ? location_1.path() : '';
        }
        catch (error) {
            url = 'Unable to determine url.';
        }
        return url;
    };
    GlobalErrorHandlingService.prototype.GetUser = function () {
        var user = '';
        try {
            user = "";
        }
        catch (error) {
            user = 'Unable to determine logged in user.';
        }
        return user;
    };
    // get the stack trace
    GlobalErrorHandlingService.prototype.GetStacktrace = function (error) {
        try {
            var stacktrace = '';
            var error2 = new Error('jhsfjksaf');
            StackTrace.fromError(error2)
                .then(function (strackframes) {
            })
                .catch(function (err) { return console.log(); });
        }
        catch (error) { }
        return '';
    };
    GlobalErrorHandlingService.prototype.GenerateRandomString = function () {
        var result;
        var i;
        var j;
        result = '';
        for (j = 0; j < 32; j++) {
            if (j === 8 || j === 12 || j === 16 || j === 20) {
                result = result + '-';
            }
            i = Math.floor(Math.random() * 16)
                .toString(16)
                .toUpperCase();
            result = result + i;
        }
        return result;
    };
    GlobalErrorHandlingService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector,
            ToasterService,
            Router])
    ], GlobalErrorHandlingService);
    return GlobalErrorHandlingService;
}());
export { GlobalErrorHandlingService };
//# sourceMappingURL=global-error-handling.service.js.map