import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimNomineeDataService } from '../services/claim-data.service';
import { ModalDirective } from 'ngx-bootstrap';
import { ClaimTrack } from '../claim/models/track.model';
import { ClaimStatus, ClaimConstants } from '../claim/pipes/constnts.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-track-claim-nominee',
    templateUrl: './track-claim-nominee.component.html',
    styleUrls: ['./track-claim-nominee.component.css']
})
export class TrackClaimNomineeComponent implements OnInit {
    @ViewChild('successModal') public successModal: ModalDirective;

    claimsTrack: Array<ClaimTrack> = [];
    //claimsTrack: ClaimTrack = {} as ClaimTrack;
    nomineeContactValid: boolean = true;
    ssnNoValid: boolean = true;
    nomineeMobileNumber: any;
    ssin: any;
    successMessage: string;
    isOtpVisible: boolean = false;
    otpValid: boolean = true;
    otpNumber: any;
    isSendVisible: boolean = true;
    claimNoValid: boolean = true;
    claimRefNo: any;
    isPullTrackVisible: boolean = false;
    isClaimTrackVisible: boolean = false;
    isClaimNoVisible: boolean = false;
    isReapplyVisible: boolean = false;
    isRefertoALCVisible: boolean = false;
    isRefertoDLCVisible: boolean = false;
    claimId: number;
    stausId: number;
    transactionTypeString: any;

    constructor(public router: Router, private dataService: ClaimNomineeDataService) { }

    ngOnInit() {
    }

    formatDate(date: any) {
        var month_names = ["January", "February", "March",
            "April", "May", "June",
            "July", "Aug", "September",
            "October", "November", "December"];
        let dt = new Date(date);
        var day = dt.getDate();
        var month_index = dt.getMonth();
        var year = dt.getFullYear();

        return "" + day + this.nthDay(day) + " " + month_names[month_index] + " " + year;
    }
    nthDay(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    SendOTP() {
        let isValid = true;
        this.ssnNoValid = this.nomineeContactValid = true;
        if (this.ssin == undefined || this.ssin <= 0) { this.ssnNoValid = isValid = false; }

        if (this.nomineeMobileNumber == undefined || this.nomineeMobileNumber.toString() == "") { this.nomineeContactValid = isValid = false; }

        if (isValid == false) {
            return;
        }
        else {
            if (confirm("Are you sure to proceed ")) {
                this.dataService
                    .sendOTPforNominee(this.ssin, this.nomineeMobileNumber)
                    .subscribe((data: any) => {
                        debugger;
                        if (data) {
                            this.successMessage = data;
                            if (this.successMessage.toLowerCase() == "otp sent successfully to registered mobile number") {
                                this.isOtpVisible = true;
                            }
                            this.successModal.show();
                        }
                        else {
                            //tobe delete this when insficient amont not sent otp
                            // this.isOtpVisible = true;
                            this.successMessage = "Server down due to technical problem";
                            this.successModal.show();
                        }
                    });
            }
        }
    }

    VerifyOTP() {
        let isValid = true;
        this.otpValid = true;
        if (this.otpNumber == undefined || this.otpNumber.toString() == "") { this.otpValid = isValid = false; }

        if (isValid == false) {
            return;
        }
        else {
            debugger;
            this.dataService
                .verifyOTP(this.nomineeMobileNumber, this.otpNumber)
                .subscribe((data: any) => {
                    this.successMessage = data;
                    if (data) {
                        this.isOtpVisible = this.isSendVisible = false;
                        this.isPullTrackVisible = this.isClaimNoVisible = true;
                        this.otpNumber = this.claimRefNo = "";
                    }
                    else {// tobe resend
                        this.isOtpVisible = this.isSendVisible = true;
                        this.isPullTrackVisible =this.isClaimNoVisible = false;

                        alert("Please enter valid otp ");
                    }
                });
        }
    }

    PullTrack() {
        let isValid = true;
        this.claimNoValid = true;
        if (this.claimRefNo == undefined || this.claimRefNo.toString() == "") { this.claimNoValid = isValid = false; }

        if (isValid == false) {
            return;
        }
        else {
            //for claim Track
            this.dataService
                .pullTrack(this.claimRefNo)
                .subscribe((data: any) => {
                    this.claimsTrack = data;
                    this.isClaimTrackVisible = true;
                    if (this.claimsTrack != null && this.claimsTrack.length > 0) {
                        if (ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.SendbackfromInspector || ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.SendbackfromALC) {
                            this.isReapplyVisible = true;
                        }
                        else if (ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.RejectfromALC || ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.ReferSendbackbyALC) {
                            this.isReapplyVisible = false;
                            this.isRefertoALCVisible = true;
                            this.isRefertoDLCVisible = false;
                        }
                        else if (ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.ReferedRejectbyALC || ClaimStatus[this.claimsTrack[this.claimsTrack.length - 1].action] == ClaimStatus.ReferSendbackfromDLC) {
                            this.isReapplyVisible = false;
                            this.isRefertoALCVisible = false;
                            this.isRefertoDLCVisible = true;
                        }
                        else {
                            this.isReapplyVisible = false;
                            this.isRefertoALCVisible = false;
                            this.isRefertoDLCVisible = false;}
                    }
                });
            //for claim id
            this.dataService
                .getCalimId(this.claimRefNo)
                .subscribe((data: any) => {
                    if (data) {
                        this.claimId = data.item1;
                        this.stausId = data.item2;
                        this.transactionTypeString = data.item3;
                    }
                });
        }
    }

    Reapply() {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "reapply", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    }

    applyRefertoALC() {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    }

    applyRefertoDLC() {
        this.router.navigate(['nominee', { claimId: this.claimId, mode: "referal", claimStatus: this.stausId, tranctionType: this.transactionTypeString }], { skipLocationChange: true });
    }

    okClick() {
        this.successModal.hide();
    }

    clearClaim() {
        this.nomineeContactValid = this.ssnNoValid = this.isSendVisible = this.otpValid = this.claimNoValid = true;
        this.isPullTrackVisible = this.isClaimTrackVisible = this.isClaimNoVisible = this.isOtpVisible = this.isReapplyVisible = false;
        this.nomineeMobileNumber = this.ssin = this.otpNumber = this.claimRefNo = "";
        //this.claimsTrack = {} as ClaimTrack;
        this.claimsTrack = [];
    }
}
