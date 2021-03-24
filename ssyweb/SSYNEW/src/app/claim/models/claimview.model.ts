import { EducationHdrModel } from "./education.model";
import { HealthFamilyModel } from "./health-and-family.model";
import { AttachmentModel } from "./attachment.model";
import { DisabilityModel } from "./disability.modl";
import { DeathModel } from "./death.model";
import { ProvidentFund } from "./providentfund.model";

export class ClaimView {
    claimId: number;
    benSno: number;
    benName: null;
    benOccuption: null;
    entryPoint: number;
    entryPointName: null;
    reasonForApply: null;
    ssin: string;
    nomineeName: null;
    nomineeAddress: null;
    nomineeContact: null;
    nomineeDOB: null;
    nomineeDOBString: string;
    nomineeBankAccount: null;
    nomineeIFSCCode: null;
    nomineeRelationwithBen: null;
    nomineeId: null;
    claimSubmittedBy: null;
    statusId: number;
    createdBy: number;
    creadtedDate: string;
    updatedBy: null;
    upadtedDate: null;
    financialYear: number;
    financialYearValue: string;
    providentFundDetails: ProvidentFund;
    deathDetails: DeathModel;
    disabilityDetails: DisabilityModel;
    healthFamilyDetails: HealthFamilyModel;
    inspectorComments: string;
    alcComments: string;
    educationDetails: EducationHdrModel;
    attachment: Array<AttachmentModel>;
    inspChronologicalOrderComments: string;
    alcChronologicalOrderComments: string;
    dlcChronologicalOrderComments: string;
}


