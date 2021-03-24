using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    [CheckLogins]
    public class CEOController : Controller
    {
        // GET: CEO
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult fundrequestlist()
        {
            return View();
        }
        public ActionResult fundrequest()
        {
            return View();
        }
        public ActionResult SendBackFundRequestList()
        {
            return View();
        }
        public ActionResult ApprovedFundRequestList()
        {
            return View();
        }
        public ActionResult RejectedFundRequestList()
        {
            return View();
        }
        public ActionResult ClaimStatus()
        {
            return View();
        }
        public ActionResult ReviewClaims()
        {
            return View();
        }
        public ActionResult utilizationcertificatelist()
        {
            return View();
        }
    }
}