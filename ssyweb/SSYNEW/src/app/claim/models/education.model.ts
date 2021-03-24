import { AttachmentModel } from "./attachment.model";
import { ClaimExceptionDetailsModel } from "../../models/claimExceptionDetails";
import { ClaimCheckListDetailsModel } from "../../models/ClaimCheckListDetails";

export class EducationDetailModel {
    educationDtlId: number;
    educationHdrId: number;
    dependentId: number;
    dependentName: string;
    dependentRelation: string;
    institutionName: string;
    institutionPrinicipleName: string
    institutionContact: number;
    registrationRollNo: string;
    year: number;
    dateofAdmission: Date;
    dateofAdmissionString: string;
    lastExamPassed: number;
    lastExamPassedName: string;
    presentlyReading: number;
    presentlyReadingName: string;
    eligibleAmount: number;
    statusId: number;
    isMarried: string;
    isDuplicate: boolean;
    attachmentDetailsList: Array<AttachmentModel>;
}

export class EducationHdrModel {
    educationHdrId: number;
    claimEntryId: number;
    claimRefernceNo: string;
    amountClaimed: number;
    claimAmount: number;
    approvedAmount: number;
    isanyothersourceofthegovernment: boolean;
    statusId: number;
    claimType: number;
    CreatedBy: number;
    inspectorComments: string;
    alcComments: string;
    dlcComments: string;
    exceptionComments: string;
    educationDetailList: Array<EducationDetailModel>;
    educationClaimExceptionDetails: Array<ClaimExceptionDetailsModel>;
    educationClaimCheckListDetails: Array<ClaimCheckListDetailsModel>;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;
}
