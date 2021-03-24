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
var PFConfigDataService = /** @class */ (function () {
    function PFConfigDataService(apiService, _http) {
        this.apiService = apiService;
        this._http = _http;
    }
    PFConfigDataService.prototype.GetPFInterestConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetPFInterestConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SavePFInterestConfigData = function (pfConfigData) {
        debugger;
        return this.apiService.PostData(ApiDictionary.SavePFInterestConfigData.url, pfConfigData).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFInterestConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetPFInterestConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SavePFCommissionConfigData = function (pfConfigData) {
        debugger;
        return this.apiService.PostData(ApiDictionary.SavePFCommissionConfigData.url, pfConfigData).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFCommissionConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetPFCommissionConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getPFConfigurations = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFConfigurations.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getPFConfigurationDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getPFConfigurationDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.savePFConfiguration = function (configuration) {
        return this.apiService.PostData(ApiDictionary.savePFConfiguration.url, configuration).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getReceiptBooks = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReceiptBooks.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetPFCommissionConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetPFCommissionConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getReceiptBookDetails = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getReceiptBookDetails.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.saveReceiptBook = function (configuration) {
        return this.apiService.PostData(ApiDictionary.saveReceiptBook.url, configuration).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveEducationConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(ApiDictionary.SaveEducationConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveHealthFamilyConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(ApiDictionary.SaveHealthFamilyConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveDeathConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(ApiDictionary.SaveDeathConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.SaveDisabilityConfigData = function (educationBenefitConfigDetails) {
        return this.apiService.PostData(ApiDictionary.SaveDisabilityConfigData.url, educationBenefitConfigDetails).then(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetEducationConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetEducationConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetHealthFamilyConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetHealthFamilyConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDeathConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetDeathConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDisabilityConfigDetails = function (pageNo, pageSize) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetDisabilityConfigDetails.url + "/" + pageNo + "/" + pageSize, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetEducationConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetEducationConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetHealthFamilyConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetHealthFamilyConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDeathConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetDeathConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetDisabilityConfigDetailsById = function (id) {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetDisabilityConfigDetailsById.url + "/" + id, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.GetBenefitConfigDetails = function () {
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.GetBenefitConfigDetails.url, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.getAgentList = function (userTypeId) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.getAgentList.url + "/" + userTypeId, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService.prototype.validateReceiptBookName = function (bookName) {
        debugger;
        var params = new HttpParams();
        var options = new HttpRequest('GET', ApiDictionary.validateReceiptBookName.url + "/" + bookName, { params: params });
        return this.apiService.getDropdownData(options).map(function (res) {
            return res;
        });
    };
    PFConfigDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApiService, HttpClient])
    ], PFConfigDataService);
    return PFConfigDataService;
}());
export { PFConfigDataService };
//# sourceMappingURL=pfconfig-data.services.js.map