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
    
    public partial class TblBenFamilyMember
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TblBenFamilyMember()
        {
            this.TblEducationDtls = new HashSet<TblEducationDtl>();
        }
    
        public int BenFamilyMemSno { get; set; }
        public long BenSno { get; set; }
        public string BenFamilySchRegNo { get; set; }
        public string BenDependentRelation { get; set; }
        public string BenDependentName { get; set; }
        public string BenFamilyGender { get; set; }
        public Nullable<System.DateTime> Dob { get; set; }
        public int BenFamilyAge { get; set; }
        public string BenFamilyAadhaarNo { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public int CreatedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public string SchemePassBook { get; set; }
        public Nullable<int> RelationshipID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TblEducationDtl> TblEducationDtls { get; set; }
        public virtual TblBeneficiary TblBeneficiary { get; set; }
    }
}
