using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
namespace SSY.Data
{
    public class ReportData
    {
        SSYEntities db = new SSYEntities();


        #region
        public List<SpDetailedReport> GetDetailedReport(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
        {
            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);
            var List = new List<SpDetailedReport>();
            var res = db.SP_DeailedReport(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, skip, pageSize, SearchValue, Value, FormStatus, PoList, PsList, GpList, Religion).ToList();

            int i = skip + 1;

            foreach (var m in res)
            {
                List.Add(new SpDetailedReport
                {
                    Sno = Convert.ToString(i),
                    SSINNo = m.SSINNo,
                    SchemeNo = m.SchemeNo,
                    RegDate = m.RegDate,
                    Name = m.Name,
                    fathername = m.fathername,
                    DOB = m.DOB,
                    Mobileno = m.Mobileno,
                    VerifyDate = m.VerifyDate,
                    BenSno = m.BenSno,
                    WorkerType = m.WorkerType,
                    Status = m.Status,
                    PFStatus = m.PFStatus,
                    DistrictName = m.DistrictName,
                    SubDivisionName = m.SubDivisionName,
                    BlockName = m.BlockName,
                    FormStatus = m.FormStatus,
                    Village = m.Village,
                    PsName = m.PsName,
                    PoName = m.PoName,
                    Religion = m.Religion,
                    GpWard = m.GpWard



                });
                i++;
            }
            return List;
        }
        public List<SpDetailedReport> DetReportData(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
        {
            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);
            var List = new List<SpDetailedReport>();
            var res = db.SpDetailedReportLatest(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, skip, pageSize, SearchValue, Value, FormStatus, PoList, PsList,  GpList, Religion).ToList();

            int i = skip + 1;

            foreach (var m in res)
            {
                List.Add(new SpDetailedReport
                {
                    Sno = Convert.ToString(i),
                    SSINNo = m.SSINNo,
                    SchemeNo = m.SchemeNo,
                    RegDate = m.RegDate,
                    Name = m.Name,
                    fathername = m.fathername,
                    DOB = m.DOB,
                    Mobileno = m.Mobileno,
                    VerifyDate = m.VerifyDate,
                    BenSno = m.BenSno,
                    WorkerType = m.WorkerType,
                    Status = m.Status,
                    PFStatus = m.PFStatus,
                    DistrictName = m.DistrictName,
                    SubDivisionName = m.SubDivisionName,
                    BlockName = m.BlockName,
                    FormStatus = m.FormStatus,
                    Village = m.Village,
                    PsName = m.PsName,
                    PoName = m.PoName,
                    Religion = m.Religion,
                    GpWard = m.GpWard



                });
                i++;
            }
            return List;
        }
        #endregion

        #region
        public List<SpDetailedReport> GetDetailedRep(string RequestId, int UserId, int Skip, int Page, string SearchValue)
        {
            var List = new List<SpDetailedReport>();
            // var fdate = CommonMethods.dateconvertion(Fromdate);
            // var tdate = CommonMethods.dateconvertion(Todate);

            var res = db.SpGetDetailReport(RequestId, UserId, Skip, Page, SearchValue).ToList();
            int i = Skip + 1;

            foreach (var m in res)
            {
                List.Add(new SpDetailedReport
                {
                    Sno = Convert.ToString(i),
                    SSINNo = m.SSINNo,
                    SchemeNo = m.SchemeNo,
                    RegDate = m.RegDate,
                    Name = m.Name,
                    fathername = m.FatherName,
                    DOB = m.DOB,
                    Mobileno = m.Mobileno,
                    VerifyDate = m.VerifyDate,
                    BenSno = m.BenSno,
                    WorkerType = m.WorkerType,
                    Status = m.Status,
                    PFStatus = m.PFStatus,
                    DistrictName = m.DistrictName,
                    SubDivisionName = m.SubDivisionName,
                    BlockName = m.BlockName


                });
                i++;
            }
            return List;
        }
        #endregion


        #region

