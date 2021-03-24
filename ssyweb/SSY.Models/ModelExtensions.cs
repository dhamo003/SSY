using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
namespace SSY.Models
{
    public class ModelExtensions
    {
    }
    #region
    public enum AccessModes
    {
        NoAccess = 'N', ReadAccess = 'R', FullAccess = 'F'
    }
    #endregion
    #region
    public partial class RegistartionForUser
    {
        public int TypeID { set; get; }
        public int ZoneID { set; get; }
        public int StateID { set; get; }
        public int DitributerID { set; get; }
        public string FirstName { set; get; }
        public string HusbandName { set; get; }
        public string Occupation { set; get; }
        public string LastName { set; get; }
        public string FatherName { set; get; }

        public string MotherName { get; set; }
        public string Mobilenumber { set; get; }
        public string Email { set; get; }
        public string Address { set; get; }
        public string PanCard { set; get; }
        public string Aadharcard { set; get; }
        public string epiccard { set; get; }
        public string Middlename { set; get; }
        public string dob { set; get; }
        public string age { set; get; }
        public string mobno { set; get; }
        public string lstname { set; get; }
        public string bplno { set; get; }
        public string state { set; get; }
        //public string ward { set; get; }
        public string pincode { set; get; }
        public string vlge1 { set; get; }
        public string state2 { set; get; }
        public string ps2 { set; get; }
        public string ward2 { set; get; }
        public string dstrct2 { set; get; }
        public string po2 { set; get; }
        public string pincode2 { set; get; }
        public string vlge2 { set; get; }
        public string esi { set; get; }
        public string authname { set; get; }
        public string esinum { set; get; }
        public string occu { set; get; }
        public string selfemp { set; get; }
        public string estbaddress { set; get; }
        public string email { set; get; }
        public string actnumber { get; set; }
        public string ifsccode { get; set; }
        public string mnthyincme { get; set; }
        public string indus { get; set; }
        public string emp { get; set; }
        public string regno { get; set; }
        public string cards { get; set; }
        public string authloc { set; get; }
        public int selfid { get; set; }
        public int unorgid { get; set; }
        public List<SelectListItem> self { get; set; }
        public List<SelectListItem> unorg { get; set; }
        public int maritalid { get; set; }
        public int relgid { get; set; }
        public int socatid { get; set; }
        public int disid { set; get; }
        public int issueauth { set; get; }
        public int subdivid { set; get; }
        public int muncorp { set; get; }
        public int ps { set; get; }
        public int po { set; get; }
        public int locnumber { set; get; }
        public int brnch { set; get; }
        public int bnk { set; get; }
        public int subdivid2 { set; get; }
        public int ward { set; get; }
        public List<SelectListItem> maritalstatus { get; set; }
        public List<SelectListItem> religion { get; set; }
        public List<SelectListItem> socategry { get; set; }
        public List<SelectListItem> district { get; set; }
        public List<SelectListItem> subdivision { get; set; }
        public List<SelectListItem> issueAuthName { get; set; }
        public List<SelectListItem> muncorpname { get; set; }
        public List<SelectListItem> psname { get; set; }
        public List<SelectListItem> locname { get; set; }
        public List<SelectListItem> bankname { get; set; }
        public List<SelectListItem> branchname { get; set; }
        public List<SelectListItem> poname { get; set; }
        public List<SelectListItem> wardname { get; set; }
        public string registrationno { get; set; }
        public string Regdate { get; set; }
        public string existfirstname { get; set; }
        public string existlstname { get; set; }
        public string existfathername { get; set; }
        public string existregno { get; set; }
        public string BankAccNo { get; set; }
        public string exisdob { get; set; }
        public string txtreason { get; set; }
        public string branchaddress { get; set; }
        public String BenifId { get; set; }

        public string BDob { get; set; }

        public List<SelectListItem> WorkType { get; set; }

