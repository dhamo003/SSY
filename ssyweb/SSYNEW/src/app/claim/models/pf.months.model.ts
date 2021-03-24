export class FinancialYearMonths {
    Id: number;
    monthName: string;
    monthId: number;
    
  
}
export const Months: FinancialYearMonths[] = [
    { Id: 1, monthId:4, monthName: 'April'  },
    { Id: 2, monthId: 5, monthName: 'May' },
    { Id: 3, monthId: 6, monthName: 'June' },
    { Id: 4, monthId: 7, monthName: 'July' },
    { Id: 5, monthId: 8, monthName: 'August' },
    { Id: 6, monthId: 9, monthName: 'September' },
    { Id: 7, monthId: 10,monthName: 'October' },
    { Id: 8, monthId: 11,monthName: 'November' },
    { Id: 9, monthId: 12, monthName: 'December' },
    { Id: 10, monthId: 1, monthName: 'January' },
    { Id: 11, monthId: 2, monthName: 'February' },
    { Id: 12, monthId: 3, monthName: 'March' },
];

export const CollectionMonths: FinancialYearMonths[] = [
    { Id: 0, monthId: 0, monthName: 'March' },
    { Id: 1, monthId: 4, monthName: 'April' },
    { Id: 2, monthId: 5, monthName: 'May' },
    { Id: 3, monthId: 6, monthName: 'June' },
    { Id: 4, monthId: 7, monthName: 'July' },
    { Id: 5, monthId: 8, monthName: 'August' },
    { Id: 6, monthId: 9, monthName: 'September' },
    { Id: 7, monthId: 10, monthName: 'October' },
    { Id: 8, monthId: 11, monthName: 'November' },
    { Id: 9, monthId: 12, monthName: 'December' },
    { Id: 10, monthId: 1, monthName: 'January' },
    { Id: 11, monthId: 2, monthName: 'February' },
    { Id: 12, monthId: 3, monthName: 'March' },
   
];

export class PfMonths {
    Id: number;
    monthName: string;
    monthId: number;
    amount?: number;
    year?: number;
}

export class PfPaidDetails {
    pfCollectionDtlId: number;
    pfCollectionId: null;
    monthPaid: number;
    yearPaid: number;
    amount: null;
    lastPaid: string;
    remarks: null;
    bnRemarks: null;
    description: null;
    depositStatus: null;
}

export class PFMasterConfigAmount {
    pfConfigurationId: number;
    dateEffectiveFrom: Date;
    dateEffectiveTo: Date;
    status: number;
    beneficiaryPFContribution: number;
    governmentPFContribution: number;
    agentCollectionLimit: number;
    pfInterestRate: number;
    pfLockingPeriod: Date;
    nonPaymentsMonthsforPFSuspension: number;
    collectionCutoff: number;
}

