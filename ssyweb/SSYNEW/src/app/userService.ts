import { Injectable } from '@angular/core';
import { UserUrl } from './models/userurl.model';

function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class UserService {

    user: UserUrl;

    constructor(private userinfo: UserUrl) {
        const win = _window();
        console.log(win.userTpe);
        console.log(win.userid);
        console.log(win.userMobileNo);
        userinfo.url =win.baseUrl;
        userinfo.benName =win.benName;
        userinfo.checkRegType =win.checkRegType;
        userinfo.chkAddData =win.chkAddData;
        userinfo.deptUserid =win.deptUserid;
        userinfo.district =win.district;
        userinfo.location = win.blocation;
        userinfo.loginType =win.loginType;
        userinfo.skipAdditionaldata =win.skipAdditionaldata;
        userinfo.subDiv =win.subDiv;
        userinfo.userid =win.userid;
        userinfo.userMobileNo =win.userMobileNo;
        userinfo.userName =win.userName;
        userinfo.userTpe =win.userTpe;
        userinfo.userTypeName = win.userTypeName;
        userinfo.token = win.token;
        debugger;
        userinfo.encData = win.encData;
        userinfo.serviceProvider = win.serviceProvider;
        userinfo.isDoubleVerification = win.isdoubleverification;
        localStorage.setItem('token', userinfo.token);
        this.user = Object.assign(new UserUrl(), this.userinfo);

    }
}