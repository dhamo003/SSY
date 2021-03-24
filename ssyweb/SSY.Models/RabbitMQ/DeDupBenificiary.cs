using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Models.RabbitMQ
{
    public class DeDupBenificiary
    {
        public string Name { get; set; }
        public string BenFatherFirstName { get; set; }
        public DateTime? BenDob { get; set; }
        public int? BenDistrict { get; set; }
        public int? BenSubDivision { get; set; }
        public int? BenBmc { get; set; }
        public string BenMobileNo { get; set; }
        public string AadharCard { get; set; }
        public string EpicCard { get; set; }
        public string BankAccNo { get; set; }
        public string SSI_Number { get; set; }
        public string HusbandName { get; set; }
        public int P2DOB { get; set; }
        public int P3Husband { get; set; }
        public int P4EpicCard { get; set; }
        public long BenSno { get; set; }
        public string FatherFName { get; set; }
        public string FatherMName { get; set; }
        public string FatherLName { get; set; }
        public string HusbandFName { get; set; }
        public string HusbandMName { get; set; }
        public string HusbandLName { get; set; }
        public string RegType { get; set; }
    }
}
