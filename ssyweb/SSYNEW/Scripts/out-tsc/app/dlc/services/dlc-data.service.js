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
var DlcDataService = /** @class */ (function () {
    function DlcDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    DlcDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id) {
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
    DlcDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    DlcDataService.prototype.getBeneficiaryBankDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimsByBenficiary = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    DlcDataService.prototype.getClaimsByDlc = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res.claims;
        });
    };
    DlcDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getAttachment = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    DlcDataService.prototype.getFundRequestedClaims = function (id, type, wfId, statusId, pageNo, pageSize) {
        var params = new HttpParams();
        //Passing default search parameters for rlo: any, fundRequestNo: any, requestDate: any implemented in CEO Fund Grids
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + type + "/" + wfId + "/" + "0" + "/" + 0 + "/" + "0" + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new HttpParams();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.updateWorkFlowStatus = function (data) {
        var params = new HttpParams();
        return this.apiService.PostData(ApiDictionary.updateWorkFlowStatus.url, data).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getDLCUtilizationCertificates = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getDLCUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetReleaseOrders = function (rloOfficeId, finYearId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetFinancialYears = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.saveUtilizationCertificate = function (utilizationCertificate) {
        return this.apiService.PostData(ApiDictionary.saveUtilizationCertificate.url, utilizationCertificate).then(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.getUtilizationCertificateDetails = function (ucId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.downloadUtilizationCertificate = function (ucId) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(ApiDictionary.getUtilizationCertificate.url + "/" + ucId, ucId);
    };
    DlcDataService.prototype.getBoardMasterData = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetDistricts = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getDistricts.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.GetLocationCodes = function (districtId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLocationCodes.url + "/" + districtId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    DlcDataService.prototype.CalculatePFInterest = function (pfInterest) {
        return this.apiService.PostData(ApiDictionary.calculatePFInterest.url, pfInterest).then(function (res) {
            return res;
        });
    };
    DlcDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], DlcDataService);
    return DlcDataService;
}());
export { DlcDataService };
//# sourceMappingURL=dlc-data.service.js.map