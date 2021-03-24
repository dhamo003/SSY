using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Data
{
    public class RegistrationData
    {
        SSYEntities db = new SSYEntities();

        #region
        public RegResponse BenfiReg(string finalXml, int uid, string usermobileno, string password, string Source, string Subdiv, string Loc, string Aadharcard, string EpicCard, string registrationno)
        {

            RegResponse response = new RegResponse();
            try
            {
                if (Aadharcard != "" && Aadharcard != null)
                {

                    int data = (from x in db.TblBeneficiaries where x.AadharCard == Aadharcard && x.Status != 2 select x.BenSno).Count();

                    if (data > 0)
                    {
                        response.Message = "Aadhaar number is already exists";
                        response.Code = "999";
                        return response;
                    }
                }

                if (EpicCard != "" && EpicCard != null)
                {
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicCard && x.Status != 2 select x.BenSno).Count();

                    if (data > 0)
                    {
                        response.Message = "Epic number is already exists";
                        response.Code = "999";
                        return response;
                    }

                }



                if (registrationno != "")
                {
                    var RegCheck = db.SpCheckRegNo(registrationno).FirstOrDefault();

                    if (RegCheck > 0)
                    {
                        response.Message = "Registration number already exist.";
                        response.Code = "999";
                        return response;
                    }

                }



                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                var res = db.SpSaveBenfiRegistration(finalXml, uid, str[0], str[1], Convert.ToInt16(Subdiv), Convert.ToInt16(Loc), Source).FirstOrDefault();
                response.Message = res.Message;
                response.Code = res.Code;
                response.SSINNo = res.SSINumber;
                response.BenSno = res.BenSNo.ToString();

                return response;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();


                response.Message = Message;
                response.Code = "999";
                return response;

            }
        }
        #endregion

        #region
        public string NewBenfiReg(string finalXml, int uid, string usermobileno, string password, string Tempbensno)
        {
            try
            {
                int i = (from x in db.TblBeneficiaries where x.BenMobileNo == usermobileno && x.Status != 2 select x).Count();

                if (i > 0)
                {
                    return "User Already  Registered With This Mobile Number..";
                }
                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                var res = db.SaveBenfiRegistration(finalXml, uid, str[0], str[1]).FirstOrDefault();

                if (res.Message == "Success")
                {
                    int tempsno = Convert.ToInt32(Tempbensno);

                    if (tempsno > 0)
                    {
                        // var deltemp = db.spde
                        var res1 = db.SpDeleteBenTempDet(Convert.ToInt32(Tempbensno));
                    }

                }
                return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public RegResponse BenfiRegPart2(string finalXml, string CreatedBy, string Bensno)
        {
            RegResponse response = new RegResponse();
            try
            {
                Int64 Benisno = Convert.ToInt64(Bensno);
                int Cby = Convert.ToInt32(CreatedBy);

                var res = db.SaveBenfiRegistrationPart2New(finalXml, CreatedBy, Benisno).FirstOrDefault();

                response.Message = res.Message;
                response.Code = res.Code;

                return response;

            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();


                response.Message = Message;
                response.Code = "999";
                return response;
            }
        }
        #endregion


        // #region
        //public RegResponse ExistingBenfiReg(string finalXml, int uid, string usermobileno, string password, string Bensno)
        //{

        //    RegResponse response = new RegResponse();
        //    try
        //    {
        //        if (usermobileno != "" && usermobileno != null)
        //        {
        //            int i = (from x in db.TblBeneficiaries where x.BenMobileNo == usermobileno && x.Status != 2 select x).Count();

        //            if (i > 3)
        //            {
        //                response.Message = "User Already  Registered With This Mobile Number.."; ;
        //                response.Code = "999";
        //                return response;
        //            }
        //        }

        //        string stpass = password;
        //        string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
        //        var res = db.SpUpdateExistingDeatilsPart1(finalXml, uid, str[0], str[1],Convert.ToInt64(Bensno)).FirstOrDefault();
        //        response.Message = res.Message;
        //        response.Code = res.Code;

        //        response.BenSno = Bensno;

        //        return response;
        //    }
        //    catch (Exception ex)
        //    {
        //        string Message = "";

        //        if (ex.Message == null)
        //            Message = ex.InnerException.ToString();
        //        else
        //            Message = ex.Message.ToString();


        //        response.Message = Message;
        //        response.Code = "999";
        //        return response;

        //    }
        //}
        //#endregion


        //#region
        ////Check Deedoop
        //public List<SpCheckDedupe_Result> CheckDeedoop(string name, string Fname, DateTime DOB, int BenDistrict, int BenSubDivision, int BenBmc, string BenMobileNo, string AadharCard, string EpicCard, string BankAccNo, string BenTempRegNo, string HusbandName)
        //{
        //    var res = db.SpCheckDedupe(name, Fname, DOB, BenDistrict, BenSubDivision, BenBmc, BenMobileNo, AadharCard, EpicCard, BankAccNo, BenTempRegNo, HusbandName).ToList();
        //    return res;
        //}
        //#endregion
        #region
        public string UpdateBenReg(string Email, string Mobilenum, Int64 uid)
        {
            try
            {
                var res = db.Spupdatebendet(Email, Mobilenum, uid);
                return "Success";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string BenfExistngUser(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
        {
            try
            {
                if (Aadharcard != "" && Aadharcard != null)
                {

                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == Aadharcard && x.Status != 2 && x.BenSno != BenId select x).ToList();

                    if (data.Count > 0)
                    {
                        return "Aadhaar number is already exists";

                    }
                }

                if (EpicCard != "" && EpicCard != null)
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicCard && x.Status != 2 && x.BenSno != BenId select x).ToList();


                    if (data.Count > 0)
                    {
                        return "Epic number is already exists";

                    }

                }

                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                //CommonMethods.AddtoLogFile(Environment.NewLine + " finalXml " + finalXml + " uid " + uid + " str[0] " + str[0] + " str[1] " + str[1] + "  Bensno " + Bensno);

                var remesg = "";

                var res1 = (from x in db.TblBeneficiaries where x.BenSno == Bensno select x).FirstOrDefault();

                if (res1 != null)
                {
                    if (res1.BenSno == Bensno)
                    {
                        CommonMethods.AddtoLogFile(Environment.NewLine + "*******Start BenfExistngUser RegistrationData SpUpdateExistingDeatilsNew , Bensno-" + Bensno +"**********");

                        var res = db.SpUpdateExistingDeatilsNew(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();
                        remesg = res.Message;

                        CommonMethods.AddtoLogFile(Environment.NewLine + "*******End BenfExistngUser RegistrationData SpUpdateExistingDeatilsNew , Bensno-"+ Bensno + ", remesg-" + remesg + "**********");

                    }
                    else
                    {
                        CommonMethods.AddtoLogFile(Environment.NewLine + "*******Start BenfExistngUser RegistrationData SpUpdateGroupVerificationdetails , Bensno-" + Bensno + "**********");

                        var rejun = db.SpUpdateGroupVerificationdetails(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();

                        remesg = rejun.Message;

                        CommonMethods.AddtoLogFile(Environment.NewLine + "*******End BenfExistngUser RegistrationData SpUpdateGroupVerificationdetails , Bensno-" + Bensno + ", remesg-" + remesg + "**********");
                    }

                }
                else
                {
                    CommonMethods.AddtoLogFile(Environment.NewLine + "*******Start BenfExistngUser RegistrationData SpUpdateGroupVerificationdetails , Bensno-" + Bensno + "**********");

                    var rejun1 = db.SpUpdateGroupVerificationdetails(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();

                    //CommonMethods.AddtoLogFile(Environment.NewLine + " SpUpdateGroupVerificationdetails res-" + rejun1.Message);

                    remesg = rejun1.Message;

                    CommonMethods.AddtoLogFile(Environment.NewLine + "*******End BenfExistngUser RegistrationData SpUpdateGroupVerificationdetails , Bensno-" + Bensno + ", remesg-" + remesg + "**********");
                }


                //var rejun = db.SpUpdateGroupVerificationdetails(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();
                //CommonMethods.AddtoLogFile(Environment.NewLine + " SpUpdateGroupVerificationdetails res " + rejun.Message);

                //remesg = rejun.Message;

                //if (rejun.Code != "000")
                //{
                //	var res = db.SpUpdateExistingDeatilsNew(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();
                //	CommonMethods.AddtoLogFile(Environment.NewLine + " SpUpdateExistingDeatilsNew res " + res.Message);

                //	remesg = res.Message;
                //	//return res.Message;


                //}

                return remesg;



            }
            catch (Exception ex)
            {
                CommonMethods.LogError(ex.Message, Bensno + "", Convert.ToString(ex.InnerException), "BenfExistngUser", "RegistrationData");
         
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string BenfReapply(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
        {
            try
            {
                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                if (Aadharcard != "" && Aadharcard != null)
                {

                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == Aadharcard && x.Status != 2 && x.BenSno != BenId select x).ToList();

                    if (data.Count > 0)
                    {
                        return "Aadhaar number is already exists";

                    }
                }

                if (EpicCard != "" && EpicCard != null)
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicCard && x.Status != 2 && x.BenSno != BenId select x).ToList();


                    if (data.Count > 0)
                    {
                        return "Epic number is already exists";

                    }

                }
                var res = db.SpReapplyNew(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();
                if (res.Code == "000")
                {
                    return "Success";
                }
                else
                {
                    return res.Message.ToString();
                }
            }
            catch (Exception ex)
            {
                return ex.InnerException.Message.ToString();
            }
        }
        #endregion
        #region
        //Get Details by using Registration number
        public string RegigetData(string RegNo, string Fathername, string Dob)
        {
            try
            {
                string bensno = "";
                int Count = 0;
                string source = "";
                string BId = "";


                if (Dob != "")
                {

                    var dob = CommonMethods.dateconvertion(Dob);
                    var check = db.SpCheckBeneRegNoOrSSINo(RegNo, Fathername, Convert.ToDateTime(dob)).ToList();

                    if (check.Count > 0)
                    {
                        Count = check.Count;
                        source = check[0].Source;
                        BId = check[0].ID.ToString();


                    }


                }
                else
                {
                    var check = db.SpCheckBeneRegNoOrSSINo(RegNo, Fathername, null).ToList();

                    if (check.Count > 0)
                    {
                        Count = check.Count;
                        source = check[0].Source;
                        BId = check[0].ID.ToString();


                    }
                }
                //var check = db.SpCheckBeneRegNoOrSSINo(RegNo, Fathername, null).ToList();
                if (Count > 0)
                {
                    if (source == "52L" || source == "3.56L")
                    {
                        Int64 id = Convert.ToInt64(BId);
                        var res = (from x in db.TblBeneficiaries where x.BenSno == id select x).FirstOrDefault();
                        if (res.RegType == "N")
                        {
                            return "You are a new benificiary you can not update thruogh CAF";

                        }

                        else
                        {
                            if (res.IsActive == true)
                            {
                                return "Your CAF already updated";

                            }
                            else
                            {
                                if (res.Status == 0)
                                {
                                    return BId.ToString();
                                }
                                if (res.Status == 1)
                                {
                                    return "Your Application Is Already Approved";
                                }
                                if (res.Status == 2)
                                {
                                    return "Your Application Is Rejected";
                                }
                                else
                                {
                                    return "Your Application Is SentBack";
                                }
                            }


                        }

                    }
                    else if (source == "6.6L")
                    {
                        Int64 id = Convert.ToInt64(BId);
                        var res = (from x in db.BenJunkData2 where x.BenSno == id select x).FirstOrDefault();

                        if (res.BenSno == id)
                        {
                            return BId.ToString();
                        }
                        else
                        {
                            return "Invalid Data";
                        }
                        //if (res.RegType == "N")
                        //{
                        //	return "You are a new benificiary you can not update thruogh CAF";

                        //}
                        //else
                        //{
                        //	if (res.IsActive == true)
                        //	{
                        //		return "Your CAF already updated";

                        //	}
                        //	else
                        //	{
                        //		if (res.Status == 0)
                        //		{
                        //			return BId.ToString();
                        //		}
                        //		if (res.Status == 1)
                        //		{
                        //			return "Your Application Is Already Approved";
                        //		}
                        //		if (res.Status == 2)
                        //		{
                        //			return "Your Application Is Rejected";
                        //		}
                        //		else
                        //		{
                        //			return "Your Application Is SentBack";
                        //		}
                        //	}


                        //}

                    }
                    else
                    {
                        return "Your Record Is Under Verification Process,Kindly Contact Your Concerned LWFC";
                    }
                }
                else
                {
                    return "Invalid Data";
                }
            }
            catch (Exception ex)
            {
                if (ex.Message == null)
                    return "There is an issue due to " + ex.InnerException.ToString();
                else
                    return "There is an issue due to " + ex.Message.ToString();


            }
        }
        #endregion
        #region
        public SpGetBenfDetails_Result GetEditBenDetails(Int64 Userid)
        {
            var data = (from x in db.SpGetBenfDetails(Userid) select x).FirstOrDefault();

            return data;
        }
        #endregion

        #region
        public SpGetNameChangedDocument_Result GetDocumentDetails(Int64 Userid)
        {
            var data = (from x in db.SpGetNameChangedDocument(Userid) select x).FirstOrDefault();

            return data;
        }
        #endregion

        #region
        public object GetBenDetailsByMatchingId(Int64 Userid, int MatchingId)
        {
            var data = db.SpGetDeddopBenfDetails(Userid, MatchingId).FirstOrDefault();

            return data;
        }
        #endregion


        #region
        //GetPresentAddress
        public TblBenAddress GetPresentAddress(Int64 Userid)
        {
            var data = (from x in db.TblBenAddresses where x.BenSno == Userid && x.BenAddressType == "Present" select x).FirstOrDefault();
            return data;
        }

        //GetPermanentAddress
        public TblBenAddress GetPermanentAddress(Int64 Userid)
        {
            var data = (from x in db.TblBenAddresses where x.BenSno == Userid && x.BenAddressType == "Permanent" select x).FirstOrDefault();
            return data;
        }
        #endregion
        #region
        //Genarte SSIN
        public SpGenerateSSINo_Result GenarateSsinNo(string SubDivision, string Location, string Source)
        {
            var res = db.SpGenerateSSINo(Convert.ToInt32(SubDivision), Convert.ToInt32(Location), Source).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        //Temp Genarte SSIN
        public SpGenerateTempSSINo_Result TempGenarateSsinNo(string SubDivision, string Location, string Source)
        {
            var res = db.SpGenerateTempSSINo(Convert.ToInt32(SubDivision), Convert.ToInt32(Location), Source).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<SpGetAddressDetails_Result> GetbenAddressDetails(Int64 Userid)
        {
            var data = (from x in db.SpGetAddressDetails(Userid) select x).ToList();
            return data;
        }
        #endregion
        #region
        public SpGetAddressDetails_Result GetPresbenAddressDetails(int Userid)
        {
            var data = (from x in db.SpGetAddressDetails(Userid) where x.BenAddressType == "Present" select x).FirstOrDefault();
            return data;
        }
        #endregion

        #region
        public SpGetAddressDetails_Result GetPerbenAddressDetails(int Userid)
        {
            var data = (from x in db.SpGetAddressDetails(Userid) where x.BenAddressType == "Permanent" select x).FirstOrDefault();
            return data;
        }
        #endregion

        #region
        public TblBeneficiary GetBenDetails(string usermobileno)
        {
            var data = (from x in db.TblBeneficiaries where x.BenMobileNo == usermobileno select x).FirstOrDefault();
            return data;
        }
        #endregion
        #region
        public TblBeneficiary GetBeniDetBySSIN(string UserName, string LoginType)
        {
            if (LoginType == "SSIN")
            {

                var data = (from x in db.TblBeneficiaries where x.SSI_Number == UserName || x.BenTempRegNo == UserName select x).FirstOrDefault();
                return data;
            }
            else
            {
                var data = (from x in db.TblBeneficiaries where x.EpicCard == UserName || x.AadharCard == UserName select x).FirstOrDefault();
                return data;

            }
        }

        public bool CheckBankNumberExists(string bankAccNo)
        {
            if (string.IsNullOrEmpty(bankAccNo))
            {
                return false;
            }
            var data = (from x in db.TblBeneficiaries where x.BankAccNo == bankAccNo && x.Status!=2 select x.BenBankAccNo ).ToList();
            //data.AddRange((from x in db.TblBenNomineeDtls where x.BenNomineeBankAccNo == bankAccNo select x.BenNomineeBankAccNo).ToList());
            return data.Count != 0;
        }
        // For Nominee List of bank account number exists
        public List<string> CheckBankNumbersExists(List<string> bankAccNos)
        {
            List<string> ErrorMessages = new List<string>();
            bankAccNos.ForEach((ba) =>
            {
                var data = (from x in db.TblBeneficiaries where x.BankAccNo == ba && x.Status != 2 select x).ToList();
              
                //data.AddRange((from x in db.TblBenNomineeDtls where x.BenNomineeBankAccNo == ba select x.BenNomineeBankAccNo).ToList());
                if (!string.IsNullOrEmpty(ba) && data.Count() > 0)
                {
                    ErrorMessages.Add("Bank Account Number = " + ba);
                }
            });
            return ErrorMessages;
        }
        #endregion

        #region
        public TblBeneficiary GetBenDetByBensno(string Bensno)
        {
            Int64 bensno = Convert.ToInt64(Bensno);
            var data = (from x in db.TblBeneficiaries where x.BenSno == bensno select x).FirstOrDefault();
            return data;
        }
        #endregion

        #region
        public TblBeneficiary GetBeniDetBySSIN(string SSIN)
        {
            var data = (from x in db.TblBeneficiaries where x.SSI_Number == SSIN select x).FirstOrDefault();
            return data;
        }
        #endregion




        #region
        public List<GetBenNomineeDtlsDet_Result> GetNamiNeeDetails(Int64 userid)
        {
            var res = db.GetBenNomineeDtlsDet(userid).ToList();

            return res;
        }
        #endregion

        #region For getting Nominee Delete Request Details
        public List<GetDeleteNomineeDet_Result> GetNamineeDeleteReqDetails(Int64 Id)
        {
            var res = db.GetDeleteNomineeDet(Id).ToList();

            return res;
        }
        #endregion
        #region
        public List<GetBenFamilyMemberDet_Result> GetFamilyDetails(Int64 userid)
        {
            var res = db.GetBenFamilyMemberDet(userid).ToList();

            return res;
        }
        #endregion

        #region For getting Dependent Delete Request Details
        public List<GetDeleteDependentDet_Result> GetFamilyDeleteReqDetails(Int64 Id)
        {
            var res = db.GetDeleteDependentDet(Id).ToList();

            return res;
        }
        #endregion


        #region
        public List<GetBenNomineeDtlsDetForCertificate_Result> GetNamiNeeDetailsCertificate(Int64 userid)
        {
            var res = db.GetBenNomineeDtlsDetForCertificate(userid).ToList();
            return res;
        }
        #endregion
        #region
        public TblBenFamilyMember GetsingleFamilyDetails(Int64 userid)
        {
            var res = (from x in db.TblBenFamilyMembers where x.BenFamilyMemSno == userid select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region check mobile no unique or not
        public int CheckUserMobile(string usermobileno)
        {
            if (usermobileno != "" && usermobileno != null)
            {
                var data = (from x in db.TblBeneficiaries where x.BenMobileNo == usermobileno && x.Status != 2 select x).ToList();
                int count = data.Count();
                return count;
            }
            else
            {
                return 0;
            }

        }
        #endregion



        #region For verifying User Mobile number and dob,whether it is already exists or not
        public int ValidateMobileWithDob(string usermobileno, string Dob)
        {

            int Count = 0;


            var Value = CommonMethods.dateconvertion(Dob);

            var res = db.SpCheckMobileWithDob(usermobileno, Convert.ToDateTime(Value)).FirstOrDefault();


            Count = res.MobileNoCnt ?? 0;



            return Count;




        }
        #endregion


        #region check aadhaar unique or not
        public int ValidateAadhaar(string AadhaarNo, string Bensno = "")
        {
            int count = 0;
            if (AadhaarNo != "" && AadhaarNo != null)
            {
                if (Bensno == "")
                {
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == AadhaarNo && x.Status != 2 select x).ToList();
                    count = data.Count();
                    return count;
                }
                else
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == AadhaarNo && x.Status != 2 && x.BenSno != BenId select x).ToList();
                    count = data.Count();
                    return count;
                }

            }
            else
            {
                return 0;
            }
        }
        #endregion

        #region check epic unique or not
        public int ValidateEpic(string EpicNo, string Bensno = "")
        {
            int count = 0;
            if (EpicNo != "" && EpicNo != null)
            {
                if (Bensno == "")
                {
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicNo && x.Status != 2 select x).ToList();
                    count = data.Count();
                    return count;
                }
                else
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicNo && x.Status != 2 && x.BenSno != BenId select x).ToList();
                    count = data.Count();
                    return count;
                }

            }
            else
            {
                return 0;
            }
        }
        #endregion

        #region
        public string SendOtp(string MobileNo, string Otp, string Mail)
        {
            try
            {
                var res = db.SpSaveOTP(MobileNo, Otp, Mail);
                return "OTP Sent Successfully To Registered Mobile Number";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }


        public string SenOtpNominee(string MobileNo, string Otp)
        {
            try
            {
                var res = db.SpSaveOTP(MobileNo, Otp, "");
                return "OTP Sent Successfully To Nominee Mobile Number";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        public string SenOtpForMobileVerify(string MobileNo, string Otp)
        {
            try
            {
                var res = db.SpSaveOTP(MobileNo, Otp, "");
                return "OTP Sent Successfully To Mobile Number";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string Verifyotp(string MobileNo, string OTP)
        {
            try
            {
                var Result = db.SpVerifyOTP(MobileNo, OTP).FirstOrDefault();

                var res = (from x in db.TblBeneficiaries where x.BenMobileNo == MobileNo && x.IsActive == true select x).FirstOrDefault();
                if (Result == 1)
                {
                    // db.SpUpdateLoginStatus(res.BenSno, 1, "benificiary");
                    return "0";
                }

                else
                {
                    return "1";
                }

            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string UpdateNomDep(string finalXml, string Userid)
        {
            try
            {
                var res = db.SpUpdatenomDepenDeatils(finalXml, Convert.ToInt32(Userid));
                return "0";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion

        #region
        public string Checkuniqueno(string Number)
        {
            var res = db.SpCheckRegNo(Number).FirstOrDefault();

            //(from x in db.TblBeneficiaries where x.RegNumber == Number || x.SSI_Number == Number select x).ToList();

            if (res == 0)
                return "";
            else
                return "Registration number already exist.";

        }
        #endregion

        #region
        public string SaveRegdet(string finalXml, int uid)
        {
            try
            {


                var res = db.SaveBenifRegdet(finalXml, uid).FirstOrDefault();

                string bensno = (res.Bensno).ToString();
                return bensno;
                // return null;
            }

            catch (Exception ex)
            {

                return ex.Message.ToString();
            }


        }




        public string RegisAdditionalDet(int Tempsno, string pfnumdet, string esinumdet, string tempemptype, string occupat, string selfemp, string estaddres, string mnthincome, string pfsta, int Userid)
        {
            try
            {
                //occupat,

                var res = db.Sp_UpdateRegTempdet(Tempsno, "", pfnumdet, tempemptype, selfemp, estaddres, mnthincome, esinumdet, occupat, Convert.ToInt32(pfsta), Userid);

                //  string bensno = (res.Bensno).ToString();
                //return bensno;
                return "";
            }

            catch (Exception ex)
            {

                return "";
            }


        }


        public string RegisNomineeDepdet(string finalXml, string Issueauth, string authorityloc, string Authname, string Id, string Userid)
        {
            try
            {
                var res = db.SaveNomineedepdntTemp(finalXml, Issueauth, authorityloc, Authname, Convert.ToInt32(Id), Convert.ToInt32(Userid)).FirstOrDefault();

                // var res = db.SaveBenifRegdet(finalXml, uid).FirstOrDefault();

                //  string bensno = (res.Bensno).ToString();
                //return bensno;
                return "";
            }

            catch (Exception ex)
            {

                return "";
            }


        }

        #endregion
        #region
        public string PfInsert(int bensno, string pf, string esi, int Pfstatus)
        {
            try
            {
                var res = db.SPInsertPfDet(bensno, pf, esi, Pfstatus).FirstOrDefault();
                return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion



        #region Get Pf Details
        public List<SpGetPfDetails_Result> GetPFDetails(int id)
        {

            var res1 = db.SpGetPfDetails(id).ToList();
            return res1;

        }
        #endregion

        //#region save Photo and signature

        //public RegResponse SavePhotoSign(string Photo, string sign, string BenSno)
        //{
        //    RegResponse Response = new RegResponse();
        //    try
        //    {
        //        var res = db.SpSavePhotoSign(Photo, sign, Convert.ToInt64(BenSno)).FirstOrDefault();
        //        Response.Message = res.Message;
        //        Response.Code = res.Code;
        //        return Response;

        //    }

        //    catch (Exception ex)
        //    {

        //        string Message = "";

        //        if (ex.Message == null)
        //            Message = ex.InnerException.ToString();
        //        else
        //            Message = ex.Message.ToString();

        //        Response.Message = Message;
        //        Response.Code = "999";
        //        return Response;
        //    }



        //}
        //#endregion

        #region Dependent Deletion
        public RequestResponse DeleteDependent(string Id, string Remarks, int Type, Int64 DelBy)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                Int64 Value = Convert.ToInt64(Id);
                int count = 0;


                var Result = db.SpDeleteDependent(Value, 0, Remarks, Type, DelBy).FirstOrDefault();
                Res.Message = Result.Message;
                Res.Code = Result.Code;

                return Res;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Res.Message = Message;
                Res.Code = "999";
                return Res;

            }



        }
        #endregion

        #region Nominee Deletion
        public RequestResponse DeleteNominee(string Id, string Remarks, int Type, Int64 DelBy)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                Int64 Value = Convert.ToInt64(Id);

                var Result = db.SpDeleteNominee(Value, 0, Remarks, Type, DelBy).FirstOrDefault();
                Res.Message = Result.Message;
                Res.Code = Result.Code;

                return Res;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Res.Message = Message;
                Res.Code = "999";
                return Res;

            }



        }
        #endregion

        #region update Dependent Delete Request

        public RequestResponse UpdateDepDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                // Int64 Value = Convert.ToInt64(Id);

                var Result = db.UpdateDeleteDepRequest(UniqueId, Status, Remarks, VerifiedBy, RequestId).FirstOrDefault();
                Res.Message = Result.Message;
                Res.Code = Result.Code;

                return Res;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Res.Message = Message;
                Res.Code = "999";
                return Res;

            }

        }
        #endregion

        #region update Nominee Delete Request

        public RequestResponse UpdateNomineeDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                // Int64 Value = Convert.ToInt64(Id);

                var Result = db.UpdateDeleteNomineeRequest(UniqueId, Status, Remarks, VerifiedBy, RequestId).FirstOrDefault();
                Res.Message = Result.Message;
                Res.Code = Result.Code;

                return Res;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Res.Message = Message;
                Res.Code = "999";
                return Res;

            }

        }
        #endregion

        #region Get Status of benificiary request

        public List<SpGetBeniRequests_Result> GetStatusRequests(Int64 Bensno)
        {
            var res = db.SpGetBeniRequests(Bensno).ToList();
            return res;
        }

        #endregion

        #region

        public SpGetBeniDocs_Result GetBeniDocs(string Bensno)
        {
            var res = db.SpGetBeniDocs(Convert.ToInt64(Bensno)).FirstOrDefault();
            return res;
        }
        #endregion


        #region

        public RequestResponse SubmitBankDetails(string BenSno, string BankDistrict, string BankLoca, string bnk, string bankbranc, string ifsccode, string txtreason, string BankPassBookFileName, string BankAccNo, string userid, string ipadd)
        {

            RequestResponse Res = new RequestResponse();

            var res = db.SpEditBankDetails(Convert.ToInt64(BenSno), Convert.ToInt16(BankDistrict), Convert.ToInt16(BankLoca), bnk, bankbranc, BankAccNo, txtreason, ifsccode, BankPassBookFileName, ipadd).FirstOrDefault();

            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }
        public RequestResponse SubmitBenPersonalDetails(string benSno, string beneFirstName, string benLastName, string benMiddleName, DateTime beneDOB, string documentIDProof, string documentDOBProof, string iDProofExtension, string dOBProofExtension, string changeType, string userid, string ipadd)
        {

            RequestResponse Res = new RequestResponse();

            var res = db.SpEditBenePersonalDetailsExt1(Convert.ToInt64(benSno), beneFirstName, benLastName, benMiddleName, beneDOB, documentIDProof, documentDOBProof, iDProofExtension, dOBProofExtension, changeType, ipadd).FirstOrDefault();

            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }
        public RequestResponse SubmitBenAddressDetails(string benSno, string perDIstID, string perSubDivID, string perBMC, string perBlock, string perPSID, string perPOID, string perPinCode, string perWard, string perVlg, string preDIstID, string preSubDivID, string preBMC, string preBlock, string prePSID, string prePOID, string prePinCode, string preWard, string preVlg, string createdBy, string proofExtension, string proofString, string userid, string ipadd)
        {
            RequestResponse Res = new RequestResponse();

            var res = db.SpInsertBeneAddressReq(Convert.ToInt64(benSno), perDIstID, perSubDivID, perBMC, perBlock, perPSID, perPOID, perPinCode, perWard, perVlg, preDIstID, preSubDivID, preBMC, preBlock, prePSID, prePOID, prePinCode, preWard, preVlg, createdBy, proofExtension, proofString, ipadd).FirstOrDefault();
            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }
        public List<SpGetBeneAddressDetEditHistory_Result> GetBeneAddressDetEditHistory(string benSno)
        {
            var res = db.SpGetBeneAddressDetEditHistory(Convert.ToInt64(benSno)).ToList();
            return res;
        }
        #endregion

        public RequestResponse UpdateeDistTWData(string benSno, string regoistrationNumber, string employernature, string ruralUrban, string employerAddress, string regNoOftheInstitute, string natureoftheJob, string workSpaceDetailsAndAddress, string statusoftheWorker, string eligibilityCertificateFormString, string eligibilityCertificateFormExtension, string dependentPassbookString, string dependentPassbookExt, string drivingLicenseString, string drivingLicenseExt, string natureOfthevehicle, string natureofDuty, string certificateofIdentificationAttached, string feeSubmissionParticulars, string rateofSubscription, string renewalXML)
        {
            RequestResponse Res = new RequestResponse();

            var res = db.SpUpdateeDistTWDataExt(Convert.ToInt64(benSno), regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, workSpaceDetailsAndAddress, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, dependentPassbookString, dependentPassbookExt, drivingLicenseString, drivingLicenseExt, natureOfthevehicle, natureofDuty, certificateofIdentificationAttached, feeSubmissionParticulars, Convert.ToDecimal(rateofSubscription), renewalXML).FirstOrDefault();
            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }
        public SpGetEdistConstructionDetailsResult GetEdistConstructDetails(Int64 Userid, string EDRegId)
        {
            var data = new SpGetEdistConstructionDetailsResult() { ResCode = "123", ResDesc = "No Data found." };

            var Result = (from x in db.SpGetEdistConstructionDetails(Userid, EDRegId) select x).FirstOrDefault();
            if (Result != null)
            {
                data.ResCode = "000";
                data.ResDesc = "Contractor Details Binded Successfully.";
                data.Data = Result;
            }
            return data;

            //var data = (from x in db.SpGetEdistConstructionDetails(Userid, EDRegId) select x).FirstOrDefault();

            //return data;
        }
        public SpEdistConstructionDetailsResult GetEdistConstructionDetails(Int64 Userid)
        {
            var data = new SpEdistConstructionDetailsResult() { ResCode = "123", ResDesc = "No Data found." };

            var Result = (from x in db.SpGetConstructionEdistrictDetails(Convert.ToString(Userid)) select x).FirstOrDefault();
            if (Result != null)
            {
                data.ResCode = "000";
                data.ResDesc = "Contractor Details Binded Successfully.";
                data.Data = Result;
            }
            return data;

        }

        public SpGetEdistTransportDetailsResult GetEdistTransportDetails(Int64 Userid, string EDRegId)
        {
            var data = new SpGetEdistTransportDetailsResult() { ResCode = "123", ResDesc = "No Data found." };

            var Result = (from x in db.SpGetEdistTransportDetails(Userid, EDRegId) select x).FirstOrDefault();
            if (Result != null)
            {
                data.ResCode = "000";
                data.ResDesc = "Transport Details Binded Successfully.";
                data.Data = Result;
            }
            return data;
            //var data = (from x in db.SpGetEdistTransportDetails(Userid, EDRegId) select x).FirstOrDefault();

            //return data;
        }

        public RequestResponse UpdateeDistCWData(string benSno, string regoistrationNumber, string employernature, string ruralUrban, string employerAddress, string regNoOftheInstitute, string natureoftheJob, DateTime employmentStartDate, DateTime employmentEndDate, string noOfWorkingDays, string workSpaceDetailsAndAddress, Nullable<decimal> rateofSubsricption, string statusoftheWorker, string eligibilityCertificateFormString, string eligibilityCertificateFormExtension, string statutoryAppform27String, string statutoryAppform27Ext, string copyofSchemeCertificateString, string copyofSchemeCertificateExt, string Particularsofdocument, string CertificateIdentification)
        {
            RequestResponse Res = new RequestResponse();

            var res = db.SpUpdateeDistCWData(Convert.ToInt64(benSno), regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, employmentStartDate, employmentEndDate, noOfWorkingDays, workSpaceDetailsAndAddress, rateofSubsricption, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, statutoryAppform27String, statutoryAppform27Ext, copyofSchemeCertificateString, copyofSchemeCertificateExt, Particularsofdocument, CertificateIdentification).FirstOrDefault();
            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }

        public SpGetEdistTransportAllDetailsResult GetEdistTransportDetailsAll(Int64 Userid, string EDRegId)
        {
            var data = new SpGetEdistTransportAllDetailsResult() { ResCode = "123", ResDesc = "No Data found." };

            var Result = (from x in db.SpGeteDistrictTransportAllDetails(Userid, EDRegId) select x).FirstOrDefault();
            if (Result != null)
            {
                data.ResCode = "000";
                data.ResDesc = "Transport Details Binded Successfully.";
                data.Data = Result;
            }
            return data;
            //var data = (from x in db.SpGetEdistTransportDetails(Userid, EDRegId) select x).FirstOrDefault();

            //return data;
        }


        public string UpdateRenewelDetailsByBene(string finalXml, string Userid)
        {
            try
            {
                var res = db.SpUpdateTransportRenewelDetailsByBene(finalXml, Convert.ToInt32(Userid));
                return "0";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        public string UpdateSubscriptDetls(string finalXml, string Userid)
        {
            try
            {
                var res = db.SpInsertConstructSubscriptDeatils(finalXml, Convert.ToInt32(Userid));
                return "0";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        public RequestResponse InsertConstructRenewalDtls(string ssinum, string regnum, string employerName, string regbookno, string recpno, DateTime RegDate, string recAmt, string imgdobproofdoc, string imgdobproofdocExt, string userId)
        {
            RequestResponse Res = new RequestResponse();

            var res = db.SpInsertConstructRenewalDeatils(Convert.ToInt64(ssinum), regnum, employerName, regbookno, recpno, RegDate, recAmt, imgdobproofdoc, imgdobproofdocExt, userId).FirstOrDefault();
            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }

        public RequestResponse SubmitBenRenewelReqDetails(string benSno, string registrationNumber, string subscriptMonth, string subscriptYear, decimal amount, DateTime collectionDate, string receiptPageno, string receiptBOokno, string createdBy)
        {

            RequestResponse Res = new RequestResponse();

            var res = db.SpInsertTransportBeneRenewalReq(Convert.ToInt64(benSno), registrationNumber, subscriptMonth, subscriptYear, amount, collectionDate, receiptPageno, receiptBOokno, createdBy).FirstOrDefault();

            Res.Message = res.Message;
            Res.Code = res.Code;
            return Res;
        }

        #region
        public object GeteDistBeneDetailsforRegistration(string OldRegNewRegAIN, string regType)
        {
            var data = db.SpGeteDistDetailsforRegistration(OldRegNewRegAIN, regType).FirstOrDefault();

            return data;
        }
        public object GeteDistBeneRegDetails(Int64 Userid)
        {
            var data = db.SPGeteDistBeneRegDetails(Userid).FirstOrDefault();

            return data;
        }
        #endregion

        #region
        public List<SPGeteDistBeneRenewalDetails_Result> GeteDistBeneRenewalDetails(Int64 userid)
        {
            var res = db.SPGeteDistBeneRenewalDetails(userid).ToList();

            return res;
        }
        #endregion

        #region
        public EDistrictFilePathsResponse GeteDistBeneFilePaths(string aINNumber, string regNumber)
        {
            var res = db.SPgeteDistFilePaths(aINNumber, regNumber).ToList();
            EDistrictFilePathsResponse ress = new EDistrictFilePathsResponse();
            foreach (var item in res)
            {
                if (item.realfilename.Contains("Age"))
                    ress.AgeProof = item.NeededFileName;
                else if (item.realfilename.Contains("Eligibility"))
                    ress.ElegibilityCertificate = item.NeededFileName;
                else if (item.realfilename.Contains("Other"))
                    ress.OtherDocument = item.NeededFileName;
                else if (item.realfilename.Contains("Self"))
                    ress.SelfPhotograph = item.NeededFileName;
                else if (item.realfilename.Contains("Signature"))
                    ress.Signature = item.NeededFileName;
                else if (item.realfilename.Contains("Statutory"))
                    ress.StatuatoryApplicationForm = item.NeededFileName;
            }

            return ress;
        }
        #endregion

        #region death Claim
        public string BenfDeathtest(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
        {
            try
            {
                if (Aadharcard != "" && Aadharcard != null)
                {

                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == Aadharcard && x.Status != 2 && x.BenSno != BenId select x).ToList();

                    if (data.Count > 0)
                    {
                        return "Aadhaar number is already exists";

                    }
                }

                if (EpicCard != "" && EpicCard != null)
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicCard && x.Status != 2 && x.BenSno != BenId select x).ToList();


                    if (data.Count > 0)
                    {
                        return "Epic number is already exists";

                    }

                }

                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                var res = db.SpUpdateNomineeCAFDeatils(finalXml, uid, str[0], str[1], Bensno).FirstOrDefault();
                return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        public string BenfDeathtestExt(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard, string registrationno)
        {
            try
            {
                if (Aadharcard != "" && Aadharcard != null)
                {

                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.AadharCard == Aadharcard && x.Status != 2 && x.BenSno != BenId select x).ToList();

                    if (data.Count > 0)
                    {
                        return "Aadhaar number is already exists";

                    }
                }

                if (EpicCard != "" && EpicCard != null)
                {
                    Int64 BenId = Convert.ToInt64(Bensno);
                    var data = (from x in db.TblBeneficiaries where x.EpicCard == EpicCard && x.Status != 2 && x.BenSno != BenId select x).ToList();


                    if (data.Count > 0)
                    {
                        return "Epic number is already exists";

                    }

                }

                //if (registrationno != "")
                //{
                //	var RegCheck = db.SpCheckRegNo(registrationno).FirstOrDefault();

                //	if (RegCheck > 0)
                //	{
                //		return "Registration number already exist.";
                //	}

                //}

                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');

                var res = db.SpUpdateNomineeCAFDeatilsext(finalXml, uid, str[0], str[1], Bensno, registrationno).FirstOrDefault();
                return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        public SPGetPFBalanceExt_Result GetPFBalanceDetails(string PfNumber)
        {
            var res = db.SPGetPFBalanceExt(PfNumber).FirstOrDefault();
            return res;
        }


    }
}
