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
    
    public partial class TblSSINMst
    {
        public int Sno { get; set; }
        public int DistrictId { get; set; }
        public int BlockSno { get; set; }
        public int SubDivisionSno { get; set; }
        public string SubDivisionCode { get; set; }
        public string BlockCode { get; set; }
        public int Source { get; set; }
        public string RLOBlockCode { get; set; }
        public Nullable<long> TranNo { get; set; }
    }
}
