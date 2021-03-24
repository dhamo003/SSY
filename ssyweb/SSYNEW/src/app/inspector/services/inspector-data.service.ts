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
export class InspectorDataService {
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    getBeneficiaryBasicDetailsByNo(id: any) {
        let paramsMap = new Map<any, any>();
        paramsMap.set('ssiNum', id);
        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryBasicDetailsById(id: any) {
        let paramsMap = new Map<any, any>();
        paramsMap.set('benSno', id);
        let params = new HttpParams();
        paramsMap.forEach((value: any, key: any) => {
            params = params.set(key, value);
        });
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryBankDetails(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getBeneficiaryNomineeDetails(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getBeneficiaryFamilyDetails(id: any, type?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }


    getClaimsByBenficiary(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map((res: any) => {
            return res.claims;
        });
    }
    getClaimsByInspector(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map((res: any) => {
            return res.claims;
        });
    }

    getClaimDetailsByClaimId(id: any, referenceId: any, claimType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetPendingApprovals(id: any, type: any, status: any,wfId: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo +"/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    updateComments(claim: any) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then((res: any) => {
            return res;
        });
    }
    getClaimTrackDetailsByTransactionId(id: any, transactionType: any,wfId?:any) {
        let params = new HttpParams();
        if (wfId == undefined) { wfId = ""; }
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAttachment() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAttachment.url , { params: params });
        return this.apiService.downloadResource(options);
    }
    getPackages() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    let params = new HttpParams();
    //    const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType + "/" + pageNo + "/" + pageSize, { params: params });
    //    return this.apiService.getDropdownData(options).map((res: any) => {
    //        return res;
    //    });
    //}
    getBeneficiaryForcedClosedClaims(benSNo: any, tranctionType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryForcedClosedClaims.url + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getClaimStatusClaims(id: any, type: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getClaimCheckListDetails(checkLisiId) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyClaimsList(id: any, pageNo?: any, pageSize?: any): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyClaimsList.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    saveLegacyClaimDetails(claim: any) {
        return this.apiService.PostData(ApiDictionary.saveLegacyClaimDetails.url, claim).then((res: any) => {
            return res;
        });
    }
    getEducationClaimsSubmittedbyStudentName(name: any, pageNo?: any, pageSize?: any): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getlovDetails(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
}
