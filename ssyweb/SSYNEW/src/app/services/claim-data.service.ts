import { Injectable } from '@angular/core';
import { DropdownListService } from '../Services/dropdown-list.service';
import { ApiService } from '../services/api.service';
import { HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiDictionary } from './api-dictionary';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClaimConfig } from '../claim/models/claimconfig.model';


@Injectable()
export class ClaimNomineeDataService {
    
    eduConfig: Array<ClaimConfig>;
    constructor(public apiService: ApiService, public _http: HttpClient) { }

    getBeneficiaryBasicDetailsByNo(id: any, isRegistrationNo?: any) {
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
    getBeneficiaryFamilyDetails(id: any, type?: any) {
        let params = new HttpParams();
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
    createClaim(claim: any) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then((res: any) => {
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
    getRecipt(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map((res: any) => {
            return res.claims;
        });
    }
    downloadReceipt(benName: any, ssin: any, claimRefernceNo: any, amount: any, name: any, nomineeName: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getReceipt.url + "/" + benName + "/" + ssin + "/" + claimRefernceNo + "/" + amount + "/" + nomineeName + "/" + name, { params: params });
        return this.apiService.downloadResource(options);
    }
    genaratePdfFormV(claim: any) {
        return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    }
    getBeneficiaryHealthClaimAmount(benSno: any, typeOfClaim?: any): any {
        let params = new HttpParams();
        if (typeOfClaim == undefined) { typeOfClaim = ""; }
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno + "/" + typeOfClaim, { params: params });
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
    getBeneficiaryNomineeDetails(id: any) {//, type ?: any
        
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });// + "/" + type
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getPfBalance(regNumber: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getPfBalance.url + "/" + regNumber, { params: params });
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
    getNomineeClaimEntryValidation(id: any) {
        
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getNomineeClaimEntryValidation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    
    sendOTPforNominee(ssinNo: any, mobileNo: any) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.sendOTPforNominee.url + "/" + ssinNo + "/" + mobileNo, { params: params });
        return this.apiService.getDropdownDataForMaster(options).map((res: any) => {
            return res;
        });
    }

    verifyOTP(mobileNo: any, otpNumber: any) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.verifyOTP.url + "/" + mobileNo + "/" + otpNumber, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    pullTrack(claimRefNo: any) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.pullTrack.url + "/" + claimRefNo, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    getClaimDetailsById(id: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getClaimDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getCalimId(claimRefNo: any) {
        debugger;
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getCalimId.url + "/" + claimRefNo, { params: params });
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
    isSameBenNomineeClaimSubmitted(id: any, nomineeId: any, claimType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isSameBenNomineeClaimSubmitted.url + "/" + id + "/" + nomineeId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getBenefitConfigurationDetails(benefitType: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBenefitConfigurationDetails.url + "/" + benefitType, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    isDuplicateDependentSubmitted(benSno: any, dependentId: any, claimId: any, onBehalfBen?: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isDuplicateDependentSubmitted.url + "/" + benSno + "/" + dependentId + "/" + claimId + "/" + onBehalfBen, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }

    isCAFUpdated(id: any, isRegistrationNo: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.isCAFUpdated.url + "/" + id + "/" + isRegistrationNo, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
    getRegistrationNumber(ssin: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getRegistrationNumber.url + "/" + ssin, { params: params });
        return this.apiService.getDropdownData2(options).map((res: any) => {
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
    getBeneficiaryPFAccountDetails(bensno: any) {
        let params = new HttpParams();
        const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryPFAccountDetails.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map((res: any) => {
            return res;
        });
    }
}
