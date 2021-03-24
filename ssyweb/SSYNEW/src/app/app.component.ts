import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './UserService';
import { UserUrl } from './models/userurl.model';

declare var window: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SSYWBAngular';
    user: UserUrl;
    constructor(public router: Router, private userService: UserService) {
        debugger;
        this.user = userService.user;

        if (this.user.url == "ClaimEntry") {
            this.router.navigate(['claim/Entry'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentClaims") {
            this.router.navigate(['agentclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "ClaimView") {
            this.router.navigate(['claim/ClaimView'], { skipLocationChange: true });

        }
        else if (this.user.url == "Claims") {
            this.router.navigate(['claim/Claims'], { skipLocationChange: true });

        }
        else if (this.user.url == "ClaimEntryNominee") {
            this.router.navigate(['nominee'], { skipLocationChange: true });
        }
        else if (this.user.url == "TrackClaimNominee") {
            this.router.navigate(['trackclaimnominee'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentclaimEntry") {
            this.router.navigate(['claim/agentclaimentry'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentclaims") {
            this.router.navigate(['claim/agentclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "agentdraftclaim") {
            this.router.navigate(['claim/agentdraft'], { skipLocationChange: true });
        }
        else if (this.user.url == "gripsresponse") {
            this.router.navigate(['claim/gripsresponse'], { skipLocationChange: true });
        }
        else if (this.user.url == "gripsdoubleverificationresponse") {
            this.router.navigate(['claim/gripsresponse'], { skipLocationChange: true });
        }
        else if (this.user.url == "draftclaim") {
            this.router.navigate(['claim/claimdraft'], { skipLocationChange: true });
        }
        else if (this.user.url == "claimTrack") {
            this.router.navigate(['claim/ClaimTrack'], { skipLocationChange: true });

        }
        else if (this.user.url == "agentreferral") {
            this.router.navigate(['claim/agentreferral'], { skipLocationChange: true });

        }
        else if (this.user.url == "referralclaims") {
            this.router.navigate(['claim/referralclaims'], { skipLocationChange: true });

        }
        else if (this.user.url == "legacylist") {
            this.router.navigate(['claim/legacylist'], { skipLocationChange: true });

        }
        else if (this.user.url == "legacyclaimentry") {
            this.router.navigate(['claim/legacyclaimentry'], { skipLocationChange: true });

        }
        else if (this.user.url == "pfCollectionForm") {
            this.router.navigate(['claim/PfCollectionForm'], { skipLocationChange: true });
        }
        else if (this.user.url == "PfDeposit") {
            this.router.navigate(['claim/PfDeposit'], { skipLocationChange: true });
        }
        else if (this.user.url == "PfDepositedList") {
            this.router.navigate(['claim/PfDepositedList'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdeposit") {
            this.router.navigate(['claim/bulkpfdeposit'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdepositlist") {
            this.router.navigate(['claim/bulkpfdepositlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "bulkpfdepositcollectionlist") {
            this.router.navigate(['claim/bulkpfdepositcollectionlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfPayInSlipDepositedList") {
            this.router.navigate(['claim/pfPayInSlipDepositedList'], { skipLocationChange: true });
        }
        else if (this.user.url == "benpfdetails") {
            this.router.navigate(['claim/benpfdetails'], { skipLocationChange: true });
        }
        else if (this.user.url == "adjustemententryform") {
            this.router.navigate(['claim/adjustemententryform'], { skipLocationChange: true });
        }
        else if (this.user.url == "submittedlegacypfdetails") {
            this.router.navigate(['claim/submittedlegacypfdetails'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfconfiguration") {
            this.router.navigate(['pfconfig/pfconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfconfigurationlist") {
            this.router.navigate(['pfconfig/pfconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "receiptbook") {
            this.router.navigate(['pfconfig/receiptbook'], { skipLocationChange: true });
        }
        else if (this.user.url == "receiptbooklist") {
            this.router.navigate(['pfconfig/receiptbooklist'], { skipLocationChange: true });
        }
        else if (this.user.url == "educationconfiguration") {
            this.router.navigate(['pfconfig/educationconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "educationconfigurationlist") {
            this.router.navigate(['pfconfig/educationconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "healthfamilyconfiguration") {
            this.router.navigate(['pfconfig/healthfamilyconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "healthfamilyconfigurationlist") {
            this.router.navigate(['pfconfig/healthfamilyconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "deathconfiguration") {
            this.router.navigate(['pfconfig/deathconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "deathconfigurationlist") {
            this.router.navigate(['pfconfig/deathconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "disabilityconfiguration") {
            this.router.navigate(['pfconfig/disabilityconfiguration'], { skipLocationChange: true });
        }
        else if (this.user.url == "disabilityconfigurationlist") {
            this.router.navigate(['pfconfig/disabilityconfigurationlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "benefitconfiguration") {
            this.router.navigate(['pfconfig/benefitconfiguration'], { skipLocationChange: true });
        }
        //

        ////ALC
        //else if (this.user.url == "pfCollectionForm") {
        //    this.router.navigate(['claim/PfCollectionForm'], { skipLocationChange: true });
        //}
        //else if (this.user.url == "PfDeposit") {
        //    this.router.navigate(['claim/PfDeposit'], { skipLocationChange: true });
        //}
        //else if (this.user.url == "PfDepositedList") {
        //    this.router.navigate(['claim/PfDepositedList'], { skipLocationChange: true });
        //}
        else if (this.user.url == "alcpendingapprovals") {
            this.router.navigate(['alc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcapprovals") {
            this.router.navigate(['alc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcrejection") {
            this.router.navigate(['alc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcsendback") {
            this.router.navigate(['alc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreview") {
            this.router.navigate(['alc/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcrefer") {
            this.router.navigate(['alc/referclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralreview") {
            this.router.navigate(['alc/referralreview'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralReject") {
            this.router.navigate(['alc/referralreject'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralApprove") {
            this.router.navigate(['alc/referralapproval'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreferralSendback") {
            this.router.navigate(['alc/referralsendback'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcpaymentprocessing") {
            this.router.navigate(['alc/paymentprocessing'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcfundrequest") {
            this.router.navigate(['alc/fundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreviewfundrequest") {
            this.router.navigate(['alc/reviewfundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcclaimstatus") {
            this.router.navigate(['alc/claimstatus'], { skipLocationChange: true });
        }
        //reviewfundrequest
        //
        else if (this.user.url == "alcfundrequested") {
            this.router.navigate(['alc/fundrequestedclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcpaymentprocessedlist") {
            this.router.navigate(['alc/paymentprocessedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcreviewpaymentprocess") {
            this.router.navigate(['alc/reviewpaymentprocess'], { skipLocationChange: true });
        }
        //Utilization Certificate
        else if (this.user.url == "alcutilizationcertificatelist") {
            this.router.navigate(['alc/utilizationcertificatelist'], { skipLocationChange: true });
        }
        else if (this.user.url == "alcutilizationcertificate") {
            this.router.navigate(['alc/utilizationcertificate'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfinterestcalculation") {
            this.router.navigate(['alc/pfinterestcalculation'], { skipLocationChange: true });
        }
        //DLC
        else if (this.user.url == "dlcpendingapprovals") {
            this.router.navigate(['dlc/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcapprovals") {
            this.router.navigate(['dlc/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcrejection") {
            this.router.navigate(['dlc/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcsendback") {
            this.router.navigate(['dlc/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreview") {
            this.router.navigate(['dlc/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcrefer") {
            this.router.navigate(['dlc/referclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreferralreview") {
            this.router.navigate(['dlc/referralreview'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcfundrequested") {
            this.router.navigate(['dlc/fundrequestedclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcreviewfundrequest") {
            this.router.navigate(['dlc/reviewfundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcsendbackfundrequestlist") {
            this.router.navigate(['dlc/sendbackfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcforwardfundrequestlist") {
            this.router.navigate(['dlc/forwardfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcclaimstatus") {
            this.router.navigate(['dlc/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "dlcutilizationcertificatelist") {
            this.router.navigate(['dlc/utilizationcertificatelist'], { skipLocationChange: true });
        }
        //else if (this.user.url == "dlcpfinterestcalculation") {
        //    this.router.navigate(['dlc/pfinterestcalculation'], { skipLocationChange: true });
        //}
        //Tresurer
        else if (this.user.url == "tresurerpaymentrelease") {
            this.router.navigate(['tresurer/paymentrelease'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerfundreleaselist") {
            this.router.navigate(['tresurer/fundreleaselist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerfundrelease") {
            this.router.navigate(['tresurer/fundrelease'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpaymentprocessedlist") {
            this.router.navigate(['tresurer/paymentprocessedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpendingfundreleaselist") {
            this.router.navigate(['tresurer/pendingfundreleaselist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerpaymentreleasedlist") {
            this.router.navigate(['tresurer/paymentreleasedlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "tresurerreviewpaymentrelease") {
            this.router.navigate(['tresurer/reviewpaymentrelease'], { skipLocationChange: true });
        }
        //Inspector
        else if (this.user.url == "inspectorpendingapprovals") {
            this.router.navigate(['inspector/pendingapprovalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorapprovals") {
            this.router.navigate(['inspector/approvalclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorrejection") {
            this.router.navigate(['inspector/rejectclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorsendback") {
            this.router.navigate(['inspector/sendbackclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorreview") {
            this.router.navigate(['inspector/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "forceclose") {
            this.router.navigate(['inspector/forcecloseclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "claimstatus") {
            this.router.navigate(['inspector/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "inspectorlegacylist") {
            this.router.navigate(['inspector/inspectorlegacylist'], { skipLocationChange: true });

        }
        else if (this.user.url == "inspectorlegacyclaimentry") {
            this.router.navigate(['inspector/inspectorlegacyclaimentry'], { skipLocationChange: true });

        }
        else if (this.user.url == "searchstudent") {
            this.router.navigate(['inspector/searchstudent'], { skipLocationChange: true });

        }
        //CEO
        else if (this.user.url == "ceofundrequestlist") {
            this.router.navigate(['ceo/fundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceofundrequest") {
            this.router.navigate(['ceo/fundrequest'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceosendbackfundrequestlist") {
            this.router.navigate(['ceo/sendbackfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoapprovedfundrequestlist") {
            this.router.navigate(['ceo/approvedfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceorejectedfundrequestlist") {
            this.router.navigate(['ceo/rejectedfundrequestlist'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoclaimstatus") {
            this.router.navigate(['ceo/claimstatus'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoreview") {
            this.router.navigate(['ceo/reviewclaims'], { skipLocationChange: true });
        }
        else if (this.user.url == "ceoutilizationcertificatelist") {
            this.router.navigate(['ceo/utilizationcertificatelist'], { skipLocationChange: true });
        }
        //pfconfig
        else if (this.user.url == "pfinterestconfig") {
            this.router.navigate(['pfconfig/pfinterestconfig'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfinterestconfiglist") {
            this.router.navigate(['pfconfig/pfinterestconfiglist'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfcommissionconfig") {
            this.router.navigate(['pfconfig/pfcommissionconfig'], { skipLocationChange: true });
        }
        else if (this.user.url == "pfcommissionconfiglist") {
            this.router.navigate(['pfconfig/pfcommissionconfiglist'], { skipLocationChange: true });
        }
    }

}
