import { PayInSlipAttachmentModel } from "./payinslip-attachment";

export class PFDeposits {
    results: PFDepositDetails[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
}
export class PFDepositDetails {
    pfDepositId: number;
    agentNo: number;
    depositDate: Date;
    depositAmount: number;
    rloOfficeId: number;
    bankId: number;
    payinSlipNo: number;
    scrollNumber: number;
    bankDepositDate: number;
    workerTypeId: number;
    isPayInSlipUploaded: boolean;
    pfDepositDtlList: PFDepositDtlDetails[];

    collectionIds: Array<number> = [];

    agentCode: string;
    agentName: string;
    payInSlip: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    paymentStatus: string;
    transactionStatus: number;
    grn: string;

    mode: string;
    isGrips: boolean;
    gripsDeptCode: string;
    lwcBankCode: number;
    transactionType: string;
}

export class PFDepositDtlDetails {
    pfDepositDtlId: number;
    pfDepositId: number;
    benPFAccountId: number;
    benSno: number;
    pfCollectionDtlId: number;
    monthPaid: number;
    yearPaid: number;
    amount: number;

}


