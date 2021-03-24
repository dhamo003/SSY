import { PayInSlipAttachmentModel } from "./payinslip-attachment";
import { FormIVDetails } from "./formIV.model";
export class PFDepositAttachmentsModel {
    bankDepositDate: Date;
    scrollNumber: number;
    payInSlipAttachment: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
    formIVAttachment: PayInSlipAttachmentModel = {} as PayInSlipAttachmentModel;
}
