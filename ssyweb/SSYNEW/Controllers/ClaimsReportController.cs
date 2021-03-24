using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SSYNEW.Others;
using SSY.Bussiness;
using SSY.Models;
using SSY.Others;

namespace SSYNEW.Controllers
{
    public class ClaimsReportController : Controller
    {
        // GET: ClaimsReport
        //  ClaimsReportBussiness CRB = new ClaimsReportBussiness();
        HomeBussiness HB = new HomeBussiness();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ClaimStatusReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictsMulti();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    ViewBag.usertype = usertypeid;
                    ViewBag.deptid = deptuserid;
                    return View(usr);

                }

                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("ClaimStatusReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Claim Status Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "ClaimStatusReport", "ClaimsReportController");

                return Content(Message);
            }
        }
        public ActionResult FundRequestStatusReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 12 || usertypeid == 13 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictsMulti();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    ViewBag.usertype = usertypeid;
                    ViewBag.deptid = deptuserid;
                    return View(usr);

                }

                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("FundRequestStatusReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Fund Request Status Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "FundRequestStatusReport", "ClaimsReportController");

                return Content(Message);
            }
        }

        public ActionResult BenefitDisbursementReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
				

				if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					int usertypeid = Convert.ToInt32(Session["UserType"]);

					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("BenefitDisbursementReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Benefit Disbursement Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "BenefitDisbursementReport", "ClaimsReportController");

                return Content(Message);
            }
        }
		public ActionResult BenefitReceiveReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);


				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					int usertypeid = Convert.ToInt32(Session["UserType"]);

					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);
				}
				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("BenefitReceiveReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Benefit Receive Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "BenefitReceiveReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult AccountStatementReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					return View(usr);
				}
				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AccountStatementReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Claim Status Report error due to : " + ex.Message, "userType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "AccountStatementReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult BeneficiaryAnnualStatementReport()

		{

			Reports usr = new Reports();

			try

			{

				string userType = Convert.ToString(Session["UserType"]);

				if (string.IsNullOrEmpty(userType))

					return RedirectToAction("Index", "Home");

				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);

				if (ResultData.Count != 0)

				{

					usr.financialYears = HB.GetFinancialYears();

					return View(usr);

				}

				else

				{

					return RedirectToAction("Index", "Home");

				}

			}

			catch (Exception ex)

			{

				string Message = Helper.ReturnException(ex);

                //Helper.AddtoLogFile("BeneficiaryAnnualStatementReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiary Annual Statement Report error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "BeneficiaryAnnualStatementReport", "ClaimsReportController");

                return Content(Message);

			}

		}

		public ActionResult BeneficiaryPassBookPFDetailsReport()

		{

			Reports usr = new Reports();

			try

			{

				string userType = Convert.ToString(Session["UserType"]);

				if (string.IsNullOrEmpty(userType))

					return RedirectToAction("Index", "Home");

				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					return View(usr);
				}
				else
				{
					return RedirectToAction("Index", "Home");
				}

		}

			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);

                //Helper.AddtoLogFile("BeneficiaryPassBookPFDetailsReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiary PassBook PFDetails Report error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "BeneficiaryPassBookPFDetailsReport", "ClaimsReportController");

                return Content(Message);
			}

		}

		public ActionResult BeneficiaryPassBookPFDetailsReport1()
		{

			Reports usr = new Reports();
			try
			{
				string userId = Convert.ToString(Session["Userid"]);
				

				if (string.IsNullOrEmpty(userId))
					return RedirectToAction("Index", "Home");

				string userSSin = Convert.ToString(Session["SSIN"]);

				ViewBag.userSSin = userSSin;
				return View(usr);
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);

				//Helper.AddtoLogFile("BeneficiaryPassBookPFDetailsReport1" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiary PassBook PFDetails Report1 error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "BeneficiaryPassBookPFDetailsReport1", "ClaimsReportController");

                return Content(Message);

			}

		}

		public ActionResult BeneficiaryAnnualStatementReportFormVI()

		{

			Reports usr = new Reports();

			try
			{
				string userId = Convert.ToString(Session["Userid"]);

				if (string.IsNullOrEmpty(userId))
					return RedirectToAction("Index", "Home");

				usr.financialYears = HB.GetFinancialYears();
				string userSSin = Convert.ToString(Session["SSIN"]);

				ViewBag.userSSin = userSSin;
				return View(usr);
				
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);

                //Helper.AddtoLogFile("BeneficiaryAnnualStatementReportFormVI" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiary Annual Statement Report FormVI error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "BeneficiaryAnnualStatementReportFormVI", "ClaimsReportController");

                return Content(Message);

			}
			
		}


		public ActionResult BeneficiaryBenefitReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 12 || usertypeid == 13 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetDistrictsMulti();
						usr.subdivision = HB.GetSubdivisionwiseAll(-1);
						usr.muncorpname = HB.GetLocationwiseAll(-1);
					}
					if (usertypeid == 5)
					{
						usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
						usr.muncorpname = HB.GetTotalblockBySubdiv(0);
						usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
					}
					if (usertypeid == 6)
					{
						usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
						usr.muncorpname = HB.GetTotalblockBySubdiv(0);
						usr.subdivision = HB.Getsubdivision(0);
					}
					if (usertypeid == 7)
					{
						usr.district = HB.GetDistrict();
						usr.muncorpname = HB.GetTotalblockBySubdiv(0);
						usr.subdivision = HB.Getsubdivision(0);
					}
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("BeneficiaryBenefitReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiary Benefit Report error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "BeneficiaryBenefitReport", "ClaimsReportController");

                return Content(Message);
			}
		}


		public ActionResult TotalClaimReport()
		{

			Reports usr = new Reports();

			try
			{
				string userType = Convert.ToString(Session["UserType"]);

				if (string.IsNullOrEmpty(userType))

					return RedirectToAction("Index", "Home");

				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					return View(usr);
				}
				else
				{
					return RedirectToAction("Index", "Home");
				}

			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("TotalClaimReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Total Claim Report error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "TotalClaimReport", "ClaimsReportController");

                return Content(Message);
			}

		}

		public ActionResult GetRLOByDistrictJSON(string IDs)
		{
			try
			{
				IDs = IDs.Substring(2, IDs.Length - 2);

				return Json(HB.GetRLOsAll(IDs), JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(ex, JsonRequestBehavior.AllowGet);
			}
		}
		public ActionResult BeneficiariesAccountDetailsReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("BeneficiariesAccountDetailsReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Beneficiaries Account Details Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "BeneficiariesAccountDetailsReport", "ClaimsReportController");

                return Content(Message);
			}
		}

		public ActionResult GetAgentsByRLOJSON(string IDs)
		{
			try
			{
				IDs = IDs.Substring(2, IDs.Length - 2);

				return Json(HB.GetAgentsByRLOAll(IDs), JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(ex, JsonRequestBehavior.AllowGet);
			}
		}
		public ActionResult AgentUnpostedTransactionsReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
						usr.muncorpname = HB.GetBlocksByRLOJSON("-1");
						usr.agent = HB.GetAgentsByBlockJSON("-1");
					}
                    //if (usertypeid == 5 || usertypeid == 8)
                    //{
                    //    usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                    //    usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                    //    usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    //}
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.rlo = HB.GetRLOsAll("-1");
                        usr.muncorpname = HB.GetBlocksByRLOJSON("-1");
                        usr.agent = HB.GetAgentsByBlockJSON("-1");
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetOnlyDistricts();
                        usr.rlo = HB.GetRLOsAll("-1");
                        usr.muncorpname = HB.GetBlocksByRLOJSON("-1");
                        usr.agent = HB.GetAgentsByBlockJSON("-1");
                    }
                   ViewBag.usertype = usertypeid;
                    ViewBag.deptid = deptuserid;
                    return View(usr);

                }

                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AgentUnpostedTransactionsReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Agent Unposted Transactions Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "AgentUnpostedTransactionsReport", "ClaimsReportController");

                return Content(Message);
            }
        }
        public ActionResult AdjustmentTransactionsReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetOnlyDistricts();
                        usr.rlo = HB.GetRLOsAll("-1");
                    }
                    //if (usertypeid == 5  || usertypeid == 8)
                    //{
                    //    usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                    //    usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                    //    usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    //}
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.rlo = HB.GetRLOsAll("-1");
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetOnlyDistricts();
                        usr.rlo = HB.GetRLOsAll("-1");
                    }
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AdjustmentTransactionsReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Adjustment Transactions Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "AdjustmentTransactionsReport", "ClaimsReportController");

                return Content(Message);
			}
		}

		public ActionResult ConsolidatedGovtContributionsPayoutReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
                    ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("ConsolidatedGovtContributionsPayoutReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Consolidated Govt Contributions Payout Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "ConsolidatedGovtContributionsPayoutReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult ConsolidatedInterestPayoutReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("ConsolidatedInterestPayoutReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Consolidated Interest Payout Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "ConsolidatedInterestPayoutReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult WithdrawalPayoutReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("WithdrawalPayoutReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Withdrawal Payout Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "WithdrawalPayoutReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult MaturityPayoutReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("MaturityPayoutReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Maturity Payout Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "MaturityPayoutReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult DeathPayoutReport()
		{
			Reports usr = new Reports();
			try
			{
				string userType = Convert.ToString(Session["UserType"]);
				if (string.IsNullOrEmpty(userType))
					return RedirectToAction("Index", "Home");
				var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
				if (ResultData.Count != 0)
				{
					int usertypeid = Convert.ToInt32(Session["UserType"]);
					int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
					var res = HB.GetDeptUserbyId(deptuserid.ToString());
					if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
					{
						usr.district = HB.GetOnlyDistricts();
						usr.rlo = HB.GetRLOsAll("-1");
					}
					/*if (usertypeid == 5  || usertypeid == 8)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6 )
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }*/
					ViewBag.usertype = usertypeid;
					ViewBag.deptid = deptuserid;
					return View(usr);

				}

				else
				{
					return RedirectToAction("Index", "Home");
				}
			}
			catch (Exception ex)
			{
				string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("DeathPayoutReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Death Payout Report error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "DeathPayoutReport", "ClaimsReportController");

                return Content(Message);
			}
		}
		public ActionResult GetBlocksByRLOJSON(string IDs)
		{
			try
			{
				IDs = IDs.Substring(2, IDs.Length - 2);

				return Json(HB.GetBlocksByRLOJSON(IDs), JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(ex, JsonRequestBehavior.AllowGet);
			}
		}
		public ActionResult GetAgentsByBlockJSON(string IDs)
		{
			try
			{
				IDs = IDs.Substring(2, IDs.Length - 2);

				return Json(HB.GetAgentsByBlockJSON(IDs), JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
				return Json(ex, JsonRequestBehavior.AllowGet);
			}
		}
        public ActionResult GetMultipleRLO(int Uid, int Utype)
        {
            try
            {
                return Json(HB.GetMultipleRLO(Uid, Utype), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }
    }
}