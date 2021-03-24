export class FundRequest {
    rloOfficeID: number;
    rloOfficeName: string;
    requestedBy: string;
    fundRequestNumber: number;
    refernceNumber: any;
    requestDate: string;
    requestDateString: string;
    approvedDate: string;
    approvedDateString: string;
    releaseDate: string;
    releaseDateString: string;
    requiredDate: string;
    requiredDateString: string;
    amount: number;
    sanctionedAmount: number;
    statusId: number;
    statusName: string;
    createdBy: number;
    //teja
    sendBackByDLCDate: string;
    sendBackByDLCDateString: string;
    forwardToBoardDate: string;
    forwardToBoardDateString: string;
    sendBackByBoardDate: string;
    sendBackByBoardDateString: string;
    rejectByBoardDate: string;
    rejectByBoardDateString: string;
    selected: boolean;
    boardName: any;
    boardId: any;
    isAllClaimsStatus: any;
    fundReleaseOrderHdrId: number;
}