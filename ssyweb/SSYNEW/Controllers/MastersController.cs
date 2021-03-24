using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace SSYNEW.Controllers
{
    public class MastersController : Controller
    {
        MasterBussiness Mb = new MasterBussiness();
        HomeBussiness HB = new HomeBussiness();
        // GET: Masters

        #region
        public ActionResult Index()
        {
            return View();
        }
        #endregion

        #region District master view
        [CheckLogins]
        public ActionResult DistrictMaster()
        {
            try
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
            catch(Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("DistrictMaster" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("District master view error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "DistrictMaster", "MastersController");

                return RedirectToAction("Index", "Home");

            }
          
        }
       
       
        public ActionResult GetDitrictsList()
        {
            try
            {
                var res = Mb.GetDitrictsList();
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetDitrictsList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDitrictsList error due to : " + ex.Message, " - ", Convert.ToString(ex.InnerException), "GetDitrictsList", "MastersController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
     
      
        public ActionResult updateDistrictName(string id, string Name, string Type)
        {
            try
            {
                var res = Mb.updateDistrictName(id, Name, Type);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("Update District Name" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("updateDistrictName error due to : " + ex.Message, "id : " + Convert.ToString(id) + ", Name : "+ Convert.ToString(Name)+", Type : "+ Convert.ToString(Type), Convert.ToString(ex.InnerException), "updateDistrictName", "MastersController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Sub division master view
        [CheckLogins]
        public ActionResult SubDivisionMaster()
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    reguser.district = HB.GetDistrictAll();
                    return View(reguser);
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("SubDivisionMaster" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Sub division master view error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "SubDivisionMaster", "MastersController");

                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region Get sub division list
        public ActionResult GetSubDivList(string Name)
        {
            try
            {
                var res = Mb.GetSubDivList(Name);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetSubDivList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get sub division list error due to : " + ex.Message, "Name : " + Convert.ToString(Name), Convert.ToString(ex.InnerException), "GetSubDivList", "MastersController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Location master view
        [CheckLogins]
        public ActionResult LocationMaster()
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    reguser.district = HB.GetDistrictAll();
                    reguser.subdivision = HB.GetsubdivisionAll(0);
                    return View(reguser);
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("Location Master" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Location master view error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "LocationMaster", "MastersController");

                return RedirectToAction("Index", "Home");

            }
        }
        #endregion

        #region Get location list 
        public ActionResult GetLocationList(string DName, string SName)
        {
            try
            {
                var res = Mb.GetLocationList(DName.Trim(), SName.Trim());
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetLocationList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("location list  error due to : " + ex.Message, "DName : " + Convert.ToString(DName)+ ", SName : "+Convert.ToString(SName), Convert.ToString(ex.InnerException), "GetLocationList", "MastersController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Gp Ward Creation
        [CheckLogins]
        public ActionResult GpMaster()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");

            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                Reports usr = new Reports();
                usr.district = HB.GetDistrict();
                usr.subdivision = HB.Getsubdivision(0);
                return View(usr);
            }
            else
            { 
               return RedirectToAction("Index", "Home");
            }
          
        }
        #endregion

        #region Save Gp Ward
        public ActionResult SaveGpWard(int District,int Subdivision,string Name)
        {
            RequestResponse Res = new RequestResponse(); 
            try
            {
                var res = Mb.SaveGpWard(District, Subdivision, Name);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetSubDivList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Save Gp Ward error due to : " + ex.Message, "District : " + Convert.ToString(District)+ ", Subdivision : "+Convert.ToString(Subdivision)+", Name : "+Convert.ToString(Name), Convert.ToString(ex.InnerException), "SaveGpWard", "MastersController");

                Res.Message = Message;
                Res.Code = "999";
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Post Office Creation
        [CheckLogins]
        public ActionResult PoMaster()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                Reports usr = new Reports();
                usr.district = HB.GetDistrict();

                return View(usr);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        
        }
        #endregion

        #region Save Gp Ward
        public ActionResult SavePostOffice(int District, string Pincode, string Name)
        {
            RequestResponse Res = new RequestResponse();
            try
            {
                var res = Mb.SavePostOffice(District, Pincode, Name);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetSubDivList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("SavePostOffice error due to : " + ex.Message, "District : " + Convert.ToString(District)+ ", Pincode : "+Convert.ToString(Pincode)+", Name : "+Convert.ToString(Name), Convert.ToString(ex.InnerException), "SavePostOffice", "MastersController");

                Res.Message = Message;
                Res.Code = "999";
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Police Station Creation
        public ActionResult PSMaster()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                Reports usr = new Reports();
                usr.district = HB.GetDistrict();
                //usr.subdivision = HB.Getsubdivision(0);
                return View(usr);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
           
        }
        #endregion

        #region Save Police Station
        public ActionResult SavePS(int District,string Name)
        {
            RequestResponse Res = new RequestResponse();
            try
            {
                var res = Mb.SavePS(District, Name);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("GetSubDivList" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Save Police Station error due to : " + ex.Message, "Userid : " + Convert.ToString(District)+", Name : "+Convert.ToString(Name), Convert.ToString(ex.InnerException), "SavePS", "MastersController");

                Res.Message = Message;
                Res.Code = "999";
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}