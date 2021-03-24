export class PFPaymentCollectionDetails {
    PFCollectionId: number; 
    AgentNo: number;
    BenPFAccountId: number;
    BenSno: number;
    CollectionAmount: any;
    CollectionDate: Date;
    BookNo: number;
    ReceiptNo: number;
    RLOOfficeId: number;
    LastCollectionDate: Date;
    PFCollectionDtlList: Array<PFCollectionDtl>;
    //------------------
    month: number;
    year: number;
    amount: number;
}

export class PFCollectionDtl {
  
    MonthPaid: number;
    YearPaid: number;
    Amount: number;
   
}