        public string BenOccupationDesc { get; set; }

    }
    #endregion
    #region
    public partial class login
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    #endregion
    #region
    public partial class Registrationsave
    {
        public string BenSalutation { set; get; }
        public string BenFirstName { set; get; }
        public string BenLastName { set; get; }
        public string BenMiddleName { set; get; }
        public string BenDob { set; get; }
        public string BenGender { set; get; }
        public string BenMaritalStatus { set; get; }
        public string BenFatherFirstName { set; get; }
        public string BenFatherLastName { set; get; }
        public string BenFatherMiddleName { set; get; }
        public string BenIdCardType { set; get; }
        public string BenReligion { set; get; }
        public string BenSocialCategory { set; get; }
        public string BenBplStatus { set; get; }
        public string BenBplNo { set; get; }
        public string BenOccupation { set; get; }
        public string BenMobileNo { set; get; }
        public string BenProvisionType { set; get; }
        public string BenProvisionNo { set; get; }
        public string BenEmpType { set; get; }
        public string BenSelfEmployed { set; get; }
        public string BenEstablishedAddress { set; get; }
        public string BenMonthlyIncom { set; get; }
        public string BenBankName { set; get; }
        public string BenBankBranch { set; get; }
        public string BenBankAccNo { set; get; }
        public string BenBankIfscCode { set; get; }
        public string BenSsinCode { set; get; }
        public string BenUserId { set; get; }
        public string BenIssuingAuth { set; get; }
        public string BenIssuingAuthName { set; get; }
        public string BenPhoto { set; get; }
        public string BenSignature { set; get; }
        public string BenPassBook { set; get; }
        public string BenIdentity { set; get; }
    }
    #endregion
    #region
    public partial class SignUpUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MobileNumber { get; set; }
        public string Code { get; set; }
        public string Landline { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public int userid { get; set; }
        public string passwrd { get; set; }
        public int typeid { get; set; }
        public int disid { set; get; }
        public int subdivid { set; get; }
        public int MultiDisid { set; get; }
        public int MultiSubid { set; get; }
        public int MultiLocid { set; get; }
        public string Designation { set; get; }
        public string Name { set; get; }
        public string Location { set; get; }
        public string NewPassWord { set; get; }
        public string RoleName { get; set; }
        public string Privileges { get; set; }
        public List<SelectListItem> typename { get; set; }
        public List<SelectListItem> district { get; set; }
        public List<SelectListItem> subdivision { get; set; }
        public int muncorp { set; get; }
        public List<SelectListItem> muncorpname { get; set; }
        public string DistName { get; set; }
        public string SubdivName { get; set; }
        public string OTP { set; get; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }
        public string OldPassword { get; set; }
        public int ward { set; get; }
        public List<SelectListItem> wardname { get; set; }
    }
    #endregion
    #region
    public partial class Reports
    {
        public List<SelectListItem> district { get; set; }
        public List<SelectListItem> subdivision { get; set; }
        public List<SelectListItem> muncorpname { get; set; }
        public List<SelectListItem> Type { get; set; }
        public List<SelectListItem> Role { get; set; }
        public List<SelectListItem> Users { get; set; }
        public List<SelectListItem> rlo { get; set; }
        public List<SelectListItem> agent { get; set; }
        public int Typeid { get; set; }
        public int Roleid { get; set; }
        public int Userid { get; set; }
        public int disid { set; get; }
        public int subdivid { set; get; }
        public int muncorp { set; get; }
        public string txtoccu { set; get; }
        public string txtschem { set; get; }
        public string txtduration { set; get; }
        public string fromdate { set; get; }
        public string todate { set; get; }
        public string ssiNumber { set; get; }
        public string pfAccountNumber { set; get; }

        public int rloid { set; get; }
        public string ssinfrom { get; set; }
        public string ssinto { get; set; }
        public int agentid { get; set; }
        public int ps { set; get; }
        public int po { set; get; }
        public int ward { set; get; }

        public int relgid { get; set; }

