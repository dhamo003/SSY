using SSY.ServiceLog.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.ServiceLog.Models
{
    public class tblBeneficaryChangesViewModel
    {
        public string ModifiedBy { get; set; }  // Email Address
        public string Description { get; set; }  // What are all changed

        public string IdType { get; set; }
        public string UserUniqueKey { get; set; }
        public tblBeneficaryModifications BenDetails { get; set; }
        public List<tblBenAddressModifications> BenAddress { get; set; }
    }

    public class PasswordUpdateModel
    {
        public string Password { get; set; }
        public string SSI_Number { get; set; }
        public string RegNumber { get; set; }
        public long Bennso { get; set; }
        public string BenUserKey { get; set; }
        public string BenUserPwd { get; set; }
        public string ModifiedBy { get; set; }
    }
}
