import { FundReleaseOrder } from "./fundReleaseOrder.model";
export class UtilizationCertificate {
    utilizationCertificateHdrId: number;
    rloOfficeID: number;
    rloOfficeName: string;
    date: any;
    dateString: string;
    openingBalance: number;
    fundRecieved: number;
    fundUtilized: number;
    balance: number;
    financialYearId: number;
    statusId: number;
    statusName: string;
    createdBy: number;
    selected: boolean;
    createdDate: any;
    boardId: number;
    fundReleaseOrdersList: Array<number>;
    certificateReleaseOrders: FundReleaseOrder[] = [];
}