        public List<SelectListItem> religion { get; set; }
        public List<SelectListItem> poname { get; set; }
        public List<SelectListItem> wardname { get; set; }
        public List<SelectListItem> psname { get; set; }
        public List<SelectListItem> financialYears { get; set; }
    }
    #endregion
    #region
    public partial class BenifSchemesDet
    {
        public string name { get; set; }
        public string description { get; set; }
        public string registration { get; set; }
        public string post { get; set; }
        public string DoJ { get; set; }
        public string DOE { get; set; }
        public string remark { get; set; }
    }
    #endregion
    #region
    public partial class BenDetails
    {
        public string Name { get; set; }
        public string MobileNumber { get; set; }
        public string BenSno { get; set; }
        public string Email { get; set; }
    }
    #endregion
    #region
    public partial class GetFilename
    {
        public string fileName { get; set; }
        public string filePath { get; set; }
    }
    #endregion
    #region
    public partial class GetGroupData
    {
        public string GNo { get; set; }
        public string GroupID { get; set; }
        public string NoofRecords { get; set; }
    }
    #endregion
    #region
    public partial class GroupDetails : SpGetGroupDuplicateDetails_Result
    {
        public string SNo { get; set; }
        public string Address { get; set; }
    }
    #endregion
    #region
    public partial class GetSubGroupDetails : SPGetSubGroupDetails_Result
    {
        public string SNo { get; set; }
        public string Address { get; set; }
    }
    #endregion
    #region
    public partial class Districtwise
    {
        public string CUdistname { get; set; }
        public string CUapprove { get; set; }
        public string CUsubmited { get; set; }
        public string CRejected { get; set; }
        public string Ydistname { get; set; }
        public string Yapprove { get; set; }
        public string Yrejected { get; set; }
        public string Ysubmited { get; set; }
    }
    #endregion
    #region
    public partial class DistrictWiseSummary
    {
        public string DistrictName { get; set; }
        public string TotalSSIN { get; set; }
        public string NReceived { get; set; }
        public string CReceived { get; set; }
        public string NApproved { get; set; }
        public string CApproved { get; set; }
        public string NPending { get; set; }
        public string CPending { get; set; }
    }
    #endregion
    #region
    public class ApplictnStatus
    {
        public string BenOccupation { get; set; }
        public int Approved { get; set; }
        public int Pending { get; set; }
        public int Rejected { get; set; }
        public int Total { get; set; }
        public int Sentback { get; set; }
        public string SchemeName { get; set; }
        public int PendingAtDLC { get; set; }
        public int SentBackFromDLC { get; set; }
        public int PendingAtBoard { get; set; }
        public int RejectedByBoard { get; set; }
        public int Released { get; set; }
        public int ApprovedByALC { get; set; }
        public int RejectedByALC { get; set; }
        public int PendingAtInspector { get; set; }
        public int PendingAtALC { get; set; }
        public int SentBackFromInspector { get; set; }
        public int SentBackFromALC { get; set; }
        public int ForcedClosedFromInspector { get; set; }
        public int ApprovedByDLC { get; set; }
        public int RejectedByDLC { get; set; }

        public int Submitted { get; set; }


    }
    #endregion
    #region
    public partial class BankDetails
    {
        public string bnkname { get; set; }
        public string bankcentr { get; set; }
        public string bnkbrnchname { get; set; }
        public string bnkbrnchifsccode { get; set; }
        public string bnkbrnchaddress { get; set; }
        public int distid { get; set; }
        public int bnkid { get; set; }
        public int centrid { get; set; }
        public List<SelectListItem> district { get; set; }
        public List<SelectListItem> bnk { get; set; }
        public List<SelectListItem> bankcenter { get; set; }
        public List<SelectListItem> bnkbrnch { get; set; }
    }
    #endregion

    #region
    public partial class RegistrationDet
    {

        public string BenTempId { get; set; }
        public string DDLDsalutation { set; get; }
        public string Firstnamedet { set; get; }
        public string Middlenamedet { set; get; }
        public string lastnamedet { set; get; }
        public string ddlfatherdet { set; get; }
        public string Fathernamedet { set; get; }
        public string Agedet { set; get; }
        public string Maritaldet { set; get; }
        public string ddlhusdet { set; get; }
        public string husbandnamedet { set; get; }
        public string emaildet { set; get; }
        public string religiondet { set; get; }
        public string socaldet { set; get; }
        public string bpldet { set; get; }
        public string mobnodet { set; get; }
        public string aadhardet { set; get; }
        public string epicdet { set; get; }
        public string bnkacctnodet { set; get; }
        public string statedet { set; get; }
        public string perdistdet { set; get; }
        public string persubdet { set; get; }
        public string perbmcdet { set; get; }
        public string perblockdet { set; get; }
        public string perpsdet { set; get; }
        public string perpodet { set; get; }
        public string perpincode1det { set; get; }
        public string ward1det { set; get; }
        public string vlg1det { set; get; }
        public string predistdet { set; get; }
        public string presubdet { set; get; }
        public string prebmcdet { set; get; }
        public string preblockdet { set; get; }
        public string prepsdet { set; get; }
        public string prepodet { set; get; }
        public string prepincode2det { set; get; }
        public string ward2det { set; get; }
        public string vlg2det { set; get; }

