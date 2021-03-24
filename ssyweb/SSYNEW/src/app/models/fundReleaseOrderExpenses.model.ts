export class FundReleaseOrderExpenses {
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
    locationNames: string;
    claimTypes: string;
    rloBankAccountId: any;
    rloBankName: any;
    expensesList: Array<FundRequestExpensesDtlList>;
}
export interface FundRequestExpensesDtlList {
    fundRequestExpensesDtlId: number;
    fundRequestHdrId: number;
    itemId: number;
    itemName: string;
    fundsRequired: number;
    physicalTarget: number;
    expenditureIncurredDuringLastFinYear: number;
    selected: boolean;
}