var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpRequest, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { ApiDictionary } from './api-dictionary';
var TresurerDataService = /** @class */ (function () {
    function TresurerDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    TresurerDataService.prototype.getRLOBankDetails = function (id, bankStatusId) {
        if (bankStatusId === void 0) { bankStatusId = 1; }
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOBankDetails.url + "/" + id + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOBankDetailsByUserId = function (id, userId, bankStatusId) {
        if (bankStatusId === void 0) { bankStatusId = 1; }
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOBankDetails.url + "/" + id + "/" + userId + "/" + bankStatusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentProcessedDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPaymentProcessedDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getRLOUserInfoByProcessingId = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetRLOUserInfoByProcessingId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.savePaymentReleaseClaims = function (claim) {
        return this.apiService.PostData(ApiDictionary.savePaymentRelease.url, claim).then(function (res) {
            return res;
        });
    };
    //dropdown services
    TresurerDataService.prototype.getTreasurerPaymentProcesses = function (id, type, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getTreasurerPaymentProcesses.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundReleaseDetails = function (id, statusId, pageNo, pageSize) {
        var params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getFundReleaseDetails.url + "/" + id + "/" + type + "/" + wfId + "/" + statusId, { params: params });
        var options = new HttpRequest('GET', ApiDictionary.getFundReleaseDetails.url + "/" + id + "/" + statusId + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getNEFTDetailsById = function (Id) {
        var params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getNEFTDetailsById.url + "/" + Id, { params: params });
        //return this.apiService.getDropdownData(options).map((res: any) => {
        var options = new HttpRequest('GET', ApiDictionary.getNEFTDetailsById.url, { params: params });
        return this.apiService.getStaticData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentNEFTDetails = function (claims) {
        return this.apiService.PostData(ApiDictionary.getNEFTDetailsById.url, claims).then(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getBeneficiaryPaymentNEFTDetails = function (fundReleaseOrderHdrId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryPaymentNEFTDetails.url + "/" + fundReleaseOrderHdrId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentReleaseDetails = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPaymentReleaseDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getPaymentReleaseById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPaymentReleaseById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    TresurerDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], TresurerDataService);
    return TresurerDataService;
}());
export { TresurerDataService };
//# sourceMappingURL=tresurer-data.service.js.map