        public string bplstat { set; get; }

        public string provisnnumdet { set; get; }
        public string emptypedet { set; get; }

        public string selfemployeddet { set; get; }

        public string establshadet { set; get; }

        public string mnthincomedet { set; get; }

        public string bnkdistdet { set; get; }

        public string bnknamedet { set; get; }

        public string bnklocdet { set; get; }

        public string bnkbrnchdet { set; get; }

        public string bnkactnodet { set; get; }
        public string bnkifscdet { set; get; }
        public string bnkifscresndet { set; get; }
        public string pfstadet { set; get; }

        public string esinumdet { set; get; }
        public string occupdet { set; get; }

        public string BenDob { set; get; }

        public string BenGender { get; set; }

        public string registrationno { get; set; }

        public string Regdate { get; set; }


        public string bnkdist { set; get; }
        public string bank { set; get; }

        public string actnumberdet { set; get; }

        public string locdet { get; set; }

        public string brnchdet { get; set; }

        public string brnchaddrssdet { get; set; }


        public string ifscdet { get; set; }

        public string resondet { get; set; }

        // public string BenTempId { get; set; }


    }


    #endregion

    #region

    public class RequestResponse
    {

        public string Code { get; set; }

        public string Message { get; set; }
    }

    #endregion


    #region

    public class RegResponse
    {

        public string Code { get; set; }

        public string Message { get; set; }
        public string Alertheader { get; set; }

        public string SSINNo { get; set; }

        public string BenSno { get; set; }

        public string Name { get; set; }
    }

    #endregion

    #region
    public partial class SpGetApllicationSummery
    {
        public string Sno { get; set; }
        public long BenSno { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public int Status { get; set; }
        public int DiffDate { get; set; }
        public int BenDistrict { get; set; }
        public int BenSubDivision { get; set; }
        public int BenBmc { get; set; }
        public string SSI_Number { get; set; }
        public string BenTempRegNo { get; set; }
        public string UploadDocument { get; set; }
        public string Remarks { get; set; }
        public string VerifyDate { get; set; }
        public string RejectedDocumnet { get; set; }
        public string IsUnique { get; set; }
        public string CommentsByInspector { get; set; }
        public string RegNumber { get; set; }

        public string Regtype { get; set; }
        public int ReviveStatus { get; set; }
    }
    #endregion


    #region
    public partial class SpDetailedReport
    {
        public string Sno { get; set; }
        public string SSINNo { get; set; }
        public string SchemeNo { get; set; }
        public string RegDate { get; set; }
        public string Name { get; set; }
        public string fathername { get; set; }
        public string DOB { get; set; }
        public string Mobileno { get; set; }
        public string VerifyDate { get; set; }
        public Nullable<long> BenSno { get; set; }
        public string WorkerType { get; set; }
        public string Status { get; set; }
        public string PFStatus { get; set; }
        public string DistrictName { get; set; }
        public string SubDivisionName { get; set; }
        public string BlockName { get; set; }

        public string FormStatus { get; set; }

        public string PsName { get; set; }
        public string PoName { get; set; }
        public string GpWard { get; set; }
        public string Religion { get; set; }
        public string Village { get; set; }
        public string AadharCard { get; set; }
        public string EpicCard { get; set; }
        public string BenBankAccNo { get; set; }
        public string BenBankIfscCode { get; set; }
    }
    #endregion

    #region
    public partial class PfDetails
    {
        public string Balance { get; set; }
        public string Date { get; set; }

        public string Code { get; set; }

        public string Contribution { get; set; }

    }
    #endregion

    #region

    public partial class AgentDetails
    {
        public string Message { get; set; }
        public int UserId { get; set; }



    }

    #endregion







    #region
    public partial class SpLegacyDataReport
    {
        public string Sno { get; set; }
        public string SSINNo { get; set; }
        public string SchemeNo { get; set; }
        public string RegDate { get; set; }
        public string Name { get; set; }
        public string fathername { get; set; }
        public string DOB { get; set; }
        public string Mobileno { get; set; }
        public string VerifyDate { get; set; }
        public Nullable<long> BenSno { get; set; }
        public string WorkerType { get; set; }
        public string Status { get; set; }
        public string PFStatus { get; set; }
        public string DistrictName { get; set; }
        public string SubDivisionName { get; set; }
        public string BlockName { get; set; }
    }
    #endregion

