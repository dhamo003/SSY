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
var CeoDataService = /** @class */ (function () {
    function CeoDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    CeoDataService.prototype.getFundRequestedClaims = function (id, type, wfType, statusId, rlo, fundRequestNo, requestDate, pageNo, pageSize) {
        var params = new HttpParams();
        debugger;
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + type + "/" + wfType + "/" + rlo + "/" + fundRequestNo + "/" + requestDate + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.updateWorkFlowStatus = function (data) {
        var params = new HttpParams();
        return this.apiService.PostData(ApiDictionary.updateWorkFlowStatus.url, data).then(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.saveFundRequesteClaims = function (claim) {
        return this.apiService.PostData(ApiDictionary.saveFundRequestClaims.url, claim).then(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getFundRequestedClaimsById = function (Id, type) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new HttpParams();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            debugger;
            return res;
        });
    };
    CeoDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    CeoDataService.prototype.getAttachment = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    CeoDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getCEOUtilizationCertificates = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getCEOUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.GetReleaseOrders = function (rloOfficeId, finYearId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.GetFinancialYears = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.saveUtilizationCertificate = function (utilizationCertificate) {
        return this.apiService.PostData(ApiDictionary.saveUtilizationCertificate.url, utilizationCertificate).then(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.getUtilizationCertificateDetails = function (ucId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    CeoDataService.prototype.downloadUtilizationCertificate = function (ucId) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(ApiDictionary.getUtilizationCertificate.url + "/" + ucId, ucId);
    };
    CeoDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], CeoDataService);
    return CeoDataService;
}());
export { CeoDataService };
//# sourceMappingURL=ceo-data.service.js.map