using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    [CheckLogins]
    public class TresurerController : Controller
    {
        // GET: Tresurer
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult paymentrelease()
        {
            return View();
        }
        public ActionResult fundreleaselist()
        {
            return View();
        }
        public ActionResult FundRelease()
        {
            return View();
        }

        public ActionResult paymentprocessedlist()
        {
            return View();
        }
        public ActionResult pendingfundreleaselist()
        {
            return View();
        }
        public ActionResult paymentreleasedlist()
        {
            return View();
        }
        public ActionResult reviewpaymentrelease()
        {
            return View();
        }
    }
}