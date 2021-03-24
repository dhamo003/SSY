import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class ToasterService {
    constructor() { }

    showSuccessMessage(message: string, action: string) {
        //this.snackBar.open(message, action, {
        //    duration: 3000,
        //    extraClasses: ['success']
        //});
    }

    showErrorMessage(message: string, action: string) {
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
    }

    showWarningMessage(message: string, action: string) {
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
    }

    showOkCancel(message: string, action: string): Observable<boolean> {
        //const snackBarRef = this.snackBar.openFromComponent(ToasterDiallog, {
        //    data: message,
        //    extraClasses: ['warning', 'has-action']
        //});
        //snackBarRef.instance.dialogRef = snackBarRef;
        const result = new Subject<boolean>();
        //const subscription = snackBarRef.instance.okCancel.subscribe(flag => {
        //    result.next(flag);
        //});
        //snackBarRef.afterDismissed().subscribe(() => {
        //    subscription.unsubscribe();
        //});
       return result.asObservable();
    }
}
