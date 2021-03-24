using SSY.Data;
using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
namespace SSY.Bussiness
{
    public class HomeBussiness
    {
        HomeData HD = new HomeData();

        #region
        public int GetStatusCount(int status)
        {
            return HD.GetStatusCount(status);
        }
        #endregion
        #region
        public int GetsubmittedCount()
        {
            return HD.GetsubmittedCount();
        }
        #endregion
        #region
        public Int64 GetSiteCount()
        {
            return HD.GetSiteCount();
        }
        #endregion
        #region
        public string sitecount()
        {
            return HD.sitecount();
        }
        #endregion
        #region
        public string SSINCount()
        {
            return HD.SSINCount();
        }
        #endregion
        #region
        public List<SelectListItem> GetType(int id)
        {
            return HD.GetType(id);
        }
        #endregion
        #region
        public List<SelectListItem> GetRoles(int id)
        {
            return HD.GetRoles(id);
        }
        #endregion
        #region
        public List<SelectListItem> GetdeptUsers(string Roleids, int Districtid, string Subdivid, string Locid)
        {
            return HD.GetdeptUsers(Roleids, Districtid, Subdivid, Locid);
        }
		#endregion

		#region
		public List<SelectListItem> GetGPNew(int subdivid)
		{
			return HD.GetGPNew(subdivid);
		}

        public List<Field> GetSiteSettingsFileds()
        {
            return HD.GetSiteSettingsFileds();
        }
        #endregion
        #region
        public List<SelectListItem> GetAllListofind(int id)
        {
            return HD.GetAllListofind(id);
        }
        #endregion
        #region
        public List<SelectListItem> Getmaritalstatus()
        {
            return HD.Getmaritalstatus();
        }
        #endregion
        #region
        public List<SelectListItem> Getreligion()
        {
            return HD.Getreligion();
        }
        #endregion
        #region
        public List<SelectListItem> GetreligionALL()
        {
            return HD.GetreligionALL();
        }
        #endregion

        #region
        public List<SelectListItem> Getblocks(int subdivid, string typedata)
        {
            return HD.Getblocks(subdivid, typedata);
        }
        #endregion
        #region
        public List<SelectListItem> Getcategory()
        {
            return HD.Getcategory();
        }
        #endregion
        #region
        public List<SelectListItem> GetDistrict()
        {
            return HD.GetDistrict();
        }
		#endregion
		//public List<SelectListItem> GetDistrictNew()
		//{
		//	return HD.GetDistrictNew();
		//}

		#region
		public List<SelectListItem> GetDistrictsMulti()
        {
            return HD.GetDistrictsMulti();
        }
        #endregion
        #region
        public List<SelectListItem> GetDistrictAll()
        {
            return HD.GetDistrictAll();
        }

