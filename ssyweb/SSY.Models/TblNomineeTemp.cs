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
    
    public partial class TblNomineeTemp
    {
        public int Id { get; set; }
        public Nullable<int> EditId { get; set; }
        public Nullable<long> RefId { get; set; }
        public Nullable<long> BenSno { get; set; }
        public string BenNomineeName { get; set; }
        public string BenNomineeRelation { get; set; }
        public string BenNomineeGender { get; set; }
        public Nullable<System.DateTime> Dob { get; set; }
        public Nullable<int> BenNomineeAge { get; set; }
        public string BenNomineeShareAllocation { get; set; }
        public string BenNomineeBankName { get; set; }
        public string BenNomineeBankAccNo { get; set; }
        public string BenNomineeBankBranch { get; set; }
        public string BenNomineeBankIfscCode { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> VerifiedDate { get; set; }
        public Nullable<int> VerifiedBy { get; set; }
    }
}
