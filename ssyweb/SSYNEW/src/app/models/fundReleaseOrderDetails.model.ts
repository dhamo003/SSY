import { Claims } from "../claim/models/claims.model";

export class FundReleaseOrderDetailsModel {
    fundReleaseOrderHdrId: number;
    fundRequestId: number;
    rloOfficeID: number;
    requestDate: any;
    requestDateString: any;
    fundReleaseDate: any;
    fundReleaseDateString: any;
    fundSanctioned: any;
    fundReleased: any;
    fundRequestType: any;
    releaseOrderNumber: any;
    statusId: number;
    createdBy: number;
    createdDate: any;
    updatedBy: any;
    updatedDate: any;
    boardId: number;
    boardName: string;
    claimsList: ClaimsList[];
    locationNames: string;
    claimTypes: string;
    rloBankAccountId: any;
    rloBankName: any;
    releaseType: number;
    releaseTypeName: string;
}

export interface ClaimsList {
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

