import { PayInSlipAttachmentModel } from '../models/payinslip-attachment';
import { PfMonths } from './pf.months.model';
export class PFLegacyMaster {
    pfLegacyMasterId: number;
    agentNo: number;
    depositDate: Date;
    depositDateString: string;
    depositAmount: number;
    bankId: number;
    rloOfficeId: number;
    workerTypeId: number;
    payinSlipNo: number;
    isPayInSlipUploaded: boolean;
    isSaveDraft: number;
    createdBy: number;
    createdDate: Date;
    updatedBy: number;
    updatedDate: Date;
    financialYearId: number;
    pfLegacyDtl1List: PFLegacyDtl1[];
    payInSlip: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    isEdit: boolean;
    lwcBankCode: number;
}
export class PFLegacyDtl1 {
    pfLegacyDtl1Id: number;
    pfLegacyMasterId: number;
    benPFAccountId: number;
    benSno: number;
    amountPaid: number;
    collectionDate: Date;
    collectionDateString: string;
    bookNo: number;
    receiptNo: number;
    pfLegacyDtl2List: PFLegacyDtl2[];

    selectedMonths: PfMonths[] = [] as PfMonths[];
    monthList: number[];
    ssI_Number: string;
    month: number;
    year: number;
    benFullName: string;
    benSSINOrPFAccountNo: string;
    monthName: string;
    bookName: string;
    isEdit: boolean = false;
    paidFromMonth: string;
    paidToMonth: string;
    sno: number;
}
export class PFLegacyDtl2 {
    pfLegacyDtl2Id: number;
    pfLegacyDtl1Id: number;
    monthPaid: number;
    yearPaid: number;
    amount: number;
}