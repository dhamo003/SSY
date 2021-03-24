using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW.Controllers
{
    public class InspectorController : Controller
    {
        // GET: Inspector
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
        public ActionResult ForceCloseClaims()
        {
            return View();
        }
        public ActionResult ClaimStatus()
        {
            return View();
        }
        public ActionResult PfCollectionForm()
        {
            return View();
        }

        //public ActionResult PfDeposit()
        //{
        //    return View();
        //}
        //public ActionResult PfDepositedList()
        //{
        //    return View();
        //}

        public ActionResult InspectorLegacyList()
        {
            return View();
        }
        public ActionResult InspectorLegacyClaimEntry()
        {
            return View();
        }
        public ActionResult SearchStudent()
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
        public ActionResult PfPayInSlipDepositedList()
        {
            return View();
        }
		public ActionResult Adjustment()
		{
			return View();
		}

		#region SSIN Merg

		public ActionResult SsinMerg()
		{
			return View();
		}

		#endregion

		
	}
}