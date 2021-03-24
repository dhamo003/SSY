import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';




@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    // Accruals Micro service url
    private accrualServiceUrl: string = "";
    private serviceUrl: string = environment.apiurl;


    getDropdownDataForMaster(options: HttpRequest<any>) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params, responseType:'text'
        });
    }
    getDropdownData2(options: HttpRequest<any>) {
        return this.http.get(this.serviceUrl + options.url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            params: options.params, responseType: 'text'
        });
    }
    public async downloadResource(options: HttpRequest<any>): Promise<Blob> {
        const file = await this.http.get<Blob>(
            this.serviceUrl + options.url,
            { responseType: 'blob' as 'json' }).toPromise();
        return file;
    }

    getReportsTypedDataWithResultAndStatusCode<T>(
        options: HttpRequest<any>
    ): Observable<T> {
        return this.http
            .get(this.serviceUrl + options.url, { params: options.params })
            .map((res: any) => res.result as T);
    }

    getDropdownData(options: HttpRequest<any>) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params
        });
    }
    getStaticData(options: HttpRequest<any>) {
        return this.http.get(options.url, {
            params: options.params
        });
    }
    getTypedData<T>(options: HttpRequest<any>): Observable<T> {
        return this.http.get<T>(this.serviceUrl + options.url, {
            params: options.params
        });
    }

    PostData(url: string, postdata: string) {
         return this.http.post(this.serviceUrl + url, postdata).toPromise();
    }
    PostData2(url: string, postdata: string) {
        debugger;
        var res = this.http.post(this.serviceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
        return res;
    }
    PutDataToTemplate(url: string, postdata: string) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    }

    PutDataToReportScheduler(url: string, postdata: string) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    }
    public async genaratePdf(url, postdata) {
        return this.http.post(this.serviceUrl + url, postdata, { responseType: 'blob', observe: 'response' }).toPromise();
    }
    DeleteDataToAccrual(options: HttpRequest<any>) {
        return this.http.delete(this.accrualServiceUrl + options.url, {
            params: options.params
        }).toPromise();
    }



    deleteServiceData(url) {
        return this.http.delete(this.serviceUrl +url).toPromise();
    }

    PutData(url: string, postdata: string) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    }

    // This method is called in case of a PUT request where Accrual service is directly invoked
    PostAccuralServiceData(url: string, postdata: string) {
        return this.http.post(this.accrualServiceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    }

    PutAccuralData(url: string, postdata: string) {
        return this.http.put(this.serviceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    }


}
