using SSY.Data;
using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Bussiness
{
    public class AgentBussiness
    {
        AgentData AD = new AgentData();
        HomeData HD = new HomeData();
        #region
        public string Save(SignUpUser RegData, int chkvalue, string MultiSubdiv, string MultiDis, string MultiLoca, string MultiGp, string userid = null)
        {
            if (userid == null)
            {
                string password = CommonMethods.CreatePassword();
                CommonMethods.AddtoLogFile(" MobileNumber :" + RegData.MobileNumber + "Password : " + password);
                var regcode = AD.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca, password, MultiGp);


                string UserTYpeName = HD.GetUsertypeName(RegData.typeid);
                if (regcode == "User Registered Successfully..")
                {
                    string Message = "Dear " + RegData.FirstName + " " + RegData.LastName + " You are registered as " + UserTYpeName + " and Your User ID: " + RegData.MobileNumber + "; Password : " + password + " You may login to SSY.wblabour.gov.in under department login to access your account";
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    CommonMethods.SendBillSms(RegData.MobileNumber, Message, 0, "User Registration", "User");
                    CommonMethods.SendMail_WithHtml(RegData.Email, FromEmail, Message, "Department Login Credentials");
                }
                return regcode;
            }
            else
            {
                var regcode = AD.Save(RegData, chkvalue, MultiSubdiv, MultiDis, MultiLoca, RegData.passwrd, MultiGp, userid);


                string UserTYpeName = HD.GetUsertypeName(RegData.typeid);
                if (regcode == "User Registered Successfully..")
                {
                    string Message = "Dear " + RegData.FirstName + " " + RegData.LastName + " You are registered as " + UserTYpeName + " and Your User ID: " + RegData.MobileNumber + "; Password : " + RegData.passwrd + " You may login to SSY.wblabour.gov.in under department login to access your account";
                   // string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    //CommonMethods.SendBillSms(RegData.MobileNumber, Message, 0, "User Registration", "User");
                   // CommonMethods.SendMail_WithHtml(RegData.Email, FromEmail, Message, "Department Login Credentials");
                }
                return regcode;
            }



        }
        #endregion
        #region
        public string UpdateUser(SignUpUser RegData, string DeptUserid, string MultiSubdiv, string MultiDis, string MultiLoca)
        {
            try
            {
                string email = RegData.Email;
                var regcode = AD.UpdateUser(RegData, DeptUserid, MultiSubdiv, MultiDis, MultiLoca);
                return regcode;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion
        #region
        //Agent Edit Profile
        public string AgentEditProfile(SignUpUser RegData, string DeptUserid, string MultiGp,string MultiLoca)
        {
            try
            {
                string email = RegData.Email;
                var regcode = AD.AgentEditProfile(RegData, DeptUserid, MultiGp, MultiLoca);
                return regcode;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion
        #region
        public object GetBenDetails(string id, string Type = "")
        {
            var result = AD.GetBenDetails(id, Type);
            return result;
        }
        #endregion
        #region
        public List<ApplictnStatus> GetStatusList(Int32 id, Int32 UserType)
        {
            var result = AD.GetStatusList(id, UserType);
            return result;
        }
        #endregion
        #region
        public List<ApplictnStatus> GetSchemeStatusList(Int32 id, Int32 UserType)
        {
            var result = AD.GetSchemeStatusList(id, UserType);
            return result;
        }
        #endregion
        #region
        public string SchemPayment(string PaidBy, string PaidTo, string Tenure, string Amount, string Scheme)
        {
            var res = AD.SchemPayment(PaidBy, PaidTo, Tenure, Amount, Scheme);
            return res;
        }
        #endregion
        #region
        public SpPaymentReciept_Result Paymentrecpt(string result)
        {
            var res = AD.Paymentrecpt(result);
            return res;
        }
        #endregion
        #region
        public string SaveAgentAdditionalDet(string DeptUserId, string Gender, string Address, string Pincode, string Dob, string BankName, string BranchName, string AccountNumber, string IfscCode, string AadharNumber, string AadharFile, string PanNumber, string PanFile, string BankDDFile, string MarSt, string HFName, string Photo, string Signature, string MobileNumber)
        {
            var res = AD.SaveAgentAdditionalDet(DeptUserId, Gender, Address, Pincode, Dob, BankName, BranchName, AccountNumber, IfscCode, AadharNumber, AadharFile, PanNumber, PanFile, BankDDFile, MarSt, HFName, Photo, Signature, MobileNumber);
            return res;
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetAgentAdditionalDet(int Deptuserid)
        {
            return AD.GetAgentAdditionalDet(Deptuserid);
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetTotAgentAdditionalDet(int Deptuserid)
        {
            return AD.GetTotAgentAdditionalDet(Deptuserid);
        }
        #endregion
        #region
        public List<SpGetAgentAdditionalData_Result> GetAgentApplications(int Deptuserid, int Status)
        {
            return AD.GetAgentApplications(Deptuserid, Status);
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetAgentApplicationsById(int Id)
        {
            return AD.GetAgentApplicationsById(Id);
        }
        #endregion
        #region
        public AgentDetails AgentStatusChange(int Status, int Id, string Reason, string ARNumber)
        {
            return AD.AgentStatusChange(Status, Id, Reason, ARNumber);
        }
        #endregion
        #region
        public int GetDateDiff(int Deptuserid)
        {
            return AD.GetDateDiff(Deptuserid);
        }
        #endregion 

        #region
        public List<SpUnsubmittedApp_Result> UnsubmittedApp(string Userid)
        {

            return AD.UnsubmittedApp(Userid);

        }
        #endregion

        # region page wise saving
        public SpGetTempBenDet_Result GetTempBenDet(string Id)
        {
            var res = AD.GetTempBenDet(Id);

            return res;

        }
        #endregion

        #region

        public List<SpBenTempAddressDet_Result> BenTempAddressDet(string Id)
        {

            var res = AD.BenTempAddressDet(Id);

            return res;
        }
        #endregion

        #region

        public List<SpGetBenFamilyTemp_Result> GetBenFamilyTemp(string Id)
        {
            var res = AD.GetBenFamilyTemp(Id);

            return res;

        }

        #endregion

        #region

        public List<SpGetBenNomineeTemp_Result> GetBenNomineeTemp(string Id)
        {

            var res = AD.GetBenNomineeTemp(Id);

            return res;
        }

        #endregion

    }
}
