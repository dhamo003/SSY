using iTextSharp.text;
using iTextSharp.text.html.simpleparser;
using iTextSharp.text.pdf;
using SSY.Bussiness;
using SSYNEW.Others;
using System;
using SSYNEW.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Web;
using System.Web;
using System.Web.Mvc;
using System.Xml.Schema;
using SSYNEW.Controllers;
using System.Configuration;
using System.Web.Security;
using SSY.Models;
using System.Web;
using System.Text.RegularExpressions;
using SSY.Others;
using Newtonsoft.Json;
using System.Drawing;
using System.Net.Http;
using System.Web.Script.Serialization;
using SSYNEW;
using SSY.ServiceLog.Services;
using SSY.ServiceLog.Models;

namespace SSY.Controllers
{
    // [RoutePrefix("Srikar")]
    public class HomeController : Controller
    {
        HomeBussiness HB = new HomeBussiness();
        RegistrationBussiness Rb = new RegistrationBussiness();

        SSYEntities db = new SSYEntities();

        #region Home Page Landing
        public ActionResult Index()
        {
            //if (ConfigurationManager.AppSettings["MaintenanceAct"] == "1")
            //	return RedirectToAction("HomeIndex", "Registration");
            //else
            //{
            Session["DirectReg"] = "0";
            var ssinCount = HB.SSINCount();
            var res = HB.sitecount();
            Int64 siteCount = HB.GetSiteCount();
            Session["sitecount"] = siteCount;
            Session["SSINCount"] = ssinCount;


           // List<Field> fields = HB.GetSiteSettingsFileds();


            //SiteSettingsViewModel getsitesettings = JsonConvert.DeserializeObject<SiteSettingsViewModel>(JsonConvert.SerializeObject(DynamicClassGenerator.CreateNewObject(fields)));

            return View(); //getsitesettings
            //}
        }

        //public ActionResult Index()
        //{
        //    Session["DirectReg"] = "0";
        //    var ssinCount = HB.SSINCount();
        //    var res = HB.sitecount();
        //    Int64 siteCount = HB.GetSiteCount();
        //    Session["sitecount"] = siteCount;
        //    Session["SSINCount"] = ssinCount;
        //    return View();
        //}
        #endregion


        #region Log out for entire application
        public ActionResult Logout()
        {
            try
            {
                string type = Convert.ToString(Session["LoginType"]);
                if (type == "Benficiary")
                {
                    type = "Beneficiary";

                }

                if (type == "Department")
                {

                    type = "Department";
                }

                string sessionValue = Convert.ToString(Session["UserSession"]);
                if (sessionValue != "" && sessionValue != null)
                {
                    db.SpUpdateLoginStatus(0, 0, type, "0", sessionValue);

                }
                FormsAuthentication.SignOut();
                Session.Abandon();
                Session.RemoveAll();
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                Response.AppendHeader("Cache-Control", "no-store");
                return RedirectToAction("Index", "Home");
            }

            catch (Exception ex)
            {

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion



        #region RTI information page on home page on home page
        public ActionResult rti()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion


        #region Acts & Rules page on home page
        public ActionResult Actsrules()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }

        #endregion

        #region
        public ActionResult minimumwagesnoti()
        {
            return View();

        }
        #endregion

        #region Department contact information page on home page
        public ActionResult Contact()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            SignUpUser user = new SignUpUser();
            return View(user);
        }

        #endregion


        #region Contact more information on home page
        public ActionResult ContactMore()
        {
            return View();
        }

        #endregion


        #region
        public ActionResult Help()
        {
            return View();
        }

        #endregion


        #region Schemes information page on home page
        public ActionResult Schemes()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }

        #endregion


