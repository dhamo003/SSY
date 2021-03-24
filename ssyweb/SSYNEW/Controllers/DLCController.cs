using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    [CheckLogins]
    public class DLCController : Controller
    {
        // GET: DLC
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult PendingApprovalClaims()
        {
            return View();
        }
        public ActionResult SendBackClaims()
        {
            return View();
        }
        public ActionResult ApprovedClaims()
        {
            return View();
        }
        public ActionResult RejectClaims()
        {
            return View();
        }
        public ActionResult ReviewClaims()
        {
            return View();
        }
        public ActionResult ReferClaims()
        {
            return View();
        }

        public ActionResult ReferralReview()
        {
            return View();
        }

        public ActionResult FundRequestedClaims()
        {
            return View();
        }
        public ActionResult ReviewFundRequest()
        {
            return View();
        }
        public ActionResult SendBackFundRequestList()
        {
            return View();
        }
        public ActionResult ForwardFundRequestList()
        {
            return View();
        }
        public ActionResult ClaimStatus()
        {
            return View();
        }
        public ActionResult utilizationcertificatelist()
        {
            return View();
        }
		public ActionResult PFInterestCalculation()
		{
			return View();
		}
		public ActionResult Adjustment()
		{
			return View();
		}
	}
}