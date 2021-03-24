import { Injectable } from '@angular/core';
import { GlobalErrorHandlingService } from './global-error-handling.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { debug } from 'util';
import { tap } from 'rxjs/operators';

@Injectable()
export class AddAuthorizationHeader implements HttpInterceptor {
    count: number=0;
    constructor() {  }
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let tokenInfo = localStorage.getItem('token');

        if (tokenInfo && tokenInfo) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${tokenInfo}`,
                    'Content-Type': 'application/json'
                }
            });
        }
        let loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
        loadingContainer.style.display = 'block';
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                loadingContainer.style.display = 'none';
            }
        },
            (err: any) => {
                loadingContainer.style.display = 'none';
            }));
    }
    //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //    this.count++;
    //    debugger;
    //    let loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
    //    if (this.count == 1)
    //        loadingContainer.style.display = 'block';
    //    let handleObs: Observable<HttpEvent<any>> = next.handle(req);
    //    handleObs
    //        .catch((err: any) => {
    //            this.count--;
    //            loadingContainer.style.display = 'none';
    //            return Observable.throw(err);
    //        })
    //        .do(event => {
    //            if (event instanceof HttpResponse) {
    //                this.count--;
    //                if (this.count == 0) loadingContainer.style.display = 'none';;
    //            }
    //        })
    //        .subscribe(); /* <---------- ADD THIS */

    //    return handleObs;
    //}

    //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //    let loadingContainer: HTMLElement = document.getElementsByClassName('loading').item(0) as HTMLElement;
    //    loadingContainer.style.display = 'block';
    //    //send the request
    //    next.handle(req).subscribe((observer: any) => {
    //        if (observer.status == 200) {
    //            loadingContainer.style.display = 'none';
    //        }
    //    },
    //        (error: any) => {
    //            loadingContainer.style.display = 'none';    
    //        })
    //    return next.handle(req);
    //}
}
