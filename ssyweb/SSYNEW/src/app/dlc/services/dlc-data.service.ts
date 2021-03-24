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
export class DlcDataService {

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
    getClaimsByDlc(id: any) {
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

    GetPendingApprovals(id: any, type: any, status: any, wfId: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    updateComments(claim: any) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then((res: any) => {
            return res;
        });
    }
    getAttachment() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    }

    getFundRequestedClaims(id: number, type: any, wfId: any, statusId: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        //Passing default search parameters for rlo: any, fundRequestNo: any, requestDate: any implemented in CEO Fund Grids
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + type + "/" + wfId + "/" + "0" + "/" + 0 + "/" + "0"+ "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
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
    getRLOOfficeUserInformation(id: any, type: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
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
    updateWorkFlowStatus(data:any) {
        let params = new HttpParams();
        return this.apiService.PostData(ApiDictionary.updateWorkFlowStatus.url, data).then((res: any) => {
            return res;
        });
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
    getClaimStatusClaims(id: any, type: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
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
    getDLCUtilizationCertificates(id: number, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getDLCUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetReleaseOrders(rloOfficeId: number, finYearId: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetFinancialYears() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    saveUtilizationCertificate(utilizationCertificate: any) {
        return this.apiService.PostData(ApiDictionary.saveUtilizationCertificate.url, utilizationCertificate).then((res: any) => {
            return res;
        });
    }
    getUtilizationCertificateDetails(ucId: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    downloadUtilizationCertificate(ucId: number) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(ApiDictionary.getUtilizationCertificate.url + "/" + ucId, ucId);
    }
    getBoardMasterData() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetDistricts() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getDistricts.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetLocationCodes(districtId: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLocationCodes.url + "/" + districtId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    CalculatePFInterest(pfInterest: any) {
        return this.apiService.PostData(ApiDictionary.calculatePFInterest.url, pfInterest).then((res: any) => {
            return res;
        });
    }
}


