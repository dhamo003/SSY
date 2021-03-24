using SSY.Data;
using SSY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
namespace SSY.Bussiness
{
    public class ReportBussiness
    {
        ReportData RD = new ReportData();
        #region
        public List<SpDetailedReport> GetDetailedRep(string RequestId, int UserId, int Skip, int Page, string SearchValue)
        {
            return RD.GetDetailedRep(RequestId, UserId, Skip, Page, SearchValue);
        }
        #endregion

        #region
        public List<SpDetailedReport> DetReportData(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus,string GpList,string PoList,string PsList,string Religion)
        {
            return RD.DetReportData(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);
        }

        // Created by bala for detailed report fix
        public List<SpDetailedReport> GetDetailedReport(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
        {
            return RD.GetDetailedReport(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);
        }

        #endregion

        #region
        public string GetDetailReportCount(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, string Value, string FormStatus,string GpList, string PoList, string PsList, string Religion)
        {

            return RD.GetDetailReportCount(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);
        }
        #endregion


        #region
        public string GetDetRepCount(string SearchValue)
        {
            return RD.GetDetRepCount(SearchValue);
        }
        #endregion
        #region
        public List<SpDownloadDetailedReport_Result> DownloadDetailedRep(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid)
        {
            return RD.DownloadDetailedRep(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid);
        }
        #endregion

        #region
        public List<SpGetDownLoadRequestData_Result> GetDownloadReqData(string RequestId)
        {
            return RD.GetDownloadReqData(RequestId);
        }
        #endregion


        #region

        public string GetReportName(int RequestId)
        {

            return RD.GetReportName(RequestId);

        }
        #endregion
        #region

        public List<TblOfflineRegReport> GetDownloadReqDataRegReport(string RequestId)
        {

            return RD.GetDownloadReqDataRegReport(RequestId);

        }
        #endregion

        #region
        public string UpdateDownloadRequest(int Id, string Name)
        {
            return RD.UpdateDownloadRequest(Id, Name);
        }
        #endregion
        //#region
        //public List<SpSloReport_Result> GetUserRep(int deptuserid, string Fromdate, string Todate)
        //{
        //    return RD.GetUserRep(deptuserid, Fromdate, Todate);
        //}
        //#endregion
        #region
        public List<SpPaymentReport_Result> GetPaymentRep(int deptuserid, int Benid, string Fromdate, string Todate)
        {
            return RD.GetPaymentRep(deptuserid, Benid, Fromdate, Todate);
        }
        #endregion
        //#region
        //public List<SpDistrictWiseAbstract_Result> GetDistabstractreport(string userType, int deptuserid)
        //{
        //    return RD.GetDistabstractreport(userType, deptuserid);
        //}
        //#endregion
        #region
        public List<SelectListItem> GetblockforSubRepJSON(int subdivid)
        {
            return RD.GetblockforSubRepJSON(subdivid);
        }
        #endregion
        #region
        public List<SelectListItem> GetblockforDisRepJSON(int Id)
        {
            return RD.GetblockforDisRepJSON(Id);
        }
        #endregion
        #region
        public List<SelectListItem> GetBlocksBySubDivision(string Id)
        {
            return RD.GetBlocksBySubDivision(Id);
        }
        #endregion
        //#region
        //public List<SpSubDivisionWiseAbstrac_Result> GetSDabstractreport(int DistrictId)
        //{
        //    return RD.GetSDabstractreport(DistrictId);
        //}
        //#endregion
        //#region
        //public List<LocationWiseAbstract_Result> GetLocationreport(int SubDivId)
        //{
        //    return RD.GetLocationreport(SubDivId);
        //}
        //#endregion
        #region
        public List<SpDeatiledAbstractReport_Result> DeatiledAbstractReport(int LocationId, int status)
        {
            return RD.DeatiledAbstractReport(LocationId, status);
        }
        #endregion
        #region
        public List<Districtwise> GetDistrictwiseDetailedRep(string District, string Scheme)
        {
            return RD.GetDistrictwiseDetailedRep(District, Scheme);
        }
        #endregion
        #region
        public List<DistrictWiseSummary> DetailedSummary(string District, string FromDate, string ToDate, string Scheme)
        {
            return RD.DetailedSummary(District, FromDate, ToDate, Scheme);
        }
        #endregion
        #region
        public List<SpGetEdiNomDep_Result> GetBenEditDetReport(int deptuserid, int Status)
        {
            return RD.GetBenEditDetReport(deptuserid, Status);
        }
        #endregion

        #region Get Delete Request Details
        public List<GetDeleteRequests_Result> GetDeleteRequestDet(int deptuserid, int Status)
        {
            return RD.GetDeleteRequestDet(deptuserid, Status);
        }
        #endregion
        #region
        public List<SpGetNomineeTempDetails_Result> GetBenEditNom(int Id)
        {
            return RD.GetBenEditNom(Id);
        }
        #endregion
        #region
        public List<GetFamilyTempDet_Result> GetBenEditFamily(int Id)
        {
            return RD.GetBenEditFamily(Id);
        }
        #endregion
        #region
        //public string BenEditDetailsVerfication(int Status, int Id, string Remarks, int DeptUserid)
        public string BenEditDetailsVerfication(string Status, string Id, string Remarks, string DeptUserid)
        {
            return RD.BenEditDetailsVerfication(Status, Id, Remarks, DeptUserid);
        }
        #endregion
        #region
        public List<SelectListItem> GetSubDivByDistrict(string Id)
        {
            return RD.GetSubDivByDistrict(Id);
        }
        #endregion
        #region
        public List<SpPfDetails_Result> GetEditPfDetReport(int deptuserid, string Status, string fromdate, string todate)
        {
            return RD.GetEditPfDetReport(deptuserid, Status, fromdate, todate);
        }
        #endregion

        #region
        public string EditPfVerfication(int Id, int Status, string Remarks)
        {
            return RD.EditPfVerfication(Id, Status, Remarks);
        }
        #endregion
        #region
        public List<SpLegacyDataReport> GetLegacyDataRep(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int Skip, int Page, int deptuserid, string SearchValue)
        {
            return RD.GetLegacyDataRep(Districtid, Subdivid, Locid, Fromdate, Todate, schemeid, SchemeStatus, Skip, Page, deptuserid, SearchValue);
        }
        #endregion

        #region
        public string GetLegacyDataRepCount(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus)
        {
            return RD.GetLegacyDataRepCount(Districtid, Subdivid, Locid, Fromdate, Todate, schemeid, SchemeStatus);
        }
        #endregion





        #region
        public string GetLegacyDataRepCount(string Districtid, string Subdivid, string Locid, string Fromdate, string Todate, string schemeid, string SchemeStatus, int Skip, int Page, string searchval)
        {
            return RD.GetLegacyDataRepCount(Districtid, Subdivid, Locid, Fromdate, Todate, schemeid, SchemeStatus, Skip, Page, searchval);
        }
        #endregion

        #region
        public string DwnldSaveLegacyData(string District, string subdiv, string location, string AppStatus, string reportname, string fromdate, string todate, int userid, string schemeid, string USerType = "", string UserRole = "", string Users = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
        {
            return RD.DwnldSaveLegacyData(District, subdiv, location, AppStatus, reportname, fromdate, todate, userid, schemeid, USerType, UserRole, Users, Value, FormStatus, GpList, PoList, PsList, Religion);
        }
        #endregion

        #region
        public List<SpGetDownlaodRequests_Result> GetDwnldRep(int userid)
        {
            return RD.GetDwnldRep(userid);
        }
        #endregion
 
        #region legacy and detailed
        public string SaveDownloadRequest(string fromDate, string toDate, string District, string SubDiv, string Locations, string Schemes, int UserId, string ReportName)
        {

            return RD.SaveDownloadRequest(fromDate, toDate, District, SubDiv, Locations, Schemes, UserId, ReportName);
        }
        #endregion

        public List<SelectListItem> GetblockforSubRepIdsJSON(string subdivid)
        {
            return RD.GetblockforSubRepIdsJSON(subdivid);
        }




        #region
        public List<SpGetDraftApplication_Result> GetDraftApplication(int ID)
        {
            return RD.GetDraftApplication(ID);
        }
        #endregion

        #region

        public List<SpGetEditBankDetApp_Result> GetBankEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            return RD.GetBankEditAppliation(userId, fromDate, toDate, status);
        }
        #endregion

        #region

        public object GetBankEditAppliationById(string id)
        {

            return RD.GetBankEditAppliationById(id);
        }
        #endregion

        public RequestResponse VerifyBankDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            return RD.VerifyBankDetails(id, Remarks, Status, userid, ipadd);


        }
		#region

