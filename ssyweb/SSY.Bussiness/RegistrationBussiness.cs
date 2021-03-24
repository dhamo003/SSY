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
    public class RegistrationBussiness
    {
        RegistrationData Rd = new RegistrationData();
        #region
        public RegResponse BenfiReg(string finalXml, int uid, string usermobileno, string password, string Source, string Subdiv, string Loc, string Aadharcard, string EpicCard, string registrationno)
        {
            return Rd.BenfiReg(finalXml, uid, usermobileno, password, Source, Subdiv, Loc, Aadharcard, EpicCard, registrationno);
        }
        #endregion

        #region
        public string NewBenfiReg(string finalXml, int uid, string usermobileno, string password, string Tempbensno)
        {
            return Rd.NewBenfiReg(finalXml, uid, usermobileno, password, Tempbensno);
        }
        #endregion

        #region
        public RegResponse BenfiRegPart2(string finalXml, string CreatedBy, string Bensno)
        {
            return Rd.BenfiRegPart2(finalXml, CreatedBy, Bensno);
        }
        #endregion


        //#region
        //public RegResponse ExistingBenfiReg(string finalXml, int uid, string usermobileno, string password, string Bensno)
        //{
        //    return Rd.ExistingBenfiReg(finalXml, uid, usermobileno, password, Bensno);
        //}
        //#endregion
        //#region
        ////Check Deedoop
        //public List<SpCheckDedupe_Result> CheckDeedoop(string name, string Fname, DateTime DOB, int BenDistrict, int BenSubDivision, int BenBmc, string BenMobileNo, string AadharCard, string EpicCard, string BankAccNo, string BenTempRegNo, string HusbandName)
        //{
        //    return Rd.CheckDeedoop(name, Fname, DOB, BenDistrict, BenSubDivision, BenBmc, BenMobileNo, AadharCard, EpicCard, BankAccNo, BenTempRegNo, HusbandName);
        //}
        //#endregion
        #region
        public string UpdateBenReg(string Email, string Mobilenum, Int64 uid)
        {
            return Rd.UpdateBenReg(Email, Mobilenum, uid);
        }
        #endregion
        #region
        public SpGetBenfDetails_Result GetEditBenDetails(Int64 Userid)
        {
            return Rd.GetEditBenDetails(Userid);
        }
		#endregion

		#region
		public SpGetNameChangedDocument_Result GetDocumentDetails(Int64 Userid)
		{
			return Rd.GetDocumentDetails(Userid);
		}
		#endregion

		#region
		public object GetBenDetailsByMatchingId(Int64 Userid, int MatchingId)
        {
            return Rd.GetBenDetailsByMatchingId(Userid, MatchingId);
        }
        #endregion


        #region
        //Get Present Address
        public TblBenAddress GetPresentAddress(Int64 BenSno)
        {
            var res = Rd.GetPresentAddress(BenSno);
            return res;
        }
        #endregion
        #region
        //Genarate SSINNo
        //  Rb.GenarateSsinNo(SubDivision, Location, Source);

        public SpGenerateSSINo_Result GenarateSsinNo(string SubDivision, string Location, string Source)
        {
            var res = Rd.GenarateSsinNo(SubDivision, Location, Source);
            return res;
        }
        #endregion
        #region
        //TempRegNo
        public SpGenerateTempSSINo_Result TempGenarateSsinNo(string SubDivision, string Location, string Source)
        {
            var res = Rd.TempGenarateSsinNo(SubDivision, Location, Source);
            return res;
        }
        #endregion
        #region
        //GetbenAddressDetails
        public List<SpGetAddressDetails_Result> GetbenAddressDetails(Int64 Userid)
        {
            return Rd.GetbenAddressDetails(Userid);
        }
        #endregion
        #region
        public SpGetAddressDetails_Result GetPresbenAddressDetails(int Userid)
        {
            return Rd.GetPresbenAddressDetails(Userid);
        }
        #endregion

        #region
        public SpGetAddressDetails_Result GetPerbenAddressDetails(int Userid)
        {
            return Rd.GetPerbenAddressDetails(Userid);
        }
        #endregion
        #region
        public TblBeneficiary GetBenDetails(string usermobileno)
        {
            return Rd.GetBenDetails(usermobileno);
        }
        #endregion
        //#region
        ////get Ben Data With SSIN Number
        //public TblBeneficiary getmobilenumber(string UserName)
        //{
        //    return Rd.getmobilenumber(UserName);
        //}
        //#endregion

        #region
        public TblBeneficiary GetBeniDetBySSIN(string SSIN, string LoginType)
        {
            return Rd.GetBeniDetBySSIN(SSIN, LoginType);
        }
        #endregion

        #region
        public TblBeneficiary GetBenDetByBensno(string Bensno)
        {
            return Rd.GetBenDetByBensno(Bensno);
        }
        #endregion
        #region
        public List<GetBenNomineeDtlsDet_Result> GetNamiNeeDetails(Int64 userid)
        {
            return Rd.GetNamiNeeDetails(userid);
        }
        #endregion

        #region For getting Nominee Delete Request Details
        public List<GetDeleteNomineeDet_Result> GetNamineeDeleteReqDetails(Int64 Id)
        {
            return Rd.GetNamineeDeleteReqDetails(Id);
        }
        #endregion

        #region For getting Dependent Delete Request Details
        public List<GetDeleteDependentDet_Result> GetFamilyDeleteReqDetails(Int64 Id)
        {
            return Rd.GetFamilyDeleteReqDetails(Id);

        }

        #endregion
        #region
        public List<GetBenNomineeDtlsDetForCertificate_Result> GetNamiNeeDetailsCertificate(Int64 userid)
        {
            return Rd.GetNamiNeeDetailsCertificate(userid);
        }
        #endregion
        #region
        public List<GetBenFamilyMemberDet_Result> GetFamilyDetails(Int64 userid)
        {
            return Rd.GetFamilyDetails(userid);
        }
        #endregion
        #region
        public TblBenFamilyMember GetsingleFamilyDetails(Int64 userid)
        {
            return Rd.GetsingleFamilyDetails(userid);
        }
        #endregion
        #region
        public int CheckUserMobile(string MobileNo)
        {
            var Result = Rd.CheckUserMobile(MobileNo);
            return Result;
        }
        #endregion

        #region For verifying User Mobile number and dob,whether it is already exists or not
        public int ValidateMobileWithDob(string MobileNo, string Dob)
        {
            var Result = Rd.ValidateMobileWithDob(MobileNo, Dob);
            return Result;
        }
        #endregion


        #region check aadhaar unique or not
        public int ValidateAadhaar(string ValidateAadhaar, string Bensno = "")
        {
            var Result = Rd.ValidateAadhaar(ValidateAadhaar, Bensno);
            return Result;
        }
        #endregion




        #region check epic unique or not
        public int ValidateEpic(string EpicNo, string Bensno = "")
        {
            var Result = Rd.ValidateEpic(EpicNo, Bensno);
            return Result;
        }
        #endregion
        #region
        //SendOtp
        public string SendOtp(string MobileNo, string Mail)
        {
            string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
            string Otp = CommonMethods.GenerateRandomMpin();
            var Result = Rd.SendOtp(MobileNo, Otp, Mail);
            if (Result == "OTP Sent Successfully To Registered Mobile Number")
            {
                string Message = "OTP for mobile number verification " + Otp + " Please do not share it with anyone.";
                CommonMethods.SendBillSms(MobileNo, Message, 0, "OTP verification", "Bene");
                if (!string.IsNullOrEmpty(Mail))
                    CommonMethods.SendMail_WithHtml(Mail, FromEmail, Message, "SSY OTP");
            }
            return Result;
        }

		public string SenOtpNominee(string MobileNo)
		{
			//string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
			string Otp = CommonMethods.GenerateRandomMpin();
			var Result = Rd.SenOtpNominee(MobileNo, Otp);
			if (Result == "OTP Sent Successfully To Nominee Mobile Number")
			{
				string Message = "OTP for mobile number verification " + Otp + " Please do not share it with anyone.";
				CommonMethods.SendBillSms(MobileNo, Message, 0, "OTP verification", "Bene");
				//if (!string.IsNullOrEmpty(Mail))
				//	CommonMethods.SendMail_WithHtml(Mail, FromEmail, Message, "SSY OTP");
			}
			return Result;
		}

		public string SenOtpForMobileVerify(string MobileNo)
		{
			//string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
			string Otp = CommonMethods.GenerateRandomMpin();
			var Result = Rd.SenOtpForMobileVerify(MobileNo, Otp);
			if (Result == "OTP Sent Successfully To Mobile Number")
			{
				string Message = "OTP for mobile number verification " + Otp + " Please do not share it with anyone.";
				CommonMethods.SendBillSms(MobileNo, Message, 0, "OTP verification", "Bene");
				//if (!string.IsNullOrEmpty(Mail))
				//	CommonMethods.SendMail_WithHtml(Mail, FromEmail, Message, "SSY OTP");
			}
			return Result;
		}

		
		#endregion
		#region
		public string Verifyotp(string MobileNo, string OTP)
        {
            var Result = Rd.Verifyotp(MobileNo, OTP);
            return Result;
        }
        #endregion
        #region
        public string BenfExistngUser(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
        {
            return Rd.BenfExistngUser(finalXml, uid, usermobileno, Bensno, password, Aadharcard, EpicCard);
        }
        #endregion
        #region
        public string BenfReapply(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
        {
            return Rd.BenfReapply(finalXml, uid, usermobileno, Bensno, password, Aadharcard, EpicCard);
        }
        #endregion
        #region
        public string RegigetData(string RegNo, string Fathername, string Dob)
        {
            return Rd.RegigetData(RegNo, Fathername, Dob);
        }
        #endregion
        #region
        public string UpdateNomDep(string finalXml, string Userid)
        {
            return Rd.UpdateNomDep(finalXml, Userid);
        }
        #endregion
        #region
        public string Checkuniqueno(string Number)
        {
            var res = Rd.Checkuniqueno(Number);

            return res;

        }
        #endregion

        #region
        public string SaveRegdet(string finalXml, int uid)
        {
            return Rd.SaveRegdet(finalXml, uid);
        }


        public string RegisNomineeDepdet(string finalXml, string Issueauth, string authorityloc, string Authname, string Id, string Userid)
        {
            return Rd.RegisNomineeDepdet(finalXml, Issueauth, authorityloc, Authname, Id, Userid);
        }




        public string RegisAdditionalDet(int Tempsno, string pfnumdet, string esinumdet, string tempemptype, string occupat, string selfemp, string estaddres, string mnthincome, string pfsta, int Userid)
        {
            return Rd.RegisAdditionalDet(Tempsno, pfnumdet, esinumdet, tempemptype, occupat, selfemp, estaddres, mnthincome, pfsta, Userid);
        }
        #endregion
        #region
        public string PfInsert(int bensno, string pf, string esi, int Pfstatus)
        {
            return Rd.PfInsert(bensno, pf, esi, Pfstatus);

        }
        #endregion



        #region
        public List<SpGetPfDetails_Result> GetPFDetails(int id)
        {
            return Rd.GetPFDetails(id);
        }
        #endregion

        //#region save Photo and signature

        //public RegResponse SavePhotoSign(string Photo, string sign, string BenSno)
        //{
        //    return Rd.SavePhotoSign(Photo, sign, BenSno);
        //}
        //#endregion

        #region Dependent Deletion
        public RequestResponse DeleteDependent(string Id, string Remarks, int Type, Int64 DelBy)
        {
            return Rd.DeleteDependent(Id, Remarks, Type, DelBy);
        }
        #endregion

        #region Nominee Deletion
        public RequestResponse DeleteNominee(string Id, string Remarks, int Type, Int64 DelBy)
        {
            return Rd.DeleteNominee(Id, Remarks, Type, DelBy);

        }
        #endregion



        #region update Dependent Delete Request

        public RequestResponse UpdateDepDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {
            return Rd.UpdateDepDelRequest(RequestId, Status, Remarks, UniqueId, VerifiedBy);
        }

        #endregion

        #region update Nominee Delete Request

        public RequestResponse UpdateNomineeDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {

            return Rd.UpdateNomineeDelRequest(RequestId, Status, Remarks, UniqueId, VerifiedBy);
        }

        #endregion

        #region Get Status of benificiary request

        public List<SpGetBeniRequests_Result> GetStatusRequests(Int64 Bensno)
        {
            return Rd.GetStatusRequests(Bensno);
        }

        #endregion

        #region

        public SpGetBeniDocs_Result GetBeniDocs(string Bensno)
        {

            return Rd.GetBeniDocs(Bensno);
        }
        #endregion


        #region

        public RequestResponse SubmitBankDetails(string BenSno, string BankDistrict, string BankLoca, string bnk, string bankbranc, string ifsccode, string txtreason, string BankPassBookFileName, string BankAccNo, string userid, string ipadd)
        {
            return Rd.SubmitBankDetails(BenSno, BankDistrict, BankLoca, bnk, bankbranc, ifsccode, txtreason, BankPassBookFileName, BankAccNo, userid, ipadd);

        }
        public RequestResponse SubmitBenePersonalDetails(string benSno, string beneFirstName, string benLastName, string benMiddleName, DateTime beneDOB, string documentIDProof, string documentDOBProof, string iDProofExtension, string dOBProofExtension, string changeType, string userid, string ipadd)
        {
            return Rd.SubmitBenPersonalDetails(benSno, beneFirstName, benLastName, benMiddleName, beneDOB, documentIDProof, documentDOBProof, iDProofExtension, dOBProofExtension, changeType, userid, ipadd);

        }
        public RequestResponse SubmitBeneAddressDetails(string benSno, string perDIstID, string perSubDivID, string perBMC, string perBlock, string perPSID, string perPOID, string perPinCode, string perWard, string perVlg, string preDIstID, string preSubDivID, string preBMC, string preBlock, string prePSID, string prePOID, string prePinCode, string preWard, string preVlg, string createdBy, string proofExtension, string proofString, string userid, string ipadd)
        {
            return Rd.SubmitBenAddressDetails(benSno, perDIstID, perSubDivID, perBMC, perBlock, perPSID, perPOID, perPinCode, perWard, perVlg, preDIstID, preSubDivID, preBMC, preBlock, prePSID, prePOID, prePinCode, preWard, preVlg, createdBy, proofExtension, proofString, userid, ipadd);

        }
        public List<SpGetBeneAddressDetEditHistory_Result> GetBeneAddressDetEditHistory(string benSno)
        {
            return Rd.GetBeneAddressDetEditHistory(benSno);
        }
		#endregion

		#region
		public RequestResponse UpdateeDistTWData(string benSno, string regoistrationNumber, string employernature, string ruralUrban, string employerAddress, string regNoOftheInstitute, string natureoftheJob, string workSpaceDetailsAndAddress, string statusoftheWorker, string eligibilityCertificateFormString, string eligibilityCertificateFormExtension, string dependentPassbookString, string dependentPassbookExt, string drivingLicenseString, string drivingLicenseExt, string natureOfthevehicle, string natureofDuty, string certificateofIdentificationAttached, string feeSubmissionParticulars, string rateofSubscription, string renewalXML)
		{
			return Rd.UpdateeDistTWData(benSno, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, workSpaceDetailsAndAddress, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, dependentPassbookString, dependentPassbookExt, drivingLicenseString, drivingLicenseExt, natureOfthevehicle, natureofDuty, certificateofIdentificationAttached, feeSubmissionParticulars, rateofSubscription, renewalXML);

		}


		#endregion
		public SpGetEdistConstructionDetailsResult GetEdistConstructDetails(Int64 Userid, string EDRegId)
		{
			return Rd.GetEdistConstructDetails(Userid, EDRegId);
		}

		public SpGetEdistTransportDetailsResult GetEdistTransportDetails(Int64 Userid, string EDRegId)
		{
			return Rd.GetEdistTransportDetails(Userid, EDRegId);
		}

		public RequestResponse UpdateeDistCWData(string benSno, string regoistrationNumber, string employernature, string ruralUrban, string employerAddress, string regNoOftheInstitute, string natureoftheJob, DateTime employmentStartDate, DateTime employmentEndDate, string noOfWorkingDays, string workSpaceDetailsAndAddress, Nullable<decimal> rateofSubsricption, string statusoftheWorker, string eligibilityCertificateFormString, string eligibilityCertificateFormExtension, string statutoryAppform27String, string statutoryAppform27Ext, string copyofSchemeCertificateString, string copyofSchemeCertificateExt, string Particularsofdocument, string CertificateIdentification)
		{
			return Rd.UpdateeDistCWData(benSno, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, employmentStartDate, employmentEndDate, noOfWorkingDays, workSpaceDetailsAndAddress, rateofSubsricption, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, statutoryAppform27String, statutoryAppform27Ext, copyofSchemeCertificateString, copyofSchemeCertificateExt, Particularsofdocument, CertificateIdentification);

		}
		public SpGetEdistTransportAllDetailsResult GetEdistTransportDetailsAll(Int64 Userid, string EDRegId)
		{
			return Rd.GetEdistTransportDetailsAll(Userid, EDRegId);
		}


		public string UpdateRenewelDetailsByBene(string finalXml, string Userid)
		{
			return Rd.UpdateRenewelDetailsByBene(finalXml, Userid);
		}
		public string UpdateSubscriptDetls(string finalXml, string Userid)
		{
			return Rd.UpdateSubscriptDetls(finalXml, Userid);
		}
		public RequestResponse InsertConstructRenewalDtls(string ssinum, string regnum, string employerName, string regbookno, string recpno, DateTime RegDate, string recAmt, string imgdobproofdoc, string imgdobproofdocExt, string userId)
		{
			return Rd.InsertConstructRenewalDtls(ssinum, regnum, employerName, regbookno, recpno, RegDate, recAmt, imgdobproofdoc, imgdobproofdocExt, userId);
		}
		public SpEdistConstructionDetailsResult GetEdistConstructionDetails(Int64 Userid)
		{
			return Rd.GetEdistConstructionDetails(Userid);
		}

		public RequestResponse SubmitBenRenewelReqDetails(string benSno, string registrationNumber, string subscriptMonth, string subscriptYear, decimal amount, DateTime collectionDate, string receiptPageno, string receiptBOokno, string createdBy)
		{
			return Rd.SubmitBenRenewelReqDetails(benSno, registrationNumber, subscriptMonth, subscriptYear, amount, collectionDate, receiptPageno, receiptBOokno, createdBy);

		}

		#region
		public object GeteDistBeneDetailsforRegistration(string OldRegNewRegAIN, string regType)
		{
			return Rd.GeteDistBeneDetailsforRegistration(OldRegNewRegAIN, regType);
		}
		#endregion
		#region
		public object GeteDistBeneRegDetails(Int64 Userid)
		{
			return Rd.GeteDistBeneRegDetails(Userid);
		}
		#endregion

		#region
		public List<SPGeteDistBeneRenewalDetails_Result> GeteDistBeneRenewalDetails(Int64 userid)
		{
			return Rd.GeteDistBeneRenewalDetails(userid);
		}
		#endregion

		#region
		public EDistrictFilePathsResponse GeteDistBeneFilePaths(string aINNumber, string regNumber)
		{
			return Rd.GeteDistBeneFilePaths(aINNumber, regNumber);
		}
		#endregion

		#region death Claim

		#region test
		public string BenfDeathtest(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard)
		{
			return Rd.BenfDeathtest(finalXml, uid, usermobileno, Bensno, password, Aadharcard, EpicCard);
		}

		public string BenfDeathtestExt(string finalXml, Int64 uid, string usermobileno, Int64 Bensno, string password, string Aadharcard, string EpicCard,string registrationno)
		{
			return Rd.BenfDeathtestExt(finalXml, uid, usermobileno, Bensno, password, Aadharcard, EpicCard, registrationno);
		}
		#endregion

		#endregion


		#region PF balance details
		public SPGetPFBalanceExt_Result GetPFBalanceDetails(string PfNumber)
		{
			return Rd.GetPFBalanceDetails(PfNumber);
		}

        public bool CheckBankNumberExists(string bankAccNo)
        {
            return Rd.CheckBankNumberExists(bankAccNo);
        }
        public List<string> CheckBankNumbersExists(List<string> bankAccNos)
        {
            return Rd.CheckBankNumbersExists(bankAccNos);
        }
        #endregion

    }
}
