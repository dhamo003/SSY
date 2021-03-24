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
var AlcDataService = /** @class */ (function () {
    function AlcDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    AlcDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            debugger;
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    AlcDataService.prototype.GetPendingApprovals = function (id, type, status, wfId, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPendingApprovals.url + "/" + id + "/" + type + "/" + status + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.updateComments = function (claim) {
        return this.apiService.PostData(ApiDictionary.updateComments.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetApprovalPremission = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getApprovalPremission.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getAttachment = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    AlcDataService.prototype.GetAllApprovalClaims = function (id, type, boardId, claimType, locationsId) {
        debugger;
        var params = new HttpParams();
        if (boardId == null || boardId == 'undefined')
            boardId = "0";
        if (claimType == null || claimType == 'undefined')
            claimType = "0";
        if (locationsId == null || locationsId == 'undefined')
            locationsId = "0";
        var options = new HttpRequest('GET', ApiDictionary.getAllApprovalClaims.url + "/" + id + "/" + type + "/" + boardId + "/" + claimType + "/" + locationsId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetAlcInformation = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAlcInformation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveProcessingClaims = function (claim) {
        debugger;
        return this.apiService.PostData(ApiDictionary.saveProcessingClaims.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getRLOOfficeUserInformation = function (id, type) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRLOOfficeUserInformation.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedClaims = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBoardMasterData = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBoardDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getWorkerTypeMasterData = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getWorkerTypeDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getLocationsMasterData = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLocationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimTypesMasterData = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimTypeMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveFundRequesteClaims = function (claim) {
        return this.apiService.PostData(ApiDictionary.saveFundRequestClaims.url, claim).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedClaimsById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetFundRequestClaims = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaimsById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getReleaseFundRequest = function (id, statusId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedClaims.url + "/" + id + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new HttpParams();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //
    AlcDataService.prototype.getPaymentProcessDetails = function (id, statusId, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPaymentProcessDetails.url + "/" + id + "/" + pageNo + "/" + pageSize + "/" + statusId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getPaymentProcessById = function (paymentProcessId) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPaymentProcessById.url + "/" + paymentProcessId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            debugger;
            return res;
        });
    };
    AlcDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundReleaseClaimsByFundReleaseHdrId = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundReleaseClaimsByFundReleaseHdrId.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryClaimsHistory.url + "/" + claimId + "/" + "/" + benSNo + "/" + tranctionType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getClaimStatusClaims = function (id, type, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimStatusClaims.url + "/" + id + "/" + type + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getlovDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveFundRequestExpenses = function (fundRequest) {
        return this.apiService.PostData(ApiDictionary.saveFundRequestExpenses.url, fundRequest).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedExpenses = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedExpenses.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestedExpensesById = function (Id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestedExpensesById.url + "/" + Id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getUtilizationCertificates = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getUtilizationCertificates.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetReleaseOrders = function (rloOfficeId, finYearId, boardId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReleaseOrders.url + "/" + rloOfficeId + "/" + finYearId + "/" + boardId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetFinancialYears = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFinancialYears.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.saveUtilizationCertificate = function (utilizationCertificate) {
        return this.apiService.PostData(ApiDictionary.saveUtilizationCertificate.url, utilizationCertificate).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getUtilizationCertificateDetails = function (ucId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getUtilizationCertificateDetails.url + "/" + ucId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.downloadUtilizationCertificate = function (ucId) {
        //let params = new HttpParams();
        //const options = new HttpRequest<any>('GET', ApiDictionary.getUtilizationCertificate.url + "/" + ucId, { params: params });
        //return this.apiService.downloadResource(options);
        return this.apiService.genaratePdf(ApiDictionary.getUtilizationCertificate.url + "/" + ucId, ucId);
    };
    AlcDataService.prototype.getClaimCheckListDetails = function (checkLisiId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimCheckListDetails.url + "/" + checkLisiId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //genaratePdfFormV(claim: any) {
    //    return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    //}
    AlcDataService.prototype.getAllApprovalSearchClaims = function (id, type, ssin, benName, benMobile, boardId, claimType, locationsId) {
        debugger;
        var params = new HttpParams();
        if (boardId == null || boardId == 'undefined')
            boardId = "0";
        if (claimType == null || claimType == 'undefined')
            claimType = "0";
        if (locationsId == null || locationsId == 'undefined')
            locationsId = "0";
        var options = new HttpRequest('GET', ApiDictionary.getAllApprovalSearchClaims.url + "/" + id + "/" + type + "/" + ssin + "/" + benName + "/" + benMobile + "/" + boardId + "/" + claimType + "/" + locationsId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getFundRequestSearchClaims = function (Id, ssin, benName, benMobile) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getFundRequestSearchClaims.url + "/" + Id + "/" + ssin + "/" + benName + "/" + benMobile, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetDistricts = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getDistricts.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.GetLocationCodes = function (districtId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLocationCodes.url + "/" + districtId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.CalculatePFInterest = function (pfInterest) {
        return this.apiService.PostData(ApiDictionary.calculatePFInterest.url, pfInterest).then(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getEducationClaimsSubmittedbyStudentName = function (name, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getEducationClaimsSubmittedbyStudentName.url + "/" + name + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    AlcDataService.prototype.updateNomineeDetails = function (benNomineeDetails) {
        return this.apiService.PostData(ApiDictionary.updateNomineeDetails.url, benNomineeDetails).then(function (res) {
            return res;
        });
    };
    AlcDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], AlcDataService);
    return AlcDataService;
}());
export { AlcDataService };
//# sourceMappingURL=alc-data.service.js.map