		public List<SpGetEditPersonalDetApp_Result> GetPersonalEditAppliation(string userId, string fromDate, string toDate, string status)
		{

			return RD.GetPersonalEditAppliation(userId, fromDate, toDate, status);
		}

		public List<SpGetEditPersonalHusbandDetApp_Result> GetPersonalHusbandEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            return RD.GetPersonalHusbandEditAppliation(userId, fromDate, toDate, status);
        }

        public object GetPersonalEditAppliationById(string id)
        {

            return RD.GetPersonalEditAppliationById(id);
        }

		public object GetPersonalHusbandEditAppliationById(string id)
		{
			return RD.GetPersonalHusbandEditAppliationById(id);
		}

			public RequestResponse VerifyPersonalDetails(string id, string Remarks, string Status, string bengaliName, string userid, string ipadd)
        {
            return RD.VerifyPersonalDetails(id, Remarks, Status, bengaliName, userid, ipadd);


        }

		public RequestResponse VerifyBenePersonalHusbandDetails(string id, string Remarks, string Status, string bengaliName, string userid, string ipadd)
		{
			return RD.VerifyBenePersonalHusbandDetails(id, Remarks, Status, bengaliName, userid, ipadd);


		}
		#endregion
		#region

		public List<SpGetEditDOBDetApp_Result> GetDOBEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            return RD.GetDOBEditAppliation(userId, fromDate, toDate, status);
        }

        public object GetDOBlEditAppliationById(string id)
        {

            return RD.GetDOBEditAppliationById(id);
        }

        public RequestResponse VerifyDOBDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            return RD.VerifyDOBDetails(id, Remarks, Status, userid, ipadd);


        }
        #endregion
        #region

        public List<SpGetEditAddressDetApp_Result> GetAddressEditAppliation(string userId, string fromDate, string toDate, string status)
        {

            return RD.GetAddressEditAppliation(userId, fromDate, toDate, status);
        }

        public object GetAddressEditAppliationById(string id)
        {
            return RD.GetAddressEditAppliationById(id);
        }
        public object GetPermanentAddressEditAppliationById(string id)
        {
            return RD.GetPermanentAddressEditAppliationById(id);
        }
        public object GetPresentAddressEditAppliationById(string id)
        {
            return RD.GetPresentAddressEditAppliationById(id);
        }
        public object GetAddressEditApplicationBenSno(string id)
        {

            return RD.GetAddressEditApplicationBenSno(id);
        }

        public RequestResponse VerifyAddressDetails(string id, string Remarks, string Status, string userid, string ipadd)
        {
            return RD.VerifyAddressDetails(id, Remarks, Status, userid, ipadd);


        }
		#endregion

		#region

		public List<SpGeteDistTWDataApplications_Result> GeteDistrictTWDataAppliation(string userId, string fromDate, string toDate, string status)
		{

			return RD.GeteDistrictTWDataAppliation(userId, fromDate, toDate, status);
		}

		public object GeteDistrictTWDataAppliationById(string id)
		{

			return RD.GeteDistrictTWDataAppliationById(id);
		}

		public RequestResponse VerifyeDistrictTWDataDetails(string id, string Remarks, string Status)
		{
			return RD.VerifyeDistrictTWDataDetails(id, Remarks, Status);


		}
		#endregion
		#region

		public List<SpGeteDistCWDataApplications_Result> GeteDistrictCWDataAppliation(string userId, string fromDate, string toDate, string status)
		{

			return RD.GeteDistrictCWDataAppliation(userId, fromDate, toDate, status);
		}

		public object GeteDistrictCWDataAppliationById(string id)
		{

			return RD.GeteDistrictCWDataAppliationById(id);
		}

		public RequestResponse VerifyeDistrictCWDataDetails(string id, string Remarks, string Status)
		{
			return RD.VerifyeDistrictTWDataDetails(id, Remarks, Status);


		}
		#endregion

		#region eDistrictRenewelApplications for Approval
		public List<SpGeteDistRenewelApplications_Result> GetEDistrictBeneRenewelAppliations(string userId, string fromDate, string toDate, string status)
		{

			return RD.GetEDistrictBeneRenewelAppliations(userId, fromDate, toDate, status);
		}

		public List<SpGeteDistReneweldataByBenSno_Result> GetEDistrictBeneRenewelAppliationByBenSno(string id)
		{

			return RD.GetEDistrictBeneRenewelAppliationByBenSno(id);
		}

		public RequestResponse VerifyEDistrictRenewelDetls(string benSno, string Remarks, string Status, string verifiedBy)
		{
			return RD.VerifyEDistrictRenewelDetls(benSno, Remarks, Status, verifiedBy);


		}

		#endregion

		#region Detailed Report New
		public List<SpDetailedReport> DetReportDataNew(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, int pageSize, int skip, string SearchValue, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
		{
			return RD.DetReportDataNew(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, pageSize, skip, SearchValue, Value, FormStatus, GpList, PoList, PsList, Religion);
		}

		public string GetDetailReportCountNew(int Districtid, string Subdivid, string Locid, string Fromdate, string Todate, int usertypeid, string schemeid, string SchemeStatus, int UserCategryid, int selectusertype, int userid, string SelectUserid, string Value, string FormStatus, string GpList, string PoList, string PsList, string Religion)
		{

			return RD.GetDetailReportCountNew(Districtid, Subdivid, Locid, Fromdate, Todate, usertypeid, schemeid, SchemeStatus, UserCategryid, selectusertype, userid, SelectUserid, Value, FormStatus, GpList, PoList, PsList, Religion);
		}

		public List<SelectListItem> GetblockforDisRepJSONNew(int Id)
		{
			return RD.GetblockforDisRepJSONNew(Id);
		}

		public List<SelectListItem> GetblockforSubRepJSONNew(int subdivid)
		{
			return RD.GetblockforSubRepJSONNew(subdivid);
		}

		public string DwnldSaveLegacyDataNew(string District, string subdiv, string location, string AppStatus, string reportname, string fromdate, string todate, int userid, string schemeid, string USerType = "", string UserRole = "", string Users = "", string Value = "", string FormStatus = "", string GpList = "", string PoList = "", string PsList = "", string Religion = "")
		{
			return RD.DwnldSaveLegacyDataNew(District, subdiv, location, AppStatus, reportname, fromdate, todate, userid, schemeid, USerType, UserRole, Users, Value, FormStatus, GpList, PoList, PsList, Religion);
		}


		#endregion

		#region GetRenewal Applications from SLO

		public List<SpGeteDistRenewelApplicationsfromSLO_Result> GetRenewalAppliationsfromSLO(string userId, string fromDate, string toDate, string status)
		{

			return RD.GetRenewalAppliationsfromSLO(userId, fromDate, toDate, status);
		}

		public object GetRenewalAppliationsfromSLOById(string id)
		{

			return RD.GetRenewalAppliationsfromSLOById(id);
		}

		public RequestResponse VerifyRenewalAppliationsfromSLO(string id, string Remarks, string Status, string verifiedBy)
		{
			return RD.VerifyRenewalAppliationsfromSLO(id, Remarks, Status, verifiedBy);


		}
		#endregion

	}
}