        public string GetDetRepCount(string SearchValue)
        {
            var count = (from x in db.TblTempBenificiaryDetReps where x.RequestId == SearchValue select x.Id).Count();

            return count.ToString();
        }

        #endregion

        #region
        public List<SpDownloadDetailedReport_Result> DownloadDetailedRep(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid)
        {
            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);

            var res = db.SpDownloadDetailedReport(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid).ToList();
            return res;
        }
        #endregion

        #region

        public List<SpGetDownLoadRequestData_Result> GetDownloadReqData(string RequestId)
        {


            var res = db.SpGetDownLoadRequestData(Convert.ToInt32(RequestId)).ToList();
            return res;
        }


        #endregion

        #region

        public string GetReportName(int RequestId)
        {
            string Name = (from x in db.TblDownlaodRequests where x.Id == RequestId select x.Report_Name).FirstOrDefault();

            return Name;
        }
        #endregion


        #region Registration report download submit

        public List<TblOfflineRegReport> GetDownloadReqDataRegReport(string RequestId)
        {
            int ReqId = Convert.ToInt32(RequestId);
            var res = (from x in db.TblOfflineRegReports where x.ReqId == ReqId select x).ToList();

            List<TblOfflineRegReport> Data = new List<TblOfflineRegReport>();

            Int64 Legacy1 = 0;
            Int64 Legacy2 = 0;
            Int64 NewBasic = 0;
            Int64 NewFull = 0;
            Int64 Caf = 0;

            foreach (var d in res)
            {
                TblOfflineRegReport ret = new TblOfflineRegReport();

                ret.DistrictName = d.DistrictName;
                ret.SubDivisionName = d.SubDivisionName;
                ret.Legacy1 = d.Legacy1;
                ret.Lecgacy2 = d.Lecgacy2;
                ret.NewApplicationBasic = d.NewApplicationBasic;
                ret.NewApplicationFull = d.NewApplicationFull;
                ret.Caf = d.Caf;

                Legacy1 = Legacy1 + d.Legacy1 ?? 0;
                Legacy2 = Legacy2 + d.Lecgacy2 ?? 0;
                NewBasic = NewBasic + d.NewApplicationBasic ?? 0;
                NewFull = NewFull + d.NewApplicationFull ?? 0;
                Caf = Caf + d.Caf ?? 0;

                Data.Add(ret);



            }

            TblOfflineRegReport res1 = new TblOfflineRegReport();

            res1.DistrictName = "";

            res1.SubDivisionName = "Total";
            res1.Legacy1 = Legacy1;
            res1.Lecgacy2 = Legacy2;
            res1.NewApplicationBasic = NewBasic;
            res1.NewApplicationFull = NewFull;
            res1.Caf = Caf;
            Data.Add(res1);


            return Data;
        }
        #endregion

        #region

