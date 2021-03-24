using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSYNEW.Others;
using System;
using System.Configuration;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Mvc;
namespace SSYNEW.Controllers
{
    public class ReportController : Controller
    {
        // GET: Report
        ReportBussiness RB = new ReportBussiness();
        HomeBussiness HB = new HomeBussiness();
        //
        // GET: /Report/
        #region
        public ActionResult Index()
        {
            return View();
        }
        #endregion

        #region New Detailed Report vss Bala
        [CheckLogins]
        public ActionResult DetailedReport()
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
                    if (usertypeid == 5)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 6)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
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
                //Helper.AddtoLogFile("SPAdminRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Detail Report to Department Roles Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "SPAdminRep", "ReportController");

                return View(usr);
            }
        }
        [HttpPost]
        public ActionResult DetailedReport(string SelectUserid, int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SearchValue = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "",int jtStartIndex=0,int jtPageSize=10)
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                object start =null;
                object length = null;
                //var  draw = Request.Form.GetValues("draw").FirstOrDefault();
                //  start = Request.Form.GetValues("start").FirstOrDefault();
                //  length = Request.Form.GetValues("length").FirstOrDefault();
               // string search = string.Empty;
               //if (Request.Form.GetValues("search[value]")!=null)
               //     search = Request.Form.GetValues("search[value]").FirstOrDefault();

                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);


                //Find Order Column
                //var sortColumn = Request.Form.GetValues("columns[" + Request.Form.GetValues("order[0][column]").FirstOrDefault() + "][name]").FirstOrDefault();
                //   var sortColumnDir = Request.Form.GetValues("order[0][dir]").FirstOrDefault();

                int pageSize = length != null ? Convert.ToInt32(length) : 0;
                int skip = start != null ? Convert.ToInt32(start) : 0;
                Int64 recordsTotal = 0;
                string RequestId = "";

                pageSize = jtPageSize;
                skip = jtStartIndex;

                var Res = RB.GetDetailedReport(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, deptuserid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);

                if (skip == 0 && SearchValue == "")
                {

                    //Session["RequestIdDetRep"] = ReqValue;
                    //RequestId = ReqValue;

                    string Count = RB.GetDetailReportCount(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);

                    Session["DetReportCount"] = Count;

                    recordsTotal = Convert.ToInt64(Count);



                    }
                if (skip != 0 && SearchValue == "")
                {

                    recordsTotal = Convert.ToInt64(Session["DetReportCount"]);
                }




                if (SearchValue != "")
                {
                    recordsTotal = Res.Count();
                }
                    return Json(new
                    {
                        Result="OK",
                        Records = Res,
                        TotalRecordCount= recordsTotal
                    }, JsonRequestBehavior.AllowGet);
                //return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = Res }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Detailed Report" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("DetailedRep Error due to : " + ex.Message, "userid : " + Convert.ToString(Session["userid"]), Convert.ToString(ex.InnerException), "DetailedRep", "ReportController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Detail Report to Department Roles
        [CheckLogins]
        public ActionResult SPAdminRep()
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
                    if (usertypeid == 5)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 6)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
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
                //Helper.AddtoLogFile("SPAdminRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Detail Report to Department Roles Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "SPAdminRep", "ReportController");

                return View(usr);
            }
        }



        [HttpPost]
        public ActionResult DetailedRep(string SelectUserid, int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SearchValue = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);

                var draw = Request.Form.GetValues("draw").FirstOrDefault();
                var start = Request.Form.GetValues("start").FirstOrDefault();
                var length = Request.Form.GetValues("length").FirstOrDefault();

                string search = Request.Form.GetValues("search[value]").FirstOrDefault();

                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);


                //Find Order Column
                //var sortColumn = Request.Form.GetValues("columns[" + Request.Form.GetValues("order[0][column]").FirstOrDefault() + "][name]").FirstOrDefault();
                //   var sortColumnDir = Request.Form.GetValues("order[0][dir]").FirstOrDefault();

                int pageSize = length != null ? Convert.ToInt32(length) : 0;
                int skip = start != null ? Convert.ToInt32(start) : 0;
                Int64 recordsTotal = 0;
                string RequestId = "";

                var Res = RB.DetReportData(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, deptuserid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);

                if (skip == 0 && SearchValue == "")
                {

                    //Session["RequestIdDetRep"] = ReqValue;
                    //RequestId = ReqValue;

                    string Count = RB.GetDetailReportCount(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);

                    Session["DetReportCount"] = Count;

                    recordsTotal = Convert.ToInt64(Count);



                }
                if (skip != 0 && SearchValue == "")
                {

                    recordsTotal = Convert.ToInt64(Session["DetReportCount"]);
                }




                if (SearchValue != "")
                {
                    recordsTotal = Res.Count();
                }

                return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = Res }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Detailed Report" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("DetailedRep Error due to : " + ex.Message, "userid : " + Convert.ToString(Session["userid"]), Convert.ToString(ex.InnerException), "DetailedRep", "ReportController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Detailed Report for Additional LC and Super Admin
        [CheckLogins]
        public ActionResult SPAdminRepNew()
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
                    if (usertypeid == 5)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        //usr.district = HB.GetDistrictbyIDNew(Convert.ToInt16(res.DistId));
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 6)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 7 || usertypeid == 4)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        usr.psname = HB.GetPS(0);
                        usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 3 || usertypeid == 24)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictNew();
                        usr.muncorpname = HB.GetTotalblockBySubdivNew(0);
                        usr.subdivision = HB.GetsubdivisionNew(0);
                        usr.psname = HB.GetPSNew(0);
                        usr.poname = HB.GetPONew(0);
                        //usr.wardname = HB.GetGP(-1);
                        usr.wardname = HB.GetGPNew(999);
                        usr.religion = HB.GetreligionALL();
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
                //Helper.AddtoLogFile("SPAdminRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Detailed Report for Additional LC and Super Admin Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "SPAdminRepNew", "ReportController");

                return View(usr);
            }
        }

        public ActionResult GetGpNew(int subdivid)
        {
            var data = HB.GetGPNew(subdivid);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult DetailedRepNew(string SelectUserid, int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SearchValue = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {
            try
            {
                int usertypeid = Convert.ToInt32(Session["UserType"]);

                var draw = Request.Form.GetValues("draw").FirstOrDefault();
                var start = Request.Form.GetValues("start").FirstOrDefault();
                var length = Request.Form.GetValues("length").FirstOrDefault();

                string search = Request.Form.GetValues("search[value]").FirstOrDefault();

                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);


                //Find Order Column
                //var sortColumn = Request.Form.GetValues("columns[" + Request.Form.GetValues("order[0][column]").FirstOrDefault() + "][name]").FirstOrDefault();
                //   var sortColumnDir = Request.Form.GetValues("order[0][dir]").FirstOrDefault();

                int pageSize = length != null ? Convert.ToInt32(length) : 0;
                int skip = start != null ? Convert.ToInt32(start) : 0;
                Int64 recordsTotal = 0;
                string RequestId = "";

                var Res = RB.DetReportDataNew(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, deptuserid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);

                if (skip == 0 && SearchValue == "")
                {

                    //Session["RequestIdDetRep"] = ReqValue;
                    //RequestId = ReqValue;

                    string Count = RB.GetDetailReportCountNew(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);

                    Session["DetReportCount"] = Count;

                    recordsTotal = Convert.ToInt64(Count);



                }
                if (skip != 0 && SearchValue == "")
                {

                    recordsTotal = Convert.ToInt64(Session["DetReportCount"]);
                }




                if (SearchValue != "")
                {
                    recordsTotal = Res.Count();
                }

                return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = Res }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Detailed Report" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("DetailedRepNew Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "DetailedRepNew", "ReportController");

                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }



        public ActionResult GetblockforDisRepJSONNew(int ID)
        {
            try
            {
                return Json(RB.GetblockforDisRepJSONNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetblockforDisRepJSONNew" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetblockforDisRepJSONNew Error due to : " + ex.Message, "ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "GetblockforDisRepJSONNew", "ReportController");

                return Content(Message);
            }

        }

        public ActionResult GetblockforSubRepJSONNew(int ID)
        {
            try
            {
                return Json(RB.GetblockforSubRepJSONNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetblockforSubRepJSONNew" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetblockforSubRepJSONNew Error due to : " + ex.Message, "ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "GetblockforSubRepJSONNew", "ReportController");

                return Content(Message);
            }

        }

        [HttpPost]
        public ActionResult DownloadDetailReportNew(string SelectUserid, string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, string UserCategryid, string selectusertype, string userid, string ReportName, string Value, string FormStatus, string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {

            try
            {
                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                var res = RB.DwnldSaveLegacyDataNew(Districtid, Subdivid, Locid, SchemeStatus, ReportName, Fromdate, Todate, deptuserid, schemeid, UserCategryid, selectusertype, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("DwnldSaveLegacyData" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("DownloadDetailReportNew Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "DownloadDetailReportNew", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion



        #region User Report for agents
        [CheckLogins]
        public ActionResult UserReport()
        {
            try
            {
                ViewBag.deptuserid = Convert.ToInt32(Session["DeptUserid"]);

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
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("UserReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("User Report for agents Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "UserReport", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion



        #region paymentReportforBenif
        public ActionResult paymentReportforBenif()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                //var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                // if (ResultData.Count != 0)
                // {
                return View();
                //  }
                // else
                // {
                //   
                //     return RedirectToAction("Index", "Home");
                // }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("paymentReportforBenif" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("paymentReportforBenif Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "paymentReportforBenif", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region paymentReport
        public ActionResult paymentReport()
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
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("paymentReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("paymentReport Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "paymentReport", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region PaymentReport
        public ActionResult PaymentRep(string Fromdate, string Todate)
        {
            //getting session value
            //  int 
            try
            {
                int deptuserid = 0;
                int Benid = 0;
                string logintype = Session["LoginType"].ToString();
                if (logintype == "Department")
                {
                    deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                }
                else
                {
                    Benid = Convert.ToInt32(Session["Userid"]);
                }
                var res = RB.GetPaymentRep(deptuserid, Benid, Fromdate, Todate);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Payment Report" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("PaymentReport Error due to : " + ex.Message, "Fromdate : " + Convert.ToString(Fromdate) + ", Todate : " + Todate, Convert.ToString(ex.InnerException), "PaymentRep", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region PfReport
        public ActionResult PfRep()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                // var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                // if (ResultData.Count != 0)
                // {
                return View();
                // }
                // else
                // {
                //    return RedirectToAction("Index", "Home");
                //  }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("PfRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("PfReport Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "PfRep", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region
        //Author - Sunitha
        //Getting block Details based on type
        public ActionResult GetblockforSubRepJSON(int ID)
        {
            try
            {
                return Json(RB.GetblockforSubRepJSON(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetblockforSubRepJSON" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetblockforSubRepJSON Error due to : " + ex.Message, "ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "GetblockforSubRepJSON", "ReportController");

                return Content(Message);
            }

        }
        #endregion

        #region
        //Author - Sunitha
        //Getting block Details based on type
        public ActionResult GetblockforDisRepJSON(int ID)
        {
            try
            {
                return Json(RB.GetblockforDisRepJSON(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetblockforDisRepJSON" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Getting block Details based on type Error due to : " + ex.Message, "ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "GetblockforDisRepJSON", "ReportController");

                return Content(Message);
            }

        }
        #endregion

        #region
        //Author - Srikar
        //Getting block Details based on Subdivisions
        public ActionResult GetBlocksBySubDivision(string ID)
        {
            try
            {
                return Json(RB.GetBlocksBySubDivision(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetBlocksBySubDivision" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Getting block Details based on Subdivisions Error due to : " + ex.Message, "ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "GetBlocksBySubDivision", "ReportController");

                return Content(Message);
            }

        }
        #endregion

        #region District abstract report

        [CheckLogins]
        public ActionResult Districtabstractreport()
        {
            try
            {

                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());

                    ViewBag.UserType = userType;
                    ViewBag.DeptId = deptuserid;

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
                //Helper.AddtoLogFile("Districtabstractreport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Districtabstractreport Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "Districtabstractreport", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion


        #region Subdivision abstract report

        [CheckLogins]
        public ActionResult Subdivabstractreport(int DistrictId)
        {
            try
            {
                ViewBag.DistrictId = DistrictId;
                Session["RepDistrictId"] = DistrictId;
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("Subdivabstractreport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Subdivision abstract report Error due to : " + ex.Message, "DistrictId : " + Convert.ToString(DistrictId), Convert.ToString(ex.InnerException), "Subdivabstractreport", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);

            }

        }
        #endregion




        #region Location  abstract report
        [CheckLogins]
        public ActionResult LocationWiseAbstract(int SubDivId)
        {
            try
            {
                ViewBag.SubDivId = SubDivId;
                Session["RepSubDivId"] = SubDivId;
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("LocationWiseAbstract" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Location  abstract report Error due to : " + ex.Message, "SubDivId : " + Convert.ToString(SubDivId), Convert.ToString(ex.InnerException), "LocationWiseAbstract", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion


        #region Detailed Abstract Report

        [CheckLogins]
        public ActionResult DetailedAbstractReport(int Locationid, int status)
        {
            try
            {
                ViewBag.Locationid = Locationid;
                ViewBag.status = status;
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("DetailedAbstractReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Detailed Abstract Report Error due to : " + ex.Message, "Locationid : " + Convert.ToString(Locationid), Convert.ToString(ex.InnerException), "DetailedAbstractReport", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region
        public ActionResult GetDetailedAbstractReport(int Locationid, int status)
        {
            try
            {
                var res = RB.DeatiledAbstractReport(Locationid, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetDetailedAbstractReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDetailedAbstractReport Error due to : " + ex.Message, "Locationid : " + Convert.ToString(Locationid), Convert.ToString(ex.InnerException), "GetDetailedAbstractReport", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion



        #region Download Detailed Report  Excel
        public void DownloadDetailedRepExcel(string filename)
        {
            string path = ConfigurationManager.AppSettings["ExcelPath"] + filename; //@"F:\SSY_Excel\" + filename;
            Response.ContentType = "application/vnd.ms-excel";
            Response.AppendHeader("Content-Disposition", "attachment; filename=" + filename);
            Response.TransmitFile(path);
            Response.End();

        }

        public void DownloadDetailedRepExcelFromService(int RequestId)
        {
            var res = HB.GetDownLoadRequest(RequestId);
            string path = ConfigurationManager.AppSettings["ServerDownloadExcelPath"] + res.DownLoadPath; //@"F:\SSY_Excel\" + filename;
            Response.ContentType = "application/vnd.ms-excel";
            Response.AppendHeader("Content-Disposition", "attachment; filename=" + System.IO.Path.GetFileName(path));
            Response.TransmitFile(path);
            Response.End();

        }
        #endregion

        #region District wise Detailed Report
        [CheckLogins]
        public ActionResult DistrictwiseDetailedRep()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                RegistartionForUser reguser = new RegistartionForUser();
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData != null)
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
                //Helper.AddtoLogFile("DistrictwiseDetailedRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("District wise Detailed Report Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "DistrictwiseDetailedRep", "ReportController");

                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region
        public ActionResult GetDistrictwiseDetailedRep(string District, string Scheme)
        {
            try
            {
                var res = RB.GetDistrictwiseDetailedRep(District, Scheme);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetDistrictwiseDetailedRep" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetDistrictwiseDetailedRep Error due to : " + ex.Message, "District : " + Convert.ToString(District), Convert.ToString(ex.InnerException), "GetDistrictwiseDetailedRep", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region District Wise  Report 

        [CheckLogins]
        public ActionResult SummaryReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                var resultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);

                if (resultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
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
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 24)
                    {
                        // usr.district = HB.GetDistrictAll();
                        usr.district = HB.GetDistrictsMulti();
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
                //Helper.AddtoLogFile("SummaryReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("District Wise  Report Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "SummaryReport", "ReportController");

                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region
        public ActionResult DetailedSummary(string District, string FromDate, string ToDate, string Scheme)
        {
            try
            {
                var res = RB.DetailedSummary(District, FromDate, ToDate, Scheme);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("DetailedSummary" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Detailed Summary Error due to : " + ex.Message, "District : " + Convert.ToString(District), Convert.ToString(ex.InnerException), "DetailedSummary", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region  Get Edit Nominee Dependent Detaied Report

        [CheckLogins]

        public ActionResult BenEditDetReport()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    ViewBag.DeptUserid = DeptUserid;
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
                //Helper.AddtoLogFile("BenEditDetReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("Get Edit Nominee Dependent Detaied Report Error due to : " + ex.Message, "UserType : " + Convert.ToString(Session["UserType"]), Convert.ToString(ex.InnerException), "BenEditDetReport", "ReportController");

                return RedirectToAction("Index", "Home");

            }

        }

        public ActionResult GetBenEditDetReport(string deptuserid, string Status)
        {
            try
            {
                var res = RB.GetBenEditDetReport(Convert.ToInt32(deptuserid), Convert.ToInt16(Status));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                //Helper.AddtoLogFile("GetBenEditDetReport" + DateTime.Now + "Error : " + Message);

                CommonMethods.LogError("GetBenEditDetReport Error due to : " + ex.Message, "deptuserid : " + Convert.ToString(Session["deptuserid"]), Convert.ToString(ex.InnerException), "GetBenEditDetReport", "ReportController");

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetDeleteRequestDet(string deptuserid, string Status)
        {
            try
            {
                var res = RB.GetDeleteRequestDet(Convert.ToInt32(deptuserid), Convert.ToInt16(Status));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetDeleteRequestDet" + DateTime.Now + "Error : " + Message);

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetBenEditNom(string Id)
        {
            try
            {
                var res = RB.GetBenEditNom(Convert.ToInt32(Id));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetBenEditNom" + DateTime.Now + "Error : " + Message);

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetBenEditFamily(string Id)
        {
            try
            {
                var res = RB.GetBenEditFamily(Convert.ToInt32(Id));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetBenEditFamily" + DateTime.Now + "Error : " + Message);

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult BenEditDetailsVerfication(string Status, string Id, string Remarks)
        {
            try
            {
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);
                //var res = RB.BenEditDetailsVerfication(Convert.ToInt32(Status), Convert.ToInt32(Id), Remarks, Convert.ToInt32(DeptUserid));
                var res = RB.BenEditDetailsVerfication(Status, Id, Remarks, DeptUserid);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("BenEditDetailsVerfication" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }
        #endregion

        #region
        public ActionResult GetJsonRoles(string id)
        {
            try
            {
                var res = HB.GetRoles(Convert.ToInt16(id));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetJsonRoles" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region
        public ActionResult GetJsonUsers(string Roleids, int Districtid, string Subdivid, string Locid)
        {
            try
            {
                string DeptUserid = Session["DeptUserid"].ToString();
                var res = HB.GetdeptUsers(Roleids, Districtid, Subdivid, Locid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetJsonUsers" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        #region
        public ActionResult GetJsonUsersNew(string Roleids, int Districtid, string Subdivid, string Locid)
        {
            try
            {
                string DeptUserid = Session["DeptUserid"].ToString();
                var res = HB.GetJsonUsersNew(Roleids, Districtid, Subdivid, Locid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetJsonUsers" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region District Wise Det Report

        [CheckLogins]
        public ActionResult DistrictwiseDetailedReport()
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
                        usr.district = HB.GetDistrictwiseAll();
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
                Helper.AddtoLogFile("DistrictwiseDetailedReport" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }
        #endregion

        #region District All

        public ActionResult GetDistrictAllJSON()
        {
            try
            {
                return Json(HB.GetDistrictwiseAll(), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetDistrictAllJSON" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }

        }
        #endregion

        #region Subdivision All

        public ActionResult GetSubdivisionAllJSON(int id)
        {
            try
            {
                return Json(HB.GetSubdivisionwiseAll(id), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetSubdivisionAllJSON" + DateTime.Now + "Error : " + Message);
                return Content(ex.Message);
            }

        }
        #endregion

        #region Location All

        public ActionResult GetLocationAllJSON(int id)
        {
            try
            {
                return Json(HB.GetLocationwiseAll(id), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("GetLocationAllJSON" + DateTime.Now + "Error : " + Message);

                return Content(ex.Message);
            }

        }
        #endregion

        #region Getting block Details based on Subdivisions
        //Author - Srikar

        public ActionResult GetSubDivByDistrict(string ID)
        {
            try
            {
                return Json(RB.GetSubDivByDistrict(ID), JsonRequestBehavior.AllowGet);
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

        #region Edit PF Request Report

        [CheckLogins]
        public ActionResult EditPfDetReport()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            //var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            //if (ResultData.Count != 0)
            //{
            ViewBag.DeptUserid = DeptUserid;
            return View();
            //}
            //else
            //{
            //    return RedirectToAction("Index", "Home");
            //}
        }


        public ActionResult GetEditPfDetReport(string deptuserid, string Status, string fromdate, string todate)
        {
            try
            {

                var res = RB.GetEditPfDetReport(Convert.ToInt32(deptuserid), Status, fromdate, todate);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region EditPfVerfication
        public ActionResult EditPfVerfication(int Id, int Status, string Remarks)
        {
            try
            {
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);
                var res = RB.EditPfVerfication(Id, Status, Remarks);
                return Content(res);
            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Legacy Data Report

        [CheckLogins]

        public ActionResult LegacyDataReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
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
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {

                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
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
                Helper.AddtoLogFile("LegacyDataReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion
        #region
        [HttpPost]
        public ActionResult LegacyDataRep(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, string SearchValue)
        {
            try
            {



                int usertypeid = Convert.ToInt32(Session["UserType"]);

                var draw = Request.Form.GetValues("draw").FirstOrDefault();
                var start = Request.Form.GetValues("start").FirstOrDefault();
                var length = Request.Form.GetValues("length").FirstOrDefault();

                string search = Request.Form.GetValues("search[value]").FirstOrDefault();

                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);

                //Find Order Column
                var sortColumn = Request.Form.GetValues("columns[" + Request.Form.GetValues("order[0][column]").FirstOrDefault() + "][name]").FirstOrDefault();
                var sortColumnDir = Request.Form.GetValues("order[0][dir]").FirstOrDefault();

                int pageSize = length != null ? Convert.ToInt32(length) : 0;
                int skip = start != null ? Convert.ToInt32(start) : 0;
                Int64 recordsTotal = 0;
                string RequestId = "";
                string Count = "";



                //if (skip == 0 && SearchValue == "")
                //{
                var res = RB.GetLegacyDataRep(Districtid, Subdivid, Locid, Fromdate, Todate, schemeid, SchemeStatus, skip, pageSize, deptuserid, SearchValue);

                if (skip == 0 && SearchValue == "")
                {
                    Count = RB.GetLegacyDataRepCount(Districtid, Subdivid, Locid, Fromdate, Todate, schemeid, SchemeStatus);
                    recordsTotal = Convert.ToInt64(Count);
                    Session["LegacyReportCount"] = Count;

                }

                if (skip != 0 && SearchValue == "")
                {

                    recordsTotal = Convert.ToInt64(Session["LegacyReportCount"]);
                }



                if (SearchValue != "")
                {
                    recordsTotal = res.Count();
                }



                return Json(new { draw = draw, recordsFiltered = recordsTotal, recordsTotal = recordsTotal, data = res }, JsonRequestBehavior.AllowGet);




            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("LegacyDataRep" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Process the report
        public ActionResult DwnldSaveLegacyData(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, string Deptuserid, string ReportName)
        {
            try
            {
                var res = RB.DwnldSaveLegacyData(Districtid, Subdivid, Locid, SchemeStatus, ReportName, Fromdate, Todate, Convert.ToInt32(Deptuserid), schemeid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("DwnldSaveLegacyData" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Dwnld Report
        [CheckLogins]
        public ActionResult DwnldReport()
        {
            Reports usr = new Reports();
            try
            {

                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);
                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);

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

                Helper.AddtoLogFile("LegacyDwnldReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
                return View(usr);
            }
        }
        #endregion


        #region

        public ActionResult GetLegacyDwnldReport(int userid)
        {
            try
            {
                var res = RB.GetDwnldRep(userid);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                Helper.AddtoLogFile("GetLegacyDwnldReport" + DateTime.Now + "Error : " + ex.Message.ToString());
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }

        #endregion



        #region

        public ActionResult SubmitRequestDownlaod(string RequestId, string ReportName)
        {

            RequestResponse data = new RequestResponse();
            try
            {

                ReportName = RB.GetReportName(Convert.ToInt16(RequestId));
                var res = RB.GetDownloadReqData(RequestId);

                if (res.Count > 0)
                {


                    string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");
                    date = date + ".xlsx";
                    string Filname = ConfigurationManager.AppSettings["ExcelPath"] + date; // @"F:\SSY_Excel\" + date;
                    Helper.DownloadReport(res, Filname, ReportName);


                    data.Code = "000";
                    data.Message = date;

                    var Det = RB.UpdateDownloadRequest(Convert.ToInt32(RequestId), date);

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    data.Code = "999";
                    data.Message = "No Records..";
                    return Json(data, JsonRequestBehavior.AllowGet);

                }
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("Download Detailed Report" + DateTime.Now + "Error : " + Message);
                data.Code = "999";
                data.Message = Message;

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region

        public ActionResult SubmitRequestDownlaodRegReport(string RequestId, string ReportName)
        {

            RequestResponse data = new RequestResponse();
            try
            {


                var res = RB.GetDownloadReqDataRegReport(RequestId);

                if (res.Count > 0)
                {


                    string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");
                    date = date + ".xlsx";
                    string Filname = ConfigurationManager.AppSettings["ExcelPath"] + date;  //@"F:\SSY_Excel\" + date;
                    Helper.DownloadRegReport(res, Filname, ReportName);


                    data.Code = "000";
                    data.Message = date;

                    var Det = RB.UpdateDownloadRequest(Convert.ToInt32(RequestId), date);

                    return Json(data, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    data.Code = "999";
                    data.Message = "No Records..";
                    return Json(data, JsonRequestBehavior.AllowGet);

                }
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("Download Detailed Report" + DateTime.Now + "Error : " + Message);
                data.Code = "999";
                data.Message = Message;

                return Json(data, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion



        #region
        public ActionResult DownloadDetailReport(string SelectUserid, string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, string UserCategryid, string selectusertype, string userid, string ReportName, string Value, string FormStatus, string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {

            try
            {
                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                var res = RB.DwnldSaveLegacyData(Districtid, Subdivid, Locid, SchemeStatus, ReportName, Fromdate, Todate, deptuserid, schemeid, UserCategryid, selectusertype, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("DwnldSaveLegacyData" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Ranjit Kumar Rlo Wise Legcay 1 and legacy 2
        /// <summary>
        /// RLO[Sub divistion] wise count of applications submitted through Legacy-1 and Legacy-2
        /// </summary>
        /// <param name="DistrictId"></param>
        /// <param name="fromDate"></param>
        /// <param name="toDate"></param>
        /// <returns></returns>
        public ActionResult RLOWiseLegacy1and2Count(string fromDate, string toDate, string Subdivision)
        {

            try
            {
                var res = HB.RLOWiseLegacy1and2Count(fromDate, toDate, Subdivision);

                if (res.Count > 0)
                    return Json(res, JsonRequestBehavior.AllowGet);
                else
                    return Content("0");

            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("RLOWiseLegacy1and2Count" + DateTime.Now + "Error : " + Message);

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        [CheckLogins]
        public ActionResult RLOWiseLegacy12Data()
        {
            try
            {
                Reports usr = new Reports();
                string userType = Convert.ToString(Session["UserType"]);
                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");

                else
                {
                    var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                    if (ResultData.Count != 0)
                    {
                        var res = HB.GetDeptUserbyId(deptuserid.ToString());
                        if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                        {
                            usr.district = HB.GetDistrictwiseAll();
                            usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                            usr.muncorpname = HB.GetLocationwiseAll(-1);

                            usr.district.RemoveAt(0);
                            usr.district.RemoveAt(0);

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
                        if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                        {
                            usr.district = HB.GetDistrict();
                            usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                            usr.subdivision = HB.Getsubdivision(0);
                        }



                        ViewBag.usertype = usertypeid;
                        ViewBag.deptid = deptuserid;

                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                        return View(usr);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }

                }
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("RLOWiseLegacy12Data" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }

        }

        #endregion

        #region DistrictWise Summary , District Wise Detailed

        public ActionResult SaveDownloadRequest(string fromDate, string toDate, string District, string SubDiv, string Locations, string Schemes, string UserId, string ReportName)
        {

            try
            {

                var res = RB.

                    SaveDownloadRequest(fromDate, toDate, District, SubDiv, Locations, Schemes, Convert.ToInt16(UserId), ReportName);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
        }


        #endregion

        #region
        //Author - Sunitha
        //Getting block Details based on type
        public ActionResult GetblockforSubRepIdsJSON(string IDs)
        {
            try
            {
                IDs = IDs.Substring(2, IDs.Length - 2);

                return Json(RB.GetblockforSubRepIdsJSON(IDs), JsonRequestBehavior.AllowGet);
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

        public ActionResult DistrictwiseAgentReport()
        {
            Reports usr = new Reports();
            try
            {

                string sitecount = Convert.ToString(Session["sitecount"]);
                string SSINCount = Convert.ToString(Session["SSINCount"]);
                if (string.IsNullOrEmpty(sitecount) || string.IsNullOrEmpty(SSINCount))
                    return RedirectToAction("Index", "Home");


                usr.district = HB.GetDistrictwiseAll();
                usr.district.RemoveAt(0);
                usr.district.RemoveAt(0);


                usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                usr.muncorpname = HB.GetLocationwiseAll(-1);

                return View(usr);

            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }

        #region Get subdivisions by ditsrict IDs

        public ActionResult GetDidsSubdivisionJSON(string IDs)
        {
            try
            {
                IDs = IDs.Substring(2, IDs.Length - 2);

                return Json(HB.GetDidssubdivision(IDs), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Content(ex.Message);
            }
            finally
            {
            }
        }
        public ActionResult GetDidsSubdivisionByDLCJSON(string IDs, int dlcID)
        {
            try
            {
                IDs = IDs.Substring(2, IDs.Length - 2);

                return Json(HB.GetDidsSubdivisionByDLC(IDs, dlcID), JsonRequestBehavior.AllowGet);
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



        public ActionResult GetAgentDetails(string IDs)
        {

            try
            {
                IDs = IDs.Substring(2, IDs.Length - 2);

                var res = HB.GetAgentDetails(IDs);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetAgentDetailsByAdmin(string IDs, string Status)
        {

            try
            {
                IDs = IDs.Substring(2, IDs.Length - 2);
                Status = Status.Substring(2, Status.Length - 2);

                var res = HB.GetAgentDetailsByAdmin(IDs, Status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }
        #region DistrictwiseAgentReport In Reports basing on admin

        [CheckLogins]
        public ActionResult DistrictwiseAgentReportbyAdmin()
        {
            Reports usr = new Reports();
            try
            {

                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");

                int usertypeid = Convert.ToInt32(Session["UserType"]);
                int deptuserid = Convert.ToInt32(Session["DeptUserid"]);



                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {


                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseAll();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                        usr.district.RemoveAt(0);
                        usr.district.RemoveAt(0);

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
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }



                    ViewBag.usertype = usertypeid;
                    ViewBag.deptid = deptuserid;

                    // usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                    // usr.muncorpname = HB.GetLocationwiseAll(-1);

                    return View(usr);
                }

                else
                {
                    return RedirectToAction("Index", "Home");
                }

            }
            catch (Exception ex)
            {
                return Content(ex.Message.ToString());
            }
        }
        #endregion


        #region Location wise Professions wise Beneficiary Account Summary

        [CheckLogins]
        public ActionResult DistrictwiseAndProfessionWiseSummary()
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
                        usr.district = HB.GetDistrictwiseAll();

                        usr.district.RemoveAt(0);
                        usr.district.RemoveAt(0);

                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                    }
                    if (usertypeid == 6)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.district = HB.GetDistrict();
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
                return Content(ex.Message.ToString());
            }
        }
        #endregion

        #region Districts wise Professions wise Beneficiary Account Summary

        [CheckLogins]
        public ActionResult DistrictwiseAndProfessionDetails()
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
                        usr.district = HB.GetDistrictwiseAll();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                        usr.district.RemoveAt(0);
                        usr.district.RemoveAt(0);

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
                return Content(ex.Message.ToString());
            }


        }
        #endregion

        #region Part1 Application Count Report

        [CheckLogins]
        public ActionResult Part1ApplicationCount()
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
                        usr.district = HB.GetDistrictwiseAll();
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
                Helper.AddtoLogFile("Part1ApplicationCount" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion


        #region
        public ActionResult GetDeleteRequsts()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    ViewBag.DeptUserid = DeptUserid;
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
                Helper.AddtoLogFile("GetDeleteRequsts" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");

            }
        }
        #endregion

        #region District Wise Scheme Wise SSIN Report

        [CheckLogins]
        public ActionResult DistrictWiseSchemeWiseSSIN()
        {

            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

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

        #region District Wise Pf Report

        [CheckLogins]
        public ActionResult DistrictWisePfReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                string deptuserid = Convert.ToString(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
                    return RedirectToAction("Index", "Home");

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {

                    if (userType == "1" || userType == "21" || userType == "22" || userType == "23")
                    {
                        usr.district = HB.GetDistrictsMulti();
                    }
                    if (userType == "7" || userType == "3" || userType == "4")
                    {
                        usr.district = HB.GetMultipleDistricts(Convert.ToInt32(deptuserid));

                    }

                }
                else
                {

                    return RedirectToAction("Index", "Home");
                }




                return View(usr);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("Part1ApplicationCount" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion


        #region

        [CheckLogins]
        public ActionResult DuplicateApplicationsByAadhaarNo()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                string deptuserid = Convert.ToString(Session["DeptUserid"]);

                if (string.IsNullOrEmpty(userType) || string.IsNullOrEmpty(deptuserid))
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
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("DuplicateApplicationsByAadhaarNo" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }

        }

        #endregion

        #region
        public ActionResult GrievancesReport()
        {
            return View();
        }

        #endregion

        #region
        public ActionResult PowerBiReport()
        {
            return View();
        }

        #endregion

        #region

        [CheckLogins]
        public ActionResult Part2PendingApp()
        {
            try
            {
                string deptuserid = Convert.ToString(Session["DeptUserid"]);
                ViewBag.deptuserid = deptuserid;

                return View();
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Helper.AddtoLogFile("Part2PendingApp" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }

        }
        #endregion

        #region
        public ActionResult GetDraftApplication()
        {
            try
            {
                int ID = Convert.ToInt32(Session["DeptUserid"]);

                var res = RB.GetDraftApplication(ID);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion



        #region Edit Bank Application By Inspector 

        [CheckLogins]
        public ActionResult EditBankApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        //Data table
        public ActionResult GetBankEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetBankEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetBankEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        //Get specific Bene Application
        public ActionResult GetBankEditAppliationById(string id)
        {

            try
            {
                var res = RB.GetBankEditAppliationById(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetBankEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        //Approve/Reject
        public ActionResult VerifyBankDetails(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            try
            {
                var res = RB.VerifyBankDetails(id, Remarks, Status, DeptUserid, ipAddress);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyBankDetails" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Edit husband name details

        [CheckLogins]
        public ActionResult EditBenePersonalHusbandDetApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }

        public ActionResult GetPersonalHusbandEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetPersonalHusbandEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalHusbandEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetPersonalHusbandEditAppliationById(string id)
        {

            try
            {
                var res = RB.GetPersonalHusbandEditAppliationById(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalHusbandEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult VerifyBenePersonalHusbandDetails(string id, string Remarks, string Status, string bengaliName)
        {
            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            try
            {
                var res = RB.VerifyBenePersonalHusbandDetails(id, Remarks, Status, bengaliName, DeptUserid, ipAddress);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyPersonalDetails" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region EditBenePersonal Details Applications
        [CheckLogins]
        public ActionResult EditBenePersonalDetApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetPersonalEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetPersonalEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult GetPersonalEditAppliationById(string id)
        {

            try
            {
                var res = RB.GetPersonalEditAppliationById(id);

                var jsonResult = Json(res, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

                //return Json(res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult VerifyBenePersonalDetails(string id, string Remarks, string Status, string bengaliName)
        {
            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            try
            {
                Regex r = new Regex("^[a-zA-Z0-9]*$");
                if (bengaliName != "NA")
                {
                    if (r.IsMatch(bengaliName))
                    {
                        Res.Message = "Please Enter Correct Bengali Name. ";
                        Res.Code = "101";
                        return Json(Res, JsonRequestBehavior.AllowGet);
                    }
                }

                var res = RB.VerifyPersonalDetails(id, Remarks, Status, bengaliName, DeptUserid, ipAddress);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyPersonalDetails" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        #region EditBene DOB Details Applications
        [CheckLogins]
        public ActionResult EditBeneDOBDetApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetDOBEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetDOBEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetDOBEditAppliationById(string id)
        {

            try
            {
                var res = RB.GetPersonalEditAppliationById(id);

                var jsonResult = Json(res, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
                //return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult VerifyBeneDOBDetails(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            try
            {
                var res = RB.VerifyDOBDetails(id, Remarks, Status, DeptUserid, ipAddress);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyPersonalDetails" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        #region EditBene Address Details Applications
        [CheckLogins]
        public ActionResult EditBeneAddressDetApplications()
        {
            try
            {
                string userType = Convert.ToString(Session["UserType"]);
                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
                if (ResultData.Count != 0)
                {
                    ViewBag.DeptUserid = DeptUserid;
                    return View();
                }
                else
                {
                    return RedirectToAction("Index", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("EditBene Address Details Applications Error due to : " + ex.Message, "DeptUserid : " + Convert.ToString(Session["DeptUserid"]), Convert.ToString(ex.InnerException), "EditBeneAddressDetApplications", "ReportController");
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetAddressEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetAddressEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("Get Address Edit Appliation Error due to : " + ex.Message, "userId : " + Convert.ToString(userId), Convert.ToString(ex.InnerException), "GetAddressEditAppliation", "ReportController");
                //CommonMethods.AddtoLogFile("GetAddressEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetAddressEditAppliationById(string id)
        {
            try
            {
                var res = RB.GetAddressEditAppliationById(id);

                var jsonResult = Json(res, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

                //return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("GetAddress Edit Appliation By Id Error due to : " + ex.Message, "id : " + Convert.ToString(id), Convert.ToString(ex.InnerException), "GetAddressEditAppliationById", "ReportController");
                //CommonMethods.AddtoLogFile("GetAddressEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetPermanentAddressEditAppliationById(string id)
        {
            try
            {
                var res = RB.GetPermanentAddressEditAppliationById(id);
                var jsonResult = Json(res, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;

                //return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetPermanentAddressEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetPresentAddressEditAppliationById(string id)
        {
            try
            {
                var res = RB.GetPresentAddressEditAppliationById(id);

                var jsonResult = Json(res, JsonRequestBehavior.AllowGet);
                jsonResult.MaxJsonLength = int.MaxValue;
                return jsonResult;
                //return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetPresentAddressEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetAddressEditApplicationBenSno(string id)
        {

            try
            {
                var res = RB.GetAddressEditApplicationBenSno(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetAddressEditAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult VerifyBeneAddressDetails(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();
            string ipAddress = Helper.GetIPAddress();
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            try
            {
                var res = RB.VerifyAddressDetails(id, Remarks, Status, DeptUserid, ipAddress);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyBeneAddressDetails" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region beneficiary EDistrict Transport Workers Details Applications
        [CheckLogins]
        public ActionResult EDistrictBeneDetlsApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetEDistrictBeneDetlsAppliations(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GeteDistrictTWDataAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneDetlsAppliations" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetEDistrictBeneDetlsAppliationById(string id)
        {

            try
            {
                var res = RB.GeteDistrictTWDataAppliationById(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneDetlsAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult VerifyEDistrictBeneDetls(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                var res = RB.VerifyeDistrictTWDataDetails(id, Remarks, Status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyEDistrictBeneDetls" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region beneficiary EDistrict Construction Workers Details Applications
        [CheckLogins]
        public ActionResult EDistrictBeneDetlsApplicationsConst()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetEDistrictBeneDetlsAppliationsConst(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GeteDistrictCWDataAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneDetlsAppliationsConst" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetEDistrictBeneDetlsAppliationByIdConst(string id)
        {

            try
            {
                var res = RB.GeteDistrictCWDataAppliationById(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneDetlsAppliationByIdConst" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult VerifyEDistrictBeneDetlsConst(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                var res = RB.VerifyeDistrictCWDataDetails(id, Remarks, Status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyEDistrictBeneDetls" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Transport Worker New Users Renewel 
        [CheckLogins]
        public ActionResult TransWrkrNewUserRenewelApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0) //!=0 for live
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetTransWrkrNewUserRenewelApplications(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetRenewalAppliationsfromSLO(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetTransWrkrNewUserRenewelApplications" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetRenewalAppliationsfromSLOById(string id)
        {

            try
            {
                var res = RB.GetRenewalAppliationsfromSLOById(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetRenewalAppliationsfromSLOById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult VerifyRenewalAppliationsfromSLO(string id, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                string verifiedBy = Convert.ToString(Session["DeptUserid"]);
                var res = RB.VerifyRenewalAppliationsfromSLO(id, Remarks, Status, verifiedBy);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyRenewalAppliationsfromSLO" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Transport Worker Existing user Renewel Requests
        [CheckLogins]
        public ActionResult TransWrkrExistingUserRenewelApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetTransWrkrExistingUserRenewelApplications(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetDOBEditAppliation(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetPersonalEditAppliation" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Renewel Application From SLO to Inspector - for Approval

        [CheckLogins]
        public ActionResult EDistrictBeneRenewelApplications()
        {
            string userType = Convert.ToString(Session["UserType"]);
            if (string.IsNullOrEmpty(userType))
                return RedirectToAction("Index", "Home");
            string DeptUserid = Convert.ToString(Session["DeptUserid"]);

            var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);
            if (ResultData.Count != 0)
            {
                ViewBag.DeptUserid = DeptUserid;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult GetEDistrictBeneRenewelAppliations(string userId, string fromDate, string toDate, string status)
        {

            try
            {
                var res = RB.GetEDistrictBeneRenewelAppliations(userId, fromDate, toDate, status);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneRenewelAppliations" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetEDistrictBeneRenewelAppliationByBenSno(string id)
        {

            try
            {
                var res = RB.GetEDistrictBeneRenewelAppliationByBenSno(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetEDistrictBeneRenewelAppliationById" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult VerifyEDistrictRenewelDetls(string benSno, string Remarks, string Status)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                string verifiedBy = Convert.ToString(Session["DeptUserid"]);
                var res = RB.VerifyEDistrictRenewelDetls(benSno, Remarks, Status, verifiedBy);
                return Json(res, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Message = Message;
                CommonMethods.AddtoLogFile("VerifyEDistrictRenewelDetls" + DateTime.Now + "Error : " + Message);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Legacy Progress Report

        [CheckLogins]

        public ActionResult LegacyProgressReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);

                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
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
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {

                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
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
                Helper.AddtoLogFile("LegacyDataReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
        }

        #endregion

        #region SloPerformanceSummeryReport
        [CheckLogins]
        public ActionResult SloPerformanceSummeryReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);

                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseAll();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                        usr.district.RemoveAt(0);
                        usr.district.RemoveAt(0);
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        //usr.subdivision.RemoveAt(0);
                        //usr.subdivision.RemoveAt(0);
                    }
                    if (usertypeid == 6)
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

                    //usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                    //usr.muncorpname = HB.GetLocationwiseAll(-1);
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
                Helper.AddtoLogFile("SloPerformanceSummeryReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
            //return View();
        }
        #endregion

        #region SLO Perfomance Detailed Report
        [CheckLogins]
        public ActionResult SloPerformanceDetailReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var ResultData = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["Controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["Action"].ToString(), userType);

                if (ResultData.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.district = HB.GetDistrictwiseAll();
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                        usr.district.RemoveAt(0);
                        usr.district.RemoveAt(0);
                        usr.subdivision = HB.GetSubdivisionwiseAll(-1);
                        usr.muncorpname = HB.GetLocationwiseAll(-1);

                    }
                    if (usertypeid == 5)
                    {
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        //usr.subdivision.RemoveAt(0);
                        //usr.subdivision.RemoveAt(0);

                    }
                    if (usertypeid == 6)
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
                Helper.AddtoLogFile("SloPerformanceDetailReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
            //return View();
        }
        #endregion

        #region SLO Detailed Report
        [CheckLogins]
        public ActionResult SloMappingReport()
        {
            Reports usr = new Reports();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                if (string.IsNullOrEmpty(userType))
                    return RedirectToAction("Index", "Home");
                string DeptUserid = Convert.ToString(Session["DeptUserid"]);

                var resultdata = HB.GetUserRights("/" + Request.RequestContext.RouteData.Values["controller"].ToString() + "/" + Request.RequestContext.RouteData.Values["action"].ToString(), userType);

                if (resultdata.Count != 0)
                {
                    int usertypeid = Convert.ToInt32(Session["UserType"]);
                    int deptuserid = Convert.ToInt32(Session["DeptUserid"]);
                    var res = HB.GetDeptUserbyId(deptuserid.ToString());
                    if (usertypeid == 5)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.GetsubdivbyId(Convert.ToString(res.SubDivId));

                        //usr.psname = HB.GetPS(0);
                        //usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        //usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 6)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrictbyID(Convert.ToInt16(res.DistId));
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        //usr.psname = HB.GetPS(0);
                        //usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        //usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 7 || usertypeid == 3 || usertypeid == 4)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        //usr.psname = HB.GetPS(0);
                        //usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        //usr.religion = HB.GetreligionALL();
                    }
                    if (usertypeid == 1 || usertypeid == 2 || usertypeid == 21 || usertypeid == 22 || usertypeid == 23 || usertypeid == 24)
                    {
                        usr.Type = HB.GetType(0);
                        usr.Role = HB.GetRoles(-1);
                        usr.Users = HB.GetdeptUsers("", 0, "", "");
                        usr.district = HB.GetDistrict();
                        usr.muncorpname = HB.GetTotalblockBySubdiv(0);
                        usr.subdivision = HB.Getsubdivision(0);
                        //usr.psname = HB.GetPS(0);
                        //usr.poname = HB.GetPO(0);
                        usr.wardname = HB.GetGP(-1);
                        //usr.religion = HB.GetreligionALL();
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
                Helper.AddtoLogFile("SloDetailReport" + DateTime.Now + "Error : " + Message);
                return RedirectToAction("Index", "Home");
            }
            //return View();
        }
        #endregion



    }
}