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
import 'rxjs/add/observable/throw';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
var AddAuthorizationHeader = /** @class */ (function () {
    function AddAuthorizationHeader() {
        this.count = 0;
    }
    AddAuthorizationHeader.prototype.intercept = function (req, next) {
        var tokenInfo = localStorage.getItem('token');
        if (tokenInfo && tokenInfo) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + tokenInfo,
                    'Content-Type': 'application/json'
                }
            });
        }
        var loadingContainer = document.getElementsByClassName('loading').item(0);
        loadingContainer.style.display = 'block';
        return next.handle(req).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                loadingContainer.style.display = 'none';
            }
        }, function (err) {
            loadingContainer.style.display = 'none';
        }));
    };
    AddAuthorizationHeader = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], AddAuthorizationHeader);
    return AddAuthorizationHeader;
}());
export { AddAuthorizationHeader };
//# sourceMappingURL=add-authorization-header.service.js.map