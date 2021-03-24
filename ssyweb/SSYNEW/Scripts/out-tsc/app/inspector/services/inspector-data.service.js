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
import { ApiService } from '../../services/api.service';
import { HttpRequest, HttpParams } from '@angular/common/http';
import { ApiDictionary } from './api-dictionary';
import { HttpClient } from '@angular/common/http';
var InspectorDataService = /** @class */ (function () {
    function InspectorDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    InspectorDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id) {
        var paramsMap = new Map();
        paramsMap.set('ssiNum', id);
        var params = new HttpParams();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
        var paramsMap = new Map();
        paramsMap.set('benSno', id);
        var params = new HttpParams();
        paramsMap.forEach(function (value, key) {
            params = params.set(key, value);
        });
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBasicDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryBankDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    InspectorDataService.prototype.getClaimsByInspector = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    InspectorDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new HttpParams();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getAttachment = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    InspectorDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    let params = new HttpParams();
    //    const options = new HttpRequest<any>('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType + "/" + pageNo + "/" + pageSize, { params: params });
    //    return this.apiService.getDropdownData(options).map((res: any) => {
    //        return res;
    //    });
    //}
    InspectorDataService.prototype.getBeneficiaryForcedClosedClaims = function (benSNo, tranctionType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryForcedClosedClaims.url + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getClaimCheckListDetails = function (checkLisiId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getLegacyClaimsList = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyClaimsList.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.saveLegacyClaimDetails = function (claim) {
        return this.apiService.PostData(ApiDictionary.saveLegacyClaimDetails.url, claim).then(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService.prototype.getlovDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    InspectorDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], InspectorDataService);
    return InspectorDataService;
}());
export { InspectorDataService };
//# sourceMappingURL=inspector-data.service.js.map