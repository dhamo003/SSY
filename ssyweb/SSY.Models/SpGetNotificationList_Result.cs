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
    
    public partial class SpGetNotificationList_Result
    {
        public int Id { get; set; }
        public Nullable<int> UserType { get; set; }
        public string Notification { get; set; }
        public string Path { get; set; }
        public Nullable<bool> Isactive { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public Nullable<int> Status { get; set; }
        public string Createddate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public string UserTypeName { get; set; }
    }
}
