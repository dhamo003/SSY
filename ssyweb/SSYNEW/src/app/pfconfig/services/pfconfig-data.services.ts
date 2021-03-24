import { Injectable } from '@angular/core';
import { DropdownListService } from '../../Services/dropdown-list.service';
import { ApiService } from '../../services/api.service';
import { HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiDictionary } from './api-dictionary';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PFConfigDataService {
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    GetPFInterestConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetPFInterestConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    SavePFInterestConfigData(pfConfigData: any) {
        debugger;
        return this.apiService.PostData(ApiDictionary.SavePFInterestConfigData.url, pfConfigData).then((res: any) => {
            return res;
        });
    }

    GetPFInterestConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetPFInterestConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    SavePFCommissionConfigData(pfConfigData: any) {
        debugger;
        return this.apiService.PostData(ApiDictionary.SavePFCommissionConfigData.url, pfConfigData).then((res: any) => {
            return res;
        });
    }
    GetPFCommissionConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetPFCommissionConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPFConfigurations(pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFConfigurations.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPFConfigurationDetails(id: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFConfigurationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    savePFConfiguration(configuration: any) {
        return this.apiService.PostData(ApiDictionary.savePFConfiguration.url, configuration).then((res: any) => {
            return res;
        });
    }
    getReceiptBooks(pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        
        const options = new HttpRequest<any>('GET', ApiDictionary.getReceiptBooks.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetPFCommissionConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetPFCommissionConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getReceiptBookDetails(id: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getReceiptBookDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    saveReceiptBook(configuration: any) {
        return this.apiService.PostData(ApiDictionary.saveReceiptBook.url, configuration).then((res: any) => {
            return res;
        });
    }

    SaveEducationConfigData(educationBenefitConfigDetails: any) {
        return this.apiService.PostData(ApiDictionary.SaveEducationConfigData.url, educationBenefitConfigDetails).then((res: any) => {
            return res;
        });
    }
    SaveHealthFamilyConfigData(educationBenefitConfigDetails: any) {
        return this.apiService.PostData(ApiDictionary.SaveHealthFamilyConfigData.url, educationBenefitConfigDetails).then((res: any) => {
            return res;
        });
    }
    SaveDeathConfigData(educationBenefitConfigDetails: any) {
        return this.apiService.PostData(ApiDictionary.SaveDeathConfigData.url, educationBenefitConfigDetails).then((res: any) => {
            return res;
        });
    }
    SaveDisabilityConfigData(educationBenefitConfigDetails: any) {
        return this.apiService.PostData(ApiDictionary.SaveDisabilityConfigData.url, educationBenefitConfigDetails).then((res: any) => {
            return res;
        });
    }

    GetEducationConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetEducationConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetHealthFamilyConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetHealthFamilyConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetDeathConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetDeathConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetDisabilityConfigDetails(pageNo: any, pageSize: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetDisabilityConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    GetEducationConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetEducationConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetHealthFamilyConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetHealthFamilyConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetDeathConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetDeathConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetDisabilityConfigDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetDisabilityConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    GetBenefitConfigDetails() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetBenefitConfigDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAgentList(userTypeId: number) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentList.url + "/" + userTypeId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    validateReceiptBookName(bookName: string) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.validateReceiptBookName.url + "/" + bookName, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
}