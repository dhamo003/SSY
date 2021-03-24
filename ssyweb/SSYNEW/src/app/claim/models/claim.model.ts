import { HealthFamilyPackageModel, HealthFamilyModel } from "./health-and-family.model";
import { EducationHdrModel } from "./education.model";
import { DeathModel } from './death.model';
import { DisabilityModel } from './disability.modl';
import { ProvidentFund } from './providentfund.model'
import { AttachmentModel } from "./attachment.model";


export class ClaimModel {
    claimId: number;
    benSno: number;
    benName: string;
    entryPoint: number;
    reasonForApply: number;
    ssin: number;
    nomineeName: string;
    nomineeAddress: string;
    nomineeContact: number;
    nomineeDOB: Date;
    nomineeBankAccount: string;
    nomineeIFSCCode: string;
    nomineeRelationwithBen: number;
    nomineeId: number;
    claimSubmittedBy: number;
    CreatedBy: number;
    StatusId: number;
    isanyothersourceofthegovernment: boolean;
    healthFamilyDetails: HealthFamilyModel;
    educationDetails: EducationHdrModel;
    deathDetails: DeathModel;
    disabilityDetails: DisabilityModel;
    providentFundDetails: ProvidentFund;
    attachment: AttachmentModel[];
    workflowId: number;
    updatedBy: number;
    onBehalfBen: boolean;
}
