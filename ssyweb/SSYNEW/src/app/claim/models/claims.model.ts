export class Claims {

    claimId: number;
    transactionId: any;
    claimRefernceNo: any; //ClaimReference Number 
    ssin: any;
    benSno: any;
    benName: string;
    benType: any;
    claimAmount: any; //Amount 
    claimType: any; //Category 
    rejectedDate: any;
    rejectedDateString: any;
    submittedDate: Date; //Submission Date
    submittedDateString: any;
    approvedDate: any;
    approvedDateString: string;
    sentBackDate: any;
    sentBackDateString: string;
    approvedAmount: any;
    statusName: any; //Status
    entryPointName: any;//Mode  
    isEdit: any;
    statusId: number;
    selected: boolean;
    paymentStatusId: any;
    forwardedDate: any;
    forwardedDateString: any;
    referDate: any;
    referDateString: any;
    lastActionDate: any;
    lastActionDateString: any;
    forcedClosedDate: any;
    forcedClosedDateString: any;
    submittedByName: string;
    benMobileNumber: string;
}