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
import { UserUrl } from './models/userurl.model';
function _window() {
    // return the global native browser window object
    return window;
}
var UserService = /** @class */ (function () {
    function UserService(userinfo) {
        this.userinfo = userinfo;
        var win = _window();
        console.log(win.userTpe);
        console.log(win.userid);
        console.log(win.userMobileNo);
        userinfo.url = win.baseUrl;
        userinfo.benName = win.benName;
        userinfo.checkRegType = win.checkRegType;
        userinfo.chkAddData = win.chkAddData;
        userinfo.deptUserid = win.deptUserid;
        userinfo.district = win.district;
        userinfo.location = win.blocation;
        userinfo.loginType = win.loginType;
        userinfo.skipAdditionaldata = win.skipAdditionaldata;
        userinfo.subDiv = win.subDiv;
        userinfo.userid = win.userid;
        userinfo.userMobileNo = win.userMobileNo;
        userinfo.userName = win.userName;
        userinfo.userTpe = win.userTpe;
        userinfo.userTypeName = win.userTypeName;
        userinfo.token = win.token;
        debugger;
        userinfo.encData = win.encData;
        userinfo.serviceProvider = win.serviceProvider;
        userinfo.isDoubleVerification = win.isdoubleverification;
        localStorage.setItem('token', userinfo.token);
        this.user = Object.assign(new UserUrl(), this.userinfo);
    }
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [UserUrl])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=UserService.js.map