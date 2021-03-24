using Newtonsoft.Json;
using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSYNEW.Models;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace SSYNEW.Controllers
{
    public class AgentController : Controller
    {
        AgentBussiness AB = new AgentBussiness();
        HomeBussiness HB = new HomeBussiness();
        public ActionResult Index()
        {
            return View();
        }



        #region New user registration for agents
        //Author - Srikar

        public ActionResult AgentSignUp()
        {

            string userType = Convert.ToString(Session["UserType"]);
            string deptuserid = Convert.ToString(Session["DeptUserid"]);

            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                return RedirectToAction("Index", "Home");

            int DistID = Convert.ToInt32(Session["District"].ToString());
            SignUpUser usr = new SignUpUser();
            usr.district = HB.GetDistrictbyID(DistID);
            usr.muncorpname = HB.GetTotalblockBySubdiv(0);
            usr.wardname = HB.GetGP(-1);
            usr.subdivision = HB.Getsubdivision(0);
            try
            {

                usr.typename = HB.GetType("AL");
                string DeptUserID = Session["DeptUserid"].ToString();
                ViewBag.DeptUserID = DeptUserID;
                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AgentSignUp" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("New user registration for agents error due to : " + ex.Message, "deptuserid : " + Convert.ToString(deptuserid), Convert.ToString(ex.InnerException), "AgentSignUp", "AgentController");

                //ViewBag.SucessMes = Message;
                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region save user registration for  agents
        //Author - Srikar
        //
        [HttpPost]
        public ActionResult AgentSignUp(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("AD");
            usr.district = HB.GetDistrict();
            usr.muncorpname = HB.GetTotalblockBySubdiv(0);
            usr.subdivision = HB.Getsubdivision(0);
            usr.wardname = HB.GetGP(0);
            string DeptUserID = Session["DeptUserid"].ToString();
            ViewBag.DeptUserID = DeptUserID;
            try
            {
                int chkvalue = 0;
                string Fcp = Request.Form["FcpValue"].ToString();
                string MultiSubdiv = Request.Form["MultiSubdiv"].ToString();
                string MultiDis = Request.Form["MultiDis"].ToString();
                string MultiLoca = Request.Form["MultiLoca"].ToString();
                string MultiGp = Request.Form["MultiGp"].ToString();
                string CreatedBy = Request.Form["CreatedBy"].ToString();
                RegData.CreatedBy = Convert.ToInt32(CreatedBy);
                if (Fcp == "true")
                    chkvalue = 1;
                var res = AB.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca, MultiGp);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Agent Sign-up" + DateTime.Now + "Error : " + Message);


                CommonMethods.LogError("save user registration for  agents error due to : " + ex.Message, "Created By : " + Convert.ToString(RegData.CreatedBy), Convert.ToString(ex.InnerException), "AgentSignUp", "AgentController");
                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Edit persnol details for agents
        //Author - Srikar

        public ActionResult AgentEditDeptUserDetails()
        {
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("SA");
            usr.muncorpname = HB.GetTotalblocks();
            usr.district = HB.GetDistrict();
            usr.subdivision = HB.Gettotalsubdivisions();
            try
            {
                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AgentEditDeptUserDetails" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Edit persnol details for agents error due to : " + ex.Message, "Username : " + Convert.ToString(usr.UserName), Convert.ToString(ex.InnerException), "AgentEditDeptUserDetails", "AgentController");
                //ViewBag.SucessMes = Message;
                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region In this multiple dept can be edit by Super admin
        //Author - Srikar

        [HttpPost]
        public ActionResult AgentEditDeptUserDetails(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("SA");
            usr.district = HB.GetDistrict();
            usr.muncorpname = HB.GetTotalblocks();
            usr.subdivision = HB.Getsubdivision(0);
            string DeptUserid = Request.Form["Userid"].ToString();
            try
            {
                string UserTypeId = Request.Form["UserTypeId"].ToString();
                RegData.typeid = Convert.ToInt32(UserTypeId);
                string MultiSubdiv = Request.Form["MultiSubdiv"].ToString();
                string MultiDis = Request.Form["MultiDis"].ToString();
                string MultiLoca = Request.Form["MultiLoca"].ToString();
                var res = HB.UpdateUser(RegData, DeptUserid, MultiSubdiv, MultiDis, MultiLoca);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Department Edit" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Agent Edit Dept User Details error due to : " + ex.Message, "UserTypeId : " + Convert.ToString(Request.Form["UserTypeId"]), Convert.ToString(ex.InnerException), "AgentEditDeptUserDetails", "AgentController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Agent dashboard
        [CheckLogins]
        //Agent Dashboard
        public ActionResult AgentDashboard()  // string SessionValue
        {
            try
            {
                string SessionValue = Convert.ToString(Request.Cookies["SessionValue"].Value);
                //if (SessionValue == "" || SessionValue == null)
                //{
                //		return RedirectToAction("Index", "Home");
                //}
                if (Session["UserSession"].ToString() == "" || Session["UserSession"].ToString() == null)
				{
					return RedirectToAction("Index", "Home");
				}
				else
					SessionValue = Session["UserSession"].ToString();

				if (Session["UserSession"].ToString() == SessionValue)
                {
                    string userType = Convert.ToString(Session["UserType"]);
                    string deptuserid = Convert.ToString(Session["DeptUserid"]);

                    if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                        return RedirectToAction("Index", "Home");
                    string ChangePwd = Session["ChangePwd"].ToString();
                    string CheckSkip = Session["SkipAdditionaldata"].ToString();
                    if (ChangePwd == "1")
                        return RedirectToAction("PersonalPassWordChange", "Login");
                    var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                    if (ResultData.Count != 0)
                    {
                        string Usertype = Session["UserType"].ToString();
                        if (Usertype == "8" || Usertype == "9")
                        {
                            var res = AB.GetTotAgentAdditionalDet(Convert.ToInt32(deptuserid));
                            if (CheckSkip == "No")
                            {
                                if (res == null)
                                {
                                    Session["ChkAddData"] = "1";
                                    return RedirectToAction("AgentAdditionalData", "Agent");
                                }
                                else
                                {
                                    if (res.Status == 0 || res.Status == 2)
                                    {
                                        Session["ChkAddData"] = "1";
                                        return RedirectToAction("AgentAdditionalData", "Agent");
                                    }
                                }
                            }
                        }
                        ViewBag.deptuserid = deptuserid; 
                        ViewBag.UserType = Convert.ToString(Session["UserType"]); 

						 var Count = HB.GetNotyCount(Convert.ToInt16(Usertype), Convert.ToInt16(deptuserid));
                        Session["UnReadNotyCount"] = Count;

                        return View();
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
                else
                {
                    return RedirectToAction("Index", "Home");

                }
            }

            catch(Exception ex)
            {
                return RedirectToAction("Index", "Home");

            }

        }
        #endregion

        #region agent edit persnol details view
        public ActionResult EditProfile()
        {
            SignUpUser usr = new SignUpUser();
            try
            {
                string DeptUserid = Session["DeptUserid"].ToString();
                var res = HB.GetDeptdet(Convert.ToInt32(DeptUserid));
                usr.FirstName = res.Firstname;
                usr.LastName = res.Lastname.Trim();
                usr.MobileNumber = res.Mobileno.Trim();
                usr.Email = res.Email.Trim();
                usr.Designation = res.Designation;
                usr.RoleName = res.UserTypeName;
                usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                usr.muncorpname = HB.GetBlockById(Convert.ToInt16(res.Location));
                int LocationType = HB.GetLocType(Convert.ToInt32(DeptUserid));
                ViewBag.LocationType = LocationType;
                usr.wardname = HB.GetGP(0);
                string LanNumber = res.LandlineNumber;
                string[] landline = LanNumber.Split('-');

                if (LanNumber != null && LanNumber != "")
                {
                    usr.Code = landline[0];
                    usr.Landline = landline[1];
                }
                else
                {
                    usr.Code = "";
                    usr.Landline = "";
                }


                ViewBag.DeptUserid = DeptUserid;
                ViewBag.UserType = Session["UserType"].ToString();

                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("EditProfile" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("agent edit persnol details view error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "EditProfile", "AgentController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region update agent persnol details
        [HttpPost]
        public ActionResult EditProfile(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            string DeptUserid = Session["DeptUserid"].ToString();
            var res = HB.GetDeptdet(Convert.ToInt32(DeptUserid));
            usr.FirstName = res.Firstname;
            usr.LastName = res.Lastname.Trim();
            usr.MobileNumber = res.Mobileno.Trim();
            usr.Email = res.Email.Trim();
            usr.Designation = res.Designation;
            usr.RoleName = res.UserTypeName;
            usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
            usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
            usr.muncorpname = HB.GetBlockById(Convert.ToInt16(res.Location));
            int LocationType = HB.GetLocType(Convert.ToInt32(DeptUserid));
            ViewBag.LocationType = LocationType;
            usr.wardname = HB.GetGP(0);
            string LanNumber = res.LandlineNumber;
            string[] landline = LanNumber.Split('-');
            usr.Code = landline[0];
            usr.Landline = landline[1];
            ViewBag.DeptUserid = DeptUserid;
            ViewBag.UserType = Session["UserType"].ToString();
            try
            {
                string MultiGp = Request.Form["MultiGp"].ToString();
                string MultiLoca = Request.Form["MultiLoca"].ToString();
                var res1 = AB.AgentEditProfile(RegData, DeptUserid, MultiGp, MultiLoca);
                // return Content(res);
                ViewBag.SucessMes = res1;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Edit Profile" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("update agent persnol details error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "EditProfile", "AgentController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Get benificiary details based on id
        public ActionResult GetBenDetails(string id, string Type = "")
        {
            try
            {
                var result = AB.GetBenDetails(id, Type);
                if (result == null)
                {
                    return Content("");
                }
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }

        }
        #endregion

        #region get status list 
        public ActionResult GetStatusList()
        {
            try
            {
                string deptuserid = Session["DeptUserid"].ToString();
                string UserType = Session["UserType"].ToString();
                var result = AB.GetStatusList(Convert.ToInt32(deptuserid), Convert.ToInt32(UserType));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Status" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("get status list error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetStatusList", "AgentController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get scheme status list
        public ActionResult GetSchemeStatusList()
        {
            try
            {
                string deptuserid = Session["DeptUserid"].ToString();
                string UserType = Session["UserType"].ToString();
                var result = AB.GetSchemeStatusList(Convert.ToInt32(deptuserid), Convert.ToInt32(UserType));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Scheme Status" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get scheme status list error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetSchemeStatusList", "AgentController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult BenReg()
        {
            string userType = Convert.ToString(Session["UserType"]);
            string deptuserid = Convert.ToString(Session["DeptUserid"]);


            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                return RedirectToAction("Index", "Home");

            try
            {
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {


                    ViewBag.deptuserid = deptuserid;
                    Session["DirectReg"] = "1";
                    if (Session["ExcelExpection"] != null)
                    {
                        ViewBag.ExcelExpection = Session["ExcelExpection"];
                        Session["ExcelExpection"] = null;
                    }
                    else
                    { ViewBag.ExcelExpection = ""; }

                    if (Session["ChkAddData"].ToString() == "1" && Session["SkipAdditionaldata"].ToString() == "No")
                        return RedirectToAction("Index", "Home");
                    else
                        return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("BenReg" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("BenReg error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "BenReg", "AgentController");

                return View();
            }
        }
        #endregion

        #region Payment for schemes
        public ActionResult Payment(string PaidBy, string PaidTo, string Tenure, string Amount, string Scheme)
        {
            var res = AB.SchemPayment(PaidBy, PaidTo, Tenure, Amount, Scheme);
            return Content(res);
        }
        #endregion

        #region Payment  recipt
        public ActionResult Paymentreciept(string result)
        {
            var res = AB.Paymentrecpt(result);
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region get payment scheme details based on id
        public ActionResult getpaymentScheme(string id)
        {
            int CheckPaynet = HB.CheckPayment(Convert.ToInt64(id));
            int CheckSsyPayment = HB.CheckSSYPayment(Convert.ToInt64(id));
            var ChkScheme = HB.CheckSchemStatus(Convert.ToInt64(id));
            if (ChkScheme == null)
            {
                return Content(CheckPaynet + "-" + "0");
            }
            return Content(CheckPaynet + "-" + "1" + "-" + ChkScheme.SchemeStatus + "-" + CheckSsyPayment);
        }
        #endregion

        #region
        public ActionResult PaymentToBen()
        {
            return View();
        }
        #endregion


        #region Agent additional information view
        public ActionResult AgentAdditionalData()
        {
            string userType = Convert.ToString(Session["UserType"]);
            string deptuserid = Convert.ToString(Session["DeptUserid"]);


            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                return RedirectToAction("Index", "Home");


            try
            {
                var res = HB.GetDeptdet(Convert.ToInt32(deptuserid));
                string RegType = Session["CheckRegType"].ToString();
                ViewBag.RegType = RegType;
                ViewBag.FName = res.Firstname;
                ViewBag.LName = res.Lastname;
                ViewBag.MobileNumber = res.Mobileno;
                // ViewBag.Designation = res.Designation;
                ViewBag.Location = res.BlockName;
                ViewBag.DistName = res.DistrictName;
                //  ViewBag.RoleName = res.UserTypeName;
                ViewBag.SubdivName = res.SubDivisionName;
                ViewBag.LandNumber = res.LandlineNumber;
                ViewBag.SucessMes = "";
                ViewBag.deptuserid = deptuserid;
                var Datediff = AB.GetDateDiff(Convert.ToInt32(deptuserid));
                int SubtractDate = (30 - Convert.ToInt16(Datediff));
                ViewBag.SubtractDate = SubtractDate;
                ViewBag.dateDiff = Datediff;
                Session["DiffDate"] = SubtractDate;
                return View();
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("AgentAdditionalData" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Agent additional information view error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "AgentAdditionalData", "AgentController");

                return View();
            }

        }
        #endregion

        #region update agent additional data
        [HttpPost]
        public ActionResult AgentAdditionalData(IEnumerable<HttpPostedFileBase> files)
        {
            try
            {
                string Dob = Request.Form["Dob"].ToString();
                string Pan = Request.Form["Pan"].ToString();
                string Aadhar = Request.Form["Aadhar"].ToString();
                string BankName = Request.Form["BankName"].ToString();
                string BrnchName = Request.Form["BrnchName"].ToString();
                string IfscCode = Request.Form["IfscCode"].ToString().ToUpper();
                string ActNumber = Request.Form["ActNumber"].ToString();
                string PinCode = Request.Form["PinCode"].ToString();
                string Address = Request.Form["Address"].ToString();
                string DeptUserId = Session["DeptUserid"].ToString();
                string Gender = Request.Form["Gender"].ToString();
                string MarSt = Request.Form["MarSt"].ToString();
                string HFName = Request.Form["HFName"].ToString();
                string MobileNumber = Request.Form["MobileNum"].ToString();
                string AadharFile = string.Empty;
                string PanFile = string.Empty;
                string DDDocument = string.Empty;
                string Photo = string.Empty;
                string Signature = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");
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
                            if (i == 1)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AgentAadhar/"), DeptUserId + "_" + Tdate + "_" + fileName);
                                AadharFile = "/UploadFiles/AgentAadhar/" + DeptUserId + "_" + Tdate + "_" + fileName;
                            }
                            if (i == 0)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AgentPancard/"), DeptUserId + "_" + Tdate + "_" + fileName);
                                PanFile = "/UploadFiles/AgentPancard/" + DeptUserId + "_" + Tdate + "_" + fileName;
                            }
                            if (i == 2)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AgentDD/"), DeptUserId + "_" + Tdate + "_" + fileName);
                                DDDocument = "/UploadFiles/AgentDD/" + DeptUserId + "_" + Tdate + "_" + fileName;
                            }
                            if (i == 3)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AgentPhoto/"), DeptUserId + "_" + Tdate + "_" + fileName);
                                Photo = "/UploadFiles/AgentPhoto/" + DeptUserId + "_" + Tdate + "_" + fileName;
                            }
                            if (i == 4)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AgentSignature/"), DeptUserId + "_" + Tdate + "_" + fileName);
                                Signature = "/UploadFiles/AgentSignature/" + DeptUserId + "_" + Tdate + "_" + fileName;
                            }
                            file.SaveAs(SavePath);
                            FilePath.Add(SavePath);
                            NamesSave.Add(name);
                        }
                    }
                }
                var res = AB.SaveAgentAdditionalDet(DeptUserId, Gender, Address, PinCode, Dob, BankName, BrnchName, ActNumber, IfscCode, Aadhar, AadharFile, Pan, PanFile, DDDocument, MarSt, HFName, Photo, Signature, MobileNumber);
                ViewBag.SucessMes = res;
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Agent AdditionalData" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("update agent additional data error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "AgentAdditionalData", "AgentController");

                ViewBag.SucessMes = Message;
                return View();
            }
        }
        #endregion

        #region Get agent additional details
        public ActionResult GetAgentAdditionalDet(int DeptUserID)
        {
            var res = AB.GetAgentAdditionalDet(DeptUserID);
            if (res == null)
                return Json("0", JsonRequestBehavior.AllowGet);
            else
                return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Agent application view
        public ActionResult AgentApllications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            string deptuserid = Session["DeptUserid"].ToString();
            if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                return RedirectToAction("Index", "Home");
            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {

                ViewBag.deptuserid = deptuserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region Get agent applications
        public ActionResult GetAgentApllications(int deptuserid, int Status)
        {
            try
            {
                var res = AB.GetAgentApplications(deptuserid, Status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Get Agent Application" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get agent applications error due to : " + ex.Message, "deptuserid : " + Convert.ToString(deptuserid), Convert.ToString(ex.InnerException), "GetAgentApllications", "AgentController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get agent application by id
        public ActionResult GetAgentApplicationsById(int Id)
        {
            var res = AB.GetAgentApplicationsById(Id);
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Update agent application 
        public ActionResult AgentStatusChange(int Status, int Id, string Mobile, string Email, string Reason, string ARNumber)
        {
            try
            {
                var res = AB.AgentStatusChange(Status, Id, Reason, ARNumber);

                if (res.Message == "Application Approved" || res.Message == "Application Rejected")
                {
                    string Message = "";
                    if (res.Message == "Application Approved")
                        Message = "Your Application Is Approved," + "Your New User Id :" + ARNumber;
                    if (res.Message == "Application Rejected")
                        Message = "Your Application Is Rejected";
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    CommonMethods.NewSms(Mobile, Message, 0, "Agent Status Change", "Agent", Convert.ToString(res.UserId));
                    if (!string.IsNullOrEmpty(Email))
                        Helper.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");
                }
                return Json(res.Message, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Agent Status Change" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Update agent application error due to : " + ex.Message, "ARNumber : " + Convert.ToString(ARNumber), Convert.ToString(ex.InnerException), "AgentStatusChange", "AgentController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult SkipAdditionalData()
        {
            Session["SkipAdditionaldata"] = "Yes";
            return RedirectToAction("AgentDashboard", "Agent");
            // return View();
        }
        #endregion

        #region
        public ActionResult GetSchemAndPaySt(string BenSno)
        {
            try
            {
                int CheckPaynet = HB.CheckPayment(Convert.ToInt64(BenSno));
                int ChkScheme = HB.CheckSchem(Convert.ToInt64(BenSno));
                return Content(CheckPaynet + "," + ChkScheme);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
        }
        #endregion

        #region
        public ActionResult UnsubmittedApp()
        {
            try
            {
                string DeptUserID = Session["DeptUserid"].ToString();

                var res = AB.UnsubmittedApp(DeptUserID);

                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);

                return Content(Message);
            }


        }
        #endregion

        #region Get benificiary details based on id

        public ActionResult GetTempBenDet(string Id)
        {

            try
            {
                var res = AB.GetTempBenDet(Id);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);


            }

        }
        #endregion

        #region Get  benificiary address details based on id
        public ActionResult BenTempAddressDet(string Id)
        {
            try
            {
                var res = AB.BenTempAddressDet(Id);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);


            }

        }
        #endregion

        #region Get benificiary family details based on id

        public ActionResult GetBenFamilyTemp(string Id)
        {
            try
            {
                var res = AB.GetBenFamilyTemp(Id);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }

        #endregion

        #region Get benificiary nominee deatils based on id

        public ActionResult GetBenNomineeTemp(string Id)
        {
            try
            {
                var res = AB.GetBenNomineeTemp(Id);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }


        #endregion

        #region Other registration for agents
        //Author - Ranjit Kumar

        public ActionResult OtherAgentSignUp()
        {
            SignUpUser usr = new SignUpUser();

            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                string deptuserid = Convert.ToString(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                    return RedirectToAction("Index", "Home");
                usr.typename = HB.GetType("AL");
                //var Dist = HB.GetDeptUserbyId(deptuserid.ToString());
                int DistID = Convert.ToInt32(Session["District"].ToString());
                usr.district = HB.GetDistrictbyID(DistID);//HB.GetDistrictbyID(Convert.ToInt16(Dist.DistId));
                usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                usr.wardname = HB.GetGP(-1);
                usr.subdivision = HB.Getsubdivision(0);
                string DeptUserID = Session["DeptUserid"].ToString();
                ViewBag.DeptUserID = DeptUserID;
                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("OtherAgentSignUp" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Other registration for agents error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "OtherAgentSignUp", "AgentController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion


        #region save user registration for Others agents
        //Author - Srikar
        //
        [HttpPost]
        public ActionResult OtherAgentSignUp(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("AD");
            usr.district = HB.GetDistrict();
            usr.muncorpname = HB.GetTotalblockBySubdiv(0);
            usr.subdivision = HB.Getsubdivision(0);
            usr.wardname = HB.GetGP(0);
            string DeptUserID = Session["DeptUserid"].ToString();
            ViewBag.DeptUserID = DeptUserID;


            try
            {
                int chkvalue = 0;
                string Fcp = Request.Form["FcpValue"].ToString();
                string MultiSubdiv = Request.Form["MultiSubdiv"].ToString();
                string MultiDis = Request.Form["MultiDis"].ToString();
                string MultiLoca = Request.Form["MultiLoca"].ToString();
                string MultiGp = Request.Form["MultiGp"].ToString();
                string CreatedBy = Request.Form["CreatedBy"].ToString();
                RegData.CreatedBy = Convert.ToInt32(CreatedBy);
                //if (Fcp == "true")
                chkvalue = 0;
                var res = AB.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca, MultiGp, RegData.UserName);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("OtherAgentSignUp Submit" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("save user registration for Others agents error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "OtherAgentSignUp", "AgentController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Other user personal details View
        public ActionResult ViewProfile()
        {
            SignUpUser usr = new SignUpUser();

            try
            {
                string DeptUserid = Session["DeptUserid"].ToString();
                if (string.IsNullOrEmpty(DeptUserid))
                    return RedirectToAction("Index", "Home");

                var res = HB.GetDeptdet(Convert.ToInt32(DeptUserid));
                usr.FirstName = res.Firstname;
                usr.LastName = res.Lastname.Trim();
                //usr.Email = res.Email.Trim();
                usr.Designation = res.Designation;
                usr.RoleName = res.UserTypeName;
                usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));
                usr.muncorpname = HB.GetBlockById(Convert.ToInt16(res.Location));
                int LocationType = HB.GetLocType(Convert.ToInt32(DeptUserid));
                ViewBag.LocationType = LocationType;
                usr.wardname = HB.GetGP(0);
                //string LanNumber = res.LandlineNumber;
                //string[] landline = LanNumber.Split('-');
                //usr.Code = landline[0];
                //usr.Landline = landline[1];
                ViewBag.DeptUserid = DeptUserid;
                ViewBag.UserType = Session["UserType"].ToString();
                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("OtherAgentSignUp Submit" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Other user personal details View error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "ViewProfile", "AgentController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion
        public ActionResult Claims()
        {
            return View();
        }
        public ActionResult TrackClaims()
        {
            return View();
        }
        public ActionResult ClaimEntry()
        {
            return View();
        }
        public ActionResult DraftClaims()
        {
            return View();
        }

        public ActionResult AgentReferral()
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
		public ActionResult submittedlegacypfdetails()
		{
			return View();
		}

		public ActionResult gripsresponse(string ENCDATA, string SERVICE_PROVIDER)
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
			ViewBag.ENCDATA = ENCDATA;
			ViewBag.SERVICE_PROVIDER = SERVICE_PROVIDER;
			return View();
		}

		public ActionResult gripsdoubleverificationresponse(string xmlString, string Merchant_Code)
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
			ViewBag.ENCDATA = xmlString;
			ViewBag.SERVICE_PROVIDER = Merchant_Code;
			return View();
		}


		#region Claim status for slo
		public ActionResult GetSLOClaimStatusList()
		{
			try
			{
				//int usertypeid = Convert.ToInt32(Session["UserType"]);
				//int Location = Convert.ToInt32(Session["Location"]);
				//int SubDiv = Convert.ToInt32(Session["SubDiv"]);
				//int District = Convert.ToInt32(Session["District"]);
				string DeptUserid = Session["DeptUserid"].ToString();
				//var Mapping = HB.GetMapDetails(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
				var res = HB.GetSLOClaimStatusList(Convert.ToInt32(DeptUserid));
				return Json(res, JsonRequestBehavior.AllowGet);
			}
			catch (Exception ex)
			{
                //Helper.AddtoLogFile("Get Claim Status List" + DateTime.Now + "Error : " + ex.Message.ToString());

                CommonMethods.LogError("Claim status for slo error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "GetSLOClaimStatusList", "AgentController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
			}
		}

		#endregion
	}
}