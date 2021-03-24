using SSY.Data;
using SSY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Bussiness
{
    public class ChartBussiness
    {

        ChartData CD = new ChartData();

        public List<SpHourlyReg_Result> GetHourlyTrend()
        {

            return CD.GetHourlyTrend();
        }
    }
}