        public string UpdateDownloadRequest(int Id, string Name)
        {
            try
            {
                var res = db.SpUpdateDownlaodRequest(Id, Name);
                return "";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        #endregion

        //#region
        //public List<SpSloReport_Result> GetUserRep(int deptuserid, string Fromdate, string Todate)
        //{
        //    var fdate = CommonMethods.dateconvertion(Fromdate);
        //    var tdate = CommonMethods.dateconvertion(Todate);
        //    var res = db.SpSloReport(Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), deptuserid).ToList();
        //    return res;
        //}
        //#endregion

        #region
        public List<SpPaymentReport_Result> GetPaymentRep(int deptuserid, int Benid, string Fromdate, string Todate)
        {
            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);
            var res = db.SpPaymentReport(deptuserid, Benid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }
        #endregion

        #region
        public List<SelectListItem> GetblockforSubRepJSON(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBlockDetailbySubdivRep(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetblockforDisRepJSON(int Id)
        {
            List<SelectListItem> list = null;
            var res = db.Sp_GetLocationsByDistrictId(Id).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "-1" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetBlocksBySubDivision(string Id)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetLocationBySubDiv(Id).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "-1" });
            return list;
        }
        #endregion

        //#region
        //public List<SpDistrictWiseAbstract_Result> GetDistabstractreport(string userType, int deptuserid)
        //{
        //    var res = db.SpDistrictWiseAbstract(userType, deptuserid).ToList();
        //    return res;
        //}
        //#endregion

        //#region
        //public List<SpSubDivisionWiseAbstrac_Result> GetSDabstractreport(int DistrictId)
        //{
        //    var res = db.SpSubDivisionWiseAbstrac(DistrictId).ToList();
        //    return res;
        //}
        //#endregion

        //#region
        //public List<LocationWiseAbstract_Result> GetLocationreport(int SubDivId)
        //{
        //    var res = db.LocationWiseAbstract(SubDivId).ToList();
        //    return res;
        //}
        //#endregion

        #region
        public List<SpDeatiledAbstractReport_Result> DeatiledAbstractReport(int LocationId, int status)
        {
            var res = db.SpDeatiledAbstractReport(LocationId, status).ToList();
            return res;
        }
        #endregion

        #region
        public List<Districtwise> GetDistrictwiseDetailedRep(string District, string Scheme)
        {
            var res = db.SpAllDistrictWiseSummary(District, Scheme).ToList();
            var res1 = db.SpDatewiseDistrictWiseSummary(District, Scheme).ToList();
            List<Districtwise> lst = new List<Districtwise>();
            foreach (var k in res)
            {
                Districtwise ret = new Districtwise();
                string districtname = k.DistrictName;
                var res2 = (from x in res1 where x.DistrictName == districtname select x).FirstOrDefault();
                ret.CUdistname = k.DistrictName;
                ret.CUsubmited = (k.Submitted).ToString();
                ret.CUapprove = (k.Approved).ToString();
                ret.CRejected = (k.Rejected).ToString();
                if (res2 == null)
                {
                    ret.Ysubmited = "0";
                    ret.Yapprove = "0";
                    ret.Yrejected = "0";
                }
                else
                {
                    ret.Ysubmited = res2.Submitted.ToString();
                    ret.Yapprove = res2.Approved.ToString();
                    ret.Yrejected = res2.Rejected.ToString();
                }
                lst.Add(ret);
            }
            return lst;
        }
        #endregion

        #region
        public List<DistrictWiseSummary> DetailedSummary(string District, string FromDate, string ToDate, string Scheme)
        {
            var fdate = CommonMethods.dateconvertion(FromDate);
            var tdate = CommonMethods.dateconvertion(ToDate);
            int dis = Convert.ToInt32(District);
            var res = db.SpSSINSummaryReport(District, "", "", Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), 0, Scheme, 0).ToList();
            List<DistrictWiseSummary> lst = new List<DistrictWiseSummary>();
            var districts = (from x in db.TblDistrictMsts select x.DistrictName).ToList();
            if (District != "0")
                districts = (from x in db.TblDistrictMsts where x.DistrictId == dis select x.DistrictName).ToList();
            foreach (var k in districts)
            {
                DistrictWiseSummary det = new DistrictWiseSummary();
                var res1 = (from x in res where x.DistrictName == k select x).FirstOrDefault();
                if (res1 == null)
                {
                    det.DistrictName = k;
                    det.TotalSSIN = "0";
                }
                else
                {
                    det.DistrictName = k;
                    det.TotalSSIN = res1.GenaratedCount.ToString();
                }
                var res2 = db.SpSSINDetaledSummary(k, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), Scheme).ToList();
                var res3 = (from x in res2 where x.Type == "N" select x).FirstOrDefault();
                if (res3 == null)
                {
                    det.NReceived = "0";
                    det.NPending = "0";
                    det.NApproved = "0";
                }
                else
                {
                    det.NReceived = (res3.Recived).ToString();
                    det.NPending = (res3.Pending).ToString();
                    det.NApproved = (res3.Approve).ToString();
                }
                var res4 = (from x in res2 where x.Type == "L" select x).FirstOrDefault();
                if (res4 == null)
                {
                    det.CApproved = "0";
                    det.CPending = "0";
                    det.CReceived = "0";
                }
                else
                {
                    det.CApproved = res4.Approve.ToString();
                    det.CPending = res4.Pending.ToString();
                    det.CReceived = res4.Recived.ToString();
                }
                lst.Add(det);
                //det.NReceived = res1.
            }
            return lst;
        }
        #endregion

