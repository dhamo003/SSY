using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Data
{
    public class AgentData
    {
       SSYEntities db = new SSYEntities();

       

        #region
        public string Save(SignUpUser RegData, int chkvalue, string MultiSubdiv, string MultiDis, string MultiLoca, string password, string MultiGp)
        {
            int i = (from x in db.TblNewRegs where x.Mobileno == RegData.MobileNumber select x).Count();
            if (i > 0)
            {
                return "User Already  Registered With This Mobile Number..";
            }
            else
            {
                string Landline = RegData.Code + '-' + RegData.Landline;
                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                var res1 = db.SpUserRegistration(RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.typeid, str[1], str[0], RegData.CreatedBy, 0, RegData.disid, RegData.subdivid, RegData.Designation, RegData.MobileNumber, chkvalue, Landline).FirstOrDefault();
                string[] Gpward = MultiGp.Split(',');
                foreach (string Gp in Gpward)
                {

                    var inspector = db.SpUserGpWardSave(Convert.ToInt32(res1), Convert.ToInt32(Gp), 1);

                }

                string[] Loca = MultiLoca.Split(',');
                foreach (string Loc in Loca)
                {
                    if (Loc != "0")
                    {
                        var inspector = db.SpUserLocationSave(Convert.ToInt32(res1), Convert.ToInt32(Loc), 1);
                    }
                }
                return "User Registered Successfully..";
            
            }
        }
        #endregion
        #region
        public string UpdateUser(SignUpUser RegData, string DeptUserid, string MultiSubdiv, string MultiDis, string MultiLoca)
        {
            try
            {
                string Lanline = RegData.Code + '-' + RegData.Landline;
                var res = db.SpUpdateDeptUserDetails(Convert.ToInt32(DeptUserid), RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.typeid, RegData.muncorp, RegData.disid, RegData.subdivid, 1, RegData.Designation, "", Lanline);
                return "User Details Updated Successfully..";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        //Agent Edit Profile
        public string AgentEditProfile(SignUpUser RegData, string DeptUserid, string MultiGp, string MultiLoca)
        {
            try
            {
                string Lanline = RegData.Code + '-' + RegData.Landline;
                var res = db.SpUpdateAgentUserDetails(Convert.ToInt32(DeptUserid), RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.muncorp, RegData.disid, RegData.subdivid, 1, RegData.Designation, "", Lanline).FirstOrDefault();
                if (res.Message == "Success")
                {
                    string[] Gpward = MultiGp.Split(',');
                    foreach (string Gp in Gpward)
                    {

                        var inspector = db.SpUserGpWardSave(Convert.ToInt32(DeptUserid), Convert.ToInt32(Gp), 1);

                    }

                    string[] Loca = MultiLoca.Split(',');
                    foreach (string Loc in Loca)
                    {
                        if (Loc != "0")
                        {
                            var inspector = db.SpUserLocationSave(Convert.ToInt32(DeptUserid), Convert.ToInt32(Loc), 1);
                        }
                    }
                    return "User Details Updated Successfully..";
                }
                else
                {
                    return res.Message.ToString();
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public object GetBenDetails(string id, string Type)
        {
            if (Type == "" || Type == "SSIN" ||Type =="REGNo")
            {
                var result = db.SpGetBenfDetailsByUniqueId(id, Type).FirstOrDefault();
                return result;
            }
            if (Type == "Aadhaar" || Type == "Mobile")
            {
                var AadhaarResult = db.SpGetBenfDetailsByAadhaar(id, Type).ToList();
                return AadhaarResult;
            }
            else
            {
                var Result = db.SpGetBenfDetailsByAadhaar(id, Type).FirstOrDefault();
                return Result;
            }
          
        }
        #endregion
        #region
        public List<ApplictnStatus> GetStatusList(Int32 id, Int32 UserType)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            string occupa = "";
            int SentBack = 0;
            var res = db.SpNewApplicationStatus(UserType, null, null, null, null, null, null, id).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.Approved);
                ret.Rejected = Convert.ToInt32(k.Rejected);
                ret.Pending = Convert.ToInt32(k.Pending);
                ret.BenOccupation = k.BenOccupation;
                 ret.Sentback = Convert.ToInt32(k.SentBack);
                 ret.Total = (ret.Approved + ret.Rejected + ret.Pending + +ret.Sentback);
                //Total = (Total + (ret.Total));
                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
            // return result;
        }
        #endregion
        #region
        public List<ApplictnStatus> GetSchemeStatusList(Int32 id, Int32 UserType)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            var res = db.SpSchemeNewApplicationStatus(UserType, null, null, null, null, null, null, id).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.Approved);
                ret.Rejected = Convert.ToInt32(k.Rejected);
                ret.Pending = Convert.ToInt32(k.Pending);
                ret.SchemeName = k.SchemeName;
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending);
                //Total = (Total + (ret.Total));
                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.SchemeName = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        #endregion
        #region
        public string SchemPayment(string PaidBy, string PaidTo, string Tenure, string Amount, string Scheme)
        {
            string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");
            string RequestId = "S" + date;
            var res = db.SpSchemepaymentlog(RequestId, RequestId, PaidBy, PaidTo, Convert.ToDouble(Amount), null, "Cash");
            var res1 = db.SpSchemepayment(RequestId, RequestId, PaidBy, PaidTo, Convert.ToDouble(Amount), null, "Cash", Convert.ToInt32(Tenure), Scheme);
            return "Payment Successful -" + RequestId;
        }
        #endregion
        #region
        public SpPaymentReciept_Result Paymentrecpt(string result)
        {
            var res = db.SpPaymentReciept((result)).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public string SaveAgentAdditionalDet(string DeptUserId, string Gender, string Address, string Pincode, string Dob, string BankName, string BranchName, string AccountNumber, string IfscCode, string AadharNumber, string AadharFile, string PanNumber, string PanFile, string BankDDFile, string MarSt, string HFName, string Photo, string Signature, string MobileNumber)
        {
            string[] dat = Dob.Split('-');
            DateTime FinalDob = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
            var res = db.SpAgentAdditionalData(Convert.ToInt32(DeptUserId), Gender, Address, Pincode, FinalDob, BankName, BranchName, AccountNumber, IfscCode, AadharNumber, AadharFile, PanNumber, PanFile, BankDDFile, MarSt, HFName, Photo, Signature, MobileNumber).FirstOrDefault();
            if (res.Code == "000")
                return "Details Updated Successfully.";
            else
                return res.Message;
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetAgentAdditionalDet(int Deptuserid)
        {
            var res = db.SpGetAgentAdditionalData().ToList();
            if (res != null)
            {
                var res1 = (from x in res where x.UserId == Deptuserid && x.Status == 0 select x).FirstOrDefault();
                return res1;
            }
            else
            {
                return null;
            }
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetTotAgentAdditionalDet(int Deptuserid)
        {
            var res = db.SpGetAgentAdditionalData().ToList();
            if (res != null)
            {
                var res1 = (from x in res where x.UserId == Deptuserid && x.Status == 1 select x).FirstOrDefault();
                if (res1 == null)
                {
                    var res2 = (from x in res where x.UserId == Deptuserid && x.Status == 0 select x).FirstOrDefault();
                    if (res2 == null)
                    {
                        return null;
                    }
                    else
                    {
                        return res2;
                    }
                }
                else
                {
                    return res1;
                }
            }
            else
            {
                return null;
            }
        }
        #endregion
        #region
        public List<SpGetAgentAdditionalData_Result> GetAgentApplications(int Deptuserid, int Status)
        {
            var res = db.SpGetAgentAdditionalData().ToList();
            if (res != null)
            {
                var res1 = (from x in res where x.CreatedBy == Deptuserid select x).ToList();
                if (Status != 3)
                {
                    res1 = (from x in res1 where x.Status == Status select x).ToList();
                }
                return res1;
            }
            else
            {
                return null;
            }
        }
        #endregion
        #region
        public SpGetAgentAdditionalData_Result GetAgentApplicationsById(int Id)
        {
            var res = db.SpGetAgentAdditionalData().ToList();
            if (res != null)
            {
                var res1 = (from x in res where x.Id == Id select x).FirstOrDefault();
                return res1;
            }
            else
            {
                return null;
            }
        }
        #endregion
        #region
        public AgentDetails AgentStatusChange(int Status, int Id, string Reason, string ARNumber)
        {
            AgentDetails Res = new AgentDetails();
            try
            {
                 int AgentId =0;
                if (Status == 1)
                {
                    var AgentAddData = (from x in db.TblAgentAdditionalDatas where x.Id == Id select x).FirstOrDefault();
                     AgentId = AgentAddData.UserId ?? 0;
                    var GetAgentType = (from x in db.TblNewRegs where x.Userid == AgentId select x.RegType).FirstOrDefault();
                    if (GetAgentType == "N")
                    {
                        var checkres = (from x in db.TblNewRegs where x.UserCode == ARNumber && x.Userid != AgentId select x).ToList();
                        if (checkres.Count() >= 1)
                        {
                            Res.Message = " Sorry ! ARN Number is already exists .... ";
                            Res.UserId = AgentId;

                            return Res;
                        }
                    }
                }
                var res = db.SpAgentStatusChange(Id, Status, Reason, ARNumber);
                if (Status == 1)
                {
                    Res.Message = "Application Approved";
                    Res.UserId = AgentId;
                    return Res;
                }
                    
                else
                {
                    Res.Message = "Application Rejected";
                    Res.UserId = AgentId;
                    return Res;
                }
                    
            }
            catch (Exception ex)
            {
                Res.Message = ex.Message.ToString();
                Res.UserId = 0;
                return Res;

                
            }
        }
        #endregion
        #region
        public int GetDateDiff(int Deptuserid)
        {
            var res = db.SpgetDatediff(Deptuserid).FirstOrDefault();
            return Convert.ToInt16(res);
        }
        #endregion

        #region
        public List<SpUnsubmittedApp_Result> UnsubmittedApp(string Userid)
        {
            var res = db.SpUnsubmittedApp(Convert.ToInt32(Userid)).ToList();

            return res;

        }

        #endregion
        # region page wise saving
        public SpGetTempBenDet_Result GetTempBenDet(string Id)
        {
            var res = db.SpGetTempBenDet(Convert.ToInt32(Id)).FirstOrDefault();

            return res;

        }
        #endregion

        #region

        public List<SpBenTempAddressDet_Result> BenTempAddressDet(string Id)
        {

            var res = db.SpBenTempAddressDet(Convert.ToInt32(Id)).ToList();

            return res;
        }

        #endregion

        #region

        public List<SpGetBenFamilyTemp_Result> GetBenFamilyTemp(string Id)
        {
            var res = db.SpGetBenFamilyTemp(Convert.ToInt32(Id)).ToList();

            return res;

        }

        #endregion
        #region

        public List<SpGetBenNomineeTemp_Result> GetBenNomineeTemp(string Id)
        {

            var res = db.SpGetBenNomineeTemp(Convert.ToInt32(Id)).ToList();

            return res;
        }

        #endregion

        #region
        public string Save(SignUpUser RegData, int chkvalue, string MultiSubdiv, string MultiDis, string MultiLoca, string password, string MultiGp, string userid = null)
        {
            if (userid == null)
            {

                int i = (from x in db.TblNewRegs where x.Mobileno == RegData.MobileNumber select x).Count();
                if (i > 0)
                {
                    return "User Already  Registered With This Mobile Number..";
                }
                else
                {
                    string Landline = RegData.Code + '-' + RegData.Landline;
                    string stpass = password;
                    string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                    var res1 = db.SpUserRegistration(RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.typeid, str[1], str[0], RegData.CreatedBy, 0, RegData.disid, RegData.subdivid, RegData.Designation, RegData.MobileNumber, chkvalue, Landline).FirstOrDefault();
                    string[] Gpward = MultiGp.Split(',');
                    foreach (string Gp in Gpward)
                    {

                        var inspector = db.SpUserGpWardSave(Convert.ToInt32(res1), Convert.ToInt32(Gp), 1);

                    }

                    string[] Loca = MultiLoca.Split(',');
                    foreach (string Loc in Loca)
                    {
                        if (Loc != "0")
                        {
                            var inspector = db.SpUserLocationSave(Convert.ToInt32(res1), Convert.ToInt32(Loc), 1);
                        }
                    }
                }

            }
            else
            {
                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                int i = (from x in db.TblNewRegs where x.UserCode == userid && x.IsActive == true select x).Count();
                if (i > 0)
                {
                    return "User Already  Registered With This User ID..";
                }

                var res1 = db.SpOtherUserRegistration(RegData.FirstName, RegData.LastName, RegData.typeid, str[1], str[0], RegData.CreatedBy, 0, RegData.disid, RegData.subdivid, RegData.Designation, userid, chkvalue).FirstOrDefault();
                string[] Gpward = MultiGp.Split(',');
                foreach (string Gp in Gpward)
                {

                    var inspector = db.SpUserGpWardSave(Convert.ToInt32(res1), Convert.ToInt32(Gp), 1);

                }

                string[] Loca = MultiLoca.Split(',');
                foreach (string Loc in Loca)
                {
                    if (Loc != "0")
                    {
                        var inspector = db.SpUserLocationSave(Convert.ToInt32(res1), Convert.ToInt32(Loc), 1);
                    }
                }
            }
            return "User Registered Successfully..";
        }
        #endregion
    }
}
