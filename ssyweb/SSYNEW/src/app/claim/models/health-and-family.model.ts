import { AttachmentModel } from "./attachment.model";
import { HealthFamilyPackage } from "../../models/healthFamilyPackage.model";
import { ClaimExceptionDetailsModel } from "../../models/claimExceptionDetails";
import { ClaimCheckListDetailsModel } from "../../models/ClaimCheckListDetails";
import { ClinicalTestModel } from "../../models/ClinicalTest.model";

export class HealthFamilyModel {
    healthFamilyId: number;
    claimEntryId; number;
    claimRefernceNo: string;
    typeOfClaim: number;
    hospitalId: number;
    otherHospital: string;
    nameOfTheDisease: number;
    nameOfTheDiseaseString: string;
    nameOfClinicalTest: number;
    nameOfClinicalTestString: string;
    typeOfHospitalization: number;
    patientId: number;
    isAccident: boolean;
    admittedDate: Date;
    admittedDateString: string;
    dischargeDate: Date;
    dischargeDateString: string;
    firstAppointmentDate: Date;
    firstAppointmentDateString: string;
    costOfClinicalTest: number;
    costOfMedicine: number;
    costOfHospitalization: number;
    claimFor: number;
    familyMemberId: number;
    familyMemberName: string;
    isCertifynotESI: boolean;
    claimAmount: number;
    approvedAmount: number;
    statusId: number;
    claimType: number;
    createdBy: number;
    claimTypeName: string;
    statusName: string;
    inspectorComments: string;
    alcComments: string;
    dlcComments: string;
    exceptionComments: string;
    attachmentDTOList: Array<AttachmentModel>;
    loeFromDate: Date;
    loeFromDateString: string;
    loeToDate: Date;
    loeToDateString: string;
    loeAmount: number;
    reasonForDelaySubmission: string;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;

    healthFamilyPackages: Array<HealthFamilyPackage>;
    healthClaimExceptionDetails: Array<ClaimExceptionDetailsModel>;
    healthClaimCheckListDetails: Array<ClaimCheckListDetailsModel>;
    clinicalTestDetails: Array<ClinicalTestModel>;
}
export class HealthFamilyPackageModel {
    healthFamilyPackagesId: number;
    claimType: number;
    healthFamily: HealthFamilyModel;
}
