using SSY.Bussiness;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
   
    public class ChartController : Controller
    {
        ChartBussiness CB = new ChartBussiness();

        // GET: Chart
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult DashBoard()
        {
            return View();
        }
        public ActionResult GetHourlyTrend()
        {

            try
            {
                var res = CB.GetHourlyTrend();

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
    }
}