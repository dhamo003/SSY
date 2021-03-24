export class PFDetails {

    createdBy: number;
    ssin: number;
    benSno: number;
    pfNo: number;
    pfamount: any;
    pfMonthsList: Array<PayingPFMonths>;
    bookNo: number;
    receiptNo: number;
}

export class PayingPFMonths {
    Month: string;
    Year: string;
    Amount: string;
}