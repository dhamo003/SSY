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
import { Router, ActivatedRoute } from '@angular/router';
import { InspectorDataService } from '../services/inspector-data.service';
import { ClaimConstants, WorkflowTrans, EntryPoint, PFTypeOfClaim, ClaimCheckList, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from "ngx-bootstrap";
import { UserService } from '../../UserService';
import { DomSanitizer } from '@angular/platform-browser';
import { ClaimviewdataComponent } from '../claimviewdata/claimviewdata.component';
var ReviewclaimsComponent = /** @class */ (function () {
    //If Paging required in future
    ////Paging props start
    //page: number = pagination.pageNo;
    //totalRows: any;
    //pageSize: number = pagination.pageSize;
    ////Paging props end
    function ReviewclaimsComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.forcedClaimsData = [];
        this.claim = {};
        this.claim1 = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.showSendBack = true;
        this.approvedAmountValid = true;
        this.inspectorCommentsValid = true;
        this.review = {};
        this.claimsTrack = {};
        this.isvisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.packages = [];
        this.selectedPackages = [];
        this.healthFamilyPackages = [];
        this.viewMetWithAnAccident = false;
        this.claimExceptionDetails = "";
        this.isVisibleClaimExceptions = false;
        this.claimAmount = 0;
        this.expection = [];
        this.isPrematureClaim = false;
        this.isShowClaimsHistory = false;
        this.isMapForcedClaim = false;
        this.selectedAll = false;
        this.forcedClaimsDataSelected = true;
        this.forcedCloseClaims = [];
        this.allForcedCloseClaims = [];
        // isInvalidNominee: boolean = false;
        this.benficiaryNominee = [];
        this.benNomineenDetails = {};
        //Validation Nominee variables
        this.nomineeNameValid = true;
        this.relationshipValid = true;
        this.genderValid = true;
        this.nomineeDOBValid = true;
        this.nomineeShareValid = true;
        this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = true;
        this.nomineeIFSCCodeValid = true;
        this.rowIndex = -1;
        this.checkList = [];
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        //isEduOptionHead: boolean = true;
        //isPFOptionHead: boolean = true;
        //isHealthOptionHead: boolean = true;
        //isDisOptionHead: boolean = true;
        //isDeathOptionHead: boolean = true;
        this.isOptionHead = true;
        this.isDeathBenDisable = false;
        this.enableSearchStudentLink = true;
        this.maxDate = new Date();
        this.datePickerConfig = Object.assign({}, {
            dateInputFormat: 'DD/MM/YYYY',
            showWeekNumbers: false,
            containerClass: 'theme-dark-blue'
        });
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.claimId = params["claimId"];
            _this.claimType = ClaimConstants[params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            _this.claimAmount = params["claimAmount"];
            if (_this.mode != "pending") {
                _this.isvisable = _this.isApprovedAmountDisable = false;
                _this.enableSearchStudentLink = false;
            }
            else {
                _this.isShowClaimsHistory = true;
                _this.enableSearchStudentLink = true;
                if (_this.claimType != ClaimConstants.HealthFamily && _this.claimType != ClaimConstants.PF) {
                    _this.isApprovedAmountDisable = false;
                }
            }
            _this.workflowId = params["workflowId"];
            _this.chronologicalOrder = params["chronologicalOrder"];
            if (_this.chronologicalOrder > 0) {
                debugger;
                alert("You are not following the chronological order");
                _this.isCOExceptionCommentsReq = true;
            }
        });
        this.getPackages();
        this.getHealthCheckList();
        this.getEducationCheckList();
        this.getDisabilityCheckList();
        this.getDeathCheckList();
        this.getPFCheckList();
        this.getClaimDetailsByClaimId(this.claimId, this.tranctionId, this.claimType);
    };
    ReviewclaimsComponent.prototype.getPackages = function () {
        var _this = this;
        this.dataService
            .getPackages()
            .subscribe(function (data) {
            _this.packages = data;
            console.log(_this.packages);
            var groups = new Set(_this.packages.map(function (item) { return item.ailmentName; }));
        });
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            _this.claim = data;
            debugger;
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
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.educationDetails.claimAmount;
                }
                else
                    _this.review.approvedAmount = _this.claim.educationDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.educationDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.educationDetails.exceptionComments;
                //educationClaimExceptionDetails
                if (_this.claim.educationDetails.educationClaimExceptionDetails != null) {
                    if (_this.claim.educationDetails.educationClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.educationDetails.educationClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.educationDetails.educationClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                debugger;
                //check list
                if (_this.claim.educationDetails.educationClaimCheckListDetails != null) {
                    if (_this.claim.educationDetails.educationClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.educationDetails.educationClaimCheckListDetails.length; i++) {
                            if (_this.educationCheckList.length > 0) {
                                for (var j = 0; j < _this.educationCheckList.length; j++) {
                                    if (_this.claim.educationDetails.educationClaimCheckListDetails[i].checkListDtlId == _this.educationCheckList[j].checkListDtlId) {
                                        _this.educationCheckList[j].checked = true;
                                    }
                                }
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
                var data_1 = _this.claim.healthFamilyDetails.healthFamilyPackages;
                for (var i = 0; i < data_1.length; i++) {
                    _this.packages.filter(function (x) { return x.packageID == data_1[i].packageID; })[0].isChecked = true;
                }
                _this.selectedPackages = _this.packages.filter(function (x) { return x.isChecked == true; });
                _this.review.approvedAmount = _this.claim.healthFamilyDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.healthFamilyDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                //healthClaimExceptionDetails
                if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                        debugger;
                        // this.claimExceptionDetailsList = this.claim.healthFamilyDetails.healthClaimExceptionDetails;
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimCheckListDetails.length; i++) {
                            if (_this.healthCheckList.length > 0) {
                                for (var j = 0; j < _this.healthCheckList.length; j++) {
                                    if (_this.claim.healthFamilyDetails.healthClaimCheckListDetails[i].checkListDtlId == _this.healthCheckList[j].checkListDtlId) {
                                        _this.healthCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.disabilityDetails != null) {
                debugger;
                for (var j = 0; j < _this.claim.disabilityDetails.attachmentDTOList.length; j++) {
                    var attachment = _this.claim.disabilityDetails.attachmentDTOList[j];
                    if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                        attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                    }
                    _this.attachmentList.push(attachment);
                }
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.disabilityDetails.claimAmount;
                }
                else
                    _this.review.approvedAmount = _this.claim.disabilityDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.disabilityDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
                //disabilityClaimExceptionDetails
                if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                debugger;
                if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimCheckListDetails.length; i++) {
                            if (_this.disabilityCheckList.length > 0) {
                                for (var j = 0; j < _this.disabilityCheckList.length; j++) {
                                    if (_this.claim.disabilityDetails.disabilityClaimCheckListDetails[i].checkListDtlId == _this.disabilityCheckList[j].checkListDtlId) {
                                        _this.disabilityCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
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
                if (_this.mode == "pending") {
                    _this.review.approvedAmount = _this.claim.deathDetails.claimAmount;
                    _this.isDeathBenDisable = true;
                }
                else
                    _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.deathDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.deathDetails.exceptionComments;
                //deathClaimExceptionDetails
                if (_this.claim.deathDetails.deathClaimExceptionDetails != null) {
                    if (_this.claim.deathDetails.deathClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.deathDetails.deathClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.deathDetails.deathClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.deathDetails.deathClaimCheckListDetails != null) {
                    if (_this.claim.deathDetails.deathClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.deathDetails.deathClaimCheckListDetails.length; i++) {
                            if (_this.deathCheckList.length > 0) {
                                for (var j = 0; j < _this.deathCheckList.length; j++) {
                                    if (_this.claim.deathDetails.deathClaimCheckListDetails[i].checkListDtlId == _this.deathCheckList[j].checkListDtlId) {
                                        _this.deathCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.providentFundDetails != null) {
                debugger;
                if (_this.claim.providentFundDetails.typeOfClaim != null && _this.claim.providentFundDetails.typeOfClaim == PFTypeOfClaim.Premature) {
                    _this.isPrematureClaim = true;
                }
                _this.review.approvedAmount = _this.claim.providentFundDetails.approvedAmount;
                _this.review.inspectorComments = _this.claim.providentFundDetails.inspectorComments;
                _this.review.exceptionComments = _this.claim.providentFundDetails.exceptionComments;
                //pfClaimExceptionDetails
                if (_this.claim.providentFundDetails.pfClaimExceptionDetails != null) {
                    if (_this.claim.providentFundDetails.pfClaimExceptionDetails.length > 0) {
                        debugger;
                        for (var i = 0; i < _this.claim.providentFundDetails.pfClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.providentFundDetails.pfClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //check list
                if (_this.claim.providentFundDetails.pfClaimCheckListDetails != null) {
                    if (_this.claim.providentFundDetails.pfClaimCheckListDetails.length > 0) {
                        for (var i = 0; i < _this.claim.providentFundDetails.pfClaimCheckListDetails.length; i++) {
                            if (_this.pfCheckList.length > 0) {
                                for (var j = 0; j < _this.pfCheckList.length; j++) {
                                    if (_this.claim.providentFundDetails.pfClaimCheckListDetails[i].checkListDtlId == _this.pfCheckList[j].checkListDtlId) {
                                        _this.pfCheckList[j].checked = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (_this.claim.attachment != null) {
                for (var k = 0; k < _this.claim.attachment.length; k++) {
                    if (_this.claim.attachment[k].fileName != null) {
                        var attachment = _this.claim.attachment[k];
                        if (attachment.fileName.split('.')[attachment.fileName.split('.').length - 1] == 'pdf') {
                            attachment.attachmenturl = _this.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64," + attachment.fileContent);
                        }
                        _this.claim.attachment[k] = attachment;
                        _this.attachmentList.push(attachment);
                    }
                }
            }
            if (_this.claim.entryPoint == EntryPoint.Nominee) {
                //this.showSendBack = false;
                if (_this.mode == "pending") {
                    if (_this.claimType == ClaimConstants.HealthFamily || _this.claimType == ClaimConstants.Education) {
                        _this.isMapForcedClaim = true;
                        _this.getBeneficiaryForcedClosedClaims(_this.claim.benSno, claimType);
                    }
                    ////(March-15-2019 ) committed this code based on suman/client request
                    //if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
                    //    this.isInvalidNominee = true;
                    //    this.getBeneficiaryNomineeDetails(this.claim.benSno);
                    //    this.rowIndex = this.rowIndex + this.benficiaryNominee.length;
                    //}
                }
            }
            if (_this.claim.entryPoint == EntryPoint.Nominee || (_this.claim.entryPoint == EntryPoint.Agent && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == EntryPoint.CA && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == EntryPoint.Lwfc && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
            //this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, claimType, this.page, this.pageSize);
        });
    };
    ReviewclaimsComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            _this.benficiaryNominee = data;
        });
    };
    ReviewclaimsComponent.prototype.openModel = function () {
        this.typeOfMode = "Add";
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        this.rowIndex = -1;
        this.benNomineenDetails = {};
        this.benNomineenDetails.benSno = this.claim.benSno;
        this.lgModal.show();
    };
    ReviewclaimsComponent.prototype.selectRelationship = function (args, benNominee) {
        this.benNomineenDetails.benNomineeRelation = args.target.options[args.target.selectedIndex].text;
        //this.benNomineenDetails.dob = new Date();
    };
    ReviewclaimsComponent.prototype.mappingNominee = function (item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;
    };
    ReviewclaimsComponent.prototype.addNomineeDetails = function (details) {
        debugger;
        if (this.validateNomineeDetails(details)) {
            if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) == -1 && this.rowIndex == -1) {
                details.createdBy = this.userService.user.deptUserid;
                details.createdDate = new Date();
                // details.dob = new Date(this.dobNominee);
                this.benficiaryNominee.push(details);
                this.lgModal.hide();
            }
            else if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) != -1 && this.rowIndex == -1) {
                alert("already added please enter another nominee details");
                return;
            }
            else {
                if (this.rowIndex != -1) {
                    //this.benficiaryNominee.splice(this.rowIndex, 1);
                    if (this.benficiaryNominee.findIndex(function (x) { return x.benNomineeName == details.benNomineeName; }) == this.rowIndex) {
                        //this.benficiaryNominee.push(details);
                        this.rowIndex = -1;
                        this.lgModal.hide();
                    }
                }
            }
            this.benNomineenDetails = {};
        }
    };
    ReviewclaimsComponent.prototype.editNomineeDetails = function (details) {
        debugger;
        this.typeOfMode = "Edit";
        this.benNomineenDetails = details;
        this.rowIndex = this.benficiaryNominee.indexOf(details);
        this.lgModal.show();
    };
    ReviewclaimsComponent.prototype.clearNomineeDetails = function () {
    };
    ReviewclaimsComponent.prototype.validateNomineeDetails = function (details) {
        var isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        if (details.relationshipID == undefined || details.relationshipID <= 0) {
            this.relationshipValid = isValid = false;
        }
        if (details.benNomineeGender == undefined || details.benNomineeGender == "") {
            this.genderValid = isValid = false;
        }
        if (details.dob == undefined) {
            this.nomineeDOBValid = isValid = false;
        }
        if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") {
            this.nomineeShareValid = isValid = false;
        }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") {
            this.nomineeBankNameValid = isValid = false;
        }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") {
            this.nomineeBranchNameValid = isValid = false;
        }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") {
            this.nomineeIFSCCodeValid = isValid = false;
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.getBenBasicDetails = function (benNo) {
        var _this = this;
        this.dataService
            .getBeneficiaryBasicDetailsById(benNo)
            .subscribe(function (data) {
            _this.beneficiary = data;
            console.log(_this.beneficiary);
        });
    };
    ReviewclaimsComponent.prototype.getClaimTrackDetailsByClaimId = function (transactionId, tranctionType, wfId) {
        var _this = this;
        this.dataService
            .getClaimTrackDetailsByTransactionId(transactionId, tranctionType, wfId)
            .subscribe(function (data) {
            _this.claimsTrack = data;
        });
    };
    ReviewclaimsComponent.prototype.viewAttachment = function () {
        this.attachModel.show();
    };
    ReviewclaimsComponent.prototype.Getimage = function (imageData) {
        var data = imageData.fileName.split('.')[imageData.fileName.split('.').length - 1];
        if (data.toLowerCase() == "pdf") {
            console.log(imageData.stringContent);
            return true;
        }
        else {
            return false;
        }
    };
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getUrlOfPdf = function (imageData) {
        this.dataService
            .getAttachment()
            .then(function (data) {
            var url = URL.createObjectURL(data);
            console.log(url);
        });
    };
    ReviewclaimsComponent.prototype.okClick = function () {
        this.successModal.hide();
        this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
        debugger;
        if (this.validateClaim(type)) {
            this.review.benDeathStatus = false;
            this.review.statusId = status;
            this.review.transactionId = this.tranctionId;
            this.review.claimType = this.claimType;
            this.review.wfId = WorkflowTrans.workflow;
            this.review.userId = this.userService.user.deptUserid;
            //-----------------
            this.expection = [];
            if (this.mode == "pending") {
                //if (this.chronologicalOrder > 0) {
                //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                //    exp.exceptionText = this.review.inspChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;
                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
                    debugger;
                    if (this.review.approvedAmount != undefined || this.review.approvedAmount != 0) {
                        ////Exception Rule - 6	When Claimamount>Approved Amount
                        //if (this.claimAmount > this.review.approvedAmount) {
                        //    const exp: ClaimExceptionDetailsModel = {} as ClaimExceptionDetailsModel;
                        //    exp.exceptionText = "Approved Amount lessthan Claim Amount";
                        //    exp.exceptionCapturedDate = new Date();
                        //    exp.raisedBy = this.userService.user.deptUserid;
                        //    this.expection.push(exp);
                        //}
                        //Exception Rule - 7	When Claimamount<Approved Amount
                        if (this.claimAmount < this.review.approvedAmount) {
                            var exp = {};
                            exp.exceptionText = "Approved amount greater than claim amount";
                            exp.exceptionCapturedDate = new Date();
                            exp.raisedBy = this.userService.user.deptUserid;
                            this.expection.push(exp);
                        }
                    }
                }
                this.review.claimExceptionDetails = this.expection;
            }
            if (this.isMapForcedClaim) {
                if (this.forcedClaimsData != undefined && this.forcedClaimsData.length > 0) {
                    for (var k = 0; k < this.forcedClaimsData.length; k++) {
                        if (this.forcedClaimsData[k].selected) {
                            this.forcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                        }
                        this.allForcedCloseClaims.push(this.forcedClaimsData[k].claimId);
                    }
                }
                this.review.UpdateForcedClaims = this.forcedCloseClaims;
                this.review.AllForcedClaims = this.allForcedCloseClaims;
            }
            //if (this.isInvalidNominee) {
            //    debugger;
            //    this.review.benficiaryNomineeDetails = this.benficiaryNominee;
            //}
            this.checkList = [];
            debugger;
            if (mode == "Forward") {
                if (this.claim.providentFundDetails != null) {
                    if (this.pfCheckList.length > 0) {
                        for (var i = 0; i < this.pfCheckList.length; i++) {
                            var chk = {};
                            if (this.pfCheckList[i].checked) {
                                chk.checkListDtlId = this.pfCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.healthFamilyDetails != null) {
                    if (this.healthCheckList.length > 0) {
                        for (var i = 0; i < this.healthCheckList.length; i++) {
                            var chk = {};
                            if (this.healthCheckList[i].checked) {
                                chk.checkListDtlId = this.healthCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                    if (this.deathCheckList.length > 0) {
                        for (var i = 0; i < this.deathCheckList.length; i++) {
                            var chk = {};
                            if (this.deathCheckList[i].checked) {
                                chk.checkListDtlId = this.deathCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.disabilityDetails != null) {
                    if (this.disabilityCheckList.length > 0) {
                        for (var i = 0; i < this.disabilityCheckList.length; i++) {
                            var chk = {};
                            if (this.disabilityCheckList[i].checked) {
                                chk.checkListDtlId = this.disabilityCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                if (this.claim.educationDetails != null) {
                    if (this.educationCheckList.length > 0) {
                        for (var i = 0; i < this.educationCheckList.length; i++) {
                            var chk = {};
                            if (this.educationCheckList[i].checked) {
                                chk.checkListDtlId = this.educationCheckList[i].checkListDtlId;
                                this.checkList.push(chk);
                            }
                        }
                    }
                }
                this.review.claimCheckListDetails = this.checkList;
            }
            else if (mode == "force close") {
                this.confirmForcedCloseModal.hide();
                this.review.benDeathStatus = true;
            }
            //-----------------
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateComments(this.review)
                    .then(function (data) {
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReviewclaimsComponent.prototype.cancelclick = function () {
        //|| this.mode == "view"
        if (this.mode == "pending") {
            this.router.navigate(['inspector/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['inspector/sendbackclaims']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['inspector/rejectclaims']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "force") {
            this.router.navigate(['inspector/forcecloseclaims'], { skipLocationChange: true });
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });
        }
        else if (this.mode == "search") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        debugger;
        var isValid = true;
        var sharePercentage = 0;
        var count = 0;
        var chkListCount = 0;
        this.approvedAmountValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
            if (this.claim.providentFundDetails != null) {
                if (this.pfCheckList.length > 0) {
                    for (var i = 0; i < this.pfCheckList.length; i++) {
                        if (this.pfCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.healthFamilyDetails != null) {
                if (this.healthCheckList.length > 0) {
                    for (var i = 0; i < this.healthCheckList.length; i++) {
                        if (this.healthCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.deathDetails != null) {
                if (this.deathCheckList.length > 0) {
                    for (var i = 0; i < this.deathCheckList.length; i++) {
                        if (this.deathCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.disabilityDetails != null) {
                if (this.disabilityCheckList.length > 0) {
                    for (var i = 0; i < this.disabilityCheckList.length; i++) {
                        if (this.disabilityCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (this.claim.educationDetails != null) {
                if (this.educationCheckList.length > 0) {
                    for (var i = 0; i < this.educationCheckList.length; i++) {
                        if (this.educationCheckList[i].checked) {
                            chkListCount++;
                        }
                    }
                }
            }
            if (chkListCount <= 0) {
                alert("At least one document needs to be checked");
                isValid = false;
            }
        }
        if (this.review.inspectorComments == undefined || this.review.inspectorComments == "") {
            this.inspectorCommentsValid = isValid = false;
        }
        if ((this.review.inspChronologicalOrderComments == undefined || this.review.inspChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
        if (this.isMapForcedClaim) {
            if (this.forcedClaimsData.find(function (c) { return c.selected == true; }) == undefined) {
                this.forcedClaimsDataSelected = isValid = false;
            }
        }
        ////Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        //if (this.isInvalidNominee) {
        //    debugger;
        //    if (this.benficiaryNominee.length > 0) {
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
        //        }
        //        if (sharePercentage != 100) {
        //            alert("Share Allocation Accepts only 100%");
        //            isValid = false;
        //        }
        //        for (var i = 0; i < this.benficiaryNominee.length; i++) {
        //            if (this.benficiaryNominee[i].isMappingNominee) {
        //                count++;
        //            }
        //        }
        //        if (count != 1) {
        //            alert("Please select one nominee to mapping ");
        //            isValid = false;
        //        }
        //    }
        //    else {
        //        alert("Please map one nominee to this claim ");
        //        isValid = false;
        //    }
        //}
        return isValid;
    };
    ReviewclaimsComponent.prototype.formatDate = function (date) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        var dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();
        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    };
    ReviewclaimsComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    ReviewclaimsComponent.prototype.viewHistory = function () {
        this.historyModal.show();
    };
    ReviewclaimsComponent.prototype.getBeneficiaryClaimsHistory = function (claimId, benSNo, tranctionType) {
        var _this = this;
        debugger;
        this.dataService
            .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType)
            .subscribe(function (data) {
            _this.claimsHistoryData = data;
        });
    };
    //If Paging required in future
    //getBeneficiaryClaimsHistory(claimId: any, benSNo: any, tranctionType: any, pageNo?: any, pageSize?: any) {
    //    debugger;
    //    this.dataService
    //        .getBeneficiaryClaimsHistory(claimId, benSNo, tranctionType, pageNo, pageSize)
    //        .subscribe((data: any) => {
    //            this.claimsHistoryData = data.results;
    //            this.totalRows = data.rowCount;
    //        });
    //}
    //changepage(page) {
    //    this.getBeneficiaryClaimsHistory(this.claimId, this.claim.benSno, this.claimType, this.page, this.pageSize);
    //}
    ReviewclaimsComponent.prototype.getBeneficiaryForcedClosedClaims = function (benSNo, tranctionType) {
        var _this = this;
        this.dataService
            .getBeneficiaryForcedClosedClaims(benSNo, tranctionType)
            .subscribe(function (data) {
            _this.forcedClaimsData = data;
        });
    };
    ReviewclaimsComponent.prototype.selectAll = function () {
        this.forcedClaimsDataSelected = true;
        for (var i = 0; i < this.forcedClaimsData.length; i++) {
            this.forcedClaimsData[i].selected = this.selectedAll;
        }
    };
    ReviewclaimsComponent.prototype.checkIfAllSelected = function () {
        this.forcedClaimsDataSelected = true;
        this.selectedAll = this.forcedClaimsData.every(function (item) {
            return item.selected == true;
        });
    };
    ReviewclaimsComponent.prototype.getHealthCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.HealthFamilyCheckList)
            .subscribe(function (data) {
            _this.healthCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getEducationCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.EducationCheckList)
            .subscribe(function (data) {
            _this.educationCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDisabilityCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.DisabilityCheckList)
            .subscribe(function (data) {
            _this.disabilityCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getDeathCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.DeathCheckList)
            .subscribe(function (data) {
            _this.deathCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.getPFCheckList = function () {
        var _this = this;
        this.dataService
            .getClaimCheckListDetails(ClaimCheckList.PFCheckList)
            .subscribe(function (data) {
            _this.pfCheckList = data;
        });
    };
    ReviewclaimsComponent.prototype.disabilityCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.disabilityCheckList != null) {
            for (var i = 0; i < this.disabilityCheckList.length; i++) {
                if (this.disabilityCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.disabilityCheckList[i].checked = true;
                    else
                        this.disabilityCheckList[i].checked = false;
                }
            }
            if (this.disabilityCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.pfCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.pfCheckList != null) {
            for (var i = 0; i < this.pfCheckList.length; i++) {
                if (this.pfCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.pfCheckList[i].checked = true;
                    else
                        this.pfCheckList[i].checked = false;
                }
            }
            if (this.pfCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.educationCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.educationCheckList != null) {
            for (var i = 0; i < this.educationCheckList.length; i++) {
                if (this.educationCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.educationCheckList[i].checked = true;
                    else
                        this.educationCheckList[i].checked = false;
                }
            }
            if (this.educationCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.healthCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.healthCheckList != null) {
            for (var i = 0; i < this.healthCheckList.length; i++) {
                if (this.healthCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.healthCheckList[i].checked = true;
                    else
                        this.healthCheckList[i].checked = false;
                }
            }
            if (this.healthCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.deathCheckedListChange = function (eve, checkListDtlId) {
        debugger;
        if (this.deathCheckList != null) {
            for (var i = 0; i < this.deathCheckList.length; i++) {
                if (this.deathCheckList[i].checkListDtlId == checkListDtlId) {
                    if (eve.target.checked)
                        this.deathCheckList[i].checked = true;
                    else
                        this.deathCheckList[i].checked = false;
                }
            }
            if (this.deathCheckList.find(function (e) { return e.checked == true; }))
                this.isOptionHead = false;
            else
                this.isOptionHead = true;
        }
    };
    ReviewclaimsComponent.prototype.viewClaimInfo1 = function (claim) {
        this.claimId = claim.claimId;
        this.claimType = this.claimType;
        this.tranctionId = 16;
        this.claimModal.show();
    };
    ReviewclaimsComponent.prototype.viewClaimInfo = function (claim) {
        debugger;
        this.claimId1 = claim.claimId;
        this.claimType1 = this.claimType;
        this.tranctionId1 = claim.transactionId;
        //this.attachmentList = [];
        this.getClaimDetailsByClaimId1(this.claimId1, this.tranctionId1, this.claimType1);
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId1 = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            debugger;
            _this.claim1 = data;
            _this.child.getData(_this.claim1);
            _this.claimModal.show();
        });
    };
    ReviewclaimsComponent.prototype.noClick = function () {
        this.confirmForcedCloseModal.hide();
    };
    ReviewclaimsComponent.prototype.forcedCloseClick = function (type) {
        if (this.validateClaim(type)) {
            this.confirmForcedCloseModal.show();
        }
    };
    ReviewclaimsComponent.prototype.searchLinkClick = function () {
        window.open('/inspector/searchstudent', 'searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "successModal", void 0);
    __decorate([
        ViewChild('attachModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "attachModel", void 0);
    __decorate([
        ViewChild('historyModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "historyModal", void 0);
    __decorate([
        ViewChild('lgModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "lgModal", void 0);
    __decorate([
        ViewChild('claimModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "claimModal", void 0);
    __decorate([
        ViewChild('child'),
        __metadata("design:type", ClaimviewdataComponent)
    ], ReviewclaimsComponent.prototype, "child", void 0);
    __decorate([
        ViewChild('confirmForcedCloseModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "confirmForcedCloseModal", void 0);
    __decorate([
        ViewChild('searchStudentModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "searchStudentModal", void 0);
    ReviewclaimsComponent = __decorate([
        Component({
            selector: 'app-reviewclaims',
            templateUrl: './reviewclaims.component.html',
            styleUrls: ['./reviewclaims.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, InspectorDataService, UserService, DomSanitizer])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());
export { ReviewclaimsComponent };
//# sourceMappingURL=reviewclaims.component.js.map