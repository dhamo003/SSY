using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.ServiceLog.Data
{
    public class tblBeneficaryModifications
    {
        [Key]
        public int MId { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; } // Email Address / UserName
        public string ChangedDescription { get; set; }


        public long BenSno { get; set; }
        public string IdType { get; set; }
        public string UserUniqueKey { get; set; }  // Benificary ssin or regno or bensno
        public string BenFirstName { get; set; }
        public string BenLastName { get; set; }
        public string BenMiddleName { get; set; }

        public string MobileNumber { get; set; }

        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string Gender { get; set; }
        public string MaritialStatus { get; set; }

        public string HusbandName { get; set; }

        public DateTime? DOB { get; set; }


    }
    public class tblBenAddressModifications
    {
        [Key]
        public int Id { get; set; }
        public long ChangeId { get; set; }  // Coming from tblBeneficaryModifications Id 

        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; } // Email Address / UserName

        public long BenAddressSno { get; set; }
        public long BenSno { get; set; }
        public string BenAddressType { get; set; }
        public string BenState { get; set; }
        public Nullable<int> BenDistrict { get; set; }
        public Nullable<int> BenSubDivision { get; set; }
        public Nullable<int> LocationType { get; set; }
        public Nullable<int> BenBmc { get; set; }
        public string BenVsr { get; set; }
        public string BenAddressLine1 { get; set; }
        public string BenGpWard { get; set; }
        public Nullable<int> BenPs { get; set; }
        public Nullable<int> BenPo { get; set; }
        public string BenPincode { get; set; }

    }

    public class tblBenPasswordUpdates
    {
        [Key]
        public int Id { get; set; }
        public long BenSno { get; set; }  // Coming from tblBeneficaryModifications Id 

        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; } // Email Address / UserName

        public string BenUserkey { get; set; }
        public string BenUserPwd { get; set; }

    }
}
