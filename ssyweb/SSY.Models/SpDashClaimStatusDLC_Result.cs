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
    
    public partial class SpDashClaimStatusDLC_Result
    {
        public string BENOCCUPATION { get; set; }
        public Nullable<int> PENDING_AT_INSPECTOR { get; set; }
        public Nullable<int> PENDING_AT_ALC { get; set; }
        public Nullable<int> SENTBACK_FROM_INSPECTOR { get; set; }
        public Nullable<int> SENTBACK_FROM_ALC { get; set; }
        public Nullable<int> FORCEDCLOSED_FROM_INSPECTOR { get; set; }
        public Nullable<int> APPROVED_BY_ALC { get; set; }
        public Nullable<int> REJECTED_BY_ALC { get; set; }
    }
}