        #region
        public List<SpGetEdiNomDep_Result> GetBenEditDetReport(int deptuserid, int Status)
        {
            var res = db.SpGetEdiNomDep(deptuserid, Status).ToList();
            return res;
        }
        #endregion


        #region Get Delete Request Details
        public List<GetDeleteRequests_Result> GetDeleteRequestDet(int deptuserid, int Status)
        {
            var res = db.GetDeleteRequests(deptuserid, Status).ToList();

            return res;
        }
        #endregion

        #region
        public List<SpGetNomineeTempDetails_Result> GetBenEditNom(int Id)
        {
            var res = db.SpGetNomineeTempDetails(Id).ToList();
            return res;
        }
        #endregion

        #region
        public List<GetFamilyTempDet_Result> GetBenEditFamily(int Id)
        {
            var res = db.GetFamilyTempDet(Id).ToList();
            return res;
        }
        #endregion

        #region
        //public string BenEditDetailsVerfication(int Status, int Id, string Remarks, int DeptUserid)
        public string BenEditDetailsVerfication(string Status, string Id, string Remarks, string DeptUserid)
		{
            try
            {
                var res = db.SpUpdateNomineeDeoendent(Convert.ToInt32(Id), Convert.ToInt32(Status), Convert.ToInt32(DeptUserid), Remarks).FirstOrDefault();
                if (res.Code == "000")
                {
                    if (Convert.ToInt32(Status) == 1)
                        return "Your Details Approved Successfully";
                    else
                        return "Rejected";
                }
                else
                {
                    return res.Message;
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion

        #region
        public List<SelectListItem> GetSubDivByDistrict(string Id)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetSubdivisionsByDistrct(Id).ToList();
            list = (from x in res
                        // where x.BlockSno == subdivid
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "-1" });
            return list;
        }
        #endregion

        #region
        public List<SpPfDetails_Result> GetEditPfDetReport(int deptuserid, string Status, string fromdate, string todate)
        {
            var fdate = CommonMethods.dateconvertion(fromdate);
            var tdate = CommonMethods.dateconvertion(todate);

            var res = db.SpPfDetails(deptuserid, Status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }
        #endregion


        #region
        public string EditPfVerfication(int Id, int Status, string Remarks)
        {
            try
            {
                var res = db.SpPfDetailsVerify(Id, Status, Remarks).FirstOrDefault();
                // return res.Code;
                if (res.Code == "000")
                {
                    if (Status == 1)
                        return "Your Details Approved Successfully";
                    else
                        return "Rejected";
                }
                else
                {
                    return res.Message;
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion

        #region
        public List<SpLegacyDataReport> GetLegacyDataRep(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int Skip, int Page, int deptuserid, string SearchValue)
        {
            var List = new List<SpLegacyDataReport>();

            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);


            int i = Skip + 1;

            if (SearchValue != "")
            {
                i = 1;
            }
            var res = db.SpLegacyDataReport(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), schemeid, SchemeStatus, Skip, Page, deptuserid, SearchValue).ToList();
            foreach (var m in res)
            {
                List.Add(new SpLegacyDataReport
                {

                    Sno = Convert.ToString(i),
                    BenSno = m.BenSno,
                    SSINNo = m.SSINNo,
                    WorkerType = m.WorkerType,
                    SchemeNo = m.SchemeNo,
                    RegDate = m.RegDate,
                    VerifyDate = m.VerifyDate,
                    Name = m.Name,
                    fathername = m.fathername,
                    DOB = m.DOB,
                    Mobileno = m.Mobileno,
                    PFStatus = m.PFStatus,
                    DistrictName = m.DistrictName,
                    SubDivisionName = m.SubDivisionName,
                    BlockName = m.BlockName,
                    Status = m.Status


                });
                i++;
            }

            return List;
        }
        #endregion

        #region
        public string GetLegacyDataRepCount(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus)
        {
            try
            {
                var fdate = CommonMethods.dateconvertion(Fromdate);
                var tdate = CommonMethods.dateconvertion(Todate);

                var res = db.SpLegacyDataReportCount(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), schemeid, SchemeStatus).FirstOrDefault();

                return res.ToString();
            }

            catch (Exception ex)
            {
                return "30000";
            }


        }
        #endregion

        #region

        public string GetLegacyDataRepCount(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int Skip, int Page, string searchval)
        {

            var fdate = CommonMethods.dateconvertion(Fromdate);
            var tdate = CommonMethods.dateconvertion(Todate);

            var res = db.SpCountLegacyReport(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), schemeid, SchemeStatus, Skip, Page, searchval).FirstOrDefault();
            return res.ToString();
        }
        #endregion

        #region
        public string GetDetailReportCount(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
        {
            try
            {
                var fdate = CommonMethods.dateconvertion(Fromdate);
                var tdate = CommonMethods.dateconvertion(Todate);

                Int64 Count = 0;

                var res = db.SpDetailedReportCountLatest(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, 0, 0, "", Value, FormStatus, PoList, PsList, GpList, Religion).ToList();

                foreach (var d in res)
                {
                    Count = (Count + d) ?? 0;
                }

                return Count.ToString();
            }

            catch (Exception ex)
            {
                return "50000";
            }

        }

        #endregion


        #region legacy and detailed
        public string DwnldSaveLegacyData(string District, string subdiv, string location, string AppStatus, string reportname, string fromdate, string todate, int userid, string schemeid, string USerType = "", string UserRole = "", string Users = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {

            try
            {
                var fdate = CommonMethods.dateconvertion(fromdate);
                var tdate = CommonMethods.dateconvertion(todate);

                var res = db.SpSaveDownlaodRequest(userid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), District, subdiv, location, AppStatus, reportname, schemeid, USerType, UserRole, Users, Value, FormStatus,  PoList, PsList, GpList, Religion);

                return "Download Request Is Received";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion



        #region legacy and detailed
        public string SaveDownloadRequest(string fromDate, string toDate, string District, string SubDiv, string Locations, string Schemes, int UserId, string ReportName)
        {

            try
            {
                var fdate = CommonMethods.dateconvertion(fromDate);
                var tdate = CommonMethods.dateconvertion(toDate);

                var res = db.SpSaveDownlaodRequest(UserId, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), District, SubDiv, Locations, null, ReportName, Schemes, null, null, null, null, "",null,null,null,null);

                return "Download Request Is Received";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion

        #region
        public List<SpGetDownlaodRequests_Result> GetDwnldRep(int userid)
        {
            //try
            //{
            var res = db.SpGetDownlaodRequests(userid).ToList();
            return res;
            // }
            //catch (Exception ex)
            //{
            //    //return ex.Message.ToString(); 

            //}
        }
        #endregion


        #region
        public List<SelectListItem> GetblockforSubRepIdsJSON(string subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBlockDetailbySubdivIds(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SpGetDraftApplication_Result> GetDraftApplication(int Id)
        {
            var res = db.SpGetDraftApplication(Id, null, null).ToList();

            return res;


        }
        #endregion

        #region

        public List<SpGetEditBankDetApp_Result> GetBankEditAppliation(string userId, string fromDate, string toDate, string status)
        {
            var fdate = CommonMethods.dateconvertion(fromDate);
            var tdate = CommonMethods.dateconvertion(toDate);
            var res = db.SpGetEditBankDetApp(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }

        #endregion
        #region

        public object GetBankEditAppliationById(string id)
        {
            var res = db.SpGetEditBankDetAppById(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }
        #endregion


        #region

        public RequestResponse VerifyBankDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            RequestResponse Res = new RequestResponse();
            var res = db.SpVerifiyBankDetails(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks, Convert.ToInt32(userid), ipadd).FirstOrDefault();
            Res.Code = res.Code;
            Res.Message = res.Message;

            return Res;
        }
        #endregion

        #region 

        public List<SpGetEditPersonalDetApp_Result> GetPersonalEditAppliation(string userId, string fromDate, string toDate, string status)
        {
            var fdate = CommonMethods.dateconvertion(fromDate);
            var tdate = CommonMethods.dateconvertion(toDate);
            var res = db.SpGetEditPersonalDetApp(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }

		public List<SpGetEditPersonalHusbandDetApp_Result> GetPersonalHusbandEditAppliation(string userId, string fromDate, string toDate, string status)
		{
			var fdate = CommonMethods.dateconvertion(fromDate);
			var tdate = CommonMethods.dateconvertion(toDate);
			var res = db.SpGetEditPersonalHusbandDetApp(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
			return res;
		}


		public object GetPersonalEditAppliationById(string id)
        {
            var res = db.SpGetEditPersonalDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }

		public object GetPersonalHusbandEditAppliationById(string id)
		{
			var res = db.SpGetEditPersonalHusbandDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
			return res;
		}

		public RequestResponse VerifyPersonalDetails(string id, string Remarks, string Status, string bengaliName, string userid, string ipadd)
        {
            RequestResponse Res = new RequestResponse();
            var res = db.SpVerifiyPersonalDetails(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks, bengaliName, Convert.ToInt32(userid), ipadd).FirstOrDefault();
            Res.Code = res.Code;
            Res.Message = res.Message;

            return Res;
        }

		public RequestResponse VerifyBenePersonalHusbandDetails(string id, string Remarks, string Status, string bengaliName, string userid, string ipadd)
		{
			RequestResponse Res = new RequestResponse();
			var res = db.SpVerifiyPersonalHusbandDetails(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks, bengaliName, Convert.ToInt32(userid), ipadd).FirstOrDefault();
			Res.Code = res.Code;
			Res.Message = res.Message;

			return Res;
		}
		#endregion

		#region 

		public List<SpGetEditDOBDetApp_Result> GetDOBEditAppliation(string userId, string fromDate, string toDate, string status)
        {
            var fdate = CommonMethods.dateconvertion(fromDate);
            var tdate = CommonMethods.dateconvertion(toDate);
            var res = db.SpGetEditDOBDetApp(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }

        public object GetDOBEditAppliationById(string id)
        {
            var res = db.SpGetEditPersonalDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }

        public RequestResponse VerifyDOBDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            RequestResponse Res = new RequestResponse();
            var res = db.SpVerifiyDOBDetails(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks, Convert.ToInt32(userid), ipadd).FirstOrDefault();
            Res.Code = res.Code;
            Res.Message = res.Message;

            return Res;
        }
        #endregion
        #region 

        public List<SpGetEditAddressDetApp_Result> GetAddressEditAppliation(string userId, string fromDate, string toDate, string status)
        {
            var fdate = CommonMethods.dateconvertion(fromDate);
            var tdate = CommonMethods.dateconvertion(toDate);
            var res = db.SpGetEditAddressDetApp(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
            return res;
        }

        public object GetAddressEditAppliationById(string id)
        {
            var res = db.SpGetEditAddressDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }
        public object GetPermanentAddressEditAppliationById(string id)
        {
            var res = db.SpGetEditPermanentAddressDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }
        public object GetPresentAddressEditAppliationById(string id)
        {
            var res = db.SpGetEditPresentAddressDetAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
            return res;
        }
        public object GetAddressEditApplicationBenSno(string id)
        {
            var res = db.SpGetBenSnoByAddressEditID(id).FirstOrDefault();
            return res;
        }

        public RequestResponse VerifyAddressDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            RequestResponse Res = new RequestResponse();
            var res = db.SpVerifiyAddressDetails(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks, Convert.ToInt32(userid), ipadd).FirstOrDefault();
            Res.Code = res.Code;
            Res.Message = res.Message;

            return Res;
        }
		#endregion


		#region  eDistrictTWData

		public List<SpGeteDistTWDataApplications_Result> GeteDistrictTWDataAppliation(string userId, string fromDate, string toDate, string status)
		{
			var fdate = CommonMethods.dateconvertion(fromDate);
			var tdate = CommonMethods.dateconvertion(toDate);
			var res = db.SpGeteDistTWDataApplications(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
			return res;
		}

		public object GeteDistrictTWDataAppliationById(string id)
		{
			var res = db.SpGeteDistTWDataAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
			return res;
		}

		public RequestResponse VerifyeDistrictTWDataDetails(string id, string Remarks, string Status)
		{
			RequestResponse Res = new RequestResponse();
			var res = db.SpVerifiyeDistTWDataApplication(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks).FirstOrDefault();
			Res.Code = res.Code;
			Res.Message = res.Message;

			return Res;
		}
		#endregion

		#region  eDistrict Construction Workers Data

		public List<SpGeteDistCWDataApplications_Result> GeteDistrictCWDataAppliation(string userId, string fromDate, string toDate, string status)
		{
			var fdate = CommonMethods.dateconvertion(fromDate);
			var tdate = CommonMethods.dateconvertion(toDate);
			var res = db.SpGeteDistCWDataApplications(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
			return res;
		}

		public object GeteDistrictCWDataAppliationById(string id)
		{
			var res = db.SpGeteDistCWDataAppByIdExt(Convert.ToInt32(id)).FirstOrDefault();
			return res;
		}

		public RequestResponse VerifyeDistrictCWDataDetails(string id, string Remarks, string Status)
		{
			RequestResponse Res = new RequestResponse();
			var res = db.SpVerifiyeDistCWDataApplication(Convert.ToInt32(id), Convert.ToInt32(Status), Remarks).FirstOrDefault();
			Res.Code = res.Code;
			Res.Message = res.Message;

			return Res;
		}
		#endregion

		#region Detailed Report New
		public List<SpDetailedReport> DetReportDataNew(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
		{
			var fdate = CommonMethods.dateconvertion(Fromdate);
			var tdate = CommonMethods.dateconvertion(Todate);
			var List = new List<SpDetailedReport>();
			var res = db.SpDetailedReportLatestNewExt(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, skip, pageSize, SearchValue, Value, FormStatus, PoList, PsList, GpList, Religion).ToList();

			int i = skip + 1;

			foreach (var m in res)
			{
				List.Add(new SpDetailedReport
				{
					Sno = Convert.ToString(i),
					SSINNo = m.SSINNo,
					SchemeNo = m.SchemeNo,
					RegDate = m.RegDate,
					Name = m.Name,
					fathername = m.fathername,
					DOB = m.DOB,
					Mobileno = m.Mobileno,
					VerifyDate = m.VerifyDate,
					BenSno = m.BenSno,
					WorkerType = m.WorkerType,
					Status = m.Status,
					PFStatus = m.PFStatus,
					DistrictName = m.DistrictName,
					SubDivisionName = m.SubDivisionName,
					BlockName = m.BlockName,
					FormStatus = m.FormStatus,
					Village = m.Village,
					PsName = m.PsName,
					PoName = m.PoName,
					Religion = m.Religion,
					GpWard = m.GpWard,
					EpicCard = m.EpicCard,
					AadharCard = m.AadharCard,
					BenBankAccNo = m.BenBankAccNo,
					BenBankIfscCode = m.BenBankIfscCode



				});
				i++;
			}
			return List;
		}

		public string GetDetailReportCountNew(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
		{
			try
			{
				var fdate = CommonMethods.dateconvertion(Fromdate);
				var tdate = CommonMethods.dateconvertion(Todate);

				Int64 Count = 0;

				var res = db.SpDetailedReportCountLatestNew(Districtid, Subdivid, Locid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, schemeid, usertypeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, 0, 0, "", Value, FormStatus, PoList, PsList, GpList, Religion).ToList();

				foreach (var d in res)
				{
					Count = (Count + d) ?? 0;
				}

				return Count.ToString();
			}

			catch (Exception ex)
			{
				return "50000";
			}

		}


		public List<SelectListItem> GetblockforDisRepJSONNew(int Id)
		{
			List<SelectListItem> list = null;
			var res = db.Sp_GetLocationsByDistrictIdNew(Id).ToList();
			list = (from x in res
					select new SelectListItem()
					{
						Text = x.BlockName,
						Value = x.BlockSno.ToString()
					}).ToList();
			list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
			return list;
		}

		public List<SelectListItem> GetblockforSubRepJSONNew(int subdivid)
		{
			List<SelectListItem> list = null;
			var res = db.SpGetBlockDetailbySubdivRepNew(subdivid).ToList();
			list = (from x in res
					select new SelectListItem()
					{
						Text = x.BlockName,
						Value = x.BlockSno.ToString()
					}).ToList();
			list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "-1" });
			return list;
		}

		public string DwnldSaveLegacyDataNew(string District, string subdiv, string location, string AppStatus, string reportname, string fromdate, string todate, int userid, string schemeid, string USerType = "", string UserRole = "", string Users = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
		{

			try
			{
				var fdate = CommonMethods.dateconvertion(fromdate);
				var tdate = CommonMethods.dateconvertion(todate);

				var res = db.SpSaveDownlaodRequestNew(userid, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), District, subdiv, location, AppStatus, reportname, schemeid, USerType, UserRole, Users, Value, FormStatus, PoList, PsList, GpList, Religion);

				return "Download Request Is Received";
			}
			catch (Exception ex)
			{
				return ex.Message.ToString();
			}
		}
		#endregion

		#region  eDistrict Renewel Details Approval

		public List<SpGeteDistRenewelApplications_Result> GetEDistrictBeneRenewelAppliations(string userId, string fromDate, string toDate, string status)
		{
			var fdate = CommonMethods.dateconvertion(fromDate);
			var tdate = CommonMethods.dateconvertion(toDate);
			var res = db.SpGeteDistRenewelApplications(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
			return res;
		}

		public List<SpGeteDistReneweldataByBenSno_Result> GetEDistrictBeneRenewelAppliationByBenSno(string benSno)
		{
			var res = db.SpGeteDistReneweldataByBenSno(benSno).ToList();
			return res;
		}

		public RequestResponse VerifyEDistrictRenewelDetls(string benSno, string remarks, string status,string verifiedBy)
		{
			RequestResponse Res = new RequestResponse();
			var res = db.SpVerifiyeDistRenewelDetailsofBene(benSno, Convert.ToInt32(status), remarks, verifiedBy).FirstOrDefault();
			Res.Code = res.Code;
			Res.Message = res.Message;

			return Res;
		}
		#endregion

		#region GetRenewal Applications from SLO

		public List<SpGeteDistRenewelApplicationsfromSLO_Result> GetRenewalAppliationsfromSLO(string userId, string fromDate, string toDate, string status)
		{
			var fdate = CommonMethods.dateconvertion(fromDate);
			var tdate = CommonMethods.dateconvertion(toDate);
			var res = db.SpGeteDistRenewelApplicationsfromSLO(Convert.ToInt32(userId), status, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate)).ToList();
			return res;
		}

		public object GetRenewalAppliationsfromSLOById(string id)
		{
			var res = db.SpGeteDistReneweldatafromSLOById(id).FirstOrDefault();
			return res;
		}

		public RequestResponse VerifyRenewalAppliationsfromSLO(string id, string Remarks, string Status, string verifiedBy)
		{
			RequestResponse Res = new RequestResponse();
			var res = db.SpVerifiyeDistRenewelDetailsofBenefromSLO(id, Convert.ToInt32(Status), Remarks, verifiedBy).FirstOrDefault();
			Res.Code = res.Code;
			Res.Message = res.Message;

			return Res;
		}
		#endregion
	}
}
