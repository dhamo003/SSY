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
export class AlcDataService {
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    getClaimDetailsByClaimId(id: any, referenceId: any, claimType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            debugger;
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

    GetPendingApprovals(id: any, type: any, status: any, wfId: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId , { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    updateComments(claim: any) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then((res: any) => {
            return res;
        });
    }

    GetApprovalPremission(id: any, type: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getApprovalPremission.url + "/" + id + "/" + type , { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAttachment() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAttachment.url , { params: params });
        return this.apiService.downloadResource(options);
    }

    GetAllApprovalClaims(id: any, type: any,boardId?:any,claimType?:any,locationsId?:any) {
        debugger;
        let params = new HttpParams();
        if (boardId == null || boardId == 'undefined') boardId = "0";
        if (claimType == null || claimType == 'undefined') claimType = "0";
        if (locationsId == null || locationsId == 'undefined') locationsId = "0";

        const options = new HttpRequest<any>('GET', ApiDictionary.getAllApprovalClaims.url + "/" + id + "/" + type + "/" + boardId + "/" + claimType+"/"+locationsId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    GetAlcInformation(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAlcInformation.url+"/"+id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    saveProcessingClaims(claim: any) {
        debugger;
        return this.apiService.PostData(ApiDictionary.saveProcessingClaims.url,claim).then((res: any) => {
            return res;
        });
    }

    getRLOOfficeUserInformation(id: any,type:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id+"/"+type, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getFundRequestedClaims(id: number, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getBoardMasterData() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getWorkerTypeMasterData() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getWorkerTypeDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getLocationsMasterData(id:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLocationDetails.url+"/"+id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getClaimTypesMasterData() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimTypeMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    saveFundRequesteClaims(claim: any) {
        return this.apiService.PostData(ApiDictionary.saveFundRequestClaims.url, claim).then((res: any) => {
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

    GetFundRequestClaims(Id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    
    getReleaseFundRequest(id: any, statusId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getClaimTrackDetailsByTransactionId(id: any, transactionType: any,wfId?:any) {
        let params = new HttpParams();
        if (wfId == undefined) { wfId = "";}
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //
    getPaymentProcessDetails(id: any, statusId: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPaymentProcessDetails.url + "/" + id + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPaymentProcessById(paymentProcessId: any): any {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPaymentProcessById.url + "/" + paymentProcessId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            debugger;
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
    getFundReleaseClaimsByFundReleaseHdrId(Id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundReleaseClaimsByFundReleaseHdrId.url + "/" + Id, { params: params });
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
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/"  + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getlovDetails(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    saveFundRequestExpenses(fundRequest: any) {
        return this.apiService.PostData(ApiDictionary.saveFundRequestExpenses.url, fundRequest).then((res: any) => {
            return res;
        });
    }

    getFundRequestedExpenses(id: number, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestedExpenses.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
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
    getUtilizationCertificates(id: number, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    GetReleaseOrders(rloOfficeId: number, finYearId: number, boardId: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId + "/" + boardId, { params: params });
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
    getClaimCheckListDetails(checkLisiId) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //genaratePdfFormV(claim: any) {
    //    return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    //}
    getAllApprovalSearchClaims(id: any, type: any, ssin: any,benName:any,benMobile:any, boardId?: any, claimType?: any, locationsId?: any) {
        debugger;
        let params = new HttpParams();
        if (boardId == null || boardId == 'undefined') boardId = "0";
        if (claimType == null || claimType == 'undefined') claimType = "0";
        if (locationsId == null || locationsId == 'undefined') locationsId = "0";

        const options = new HttpRequest<any>('GET', ApiDictionary.getAllApprovalSearchClaims.url + "/" + id + "/" + type + "/" + ssin + "/" + benName + "/" + benMobile + "/" + boardId + "/" + claimType + "/" + locationsId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getFundRequestSearchClaims(Id: any,ssin: any, benName: any, benMobile: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getFundRequestSearchClaims.url + "/" + Id + "/" + ssin + "/" + benName + "/" + benMobile, { params: params });
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
    getEducationClaimsSubmittedbyStudentName(name: any, pageNo?: any, pageSize?: any): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
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
    updateNomineeDetails(benNomineeDetails: any) {
        return this.apiService.PostData(ApiDictionary.updateNomineeDetails.url, benNomineeDetails).then((res: any) => {
            return res;
        });
    }
}
