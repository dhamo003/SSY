
using Newtonsoft.Json;
using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Serialization;

using System.Drawing;
using Spire.Pdf;
using Spire.Pdf.Graphics;
using RabbitMQ.Client;
using SSY.Models.RabbitMQ;

namespace SSY.Controllers
{
    public class RegistrationController : Controller
    {

        RegistartionForUser rg = new RegistartionForUser();
        HomeBussiness HB = new HomeBussiness();
        RegistrationBussiness Rb = new RegistrationBussiness();
        SSYEntities db = new SSYEntities();

        int CompressAbove = Convert.ToInt32(ConfigurationManager.AppSettings["CompreessAbove"].ToString());
        double CompressValue = Convert.ToDouble(ConfigurationManager.AppSettings["CompressValue"].ToString());
        string Compression = ConfigurationManager.AppSettings["Compression"].ToString();

        string SubscriptionKey = ConfigurationManager.AppSettings["TransKey"].ToString();
        private static readonly Uri ServiceUrl = new Uri("https://api.cognitive.microsoft.com/sts/v1.0/issueToken");
        private const string OcpApimSubscriptionKeyHeader = "Ocp-Apim-Subscription-Key";
        public HttpStatusCode RequestStatusCode { get; private set; }
        public ActionResult Index()
        {
            return View();
        }
        #region
        public ActionResult BeneRegistration()
        {
            return View();
        }
        #endregion

        #region new beneficiary  registration view
        //Author - Sunitha & Srikar

        public ActionResult Registration(string Status = "", string Id = "", string Type = "")
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {

                string userType = Convert.ToString(Session["UserType"]);

                reguser.registrationno = Convert.ToString(Session["exitreg"]);
                Session["RegistrationType"] = Status;
                Session["exitreg"] = "";
                ViewBag.Type = Type;

                //&& Id != ""  

                if (Status != "")
                {

                    ViewBag.CheckExisting = 1;
                    ViewBag.RegistrationType = Status;
                    ViewBag.BenTempid = Id;
                }
                else
                {
                    ViewBag.CheckExisting = 0;
                    ViewBag.RegistrationType = "";
                    Session["DeptUserid"] = null;
                    ViewBag.BenTempid = Id;
                }
                if (Session["DeptUserid"] != null)
                {
                    string Userid = Session["DeptUserid"].ToString();
                    ViewBag.Userid = Userid;
                }
                else
                {
                    ViewBag.Userid = "1";
                }
                Session["Status"] = Status;
                if (Id == "")
                {
                    reguser.self = HB.GetAllListofind(1);
                    reguser.unorg = HB.GetAllListofind(2);
                    reguser.maritalstatus = HB.Getmaritalstatus();
                    reguser.religion = HB.Getreligion();
                    reguser.socategry = HB.Getcategory();
                    reguser.district = HB.GetDistrict();
                    reguser.subdivision = HB.Getsubdivision(0);
                    reguser.wardname = HB.GetGP(-1);
                    reguser.psname = HB.GetPS(0);
                    reguser.muncorpname = HB.Getblock(0, 0);
                    reguser.bankname = HB.GetBank(0);
                    reguser.branchname = HB.GetBranch(0);
                    reguser.issueAuthName = HB.GetIssueauth();
                    reguser.poname = HB.GetPO(0);
                    reguser.locname = HB.GetLocation(0, 0);
                }
                else
                {
                    reguser.self = HB.GetAllListofind(1);
                    reguser.unorg = HB.GetAllListofind(2);
                    reguser.maritalstatus = HB.Getmaritalstatus();
                    reguser.religion = HB.Getreligion();
                    reguser.socategry = HB.Getcategory();
                    reguser.district = HB.GetDistrict();
                    reguser.subdivision = HB.Gettotalsubdivisions();
                    reguser.psname = HB.GetTotalPS();
                    reguser.muncorpname = HB.GetTotalblocks();
                    reguser.wardname = HB.GetTotalGP();
                    reguser.bankname = HB.GetTotalBank();
                    reguser.branchname = HB.GetTotalBranch();
                    reguser.issueAuthName = HB.GetIssueauth();
                    reguser.poname = HB.GetTotalPO();
                    reguser.locname = HB.GetTotalblocks();
                }
                ViewBag.Message = "";
                ViewBag.MessageCode = "999";
                return View(reguser);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("New Beneficiary Registration View Error due to : " + ex.Message, "Benificiary Temp ID : " + Convert.ToString(Id), Convert.ToString(ex.InnerException), "Registration", "RegistrationController");
                //CommonMethods.AddtoLogFile("Beni Registration" + DateTime.Now + "Error : " + Message);
                ViewBag.Message = Message;
                ViewBag.MessageCode = "999";
                return View(reguser);
            }
        }
        #endregion

        #region  Save new beneficiary  registration
        //Author - Sunitha & Srikar

