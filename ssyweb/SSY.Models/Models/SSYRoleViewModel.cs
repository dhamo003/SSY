using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Models
{
    public class SSYRoleViewModel
    {
        public int Id { get; set; }
        public int UserTypeId { get; set; }
        public string UserTypeName { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string Reg { get; set; }
       
        public Nullable<int> Order { get; set; }
        public Nullable<int> UserCategoryId { get; set; }

    }
}
