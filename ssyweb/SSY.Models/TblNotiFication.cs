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
    
    public partial class TblNotiFication
    {
        public int Id { get; set; }
        public Nullable<int> UserType { get; set; }
        public string Notification { get; set; }
        public string Path { get; set; }
        public Nullable<bool> Isactive { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<System.DateTime> Createddate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public Nullable<int> UserId { get; set; }
    }
}
