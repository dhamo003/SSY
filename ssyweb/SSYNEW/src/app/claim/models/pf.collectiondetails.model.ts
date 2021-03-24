import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { PfMonths } from '../models/pf.months.model';
export class PFCollectionDetails {
    results: PFCollectionDetailsList[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
}

export class PFCollectionDetailsList {
    pfCollectionId: number;
    agentNo: number;
    benPFAccountId: number;
    benSno: number;
    collectionAmount: number;
    collectionDate: Date;
    collectionDateString: string;
    bookNo: number;
    receiptNo: number;
    rloOfficeId: number;
    pfCollectionDtlList: PfCollectionDtlList[];
    paidFromMonth: string;
    paidToMonth: string;
    depositeDate: Date;
    benFullName: string;
    ssI_Number: string;
    depositDateString: string;

    //-------------
    depositDate: any;
    month: number;
    year: number;
    bankId: number;
    payinSlipNo: number;
    monthName: string;
    bookName: string;
    // monthList: Array<number> = [];
    monthList: number[];
    isEdit: boolean = false;
    isSaveDraft: number;
    workerTypeId: number;
    depositAmount: number;
    selected: boolean;

    depositPayInSlipDocument: PayInSlipAttachmentModel;

    selectedMonths: PfMonths[] = [] as PfMonths[];
    benSSINOrPFAccountNo: string;
}

export class PfCollectionDtlList {
    pfCollectionDtlId: number;
    pfCollectionId: number;
    monthPaid: number;
    lastPaid: string;
    yearPaid: number;
    amount: number;
    remarks: string;
    bnRemarks: string;
    description: string;
    depositStatus: number;
}
