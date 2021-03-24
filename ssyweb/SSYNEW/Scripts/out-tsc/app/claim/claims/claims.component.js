var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import { UserService } from '../../UserService';
import { ClaimConstants, EntryPoint, WorkflowTrans, pagination } from '../pipes/constnts.model';
var ClaimsComponent = /** @class */ (function () {
    //Paging props end
    function ClaimsComponent(router, dataService, userService) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.claimsData = [];
        this.p = 1;
        this.order = 'description';
        this.reverse = false;
        this.IsBeneficiary = false;
        this.UtilizationDetails = [];
        //Paging props start
        this.page = pagination.pageNo;
        this.pageSize = pagination.pageSize;
    }
    ClaimsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
    };
    ClaimsComponent.prototype.ngOnInit = function () {
        //this.getClaimsByBenID(14843, EntryPoint.Agent);
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, "0", this.page, this.pageSize);
    };
    ClaimsComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ClaimsComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    ClaimsComponent.prototype.getClaimsByBenID = function (id, entrypoint, userType, claimRefNo, pageNo, pageSize) {
        var _this = this;
        this.dataService
            .getClaimsByBenficiary(id, entrypoint, userType, claimRefNo, pageNo, pageSize)
            .subscribe(function (data) {
            _this.claimsData = data.results;
            _this.totalRows = data.rowCount;
            if (_this.userService.user.userTpe == "10") {
                _this.IsBeneficiary = true;
                _this.getClaimUtilizationDetails();
            }
            console.log(data);
        });
    };
    ClaimsComponent.prototype.onEditClaimClick = function (item) {
        this.router.navigate(['claim/Entry', { claimId: item.claimId, tranctionType: item.claimType, claimStatus: item.statusId }], { skipLocationChange: true });
    };
    ClaimsComponent.prototype.onViewClaimClick = function (item) {
        this.router.navigate(['claim/ClaimView', { claimId: item.claimId, tranctionType: item.claimType, transactionId: item.transactionId, mode: "claim", workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    ClaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ClaimsComponent.prototype.downloadRecept = function (claim) {
        this.dataService
            .downloadReceipt(claim.benName, claim.ssin, claim.claimRefernceNo, claim.claimAmount, this.getTypeName(claim.claimType))
            .then(function (data) {
            var dd = data;
            var url = window.URL.createObjectURL(data);
            window.open(url);
        });
    };
    ClaimsComponent.prototype.onTrackClaimClick = function (item) {
        this.router.navigate(['claim/ClaimTrack', { transactionId: item.transactionId, tranctionType: item.claimType, workflowId: WorkflowTrans.workflow }], { skipLocationChange: true });
    };
    ClaimsComponent.prototype.getClaimUtilizationDetails = function () {
        var _this = this;
        this.dataService
            .getClaimConfigurationMaster()
            .subscribe(function (data) {
            _this.group = [];
            _this.result = [];
            var groups = new Set(_this.claimsData.map(function (item) { return item.claimType; }));
            groups.forEach(function (g) {
                return _this.group.push({
                    name: g,
                    values: _this.claimsData.filter(function (i) { return i.claimType === g; })
                });
            });
            for (var i = 0; i < _this.group.length; i++) {
                var sumClaimAmount = 0;
                var sumApprovedAmount = 0;
                for (var j = 0; j < _this.group[i].values.length; j++) {
                    sumClaimAmount += _this.group[i].values[j].claimAmount;
                    sumApprovedAmount += _this.group[i].values[j].approvedAmount;
                }
                _this.result.push({
                    claimName: _this.group[i].name,
                    claimAmount: sumClaimAmount,
                    approvedAmount: sumApprovedAmount
                });
            }
            for (var k = 0; k < data.length; k++) {
                var isAdd = false;
                for (var l = 0; l < _this.result.length; l++) {
                    if (data[k].claimName == _this.result[l].claimName) {
                        var test = __assign(__assign({}, data[k]), _this.result[l]);
                        _this.UtilizationDetails.push({
                            claimName: test.claimName,
                            claimAmount: test.claimAmount,
                            approvedAmount: test.approvedAmount,
                            annualLimit: test.annualLimit
                        });
                        isAdd = true;
                        break;
                    }
                }
                if (!isAdd) {
                    _this.UtilizationDetails.push({
                        claimName: data[k].claimName,
                        claimAmount: 0,
                        approvedAmount: 0,
                        annualLimit: data[k].annualLimit
                    });
                }
            }
        });
    };
    ClaimsComponent.prototype.changepage = function (page) {
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, "0", this.page, this.pageSize);
    };
    ClaimsComponent.prototype.GetResults = function () {
        if (this.claimReferenceNoText != null && this.claimReferenceNoText != undefined && this.claimReferenceNoText != "")
            this.strClaimRefNo = this.claimReferenceNoText.trim();
        else
            this.strClaimRefNo = "0";
        //this.dataService
        //    .getSearchClaimsByBenficiary(this.userService.user.deptUserid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strSSIN, this.strClaimRefNo, pagination.pageNo, pagination.pageSize)
        //    .subscribe((data: any) => {
        //        this.claimsData = data.results;
        //        this.totalRows = data.rowCount;
        //    });
        this.getClaimsByBenID(this.userService.user.userid, EntryPoint.Beneficiary, this.userService.user.userTpe, this.strClaimRefNo, pagination.pageNo, pagination.pageSize);
    };
    ClaimsComponent = __decorate([
        Component({
            selector: 'app-claims',
            templateUrl: './claims.component.html',
            styleUrls: ['./claims.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimDataService, UserService])
    ], ClaimsComponent);
    return ClaimsComponent;
}());
export { ClaimsComponent };
//# sourceMappingURL=claims.component.js.map