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
    
    public partial class TblUtilizationCertificateDtl
    {
        public long UtilizationCertificateDtlId { get; set; }
        public long UtilizationCertificateHdrId { get; set; }
        public long FundReleaseOrderHdrId { get; set; }
    
        public virtual TblFundReleaseOrderHdr TblFundReleaseOrderHdr { get; set; }
        public virtual TblUtilizationCertificateHdr TblUtilizationCertificateHdr { get; set; }
    }
}
