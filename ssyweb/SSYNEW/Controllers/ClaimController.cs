using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    [CheckLogins]
    public class ClaimController : Controller
    {
        // GET: Claim
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Entry()
        {
            return View();
        }
        public ActionResult ClaimView()
        {
            return View();
        }
        public ActionResult ClaimRefer()
        {
            return View();
        }
        public ActionResult ClaimTrack()
        {
            return View();
        }

        public ActionResult ClaimReceipts()
        {
            return View();
        }
        public ActionResult Claims()
        {
            return View();
        }
        public ActionResult DraftClaims()
        {
            return View();
        }

        public ActionResult ReferralClaims()
        {
            return View();
        }
        public ActionResult legacylist()
        {
            return View();
        }
        public ActionResult legacyclaimentry()
        {
            return View();
        }
		public ActionResult benpfdetails()
		{
			return View();
		}
	}
}