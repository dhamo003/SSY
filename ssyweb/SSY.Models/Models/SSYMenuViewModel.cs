using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Models
{
    public class SSYMenuViewModel
    {
        public int Id { get; set; }
        public int? MenuId { get; set; }
        public int? SubMenuId { get; set; }
        public bool IsActive { get; set; }
        public string MenuName { get; set; }
        public string MenuURL { get; set; }
        public string Class { get; set; }
        public int? Order { get; set; }


        public string RoleIds { get; set; }
    }
}
