using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    public class ALCController : Controller
    {
        // GET: ALC
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
        /// <summary>
        /// Is this for Review /View?
        /// </summary>
        /// <returns></returns>
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

        public ActionResult ReferralReject()
        {
            return View();
        }
        public ActionResult ReferralApprove()
        {
            return View();
        }
        public ActionResult ReferralSendback()
        {
            return View();
        }
        public ActionResult paymentprocessing()
        {
            return View();
        }
        public ActionResult fundrequest()
        {
            return View();
        }
        public ActionResult reviewfundrequest()
        {
            return View();
        }
        public ActionResult FundRequestedClaims()
        {
            return View();
        }
        public ActionResult paymentprocessedlist()
        {
            return View();
        }
        public ActionResult reviewpaymentprocess()
        {
            return View();
        }
        public ActionResult ClaimStatus()
        {
            return View();
        }
        public ActionResult utilizationcertificate()
        {
            return View();
        }
        public ActionResult utilizationcertificatelist()
        {
            return View();
        }
        public ActionResult PfCollectionForm()
        {
            return View();
        }

        public ActionResult PfDeposit()
        {
            return View();
        }

        public ActionResult PfDepositedList()
        {
            return View();
        }
        public ActionResult bulkpfdeposit()
        {
            return View();
        }
        public ActionResult BulkPFDepositList()
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
		public ActionResult SearchStudent()
		{
			return View();
		}
	}
}