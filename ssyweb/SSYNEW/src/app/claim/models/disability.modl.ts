import { AttachmentModel } from "./attachment.model";
import { ClaimExceptionDetailsModel } from "../../models/claimExceptionDetails";
import { ClaimCheckListDetailsModel } from "../../models/ClaimCheckListDetails";
export class DisabilityModel {
    disabilityId: number;
    claimEntryId: number;
    claimRefernceNo: string;
    dateofRelease: Date;
    natureOfDisability: number;
    detailsOfDisability: string;
    claimAmount: number;
    approvedAmount: number;
    isDeathorpermanentdisabilitynotcausedbyinjuries: boolean;
    isDeathorpermanentdisabilitynotcausedbyintentional: boolean;
    isOtherFinancialAssistance: boolean;
    statusId: number;
    claimType: number;
    createdBy: number;
    attachmentDTOList: Array<AttachmentModel>;
    dateofReleaseString: string;
    natureOfDisabilityName: string;
    inspectorComments: string;
    alcComments: string;
    dlcComments: string;
    exceptionComments: string;
    reasonForDelaySubmission: string;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;

    disabilityClaimExceptionDetails: Array<ClaimExceptionDetailsModel>;
    disabilityClaimCheckListDetails: Array<ClaimCheckListDetailsModel>;
}
