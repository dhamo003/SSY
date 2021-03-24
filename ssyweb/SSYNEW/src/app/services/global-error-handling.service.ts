import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ToasterService } from './toaster.service';
import { Router } from '@angular/router';
import { ErrorMessage } from './error-message';
import * as StackTrace from 'stacktrace-js';


@Injectable()
export class GlobalErrorHandlingService implements ErrorHandler {
    constructor(
        private injector: Injector,
        public toaster: ToasterService,
        public router: Router
    ) { }

    handleError(error: any) {
        const message = this.GetErrorMessage(error);
        const url = this.GetUrl();
        const user = this.GetUser();
        const stacktrace = this.GetStacktrace(error);
        const eventId = this.GenerateRandomString();

     
        // check the status of the error and throw error accordingly
        if (error.status === 0) {
            this.toaster.showErrorMessage(ErrorMessage.serverError, '');
            return Observable.throw(error);
        } else if (error.status === 401 || error.status === 403) {
            this.toaster.showErrorMessage(ErrorMessage.sessionExpired, '');
            return Observable.of(error.message);
        } else if (error.status === 400 || error.status === 404) {
            this.toaster.showErrorMessage(ErrorMessage.badRequest, '');
            return Observable.of(error.message);
        } else if (error.status === 408) {
            this.toaster.showErrorMessage(ErrorMessage.timeout, '');
            return Observable.of(error.message);
        } else if (error.status >= 500) {
            this.toaster.showErrorMessage(ErrorMessage.serverError, '');
            return Observable.of(error.message);
        }

        return Observable.throw(error);
    }

    private GetErrorMessage(error): string {
        let message = '';
        try {
            message = error.message ? error.message : error.toString();
        } catch (error) {
            message = 'error will parsing error object.';
        }
        return message;
    }

    private GetUrl(): string {
        let url = '';
        try {
            const location = this.injector.get(LocationStrategy);
            url = location instanceof PathLocationStrategy ? location.path() : '';
        } catch (error) {
            url = 'Unable to determine url.';
        }
        return url;
    }

    private GetUser(): string {
        let user = '';
        try {
            user ="";
        } catch (error) {
            user = 'Unable to determine logged in user.';
        }
        return user;
    }

    // get the stack trace
    private GetStacktrace(error: any): string {
        try {
            const stacktrace = '';
            const error2 = new Error('jhsfjksaf');
            StackTrace.fromError(error2)
                .then(strackframes => {
                })
                .catch(err => console.log());
        } catch (error) { }
        return '';
    }

    private GenerateRandomString(): string {
        let result: string;
        let i: string;
        let j: number;

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
    }
}
