import { Injectable } from '@angular/core';
import { DropdownListService } from '../../Services/dropdown-list.service';
import { ApiService } from '../../services/api.service';
import { HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiDictionary } from './api-dictionary';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClaimConfig } from '../../claim/models/claimconfig.model';

@Injectable()
export class ClaimDataService {
   
    
    eduConfig: Array<ClaimConfig>;
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    getBeneficiaryBasicDetailsByNo(id: any, isRegistrationNo?:any) {
        let paramsMap = new Map<any, any>();
        paramsMap.set('ssiNum', id);
        paramsMap.set('isRegistrationNo', isRegistrationNo);
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
        if (type == undefined) { type = "" };
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryEduCount(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryEduCount.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getAllHospitals() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetAllHospitals.url, { params: params });
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

    getClaimConfiguration(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetClaimConfigDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getClaimConfigurationMaster() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.GetClaimConfigMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    createClaim(claim: any) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then((res: any) => {
            return res;
        });
    }
    updateClaim(claim: any) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then((res: any) => {
            return res;
        });
    }
    getClaimsByBenficiary(id: any, entrypoint: any, userType: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaims.url + "/" + id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAllClaimsByAgent(id: any, entrypoint: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAllClaimsByAgentId.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAllDraftClaimsByAgent(id: any, entrypoint: any, ssinSearchText: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAllClaimsbByAgentDraft.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAllDraftClaimsByBen(id: any, entrypoint: any, userType: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAllClaimsbByDraft.url + "/" + id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
   
    downloadReceipt(benName: any, ssin: any, claimRefernceNo: any, amount: any, name: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getReceipt.url + "/" + benName + "/" + ssin + "/" + claimRefernceNo + "/" + amount + "/" + name, { params: params });
        return this.apiService.downloadResource(options);
    }
    getClaimDetailsByClaimId(id: any, referenceId:any,claimType:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getClaimDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimDetailsById.url + "/" + id , { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getClaimTrackDetailsByTransactionId(id: any, transactionType: any, wfId?: any) {
        let params = new HttpParams();
        if (wfId == undefined) { wfId = ""; }
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    genaratePdfFormV(claim: any) {
        return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    }

    getAttachment() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAttachment.url , { params: params });
        return this.apiService.downloadResource(options);
    }

    deleteClaimById(claimId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.deleteClaimById.url + "/" + claimId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getAllReferralClaimsByBenficiary(id: any, entrypoint: any, userType: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any): any {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAllBeneficiaryClaimRefers.url+"/"+id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAllReferralClaimsByAgent(id: any, entrypoint: any, ssinSearchText: any, claimReferenceNoText: any, pageNo?: any, pageSize?: any): any {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAllAgentClaimRefers.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getActiveFinancialYear() {
        const options = new HttpRequest<any>('GET', ApiDictionary.getActiveFinancialYear.url);
        return this.apiService.getDropdownData(options).map((res: any) => {
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
    getBeneficiaryHealthClaimAmount(benSno: any, typeOfClaim: any): any {
        let params = new HttpParams();
        let options;
        if (typeOfClaim == undefined || typeOfClaim == null) {
            options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno, { params: params });
        }
        else {
            options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno + "/" + typeOfClaim, { params: params });
        }
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
    getBeneficiaryAppliedDisabilities(id: any , claimId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryAppliedDisabilities.url + "/" + id + "/" + claimId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPfBalance(bensno: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPfBalance.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    validatePfSubmit(ssiNumber: any, nomineeId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.validatePfSubmit.url + "/" + ssiNumber + "/" + nomineeId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLastPaidPfDetails( benSno: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLastPaidPfDetails.url +  "/" + benSno, { params: params });
        // const options = new HttpRequest<any>('GET', ApiDictionary.getLastPaidPfDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => { return res });
    }
    getBeneficiaryDetailsBySearch(searchId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryDetailsBySearch.url + "/" + searchId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryDetailsBySearch1(searchId: any, isPFDeposit: boolean) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryDetailsBySearch.url + "/" + searchId + "/" + isPFDeposit, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyPFBeneficiaryBasicDetailsByID(searchId: any, isPFDeposit: boolean) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyPFBeneficiaryBasicDetailsByID.url + "/" + searchId + "/" + isPFDeposit, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    savePFCollectionDetails(pfCollection: any) {
        return this.apiService.PostData(ApiDictionary.savePFCollectionDetails.url, pfCollection).then((res: any) => {
            return res;
        });
    }

    getPFMasterConfigDetails() {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFMasterConfigDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getAgentCollectedAmount(userId: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentCollectedAmount.url + "/" + userId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }


    getPFDepositDetailsByAgentId(id: any, entrypoint: any,workerTypeId:any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFDepositDetailsByAgentId.url + "/" + id + "/" + entrypoint + "/" + workerTypeId + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //submitPFDepositDetails(pfDeposit: any) {
    //    return this.apiService.PostData(ApiDictionary.submitPFDepositDetails.url, pfDeposit).then((res: any) => {
    //        return res;
    //    });
    //}

    submitPFDepositDetails1(userId: any,rloId:any,bankId:any,payInslipNo) {
        return this.apiService.PostData(ApiDictionary.submitPFDepositDetails.url + "/" + userId + "/" + rloId + "/" + bankId + "/" + payInslipNo,null).then((res: any) => {
            return res;
        });
    }
    submitPFDepositDetails(pfDepositDetails: any) {
        return this.apiService.PostData2(ApiDictionary.submitPFDepositDetails.url, pfDepositDetails).then((res: any) => {
            return res;
        });
    }
    isBenNomineeClaimSubmitted(benSno : any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isBenNomineeClaimSubmitted.url + "/" + benSno, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isSameBenNomineeClaimSubmitted(benSno: any, nomineeId: any, claimType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isSameBenNomineeClaimSubmitted.url + "/" + benSno + "/" + nomineeId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getNomineeClaimEntryValidation(id: any) {

        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getNomineeClaimEntryValidation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //getAgentList
    getAgentList(userTypeId: number) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentList.url + "/" + userTypeId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBenefitConfigurationDetails(benefitType:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBenefitConfigurationDetails.url + "/" + benefitType, { params: params });
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
    isValidMonthSubmitted(benSno: any, monthId: any, year: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isValidMonthSubmitted.url + "/" + benSno + "/" + monthId + "/" + year, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isValidBookReceipt(bookId: any, receiptId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isValidBookReceipt.url + "/" + bookId + "/" + receiptId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    submitLegacyPFDetails(pfCollectionMasterList: any) {
        debugger;
        return this.apiService.PostData(ApiDictionary.submitLegacyPFDetails.url, pfCollectionMasterList).then((res: any) => {
            return res;
        });
    }
    getSubDivRLOBankDetails(id: any, workerTypeId:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getSubDivRLOBankDetails.url + "/" + id + "/" + workerTypeId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    //getAgentBooks(id: any) {
    //    let params = new HttpParams();
    //    const options = new HttpRequest<any>('GET', ApiDictionary.getAgentBooks.url + "/" + id, { params: params });
    //    return this.apiService.getDropdownData(options).map((res: any) => {
    //        return res;
    //    });
    //}
    getAgentLocationWise(userTypeId: number,userid:number) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentLocationWise.url + "/" + userTypeId + "/" + userid, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getAgentBooks(id: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentBooks.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getNextReceiptNo(bookId: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getNextReceiptNo.url + "/" + bookId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    savePayInSlip(payInSlip: any) {
        return this.apiService.PostData(ApiDictionary.savePayInSlip.url, payInSlip).then((res: any) => {
            return res;
        });
    }

    getPFDepositStatusDetailsByAgentId(id: any, entrypoint: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFDepositStatusDetailsByAgentId.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    isAgentAllDepositsPayInSlipsUploaded(agentId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isAgentAllDepositsPayInSlipsUploaded.url + "/" + agentId, { params: params });
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
    getAgentLegacyPfDetails(id: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentLegacyPfDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAgentDetailsForDeposit(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentDetailsForDeposit.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPFDeposits(userId: any, userType: any, status: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFDeposits.url + "/" + userId + "/" + userType + "/" + status + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getCollections(pfDepositId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getCollections.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyCollections(pfDepositId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyCollections.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPFDepositStatusDetailsByUser(id: any, userType: any,depositFromDate:any,depositToDate:any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFDepositStatusDetailsByUser.url + "/" + id + "/" + userType + "/" + depositFromDate + "/" + depositToDate+ "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getUserDetails(userId: number) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getUserDetails.url + "/" + userId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    checkReceiptNoForAgentBook(bookId: any, receiptNo:any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.checkReceiptNoForAgentBook.url + "/" + bookId + "/" + receiptNo, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getCollectionFinancialYear(collectionDate: Date) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getCollectionFinancialYear.url + "/" + collectionDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryPFDetails(id: any, page?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryPFDetails.url + "/" + id + "/" + page + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isDuplicateDependentSubmitted(benSno: any, dependentId: any, claimId: any, onBehalfBen? :any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isDuplicateDependentSubmitted.url + "/" + benSno + "/" + dependentId + "/" + claimId + "/" + onBehalfBen, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getAgentCollectionBooks(id: number, collectionDate: Date, depositDate: Date): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAgentCollectionBooks.url + "/" + id + "/" + collectionDate.toISOString() + "/" + depositDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyPFDetails(id: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyPFDetails.url + "/" + id  + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyPFCollectionDetails(id: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyPFCollectionDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getLegacyPFCollections(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLegacyPFCollections.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    deleteClaimExceptions(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.deleteClaimExceptions.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    genaratePdfFormIV(formDetails: any) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfFormIV.url, formDetails);
    }
    genaratePdfLegacyFormIV(formDetails: any) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfLegacyFormIV.url, formDetails);
    }
    getfinanacialYearListDetails(depositDate: Date) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getfinanacialYearListDetails.url + "/" + depositDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isValidCollectionYear(financialYearId: any, collectionDate: Date) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isValidCollectionYear.url + "/" + financialYearId + "/" + collectionDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isInterestCalculatedforBen(financialYearId: any, bensno: any) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isInterestCalculatedforBen.url + "/" + financialYearId + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getSubmittedLegacyPFDetails(id: any, pageNo?: any, pageSize?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getSubmittedLegacyPFDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    saveAdjustment(adjustment: any) {
        return this.apiService.PostData(ApiDictionary.saveAdjustment.url, adjustment).then((res: any) => {
            return res;
        });
    }
    getAdjustmentBeneficiaryBasicDetailsByID(searchId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getAdjustmentBeneficiaryBasicDetailsByID.url + "/" + searchId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    genaratePdfPayInSlip(formDetails: any) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfPayInSlip.url, formDetails);
    }
    isCAFUpdated(id: any, isRegistrationNo: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isCAFUpdated.url + "/" + id + "/" + isRegistrationNo, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    decryptGripsResponse(gripsResponse: any) {
        return this.apiService.PostData(ApiDictionary.decryptGripsResponse.url, gripsResponse).then((res: any) => {
            return res;
        });
    }
    decryptGripsDoubleVerificationResponse(gripsResponse: any) {
        return this.apiService.PostData(ApiDictionary.decryptGripsDoubleVerificationResponse.url, gripsResponse).then((res: any) => {
            return res;
        });
    }
    repayToGrips(pfDepositId: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.repayToGrips.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData2(options).map((res: any) => {
            return res;
        });
    }
    postDoubleVerificationGrips(pfDepositId: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.postDoubleVerificationGrips.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData2(options).map((res: any) => {
            return res;
        });
    }
    downloadPFDepositDetails(pfDepositId: number) {
        return this.apiService.genaratePdf(ApiDictionary.downloadPFDepositDetails.url + "/" + pfDepositId, pfDepositId);
    }
    getRegistrationNumber(ssin: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRegistrationNumber.url + "/" + ssin, { params: params });
        return this.apiService.getDropdownData2(options).map((res: any) => {
            return res;
        });
    }
    getPFDepositAttachments(pfDepositId: number): any {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPFDepositAttachments.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getLWCBankDetails(userId: any, workerTypeId: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getLWCBankDetails.url + "/" + userId + "/" + workerTypeId, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBeneficiaryPFAccountDetails(bensno: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryPFAccountDetails.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
}
