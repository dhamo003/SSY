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
import { ClaimNomineeDataService } from '../services/claim-data.service';
import { ModalDirective } from 'ngx-bootstrap';
import { ClaimStatus } from '../claim/pipes/constnts.model';
import { Router } from '@angular/router';
var TrackClaimNomineeComponent = /** @class */ (function () {
    function TrackClaimNomineeComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.claimsTrack = [];
        //claimsTrack: ClaimTrack = {} as ClaimTrack;
        this.nomineeContactValid = true;
        this.ssnNoValid = true;
        this.isOtpVisible = false;
        this.otpValid = true;
        this.isSendVisible = true;
        this.claimNoValid = true;
        this.isPullTrackVisible = false;
        this.isClaimTrackVisible = false;
        this.isClaimNoVisible = false;
        this.isReapplyVisible = false;
        this.isRefertoALCVisible = false;
        this.isRefertoDLCVisible = false;
    }
    TrackClaimNomineeComponent.prototype.ngOnInit = function () {
    };
    TrackClaimNomineeComponent.prototype.formatDate = function (date) {
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
    TrackClaimNomineeComponent.prototype.nthDay = function (day) {
        if (day > 3 && day < 21)
            return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    TrackClaimNomineeComponent.prototype.SendOTP = function () {
        var _this = this;
        var isValid = true;
        this.ssnNoValid = this.nomineeContactValid = true;
        if (this.ssin == undefined || this.ssin <= 0) {
            this.ssnNoValid = isValid = false;
        }
        if (this.nomineeMobileNumber == undefined || this.nomineeMobileNumber.toString() == "") {
            this.nomineeContactValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .sendOTPforNominee(this.ssin, this.nomineeMobileNumber)
                    .subscribe(function (data) {
                    debugger;
                    if (data) {
                        _this.successMessage = data;
                        if (_this.successMessage.toLowerCase() == "otp sent successfully to registered mobile number") {
                            _this.isOtpVisible = true;
                        }
                        _this.successModal.show();
                    }
                    else {
                        //tobe delete this when insficient amont not sent otp
                        // this.isOtpVisible = true;
                        _this.successMessage = "Server down due to technical problem";
                        _this.successModal.show();
                    }
                });
            }
        }
    };
    TrackClaimNomineeComponent.prototype.VerifyOTP = function () {
        var _this = this;
        var isValid = true;
        this.otpValid = true;
        if (this.otpNumber == undefined || this.otpNumber.toString() == "") {
            this.otpValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            debugger;
            this.dataService
                .verifyOTP(this.nomineeMobileNumber, this.otpNumber)
                .subscribe(function (data) {
                _this.successMessage = data;
                if (data) {
                    _this.isOtpVisible = _this.isSendVisible = false;
                    _this.isPullTrackVisible = _this.isClaimNoVisible = true;
                    _this.otpNumber = _this.claimRefNo = "";
                }
                else { // tobe resend
                    _this.isOtpVisible = _this.isSendVisible = true;
                    _this.isPullTrackVisible = _this.isClaimNoVisible = false;
                    alert("Please enter valid otp ");
                }
            });
        }
    };
    TrackClaimNomineeComponent.prototype.PullTrack = function () {
        var _this = this;
        var isValid = true;
        this.claimNoValid = true;
        if (this.claimRefNo == undefined || this.claimRefNo.toString() == "") {
            this.claimNoValid = isValid = false;
        }
        if (isValid == false) {
            return;
        }
        else {
            //for claim Track
            this.dataService
                .pullTrack(this.claimRefNo)
                .subscribe(function (data) {
                _this.claimsTrack = data;
                _this.isClaimTrackVisible = true;
                if (_this.claimsTrack != null && _this.claimsTrack.length > 0) {
                    if (ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.SendbackfromInspector || ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.SendbackfromALC) {
                        _this.isReapplyVisible = true;
                    }
                    else if (ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.RejectfromALC || ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.ReferSendbackbyALC) {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = true;
                        _this.isRefertoDLCVisible = false;
                    }
                    else if (ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.ReferedRejectbyALC || ClaimStatus[_this.claimsTrack[_this.claimsTrack.length - 1].action] == ClaimStatus.ReferSendbackfromDLC) {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = false;
                        _this.isRefertoDLCVisible = true;
                    }
                    else {
                        _this.isReapplyVisible = false;
                        _this.isRefertoALCVisible = false;
                        _this.isRefertoDLCVisible = false;
                    }
                }
            });
            //for claim id
            this.dataService
                .getCalimId(this.claimRefNo)
                .subscribe(function (data) {
                if (data) {
                    _this.claimId = data.item1;
                    _this.stausId = data.item2;
                    _this.transactionTypeString = data.item3;
                }
            });
        }
    };
    TrackClaimNomineeComponent.prototype.Reapply = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "reapply", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.applyRefertoALC = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.applyRefertoDLC = function () {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    };
    TrackClaimNomineeComponent.prototype.okClick = function () {
        this.successModal.hide();
    };
    TrackClaimNomineeComponent.prototype.clearClaim = function () {
        this.nomineeContactValid = this.ssnNoValid = this.isSendVisible = this.otpValid = this.claimNoValid = true;
        this.isPullTrackVisible = this.isClaimTrackVisible = this.isClaimNoVisible = this.isOtpVisible = this.isReapplyVisible = false;
        this.nomineeMobileNumber = this.ssin = this.otpNumber = this.claimRefNo = "";
        //this.claimsTrack = {} as ClaimTrack;
        this.claimsTrack = [];
    };
    __decorate([
        ViewChild('successModal'),
        __metadata("design:type", ModalDirective)
    ], TrackClaimNomineeComponent.prototype, "successModal", void 0);
    TrackClaimNomineeComponent = __decorate([
        Component({
            selector: 'app-track-claim-nominee',
            templateUrl: './track-claim-nominee.component.html',
            styleUrls: ['./track-claim-nominee.component.css']
        }),
        __metadata("design:paramtypes", [Router, ClaimNomineeDataService])
    ], TrackClaimNomineeComponent);
    return TrackClaimNomineeComponent;
}());
export { TrackClaimNomineeComponent };
//# sourceMappingURL=track-claim-nominee.component.js.map