        #region organization structure  page on home page
        public ActionResult organizationstructure()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }

        #endregion

        #region Functions page on home page
        public ActionResult Functions()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion


        #region Under contruction page
        public ActionResult under()
        {
            return View();
        }
        #endregion


        #region Empty Under contruction page
        public ActionResult Emptyunder()
        {
            return View();
        }
        #endregion


        #region Faqs page under the help menu on home page
        public ActionResult Faqs()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion

        #region User manual under the help menu on home page
        public ActionResult UserManual()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion


        #region Grievances under the help menu on home page
        //public ActionResult Grievances()
        //{
        //    string siteCount = Convert.ToString(Session["sitecount"]);
        //    string ssinCount = Convert.ToString(Session["SSINCount"]);
        //    if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
        //        return RedirectToAction("Index", "Home");
        //    return View();
        //}
        #endregion

        #region
        public ActionResult Scheme()
        {
            return View();
        }
        #endregion

        #region
        public ActionResult Media()
        {
            return View();
        }
        #endregion


        #region Photo gallery page   under the media menu
        public ActionResult PhotoGallery()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion


        #region Video gallery page under the media menu
        public ActionResult VideoGallery()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion


        #region Press Release page under the  media menu
        public ActionResult PressRelease()
        {
            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion

        #region
        public ActionResult AboutSSY()
        {
            return View();
        }
        #endregion


        #region

        public ActionResult Dashboard(string session)
        {

            try
            {
                //if (session == "" || session == null)
                //{
                //	return RedirectToAction("Index", "Home");
                //}
                if (Session["UserSession"].ToString() == "" || Session["UserSession"].ToString() == null)
                {
                    return RedirectToAction("Index", "Home");
                }
                else
                    session = Session["UserSession"].ToString();

                if (Session["UserSession"].ToString() == session)
                {
                    string userType = Convert.ToString(Session["UserType"]);

                    string UserMobileNo = Session["UserMobileNo"].ToString();

                    Int64 benSno = Convert.ToInt64(Session["Userid"]);

                    var result = HB.GetBeniDetailsByBenSno(benSno);


                    int checkPaynet = HB.CheckPayment(result.BenSno);
                    int chkScheme = HB.CheckSchem(result.BenSno);
                    var chkSchemeStat = HB.CheckSchemStatus(result.BenSno);
                    var checkPaymentStat = HB.CheckPaymentStat(result.BenSno);
                    ViewBag.DaysTORenewal = 0;
                    if (Convert.ToString(Session["BenOccupation"]) == "TransportWorker" || Convert.ToString(Session["BenOccupation"]) == "ConstructionWorker")
                    {
                        var res = HB.GetEDistrictBeneDetailsForDashBoard(benSno, Convert.ToString(Session["BenOccupation"]));
                        if (res != null)
                            ViewBag.DaysTORenewal = res.DaysToRenewal;
                    }
                    if (result.BenPhoto == "" || result.BenPhoto == null)
                    {
                        ViewBag.image = "/Content/images/NoImageForApp.jpg";
                    }
                    else
                    {
                        ViewBag.image = result.BenPhoto;


                    }
                    //ViewBag.Part2 = Res.Part2;

                    ViewBag.Name = result.BenFirstName + " " + result.BenMiddleName + " " + result.BenLastName;
                    ViewBag.Part2 = result.Part2;
                    string dob = result.BenDob.ToString();

                    dob = dob.Replace("12:00:00 AM", " ");
                    ViewBag.Dob = dob;
                    if (result.BenMobileNo == null || result.BenMobileNo == "")
                    {
                        ViewBag.MobileNo = "NA";
                    }
                    ViewBag.MobileNo = result.BenMobileNo;
                    ViewBag.BenOccupation = result.BenOccupation;
                    string SchemeName = "";
                    if (result.BenOccupation == "ConstructionWorker")
                    {
                        SchemeName = "BOCWA";
                    }
                    if (result.BenOccupation == "TransportWorker")
                    {
                        SchemeName = "WBTWSS";
                    }
                    ViewBag.SchemeName = SchemeName;
                    ViewBag.age = result.BenAge;
                    ViewBag.PfStatus = result.BenPFStatus;
                    ViewBag.Benid = result.BenSno;
                    ViewBag.reamrks = result.Remarks;
                    ViewBag.RegNumber = result.RegNumber;

                    string vrfydate = result.VerifyDate.ToString();
                    vrfydate = vrfydate.Replace("12:00:00 AM", " ");
                    ViewBag.VerifyDate = vrfydate;


                    string modifieddate = result.ModifiedDate.ToString();

                    modifieddate = modifieddate.Replace("12:00:00 AM", " ");
                    ViewBag.modifieddate = modifieddate;

                    string createddate = result.CreatedDate.ToString();

                    createddate = createddate.Replace("12:00:00 AM", " ");
                    ViewBag.createddate = createddate;
                    ViewBag.Regtype = result.RegType;
                    ViewBag.isactive = result.IsActive;

                    string SSINo = "";
                    string LName = "";
                    if (result.SSI_Number == "" || result.SSI_Number == null)
                    {
                        SSINo = result.BenTempRegNo;
                        LName = "Temporary SSIN : ";
                    }
                    else
                    {
                        SSINo = result.SSI_Number;
                        LName = "SSIN : ";
                    }
                    if (result.Status != 1)
                    {
                        if (result.BeneType != null)
                        {
                            if (result.BeneType.Trim() == "OldReg" || result.BeneType.Trim() == "Legacy2" || result.BeneType.Trim() == "Legacy1")
                            {
                                SSINo = "NA";
                                LName = "SSIN : ";
                            }
                        }


                    }

                    ViewBag.ssin = SSINo;
                    ViewBag.LName = LName;
                    ViewBag.chckpaystatus = checkPaynet;
                    ViewBag.ChkScheme = chkScheme;

                    string status = "";
                    if (result.Status == 0)
                        status = "Pending";
                    if (result.Status == 1)
                        status = "Approved";
                    if (result.Status == 2)
                        status = "Rejected";
                    if (result.Status == 3)
                        status = "Send Back";
                    ViewBag.status = status;
                    string schemeStat = "";
                    if (chkSchemeStat != null)
                    {
                        if (chkSchemeStat.SchemeStatus == 0)
                        {
                            schemeStat = "Pending";
                        }
                        if (chkSchemeStat.SchemeStatus == 1)
                        {

                            schemeStat = "Approved";

                        }
                    }
                    else
                    {
                        schemeStat = "";
                    }
                    ViewBag.SchemeStat = schemeStat;
                    return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");

                }

            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");

            }


        }

        #endregion

        #region Get Ben Details

        public ActionResult GetBenDetails()
        {
            var res = HB.GetApplicationSum();
            return Json(res, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetBeneDistDetails(string bensno, string sSINumber, string benOccupation)
        {
            var res = HB.GetBeneDistDetails(bensno, sSINumber, benOccupation);
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion


        #region Pending benificiary application
           [CheckLogins]
        public ActionResult PendingApp()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    string deptUserId = Convert.ToString(Session["DeptUserid"]);
                    ViewBag.UserType = userType;
                    ViewBag.DeptUserid = deptUserId;
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseApp();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
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

                    //return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("PendingApp Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "PendingApp", "HomeController");
                return RedirectToAction("Index", "Home");
            }
        }


        [CheckLogins]
        public ActionResult DeathPendingApp()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    string deptUserId = Convert.ToString(Session["DeptUserid"]);
                    ViewBag.UserType = userType;
                    ViewBag.DeptUserid = deptUserId;
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseApp();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
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

                    //return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("DeathPendingApp Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "DeathPendingApp", "HomeController");
                return RedirectToAction("Index", "Home");
            }
        }


        #endregion


        #region Site Settings
        [CheckLogins]
        [HttpGet]
        public ActionResult SiteSettings()
        {
            return View();
        }
        #endregion

        #region Role Management

        [CheckLogins]
        [HttpGet]
        public ActionResult RoleManagement()
        {
            return View();
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetAllRoleList()//int jtStartIndex = 0, int jtPageSize = 10
        {
            try
            {
                var records = HB.GetAllRoleList();
                return Json(new { Result = "OK", Records = records }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetAlluserCategories()//int jtStartIndex = 0, int jtPageSize = 10
        {
            try
            {
                var records = HB.GetAllUserCategory();
                return Json(new { Result = "OK", Records = records }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetRole(int rId)
        {
            try
            {
                return Json(new { Result = "OK", Records = HB.GetRole(rId) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }


        [CheckLogins]
        [HttpPost]
        public JsonResult CreateNewRole(SSYRoleViewModel model)
        {
            try
            {
                return Json(new { Result = "OK", Data = HB.CreateNewRole(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }

        [CheckLogins]
        [HttpPost]
        public JsonResult UpdateRole(SSYRoleViewModel model)
        {
            try
            {
                return Json(new { Result = "OK", Data = HB.UpdateRole(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }


        #endregion

        #region Site Settings

        [CheckLogins]
        [HttpGet]
        public ActionResult MenuManagement()
        {
            return View();
        }

        [HttpGet]
        [CheckLogins]
        public JsonResult GetMenuList()
        {
            try
            {
                var records = HB.GetAllMenuList();            
                return Json(records, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpGet]
        [CheckLogins]
        public JsonResult GetAllMenuList(int jtStartIndex = 0, int jtPageSize = 10)
        {
            try
            {
                var records = HB.GetAllMenuList();
                int total = records.Count;
                records = records.Skip(jtStartIndex).Take(jtPageSize).ToList();
                return Json(new { Result = "OK", Records = records, TotalRecordCount = total }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetUserList()
        {
            try
            {
                var records = HB.GetUserTypes();

                return Json(new { Result = "OK", Records = records }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetAllSubMenuList(int menuId, int jtStartIndex = 0, int jtPageSize = 10)
        {
            try
            {
                var records = HB.GetAllSubMenuList(menuId);
                int total = records.Count;
                records = records.Skip(jtStartIndex).Take(jtPageSize).ToList();
                return Json(new { Result = "OK", Records = records, TotalRecordCount = total }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }
        [HttpGet]
        [CheckLogins]
        public JsonResult GetMenu(int mId)
        {
            try
            {
                return Json(new { Result = "OK", Records = HB.GetMenu(mId) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }

        [CheckLogins]
        [HttpPost]
        public JsonResult CreateNewMenu(SSYMenuViewModel model)
        {
            try
            {
                return Json(new { Result = "OK", Data = HB.CreateNewMenu(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }

        [CheckLogins]
        [HttpPost]
        public JsonResult CreateNewSubMenu(SSYMenuViewModel model)
        {
            try
            {
                return Json(new { Result = "OK", Data = HB.CreateNewSubMenu(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }


        [CheckLogins]
        [HttpPost]
        public JsonResult UpdateExistingMenu(SSYMenuViewModel model)
        {
            try
            {
                return Json(new { Result = "OK", Data = HB.UpdateExistingMenu(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Result = "Error", Data = "Sorry for the inconvenience, Some server issue will get back to you soon. Any emergency please contact SSY Support Team" }, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Department dashboard
        [CheckLogins]
        public ActionResult DeptDashboard()  // string SessionValue
        {
            try
            {
                string SessionValue = Convert.ToString(Request.Cookies["SessionValue"].Value);
                // if (SessionValue == "" || SessionValue == null)
                // {
                //     return RedirectToAction("Index", "Home");
                //  }

                // if (SessionValue == Session["UserSession"].ToString())
                //{
                string userType = Convert.ToString(Session["UserType"]);
                string deptUserId = Convert.ToString(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptUserId))
                    return RedirectToAction("Index", "Home");


                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    string ChangePwd = Session["ChangePwd"].ToString();


                    ViewBag.UserType = userType;

                    ViewBag.deptuserid = deptUserId;
                    var Count = HB.GetNotyCount(Convert.ToInt32(userType), Convert.ToInt32(deptUserId));
                    Session["UnReadNotyCount"] = Count;
                    if (ChangePwd == "1")
                        return RedirectToAction("PersonalPassWordChange", "Login");
                    else
                        return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
                //  }
                // //  else
                //  {
                //      return RedirectToAction("Index", "Home");
                //  }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");

            }


        }
        #endregion




        //#region Pending/Approved/Reject Application
        //[HttpPost]
        //public ActionResult GetApplicationSum(string status, string fromdate, string todate, string SearchValue)
        //{
        //    try
        //    {

        //        string Location = Convert.ToString(Session["Location"]);
        //        string Userid = Convert.ToString(Session["DeptUserid"]);
        //        string UserType = Convert.ToString(Session["UserType"]);

        //        var draw = Request.Form.GetValues("draw").FirstOrDefault();
        //        var start = Request.Form.GetValues("start").FirstOrDefault();
        //        var length = Request.Form.GetValues("length").FirstOrDefault();

        //        string search = Request.Form.GetValues("search[value]").FirstOrDefault();


        //        int pageSize = length != null ? Convert.ToInt32(length) : 0;
        //        int skip = start != null ? Convert.ToInt32(start) : 0;
        //        Int64 recordsTotal = 0;

        //        var res = HB.GetApplicationSumByLocation(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, fromdate, todate, skip, pageSize, SearchValue);

        //        if (SearchValue != "")
        //        {
        //            if (res.Count > 0)
        //            {
        //                recordsTotal = res.Count;

        //                res = (from x in res orderby x.BenSno select x).Skip(skip).Take(10).ToList();
        //            }
        //        }

        //        else
        //        {
        //            if (skip == 0)
        //            {
        //                var RepCount = HB.GetApplicationSumByLocationCount(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, fromdate, todate);
        //                Session["AppReportCount"] = RepCount;
        //                recordsTotal = Convert.ToInt64(RepCount);
        //            }
        //            else
        //            {
        //                //if (res.Count > Convert.ToInt64(Session["AppReportCount"]))
        //                //{
        //                //    recordsTotal = res.Count;
        //                //    Session["AppReportCount"] = res.Count;

        //                //}
        //                recordsTotal = Convert.ToInt64(Session["AppReportCount"]);

        //            }

        //        }

        //        return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = res }, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception ex)
        //    {

        //        return Json("Error", JsonRequestBehavior.AllowGet);
        //    }

        //}
        //#endregion

        #region Pending/Approved/Reject Application
        [HttpPost]
        public ActionResult GetApplicationSum(string status, string fromdate, string todate, string SearchValue, string Locations, string WorkerType, string BenRegType)
        {
            try
            {

                string Location = Convert.ToString(Session["Location"]);
                string Userid = Convert.ToString(Session["DeptUserid"]);
                string UserType = Convert.ToString(Session["UserType"]);

                ///  var draw = Request.Form.GetValues("draw").FirstOrDefault();
                // var start = Request.Form.GetValues("start").FirstOrDefault();
                //  var length = Request.Form.GetValues("length").FirstOrDefault();

                // string search = Request.Form.GetValues("search[value]").FirstOrDefault();


                // int pageSize = length != null ? Convert.ToInt32(length) : 0;
                //int skip = start != null ? Convert.ToInt32(start) : 0;
                //Int64 recordsTotal = 0;

                //commented by mahender 19-12-2019
                //var res = HB.GetApplicationSumByLocation(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, fromdate, todate, 0, 0, SearchValue, Locations, WorkerType);

                var res = HB.GetApplicationSumByLocationext(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, fromdate, todate, 0, 0, SearchValue, Locations, WorkerType, BenRegType);

                //if (SearchValue != "")
                //{
                //    if (res.Count > 0)
                //    {
                //        recordsTotal = res.Count;

                //        res = (from x in res orderby x.BenSno select x).Skip(skip).Take(10).ToList();
                //    }
                //}

                //else
                //{
                //    if (skip == 0)
                //    {
                //        var RepCount = HB.GetApplicationSumByLocationCount(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, fromdate, todate, Locations, WorkerType);
                //        Session["AppReportCount"] = RepCount;
                //        recordsTotal = Convert.ToInt64(RepCount);
                //    }
                //    else
                //    {
                //        //if (res.Count > Convert.ToInt64(Session["AppReportCount"]))
                //        //{
                //        //    recordsTotal = res.Count;
                //        //    Session["AppReportCount"] = res.Count;

                //        //}
                //        recordsTotal = Convert.ToInt64(Session["AppReportCount"]);

                //    }

                //}
                //var jsonResult = Json(res.ToList(), JsonRequestBehavior.AllowGet);
                //jsonResult.MaxJsonLength = 10000;
                return new JsonResult()
                {
                    Data = res.ToList(),
                    MaxJsonLength = 86753090
                }; ;
                //return Json(new { draw = 0, recordsFiltered = 0, recordsTotal = 0, data = res }, JsonRequestBehavior.AllowGet);

                //return jsonResult;
                //return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Pending/Approved/Reject Application Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetApplicationSum", "HomeController");
                return Json("Error", JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region Get scheme description
        //Author - Sunitha 

        public ActionResult GetSchemeApplicationSum(int status, int schemid)
        {
            try
            {
                string Location = Session["Location"].ToString();
                string Userid = Session["DeptUserid"].ToString();
                string UserType = Convert.ToString(Session["UserType"]);
                var res = HB.GetSchemeApplicationSumByLocation(Convert.ToInt32(UserType), Convert.ToInt32(Userid), status, schemid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Scheme Apllication" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get scheme description error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetSchemeApplicationSum", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region submit notifications view
        [CheckLogins]
        public ActionResult NotificationsSubmit()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                SignUpUser user = new SignUpUser();
                user.typename = HB.GetTypeNotiSubmit();
                ViewBag.Messeage = "";
                return View(user);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region save notifications
        [HttpPost]
        public ActionResult NotificationsSubmit(IEnumerable<HttpPostedFileBase> files)
        {
            SignUpUser user = new SignUpUser();
            try
            {
                user.typename = HB.GetTypeNotiSubmit();
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string getdate = DateTime.Today.ToString("dd-MM-yyyy");
                if (Request.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);
                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {

                            var name = fileName;
                            if (i == 0)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/NotyDocuments/"), getdate + "_" + fileName);
                                fileName = "/UploadFiles/NotyDocuments/" + getdate + "_" + fileName;
                            }
                            file.SaveAs(SavePath);
                            FilePath.Add(SavePath);
                            NamesSave.Add(name);
                        }
                    }
                }
                string Type = Request.Form["msg"].ToString();
                string NotyMessage = Request.Form["NotyMessage"].ToString();
                string UserType = "";
                if (Type == "Portal")
                    UserType = "0";
                else
                    UserType = Request.Form["typeid"].ToString();
                string StartDate = Request.Form["txtstartdate"].ToString();
                string EndDate = Request.Form["txtenddate"].ToString();
                string Isactive = Request.Form["Isactive"].ToString();
                string Status = Request.Form["Status"].ToString();
                string Editid = Request.Form["editid"].ToString();
                int usertypeid = Convert.ToInt32(UserType);
                if (Type == "Portal")
                    usertypeid = 20;
                var res = HB.SaveNotifications(usertypeid, fileName, NotyMessage, 1, StartDate, EndDate, Convert.ToInt32(usertypeid), Convert.ToInt32(Status), Convert.ToInt32(Isactive), Convert.ToInt32(Editid));
                ViewBag.Messeage = res;
                return View(user);
            }
            catch (Exception ex)
            {
                ViewBag.Messeage = ex.Message.ToString();
                //Helper.AddtoLogFile("Notification" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("save notifications error due to : " + ex.Message, "usertypeid : " + Convert.ToString(Request.Form["typeid"]), Convert.ToString(ex.InnerException), "NotificationsSubmit", "HomeController");

                return View(user);
            }
        }
        #endregion

        #region Edit persnol information for department user
        [CheckLogins]
        public ActionResult PersonalEditUserDetails()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            SignUpUser usr = new SignUpUser();
            string DeptUserid = Session["DeptUserid"].ToString();
            var res = HB.GetDeptdet(Convert.ToInt32(DeptUserid));
            usr.FirstName = res.Firstname;
            usr.LastName = res.Lastname;
            usr.MobileNumber = res.Mobileno;
            usr.Email = res.Email;
            usr.Designation = res.Designation;
            usr.Location = res.BlockName;
            usr.DistName = res.DistrictName;
            usr.RoleName = res.UserTypeName;
            usr.SubdivName = res.SubDivisionName;
            ViewBag.DeptUserid = DeptUserid;
            string LanNumber = res.LandlineNumber;
            if (LanNumber == "" || LanNumber == null)
            {
                usr.Code = "NA";
                usr.Landline = "NA"; ;
            }
            else
            {
                if (LanNumber.Contains('-') == true)
                {
                    string[] landline = LanNumber.Split('-');
                    usr.Code = landline[0];
                    usr.Landline = landline[1];
                }
                else
                {
                    usr.Code = "NA";
                    usr.Landline = "NA";
                }
            }
            ViewBag.UserType = Session["UserType"].ToString();
            ViewBag.SucessMes = "";
            return View(usr);
        }
        #endregion

        #region  Update persnol information for department users

        [HttpPost]
        [CheckLogins]
        public ActionResult PersonalEditUserDetails(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            string DeptUserid = Session["DeptUserid"].ToString();
            try
            {
                var res = HB.UpdateUser(RegData, DeptUserid, "0", "0", "0");
                // return Content(res);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                ViewBag.SucessMes = ex.Message.ToString();
                //Helper.AddtoLogFile("Personal Edit UserDetails" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Update persnol information for department users error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "PersonalEditUserDetails", "HomeController");

                return View(usr);
            }
        }
        #endregion


        #region Notifications view
        [CheckLogins]
        public ActionResult GetNotifications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region Get notifications based on role
        public ActionResult GetNotyList()
        {
            try
            {

                string usertypeid = Session["UserType"].ToString();
                string DeptUserid = Session["DeptUserid"].ToString();
                var list = HB.getnotylist(usertypeid);
                var res = HB.ReadNotyfications(usertypeid, DeptUserid);

                var Count = HB.GetNotyCount(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                Session["UnReadNotyCount"] = Count;

                return Json(list, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Noty List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get notifications based on role error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetNotyList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get notifications RoleBased based on role
        public ActionResult GetRoleBasedNotyList()
        {
            try
            {

                string usertypeid = Session["UserType"].ToString();
                string deptUserId = Session["DeptUserid"].ToString();
                var list = HB.GetRoleBasedNotyList(usertypeid, deptUserId);
                var res = HB.ReadNotyfications(usertypeid, deptUserId);

                var Count = HB.GetNotyCount(Convert.ToInt32(usertypeid), Convert.ToInt32(deptUserId));
                Session["UnReadNotyCount"] = Count;

                return Json(list, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Noty List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get notifications RoleBased based on role error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetRoleBasedNotyList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region get notifications on home page view
        public ActionResult GetNotyListPortal()
        {
            try
            {
                var list = HB.getnotylistPortal("20");
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Noty List For Portal" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("get notifications on home page view error due to : " + ex.Message, "usertypeid : " + Convert.ToString("20"), Convert.ToString(ex.InnerException), "GetNotyListPortal", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        [CheckLogins]
        public ActionResult GetDistrictSum()
        {
            try
            {
                var list = HB.GetDistrictSum();
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("GetDistrictSum" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get District Sum error due to : " + ex.Message, "-", Convert.ToString(ex.InnerException), "GetDistrictSum", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Read notification by users
        public ActionResult ReadNotifications()
        {
            try
            {
                string DeptUserid = Session["DeptUserid"].ToString();
                string usertypeid = Session["UserType"].ToString();
                var res = HB.ReadNotyfications(DeptUserid, usertypeid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Read Notification" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Read notification by users error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "ReadNotifications", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get status list for users
        public ActionResult GetStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetApplicationStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get status list for users error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #region Get Refer status list for users
        public ActionResult GetReferStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetReferStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Refer Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Refer status list for users error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetReferStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetFundStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetFundStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Fund Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Fund Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetFundStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetSuperAdminFundStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetSuperAdminFundStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Fund Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Super Admin Fund Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetSuperAdminFundStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetClaimStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetClaimStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Claim Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Claim Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetClaimStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetOverallClaimStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetOverallClaimStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Overall Claim Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Overall Claim Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetOverallClaimStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetPaymentStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetPaymentStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Payment Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Payment Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetPaymentStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetDLCClaimStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetDLCClaimStatus(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Claim Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get DLC Claim Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetDLCClaimStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetSuperAdminClaimStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetSuperAdminClaimStatusList(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Claim Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get SuperAdmin Claim Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetSuperAdminClaimStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetFundReleaseStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GetFundReleaseStatusList(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Fund Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Fund Release Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetFundReleaseStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        public ActionResult GeSchemetStatusList()
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int Location = Convert.ToInt32(Session["Location"]);
                int SubDiv = Convert.ToInt32(Session["SubDiv"]);
                int District = Convert.ToInt32(Session["District"]);
                string DeptUserid = Session["DeptUserid"].ToString();
                var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                var res = HB.GeSchemetStatusList(usertypeid, DeptUserid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Scheme Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Scheme Status List error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GeSchemetStatusList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region For Approve & reject & sentback benificiary application
        //Author - Sunitha

        public ActionResult StatusChange(int benSno, int status, string remarks, string fileName, string value, string regDate, string deptUserId)
        {
            RequestResponse Res = new RequestResponse();
            try
            {


                var deptResult = HB.GetDeptUserDetails(Convert.ToInt32(deptUserId));

                if (deptResult.UserType != 5)
                {
                    Res.Code = "999";
                    Res.Message = "Unauthorized user";
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }


                string userId = deptUserId;
                string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                var det = "";

                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        var res = Rb.GetEditBenDetails(benSno);

                        if (res.Status != 0)
                        {
                            Res.Code = "999";
                            Res.Message = "Invalid request";
                            return Json(Res, JsonRequestBehavior.AllowGet);
                        }

                        if (res.IsUnique == "P")
                        {
                            Res.Code = "999";
                            Res.Message = "Deduplication is pending";
                            return Json(Res, JsonRequestBehavior.AllowGet);
                        }
                        var PresentAddress = Rb.GetPresentAddress(benSno);
                        string SubDivision = Convert.ToString(PresentAddress.BenSubDivision);
                        string Location = Convert.ToString(PresentAddress.BenBmc);
                        string Source = "";
                        if (res.BenOccupation == "ConstructionWorker")
                            Source = "2";
                        if (res.BenOccupation == "TransportWorker")
                            Source = "3";
                        if (res.BenOccupation == "Others")
                            Source = "1";

                        string ResponseMes = "";

                        if (res.RegType == "N" || res.RegType == "L")
                        {
                            if (status == 1)
                            {

                                if (res.SSIN == "NA")
                                {
                                    var SSNINGen = Rb.GenarateSsinNo(SubDivision, Location, Source);

                                    if (SSNINGen.ResponseCode != "000" && status == 1)
                                    {
                                        Res.Code = "999";
                                        Res.Message = SSNINGen.ResponseMessage;
                                        return Json(Res, JsonRequestBehavior.AllowGet);
                                    }
                                    if (SSNINGen.ResponseCode == "000" && status == 1)
                                    {
                                        if (SSNINGen.ResponseMessage == "" || SSNINGen.ResponseMessage == null)
                                        {
                                            Res.Code = "999";
                                            Res.Message = "Invalid SSIN Number";
                                            return Json(Res, JsonRequestBehavior.AllowGet);
                                        }
                                    }
                                    ResponseMes = SSNINGen.ResponseMessage;
                                    det = HB.GetStatusChange(benSno, status, Convert.ToInt32(userId), remarks, SSNINGen.ResponseMessage, fileName, regDate);
                                }
                                else
                                {
                                    ResponseMes = res.SSIN;
                                    det = HB.GetStatusChange(benSno, status, Convert.ToInt32(userId), remarks, res.SSIN, fileName, regDate);
                                }

                            }

                            else
                            {
                                ResponseMes = res.SSIN;
                                det = HB.GetStatusChange(benSno, status, Convert.ToInt32(userId), remarks, res.SSIN, fileName, regDate);

                            }


                        }

                        else
                        {
                            ResponseMes = res.SSIN;
                            det = HB.GetStatusChange(benSno, status, Convert.ToInt32(userId), remarks, res.SSIN, fileName, regDate);


                        }

                        if (det == "Status Approved Successfully")
                        {
                            string AppMes = "SSIN :" + ResponseMes + " Your application regarding additional information for benefit is accepted. Please log in at  SSY.wblabour.gov.in for details";

                            if (res.BenDeathCertificateNo != null || res.BenDeathCertificateNo != "")
                            {
                                CommonMethods.NewSms(res.BenNomMobileNo, AppMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                            }
                            else
                            {
                                CommonMethods.NewSms(res.BenMobileNo, AppMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                            }

                            //CommonMethods.NewSms(res.BenMobileNo, AppMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                        }
                        if (det == "Status Rejected")
                        {
                            string RejMes = "Your SSY application is rejected. Please access your account for further details.";

                            if (res.BeneType != "NewReg")
                            {
                                RejMes = "Your SSY application is rejected. Please access your account for further details.";
                            }
                            else
                            {
                                RejMes = "SSIN :" + ResponseMes + " Your application regarding additional information for benefit is rejected. Please log in at  SSY.wblabour.gov.in for details";

                            }

                            if (res.BenDeathCertificateNo != null || res.BenDeathCertificateNo != "")
                            {
                                CommonMethods.NewSms(res.BenNomMobileNo, RejMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                            }
                            else
                            {
                                CommonMethods.NewSms(res.BenMobileNo, RejMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                            }

                            //CommonMethods.NewSms(res.BenMobileNo, RejMes, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                        }
                        if (det == "Application Sent Back To Beneficiary")
                        {
                            string SentBackSms = "Your SSY application is SentBack. Please access your account for further details.";

                            if (res.BeneType != "NewReg")
                            {
                                SentBackSms = "Your SSY application is SentBack. Please access your account for further details.";
                            }
                            else
                            {
                                SentBackSms = "SSIN :" + ResponseMes + " Your application regarding additional information for benefit is sent back for rectification. Please log in at  SSY.wblabour.gov.in for details";

                            }
                            CommonMethods.NewSms(res.BenMobileNo, SentBackSms, 0, "Bene Verification", "Bene", Convert.ToString(benSno));
                            Helper.SendMail_WithHtml(res.Email, FromEmail, SentBackSms, "Inspector SentBack");
                        }


                        transaction.Commit();

                    }
                    catch (Exception)
                    {
                        Helper.AddtoLogFile("transaction rollback : " + benSno);
                        if (det == "")
                        {
                            det = "Unable to process your application, please try again";
                        }
                        transaction.Rollback();
                    }
                }

                Res.Code = "000";
                Res.Message = det;
                return Json(Res, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile(deptUserId + " : Inspector Status List" + DateTime.Now + "Error : " + Message + "Benificiary" + benSno);
                CommonMethods.LogError("For Approve & reject & sentback benificiary application Error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "StatusChange", "HomeController");
                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion


        #region

        public ActionResult RequiredDocuments(Int64 bsno, bool BenPhoto, bool BenSignature, bool BenPassBook, bool BenAadhar, bool BenIdentity, bool BenForm, bool BenOtherDoc, bool SchemeCertificate)
        {

            RequestResponse Res = new RequestResponse();
            try
            {
                Res = HB.RequiredDocuments(bsno, BenPhoto, BenSignature, BenPassBook, BenAadhar, BenIdentity, BenForm, BenOtherDoc, SchemeCertificate);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region

        public ActionResult GetRequiredDocuments(Int64 bensno)
        {


            try
            {
                var Res = HB.GetRequiredDocuments(bensno);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion


        #region For BOCW and WBT Verify And Reject
        //Author - Sunitha

        public ActionResult SchemeStatus(int schemebenid, int status, int bsno)
        {
            try
            {
                var res = Rb.GetEditBenDetails(bsno);
                var det = HB.SchemeStatus(schemebenid, status);
                if (det == "Status Approved Successfully")
                {
                    string AppMes = "Your Scheme is approved by Inspector.";
                    CommonMethods.SendBillSms(res.BenMobileNo, AppMes, 0, "Scheme Verification", "Bene");

                }
                if (det == "Status Rejected")
                {
                    string RejMes = "Your Scheme is rejected.";
                    CommonMethods.SendBillSms(res.BenMobileNo, RejMes, 0, "Scheme Verification", "Bene");

                }
                return Json(det, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Inspector Scheme Status" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("For BOCW and WBT Verify And Reject error due to : " + ex.Message, "bsno : " + Convert.ToString(bsno), Convert.ToString(ex.InnerException), "SchemeStatus", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get user contact details
        [HttpGet]
        public ActionResult GetContactDataDet()
        {
            var res = HB.GetContactDataDet();
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region
        public ActionResult DataTable()
        {
            return View();
        }
        #endregion

        #region Get approved benificiary details view
        //Author - Sunitha
        //[CheckLogins]
        //public ActionResult Approved()
        //{
        //    string userType = Convert.ToString(Session["UserType"]);
        //    if (string.IsNullOrEmpty(userType))
        //        return RedirectToAction("Index", "Home");
        //    var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
        //    if (resultData.Count != 0)
        //    {
        //        //string UserType = Convert.ToString(Session["UserType"]);
        //        //if (string.IsNullOrEmpty(UserType))
        //        //  return RedirectToAction("Index", "Home");
        //        ViewBag.UserType = userType;
        //        return View();
        //    }
        //    else
        //    {
        //        return RedirectToAction("Index", "Home");
        //    }
        //}

        [CheckLogins]
        public ActionResult Approved()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    //string UserType = Convert.ToString(Session["UserType"]);
                    //if (string.IsNullOrEmpty(UserType))

                    //  string userType = Convert.ToString(Session["UserType"]);

                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    //  return RedirectToAction("Index", "Home");
                    ViewBag.UserType = userType;
                    ViewBag.DepUserId = deptuserid;
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseApp();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    //   ViewBag.usertype = usertypeid;

                    return View(usr);

                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Approved Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "Approved", "HomeController");
                return RedirectToAction("Index", "Home");
            }
        }

        #endregion


        #region  Get sendback benificiary details view

        //Author - Sunitha
        //[CheckLogins]
        //public ActionResult Sentback()
        //{
        //    string userType = Convert.ToString(Session["UserType"]);
        //    if (string.IsNullOrEmpty(userType))
        //        return RedirectToAction("Index", "Home");
        //    var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
        //    if (resultData.Count != 0)
        //    {
        //        ViewBag.UserType = userType;
        //        return View();
        //    }
        //    else
        //    {
        //        return View();
        //    }
        //}


        [CheckLogins]
        public ActionResult Sentback()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    ViewBag.UserType = userType;

                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseApp();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    ViewBag.UserType = usertypeid;
                    ViewBag.DepUserId = deptuserid;
                    return View(usr);

                    //return View();
                }
                else
                {
                    return View();
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Sentback Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "Sentback", "HomeController");
                return View();
            }
        }
        #endregion

        #region  Get rejected benificiary details view
        //Author - Sunitha
        //[CheckLogins]
        //public ActionResult Rejected()
        //{
        //    string userType = Convert.ToString(Session["UserType"]);
        //    if (string.IsNullOrEmpty(userType))
        //        return RedirectToAction("Index", "Home");
        //    var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
        //    if (resultData.Count != 0)
        //    {
        //        ViewBag.UserType = userType;
        //        string DeptUserid = Convert.ToString(Session["DeptUserid"]);
        //        ViewBag.DeptUserid = DeptUserid;
        //        return View();
        //    }
        //    else
        //    {
        //        return RedirectToAction("Index", "Home");
        //    }
        //}

        [CheckLogins]
        public ActionResult Rejected()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (resultData.Count != 0)
                {
                    ViewBag.UserType = userType;
                    string DeptUserid = Convert.ToString(Session["DeptUserid"]);
                    ViewBag.DeptUserid = DeptUserid;

                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseApp();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);
                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt32(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    //  ViewBag.usertype = usertypeid;
                    //  ViewBag.deptid = deptuserid;
                    return View(usr);

                    // return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Rejected Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "Rejected", "HomeController");
                return RedirectToAction("Index", "Home");
            }
        }




        #endregion

        #region Benificiary notification view
        //Author - Srikar
        [CheckLogins]
        public ActionResult GetBenNoty()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region get Notification message
        //Author - Srikar
        //
        public ActionResult GetPortalNoty()
        {
            string sitecount = Convert.ToString(Session["sitecount"]);
            string SSINCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(sitecount) || string.IsNullOrEmpty(SSINCount))
                return RedirectToAction("Index", "Home");
            else
                return View();
        }
        #region
        public ActionResult DistrictWiseSum()
        {
            return View();
        }
        #endregion
        #endregion

        #region save for BOCW Scheme
        //Author - Sunitha
        //
        public ActionResult SaveBocwScheme(string ID, int SchemerowCount, int Benifid, string Createdby)
        {
            try
            {
                string[] Scheme = ID.Split('~');
                string FinalSchemeDet = "<SchemeDetails>";
                for (int i = 0; i <= SchemerowCount - 2; i++)
                {
                    string det = Scheme[i];
                    string[] splitSchemeDet = det.Split('$');
                    string[] dat = splitSchemeDet[4].Split('-');
                    DateTime JoiningDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
                    string[] dat1 = splitSchemeDet[5].Split('-');
                    DateTime RelievingDate = new DateTime(Convert.ToInt32(dat1[2]), Convert.ToInt32(dat1[1]), Convert.ToInt32(dat1[0]));
                    FinalSchemeDet += "<BocwDtls><Schemeid>" + "2" + "</Schemeid>";
                    FinalSchemeDet += "<Name>" + splitSchemeDet[0] + "</Name>";
                    FinalSchemeDet += "<Description>" + splitSchemeDet[1] + "</Description>";
                    FinalSchemeDet += "<Registration>" + splitSchemeDet[2] + "</Registration>";
                    FinalSchemeDet += "<PostandNature>" + splitSchemeDet[3] + "</PostandNature>";
                    FinalSchemeDet += "<DateofJoining>" + JoiningDate + "</DateofJoining>";
                    FinalSchemeDet += "<DateofRelieving>" + RelievingDate + "</DateofRelieving>";
                    FinalSchemeDet += "<Remarks>" + splitSchemeDet[6] + "</Remarks></BocwDtls>";
                }
                FinalSchemeDet += "</SchemeDetails>";
                string res = HB.SaveBocwScheme(FinalSchemeDet, Createdby, Benifid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Save Bocw Scheme" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("save for BOCW Scheme error due to : " + ex.Message, "Benifid : " + Convert.ToString(Benifid), Convert.ToString(ex.InnerException), "SaveBocwScheme", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Save for WBTWSS Scheme
        //Author - Sunitha

        public ActionResult SaveWBTScheme(string Type, string Vehicle, string Duty, int Benifid, string Createdby)
        {
            try
            {
                string res = HB.SaveWBTScheme(Type, Vehicle, Duty, Benifid, Createdby);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Save WBT Scheme" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("save for BOCW Scheme error due to : " + ex.Message, "Benifid : " + Convert.ToString(Benifid), Convert.ToString(ex.InnerException), "SaveBocwScheme", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Bocw details
        //Author - Sunitha

        public ActionResult GetBOCWDetails(int bensno, int schemeid)
        {
            try
            {
                var res = HB.GetBOCWDetails(bensno, schemeid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get BOCWA Details" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Bocw details error due to : " + ex.Message, "benSno : " + Convert.ToString(bensno), Convert.ToString(ex.InnerException), "GetBOCWDetails", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Scheme Certificate
        //Author - Sunitha

        public void SchemeCertificate(string Benifid)
        {
            try
            {
                var UserId = "";
                var UserName = "";
                if (Convert.ToString(Session["LoginType"]) == "Department")
                {
                    UserId = Convert.ToString(Session["DeptUserid"]);
                    UserName = Convert.ToString(Session["UserName"]);
                }
                else
                {
                    UserId = Convert.ToString(Session["Userid"]);
                    UserName = Convert.ToString(Session["BenName"]);
                }
                Helper.AddtoLogFile(Environment.NewLine + " Download IdentityCumPassbook of Benifid: " + Benifid + ";By  Usertype " + Convert.ToString(Session["UserType"]) + " UserID :" + UserId + " UserName " + UserName);

                Helper.SchemeCertificate_New(Response, Benifid);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Get Scheme Certificate Error due to : " + ex.Message, "Benifid : " + Convert.ToString(Benifid), Convert.ToString(ex.InnerException), "SchemeCertificate", "HomeController");
            }
        }
        #endregion

        #region Get menu list
        public ActionResult GetMenuList(int RoleId)
        {
            try
            {
                var res = HB.GetMenuListReport(RoleId);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Get Menu List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get menu list error due to : " + ex.Message, "RoleId : " + Convert.ToString(RoleId), Convert.ToString(ex.InnerException), "GetMenuList", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region  Assign Roles for users
        //Author - Srikar

        public ActionResult AssignRoles(int Id, string AccLev)
        {
            try
            {
                var res = HB.AssignRoles(Id, AccLev);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("For Assigning Roles" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Assign Roles for users error due to : " + ex.Message, "Id : " + Convert.ToString(Id), Convert.ToString(ex.InnerException), "AssignRoles", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Department & Benificiary Forgot password  from home page
        public ActionResult ForgotPassword()
        {
            try
            {
                SignUpUser usr = new SignUpUser();
                string siteCount = Convert.ToString(Session["sitecount"]);
                string ssinCount = Convert.ToString(Session["SSINCount"]);
                if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                    return RedirectToAction("Index", "Home");
                return View(usr);
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");

            }

        }
        #endregion

        #region update Department & benificiary forgot password
        [HttpPost]
        public ActionResult ForgotPassword(SignUpUser Details)
        {
            SignUpUser usr = new SignUpUser();
            try
            {
                string BenSno = Request.Form["BenSno"].ToString();
                string Email = Request.Form["Email"].ToString();
                string BenMobileNo = Request.Form["BenMobileNo"].ToString();
                string SSINNumber = Request.Form["SSINNumber"].ToString();
                string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                string password = Helper.CreatePassword();
                var res = HB.GenratePassword(BenSno, password);
                if (res == "Password Generated Successfully")
                {
                    string Message = "Your New Password Is : " + password;
                    CommonMethods.NewSms(BenMobileNo, Message, 0, "Bene Forgot Password", "Bene", Convert.ToString(BenSno));
                    //Helper.SendMail_WithHtml(Email, FromEmail, Message, "Login Credentials");
                }
                ViewBag.SucessMes = res;
                return Json(res);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Forgot Password" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("update Department & benificiary forgot password error due to : " + ex.Message, "BenSno : " + Convert.ToString(Request.Form["BenSno"]), Convert.ToString(ex.InnerException), "ForgotPassword", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Forget password users
        public ActionResult GetUsersById(string Ssin, string Userid)
        {
            try
            {
                HttpCookie httpCookie = new HttpCookie("httpCookie");
                if (Ssin != "" && Ssin != null)
                {
                    var data = Rb.GetBeniDetBySSIN(Ssin, "SSIN");
                    if (data == null)
                    {
                        return Content("null");
                    }
                    else
                    {
                        string fromEmail = ConfigurationManager.AppSettings["EmailSender"];
                        string BeneOtp = Helper.GenerateOTP();
                        var Ctext = Encoding.UTF8.GetBytes(BeneOtp);
                        var Ectext = Convert.ToBase64String(MachineKey.Protect(Ctext, "ProtectCookie"));
                        httpCookie["0"] = Ectext;
                        httpCookie["1"] = data.BenSno.ToString();
                        httpCookie.Expires.AddMinutes(15);
                        Response.Cookies.Add(httpCookie);

                        string Message = "Dear customer, your OTP for password recovery is " + BeneOtp + ".Use this code and recover your account.";
                        CommonMethods.NewSms(data.BenMobileNo, Message, 0, "New Beneficiary Forgot Password", "Beneficiary", Convert.ToString(data.BenSno));
                        // Helper.SendMail_WithHtml(Email, fromEmail, Message, "Login Credentials");

                        //   string initLetters = data.BenMobileNo.Substring(0, 3);
                        // string endLetters = data.BenMobileNo.Substring(7, 3);
                        //   data.BenMobileNo = initLetters + "XXXX" + endLetters ;
                        return Json(new { msg = "Success", data.BenMobileNo, data.BenSno }, JsonRequestBehavior.AllowGet);
                    }
                }
                else if (Userid != "" && Userid != null)
                {
                    var res = HB.GetDeptUserByUsercode(Userid);
                    if (res == null)
                    {
                        return Json("0", JsonRequestBehavior.AllowGet);
                    }
                    else if (res.UserType.ToString() == "10")
                    {
                        return Json(new { msg = "Please contact your ALC." });
                    }
                    else
                    {
                        string fromEmail = ConfigurationManager.AppSettings["EmailSender"];
                        string DeptOtp = Helper.GenerateOTP();
                        var Ctext = Encoding.UTF8.GetBytes(DeptOtp);
                        var Ectext = Convert.ToBase64String(MachineKey.Protect(Ctext, "ProtectCookie"));
                        httpCookie["0"] = Ectext;
                        httpCookie["1"] = res.Userid.ToString();
                        httpCookie.Expires.AddMinutes(15);
                        Response.Cookies.Add(httpCookie);

                        string Message = "Dear customer, your OTP for password recovery is " + DeptOtp + ".Use this code and recover your account.";
                        CommonMethods.NewSms(res.Mobileno, Message, 0, "New Department Forgot Password", "User", res.Userid.ToString());
                        // Helper.SendMail_WithHtml(Email, fromEmail, Message, "Login Credentials");

                        string initLetters = res.Mobileno.Substring(0, 3);
                        string endLetters = res.Mobileno.Substring(7, 3);
                        res.Mobileno = initLetters + "XXXX" + endLetters;

                        return Json(new { msg = "Success", res.Mobileno, res.Userid, res.UserType }, JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    return Json(new { msg = "Error" }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Get Forget password users error due to : " + ex.Message, "SSIN/userid : " + (Convert.ToString(Ssin) + "/" + Convert.ToString(Userid)), Convert.ToString(ex.InnerException), "GetUsersById", "HomeController");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        #region All user Update password
        public ActionResult UserUpdateNewPassword(ResetPasswordViewModel model)
        {
            try
            {
                string[] str = Sha1Pbkdf2.CreatePasswordHash(model.Password).Split(':');

                if (model.UserType == "Beneficary")
                {
                    BeneficaryChangeService beneficaryChangeService = new BeneficaryChangeService();
                    PasswordUpdateModel passwordUpdateModel = new PasswordUpdateModel();
                    passwordUpdateModel.BenUserKey = str[0];
                    passwordUpdateModel.BenUserPwd = str[1];
                    passwordUpdateModel.Bennso = model.UserId;
                    passwordUpdateModel.ModifiedBy = model.UserId.ToString();
                    beneficaryChangeService.UpdateBeneficaryPassword(passwordUpdateModel);
                }
                else if (model.UserType == "User")
                {
                    model.Userkey = str[0];
                    model.UserPwd = str[1];
                    HB.UpdateDepartmentUserPassword(model);
                }

                return Json(new { msg = "Updated Successfully" });
                //if (BenSno != "" && BenSno != null && Userid == null)
                //{
                //    var res = HB.GenratePassword(BenSno, Password);
                //    return Json(new { msg = res });
                //}
                //else if (Userid != "" && Userid != null && BenSno == null)
                //{
                //    var res = HB.DeptGenratePassword(Userid, Password);
                //    return Json(new { msg = res });
                //}
                //else
                //{
                //    return Json(new { msg = "Given Details invalid" });
                //}
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("All user Update password based on ssin/userid error due to : " + ex.Message, "SSIN/userid : " + Convert.ToString(model.UserId) + "/" + Convert.ToString(model.UserId), Convert.ToString(ex.InnerException), "UserUpdateNewPassword", "HomeController");
                return Json(new { msg = ex.Message });

            }
        }
        #endregion

        #region Verify OTP
        public ActionResult VarifyOtp(string otp, string Id)
        {
            try
            {
                HttpCookie reqCookies = Request.Cookies["httpCookie"];
                var CookieId = reqCookies["1"];
                var bytes = Convert.FromBase64String(reqCookies["0"]);
                var output = MachineKey.Unprotect(bytes, "ProtectCookie");
                string result = Encoding.UTF8.GetString(output);
                if (otp == result && Id == CookieId)
                {
                    return Json(new { msg = "Equal" });
                }
                else
                {
                    return Json(new { msg = "Otp Invalid. Enter valid OTP" });
                }
            }
            catch (Exception ex)
            {
                return Json(ex.Message);
            }
        }
        #endregion



        #region Get benificiary details based on ssin
        public ActionResult GetBenficiaryDetails(string SSIN)
        {
            try
            {
                var data = Rb.GetBeniDetBySSIN(SSIN, "SSIN");
                if (data == null)
                {
                    return Content("null");
                }
                BenDetails benDet = new BenDetails();
                benDet.Name = data.BenFirstName + " " + data.BenMiddleName + " " + data.BenLastName;
                benDet.Email = data.Email;
                benDet.MobileNumber = data.BenMobileNo;
                benDet.BenSno = (data.BenSno).ToString();
                return Json(benDet, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Get benificiary details based on ssin error due to : " + ex.Message, "SSIN : " + Convert.ToString(SSIN), Convert.ToString(ex.InnerException), "GetBenficiaryDetails", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Notification Details

        public ActionResult GetNotificatioDetails(int id)
        {
            try
            {
                var res = HB.GetNotificatioDetails(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Notification Details" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Notification Details error due to : " + ex.Message, "id : " + Convert.ToString(id), Convert.ToString(ex.InnerException), "GetNotificatioDetails", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Delete notifications
        // Delete/Status Change 
        public ActionResult GetDeleteNotiDetails(int id, int Status)
        {
            try
            {
                var res = HB.GetDeleteNotiDetails(id, Status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Delete Notification Details" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Delete Notification Details error due to : " + ex.Message, "id : " + Convert.ToString(id), Convert.ToString(ex.InnerException), "GetDeleteNotiDetails", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Update bengali name for benificiaries
        public ActionResult UpdateBengaliname(string id, string bengaliname)
        {
            int DeptUserID = 0;
            string DeptUserName = "";
            long BenSno = 0;
            string BenName = "";
            string ipAddress = Helper.GetIPAddress();
            try
            {
                Regex r = new Regex("^[a-zA-Z0-9]*$");

                if (r.IsMatch(bengaliname))
                {
                    return Json("Please Enter Correct Bengali Name. ", JsonRequestBehavior.AllowGet);

                }

                if (Session["LoginType"].ToString() == "Department")
                {
                    var result = HB.GetDeptUserDetails(Convert.ToInt32(Session["DeptUserid"].ToString()));
                    DeptUserID = result.Userid;
                    DeptUserName = result.UserCode;
                    var benresult = HB.GetBeniDetails(Convert.ToInt32(id));
                    BenSno = benresult.BenSno;
                    BenName = benresult.BenFirstName + " " + benresult.BenMiddleName + " " + benresult.BenLastName;
                    CommonMethods.AddtoLogFile("UserId: " + DeptUserID + " Log ID:  " + DeptUserName + " <Approved> Beneficiary ID: " + id + " Beneficiary Name: " + BenName + Environment.NewLine);
                    CommonMethods.AddtoLogFile(DateTime.Now.ToString() + " IP address " + ipAddress);

                }
                else
                {
                    var result = HB.GetBeniDetails(Convert.ToInt32(id));
                    BenSno = result.BenSno;
                    BenName = result.BenFirstName + " " + result.BenMiddleName + " " + result.BenLastName;
                }

                //3792 Log ID:  inspectorjagatballabhpur<Approved> Beneficiary ID: 6114007 Beneficiary Name: APARNA MAITY
                CommonMethods.AddtoLogFile("UserId: " + DeptUserID + " Log ID:  " + DeptUserName + " Bengali Name <Edit>  Beneficiary ID: " + id + " Beneficiary Name: " + BenName + Environment.NewLine);
                CommonMethods.AddtoLogFile(DateTime.Now.ToString() + " IP address " + ipAddress);
                var res = HB.UpdateBengaliname(id, bengaliname);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult DeDoop()
        {
            return View();
        }
        #endregion

        #region Save benificiary action history
        public ActionResult BenSaveActionHistory(string UserId, string BenUserId, string Reason, string Type, string Schemeid)
        {
            try
            {
                var res = HB.BenSaveActionHistory(UserId, BenUserId, Reason, Type, Schemeid);
                return Content(res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Get action history
        public ActionResult GetActionHistory(string BenId)
        {
            try
            {
                string DeptUserId = Session["DeptUserid"].ToString();
                string DeptUserType = Session["UserType"].ToString();
                var res = HB.GetActionHistory(BenId, DeptUserType);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region De_Duplication_Grouping
        [CheckLogins]
        public ActionResult DeDupGroup(string grpId = "", string type = "")
        {
            string userType = Convert.ToString(Session["UserType"]);
            string deptUserid = Convert.ToString(Session["DeptUserid"]);

            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptUserid))
                return RedirectToAction("Index", "Home");

            var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (resultData.Count != 0)
            {
                Session["GetGroupID"] = grpId;
                Session["GetGroupType"] = type.ToLower();
                var data = HB.GetSSYStats(Convert.ToString(Session["DeptUserid"]), Convert.ToString(Session["UserType"]));

                Session["TotalGroups"] = data.NoofGroups;
                ViewBag.TotalGroups = data.NoofGroups;
                ViewBag.TotalRecords = data.NoofRecords;
                ViewBag.GroupsPending = data.GroupedPending;
                ViewBag.GroupsReviewed = data.GroupedReviewed;
                ViewBag.RecordsPending = data.RecordsPending;
                ViewBag.RecordsReviewed = data.RecordsReviewed;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion


        #region Get group wise summary
        [HttpPost]
        public ActionResult GetGroupWiseSummary()
        {
            var draw = Request.Form.GetValues("draw").FirstOrDefault();
            var start = Request.Form.GetValues("start").FirstOrDefault();
            var length = Request.Form.GetValues("length").FirstOrDefault();
            int pageSize = length != null ? Convert.ToInt32(length) : 0;
            int skip = start != null ? Convert.ToInt32(start) : 0;
            Int64 recordsTotal = 0;

            string regNo = null;
            string groupId = null;
            var valueCheck = Convert.ToString(Session["GetGroupID"]);

            var resGrpType = Convert.ToString(Session["GetGroupType"] ?? "0");
            if (resGrpType == "group")
                groupId = Convert.ToString(Session["GetGroupID"]);
            if (resGrpType == "reg")
                regNo = Convert.ToString(Session["GetGroupID"]);
            var res = HB.GetGroupWiseSummary(Convert.ToString(Session["DeptUserid"]), Convert.ToString(Session["UserType"]), regNo, groupId, skip, pageSize);
            if (valueCheck != null && valueCheck != "")
            {
                if (res.Count > 0)
                {
                    recordsTotal = res.Count;
                }
            }
            else
            {


                recordsTotal = Convert.ToInt64(Session["TotalGroups"] ?? 0);

            }


            Session["GetGroupID"] = null;
            Session["GetGroupType"] = null;

            return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = res }, JsonRequestBehavior.AllowGet);

        }
        #endregion

        #region
        public ActionResult DeDuplication(string grpNo = "")
        {
            if (grpNo != "" && grpNo != null)
            {
                Session["GroupNo"] = grpNo;
            }
            ViewBag.usertype = Convert.ToString(Session["UserType"]);
            return View();
        }
        #endregion

        #region Get group duplication details
        [HttpGet]
        public ActionResult GetGroupDuplicateDetails()
        {
            string grpNo = Convert.ToString(Session["GroupNo"]);
            string userType = Convert.ToString(Session["UserType"]);
            string deptUserid = Convert.ToString(Session["DeptUserid"]);
            var data = HB.GetGroupDuplicateDetails(grpNo, Convert.ToInt32(userType), Convert.ToInt32(deptUserid));
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Get group unique details
        [HttpGet]
        public ActionResult GetGroupUniqueDetails()
        {
            string grpNo = Convert.ToString(Session["GroupNo"]);
            string userType = Convert.ToString(Session["UserType"]);
            string deptUserid = Convert.ToString(Session["DeptUserid"]);
            var data = HB.GetGroupUniqueDetails(grpNo, Convert.ToInt32(userType), Convert.ToInt32(deptUserid));
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Action history view

        [CheckLogins]
        public ActionResult ActionHistory(string noofrec = "", string selrec = "")
        {
            Session["ActNoofRec"] = noofrec;
            Session["ActSelRecs"] = selrec;
            ViewBag.PreviousActions = HB.GetPreviousActions(Convert.ToString(Session["GroupNo"]));
            return View();
        }
        #endregion

        #region
        public ActionResult ActionHistoryJosn(string noofrec = "", string selrec = "")
        {
            Session["ActNoofRec"] = noofrec;
            Session["ActSelRecs"] = selrec;
            var PreviousActions = HB.GetPreviousActions(Convert.ToString(Session["GroupNo"]));
            return Json(PreviousActions, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Save action history
        [HttpGet]
        public ActionResult SaveActionHistory(string act = "")
        {
            var data = HB.SaveActionHistory(Convert.ToString(Session["GroupNo"]), act, Convert.ToString(Session["ActNoofRec"]), Convert.ToString(Session["ActSelRecs"]), Convert.ToString(Session["DeptUserid"]));
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Save group details
        [HttpGet]
        public ActionResult SaveGroupDetails(string unqList = "")
        {
            var data = HB.UpdateRecordStatus(Convert.ToString(Session["GroupNo"]), unqList);
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region DeDup SubGroup Update & Reset
        public ActionResult SubGroupUpdate(string PSXIDlist = "", string subGroupNo = "")
        {
            var result = HB.SubGroupDataUpdate(PSXIDlist, subGroupNo);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public ActionResult SubGroupReset()
        {
            return View();
        }
        public ActionResult GetSubGroups()
        {
            string grpNo = Convert.ToString(Session["GroupNo"]);
            List<string> result = HB.GetSubGroupDetails(grpNo);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public ActionResult GetDetailedSubGroups(string SubGID = "")
        {
            string grpNo = Convert.ToString(Session["GroupNo"]);
            List<SPGetSubGroupDetails_Result> result = HB.GetSubGroupDetailbySubGroupID(grpNo, SubGID);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        public ActionResult SubGroupDelete(string subGroupNo = "")
        {
            string grpNo = Convert.ToString(Session["GroupNo"]);
            SPSubGroupDelete_Result result = HB.DeleteSubGroup(grpNo);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
        #endregion
        public void Passbook(string Benifid = "5774942")
        {
            Helper.Passbook(Response, Benifid);
        }

        #region save dedoop action history details
        public ActionResult SaveDeeDoopActionhis(string Message, string Id)
        {
            try
            {
                string deptUserId = Session["DeptUserid"].ToString();
                string deptUserType = Session["UserType"].ToString();
                var Res = HB.SaveDeeDoopActionhis(Message, Id, deptUserId, deptUserType);
                return Content(Res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Get action history details
        public ActionResult GetActionHistoryDetails(string Id, string Roleid)
        {
            var res = HB.GetActionHistoryDetails(Id, Roleid);
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion




        #region Get single action history
        public ActionResult GetSingleActionHistory()
        {
            var res = HB.GetSingleActionHistory(Convert.ToString(Session["GroupNo"]));
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region update Dept Genarate Pwd

        public ActionResult DeptForgotPassword(string Userid, string Mobileno, string Email)
        {
            try
            {
                string fromEmail = ConfigurationManager.AppSettings["EmailSender"];
                string passWord = Helper.CreatePassword();
                var res = HB.DeptGenratePassword(Userid, passWord);
                if (res == "Password Generated Successfully")
                {
                    string Message = "Your New Password Is : " + passWord;
                    CommonMethods.NewSms(Mobileno, Message, 0, "Dept Forgot Password", "User", Userid);
                    // Helper.SendMail_WithHtml(Email, fromEmail, Message, "Login Credentials");
                }
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Forgot Password" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Update Dept Genarate Password error due to : " + ex.Message, "Userid : " + Convert.ToString(Userid), Convert.ToString(ex.InnerException), "DeptForgotPassword", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Details through Usercode for users
        //public ActionResult GetDeptUserByUsercode(string Userid)
        //{
        //    try
        //    {
        //        var res = HB.GetDeptUserByUsercode(Userid);
        //        if (res == null)
        //            return Json("0", JsonRequestBehavior.AllowGet);
        //        else
        //            return Json(res, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception ex)
        //    {
        //        //Helper.AddtoLogFile("Dept user details Usercode" + DateTime.Now + "Error : " + ex.Message.ToString());

        //        CommonMethods.LogError("Get Details through Usercode for users error due to : " + ex.Message, "Userid : " + Convert.ToString(Userid), Convert.ToString(ex.InnerException), "GetDeptUserByUsercode", "HomeController");

        //        return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
        //    }
        //}

        public ActionResult GetDeptUserByUsercode(string Userid)
        {
            try
            {
                string Value = "";
                string checkSession = ConfigurationManager.AppSettings["CheckSessions"].ToString();
                HttpContext httpContext = System.Web.HttpContext.Current;
                if (httpContext.ApplicationInstance.Session.Count > 0)
                    Value = Convert.ToString(httpContext.ApplicationInstance.Session["UserSession"]);
                if (string.IsNullOrEmpty(Value))
                    return Json("Session not valid", JsonRequestBehavior.AllowGet);

                var res = HB.GetDeptUserByUsercode(Userid);
                if (res == null)
                {
                    return Json("0", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(res, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Dept user details Usercode" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Get Details through Usercode for users error due to : " + ex.Message, "Userid : " + Convert.ToString(Userid), Convert.ToString(ex.InnerException), "GetDeptUserByUsercode", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region upload rejected documents
        [HttpPost]
        public ActionResult UploadFiles()
        {
            if (Request.Files.Count > 0)
            {
                try
                {
                    string FileName = string.Empty;
                    String timeStamp = DateTime.Now.ToString("yyyyMMddHHmmssffff");
                    HttpFileCollectionBase files = Request.Files;
                    for (int i = 0; i < files.Count; i++)
                    {

                        HttpPostedFileBase file = files[i];
                        string fname;
                        fname = timeStamp + "_" + file.FileName;
                        FileName = "/UploadFiles/RejectedDocumnets/" + fname;

                        fname = Path.Combine(Server.MapPath("~/UploadFiles/RejectedDocumnets"), fname);
                        file.SaveAs(fname);
                    }

                    return Json(FileName);
                }
                catch (Exception ex)
                {
                    return Json("Error");
                }
            }
            else
            {
                return Json("0");
            }
        }
        #endregion

        #region Get benificiary rejected details
        public ActionResult GetRejectedDetails(string BenSno)
        {
            try
            {
                var res = HB.GetRejectedDetails(Convert.ToInt32(BenSno));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get dedoop details based on bensno
        public ActionResult GetDedoopDetails(string BenSno)
        {
            try
            {
                var res = HB.GetDedoopDetails(Convert.ToInt32(BenSno));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Bank module view
        [CheckLogins]
        public ActionResult BankMaster()
        {
            BankDetails bnkDet = new BankDetails();

            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                bnkDet.district = HB.GetDistrict();
                bnkDet.bnk = HB.GetBankAll();
                bnkDet.bnkbrnch = HB.GetBank(0);
                bnkDet.bankcenter = HB.GetBankCenter(0, 0);
                return View(bnkDet);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region save bank name
        [HttpPost]
        public ActionResult BankMaster(string BnkName)
        {
            try
            {
                var res = HB.Savebank(BnkName);
                return Content(res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Save bank center
        [HttpPost]
        public ActionResult BankCenter(int Dist, int Bank, string bankcenter)
        {
            try
            {
                var res = HB.Savebankcenter(Dist, Bank, bankcenter);
                return Content(res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Save bank branch
        [HttpPost]
        public ActionResult BankBranch(int bnkbrnchcenter, string brnchname, string Ifsccode, string brnchAddress)
        {
            try
            {
                var res = HB.Savebankbranch(bnkbrnchcenter, brnchname, Ifsccode, brnchAddress);
                return Content(res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Get bank districts
        public ActionResult GetDistBankJSON(int ID)
        {
            try
            {
                return Json(HB.GetBank(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
            finally
            {

            }
        }
        #endregion

        #region Get bank district centers
        public ActionResult GetDistCenterJSON(int ID, int distid)
        {
            try
            {
                return Json(HB.GetBankCenter(ID, distid), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                return Content(ex.Message);
            }
            finally
            {

            }
        }
        #endregion

        #region

        [CheckLogins]
        public ActionResult DocumentsUploaded()
        {
            string sitecount = Convert.ToString(Session["sitecount"]);
            string SSINCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(sitecount) || string.IsNullOrEmpty(SSINCount))
                return RedirectToAction("Index", "Home");
            return View();
        }
        #endregion

        #region
        public ActionResult CheckLettersInValue(string Value)
        {
            if (Regex.IsMatch(Value, @"^[a-zA-Z]+$"))
            {
                return Content("false");
            }
            else
            {
                return Content("true");

            }
        }
        #endregion

        #region Testing sms

        public ActionResult Testsms()
        {
            //CommonMethods.SendBillSms("9030355309", "Test");
            return Content("");
        }

        #endregion

        #region

        public ActionResult CheckSmsCountryBalance()
        {
            // CommonMethods.CheckSmsCountryBalance();
            return Content("");
        }

        #endregion

        #region Get bendetails by ssin
        public ActionResult GetSsinDetails(string val)
        {
            var result = HB.GetSsinDetails(val);
            if (result == null)
            {
                return Content("");
            }
            else

                return Json(result, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region
        public ActionResult GetLoginCounts()
        {
            try
            {
                var res = HB.GetLoginCounts();
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region
        public ActionResult GetRelations()
        {
            try
            {
                var res = HB.GetRelations();
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region Forms page on home page under About SSY
        public ActionResult Forms()
        {
            string sitecount = Convert.ToString(Session["sitecount"]);
            string SSINCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(sitecount) || string.IsNullOrEmpty(SSINCount))
                return RedirectToAction("Index", "Home");
            return View();
        }

        #endregion


        #region Ranjith Kumar --District Wise Status and Divison wise status
        public ActionResult DistrictWiseStatus()
        {
            ViewBag.fromDate = Session["FromDate"];
            ViewBag.toDate = Session["ToDate"];
            Session["CAPTCHA"] = Helper.GetRandomText();

            string siteCount = Convert.ToString(Session["sitecount"]);
            string ssinCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                return RedirectToAction("Index", "Home");
            return View();
        }

        [HttpGet]
        public ActionResult Get_DistrictWiseStatus(string fromDate, string toDate)
        {
            try
            {



                var res = HB.DistrictWiseStatus(fromDate, toDate);


                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult DivisionWiseStatus(string DistrictId, string frDate, string toDate)
        {

            string sitecount = Convert.ToString(Session["sitecount"]);
            string SSINCount = Convert.ToString(Session["SSINCount"]);
            if (string.IsNullOrEmpty(sitecount) || string.IsNullOrEmpty(SSINCount))
                return RedirectToAction("Index", "Home");

            else
            {
                Session["FromDate"] = frDate;
                Session["ToDate"] = toDate;

                ViewBag.DistrictId = DistrictId;
                ViewBag.fromDate = frDate;
                ViewBag.toDate = toDate;

                return View();


            }


        }

        //public ActionResult Get_DivisionWiseStatus(string DistrictId, string fromDate, string toDate)
        //{

        //    try
        //    {
        //        var res = HB.DivistionWiseStatus(DistrictId, fromDate, toDate);

        //        return Json(res, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Json(ex, JsonRequestBehavior.AllowGet);
        //    }
        //}

        [HttpGet]
        public ActionResult ReviewBeni(string Remark, string BenId, string UserId)
        {
            var res = HB.ReviewBenificiary(Remark, BenId, UserId);

            return Json(res, JsonRequestBehavior.AllowGet);
        }

        #endregion

        #region

        [HttpGet]

        public ActionResult GetBenRevivedDetails(string Benid)
        {
            try
            {
                var res = HB.GetBenRevivedDetails(Benid);

                if (res == null || res.Count() == 0)
                {
                    return Json("0", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json(res, JsonRequestBehavior.AllowGet);

                }
            }

            catch (Exception ex)
            {
                return Json("0", JsonRequestBehavior.AllowGet);
            }


        }
        #endregion

        #region Get Capthcha image

        public FileResult GetCaptchaImage()
        {
            string text = Session["CAPTCHA"].ToString();

            //first, create a dummy bitmap just to get a graphics object
            System.Drawing.Image img = new Bitmap(1, 1);
            Graphics drawing = Graphics.FromImage(img);

            System.Drawing.Font font = new System.Drawing.Font("Arial", 15);
            //measure the string to see how big the image needs to be
            SizeF textSize = drawing.MeasureString(text, font);

            //free up the dummy image and old graphics object
            img.Dispose();
            drawing.Dispose();

            //create a new image of the right size
            img = new Bitmap((int)textSize.Width + 40, (int)textSize.Height + 20);
            drawing = Graphics.FromImage(img);

            Color backColor = Color.SeaShell;
            Color textColor = Color.Red;
            //paint the background
            drawing.Clear(backColor);

            //create a brush for the text
            Brush textBrush = new SolidBrush(textColor);

            drawing.DrawString(text, font, textBrush, 20, 10);

            drawing.Save();

            font.Dispose();
            textBrush.Dispose();
            drawing.Dispose();

            MemoryStream ms = new MemoryStream();
            img.Save(ms, System.Drawing.Imaging.ImageFormat.Png);
            img.Dispose();

            return File(ms.ToArray(), "image/png");
        }

        #endregion

        public class CaptchaResponse
        {
            [JsonProperty("success")]
            public bool Success { get; set; }
            [JsonProperty("error-codes")]
            public List<string> ErrorMessage { get; set; }
        }

        public ActionResult ValidateCaptcha(string Captcha)
        {

            string clientCaptcha = Captcha;
            string serverCaptcha = Session["CAPTCHA"].ToString();

            if (!clientCaptcha.Equals(serverCaptcha))
            {

                return Json("999", JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Json("000", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult BeniFiciaryReg()
        {
            string userType = Convert.ToString(Session["UserType"]);
            string deptUserId = Convert.ToString(Session["DeptUserid"]);


            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptUserId))
                return RedirectToAction("Index", "Home");

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        #region Get LabelNames

        public ActionResult GetLabelNames(string Id)
        {

            try
            {
                var result = HB.GetLabelNames(Id);
                return Json(result, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                string message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetLabelNames" + DateTime.Now + "Error : " + message);

                CommonMethods.LogError("Get Label Names error due to : " + ex.Message, "Id : " + Convert.ToString(Id), Convert.ToString(ex.InnerException), "GetLabelNames", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region

        public ActionResult SubmitRemarks(string Remarks, string Mail)
        {
            RequestResponse Res = new RequestResponse();
            try
            {
                var res = HB.SubmitRemarks(Remarks, Mail);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("SubmitRemarks" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Assign Roles for users error due to : " + ex.Message, "Mail : " + Convert.ToString(Mail), Convert.ToString(ex.InnerException), "SubmitRemarks", "HomeController");

                Res.Message = Message;
                Res.Code = "999";
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region
        public ActionResult ClaimEntryNominee()
        {
            HomeBussiness HB = new HomeBussiness();
            RegistrationBussiness Rb = new RegistrationBussiness();

            var res = HB.GetDeptUserDetails(Convert.ToInt32(14855));
            User user = new User { FirstName = res.Firstname, LastName = res.Lastname, Id = res.Userid, Password = res.UserPwd, Username = res.UserCode };
            var client = new HttpClient();
            var json = new JavaScriptSerializer().Serialize(user);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            var url = ConfigurationManager.AppSettings["api"] + "authenticate";
            var response = client.PostAsync(url, content).Result;
            var result = response.Content.ReadAsStringAsync().Result;
            var userInfo = JsonConvert.DeserializeObject<User>(result);
            if ((userInfo != null) && !string.IsNullOrEmpty(userInfo.Token))
            {
                Session["token"] = userInfo.Token;
            }
            return View();
        }

        public ActionResult TrackClaimNominee()
        {
            HomeBussiness HB = new HomeBussiness();
            RegistrationBussiness Rb = new RegistrationBussiness();

            var res = HB.GetDeptUserDetails(Convert.ToInt32(14855));
            User user = new User { FirstName = res.Firstname, LastName = res.Lastname, Id = res.Userid, Password = res.UserPwd, Username = res.UserCode };
            var client = new HttpClient();
            var json = new JavaScriptSerializer().Serialize(user);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            var url = ConfigurationManager.AppSettings["api"] + "authenticate";
            var response = client.PostAsync(url, content).Result;
            var result = response.Content.ReadAsStringAsync().Result;
            var userInfo = JsonConvert.DeserializeObject<User>(result);
            if ((userInfo != null) && !string.IsNullOrEmpty(userInfo.Token))
            {
                Session["token"] = userInfo.Token;
            }
            return View();

        }
        //public ActionResult GetRemarks()
        //{

        //    try
        //    {
        //        var res = HB.GetRemarks();
        //        return Json(res, JsonRequestBehavior.AllowGet);
        //    }
        //    catch (Exception ex)
        //    {
        //        string Message = Helper.ReturnException(ex);
        //        //CommonMethods.AddtoLogFile("GetRemarks" + DateTime.Now + "Error : " + Message);

        //        CommonMethods.LogError("Get Remarks error due to : " + ex.Message, "Id : - ", Convert.ToString(ex.InnerException), "GetRemarks", "HomeController");

        //        return Json(Message, JsonRequestBehavior.AllowGet);
        //    }
        //}
        #endregion


        #region

        public ActionResult GetBankHistory(string benSno)
        {
            try
            {
                var res = HB.GetBankHistory(benSno);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                //CommonMethods.AddtoLogFile("GetBankHistory" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Bank History error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "GetBankHistory", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetBenePersonalDetEditHistory(string benSno)
        {
            try
            {
                var res = HB.GetBenePersonalDetEditHistory(benSno);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetBenePersonalDetEditHistory " + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Bene Personal Det Edit History error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "GetBenePersonalDetEditHistory", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetBeneHusbandDetEditHistory(string benSno)
        {
            try
            {
                var res = HB.GetBeneHusbandDetEditHistory(benSno);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetBeneHusbandDetEditHistory " + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Bene Husband Det Edit History error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "GetBeneHusbandDetEditHistory", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region DOB EDIT
        public ActionResult GetBeneDOBDetEditHistory(string benSno)
        {
            try
            {
                var res = HB.GetBeneDOBDetEditHistory(benSno);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetBeneDOBDetEditHistory " + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Bene DOB Det Edit History error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "GetBeneDOBDetEditHistory", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult LogoutSession()
        {

            try
            {
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);
                string UserSession = Convert.ToString(Session["UserSession"]);

                CommonMethods.AddtoLogFileLogoutSessions("LogoutSession" + DateTime.Now + "User Details : " + DeptUserid + "," + UserSession);

                FormsAuthentication.SignOut();
                Session.Abandon();
                Session.RemoveAll();
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                Response.AppendHeader("Cache-Control", "no-store");
                return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region
        public ActionResult BingMap()
        {
            return View();
        }
        #endregion

        #region
        public ActionResult ScreenReaderAccess()
        {
            return View();
        }
        #endregion

        #region
        public ActionResult SearchSSIN()
        {
            return View();
        }
        #endregion

        public ActionResult Toaster()
        {

            return View();
        }

        #region
        public ActionResult GetCreatedBInfo(string benSno)
        {
            try
            {
                var res = HB.GetCreatedBInfo(benSno);

                if (res == null)
                {
                    return Json("0", JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json(res, JsonRequestBehavior.AllowGet);
                }

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetCreatedBInfos" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Created BInfo error due to : " + ex.Message, "benSno : " + Convert.ToString(benSno), Convert.ToString(ex.InnerException), "GetCreatedBInfo", "HomeController");


                return Json("0", JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        public ActionResult PfPayInSlipDepositedList()
        {
            return View();
        }

        public ActionResult benpfdetails()
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

        #region Merg SSin
        public ActionResult GetMerSsinDetails(string benSSin)
        {
            try
            {
                var res = HB.GetMerSsinDetails(benSSin);

                if (res == null)
                {
                    return Content("");
                }
                else
                {
                    return Json(res, JsonRequestBehavior.AllowGet);
                }


                //return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                //CommonMethods.AddtoLogFile("GetSSinDetails" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Merg Ssin Details error due to : " + ex.Message, "benSSin : " + Convert.ToString(benSSin), Convert.ToString(ex.InnerException), "GetMerSsinDetails", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Post Merg SSin

        public ActionResult MergSSinData(string UniD, string MerId)
        {
            try
            {
                string ipAddress = Helper.GetIPAddress();
                string deptUserId = Convert.ToString(Session["DeptUserid"]); //"1";//
                var res = HB.MergSSinData(UniD, MerId, deptUserId, ipAddress);


                //if (res == "Password Generated Successfully")
                //{
                //	//string Message = "Your New Password Is : " + passWord;
                //	//CommonMethods.NewSms(Mobileno, Message, 0, "Dept Forgot Password", "User", Userid);
                //	// Helper.SendMail_WithHtml(Email, fromEmail, Message, "Login Credentials");
                //}
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                //Helper.AddtoLogFile("Forgot Password" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Post Merg SSin error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "MergSSinData", "HomeController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region SLo Changes

        public ActionResult GetSLODetails(string BenSnid)
        {
            try
            {
                var res = HB.GetSLODetails(BenSnid);

                if (res == null)
                {
                    return Content("");
                }
                else
                {
                    return Json(res, JsonRequestBehavior.AllowGet);
                }


                //return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                //CommonMethods.AddtoLogFile("Get SlO Details" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get SLO Details error due to : " + ex.Message, "BenSnid : " + Convert.ToString(BenSnid), Convert.ToString(ex.InnerException), "GetSLODetails", "HomeController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult UpdateSLOChange(string Oldslno, string Oldslnam, string newslno, string newslname, string benslno, string BMob)
        {

            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            var oldus = HB.GetUserInfo(Oldslno);
            var newus = HB.GetUserInfo(newslno);
            var beniDet = HB.GetBeniDetails(Convert.ToInt64(benslno));

            try
            {
                var res = HB.UpdateSLOChange(benslno, newslno, ipAddress);

                if (res.Code == "000")
                {

                    if (BMob != "" && BMob != null)
                    {
                        string MobileNumber = BMob;
                        //To Beneficiary - Congratulations !! As per your request New SLO has been tagged to your Reg.No/SSIN . For More Details Contact ( SLO Details ) 
                        string Message = "Congratulations !! As per your request New SLO has been tagged to your Reg.No/SSIN . For More Details Contact " + newslname + "," + newus.Mobileno + ".";

                        CommonMethods.SendBillSms(MobileNumber, Message, 0, "SLO Change", "Bene");
                    }
                    if (oldus != null)
                    {
                        if (oldus.Mobileno != "" && oldus.Mobileno != null)
                        {
                            string MobileNumber = oldus.Mobileno;

                            string Message = beniDet.BenFirstName + " " + beniDet.BenLastName + " " + beniDet.BenMiddleName + " " + beniDet.SSI_Number + " has been untagged  from your Account with effect  from " + DateTime.Now;
                            //To Old SLO - <Beneficiary name>  <SSIN> has been untagged  from your Account with effect  from ( Date of Beneficiary un Tagged )

                            CommonMethods.SendBillSms(MobileNumber, Message, 0, "Old SLO", "OldSlo");

                        }
                    }
                    if (newus != null)
                    {
                        if (newus.Mobileno != "" && newus.Mobileno != null)
                        {
                            string MobileNumber = newus.Mobileno;

                            string Message = beniDet.BenFirstName + " " + beniDet.BenLastName + " " + beniDet.BenMiddleName + " " + beniDet.SSI_Number + " has been tagged to your Account with effect from " + DateTime.Now; ;
                            //To New SLO - <Beneficiary name>  <SSIN> has been tagged to your Account with effect from ( Date of Beneficiary Tagged)
                            CommonMethods.SendBillSms(MobileNumber, Message, 0, "New SLO", "NewSlo");

                        }
                    }
                }
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                //CommonMethods.AddtoLogFile("VerifyBeneAddressDetails" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Update SLO Change error due to : " + ex.Message, "benslno : " + Convert.ToString(benslno), Convert.ToString(ex.InnerException), "UpdateSLOChange", "HomeController");

                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion
    }
}
