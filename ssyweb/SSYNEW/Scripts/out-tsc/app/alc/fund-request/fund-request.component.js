var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { ClaimStatus, ClaimConstants, LovConstants } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
import { DomSanitizer } from '@angular/platform-browser';
var FundRequestComponent = /** @class */ (function () {
    function FundRequestComponent(router, dataService, userService, sanitizer) {
        this.router = router;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimData = {};
        this.date = new Date();
        this.GetClaimVisible = false;
        this.showErrorMessage = false;
        this.boardIdValid = true;
        this.selectedClaimList = [];
        this.claimMasterIds = [];
        this.locationsIds = [];
        this.sumofAmount = 0;
        this.dropdownSettings = {};
        this.locationSettings = {};
        this.sumofAmountVisible = false;
        this.claim = {};
        this.expenseTypeValid = true;
        this.viewExpenses = false;
        this.rowIndex = -1;
        this.fundRequestExpensesData = {};
        this.expensesDetailsArray = [];
        this.expensesDetails = {};
        this.fundRequestType = "claims";
        this.showErrorMessage1 = false;
        this.fundRequiredValid = true;
        this.attachmentList = [];
        this.educationList = [];
        this.commentsValid = true;
    }
    FundRequestComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId = claim.claimId;
        this.claimType = claim.claimType;
        this.tranctionId = claim.transactionId;
        this.attachmentList = [];
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, ClaimConstants[this.claimType]);
    };
    FundRequestComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            _this.child.getData(_this.claim);
            _this.attachModel.show();
            if (_this.claim.educationDetails != null) {
                _this.educationList = _this.claim.educationDetails.educationDetailList;
                if (_this.claim.educationDetails.educationDetailList.length > 0) {
                    for (var i = 0; i < _this.claim.educationDetails.educationDetailList.length; i++) {
                        if (_this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length > 0) {
                            for (var j = 0; j < _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList.length; j++) {
                                var attachment = _this.claim.educationDetails.educationDetailList[i].attachmentDetailsList[j];
                                if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                                    attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                                }
                                _this.attachmentList.push(attachment);
                            }
                        }
                    }
                }
            }
            if (_this.claim.healthFamilyDetails != null) {
                for (var j = 0; j < _this.claim.healthFamilyDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.healthFamilyDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.deathDetails != null) {
                for (var j = 0; j < _this.claim.deathDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.deathDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.disabilityDetails != null) {
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    var attachment = _this.claim.attachment[k];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.claim.attachment[k] = attachment;
                    _this.attachmentList.push(attachment);
                }
            }
        });
    };
    FundRequestComponent.prototype.ngOnInit = function () {
        // this.GetRLOOfficeUserInformation(3075, this.userService.user.userTpe);
        this.GetRLOOfficeUserInformation(this.userService.user.deptUserid, this.userService.user.userTpe);
        this.getWorkerTypeDetails();
        this.getBoardDetails();
        this.getExpenses();
        this.getClaimTypesMasterDetails();
        this.boardId = 0;
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'claimMasterId',
            textField: 'claimName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.locationSettings = {
            singleSelection: false,
            idField: 'blockSno',
            textField: 'blockName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    FundRequestComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    FundRequestComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    FundRequestComponent.prototype.GetClaims = function () {
        if (this.boardId > 0) {
            this.boardIdValid = true;
            var claimMaster = void 0;
            var locationId = void 0;
            if (this.claimMasterIds.length > 0) {
                claimMaster = this.claimMasterIds.map(function (e) {
                    return e.claimMasterId;
                }).join(', ');
            }
            else {
                claimMaster = 0;
            }
            if (this.locationsIds.length > 0) {
                locationId = this.locationsIds.map(function (e) {
                    return e.blockSno;
                }).join(', ');
            }
            else {
                locationId = 0;
            }
            this.sumofAmount = 0;
            this.getAllApprovalClaims(this.userService.user.deptUserid, this.userService.user.userTpe, this.boardId, claimMaster, locationId);
        }
        else
            this.boardIdValid = false;
    };
    FundRequestComponent.prototype.getAllApprovalClaims = function (deptUserid, type, boardId, claimTypeIds, locationsIds) {
        var _this = this;
        this.claimsData = [];
        this.selectedAll = false;
        this.dataService
            .GetAllApprovalClaims(deptUserid, type, boardId, claimTypeIds, locationsIds)
            .subscribe(function (data) {
            _this.claimsData = data;
            _this.GetClaimVisible = true;
            _this.sumofAmountVisible = _this.claimsData.length > 0 ? true : false;
        });
    };
    FundRequestComponent.prototype.GetAlcInformation = function (deptUserid) {
        var _this = this;
        this.dataService
            .GetAlcInformation(deptUserid)
            .subscribe(function (data) {
            _this.alcDetails = data;
            if (_this.alcDetails.approvedClaimsAmount > _this.alcDetails.balanceOfTheAmount)
                _this.AmountShortfall = (_this.alcDetails.approvedClaimsAmount - _this.alcDetails.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
        });
    };
    FundRequestComponent.prototype.GetRLOOfficeUserInformation = function (deptUserid, userType) {
        var _this = this;
        this.dataService
            .getRLOOfficeUserInformation(deptUserid, userType)
            .subscribe(function (data) {
            _this.officeDetails = data;
            _this.RloOfficeAddress = data.rloOffices[0];
            if (_this.officeDetails.approvedClaimsAmount > _this.RloOfficeAddress.balanceOfTheAmount)
                _this.AmountShortfall = (_this.officeDetails.approvedClaimsAmount - _this.RloOfficeAddress.balanceOfTheAmount);
            else
                _this.AmountShortfall = 0;
            _this.getLocationDetailsByRloId(_this.RloOfficeAddress.rloOfficeId);
        });
    };
    FundRequestComponent.prototype.SubmitRequest = function () {
        var _this = this;
        debugger;
        if (this.boardId > 0) {
            this.boardIdValid = true;
            if (this.alcComments != undefined && this.alcComments != null && this.alcComments != "" && this.alcComments.length > 0) {
                this.commentsValid = true;
                if (this.fundRequestType == "claims") {
                    this.selectedClaims();
                    this.showErrorMessage = false;
                    if (this.selectedClaimList != null && this.selectedClaimList.length > 0) {
                        this.claimData.createdBy = this.userService.user.deptUserid;
                        this.claimData.fundRequestDate = new Date();
                        this.claimData.creadtedDate = new Date();
                        this.claimData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                        this.claimData.statusId = ClaimStatus.FundRequestFromALC;
                        this.claimData.aLCComments = this.alcComments.trim();
                        this.claimData.fundRequestClaims = this.selectedClaimList;
                        var locationId = void 0;
                        if (this.locationsIds.length > 0) {
                            locationId = this.locationsIds.map(function (e) {
                                return e.blockSno;
                            });
                        }
                        else {
                            locationId = this.LocationList.map(function (e) {
                                return e.blockSno;
                            });
                        }
                        this.claimData.locations = locationId;
                        this.claimData.boardId = this.boardId;
                        this.claimData.fundRequested = this.sumofAmount;
                        //if (this.claimData.paymentProcessingClaims != null && this.claimData.paymentProcessingClaims.nElements>0) {
                        if (confirm("Are you sure to proceed ")) {
                            this.dataService
                                .saveFundRequesteClaims(this.claimData)
                                .then(function (data) {
                                if (data) {
                                    _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                    _this.sumofAmount = 0;
                                }
                                else {
                                    _this.successMessage = "Invalid transaction";
                                }
                                _this.successModal.show();
                            });
                            //}
                        }
                    }
                    else {
                        this.showErrorMessage = true;
                    }
                }
                else if (this.fundRequestType == "expenses") {
                    this.showErrorMessage1 = false;
                    if (this.expensesDetailsArray != null && this.expensesDetailsArray.length > 0) {
                        this.fundRequestExpensesData.createdBy = this.userService.user.deptUserid;
                        this.fundRequestExpensesData.fundRequestDate = new Date();
                        this.fundRequestExpensesData.createdDate = new Date();
                        this.fundRequestExpensesData.rLOOfficeID = this.RloOfficeAddress.rloOfficeId;
                        this.fundRequestExpensesData.statusId = ClaimStatus.FundRequestFromALC;
                        this.fundRequestExpensesData.boardId = this.boardId;
                        var sumofExpenses = 0;
                        for (var i = 0; i < this.expensesDetailsArray.length; i++) {
                            sumofExpenses = Number(this.expensesDetailsArray[i].fundsRequired) + Number(sumofExpenses);
                        }
                        this.fundRequestExpensesData.fundRequested = sumofExpenses;
                        this.fundRequestExpensesData.fundRequestExpensesDtlList = this.expensesDetailsArray;
                        this.fundRequestExpensesData.alcComments = this.alcComments.trim();
                        if (confirm("Are you sure to proceed ")) {
                            this.dataService
                                .saveFundRequestExpenses(this.fundRequestExpensesData)
                                .then(function (data) {
                                if (data) {
                                    _this.successMessage = "Fund request forwarded to DLC"; //"Fund request successfully submitted";
                                    _this.sumofAmount = 0;
                                }
                                else {
                                    _this.successMessage = "Invalid transaction";
                                }
                                _this.successModal.show();
                            });
                        }
                    }
                    else {
                        this.showErrorMessage1 = true;
                    }
                }
            }
            else
                this.commentsValid = false;
        }
        else
            this.boardIdValid = false;
    };
    FundRequestComponent.prototype.okClick = function () {
        this.successModal.hide();
        if (this.fundRequestType == "claims") {
            this.GetClaims();
            this.alcComments = "";
        }
        else if (this.fundRequestType == "expenses") {
            this.clearExpenses();
            this.expensesDetails = {};
            this.expensesDetailsArray = [];
            this.alcComments = "";
        }
    };
    FundRequestComponent.prototype.selectAll = function () {
        this.sumofAmount = 0;
        this.showErrorMessage = false;
        for (var i = 0; i < this.claimsData.length; i++) {
            this.claimsData[i].selected = this.selectedAll;
            if (this.selectedAll) {
                this.sumofAmount += this.claimsData[i].approvedAmount;
            }
        }
    };
    FundRequestComponent.prototype.checkIfAllSelected = function (itemData) {
        this.showErrorMessage = false;
        this.selectedAll = this.claimsData.every(function (item) {
            return item.selected == true;
        });
        if (itemData.selected == true) {
            this.sumofAmount += itemData.approvedAmount;
        }
        else {
            this.sumofAmount -= itemData.approvedAmount;
        }
    };
    FundRequestComponent.prototype.selectedClaims = function () {
        var res = this.claimsData.filter(function (x) { return x.selected == true; });
        this.selectedClaimList = [];
        for (var i = 0; i < res.length; i++) {
            var claimtypeId = ClaimConstants[res[i].claimType];
            this.selectedClaimList.push({ transactionId: res[i].transactionId, transactionType: claimtypeId, statusId: 1 });
        }
    };
    FundRequestComponent.prototype.selectedLocationsList = function (args) {
        this.selectedLocations = args.target.options[args.target.selectedIndex];
    };
    FundRequestComponent.prototype.selectedClaimTypesList = function (args) {
        this.selectedClaimTypes = args.target.options[args.target.selectedIndex];
    };
    FundRequestComponent.prototype.getBoardDetails = function () {
        var _this = this;
        this.dataService
            .getBoardMasterData()
            .subscribe(function (data) {
            _this.boardList = data;
        });
    };
    FundRequestComponent.prototype.getWorkerTypeDetails = function () {
        var _this = this;
        this.dataService
            .getWorkerTypeMasterData()
            .subscribe(function (data) {
            _this.WorkerTypeList = data;
        });
    };
    FundRequestComponent.prototype.getLocationDetailsByRloId = function (id) {
        var _this = this;
        this.dataService
            .getLocationsMasterData(id)
            .subscribe(function (data) {
            _this.LocationList = data;
        });
    };
    FundRequestComponent.prototype.getClaimTypesMasterDetails = function () {
        var _this = this;
        this.dataService
            .getClaimTypesMasterData()
            .subscribe(function (data) {
            _this.claimTypesList = data;
        });
    };
    FundRequestComponent.prototype.getTypeName = function (claimType) {
        if (ClaimConstants[claimType] == 2) {
            return "Health & Family";
        }
        return claimType;
    };
    FundRequestComponent.prototype.cancelClick = function () {
        this.router.navigate(['alc/fundrequestedclaims']);
    };
    FundRequestComponent.prototype.selectBoardChange = function () {
        debugger;
        this.GetClaimVisible = false;
        this.claimsData = [];
    };
    FundRequestComponent.prototype.getExpenses = function () {
        var _this = this;
        this.dataService
            .getlovDetails(LovConstants.ExpensesType)
            .subscribe(function (data) {
            _this.expensesTypesLov = data;
        });
    };
    FundRequestComponent.prototype.openModel = function () {
        this.clearExpenses();
        this.rowIndex = -1;
        this.expensesModal.show();
    };
    FundRequestComponent.prototype.addExpenseDetails = function (details) {
        debugger;
        //if (this.claim.educationDetails.claimAmount == undefined) { this.claim.educationDetails.claimAmount = 0; }
        if (this.validateExpenseDetails(details)) {
            //details.statusId = ClaimStatus.Submitted;
            if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == -1 && this.rowIndex == -1) {
                //for (var i = 0; i < this.expensesTypesLov.length; i++) {
                //    if (this.expensesTypesLov[i].lovDtlId == details.itemId) {
                //        details.itemName = this.expensesTypesLov[i].optionName;
                //    }
                //}
                details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                this.expensesDetailsArray.push(details);
                this.expensesModal.hide();
            }
            else if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) != -1 && this.rowIndex == -1) {
                alert("already added please select another expense type");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    if (this.expensesDetailsArray.findIndex(function (x) { return x.itemId == details.itemId; }) == this.rowIndex) {
                        this.expensesDetailsArray.splice(this.rowIndex, 1);
                        details.itemName = this.expensesTypesLov.find(function (x) { return x.lovDtlId == details.itemId; }).optionName;
                        this.expensesDetailsArray.push(details);
                        this.rowIndex = -1;
                        this.expensesModal.hide();
                    }
                    else {
                        alert("already added please select another expense type");
                        return;
                    }
                }
            }
            this.expensesDetails = {};
        }
    };
    FundRequestComponent.prototype.editExpenseDetails = function (details) {
        //details.itemName = this.expensesTypesLov.find(x => x.lovDtlId == details.itemId).optionName;
        this.expensesDetails = details;
        //this.rowEligibleAmount = details.eligibleAmount;
        this.rowIndex = this.expensesDetailsArray.indexOf(details);
        this.expensesModal.show();
    };
    FundRequestComponent.prototype.removeExpenseDetails = function (details) {
        var index = this.expensesDetailsArray.indexOf(details);
        if (index !== -1) {
            //this.claim.educationDetails.claimAmount -= this.expensesDetailsArray[index].eligibleAmount;
            this.expensesDetailsArray.splice(index, 1);
            //if (this.expensesDetailsArray.findIndex(x => x.presentlyReadingName == "Assistance of Completion of UG Education or Equivalent Skill Development") != -1) {
            //    this.viewuploadNonMarriage = true;
            //}
            //else {
            //    this.viewuploadNonMarriage = false;
            //}
            //this.eduCount -= 1;
            //if (this.eduCount >= 2) { this.maxLimitExceeded = true; } else { this.maxLimitExceeded = false; }
        }
    };
    FundRequestComponent.prototype.radioChange = function (id) {
        this.claimsData = [];
        this.expensesDetailsArray = [];
        if (id == 1) {
            //if (this.fundRequestType == "claims") {
            //    alert("claims");
            //}
            this.fundRequestType = "claims";
            //this.GetClaimVisible = true;
            this.viewExpenses = false;
        }
        if (id == 2) {
            // if (this.fundRequestType == "expenses") {
            //    alert("expenses");
            //}
            this.fundRequestType = "expenses";
            this.GetClaimVisible = false;
            this.viewExpenses = true;
        }
    };
    FundRequestComponent.prototype.validateExpenseDetails = function (details) {
        //debugger;
        var isValid = true;
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
        if (details.itemId == undefined || details.itemId <= 0) {
            this.expenseTypeValid = isValid = false;
        }
        if (details.fundsRequired == undefined) {
            this.fundRequiredValid = isValid = false;
        }
        //if (details.registrationRollNo == undefined || details.registrationRollNo == "") { this.registrationNoValid = isValid = false; }
        //if (details.institutionContact != undefined && details.institutionContact.toString().length > 0 && details.institutionContact.toString().length < 10) {
        //    this.institutionContactValid = isValid = false;
        //}
        //if (details.year == undefined) { this.educationYearValid = isValid = false; }
        //if (this.viewuploadNonMarriage) {
        //    if (this.eduNonMarriage.length == 0) { this.uploadNonMarriageValid = isValid = false }
        //}
        //if (this.educertificates.length == 0) { this.uploadCertificatetValid = isValid = false }
        //if (this.eduSelfAttested.length == 0) { this.uploadselfattestedValid = isValid = false }
        //console.log(details.dateofAdmission);
        //if (details.dateofAdmission == undefined) { this.dateOfAdmissionValid = isValid = false; }
        //if (details.presentlyReading == undefined || details.presentlyReading <= 0) { this.presentlyReadingValid = isValid = false; }
        return isValid;
    };
    FundRequestComponent.prototype.clearExpenses = function () {
        //this.expensesDetails = {} as FundRequestExpensesDtlList;
        //this.expensesDetailsArray = [];
        this.expenseTypeValid = true;
        this.fundRequiredValid = true;
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], FundRequestComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('expensesModal'),
        __metadata("design:type", ModalDirective)
    ], FundRequestComponent.prototype, "expensesModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], FundRequestComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('child'),
        __metadata("design:type", ClaimviewdataComponent)
    ], FundRequestComponent.prototype, "child", void 0);
    FundRequestComponent = __decorate([
        Component({
            selector: 'app-fund-request',
            templateUrl: './fund-request.component.html',
            styleUrls: ['./fund-request.component.css']
        }),
        __metadata("design:paramtypes", [Router, AlcDataService, UserService, DomSanitizer])
    ], FundRequestComponent);
    return FundRequestComponent;
}());
export { FundRequestComponent };
//# sourceMappingURL=fund-request.component.js.map