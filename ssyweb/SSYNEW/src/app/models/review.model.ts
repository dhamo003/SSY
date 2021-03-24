import { PaymentModel } from "./fundRequestProcess.model";
import { ClaimExceptionDetailsModel } from "./claimExceptionDetails";
import { BenNominee } from "../claim/models/ben.nominee.model";
import { ClaimCheckListDetailsModel } from "./ClaimCheckListDetails";

export class ReviewModel{
    transactionId: number;
    claimType: number;
    userId: number;
    approvedAmount: number;
    inspectorComments: string;
    alcComments: string;
    dlcComments: string;
    treasurerComments: string;
    exceptionComments: string;
    boardComments: string;
    statusId: number;
    wfId: number;
    rloBankAccountId: number;
    fundReleaseOrderHdrId: number;
    partialFundRequestClaims: Array<PaymentModel>;
    partialFundRequestClaimsAmount: any;
    claimExceptionDetails: Array<ClaimExceptionDetailsModel>;
    UpdateForcedClaims: Array<number>;
    AllForcedClaims: Array<number>;
    benficiaryNomineeDetails: Array<BenNominee>;
    fundRequestType: number;
    claimCheckListDetails: Array<ClaimCheckListDetailsModel>;
    releaseType: number;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;
    ceoChronologicalOrderComments: string;
    //treasurerChronologicalOrderComments: string;
    benDeathStatus: boolean;
}