var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpRequest, HttpParams } from '@angular/common/http';
import { ApiDictionary } from './api-dictionary';
import { HttpClient } from '@angular/common/http';
var ClaimNomineeDataService = /** @class */ (function () {
    function ClaimNomineeDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    ClaimNomineeDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id, isRegistrationNo) {
        var paramsMap = new Map();
        paramsMap.set('ssiNum', id);
        paramsMap.set('isRegistrationNo', isRegistrationNo);
        var params = new HttpParams();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryEduCount = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryEduCount.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getAllHospitals = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetAllHospitals.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getlovDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimConfiguration = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetClaimConfigDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.createClaim = function (claim) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    ClaimNomineeDataService.prototype.getRecipt = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    ClaimNomineeDataService.prototype.downloadReceipt = function (benName, ssin, claimRefernceNo, amount, name, nomineeName) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReceipt.url + "/" + benName + "/" + ssin + "/" + claimRefernceNo + "/" + amount + "/" + nomineeName + "/" + name, { params: params });
        return this.apiService.downloadResource(options);
    };
    ClaimNomineeDataService.prototype.genaratePdfFormV = function (claim) {
        return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    };
    ClaimNomineeDataService.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
        var params = new HttpParams();
        if (typeOfClaim == undefined) {
            typeOfClaim = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno + "/" + typeOfClaim, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params }); // + "/" + type
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getPfBalance = function (regNumber) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPfBalance.url + "/" + regNumber, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.validatePfSubmit = function (ssiNumber, nomineeId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.validatePfSubmit.url + "/" + ssiNumber + "/" + nomineeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getNomineeClaimEntryValidation = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getNomineeClaimEntryValidation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.sendOTPforNominee = function (ssinNo, mobileNo) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.sendOTPforNominee.url + "/" + ssinNo + "/" + mobileNo, { params: params });
        return this.apiService.getDropdownDataForMaster(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.verifyOTP = function (mobileNo, otpNumber) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.verifyOTP.url + "/" + mobileNo + "/" + otpNumber, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.pullTrack = function (claimRefNo) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.pullTrack.url + "/" + claimRefNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getCalimId = function (claimRefNo) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getCalimId.url + "/" + claimRefNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.deleteClaimExceptions = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.deleteClaimExceptions.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isSameBenNomineeClaimSubmitted = function (id, nomineeId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isSameBenNomineeClaimSubmitted.url + "/" + id + "/" + nomineeId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBenefitConfigurationDetails = function (benefitType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBenefitConfigurationDetails.url + "/" + benefitType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isDuplicateDependentSubmitted = function (benSno, dependentId, claimId, onBehalfBen) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isDuplicateDependentSubmitted.url + "/" + benSno + "/" + dependentId + "/" + claimId + "/" + onBehalfBen, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.isCAFUpdated = function (id, isRegistrationNo) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isCAFUpdated.url + "/" + id + "/" + isRegistrationNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getRegistrationNumber = function (ssin) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRegistrationNumber.url + "/" + ssin, { params: params });
        return this.apiService.getDropdownData2(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getClaimConfigurationMaster = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetClaimConfigMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService.prototype.getBeneficiaryPFAccountDetails = function (bensno) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryPFAccountDetails.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimNomineeDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], ClaimNomineeDataService);
    return ClaimNomineeDataService;
}());
export { ClaimNomineeDataService };
//# sourceMappingURL=claim-data.service.js.map