export class FundRequestModel {
    fundRequestHdrId: number;
    rLOOfficeID: number;
    fundRequestDate: any;
    fundRequiredDate: any;
    fundApprovedDate: any;
    fundReleaseDate: any;
    fundRequested: any;
    fundSanctioned: any;
    fundReleased: any;
    fundRequestType: any;
    releaseOrderNumber: any;
    dLCComments: any;
    boardComments: any
    statusId: any;
    createdBy: any;
    creadtedDate: any;
    updatedBy: any;
    updatedDate: any;
    locations: any;
    fundRequestDtlId: number;
    fundRequestId: number;
    boardId: number;
    claimConfigId: any;
    fundRequestClaims: Array<PaymentModel>;
    aLCComments: any;
}
export class PaymentModel {
    transactionId: any;
    transactionType: any;
    statusId: any;
}