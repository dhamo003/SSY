import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
export class bulkPFDeposit {
    collectionMasterList: PFCollectionMaster[];
    payInSlipCertificate: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
}
export class PFCollectionMaster {
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
    pfCollectionDtlList: PFCollectionDtlDetails[];
    paidFromMonth: string;
    paidToMonth: string;
    depositDate: Date;
    benFullName: string;
    ssI_Number: string;
    depositDateString: string;
    bankId: number;
    payinSlipNo: number;
    //--------------------
    month: number;
    year: number;
    isSaveDraft: number;
    workerTypeId: number;
    depositAmount: number;
}
export class PFCollectionDtlDetails {
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

    //---------------
    bookNo: number;
    receiptNo: number;
}