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
    
    public partial class Report_BeneficiaryApplicationStaus_Result
    {
        public string DistrictName { get; set; }
        public int DistrictId { get; set; }
        public Nullable<int> LegacyData { get; set; }
        public Nullable<int> AppReceivedBasicInf { get; set; }
        public Nullable<int> AppReceivedFullInf { get; set; }
        public Nullable<int> AppApproved { get; set; }
        public Nullable<int> AppForCorrection { get; set; }
        public Nullable<int> AppRejected { get; set; }
        public Nullable<int> AppPending { get; set; }
    }
}
