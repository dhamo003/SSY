export class PFConfigurationModel {
    pfConfigurationId: number;
    dateEffectiveFrom: any;
    dateEffectiveTo: any;
    effectiveFromDateString: string;
    effectiveToDateString: string;
    status: number;
    beneficiaryPFContribution: number;
    governmentPFContribution: number;

    agentCollectionLimit: number;
    pfInterestRate: number;
    //pfLockingPeriod: Date;
    //nonPaymentsMonthsforPFSuspension: number;
    collectionCutoff: number;

    pfLockingPeriodMonths: number;
    inActivePeriodMonths: number;
    maturityAge: number;
    minAge: number;
    maxAge: number;
    averageMonthlyIncome: number;
    maturityAgeLogic: string;
}