        [HttpPost]
        public ActionResult Registration(IEnumerable<HttpPostedFileBase> files)
        {
            //RegResponse Res = new RegResponse();
            //if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            //{
            //    Res.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
            //    Res.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
            //    Res.Code = "555";
            //    return RedirectToAction("StorageIssue", "Registration");
            //}
            CommonMethods.AddtoLogFile("Benificiary Registration" + DateTime.Now);
            string pfstatus = Request.Form["CheckPfStatus"].ToString();
            string FName = Request.Form["FirstName"] == null ? "" : Request.Form["FirstName"].ToString();
            string MName = Request.Form["MiddleName"] == null ? "" : Request.Form["MiddleName"].ToString();
            string LName = Request.Form["lstname"] == null ? "" : Request.Form["lstname"].ToString();
            string Name = FName + ' ' + MName + ' ' + LName;
            var authToken = "c2e22b7cc93449d1af7f4116c3d31d7d";
            string bengname = Name;
            RegistartionForUser reguser = new RegistartionForUser();

            int CreatedBy = Convert.ToInt32(Request.Form["DepUserid"].ToString());

            if (CreatedBy != 1)
            {
                Session["DeptUserid"] = CreatedBy;

                ViewBag.RegistrationType = Convert.ToString(Session["RegistrationType"]);
            }
            else
            {
                ViewBag.RegistrationType = "";
            }
            // if (Session["DeptUserid"] != null)
            // {
            //   string Userid = Session["DeptUserid"].ToString();
            ViewBag.Userid = CreatedBy;
            //}
            // else
            // {
            //    ViewBag.Userid = "1";
            // }
            reguser.self = HB.GetAllListofind(1);
            reguser.unorg = HB.GetAllListofind(2);
            reguser.maritalstatus = HB.Getmaritalstatus();
            reguser.religion = HB.Getreligion();
            reguser.socategry = HB.Getcategory();
            reguser.district = HB.GetDistrict();
            reguser.subdivision = HB.Getsubdivision(0);
            reguser.wardname = HB.GetGP(0);
            reguser.psname = HB.GetPS(0);
            reguser.muncorpname = HB.Getblock(0, 0);
            reguser.bankname = HB.GetBank(0);
            reguser.branchname = HB.GetBranch(0);
            reguser.issueAuthName = HB.GetIssueauth();
            reguser.poname = HB.GetPO(0);
            reguser.locname = HB.GetLocation(0, 0);
            try
            {
                string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
                DateTime bdob = Convert.ToDateTime(BenfiDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string RegDate = Request.Form["Regdate"].ToString();
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');
                string TemSubdiv = BenAddwords[13].ToString();
                string TempLoc = BenAddwords[14].ToString();
                string res = string.Empty;
                string TempRegNo = string.Empty;
                string password = string.Empty;
                string Occupation = Request.Form["Occupation"].ToString();
                string Source = "";
                if (Occupation == "ConstructionWorker")
                    Source = "2";
                if (Occupation == "TransportWorker")
                    Source = "3";
                if (Occupation == "Others")
                    Source = "1";
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        var TempSSNINGen = Rb.TempGenarateSsinNo(TemSubdiv, TempLoc, Source);
                        TempRegNo = TempSSNINGen.ResponseMessage;
                        if (TempSSNINGen.ResponseCode != "000")
                        {
                            ViewBag.Message = TempSSNINGen.ResponseMessage;
                            ViewBag.MessageCode = "999";
                            return View(reguser);
                        }
                        if (TempSSNINGen.ResponseCode == "000")
                        {
                            if (TempRegNo == null || TempRegNo == "")
                            {
                                ViewBag.Message = "Invalid Temporary SSIN";
                                ViewBag.MessageCode = "999";
                                return View(reguser);
                            }
                        }
                        string FamCount = Request.Form["FamCount"].ToString();
                        int fccount = Convert.ToInt32(FamCount);
                        string DependentStatus = Request.Form["DependentStatus"].ToString();
                        int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
                        int checkcount = 0;
                        if (DependentStatus != "Yes")
                        {
                            DepUpLoadCount = 1;
                        }
                        if (DependentStatus == "Yes")
                        {
                            checkcount = DepUpLoadCount;
                        }
                        string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                        string NamCount = Request.Form["NamCount"].ToString();
                        int NaCount = Convert.ToInt32(NamCount);
                        string usermobileno = Request.Form["mobno"].ToString();
                        string PhotoFilname = "";
                        string SigFilname = "";
                        string IdentityFilname = "";
                        string OtherDocFilename = "";
                        string BankFileName = "";
                        string FormName = "";
                        string AadharFile = "";
                        string SchemeCertFile = "";
                        string fileName = string.Empty;
                        string destinationPath = string.Empty;
                        List<string> FilePath = new List<string>();
                        List<string> NamesSave = new List<string>();
                        string Fone = string.Empty;
                        string Ftwo = string.Empty;
                        string Fthree = string.Empty;
                        string FFour = string.Empty;
                        string FFive = string.Empty;
                        string FSix = string.Empty;
                        var supportedTypes = new[] { "jpg", "jpeg", "png" };
                        //Check File Count
                        if (Request.Files.Count > 0)
                        {
                            for (int i = 0; i < Request.Files.Count; i++)
                            {
                                var file = Request.Files[i];
                                string SavePath = "";
                                fileName = Path.GetFileName(Request.Files[i].FileName);

                                if (DepUpLoadCount > 0 && checkcount > 0)
                                {
                                    if (i == 3 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 4 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 5 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 6 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 7 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 8 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }

                                }
                                destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                                string bankfilename = destinationPath;
                                if (file != null && file.ContentLength > 0)
                                {
                                    var name = fileName;
                                    if (file.ContentLength < 2000000)
                                    {
                                        //var name = fileName;
                                        if (i == 0)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), TempRegNo + "_" + fileName);
                                            AadharFile = "/UploadFiles/Aadhar/" + TempRegNo + "_" + fileName;
                                        }
                                        if (i == 1)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), TempRegNo + "_" + fileName);
                                            IdentityFilname = "/UploadFiles/IdProofs/" + TempRegNo + "_" + fileName;
                                        }

                                        if (i == 2)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), TempRegNo + "_" + fileName);
                                            BankFileName = "/UploadFiles/BankPassBook/" + TempRegNo + "_" + fileName;
                                        }
                                        if (DepUpLoadCount > 0 && checkcount > 0)
                                        {
                                            if (i == 3)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                Fone = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 4)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                Ftwo = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 5)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                Fthree = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 6)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                FFour = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 7)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                FFive = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 8)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), TempRegNo + "_" + fileName);
                                                FSix = "/UploadFiles/DependentPassbook/" + TempRegNo + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                        }
                                        if (i == 3 + DepUpLoadCount)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), TempRegNo + "_" + fileName);
                                            FormName = "/UploadFiles/Form/" + TempRegNo + "_" + fileName;
                                        }
                                        if (i == 4 + DepUpLoadCount)
                                        {
                                            var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                            if (supportedTypes.Contains((fileExt).ToLower()))
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), TempRegNo + "_" + fileName);
                                                PhotoFilname = "/UploadFiles/Photos/" + TempRegNo + "_" + fileName;
                                            }
                                            else
                                            {
                                                ViewBag.Message = "Invalid Photo File Format";
                                                ViewBag.MessageCode = "999";
                                                return View(reguser);
                                            }
                                        }
                                        if (i == 5 + DepUpLoadCount)
                                        {
                                            var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                            if (supportedTypes.Contains((fileExt).ToLower()))
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), TempRegNo + "_" + fileName);
                                                SigFilname = "/UploadFiles/Signatures/" + TempRegNo + "_" + fileName;
                                            }
                                            else
                                            {
                                                ViewBag.Message = "Invalid Signature File Format";
                                                ViewBag.MessageCode = "999";
                                                return View(reguser);
                                            }
                                        }
                                        if (i == 6 + DepUpLoadCount)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), TempRegNo + "_" + fileName);
                                            SchemeCertFile = "/UploadFiles/SchemeCertificate/" + TempRegNo + "_" + fileName;
                                        }
                                        if (i == 7 + DepUpLoadCount)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), TempRegNo + "_" + fileName);
                                            OtherDocFilename = "/UploadFiles/OtherDoc/" + TempRegNo + "_" + fileName;
                                        }

                                        file.SaveAs(SavePath);
                                        FilePath.Add(SavePath);
                                        NamesSave.Add(name);
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid " + name + " File Length";
                                        ViewBag.MessageCode = "999";
                                        return View(reguser);
                                    }
                                }
                            }
                        }
                        string FatherName = Request.Form["FatherName"].ToString();
                        int District = Convert.ToInt32(BenAddwords[12]);
                        int SubDivision = Convert.ToInt32(BenAddwords[13]);
                        int BenBmc = Convert.ToInt32(BenAddwords[14]);
                        string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                        string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();
                        string BankAccNo = Request.Form["actnumber"] == null ? "" : Request.Form["actnumber"].ToString();
                        string HusbandName = Request.Form["HusbandName"] == null ? "" : Request.Form["HusbandName"].ToString();
                        /* var ResDeedoop = Rb.CheckDeedoop(Name, FatherName, bdob, District, SubDivision, BenBmc, usermobileno, Aadharcard, EpicCard, BankAccNo, TempRegNo, HusbandName);
                         string IsUnique = "Y";
                         int NoOfRecords = 0;
                         if (ResDeedoop.Count > 0)
                         {
                             IsUnique = "N";
                             NoOfRecords = ResDeedoop.Count;
                         }*/
                        //Form Xml
                        string bankbranc = Request.Form["brnch"].ToString();
                        //BenDetails
                        string docxml = "<BenDetails>";
                        docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                        docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
                        docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
                        docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
                        docxml += "<BenDob>" + bdob + "</BenDob>";
                        docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
                        docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
                        docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
                        docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
                        docxml += "<BentempregNo>" + TempRegNo + "</BentempregNo>";
                        docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
                        docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
                        docxml += "<BankAccNo>" + BankAccNo + "</BankAccNo>";
                        docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
                        docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
                        docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
                        docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
                        docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
                        docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
                        docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
                        docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
                        docxml += "<BenRegNo>" + Request.Form["registrationno"].ToString() + "</BenRegNo>";
                        docxml += "<BenRegDate>" + FinalRegDate + "</BenRegDate>";
                        docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
                        docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";

                        if (Request.Form["Occupation"].ToString() == "Others")
                        {
                            docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";

                            if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
                            {
                                ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
                                ViewBag.MessageCode = "999";
                                return View(reguser);
                            }

                        }
                        else
                        {
                            docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
                        }


                        docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
                        docxml += "<BenMonthlyIncom>" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom>";
                        docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
                        docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
                        docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
                        docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
                        docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
                        docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
                        docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
                        docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
                        docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
                        docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
                        docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
                        docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
                        docxml += "<BenForm>" + FormName + "</BenForm>";
                        docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
                        docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
                        docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";
                        docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
                        docxml += "<BengaliName>" + bengname + "</BengaliName>";
                        docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
                        docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
                        docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
                        docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
                        docxml += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                        docxml += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision>";
                        docxml += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                        docxml += "<RegistrationType>" + Request.Form["RegistrationType"].ToString() + "</RegistrationType>";
                        docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";


                        if (pfstatus == "0")
                        {
                            docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
                        }
                        else
                        {
                            docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
                        }


                        docxml += "<IsUnique>" + "P" + "</IsUnique>";
                        docxml += "<NoOfRecords>" + "" + "</NoOfRecords>";
                        docxml += "</BenDetails>";
                        string AddDoc = "<BenAddress>";
                        AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
                        AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
                        AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                        AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                        AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
                        AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                        AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                        AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                        AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                        AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
                        AddDoc += "<LocType>" + BenAddwords[20] + "</LocType></BenAddres>";
                        AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
                        AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
                        AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                        AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision>";
                        AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                        AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
                        AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
                        AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
                        AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
                        AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
                        AddDoc += "<LocType>" + BenAddwords[21] + "</LocType></BenAddres>";
                        AddDoc += "</BenAddress>";
                        string dependoc = "";
                        if (DependentStatus == "Yes")
                        {
                            string BenFamdet = Request.Form["BenFamdet"].ToString();
                            string[] BenFamdetwords = BenFamdet.Split('~');
                            dependoc = "<DependantDetails>";
                            for (int i = 0; i < fccount - 1; i++)
                            {
                                string famdet = BenFamdetwords[i];
                                string Filename = "";
                                if (i == 0)
                                {
                                    Filename = Fone;
                                }
                                if (i == 1)
                                {
                                    Filename = Ftwo;
                                }
                                if (i == 2)
                                {
                                    Filename = Fthree;
                                }
                                if (i == 3)
                                {
                                    Filename = FFour;
                                }
                                if (i == 4)
                                {
                                    Filename = FFive;
                                }
                                if (i == 5)
                                {
                                    Filename = FSix;
                                }
                                string upload = Filename;
                                string[] splitfamdet = famdet.Split('$');
                                string[] date = splitfamdet[4].Split('-');
                                DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                                string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");

                                dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                                dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                                dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                                dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                                dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                                dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                                dependoc += "<Dob>" + depdate + "</Dob>";
                                dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                            }
                            dependoc += "</DependantDetails>";
                        }
                        string Namdoc = "";
                        if (NomineeStatus == "Yes")
                        {
                            string Bennamedet = Request.Form["Bennamedet"].ToString();
                            string[] Bennamedetwords = Bennamedet.Split('~');
                            Namdoc = "<BenNomineeDtls>";
                            for (int i = 0; i < NaCount - 1; i++)
                            {
                                string namdet = Bennamedetwords[i];
                                string[] splitnamdet = namdet.Split('$');
                                string[] date = splitnamdet[4].Split('-');
                                DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                                string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                                Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                                Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                                Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                                Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                                Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                                Namdoc += "<BenNomineeBankName>" + splitnamdet[9] + "</BenNomineeBankName>";
                                Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                                Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                                Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                                Namdoc += "<Dob>" + depdate + "</Dob></BenNomineeDtl>";
                            }
                            Namdoc += "</BenNomineeDtls>";
                        }
                        string finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + "</Details>";
                        // int CreatedBy = Convert.ToInt32(Request.Form["DepUserid"].ToString());
                        // password = CommonMethods.CreatePassword();
                        password = "Password";
                        CommonMethods.AddtoLogFile("Benificiary Registration" + finalXml);
                        string Tempbensno = Request.Form["TempBensno"].ToString();
                        // res = Rb.BenfiReg(finalXml, CreatedBy, usermobileno, password, Tempbensno);
                        res = Rb.NewBenfiReg(finalXml, CreatedBy, usermobileno, password, Tempbensno);
                        transaction.Commit();
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                    }
                }
                //End Form Xml
                if (res == "Success")
                {
                    ViewBag.Message = "Application form submitted successfully,Temp Regno : " + TempRegNo;
                    ViewBag.MessageCode = "000";
                    string MobileNumber = Request.Form["mobno"].ToString();
                    string Email = Request.Form["email"].ToString();
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + ", Your Provisional Registration Number is: " + TempRegNo + " and Password:" + password;
                    CommonMethods.SendBillSms(MobileNumber, Message, 0, "Bene Registration", "Bene");
                    CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Login Credentials");
                    return View(reguser);
                }
                else
                {
                    ViewBag.Message = res;
                    ViewBag.MessageCode = "999";
                    CommonMethods.LogError("Save new beneficiary registration Error due to : " + ViewBag.Message, ":: Registration Number :: " + Convert.ToString(Request.Form["registrationno"]), ":: ViewBag.MessageCode ::" + Convert.ToString(ViewBag.MessageCode), "Registration", "RegistrationController");
                    return View(reguser);
                }
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                CommonMethods.LogError("Save new beneficiary registration Error due to : " + ex.Message, "Registration Number : " + Convert.ToString(Request.Form["registrationno"]), Convert.ToString(ex.InnerException), "Registration", "RegistrationController");
                //CommonMethods.AddtoLogFile("Beni Registration Submit" + DateTime.Now + "Error : " + Message);
                ViewBag.MessageCode = "999";
                return View(reguser);
            }
        }
        #endregion

        #region
        //Author - Srikar
        [HttpPost]
        public ActionResult Save(string Data, string family, string Namine, string BenAddress)
        {
            JavaScriptSerializer jss = new JavaScriptSerializer();
            Registrationsave _reg = jss.Deserialize<Registrationsave>(Data);
            return Content("Sucess");
        }
        #endregion

        #region getting subdivision data
        //Author - Sunitha

        public ActionResult GetSubdivisionJSON(int ID)
        {
            try
            {
                return Json(HB.Getsubdivision(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion


        #region Getting BankAddress Details
        //Author - Sunitha

        public ActionResult GetbranchAddrJSON(int ID)
        {
            try
            {
                return Json(HB.GetBranchAddrs(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region
        public ActionResult Edit()
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                string userid = Session["Userid"].ToString();
                var res = Rb.GetPresbenAddressDetails(Convert.ToInt32(userid));
                var res1 = Rb.GetEditBenDetails(Convert.ToInt32(userid));
                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();
                reguser.subdivision = HB.Getsubdivision(Convert.ToInt32(res.BenDistrict));
                reguser.psname = HB.GetPS(Convert.ToInt32(res.BenDistrict));
                reguser.muncorpname = HB.Getblock(Convert.ToInt32(res.BenSubDivision), 0);
                reguser.bankname = HB.GetBank(Convert.ToInt32(res1.Bankdistid));
                reguser.branchname = HB.GetBranch(Convert.ToInt32(res1.Location));
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetPO(Convert.ToInt32(res.BenDistrict));
                reguser.locname = HB.GetLocation(Convert.ToInt32(res1.BenBankName), Convert.ToInt32(res1.Bankdistid));
                ViewBag.Messeage = "";
                return View(reguser);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Messeage = Message;
                return View(reguser);
            }

        }
        #endregion



        #region
        //Author - Sunitha
        //For edit the mobile number and Email id
        [HttpPost]
        public ActionResult Edit(IEnumerable<HttpPostedFileBase> files)
        {
            RegistartionForUser reguser = new RegistartionForUser();
            string userid = Session["Userid"].ToString();
            var res = Rb.GetPresbenAddressDetails(Convert.ToInt32(userid));
            var res1 = Rb.GetEditBenDetails(Convert.ToInt32(userid));
            reguser.self = HB.GetAllListofind(1);
            reguser.unorg = HB.GetAllListofind(2);
            reguser.maritalstatus = HB.Getmaritalstatus();
            reguser.religion = HB.Getreligion();
            reguser.socategry = HB.Getcategory();
            reguser.district = HB.GetDistrict();
            reguser.subdivision = HB.Getsubdivision(Convert.ToInt32(res.BenDistrict));
            reguser.psname = HB.GetPS(Convert.ToInt32(res.BenDistrict));
            reguser.muncorpname = HB.Getblock(Convert.ToInt32(res.BenSubDivision), 0);
            reguser.bankname = HB.GetBank(Convert.ToInt32(res1.Bankdistid));
            reguser.branchname = HB.GetBranch(Convert.ToInt32(res1.Location));
            reguser.issueAuthName = HB.GetIssueauth();
            reguser.poname = HB.GetPO(Convert.ToInt32(res.BenDistrict));
            reguser.locname = HB.GetLocation(Convert.ToInt32(res1.BenBankName), Convert.ToInt32(res1.Bankdistid));
            try
            {
                string Email = Request.Form["lblmail"].ToString();
                string Mobilenum = Request.Form["txtmobno"].ToString();
                string Userid = Session["Userid"].ToString();
                var res2 = Rb.UpdateBenReg(Email, Mobilenum, Convert.ToInt64(Userid));
                if (res2 == "Success")
                {
                    ViewBag.Messeage = "User Details Successfully Updated..";
                    return View(reguser);
                }
                return View(reguser);
            }
            catch (Exception ex)
            {
                ViewBag.Messeage = ex.Message.ToString();
                return View(reguser);
            }
        }
        #endregion

        #region storage alert
        public ActionResult StorageIssue(RegResponse reg)
        {
            return View(reg);
        }
        #endregion

        #region Existing User update  view
        //Author - Sunitha

        public ActionResult ExistngUserEdit(string ID = "")
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                //   string userType = Convert.ToString(Session["UserType"]);

                //if (Session["DeptUserid"] != null)
                // {
                //   string Userid = Session["DeptUserid"].ToString();
                ViewBag.Userid = ID;
                // }
                //else
                // {
                //    ViewBag.Userid = "1";
                //}
                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();
                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetTotalBranch();
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetTotalblocks();
                reguser.WorkType = HB.GetWorkType("C");
                ViewBag.Message = "";
                ViewBag.Code = "000";
                ViewBag.RegistrationType = Convert.ToString(Session["RegistrationType"]);
                return View(reguser);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                //CommonMethods.AddtoLogFile("Caf Update" + DateTime.Now + "Error : " + Message);
                CommonMethods.LogError("Existing User (CAF) update view Error due to : " + ex.Message, "Benificiary ID : " + Convert.ToString(ID), Convert.ToString(ex.InnerException), "ExistngUserEdit", "RegistrationController");

                ViewBag.Message = Message;
                ViewBag.Code = "999";
                return View(reguser);
            }

        }
        #endregion
        #region Validate Bank Details Check
        [HttpGet]
        public ActionResult ValidatebankNumber(string BankNumber)
        {
            // Add bank details unique validations
            if (Rb.CheckBankNumberExists(BankNumber))
            {
                return Json("Bank Account Number Already Exists !. Given Account Number = " + BankNumber, JsonRequestBehavior.AllowGet);
            }

            return Json("", JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public ActionResult ValidateNomineebankNumber(string BankNumbers)
        {
            var errormessage_nomi_banacc = Rb.CheckBankNumbersExists(BankNumbers.Split(new char[',']).ToList());
            if (errormessage_nomi_banacc.Count > 0)
            {
                StringBuilder err_accno_Dup = new StringBuilder();
                err_accno_Dup.AppendLine("Nominee Bank Account Numbers Already Exists !. Duplicate Account Numbers");
                errormessage_nomi_banacc.ForEach((err) =>
                {
                    err_accno_Dup.AppendLine(err);
                });
                return Json(err_accno_Dup.ToString(), JsonRequestBehavior.AllowGet);
            }
            return Json("", JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region updating the existing user details
        //Author - Sunitha

        [HttpPost]
        public ActionResult ExistngUserEdit(IEnumerable<HttpPostedFileBase> files)
        {

            RegResponse Res = new RegResponse();
            //if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1" )
            //{
            //    Res.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
            //    Res.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
            //    Res.Code = "555";
            //    return RedirectToAction("StorageIssue", "Registration");
            //}
            string finalXml = string.Empty;
            Int64 CreatedBy;
            string usermobileno = string.Empty;
            string Bensno;
            RegistartionForUser reguser = new RegistartionForUser();
            //  if (Session["DeptUserid"] != null)
            //{
            //  string Userid = Session["DeptUserid"].ToString();
            //   ViewBag.Userid = Userid;
            // }
            //else
            //{
            ViewBag.Userid = Request.Form["DepUserid"].ToString();
            ViewBag.RegistrationType = Request.Form["RegType"].ToString();

            Session["RegistrationType"] = Request.Form["RegType"].ToString();
            string BenificiaryId = "";

            // }
            reguser.self = HB.GetAllListofind(1);
            reguser.unorg = HB.GetAllListofind(2);
            reguser.maritalstatus = HB.Getmaritalstatus();
            reguser.religion = HB.Getreligion();
            reguser.socategry = HB.Getcategory();
            reguser.district = HB.GetDistrict();
            reguser.wardname = HB.GetGP(0);
            reguser.subdivision = HB.Getsubdivision(0);
            reguser.psname = HB.GetPS(0);
            reguser.muncorpname = HB.Getblock(0, 0);
            reguser.bankname = HB.GetBank(0);
            reguser.branchname = HB.GetBranch(0);
            reguser.issueAuthName = HB.GetIssueauth();
            reguser.poname = HB.GetPO(0);
            reguser.locname = HB.GetLocation(0, 0);
            reguser.WorkType = HB.GetWorkType("C");
            try
            {
                //Geting file saving path from config
                // string FolderPath = ConfigurationManager.AppSettings["FolderPath"].ToString();

                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string RegDate = Request.Form["Regdate"].ToString();
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));

                string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
                DateTime bdob = Convert.ToDateTime(BenfiDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string FamCount = Request.Form["FamCount"].ToString();
                int fccount = Convert.ToInt32(FamCount);
                string pfstatus = Request.Form["CheckPfStatus"].ToString();
                string DependentStatus = Request.Form["DependentStatus"].ToString();
                int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
                int checkcount = 0;
                if (DependentStatus != "Yes")
                {
                    DepUpLoadCount = 0;
                }
                if (DependentStatus == "Yes")
                {
                    checkcount = DepUpLoadCount;
                }
                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');
                string NamCount = Request.Form["NamCount"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                usermobileno = Request.Form["mobno"].ToString();
                string PhotoFilname = "";
                string SigFilname = "";
                string IdentityFilname = "";
                string BankFileName = "";
                string FormName = "";
                string AadharFile = "";
                string OtherDocFilename = "";
                string SchemeCertFile = "";
                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                Bensno = Request.Form["Bensno"].ToString();
                BenificiaryId = Request.Form["Bensno"].ToString();
                var supportedTypes = new[] { "jpg", "jpeg", "png" };
                if (Request.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);
                        if (DepUpLoadCount > 0 && checkcount > 0)
                        {
                            if (i == 3 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 4 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 5 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 6 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 7 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 8 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }

                        }
                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {

                            var name = fileName;
                            if (file.ContentLength < 2000000)
                            {
                                //var name = fileName;
                                if (i == 0)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + Tdate + "_" + fileName);
                                    AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 1)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + Tdate + "_" + fileName);
                                    IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (i == 2)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + Tdate + "_" + fileName);
                                    BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (DepUpLoadCount > 0 && checkcount > 0)
                                {
                                    if (i == 3)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 4)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 5)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 6)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 7)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 8)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                }
                                if (i == 3 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + Tdate + "_" + fileName);
                                    FormName = "/UploadFiles/Form/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 4 + DepUpLoadCount)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + Tdate + "_" + fileName);
                                        PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid Photo File Format";
                                        ViewBag.Code = "998";
                                        return View(reguser);
                                    }
                                }
                                if (i == 5 + DepUpLoadCount)
                                {

                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + Tdate + "_" + fileName);
                                        SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid Signature File Format";
                                        ViewBag.Code = "998";
                                        return View(reguser);
                                    }


                                }
                                if (i == 6 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + Tdate + "_" + fileName);
                                    SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 7 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + Tdate + "_" + fileName);
                                    OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                //Compress File
                                //Compress File
                                var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


                                //Checking file length and compress morethan 25 kb
                                if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
                                {
                                    //Cpmpress Files other than pdf
                                    if (supportedTypes.Contains((fileExtbased).ToLower()))
                                    {
                                        string filename = Path.GetFileName(Request.Files[i].FileName);
                                        string targetPath = (SavePath);
                                        Stream strm = Request.Files[i].InputStream;
                                        var targetFile = targetPath;
                                        //Based on scalefactor image size will vary
                                        CompressImage(CompressValue, strm, targetFile);
                                    }

                                    //Cpmpress Files  pdf

                                    else
                                    {
                                        //  System.IO.File.Delete(SavePath);
                                        if (SavePath != "" && SavePath != null)
                                        {
                                            file.SaveAs(SavePath);
                                            FilePath.Add(SavePath);
                                            NamesSave.Add(name);
                                            //  CompressPdf(SavePath);
                                        }

                                    }
                                }

                                else
                                {
                                    if (SavePath != "" && SavePath != null)
                                    {
                                        //  System.IO.File.Delete(SavePath);
                                        file.SaveAs(SavePath);
                                        FilePath.Add(SavePath);
                                        NamesSave.Add(name);
                                    }
                                }
                            }
                            else
                            {
                                ViewBag.Message = "Invalid " + name + " File Length";
                                ViewBag.Code = "998";
                                return View(reguser);
                            }
                        }
                    }

                }

                string Occupation = Request.Form["Workertype"].ToString();
                string Source = "";

                if (Occupation == "ConstructionWorker")
                    Source = "2";
                if (Occupation == "TransportWorker")
                    Source = "3";
                if (Occupation == "Others")
                    Source = "1";



                string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();

                string bankbranc = Request.Form["brnch"].ToString();
                string docxml = "<BenDetails>";
                docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                docxml += "<BenRegDate>" + FinalRegDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenRegDate>";
                docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
                docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
                docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
                docxml += "<BenDob>" + bdob.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenDob>";
                docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
                docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
                docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
                docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
                docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
                docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
                docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
                docxml += "<BankAccNo>" + Request.Form["actnumber"].ToString() + "</BankAccNo>";
                docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
                docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
                docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
                docxml += "<BenBplStatus>" + Convert.ToString(Request.Form["bplstatus"]) + "</BenBplStatus>";
                docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
                docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
                docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
                docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
                docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
                docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";
                docxml += "<Source>" + Source + "</Source>";



                if (Request.Form["Workertype"].ToString() == "Others")
                {
                    docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";

                    if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
                    {
                        ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
                        ViewBag.Code = "998";
                        return View(reguser);
                    }

                }
                else
                {
                    docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
                    docxml += "<BenOccupationType>" + Request.Form["Worktype"].ToString() + "</BenOccupationType>";
                    if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
                    {
                        docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
                    }
                    else
                    {
                        docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
                    }
                }

                docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
                docxml += "<BenMonthlyIncom >" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom >";
                docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
                docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
                docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
                docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
                docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
                docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
                docxml += "<BenIssuingAuth>" + Convert.ToString(Request.Form["issueauth"]) + "</BenIssuingAuth>";
                docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
                docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
                docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
                docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
                docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
                docxml += "<BenForm>" + FormName + "</BenForm>";
                docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
                docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
                docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";

                string bankaccountnumber = Request.Form["actnumber"].ToString();
                // Add bank details unique validations
                //if (Rb.CheckBankNumberExists(bankaccountnumber))
                //{
                //    ViewBag.Message = "Bank Account Number Already Exists !. Given Account Number = " + bankaccountnumber;
                //    ViewBag.Code = "998";

                //    return View(reguser);
                //}


                if (pfstatus == "0")
                {
                    docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
                }
                else
                {
                    docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
                }
                //2,3,4,8
                docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
                docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
                docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
                docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
                docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
                docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
                docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";
                docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";

                docxml += "</BenDetails>";
                string AddDoc = "<BenAddress>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[20] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[22] + "</AddressIdentity></BenAddres>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[21] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[23] + "</AddressIdentity></BenAddres>";
                AddDoc += "</BenAddress>";
                string dependoc = "";
                if (DependentStatus == "Yes")
                {
                    string BenFamdet = Request.Form["BenFamdet"].ToString();
                    string[] BenFamdetwords = BenFamdet.Split('~');
                    dependoc = "<DependantDetails>";
                    for (int i = 0; i < fccount - 1; i++)
                    {
                        string famdet = BenFamdetwords[i];
                        string[] splitfamdet = famdet.Split('$');
                        string[] date = splitfamdet[4].Split('-');
                        string Filename = "";
                        if (i == 0)
                        {
                            Filename = Fone;
                        }
                        if (i == 1)
                        {
                            Filename = Ftwo;
                        }
                        if (i == 2)
                        {
                            Filename = Fthree;
                        }
                        if (i == 3)
                        {
                            Filename = FFour;
                        }
                        if (i == 4)
                        {
                            Filename = FFive;
                        }
                        if (i == 5)
                        {
                            Filename = FSix;
                        }
                        string upload = Filename;
                        DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                        dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                        dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                        dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                        dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                        dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                        dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";

                        string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        if (IsValidSqlDateTimeNative(depdate))
                            dependoc += "<Dob>" + depdate + "</Dob>";
                        if (splitfamdet[8]!=null)
                        dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";

                        dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                    }
                    dependoc += "</DependantDetails>";
                }
                string Namdoc = "";
                if (NomineeStatus == "Yes")
                {
                    string Bennamedet = Request.Form["Bennamedet"].ToString();
                    string[] Bennamedetwords = Bennamedet.Split('~');
                    List<string> nomineebankacc_nos = new List<string>();
                    Namdoc = "<BenNomineeDtls>";
                    for (int i = 0; i < NaCount - 1; i++)
                    {
                        string namdet = Bennamedetwords[i];
                        string[] splitnamdet = namdet.Split('$');
                        string[] date = splitnamdet[4].Split('-');
                        DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        
                        Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                        Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                        Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                        Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                        Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                        Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
                        Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                        Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                        Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                        Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";

                        string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        if (IsValidSqlDateTimeNative(depdate))
                            Namdoc += "<Dob>" + depdate + "</Dob>";
                        Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId></BenNomineeDtl>";
                        nomineebankacc_nos.Add(splitnamdet[8]);


                    }
                    Namdoc += "</BenNomineeDtls>";

                }
                finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + "</Details>";
                CreatedBy = Convert.ToInt64(Request.Form["DepUserid"].ToString());
                string password = "Password";
                string res = Rb.BenfExistngUser(finalXml, CreatedBy, usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard);

                //End Form Xml
                if (res == "Success")
                {
                    CommonMethods.RegistrationLog(finalXml + " - " + CreatedBy + " - " + Bensno, true, "ExistingUserEdit");
                    try
                    {
                        string fatherFName = string.Empty, fatherMName = string.Empty, fatherLName = string.Empty, husbandFName = string.Empty, husbandMName = string.Empty, husbandLName = string.Empty;
                        var Result = HB.GetBeniDetailsByBenSno(Convert.ToInt64(Bensno));
                        if (!string.IsNullOrEmpty(Result.BenFatherFirstName))
                        {
                            var fatherNM = Result.BenFatherFirstName.Split(' ');
                            if (Result.BenFatherFirstName.Contains(""))
                            {
                                fatherFName = (fatherNM.Length != 0) ? fatherNM[0] : string.Empty;
                                fatherMName = (fatherNM.Length != 1) ? fatherNM[1] : string.Empty;
                                fatherLName = (fatherNM.Length > 2) ? fatherNM[2] : string.Empty;
                            }

                        }
                        if (!string.IsNullOrEmpty(Result.HusbandName))
                        {
                            var husbandNM = Result.HusbandName.Split(' ');
                            if (Result.HusbandName.Contains(""))
                            {
                                husbandFName = (husbandNM.Length != 0) ? husbandNM[0] : string.Empty;
                                husbandMName = (husbandNM.Length != 1) ? husbandNM[1] : string.Empty;
                                husbandLName = (husbandNM.Length > 2) ? husbandNM[2] : string.Empty;
                            }

                        }

                        if (Result != null)
                        {
                            var depuben = new DeDupBenificiary()
                            {
                                AadharCard = Result.AadharCard,
                                BankAccNo = Result.BankAccNo,
                                BenBmc = Result.BenBmc,
                                BenDistrict = Result.BenDistrict,
                                BenDob = Result.BenDob,
                                BenFatherFirstName = Result.BenFatherFirstName,
                                BenMobileNo = Result.BenMobileNo,
                                BenSno = Result.BenSno,
                                BenSubDivision = Result.BenSubDivision,
                                EpicCard = Result.EpicCard,
                                FatherFName = fatherFName,
                                FatherMName = fatherMName,
                                FatherLName = fatherLName,
                                HusbandFName = husbandFName,
                                HusbandMName = husbandMName,
                                HusbandLName = husbandLName,
                                HusbandName = Result.HusbandName,
                                Name = Result.BenFirstName + Result.BenMiddleName + Result.BenLastName,
                                P2DOB = (string.IsNullOrEmpty(Convert.ToString(Result.BenDob)) ? 0 : 1),
                                P3Husband = (string.IsNullOrEmpty(Result.HusbandName) ? 0 : 1),
                                P4EpicCard = (string.IsNullOrEmpty(Result.EpicCard) ? 0 : 1),
                                RegType = "L",
                                //RegType = Result.BeneType,
                                SSI_Number = Result.SSI_Number
                            };

                            if (Convert.ToBoolean(ConfigurationManager.AppSettings["IsEnableRabbitMQ"]))
                            {
                                var factory = new ConnectionFactory() { HostName = ConfigurationManager.AppSettings["QDomain"], UserName = ConfigurationManager.AppSettings["QUserName"], Password = ConfigurationManager.AppSettings["QPassword"], VirtualHost = ConfigurationManager.AppSettings["QVhost"] };
                                using (var connection = factory.CreateConnection())
                                using (var channel = connection.CreateModel())
                                {
                                    channel.QueueDeclare(queue: ConfigurationManager.AppSettings["QueueName"],
                                                                 durable: false,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null);

                                    var data = JsonConvert.SerializeObject(depuben);
                                    var body = Encoding.UTF8.GetBytes(data);
                                    var properties = channel.CreateBasicProperties();
                                    properties.SetPersistent(false);
                                    byte[] messagebuffer = Encoding.Default.GetBytes(data);
                                    channel.BasicPublish("", ConfigurationManager.AppSettings["QueueName"], properties, messagebuffer);
                                    //channel.QueueDeclare(queue: ConfigurationManager.AppSettings["QueueName"],
                                    //                     durable: false,
                                    //                     exclusive: false,
                                    //                     autoDelete: false,
                                    //                     arguments: null);

                                    //var data = JsonConvert.SerializeObject(depuben);
                                    //var body = Encoding.UTF8.GetBytes(data);

                                    //channel.BasicPublish(exchange: "",
                                    //                     routingKey: ConfigurationManager.AppSettings["QueueName"],

                                    //                     basicProperties: null,
                                    //                     body: body);
                                }
                            }
                        }
                    }
                    catch (Exception ex)
                    {

                        CommonMethods.LogError("Queue Error " + ex.Message, "Bensno : " + Convert.ToString(Bensno), Convert.ToString(ex.InnerException), "RegistrationPart2", "RegistrationController");
                    }

                   // CommonMethods.LogError("Success Data ==  " + finalXml + "  == ", Convert.ToString(CreatedBy), res, "ExistngUserEdit", "RegistrationController");

                    ViewBag.Message = "User Successfully Updated..";
                    ViewBag.Code = "000";
                    string Email = Request.Form["email"].ToString();
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    string MobileNumber = Request.Form["mobno"].ToString();
                    // string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + "  and Password:" + password;
                    string Message = "Thank you for providing additional information for benefit under SSY. To check status, please log in at  SSY.wblabour.gov.in for details";

                    try
                    {

                    }
                    catch (Exception ex)
                    {
                        CommonMethods.SendBillSms(MobileNumber, Message, 0, "Existing Bene Reg", "Bene");
                        if (!string.IsNullOrEmpty(Email))
                            CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");

                    }
                    return View(reguser);
                }
                else
                {
                    //ViewBag.Message = res;
                    CommonMethods.RegistrationLog(finalXml + " -- " + CreatedBy + " -- " + Bensno, false, "ExistingUserEdit else ");
                    ViewBag.Message = "CAF update failed. Can you please contact SSY Support Team can help to resolve. Email Id : ssy.support@raminfo.com";

                    ViewBag.Code = "000";
                    return View(reguser);
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = "CAF update failed. Can you please contact SSY Support Team can help to resolve. Email Id : ssy.support@raminfo.com";// Message;
                ViewBag.Code = "999";
                CommonMethods.RegistrationLog(Convert.ToString(ex.InnerException), false, "ExistingUserEdit RegistrationController Main-Catch");
                CommonMethods.LogError("Updating the existing user details  Error due to : " + ex.Message, "Benificiary ID : " + Convert.ToString(BenificiaryId), Convert.ToString(ex.InnerException), "ExistngUserEdit", "RegistrationController");
                return View(reguser);
            }

        }
        #endregion

        //#region updating the existing user details new with pension module

        //[HttpPost]
        //public ActionResult ExistngUserEdit(IEnumerable<HttpPostedFileBase> files)
        //{
        //	RegistartionForUser reguser = new RegistartionForUser();
        //	//  if (Session["DeptUserid"] != null)
        //	//{
        //	//  string Userid = Session["DeptUserid"].ToString();
        //	//   ViewBag.Userid = Userid;
        //	// }
        //	//else
        //	//{
        //	ViewBag.Userid = Request.Form["DepUserid"].ToString();
        //	ViewBag.RegistrationType = Request.Form["RegType"].ToString();

        //	Session["RegistrationType"] = Request.Form["RegType"].ToString();
        //	string BenificiaryId = "";

        //	// }
        //	reguser.self = HB.GetAllListofind(1);
        //	reguser.unorg = HB.GetAllListofind(2);
        //	reguser.maritalstatus = HB.Getmaritalstatus();
        //	reguser.religion = HB.Getreligion();
        //	reguser.socategry = HB.Getcategory();
        //	reguser.district = HB.GetDistrict();
        //	reguser.wardname = HB.GetGP(0);
        //	reguser.subdivision = HB.Getsubdivision(0);
        //	reguser.psname = HB.GetPS(0);
        //	reguser.muncorpname = HB.Getblock(0, 0);
        //	reguser.bankname = HB.GetBank(0);
        //	reguser.branchname = HB.GetBranch(0);
        //	reguser.issueAuthName = HB.GetIssueauth();
        //	reguser.poname = HB.GetPO(0);
        //	reguser.locname = HB.GetLocation(0, 0);
        //	reguser.WorkType = HB.GetWorkType("C");
        //	try
        //	{
        //		//Geting file saving path from config
        //		// string FolderPath = ConfigurationManager.AppSettings["FolderPath"].ToString();

        //		string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

        //		string RegDate = Request.Form["Regdate"].ToString();
        //		string currentDate = RegDate;
        //		string[] dat = currentDate.Split('-');
        //		DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));

        //		string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
        //		DateTime bdob = Convert.ToDateTime(BenfiDob);
        //		string benficiarydob = Convert.ToString(bdob);
        //		benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
        //		string FamCount = Request.Form["FamCount"].ToString();
        //		int fccount = Convert.ToInt32(FamCount);
        //		string pfstatus = Request.Form["CheckPfStatus"].ToString();
        //		string DependentStatus = Request.Form["DependentStatus"].ToString();
        //		int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
        //		int checkcount = 0;
        //		if (DependentStatus != "Yes")
        //		{
        //			DepUpLoadCount = 0;
        //		}
        //		if (DependentStatus == "Yes")
        //		{
        //			checkcount = DepUpLoadCount;
        //		}
        //		string BenAddress = Request.Form["BenAddress"].ToString();
        //		string[] BenAddwords = BenAddress.Split('$');
        //		string NamCount = Request.Form["NamCount"].ToString();
        //		int NaCount = Convert.ToInt32(NamCount);
        //		string NomineeStatus = Request.Form["NomineeStatus"].ToString();
        //		string usermobileno = Request.Form["mobno"].ToString();


        //		string pensionAvailStatus = Request.Form["Pensionavailstatus"].ToString();
        //		string pensionRegdStatus = Request.Form["pensionregdstatus"].ToString();
        //		string PaymentTblCount = Request.Form["BenTranspRenwlRowCount"].ToString();
        //		int Payment = Convert.ToInt32(PaymentTblCount);

        //		string PhotoFilname = "";
        //		string SigFilname = "";
        //		string IdentityFilname = "";
        //		string BankFileName = "";
        //		string FormName = "";
        //		string AadharFile = "";
        //		string OtherDocFilename = "";
        //		string SchemeCertFile = "";
        //		string Fone = string.Empty;
        //		string Ftwo = string.Empty;
        //		string Fthree = string.Empty;
        //		string FFour = string.Empty;
        //		string FFive = string.Empty;
        //		string FSix = string.Empty;
        //		string fileName = string.Empty;
        //		string destinationPath = string.Empty;
        //		List<string> FilePath = new List<string>();
        //		List<string> NamesSave = new List<string>();
        //		string Bensno = Request.Form["Bensno"].ToString();
        //		BenificiaryId = Request.Form["Bensno"].ToString();
        //		var supportedTypes = new[] { "jpg", "jpeg", "png" };
        //		string EligibilityCertiDocString = string.Empty;
        //		string EligibilityCertiDocExt = string.Empty;
        //		string EligibilityCertiDocName = string.Empty;
        //		string DependantDocString = string.Empty;
        //		string DependantDocExt = string.Empty;
        //		string DependantDocName = string.Empty;
        //		string DrivingLicenseDocString = string.Empty;
        //		string DrivingLicenseDocExt = string.Empty;
        //		string DrivingLicenseDocName = string.Empty;
        //		string SchemeCertificateDocString = string.Empty;
        //		string SchemeCertificateDocExt = string.Empty;
        //		string SchemeCertificateDocName = string.Empty;
        //		string RenewalCertiDocString = string.Empty;
        //		string RenewalCertiDocExt = string.Empty;
        //		string RenewalCertiDocName = string.Empty;
        //		string StatuatoryAppFormDocName = string.Empty;
        //		string StatuatoryAppFormDocString = string.Empty;
        //		string StatuatoryAppFormDocExt = string.Empty;



        //		if (Request.Files.Count > 0)
        //		{
        //			for (int i = 0; i < Request.Files.Count; i++)
        //			{
        //				var file = Request.Files[i];
        //				string SavePath = "";
        //				fileName = Path.GetFileName(Request.Files[i].FileName);
        //				if (DepUpLoadCount > 0 && checkcount > 0)
        //				{
        //					if (i == 3 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 4 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 5 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 6 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 7 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 8 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}

        //				}
        //				destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
        //				string bankfilename = destinationPath;
        //				if (file != null && file.ContentLength > 0)
        //				{

        //					var name = fileName;
        //					if (file.ContentLength < 2000000)
        //					{
        //						//var name = fileName;
        //						if (i == 0)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + Tdate + "_" + fileName);
        //							AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 1)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + Tdate + "_" + fileName);
        //							IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						if (i == 2)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + Tdate + "_" + fileName);
        //							BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						if (DepUpLoadCount > 0 && checkcount > 0)
        //						{
        //							if (i == 3)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 4)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 5)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 6)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 7)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 8)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //						}
        //						if (i == 3 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + Tdate + "_" + fileName);
        //							FormName = "/UploadFiles/Form/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 4 + DepUpLoadCount)
        //						{
        //							var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
        //							if (supportedTypes.Contains((fileExt).ToLower()))
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + Tdate + "_" + fileName);
        //								PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + Tdate + "_" + fileName;
        //							}
        //							else
        //							{
        //								ViewBag.Message = "Invalid Photo File Format";
        //								ViewBag.Code = "998";
        //								return View(reguser);
        //							}
        //						}
        //						if (i == 5 + DepUpLoadCount)
        //						{

        //							var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
        //							if (supportedTypes.Contains((fileExt).ToLower()))
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + Tdate + "_" + fileName);
        //								SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + Tdate + "_" + fileName;
        //							}
        //							else
        //							{
        //								ViewBag.Message = "Invalid Signature File Format";
        //								ViewBag.Code = "998";
        //								return View(reguser);
        //							}


        //						}
        //						if (i == 6 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + Tdate + "_" + fileName);
        //							SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 7 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + Tdate + "_" + fileName);
        //							OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						else
        //						{
        //							if (Request.Files.AllKeys[i] == "EligibilityCertiDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/EligibilityCertificate/"), Bensno + "_" + fileName);
        //								EligibilityCertiDocName = "/UploadFiles/PensionModule/EligibilityCertificate/" + Bensno + "_" + Tdate + "_" + fileName;

        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								EligibilityCertiDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								EligibilityCertiDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "RenewalCertiDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/RenewalCertificate/"), Bensno + "_" + fileName);
        //								RenewalCertiDocName = "/UploadFiles/PensionModule/RenewalCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								RenewalCertiDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								RenewalCertiDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "SchemeCertificateDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/SchemeCertificate/"), Bensno + "_" + fileName);
        //								SchemeCertificateDocName = "/UploadFiles/PensionModule/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								SchemeCertificateDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								SchemeCertificateDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "DrivingLicenseDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/DrivingLicense/"), Bensno + "_" + fileName);
        //								DrivingLicenseDocName = "/UploadFiles/PensionModule/DrivingLicense/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								DrivingLicenseDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								DrivingLicenseDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "DependantDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/DependantPassbook/"), Bensno + "_" + fileName);
        //								DependantDocName = "/UploadFiles/PensionModule/DependantPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								DependantDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								DependantDocString = Convert.ToBase64String(thePictureAsBytes);

        //							}
        //							if (Request.Files.AllKeys[i] == "StatuatoryAppformDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/StatuatoryAppForm/"), Bensno + "_" + fileName);
        //								StatuatoryAppFormDocName = "/UploadFiles/PensionModule/StatuatoryAppForm/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								StatuatoryAppFormDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								StatuatoryAppFormDocString = Convert.ToBase64String(thePictureAsBytes);

        //							}

        //						}


        //						//Compress File
        //						//Compress File
        //						var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


        //						//Checking file length and compress morethan 25 kb
        //						if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
        //						{
        //							//Cpmpress Files other than pdf
        //							if (supportedTypes.Contains((fileExtbased).ToLower()))
        //							{
        //								string filename = Path.GetFileName(Request.Files[i].FileName);
        //								string targetPath = (SavePath);
        //								Stream strm = Request.Files[i].InputStream;
        //								var targetFile = targetPath;
        //								//Based on scalefactor image size will vary
        //								CompressImage(CompressValue, strm, targetFile);
        //							}

        //							//Cpmpress Files  pdf

        //							else
        //							{
        //								//  System.IO.File.Delete(SavePath);
        //								file.SaveAs(SavePath);
        //								FilePath.Add(SavePath);
        //								NamesSave.Add(name);
        //								//  CompressPdf(SavePath);

        //							}
        //						}

        //						else
        //						{
        //							//  System.IO.File.Delete(SavePath);
        //							file.SaveAs(SavePath);
        //							FilePath.Add(SavePath);
        //							NamesSave.Add(name);
        //						}
        //					}
        //					else
        //					{
        //						ViewBag.Message = "Invalid " + name + " File Length";
        //						ViewBag.Code = "998";
        //						return View(reguser);
        //					}
        //				}
        //			}

        //		}

        //		string Occupation = Request.Form["Workertype"].ToString();
        //		string Source = "";

        //		if (Occupation == "ConstructionWorker")
        //			Source = "2";
        //		if (Occupation == "TransportWorker")
        //			Source = "3";
        //		if (Occupation == "Others")
        //			Source = "1";



        //		string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
        //		string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();

        //		string bankbranc = Request.Form["brnch"].ToString();
        //		string docxml = "<BenDetails>";
        //		docxml += "<BenSalutation>" + "" + "</BenSalutation>";
        //		docxml += "<BenRegDate>" + FinalRegDate + "</BenRegDate>";
        //		docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
        //		docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
        //		docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
        //		docxml += "<BenDob>" + bdob + "</BenDob>";
        //		docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
        //		docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
        //		docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
        //		docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
        //		docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
        //		docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
        //		docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
        //		docxml += "<BankAccNo>" + Request.Form["actnumber"].ToString() + "</BankAccNo>";
        //		docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
        //		docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
        //		docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
        //		docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
        //		docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
        //		docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
        //		docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
        //		docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
        //		docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
        //		docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";
        //		docxml += "<Source>" + Source + "</Source>";



        //		if (Request.Form["Workertype"].ToString() == "Others")
        //		{
        //			docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";

        //			if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
        //			{
        //				ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
        //				ViewBag.Code = "998";
        //				return View(reguser);
        //			}

        //		}
        //		else
        //		{
        //			docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
        //			docxml += "<BenOccupationType>" + Request.Form["Worktype"].ToString() + "</BenOccupationType>";
        //			if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
        //			{
        //				docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
        //			}
        //			else
        //			{
        //				docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
        //			}
        //		}

        //		docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
        //		docxml += "<BenMonthlyIncom >" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom >";
        //		docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
        //		docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
        //		docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
        //		docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
        //		docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
        //		docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
        //		docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
        //		docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
        //		docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
        //		docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
        //		docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
        //		docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
        //		docxml += "<BenForm>" + FormName + "</BenForm>";
        //		docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
        //		docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
        //		docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";
        //		if (pfstatus == "0")
        //		{
        //			docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
        //		}
        //		else
        //		{
        //			docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
        //		}
        //		//2,3,4,8
        //		docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
        //		docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
        //		docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
        //		docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
        //		docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
        //		docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
        //		docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
        //		docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
        //		docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";
        //		docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
        //		docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
        //		docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
        //		docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";

        //		if (pensionAvailStatus == "Yes")
        //		{
        //			if (pensionRegdStatus == "Yes")
        //			{
        //				docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
        //				docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

        //				docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
        //				docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
        //				docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
        //				docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
        //				docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
        //				docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

        //				docxml += "<PensionRegdNumber>" + Request.Form["txtRegNumber"].ToString() + "</PensionRegdNumber>";
        //				docxml += "<PensionPartiDocFee>" + Request.Form["partdocsubfee"].ToString() + "</PensionPartiDocFee>";
        //				docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
        //				docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
        //				docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
        //				docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
        //				docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

        //				docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
        //				docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
        //				docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
        //				docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
        //				docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
        //				docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
        //				docxml += "<StatuatoryAppFormString>" + StatuatoryAppFormDocString + "</StatuatoryAppFormString>";
        //				docxml += "<StatuatoryAppFormExt>" + StatuatoryAppFormDocExt + "</StatuatoryAppFormExt>";

        //				//docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
        //				//docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				//docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
        //				//docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				//docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
        //				//docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				//docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
        //				//docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				//docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
        //				//docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";


        //			}
        //			if (pensionRegdStatus == "No")
        //			{
        //				docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
        //				docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

        //				docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
        //				docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
        //				docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
        //				docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
        //				docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
        //				docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

        //				docxml += "<PensionRegdNumber>" + "NA" + "</PensionRegdNumber>";
        //				docxml += "<PensionPartiDocFee>" + "NA" + "</PensionPartiDocFee>";
        //				docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
        //				docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
        //				docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
        //				docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
        //				docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

        //				docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
        //				docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
        //				docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
        //				docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
        //				docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
        //				docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
        //				docxml += "<StatuatoryAppFormString>" + StatuatoryAppFormDocString + "</StatuatoryAppFormString>";
        //				docxml += "<StatuatoryAppFormExt>" + StatuatoryAppFormDocExt + "</StatuatoryAppFormExt>";
        //				//docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
        //				//docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				//docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
        //				//docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				//docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
        //				//docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				//docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
        //				//docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				//docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
        //				//docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

        //			}

        //		}

        //		docxml += "</BenDetails>";
        //		string AddDoc = "<BenAddress>";
        //		AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
        //		AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
        //		AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
        //		AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision >";
        //		AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
        //		AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
        //		AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
        //		AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
        //		AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
        //		AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
        //		AddDoc += "<LocType>" + BenAddwords[20] + "</LocType>";
        //		AddDoc += "<AddressIdentity>" + BenAddwords[22] + "</AddressIdentity></BenAddres>";
        //		AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
        //		AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
        //		AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
        //		AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision >";
        //		AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
        //		AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
        //		AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
        //		AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
        //		AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
        //		AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
        //		AddDoc += "<LocType>" + BenAddwords[21] + "</LocType>";
        //		AddDoc += "<AddressIdentity>" + BenAddwords[23] + "</AddressIdentity></BenAddres>";
        //		AddDoc += "</BenAddress>";
        //		string dependoc = "";
        //		if (DependentStatus == "Yes")
        //		{
        //			string BenFamdet = Request.Form["BenFamdet"].ToString();
        //			string[] BenFamdetwords = BenFamdet.Split('~');
        //			dependoc = "<DependantDetails>";
        //			for (int i = 0; i < fccount - 1; i++)
        //			{
        //				string famdet = BenFamdetwords[i];
        //				string[] splitfamdet = famdet.Split('$');
        //				string[] date = splitfamdet[4].Split('-');
        //				string Filename = "";
        //				if (i == 0)
        //				{
        //					Filename = Fone;
        //				}
        //				if (i == 1)
        //				{
        //					Filename = Ftwo;
        //				}
        //				if (i == 2)
        //				{
        //					Filename = Fthree;
        //				}
        //				if (i == 3)
        //				{
        //					Filename = FFour;
        //				}
        //				if (i == 4)
        //				{
        //					Filename = FFive;
        //				}
        //				if (i == 5)
        //				{
        //					Filename = FSix;
        //				}
        //				string upload = Filename;
        //				DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
        //				dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
        //				dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
        //				dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
        //				dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
        //				dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
        //				dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
        //				dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";
        //				dependoc += "<Dob>" + FamDobDate + "</Dob>";
        //				dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";

        //				dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
        //			}
        //			dependoc += "</DependantDetails>";
        //		}
        //		string Namdoc = "";
        //		if (NomineeStatus == "Yes")
        //		{
        //			string Bennamedet = Request.Form["Bennamedet"].ToString();
        //			string[] Bennamedetwords = Bennamedet.Split('~');
        //			Namdoc = "<BenNomineeDtls>";
        //			for (int i = 0; i < NaCount - 1; i++)
        //			{
        //				string namdet = Bennamedetwords[i];
        //				string[] splitnamdet = namdet.Split('$');
        //				string[] date = splitnamdet[4].Split('-');
        //				DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
        //				Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
        //				Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
        //				Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
        //				Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
        //				Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
        //				Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
        //				Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
        //				Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
        //				Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
        //				Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
        //				Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId>";
        //				Namdoc += "<Dob>" + NamDobDate + "</Dob></BenNomineeDtl>";
        //			}
        //			Namdoc += "</BenNomineeDtls>";
        //		}
        //		string Pensiondoc = "";
        //		if (pensionRegdStatus == "Yes")
        //		{
        //			string BenPensiondet = Request.Form["bencollectiondtls"].ToString();
        //			string[] BenPensiondetwords = BenPensiondet.Split('~');
        //			Pensiondoc = "<BenPaymentDtls>";
        //			for (int i = 0; i < Payment - 1; i++)
        //			{
        //				string paymentdet = BenPensiondetwords[i];
        //				string[] splitpaymentdet = paymentdet.Split('$');
        //				string[] date = splitpaymentdet[2].Split('-');
        //				DateTime payCollDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));


        //				string Colldate = string.Empty;
        //				Colldate = splitpaymentdet[2];
        //				CommonMethods.AddtoLogFile(Environment.NewLine + " Colldate : " + Colldate);
        //				//Colldate : 20-09-2019
        //				Colldate = Colldate.Replace("-", "/");
        //				string[] splitDob = Colldate.Split('/');
        //				CommonMethods.AddtoLogFile(Environment.NewLine + " splitDob[1] : " + splitDob[1] + " splitDob[0] : " + splitDob[0] + " splitDob[2] : " + splitDob[2]);
        //				Colldate = splitDob[1] + "/" + splitDob[0] + "/" + splitDob[2] + " 12:00:00 AM";

        //				//DateTime bDob = Convert.ToDateTime(splitDob[0] + '/' + splitDob[1] + '/' + splitDob[2]); //for internal
        //				//DateTime bDob = Convert.ToDateTime(splitDob[1] + '/' + splitDob[0] + '/' + splitDob[2]); //for server side
        //				//CommonMethods.AddtoLogFile(Environment.NewLine +  " bDob "+ bDob);
        //				//Colldate = Convert.ToString(bDob);
        //				//CommonMethods.AddtoLogFile(Environment.NewLine + " Colldate : " + Colldate);
        //				//Colldate = Colldate.Replace("12:00:00 AM", " ");
        //				//9/17/2019 12:00:00 AM
        //				Pensiondoc += "<BenPenpaymentDtl><BenPaymentYear>" + splitpaymentdet[0] + "</BenPaymentYear>";
        //				Pensiondoc += "<BenPaymentMonth>" + splitpaymentdet[1] + "</BenPaymentMonth>";
        //				Pensiondoc += "<BenPaymentCollDate>" + Colldate + "</BenPaymentCollDate>";
        //				Pensiondoc += "<BenPayAmount>" + splitpaymentdet[3] + "</BenPayAmount>";
        //				Pensiondoc += "<BenPayReceiptBookNo>" + splitpaymentdet[4] + "</BenPayReceiptBookNo>";
        //				Pensiondoc += "<BenPayReceiptPageNo>" + splitpaymentdet[5] + "</BenPayReceiptPageNo></BenPenpaymentDtl>";

        //			}
        //			Pensiondoc += "</BenPaymentDtls>";
        //		}

        //		string finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + Pensiondoc + "</Details>";
        //		Int64 CreatedBy = Convert.ToInt64(Request.Form["DepUserid"].ToString());
        //		string password = "Password";
        //		string res = Rb.BenfExistngUser(finalXml, CreatedBy, usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard);
        //		//End Form Xml
        //		if (res == "Success")
        //		{
        //			ViewBag.Message = "User Successfully Updated..";
        //			ViewBag.Code = "000";
        //			string Email = Request.Form["email"].ToString();
        //			string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
        //			string MobileNumber = Request.Form["mobno"].ToString();
        //			// string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + "  and Password:" + password;
        //			string Message = "Thank you for providing additional information for benefit under SSY. To check status, please log in at  SSY.wblabour.gov.in for details";

        //			CommonMethods.SendBillSms(MobileNumber, Message, 0, "Existing Bene Reg", "Bene");
        //			if (!string.IsNullOrEmpty(Email))
        //				CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");
        //			return View(reguser);
        //		}
        //		else
        //		{
        //			ViewBag.Message = res;
        //			ViewBag.Code = "000";
        //			return View(reguser);
        //		}
        //	}
        //	catch (Exception ex)
        //	{
        //		string Message = Helper.ReturnException(ex);
        //		ViewBag.Message = Message;
        //		ViewBag.Code = "999";
        //		CommonMethods.AddtoLogFile("Existing Registration : " + BenificiaryId + DateTime.Now + "Error : " + Message);
        //		ViewBag.Message = ex.Message.ToString();
        //		return View(reguser);
        //	}
        //}
        //#endregion

        #region Reapply benificiary application view
        public ActionResult UserReapply(string Bensno = "")
        {
            RegistartionForUser reguser = new RegistartionForUser();

            try
            {
                string UserId = "";
                string SenAppCby = "";
                string DeletedBy = "";
                if (Bensno == "")
                {
                    DeletedBy = Convert.ToString(Session["Userid"]);
                    UserId = Convert.ToString(Session["Userid"]);
                    SenAppCby = "Self";
                    if (string.IsNullOrEmpty(UserId))
                        return RedirectToAction("Dashboard", "Home");
                }
                else
                {
                    DeletedBy = Convert.ToString(Session["DeptUserid"]);
                    string userType = Convert.ToString(Session["UserType"]);
                    SenAppCby = "Agent";
                    UserId = Bensno;
                    if (string.IsNullOrEmpty(userType))
                        return RedirectToAction("Dashboard", "Home");
                }
                ViewBag.DeletedBy = DeletedBy;
                ViewBag.Userid = UserId;
                var BeniDet = HB.GetBeniDetails(Convert.ToInt64(UserId));

                if (BeniDet.SSI_Number == null)
                {
                    Session["SSIN"] = BeniDet.BenTempRegNo;

                }
                else
                {
                    Session["SSIN"] = BeniDet.SSI_Number;

                }
                Session["BenOccupation"] = BeniDet.BenOccupation;


                Session["SenAppCby"] = SenAppCby;
                ViewBag.SenAppCby = SenAppCby;
                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();
                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(BeniDet.BankLoc));
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetLocation(Convert.ToInt32(BeniDet.BenBankName), Convert.ToInt32(BeniDet.BankDist));
                reguser.WorkType = HB.GetWorkType("C");
                ViewBag.Message = "";
                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Reapply benificiary application view Error due to : " + ex.Message, "Bensno : " + Convert.ToString(Bensno), Convert.ToString(ex.InnerException), "UserReapply", "RegistrationController");
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                return View(reguser);
            }

        }
        #endregion


        #region submit  Reapply benificiary application
        [HttpPost]
        public ActionResult UserReapply(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Res = new RegResponse();
            //if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            //{
            //    Res.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
            //    Res.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
            //    Res.Code = "555";
            //    return RedirectToAction("StorageIssue", "Registration");
            //}
            RegistartionForUser reguser = new RegistartionForUser();
            string SenAppCby = Convert.ToString(Session["SenAppCby"]);
            string BenificiaryId = "";
            string ModifeidBy = "";
            if (string.IsNullOrEmpty(SenAppCby))
                return RedirectToAction("Index", "Home");
            if (SenAppCby == "Self")
                ModifeidBy = Session["Userid"].ToString();
            else
                ModifeidBy = Session["DeptUserid"].ToString();
            reguser.self = HB.GetAllListofind(1);
            reguser.unorg = HB.GetAllListofind(2);
            reguser.maritalstatus = HB.Getmaritalstatus();
            reguser.religion = HB.Getreligion();
            reguser.socategry = HB.Getcategory();
            reguser.district = HB.GetDistrict();
            reguser.wardname = HB.GetGP(0);
            reguser.subdivision = HB.Getsubdivision(0);
            reguser.psname = HB.GetPS(0);
            reguser.muncorpname = HB.Getblock(0, 0);
            reguser.bankname = HB.GetBank(0);
            reguser.branchname = HB.GetBranch(0);
            reguser.issueAuthName = HB.GetIssueauth();
            reguser.poname = HB.GetPO(0);
            reguser.locname = HB.GetLocation(0, 0);
            reguser.WorkType = HB.GetWorkType("C");
            try
            {
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");
                string RegDate = Request.Form["Regdate"].ToString();
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));

                string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
                DateTime bdob = Convert.ToDateTime(BenfiDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string FamCount = Request.Form["FamCount"].ToString();
                int fccount = Convert.ToInt32(FamCount);
                string pfstatus = Request.Form["CheckPfStatus"].ToString();
                string DependentStatus = Request.Form["DependentStatus"].ToString();
                int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
                int checkcount = 0;
                if (DependentStatus != "Yes")
                {
                    DepUpLoadCount = 0;
                }
                if (DependentStatus == "Yes")
                {
                    checkcount = DepUpLoadCount;
                }
                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');
                string NamCount = Request.Form["NamCount"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                string usermobileno = Request.Form["mobno"].ToString();
                string Bensno = Request.Form["Bensno"].ToString();

                BenificiaryId = Request.Form["Bensno"].ToString();
                string PhotoFilname = "";
                string SigFilname = "";
                string IdentityFilname = "";
                string BankFileName = "";
                string FormName = "";
                string AadharFile = "";
                string OtherDocFilename = "";
                string SchemeCertFile = "";

                var Docs = Rb.GetBeniDocs(Bensno);

                PhotoFilname = Docs.BenPhoto;
                SigFilname = Docs.BenSignature;
                IdentityFilname = Docs.BenIdentity;
                BankFileName = Docs.BenPassBook;
                IdentityFilname = Docs.BenIdentity;
                FormName = Docs.BenForm;
                AadharFile = Docs.BenAadhar;
                OtherDocFilename = Docs.BenOtherDoc;
                SchemeCertFile = Docs.SchemeCertificate;


                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;



                var DependentDocs = Rb.GetFamilyDetails(Convert.ToInt64(Bensno));




                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();

                var supportedTypes = new[] { "jpg", "jpeg", "png" };
                if (Request.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);
                        if (DepUpLoadCount > 0 && checkcount > 0)
                        {
                            if (i == 3 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 4 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 5 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 6 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 7 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 8 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }

                        }
                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {
                            var name = fileName;
                            if (file.ContentLength < 2000000)
                            {
                                // var name = fileName;
                                if (i == 0)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + Tdate + "_" + fileName);
                                    AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 1)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + Tdate + "_" + fileName);
                                    IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (i == 2)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + Tdate + "_" + fileName);
                                    BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (DepUpLoadCount > 0 && checkcount > 0)
                                {
                                    if (i == 3)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 4)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 5)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 6)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 7)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 8)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                }
                                if (i == 3 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + Tdate + "_" + fileName);
                                    FormName = "/UploadFiles/Form/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 4 + DepUpLoadCount)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + Tdate + "_" + fileName);
                                        PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid File Format";
                                        return View(reguser);

                                    }
                                }
                                if (i == 5 + DepUpLoadCount)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + Tdate + "_" + fileName);
                                        SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid Signature File Format";

                                        return View(reguser);
                                    }

                                }
                                if (i == 6 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + Tdate + "_" + fileName);
                                    SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 7 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + Tdate + "_" + fileName);
                                    OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                //Compress File
                                var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


                                //Checking file length and compress morethan 25 kb
                                if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
                                {
                                    //Cpmpress Files other than pdf
                                    if (supportedTypes.Contains((fileExtbased).ToLower()))
                                    {
                                        string filename = Path.GetFileName(Request.Files[i].FileName);
                                        string targetPath = (SavePath);
                                        Stream strm = Request.Files[i].InputStream;
                                        var targetFile = targetPath;
                                        //Based on scalefactor image size will vary
                                        CompressImage(CompressValue, strm, targetFile);
                                    }

                                    //Cpmpress Files  pdf

                                    else
                                    {
                                        // System.IO.File.Delete(SavePath);
                                        if (SavePath != "" && SavePath != null)
                                        {
                                            file.SaveAs(SavePath);
                                            FilePath.Add(SavePath);
                                            NamesSave.Add(name);
                                            //CompressPdf(SavePath);
                                        }
                                    }
                                }

                                else
                                {
                                    if (SavePath != "" && SavePath != null)
                                    {
                                    file.SaveAs(SavePath);
                                    FilePath.Add(SavePath);
                                    NamesSave.Add(name);

                                    }
                                    //   System.IO.File.Delete(SavePath);
                                }
                            }
                            else
                            {
                                ViewBag.Message = "Invalid " + name + " File Length";
                                return View(reguser);
                            }
                        }
                    }
                }
                string Occupation = Request.Form["Workertype"].ToString();
                string Source = "";

                if (Occupation == "ConstructionWorker")
                    Source = "2";
                if (Occupation == "TransportWorker")
                    Source = "3";
                if (Occupation == "Others")
                    Source = "1";


                //2,3,4,8
                string bankbranc = Request.Form["brnch"].ToString();
                string FName = Request.Form["FirstName"] == null ? "" : Request.Form["FirstName"].ToString();
                string MName = Request.Form["MiddleName"] == null ? "" : Request.Form["MiddleName"].ToString();
                string LName = Request.Form["lstname"] == null ? "" : Request.Form["lstname"].ToString();
                string Name = FName + ' ' + MName + ' ' + LName;
                string BenTempregno = Request.Form["BenTempRegNo"].ToString();
                string FatherName = Request.Form["FatherName"].ToString();
                int District = Convert.ToInt32(BenAddwords[2]);
                int SubDivision = Convert.ToInt32(BenAddwords[3]);
                int BenBmc = Convert.ToInt32(BenAddwords[4]);
                string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();
                string BankAccNo = Request.Form["actnumber"] == null ? "" : Request.Form["actnumber"].ToString();
                string HusbandName = Request.Form["HusbandName"] == null ? "" : Request.Form["HusbandName"].ToString();
                /*  var ResDeedoop = Rb.CheckDeedoop(Name, FatherName, bdob, District, SubDivision, BenBmc, usermobileno, Aadharcard, EpicCard, BankAccNo, BenTempregno, HusbandName);
		                string IsUnique = "Y";
		                int NoOfRecords = 0;
		                if (ResDeedoop.Count > 0)
		                {
		                    IsUnique = "N";
		                    NoOfRecords = ResDeedoop.Count;
		                }*/
                //BenDetails
                string docxml = "<BenDetails>";
                docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
                docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
                docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
                docxml += "<BenDob>" + bdob.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenDob>";
                docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
                docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
                docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
                docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
                docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
                docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
                docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
                docxml += "<BankAccNo>" + BankAccNo + "</BankAccNo>";
                docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
                docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
                docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
                docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
                docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
                docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
                docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
                docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
                docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
                docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";
                docxml += "<Source>" + Source + "</Source>";


                if (Request.Form["Workertype"].ToString() == "Others")
                {
                    docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";


                    if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
                    {
                        ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
                        ViewBag.MessageCode = "999";
                        return View(reguser);
                    }

                }
                else
                {
                    docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
                    docxml += "<BenOccupationType>" + Request.Form["WorkType"].ToString() + "</BenOccupationType>";
                    if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
                    {
                        docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
                    }
                    else
                    {
                        docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
                    }
                }

                docxml += "<BenRegDate>" + FinalRegDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenRegDate>";
                docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
                docxml += "<BenMonthlyIncom >" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom >";
                docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
                docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
                docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
                docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
                docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
                docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
                docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
                docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
                docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
                docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
                docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
                docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
                docxml += "<BenForm>" + FormName + "</BenForm>";
                docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
                docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
                docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";


                if (pfstatus == "0")
                {
                    docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
                }
                else
                {
                    docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
                }
                docxml += "<IsUnique>" + "P" + "</IsUnique>";
                docxml += "<NoOfRecords>" + "" + "</NoOfRecords>";
                docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
                docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
                docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
                docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
                docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
                docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
                docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";
                docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                docxml += "</BenDetails>";
                string AddDoc = "<BenAddress>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[20] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[22] + "</AddressIdentity></BenAddres>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[21] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[23] + "</AddressIdentity></BenAddres>";
                AddDoc += "</BenAddress>";
                string dependoc = "";
                if (DependentStatus == "Yes")
                {
                    string BenFamdet = Request.Form["BenFamdet"].ToString();
                    string[] BenFamdetwords = BenFamdet.Split('~');
                    dependoc = "<DependantDetails>";
                    for (int i = 0; i < fccount - 1; i++)
                    {
                        string famdet = BenFamdetwords[i];
                        string[] splitfamdet = famdet.Split('$');
                        string[] date = splitfamdet[4].Split('-');
                        string Filename = "";
                        if (i == 0)
                        {
                            Filename = Fone;
                        }
                        if (i == 1)
                        {
                            Filename = Ftwo;
                        }
                        if (i == 2)
                        {
                            Filename = Fthree;
                        }
                        if (i == 3)
                        {
                            Filename = FFour;
                        }
                        if (i == 4)
                        {
                            Filename = FFive;
                        }
                        if (i == 5)
                        {
                            Filename = FSix;
                        }
                        string upload = Filename;
                        DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");

                        dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                        dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                        dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                        dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                        dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                        dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                        dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";
                        dependoc += "<Dob>" + depdate + "</Dob>";
                        if (splitfamdet[8] != null)
                            dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";
                        dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                    }
                    dependoc += "</DependantDetails>";
                }
                string Namdoc = "";
                List<string> nomineebankacc_nos = new List<string>();
                if (NomineeStatus == "Yes")
                {
                    string Bennamedet = Request.Form["Bennamedet"].ToString();
                    string[] Bennamedetwords = Bennamedet.Split('~');
                    Namdoc = "<BenNomineeDtls>";
                    for (int i = 0; i < NaCount - 1; i++)
                    {
                        string namdet = Bennamedetwords[i];
                        string[] splitnamdet = namdet.Split('$');
                        string[] date = splitnamdet[4].Split('-');
                        DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                        Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                        Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                        Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                        Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                        Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
                        Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                        Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                        Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                        Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";

                        Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId>";
                        string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        Namdoc += "<Dob>" + depdate + "</Dob></BenNomineeDtl>";

                        nomineebankacc_nos.Add(splitnamdet[8]);


                    }
                    Namdoc += "</BenNomineeDtls>";

                }
                string finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + "</Details>";
                string password = "Password";
                string res = Rb.BenfReapply(finalXml, Convert.ToInt32(ModifeidBy), usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard);

                //  string res = "Success";
                //End Form Xml
                if (res == "Success")
                {
                    ViewBag.Message = "User Successfully Updated..";
                    string Email = Request.Form["email"].ToString();
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    string MobileNumber = Request.Form["mobno"].ToString();
                    // string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + " , Your Provisional Registration Number is: " + BenTempregno + "   and Password:" + password;
                    string Message = "Thank you for providing additional information for benefit under SSY. To check status, please log in at  SSY.wblabour.gov.in for details";
                    CommonMethods.NewSms(MobileNumber, Message, 0, "Bene ReApply", "Bene", Convert.ToString(Bensno));
                    if (!string.IsNullOrEmpty(Email))
                        CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");
                    return View(reguser);
                }
                else
                {
                    CommonMethods.RegistrationLog(finalXml + "ModifeidBy - "+ Convert.ToInt32(ModifeidBy)+ "UserMobileno - " + usermobileno+ "Bensno - "+ Convert.ToInt64(Bensno)+ "Password - "+password + "Aadharcard - "+Aadharcard + "EpicCard - "+ EpicCard, false, "UserReapply Error Else res -"+ res);
                    ViewBag.Message = res;
                    return View(reguser);
                }
            }

            catch (Exception ex)
            {
                //string Message = Helper.ReturnException(ex);
                ViewBag.Message = "SentBack Application failed. Can you please contact ssy support team . Email : ssy.support@raminfo.com .";
                CommonMethods.RegistrationLog("UserReapply Error due to : " + ex.InnerException + "--Bensno--"+ Convert.ToString(BenificiaryId), false, "UserReapply catch 2 Main");
                CommonMethods.LogError("UserReapply Error due to : " + ex.Message, "Benificiary ID : " + Convert.ToString(BenificiaryId), Convert.ToString(ex.InnerException), "UserReapply", "RegistrationController");
             return View(reguser);
            }
        }
        #endregion


        //#region submit Reapply benificiary aplication new with pension module
        //[HttpPost]
        //public ActionResult UserReapply(IEnumerable<HttpPostedFileBase> files)
        //{
        //	RegistartionForUser reguser = new RegistartionForUser();
        //	string SenAppCby = Convert.ToString(Session["SenAppCby"]);
        //	string BenificiaryId = "";
        //	string ModifeidBy = "";
        //	if (string.IsNullOrEmpty(SenAppCby))
        //		return RedirectToAction("Index", "Home");
        //	if (SenAppCby == "Self")
        //		ModifeidBy = Session["Userid"].ToString();
        //	else
        //		ModifeidBy = Session["DeptUserid"].ToString();
        //	reguser.self = HB.GetAllListofind(1);
        //	reguser.unorg = HB.GetAllListofind(2);
        //	reguser.maritalstatus = HB.Getmaritalstatus();
        //	reguser.religion = HB.Getreligion();
        //	reguser.socategry = HB.Getcategory();
        //	reguser.district = HB.GetDistrict();
        //	reguser.wardname = HB.GetGP(0);
        //	reguser.subdivision = HB.Getsubdivision(0);
        //	reguser.psname = HB.GetPS(0);
        //	reguser.muncorpname = HB.Getblock(0, 0);
        //	reguser.bankname = HB.GetBank(0);
        //	reguser.branchname = HB.GetBranch(0);
        //	reguser.issueAuthName = HB.GetIssueauth();
        //	reguser.poname = HB.GetPO(0);
        //	reguser.locname = HB.GetLocation(0, 0);
        //	reguser.WorkType = HB.GetWorkType("C");
        //	try
        //	{
        //		string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");
        //		string RegDate = Request.Form["Regdate"].ToString();
        //		string currentDate = RegDate;
        //		string[] dat = currentDate.Split('-');
        //		DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));

        //		string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
        //		DateTime bdob = Convert.ToDateTime(BenfiDob);
        //		string benficiarydob = Convert.ToString(bdob);
        //		benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
        //		string FamCount = Request.Form["FamCount"].ToString();
        //		int fccount = Convert.ToInt32(FamCount);
        //		string pfstatus = Request.Form["CheckPfStatus"].ToString();
        //		string DependentStatus = Request.Form["DependentStatus"].ToString();
        //		int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
        //		int checkcount = 0;
        //		if (DependentStatus != "Yes")
        //		{
        //			DepUpLoadCount = 0;
        //		}
        //		if (DependentStatus == "Yes")
        //		{
        //			checkcount = DepUpLoadCount;
        //		}
        //		string BenAddress = Request.Form["BenAddress"].ToString();
        //		string[] BenAddwords = BenAddress.Split('$');
        //		string NamCount = Request.Form["NamCount"].ToString();
        //		int NaCount = Convert.ToInt32(NamCount);
        //		string NomineeStatus = Request.Form["NomineeStatus"].ToString();
        //		string usermobileno = Request.Form["mobno"].ToString();
        //		string Bensno = Request.Form["Bensno"].ToString();

        //		BenificiaryId = Request.Form["Bensno"].ToString();

        //		string pensionAvailStatus = Request.Form["Pensionavailstatus"].ToString();
        //		string pensionRegdStatus = Request.Form["pensionregdstatus"].ToString();
        //		string PaymentTblCount = Request.Form["BenTranspRenwlRowCount"].ToString();
        //		int Payment = Convert.ToInt32(PaymentTblCount);

        //		string PhotoFilname = "";
        //		string SigFilname = "";
        //		string IdentityFilname = "";
        //		string BankFileName = "";
        //		string FormName = "";
        //		string AadharFile = "";
        //		string OtherDocFilename = "";
        //		string SchemeCertFile = "";

        //		var Docs = Rb.GetBeniDocs(Bensno);

        //		PhotoFilname = Docs.BenPhoto;
        //		SigFilname = Docs.BenSignature;
        //		IdentityFilname = Docs.BenIdentity;
        //		BankFileName = Docs.BenPassBook;
        //		IdentityFilname = Docs.BenIdentity;
        //		FormName = Docs.BenForm;
        //		AadharFile = Docs.BenAadhar;
        //		OtherDocFilename = Docs.BenOtherDoc;
        //		SchemeCertFile = Docs.SchemeCertificate;


        //		string Fone = string.Empty;
        //		string Ftwo = string.Empty;
        //		string Fthree = string.Empty;
        //		string FFour = string.Empty;
        //		string FFive = string.Empty;
        //		string FSix = string.Empty;

        //		string EligibilityCertiDocString = string.Empty;
        //		string EligibilityCertiDocExt = string.Empty;
        //		string EligibilityCertiDocName = string.Empty;
        //		string DependantDocString = string.Empty;
        //		string DependantDocExt = string.Empty;
        //		string DependantDocName = string.Empty;
        //		string DrivingLicenseDocString = string.Empty;
        //		string DrivingLicenseDocExt = string.Empty;
        //		string DrivingLicenseDocName = string.Empty;
        //		string SchemeCertificateDocString = string.Empty;
        //		string SchemeCertificateDocExt = string.Empty;
        //		string SchemeCertificateDocName = string.Empty;
        //		string RenewalCertiDocString = string.Empty;
        //		string RenewalCertiDocExt = string.Empty;
        //		string RenewalCertiDocName = string.Empty;
        //		string StatuatoryAppFormDocString = string.Empty;
        //		string StatuatoryAppFormDocExt = string.Empty;
        //		string StatuatoryAppFormDocName = string.Empty;


        //		var DependentDocs = Rb.GetFamilyDetails(Convert.ToInt64(Bensno));




        //		string fileName = string.Empty;
        //		string destinationPath = string.Empty;
        //		List<string> FilePath = new List<string>();
        //		List<string> NamesSave = new List<string>();

        //		var supportedTypes = new[] { "jpg", "jpeg", "png" };
        //		if (Request.Files.Count > 0)
        //		{
        //			for (int i = 0; i < Request.Files.Count; i++)
        //			{
        //				var file = Request.Files[i];
        //				string SavePath = "";
        //				fileName = Path.GetFileName(Request.Files[i].FileName);
        //				if (DepUpLoadCount > 0 && checkcount > 0)
        //				{
        //					if (i == 3 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 4 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 5 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 6 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 7 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}
        //					if (i == 8 && fileName == "")
        //					{
        //						checkcount = checkcount - 1;
        //					}

        //				}
        //				destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
        //				string bankfilename = destinationPath;
        //				if (file != null && file.ContentLength > 0)
        //				{
        //					var name = fileName;
        //					if (file.ContentLength < 2000000)
        //					{
        //						// var name = fileName;
        //						if (i == 0)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + Tdate + "_" + fileName);
        //							AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 1)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + Tdate + "_" + fileName);
        //							IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						if (i == 2)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + Tdate + "_" + fileName);
        //							BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						if (DepUpLoadCount > 0 && checkcount > 0)
        //						{
        //							if (i == 3)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 4)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 5)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 6)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 7)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //							if (i == 8)
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
        //								FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								checkcount = checkcount - 1;
        //							}
        //						}
        //						if (i == 3 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + Tdate + "_" + fileName);
        //							FormName = "/UploadFiles/Form/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 4 + DepUpLoadCount)
        //						{
        //							var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
        //							if (supportedTypes.Contains((fileExt).ToLower()))
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + Tdate + "_" + fileName);
        //								PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + Tdate + "_" + fileName;
        //							}
        //							else
        //							{
        //								ViewBag.Message = "Invalid File Format";
        //								return View(reguser);

        //							}
        //						}
        //						if (i == 5 + DepUpLoadCount)
        //						{
        //							var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
        //							if (supportedTypes.Contains((fileExt).ToLower()))
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + Tdate + "_" + fileName);
        //								SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + Tdate + "_" + fileName;
        //							}
        //							else
        //							{
        //								ViewBag.Message = "Invalid Signature File Format";

        //								return View(reguser);
        //							}

        //						}
        //						if (i == 6 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + Tdate + "_" + fileName);
        //							SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}
        //						if (i == 7 + DepUpLoadCount)
        //						{
        //							SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + Tdate + "_" + fileName);
        //							OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + Tdate + "_" + fileName;
        //						}

        //						else
        //						{
        //							if (Request.Files.AllKeys[i] == "EligibilityCertiDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/EligibilityCertificate/"), Bensno + "_" + fileName);
        //								EligibilityCertiDocName = "/UploadFiles/PensionModule/EligibilityCertificate/" + Bensno + "_" + Tdate + "_" + fileName;

        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								EligibilityCertiDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								EligibilityCertiDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "RenewalCertiDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/RenewalCertificate/"), Bensno + "_" + fileName);
        //								RenewalCertiDocName = "/UploadFiles/PensionModule/RenewalCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								RenewalCertiDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								RenewalCertiDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "SchemeCertificateDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/SchemeCertificate/"), Bensno + "_" + fileName);
        //								SchemeCertificateDocName = "/UploadFiles/PensionModule/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								SchemeCertificateDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								SchemeCertificateDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "DrivingLicenseDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/DrivingLicense/"), Bensno + "_" + fileName);
        //								DrivingLicenseDocName = "/UploadFiles/PensionModule/DrivingLicense/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								DrivingLicenseDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								DrivingLicenseDocString = Convert.ToBase64String(thePictureAsBytes);
        //							}
        //							if (Request.Files.AllKeys[i] == "DependantDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/DependantPassbook/"), Bensno + "_" + fileName);
        //								DependantDocName = "/UploadFiles/PensionModule/DependantPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								DependantDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								DependantDocString = Convert.ToBase64String(thePictureAsBytes);

        //							}
        //							if (Request.Files.AllKeys[i] == "StatuatoryAppformDoc")
        //							{
        //								SavePath = Path.Combine(Server.MapPath("~/UploadFiles/PensionModule/StatuatoryAppForm/"), Bensno + "_" + fileName);
        //								StatuatoryAppFormDocName = "/UploadFiles/PensionModule/StatuatoryAppForm/" + Bensno + "_" + Tdate + "_" + fileName;
        //								string theFileName = Path.GetFileName(Request.Files[i].FileName);
        //								StatuatoryAppFormDocExt = Path.GetExtension(Request.Files[i].FileName);
        //								byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
        //								using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
        //								{
        //									thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
        //								}
        //								StatuatoryAppFormDocString = Convert.ToBase64String(thePictureAsBytes);

        //							}

        //						}


        //						//Compress File
        //						var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


        //						//Checking file length and compress morethan 25 kb
        //						if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
        //						{
        //							//Cpmpress Files other than pdf
        //							if (supportedTypes.Contains((fileExtbased).ToLower()))
        //							{
        //								string filename = Path.GetFileName(Request.Files[i].FileName);
        //								string targetPath = (SavePath);
        //								Stream strm = Request.Files[i].InputStream;
        //								var targetFile = targetPath;
        //								//Based on scalefactor image size will vary
        //								CompressImage(CompressValue, strm, targetFile);
        //							}

        //							//Cpmpress Files  pdf

        //							else
        //							{
        //								// System.IO.File.Delete(SavePath);
        //								file.SaveAs(SavePath);
        //								FilePath.Add(SavePath);
        //								NamesSave.Add(name);
        //								//CompressPdf(SavePath);

        //							}
        //						}

        //						else
        //						{
        //							//   System.IO.File.Delete(SavePath);
        //							file.SaveAs(SavePath);
        //							FilePath.Add(SavePath);
        //							NamesSave.Add(name);
        //						}
        //					}
        //					else
        //					{
        //						ViewBag.Message = "Invalid " + name + " File Length";
        //						return View(reguser);
        //					}
        //				}
        //			}
        //		}
        //		string Occupation = Request.Form["Workertype"].ToString();
        //		string Source = "";

        //		if (Occupation == "ConstructionWorker")
        //			Source = "2";
        //		if (Occupation == "TransportWorker")
        //			Source = "3";
        //		if (Occupation == "Others")
        //			Source = "1";


        //		//2,3,4,8
        //		string bankbranc = Request.Form["brnch"].ToString();
        //		string FName = Request.Form["FirstName"] == null ? "" : Request.Form["FirstName"].ToString();
        //		string MName = Request.Form["MiddleName"] == null ? "" : Request.Form["MiddleName"].ToString();
        //		string LName = Request.Form["lstname"] == null ? "" : Request.Form["lstname"].ToString();
        //		string Name = FName + ' ' + MName + ' ' + LName;
        //		string BenTempregno = Request.Form["BenTempRegNo"].ToString();
        //		string FatherName = Request.Form["FatherName"].ToString();
        //		int District = Convert.ToInt32(BenAddwords[2]);
        //		int SubDivision = Convert.ToInt32(BenAddwords[3]);
        //		int BenBmc = Convert.ToInt32(BenAddwords[4]);
        //		string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
        //		string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();
        //		string BankAccNo = Request.Form["actnumber"] == null ? "" : Request.Form["actnumber"].ToString();
        //		string HusbandName = Request.Form["HusbandName"] == null ? "" : Request.Form["HusbandName"].ToString();
        //		/*  var ResDeedoop = Rb.CheckDeedoop(Name, FatherName, bdob, District, SubDivision, BenBmc, usermobileno, Aadharcard, EpicCard, BankAccNo, BenTempregno, HusbandName);
        //                string IsUnique = "Y";
        //                int NoOfRecords = 0;
        //                if (ResDeedoop.Count > 0)
        //                {
        //                    IsUnique = "N";
        //                    NoOfRecords = ResDeedoop.Count;
        //                }*/
        //		//BenDetails
        //		string docxml = "<BenDetails>";
        //		docxml += "<BenSalutation>" + "" + "</BenSalutation>";
        //		docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
        //		docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
        //		docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
        //		docxml += "<BenDob>" + bdob + "</BenDob>";
        //		docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
        //		docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
        //		docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
        //		docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
        //		docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
        //		docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
        //		docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
        //		docxml += "<BankAccNo>" + BankAccNo + "</BankAccNo>";
        //		docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
        //		docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
        //		docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
        //		docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
        //		docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
        //		docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
        //		docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
        //		docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
        //		docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
        //		docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";
        //		docxml += "<Source>" + Source + "</Source>";


        //		if (Request.Form["Workertype"].ToString() == "Others")
        //		{
        //			docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";


        //			if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
        //			{
        //				ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
        //				ViewBag.MessageCode = "999";
        //				return View(reguser);
        //			}

        //		}
        //		else
        //		{
        //			docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
        //			docxml += "<BenOccupationType>" + Request.Form["WorkType"].ToString() + "</BenOccupationType>";
        //			if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
        //			{
        //				docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
        //			}
        //			else
        //			{
        //				docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
        //			}
        //		}

        //		docxml += "<BenRegDate>" + FinalRegDate + "</BenRegDate>";
        //		docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
        //		docxml += "<BenMonthlyIncom >" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom >";
        //		docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
        //		docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
        //		docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
        //		docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
        //		docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
        //		docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
        //		docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
        //		docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
        //		docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
        //		docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
        //		docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
        //		docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
        //		docxml += "<BenForm>" + FormName + "</BenForm>";
        //		docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
        //		docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
        //		docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";
        //		if (pfstatus == "0")
        //		{
        //			docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
        //		}
        //		else
        //		{
        //			docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
        //		}
        //		docxml += "<IsUnique>" + "P" + "</IsUnique>";
        //		docxml += "<NoOfRecords>" + "" + "</NoOfRecords>";
        //		docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
        //		docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
        //		docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
        //		docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
        //		docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
        //		docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
        //		docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
        //		docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
        //		docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";
        //		docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
        //		docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
        //		docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
        //		docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";

        //		if (pensionAvailStatus == "Yes")
        //		{
        //			if (pensionRegdStatus == "Yes")
        //			{
        //				docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
        //				docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

        //				docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
        //				docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
        //				docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
        //				docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
        //				docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
        //				docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

        //				docxml += "<PensionRegdNumber>" + Request.Form["txtRegNumber"].ToString() + "</PensionRegdNumber>";
        //				docxml += "<PensionPartiDocFee>" + Request.Form["partdocsubfee"].ToString() + "</PensionPartiDocFee>";
        //				docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
        //				docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
        //				docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
        //				docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
        //				docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

        //				//docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
        //				//docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				//docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
        //				//docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				//docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
        //				//docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				//docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
        //				//docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				//docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
        //				//docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

        //				docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
        //				docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
        //				docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
        //				docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
        //				docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
        //				docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
        //				docxml += "<StatuatoryAppFormString>" + StatuatoryAppFormDocString + "</StatuatoryAppFormString>";
        //				docxml += "<StatuatoryAppFormExt>" + StatuatoryAppFormDocExt + "</StatuatoryAppFormExt>";

        //			}
        //			if (pensionRegdStatus == "No")
        //			{
        //				docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
        //				docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

        //				docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
        //				docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
        //				docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
        //				docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
        //				docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
        //				docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

        //				docxml += "<PensionRegdNumber>" + "NA" + "</PensionRegdNumber>";
        //				docxml += "<PensionPartiDocFee>" + "NA" + "</PensionPartiDocFee>";
        //				docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
        //				docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
        //				docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
        //				docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
        //				docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

        //				//docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
        //				//docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				//docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
        //				//docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				//docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
        //				//docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				//docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
        //				//docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				//docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
        //				//docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
        //				docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
        //				docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
        //				docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
        //				docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
        //				docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
        //				docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
        //				docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
        //				docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
        //				docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
        //				docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
        //				docxml += "<StatuatoryAppFormString>" + StatuatoryAppFormDocString + "</StatuatoryAppFormString>";
        //				docxml += "<StatuatoryAppFormExt>" + StatuatoryAppFormDocExt + "</StatuatoryAppFormExt>";
        //			}

        //		}

        //		docxml += "</BenDetails>";



        //		string AddDoc = "<BenAddress>";
        //		AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
        //		AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
        //		AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
        //		AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision >";
        //		AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
        //		AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
        //		AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
        //		AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
        //		AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
        //		AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
        //		AddDoc += "<LocType>" + BenAddwords[20] + "</LocType>";
        //		AddDoc += "<AddressIdentity>" + BenAddwords[22] + "</AddressIdentity></BenAddres>";
        //		AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
        //		AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
        //		AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
        //		AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision >";
        //		AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
        //		AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
        //		AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
        //		AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
        //		AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
        //		AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
        //		AddDoc += "<LocType>" + BenAddwords[21] + "</LocType>";
        //		AddDoc += "<AddressIdentity>" + BenAddwords[23] + "</AddressIdentity></BenAddres>";
        //		AddDoc += "</BenAddress>";
        //		string dependoc = "";
        //		if (DependentStatus == "Yes")
        //		{
        //			string BenFamdet = Request.Form["BenFamdet"].ToString();
        //			string[] BenFamdetwords = BenFamdet.Split('~');
        //			dependoc = "<DependantDetails>";
        //			for (int i = 0; i < fccount - 1; i++)
        //			{
        //				string famdet = BenFamdetwords[i];
        //				string[] splitfamdet = famdet.Split('$');
        //				string[] date = splitfamdet[4].Split('-');
        //				string Filename = "";
        //				if (i == 0)
        //				{
        //					Filename = Fone;
        //				}
        //				if (i == 1)
        //				{
        //					Filename = Ftwo;
        //				}
        //				if (i == 2)
        //				{
        //					Filename = Fthree;
        //				}
        //				if (i == 3)
        //				{
        //					Filename = FFour;
        //				}
        //				if (i == 4)
        //				{
        //					Filename = FFive;
        //				}
        //				if (i == 5)
        //				{
        //					Filename = FSix;
        //				}
        //				string upload = Filename;
        //				DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
        //				dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
        //				dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
        //				dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
        //				dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
        //				dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
        //				dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
        //				dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";
        //				dependoc += "<Dob>" + FamDobDate + "</Dob>";
        //				dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";
        //				dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
        //			}
        //			dependoc += "</DependantDetails>";
        //		}
        //		string Namdoc = "";
        //		if (NomineeStatus == "Yes")
        //		{
        //			string Bennamedet = Request.Form["Bennamedet"].ToString();
        //			string[] Bennamedetwords = Bennamedet.Split('~');
        //			Namdoc = "<BenNomineeDtls>";
        //			for (int i = 0; i < NaCount - 1; i++)
        //			{
        //				string namdet = Bennamedetwords[i];
        //				string[] splitnamdet = namdet.Split('$');
        //				string[] date = splitnamdet[4].Split('-');
        //				DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
        //				Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
        //				Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
        //				Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
        //				Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
        //				Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
        //				Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
        //				Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
        //				Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
        //				Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
        //				Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";

        //				Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId>";
        //				Namdoc += "<Dob>" + NamDobDate + "</Dob></BenNomineeDtl>";
        //			}
        //			Namdoc += "</BenNomineeDtls>";
        //		}

        //		string Pensiondoc = "";
        //		if (pensionRegdStatus == "Yes")
        //		{
        //			string BenPensiondet = Request.Form["bencollectiondtls"].ToString();
        //			string[] BenPensiondetwords = BenPensiondet.Split('~');
        //			Pensiondoc = "<BenPaymentDtls>";
        //			for (int i = 0; i < Payment - 1; i++)
        //			{
        //				string paymentdet = BenPensiondetwords[i];
        //				string[] splitpaymentdet = paymentdet.Split('$');
        //				string[] date = splitpaymentdet[2].Split('-');
        //				DateTime payCollDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
        //				string Colldate = string.Empty;
        //				Colldate = splitpaymentdet[2];
        //				CommonMethods.AddtoLogFile(Environment.NewLine + " Colldate : " + Colldate);
        //				//Colldate : 20-09-2019
        //				Colldate = Colldate.Replace("-", "/");
        //				string[] splitDob = Colldate.Split('/');
        //				CommonMethods.AddtoLogFile(Environment.NewLine + " splitDob[1] : " + splitDob[1] + " splitDob[0] : " + splitDob[0] + " splitDob[2] : " + splitDob[2]);
        //				Colldate = splitDob[1] + "/" + splitDob[0] + "/" + splitDob[2] + " 12:00:00 AM";

        //				Pensiondoc += "<BenPenpaymentDtl><BenPaymentYear>" + splitpaymentdet[0] + "</BenPaymentYear>";
        //				Pensiondoc += "<BenPaymentMonth>" + splitpaymentdet[1] + "</BenPaymentMonth>";
        //				Pensiondoc += "<BenPaymentCollDate>" + Colldate + "</BenPaymentCollDate>";
        //				Pensiondoc += "<BenPayAmount>" + splitpaymentdet[3] + "</BenPayAmount>";
        //				Pensiondoc += "<BenPayReceiptBookNo>" + splitpaymentdet[4] + "</BenPayReceiptBookNo>";
        //				Pensiondoc += "<BenPayReceiptPageNo>" + splitpaymentdet[5] + "</BenPayReceiptPageNo></BenPenpaymentDtl>";
        //			}
        //			Pensiondoc += "</BenPaymentDtls>";
        //		}
        //		string finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + Pensiondoc + "</Details>";
        //		string password = "Password";
        //		string res = Rb.BenfReapply(finalXml, Convert.ToInt32(ModifeidBy), usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard);

        //		//  string res = "Success";
        //		//End Form Xml
        //		if (res == "Success")
        //		{
        //			ViewBag.Message = "User Successfully Updated..";
        //			string Email = Request.Form["email"].ToString();
        //			string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
        //			string MobileNumber = Request.Form["mobno"].ToString();
        //			// string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + " , Your Provisional Registration Number is: " + BenTempregno + "   and Password:" + password;
        //			string Message = "Thank you for providing additional information for benefit under SSY. To check status, please log in at  SSY.wblabour.gov.in for details";
        //			CommonMethods.NewSms(MobileNumber, Message, 0, "Bene ReApply", "Bene", Convert.ToString(Bensno));
        //			if (!string.IsNullOrEmpty(Email))
        //				CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");
        //			return View(reguser);
        //		}
        //		else
        //		{
        //			ViewBag.Message = res;
        //			return View(reguser);
        //		}
        //	}

        //	catch (Exception ex)
        //	{
        //		string Message = Helper.ReturnException(ex);
        //		ViewBag.Message = Message;

        //		CommonMethods.AddtoLogFile("User Reapply BenSno :" + BenificiaryId + "," + DateTime.Now + " Error : " + Message);

        //		return View(reguser);
        //	}
        //}

        //#endregion

        #region  Getting PO Details
        //Author - Sunitha

        public ActionResult GetPOJSON(int ID)
        {
            try
            {
                return Json(HB.GetPO(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region  Getting PO Details
        //Author - Sunitha

        public ActionResult GetPOSTOFFICE(int ID)
        {
            try
            {
                return Json(HB.GetPOSTOFFICE(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting GP Details
        //Author - Sunitha
        //
        public ActionResult GetGPJSON(int ID)
        {
            try
            {
                return Json(HB.GetGP(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion


        #region Getting GP Details
        //Author - Sunitha
        //
        public ActionResult GetGPAll(int ID)
        {
            try
            {
                return Json(HB.GetGPAll(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting GP Details
        //Author - Sunitha
        //
        public ActionResult GetGPBasedOnDistrict(int ID)
        {
            try
            {
                return Json(HB.GetGPBasedOnDistrict(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting Agent Gp  Details
        //Author - Sunitha

        public ActionResult GetAgentGP(int ID)
        {
            try
            {
                return Json(HB.GetAgentGP(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting Agent Gp Ward 1 - 200 Details
        //Author - Sunitha

        public ActionResult GetAgentGPMore(int SubID, int Id)
        {
            try
            {
                return Json(HB.GetAgentGPMore(SubID, Id), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion



        #region Getting block Details based on subdivsion
        //Author - Sunitha

        public ActionResult GetblockbySubdivJSON(int ID)
        {
            try
            {
                return Json(HB.GetTotalblockBySubdiv(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting block Details based on type
        //Author - Sunitha

        public ActionResult GetblockJSON(int ID, int typedata)
        {
            try
            {
                return Json(HB.Getblock(ID, typedata), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting PS Details
        //Author - Sunitha

        public ActionResult GetPSJSON(int ID)
        {
            try
            {
                return Json(HB.GetPS(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting PS Details
        //Author - Sunitha

        public ActionResult GetPSAll(int ID)
        {
            try
            {
                return Json(HB.GetPSAll(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting bank Details
        //Author - Sunitha

        public ActionResult GetBankJSON(int ID)
        {
            try
            {
                return Json(HB.GetBank(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting Location Details based on District id
        //Author - Sunitha

        public ActionResult GetLocationJSON(int ID, int distID)
        {
            try
            {
                return Json(HB.GetLocation(ID, distID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Getting branch Details
        //Author - Sunitha

        public ActionResult GetBranchJSON(int ID)
        {
            try
            {
                return Json(HB.GetBranch(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region
        //Author - Srikar
        //For creating XML
        public string CreateXML(Object _reg)
        {
            XmlDocument xmlDoc = new XmlDocument();   //Represents an XML document, 
                                                      // Initializes a new instance of the XmlDocument class.          
            XmlSerializer xmlSerializer = new XmlSerializer(_reg.GetType());
            // Creates a stream whose backing store is memory. 
            using (MemoryStream xmlStream = new MemoryStream())
            {
                xmlSerializer.Serialize(xmlStream, _reg);
                xmlStream.Position = 0;
                //Loads the XML document from the specified string.
                xmlDoc.Load(xmlStream);
                return xmlDoc.InnerXml;
            }
        }
        #endregion

        #region For getting Benificiary Details
        //Author - Sunitha
        //
        public ActionResult GetBenDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetEditBenDetails(Convert.ToInt64(userid));

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }



        #endregion

        #region For getting Benificiary Details
        //Author - Sunitha
        //
        public ActionResult GetBenDetailsByMatchingId(Int64 bensno, int MatchingId)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetBenDetailsByMatchingId(Convert.ToInt64(userid), MatchingId);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region For getting Address Details
        //Author - Sunitha

        public ActionResult GetbenAddressDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetbenAddressDetails(Convert.ToInt64(userid));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Address Details" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region For getting Nominee Details
        //Author - Sunitha

        public ActionResult GetNamineeDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetNamiNeeDetails(Convert.ToInt64(userid));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Nominee Details" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region For getting Nominee Delete Request Details
        //Author - srikar

        public ActionResult GetNamineeDeleteReqDetails(Int64 Id)
        {
            try
            {
                var res = Rb.GetNamineeDeleteReqDetails(Id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetNamineeDeleteReqDetails" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region  For getting Dependent Delete Request Details
        //Author - srikar

        public ActionResult GetFamilyDeleteReqDetails(Int64 Id)
        {
            try
            {
                var res = Rb.GetFamilyDeleteReqDetails(Id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetFamilyDeleteReqDetails" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region For getting family details
        //Author - Sunitha
        //
        public ActionResult GetFamilyDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetFamilyDetails(Convert.ToInt64(userid));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Family Details" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region For verifying User Mobile number,whether it is already exists or not
        //Author - Sunitha

        public ActionResult CheckUserExist(string UserMobile)
        {
            try
            {
                var Result = Rb.CheckUserMobile(UserMobile).ToString();
                return Json(Result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);

            }
        }
        #endregion

        #region For verifying User Mobile number and dob,whether it is already exists or not
        //Author - Sunitha

        public ActionResult ValidateMobileWithDob(string UserMobile, string Dob)
        {
            try
            {

                var Result = Rb.ValidateMobileWithDob(UserMobile, Dob).ToString();
                return Json(Result, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);

            }
        }
        #endregion



        #region check aadhaar unique or not
        public ActionResult ValidateAadhaar(string ValidateAadhaar, string Bensno = "")
        {
            try
            {
                var Result = Rb.ValidateAadhaar(ValidateAadhaar, Bensno);
                return Json(Result, JsonRequestBehavior.AllowGet);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);

            }
        }
        #endregion


        #region check epic unique or not
        public ActionResult ValidateEpic(string EpicNo, string Bensno = "")
        {
            try
            {
                var Result = Rb.ValidateEpic(EpicNo, Bensno);
                return Json(Result, JsonRequestBehavior.AllowGet);


            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);

            }

        }
        #endregion

        #region Sending OTP to specific Mobile Number
        //Author - Srikar
        //
        public ActionResult SenOtp(string MobileNumber, string Mail)
        {
            try
            {
                var res = Rb.SendOtp(MobileNumber, Mail);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Nominee Details" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }

        public ActionResult SenOtpNominee(string MobileNumber)
        {
            try
            {
                var res = Rb.SenOtpNominee(MobileNumber);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Nominee Details" + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }

        public ActionResult SenOtpForMobileVerify(string MobileNumber)
        {
            try
            {
                var res = Rb.SenOtpForMobileVerify(MobileNumber);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Mobile Number Verify " + DateTime.Now + "Error : " + Message);
                return Content(Message);
            }
        }

        #endregion

        #region For Verfying OTP
        //Author - Srikar
        //
        public ActionResult VerifiyOtp(string MobileNumber, string OTP)
        {
            try
            {
                var res = Rb.Verifyotp(MobileNumber, OTP);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Verify OTP" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get Multiple Districts
        //Author - Srikar

        public ActionResult GetMultipleDistricts(int Uid)
        {
            try
            {
                return Json(HB.GetMultipleDistricts(Uid), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Get Multiple SubDivision
        //Author - Srikar

        public ActionResult GetMultipleSubDiv(int Uid)
        {
            try
            {
                return Json(HB.GetMultipleSubDiv(Uid), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Get Multiple Location
        //Author - Srikar
        //
        public ActionResult GetMultipleLoca(int Uid)
        {
            try
            {
                return Json(HB.GetMultipleLoca(Uid), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region Get multiple gpward
        public ActionResult GetMultipleGpWard(int Uid)
        {
            try
            {
                return Json(HB.GetMultipleGpWard(Uid), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion


        #region for existing User,based on Registration number data will be displayed
        //Author - Sunitha

        public ActionResult ExistRegisub(string RegNo, string Fathername = "", string Dob = "")
        {
            try
            {
                Session["exitreg"] = RegNo;

                var res = Rb.RegigetData(RegNo, Fathername, Dob);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Get Caf Details" + DateTime.Now + " Error : " + Message);
                return Content(Message);
            }

        }
        #endregion

        #region
        public string Getbangaliname(string authToken, string name)
        {
            try
            {
                string txtToTranslate = name;
                string translation = "";
                string uri = string.Format("http://api.microsofttranslator.com/v2/Http.svc/Translate?text=" + System.Web.HttpUtility.UrlEncode(txtToTranslate) + "&to={0}", "bn");
                WebRequest translationWebRequest = WebRequest.Create(uri);
                translationWebRequest.Headers.Add("Authorization", GetAccessToken()); //header value is the "Bearer plus the token from ADM
                WebResponse response = null;
                response = translationWebRequest.GetResponse();
                Stream stream = response.GetResponseStream();
                Encoding encode = Encoding.GetEncoding("utf-8");
                StreamReader translatedStream = new StreamReader(stream, encode);
                System.Xml.XmlDocument xTranslation = new System.Xml.XmlDocument();
                xTranslation.LoadXml(translatedStream.ReadToEnd());
                return xTranslation.InnerText;
            }
            catch (Exception ex)
            {
                return name;

            }
        }
        #endregion

        #region
        [HttpPost]
        public ActionResult Importexcel()
        {
            try
            {
                DataTable dtExcelData = new DataTable();
                object misValue = System.Reflection.Missing.Value;
                string extension = System.IO.Path.GetExtension(Request.Files["FileUpload1"].FileName);
                string path1 = string.Format("{0}/{1}", Path.GetTempPath(), Request.Files["FileUpload1"].FileName);
                if (System.IO.File.Exists(path1))
                    System.IO.File.Delete(path1);
                Request.Files["FileUpload1"].SaveAs(path1);
                string excelConnectionString = @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + path1 + ";Extended Properties=\"Excel 12.0 Xml;HDR=Yes;IMEX=2\"";
                using (var excelConnection = new OleDbConnection(excelConnectionString))
                {
                    var connExcel = new OleDbConnection(excelConnectionString);
                    var cmdExcel = new OleDbCommand { Connection = connExcel };
                    connExcel.Open();
                    var dtExcelSchema = connExcel.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
                    String[] excelSheets = new String[dtExcelSchema.Rows.Count];
                    int j = 0;
                    foreach (DataRow row in dtExcelSchema.Rows)
                    {
                        excelSheets[j] = row["TABLE_NAME"].ToString();
                        j++;
                    }
                    connExcel.Close();
                    cmdExcel.Dispose();
                    var ds = new DataSet();
                    if (dtExcelSchema != null)
                    {
                        string sheetName = dtExcelSchema.Rows[18]["TABLE_NAME"].ToString();
                        var cmd = new OleDbCommand("Select * from [" + sheetName + "] where Occupation not in (' ') ", excelConnection);
                        excelConnection.Open();
                        using (var dataAdapter = new OleDbDataAdapter(cmd))
                        {
                            dataAdapter.FillSchema(dtExcelData, SchemaType.Source);
                            dataAdapter.Fill(dtExcelData);
                        }
                        for (int i = 0; i < dtExcelData.Rows.Count; i++)
                        {
                            try
                            {
                                string Occupation = dtExcelData.Rows[i]["Occupation"].ToString();
                                if (Occupation == "")
                                {
                                    ExportToExcel(dtExcelData);
                                    return RedirectToAction("BenReg", "Agent");
                                }
                                int PresDist = 0;
                                int PresSubdiv = 0;
                                int PresBlock = 0;
                                int PresPs = 0;
                                int PresPo = 0;
                                int PerDist = 0;
                                int PerSubdiv = 0;
                                int PerBlock = 0;
                                int PerPs = 0;
                                int PerPo = 0;
                                PresDist = HB.GetDistrictId(dtExcelData.Rows[i]["Present_District"].ToString());
                                PresSubdiv = HB.GetsubDivisionId(dtExcelData.Rows[i]["Present_SubDivsion"].ToString());
                                PresBlock = HB.GetBlockId(dtExcelData.Rows[i]["Present_Loc/Muncipality"].ToString());
                                PresPs = HB.GetPsId(dtExcelData.Rows[i]["Present_Ps"].ToString());
                                PresPo = HB.GetPoId(dtExcelData.Rows[i]["Present_Po"].ToString());
                                PerDist = HB.GetDistrictId(dtExcelData.Rows[i]["Permanent_District"].ToString());
                                PerSubdiv = HB.GetsubDivisionId(dtExcelData.Rows[i]["Permanent_SubDivsion"].ToString());
                                PerBlock = HB.GetBlockId(dtExcelData.Rows[i]["Permanent_Loc/Muncipality"].ToString());
                                PerPs = HB.GetPsId(dtExcelData.Rows[i]["Permanent_Ps"].ToString());
                                PerPo = HB.GetPoId(dtExcelData.Rows[i]["Permanent_Po"].ToString());
                                if (Occupation == "CONSTRUCTION WORKER")
                                    Occupation = "ConstructionWorker";
                                if (Occupation == "TRANSPORT WORKER")
                                    Occupation = "TransportWorker";
                                if (Occupation == "OTHERS")
                                    Occupation = "Others";
                                string Source = "";
                                if (Occupation == "ConstructionWorker")
                                    Source = "2";
                                if (Occupation == "TransportWorker")
                                    Source = "3";
                                if (Occupation == "Others")
                                    Source = "1";
                                var TempSSNINGen = Rb.TempGenarateSsinNo(PresSubdiv.ToString(), PresBlock.ToString(), Source);
                                if (TempSSNINGen.ResponseCode != "000")
                                {
                                    dtExcelData.Rows[i]["Status"] = TempSSNINGen.ResponseMessage;
                                    continue;
                                }
                                string TempRegNo = TempSSNINGen.ResponseMessage;
                                string Xml = "<Details><BenDetails>";
                                Xml += "<BenSalutation>" + "" + "</BenSalutation>";
                                Xml += "<BenFirstName>" + dtExcelData.Rows[i]["FirstName"].ToString() + "</BenFirstName>";
                                Xml += "<BentempregNo>" + TempRegNo + "</BentempregNo>";
                                Xml += "<BenLastName>" + dtExcelData.Rows[i]["LastName"].ToString() + "</BenLastName>";
                                Xml += "<BenMiddleName>" + dtExcelData.Rows[i]["MiddleName"].ToString() + "</BenMiddleName>";
                                Xml += "<BenDob>" + dtExcelData.Rows[i]["Dob"].ToString() + "</BenDob>";
                                Xml += "<BenGender>" + dtExcelData.Rows[i]["Gender"].ToString() + "</BenGender>";
                                Xml += "<BenMaritalStatus>" + dtExcelData.Rows[i]["MaritalStatus"].ToString() + "</BenMaritalStatus>";
                                Xml += "<BenFatherFirstName>" + dtExcelData.Rows[i]["FatherName"].ToString() + "</BenFatherFirstName>";
                                Xml += "<AadharCard>" + dtExcelData.Rows[i]["AadharCard"].ToString() + "</AadharCard>";
                                Xml += "<EpicCard>" + dtExcelData.Rows[i]["EpicCard"].ToString() + "</EpicCard>";
                                Xml += "<BankAccNo>" + dtExcelData.Rows[i]["BankAccNo"].ToString() + "</BankAccNo>";
                                int Rel = HB.Getreligion(dtExcelData.Rows[i]["Religion"].ToString());
                                Xml += "<BenReligion>" + Rel.ToString() + "</BenReligion>";
                                int SocialCat = HB.GetSocialCat(dtExcelData.Rows[i]["SocialCategory"].ToString());
                                Xml += "<BenSocialCategory>" + SocialCat.ToString() + "</BenSocialCategory>";
                                int BplStatus = 0;
                                if (dtExcelData.Rows[i]["BplStatus"].ToString() == "Yes")
                                    BplStatus = 1;
                                Xml += "<BenBplStatus>" + BplStatus.ToString() + "</BenBplStatus>";
                                Xml += "<BenBplNo>" + dtExcelData.Rows[i]["BplNo"].ToString() + "</BenBplNo>";
                                Xml += "<HusbandName>" + dtExcelData.Rows[i]["HusbandName"].ToString() + "</HusbandName>";
                                Xml += "<email>" + dtExcelData.Rows[i]["Email"].ToString() + "</email>";
                                Xml += "<BenRegNo>" + dtExcelData.Rows[i]["RegNo"].ToString() + "</BenRegNo>";
                                Xml += "<BenRegDate>" + dtExcelData.Rows[i]["RegDate"].ToString() + "</BenRegDate>";
                                Xml += "<BenOccupation>" + Occupation + "</BenOccupation>";
                                Xml += "<BenMobileNo>" + dtExcelData.Rows[i]["MobileNo"].ToString() + "</BenMobileNo>";
                                Xml += "<BenMonthlyIncom >" + dtExcelData.Rows[i]["MonthlyIncom"].ToString() + "</BenMonthlyIncom >";
                                Xml += "<BenBankAccNo>" + dtExcelData.Rows[i]["BankAccNo"].ToString() + "</BenBankAccNo>";
                                Xml += "<BenBankIfscCode>" + dtExcelData.Rows[i]["BankIfscCode"].ToString() + "</BenBankIfscCode>";
                                Xml += "<BenEmpType>" + Occupation + "</BenEmpType>";
                                Xml += "<BenEsiNumber>" + dtExcelData.Rows[i]["EsiNumber"].ToString() + "</BenEsiNumber>";
                                Xml += "</BenDetails>";
                                Xml += "<BenAddress><BenAddres>";
                                Xml += "<BenAddressType>Permanent</BenAddressType><BenState>West Bengal</BenState>";
                                Xml += "<BenDistrict>" + PerDist.ToString() + "</BenDistrict>";
                                Xml += "<BenSubDivision>" + PerSubdiv.ToString() + "</BenSubDivision >";
                                Xml += "<BenBmc>" + PerBlock.ToString() + "</BenBmc>";
                                Xml += "<BenVsr>" + dtExcelData.Rows[i]["permanent_Village/Street/Road"].ToString() + "</BenVsr>";
                                Xml += "<BenPs>" + PerPs + "</BenPs>";
                                Xml += "<BenPo>" + PerPo + "</BenPo>";
                                Xml += "<BenPincode>" + dtExcelData.Rows[i]["Permanent_PINCode"].ToString() + "</BenPincode>";
                                Xml += "<BenGpWard>" + dtExcelData.Rows[i]["Permanent_GP/Ward"].ToString() + "</BenGpWard></BenAddres>";
                                Xml += "<BenAddres><BenAddressType>Present</BenAddressType><BenState>West Bengal</BenState>";
                                Xml += "<BenDistrict>" + PresDist.ToString() + "</BenDistrict>";
                                Xml += "<BenSubDivision>" + PresSubdiv.ToString() + "</BenSubDivision >";
                                Xml += "<BenBmc>" + PresBlock.ToString() + "</BenBmc>";
                                Xml += "<BenVsr>" + dtExcelData.Rows[i]["Present_Village/Street/Road"].ToString() + "</BenVsr>";
                                Xml += "<BenPs>" + PresPs.ToString() + "</BenPs>";
                                Xml += "<BenPo>" + PresPo.ToString() + "</BenPo>";
                                Xml += "<BenPincode>" + dtExcelData.Rows[i]["Present_PINCode "].ToString() + "</BenPincode>";
                                Xml += "<BenGpWard>" + dtExcelData.Rows[i]["Present_GP/Ward"].ToString() + "</BenGpWard></BenAddres></BenAddress></Details>";
                                string password = CommonMethods.CreatePassword();
                                int CreatedBy = Convert.ToInt32(Session["DeptUserid"]);
                                string res = "";
                                //Rb.BenfiReg(Xml, CreatedBy, "", password, "0","","");
                                if (res == "Success")
                                {
                                    ViewBag.Messeage = "Application form submitted successfully";
                                    string MobileNumber = dtExcelData.Rows[i]["MobileNo"].ToString();
                                    string Email = dtExcelData.Rows[i]["Email"].ToString();
                                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                                    string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + ", Your Provisional Registration Number is: " + TempRegNo + " and Password:" + password;
                                    CommonMethods.SendBillSms(MobileNumber, Message, 0, "Bene Registration", "Bene");
                                    CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Login Credentials");
                                    dtExcelData.Rows[i]["Status"] = "Success";
                                }
                                else
                                {
                                    dtExcelData.Rows[i]["Status"] = res;
                                    continue;
                                }
                            }
                            catch (Exception ex)
                            {
                                dtExcelData.Rows[i]["Status"] = ex.Message;
                                continue;
                            }
                        }
                    }
                    ExportToExcel(dtExcelData);
                    return RedirectToAction("BenReg", "Agent");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.AddtoLogFile("Exception Bulk Upload" + ex.Message.ToString());
                Session["ExcelExpection"] = ex.Message.ToString();
                return RedirectToAction("BenReg", "Agent");
            }
        }
        #endregion

        #region
        public string GetAccessToken()
        {
            if (string.IsNullOrWhiteSpace(SubscriptionKey))
            {
                return string.Empty;
            }
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Post;
                request.RequestUri = ServiceUrl;
                request.Content = new StringContent(string.Empty);
                request.Headers.TryAddWithoutValidation(OcpApimSubscriptionKeyHeader, this.SubscriptionKey);
                var response = client.SendAsync(request).Result;
                this.RequestStatusCode = response.StatusCode;
                response.EnsureSuccessStatusCode();
                var Res = response.Content.ReadAsStringAsync().Result;
                var _storedTokenValue = "Bearer " + Res;
                return _storedTokenValue;
            }
        }
        #endregion

        #region
        public StringBuilder WriteToCsvFile(DataTable dataTable, string filePath)
        {
            StringBuilder fileContent = new StringBuilder();
            foreach (var col in dataTable.Columns)
            {
                fileContent.Append(col.ToString() + ",");
            }
            fileContent.Replace(",", System.Environment.NewLine, fileContent.Length - 1, 1);
            foreach (DataRow dr in dataTable.Rows)
            {
                foreach (var column in dr.ItemArray)
                {
                    fileContent.Append("\"" + column.ToString() + "\",");
                }
                fileContent.Replace(",", System.Environment.NewLine, fileContent.Length - 1, 1);
            }
            return fileContent;
        }
        #endregion

        #region Get single family details
        public ActionResult GetsingleFamilyDetails(string Id)
        {
            try
            {
                var res = Rb.GetsingleFamilyDetails(Convert.ToInt64(Id));
                //return Json(res, JsonRequestBehavior.AllowGet);
                return Content(res.SchemePassBook);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }

        }
        #endregion

        #region
        public void ExportToExcel(DataTable dt)
        {
            if (dt.Rows.Count > 0)
            {
                string filename = "UserRegistration.xls";
                System.IO.StringWriter tw = new System.IO.StringWriter();
                System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);
                DataGrid dgGrid = new DataGrid();
                dgGrid.DataSource = dt;
                dgGrid.DataBind();
                dgGrid.RenderControl(hw);
                Response.ContentType = "application/vnd.ms-excel";
                Response.AppendHeader("Content-Disposition", "attachment; filename=" + filename + "");
                Response.Write(tw.ToString());
                Response.End();
            }
        }
        #endregion

        #region
        public ActionResult RegistrationPreview()
        {
            return View();
        }
        #endregion

        #region Edit nominee details view
        public ActionResult EditDepNomi()
        {
            string UserId = Convert.ToString(Session["Userid"]);
            if (string.IsNullOrEmpty(UserId))
                return RedirectToAction("Index", "Home");
            ViewBag.UserId = UserId;
            ViewBag.Message = "";
            return View();
        }
        #endregion

        #region submit edit nominee details
        [HttpPost]
        public ActionResult EditDepNomi(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Res = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                ViewBag.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                ViewBag.Code = "555";
                return View();
            }
            try
            {
                string Userid = Session["Userid"].ToString();
                string NamDet = Request.Form["Bennamedet"].ToString();
                string FamDet = Request.Form["BenFamdet"].ToString();
                string NamCount = Request.Form["NamCount"].ToString();
                string FamCount = Request.Form["FamCount"].ToString();
                int fccount = Convert.ToInt32(FamCount);
                string DependentStatus = Request.Form["DependentStatus"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                if (Request.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);
                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {
                            var name = fileName;
                            if (i == 0)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                Fone = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                            if (i == 1)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                Ftwo = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                            if (i == 2)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                Fthree = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                            if (i == 3)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                FFour = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                            if (i == 4)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                FFive = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                            if (i == 5)
                            {
                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Userid + "_" + fileName);
                                FSix = "/UploadFiles/DependentPassbook/" + Userid + "_" + fileName;
                            }
                        }
                    }
                }
                string dependoc = "";
                if (DependentStatus == "Yes")
                {
                    string BenFamdet = Request.Form["BenFamdet"].ToString();
                    string[] BenFamdetwords = BenFamdet.Split('~');
                    dependoc = "<DependantDetails>";
                    for (int i = 0; i < fccount - 1; i++)
                    {
                        string famdet = BenFamdetwords[i];
                        string[] splitfamdet = famdet.Split('$');
                        string[] date = splitfamdet[4].Split('-');
                        string Filename = "";
                        if (i == 0)
                        {
                            Filename = Fone;
                        }
                        if (i == 1)
                        {
                            Filename = Ftwo;
                        }
                        if (i == 2)
                        {
                            Filename = Fthree;
                        }
                        if (i == 3)
                        {
                            Filename = FFour;
                        }
                        if (i == 4)
                        {
                            Filename = FFive;
                        }
                        if (i == 5)
                        {
                            Filename = FSix;
                        }
                        string upload = Filename;
                        DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");

                        dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                        dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                        dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                        dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                        dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                        dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                        dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";
                        dependoc += "<Dob>" + depdate + "</Dob>";
                        dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                    }
                    dependoc += "</DependantDetails>";
                }
                string Namdoc = "";
                if (NomineeStatus == "Yes")
                {
                    string Bennamedet = Request.Form["Bennamedet"].ToString();
                    string[] Bennamedetwords = Bennamedet.Split('~');
                    Namdoc = "<BenNomineeDtls>";
                    for (int i = 0; i < NaCount - 1; i++)
                    {
                        string namdet = Bennamedetwords[i];
                        string[] splitnamdet = namdet.Split('$');
                        string[] date = splitnamdet[4].Split('-');
                        DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                        Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                        Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                        Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                        Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                        Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
                        Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                        Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                        Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                        Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                        Namdoc += "<Dob>" + depdate + "</Dob></BenNomineeDtl>";
                    }
                    Namdoc += "</BenNomineeDtls>";
                }
                string finalXml = "<Details>" + dependoc + Namdoc + "</Details>";
                var res = Rb.UpdateNomDep(finalXml, Userid);
                ViewBag.UserId = Userid;
                if (res == "0")
                {
                    ViewBag.Message = "request submitted successfully";
                }
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("edit nominee details" + DateTime.Now + "Error : " + Message);
                ViewBag.Message = Message;
                return View();
            }
        }
        #endregion

        #region Get district all
        public ActionResult GetDistrictAll()
        {
            try
            {
                //GetMultipleDistricts
                return Json(HB.GetDistrict(), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);

                // log.Error(ex);
                return Content(Message);
            }
            finally
            {
                // log.Exit();
            }
        }
        #endregion

        #region  Check registration number or ssin number or temperery registration number exist or not

        public ActionResult Checkuniqueno(string Number)
        {
            try
            {
                var res = Rb.Checkuniqueno(Number.Trim());
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);

            }

        }
        #endregion

        #region
        [HttpPost]
        public ActionResult Regisbenifdet(string Data)
        {
            try
            {
                JavaScriptSerializer jss = new JavaScriptSerializer();
                RegistrationDet _reguser = jss.Deserialize<RegistrationDet>(Data);
                //  CommonMethods.AddtoLogFile("Benificiary Registration" + DateTime.Now);
                /////  if (Session["DeptUserid"] != null)
                // {
                string Userid = Session["DeptUserid"].ToString();
                ViewBag.Userid = Userid;
                // }
                // else
                // {
                //     ViewBag.Userid = "1";
                // }
                DateTime bdob = Convert.ToDateTime(_reguser.BenDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string RegDate = _reguser.Regdate;
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime benficiaryRegdate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
                //BenDetails
                string tempid = "";
                if (_reguser.BenTempId != null && _reguser.BenTempId != "")
                {
                    tempid = _reguser.BenTempId;
                }
                else
                    tempid = "0";

                string docxml = "<BenDetails>";
                docxml += "<BenSnoTemp>" + tempid + "</BenSnoTemp>";
                docxml += "<BenGender>" + _reguser.BenGender + "</BenGender>";
                docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                docxml += "<BenFirstName>" + _reguser.Firstnamedet + "</BenFirstName>";
                docxml += "<BenLastName>" + _reguser.lastnamedet + "</BenLastName>";
                docxml += "<BenMiddleName>" + _reguser.Middlenamedet + "</BenMiddleName>";
                docxml += "<BenDob>" + benficiarydob + "</BenDob>";
                docxml += "<Age>" + _reguser.Agedet + "</Age>";
                docxml += "<BenMaritalStatus>" + _reguser.Maritaldet + "</BenMaritalStatus>";
                docxml += "<BenFatherFirstName>" + _reguser.Fathernamedet + "</BenFatherFirstName>";
                docxml += "<AadharCard>" + _reguser.aadhardet + "</AadharCard>";
                docxml += "<EpicCard>" + _reguser.epicdet + "</EpicCard>";
                docxml += "<BankAccNo>" + _reguser.bnkacctnodet + "</BankAccNo>";
                docxml += "<BenReligion>" + _reguser.religiondet + "</BenReligion>";
                docxml += "<BenSocialCategory>" + _reguser.socaldet + "</BenSocialCategory>";
                docxml += "<BenBplStatus>" + _reguser.bplstat + "</BenBplStatus>";
                docxml += "<BenBplNo>" + _reguser.bpldet + "</BenBplNo>";
                docxml += "<HusbandName>" + _reguser.husbandnamedet + "</HusbandName>";
                docxml += "<email>" + _reguser.emaildet + "</email>";
                docxml += "<BenMobileNo>" + _reguser.mobnodet + "</BenMobileNo>";
                docxml += "<SalFather>" + _reguser.ddlfatherdet + "</SalFather>";
                docxml += "<SalHusband>" + _reguser.ddlhusdet + "</SalHusband>";
                docxml += "<registrationno>" + _reguser.registrationno + "</registrationno>";
                docxml += "<Regdate>" + benficiaryRegdate + "</Regdate>";
                docxml += "<bnkdist>" + _reguser.bnkdist + "</bnkdist>";
                docxml += "<bank>" + _reguser.bank + "</bank>";
                docxml += "<actnumberdet>" + _reguser.actnumberdet + "</actnumberdet>";
                docxml += "<locdet>" + _reguser.locdet + "</locdet>";
                docxml += "<brnchdet>" + _reguser.brnchdet + "</brnchdet>";
                docxml += "<brnchaddrssdet>" + _reguser.brnchaddrssdet + "</brnchaddrssdet>";
                docxml += "<ifscdet>" + _reguser.ifscdet + "</ifscdet>";
                docxml += "<resondet>" + _reguser.resondet + "</resondet>";


                // Address
                docxml += "</BenDetails>";
                string AddDoc = "<BenAddress>";
                AddDoc += "<BenAddres><BenAddressType>" + "Permanent" + "</BenAddressType>";
                AddDoc += "<BenState>" + _reguser.statedet + "</BenState>";
                AddDoc += "<BenDistrict>" + _reguser.perdistdet + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + _reguser.persubdet + "</BenSubDivision>";
                AddDoc += "<BenBmc>" + _reguser.perblockdet + "</BenBmc>";
                AddDoc += "<BenVsr>" + _reguser.vlg1det + "</BenVsr>";
                AddDoc += "<BenPs>" + _reguser.perpsdet + "</BenPs>";
                AddDoc += "<BenPo>" + _reguser.perpodet + "</BenPo>";
                AddDoc += "<BenPincode>" + _reguser.perpincode1det + "</BenPincode>";
                AddDoc += "<BenGpWard>" + _reguser.ward1det + "</BenGpWard>";
                AddDoc += "<LocType>" + _reguser.perbmcdet + "</LocType></BenAddres>";
                AddDoc += "<BenAddres><BenAddressType>" + "Present" + "</BenAddressType>";
                AddDoc += "<BenState>" + _reguser.statedet + "</BenState>";
                AddDoc += "<BenDistrict>" + _reguser.predistdet + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + _reguser.presubdet + "</BenSubDivision>";
                AddDoc += "<BenBmc>" + _reguser.preblockdet + "</BenBmc>";
                AddDoc += "<BenVsr>" + _reguser.vlg2det + "</BenVsr>";
                AddDoc += "<BenPs>" + _reguser.prepsdet + "</BenPs>";
                AddDoc += "<BenPo>" + _reguser.prepodet + "</BenPo>";
                AddDoc += "<BenPincode>" + _reguser.prepincode2det + "</BenPincode>";
                AddDoc += "<BenGpWard>" + _reguser.ward2det + "</BenGpWard>";
                AddDoc += "<LocType>" + _reguser.prebmcdet + "</LocType></BenAddres>";
                AddDoc += "</BenAddress>";
                string finalXml = "<Details>" + docxml + AddDoc + "</Details>";
                int CreatedBy = Convert.ToInt32(Userid);
                CommonMethods.AddtoLogFile("Benificiary Registration" + finalXml);
                var res = Rb.SaveRegdet(finalXml, CreatedBy);
                return Content(res);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }


        }
        #endregion

        #region
        [HttpPost]
        public ActionResult RegisNomineeDepdet(string Dependent, string BenTempId, string Nominee, string Issueauth, string authorityloc, string Authname, string NamCount, string famcount, string NamStatus, string FamStatus, string Id)
        {
            try
            {
                string tempid = "";
                if (BenTempId != null && BenTempId != "")
                {
                    tempid = BenTempId;
                }
                else
                    tempid = "0";

                string Userid = Session["DeptUserid"].ToString();
                int fccount = Convert.ToInt32(famcount);
                int NaCount = Convert.ToInt32(NamCount);
                string dependoc = "";
                if (FamStatus == "Yes")
                {
                    string[] BenFamdetwords = Dependent.Split('~');
                    dependoc = "<DependantDetails>";
                    for (int i = 0; i < fccount - 1; i++)
                    {
                        string famdet = BenFamdetwords[i];
                        string[] splitfamdet = famdet.Split('$');
                        string[] date = splitfamdet[4].Split('-');
                        DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        dependoc += "<DependantDetail><BenSnoTemp>" + tempid + "</BenSnoTemp>";
                        dependoc += "<BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                        dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                        dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                        dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                        dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                        dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                        dependoc += "<Dob>" + depdate + "</Dob></DependantDetail>";
                    }
                    dependoc += "</DependantDetails>";
                }
                string Namdoc = "";
                if (NamStatus == "Yes")
                {
                    string[] Bennamedetwords = Nominee.Split('~');
                    Namdoc = "<BenNomineeDtls>";
                    for (int i = 0; i < NaCount - 1; i++)
                    {
                        string namdet = Bennamedetwords[i];
                        string[] splitnamdet = namdet.Split('$');
                        string[] date = splitnamdet[4].Split('-');
                        DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                        Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                        Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                        Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                        Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                        Namdoc += "<BenNomineeBankName>" + splitnamdet[9] + "</BenNomineeBankName>";
                        Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                        Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                        Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                        Namdoc += "<Dob>" + depdate + "</Dob></BenNomineeDtl>";
                    }
                    Namdoc += "</BenNomineeDtls>";
                }
                string finalXml = "<Details>" + dependoc + Namdoc + "</Details>";
                var res = Rb.RegisNomineeDepdet(finalXml, Issueauth, authorityloc, Authname, Id, Userid);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);

            }


        }
        #endregion

        #region
        public ActionResult RegisAdditionalDet(int Tempsno, string pfnumdet, string esinumdet, string tempemptype, string occupat, string selfemp, string estaddres, string mnthincome, string pfsta)
        {
            try
            {
                string Userid = Session["DeptUserid"].ToString();
                var res = Rb.RegisAdditionalDet(Tempsno, pfnumdet, esinumdet, tempemptype, occupat, selfemp, estaddres, mnthincome, pfsta, Convert.ToInt32(Userid));
                //return View(res);
                return Content(res);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }

        }
        #endregion

        #region Edit PF
        public ActionResult EditPfDetails()
        {

            string UserId = Convert.ToString(Session["Userid"]);
            if (string.IsNullOrEmpty(UserId))
                return RedirectToAction("Index", "Home");
            ViewBag.UserId = UserId;
            return View();
        }

        #endregion

        #region Pf Insert

        public ActionResult PfInsert(int bensno, string pf, string esi, int Pfstatus)
        {
            try
            {

                var response = Rb.PfInsert(bensno, pf, esi, Pfstatus);
                return Json(response, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region Get PF Details in Table
        public ActionResult GetPFDetails(int id)
        {
            try
            {
                var res = Rb.GetPFDetails(id);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        public ActionResult CheckBenglaiName()
        {
            string Name = "APARNA" + ' ' + "MANNA" + ' ' + "KOLA";
            var authToken = "c2e22b7cc93449d1af7f4116c3d31d7d";
            string bengname = Getbangaliname(authToken, Name);

            return Content(bengname);
        }


        #region Beneficiary  registration view
        //Author - Sunitha & Srikar

        public ActionResult BeniRegistrationPart1(string Status = "", string Id = "", string CreatedBy = "", string SchemId = "")
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {

                string userType = Convert.ToString(Session["UserType"]);


                Session["RegistrationType"] = Status;


                if (Status == "")
                {
                    Status = "NewReg";
                }
                if (Status == "Yes")
                {
                    Status = "OldReg";
                    reguser.registrationno = Convert.ToString(Session["exitreg"]);
                }
                ViewBag.Schem = SchemId;
                ViewBag.BeniRegtype = Status;
                Session["exitreg"] = "";

                //&& Id != ""  

                if (Status != "")
                {

                    ViewBag.CheckExisting = 1;
                    ViewBag.RegistrationType = Status;
                    ViewBag.BenTempid = Id;
                }
                else
                {
                    ViewBag.CheckExisting = 0;
                    ViewBag.RegistrationType = "";
                    Session["DeptUserid"] = null;
                    ViewBag.BenTempid = Id;
                }
                ViewBag.Userid = CreatedBy;

                //if (Session["DeptUserid"] != null)
                //{
                //    string Userid = CreatedBy;
                //    ViewBag.Userid = Userid;
                //}
                //else
                //{
                //    ViewBag.Userid = "1";
                //}
                Session["Status"] = Status;
                if (Id == "")
                {
                    reguser.self = HB.GetAllListofind(1);
                    reguser.unorg = HB.GetAllListofind(2);
                    reguser.maritalstatus = HB.Getmaritalstatus();
                    reguser.religion = HB.Getreligion();
                    reguser.socategry = HB.Getcategory();
                    reguser.district = HB.GetDistrict();
                    reguser.subdivision = HB.Getsubdivision(0);
                    reguser.wardname = HB.GetGP(-1);
                    reguser.psname = HB.GetPS(0);
                    reguser.muncorpname = HB.Getblock(0, 0);
                    reguser.bankname = HB.GetBank(0);
                    reguser.branchname = HB.GetBranch(0);
                    reguser.issueAuthName = HB.GetIssueauth();
                    reguser.poname = HB.GetPO(0);
                    reguser.locname = HB.GetLocation(0, 0);
                    reguser.WorkType = HB.GetWorkType("C");
                }
                else
                {
                    reguser.self = HB.GetAllListofind(1);
                    reguser.unorg = HB.GetAllListofind(2);
                    reguser.maritalstatus = HB.Getmaritalstatus();
                    reguser.religion = HB.Getreligion();
                    reguser.socategry = HB.Getcategory();
                    reguser.district = HB.GetDistrict();
                    reguser.subdivision = HB.Gettotalsubdivisions();
                    reguser.psname = HB.GetTotalPS();
                    reguser.muncorpname = HB.GetTotalblocks();
                    reguser.wardname = HB.GetTotalGP();
                    reguser.bankname = HB.GetTotalBank();
                    reguser.branchname = HB.GetTotalBranch();
                    reguser.issueAuthName = HB.GetIssueauth();
                    reguser.poname = HB.GetTotalPO();
                    reguser.locname = HB.GetTotalblocks();
                    reguser.WorkType = HB.GetWorkType("C");
                }
                ViewBag.Message = "";
                ViewBag.MessageCode = "999";
                return View(reguser);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("Beneficiary  registration view Error due to : " + ex.Message, "Id : " + Convert.ToString(Id), Convert.ToString(ex.InnerException), "BeniRegistrationPart1", "RegistrationController");
                //CommonMethods.AddtoLogFile("Beni Registration Part1" + DateTime.Now + "Error : " + Message);
                ViewBag.Message = Message;
                ViewBag.MessageCode = "999";
                return View(reguser);
            }
        }

        #endregion

        #region Part 1 Submit
        [HttpPost]
        public ActionResult BeniRegistrationPart1(IEnumerable<HttpPostedFileBase> files)
        {

            RegResponse Ress = new RegResponse();
            //if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            //{
               // Ress.Message = "Error 0324: Storage is full to save details, please contact administrator.";
                    //ConfigurationManager.AppSettings["AlertSiteMessage"];
                //Ress.Code = "555";
               // return Json(Ress, JsonRequestBehavior.AllowGet);
            //}


            // CommonMethods.AddtoLogFileInfor("Benificiary Registration" + DateTime.Now);

            string FName = Request.Form["FirstName"] == null ? "" : Request.Form["FirstName"].ToString();
            string MName = Request.Form["MiddleName"] == null ? "" : Request.Form["MiddleName"].ToString();
            string LName = Request.Form["lstname"] == null ? "" : Request.Form["lstname"].ToString();
            string Name = FName + ' ' + MName + ' ' + LName;



            string finalXml = "";
            RegistartionForUser reguser = new RegistartionForUser();

            RegResponse Res = new RegResponse();

              int CreatedBy = Convert.ToInt32(Request.Form["DepUserid"].ToString());
            //int CreatedBy = 1;



            ViewBag.RegistrationType = "";

            ViewBag.Userid = CreatedBy;


            try
            {
                string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();

                DateTime bdob = Convert.ToDateTime(BenfiDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string RegDate = Request.Form["Regdate"].ToString();
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');

                string TemSubdiv = BenAddwords[3].ToString();
                string TempLoc = BenAddwords[4].ToString();

                string TempRegNo = string.Empty;
                string password = string.Empty;
                string Occupation = Request.Form["Workertype"].ToString();
                string Source = "";
                if (Occupation == "ConstructionWorker")
                    Source = "2";
                if (Occupation == "TransportWorker")
                    Source = "3";
                if (Occupation == "Others")
                    Source = "1";


                string Aadhaar = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                string Epic = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();
                string TypeReg = Request.Form["RegistrationType"].ToString();
                //2,3,4,8
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                        string NamCount = Request.Form["NamCount"].ToString();
                        int NaCount = Convert.ToInt32(NamCount);
                        string usermobileno = Request.Form["mobno"].ToString();
                        string fileName = string.Empty;
                        string destinationPath = string.Empty;
                        List<string> FilePath = new List<string>();
                        List<string> NamesSave = new List<string>();
                        string Fone = string.Empty;
                        string Ftwo = string.Empty;
                        string Fthree = string.Empty;
                        string FFour = string.Empty;
                        string FFive = string.Empty;
                         string FSix = string.Empty;
                        var supportedTypes = new[] { "jpg", "jpeg", "png" };
                        string FatherName = Request.Form["FatherName"].ToString();
                        //  int District = Convert.ToInt32(BenAddwords[12]);
                        // int SubDivision = Convert.ToInt32(BenAddwords[13]);
                        // int BenBmc = Convert.ToInt32(BenAddwords[14]);




                        string registrationno = Request.Form["registrationno"] == null ? "" : Request.Form["registrationno"].ToString();



                        string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                        string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();

                        string HusbandName = Request.Form["HusbandName"] == null ? "" : Request.Form["HusbandName"].ToString();
                        string docxml = "<BenDetails>";
                        docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                        docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
                        docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
                        docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";

                        docxml += "<BenDob>" + bdob.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenDob>";
                        docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
                        docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
                        docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
                        docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
                        docxml += "<BentempregNo>" + TempRegNo + "</BentempregNo>";
                        docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
                        docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
                        docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";

                        docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
                        docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
                        docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";

                        docxml += "<BenRegNo>" + Request.Form["registrationno"].ToString() + "</BenRegNo>";

                        docxml += "<BenRegDate>" + FinalRegDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":") + "</BenRegDate>";
                        docxml += "<BenOccupation>" + Request.Form["Workertype"].ToString() + "</BenOccupation>";
                        docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
                        docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
                        docxml += "<RegistrationType>" + Request.Form["RegistrationType"].ToString().Trim() + "</RegistrationType>";

                        if (Request.Form["Workertype"].ToString() == "Others")
                        {
                            docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";

                            if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
                            {
                                Res.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
                                Res.Code = "999";
                                return Json(Res, JsonRequestBehavior.AllowGet);

                            }

                        }
                        else
                        {
                            docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
                            docxml += "<BenOccupationType>" + Request.Form["Worktype"].ToString() + "</BenOccupationType>";
                            if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
                            {
                                docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
                            }
                            else
                            {
                                docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
                            }
                        }
                        docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";


                        docxml += "<BengaliName>" + "" + "</BengaliName>";
                        docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
                        docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
                        docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                        docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                        docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
                        docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";

                        docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                        docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                        docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                        docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                        docxml += "<Source>" + Source + "</Source>";


                        docxml += "<IsUnique>" + "P" + "</IsUnique>";
                        docxml += "<NoOfRecords>" + "" + "</NoOfRecords>";
                        docxml += "</BenDetails>";
                        string AddDoc = "<BenAddress>";
                        AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
                        AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
                        AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                        AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                        AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
                        AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                        AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                        AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                        AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                        AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
                        AddDoc += "<LocType>" + BenAddwords[20] + "</LocType></BenAddres>";
                        AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
                        AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
                        AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                        AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision>";
                        AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                        AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
                        AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
                        AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
                        AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
                        AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
                        AddDoc += "<LocType>" + BenAddwords[21] + "</LocType></BenAddres>";
                        AddDoc += "</BenAddress>";
                         finalXml = "<Details>" + docxml + AddDoc + "</Details>";
                        password = Request.Form["ddlday"].ToString() + Request.Form["ddlmnth"].ToString() + Request.Form["ddlyr"].ToString();
                        //CommonMethods.AddtoLogFileInfor("Benificiary Registration" + finalXml);
                        string Tempbensno = Request.Form["TempBensno"].ToString();

                        CommonMethods.RegistrationLog(finalXml, true, "NewRegPart1 Starts");
                        Res = Rb.BenfiReg(finalXml, CreatedBy, usermobileno, password, Source, TemSubdiv, TempLoc, Aadharcard, EpicCard, registrationno);
                        CommonMethods.RegistrationLog("Response - " + Res, true, "NewRegPart1 ends");
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        CommonMethods.RegistrationLog(finalXml, false, "NewRegPart1 Error catch 1 -" + Convert.ToString(ex.InnerException));

                        transaction.Rollback();

                    }
                }
                //End Form Xml
                if (Res.Message == "Success")
                {
                    string LogId = "";
                    string Message = "";



                    string MobileNumber = Request.Form["mobno"].ToString();
                    if (TypeReg.Trim() == "NewReg")
                    {
                        Message = "Your application form is submitted successfully and you are registered now! SSIN : " + Res.SSINNo + " Your login ID is: " + "SSIN/Aadhar Number/Epic Card Number";
                        CommonMethods.NewSms(MobileNumber, Message, 0, "Bene Registration", "Bene", Res.BenSno);

                    }
                    //else
                    //{
                    //    Message = "Your application form is submitted successfully and you are registered now! Your login ID is: Aadhar Number/Epic Card Number";
                    //}
                    Res.Message = "Your application form is submitted successfully and you are registered now!SSIN : " + Res.SSINNo + " Your login ID is: " + LogId + " and  your password is: your dob(ddmmyyyy), For any queries or complaints, please contact your LWFC center."; ;
                    Res.Code = "000";
                    Res.Name = Name;
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    CommonMethods.RegistrationLog(finalXml, true, "Part1 Error Else res");
                    Res.Message = Res.Message;
                    Res.Code = "999";
                    CommonMethods.LogError("Beni Registration Part1 submit Error due to : " + Res.Message, ":: Registration Number :: " + Convert.ToString(Request.Form["registrationno"]), ":: ViewBag.MessageCode ::" + Convert.ToString(Res.Code), "BeniRegistrationPart1", "RegistrationController");
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                CommonMethods.RegistrationLog(finalXml, true, "Part1 Error catch 2");
                CommonMethods.LogError("Beni Registration Part1 submit Error due to : " + ex.Message, "Registration ID : " + Convert.ToString(Request.Form["registrationno"]), Convert.ToString(ex.InnerException), "BeniRegistrationPart1", "RegistrationController");
                //CommonMethods.AddtoLogFile("Beni Registration Part1 Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }


        }

        #endregion


        #region part-II benificiary
        public ActionResult BeniPart2(string BeniSno = "", string CreatedBy = "", string Type = "")
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {



                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();


                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();


                reguser.bankname = HB.GetBank(0);
                reguser.branchname = HB.GetBranch(0);
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetLocation(0, 0);
                ViewBag.BeniId = BeniSno;
                ViewBag.CreatedBy = CreatedBy;
                ViewBag.Type = Type;
                return View(reguser);
            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.LogError("Part-II Benificiary Error due to : " + ex.Message, "BeniSno : " + Convert.ToString(BeniSno), Convert.ToString(ex.InnerException), "BeniPart2", "RegistrationController");
                //CommonMethods.AddtoLogFile("Beni Registration part2" + DateTime.Now + "Error : " + Message);
                ViewBag.Message = Message;
                ViewBag.MessageCode = "999";
                return View(reguser);
            }


        }
        #endregion

        #region Part-II Submit

        [HttpGet]
        public ActionResult CheckStorageLimit()
        {

            RegResponse Res = new RegResponse();
            List<string> alerttimes = ConfigurationManager.AppSettings["TimesOfAlertDisplayHours"].Split(new char[] { ',' }).ToList();
            List<string> alerttimesMInutes = ConfigurationManager.AppSettings["AlertDisplayMinutes"].Split(new char[] { ',' }).ToList();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1" && alerttimes.Contains(DateTime.Now.ToString("hh")))
            {
                if (alerttimesMInutes.Contains(DateTime.Now.ToString("mm")))
                {
                    Res.Message = ConfigurationManager.AppSettings["AlertSiteHeader"];
                    Res.Alertheader = ConfigurationManager.AppSettings["AlertSiteMessage"];

                    Res.Code = "555";
                    
                }
            }
            else
            {
                Res.Code = "200";
            }
            return Json(Res, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult RegistrationPart2(IEnumerable<HttpPostedFileBase> files)
        {
            //  CommonMethods.AddtoLogFile("Benificiary Registration" + DateTime.Now);
            string pfstatus = Request.Form["CheckPfStatus"].ToString();
            string finalXml = "";

            RegistartionForUser reguser = new RegistartionForUser();

            string CreatedBy = Request.Form["Bensno"];
            string Bensno = Request.Form["Bensno"];

            RegResponse Res = new RegResponse();

            //List<string> alerttimes = ConfigurationManager.AppSettings["TimesOfAlertDisplayHours"].Split(new char[] { ',' }).ToList();
            //List<string> alerttimesMInutes = ConfigurationManager.AppSettings["AlertDisplayMinutes"].Split(new char[] { ',' }).ToList();
            //if (ConfigurationManager.AppSettings["IsEnableSiteAlert"]=="1" )
            //    //&& alerttimes.Contains(DateTime.Now.ToString("hh")))
            //{
            //    //if (alerttimesMInutes.Contains(DateTime.Now.ToString("mm")))
            //    //{
            //        Res.Message = ConfigurationManager.AppSettings["AlertSiteHeader"];
            //        Res.Alertheader = ConfigurationManager.AppSettings["AlertSiteMessage"];

            //        Res.Code = "555";
            //        return Json(Res, JsonRequestBehavior.AllowGet);
            //    //}
            //}

            try
            {

                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');

                var res = "";
                string RegType = Request.Form["RegistrationType"].ToString();
                string MobileNo = Request.Form["MobileNo"].ToString();

                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {

                        string FamCount = Request.Form["FamCount"].ToString();
                        int fccount = Convert.ToInt32(FamCount);
                        string DependentStatus = Request.Form["DependentStatus"].ToString();
                        int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
                        int checkcount = 0;
                        if (DependentStatus != "Yes")
                        {
                            DepUpLoadCount = 1;
                        }
                        if (DependentStatus == "Yes")
                        {
                            checkcount = DepUpLoadCount;
                        }
                        string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                        string NamCount = Request.Form["NamCount"].ToString();
                        int NaCount = Convert.ToInt32(NamCount);

                        string PhotoFilname = "";
                        string SigFilname = "";
                        string IdentityFilname = "";
                        string OtherDocFilename = "";
                        string BankFileName = "";
                        string FormName = "";
                        string AadharFile = "";
                        string SchemeCertFile = "";
                        string fileName = string.Empty;
                        string destinationPath = string.Empty;
                        List<string> FilePath = new List<string>();
                        List<string> NamesSave = new List<string>();
                        string Fone = string.Empty;
                        string Ftwo = string.Empty;
                        string Fthree = string.Empty;
                        string FFour = string.Empty;
                        string FFive = string.Empty;
                        string FSix = string.Empty;
                        var supportedTypes = new[] { "jpg", "jpeg", "png" };

                        //Check File Count
                        if (Request.Files.Count > 0)
                        {
                            for (int i = 0; i < Request.Files.Count; i++)
                            {
                                var file = Request.Files[i];
                                string SavePath = "";
                                //string SavePathServer = ConfigurationManager.AppSettings["NewFilesPath"].ToString();  //"172.18.117.227/ssyapp";
                                fileName = Path.GetFileName(Request.Files[i].FileName);

                                if (DepUpLoadCount > 0 && checkcount > 0)
                                {
                                    if (i == 8 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 9 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 10 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 11 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 12 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 13 && fileName == "")
                                    {
                                        checkcount = checkcount - 1;
                                    }

                                }
                                destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                                string bankfilename = destinationPath;
                                if (file != null && file.ContentLength > 0)
                                {
                                    var name = fileName;
                                    if (file.ContentLength < 2000000)
                                    {
                                        //var name = fileName;

                                        if (i == 0)
                                        {

                                            var fileExt = System.IO.Path.GetExtension(fileName).Replace(".", ""); ;
                                            if (supportedTypes.Contains((fileExt).ToLower()))
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + fileName);
                                                //SavePath = SavePathServer + "/UploadFiles/Photos/"+ Bensno + "_" + fileName;
                                                PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + fileName;
                                            }
                                            else
                                            {
                                                Res.Message = "Invalid Photo File Format";
                                                Res.Code = "999";

                                                return Json(Res, JsonRequestBehavior.AllowGet);
                                            }
                                        }
                                        if (i == 1)
                                        {
                                            var fileExt = System.IO.Path.GetExtension(fileName).Replace(".", ""); ;
                                            if (supportedTypes.Contains((fileExt).ToLower()))
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + fileName);
                                                //SavePath = SavePathServer + "/UploadFiles/Signatures/" + Bensno + "_" + fileName;
                                                SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + fileName;
                                            }
                                            else
                                            {
                                                Res.Message = "Invalid Signature File Format";
                                                Res.Code = "999";
                                                return Json(Res, JsonRequestBehavior.AllowGet);

                                            }
                                        }

                                        if (i == 2)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + fileName);
                                            //SavePath = SavePathServer + "/UploadFiles/Aadhar/" + Bensno + "_" + fileName;
                                            AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + fileName;
                                        }
                                        if (i == 3)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + fileName);
                                            //SavePath = SavePathServer + "/UploadFiles/IdProofs/" + Bensno + "_" + fileName;
                                            IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + fileName;
                                        }

                                        if (i == 4)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + fileName);
                                            //SavePath = SavePathServer + "/UploadFiles/SchemeCertificate/" + Bensno + "_" + fileName;
                                            SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + fileName;
                                        }
                                        if (i == 5)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + fileName);
                                            //SavePath = SavePathServer + "/UploadFiles/OtherDoc/" + Bensno + "_" + fileName;
                                            OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + fileName;
                                        }

                                        if (i == 6)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + fileName);
                                            //SavePath = SavePathServer + "/UploadFiles/BankPassBook/" + Bensno + "_" + fileName;
                                            BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + fileName;
                                        }

                                        if (i == 7)
                                        {
                                            SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + fileName);
                                            FormName = "/UploadFiles/Form/" + Bensno + "_" + fileName;

                                        }

                                        if (DepUpLoadCount > 0 && checkcount > 0)
                                        {
                                            if (i == 8)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 9)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 10)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 11)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 12)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                            if (i == 13)
                                            {
                                                SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + fileName);
                                                FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + fileName;
                                                checkcount = checkcount - 1;
                                            }
                                        }


                                        //Old Code
                                        //file.SaveAs(SavePath);
                                        //FilePath.Add(SavePath);
                                        //NamesSave.Add(name);

                                        //Compress File
                                        var fileExtbased = System.IO.Path.GetExtension(fileName).Replace(".", ""); ;


                                        //Checking file length and compress morethan 25 kb
                                        if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
                                        {
                                            //Cpmpress Files other than pdf
                                            if (supportedTypes.Contains((fileExtbased).ToLower()))
                                            {
                                                string filename = Path.GetFileName(Request.Files[i].FileName);
                                                string targetPath = (SavePath);
                                                Stream strm = Request.Files[i].InputStream;
                                                var targetFile = targetPath;
                                                //Based on scalefactor image size will vary
                                                CompressImage(CompressValue, strm, targetFile);
                                            }

                                            //Cpmpress Files  pdf

                                            else
                                            {
                                                CommonMethods.AddHelperLog(SavePath, "1 1 3", Bensno, "File Save");
                                                file.SaveAs(SavePath);
                                                CommonMethods.AddHelperLog(SavePath, "1 1 3", Bensno, "File Save done");
                                                FilePath.Add(SavePath);
                                                NamesSave.Add(name);
                                                //  CompressPdf(SavePath);

                                            }
                                        }

                                        else
                                        {
                                            CommonMethods.AddHelperLog(SavePath, "1 2 3 4 5 6", Bensno, "File Save");
                                            file.SaveAs(SavePath);
                                            CommonMethods.AddHelperLog(SavePath, "1 2 3 4 5 6", Bensno, "File Save done");
                                            FilePath.Add(SavePath);
                                            NamesSave.Add(name);
                                        }
                                    }
                                    else
                                    {
                                        Res.Message = "Invalid " + name + " File Length";
                                        Res.Code = "999";
                                        return Json(Res, JsonRequestBehavior.AllowGet);

                                    }
                                }
                            }
                        }

                        string BankAccNo = Request.Form["actnumber"] == null ? "" : Request.Form["actnumber"].ToString();
                        // Add bank details unique validations
                        if (Rb.CheckBankNumberExists(BankAccNo))
                        {
                            Res.Message = "This Bank Account Number Already Exists. Given Account Number is " + BankAccNo;
                            Res.Code = "999";
                            return Json(Res, JsonRequestBehavior.AllowGet);
                        }



                        string bankbranc = Request.Form["brnch"].ToString();
                        //BenDetails
                        string docxml = "<BenDetails>";

                        docxml += "<BankAccNo>" + BankAccNo + "</BankAccNo>";
                        docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
                        docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";

                        docxml += "<BenMonthlyIncom>" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom>";
                        docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
                        docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
                        docxml += "<BenBankName>" + Request.Form["bnk"].ToString() + "</BenBankName>";
                        docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
                        docxml += "<BenBankAccNo>" + Request.Form["actnumber"].ToString() + "</BenBankAccNo>";
                        docxml += "<BenBankIfscCode>" + Request.Form["ifsccode"].ToString() + "</BenBankIfscCode>";
                        docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
                        docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
                        docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
                        docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
                        docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
                        docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
                        docxml += "<BenForm>" + FormName + "</BenForm>";
                        docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
                        docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
                        docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";

                        docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";
                        docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
                        //docxml += "<BengaliName>" + bengname + "</BengaliName>";
                        docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
                        docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";


                        if (pfstatus == "0")
                        {
                            docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
                        }
                        else
                        {
                            docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
                        }


                        docxml += "<IsUnique>" + "P" + "</IsUnique>";
                        docxml += "<NoOfRecords>" + "" + "</NoOfRecords>";
                        docxml += "</BenDetails>";

                        string dependoc = "";
                        if (DependentStatus == "Yes")
                        {
                            string BenFamdet = Request.Form["BenFamdet"].ToString();
                            string[] BenFamdetwords = BenFamdet.Split('~');
                            dependoc = "<DependantDetails>";
                            for (int i = 0; i < fccount - 1; i++)
                            {
                                string famdet = BenFamdetwords[i];
                                string Filename = "";
                                if (i == 0)
                                {
                                    Filename = Fone;
                                }
                                if (i == 1)
                                {
                                    Filename = Ftwo;
                                }
                                if (i == 2)
                                {
                                    Filename = Fthree;
                                }
                                if (i == 3)
                                {
                                    Filename = FFour;
                                }
                                if (i == 4)
                                {
                                    Filename = FFive;
                                }
                                if (i == 5)
                                {
                                    Filename = FSix;
                                }
                                string upload = Filename;
                                string[] splitfamdet = famdet.Split('$');
                                string[] date = splitfamdet[4].Split('-');
                                DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                                string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                                dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                                dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                                dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                                dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                                dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                                dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                                dependoc += "<Dob>" + depdate + "</Dob>";
                                if (splitfamdet[8] != null)
                                    dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";
                                dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                            }
                            dependoc += "</DependantDetails>";
                        }
                        string Namdoc = "";
                        List<string> nomineebankacc_nos = new List<string>();
                        if (NomineeStatus == "Yes")
                        {
                            string Bennamedet = Request.Form["Bennamedet"].ToString();
                            string[] Bennamedetwords = Bennamedet.Split('~');
                            Namdoc = "<BenNomineeDtls>";

                            for (int i = 0; i < NaCount - 1; i++)
                            {
                                string namdet = Bennamedetwords[i];
                                string[] splitnamdet = namdet.Split('$');
                                string[] date = splitnamdet[4].Split('-');
                                DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                                string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                                Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                                Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                                Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                                Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                                Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                                Namdoc += "<BenNomineeBankName>" + splitnamdet[9] + "</BenNomineeBankName>";
                                Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                                Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                                Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                                Namdoc += "<Dob>" + depdate + "</Dob>";
                                Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId></BenNomineeDtl>";
                                nomineebankacc_nos.Add(splitnamdet[8]);
                            }
                            Namdoc += "</BenNomineeDtls>";
                        }


                        // check nominee bank account details

                        var errormessage_nomi_banacc = Rb.CheckBankNumbersExists(nomineebankacc_nos);
                        if (errormessage_nomi_banacc.Count > 0)
                        {
                            StringBuilder err_accno_Dup = new StringBuilder();
                            err_accno_Dup.AppendLine("Nominee Bank Account Numbers Already Exists !. Duplicate Account Numbers");
                            errormessage_nomi_banacc.ForEach((err) =>
                            {
                                err_accno_Dup.AppendLine(err);
                            });

                            Res.Message = err_accno_Dup.ToString();
                            Res.Code = "999";
                            return Json(Res, JsonRequestBehavior.AllowGet);
                        }
                        finalXml = "<Details>" + docxml + dependoc + Namdoc + "</Details>";

                        // CommonMethods.AddtoLogFileInfor("Benificiary Registration" + finalXml);
                        // string Tempbensno = Request.Form["TempBensno"].ToString();
                        Res = Rb.BenfiRegPart2(finalXml, CreatedBy, Bensno);


                        if (Res.Code == "000")
                        {
                            // CommonMethods.RegistrationLog(finalXml + " - " + CreatedBy + " - " + Bensno, true, "BenPart2");
                            try
                            {
                                string fatherFName = string.Empty, fatherMName = string.Empty, fatherLName = string.Empty, husbandFName = string.Empty, husbandMName = string.Empty, husbandLName = string.Empty;
                                var Result = HB.GetBeniDetailsByBenSno(Convert.ToInt64(Bensno));
                                if (!string.IsNullOrEmpty(Result.BenFatherFirstName))
                                {
                                    var fatherNM = Result.BenFatherFirstName.Split(' ');
                                    if (Result.BenFatherFirstName.Contains(""))
                                    {
                                        fatherFName = (fatherNM.Length != 0) ? fatherNM[0] : string.Empty;
                                        fatherMName = (fatherNM.Length != 1) ? fatherNM[1] : string.Empty;
                                        fatherLName = (fatherNM.Length > 2) ? fatherNM[2] : string.Empty;
                                    }

                                }
                                if (!string.IsNullOrEmpty(Result.HusbandName))
                                {
                                    var husbandNM = Result.HusbandName.Split(' ');
                                    if (Result.HusbandName.Contains(""))
                                    {
                                        husbandFName = (husbandNM.Length != 0) ? husbandNM[0] : string.Empty;
                                        husbandMName = (husbandNM.Length != 1) ? husbandNM[1] : string.Empty;
                                        husbandLName = (husbandNM.Length != 2) ? husbandNM[2] : string.Empty;
                                    }

                                }

                                if (Result != null)
                                {
                                    var depuben = new DeDupBenificiary()
                                    {
                                        AadharCard = Result.AadharCard,
                                        BankAccNo = Result.BankAccNo,
                                        BenBmc = Result.BenBmc,
                                        BenDistrict = Result.BenDistrict,
                                        BenDob = Result.BenDob,
                                        BenFatherFirstName = Result.BenFatherFirstName,
                                        BenMobileNo = Result.BenMobileNo,
                                        BenSno = Result.BenSno,
                                        BenSubDivision = Result.BenSubDivision,
                                        EpicCard = Result.EpicCard,
                                        FatherFName = fatherFName,
                                        FatherMName = fatherMName,
                                        FatherLName = fatherLName,
                                        HusbandFName = husbandFName,
                                        HusbandMName = husbandMName,
                                        HusbandLName = husbandLName,
                                        HusbandName = Result.HusbandName,
                                        Name = Result.BenFirstName + Result.BenMiddleName + Result.BenLastName,
                                        P2DOB = (string.IsNullOrEmpty(Convert.ToString(Result.BenDob)) ? 0 : 1),
                                        P3Husband = (string.IsNullOrEmpty(Result.HusbandName) ? 0 : 1),
                                        P4EpicCard = (string.IsNullOrEmpty(Result.EpicCard) ? 0 : 1),
                                        RegType = (RegType == "NewReg") ? "N" : "L",
                                        //RegType = Result.BeneType,
                                        SSI_Number = Result.SSI_Number
                                    };
                                    if (Convert.ToBoolean(ConfigurationManager.AppSettings["IsEnableRabbitMQ"]))
                                    {
                                        var factory = new ConnectionFactory() { HostName = ConfigurationManager.AppSettings["QDomain"], UserName = ConfigurationManager.AppSettings["QUserName"], Password = ConfigurationManager.AppSettings["QPassword"], VirtualHost = ConfigurationManager.AppSettings["QVhost"] };
                                        using (var connection = factory.CreateConnection())
                                        using (var channel = connection.CreateModel())
                                        {
                                            channel.QueueDeclare(queue: ConfigurationManager.AppSettings["QueueName"],
                                                                  durable: false,
                         exclusive: false,
                         autoDelete: false,
                         arguments: null);

                                            var data = JsonConvert.SerializeObject(depuben);
                                            var body = Encoding.UTF8.GetBytes(data);
                                            var properties = channel.CreateBasicProperties();
                                            properties.SetPersistent(false);
                                            byte[] messagebuffer = Encoding.Default.GetBytes(data);
                                            channel.BasicPublish("", ConfigurationManager.AppSettings["QueueName"], properties, messagebuffer);

                                            //channel.BasicPublish(exchange: "",
                                            //                     routingKey: ConfigurationManager.AppSettings["QueueName"]+Guid.NewGuid(),

                                            //                     basicProperties: null,
                                            //                     body: body);
                                        }
                                    }
                                }
                            }
                            catch (Exception ex)
                            {

                                CommonMethods.LogError("Queue Error " + ex.Message, "Bensno : " + Convert.ToString(Bensno), Convert.ToString(ex.InnerException), "RegistrationPart2", "RegistrationController");
                            }


                            if (RegType.Trim() != "NewReg")
                            {

                                string Message = "Your application form is submitted successfully and you are registered now! Your login ID is: Aadhar Number/Epic Card Number";
                                CommonMethods.NewSms(MobileNo, Message, 0, "Bene Registration Part2", "Bene", Bensno);

                            }
                        }

                        //                  if (Res.Code == "000")
                        //{
                        //	if (RegType.Trim() != "NewReg")
                        //	{
                        //		string Message = "Your application form is submitted successfully and you are registered now! Your login ID is: Aadhar Number/Epic Card Number";
                        //		CommonMethods.NewSms(MobileNo, Message, 0, "Bene Registration Part2", "Bene", Bensno);
                        //	}
                        //}
                        transaction.Commit();
                    }
                    catch (Exception e)
                    {

                        Res.Message = "Part 2 registration failed. Can you please contact ssy support team . Email : ssy.support@raminfo.com . ";// Message;
                        Res.Code = "999";
                        CommonMethods.RegistrationLog("Beni Registration Part-II Submit Error due to : " + finalXml + "---- Bensno : " + Convert.ToString(Bensno), false, Convert.ToString(e.InnerException) + " RegistrationPart2 BenPart2 - catch 1");
                        CommonMethods.LogError("Beni Registration Part-II Submit Error due to : " + e.Message, "Bensno : " + Convert.ToString(Bensno), Convert.ToString(e.InnerException), "RegistrationPart2", "RegistrationController");
                        transaction.Rollback();
                    }
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Res.Message = "Part 2 registration failed. Can you please contact ssy support team . Email : ssy.support@raminfo.com . ";// Message;
                Res.Code = "999";
                CommonMethods.RegistrationLog("Beni Registration Part-II Submit Error due to : " + ex.InnerException + " - " + CreatedBy + " - " + Bensno, false, "BenPart2  catch 2 Main");
                CommonMethods.LogError("Beni Registration Part-II Submit Error due to : " + ex.Message, "Bensno : " + Convert.ToString(Bensno), Convert.ToString(ex.InnerException), "RegistrationPart2", "RegistrationController");
                return Json(Res, JsonRequestBehavior.AllowGet);

            }
        }

        #endregion

        #region
        public ActionResult BenificiaryReg()
        {

            return View();
        }
        #endregion



        #region upload photo Sign

        public ActionResult UploadPhotoSign(string Bensno = "", string CreatedBy = "")
        {
            ViewBag.BenSno = Bensno;
            ViewBag.CreatedBy = CreatedBy;
            return View();
        }
        #endregion

        #region upload photo Sign

        public ActionResult UploadPhotoSignfromBeni(string Bensno = "", string CreatedBy = "", string User = "")
        {
            ViewBag.BenSno = Bensno;
            ViewBag.CreatedBy = CreatedBy;
            ViewBag.UserType = User;
            return View();
        }
        #endregion

        #region
        public ActionResult SubmitPhotoSign(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "555";
                return RedirectToAction("StorageIssue", "Registration");
            }
            RegResponse Res = new RegResponse();
            try
            {

                string Compression = ConfigurationManager.AppSettings["Compression"].ToString();
                string FolderPath = ConfigurationManager.AppSettings["FolderPath"].ToString();

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                var supportedTypes = new[] { "jpg", "jpeg", "png" };

                string BenSno = Request.Form["BenSno"].ToString();

                //Check File Count
                if (Request.Files.Count > 0)
                {
                    string PhotoFilname = "";
                    string SigFilname = "";
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        List<string> NamesSave = new List<string>();
                        destinationPath = FolderPath;
                        // string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {
                            var name = fileName;
                            if (file.ContentLength < 2000000)
                            {

                                if (i == 0)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), BenSno + "_" + fileName);
                                        //   SavePath = Path.Combine((destinationPath + "UploadFiles/Photos/"), BenSno + "_" + fileName);
                                        PhotoFilname = "/UploadFiles/Photos/" + BenSno + "_" + fileName;


                                    }
                                    else
                                    {
                                        Res.Message = "Invalid Photo File Format";
                                        Res.Code = "999";

                                        return Json(Res, JsonRequestBehavior.AllowGet);

                                    }
                                }
                                if (i == 1)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), BenSno + "_" + fileName);

                                        //     SavePath = Path.Combine((destinationPath + "UploadFiles/Signatures/"), BenSno + "_" + fileName);
                                        SigFilname = "/UploadFiles/Aadhar/" + BenSno + "_" + fileName;
                                    }
                                    else
                                    {
                                        Res.Message = "Invalid Signature File Format";
                                        Res.Code = "999";
                                        return Json(Res, JsonRequestBehavior.AllowGet);

                                    }
                                }

                                var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


                                //Checking file length and compress morethan 25 kb
                                if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
                                {
                                    //Cpmpress Files other than pdf
                                    if (supportedTypes.Contains((fileExtbased).ToLower()))
                                    {
                                        string filename = Path.GetFileName(Request.Files[i].FileName);
                                        string targetPath = (SavePath);
                                        Stream strm = Request.Files[i].InputStream;
                                        var targetFile = targetPath;
                                        //Based on scalefactor image size will vary
                                        CompressImage(CompressValue, strm, targetFile);
                                    }

                                    //Cpmpress Files  pdf



                                    else
                                    {
                                        CommonMethods.AddHelperLog(SavePath, "1 2 3 4 555", "", "File Delete Start");
                                        System.IO.File.Delete(SavePath);
                                        file.SaveAs(SavePath);
                                        CommonMethods.AddHelperLog(SavePath, "1 2 3 4 555", "", "File Delete done");
                                        FilePath.Add(SavePath);
                                        NamesSave.Add(name);
                                        CompressPdf(SavePath);

                                    }
                                }

                                else
                                {
                                    CommonMethods.AddHelperLog(SavePath, "1 2 3 4 5 666", "", "File delete start");
                                    System.IO.File.Delete(SavePath);
                                    CommonMethods.AddHelperLog(SavePath, "1 2 3 4 5 666", "", "File delete done");
                                    file.SaveAs(SavePath);
                                    FilePath.Add(SavePath);
                                    NamesSave.Add(name);
                                }




                            }

                            else
                            {
                                Res.Message = "Invalid  File Length";
                                Res.Code = "999";
                                return Json(Res, JsonRequestBehavior.AllowGet);
                            }

                        }

                        else
                        {
                            Res.Message = "No Documents Uploaded";
                            Res.Code = "999";
                            return Json(Res, JsonRequestBehavior.AllowGet);
                        }




                    }

                    // var Response = Rb.SavePhotoSign(PhotoFilname, SigFilname, BenSno);
                    Res.Message = "Success";
                    Res.Code = "000";
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }

                else
                {
                    Res.Message = "No Documents Uploaded";
                    Res.Code = "999";
                    return Json(Res, JsonRequestBehavior.AllowGet);
                }

            }

            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni PhotoSignUpload Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion



        #region Existing User update  view
        //Author - Sunitha

        public ActionResult NewExistngUserEdit(string ID = "")
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userType = Convert.ToString(Session["UserType"]);

                //if (Session["DeptUserid"] != null)
                // {
                //   string Userid = Session["DeptUserid"].ToString();
                ViewBag.Userid = ID;
                // }
                //else
                // {
                //    ViewBag.Userid = "1";
                //}
                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();

                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetTotalBranch();
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetTotalblocks();
                ViewBag.Message = "";
                ViewBag.RegistrationType = Session["RegistrationType"].ToString();
                return View(reguser);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                return View(reguser);
            }

        }
        #endregion

        #region
        public ActionResult Instructions(string Id = "")
        {
            ViewBag.Id = Id;
            return View();
        }
        #endregion

        #region
        public ActionResult PrintFrom(string Bensno = "5845907")
        {
            ViewBag.Bensno = Bensno;

            var Res = HB.GetBeniDetailsByBenSno(Convert.ToInt64(Bensno));
            ViewBag.SSIN = Res.SSI_Number;
            ViewBag.Name = Res.BenFirstName + " " + Res.BenMiddleName + " " + Res.BenLastName;

            return View();
        }
        #endregion

        #region
        public ActionResult GetblocksJSON(int ID, string typedata)
        {
            try
            {
                if (typedata != "0")
                {
                    typedata = typedata.Substring(2, typedata.Length - 2);
                }

                return Json(HB.Getblocks(ID, typedata), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion

        #region compress file
        private void CompressImage(double scaleFactor, Stream sourcePath, string targetPath)
        {
            CommonMethods.AddtoLogFile("Compression" + DateTime.Now + "sourcePath : " + sourcePath);
            using (var image = System.Drawing.Image.FromStream(sourcePath))
            {
                var newWidth = (int)(image.Width * scaleFactor);
                var newHeight = (int)(image.Height * scaleFactor);
                var thumbnailImg = new System.Drawing.Bitmap(newWidth, newHeight);
                var thumbGraph = Graphics.FromImage(thumbnailImg);
                thumbGraph.CompositingQuality = CompositingQuality.HighQuality;
                thumbGraph.SmoothingMode = SmoothingMode.HighQuality;
                thumbGraph.InterpolationMode = InterpolationMode.HighQualityBicubic;
                var imageRectangle = new System.Drawing.Rectangle(0, 0, newWidth, newHeight);
                thumbGraph.DrawImage(image, imageRectangle);
                thumbnailImg.Save(targetPath, image.RawFormat);
            }
        }

        #endregion

        #region
        private void CompressPdf(string SavePath)
        {
            PdfDocument doc = new PdfDocument(SavePath);

            doc.FileInfo.IncrementalUpdate = false;

            foreach (PdfPageBase page in doc.Pages)
            {
                //if (page != null)
                //{
                //    if (page.ImagesInfo != null)
                //    {
                //        foreach (Spire.Pdf.Exporting.PdfImageInfo info in page.ImagesInfo)
                //        {
                //            page.TryCompressImage(info.Index);
                //        }
                //    }
                //}

                System.Drawing.Image[] images = page.ExtractImages();
                if (images != null && images.Length > 0)
                {
                    for (int j = 0; j < images.Length; j++)
                    {
                        System.Drawing.Image image = images[j];
                        PdfBitmap bp = new PdfBitmap(image);
                        bp.Quality = 20;
                        page.ReplaceImage(j, bp);
                    }
                }
            }

            doc.SaveToFile(SavePath);
        }
        #endregion

        //Deletion of nominee and dependent
        #region
        public ActionResult DelteNomDep()
        {
            string UserId = Convert.ToString(Session["Userid"]);
            if (string.IsNullOrEmpty(UserId))
                return RedirectToAction("Index", "Home");
            ViewBag.UserId = UserId;
            ViewBag.Message = "";
            return View();

        }
        #endregion

        #region Dependent Deletion
        public ActionResult DeleteDependent(string Id, string Remarks, int Type, Int64 DelBy)
        {
            RequestResponse Result = new RequestResponse();
            try
            {
                var res = Rb.DeleteDependent(Id, Remarks, Type, DelBy);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Dependent Deletion" + DateTime.Now + "Error : " + Message);
                Result.Message = Message;
                Result.Code = "999";
                return Json(Result, JsonRequestBehavior.AllowGet);
            }


        }
        #endregion

        #region Nominee Deletion
        public ActionResult DeleteNominee(string Id, string Remarks, int Type, Int64 DelBy)
        {
            RequestResponse Result = new RequestResponse();
            try
            {
                var res = Rb.DeleteNominee(Id, Remarks, Type, DelBy);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Nominee Deletion" + DateTime.Now + "Error : " + Message);
                Result.Message = Message;
                Result.Code = "999";
                return Json(Result, JsonRequestBehavior.AllowGet);
            }


        }
        #endregion

        #region update Dependent Delete Request

        public ActionResult UpdateDepDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {
            RequestResponse Result = new RequestResponse();
            try
            {
                var res = Rb.UpdateDepDelRequest(RequestId, Status, Remarks, UniqueId, VerifiedBy);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("UpdateDepDelRequest" + DateTime.Now + "Error : " + Message);
                Result.Message = Message;
                Result.Code = "999";
                return Json(Result, JsonRequestBehavior.AllowGet);
            }

        }

        #endregion

        #region update Nominee Delete Request

        public ActionResult UpdateNomineeDelRequest(Int64 RequestId, int Status, string Remarks, Int64 UniqueId, int VerifiedBy)
        {
            RequestResponse Result = new RequestResponse();
            try
            {
                var res = Rb.UpdateNomineeDelRequest(RequestId, Status, Remarks, UniqueId, VerifiedBy);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("UpdateNomineeDelRequest" + DateTime.Now + "Error : " + Message);
                Result.Message = Message;
                Result.Code = "999";
                return Json(Result, JsonRequestBehavior.AllowGet);
            }

        }

        #endregion

        #region Get Status of benificiary request

        public ActionResult GetStatusRequests(string Bensno)
        {
            try
            {
                var res = Rb.GetStatusRequests(Convert.ToInt64(Bensno));

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("GetStatusRequests" + DateTime.Now + "Error : " + Message);

                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        //Edit Bank details by benificiary
        public ActionResult EditBankDetails()
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                string StatusName = "";
                if (beniDet.Status == 0)
                {
                    StatusName = "Pending";
                }
                if (beniDet.Status == 1)
                {
                    StatusName = "Approved";
                }
                if (beniDet.Status == 2)
                {
                    StatusName = "Rejected";
                }
                if (beniDet.Status == 3)
                {
                    StatusName = "Sent back";
                }
                ViewBag.StatusName = StatusName;

                ViewBag.Count = HB.GetBankPendingCount(userId);
                ViewBag.Bensno = userId;
                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Edit Bank details by benificiary Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditBankDetails", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }

        }
        [HttpPost]
        public ActionResult SubmitBankDetails(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "000";
                return Json(Ress, JsonRequestBehavior.AllowGet);
            }
            RequestResponse Res = new RequestResponse();
            try
            {

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string BankPassBookFileName = string.Empty;
                string ipAddress = Helper.GetIPAddress();

                string BenSno = Request.Form["Bensno"].ToString();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                if (Request.Files.Count > 0)
                {
                    var name = fileName;
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), BenSno + "_" + Tdate + "_" + fileName);
                        BankPassBookFileName = "/UploadFiles/BankPassBook/" + BenSno + "_" + Tdate + "_" + fileName;

                        file.SaveAs(SavePath);
                        FilePath.Add(SavePath);
                        NamesSave.Add(name);

                    }
                }

                string BankAccNo = Request.Form["actnumber"] == null ? "" : Request.Form["actnumber"].ToString();

                string BankDistrict = Request.Form["disid"].ToString();
                string BankLoca = Request.Form["locnumber"].ToString();
                string bnk = Request.Form["bnk"].ToString();

                string bankbranc = Request.Form["brnch"].ToString();

                string ifsccode = Request.Form["ifsccode"].ToString();

                string txtreason = Request.Form["txtreason"].ToString();
                if (Rb.CheckBankNumberExists(BankAccNo))
                {
                    return Json(new { Message = "Bank Account Number Already Exists !. Given Account Number = " + BankAccNo, Code = 998 }, JsonRequestBehavior.AllowGet);
                }

                Res = Rb.SubmitBankDetails(BenSno, BankDistrict, BankLoca, bnk, bankbranc, ifsccode, txtreason, BankPassBookFileName, BankAccNo, BenSno, ipAddress);
                return Json(Res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni Bank Details Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

        }

        //Edit Name by benificiary
        public ActionResult EditBenePersonalDetails()
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                var ClaimCount = HB.GetClaimCount(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                string StatusName = "";
                if (beniDet.Status == 0)
                {
                    StatusName = "Pending";
                }
                if (beniDet.Status == 1)
                {
                    StatusName = "Approved";
                }
                if (beniDet.Status == 2)
                {
                    StatusName = "Rejected";
                }
                if (beniDet.Status == 3)
                {
                    StatusName = "Sent back";
                }
                ViewBag.StatusName = StatusName;
                ViewBag.Count = HB.GetPersonalNameCount(userId);
                ViewBag.Bensno = userId;
                ViewBag.ClaimCount = ClaimCount;
                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                reguser.FirstName = beniDet.BenFirstName;
                reguser.LastName = beniDet.BenLastName;
                reguser.Middlename = beniDet.BenMiddleName;
                reguser.BDob = (beniDet.BenDob).ToString().Replace("12:00:00 AM", "");

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Edit Name by benificiary Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditBenePersonalDetails", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }

        }

        [HttpPost]
        public ActionResult SubmitBenePersonalDetails(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "000";
                return Json(Ress, JsonRequestBehavior.AllowGet);
            }
            RequestResponse Res = new RequestResponse();
            try
            {

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string BankPassBookFileName = string.Empty;
                string ipAddress = Helper.GetIPAddress();
                string BenSno = Request.Form["Bensno"].ToString();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string NameRelatedDoc = "";
                string DOBRelatedDoc = "";
                string NameRelatedDocExtension = "";
                string DOBRelatedDocExtension = "";

                if (Request.Files.Count > 0)
                {
                    var name = fileName;
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        var fileNameExt = file.FileName.Split('.');
                        var fileNameExt1 = Path.GetExtension(Request.Files[i].FileName);
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        //Commented by mahender to save in file server
                        //SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), BenSno + "_" + Tdate + "_" + fileName);
                        //BankPassBookFileName = "/UploadFiles/IdProofs" + BenSno + "_" + Tdate + "_" + fileName;

                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/NameChange/"), BenSno + "_" + Tdate + "_" + fileName);
                        NameRelatedDoc = "/UploadFiles/NameChange/" + BenSno + "_" + Tdate + "_" + fileName;

                        file.SaveAs(SavePath);
                        FilePath.Add(SavePath);
                        NamesSave.Add(name);

                        //file.SaveAs(SavePath);
                        //FilePath.Add(SavePath);
                        //NamesSave.Add(name);

                        //Commented by Mahender
                        //byte[] data;
                        //using (Stream inputStream = file.InputStream)
                        //{
                        //	MemoryStream memoryStream = inputStream as MemoryStream;
                        //	if (memoryStream == null)
                        //	{
                        //		memoryStream = new MemoryStream();
                        //		inputStream.CopyTo(memoryStream);
                        //	}
                        //	data = memoryStream.ToArray();
                        //}

                        //byte[] imageBytes = file.ToArray();

                        if (i == 0)
                        {
                            //Commented by Mahender
                            //NameRelatedDoc = Convert.ToBase64String(data);
                            NameRelatedDocExtension = fileNameExt[1];
                        }
                        else
                        {
                            //Commented by Mahender
                            //DOBRelatedDoc = Convert.ToBase64String(data);
                            DOBRelatedDocExtension = fileNameExt[1];
                        }
                    }
                }

                string Benfirstname = Request.Form["FirstName"].ToString();
                string BenLastname = Request.Form["LastName"].ToString();
                string BenMiddlename = Request.Form["Middlename"].ToString();

                DateTime BenDOB = DateTime.Now;

                Res = Rb.SubmitBenePersonalDetails(BenSno, Benfirstname, BenLastname, BenMiddlename, BenDOB, NameRelatedDoc, DOBRelatedDoc, NameRelatedDocExtension, DOBRelatedDocExtension, "1", BenSno, ipAddress);
                return Json(Res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni Bank Details Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

        }

        //Edit Name by benificiary
        public ActionResult EditBeneHusbandDetails()
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                var ClaimCount = HB.GetClaimCount(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                string StatusName = "";
                if (beniDet.Status == 0)
                {
                    StatusName = "Pending";
                }
                if (beniDet.Status == 1)
                {
                    StatusName = "Approved";
                }
                if (beniDet.Status == 2)
                {
                    StatusName = "Rejected";
                }
                if (beniDet.Status == 3)
                {
                    StatusName = "Sent back";
                }
                ViewBag.StatusName = StatusName;
                ViewBag.Count = HB.GetPersonalHusbandCount(userId);
                ViewBag.Bensno = userId;
                ViewBag.ClaimCount = ClaimCount;
                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                reguser.FirstName = beniDet.BenFirstName;
                reguser.LastName = beniDet.BenLastName;
                reguser.Middlename = beniDet.BenMiddleName;
                reguser.BDob = (beniDet.BenDob).ToString().Replace("12:00:00 AM", "");
                reguser.HusbandName = beniDet.HusbandName;
                ViewBag.Gender = beniDet.BenGender;

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Edit Bene Husband Details Error due to : " + ex.Message, "userId : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditBeneHusbandDetails", "RegistrationController");

                return RedirectToAction("Index", "Home");
            }

        }

        [HttpPost]
        public ActionResult SubmitBeneHusbandDetails(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "000";
                return Json(Ress, JsonRequestBehavior.AllowGet);
            }
            RequestResponse Res = new RequestResponse();
            try
            {

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string BankPassBookFileName = string.Empty;
                string ipAddress = Helper.GetIPAddress();

                string BenSno = Request.Form["Bensno"].ToString();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string NameRelatedDoc = "";
                string DOBRelatedDoc = "";
                string NameRelatedDocExtension = "";
                string DOBRelatedDocExtension = "";


                if (Request.Files.Count > 0)
                {
                    var name = fileName;
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        var fileNameExt = file.FileName.Split('.');
                        var fileNameExt1 = Path.GetExtension(Request.Files[i].FileName);
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        //Commented by mahender to save in file server
                        //SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), BenSno + "_" + Tdate + "_" + fileName);
                        //BankPassBookFileName = "/UploadFiles/IdProofs" + BenSno + "_" + Tdate + "_" + fileName;

                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/HusbandNameChange/"), BenSno + "_" + Tdate + "_" + fileName);
                        NameRelatedDoc = "/UploadFiles/HusbandNameChange/" + BenSno + "_" + Tdate + "_" + fileName;

                        file.SaveAs(SavePath);
                        FilePath.Add(SavePath);
                        NamesSave.Add(name);

                        //file.SaveAs(SavePath);
                        //FilePath.Add(SavePath);
                        //NamesSave.Add(name);

                        //Commented by Mahender
                        //byte[] data;
                        //using (Stream inputStream = file.InputStream)
                        //{
                        //	MemoryStream memoryStream = inputStream as MemoryStream;
                        //	if (memoryStream == null)
                        //	{
                        //		memoryStream = new MemoryStream();
                        //		inputStream.CopyTo(memoryStream);
                        //	}
                        //	data = memoryStream.ToArray();
                        //}

                        //byte[] imageBytes = file.ToArray();

                        if (i == 0)
                        {
                            //Commented by Mahender
                            //NameRelatedDoc = Convert.ToBase64String(data);
                            NameRelatedDocExtension = fileNameExt[1];
                        }
                        else
                        {
                            //Commented by Mahender
                            //DOBRelatedDoc = Convert.ToBase64String(data);
                            DOBRelatedDocExtension = fileNameExt[1];
                        }
                    }
                }

                string Benfirstname = Request.Form["HusbandName"].ToString();
                string BenLastname = "";
                string BenMiddlename = "";

                DateTime BenDOB = DateTime.Now;

                Res = Rb.SubmitBenePersonalDetails(BenSno, Benfirstname, BenLastname, BenMiddlename, BenDOB, NameRelatedDoc, DOBRelatedDoc, NameRelatedDocExtension, DOBRelatedDocExtension, "3", BenSno, ipAddress);
                return Json(Res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni Husband Details Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult EditBeneDOBDetails()
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                var ClaimCount = HB.GetClaimCount(Convert.ToInt64(userId));

                string StatusName = "";
                if (beniDet.Status == 0)
                {
                    StatusName = "Pending";
                }
                if (beniDet.Status == 1)
                {
                    StatusName = "Approved";
                }
                if (beniDet.Status == 2)
                {
                    StatusName = "Rejected";
                }
                if (beniDet.Status == 3)
                {
                    StatusName = "Sent back";
                }
                ViewBag.StatusName = StatusName;
                ViewBag.Count = HB.GetPersonalDOBCount(userId);
                ViewBag.Bensno = userId;
                ViewBag.ClaimCount = ClaimCount;
                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                reguser.FirstName = beniDet.BenFirstName;
                reguser.LastName = beniDet.BenLastName;
                reguser.Middlename = beniDet.BenMiddleName;
                reguser.BDob = (beniDet.BenDob).ToString().Replace("12:00:00 AM", "");

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Beneficiary Edit DOB Details Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditBeneDOBDetails", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }

        }
        [HttpPost]
        public ActionResult SubmitBeneDOBDetails(IEnumerable<HttpPostedFileBase> files)
        {

            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "000";
                return Json(Ress, JsonRequestBehavior.AllowGet);
            }
            RequestResponse Res = new RequestResponse();
            try
            {

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string BankPassBookFileName = string.Empty;
                string ipAddress = Helper.GetIPAddress();

                string BenSno = Request.Form["Bensno"].ToString();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string NameRelatedDoc = "";
                string DOBRelatedDoc = "";
                string NameRelatedDocExtension = "";
                string DOBRelatedDocExtension = "";

                if (Request.Files.Count > 0)
                {
                    var name = fileName;
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        var fileNameExt = file.FileName.Split('.');

                        var fileNameExt1 = Path.GetExtension(Request.Files[i].FileName);
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        //Commented by Mahender
                        //SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), BenSno + "_" + Tdate + "_" + fileName);
                        //BankPassBookFileName = "/UploadFiles/IdProofs" + BenSno + "_" + Tdate + "_" + fileName;


                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DOBChange/"), BenSno + "_" + Tdate + "_" + fileName);
                        DOBRelatedDoc = "/UploadFiles/DOBChange/" + BenSno + "_" + Tdate + "_" + fileName;

                        file.SaveAs(SavePath);
                        FilePath.Add(SavePath);
                        NamesSave.Add(name);

                        //file.SaveAs(SavePath);
                        //FilePath.Add(SavePath);
                        //NamesSave.Add(name);

                        //Commented by Mahender
                        //byte[] data;
                        //using (Stream inputStream = file.InputStream)
                        //{
                        //	MemoryStream memoryStream = inputStream as MemoryStream;
                        //	if (memoryStream == null)
                        //	{
                        //		memoryStream = new MemoryStream();
                        //		inputStream.CopyTo(memoryStream);
                        //	}
                        //	data = memoryStream.ToArray();
                        //}
                        //byte[] imageBytes = file.ToArray();

                        if (i == 0)
                        {
                            //DOBRelatedDoc = Convert.ToBase64String(data);
                            DOBRelatedDocExtension = fileNameExt[1];
                        }
                        //else
                        //{
                        //	DOBRelatedDoc = Convert.ToBase64String(data);
                        //	DOBRelatedDocExtension = fileNameExt[1];
                        //}
                    }
                }

                string Benfirstname = Convert.ToString(Request.Form["FirstName"]);
                string BenLastname = Convert.ToString(Request.Form["LastName"]);
                string BenMiddlename = Convert.ToString(Request.Form["Middlename"]);
                string[] dateformat = new string[3];
                if (Request.Form["BDob"] != null)
                {
                    dateformat = Request.Form["BDob"].Split('/');
                }

                DateTime BenDOB = Convert.ToDateTime(dateformat[2] + '/' + dateformat[1] + '/' + dateformat[0]);

                Res = Rb.SubmitBenePersonalDetails(BenSno, Benfirstname, BenLastname, BenMiddlename, BenDOB, NameRelatedDoc, DOBRelatedDoc, NameRelatedDocExtension, DOBRelatedDocExtension, "2", BenSno, ipAddress);
                return Json(Res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni Bank Details Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

        }
        #region Edit Bene Address Details

        public ActionResult EditBeneAddressDetails()
        {

            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                string StatusName = "";
                if (beniDet.Status == 0)
                {
                    StatusName = "Pending";
                }
                if (beniDet.Status == 1)
                {
                    StatusName = "Approved";
                }
                if (beniDet.Status == 2)
                {
                    StatusName = "Rejected";
                }
                if (beniDet.Status == 3)
                {
                    StatusName = "Sent back";
                }
                ViewBag.StatusName = StatusName;
                ViewBag.Count = HB.GetBankPendingCount(userId); //HB.GetBankPendingCount(userId); //commented by mahender 04-12-2019 to change the condtion 
                ViewBag.Bensno = userId;
                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                //reguser.FirstName = beniDet.BenFirstName;
                //reguser.LastName = beniDet.BenLastName;
                //reguser.Middlename = beniDet.BenMiddleName;
                //reguser.dob = (beniDet.BenDob).ToString().Replace("12:00:00 AM", "");

                reguser.district = HB.GetDistrict();
                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                ViewBag.Message = "";

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Edit Bene Address Details Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditBeneAddressDetails", "RegistrationController");
                return RedirectToAction("Dashboard", "Home");
            }

        }
        [HttpPost]
        public ActionResult SubmitBeneAddressDetails(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "000";
                return Json(Ress, JsonRequestBehavior.AllowGet);
            }

            RequestResponse Res = new RequestResponse();
            try
            {

                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string BankPassBookFileName = string.Empty;
                string ipAddress = Helper.GetIPAddress();

                string BenSno = Request.Form["Bensno"].ToString();
                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string NameRelatedDoc = "";
                string AddressRelatedDoc = "";
                string NameRelatedDocExtension = "";
                string AddressRelatedDocExtension = "";
                string[] PermanentAddress;
                string[] PresentAddress;
                PermanentAddress = Request.Form["BenPerAddress"].ToString().Split('$');
                PresentAddress = Request.Form["BenPreAddress"].ToString().Split('$');
                if (Request.Files.Count > 0)
                {
                    var name = fileName;
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        var fileNameExt = file.FileName.Split('.');
                        var fileNameExt1 = Path.GetExtension(Request.Files[i].FileName);
                        fileName = Path.GetFileName(Request.Files[i].FileName);

                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        //SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), BenSno + "_" + Tdate + "_" + fileName);
                        //BankPassBookFileName = "/UploadFiles/IdProofs" + BenSno + "_" + Tdate + "_" + fileName;

                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/AddressChange/"), BenSno + "_" + Tdate + "_" + fileName);
                        AddressRelatedDoc = "/UploadFiles/AddressChange/" + BenSno + "_" + Tdate + "_" + fileName;

                        file.SaveAs(SavePath);
                        FilePath.Add(SavePath);
                        NamesSave.Add(name);
                        //byte[] data;
                        //using (Stream inputStream = file.InputStream)
                        //{
                        //	MemoryStream memoryStream = inputStream as MemoryStream;
                        //	if (memoryStream == null)
                        //	{
                        //		memoryStream = new MemoryStream();
                        //		inputStream.CopyTo(memoryStream);
                        //	}
                        //	data = memoryStream.ToArray();
                        //}
                        //byte[] imageBytes = file.ToArray();
                        if (i == 0)
                        {
                            //AddressRelatedDoc = Convert.ToBase64String(data);
                            AddressRelatedDocExtension = fileNameExt[1];
                        }
                        //else
                        //{
                        //	DOBRelatedDoc = Convert.ToBase64String(data);
                        //	DOBRelatedDocExtension = fileNameExt[1];
                        //}
                    }
                }

                string perDIstID = PermanentAddress[2];
                string perSubDivID = PermanentAddress[3];
                string perBMC = PermanentAddress[4];
                string perBlock = PermanentAddress[5];
                string perPSID = PermanentAddress[6];
                string perPOID = PermanentAddress[7];
                string perPinCode = PermanentAddress[8];
                string perWard = PermanentAddress[9];
                string perVlg = PermanentAddress[10];

                string preDIstID = PresentAddress[2];
                string preSubDivID = PresentAddress[3];
                string preBMC = PresentAddress[4];
                string preBlock = PresentAddress[5];
                string prePSID = PresentAddress[6];
                string prePOID = PresentAddress[7];
                string prePinCode = PresentAddress[8];
                string preWard = PresentAddress[9];
                string preVlg = PresentAddress[10];
                string proofExtension = AddressRelatedDocExtension;
                string proofString = AddressRelatedDoc;
                //string[] dateformat = new string[3];
                //if (Request.Form["dob"] != null)
                //{
                //	dateformat = Request.Form["dob"].Split('/');
                //}
                //DateTime BenDOB = Convert.ToDateTime(dateformat[1] + '/' + dateformat[0] + '/' + dateformat[2]);

                Res = Rb.SubmitBeneAddressDetails(BenSno, perDIstID, perSubDivID, perBMC, perBlock, perPSID, perPOID, perPinCode, perWard, perVlg, preDIstID, preSubDivID
                    , preBMC, preBlock, prePSID, prePOID, prePinCode, preWard, preVlg, BenSno, proofExtension, proofString, BenSno, ipAddress);
                return Json(Res, JsonRequestBehavior.AllowGet);

            }

            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);

                CommonMethods.AddtoLogFile("Beni Address Details Submit" + DateTime.Now + "Error : " + Message);
                Res.Message = Message;
                Res.Code = "999";
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult GetBeneAddressDetEditHistory(string benSno)
        {
            try
            {
                var res = Rb.GetBeneAddressDetEditHistory(benSno);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GetBeneAddressDetEditHistory " + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        #region additional details for construction worker  matching in e district
        public ActionResult ConstructionExiAdditionalDet(string ID = "")
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    ViewBag.CRegId = ID;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region additional details for construction worker  new benificiary
        public ActionResult ConstructionNewAdditionalDet()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }


        [HttpPost]
        public ActionResult ConstructionNewAdditionalDet(IEnumerable<HttpPostedFileBase> files)
        {
            RequestResponse Res = new RequestResponse();
            string userId = Convert.ToString(Session["Userid"]);

            string txtEmployerName = Request.Form["txtEmployerName"];
            string fileName = string.Empty;
            string destinationPath = string.Empty;
            List<string> FilePath = new List<string>();
            List<string> NamesSave = new List<string>();
            string imgEligibility = string.Empty;
            string imgEligibilityExt = string.Empty;
            string imgStatutory = string.Empty;
            string imgStatutoryExt = string.Empty;
            string imgCertificateIdentity = string.Empty;
            string imgCertificateIdentityExt = string.Empty;

            if (Request.Files.Count > 0)
            {
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    var file = Request.Files[i];
                    string SavePath = "";
                    fileName = Path.GetFileName(Request.Files[i].FileName);


                    destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                    string bankfilename = destinationPath;
                    if (file != null && file.ContentLength > 0)
                    {
                        var name = fileName;
                        if (file.ContentLength < 2000000)
                        {

                            if (i == 0)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgEligibilityExt = Path.GetExtension(Request.Files[i].FileName);
                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgEligibility = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 1)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgStatutoryExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgStatutory = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 2)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgCertificateIdentityExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgCertificateIdentity = Convert.ToBase64String(thePictureAsBytes);
                            }
                        }
                    }
                }

                string employerName = Request.Form["txtEmployerName"].ToString();
                string ruralUrban = Request.Form["ddlRU1"].ToString();
                string employerAddress = Request.Form["txtEmployerAddress"].ToString();
                string regoistrationNumber = Request.Form["txtRegNumber"].ToString();
                string natureoftheJob = Request.Form["txtNatureJob"].ToString();
                //string employmentStartDate = Request.Form["txtJdate"].ToString();
                //string employmentEndDate = Request.Form["txtEDate"].ToString();
                string noOfWorkingDays = Request.Form["txtWorkingDays1"].ToString();
                string workSpaceDetailsAndAddress = Request.Form["txtWorkSpaceDet"].ToString();
                string rateofSubsricption = Request.Form["txtRateOfSub"].ToString();
                string statusoftheWorker = Request.Form["ddlStatus"].ToString();
                string employernature = "";
                string regNoOftheInstitute = "";
                //string CertificateIdentification = Request.Form["ddlCertificate"].ToString();
                //string Particularsofdocument = Request.Form["txtParticularDocsub"].ToString();
                string CertificateIdentification = "";
                string Particularsofdocument = "";

                string[] dateformat = new string[3];
                string[] dateformat1 = new string[3];
                if (Request.Form["txtJdate"] != null)
                {
                    dateformat = Request.Form["txtJdate"].Split('-');
                }
                if (Request.Form["txtEDate"] != null)
                {
                    dateformat1 = Request.Form["txtEDate"].Split('-');
                }

                DateTime employmentStartDate = Convert.ToDateTime(dateformat[1] + '/' + dateformat[0] + '/' + dateformat[2]);
                DateTime employmentEndDate = Convert.ToDateTime(dateformat1[1] + '/' + dateformat1[0] + '/' + dateformat1[2]);



                Res = Rb.UpdateeDistCWData(userId, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, Convert.ToDateTime(employmentStartDate),
                employmentEndDate, noOfWorkingDays, workSpaceDetailsAndAddress, Convert.ToDecimal(rateofSubsricption), statusoftheWorker, imgEligibility,
                imgEligibilityExt, imgStatutory, imgStatutoryExt, imgCertificateIdentity, imgCertificateIdentityExt, Particularsofdocument, CertificateIdentification);

                if (Res.Code == "000")
                {
                    //benuserId = Convert.ToString(Session["Userid"]);
                    var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                    string Message = "Your application for availing pension benefit under BOCWA scheme is submitted. Please track the status in Dashboard.";
                    CommonMethods.NewSms(beniDet.BenMobileNo, Message, 0, "Bene eDist Data", "Bene", Convert.ToString(beniDet.BenSno));
                }

                return Json(Res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Addtional Information For New Construction  Worker Submit Not using

        [HttpPost]

        public ActionResult AddtionalInformationNewConstruction(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "555";
                return RedirectToAction("StorageIssue", "Registration");
            }
            RequestResponse Res = new RequestResponse();
            string userId = Convert.ToString(Session["Userid"]);

            string txtEmployerName = Request.Form["txtEmployerName"];
            string fileName = string.Empty;
            string destinationPath = string.Empty;
            List<string> FilePath = new List<string>();
            List<string> NamesSave = new List<string>();
            string imgEligibility = string.Empty;
            string imgEligibilityExt = string.Empty;
            string imgDependent = string.Empty;
            string imgDependentExt = string.Empty;
            string imgDrivingLicense = string.Empty;
            string imgDrivingLicenseExt = string.Empty;

            string imgSchemeCerti = string.Empty;
            string imgSchemeCertiExt = string.Empty;



            string imgRenewalCerti = string.Empty;
            string imgRenewalCertiExt = string.Empty;
            string benuserId = "";
            if (Request.Files.Count > 0)
            {
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    var file = Request.Files[i];
                    string SavePath = "";
                    fileName = Path.GetFileName(Request.Files[i].FileName);


                    destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                    string bankfilename = destinationPath;
                    if (file != null && file.ContentLength > 0)
                    {
                        var name = fileName;
                        if (file.ContentLength < 2000000)
                        {

                            if (i == 0)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgEligibilityExt = Path.GetExtension(Request.Files[i].FileName);
                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgEligibility = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 1)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgDependentExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgDependent = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 2)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgDrivingLicenseExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgDrivingLicense = Convert.ToBase64String(thePictureAsBytes);
                            }
                            if (i == 3)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgSchemeCertiExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgSchemeCerti = Convert.ToBase64String(thePictureAsBytes);
                            }
                            if (i == 4)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgRenewalCertiExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgRenewalCerti = Convert.ToBase64String(thePictureAsBytes);
                            }
                        }
                    }
                }

                string employerName = Request.Form["txtEmployerName"].ToString();
                string ruralUrban = Request.Form["ddlRU"].ToString();
                string employerAddress = Request.Form["txtEmployerAddress"].ToString();
                //string regoistrationNumberofInsti = Request.Form["txtRegNumber"].ToString();
                string regoistrationNumberofInsti = "";
                string regoistrationNumber = Request.Form["txtRegNumber"].ToString();
                string natureoftheJob = Request.Form["txtNatureJob"].ToString();
                //string employmentStartDate = Request.Form["txtJdate"].ToString();
                //string employmentEndDate = Request.Form["txtEDate"].ToString();
                //string noOfWorkingDays = Request.Form["txtWorkingDays1"].ToString();
                string workSpaceDetailsAndAddress = Request.Form["txtWorkSpaceDet"].ToString();
                string rateofSubsricption = Request.Form["txtRateOfSub"].ToString();
                string statusoftheWorker = Request.Form["ddlStatus"].ToString();
                //string natureofVehicle = Request.Form["ddlNatureOfVehicle"].ToString();
                string natureofVehicle = "";
                //string natureofDuty = Request.Form["ddlNatureOfDuties"].ToString();
                string natureofDuty = "";
                string certificateofIdentificationAttached = Request.Form["certidentattach"].ToString();
                string feeSubmissionParticulars = Request.Form["partdocsubfee"].ToString();
                string rateofSubscription = Request.Form["txtRateOfSub"].ToString();
                //string employernature = "";
                //string regNoOftheInstitute = "";
                //string[] dateformat = new string[3];
                //string[] dateformat1 = new string[3];
                //if (Request.Form["txtJdate"] != null)
                //{
                //	dateformat = Request.Form["txtJdate"].Split('-');
                //}
                //if (Request.Form["txtEDate"] != null)
                //{
                //	dateformat1 = Request.Form["txtEDate"].Split('-');
                //}
                //DateTime employmentStartDate = Convert.ToDateTime(dateformat[1] + '/' + dateformat[0] + '/' + dateformat[2]);
                //DateTime employmentEndDate = Convert.ToDateTime(dateformat1[1] + '/' + dateformat1[0] + '/' + dateformat1[2]);
                string EligibilityCertiDocString = string.Empty;
                string EligibilityCertiDocExt = string.Empty;
                string EligibilityCertiDocName = string.Empty;
                string DependantDocString = string.Empty;
                string DependantDocExt = string.Empty;
                string DependantDocName = string.Empty;
                string DrivingLicenseDocString = string.Empty;
                string DrivingLicenseDocExt = string.Empty;
                string DrivingLicenseDocName = string.Empty;
                string SchemeCertificateDocString = string.Empty;
                string SchemeCertificateDocExt = string.Empty;
                string SchemeCertificateDocName = string.Empty;
                string RenewalCertiDocString = string.Empty;
                string RenewalCertiDocExt = string.Empty;
                string RenewalCertiDocName = string.Empty;
                string StatuatoryAppformDocExt = string.Empty;
                string StatuatoryAppformDocName = string.Empty;

                //string pensionAvailStatus = Request.Form["Pensionavailstatus"].ToString();
                //string pensionRegdStatus = Request.Form["pensionregdstatus"].ToString();

                string pensionAvailStatus = "";
                string pensionRegdStatus = "";
                string PaymentTblCount = Request.Form["BenTranspRenwlRowCount"].ToString();
                string NamCount = Request.Form["BenTranspRenwlRowCount"].ToString();

                int NaCount = Convert.ToInt32(NamCount);

                int Payment = Convert.ToInt32(PaymentTblCount);

                string dependoc = "";
                string Namdoc = "";
                //if (NomineeStatus == "Yes")
                //{
                //string Bennamedet = Request.Form["bencollectiondtls"].ToString();
                //string[] Bennamedetwords = Bennamedet.Split('~');
                //Namdoc = "<BenTransRenewelDtls>";
                //for (int i = 0; i < NaCount - 1; i++)
                //{
                //	string namdet = Bennamedetwords[i];
                //	string[] splitnamdet = namdet.Split('$');
                //	string[] date = splitnamdet[3].Split('-');
                //	DateTime NamRnwlDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                //	Namdoc += "<BenTranspRenwl><BenSubYear>" + splitnamdet[0] + "</BenSubYear>";
                //	Namdoc += "<BenRenwlMonth>" + splitnamdet[1] + "</BenRenwlMonth>";
                //	Namdoc += "<BenRenwlAmount>" + splitnamdet[2] + "</BenRenwlAmount>";
                //	Namdoc += "<BenRenwlcollDate>" + NamRnwlDate + "</BenRenwlcollDate>";
                //	Namdoc += "<BenRecPagno>" + splitnamdet[4] + "</BenRecPagno>";
                //	Namdoc += "<BenRecBokno>" + splitnamdet[5] + "</BenRecBokno></BenTranspRenwl>";
                //	//Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                //	//Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                //	//Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                //	//Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                //	//Namdoc += "<Dob>" + NamDobDate + "</Dob></BenConSubDtl>";
                //}
                //Namdoc += "</BenTransRenewelDtls>";



                string docxml = "<BenDetails>";
                if (pensionAvailStatus == "Yes")
                {
                    if (pensionRegdStatus == "Yes")
                    {
                        docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
                        docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

                        docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
                        docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
                        docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
                        docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
                        docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
                        docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

                        docxml += "<PensionRegdNumber>" + Request.Form["txtRegNumber"].ToString() + "</PensionRegdNumber>";
                        docxml += "<PensionPartiDocFee>" + Request.Form["partdocsubfee"].ToString() + "</PensionPartiDocFee>";
                        docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
                        docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
                        docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
                        docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
                        docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

                        //docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
                        //docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        //docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
                        //docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        //docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
                        //docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        //docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
                        //docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        //docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
                        //docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

                        docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
                        docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
                        docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
                        docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
                        docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
                        docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

                    }
                    if (pensionRegdStatus == "No")
                    {
                        docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
                        docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

                        docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
                        docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
                        docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
                        docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
                        docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
                        docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

                        docxml += "<PensionRegdNumber>" + "NA" + "</PensionRegdNumber>";
                        docxml += "<PensionPartiDocFee>" + "NA" + "</PensionPartiDocFee>";
                        docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
                        docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
                        docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
                        docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
                        docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

                        //docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
                        //docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        //docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
                        //docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        //docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
                        //docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        //docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
                        //docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        //docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
                        //docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
                        docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
                        docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
                        docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
                        docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
                        docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
                        docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
                    }

                }

                docxml += "</BenDetails>";
                string Pensiondoc = "";
                if (pensionRegdStatus == "Yes")
                {
                    string BenPensiondet = Request.Form["bencollectiondtls"].ToString();
                    string[] BenPensiondetwords = BenPensiondet.Split('~');
                    Pensiondoc = "<BenPaymentDtls>";
                    for (int i = 0; i < Payment - 1; i++)
                    {
                        string paymentdet = BenPensiondetwords[i];
                        string[] splitpaymentdet = paymentdet.Split('$');
                        string[] date = splitpaymentdet[2].Split('-');
                        DateTime payCollDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        Pensiondoc += "<BenPenpaymentDtl><BenPaymentYear>" + splitpaymentdet[0] + "</BenPaymentYear>";
                        Pensiondoc += "<BenPaymentMonth>" + splitpaymentdet[1] + "</BenPaymentMonth>";
                        Pensiondoc += "<BenPaymentCollDate>" + payCollDate + "</BenPaymentCollDate>";
                        Pensiondoc += "<BenPayAmount>" + splitpaymentdet[3] + "</BenPayAmount>";
                        Pensiondoc += "<BenPayReceiptBookNo>" + splitpaymentdet[4] + "</BenPayReceiptBookNo>";
                        Pensiondoc += "<BenPayReceiptPageNo>" + splitpaymentdet[5] + "</BenPayReceiptPageNo></BenPenpaymentDtl>";
                    }
                    Pensiondoc += "</BenPaymentDtls>";
                }


                //imgRenewalCerti imgRenewalCertiExt imgSchemeCerti imgSchemeCertiExt
                Res = Rb.UpdateeDistTWData(userId, regoistrationNumber, employerName, ruralUrban, employerAddress, regoistrationNumberofInsti, natureoftheJob
                    //, Convert.ToDateTime(employmentStartDate),employmentEndDate, noOfWorkingDays
                    , workSpaceDetailsAndAddress, statusoftheWorker, imgEligibility,
                    imgEligibilityExt, imgDependent, imgDependentExt, imgDrivingLicense, imgDrivingLicenseExt, natureofVehicle, natureofDuty, certificateofIdentificationAttached, feeSubmissionParticulars, rateofSubscription
                    , Pensiondoc
                    );

                //benSno, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, workSpaceDetailsAndAddress
                //	, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, dependentPassbookString, dependentPassbookExt,
                //drivingLicenseString, drivingLicenseExt, natureOfthevehicle, natureofDuty

                if (Res.Code == "000")
                {
                    benuserId = Convert.ToString(Session["Userid"]);
                    var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                    string Message = "Your application for availing pension benefit under BOCWA scheme is submitted. Please track the status in Dashboard.";
                    CommonMethods.NewSms(beniDet.BenMobileNo, Message, 0, "Bene eDist Data", "Bene", Convert.ToString(beniDet.BenSno));
                }
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return Json("", JsonRequestBehavior.AllowGet);


            }
        }
        #endregion

        #region Transport Workers

        public ActionResult EDistrictRegistrationCheck()
        {
            try
            {
                string workerType = Convert.ToString(Session["BenOccupation"]);
                if (workerType == "TransportWorker")
                {
                    return RedirectToAction("TransportWorkerEDistCheck", "Registration");

                }
                else if (workerType == "ConstructionWorker")
                {
                    return RedirectToAction("ConstructorWorkerEDistCheck", "Registration");

                }
                else
                {
                    return RedirectToAction("Dashboard", "Home");
                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Beneficiary  registration view Error due to : " + ex.Message, "BenOccupation : " + Convert.ToString(Session["BenOccupation"]), Convert.ToString(ex.InnerException), "EDistrictRegistrationCheck", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult TransportWorkerEDistCheck()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Beneficiary  registration view Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "BeniRegistrationPart1", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }
        }
        public ActionResult ConstructorWorkerEDistCheck()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        #endregion

        #region additional details for transport worker  matching in e district
        public ActionResult TransportExiAdditionalDet(string ID)
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    ViewBag.TRegId = ID;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        #region Transport worker Renewel form
        public ActionResult TransportWorkerRenewel()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpPost]
        public ActionResult TransportWorkerRenewel(IEnumerable<HttpPostedFileBase> files)
        {
            try
            {
                string Userid = Session["Userid"].ToString();

                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                //if (NomineeStatus == "Yes")
                //{
                string BenName = Request.Form["txtbeneName"].ToString();
                string BenSSINumber = Convert.ToString(Request.Form["txtSSINumber"]);
                string BenRegNumber = Convert.ToString(Request.Form["txtRegNumber"]);
                string[] ApplicationDatedateformat = new string[3];
                string[] Lastsubsdatedateformat = new string[3];

                if (Request.Form["registrationdate"] != null)
                {
                    ApplicationDatedateformat = Request.Form["registrationdate"].Split('.');
                }

                DateTime ApplicationDate = Convert.ToDateTime(ApplicationDatedateformat[1] + '/' + ApplicationDatedateformat[0] + '/' + ApplicationDatedateformat[2]);
                //if (Request.Form["ApplicationDate"] != null)
                //{
                //	ApplicationDatedateformat = Request.Form["ApplicationDate"].Split('/');
                //}

                //DateTime ApplicationDate = Convert.ToDateTime(ApplicationDatedateformat[1] + '/' + ApplicationDatedateformat[0] + '/' + ApplicationDatedateformat[2]);
                //if (Request.Form["Lastsubsdate"] != null)
                //{
                //	Lastsubsdatedateformat = Request.Form["Lastsubsdate"].Split('/');
                //}

                //DateTime Lastsubsdate = Convert.ToDateTime(Lastsubsdatedateformat[1] + '/' + Lastsubsdatedateformat[0] + '/' + Lastsubsdatedateformat[2]);

                //var Res = Rb.SubmitBenRenewelReqDetails(Userid, registrationNumber, subscriptMonth, subscriptYear, amount, ApplicationDate, receiptPageno, receiptBOokno, createdBy);
                var Res = Rb.SubmitBenRenewelReqDetails(Userid, BenRegNumber, "", "", 0, ApplicationDate, "", "", Userid);

                ViewBag.UserId = Userid;
                //return Json(Res, JsonRequestBehavior.AllowGet);
                if (Res.Code == "000")
                {
                    ViewBag.Message = "Renewal Details Updated successfully, sent to Inspector for Approval";
                }
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                return View();
                //return Json(ex, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region
        public ActionResult EDistrictRenewelDetailsCheck()
        {
            try
            {
                string workerType = Convert.ToString(Session["BenOccupation"]);
                if (workerType == "TransportWorker")
                {
                    return RedirectToAction("TransportWorkerRenewelDetails", "Registration");

                }
                else if (workerType == "ConstructionWorker")
                {
                    return RedirectToAction("EdistConstructionSubcriptionDetails", "Registration");

                }
                else
                {
                    return RedirectToAction("Dashboard", "Home");
                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        #endregion


        #region Update Renewel Details of TransportWorker By Bene
        public ActionResult TransportWorkerRenewelDetails()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpPost]
        public ActionResult TransportWorkerRenewelDetails(IEnumerable<HttpPostedFileBase> files)
        {
            try
            {
                string Userid = Session["Userid"].ToString();
                string NamDet = Request.Form["bencollectiondtls"].ToString();
                //string FamDet = Request.Form["BenFamdet"].ToString();

                //string FamCount = Request.Form["FamCount"].ToString();
                //int fccount = Convert.ToInt32(FamCount);
                //string DependentStatus = Request.Form["DependentStatus"].ToString();
                string NamCount = Request.Form["BenTranspRenwlRowCount"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                //string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string dependoc = "";
                string Namdoc = "";
                //if (NomineeStatus == "Yes")
                //{
                string Bennamedet = Request.Form["bencollectiondtls"].ToString();
                string[] Bennamedetwords = Bennamedet.Split('~');
                Namdoc = "<BenTransRenewelDtls>";
                for (int i = 0; i < NaCount - 1; i++)
                {
                    string namdet = Bennamedetwords[i];
                    string[] splitnamdet = namdet.Split('$');
                    string[] date = splitnamdet[3].Split('-');
                    DateTime NamRnwlDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                    Namdoc += "<BenTranspRenwl><BenSubYear>" + splitnamdet[0] + "</BenSubYear>";
                    Namdoc += "<BenRenwlMonth>" + splitnamdet[1] + "</BenRenwlMonth>";
                    Namdoc += "<BenRenwlAmount>" + splitnamdet[2] + "</BenRenwlAmount>";
                    Namdoc += "<BenRenwlcollDate>" + NamRnwlDate + "</BenRenwlcollDate>";
                    Namdoc += "<BenRecPagno>" + splitnamdet[4] + "</BenRecPagno>";
                    Namdoc += "<BenRecBokno>" + splitnamdet[5] + "</BenRecBokno></BenTranspRenwl>";
                    //Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                    //Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                    //Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                    //Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                    //Namdoc += "<Dob>" + NamDobDate + "</Dob></BenConSubDtl>";
                }
                Namdoc += "</BenTransRenewelDtls>";
                //}
                string finalXml = "<Details>" + dependoc + Namdoc + "</Details>";
                var res = Rb.UpdateRenewelDetailsByBene(finalXml, Userid);
                ViewBag.UserId = Userid;
                //return Json(res, JsonRequestBehavior.AllowGet);
                if (res == "0")
                {
                    ViewBag.Message = "Details Updated successfully";
                }
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                //return Json(ex, JsonRequestBehavior.AllowGet);
                return View();
            }
        }

        #endregion


        #region Update Renewel Details of Construction Worker By Bene
        public ActionResult EdistConstructionSubcriptionDetails()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpPost]
        public ActionResult EdistConstructionSubcriptionDetails(IEnumerable<HttpPostedFileBase> files)
        {
            try
            {
                string Userid = Session["Userid"].ToString();
                string NamDet = Request.Form["Bennamedet"].ToString();
                //string FamDet = Request.Form["BenFamdet"].ToString();
                string NamCount = Request.Form["NamCount"].ToString();
                //string FamCount = Request.Form["FamCount"].ToString();
                //int fccount = Convert.ToInt32(FamCount);
                //string DependentStatus = Request.Form["DependentStatus"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                //string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string dependoc = "";
                string Namdoc = "";
                //if (NomineeStatus == "Yes")
                //{
                string Bennamedet = Request.Form["Bennamedet"].ToString();
                string[] Bennamedetwords = Bennamedet.Split('~');
                Namdoc = "<BenConSubscriptDtls>";
                for (int i = 0; i < NaCount - 1; i++)
                {
                    string namdet = Bennamedetwords[i];
                    string[] splitnamdet = namdet.Split('$');
                    string[] date = splitnamdet[3].Split('-');
                    DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                    Namdoc += "<BenConSubDtl><BenSubYear>" + splitnamdet[0] + "</BenSubYear>";
                    Namdoc += "<BenSubMonth>" + splitnamdet[1] + "</BenSubMonth>";
                    Namdoc += "<BenSubAmount>" + splitnamdet[2] + "</BenSubAmount>";
                    Namdoc += "<BenSubcollDate>" + NamDobDate + "</BenSubcollDate>";
                    Namdoc += "<BenRecPagno>" + splitnamdet[4] + "</BenRecPagno>";
                    Namdoc += "<BenRecBokno>" + splitnamdet[5] + "</BenRecBokno></BenConSubDtl>";
                    //Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                    //Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                    //Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                    //Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                    //Namdoc += "<Dob>" + NamDobDate + "</Dob></BenConSubDtl>";
                }
                Namdoc += "</BenConSubscriptDtls>";
                //}
                string finalXml = "<Details>" + dependoc + Namdoc + "</Details>";
                var res = Rb.UpdateSubscriptDetls(finalXml, Userid);
                ViewBag.UserId = Userid;
                if (res == "0")
                {
                    ViewBag.Message = "request submitted successfully";
                }
                return View();
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                return View();
            }
        }

        #endregion

        #region additional details for transportworker worker  new benificiary
        public ActionResult TransportNewAdditionalDet()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        [HttpPost]

        public ActionResult TransportNewAdditionalDet(IEnumerable<HttpPostedFileBase> files)
        {
            RequestResponse Res = new RequestResponse();
            string userId = Convert.ToString(Session["Userid"]);

            string txtEmployerName = Request.Form["txtEmployerName"];
            string fileName = string.Empty;
            string destinationPath = string.Empty;
            List<string> FilePath = new List<string>();
            List<string> NamesSave = new List<string>();
            string imgEligibility = string.Empty;
            string imgEligibilityExt = string.Empty;
            string imgDependent = string.Empty;
            string imgDependentExt = string.Empty;
            string imgDrivingLicense = string.Empty;
            string imgDrivingLicenseExt = string.Empty;

            string imgSchemeCerti = string.Empty;
            string imgSchemeCertiExt = string.Empty;



            string imgRenewalCerti = string.Empty;
            string imgRenewalCertiExt = string.Empty;
            string benuserId = "";
            if (Request.Files.Count > 0)
            {
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    var file = Request.Files[i];
                    string SavePath = "";
                    fileName = Path.GetFileName(Request.Files[i].FileName);


                    destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                    string bankfilename = destinationPath;
                    if (file != null && file.ContentLength > 0)
                    {
                        var name = fileName;
                        if (file.ContentLength < 2000000)
                        {

                            if (i == 0)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgEligibilityExt = Path.GetExtension(Request.Files[i].FileName);
                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgEligibility = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 1)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgDependentExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgDependent = Convert.ToBase64String(thePictureAsBytes);

                            }
                            if (i == 2)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgDrivingLicenseExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgDrivingLicense = Convert.ToBase64String(thePictureAsBytes);
                            }
                            if (i == 3)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgSchemeCertiExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgSchemeCerti = Convert.ToBase64String(thePictureAsBytes);
                            }
                            if (i == 4)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgRenewalCertiExt = Path.GetExtension(Request.Files[i].FileName);

                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgRenewalCerti = Convert.ToBase64String(thePictureAsBytes);
                            }
                        }
                    }
                }

                string employerName = Request.Form["txtEmployerName"].ToString();
                string ruralUrban = Request.Form["ddlRU1"].ToString();
                string employerAddress = Request.Form["txtEmployerAddress"].ToString();
                string regoistrationNumberofInsti = Request.Form["txtRegNumberinsti"].ToString();
                string regoistrationNumber = Request.Form["txtRegNumber"].ToString();
                string natureoftheJob = Request.Form["txtNatureJob"].ToString();
                //string employmentStartDate = Request.Form["txtJdate"].ToString();
                //string employmentEndDate = Request.Form["txtEDate"].ToString();
                //string noOfWorkingDays = Request.Form["txtWorkingDays1"].ToString();
                string workSpaceDetailsAndAddress = Request.Form["txtWorkSpaceDet"].ToString();
                string rateofSubsricption = Request.Form["txtRateOfSub"].ToString();
                string statusoftheWorker = Request.Form["ddlStatus"].ToString();
                string natureofVehicle = Request.Form["ddlNatureOfVehicle"].ToString();
                string natureofDuty = Request.Form["ddlNatureOfDuties"].ToString();
                string certificateofIdentificationAttached = Request.Form["certidentattach"].ToString();
                string feeSubmissionParticulars = Request.Form["partdocsubfee"].ToString();
                string rateofSubscription = Request.Form["txtRateOfSub"].ToString();
                //string employernature = "";
                //string regNoOftheInstitute = "";
                //string[] dateformat = new string[3];
                //string[] dateformat1 = new string[3];
                //if (Request.Form["txtJdate"] != null)
                //{
                //	dateformat = Request.Form["txtJdate"].Split('-');
                //}
                //if (Request.Form["txtEDate"] != null)
                //{
                //	dateformat1 = Request.Form["txtEDate"].Split('-');
                //}
                //DateTime employmentStartDate = Convert.ToDateTime(dateformat[1] + '/' + dateformat[0] + '/' + dateformat[2]);
                //DateTime employmentEndDate = Convert.ToDateTime(dateformat1[1] + '/' + dateformat1[0] + '/' + dateformat1[2]);
                string EligibilityCertiDocString = string.Empty;
                string EligibilityCertiDocExt = string.Empty;
                string EligibilityCertiDocName = string.Empty;
                string DependantDocString = string.Empty;
                string DependantDocExt = string.Empty;
                string DependantDocName = string.Empty;
                string DrivingLicenseDocString = string.Empty;
                string DrivingLicenseDocExt = string.Empty;
                string DrivingLicenseDocName = string.Empty;
                string SchemeCertificateDocString = string.Empty;
                string SchemeCertificateDocExt = string.Empty;
                string SchemeCertificateDocName = string.Empty;
                string RenewalCertiDocString = string.Empty;
                string RenewalCertiDocExt = string.Empty;
                string RenewalCertiDocName = string.Empty;
                string StatuatoryAppformDocExt = string.Empty;
                string StatuatoryAppformDocName = string.Empty;

                //string pensionAvailStatus = Request.Form["Pensionavailstatus"].ToString();
                //string pensionRegdStatus = Request.Form["pensionregdstatus"].ToString();

                string pensionAvailStatus = "";
                string pensionRegdStatus = "";
                string PaymentTblCount = Request.Form["BenTranspRenwlRowCount"].ToString();
                string NamCount = Request.Form["BenTranspRenwlRowCount"].ToString();

                int NaCount = Convert.ToInt32(NamCount);

                int Payment = Convert.ToInt32(PaymentTblCount);

                string dependoc = "";
                string Namdoc = "";
                //if (NomineeStatus == "Yes")
                //{
                //string Bennamedet = Request.Form["bencollectiondtls"].ToString();
                //string[] Bennamedetwords = Bennamedet.Split('~');
                //Namdoc = "<BenTransRenewelDtls>";
                //for (int i = 0; i < NaCount - 1; i++)
                //{
                //	string namdet = Bennamedetwords[i];
                //	string[] splitnamdet = namdet.Split('$');
                //	string[] date = splitnamdet[3].Split('-');
                //	DateTime NamRnwlDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                //	Namdoc += "<BenTranspRenwl><BenSubYear>" + splitnamdet[0] + "</BenSubYear>";
                //	Namdoc += "<BenRenwlMonth>" + splitnamdet[1] + "</BenRenwlMonth>";
                //	Namdoc += "<BenRenwlAmount>" + splitnamdet[2] + "</BenRenwlAmount>";
                //	Namdoc += "<BenRenwlcollDate>" + NamRnwlDate + "</BenRenwlcollDate>";
                //	Namdoc += "<BenRecPagno>" + splitnamdet[4] + "</BenRecPagno>";
                //	Namdoc += "<BenRecBokno>" + splitnamdet[5] + "</BenRecBokno></BenTranspRenwl>";
                //	//Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                //	//Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                //	//Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                //	//Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                //	//Namdoc += "<Dob>" + NamDobDate + "</Dob></BenConSubDtl>";
                //}
                //Namdoc += "</BenTransRenewelDtls>";



                string docxml = "<BenDetails>";
                if (pensionAvailStatus == "Yes")
                {
                    if (pensionRegdStatus == "Yes")
                    {
                        docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
                        docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

                        docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
                        docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
                        docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
                        docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
                        docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
                        docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

                        docxml += "<PensionRegdNumber>" + Request.Form["txtRegNumber"].ToString() + "</PensionRegdNumber>";
                        docxml += "<PensionPartiDocFee>" + Request.Form["partdocsubfee"].ToString() + "</PensionPartiDocFee>";
                        docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
                        docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
                        docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
                        docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
                        docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

                        //docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
                        //docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        //docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
                        //docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        //docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
                        //docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        //docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
                        //docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        //docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
                        //docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

                        docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
                        docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
                        docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
                        docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
                        docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
                        docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";

                    }
                    if (pensionRegdStatus == "No")
                    {
                        docxml += "<PensionAvailStatus>" + pensionAvailStatus + "</PensionAvailStatus>";
                        docxml += "<PensionRegdStatus>" + pensionRegdStatus + "</PensionRegdStatus>";

                        docxml += "<PensionEmployerName>" + Request.Form["txtEmployerName"].ToString() + "</PensionEmployerName>";
                        docxml += "<PensionRuralUrban>" + Request.Form["ddlRU1"].ToString() + "</PensionRuralUrban>";
                        docxml += "<PensionEmployerAddress>" + Request.Form["txtEmployerAddress"].ToString() + "</PensionEmployerAddress>";
                        docxml += "<PensionInstiRegdNumber>" + Request.Form["txtRegNumberinsti"].ToString() + "</PensionInstiRegdNumber>";
                        docxml += "<PensionNatureOfJob>" + Request.Form["txtNatureJob"].ToString() + "</PensionNatureOfJob>";
                        docxml += "<PensionWorkspaceAddress>" + Request.Form["txtWorkSpaceDet"].ToString() + "</PensionWorkspaceAddress>";

                        docxml += "<PensionRegdNumber>" + "NA" + "</PensionRegdNumber>";
                        docxml += "<PensionPartiDocFee>" + "NA" + "</PensionPartiDocFee>";
                        docxml += "<PensionRateofSubscription>" + Request.Form["txtRateOfSub"].ToString() + "</PensionRateofSubscription>";
                        docxml += "<PensionDDLStatus>" + Request.Form["ddlStatus"].ToString() + "</PensionDDLStatus>";
                        docxml += "<PensionDDLNatureOfVehicle>" + Request.Form["ddlNatureOfVehicle"].ToString() + "</PensionDDLNatureOfVehicle>";
                        docxml += "<PensionDDLNatureOfDuties>" + Request.Form["ddlNatureOfDuties"].ToString() + "</PensionDDLNatureOfDuties>";
                        docxml += "<PensionCertiOfIdentityAttached>" + Request.Form["certidentattach"].ToString() + "</PensionCertiOfIdentityAttached>";

                        //docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocString + "</EligibilityCertiDocString>";
                        //docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        //docxml += "<DependantDocString>" + DependantDocString + "</DependantDocString>";
                        //docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        //docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocString + "</DrivingLicenseDocString>";
                        //docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        //docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocString + "</SchemeCertificateDocString>";
                        //docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        //docxml += "<RenewalCertiDocString>" + RenewalCertiDocString + "</RenewalCertiDocString>";
                        //docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
                        docxml += "<EligibilityCertiDocString>" + EligibilityCertiDocName + "</EligibilityCertiDocString>";
                        docxml += "<EligibilityCertiDocExt>" + EligibilityCertiDocExt + "</EligibilityCertiDocExt>";
                        docxml += "<DependantDocString>" + DependantDocName + "</DependantDocString>";
                        docxml += "<DependantDocExt>" + DependantDocExt + "</DependantDocExt>";
                        docxml += "<DrivingLicenseDocString>" + DrivingLicenseDocName + "</DrivingLicenseDocString>";
                        docxml += "<DrivingLicenseDocExt>" + DrivingLicenseDocExt + "</DrivingLicenseDocExt>";
                        docxml += "<SchemeCertificateDocString>" + SchemeCertificateDocName + "</SchemeCertificateDocString>";
                        docxml += "<SchemeCertificateDocExt>" + SchemeCertificateDocExt + "</SchemeCertificateDocExt>";
                        docxml += "<RenewalCertiDocString>" + RenewalCertiDocName + "</RenewalCertiDocString>";
                        docxml += "<RenewalCertiDocExt>" + RenewalCertiDocExt + "</RenewalCertiDocExt>";
                    }

                }

                docxml += "</BenDetails>";
                string Pensiondoc = "";
                if (pensionRegdStatus == "Yes")
                {
                    string BenPensiondet = Request.Form["bencollectiondtls"].ToString();
                    string[] BenPensiondetwords = BenPensiondet.Split('~');
                    Pensiondoc = "<BenPaymentDtls>";
                    for (int i = 0; i < Payment - 1; i++)
                    {
                        string paymentdet = BenPensiondetwords[i];
                        string[] splitpaymentdet = paymentdet.Split('$');
                        string[] date = splitpaymentdet[2].Split('-');
                        DateTime payCollDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        Pensiondoc += "<BenPenpaymentDtl><BenPaymentYear>" + splitpaymentdet[0] + "</BenPaymentYear>";
                        Pensiondoc += "<BenPaymentMonth>" + splitpaymentdet[1] + "</BenPaymentMonth>";
                        Pensiondoc += "<BenPaymentCollDate>" + payCollDate + "</BenPaymentCollDate>";
                        Pensiondoc += "<BenPayAmount>" + splitpaymentdet[3] + "</BenPayAmount>";
                        Pensiondoc += "<BenPayReceiptBookNo>" + splitpaymentdet[4] + "</BenPayReceiptBookNo>";
                        Pensiondoc += "<BenPayReceiptPageNo>" + splitpaymentdet[5] + "</BenPayReceiptPageNo></BenPenpaymentDtl>";
                    }
                    Pensiondoc += "</BenPaymentDtls>";
                }


                //imgRenewalCerti imgRenewalCertiExt imgSchemeCerti imgSchemeCertiExt
                Res = Rb.UpdateeDistTWData(userId, regoistrationNumber, employerName, ruralUrban, employerAddress, regoistrationNumberofInsti, natureoftheJob
                    //, Convert.ToDateTime(employmentStartDate),employmentEndDate, noOfWorkingDays
                    , workSpaceDetailsAndAddress, statusoftheWorker, imgEligibility,
                    imgEligibilityExt, imgDependent, imgDependentExt, imgDrivingLicense, imgDrivingLicenseExt, natureofVehicle, natureofDuty, certificateofIdentificationAttached, feeSubmissionParticulars, rateofSubscription
                    , Pensiondoc
                    );

                //benSno, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, workSpaceDetailsAndAddress
                //	, statusoftheWorker, eligibilityCertificateFormString, eligibilityCertificateFormExtension, dependentPassbookString, dependentPassbookExt,
                //drivingLicenseString, drivingLicenseExt, natureOfthevehicle, natureofDuty

                if (Res.Code == "000")
                {
                    benuserId = Convert.ToString(Session["Userid"]);
                    var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));
                    string Message = "Your application for availing pension benefit under WBTWSSS scheme is submitted. Please track the status in Dashboard.";
                    CommonMethods.NewSms(beniDet.BenMobileNo, Message, 0, "Bene eDist Data", "Bene", Convert.ToString(beniDet.BenSno));
                }
                return Json(Res, JsonRequestBehavior.AllowGet);
            }

            else
            {
                return Json("", JsonRequestBehavior.AllowGet);


            }
        }
        public ActionResult GetEdistConstructDetails(Int64 bensno, string EDRegId)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetEdistConstructDetails(Convert.ToInt64(userid), EDRegId);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult GetEdistTransportDetails(Int64 bensno, string EDRegId)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetEdistTransportDetails(Convert.ToInt64(userid), EDRegId);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion


        #region Transport Workers eDistrict Data form

        public ActionResult TransportWorkereDistrictData()
        {
            try
            {
                string userId = Convert.ToString(Session["Userid"]);
                if (string.IsNullOrEmpty(userId))
                {
                    return RedirectToAction("Index", "Home");

                }
                else
                {
                    ViewBag.userId = userId;
                    return View();

                }
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }

        public ActionResult GetEdistTransportDetailsAll(Int64 bensno, string EDRegId)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetEdistTransportDetailsAll(Convert.ToInt64(userid), EDRegId);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region Construction Worker Renewel Apply By SLO

        [HttpPost]
        public ActionResult TransWrkrNewUserRenewelApplications(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "555";
                return RedirectToAction("StorageIssue", "Registration");
            }
            RequestResponse Res = new RequestResponse();
            string userId = Convert.ToString(Session["Userid"]);

            string txtEmployerName = Request.Form["Beneficiaryname"];
            string fileName = string.Empty;
            string destinationPath = string.Empty;
            List<string> FilePath = new List<string>();
            List<string> NamesSave = new List<string>();
            string imgdobproofdoc = string.Empty;
            string imgdobproofdocExt = string.Empty;
            string imgStatutory = string.Empty;
            string imgStatutoryExt = string.Empty;
            string imgCertificateIdentity = string.Empty;
            string imgCertificateIdentityExt = string.Empty;

            if (Request.Files.Count > 0)
            {
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    var file = Request.Files[i];
                    string SavePath = "";
                    fileName = Path.GetFileName(Request.Files[i].FileName);


                    destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                    string bankfilename = destinationPath;
                    if (file != null && file.ContentLength > 0)
                    {
                        var name = fileName;
                        if (file.ContentLength < 2000000)
                        {

                            if (i == 0)
                            {
                                string theFileName = Path.GetFileName(Request.Files[i].FileName);
                                imgdobproofdocExt = Path.GetExtension(Request.Files[i].FileName);
                                byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                                using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                                {
                                    thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                                }
                                imgdobproofdoc = Convert.ToBase64String(thePictureAsBytes);

                            }
                            //if (i == 1)
                            //{
                            //    string theFileName = Path.GetFileName(Request.Files[i].FileName);
                            //    imgStatutoryExt = Path.GetExtension(Request.Files[i].FileName);

                            //    byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                            //    using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                            //    {
                            //        thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                            //    }
                            //    imgStatutory = Convert.ToBase64String(thePictureAsBytes);

                            //}
                            //if (i == 2)
                            //{
                            //    string theFileName = Path.GetFileName(Request.Files[i].FileName);
                            //    imgCertificateIdentityExt = Path.GetExtension(Request.Files[i].FileName);

                            //    byte[] thePictureAsBytes = new byte[Request.Files[i].ContentLength];
                            //    using (BinaryReader theReader = new BinaryReader(Request.Files[i].InputStream))
                            //    {
                            //        thePictureAsBytes = theReader.ReadBytes(Request.Files[i].ContentLength);
                            //    }
                            //    imgCertificateIdentity = Convert.ToBase64String(thePictureAsBytes);
                            //}
                        }
                    }
                }

                string employerName = Request.Form["Beneficiaryname"].ToString();
                string ssinum = Request.Form["ssinumberdet"].ToString();
                string regnum = Request.Form["regnumber"].ToString();

                string regbookno = Request.Form["receiptbookno"].ToString();
                string recpno = Request.Form["Receiptno"].ToString();
                string recAmt = Request.Form["ReceiptAmount"].ToString();

                string[] dateformat = new string[3];
                string[] dateformat1 = new string[3];
                if (Request.Form["registrationdate"] != null)
                {
                    dateformat = Request.Form["registrationdate"].Split('-');
                }
                //if (Request.Form["txtEDate"] != null)
                //{
                //    dateformat1 = Request.Form["txtEDate"].Split('-');
                //}

                //DateTime RegDate = Convert.ToDateTime(dateformat[0] + '/' + dateformat[1] + '/' + dateformat[2]);

                DateTime RegDate = Convert.ToDateTime(dateformat[1] + '/' + dateformat[0] + '/' + dateformat[2]);
                //DateTime employmentEndDate = Convert.ToDateTime(dateformat1[0] + '/' + dateformat1[1] + '/' + dateformat1[2]);



                //Res = Rb.UpdateeDistCWData(userId, regoistrationNumber, employernature, ruralUrban, employerAddress, regNoOftheInstitute, natureoftheJob, Convert.ToDateTime(employmentStartDate),
                //employmentEndDate, noOfWorkingDays, workSpaceDetailsAndAddress, Convert.ToDecimal(rateofSubsricption), statusoftheWorker, imgEligibility,
                //imgEligibilityExt, imgStatutory, imgStatutoryExt, imgCertificateIdentity, imgCertificateIdentityExt, Particularsofdocument, CertificateIdentification);

                Res = Rb.InsertConstructRenewalDtls(ssinum, regnum, employerName, regbookno, recpno, RegDate, recAmt, imgdobproofdoc, imgdobproofdocExt, userId);
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult GetEdistConstructionDetails(string bensno)
        {
            try
            {
                string userid = "0";
                if (bensno == "0")
                {
                    userid = Convert.ToString(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetEdistConstructionDetails(Convert.ToInt64(userid));

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region work Type
        public ActionResult GetWorkType(string ID)
        {
            try
            {
                return Json(HB.GetWorkType(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }
        #endregion work Type


        #region Detailed Report New
        public ActionResult GetPSAllNew(int ID)
        {
            try
            {
                return Json(HB.GetPSAllNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }


        public ActionResult GetPOSTOFFICENew(int ID)
        {
            try
            {
                return Json(HB.GetPOSTOFFICENew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }

        public ActionResult GetGPBasedOnDistrictNew(int ID)
        {
            try
            {
                return Json(HB.GetGPBasedOnDistrictNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }

        public ActionResult GetGPAllNew(int ID)
        {
            try
            {
                return Json(HB.GetGPAllNew(ID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Content(Message);
            }
            finally
            {
            }
        }

        #endregion

        public ActionResult HomeIndex()
        {
            return View();
        }

        #region To Get eDist Details for Registration
        public ActionResult GeteDistBeneDetailsforRegistration(string OldRegNewRegAINNumber, string regType)
        {
            try
            {
                string userid = "0";
                if (OldRegNewRegAINNumber == "0")
                {
                    userid = Convert.ToString(Session["Userid"]);
                }
                else
                {
                    userid = OldRegNewRegAINNumber;
                }
                var res = Rb.GeteDistBeneDetailsforRegistration(OldRegNewRegAINNumber, regType);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion
        #region To Get eDist Reg Details
        public ActionResult GeteDistBeneRegDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GeteDistBeneRegDetails(Convert.ToInt64(userid));

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion


        #region To Get eDist Bene Renewal Details


        public ActionResult GeteDistBeneRenewalDetails(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GeteDistBeneRenewalDetails(Convert.ToInt64(userid));
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GeteDistBeneRenewalDetails" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GeteDistBeneFilePaths(string aINNumber, string regNumber)
        {
            try
            {
                string userid = "0";
                if (aINNumber == "0")
                {
                    userid = Convert.ToString(Session["Userid"]);
                }
                else
                {
                    userid = aINNumber;
                }
                var res = Rb.GeteDistBeneFilePaths(aINNumber, regNumber);
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("GeteDistBeneFilePaths" + DateTime.Now + "Error : " + Message);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        public ActionResult FilesTest()
        {
            return View();
        }

        #region death claim

        public ActionResult DeathclaimFrom(string ID = "")
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                ViewBag.Userid = ID;

                reguser.self = HB.GetAllListofind(1);
                reguser.unorg = HB.GetAllListofind(2);
                reguser.maritalstatus = HB.Getmaritalstatus();
                reguser.religion = HB.Getreligion();
                reguser.socategry = HB.Getcategory();
                reguser.district = HB.GetDistrict();
                reguser.subdivision = HB.Gettotalsubdivisions();
                reguser.psname = HB.GetTotalPS();
                reguser.muncorpname = HB.GetTotalblocks();
                reguser.wardname = HB.GetTotalGP();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetTotalBranch();
                reguser.issueAuthName = HB.GetIssueauth();
                reguser.poname = HB.GetTotalPO();
                reguser.locname = HB.GetTotalblocks();
                reguser.WorkType = HB.GetWorkType("C");
                ViewBag.Message = "";
                ViewBag.Code = "000";
                ViewBag.RegistrationType = Convert.ToString(Session["RegistrationType"]);
                return View(reguser);
            }
            catch (Exception ex)
            {

                string Message = Helper.ReturnException(ex);
                CommonMethods.AddtoLogFile("Caf Update" + DateTime.Now + "Error : " + Message);

                ViewBag.Message = Message;
                ViewBag.Code = "999";
                return View(reguser);
            }
        }

        #endregion

        #region DeathclaimFrom Submit
        [HttpPost]
        public ActionResult DeathclaimFrom(IEnumerable<HttpPostedFileBase> files)
        {
            RegResponse Ress = new RegResponse();
            if (ConfigurationManager.AppSettings["IsEnableSiteAlert"] == "1")
            {
                Ress.Alertheader = ConfigurationManager.AppSettings["AlertSiteHeader"];
                Ress.Message = ConfigurationManager.AppSettings["AlertSiteMessage"];
                Ress.Code = "555";
                return RedirectToAction("StorageIssue", "Registration");
            }
            RegistartionForUser reguser = new RegistartionForUser();

            ViewBag.Userid = Request.Form["DepUserid"].ToString();
            ViewBag.RegistrationType = Request.Form["RegType"].ToString();

            Session["RegistrationType"] = Request.Form["RegType"].ToString();
            string BenificiaryId = "";

            reguser.self = HB.GetAllListofind(1);
            reguser.unorg = HB.GetAllListofind(2);
            reguser.maritalstatus = HB.Getmaritalstatus();
            reguser.religion = HB.Getreligion();
            reguser.socategry = HB.Getcategory();
            reguser.district = HB.GetDistrict();
            reguser.wardname = HB.GetGP(0);
            reguser.subdivision = HB.Getsubdivision(0);
            reguser.psname = HB.GetPS(0);
            reguser.muncorpname = HB.Getblock(0, 0);
            reguser.bankname = HB.GetBank(0);
            reguser.branchname = HB.GetBranch(0);
            reguser.issueAuthName = HB.GetIssueauth();
            reguser.poname = HB.GetPO(0);
            reguser.locname = HB.GetLocation(0, 0);
            reguser.WorkType = HB.GetWorkType("C");
            try
            {
                //Geting file saving path from config
                // string FolderPath = ConfigurationManager.AppSettings["FolderPath"].ToString();

                string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string RegDate = Request.Form["Regdate"].ToString();
                string currentDate = RegDate;
                string[] dat = currentDate.Split('-');
                DateTime FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));

                string BenfiDob = Request.Form["ddlyr"].ToString() + "/" + Request.Form["ddlmnth"].ToString() + "/" + Request.Form["ddlday"].ToString();
                DateTime bdob = Convert.ToDateTime(BenfiDob);
                string benficiarydob = Convert.ToString(bdob);
                benficiarydob = benficiarydob.Replace("12:00:00 AM", " ");
                string FamCount = Request.Form["FamCount"].ToString();
                int fccount = Convert.ToInt32(FamCount);
                string pfstatus = Request.Form["CheckPfStatus"].ToString();
                string DependentStatus = Request.Form["DependentStatus"].ToString();
                int DepUpLoadCount = Convert.ToInt32(FamCount) - 1;
                int checkcount = 0;
                if (DependentStatus != "Yes")
                {
                    DepUpLoadCount = 0;
                }
                if (DependentStatus == "Yes")
                {
                    checkcount = DepUpLoadCount;
                }
                string BenAddress = Request.Form["BenAddress"].ToString();
                string[] BenAddwords = BenAddress.Split('$');
                string NamCount = Request.Form["NamCount"].ToString();
                int NaCount = Convert.ToInt32(NamCount);
                string NomineeStatus = Request.Form["NomineeStatus"].ToString();
                string usermobileno = Request.Form["mobno"].ToString();

                string registrationno = Request.Form["existregno"] == null ? "" : Request.Form["existregno"].ToString();

                string PhotoFilname = "";
                string SigFilname = "";
                string IdentityFilname = "";
                string BankFileName = "";
                string FormName = "";
                string AadharFile = "";
                string OtherDocFilename = "";
                string SchemeCertFile = "";
                string OldSchemeCertFile = "";
                string Fone = string.Empty;
                string Ftwo = string.Empty;
                string Fthree = string.Empty;
                string FFour = string.Empty;
                string FFive = string.Empty;
                string FSix = string.Empty;
                string fileName = string.Empty;
                string destinationPath = string.Empty;
                List<string> FilePath = new List<string>();
                List<string> NamesSave = new List<string>();
                string Bensno = Request.Form["Bensno"].ToString();
                BenificiaryId = Request.Form["Bensno"].ToString();
                var supportedTypes = new[] { "jpg", "jpeg", "png" };
                if (Request.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Files.Count; i++)
                    {
                        var file = Request.Files[i];
                        string SavePath = "";
                        fileName = Path.GetFileName(Request.Files[i].FileName);
                        if (DepUpLoadCount > 0 && checkcount > 0)
                        {
                            if (i == 3 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 4 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 5 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 6 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 7 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }
                            if (i == 8 && fileName == "")
                            {
                                checkcount = checkcount - 1;
                            }

                        }
                        destinationPath = Path.Combine(Server.MapPath("~/UploadFiles/"), fileName);
                        string bankfilename = destinationPath;
                        if (file != null && file.ContentLength > 0)
                        {

                            var name = fileName;
                            if (file.ContentLength < 2000000)
                            {
                                //var name = fileName;
                                if (i == 0)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Aadhar/"), Bensno + "_" + Tdate + "_" + fileName);
                                    AadharFile = "/UploadFiles/Aadhar/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 1)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/IdProofs/"), Bensno + "_" + Tdate + "_" + fileName);
                                    IdentityFilname = "/UploadFiles/IdProofs/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (i == 2)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/BankPassBook/"), Bensno + "_" + Tdate + "_" + fileName);
                                    BankFileName = "/UploadFiles/BankPassBook/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                if (DepUpLoadCount > 0 && checkcount > 0)
                                {
                                    if (i == 3)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fone = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 4)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Ftwo = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 5)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        Fthree = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 6)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFour = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 7)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FFive = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                    if (i == 8)
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/DependentPassbook/"), Bensno + "_" + Tdate + "_" + fileName);
                                        FSix = "/UploadFiles/DependentPassbook/" + Bensno + "_" + Tdate + "_" + fileName;
                                        checkcount = checkcount - 1;
                                    }
                                }
                                if (i == 3 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Form/"), Bensno + "_" + Tdate + "_" + fileName);
                                    FormName = "/UploadFiles/Form/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 4 + DepUpLoadCount)
                                {
                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Photos/"), Bensno + "_" + Tdate + "_" + fileName);
                                        PhotoFilname = "/UploadFiles/Photos/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid Photo File Format";
                                        ViewBag.Code = "998";
                                        return View(reguser);
                                    }
                                }
                                if (i == 5 + DepUpLoadCount)
                                {

                                    var fileExt = System.IO.Path.GetExtension(fileName).Substring(1);
                                    if (supportedTypes.Contains((fileExt).ToLower()))
                                    {
                                        SavePath = Path.Combine(Server.MapPath("~/UploadFiles/Signatures/"), Bensno + "_" + Tdate + "_" + fileName);
                                        SigFilname = "/UploadFiles/Signatures/" + Bensno + "_" + Tdate + "_" + fileName;
                                    }
                                    else
                                    {
                                        ViewBag.Message = "Invalid Signature File Format";
                                        ViewBag.Code = "998";
                                        return View(reguser);
                                    }


                                }
                                if (i == 6 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OldSchemePassBook/"), Bensno + "_" + Tdate + "_" + fileName);
                                    OldSchemeCertFile = "/UploadFiles/OldSchemePassBook/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 7 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/SchemeCertificate/"), Bensno + "_" + Tdate + "_" + fileName);
                                    SchemeCertFile = "/UploadFiles/SchemeCertificate/" + Bensno + "_" + Tdate + "_" + fileName;
                                }
                                if (i == 8 + DepUpLoadCount)
                                {
                                    SavePath = Path.Combine(Server.MapPath("~/UploadFiles/OtherDoc/"), Bensno + "_" + Tdate + "_" + fileName);
                                    OtherDocFilename = "/UploadFiles/OtherDoc/" + Bensno + "_" + Tdate + "_" + fileName;
                                }

                                //Compress File
                                //Compress File
                                var fileExtbased = System.IO.Path.GetExtension(fileName).Substring(1);


                                //Checking file length and compress morethan 25 kb
                                if (file.ContentLength / 1024 > CompressAbove && Compression == "Yes")
                                {
                                    //Cpmpress Files other than pdf
                                    if (supportedTypes.Contains((fileExtbased).ToLower()))
                                    {
                                        string filename = Path.GetFileName(Request.Files[i].FileName);
                                        string targetPath = (SavePath);
                                        Stream strm = Request.Files[i].InputStream;
                                        var targetFile = targetPath;
                                        //Based on scalefactor image size will vary
                                        CompressImage(CompressValue, strm, targetFile);
                                    }

                                    //Cpmpress Files  pdf

                                    else
                                    {
                                        //  System.IO.File.Delete(SavePath);
                                        file.SaveAs(SavePath);
                                        FilePath.Add(SavePath);
                                        NamesSave.Add(name);
                                        //  CompressPdf(SavePath);

                                    }
                                }

                                else
                                {
                                    //  System.IO.File.Delete(SavePath);
                                    file.SaveAs(SavePath);
                                    FilePath.Add(SavePath);
                                    NamesSave.Add(name);
                                }
                            }
                            else
                            {
                                ViewBag.Message = "Invalid " + name + " File Length";
                                ViewBag.Code = "998";
                                return View(reguser);
                            }
                        }
                    }

                }

                string Occupation = Request.Form["Workertype"].ToString();
                string Source = "";

                if (Occupation == "ConstructionWorker")
                    Source = "2";
                if (Occupation == "TransportWorker")
                    Source = "3";
                if (Occupation == "Others")
                    Source = "1";



                string Aadharcard = Request.Form["Aadharcard"] == null ? "" : Request.Form["Aadharcard"].ToString();
                string EpicCard = Request.Form["epiccard"] == null ? "" : Request.Form["epiccard"].ToString();

                string bankbranc = ""; // Request.Form["brnch"].ToString();
                string docxml = "<BenDetails>";
                docxml += "<BenSalutation>" + "" + "</BenSalutation>";
                docxml += "<BenRegDate>" + FinalRegDate + "</BenRegDate>";
                docxml += "<BenFirstName>" + Request.Form["FirstName"].ToString() + "</BenFirstName>";
                docxml += "<BenLastName>" + Request.Form["lstname"].ToString() + "</BenLastName>";
                docxml += "<BenMiddleName>" + Request.Form["Middlename"].ToString() + "</BenMiddleName>";
                docxml += "<BenDob>" + bdob + "</BenDob>";
                docxml += "<BenGender>" + Request.Form["bengender"].ToString() + "</BenGender>";
                docxml += "<Age>" + Request.Form["age"].ToString() + "</Age>";
                docxml += "<BenMaritalStatus>" + Request.Form["maritalid"].ToString() + "</BenMaritalStatus>";
                docxml += "<BenFatherFirstName>" + Request.Form["FatherName"].ToString() + "</BenFatherFirstName>";
                docxml += "<AadharCard>" + Request.Form["Aadharcard"].ToString() + "</AadharCard>";
                docxml += "<BenOtherDoc>" + OtherDocFilename + "</BenOtherDoc>";
                docxml += "<EpicCard>" + Request.Form["epiccard"].ToString() + "</EpicCard>";
                docxml += "<BankAccNo>" + Request.Form["actnumber"].ToString() + "</BankAccNo>";
                docxml += "<BenAadhar>" + AadharFile + "</BenAadhar>";
                docxml += "<BenReligion>" + Request.Form["relgid"].ToString() + "</BenReligion>";
                docxml += "<BenSocialCategory>" + Request.Form["socatid"].ToString() + "</BenSocialCategory>";
                docxml += "<BenBplStatus>" + Request.Form["bplstatus"].ToString() + "</BenBplStatus>";
                docxml += "<BenBplNo>" + Request.Form["bplno"].ToString() + "</BenBplNo>";
                docxml += "<HusbandName>" + Request.Form["HusbandName"].ToString() + "</HusbandName>";
                docxml += "<email>" + Request.Form["email"].ToString() + "</email>";
                docxml += "<BenOccupation>" + Request.Form["Occupation"].ToString() + "</BenOccupation>";
                docxml += "<BenMobileNo>" + Request.Form["mobno"].ToString() + "</BenMobileNo>";
                docxml += "<BenNomMobileNo>" + Request.Form["Nommobno"].ToString() + "</BenNomMobileNo>";
                docxml += "<BenDeathCertificateNo>" + Request.Form["DeathCertiNumber"].ToString() + "</BenDeathCertificateNo>";
                docxml += "<MotherName>" + Request.Form["MotherName"].ToString() + "</MotherName>";
                docxml += "<Source>" + Source + "</Source>";



                if (Request.Form["Workertype"].ToString() == "Others")
                {
                    docxml += "<BenSelfEmployed>" + Request.Form["SelfEmpNo"].ToString() + "</BenSelfEmployed>";

                    if (Request.Form["SelfEmpNo"].ToString() == "" || Request.Form["SelfEmpNo"].ToString() == null)
                    {
                        ViewBag.Message = "If employee type is others self employed or Unorganised Industries are mandatory";
                        ViewBag.Code = "998";
                        return View(reguser);
                    }

                }
                else
                {
                    docxml += "<BenSelfEmployed>" + "" + "</BenSelfEmployed>";
                    docxml += "<BenOccupationType>" + Request.Form["Worktype"].ToString() + "</BenOccupationType>";
                    if (Request.Form["WorkType"].ToString() == "7" || Request.Form["WorkType"].ToString() == "11")
                    {
                        docxml += "<BenOccupationDesc>" + Request.Form["BenOccupationDesc"].ToString().Trim() + "</BenOccupationDesc>";
                    }
                    else
                    {
                        docxml += "<BenOccupationDesc>" + "" + "</BenOccupationDesc>";
                    }
                }

                docxml += "<BenEstablishedAddress>" + Request.Form["estbaddress"].ToString() + "</BenEstablishedAddress>";
                docxml += "<BenMonthlyIncom >" + Request.Form["mnthyincme"].ToString() + "</BenMonthlyIncom >";
                docxml += "<BankDist>" + Request.Form["BankDisId"].ToString() + "</BankDist>";
                docxml += "<BankLoc>" + Request.Form["BankLoca"].ToString() + "</BankLoc>";
                docxml += "<BenBankName>" + "" + "</BenBankName>"; //Request.Form["bnk"].ToString()
                docxml += "<BenBankBranch>" + bankbranc + "</BenBankBranch>";
                docxml += "<BenBankAccNo>" + "" + "</BenBankAccNo>"; //Request.Form["actnumber"].ToString()
                docxml += "<BenBankIfscCode>" + "" + "</BenBankIfscCode>"; //Request.Form["ifsccode"].ToString()

                if (Request.Form["formstatus"].ToString() == "Yes")
                {
                    docxml += "<BenIssuingAuth>" + Request.Form["issueauth"].ToString() + "</BenIssuingAuth>";
                    docxml += "<BenIssuingAuthName>" + Request.Form["authname"].ToString() + "</BenIssuingAuthName>";
                }
                else
                {
                    docxml += "<BenIssuingAuth>" + "" + "</BenIssuingAuth>";
                    docxml += "<BenIssuingAuthName>" + "" + "</BenIssuingAuthName>";
                }


                docxml += "<BenPassBook>" + BankFileName + "</BenPassBook>";
                docxml += "<BenIdentity>" + IdentityFilname + "</BenIdentity>";
                docxml += "<BenSignature>" + SigFilname + "</BenSignature>";
                docxml += "<BenPhoto>" + PhotoFilname + "</BenPhoto>";
                docxml += "<BenForm>" + FormName + "</BenForm>";
                docxml += "<BenProvisionNo>" + Request.Form["esinum"].ToString() + "</BenProvisionNo>";
                docxml += "<BenEmpType>" + Request.Form["Workertype"].ToString() + "</BenEmpType>";
                docxml += "<BenEsiNumber>" + Request.Form["esi"].ToString() + "</BenEsiNumber>";
                if (pfstatus == "0")
                {
                    docxml += "<BenPFStatus>" + "0" + "</BenPFStatus>";
                }
                else
                {
                    docxml += "<BenPFStatus>" + Request.Form["pfsta"].ToString() + "</BenPFStatus>";
                }
                //2,3,4,8
                docxml += "<IfscReason>" + Request.Form["txtreason"].ToString() + "</IfscReason>";
                docxml += "<Schemecertificate>" + SchemeCertFile + "</Schemecertificate>";
                docxml += "<OldSchemePassBook>" + OldSchemeCertFile + "</OldSchemePassBook>";
                docxml += "<AuthorityLocation>" + Request.Form["authloc"].ToString() + "</AuthorityLocation>";
                docxml += "<SalFather>" + Request.Form["ddlfathrsname"].ToString() + "</SalFather>";
                docxml += "<SalHusband>" + Request.Form["ddlhusname"].ToString() + "</SalHusband>";
                docxml += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                docxml += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision>";
                docxml += "<BenBmc>" + BenAddwords[4].ToString() + "</BenBmc>";
                docxml += "<BenGpWard>" + BenAddwords[8].ToString() + "</BenGpWard>";
                docxml += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                docxml += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                docxml += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                docxml += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";

                docxml += "</BenDetails>";
                string AddDoc = "<BenAddress>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[0] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[1] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[2] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[3] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[4] + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[9] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[5] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[6] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[7] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[8] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[20] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[22] + "</AddressIdentity></BenAddres>";
                AddDoc += "<BenAddres><BenAddressType>" + BenAddwords[10] + "</BenAddressType>";
                AddDoc += "<BenState>" + BenAddwords[11] + "</BenState>";
                AddDoc += "<BenDistrict>" + BenAddwords[12] + "</BenDistrict>";
                AddDoc += "<BenSubDivision>" + BenAddwords[13] + "</BenSubDivision >";
                AddDoc += "<BenBmc>" + BenAddwords[14].ToString() + "</BenBmc>";
                AddDoc += "<BenVsr>" + BenAddwords[19] + "</BenVsr>";
                AddDoc += "<BenPs>" + BenAddwords[15] + "</BenPs>";
                AddDoc += "<BenPo>" + BenAddwords[16] + "</BenPo>";
                AddDoc += "<BenPincode>" + BenAddwords[17] + "</BenPincode>";
                AddDoc += "<BenGpWard>" + BenAddwords[18] + "</BenGpWard>";
                AddDoc += "<LocType>" + BenAddwords[21] + "</LocType>";
                AddDoc += "<AddressIdentity>" + BenAddwords[23] + "</AddressIdentity></BenAddres>";
                AddDoc += "</BenAddress>";
                string dependoc = "";
                if (DependentStatus == "Yes")
                {
                    string BenFamdet = Request.Form["BenFamdet"].ToString();
                    string[] BenFamdetwords = BenFamdet.Split('~');
                    dependoc = "<DependantDetails>";
                    for (int i = 0; i < fccount - 1; i++)
                    {
                        string famdet = BenFamdetwords[i];
                        string[] splitfamdet = famdet.Split('$');
                        string[] date = splitfamdet[4].Split('-');
                        string Filename = "";
                        if (i == 0)
                        {
                            Filename = Fone;
                        }
                        if (i == 1)
                        {
                            Filename = Ftwo;
                        }
                        if (i == 2)
                        {
                            Filename = Fthree;
                        }
                        if (i == 3)
                        {
                            Filename = FFour;
                        }
                        if (i == 4)
                        {
                            Filename = FFive;
                        }
                        if (i == 5)
                        {
                            Filename = FSix;
                        }
                        string upload = Filename;
                        DateTime FamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = FamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");

                        dependoc += "<DependantDetail><BenDependentRelation>" + splitfamdet[2] + "</BenDependentRelation>";
                        dependoc += "<BenFamilySchRegNo>" + splitfamdet[0] + "</BenFamilySchRegNo>";
                        dependoc += "<BenDependentName>" + splitfamdet[1] + "</BenDependentName>";
                        dependoc += "<BenFamilyGender>" + splitfamdet[3] + "</BenFamilyGender>";
                        dependoc += "<BenFamilyAge>" + splitfamdet[5] + "</BenFamilyAge>";
                        dependoc += "<BenFamilyAadhaarNo>" + splitfamdet[6] + "</BenFamilyAadhaarNo>";
                        dependoc += "<BenFamilyIdentity>" + splitfamdet[7] + "</BenFamilyIdentity>";
                        dependoc += "<Dob>" + depdate + "</Dob>";
                        if (splitfamdet[8] != null)
                            dependoc += "<BenDependentRelationId>" + splitfamdet[8] + "</BenDependentRelationId>";

                        dependoc += "<SchemPassBook>" + upload + "</SchemPassBook></DependantDetail>";
                    }
                    dependoc += "</DependantDetails>";
                }
                string Namdoc = "";
                if (NomineeStatus == "Yes")
                {
                    string Bennamedet = Request.Form["Bennamedet"].ToString();
                    string[] Bennamedetwords = Bennamedet.Split('~');
                    Namdoc = "<BenNomineeDtls>";
                    for (int i = 0; i < NaCount - 1; i++)
                    {
                        string namdet = Bennamedetwords[i];
                        string[] splitnamdet = namdet.Split('$');
                        string[] date = splitnamdet[4].Split('-');
                        DateTime NamDobDate = new DateTime(Convert.ToInt32(date[2]), Convert.ToInt32(date[1]), Convert.ToInt32(date[0]));
                        string depdate = NamDobDate.ToString("MM/dd/yyyy HH:mm:ss").Replace("-", "/").Replace(".", ":");
                        Namdoc += "<BenNomineeDtl><BenNomineeName>" + splitnamdet[0] + "</BenNomineeName>";
                        Namdoc += "<BenNomineeRelation>" + splitnamdet[1] + "</BenNomineeRelation>";
                        Namdoc += "<BenNomineeGender>" + splitnamdet[2] + "</BenNomineeGender>";
                        Namdoc += "<BenNomineeAge>" + splitnamdet[3] + "</BenNomineeAge>";
                        Namdoc += "<BenNomineeShareAllocation>" + splitnamdet[5] + "</BenNomineeShareAllocation>";
                        Namdoc += "<BenNomineeBankName>" + splitnamdet[10] + "</BenNomineeBankName>";
                        Namdoc += "<BenNomineeBankAccNo>" + splitnamdet[8] + "</BenNomineeBankAccNo>";
                        Namdoc += "<BenNomineeBankBranch>" + splitnamdet[6] + "</BenNomineeBankBranch>";
                        Namdoc += "<BenNomineeBankIfscCode>" + splitnamdet[7] + "</BenNomineeBankIfscCode>";
                        Namdoc += "<BenNomineeIdentity>" + splitnamdet[9] + "</BenNomineeIdentity>";
                        Namdoc += "<BenNomineeRelationId>" + splitnamdet[11] + "</BenNomineeRelationId>";
                        Namdoc += "<Dob>" + depdate + "</Dob></BenNomineeDtl>";
                    }
                    Namdoc += "</BenNomineeDtls>";
                }
                string finalXml = "<Details>" + docxml + AddDoc + dependoc + Namdoc + "</Details>";
                Int64 CreatedBy = Convert.ToInt64(Request.Form["DepUserid"].ToString());
                string password = "Password";
                //string res = Rb.BenfDeathtest(finalXml, CreatedBy, usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard);
                string res = Rb.BenfDeathtestExt(finalXml, CreatedBy, usermobileno, Convert.ToInt64(Bensno), password, Aadharcard, EpicCard, registrationno);
                //End Form Xml
                if (res == "Success")
                {
                    ViewBag.Message = "Additional data of the beneficiary has been submitted. You will be notified post approval for further procedings";
                    ViewBag.Code = "000";
                    string Email = Request.Form["email"].ToString();
                    string FromEmail = ConfigurationManager.AppSettings["EmailSender"];
                    string MobileNumber = Request.Form["Nommobno"].ToString();
                    // string Message = "Thank you for applying for SSY. To check status, log in at SSY.wblabour.gov.in with User ID: " + MobileNumber + "  and Password:" + password;
                    string Message = "Thank you for providing additional information for benefit under SSY. To check status, please log in at  SSY.wblabour.gov.in for details";

                    CommonMethods.SendBillSms(MobileNumber, Message, 0, "Existing Bene Reg", "Bene");
                    if (!string.IsNullOrEmpty(Email))
                        CommonMethods.SendMail_WithHtml(Email, FromEmail, Message, "Existing User Credentials");
                    return View(reguser);
                }
                else
                {
                    ViewBag.Message = res;
                    ViewBag.Code = "000";
                    return View(reguser);
                }
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                ViewBag.Message = Message;
                ViewBag.Code = "999";
                CommonMethods.AddtoLogFile("Existing Registration : " + BenificiaryId + DateTime.Now + "Error : " + Message);
                ViewBag.Message = ex.Message.ToString();
                return View(reguser);
            }
        }

        #endregion


        #region Changed Documents

        public ActionResult GetChangedDocuments(Int64 bensno)
        {
            try
            {
                Int64 userid = 0;
                if (bensno == 0)
                {
                    userid = Convert.ToInt64(Session["Userid"]);
                }
                else
                {
                    userid = bensno;
                }
                var res = Rb.GetDocumentDetails(Convert.ToInt64(userid));

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }


        #endregion

        #region Slo Change

        public ActionResult EditSlochange()
        {
            RegistartionForUser reguser = new RegistartionForUser();
            try
            {
                string userId = Convert.ToString(Session["Userid"]);

                var beniDet = HB.GetBeniDetails(Convert.ToInt64(userId));

                var slo = HB.GetSLOForBen(Convert.ToInt64(userId));

                var ClaimCount = HB.GetClaimCount(Convert.ToInt64(userId));
                ViewBag.status = beniDet.Status;
                string StatusName = "";
                //if (beniDet.Status == 0)
                //{
                //	StatusName = "Pending";
                //}
                //if (beniDet.Status == 1)
                //{
                //	StatusName = "Approved";
                //}
                //if (beniDet.Status == 2)
                //{
                //	StatusName = "Rejected";
                //}
                //if (beniDet.Status == 3)
                //{
                //	StatusName = "Sent back";
                //}
                ViewBag.StatusName = StatusName;
                ViewBag.Count = HB.GetPersonalHusbandCount(userId);
                ViewBag.Bensno = userId;
                ViewBag.ClaimCount = ClaimCount;
                ViewBag.Sloid = slo.CurrentSLO;
                ViewBag.Sloname = slo.SLOName;
                ViewBag.Mobileno = beniDet.BenMobileNo;

                reguser.district = HB.GetDistrict();
                reguser.bankname = HB.GetTotalBank();
                reguser.branchname = HB.GetBranch(Convert.ToInt32(beniDet.BankLoc));
                reguser.locname = HB.GetLocation(Convert.ToInt32(beniDet.BenBankName), Convert.ToInt32(beniDet.BankDist));
                reguser.FirstName = beniDet.BenFirstName;
                reguser.LastName = beniDet.BenLastName;
                reguser.Middlename = beniDet.BenMiddleName;
                reguser.BDob = (beniDet.BenDob).ToString().Replace("12:00:00 AM", "");
                reguser.HusbandName = beniDet.HusbandName;
                ViewBag.Gender = beniDet.BenGender;

                return View(reguser);
            }
            catch (Exception ex)
            {
                CommonMethods.LogError("Slo Change Error due to : " + ex.Message, "Userid : " + Convert.ToString(Session["Userid"]), Convert.ToString(ex.InnerException), "EditSlochange", "RegistrationController");
                return RedirectToAction("Index", "Home");
            }
        }

        #endregion

        #region Get PF Balance details

        public ActionResult GetPFBalanceDetails(string PfNumber)
        {
            try
            {
                var res = Rb.GetPFBalanceDetails(PfNumber);

                return Json(res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                return Json(Message, JsonRequestBehavior.AllowGet);
            }

        }
        #endregion

        #region Commission calculation

        public ActionResult CommCalculation()
        {
            try
            {
                return View();
            }
            catch (Exception ex)
            {
                return RedirectToAction("Index", "Home");
            }
        }
        #endregion

        private bool IsValidSqlDateTimeNative(string someval)
        {
            bool valid = false;
            DateTime testDate = DateTime.MinValue;
            System.Data.SqlTypes.SqlDateTime sdt;
            if (DateTime.TryParse(someval, out testDate))
            {
                try
                {
                    // take advantage of the native conversion
                    sdt = new System.Data.SqlTypes.SqlDateTime(testDate);
                    valid = true;
                }
                catch (System.Data.SqlTypes.SqlTypeException ex)
                {

                    // no need to do anything, this is the expected out of range error
                }
            }

            return valid;
        }
    }
}