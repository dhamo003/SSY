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
    
    public partial class TblApprovalPermission
    {
        public int ID { get; set; }
        public Nullable<int> ClaimStatusId { get; set; }
        public Nullable<int> UserType { get; set; }
        public Nullable<bool> isEdit { get; set; }
        public Nullable<bool> isView { get; set; }
    
        public virtual TblClaimStatu TblClaimStatu { get; set; }
    }
}