		public List<SelectListItem> GetOnlyDistricts()
		{
			return HD.GetOnlyDistricts();
		}
		#endregion
		#region
		public List<SelectListItem> GetBankAll()
        {
            return HD.GetBankAll();
        }
        #endregion
        #region
        //Get District by Id
        public List<SelectListItem> GetDistrictbyID(int id)
        {
            return HD.GetDistrictbyID(id);
        }
        #endregion
        #region
        public List<SelectListItem> Getsubdivision(int distid)
        {
            return HD.Getsubdivision(distid);
        }
		#endregion
		#region
		//public List<SelectListItem> GetsubdivisionNew(int distid)
		//{
		//	return HD.GetsubdivisionNew(distid);
		//}
		#endregion
		#region
		public string GetBranchAddrs(int brnchid)
        {
            return HD.GetBranchAddrs(brnchid);
        }
        #endregion
        #region
        public List<SelectListItem> GetsubdivisionAll(int distid)
        {
            return HD.GetsubdivisionAll(distid);
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleDistricts(int Uid)
        {
            return HD.GetMultipleDistricts(Uid);
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleSubDiv(int Uid)
        {
            return HD.GetMultipleSubDiv(Uid);
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleLoca(int Uid)
        {
            return HD.GetMultipleLoca(Uid);
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleGpWard(int Uid)
        {
            return HD.GetMultipleGpWard(Uid);
        }
        #endregion
        #region
        public List<SelectListItem> Gettotalsubdivisions()
        {
            return HD.Gettotalsubdivisions();
        }
        #endregion


        #region
        public string PasswordCheck(int uid, string oldPassword)
        {
            return HD.PasswordCheck(uid, oldPassword);

        }
        #endregion

        #region
        public string GetUserTypeName(int Id)
        {
            var res = HD.GetUserTypeName(Id);
            return res;
        }
        #endregion
        #region
        public TblNewReg GetDeptUserDetails(int userid)
        {
            return HD.GetDeptUserDetails(userid);
        }
        #endregion
        #region
        public List<SPGetContactDet_Result> GetContactDataDet()
        {
            return HD.GetContactDataDet();
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalblockBySubdiv(int subdivid)
        {
            return HD.GetTotalblockBySubdiv(subdivid);
        }
		#endregion
		//public List<SelectListItem> GetTotalblockBySubdivNew(int subdivid)
		//{
		//	return HD.GetTotalblockBySubdivNew(subdivid);
		//}
		#region
		public List<SelectListItem> Getblock(int subdivid, int typedata)
        {
            return HD.Getblock(subdivid, typedata);
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalblocks()
        {
            return HD.GetTotalblocks();
        }
        #endregion
        #region
        public List<SelectListItem> GetBank(int distid)
        {
            return HD.GetBank(distid);
        }
        #endregion
        #region
        public List<SelectListItem> GetBankCenter(int bnkid, int distid)
        {
            return HD.GetBankCenter(bnkid, distid);
        }
        #endregion
        #region
        public List<SelectListItem> GetBranch(int locid)
        {
            return HD.GetBranch(locid);
        }
        #endregion
        #region
        public List<SelectListItem> GetPO(int distid)
        {
            return HD.GetPO(distid);
        }
		#endregion
		#region
		//public List<SelectListItem> GetPONew(int distid)
		//{
		//	return HD.GetPONew(distid);
		//}
		#endregion

		#region
		public List<SelectListItem> GetPOSTOFFICE(int distid)
        {
            return HD.GetPOSTOFFICE(distid);
        }
        #endregion
        #region
        public List<SelectListItem> GetGP(int subdivid)
        {
            return HD.GetGP(subdivid);
        }
        #endregion

        #region
        public List<SelectListItem> GetGPBasedOnDistrict(int DistrictId)
        {
            return HD.GetGPBasedOnDistrict(DistrictId);
        }
        #endregion

        #region
        public List<SelectListItem> GetGPAll(int subdivid)
        {
            return HD.GetGPAll(subdivid);
        }
        #endregion
        #region
        public List<SelectListItem> GetAgentGP(int subdivid)
        {
            return HD.GetAgentGP(subdivid);
        }
        #endregion

        #region
        public List<SelectListItem> GetAgentGPMore(int SubID, int Id)
        {
            return HD.GetAgentGPMore(SubID, Id);
        }
        #endregion

        #region
        public List<SelectListItem> GetTotalGP()
        {
            return HD.GetTotalGP();
        }
        #endregion
        #region
        public List<SelectListItem> GetIssueauth()
        {
            return HD.GetIssueauth();
        }
        #endregion
        #region
        public List<SelectListItem> GetLocation(int bankno, int distid)
        {
            return HD.GetLocation(bankno, distid);
        }
        #endregion
        #region
        public List<SelectListItem> GetPS(int distid)
        {
            return HD.GetPS(distid);
        }
		#endregion
		#region
		//public List<SelectListItem> GetPSNew(int distid)
		//{
		//	return HD.GetPSNew(distid);
		//}
		#endregion

		#region
		public List<SelectListItem> GetPSAll(int distid)
        {
            return HD.GetPSAll(distid);
        }
        #endregion


        #region
        public List<TblBeneficiary> GetApplicationSum()
        {
            return HD.GetApplicationSum();
        }
		public List<TblBeneficiary> GetBeneDistDetails(string bensno, string sSINumber, string benOccupation)
		{
			return HD.GetBeneDistDetails(bensno, sSINumber, benOccupation);
		}
		#endregion
		//#region Pending/Approved/Reject Application
		//public List<SpGetApllicationSummery> GetApplicationSumByLocation(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue)
		//      {
		//          return HD.GetApplicationSumByLocation(UserType, UserId, status, fromdate, todate, skip, pageSize, SearchValue);
		//      }
		//      #endregion

		#region Pending/Approved/Reject Application
		public List<SpGetApllicationSummery> GetApplicationSumByLocation(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue, string Locations, string WorkerType)
		{
			return HD.GetApplicationSumByLocation(UserType, UserId, status, fromdate, todate, skip, pageSize, SearchValue, Locations, WorkerType);
		}

		public List<SpGetApllicationSummery> GetApplicationSumByLocationext(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue, string Locations, string WorkerType,string BenRegType)
		{
			return HD.GetApplicationSumByLocationext(UserType, UserId, status, fromdate, todate, skip, pageSize, SearchValue, Locations, WorkerType, BenRegType);
		}
		#endregion

		#region Pending/Approved/Reject Application Count

		//public string GetApplicationSumByLocationCount(int UserType, int UserId, string status, string fromdate, string todate)
		//      {
		//          return HD.GetApplicationSumByLocationCount(UserType, UserId, status, fromdate, todate);

		//      }
		#endregion
		#region
		public List<sp_GetSchemeDetailsSummery_Result> GetSchemeApplicationSumByLocation(int UserType, int UserId, int status, int schemid)
        {
            return HD.GetSchemeApplicationSumByLocation(UserType, UserId, status, schemid);
        }
        #endregion
        #region
        public TblBeneficiary GetUserDetails(string UserMobileNo)
        {
            return HD.GetUserDetails(UserMobileNo);
        }
        #endregion

        #region
        public TblBeneficiary GetBeniDetailsByBenSno(Int64 BenSno)
        {
            return HD.GetBeniDetailsByBenSno(BenSno);

        }

        #endregion
        #region
        public TblTransactionLog CheckPaymentStat(Int64 BenSno)
        {
            return HD.CheckPaymentStat(BenSno);
        }
        #endregion
        #region
        public int CheckPayment(Int64 BenSno)
        {
            return HD.CheckPayment(BenSno);
        }
        #endregion
        #region
        public int CheckSSYPayment(Int64 BenSno)
        {
            return HD.CheckSSYPayment(BenSno);
        }
        #endregion
        #region
        public int CheckSchem(Int64 BenSno)
        {
            return HD.CheckSchem(BenSno);
        }
        #endregion
        #region
        public TblBenScheme CheckSchemStatus(Int64 BenSno)
        {
            return HD.CheckSchemStatus(BenSno);
        }
        #endregion
        #region
        public string Save(SignUpUser RegData, int chkvalue, string MultiSubdiv, string MultiDis, string MultiLoca)
        {
            try
            {
                string email = RegData.Email;
                string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                // string password = CommonMethods.CreatePassword();
                string password = "Password";
                CommonMethods.AddtoLogFile(" User Name :" + RegData.FirstName + " " + RegData.LastName + "Password : " + password);
                var regcode = HD.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca, password);
                if (regcode == "User Registered Successfully..")
                {
                    string UserTYpeName = HD.GetUsertypeName(RegData.typeid);
                    string Rname = "";
                    if (RegData.typeid == 5)
                        Rname = HD.GetLocationName(RegData.muncorp);
                    if (RegData.typeid == 6)
                        Rname = HD.GetSubDivName(RegData.subdivid);
                    if (RegData.typeid == 7 || RegData.typeid == 3 || RegData.typeid == 4)
                        Rname = HD.GetDisTrictName(RegData.disid);
                    //  string Message = RegData.FirstName + " " + RegData.LastName + " registered you as " + UserTYpeName + " for " + Rname + ".User ID: " + RegData.MobileNumber + "Password : SSY@2017";
                    string Message = "Dear " + RegData.FirstName + " " + RegData.LastName + " You are registered as " + UserTYpeName + " and Your User ID: " + RegData.MobileNumber + "; Password : " + password + " You may login to SSY.wblabour.gov.in under department login to access your account";
                    //  string Message = RegData.FirstName + " " + RegData.LastName + " has registered as " + UserTYpeName + " for " + Rname + " User Name: " + RegData.MobileNumber + " and Password SSY@2017 to access SSY Portal";
                    //  string Message = "User Id :" + RegData.MobileNumber + "PassWord : SSY@2017";
                    CommonMethods.SendBillSms(RegData.MobileNumber, Message, 0, "User REgistration", "User");
                    CommonMethods.SendMail_WithHtml(email, FromEmail, Message, "Department Login Credentials");
                }
                return regcode;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion
        #region
        public string UpdateUser(SignUpUser RegData, string DeptUserid, string MultiSubdiv, string MultiDis, string MultiLoca)
        {
            try
            {
                string email = RegData.Email;
                var regcode = HD.UpdateUser(RegData, DeptUserid, MultiSubdiv, MultiDis, MultiLoca);
                return regcode;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion
        #region
        public string DeptPassWordChange(SignUpUser RegData, string DeptUserid)
        {
            return HD.DeptPassWordChange(RegData, DeptUserid);
        }
        #endregion
        #region
        public List<SelectListItem> GetType(string Type)
        {
            return HD.GetType(Type);
        }
        #endregion
        #region
        public List<SelectListItem> GetTypeNotiSubmit()
        {
            return HD.GetTypeNotiSubmit();
        }
        #endregion
        #region
        public string CreateRole(string Name, int CreatedBy)
        {
            return HD.CreateRole(Name, CreatedBy);
        }
        #endregion
        #region
        public TblNewReg GetDeptUserDet(string Userid)
        {
            return HD.GetDeptUserDet(Userid);
        }
		#endregion
		#region
		public List<SelectListItem> GetJsonUsersNew(string Roleids, int Districtid, string Subdivid, string Locid)
		{
			return HD.GetJsonUsersNew(Roleids, Districtid, Subdivid, Locid);
		}
		#endregion
		#region
		public TblNewReg GetDeptUserByUniqId(string Userid)
        {
            return HD.GetDeptUserByUniqId(Userid);
        }
        #endregion
        #region
        public TblNewReg GetDeptUserbyId(string Userid)
        {
            return HD.GetDeptUserbyId(Userid);
        }
        #endregion
        #region
        public List<SelectListItem> GetsubdivbyId(string subdivid)
        {
            return HD.GetsubdivbyId(subdivid);
        }
        #endregion
        #region
        public List<SelectListItem> GetBlockById(int BlockId)
        {
            return HD.GetBlockById(BlockId);
        }
        #endregion

        #region
        public int GetLocType(int UserId)
        {
            return HD.GetLocType(UserId);
        }
		#endregion

		#region
		public List<SelectListItem> GetDistrictwiseApp()
		{
			return HD.GetDistrictwiseApp();
		}
		#endregion

		#region
		public string SaveNotifications(int Usertype, string FileName, string NotyMessage, int CreatedBy, string Startdate, string Enddate, int usertypeid, int status, int active, int Editid)
        {
            return HD.SaveNotifications(Usertype, FileName, NotyMessage, CreatedBy, Startdate, Enddate, usertypeid, status, active, Editid);
        }
        #endregion
        #region
        public Sp_Deptuserdetails_Result GetDeptdet(int userid)
        {
            return HD.GetDeptdet(userid);
        }
        #endregion
        #region
        public List<SpGetNotificationList_Result> getnotylist(string usertypeid)
        {
            return HD.getnotylist(usertypeid);
        }
        #endregion
        #region
        public List<SpRoleWiseNotificationList_Result> GetRoleBasedNotyList(string usertypeid, string deptUserId)
        {
            return HD.GetRoleBasedNotyList(usertypeid, deptUserId);
        }
        #endregion
        #region
        public List<SpGetNotificationList_Result> getnotylistPortal(string usertypeid)
        {
            return HD.getnotylistPortal(usertypeid);
        }
        #endregion
        #region
        public List<SpDistrictWiseSummary_Result> GetDistrictSum()
        {
            return HD.GetDistrictSum();
        }
        #endregion
        #region
        public string ReadNotyfications(string DeptUserid, string usertypeid)
        {
            return HD.ReadNotyfications(DeptUserid, usertypeid);
        }
        #endregion
        #region
        public List<ApplictnStatus> GetApplicationStatus(int usertypeid, string Mapping)
        {
            return HD.GetApplicationStatus(usertypeid, Mapping);
        }
        #endregion
        #region
        public List<ApplictnStatus> GetClaimStatus(int usertypeid, string Mapping)
        {
            return HD.GetClaimStatus(usertypeid, Mapping);
        }
        //
        public List<ApplictnStatus> GetDLCClaimStatus(int usertypeid, string Mapping)
        {
            return HD.GetDLCClaimStatus(usertypeid, Mapping);
        }
        public List<ApplictnStatus> GetSuperAdminClaimStatusList(int usertypeid, string Mapping)
        {
            return HD.GetSuperAdminClaimStatus(usertypeid, Mapping);
        }

		public List<ApplictnStatus> GetSLOClaimStatusList(int usertypeid)
		{
			return HD.GetSLOClaimStatusList(usertypeid);
		}


		#endregion
		#region
		public List<ClaimStatus> GetOverallClaimStatus(int usertypeid, string Mapping)
        {
            return HD.GetOverallClaimStatus(usertypeid, Mapping);
        }
        #endregion
        #region
        public List<ApplictnStatus> GetReferStatus(int usertypeid, string Mapping)
        {
            return HD.GetReferStatus(usertypeid, Mapping);
        }
        #endregion
        #region
        public List<ApplictnStatus> GetFundStatus(int usertypeid, string Mapping)
        {
            return HD.GetFundStatus(usertypeid, Mapping);
        }
        public List<ApplictnStatus> GetSuperAdminFundStatus(int usertypeid, string Mapping)
        {
            return HD.GetSuperAdminFundStatus(usertypeid, Mapping);
        }
        public List<ApplictnStatus> GetPaymentStatus(int usertypeid, string Mapping)
        {
            return HD.GetPaymentStatus(usertypeid, Mapping);
        }
        public List<ApplictnStatus> GetFundReleaseStatusList(int usertypeid, string Mapping)
        {
            return HD.GetFundReleaseStatusList(usertypeid, Mapping);
        }
        #endregion
        #region
        public List<ApplictnStatus> GeSchemetStatusList(int usertypeid, string Mapping)
        {
            return HD.GeSchemetStatusList(usertypeid, Mapping);
        }
        #endregion
        #region
        public string GetMapDetails(int usertypeid, int DeptUserid)
        {
            return HD.GetMapDetails(usertypeid, DeptUserid);
        }
        #endregion
        #region
        //GetNotyCount
        public int GetNotyCount(int UserType, int Userid)
        {
            return HD.GetNotyCount(UserType, Userid);
        }
        #endregion
        #region For Approve & reject & sentback benificiary application

        public string GetStatusChange(int benSno, int status, int userid, string remarks, string SSNINGen, string fileName, string regDate)
        {
            return HD.GetStatusChange(benSno, status, userid, remarks, SSNINGen, fileName, regDate);
        }
        #endregion
        #region
        //For Scheme Approve & reject
        public string SchemeStatus(int schemebenid, int status)
        {
            return HD.SchemeStatus(schemebenid, status);
        }
        #endregion
        #region
        public string beniPassWordChange(SignUpUser RegData)
        {
            return HD.beniPassWordChange(RegData);
        }
        #endregion
        #region
        public string getlogindetals(string MobileNumber, string Password)
        {
            return HD.getlogindetals(MobileNumber, Password);
        }
        #endregion
        #region
        //Bocw Save
        public string SaveBocwScheme(string FinalSchemeDet, string Createdby, int Benifid)
        {
            return HD.SaveBocwScheme(FinalSchemeDet, Createdby, Benifid);
        }
        #endregion
        #region
        //WBTWSS save
        public string SaveWBTScheme(string Type, string Vehicle, string Duty, int Benifid, string Createdby)
        {
            return HD.SaveWBTScheme(Type, Vehicle, Duty, Benifid, Createdby);
        }
        #endregion
        #region
        public List<sp_GetSchemeDetails_Result> GetBOCWDetails(int bensno, int schemeid)
        {
            return HD.GetBOCWDetails(bensno, schemeid);
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalPS()
        {
            return HD.GetTotalPS();
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalPO()
        {
            return HD.GetTotalPO();
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalBank()
        {
            return HD.GetTotalBank();
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalBranch()
        {
            return HD.GetTotalBranch();
        }
        #endregion
        #region
        public List<SpGetMenuList_Result> GetMenuListReport(int RoleId)
        {

            return HD.GetMenuListReport(RoleId);
        }
        #endregion
        #region
        //AssignRoles
        public string AssignRoles(int Id, string AccLev)
        {

            return HD.AssignRoles(Id, AccLev);
        }
        #endregion
        #region
        public TblBeneficiary GetDeatilsByMobileNumber(string MobileNumber)
        {
            return HD.GetDeatilsByMobileNumber(MobileNumber);
        }
        #endregion
        #region
        public string GenratePassword(string BenSno, string password)
        {
            return HD.GenratePassword(BenSno, password);
        }
        #endregion
        #region
        public List<SpGettotalNotificationList_Result> GetNotificatioDetails(int id)
        {
            return HD.GetNotificatioDetails(id);
        }


        #endregion

        #region Role Management

        public object GetAllUserCategory()
        {
            return HD.GetAllUserCategory();
        }
        public object GetUserTypes()
        {
            return HD.GetUserTypes();
        }

        public object GetRole(int rId)
        {
            return HD.GetRole(rId);
        }
        public object CreateNewRole(SSYRoleViewModel model)
        {
            return HD.CreateNewUserType(model);
        }
        public object UpdateRole(SSYRoleViewModel model)
        {
            return HD.UpdateUserType(model);
        }
        #endregion

        #region Menu Management
        public List<SSYMenuViewModel> GetAllMenuList()
        {
            return HD.GetAllMenuList();
        }

        public List<SSYMenuViewModel> GetAllSubMenuList(int menuId)
        {
            return HD.GetAllSubMenuList(menuId);
        }

        public object CreateNewMenu(SSYMenuViewModel model)
        {
            return HD.CreateNewMenu(model);
        }


        public object GetAllRoleList()
        {
            return HD.GetAllRoleList();
        }

        public object UpdateExistingMenu(SSYMenuViewModel model)
        {
            return HD.UpdateExistingMenu(model);
        }


        public object CreateNewSubMenu(SSYMenuViewModel model)
        {
            return HD.CreateNewSubMenu(model);
        }

      

        #endregion
        #region
        public string GetDeleteNotiDetails(int id, int Status)
        {
            return HD.GetDeleteNotiDetails(id, Status);
        }
        #endregion
        #region
        public string UpdateBengaliname(string id, string bengaliname)
        {
            return HD.UpdateBengaliname(id, bengaliname);
        }
        #endregion
        #region
        public string BenSaveActionHistory(string UserId, string BenUserId, string Reason, string Type, string Schemeid)
        {
            return HD.BenSaveActionHistory(UserId, BenUserId, Reason, Type, Schemeid);
        }

       
        public object GetMenu(int mId)
        {
            return HD.GetMenu(mId);
        }
        #endregion
        #region
        public List<Sp_ActionHistory_Result> GetActionHistory(string BenId, string DeptUserType)
        {
            return HD.GetActionHistory(BenId, DeptUserType);
        }

       
        #endregion
        #region
        //Get District Id By Distrct Name
        public int GetDistrictId(string Name)
        {
            return HD.GetDistrictId(Name);
        }

     
        #endregion
        #region
        //Get SubDivision Id By Subdivision Name
        public int GetsubDivisionId(string Name)
        {
            return HD.GetsubDivisionId(Name);
        }

        #endregion
        #region
        //Get Block Id By Block Name
        public int GetBlockId(string Name)
        {
            return HD.GetBlockId(Name);
        }
        #endregion
        #region
        //Get Ps Id By Ps Name
        public int GetPsId(string Name)
        {
            return HD.GetPsId(Name);
        }
        #endregion
        #region
        // Get Po Id By Po Name
        public int GetPoId(string Name)
        {
            return HD.GetPoId(Name);
        }
        #endregion
        #region De_Duplication
        public List<GetGroupData> GetGroupWiseSummary(string userId, string userType, string regNo, string GroupId, int skip, int pageSize)
        {
            return HD.GetGroupWiseSummary(userId, userType, regNo, GroupId, skip, pageSize);
        }
        public List<GroupDetails> GetGroupUniqueDetails(string grpNo, int UserType, int UserId)
        {
            return HD.GetGroupUniqueDetails(grpNo, UserType, UserId);
        }
        public List<GroupDetails> GetGroupDuplicateDetails(string grpNo, int UserType, int UserId)
        {
            return HD.GetGroupDuplicateDetails(grpNo, UserType, UserId);
        }
        public SpGetSSYStats_Result GetSSYStats(string userId, string userType)
        {
            return HD.GetSSYStats(userId, userType);
        }
        public List<SpGetGroupWiseActions_Result> GetPreviousActions(string grpNo)
        {
            return HD.GetPreviousActions(grpNo);
        }
        public string SaveActionHistory(string grpNo, string action, string noofRec, string selRec, string creBy)
        {
            return HD.SaveActionHistory(grpNo, action, noofRec, selRec, creBy);
        }
        public string UpdateRecordStatus(string grpNo, string unqList)
        {
            return HD.UpdateRecordStatus(grpNo, unqList);
        }
        #endregion
        #region DeDup SubGroup Update & Reset
        public string SubGroupDataUpdate(string PSXIDlist = "", string subGroupNo = "")
        {
            return HD.SubGroupDataUpdate(PSXIDlist, subGroupNo);
        }
        public List<string> GetSubGroupDetails(string grpNo)
        {
            return HD.GetSubGroupDetails(grpNo);
        }
        public List<SPGetSubGroupDetails_Result> GetSubGroupDetailbySubGroupID(string grpNo, string SubGID = "")
        {
            return HD.GetSubGroupDetailbySubGroupID(grpNo, SubGID);
        }
        public SPSubGroupDelete_Result DeleteSubGroup(string grpNo = "")
        {
            return HD.DeleteSubGroup(grpNo);
        }
        #endregion
        #region
        public string SaveDeeDoopActionhis(string Message, string Id, string DeptUserId, string DeptUserType)
        {
            var res = HD.SaveDeeDoopActionhis(Message, Id, DeptUserId, DeptUserType);
            return res;
        }
        #endregion
        #region
        public List<Sp_DeeDoopActionHistory_Result> GetActionHistoryDetails(string Id, string Roleid)
        {
            var res = HD.GetActionHistoryDetails(Id, Roleid);
            return res;
        }
        #endregion
        #region
        public int Getreligion(string Name)
        {
            var res = HD.Getreligion(Name);
            return res;
        }
        #endregion
        #region
        public int GetSocialCat(string Name)
        {
            var res = HD.GetSocialCat(Name);
            return res;
        }
        #endregion
        //#region
        //public List<SpCheckDedupe_Result> GetDeDupdata(Int64 Bensno)
        //{
        //    var res = HD.GetDeDupdata(Bensno);
        //    return res;
        //}
        //#endregion
        #region
        public List<SpGetMenuListByRole_Result> GetUserRights(string Url, string RoleID)
        {
            return HD.GetUserRights(Url, RoleID);
        }
        #endregion
        #region
        public List<SpGetSingleActionHistory_Result> GetSingleActionHistory(string grpNo)
        {
            return HD.GetSingleActionHistory(grpNo);
        }
        #endregion
        #region
        //Dept Genarate Pwd
        public string DeptGenratePassword(string Userid, string password)
        {
            return HD.DeptGenratePassword(Userid, password);
        }
        #endregion
        #region
        public SpGetUserInfByUserCode_Result GetDeptUserByUsercode(string Userid)
        {
            return HD.GetDeptUserByUsercode(Userid);
        }
        #endregion
        #region
        public List<SpGetRejectedhistory_Result> GetRejectedDetails(Int32 Bensno)
        {
            return HD.GetRejectedDetails(Bensno);
        }
        #endregion
        #region
        public List<SpGetDeedoopDet_Result> GetDedoopDetails(Int32 Bensno)
        {
            return HD.GetDedoopDetails(Bensno);
        }
        #endregion
        #region
        public string Savebank(string BnkName)
        {
            var res = HD.Savebank(BnkName);
            return res;
        }
        #endregion
        #region
        public string Savebankcenter(int Dist, int Bank, string bankcenter)
        {
            var res = HD.Savebankcenter(Dist, Bank, bankcenter);
            return res;
        }
        #endregion
        #region
        public string Savebankbranch(int bnkbrnchcenter, string brnchname, string Ifsccode, string brnchAddress)
        {
            var res = HD.Savebankbranch(bnkbrnchcenter, brnchname, Ifsccode, brnchAddress);
            return res;
        }
        #endregion
        #region
        public TblBeneficiary GetBeniDetails(Int64 BenSno)
        {
            var res = HD.GetBeniDetails(BenSno);
            return res;
        }
		#endregion

		#region
		public spGetSLOCode_Result GetSLOForBen(Int64 BenSno)
		{
			var res = HD.GetSLOForBen(BenSno);
			return res;
		}
		#endregion

		#region
		public List<SpGetSLOList_Result> GetSLODetails(string BenSnid)
		{
			var res = HD.GetSLODetails(BenSnid);
			return res;
		}
		#endregion

		#region
		public List<SelectListItem> GetDistrictwiseAll()
        {
            return HD.GetDistrictwiseAll();
        }
        #endregion
        #region
        public List<SelectListItem> GetSubdivisionwiseAll(int id)
        {
            return HD.GetSubdivisionwiseAll(id);
        }
        #endregion
        #region
        public List<SelectListItem> GetLocationwiseAll(int id)
        {
            return HD.GetLocationwiseAll(id);
        }
        #endregion


        #region
        public SpGetDetailsbyRegnum_Result GetSsinDetails(string val)
        {
            var result = HD.GetSsinDetails(val);
            return result;
        }
        #endregion

        #region Get Login Counts
        public List<Get_LoginCounts_Result> GetLoginCounts()
        {
            return HD.GetLoginCounts(); ;
        }
        #endregion

        public List<Report_BeneficiaryApplicationStaus_Result> DistrictWiseStatus(string fromDate, string toDate)
        {
            return HD.DistrictWiseStatus(fromDate, toDate);
        }


        public Sp_ConvertingRejectedToPending_Result ReviewBenificiary(string remark, string benId, string userId)
        {
            var result = HD.ReviewBenificiary(remark, benId, userId);

            return result;
        }

        public List<Get_BenRevivedDetails_Result> GetBenRevivedDetails(string Benid)
        {
            var res = HD.GetBenRevivedDetails(Benid);
            return res;
        }

        #region Rlo Wise Legcay 1 and legacy 2

        public List<Sp_RLOwiseRegCount_Result> RLOWiseLegacy1and2Count(string fromDate, string toDate, string Subdivision)
        {
            return HD.RLOWiseLegacy1and2Count(fromDate, toDate, Subdivision);
        }
        #endregion

        #region Get Report Name
        public string GetReportName(string requestId)
        {
            return HD.GetReportName(requestId);
        }
        #endregion

        public List<SpGet_AgentDetails_Result> GetAgentDetails(string ds)
        {
            return HD.GetAgentDetails(ds);
        }


        public List<SelectListItem> GetDidssubdivision(string ds)
        {
            return HD.GetDidssubdivision(ds);

        }
		public List<SelectListItem> GetDidsSubdivisionByDLC(string ds, int dlcId)
		{
			return HD.GetDidssubdivisionbyDLC(ds, dlcId);

		}

        public TblDownlaodRequest GetDownLoadRequest(int requestId)
        {
            return HD.GetDownLoadRequest(requestId);
        }
        #region
        public List<SpGet_AgentDetails_Result> GetAgentDetailsByAdmin(string ds, string status)
        {
            return HD.GetAgentDetailsByAdmin(ds, status);
        }

        #endregion

        #region Get Label Names Based On Language
        public List<SPgetlabelNames_Result> GetLabelNames(string Id)
        {
            return HD.GetLabelNames(Id);
        }
        #endregion


        #region SubmitRemarks
        public RequestResponse SubmitRemarks(string Remarks, string Mail)
        {
            return HD.SubmitRemarks(Remarks, Mail);
        }
        #endregion


        #region
        public List<SelectListItem> GetRelations()
        {
            return HD.GetRelations();
        }
        #endregion

        #region

        public List<TblHelp> GetRemarks()
        {
            return HD.GetRemarks();

        }
        #endregion

        #region

        public SpGetUserInfo_Result GetCreatedBInfo(string benSno)
        {
            return HD.GetCreatedBInfo(benSno);

        }
        #endregion

        #region
        public RequestResponse RequiredDocuments(Int64 bsno, bool BenPhoto, bool BenSignature, bool BenPassBook, bool BenAadhar, bool BenIdentity, bool BenForm, bool BenOtherDoc, bool SchemeCertificate)
        {
            return HD.RequiredDocuments(bsno, BenPhoto, BenSignature, BenPassBook, BenAadhar, BenIdentity, BenForm, BenOtherDoc, SchemeCertificate);
        }
        #endregion

        #region
        public SpGetRequiredDocs_Result GetRequiredDocuments(Int64 bensno)
        {
            return HD.GetRequiredDocuments(bensno);
        }
        #endregion


        #region
        public List<SpGetBenePersonalDetEditHistory_Result> GetBenePersonalDetEditHistory(string benSno)
        {
            return HD.GetBenePersonalDetEditHistory(benSno);
        }
		#endregion

		#region
		public List<SpGetBeneHusbandDetEditHistory_Result> GetBeneHusbandDetEditHistory(string benSno)
		{
			return HD.GetBeneHusbandDetEditHistory(benSno);
		}
		#endregion
		#region
		public List<SpGetBeneDOBDetEditHistory_Result> GetBeneDOBDetEditHistory(string benSno)
        {
            return HD.GetBeneDOBDetEditHistory(benSno);
        }
        #endregion
        #region
        public List<SpEditBankDetHistory_Result> GetBankHistory(string benSno)
        {
            return HD.GetBankHistory(benSno);

        }
		#endregion

		#region
		public int GetPersonalNameCount(string benSno)
		{
			return HD.GetPersonalNameCount(benSno);

		}
		#endregion

		#region
		public int GetPersonalHusbandCount(string benSno)
		{
			return HD.GetPersonalHusbandCount(benSno);

		}
		#endregion

		#region
		public int GetPersonalDOBCount(string benSno)
		{
			return HD.GetPersonalDOBCount(benSno);

		}
		#endregion

		

		#region
		public int GetBankPendingCount(string benSno)
        {
            return HD.GetBankPendingCount(benSno);

        }
		#endregion

		#region
		public int GetAddressPendingCount(string benSno)
		{
			return HD.GetAddressPendingCount(benSno);

		}
		#endregion

		#region Check All Users
		public int GetUserLoginCount(string UserId, string Type)
        {
            return HD.GetUserLoginCount(UserId, Type);
        }
        #endregion

        #region Clear Session
        public string ClearSession(string Userid)
        {
            return HD.ClearSession(Userid);
        }
        #endregion


        #region
        public int GetClaimCount(Int64 BenId)
        {
            return HD.GetClaimCount(BenId);
        }
        #endregion

        #region Work Type
        public List<SelectListItem> GetWorkType(string workType)
        {
            return HD.GetWorkType(workType);
        }
		#endregion Work Type


		#region Detailed Report New

		//public List<SelectListItem> GetsubdivisionNew(int distid)
		//{
		//	return HD.GetsubdivisionNew(distid);
		//}

		//public List<SelectListItem> GetPSAllNew(int distid)
		//{
		//	return HD.GetPSAllNew(distid);
		//}

		//public List<SelectListItem> GetPOSTOFFICENew(int distid)
		//{
		//	return HD.GetPOSTOFFICENew(distid);
		//}

		//public List<SelectListItem> GetGPBasedOnDistrictNew(int DistrictId)
		//{
		//	return HD.GetGPBasedOnDistrictNew(DistrictId);
		//}

		//public List<SelectListItem> GetGPAllNew(int subdivid)
		//{
		//	return HD.GetGPAllNew(subdivid);
		//}

		//public List<SelectListItem> GetsubdivisionNew(int distid)
		//{
		//	return HD.GetsubdivisionNew(distid);
		//}

		public List<SelectListItem> GetPSAllNew(int distid)
		{
			return HD.GetPSAllNew(distid);
		}

		public List<SelectListItem> GetPOSTOFFICENew(int distid)
		{
			return HD.GetPOSTOFFICENew(distid);
		}

		public List<SelectListItem> GetGPBasedOnDistrictNew(int DistrictId)
		{
			return HD.GetGPBasedOnDistrictNew(DistrictId);
		}

		public List<SelectListItem> GetGPAllNew(int subdivid)
		{
			return HD.GetGPAllNew(subdivid);
		}
		
		public List<SelectListItem> GetDistrictNew()
		{
			return HD.GetDistrictNew();
		}

		public List<SelectListItem> GetTotalblockBySubdivNew(int subdivid)
		{
			return HD.GetTotalblockBySubdivNew(subdivid);
		}

		public List<SelectListItem> GetsubdivisionNew(int distid)
		{
			return HD.GetsubdivisionNew(distid);
		}

		public List<SelectListItem> GetPSNew(int distid)
		{
			return HD.GetPSNew(distid);
		}

		public List<SelectListItem> GetPONew(int distid)
		{
			return HD.GetPONew(distid);
		}

		#endregion

		#region BeneficiaryAnnualStatementReport

		public List<SelectListItem> GetFinancialYears()

		{

			return HD.GetFinancialYears();

		}
		#endregion

		public SpGeteDistDetailsforDashBoard_Result GetEDistrictBeneDetailsForDashBoard(Int64 benSno, string benOccupation)
		{

			return HD.GetEDistrictBeneDetailsForDashBoard(benSno, "", benOccupation, "", "");
		}

		#region Merg SSin
		public SpgetSSI_NumberDetails_Result GetMerSsinDetails(string benSSin)
		{
			return HD.GetMerSsinDetails(benSSin);

		}
		#endregion

		#region
		//Dept Genarate Pwd
		public SpSaveMergedSSI_NoDetails_Result MergSSinData(string UniD,string MerId, string deptUserId,string ipAddress)
		{
			return HD.MergSSinData(UniD, MerId, deptUserId, ipAddress);
		}
		#endregion


		#region
		public RequestResponse UpdateSLOChange(string benslno, string newslno, string ipAddress)
		{
			return HD.UpdateSLOChange(benslno, newslno, ipAddress);
		}

		public SpGetUserInfByUserCode_Result GetUserInfo(string useid)
		{
			return HD.GetUserInfo(useid);
		}
		#endregion

		#region New PF Reports  
		public List<SelectListItem> GetRLOsAll(string id)
		{
			return HD.GetRLOsAll(id);
		}
		public List<SelectListItem> GetAgentsByRLOAll(string id)
		{
			return HD.GetAgentsByRLOAll(id);
		}
		public List<SelectListItem> GetBlocksByRLOJSON(string id)
		{
			return HD.GetBlocksByRLOJSON(id);
		}
		public List<SelectListItem> GetAgentsByBlockJSON(string id)
		{
			return HD.GetAgentsByBlockJSON(id);
		}
        public List<SelectListItem> GetMultipleRLO(int Uid, int Utype)
        {
            return HD.GetMultipleRLO(Uid,Utype);
        }

        public string UpdateDepartmentUserPassword(ResetPasswordViewModel model)
        {
            return HD.UpdateDepartmentUserPassword(model);
        }
        #endregion
    }

}
