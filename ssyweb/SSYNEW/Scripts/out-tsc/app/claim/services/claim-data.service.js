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
var ClaimDataService = /** @class */ (function () {
    function ClaimDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    ClaimDataService.prototype.getBeneficiaryBasicDetailsByNo = function (id, isRegistrationNo) {
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
    ClaimDataService.prototype.getBeneficiaryBasicDetailsById = function (id) {
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
    ClaimDataService.prototype.getBeneficiaryBankDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryBankDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryNomineeDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryNomineeDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryFamilyDetails = function (id, type) {
        var params = new HttpParams();
        if (type == undefined) {
            type = "";
        }
        ;
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryFamilyDetails.url + "/" + id + "/" + type, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryEduCount = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryEduCount.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllHospitals = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetAllHospitals.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getlovDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetLOVDetailsByLovId.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getClaimConfiguration = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetClaimConfigDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getClaimConfigurationMaster = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetClaimConfigMasterDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.createClaim = function (claim) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.updateClaim = function (claim) {
        return this.apiService.PostData(ApiDictionary.createClaim.url, claim).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getClaimsByBenficiary = function (id, entrypoint, userType, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaims.url + "/" + id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllClaimsByAgent = function (id, entrypoint, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAllClaimsByAgentId.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllDraftClaimsByAgent = function (id, entrypoint, ssinSearchText, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAllClaimsbByAgentDraft.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllDraftClaimsByBen = function (id, entrypoint, userType, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAllClaimsbByDraft.url + "/" + id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.downloadReceipt = function (benName, ssin, claimRefernceNo, amount, name) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReceipt.url + "/" + benName + "/" + ssin + "/" + claimRefernceNo + "/" + amount + "/" + name, { params: params });
        return this.apiService.downloadResource(options);
    };
    ClaimDataService.prototype.getClaimDetailsByClaimId = function (id, referenceId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsByClaimId.url + "/" + id + "/" + referenceId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getClaimDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getClaimDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getClaimTrackDetailsByTransactionId = function (id, transactionType, wfId) {
        var params = new HttpParams();
        if (wfId == undefined) {
            wfId = "";
        }
        var options = new HttpRequest('GET', ApiDictionary.getClaimTrackDetailsByTransactionId.url + "/" + id + "/" + transactionType + "/" + wfId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.genaratePdfFormV = function (claim) {
        return this.apiService.genaratePdf(ApiDictionary.genarateFormV.url, claim);
    };
    ClaimDataService.prototype.getAttachment = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAttachment.url, { params: params });
        return this.apiService.downloadResource(options);
    };
    ClaimDataService.prototype.deleteClaimById = function (claimId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.deleteClaimById.url + "/" + claimId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllReferralClaimsByBenficiary = function (id, entrypoint, userType, claimReferenceNoText, pageNo, pageSize) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAllBeneficiaryClaimRefers.url + "/" + id + "/" + entrypoint + "/" + userType + "/" + pageNo + "/" + pageSize + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAllReferralClaimsByAgent = function (id, entrypoint, ssinSearchText, claimReferenceNoText, pageNo, pageSize) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAllAgentClaimRefers.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize + "/" + ssinSearchText + "/" + claimReferenceNoText, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getActiveFinancialYear = function () {
        var options = new HttpRequest('GET', ApiDictionary.getActiveFinancialYear.url);
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPackages = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPackages.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryHealthClaimAmount = function (benSno, typeOfClaim) {
        var params = new HttpParams();
        var options;
        if (typeOfClaim == undefined || typeOfClaim == null) {
            options = new HttpRequest('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno, { params: params });
        }
        else {
            options = new HttpRequest('GET', ApiDictionary.getBeneficiaryHealthClaimAmount.url + "/" + benSno + "/" + typeOfClaim, { params: params });
        }
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyClaimsList = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyClaimsList.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.saveLegacyClaimDetails = function (claim) {
        return this.apiService.PostData(ApiDictionary.saveLegacyClaimDetails.url, claim).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryAppliedDisabilities = function (id, claimId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.beneficiaryAppliedDisabilities.url + "/" + id + "/" + claimId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPfBalance = function (bensno) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPfBalance.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.validatePfSubmit = function (ssiNumber, nomineeId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.validatePfSubmit.url + "/" + ssiNumber + "/" + nomineeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLastPaidPfDetails = function (benSno) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLastPaidPfDetails.url + "/" + benSno, { params: params });
        // const options = new HttpRequest<any>('GET', ApiDictionary.getLastPaidPfDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) { return res; });
    };
    ClaimDataService.prototype.getBeneficiaryDetailsBySearch = function (searchId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryDetailsBySearch.url + "/" + searchId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryDetailsBySearch1 = function (searchId, isPFDeposit) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryDetailsBySearch.url + "/" + searchId + "/" + isPFDeposit, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyPFBeneficiaryBasicDetailsByID = function (searchId, isPFDeposit) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyPFBeneficiaryBasicDetailsByID.url + "/" + searchId + "/" + isPFDeposit, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.savePFCollectionDetails = function (pfCollection) {
        return this.apiService.PostData(ApiDictionary.savePFCollectionDetails.url, pfCollection).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFMasterConfigDetails = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFMasterConfigDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAgentCollectedAmount = function (userId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentCollectedAmount.url + "/" + userId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFDepositDetailsByAgentId = function (id, entrypoint, workerTypeId, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFDepositDetailsByAgentId.url + "/" + id + "/" + entrypoint + "/" + workerTypeId + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //submitPFDepositDetails(pfDeposit: any) {
    //    return this.apiService.PostData(ApiDictionary.submitPFDepositDetails.url, pfDeposit).then((res: any) => {
    //        return res;
    //    });
    //}
    ClaimDataService.prototype.submitPFDepositDetails1 = function (userId, rloId, bankId, payInslipNo) {
        return this.apiService.PostData(ApiDictionary.submitPFDepositDetails.url + "/" + userId + "/" + rloId + "/" + bankId + "/" + payInslipNo, null).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.submitPFDepositDetails = function (pfDepositDetails) {
        return this.apiService.PostData2(ApiDictionary.submitPFDepositDetails.url, pfDepositDetails).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isBenNomineeClaimSubmitted = function (benSno) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isBenNomineeClaimSubmitted.url + "/" + benSno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isSameBenNomineeClaimSubmitted = function (benSno, nomineeId, claimType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isSameBenNomineeClaimSubmitted.url + "/" + benSno + "/" + nomineeId + "/" + claimType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getNomineeClaimEntryValidation = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getNomineeClaimEntryValidation.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //getAgentList
    ClaimDataService.prototype.getAgentList = function (userTypeId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentList.url + "/" + userTypeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBenefitConfigurationDetails = function (benefitType) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBenefitConfigurationDetails.url + "/" + benefitType, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFConfigurationDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFConfigurationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isValidMonthSubmitted = function (benSno, monthId, year) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isValidMonthSubmitted.url + "/" + benSno + "/" + monthId + "/" + year, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isValidBookReceipt = function (bookId, receiptId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isValidBookReceipt.url + "/" + bookId + "/" + receiptId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.submitLegacyPFDetails = function (pfCollectionMasterList) {
        debugger;
        return this.apiService.PostData(ApiDictionary.submitLegacyPFDetails.url, pfCollectionMasterList).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getSubDivRLOBankDetails = function (id, workerTypeId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getSubDivRLOBankDetails.url + "/" + id + "/" + workerTypeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    //getAgentBooks(id: any) {
    //    let params = new HttpParams();
    //    const options = new HttpRequest<any>('GET', ApiDictionary.getAgentBooks.url + "/" + id, { params: params });
    //    return this.apiService.getDropdownData(options).map((res: any) => {
    //        return res;
    //    });
    //}
    ClaimDataService.prototype.getAgentLocationWise = function (userTypeId, userid) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentLocationWise.url + "/" + userTypeId + "/" + userid, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAgentBooks = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentBooks.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getNextReceiptNo = function (bookId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getNextReceiptNo.url + "/" + bookId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.savePayInSlip = function (payInSlip) {
        return this.apiService.PostData(ApiDictionary.savePayInSlip.url, payInSlip).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFDepositStatusDetailsByAgentId = function (id, entrypoint, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFDepositStatusDetailsByAgentId.url + "/" + id + "/" + entrypoint + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isAgentAllDepositsPayInSlipsUploaded = function (agentId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isAgentAllDepositsPayInSlipsUploaded.url + "/" + agentId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getWorkerTypeMasterData = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getWorkerTypeDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAgentLegacyPfDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentLegacyPfDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAgentDetailsForDeposit = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentDetailsForDeposit.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFDeposits = function (userId, userType, status, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFDeposits.url + "/" + userId + "/" + userType + "/" + status + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getCollections = function (pfDepositId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getCollections.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyCollections = function (pfDepositId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyCollections.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFDepositStatusDetailsByUser = function (id, userType, depositFromDate, depositToDate, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFDepositStatusDetailsByUser.url + "/" + id + "/" + userType + "/" + depositFromDate + "/" + depositToDate + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getUserDetails = function (userId) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getUserDetails.url + "/" + userId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.checkReceiptNoForAgentBook = function (bookId, receiptNo) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.checkReceiptNoForAgentBook.url + "/" + bookId + "/" + receiptNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getCollectionFinancialYear = function (collectionDate) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getCollectionFinancialYear.url + "/" + collectionDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryPFDetails = function (id, page, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryPFDetails.url + "/" + id + "/" + page + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isDuplicateDependentSubmitted = function (benSno, dependentId, claimId, onBehalfBen) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isDuplicateDependentSubmitted.url + "/" + benSno + "/" + dependentId + "/" + claimId + "/" + onBehalfBen, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAgentCollectionBooks = function (id, collectionDate, depositDate) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentCollectionBooks.url + "/" + id + "/" + collectionDate.toISOString() + "/" + depositDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyPFDetails = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyPFDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyPFCollectionDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyPFCollectionDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLegacyPFCollections = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLegacyPFCollections.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.deleteClaimExceptions = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.deleteClaimExceptions.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.genaratePdfFormIV = function (formDetails) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfFormIV.url, formDetails);
    };
    ClaimDataService.prototype.genaratePdfLegacyFormIV = function (formDetails) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfLegacyFormIV.url, formDetails);
    };
    ClaimDataService.prototype.getfinanacialYearListDetails = function (depositDate) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getfinanacialYearListDetails.url + "/" + depositDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isValidCollectionYear = function (financialYearId, collectionDate) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isValidCollectionYear.url + "/" + financialYearId + "/" + collectionDate.toISOString(), { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.isInterestCalculatedforBen = function (financialYearId, bensno) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isInterestCalculatedforBen.url + "/" + financialYearId + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getSubmittedLegacyPFDetails = function (id, pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getSubmittedLegacyPFDetails.url + "/" + id + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.saveAdjustment = function (adjustment) {
        return this.apiService.PostData(ApiDictionary.saveAdjustment.url, adjustment).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getAdjustmentBeneficiaryBasicDetailsByID = function (searchId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAdjustmentBeneficiaryBasicDetailsByID.url + "/" + searchId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.genaratePdfPayInSlip = function (formDetails) {
        return this.apiService.genaratePdf(ApiDictionary.genaratePdfPayInSlip.url, formDetails);
    };
    ClaimDataService.prototype.isCAFUpdated = function (id, isRegistrationNo) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.isCAFUpdated.url + "/" + id + "/" + isRegistrationNo, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.decryptGripsResponse = function (gripsResponse) {
        return this.apiService.PostData(ApiDictionary.decryptGripsResponse.url, gripsResponse).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.decryptGripsDoubleVerificationResponse = function (gripsResponse) {
        return this.apiService.PostData(ApiDictionary.decryptGripsDoubleVerificationResponse.url, gripsResponse).then(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.repayToGrips = function (pfDepositId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.repayToGrips.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData2(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.postDoubleVerificationGrips = function (pfDepositId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.postDoubleVerificationGrips.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData2(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.downloadPFDepositDetails = function (pfDepositId) {
        return this.apiService.genaratePdf(ApiDictionary.downloadPFDepositDetails.url + "/" + pfDepositId, pfDepositId);
    };
    ClaimDataService.prototype.getRegistrationNumber = function (ssin) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getRegistrationNumber.url + "/" + ssin, { params: params });
        return this.apiService.getDropdownData2(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getPFDepositAttachments = function (pfDepositId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFDepositAttachments.url + "/" + pfDepositId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getLWCBankDetails = function (userId, workerTypeId) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getLWCBankDetails.url + "/" + userId + "/" + workerTypeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService.prototype.getBeneficiaryPFAccountDetails = function (bensno) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getBeneficiaryPFAccountDetails.url + "/" + bensno, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    ClaimDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], ClaimDataService);
    return ClaimDataService;
}());
export { ClaimDataService };
//# sourceMappingURL=claim-data.service.js.map