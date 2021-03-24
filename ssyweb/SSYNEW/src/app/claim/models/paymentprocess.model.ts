export class PaymentProcessModel {
    paymentProcessingId: number;
    fundrequestId: number;
    rloOfficeId: number;
    paymentProcessingDate: any;
    paymentReleaseDate: any;
    statusId: any;
    createdBy: number;
    creadtedDate: any;
    updatedBy: any;
    upadtedDate: any;
    paymentReleasedClaims: Array<PaymentClaims>;
    paymentProcessingClaims: Array<PaymentClaims>;
    rloBankAccountId: number;
    releasedAmount: number;
    paymentClaimList: Array<PaymentClaimList>;
    paymentProcessingDateString: any;
    paymentReleaseDateString: any;
    fundRequestId: any;
}

export class PaymentClaims {
    transactionId: any;
    transactionType: any;

}
export interface PaymentClaimList {
    claimId: number;
    transactionId: number;
    claimRefernceNo: string;
    ssin: string;
    benSno: number;
    benName: string;
    benType: string;
    claimAmount: any;
    statusName: any;
    entryPointName: any;
    claimType: string;
    rejectedDate: any;
    rejectedDateString: any;
    submittedDate: string;
    submittedDateString: string;
    approvedDate: any;
    approvedDateString: any;
    sentBackDate: any;
    sentBackDateString: any;
    isEdit: boolean;
    statusId: any;
    approvedAmount: number;
    inspectorComments: any;
    alcComments: any;
    dlcComments: any;
    exceptionComments: any;
    paymentStatusId: any;
    benSubDivision: any;
    paymentProcessingId: any;
    forwardedDate: any;
    forwardedDateString: any;
    referDate: any;
    referDateString: any;
    lastActionDate: any;
    lastActionDateString: any;
    forcedClosedDate: any;
    forcedClosedDateString: any;
    workerTypeId: number;
    benBmc: number;
    selected: boolean;
}