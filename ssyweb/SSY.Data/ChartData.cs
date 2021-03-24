using SSY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Data
{
    public class ChartData
    {
        SSYEntities db = new SSYEntities();

        public List<SpHourlyReg_Result> GetHourlyTrend()
        {
            var res = db.SpHourlyReg().ToList();
            return res;
        }
    }
}
