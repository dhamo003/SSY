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
    
    public partial class SpGetEditPersonalDetAppById_Result
    {
        public Nullable<long> Sno { get; set; }
        public long Id { get; set; }
        public string SSIN { get; set; }
        public long BenSno { get; set; }
        public string OldFirstName { get; set; }
        public string OldLastName { get; set; }
        public string OldMiddleName { get; set; }
        public string OldBeneDOB { get; set; }
        public string NewFirstName { get; set; }
        public string NewLastName { get; set; }
        public string NewMiddleName { get; set; }
        public string NewBenDOB { get; set; }
        public string NameProof { get; set; }
        public string DOBProof { get; set; }
        public string Status { get; set; }
        public string ReqDate { get; set; }
        public string VerifiedDate { get; set; }
        public string Remarks { get; set; }
    }
}
