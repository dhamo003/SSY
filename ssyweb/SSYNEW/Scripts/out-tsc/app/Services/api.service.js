var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        // Accruals Micro service url
        this.accrualServiceUrl = "";
        this.serviceUrl = environment.apiurl;
    }
    ApiService.prototype.getDropdownDataForMaster = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params, responseType: 'text'
        });
    };
    ApiService.prototype.getDropdownData2 = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            params: options.params, responseType: 'text'
        });
    };
    ApiService.prototype.downloadResource = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.serviceUrl + options.url, { responseType: 'blob' }).toPromise()];
                    case 1:
                        file = _a.sent();
                        return [2 /*return*/, file];
                }
            });
        });
    };
    ApiService.prototype.getReportsTypedDataWithResultAndStatusCode = function (options) {
        return this.http
            .get(this.serviceUrl + options.url, { params: options.params })
            .map(function (res) { return res.result; });
    };
    ApiService.prototype.getDropdownData = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params
        });
    };
    ApiService.prototype.getStaticData = function (options) {
        return this.http.get(options.url, {
            params: options.params
        });
    };
    ApiService.prototype.getTypedData = function (options) {
        return this.http.get(this.serviceUrl + options.url, {
            params: options.params
        });
    };
    ApiService.prototype.PostData = function (url, postdata) {
        return this.http.post(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.PostData2 = function (url, postdata) {
        debugger;
        var res = this.http.post(this.serviceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
        return res;
    };
    ApiService.prototype.PutDataToTemplate = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.PutDataToReportScheduler = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    ApiService.prototype.genaratePdf = function (url, postdata) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.serviceUrl + url, postdata, { responseType: 'blob', observe: 'response' }).toPromise()];
            });
        });
    };
    ApiService.prototype.DeleteDataToAccrual = function (options) {
        return this.http.delete(this.accrualServiceUrl + options.url, {
            params: options.params
        }).toPromise();
    };
    ApiService.prototype.deleteServiceData = function (url) {
        return this.http.delete(this.serviceUrl + url).toPromise();
    };
    ApiService.prototype.PutData = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata).toPromise();
    };
    // This method is called in case of a PUT request where Accrual service is directly invoked
    ApiService.prototype.PostAccuralServiceData = function (url, postdata) {
        return this.http.post(this.accrualServiceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    };
    ApiService.prototype.PutAccuralData = function (url, postdata) {
        return this.http.put(this.serviceUrl + url, postdata, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'text'
        }).toPromise();
    };
    ApiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map