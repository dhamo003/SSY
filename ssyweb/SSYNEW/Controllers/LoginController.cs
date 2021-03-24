using Newtonsoft.Json;
using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSYNEW;
using SSYNEW.Models;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace SSY.Controllers
{
    public class LoginController : Controller
    {
        //
        // GET: /Login/
        HomeBussiness HB = new HomeBussiness();
        RegistrationBussiness Rb = new RegistrationBussiness();
        LoginBussiness lb = new LoginBussiness();

        #region
        public ActionResult Index()
        {
            return RedirectToAction("Index", "Home");
        }
        #endregion



        #region User Registration
        public ActionResult SignUp()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    SignUpUser usr = new SignUpUser();
                    string DeptUserID = Session["DeptUserid"].ToString();
                    usr.typename = HB.GetType("SA");
                    usr.district = HB.GetDistrict();
                    usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                    usr.subdivision = HB.Getsubdivision(0);
                    ViewBag.SucessMes = "";
                    ViewBag.DeptUserID = DeptUserID;
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
                //CommonMethods.AddtoLogFile("SignUp" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("User Registration error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "SignUp", "LoginController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region Save user registration
        //Author - Srikar
        //New user registration for Dept
        [HttpPost]
        public ActionResult SignUp(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("SA");
            usr.district = HB.GetDistrict();
            usr.muncorpname = HB.GetTotalblockBySubdiv(0);
            usr.subdivision = HB.Getsubdivision(0);
            string DeptUserID = Session["DeptUserid"].ToString();
            ViewBag.DeptUserID = DeptUserID;
            try
            {
                int chkvalue = 0;
                string Fcp = Request.Form["FcpValue"].ToString();
                string MultiSubdiv = Request.Form["MultiSubdiv"].ToString();
                string MultiDis = Request.Form["MultiDis"].ToString();
                string MultiLoca = Request.Form["MultiLoca"].ToString();
                string CreatedBy = Request.Form["CreatedBy"].ToString();
                RegData.CreatedBy = Convert.ToInt32(CreatedBy);
                if (Fcp == "true")
                    chkvalue = 1;
                var res = HB.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("New User Registration" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Signup error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "SignUp", "LoginController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Edit department user details
        //Author - Srikar

        public ActionResult EditDeptUserDetails()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    SignUpUser usr = new SignUpUser();
                    usr.typename = HB.GetType("SA");
                    usr.muncorpname = HB.GetTotalblocks();
                    usr.district = HB.GetDistrict();
                    usr.subdivision = HB.Gettotalsubdivisions();
                    ViewBag.SucessMes = "";
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
                //CommonMethods.AddtoLogFile("EditDeptUserDetails" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Edit department user details error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "EditDeptUserDetails", "LoginController");

                return RedirectToAction("Index", "Home");

            }
        }
        #endregion

        #region User deatils edit by Super admin
        //Author - Srikar

        [HttpPost]
        public ActionResult EditDeptUserDetails(SignUpUser RegData)
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            SignUpUser usr = new SignUpUser();
            usr.typename = HB.GetType("SA");
            usr.district = HB.GetDistrict();
            usr.muncorpname = HB.GetTotalblocks();
            usr.subdivision = HB.Getsubdivision(0);
            string DeptUserid = Request.Form["Userid"].ToString();
            string UpdatedBy = Session["DeptUserid"].ToString();
            RegData.UpdatedBy = Convert.ToInt32(UpdatedBy);
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
                //CommonMethods.AddtoLogFile("Dept Edit " + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("User deatils edit by Super admin error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Request.Form["Userid"]), Convert.ToString(ex.InnerException), "EditDeptUserDetails", "LoginController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region User password change by super admin
        //PassWord Change
        public ActionResult DeptPassWordChange()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    SignUpUser usr = new SignUpUser();
                    ViewBag.SucessMes = "";
                    ViewBag.usertype = userType;
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
                //CommonMethods.AddtoLogFile("DeptPassWordChange" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("User password change by super admin error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "DeptPassWordChange", "LoginController");

                return RedirectToAction("Index", "Home");

            }

        }
        #endregion

        #region This is for Super Admin,he/she can change password to any Roles
        //Author - Srikar

        [HttpPost]
        public ActionResult DeptPassWordChange(SignUpUser RegData)
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            SignUpUser usr = new SignUpUser();
            try
            {
                string DeptUserid = Request.Form["Userid"].ToString();
                string UserTypeid = Request.Form["UserTypeid"].ToString();
                string Mobilenumber = Request.Form["Mobilenumber"].ToString();
                string Email = Request.Form["Email"].ToString();
                string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                usr.Name = "";
                usr.Designation = "";
                usr.NewPassWord = "";
                var res = HB.DeptPassWordChange(RegData, DeptUserid);
                if (res == "Password Changed Successfully.." && UserTypeid != "10")
                {
                    string Message = RegData.Name + " changed your password from " + RegData.passwrd + "to" + RegData.NewPassWord;
                    CommonMethods.NewSms(Mobilenumber, Message, 0, "User Forgot Password", "User", DeptUserid);
                    CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Password Changed");
                }
                if (res == "Password Changed Successfully.." && UserTypeid == "10")
                {
                    res = "Password Changed Successfully, New password is :" + RegData.NewPassWord;
                }
                //PassWord Chaged Successfully..
                ViewBag.SucessMes = res;
                ViewBag.usertype = userType;
                return View(usr);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("Dept Password Changed " + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Dept PassWord Change error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Request.Form["Userid"]), Convert.ToString(ex.InnerException), "DeptPassWordChange", "LoginController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region
        public ActionResult RoleCreation(string Name)
        {
            string Res = HB.CreateRole(Name, 1);
            return Content(Res);
        }
        #endregion

        #region User Privileges
        public ActionResult UserPrivilege(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    usr.typename = HB.GetType("0");
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
                //CommonMethods.AddtoLogFile("User Privilege" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("User Privileges error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "UserPrivilege", "LoginController");

                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Personal PassWord Change  by user view
        public ActionResult PersonalPassWordChange()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                SignUpUser user = new SignUpUser();
                string Userid = Session["DeptUserid"].ToString();
                string ChangePwd = Session["ChangePwd"].ToString();
                string Usertype = Session["UserType"].ToString();
                if (ChangePwd == "1")
                    ViewBag.ChangePwd = "You have to change your password";
                else
                    ViewBag.ChangePwd = "";
                var res = HB.GetDeptUserDet(Userid);
                user.Name = res.Firstname + " " + res.Lastname;
                user.userid = res.Userid;
                user.Designation = res.Designation;
                ViewBag.SucessMes = "";
                ViewBag.Usertype = Usertype;
                return View(user);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("PersonalPassWordChange" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Personal PassWord Change  by user view error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "PersonalPassWordChange", "LoginController");

                return RedirectToAction("Index", "Home");

            }

        }
        #endregion

        #region Submit  Personal PassWord Change  by user
        //Author - Sunitha
        //
        [HttpPost]
        public ActionResult PersonalPassWordChange(SignUpUser RegData)
        {
            SignUpUser user = new SignUpUser();
            try
            {
                CommonMethods.AddtoLogFile("Personal Password Change" + "MobileNumber : " + RegData.MobileNumber + ", PassWord : " + RegData.passwrd);
                string Usertype = Session["UserType"].ToString();
                ViewBag.Usertype = Usertype;
                var res = HB.DeptPassWordChange(RegData, Convert.ToString(RegData.userid));
                ViewBag.SucessMes = res;
                return View(user);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("Personal Password Change" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Submit  Personal PassWord Change  by user error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "PersonalPassWordChange", "LoginController");

                ViewBag.SucessMes = Message;
                return View(user);
            }
        }
        #endregion

        #region forgot password view
        public ActionResult ForgotPass()
        {
            try
            {
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("ForgotPass" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("forgot password view error due to : " + ex.Message, " - ", Convert.ToString(ex.InnerException), "ForgotPass", "LoginController");

                return RedirectToAction("Index", "Home");

            }

        }

        [HttpGet]
        public ActionResult GetDeptUserForgetPasswordDetails(string Userid)
        {
            try
            {

                var res = HB.GetDeptUserByUsercode(Userid);
                if (res != null)
                    return Json(new {Status=200, UserId = res.Userid, MobileNumber = res.Mobileno, Name = res.Firstname + " " + res.Lastname }, JsonRequestBehavior.AllowGet);
                else
                    return Json(new { Status = 999,Message="User not exist in SSY system" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetDeptUser" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDeptUser error due to : " + ex.Message, "Userid : " + Convert.ToString(Userid), Convert.ToString(ex.InnerException), "GetDeptUser", "LoginController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public ActionResult GetBeniForgetPasswordDetails(string SSIN)
        {
            try
            {
                var res = Rb.GetBeniDetBySSIN(SSIN, "SSIN");
                if (res != null)
                    return Json(new { Status = 200, UserId = res.BenSno, MobileNumber = res.BenMobileNo, Name = res.BenFirstName + " " + res.BenLastName }, JsonRequestBehavior.AllowGet);
                else
                    return Json(new { Status = 999, Message = "User not exist in SSY system" }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetDeptUser" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDeptUser error due to : " + ex.Message, "Userid : " + Convert.ToString(SSIN), Convert.ToString(ex.InnerException), "GetDeptUser", "LoginController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region
        [CheckLogins]
        public ActionResult GetDeptUser(string Userid)
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                string deptUserid = Convert.ToString(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptUserid))
                    return Json("Session not valid", JsonRequestBehavior.AllowGet);

                var res = HB.GetDeptUserDet(Userid);
                if (res == null)
                    return Json("0", JsonRequestBehavior.AllowGet);
                else
                    return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetDeptUser" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDeptUser error due to : " + ex.Message, "Userid : " + Convert.ToString(Userid), Convert.ToString(ex.InnerException), "GetDeptUser", "LoginController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region Get dept user details uniquely
        //Author - Srikar

        public ActionResult GetDeptUserByUniqId(string Userid)
        {
            try
            {
                var res = HB.GetDeptUserByUniqId(Userid);
                if (res == null)
                    return Json("0", JsonRequestBehavior.AllowGet);
                else
                    return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetDeptUserByUniqId" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get subdivision by ditsrict
        public ActionResult GetSubdivisionJSON(int ID)
        {
            try
            {
                return Json(HB.Getsubdivision(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetSubdivisionJSON" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }

        }
        #endregion

        #region Benificiary password change
        public ActionResult BeniPassWordChange()
        {
            try
            {
                SignUpUser usr = new SignUpUser();
                string userid = Session["Userid"].ToString();
                var res = Rb.GetEditBenDetails(Convert.ToInt32(userid));
                //change
                usr.userid = Convert.ToInt32(res.BenSno);
                usr.Name = res.BenFirstName + " " + res.BenLastName;
                ViewBag.SucessMes = "";
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("BeniPassWordChange" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region Submit  benificiary password change
        //Author - Sunitha

        [HttpPost]
        public ActionResult BeniPassWordChange(SignUpUser RegData)
        {
            SignUpUser usr = new SignUpUser();
            try
            {
                usr.Name = "";
                usr.Designation = "";
                usr.NewPassWord = "";
                var res = HB.beniPassWordChange(RegData);
                ViewBag.SucessMes = res;
                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Benificiary Password Change" + DateTime.Now + "Error : " + Message);
                ViewBag.SucessMes = Message;
                return View(usr);
            }
        }
        #endregion

        #region Send OTP to registered Mobile number
        //Author - Srikar

        public ActionResult SenOtp(string MobileNumber, string logintype)
        {
            try
            {
                if (logintype == "Bank Account")
                {
                    var res1 = HB.getlogindetals(MobileNumber, logintype);
                    if (res1 == "" || res1 == null)
                    {
                        return Content("Invalid Account Number");
                    }
                    else
                    {
                        MobileNumber = res1;
                    }
                }
                if (logintype == "Mobile Number")
                {
                    var res1 = HB.getlogindetals(MobileNumber, logintype);
                    if (res1 == "" || res1 == null)
                    {
                        return Content("'No Login Found With Provided Mobile Number'");
                    }
                }
                var Det = HB.GetDeatilsByMobileNumber(MobileNumber);
                var res = Rb.SendOtp(MobileNumber, Det.Email);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Send OTP" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }
        #endregion

        #region Verifying OTP
        //Author - Srikar

        public ActionResult VerifiyOtp(string MobileNumber, string OTP)
        {
            try
            {
                var res = Rb.Verifyotp(MobileNumber, OTP);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Verify OTP" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }
        #endregion

        #region Check enter password is correct or wrong
        public ActionResult PasswordCheck(int uid, string oldPassword)
        {
            try
            {
                var res = HB.PasswordCheck(uid, oldPassword);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Password Check" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }
        #endregion

        #region
        public ActionResult Login()
        {
            //if (ConfigurationManager.AppSettings["MaintenanceAct"] == "1")
            //	return RedirectToAction("HomeIndex", "Registration");
            //else
            //{
            try
            {
                string siteCount = Convert.ToString(Session["sitecount"]);
                string ssinCount = Convert.ToString(Session["SSINCount"]);
                if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
                    return RedirectToAction("Index", "Home");
                return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
            //}
        }
        //public ActionResult Login()
        //{
        //	try
        //	{
        //		string siteCount = Convert.ToString(Session["sitecount"]);
        //		string ssinCount = Convert.ToString(Session["SSINCount"]);
        //		if (string.IsNullOrEmpty(siteCount) || string.IsNullOrEmpty(ssinCount))
        //			return RedirectToAction("Index", "Home");
        //		return View();
        //	}
        //	catch (Exception ex)
        //	{
        //		return RedirectToAction("Index", "Home");
        //	}

        //}

        #endregion

        #region
        [HttpPost]
        public ActionResult BeneficiaryLogin(string modeldata)
        {
            LoginResponse Result = new LoginResponse();
            //var loginLimit = Convert.ToInt32(ConfigurationManager.AppSettings["LoginLimit"]);
            //var LoginCount = HB.GetLoginCounts();
            //var LCount = 0;
            //foreach (var item in LoginCount)
            //{
            //    LCount += Convert.ToInt32(item.TotalCount);
            //}
            //if (LCount > loginLimit)
            //{
            //    Result.Code = "777";
            //    Result.Message = ConfigurationManager.AppSettings["LoginAlertMessage"];
            //    return Json(Result, JsonRequestBehavior.AllowGet);
            //}

            var dict = new JavaScriptSerializer().Deserialize<string>(modeldata);
            UserLoginViewModel model = JsonConvert.DeserializeObject<UserLoginViewModel>(AESEncrytDecry.DecryptStringAES(dict));
            string userName = model.userName;
            string passWord = model.passWord;
            string loginType = model.loginType;
            string userId = model.userId;
            try
            {
                CommonMethods.AddtoLogFile("Benificiary Login" + DateTime.Now + "UserName :" + userName + ",Password : " + passWord + ",LoginType " + loginType);

                string loginResult = string.Empty;
                string mobileNumber = string.Empty;
                string ipAddress = Helper.GetIPAddress();

                string userSession = Helper.regenerateId();

                Session["UserSession"] = userSession.ToString();


                loginResult = lb.GetUser(userName, passWord, loginType, ipAddress, userSession);
                if (loginResult != "0")
                {
                    Result.Code = "999";
                    Result.Message = loginResult;
                    return Json(Result, JsonRequestBehavior.AllowGet);
                }

                var data = Rb.GetBeniDetBySSIN(userName, loginType);
                mobileNumber = data.BenMobileNo;

                if (data.SSI_Number == null)
                {
                    Session["SSIN"] = data.BenTempRegNo;

                }
                else
                {
                    Session["SSIN"] = data.SSI_Number;

                }


                Session["UserType"] = 14; //10
                Session["UserMobileNo"] = data.BenMobileNo;
                Session["Userid"] = data.BenSno;
                Session["BenName"] = data.BenFirstName + " " + data.BenLastName;
                Session["LoginType"] = "Benficiary";
                Session["BenOccupation"] = data.BenOccupation;

                User user = new User { FirstName = data.BenFirstName, LastName = data.BenLastName, Id = Convert.ToInt32(data.BenSno), Password = data.BenUserPwd, Username = data.SSI_Number };
                var client = new HttpClient();
                var json = new JavaScriptSerializer().Serialize(user);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var url = ConfigurationManager.AppSettings["api"] + "authenticate";
                var response = client.PostAsync(url, content).Result;
                var result = response.Content.ReadAsStringAsync().Result;
                var userInfo = JsonConvert.DeserializeObject<User>(result);
                if (userInfo != null && !string.IsNullOrEmpty(userInfo.Token))
                {
                    Session["token"] = userInfo.Token;
                    Result.Code = "000";
                    Result.Message = "Valid User";
                    Result.Session = Session["UserSession"].ToString();
                    return Json(Result, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    Result.Code = "999";
                    Result.Message = "Invalid User";
                    return Json(Result, JsonRequestBehavior.AllowGet);
                }


            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("Beneficiary Login Error due to : " + ex.Message, "User Name : " + Convert.ToString(userName) + " Password : " + Convert.ToString(passWord) + " Login Type : " + Convert.ToString(loginType), Convert.ToString(ex.InnerException), "BeneficiaryLogin", "HomeController");

                //CommonMethods.AddtoLogFile("Benificiary Login" + DateTime.Now + "Error : " + Message + "UserName : " + userName + ",Password : " + passWord + ",LoginType " + loginType);
                Result.Code = "999";
                Result.Message = "Message";
                return Json(Result, JsonRequestBehavior.AllowGet);

            }
            //return Json(Result, JsonRequestBehavior.AllowGet);

        }
        #endregion

        #region

        [HttpPost]
        public ActionResult DepartmentLogin(string data)
        {
            
             LoginResponse Result = new LoginResponse();

            //var loginLimit = Convert.ToInt32(ConfigurationManager.AppSettings["LoginLimit"]);
            //var LoginCount = HB.GetLoginCounts();
            //var LCount = 0;
            //foreach (var item in LoginCount)
            //{
            //    LCount += Convert.ToInt32(item.TotalCount);
            //}
            //if (LCount > loginLimit)
            //{
            //    Result.Code = "777";
            //    Result.Message = ConfigurationManager.AppSettings["LoginAlertMessage"];
            //    return Json(Result, JsonRequestBehavior.AllowGet);
            //}


            //List<string> restrictLogin = ConfigurationManager.AppSettings["RestrictLogin"].Split(new char[] { ',' }).ToList();


            string userName = "", passWord = "", loginType = "", userId = "";
            string result = "";
            try
            {
                //CommonMethods.AddtoLogFile("Department Login" + DateTime.Now + "UserName :" + userName + ",Password : " + passWord + ",LoginType " + loginType);
                var dict = new JavaScriptSerializer().Deserialize<string>(data);
                UserLoginViewModel model = JsonConvert.DeserializeObject<UserLoginViewModel>(AESEncrytDecry.DecryptStringAES(dict));
                userName = model.userName;
                passWord = model.passWord;
                loginType = model.loginType;
                userId = model.userId;

                CommonMethods.AddtoLogFile("Department Login :: " + DateTime.Now + "UserName :: " + userName + ",Password :: " + passWord + ",LoginType :: " + loginType);


                if (loginType == "Dept" || loginType == "SerPro")
                {
                    string ipAddress = Helper.GetIPAddress();
                    string userSession = Helper.regenerateId();
                    //CommonMethods.AddtoLogFile(Environment.NewLine+ " ipAddress" + ipAddress);
                    //CommonMethods.AddtoLogFile(Environment.NewLine + " userSession" + userSession);

                    Session["UserSession"] = userSession.ToString();
                    if (userId != "0")
                    {
                        HB.ClearSession(userId);
                    }

                    result = lb.GetOtherUser(userName, passWord, ipAddress, userSession);

                    CommonMethods.AddtoLogFile(userName + " :: Department Login :: " + DateTime.Now + "result :: " + result + ", GetOtherUser ,LoginType :: " + loginType);

                    int errorCounter = 0;
                    errorCounter = Regex.Matches(result, @"[a-zA-Z]").Count;
                    if (errorCounter == 0)
                    {
                        var res = HB.GetDeptUserDetails(Convert.ToInt32(result));
                        CommonMethods.AddtoLogFile(userName + " :: Departme nt Login :: " + DateTime.Now + "UserName ::" + res.Userid + ", GetDeptUserDetails ,LoginType :: " + loginType);
                        //if (res.UserType != 1)
                        //{
                        var CheckUser = HB.GetUserLoginCount((result).ToString(), "User");
                        CommonMethods.AddtoLogFile(userName + " :: Department Login :: " + DateTime.Now + ":: CheckUser ::" + CheckUser + ", :: GetUserLoginCount, LoginType :: " + loginType);
                        if (CheckUser > 1)
                        {
                            Result.Code = "888";
                            Result.Message = "This user is already logged in. Do you want to close other active sessions.";
                            Result.UserId = result;
                            return Json(Result, JsonRequestBehavior.AllowGet);
                        }



                        //}

                        if (loginType == "Dept" && res.UserType > 7 && res.UserType != 13 && res.UserType != 12 && res.UserType != 22 && res.UserType != 23 && res.UserType != 24)
                        {
                            CommonMethods.AddtoLogFile(userName + " :: Department Login :: " + DateTime.Now + ":: First if :: Credentials ::" + userName +" :: "+ passWord);

                            Result.Code = "999 ";
                            Result.Message = "Invalid User";
                            return Json(Result, JsonRequestBehavior.AllowGet);

                        }
                        if (loginType == "SerPro" && res.UserType < 7)
                        {
                            CommonMethods.AddtoLogFile(userName + " :: Department Login :: " + DateTime.Now + ":: Second if :: Credentials ::" + userName + " :: " + passWord); 

                            Result.Code = "999 ";
                            Result.Message = "Invalid User";
                            return Json(Result, JsonRequestBehavior.AllowGet);


                        }
                        result = Convert.ToString(res.UserType);
                        Session["UserType"] = res.UserType;
                        string UserTypeName = HB.GetUserTypeName(res.UserType);
                        CommonMethods.AddtoLogFile(userName + " :: Department Login :: " + DateTime.Now + ":: GetUserTypeName ::" + UserTypeName);

                        Session["UserTypeName"] = UserTypeName;
                        Session["DeptUserid"] = res.Userid;
                        Session["UserName"] = res.Firstname + " " + res.Lastname;
                        Session["Location"] = res.Location;
                        Session["SubDiv"] = res.SubDivId;
                        Session["District"] = res.DistId;
                        Session["ChangePwd"] = res.ChangePwd;
                        Session["CheckRegType"] = res.RegType;
                        Session["SkipAdditionaldata"] = "No";
                        Session["ChkAddData"] = "0";
                        
                        CommonMethods.AddtoLogFile(Environment.NewLine + userName + ":: res.Firstname" + res.Firstname+ " res.Lastname "+ res.Lastname+ " res.Userid "+ res.Userid+ " res.UserPwd "+ res.UserPwd+ " res.UserCode "+ res.UserCode);						//CommonMethods.AddtoLogFile(Environment.NewLine + " res.Firstname" + res.Firstname+ " res.Lastname "+ res.Lastname+ " res.Userid "+ res.Userid+ " res.UserPwd "+ res.UserPwd+ " res.UserCode "+ res.UserCode);

                        User user = new User { FirstName = res.Firstname, LastName = res.Lastname, Id = res.Userid, Password = res.UserPwd, Username = res.UserCode };
                        var client = new HttpClient();
                        var json = new JavaScriptSerializer().Serialize(user);
                        var content = new StringContent(json, Encoding.UTF8, "application/json");
                        var url = ConfigurationManager.AppSettings["api"] + "authenticate";
                        
                        CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: "+ " url " + url + " content "+ content);

                        var response = client.PostAsync(url, content).Result;

                        CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: " + " response :: " + response );

                        User userInfo = new User();
                        var a = response.StatusCode;
                        if (Convert.ToString(response.StatusCode)!= "BadGateway")
                        {
                            var apiResult = response.Content.ReadAsStringAsync().Result;
                            userInfo = JsonConvert.DeserializeObject<User>(apiResult);

                        }
                        else 
                        {
                            //Result.Code = "999";
                            //Result.Message = "Server busy. Try Again later";
                            
                            CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: else response" + response);
                            return Json(Result, JsonRequestBehavior.AllowGet);
                        }

                        CommonMethods.AddtoLogFile(Environment.NewLine  + userName +  " :: userInfo.Token " + userInfo.Token);

                        if (userInfo != null && !string.IsNullOrEmpty(userInfo.Token))
                        {
                            CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: if  userInfo.Token " + userInfo.Token);

                            Session["token"] = userInfo.Token;
                        }
                        else
                        {
                            CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: else  userInfo.Token " + userInfo.Token);


                            Result.Code = "999";
                            Result.Message = "Invalid User";
                            return Json(Result, JsonRequestBehavior.AllowGet);
                        }

                        Session["LoginType"] = "Department";
                        Result.Code = "000";
                        Result.UserType = Session["UserType"].ToString();
                        Result.Message = "Success";
                        Result.UserId = result;
                        Result.Session = userSession;
                        CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: Result " + Result);
                        return Json(Result, JsonRequestBehavior.AllowGet);


                    }

                    else
                    {
                        Session["LoginType"] = "Department";
                        Result.Code = "999";
                        Result.Message = result;
                        //Result.UserId = Res;
                        CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: Result " + Result);

                        return Json(Result, JsonRequestBehavior.AllowGet);
                    }
                }

                else
                {
                    Result.Code = "999";
                    Result.Message = "Invalid User";
                    //Result.UserId = Res;
                    CommonMethods.AddtoLogFile(Environment.NewLine + userName + " :: Result " + Result);

                    return Json(Result, JsonRequestBehavior.AllowGet);
                }

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);

                CommonMethods.LogError("Department Login Error due to : " + ex.Message, "User Name : " + Convert.ToString(userName) + " Password : " + Convert.ToString(passWord) + " Login Type : " + Convert.ToString(loginType) + "User Id : " + Convert.ToString(userId), Convert.ToString(ex.InnerException), "DepartmentLogin", "HomeController");
                //CommonMethods.AddtoLogFile("Login" + DateTime.Now + "Error : " + ex.InnerException);
                //CommonMethods.AddtoLogFile("Login" + DateTime.Now + "Error : " + Message);

                Result.Code = "999";
                Result.Message = Message;
                //Result.UserId = Res;
                return Json(Result, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetSubdivisionJSONNew(int ID)
        {
            try
            {
                return Json(HB.GetsubdivisionNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetSubdivisionJSONNew" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }

        }
        #endregion


    }
}
public class UserLoginViewModel
{
    public string userName { get; set; }
    public string passWord { get; set; }
    public string loginType { get; set; }
    public string userId { get; set; }
}