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
import { ClaimConstants, WorkflowTrans, PFTypeOfClaim, ClaimCheckList, EntryPoint, ReasonForApplyAgent } from '../../claim/pipes/constnts.model';
import { ModalDirective } from 'ngx-bootstrap';
import { AlcDataService } from '../services/alc-data.service';
import { UserService } from '../../UserService';
import { DomSanitizer } from '@angular/platform-browser';
var ReviewclaimsComponent = /** @class */ (function () {
    function ReviewclaimsComponent(router, route, dataService, userService, sanitizer) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.userService = userService;
        this.sanitizer = sanitizer;
        this.claimsHistoryData = [];
        this.approvedAmountValid = true;
        this.alcCommentsValid = true;
        this.claim = {};
        this.educationDetails = {};
        this.beneficiary = {};
        this.review = {};
        this.isVisable = true;
        this.isApprovedAmountDisable = true;
        this.attachmentList = [];
        this.educationList = [];
        this.claimsTrack = {};
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
        this.isInvalidNominee = false;
        this.isOnDeathofBeneficiaryOnRequestofNominee = false;
        this.chronologicalOrder = 0;
        this.isCOExceptionCommentsReq = false;
        this.coexceptionCommentsValid = true;
        this.claimCOExceptionDetails = "";
        this.isVisibleCOExceptions = false;
        this.enableSearchStudentLink = true;
        //Validation Nominee variables
        this.nomineeNameValid = true;
        this.relationshipValid = true;
        this.genderValid = true;
        this.nomineeDOBValid = true;
        this.nomineeShareValid = true;
        this.nomineeBankNameValid = true;
        this.nomineeBankAccountValid = true;
        this.nomineeBankAccountMinlengthValid = true;
        this.nomineeBranchNameValid = true;
        this.nomineeIFSCCodeValid = true;
        this.benficiaryNominee = [];
        this.benficiaryNomineeDetails = [];
        this.benNomineenDetails = {};
        this.rowIndex = -1;
        this.successValue = "review";
    }
    ReviewclaimsComponent.prototype.ngOnDestroy = function () {
        if (this.route$)
            this.route$.unsubscribe();
    };
    ReviewclaimsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route$ = this.route.params.subscribe(function (params) {
            debugger;
            _this.claimId = params["claimId"];
            _this.claimType = ClaimConstants[params["claimType"]];
            _this.tranctionId = params["transactionId"];
            _this.mode = params["mode"];
            _this.claimAmount = params["claimAmount"];
            if (_this.mode != "pending") {
                _this.isVisable = _this.isApprovedAmountDisable = false;
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
    ReviewclaimsComponent.prototype.getDate = function (datestring) {
        return new Date(datestring).toLocaleDateString();
    };
    ReviewclaimsComponent.prototype.getClaimDetailsByClaimId = function (id, tranctionId, claimType) {
        var _this = this;
        this.dataService
            .getClaimDetailsByClaimId(id, tranctionId, claimType)
            .subscribe(function (data) {
            debugger;
            _this.claim = data;
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
                _this.review.alcComments = _this.claim.educationDetails.alcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.educationDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.educationDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
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
                _this.review.alcComments = _this.claim.healthFamilyDetails.alcComments;
                _this.review.exceptionComments = _this.claim.healthFamilyDetails.exceptionComments;
                if (_this.claim.healthFamilyDetails.typeOfHospitalization == 1) {
                    if (_this.claim.healthFamilyDetails.typeOfClaim == 5) {
                        _this.viewMetWithAnAccident = true;
                    }
                }
                //healthClaimExceptionDetails
                if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails != null) {
                    if (_this.claim.healthFamilyDetails.healthClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.healthFamilyDetails.healthClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.healthFamilyDetails.healthClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.healthFamilyDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.healthFamilyDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                _this.review.alcComments = _this.claim.disabilityDetails.alcComments;
                _this.review.exceptionComments = _this.claim.disabilityDetails.exceptionComments;
                //disabilityClaimExceptionDetails
                if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails != null) {
                    if (_this.claim.disabilityDetails.disabilityClaimExceptionDetails.length > 0) {
                        for (var i = 0; i < _this.claim.disabilityDetails.disabilityClaimExceptionDetails.length; i++) {
                            _this.claimExceptionDetails = _this.claimExceptionDetails.concat(_this.claim.disabilityDetails.disabilityClaimExceptionDetails[i].exceptionText + "<br/>  <br/>");
                        }
                        _this.isVisibleClaimExceptions = true;
                    }
                }
                //Chronological Order Exception Details
                if (_this.claim.disabilityDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.disabilityDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
                }
                //check list
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
                }
                else
                    _this.review.approvedAmount = _this.claim.deathDetails.approvedAmount;
                _this.review.alcComments = _this.claim.deathDetails.alcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.deathDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.deathDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
                _this.review.alcComments = _this.claim.providentFundDetails.alcComments;
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
                //Chronological Order Exception Details
                if (_this.claim.providentFundDetails.inspChronologicalOrderComments != null) {
                    _this.claimCOExceptionDetails = _this.claim.providentFundDetails.inspChronologicalOrderComments;
                    _this.isVisibleCOExceptions = true;
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
            if (_this.claim.entryPoint == EntryPoint.Nominee || (_this.claim.entryPoint == EntryPoint.Agent && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)
                || (_this.claim.entryPoint == EntryPoint.CA && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee) || (_this.claim.entryPoint == EntryPoint.Lwfc && _this.claim.reasonForApply == ReasonForApplyAgent.OnDeathofBeneficiaryOnRequestofNominee)) {
                _this.isOnDeathofBeneficiaryOnRequestofNominee = true;
            }
            _this.getBenBasicDetails(_this.claim.benSno);
            console.log(_this.claim);
            _this.getClaimTrackDetailsByClaimId(tranctionId, claimType, _this.workflowId);
            if (_this.isShowClaimsHistory)
                _this.getBeneficiaryClaimsHistory(_this.claimId, _this.claim.benSno, claimType);
            if (_this.claim.entryPoint == EntryPoint.Nominee) {
                //this.showSendBack = false;
                if (_this.mode == "pending") {
                    //(March-15-2019 ) committed this code based on suman/client request
                    if (_this.claim.nomineeId == null || _this.claim.nomineeId == 0) {
                        _this.isInvalidNominee = true;
                        _this.getBeneficiaryNomineeDetails(_this.claim.benSno);
                        _this.rowIndex = _this.rowIndex + _this.benficiaryNominee.length;
                    }
                }
            }
        });
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
        if (this.successValue == "review")
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: false });
    };
    ReviewclaimsComponent.prototype.saveClaim = function (status, type, mode) {
        var _this = this;
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
                //    exp.exceptionText = this.review.alcChronologicalOrderComments; // "You are not following the chronological order";
                //    exp.exceptionCapturedDate = new Date();
                //    exp.raisedBy = this.userService.user.deptUserid;
                //    this.expection.push(exp);
                //}
                if (this.claimAmount > 0) {
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
                if (this.isInvalidNominee) {
                    debugger;
                    this.review.benficiaryNomineeDetails = this.benficiaryNominee;
                }
            }
            if (mode == "approved") {
                debugger;
                if (this.claim.deathDetails != null) {
                    this.review.benDeathStatus = true;
                }
            }
            //-----------------
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateComments(this.review)
                    .then(function (data) {
                    _this.successValue = "review";
                    _this.successMessage = "Claim " + mode + " successfully";
                    _this.successModal.show();
                });
            }
        }
    };
    ReviewclaimsComponent.prototype.cancelclick = function () {
        if (this.mode == "pending") {
            this.router.navigate(['alc/pendingapprovalclaims']);
        }
        else if (this.mode == "sendback") {
            this.router.navigate(['alc/sendbackclaims']);
        }
        else if (this.mode == "reject") {
            this.router.navigate(['alc/rejectclaims']);
        }
        else if (this.mode == "approve") {
            this.router.navigate(['alc/approvalclaims']);
        }
        else if (this.mode == "claimstatus") {
            this.router.navigate(['alc/claimstatus']);
        }
        else if (this.mode == "search") {
            this.router.navigate(['alc/searchstudent'], { skipLocationChange: true });
        }
    };
    ReviewclaimsComponent.prototype.validateClaim = function (type) {
        var isValid = true;
        var sharePercentage = 0;
        var count = 0;
        this.alcCommentsValid = this.approvedAmountValid = true;
        if (type == 0) {
            if (this.review.approvedAmount == undefined || this.review.approvedAmount == 0) {
                this.approvedAmountValid = isValid = false;
            }
            //(March-15-2019 )ALC should reject if the nominee name is still not matching
            //if (this.claim.entryPoint == EntryPoint.Nominee) {
            //    if (this.claim.nomineeId == null || this.claim.nomineeId == 0) {
            //        this.isInvalidNominee = true;
            //        alert("Invalid  Nominee");
            //        isValid = false;
            //    }
            //}
        }
        if (this.review.alcComments == undefined || this.review.alcComments == "") {
            this.alcCommentsValid = isValid = false;
        }
        if ((this.review.alcChronologicalOrderComments == undefined || this.review.alcChronologicalOrderComments == "") && this.isCOExceptionCommentsReq) {
            this.coexceptionCommentsValid = isValid = false;
        }
        //Nominee not Exist / mismatch // (March-15-2019 ) committed this code based on suman/client request
        if (this.isInvalidNominee) {
            debugger;
            if (this.benficiaryNominee.length > 0) {
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    sharePercentage += parseInt(this.benficiaryNominee[i].benNomineeShareAllocation);
                }
                if (sharePercentage != 100) {
                    alert("Share Allocation Accepts only 100%");
                    isValid = false;
                }
                for (var i = 0; i < this.benficiaryNominee.length; i++) {
                    if (this.benficiaryNominee[i].isMappingNominee) {
                        count++;
                    }
                }
                if (count != 1) {
                    alert("Please select one nominee to mapping ");
                    isValid = false;
                }
            }
            else {
                alert("Please map one nominee to this claim ");
                isValid = false;
            }
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.getApprovalPremission = function (id, type) {
        this.dataService
            .GetApprovalPremission(id, type)
            .subscribe(function (data) {
            console.log(data);
        });
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
    ReviewclaimsComponent.prototype.searchLinkClick = function () {
        window.open('/inspector/searchstudent', 'searchStudent', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar = 0, scrollbars = no, resizable = no, width = 800, height = 450');
    };
    ReviewclaimsComponent.prototype.getBeneficiaryNomineeDetails = function (id) {
        var _this = this;
        this.dataService
            .getBeneficiaryNomineeDetails(id)
            .subscribe(function (data) {
            debugger;
            _this.benficiaryNominee = data;
            //this.benficiaryNomineeDetails = this.benficiaryNominee.slice(0, this.benficiaryNominee.length-1);
        });
    };
    ReviewclaimsComponent.prototype.selectNominee = function (item) {
        debugger;
        if (!item.isMappingNominee)
            return item.isMappingNominee = true;
        else
            return item.isMappingNominee = false;
    };
    //editNomineeDetails(details: BenNominee) {
    //    debugger;
    //    this.typeOfMode = "Edit";
    //    this.benNomineenDetails = details;
    //    this.rowIndex = this.benficiaryNominee.indexOf(details);
    //    this.lgModal.show();
    //}
    //addNomineeDetails(details: BenNominee) {
    //    debugger;
    //    if (this.validateNomineeDetails(details)) {
    //        if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == -1 && this.rowIndex == -1) {
    //            details.createdBy = this.userService.user.deptUserid;
    //            details.createdDate = new Date();
    //            // details.dob = new Date(this.dobNominee);
    //            this.benficiaryNominee.push(details);
    //            this.lgModal.hide();
    //        }
    //        else if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) != -1 && this.rowIndex == -1) {
    //            alert("already added please enter another nominee details"); return;
    //        }
    //        else {
    //            if (this.rowIndex != -1) {
    //                //this.benficiaryNominee.splice(this.rowIndex, 1);
    //                if (this.benficiaryNominee.findIndex(x => x.benNomineeName == details.benNomineeName) == this.rowIndex) {
    //                    //this.benficiaryNominee.push(details);
    //                    this.rowIndex = -1;
    //                    this.lgModal.hide();
    //                }
    //            }
    //        }
    //        this.benNomineenDetails = {} as BenNominee;
    //    }
    //}
    ReviewclaimsComponent.prototype.validateNomineeDetails = function (details) {
        var isValid = true;
        this.nomineeNameValid = this.relationshipValid = this.genderValid = this.nomineeDOBValid = this.nomineeShareValid = this.nomineeBankNameValid = this.nomineeBankAccountValid = true;
        this.nomineeBranchNameValid = this.nomineeIFSCCodeValid = true;
        if (details.benNomineeName == undefined || details.benNomineeName == "") {
            this.nomineeNameValid = isValid = false;
        }
        //if (details.relationshipID == undefined || details.relationshipID <= 0) { this.relationshipValid = isValid = false; }
        //if (details.benNomineeGender == undefined || details.benNomineeGender == "") { this.genderValid = isValid = false; }
        if (details.dob == undefined) {
            this.nomineeDOBValid = isValid = false;
        }
        //if (details.benNomineeShareAllocation == undefined || details.benNomineeShareAllocation == "") { this.nomineeShareValid = isValid = false; }
        if (details.benNomineeBankName == undefined || details.benNomineeBankName == "") {
            this.nomineeBankNameValid = isValid = false;
        }
        if (details.benNomineeBankAccNo == undefined || details.benNomineeBankAccNo == "") {
            this.nomineeBankAccountValid = isValid = false;
        }
        else if (details.benNomineeBankAccNo.length < 9) {
            this.nomineeBankAccountMinlengthValid = isValid = false;
        }
        if (details.benNomineeBankBranch == undefined || details.benNomineeBankBranch == "") {
            this.nomineeBranchNameValid = isValid = false;
        }
        if (details.benNomineeBankIfscCode == undefined || details.benNomineeBankIfscCode == "") {
            this.nomineeIFSCCodeValid = isValid = false;
        }
        return isValid;
    };
    ReviewclaimsComponent.prototype.editFieldValue = function (index, field) {
        debugger;
        field.isEdit = true;
        if (field.dob != null && field.dob != undefined)
            field.dob = new Date(field.dob);
    };
    ReviewclaimsComponent.prototype.cancelFieldValue = function (index, field) {
        debugger;
        //field.benNomineeName = this.benficiaryNomineeDetails[index].benNomineeName;
        //field.dob = new Date(this.benficiaryNomineeDetails[index].dob);
        //field.benNomineeBankName = this.benficiaryNomineeDetails[index].benNomineeBankName;
        //field.benNomineeBankAccNo = this.benficiaryNomineeDetails[index].benNomineeBankAccNo;
        //field.benNomineeBankBranch = this.benficiaryNomineeDetails[index].benNomineeBankBranch;
        //field.benNomineeBankIfscCode = this.benficiaryNomineeDetails[index].benNomineeBankIfscCode;
        field.isEdit = false;
        this.getBeneficiaryNomineeDetails(this.claim.benSno);
    };
    ReviewclaimsComponent.prototype.saveFieldValue = function (index, field) {
        if (this.validateNomineeDetails(field)) {
            field.isEdit = false;
            //this.pfCollectionDetailsList.splice(index, 1);
            //this.pfCollectionDetailsList.push(field);
        }
    };
    ReviewclaimsComponent.prototype.mapNominee = function () {
        var _this = this;
        debugger;
        var count = 0;
        if (this.benficiaryNominee.length > 1) {
            for (var i = 0; i < this.benficiaryNominee.length; i++) {
                if (this.benficiaryNominee[i].isMappingNominee)
                    count++;
            }
        }
        if (count > 1) {
            alert("Please map only one nominee");
            return;
        }
        else {
            this.benNomineenDetails = this.benficiaryNominee.find(function (x) { return x.isMappingNominee == true; });
            this.benNomineenDetails.claimId = this.claimId;
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .updateNomineeDetails(this.benNomineenDetails)
                    .then(function (data) {
                    _this.getClaimDetailsByClaimId(_this.claimId, _this.tranctionId, _this.claimType);
                    _this.isInvalidNominee = false;
                    _this.claimExceptionDetails = "";
                    _this.isVisibleClaimExceptions = false;
                    _this.successValue = "nominee";
                    _this.successMessage = "Nominee Details Updated successfully";
                    _this.successModal.show();
                });
            }
            this.nomineeModal.hide();
        }
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
        ViewChild('nomineeModal'),
        __metadata("design:type", ModalDirective)
    ], ReviewclaimsComponent.prototype, "nomineeModal", void 0);
    ReviewclaimsComponent = __decorate([
        Component({
            selector: 'app-reviewclaims',
            templateUrl: './reviewclaims.component.html',
            styleUrls: ['./reviewclaims.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AlcDataService, UserService, DomSanitizer])
    ], ReviewclaimsComponent);
    return ReviewclaimsComponent;
}());
export { ReviewclaimsComponent };
//# sourceMappingURL=reviewclaims.component.js.map