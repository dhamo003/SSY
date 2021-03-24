export class FundRequestExpensesHdr {
    fundRequestHdrId: number;
    //rloOfficeID: number;
    //rloOfficeName: string;
    //requestedBy: string;
    
    //requestDate: string;
    //requestDateString: string;
    //approvedDate: string;
    //approvedDateString: string;
    //releaseDate: string;
    //releaseDateString: string;
    //requiredDate: string;
    //requiredDateString: string;
    //fundRequested: number;
    //balanceAmount: number;
    //targetAmount: number;
    //sanctionedAmount: number;
    //statusId: number;
    //statusName: string;
    //createdBy: number;
    //sendBackByDLCDate: string;
    //sendBackByDLCDateString: string;
    //forwardToBoardDate: string;
    //forwardToBoardDateString: string;
    //sendBackByBoardDate: string;
    //sendBackByBoardDateString: string;
    //rejectByBoardDate: string;
    //rejectByBoardDateString: string;
    //selected: boolean;
    //boardName: any;
    //boardId: any;

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
    alcComments: any;
    dlcComments: any;
    boardComments: any
    statusId: any;
    createdBy: any;
    createdDate: any;
    updatedBy: any;
    updatedDate: any;
    //locations: any;
    //fundRequestDtlId: number;
    //fundRequestId: number;
    boardId: number;
    //claimConfigId: any;
    fundRequestExpensesDtlList: Array<FundRequestExpensesDtlList>;
}
export interface FundRequestExpensesDtlList {
    fundRequestExpensesDtlId: number;
    fundRequestHdrId: number;
    itemId: number;
    itemName: string;
    fundsRequired: number;
    physicalTarget: any;
    expenditureIncurredDuringLastFinYear: any;
    selected: boolean;
}