import { AttachmentModel } from "./attachment.model";
import { ClaimExceptionDetailsModel } from "../../models/claimExceptionDetails";
import { ClaimCheckListDetailsModel } from "../../models/ClaimCheckListDetails";

export class ProvidentFund {
    pfId: number;
    claimEntryId: number;
    claimRefernceNo: string;
    pFNO: string;
    typeOfClaim: number;
    typeOfClaimName: string;
    reasonForPreClosure: string;
    isAgreeWithBalance: boolean;
    mmountAsPerthePassbook: number;
    statusId: number;
    claimType: number;
    claimAmount: number;
    approvedAmount: number;
    createdBy: number;
    inspectorComments: string;
    alcComments: string;
    dlcComments: string;
    exceptionComments: string;
    maturityDate: Date;
    lockingPeriodDate: Date;
    maturityDateString: string;
    lockingPeriodDateString: string;
    attachmentDTOList: Array<AttachmentModel>;
    nomineeId: number;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;
    pfClaimExceptionDetails: Array<ClaimExceptionDetailsModel>;
    pfClaimCheckListDetails: Array<ClaimCheckListDetailsModel>;
}
