using SSY.Bussiness;
using SSY.Others;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    public class EditController : Controller
    {
        EditBussiness EB = new EditBussiness();
        // GET: Edit
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult EditBankDet()
        {
            try
            {
                return View();
            }
            catch(Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("EditBankDet" + DateTime.Now + "Error : " + Message);

                //CommonMethods.LogError("Claim Status Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "EditBankDet", "EditController");

                return RedirectToAction("Index", "Home");
            }
          
        }
    }
}