    public partial class practise
    {
        public int Sno { get; set; }
        [Required]
        [StringLength(2)]
        public string Name { get; set; }

        public bool Gender { get; set; }
    }
    public partial class ClaimStatus
    {
        public string StatusName { get; set; }
        public int Count { get; set; }
    }

    //public partial class SpDashOverallClaimStatus_Result
    //{
    //    public string StatusName { get; set; }
    //    public Nullable<int> Count { get; set; }
    //}

    //public partial class SpDashFundStatus_Result
    //{
    //    public string BenOccupation { get; set; }
    //    public Nullable<int> Pending { get; set; }
    //    public Nullable<int> Approved { get; set; }
    //    public Nullable<int> Rejected { get; set; }
    //    public Nullable<int> SentBack { get; set; }
    //}

    //public partial class SpDashClaimStatus_Result
    //{
    //    public string BenOccupation { get; set; }
    //    public Nullable<int> Pending { get; set; }
    //    public Nullable<int> Approved { get; set; }
    //    public Nullable<int> Rejected { get; set; }
    //    public Nullable<int> SentBack { get; set; }
    //}

    //public partial class SpDashReferStatus_Result
    //{
    //    public string BenOccupation { get; set; }
    //    public Nullable<int> Pending { get; set; }
    //    public Nullable<int> Approved { get; set; }
    //    public Nullable<int> Rejected { get; set; }
    //    public Nullable<int> SentBack { get; set; }
    //}

    #region

    public class LoginResponse
    {

        public string Code { get; set; }

        public string Message { get; set; }

        public string UserId { get; set; }
        public string Session { get; set; }

        public string UserType { get; set; }
    }

    #endregion

    #region
    public class TransactionDetails
    {

        public string agent { get; set; }

        public string amount { get; set; }

        public string bookNo { get; set; }

        public string contriId { get; set; }

        public string createdBy { get; set; }


        public string createdDate { get; set; }

        public string currentBalance { get; set; }

        public string dateOfCollection { get; set; }

        public string description { get; set; }

        public string endDate { get; set; }

        public string forMonth { get; set; }

        public string forYear { get; set; }

        public string pfNo { get; set; }



        public string receptNo { get; set; }

        public string reference { get; set; }

        public string remarks { get; set; }

        public string startDate { get; set; }

        public string transactionDate { get; set; }

        //   public string remarks { get; set; }







    }
    #endregion
    [DataContract()]
    public class ResponseStatus
    {
        [DataMember(Name = "status", Order = 1)]
        public string ResCode { get; set; }

        [DataMember(Name = "message", Order = 2)]
        public string ResDesc { get; set; }
    }

    [DataContract(Name = "data")]
    public partial class SpGetEdistConstructionDetailsResult : ResponseStatus
    {
        [DataMember(Name = "Data", Order = 3)]
        public SpGetEdistConstructionDetails_Result Data { get; set; }
    }

    [DataContract(Name = "data")]
    public partial class SpGetEdistTransportDetailsResult : ResponseStatus
    {
        [DataMember(Name = "Data", Order = 3)]
        public SpGetEdistTransportDetails_Result Data { get; set; }
    }

    public partial class SpGetEdistTransportAllDetailsResult : ResponseStatus
    {
        [DataMember(Name = "Data", Order = 3)]
        public SpGeteDistrictTransportAllDetails_Result Data { get; set; }
    }
    [DataContract(Name = "data")]
    public partial class SpEdistConstructionDetailsResult : ResponseStatus
    {
        [DataMember(Name = "Data", Order = 3)]
        public SpGetConstructionEdistrictDetails_Result Data { get; set; }
    }

    public class EDistrictFilePathsResponse
    {
        public string AgeProof { get; set; }
        public string ElegibilityCertificate { get; set; }
        public string OtherDocument { get; set; }
        public string SelfPhotograph { get; set; }
        public string Signature { get; set; }
        public string StatuatoryApplicationForm { get; set; }
    }



    //Password Reset Model
    public class ResetPasswordViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public string ConfirmPassword { get; set; }

        public string Code { get; set; }

        public long UserId { get; set; } // Bensno / User Id

        public string UserType { get; set; } // Beneficary / Users

        public string Userkey { get; set; }

        public string UserPwd { get; set; }
    }


}
