//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SSY.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TblRLOOfficeBank
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TblRLOOfficeBank()
        {
            this.TblFundReleaseOrderHdrs = new HashSet<TblFundReleaseOrderHdr>();
            this.TblFundRequestHdrs = new HashSet<TblFundRequestHdr>();
            this.TblPaymentReleaseHdrs = new HashSet<TblPaymentReleaseHdr>();
        }
    
        public int RLOOfficeBankId { get; set; }
        public Nullable<int> RLOOfficeId { get; set; }
        public string BankName { get; set; }
        public string BankBranch { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string IFSC { get; set; }
        public string ContactName { get; set; }
        public Nullable<int> StatusId { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreadtedDate { get; set; }
        public Nullable<int> UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpadtedDate { get; set; }
        public Nullable<decimal> OpenBalance { get; set; }
        public Nullable<System.DateTime> OpenBalanceDate { get; set; }
        public string BankAccountNo { get; set; }
        public Nullable<int> workerType { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblFundReleaseOrderHdr> TblFundReleaseOrderHdrs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblFundRequestHdr> TblFundRequestHdrs { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblPaymentReleaseHdr> TblPaymentReleaseHdrs { get; set; }
        public virtual TblRLOOffice TblRLOOffice { get; set; }
    }
}
