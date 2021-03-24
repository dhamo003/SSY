
import { HttpClient, HttpRequest, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ApiDictionary } from './api-dictionary';

@Injectable()
export class TresurerDataService {
   
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    getRLOBankDetails(id: any, bankStatusId: number = 1) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRLOBankDetails.url + "/" + id + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getRLOBankDetailsByUserId(id: any, userId: number, bankStatusId: number = 1) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRLOBankDetails.url + "/" + id + "/" + userId + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPaymentProcessedDetails(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPaymentProcessedDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    
    getRLOOfficeUserInformation(id: any, type: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getRLOUserInfoByProcessingId(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetRLOUserInfoByProcessingId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    savePaymentReleaseClaims(claim: any) {
        return this.apiService.PostData(ApiDictionary.savePaymentRelease.url, claim).then((res: any) => {
            return res;
        });
    }
    //dropdown services
    getTreasurerPaymentProcesses(id: any, type: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getTreasurerPaymentProcesses.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getFundReleaseDetails(id: any, statusId: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getFundReleaseDetails.url + "/" + id + "/" + type + "/" + wfId + "/" + statusId, { params: params });
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundReleaseDetails.url + "/" + id + "/" + statusId + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getFundRequestedClaimsById(Id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getNEFTDetailsById(Id: any) {
        let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getNEFTDetailsById.url + "/" + Id, { params: params });
        //return this.apiService.getDropdownData(options).map((res: any) => {
        const options = new HttpRequest<any>('GET', ApiDictionary.getNEFTDetailsById.url, { params: params });
        return this.apiService.getStaticData(options).map((res: any) => {
            return res;
        });
    }
    getPaymentNEFTDetails(claims: any) {
        return this.apiService.PostData(ApiDictionary.getNEFTDetailsById.url, claims).then((res: any) => {
            return res;
        });
    }
    getBeneficiaryPaymentNEFTDetails(fundReleaseOrderHdrId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryPaymentNEFTDetails.url + "/" + fundReleaseOrderHdrId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    updateComments(claim: any) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then((res: any) => {
            return res;
        });
    }
    
    getPaymentReleaseDetails(id: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPaymentReleaseDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    
    getPaymentReleaseById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPaymentReleaseById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getFundRequestedExpensesById(Id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
}