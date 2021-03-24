using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using iTextSharp.text;
using iTextSharp.text.pdf;
using SSY.Bussiness;
using SSY.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Reflection;
using System.Text;
using System.Web;
using System.Web.SessionState;

using System.Xml;
using System.Net;
using System.IO;
using SSY.Others;
namespace SSYNEW.Others
{
    public class Helper
    {
        static private DataTable ResultsData = new DataTable();

        static private DataTable RegResultsData = new DataTable();
        public static string dateconvertion(string date)
        {
            string d = DateTime.ParseExact(date, "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
            return d;
        }
        //#region
        //public static string SendBillSms(string toNumber, string message, Int64 UserId, string MessageType, string UserType)
        //{
        //    SSYEntities db = new SSYEntities();
        //    string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");

        //    string reqid = "SSY" + date;
        //    try
        //    {




        //        string Url = ConfigurationManager.AppSettings["SmsCountryUrlSendSms"];
        //        string UserName = ConfigurationManager.AppSettings["SmsCountryUser"];
        //        string PassWord = ConfigurationManager.AppSettings["SmsCountryPwd"];

        //        var res = db.SpSendSMS(1, message, 0, MessageType, UserType, reqid, toNumber);

        //        HttpWebRequest HttpWReq; ;

        //        HttpWReq = (HttpWebRequest)WebRequest.Create(Url + "User=" + UserName + "&passwd=" + PassWord + "&mobilenumber=" + toNumber + "&message=" + message + "&sid=" + "SMSCntry" + "&mtype=" + "N" + "&DR=" + "Y");
        //        HttpWReq.Method = "POST";
        //        HttpWReq.ContentLength = 0;
        //        HttpWebResponse response = (HttpWebResponse)HttpWReq.GetResponse();
        //        Stream datastream = response.GetResponseStream();
        //        StreamReader reader = new StreamReader(datastream);
        //        string responseFromServer = reader.ReadToEnd();

        //        if (responseFromServer.Contains("OK:"))
        //        {

        //            responseFromServer = responseFromServer.Replace("OK:", "");
        //        }


        //        var Res1 = db.SpUpdateSMS("", responseFromServer, reqid);

        //        reader.Close();
        //        datastream.Close();
        //        response.Close();
        //        return "";
        //    }
        //    catch (Exception ex)
        //    {
        //        string Message = "";

        //        if (ex.Message.ToString() == null)
        //            Message = ex.InnerException.Message.ToString();
        //        else
        //            Message = ex.Message.ToString();

        //        var Res1 = db.SpUpdateSMS("",Message,reqid);

        //        return "";
        //    }
        //}
        //#endregion
        public static string SendMail_WithHtml(string Tomail, string FromMail, string Body, string Subject)
        {
            try
            {
                if (Tomail != null && Tomail != "")
                {
                    using (MailMessage mailMessage = new MailMessage())
                    {
                        mailMessage.From = new MailAddress(FromMail);
                        mailMessage.Subject = Subject;
                        mailMessage.Body = Body;
                        mailMessage.IsBodyHtml = true;
                        mailMessage.To.Add(Tomail.ToString());
                        mailMessage.CC.Add(FromMail.ToString());
                        SmtpClient smtp = new SmtpClient();
                        smtp.Host = ConfigurationManager.AppSettings["SMTPHost"];
                        smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
                        System.Net.NetworkCredential NetworkCred = new System.Net.NetworkCredential();
                        NetworkCred.UserName = ConfigurationManager.AppSettings["EmailSender"];
                        NetworkCred.Password = ConfigurationManager.AppSettings["EmailPassword"];
                        smtp.UseDefaultCredentials = true;
                        smtp.Credentials = NetworkCred;
                        smtp.Port = int.Parse(ConfigurationManager.AppSettings["SMTPPort"]);
                        smtp.Send(mailMessage);
                        return "sucess";
                    }
                }
                else
                    return "";
            }
            catch (Exception ex)
            {
                return "";
            }
        }
        void SendMail(object msg)
        {
            try
            {
                MailMessage mail = (MailMessage)msg;
                mail.From = new MailAddress(ConfigurationManager.AppSettings["EmailSender"]);
                mail.IsBodyHtml = true;
                //  configure email settings
                SmtpClient smtp = new SmtpClient(ConfigurationManager.AppSettings["SMTPHost"].ToString(), Convert.ToInt32(ConfigurationManager.AppSettings["SMTPPort"]));
                smtp.EnableSsl = true;
                NetworkCredential netCre = new NetworkCredential(ConfigurationManager.AppSettings["EmailSender"], ConfigurationManager.AppSettings["EmailPassword"]);
                smtp.Credentials = netCre;
                smtp.Send(mail);
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                throw new Exception(ex.Message);
            }
            finally
            {
            }
        }
        public static string GenerateRandomMpin()
        {
            const string chars = "0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, 4)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }
        //public static void SmcCardPDF(HttpResponseBase Response, string FrontImage, string BackImage, string PhotoImage, string Number, string Name, string Signature, string BengaliName)
        //{
        //   // var worker = XMLWorkerHelper.GetInstance();
        //    Response.ContentType = "application/pdf";
        //    Response.AddHeader("content-disposition", "attachment;filename=test.pdf");
        //    Response.Cache.SetCacheability(HttpCacheability.NoCache);
        //   // var stream = new StreamReader(strHTMLpath, Encoding.Default).ReadToEnd();
        //   // HTMLWorker.ParseToList(new StreamReader(strHTMLpath, Encoding.UTF8), styles); 
        //    BaseFont bf = BaseFont.CreateFont(Environment.GetEnvironmentVariable("windir") + @"\fonts\ARIALUNI.TTF", BaseFont.IDENTITY_H, true);
        //    ////image front path
        //    string imageFilePath = FrontImage;
        //    iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance(imageFilePath);
        ////    iTextSharp.text.Font fdefault = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
        //    iTextSharp.text.Font fdefault = new iTextSharp.text.Font(bf, 10, iTextSharp.text.Font.NORMAL);
        //   // Page site and margin left, right, top, bottom is defined
        //    Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 10f, 0f);
        //    //Resize image depend upon your need
        //    //For give the size to image
        //    jpg.ScaleToFit(200f, 150f);
        //    jpg.ScalePercent(18f);
        //    jpg.BorderWidth = 5f;
        //    jpg.BorderColor = BaseColor.YELLOW;
        //    jpg.SpacingBefore = 50f;
        //    jpg.SpacingAfter = 5f;
        //    jpg.Alignment = Element.ALIGN_LEFT;
        //    jpg.Alignment = iTextSharp.text.Image.UNDERLYING;
        //    PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
        //    pdfDoc.Open();
        //    pdfDoc.NewPage();
        //    ////change
        //    Paragraph paragraph = new Paragraph("\n\n\n SSIN :" + Number + "   \n Name :" + Name + " \n নাম : " + "শ্রীকার বাইদ্যা", fdefault);
        //    pdfDoc.Add(jpg);
        //    pdfDoc.Add(paragraph);
        //    //image back path
        //    string imageFilePathback = BackImage;
        //    iTextSharp.text.Image png = iTextSharp.text.Image.GetInstance(imageFilePathback);
        //    png.ScaleToFit(200f, 150f);
        //    png.SetAbsolutePosition(10, 500);
        //    png.ScalePercent(18f);
        //    png.BorderWidth = 5f;
        //    png.BorderColor = BaseColor.YELLOW;
        //    png.SpacingBefore = 50f;
        //    png.SpacingAfter = 5f;
        //    png.Alignment = Element.ALIGN_RIGHT;
        //    png.Alignment = iTextSharp.text.Image.UNDERLYING;
        //   // paragraph = new Paragraph("\n\n\n\n\n\n\n\n\n    Department \n    Department", fdefault);
        //    pdfDoc.Add(png);
        //  //  pdfDoc.Add(paragraph);
        //    //photo
        //    string imagepassport = PhotoImage;
        //    iTextSharp.text.Image pngpassport = iTextSharp.text.Image.GetInstance(imagepassport);
        //    pngpassport.ScaleToFit(560f, 30f);
        //    pngpassport.SetAbsolutePosition(200, 722);
        //    pngpassport.ScalePercent(25f);
        //    pngpassport.BorderWidth = 5f;
        //    pngpassport.BorderColor = BaseColor.YELLOW;
        //    pngpassport.SpacingBefore = 50f;
        //    pngpassport.SpacingAfter = 5f;
        //    pngpassport.Alignment = Element.ALIGN_RIGHT;
        //    pngpassport.Alignment = iTextSharp.text.Image.UNDERLYING;
        //    pdfDoc.Add(pngpassport);
        //    //Signature
        //    string signature = Signature;
        //    iTextSharp.text.Image pngsignatr = iTextSharp.text.Image.GetInstance(signature);
        //    pngsignatr.ScaleToFit(560f, 30f);
        //    pngsignatr.SetAbsolutePosition(190, 700);
        //    pngsignatr.ScalePercent(25f);
        //    pngsignatr.BorderWidth = 5f;
        //    pngsignatr.BorderColor = BaseColor.YELLOW;
        //    pngsignatr.SpacingBefore = 50f;
        //    pngsignatr.SpacingAfter = 5f;
        //    pngsignatr.Alignment = Element.ALIGN_RIGHT;
        //    pngsignatr.Alignment = iTextSharp.text.Image.UNDERLYING;
        //    pdfDoc.Add(pngsignatr);
        //    pdfDoc.Close();
        //    Response.Write(pdfDoc);
        //    Response.End();
        //}
        public static void Passbook(HttpResponseBase Response, string userid)
        {
            RegistrationBussiness Rb = new RegistrationBussiness();
            //var res = Rb.GetEditBenDetails(Convert.ToInt32(userid));
            //var res1 = Rb.GetPresbenAddressDetails(Convert.ToInt32(userid));
            //var res2 = Rb.GetNamiNeeDetails(Convert.ToInt32(userid));
            Response.ContentType = "application/pdf";
            Response.AddHeader("content-disposition", "attachment;filename=SchemePassbook.pdf");
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            iTextSharp.text.Font fdefault = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
            iTextSharp.text.Font bold = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
            // Page site and margin left, right, top, bottom is defined
            Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 10f, 0f);
            PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
            pdfDoc.Open();
            pdfDoc.NewPage();
            //PdfPTable pdfheadertb = new PdfPTable(3);
            Paragraph paragraph = new Paragraph(" Form III", bold);
            paragraph.Alignment = Element.ALIGN_CENTER;
            pdfDoc.Add(paragraph);
            Paragraph paragraph1 = new Paragraph("(See clause 8.1.5(I) &amp; clause 8.1.5 (II) (c) of SSY-2017)", fdefault);
            paragraph1.Alignment = Element.ALIGN_CENTER;
            pdfDoc.Add(paragraph1);
            Paragraph paragraph2 = new Paragraph("\n\n Receipt of subscription under SSY for PF deposit.", bold);
            //paragraph2.Alignment = Element.ALIGN_CENTER;
            pdfDoc.Add(paragraph2);
            Paragraph paragraph3 = new Paragraph(" (Duplicate to be made out by other single carbon paper process)", bold);
            pdfDoc.Add(paragraph3);
            Paragraph paragraph4 = new Paragraph(" Book No. : " + "---------------", fdefault);
            pdfDoc.Add(paragraph4);
            Paragraph paragraph5 = new Paragraph(" Receipt No :  " + "------------", fdefault);
            pdfDoc.Add(paragraph5);
            Paragraph paragraph6 = new Paragraph(" Date: " + "-----------", fdefault);
            pdfDoc.Add(paragraph6);
            Paragraph paragraph7 = new Paragraph(" \n Received from Shri /Smt. " + "---------- ", fdefault);
            pdfDoc.Add(paragraph7);
            Paragraph paragraph8 = new Paragraph(" Account No : " + "--------- " + "an amount of Rs (Rupees" + "---------- \n" + " ) on account of subscription to PF under SSY for the month/ \n" + " Months of" + "------------", fdefault);
            pdfDoc.Add(paragraph8);
            Paragraph paragraph9 = new Paragraph(" \n\n Collecting Agent", bold);
            pdfDoc.Add(paragraph9);
            Paragraph paragraph10 = new Paragraph(" Panchayat Samitil Municipality I Municipal Corporation ", bold);
            pdfDoc.Add(paragraph10);
            //Paragraph paragraph15 = new Paragraph("\n\n", fdefault);
            //pdfDoc.Add(paragraph15);
            //PdfPTable table = new PdfPTable(6);
            //table.AddCell("Date of Maturity on attaining age of 60 Years");
            //table.AddCell("Name & Address of the Nominee(s)");
            //table.AddCell("Relationship with the subscriber");
            //table.AddCell("Age of Nominee(s)");
            //table.AddCell("Name of Father / Husband of the Nominee");
            //table.AddCell("SSY Account No.");
            //int Nc = res2.Count;
            //foreach (var n in res2)
            //{
            //    table.AddCell(n.Dob);
            //    table.AddCell(n.BenNomineeName);
            //    table.AddCell(n.BenNomineeRelation);
            //    table.AddCell(n.BenNomineeAge.ToString());
            //    table.AddCell("");
            //    table.AddCell("");
            //}
            //pdfDoc.Add(table);
            //Paragraph paragraph12 = new Paragraph("\n\n Signature of the Registering Authority", fdefault);
            //pdfDoc.Add(paragraph12);
            //Paragraph paragraph13 = new Paragraph(" Signature of the Holder", fdefault);
            //paragraph13.Alignment = Element.ALIGN_RIGHT;
            //pdfDoc.Add(paragraph13);
            //Paragraph paragraph14 = new Paragraph("\n\n Subscription Made:", fdefault);
            //pdfDoc.Add(paragraph14);
            //Paragraph paragraph16 = new Paragraph("\n\n", fdefault);
            //pdfDoc.Add(paragraph16);
            //PdfPTable table1 = new PdfPTable(4);
            //table1.AddCell("MONTH & YEAR FOR WHICH SUBSCRIPTION MADE");
            //table1.AddCell("DATE OF SUBSCRIPTION COLLECTION");
            //table1.AddCell("AMOUNT");
            //table1.AddCell("SIGNATURE OF COLLECTING AGENT");
            //pdfDoc.Add(table1);
            pdfDoc.Close();
            Response.Write(pdfDoc);
            Response.End();
        }
        //public static void SchemeCertificate(HttpResponseBase Response, string userid)
        //{
        //    RegistrationBussiness Rb = new RegistrationBussiness();
        //    var res = Rb.GetEditBenDetails(Convert.ToInt32(userid));
        //    var res1 = Rb.GetPresbenAddressDetails(Convert.ToInt32(userid));
        //    var res2 = Rb.GetNamiNeeDetailsCertificate(Convert.ToInt32(userid));
        //    Response.ContentType = "application/pdf";
        //    Response.AddHeader("content-disposition", "attachment;filename=SchemeCertificate.pdf");
        //    Response.Cache.SetCacheability(HttpCacheability.NoCache);
        //    iTextSharp.text.Font fdefault = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
        //    iTextSharp.text.Font bold = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
        //    // Page site and margin left, right, top, bottom is defined
        //    Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 10f, 0f);
        //    PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
        //    pdfDoc.Open();
        //    pdfDoc.NewPage();
        //    //PdfPTable pdfheadertb = new PdfPTable(3);
        //    Paragraph paragraph = new Paragraph(" Form ", bold);
        //    paragraph.Alignment = Element.ALIGN_CENTER;
        //    pdfDoc.Add(paragraph);
        //    Paragraph paragraph1 = new Paragraph("(See Clause 7 (1) (e) of SSY (RAR), 2017)", fdefault);
        //    paragraph1.Alignment = Element.ALIGN_CENTER;
        //    pdfDoc.Add(paragraph1);
        //    Paragraph paragraph2 = new Paragraph("Identity Card –Cum-Pass Book for Provident Fund under SSY Unorganized Workers", bold);
        //    paragraph2.Alignment = Element.ALIGN_CENTER;
        //    pdfDoc.Add(paragraph2);
        //    Paragraph paragraph3 = new Paragraph("\n\n Name of Gram Panchayat / Ward No: " + res1.BenGpWard, fdefault);
        //    pdfDoc.Add(paragraph3);
        //    Paragraph paragraph4 = new Paragraph(" Block / Municipality /Municipal Corporation: " + res1.BlockName, fdefault);
        //    pdfDoc.Add(paragraph4);
        //    Paragraph paragraph5 = new Paragraph(" District: " + res1.DistrictName, fdefault);
        //    pdfDoc.Add(paragraph5);
        //    Paragraph paragraph6 = new Paragraph("\n 1. Name of Benificiary: " + (res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName), fdefault);
        //    pdfDoc.Add(paragraph6);
        //    Paragraph paragraph7 = new Paragraph(" 2. Father’s/Husband’s Name: " + (res.BenFatherFirstName + ' ' + res.BenFatherMiddleName + ' ' + res.BenFatherLastName), fdefault);
        //    pdfDoc.Add(paragraph7);
        //    Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.BenIdCardNo, fdefault);
        //    pdfDoc.Add(paragraph8);
        //    Paragraph paragraph9 = new Paragraph(" 4. Permanent Address: " + res1.BenVsr, fdefault);
        //    pdfDoc.Add(paragraph9);
        //    Paragraph paragraph10 = new Paragraph(" 5. Date of Birth: " + res.BenDob, fdefault);
        //    pdfDoc.Add(paragraph10);
        //    Paragraph paragraph11 = new Paragraph(" 6. Date of enrolment in the SSY: " + res.CreatedDate, fdefault);
        //    pdfDoc.Add(paragraph11);
        //    Paragraph paragraph15 = new Paragraph("\n\n", fdefault);
        //    pdfDoc.Add(paragraph15);
        //    PdfPTable table = new PdfPTable(6);
        //    table.AddCell("Date of Maturity on attaining age of 60 Years");
        //    table.AddCell("Name & Address of the Nominee(s)");
        //    table.AddCell("Relationship with the subscriber");
        //    table.AddCell("Age of Nominee(s)");
        //    table.AddCell("Name of Father / Husband of the Nominee");
        //    table.AddCell("SSY Account No.");
        //    int Nc = res2.Count;
        //    foreach (var n in res2)
        //    {
        //        table.AddCell(n.Dob);
        //        table.AddCell(n.BenNomineeName);
        //        table.AddCell(n.BenNomineeRelation);
        //        table.AddCell(n.BenNomineeAge.ToString());
        //        table.AddCell("");
        //        table.AddCell("");
        //    }
        //    pdfDoc.Add(table);
        //    Paragraph paragraph12 = new Paragraph("\n\n Signature of the Registering Authority", fdefault);
        //    pdfDoc.Add(paragraph12);
        //    Paragraph paragraph13 = new Paragraph(" Signature of the Holder", fdefault);
        //    paragraph13.Alignment = Element.ALIGN_RIGHT;
        //    pdfDoc.Add(paragraph13);
        //    Paragraph paragraph14 = new Paragraph("\n\n Subscription Made:", fdefault);
        //    pdfDoc.Add(paragraph14);
        //    Paragraph paragraph16 = new Paragraph("\n\n", fdefault);
        //    pdfDoc.Add(paragraph16);
        //    PdfPTable table1 = new PdfPTable(4);
        //    table1.AddCell("MONTH & YEAR FOR WHICH SUBSCRIPTION MADE");
        //    table1.AddCell("DATE OF SUBSCRIPTION COLLECTION");
        //    table1.AddCell("AMOUNT");
        //    table1.AddCell("SIGNATURE OF COLLECTING AGENT");
        //    pdfDoc.Add(table1);
        //    pdfDoc.Close();
        //    Response.Write(pdfDoc);
        //    Response.End();
        //}

        public static void makePDF(HttpResponseBase Response, string userid)
        {
            Response.ContentType = "application/pdf";

            Response.AddHeader("content-disposition", "attachment;filename=test.pdf");

            Response.Cache.SetCacheability(HttpCacheability.NoCache);



            iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\SSY.LOGO.jpg");


            

            // Page site and margin left, right, top, bottom is defined
            Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 10f, 0f);

            //Resize image depend upon your need
            //For give the size to image
            jpg.ScaleToFit(3000, 770);

            //If you want to choose image as background then,

            jpg.Alignment = iTextSharp.text.Image.UNDERLYING;

            //If you want to give absolute/specified fix position to image.
            jpg.SetAbsolutePosition(7, 69);

            PdfWriter.GetInstance(pdfDoc, Response.OutputStream);

            pdfDoc.Open();

            pdfDoc.NewPage();

            Paragraph paragraph = new Paragraph("this is the testing text for demonstrate the image is in background \n\n\n this is the testing text for demonstrate the image is in background");

            pdfDoc.Add(jpg);

            pdfDoc.Add(paragraph);

            pdfDoc.Close();

            Response.Write(pdfDoc);

            Response.End();
        }
        public static void SchemeCertificate_Old(HttpResponseBase Response, string userid)
        {
            try
            {
                PdfPCell cell;
                RegistrationBussiness Rb = new RegistrationBussiness();
                var res = Rb.GetEditBenDetails(Convert.ToInt32(userid));
                var res1 = Rb.GetPresbenAddressDetails(Convert.ToInt32(userid));
                var res2 = Rb.GetNamiNeeDetailsCertificate(Convert.ToInt32(userid));
                string FHName = "";

                if (res.BenGender == "Female" && res.BenMaritalStatus == "2")
                {
                    if (res.HusbandName == "")
                    {
                        FHName = res.BenFatherFirstName;
                    }
                    else
                    {
                        FHName = res.HusbandName;
                    }
                }
                else
                {
                    FHName = res.BenFatherFirstName;
                }
                Response.ContentType = "application/pdf";
                Response.AddHeader("content-disposition", "attachment;filename=IdCardCumPassBook.pdf");
                Response.Cache.SetCacheability(HttpCacheability.NoCache);

                string PhotoBackjpg = HttpContext.Current.Server.MapPath("~/" + "/UploadFiles/SSY.LOGO.jpg");
                iTextSharp.text.Image Backjpg = iTextSharp.text.Image.GetInstance(PhotoBackjpg);
               // iTextSharp.text.Image Backjpg = iTextSharp.text.Image.GetInstance("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\SSY.LOGO.jpg");

                Backjpg.ScaleToFit(2000, 500);

                //If you want to choose image as background then,

                Backjpg.Alignment = iTextSharp.text.Image.UNDERLYING;

                //If you want to give absolute/specified fix position to image.
                //Backjpg.SetAbsolutePosition(100, 50);
                Backjpg.SetAbsolutePosition((PageSize.A4.Width - Backjpg.ScaledWidth) / 3, (PageSize.A4.Height - Backjpg.ScaledHeight) / 1);


                iTextSharp.text.Font Pdefault = FontFactory.GetFont("Segoe UI", 20, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
                iTextSharp.text.Font fdefault = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
                iTextSharp.text.Font bold = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
                // Page site and margin left, right, top, bottom is defined
                Document pdfDoc = new Document(PageSize.A4, 30f, 15f, 15f, 30f);
                pdfDoc.AddHeader("Header", "SSIN : " + res.SSIN);
                PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
                pdfDoc.Open();
                pdfDoc.NewPage();
               // pdfDoc.Add(Backjpg);

                
                string PhotoImage = HttpContext.Current.Server.MapPath("~/" + res.BenPhoto);
                iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance((PhotoImage));
              //  iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance(("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\302462_T229140000243_scan0001.jpg"));
                //jpg.ScaleToFit(400f, 400f);
                //jpg.ScalePercent(18f);
                //jpg.BorderWidth = 5f;
                //jpg.BorderColor = BaseColor.YELLOW;
                //jpg.SpacingBefore = 50f;
                //jpg.SpacingAfter = 5f;
                //jpg.Alignment = Element.ALIGN_RIGHT;
                //jpg.Alignment = iTextSharp.text.Image.UNDERLYING;
                jpg.ScaleToFit(200f, 100f);
                jpg.Alignment = Image.TEXTWRAP | Image.ALIGN_RIGHT;
                jpg.IndentationLeft = 9f;
                jpg.SpacingAfter = 9f;
                //jpg.BorderWidthTop = 36f;
                // jpg.BorderColorTop = Color.WHITE;
                PdfPTable pdfheadertb = new PdfPTable(3);
                Paragraph paragraph = new Paragraph(" Form 2", bold);
                paragraph.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph);
                Paragraph paragraph1 = new Paragraph("(See Clause 7 (1) (e) of SSY (R&R), 2017)", fdefault);
                paragraph1.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph1);
                Paragraph paragraph2 = new Paragraph("Identity Card –Cum-Pass Book for Provident Fund under SSY Unorganized Workers", bold);
                paragraph2.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(jpg);
                pdfDoc.Add(paragraph2);
                Paragraph paragraph3 = new Paragraph("\n\n Name of Gram Panchayat / Ward No : " + res1.GPName, fdefault);
                pdfDoc.Add(paragraph3);
                Paragraph paragraph4 = new Paragraph(" Block / Municipality /Municipal Corporation : " + res1.BlockName, fdefault);
                pdfDoc.Add(paragraph4);
                Paragraph paragraph5 = new Paragraph(" District : " + res1.DistrictName, fdefault);
                pdfDoc.Add(paragraph5);
                Paragraph paragraph6 = new Paragraph("\n 1. Name of Benificiary : " + (res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName), fdefault);
                pdfDoc.Add(paragraph6);
                Paragraph paragraph7 = new Paragraph(" 2. Father’s/Husband’s Name : " + (FHName), fdefault);
                pdfDoc.Add(paragraph7);

                string adhrnum = res.AadharCard;
                if (adhrnum != "" && adhrnum != null)
                {
                    Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + "********" + adhrnum.Substring(8, 4), fdefault);
                    //Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.BenIdCardNo, fdefault);
                    pdfDoc.Add(paragraph8);
                }
                else
                {
                    Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.EpicCard, fdefault);
                    //Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.BenIdCardNo, fdefault);
                    pdfDoc.Add(paragraph8);
                }


                Paragraph paragraph9 = new Paragraph(" 4. Permanent Address : \n " + ("   BLOCK/MUNICIPALITY/MUNICIPAL CORPORATION : " + res1.BlockName + ',' + " \n    P.S: " + res1.PsName + ',' + " \n    P.O: " + res1.PoName + ',' + " \n    PIN CODE: " + res1.BenPincode + ',' + " \n    GP/WARD: " + res1.GPName + ',' + " \n    VILLAGE/STREET/ROAD: " + res1.BenVsr), fdefault);
                pdfDoc.Add(paragraph9);
                Paragraph paragraph10 = new Paragraph(" 5. Date of Birth : " + res.BenDob, fdefault);
                pdfDoc.Add(paragraph10);
                //w.e.f for legacy, legacy1 legacy2 also
                if (res.RegType == "L" || (res.RegType == "N" && Convert.ToString(res.RegNumber) != "" && Convert.ToString(res.RegDate) != null))
                {
                    Paragraph paragraph11 = new Paragraph(" 6. Date of enrolment in the SSY : " + res.VerifyDate + ',' + " \n     w.e.f : " + res.RegDate, fdefault);
                    pdfDoc.Add(paragraph11);
                }
                else
                {
                    Paragraph paragraph11 = new Paragraph(" 6. Date of enrolment in the SSY : " + res.VerifyDate, fdefault);
                    pdfDoc.Add(paragraph11);
                }

                Paragraph paragraph17 = new Paragraph(" 7. SSY Account No. : " + res.SSIN, fdefault);
                pdfDoc.Add(paragraph17);

                //Paragraph paragraph17 = new Paragraph(" 6. Date of Maturity on attaining age of 60 Years: " + res., fdefault);
                //pdfDoc.Add(paragraph17);
                Paragraph paragraph15 = new Paragraph("\n\n", fdefault);
                pdfDoc.Add(paragraph15);
                PdfPTable table = new PdfPTable(4);
                table.AddCell("Date of Maturity on attaining age of 60 Years");
                table.AddCell("Name & Address of the Nominee(s)");
                table.AddCell("Relationship with the subscriber");
                table.AddCell("Age of Nominee(s)");
                // table.AddCell("Name of Father / Husband of the Nominee");
                // table.AddCell("SSY Account No.");
                int Nc = res2.Count;
                foreach (var n in res2)
                {
                    table.AddCell(n.Dob);
                    table.AddCell(n.BenNomineeName);
                    table.AddCell(n.BenNomineeRelation);
                    table.AddCell(n.BenNomineeAge.ToString());
                    //table.AddCell(n.BenNomineeGender);
                    //table.AddCell("");
                }
                pdfDoc.Add(table);
                string Signature = HttpContext.Current.Server.MapPath("~/" + res.BenSignature);

                iTextSharp.text.Image jpg1 = iTextSharp.text.Image.GetInstance(Signature);
                //iTextSharp.text.Image jpg1 = iTextSharp.text.Image.GetInstance("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\T237080000125_Sign_scan164.jpg");
                jpg1.ScaleToFit(100f, 50f);
                jpg1.Alignment = Image.TEXTWRAP | Image.ALIGN_RIGHT;
                jpg1.IndentationLeft = 5f;
                jpg1.SpacingAfter = 0f;
                pdfDoc.Add(jpg1);
        
                Paragraph paragraph12 = new Paragraph("\n\n\n Signature of the Registering Authority", bold);
                pdfDoc.Add(paragraph12);
                Paragraph paragraph13 = new Paragraph("Signature of the Holder", bold);
                paragraph13.Alignment = Element.ALIGN_RIGHT;
                pdfDoc.Add(paragraph13);
                //Devide Page pdfDoc.Close();
                pdfDoc.NewPage();
               // pdfDoc.Add(Backjpg);
                Paragraph paragraph14 = new Paragraph("Subscription Made:", Pdefault);
                paragraph14.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph14);
                Paragraph paragraph16 = new Paragraph("\n\n", fdefault);
                pdfDoc.Add(paragraph16);
                PdfPTable table1 = new PdfPTable(7);
                table1.DefaultCell.FixedHeight = 50f;
                table1.HorizontalAlignment = 0;
                table1.TotalWidth = 500f;
                table1.LockedWidth = true;
              //  float[] widths = new float[] { 40f, 120f, 80f, 90f, 80f, 70f, 120f };
                //table1.SetWidths(widths);
              

                table1.AddCell("Sl.no.");
                table1.AddCell("Month & Year For Which Subscription Made");
                table1.AddCell("Book No.");
                table1.AddCell("Receipt No.");
                table1.AddCell("Date of Collection");
                table1.AddCell("Amount");
                table1.AddCell("Signature of Collecting Agent/SLO");

   


                //for (int a = 1; a < 13; a = a + 1)
                //{


                //    addCell(table1, a.ToString(), 2);
                //    addCell(table1, "", 2);
                //    addCell(table1, "", 2);
                //    addCell(table1, "", 2);
                //    addCell(table1, "", 2);
                //    addCell(table1, "", 2);
                //    addCell(table1, "", 2);
                  
                   
                //}

                pdfDoc.Add(table1);
                //pdfDoc.NewPage();
                //pdfDoc.Add(Backjpg);
                //PdfPTable table2= new PdfPTable(7);
                //table2.DefaultCell.FixedHeight = 50f;
                //table2.HorizontalAlignment = 0;
                //table2.TotalWidth = 500f;
                //table2.LockedWidth = true;
                //float[] widths2 = new float[] { 40f, 120f, 80f, 90f, 80f, 70f, 120f };
                //table2.SetWidths(widths2);

                //table2.AddCell("Sl.no.");
                //table2.AddCell("Month & Year For Which Subscription Made");
                //table2.AddCell("Book No.");
                //table2.AddCell("Receipt No.");
                //table2.AddCell("Date of Collection");
                //table2.AddCell("Amount");
                //table2.AddCell("Signature of Collecting Agent/SLO");

             
                //for (int a = 13; a < 25; a = a + 1)
                //{
                //    addCell(table2, a.ToString(), 2);
                //    addCell(table2, "", 2);
                //    addCell(table2, "", 2);
                //    addCell(table2, "", 2);
                //    addCell(table2, "", 2);
                //    addCell(table2, "", 2);
                //    addCell(table2, "", 2);


                  
                //}

                //pdfDoc.Add(table2);
                pdfDoc.Close();
                Response.Write(pdfDoc);
                Response.End();
            }
            catch (Exception ex)
            {

            }
        }


        public static void SchemeCertificate_New(HttpResponseBase Response, string userid)
        {
            try
            {
                PdfPCell cell;
                RegistrationBussiness Rb = new RegistrationBussiness();
                var res = Rb.GetEditBenDetails(Convert.ToInt32(userid));
                var res1 = Rb.GetPerbenAddressDetails(Convert.ToInt32(userid));
                var res2 = Rb.GetNamiNeeDetailsCertificate(Convert.ToInt32(userid));
                string FHName = "";

                if (res.BenGender == "Female" && res.BenMaritalStatus == "2")
                {
                    if (res.HusbandName == "")
                    {
                        FHName = res.BenFatherFirstName;
                    }
                    else
                    {
                        FHName = res.HusbandName;
                    }
                }
                else
                {
                    FHName = res.BenFatherFirstName;
                }

                FileLogging("user Id = "+userid + " PhotoBackjpg SSYLOGO start");
                string PhotoBackjpg = HttpContext.Current.Server.MapPath("~/" + "/UploadFiles/SSY.LOGO.jpg");// "https://ssy.wblabour.gov.in//" + "UploadFiles/SSY.LOGO.jpg"; //HttpContext.Current.Server.MapPath("~/" + "/UploadFiles/SSY.LOGO.jpg");
                FileLogging("user Id = " + userid + " PhotoBackjpg SSYLOGO end =" + PhotoBackjpg);

                iTextSharp.text.Image Backjpg = iTextSharp.text.Image.GetInstance(PhotoBackjpg);
             
            
                  // iTextSharp.text.Image Backjpg = iTextSharp.text.Image.GetInstance("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\SSY.LOGO.jpg");

                Backjpg.ScaleToFit(2000, 500);

                //If you want to choose image as background then,

                Backjpg.Alignment = iTextSharp.text.Image.UNDERLYING;

                //If you want to give absolute/specified fix position to image.
                //Backjpg.SetAbsolutePosition(100, 50);
                Backjpg.SetAbsolutePosition((PageSize.A4.Width - Backjpg.ScaledWidth) / 3, (PageSize.A4.Height - Backjpg.ScaledHeight) / 1);


                iTextSharp.text.Font Pdefault = FontFactory.GetFont("Segoe UI", 20, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
                iTextSharp.text.Font fdefault = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK);
                iTextSharp.text.Font bold = FontFactory.GetFont("Segoe UI", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK);
                // Page site and margin left, right, top, bottom is defined
                Document pdfDoc = new Document(PageSize.A4, 30f, 15f, 15f, 30f);
                pdfDoc.AddHeader("Header", "SSIN : " + res.SSIN);
                PdfWriter.GetInstance(pdfDoc, Response.OutputStream);
                pdfDoc.Open();
                pdfDoc.NewPage();
                 pdfDoc.Add(Backjpg);

                FileLogging("user Id = " + userid + " PhotoBackjpg BenPhoto start" + res.BenPhoto);
                string PhotoImage = HttpContext.Current.Server.MapPath("~/" + res.BenPhoto);// "https://ssy.wblabour.gov.in/" + res.BenPhoto; //HttpContext.Current.Server.MapPath("~/" + res.BenPhoto);
                FileLogging("user Id = " + userid + "SchemeCertificate Photo = " + PhotoImage);
                iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance((PhotoImage));
                //iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance(("https://ssy.wblabour.gov.in/UploadFiles/Photos/13393789_IMG_20200201_0001%20-%20Copy.jpg"));

                FileLogging(" PhotoBackjpg BenPhoto end");
                //iTextSharp.text.Image jpg = iTextSharp.text.Image.GetInstance(("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\302462_T229140000243_scan0001.jpg"));
                //jpg.ScaleToFit(400f, 400f);
                //jpg.ScalePercent(18f);
                //jpg.BorderWidth = 5f;
                //jpg.BorderColor = BaseColor.YELLOW;
                //jpg.SpacingBefore = 50f;
                //jpg.SpacingAfter = 5f;
                //jpg.Alignment = Element.ALIGN_RIGHT;
                //jpg.Alignment = iTextSharp.text.Image.UNDERLYING;
                jpg.ScaleToFit(200f, 100f);
                jpg.Alignment = Image.TEXTWRAP | Image.ALIGN_RIGHT;
                jpg.IndentationLeft = 9f;
                jpg.SpacingAfter = 9f;
                //jpg.BorderWidthTop = 36f;
                // jpg.BorderColorTop = Color.WHITE;

                Paragraph PageHeader = new Paragraph("Page no. 1"+" , "+"SSIN : " + res.SSIN, fdefault);

                PageHeader.Alignment = Element.ALIGN_TOP;
                pdfDoc.Add(PageHeader);


                

                PdfPTable pdfheadertb = new PdfPTable(3);
              
                Paragraph paragraph = new Paragraph(" Form 2", bold);
                paragraph.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph);
                Paragraph paragraph1 = new Paragraph("(See Clause 7 (1) (e) of SSY (R&R), 2017)", fdefault);
                paragraph1.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph1);
                Paragraph paragraph2 = new Paragraph("Identity Card –Cum-Pass Book for Provident Fund under SSY Unorganized Workers", bold);
                paragraph2.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(jpg);
                pdfDoc.Add(paragraph2);
                Paragraph paragraph3 = new Paragraph("\n\n Name of Gram Panchayat / Ward No : " + res1.GPName, fdefault);
                pdfDoc.Add(paragraph3);
                Paragraph paragraph4 = new Paragraph(" Block / Municipality /Municipal Corporation : " + res1.BlockName, fdefault);
                pdfDoc.Add(paragraph4);
                Paragraph paragraph5 = new Paragraph(" District : " + res1.DistrictName, fdefault);
                pdfDoc.Add(paragraph5);
                Paragraph paragraph6 = new Paragraph("\n 1. Name of Benificiary : " + (res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName), fdefault);
                pdfDoc.Add(paragraph6);
                Paragraph paragraph7 = new Paragraph(" 2. Father’s/Husband’s Name : " + (FHName), fdefault);
                pdfDoc.Add(paragraph7);

                string adhrnum = res.AadharCard;
                if (adhrnum != "" && adhrnum != null)
                {
                    Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + "********" + adhrnum.Substring(8, 4), fdefault);
                    //Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.BenIdCardNo, fdefault);
                    pdfDoc.Add(paragraph8);
                }
                else
                {
                    Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.EpicCard, fdefault);
                    //Paragraph paragraph8 = new Paragraph(" 3. Aadhaar No. (If Any) : " + res.BenIdCardNo, fdefault);
                    pdfDoc.Add(paragraph8);
                }


                Paragraph paragraph9 = new Paragraph(" 4. Permanent Address : \n " + ("   BLOCK/MUNICIPALITY/MUNICIPAL CORPORATION : " + res1.BlockName + ',' + " \n    P.S: " + res1.PsName + ',' + " \n    P.O: " + res1.PoName + ',' + " \n    PIN CODE: " + res1.BenPincode + ',' + " \n    GP/WARD: " + res1.GPName + ',' + " \n    VILLAGE/STREET/ROAD: " + res1.BenVsr), fdefault);
                pdfDoc.Add(paragraph9);
                Paragraph paragraph10 = new Paragraph(" 5. Date of Birth : " + res.BenDob, fdefault);
                pdfDoc.Add(paragraph10);
                //w.e.f for legacy, legacy1 legacy2 also
                if (res.RegType == "L" || (res.RegType == "N" && Convert.ToString(res.RegNumber) != "" && Convert.ToString(res.RegDate) != null))
                {
                    Paragraph paragraph11 = new Paragraph(" 6. Date of enrolment in the SSY : " + res.VerifyDate + ',' + " \n     w.e.f : " + res.RegDate, fdefault);
                    pdfDoc.Add(paragraph11);
                }
                else
                {
                    Paragraph paragraph11 = new Paragraph(" 6. Date of enrolment in the SSY : " + res.VerifyDate, fdefault);
                    pdfDoc.Add(paragraph11);
                }

                Paragraph paragraph17 = new Paragraph(" 7. SSY Account No. : " + res.SSIN, fdefault);
                pdfDoc.Add(paragraph17);

                //Paragraph paragraph17 = new Paragraph(" 6. Date of Maturity on attaining age of 60 Years: " + res., fdefault);
                //pdfDoc.Add(paragraph17);
                Paragraph paragraph15 = new Paragraph("\n\n", fdefault);
                pdfDoc.Add(paragraph15);
                PdfPTable table = new PdfPTable(4);
                table.AddCell("Date of Maturity on attaining age of 60 Years");
                table.AddCell("Name & Address of the Nominee(s)");
                table.AddCell("Relationship with the subscriber");
                table.AddCell("Age of Nominee(s)");
                // table.AddCell("Name of Father / Husband of the Nominee");
                // table.AddCell("SSY Account No.");
                int Nc = res2.Count;
                foreach (var n in res2)
                {
                    table.AddCell(n.Dob);
                    table.AddCell(n.BenNomineeName);
                    table.AddCell(n.BenNomineeRelation);
                    table.AddCell(n.BenNomineeAge.ToString());
                    //table.AddCell(n.BenNomineeGender);
                    //table.AddCell("");
                }
                pdfDoc.Add(table);
                FileLogging(" PhotoBackjpg BenSignature start "+ res.BenSignature);
                string Signature = HttpContext.Current.Server.MapPath("~/" + res.BenSignature);//"https://ssy.wblabour.gov.in/" + res.BenSignature;
                FileLogging(" PhotoBackjpg BenSignature end");
                iTextSharp.text.Image jpg1 = iTextSharp.text.Image.GetInstance(Signature);
                CommonMethods.AddtoLogFile("SchemeCertificate Signature = " + Signature);


                //  iTextSharp.text.Image jpg1 = iTextSharp.text.Image.GetInstance("D:\\SSY_PROJECT\\SSY_TFS\\SSYWB\\Source Code\\SSYNEW\\UploadFiles\\Photos\\T237080000125_Sign_scan164.jpg");
                jpg1.ScaleToFit(100f, 50f);
                jpg1.Alignment = Image.TEXTWRAP | Image.ALIGN_RIGHT;
                jpg1.IndentationLeft = 5f;
                jpg1.SpacingAfter = 0f;
                pdfDoc.Add(jpg1);

                Paragraph paragraph12 = new Paragraph("\n\n\n Signature of the Registering Authority", bold);
                pdfDoc.Add(paragraph12);
                Paragraph paragraph13 = new Paragraph("Signature of the Holder", bold);
                paragraph13.Alignment = Element.ALIGN_RIGHT;
                pdfDoc.Add(paragraph13);
               
                //Devide Page pdfDoc.Close();
                pdfDoc.NewPage();
                pdfDoc.Add(Backjpg);
                Paragraph PageHeader2 = new Paragraph("Page no. 2" + " , " + "SSIN : " + res.SSIN, fdefault);

                PageHeader2.Alignment = Element.ALIGN_TOP;
                pdfDoc.Add(PageHeader2);
                Paragraph paragraph14 = new Paragraph("Subscription Made:", Pdefault);
                paragraph14.Alignment = Element.ALIGN_CENTER;
                pdfDoc.Add(paragraph14);
                Paragraph paragraph16 = new Paragraph("\n\n", fdefault);
                pdfDoc.Add(paragraph16);
                PdfPTable table1 = new PdfPTable(7);
                table1.DefaultCell.FixedHeight = 50f;
                table1.HorizontalAlignment = 0;
                table1.TotalWidth = 500f;
                table1.LockedWidth = true;
                float[] widths = new float[] { 40f, 150f, 70f, 90f, 80f, 70f, 120f };
                table1.SetWidths(widths);


                table1.AddCell("Sl.no.");
                table1.AddCell("Month & Year For Which Subscription IS Made");
                table1.AddCell("Book No.");
                table1.AddCell("Receipt No.");
                table1.AddCell("Date of Collection");
                table1.AddCell("Amount");
                table1.AddCell("Signature of Collecting Agent/SLO");




                for (int a = 1; a < 13; a = a + 1)
                {


                    addCell(table1, a.ToString(), 2);
                    addCell(table1, "", 2);
                    addCell(table1, "", 2);
                    addCell(table1, "", 2);
                    addCell(table1, "", 2);
                    addCell(table1, "", 2);
                    addCell(table1, "", 2);


                }

                pdfDoc.Add(table1);
                pdfDoc.NewPage();
                pdfDoc.Add(Backjpg);
                pdfDoc.Add(Backjpg);
                Paragraph PageHeader3 = new Paragraph("Page no. 3" + " , " + "SSIN : " + res.SSIN, fdefault);

                PageHeader3.Alignment = Element.ALIGN_TOP;
                pdfDoc.Add(PageHeader3);
              

                Paragraph para20 = new Paragraph("", Pdefault);
                pdfDoc.Add(para20);

                PdfPTable table2 = new PdfPTable(7);
                table2.SpacingBefore = 20f;
                table2.DefaultCell.FixedHeight = 50f;
                table2.HorizontalAlignment = 0;
                table2.TotalWidth = 500f;
                table2.LockedWidth = true;
                float[] widths2 = new float[] { 40f, 150f, 70f, 90f, 80f, 70f, 120f };
                table2.SetWidths(widths2);

                table2.AddCell("Sl.no.");
                table2.AddCell("Month & Year For Which Subscription IS Made");
                table2.AddCell("Book No.");
                table2.AddCell("Receipt No.");
                table2.AddCell("Date of Collection");
                table2.AddCell("Amount");
                table2.AddCell("Signature of Collecting Agent/SLO");


                for (int a = 13; a < 25; a = a + 1)
                {
                    addCell(table2, a.ToString(), 2);
                    addCell(table2, "", 2);
                    addCell(table2, "", 2);
                    addCell(table2, "", 2);
                    addCell(table2, "", 2);
                    addCell(table2, "", 2);
                    addCell(table2, "", 2);



                }

                pdfDoc.Add(table2);
                pdfDoc.Close();

                Response.ContentType = "application/pdf";
                Response.AddHeader("content-disposition", "attachment;filename=IdCardCumPassBook.pdf");
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                Response.Write(pdfDoc);
                Response.End();
            }
            catch (Exception ex)
            {
                string Message1 = ReturnException(ex);
                Response.Write(ex.Message);
                Response.Write(ex.InnerException);
                Response.ContentType = "application/pdf";
                Response.AddHeader("content-disposition", "attachment;filename=IdCardCumPassBook.pdf");
                Response.Cache.SetCacheability(HttpCacheability.NoCache);
                CommonMethods.AddtoLogFile("PassBook Download" + DateTime.Now + "Error : " + Message1);
            }
        }
        public static void FileLogging(string message)
        {
            string filename = @"\Log_" + DateTime.Now.ToString("ddMMyyyy") + ".txt";
            string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
            if (!System.IO.Directory.Exists(value))
                System.IO.Directory.CreateDirectory(value);
            var filepath = value + filename;
            if (!File.Exists(filepath))
            {
                var writer = File.CreateText(filepath);
                writer.Close();
            }
            using (var writer = new StreamWriter(filepath, true))
                writer.WriteLine(message);
        }
        //For html Card generation
        //public static void pdfhtml(HttpResponseBase Response, string getstring)
        //{
        //    byte[] bytes = Encoding.UTF8.GetBytes(getstring);
        //    byte[] utf8Bytes = Encoding.UTF8.GetBytes(getstring);
        //    try
        //    {
        //        #region Generate Receipt Bytes
        //        using (var ms = new MemoryStream())
        //        {
        //            try
        //            {
        //                var doc = new iTextSharp.text.Document();
        //                try
        //                {
        //                    var writer = PdfWriter.GetInstance(doc, ms);
        //                    var example_html = getstring;
        //                    doc.Open();
        //                    try
        //                    {
        //                        iTextSharp.text.html.simpleparser.StyleSheet ST = new iTextSharp.text.html.simpleparser.StyleSheet();
        //                        //Set the default body font to our registered font's internal name
        //                        ST.LoadTagStyle(HtmlTags.BODY, HtmlTags.FACE, "Arial Unicode MS");
        //                        //Set the default encoding to support Unicode characters
        //                        ST.LoadTagStyle(HtmlTags.BODY, HtmlTags.ENCODING, BaseFont.IDENTITY_H);
        //                        var htmlWorker = new iTextSharp.text.html.simpleparser.HTMLWorker(doc);
        //                        try
        //                        {
        //                            using (var sr1 = new StringReader(example_html))
        //                            {
        //                                htmlWorker.Parse(sr1);
        //                            }
        //                        }
        //                        catch (Exception ex) { }
        //                    }
        //                    catch (Exception ex) { }
        //                    doc.Close();
        //                }
        //                catch (Exception ex) { }
        //            }
        //            catch (Exception ex) { }
        //            bytes = ms.ToArray();
        //        }
        //        #endregion
        //        ExportPdf(bytes, Response, getstring);
        //    }
        //    catch (Exception ex)
        //    {
        //        var data = ex.InnerException.Message;
        //        Helper.FileLogging(data);
        //    }
        //}
        public static void ExportPdf(byte[] bytes, HttpResponseBase Response, string getstring)
        {
            Response.ClearContent();
            Response.Buffer = true;
            Response.Charset = "";
            Response.AddHeader("content-disposition", "attachment; filename=SMC_Card_" + getstring + ".pdf");
            Response.ContentType = "application/pdf";
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.BinaryWrite(bytes);
            Response.Flush();
            Response.End();
        }
        //public static void Run(string authToken)
        //{
        //    string text = "Sunitha Roy";
        //    string from = "en";
        //    string to = "bn";
        //    string uri = "https://api.microsofttranslator.com/v2/Http.svc/Translate?text=" + HttpUtility.UrlEncode(text) + "&from=" + from + "&to=" + to;
        //    HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(uri);
        //    httpWebRequest.Headers.Add("Authorization", authToken);
        //    using (WebResponse response = httpWebRequest.GetResponse())
        //    using (Stream stream = response.GetResponseStream())
        //    {
        //        DataContractSerializer dcs = new DataContractSerializer(Type.GetType("System.String"));
        //        string translation = (string)dcs.ReadObject(stream);
        //        Console.WriteLine("Translation for source text '{0}' from {1} to {2} is", text, "en", "de");
        //        Console.WriteLine(translation);
        //    }
        //}
        //Download Excel 2 
        //    string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");
        public static DataTable ConvertToDataTable<T>(IList<T> data)
        {
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }
            return table;
        }
        private static void ExportToOxml(bool firstTime, string Filname)
        {
            string fileName = Filname;
            //Delete the file if it exists. 
            if (firstTime && File.Exists(fileName))
            {
                File.Delete(fileName);
            }
            uint sheetId = 1; //Start at the first sheet in the Excel workbook.
            if (firstTime)
            {
                //This is the first time of creating the excel file and the first sheet.
                // Create a spreadsheet document by supplying the filepath.
                // By default, AutoSave = true, Editable = true, and Type = xlsx.
                SpreadsheetDocument spreadsheetDocument = SpreadsheetDocument.
                    Create(fileName, SpreadsheetDocumentType.Workbook);
                // Add a WorkbookPart to the document.
                WorkbookPart workbookpart = spreadsheetDocument.AddWorkbookPart();
                workbookpart.Workbook = new Workbook();
                // Add a WorksheetPart to the WorkbookPart.
                var worksheetPart = workbookpart.AddNewPart<WorksheetPart>();
                var sheetData = new SheetData();
                worksheetPart.Worksheet = new Worksheet(sheetData);
                var bold1 = new Bold();
                CellFormat cf = new CellFormat();
                // Add Sheets to the Workbook.
                Sheets sheets;
                sheets = spreadsheetDocument.WorkbookPart.Workbook.
                    AppendChild<Sheets>(new Sheets());
                // Append a new worksheet and associate it with the workbook.
                var sheet = new Sheet()
                {
                    Id = spreadsheetDocument.WorkbookPart.
                        GetIdOfPart(worksheetPart),
                    SheetId = sheetId,
                    Name = "Sheet" + sheetId
                };
                sheets.Append(sheet);
                //Add Header Row.
                var headerRow = new Row();
                foreach (DataColumn column in ResultsData.Columns)
                {
                    var cell = new Cell { DataType = CellValues.String, CellValue = new CellValue(column.ColumnName) };
                    headerRow.AppendChild(cell);
                }
                sheetData.AppendChild(headerRow);
                foreach (DataRow row in ResultsData.Rows)
                {
                    var newRow = new Row();
                    foreach (DataColumn col in ResultsData.Columns)
                    {
                        var cell = new Cell
                        {
                            DataType = CellValues.String,
                            CellValue = new CellValue(row[col].ToString())
                        };
                        newRow.AppendChild(cell);
                    }
                    sheetData.AppendChild(newRow);
                }
                workbookpart.Workbook.Save();
                spreadsheetDocument.Close();
            }
            else
            {
                // Open the Excel file that we created before, and start to add sheets to it.
                var spreadsheetDocument = SpreadsheetDocument.Open(fileName, true);
                var workbookpart = spreadsheetDocument.WorkbookPart;
                if (workbookpart.Workbook == null)
                    workbookpart.Workbook = new Workbook();
                var worksheetPart = workbookpart.AddNewPart<WorksheetPart>();
                var sheetData = new SheetData();
                worksheetPart.Worksheet = new Worksheet(sheetData);
                var sheets = spreadsheetDocument.WorkbookPart.Workbook.Sheets;
                if (sheets.Elements<Sheet>().Any())
                {
                    //Set the new sheet id
                    sheetId = sheets.Elements<Sheet>().Max(s => s.SheetId.Value) + 1;
                }
                else
                {
                    sheetId = 1;
                }
                // Append a new worksheet and associate it with the workbook.
                var sheet = new Sheet()
                {
                    Id = spreadsheetDocument.WorkbookPart.
                        GetIdOfPart(worksheetPart),
                    SheetId = sheetId,
                    Name = "Sheet" + sheetId
                };
                sheets.Append(sheet);
                //Add the header row here.
                var headerRow = new Row();
                foreach (DataColumn column in ResultsData.Columns)
                {
                    var cell = new Cell { DataType = CellValues.String, CellValue = new CellValue(column.ColumnName) };
                    headerRow.AppendChild(cell);
                }
                sheetData.AppendChild(headerRow);
                foreach (DataRow row in ResultsData.Rows)
                {
                    var newRow = new Row();
                    foreach (DataColumn col in ResultsData.Columns)
                    {
                        var cell = new Cell
                        {
                            DataType = CellValues.String,
                            CellValue = new CellValue(row[col].ToString())
                        };
                        newRow.AppendChild(cell);
                    }
                    sheetData.AppendChild(newRow);
                }
                workbookpart.Workbook.Save();
                // Close the document.
                spreadsheetDocument.Close();
            }
        }
        //Download Exlecel 1 
        public static void DownloadReport(List<SpGetDownLoadRequestData_Result> data, string Filname, string ReportName)
        {
            int rowsPerSheet = 10000;
            DataTable dt = new DataTable();
            int c = 0;
            bool firstTime = true;
            dt = ConvertToDataTable(data);

            dt.Columns.Remove("RequestId");
            dt.Columns.Remove("ID");

            int count = ResultsData.Columns.Count;

            ResultsData.Columns.Clear();

            // dt.Columns.Remove("ID");
            // if (ReportName == "Legacy Data Report")
            //{
            //    dt.Columns.Remove("FormStatus");
            // }

            //  if (ResultsData.Columns.Count == 0)
            // {
            ResultsData.Columns.Add("SSINNo");
            ResultsData.Columns.Add("SchemeNo");
            ResultsData.Columns.Add("RegDate");
            ResultsData.Columns.Add("Name");
            ResultsData.Columns.Add("fathername");
          
            ResultsData.Columns.Add("DOB");
            ResultsData.Columns.Add("Mobileno");
            ResultsData.Columns.Add("VerifyDate");
            ResultsData.Columns.Add("WorkerType");
            ResultsData.Columns.Add("Status");
            ResultsData.Columns.Add("PFStatus");
            ResultsData.Columns.Add("DistrictName");
            ResultsData.Columns.Add("SubDivisionName");
            ResultsData.Columns.Add("BlockName");
            ResultsData.Columns.Add("FormStatus");
            ResultsData.Columns.Add("GpName");
            ResultsData.Columns.Add("PsName");
            ResultsData.Columns.Add("PoName");
            ResultsData.Columns.Add("Village");
            ResultsData.Columns.Add("Religion");
            // if (ReportName == "Detailed Report")
            // {
        



            //}
            // }
            foreach (DataRow dtRow in dt.Rows)
            {
                DataRow dataRow = ResultsData.NewRow();
                // if(int i = 0; i < dt.Rows.Count; i++)
                //{
                ResultsData.Rows.Add(dtRow.ItemArray);
                // }
                // ResultsData.Rows.Add(dtRow);
                c++;
                if (c == rowsPerSheet)
                {
                    c = 0;
                    ExportToOxml(firstTime, Filname);
                    ResultsData.Clear();
                    firstTime = false;
                }
            }
            if (ResultsData.Rows.Count > 0)
            {
                ExportToOxml(firstTime, Filname);
                ResultsData.Clear();
            }
            // reader.Close();
        }

        //Download Registration Report
        public static void DownloadRegReport(List<TblOfflineRegReport> data, string Filname, string ReportName)
        {
            // DataTable RegResultsData = new DataTable();
            int rowsPerSheet = 10000;
            DataTable dt = new DataTable();
            int c = 0;
            bool firstTime = true;
            dt = ConvertToDataTable(data);

            dt.Columns.Remove("ReqId");
            dt.Columns.Remove("Id");

            int count = ResultsData.Columns.Count;

            ResultsData.Columns.Clear();


            //  if (ResultsData.Columns.Count == 0)
            // {
            ResultsData.Columns.Add("District Name");
            ResultsData.Columns.Add("Sub Division Name");
            ResultsData.Columns.Add("Legacy-1 Application Submission");
            ResultsData.Columns.Add("Legacy-2 Application Submission");
            ResultsData.Columns.Add("New Basic Information Filled");
            ResultsData.Columns.Add("New Additional Information Filled");
            ResultsData.Columns.Add("Application Submitted through CAF update");

            // }
            foreach (DataRow dtRow in dt.Rows)
            {
                DataRow dataRow = ResultsData.NewRow();
                // if(int i = 0; i < dt.Rows.Count; i++)
                //{
                ResultsData.Rows.Add(dtRow.ItemArray);
                // }
                // ResultsData.Rows.Add(dtRow);
                c++;
                if (c == rowsPerSheet)
                {
                    c = 0;
                    ExportToOxml(firstTime, Filname);
                    ResultsData.Clear();
                    firstTime = false;
                }
            }
            if (ResultsData.Rows.Count > 0)
            {
                ExportToOxml(firstTime, Filname);
                ResultsData.Clear();
            }
            // reader.Close();
        }
        public static void AddtoLogFile(string message)
        {
            string filename = @"\Log_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
            string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
            if (!System.IO.Directory.Exists(value))
            {
                System.IO.Directory.CreateDirectory(value);
            }
            var filepath = value + filename;
            if (!File.Exists(filepath))
            {
                var writer = File.CreateText(filepath);
                writer.Close();
            }
            using (var writer = new StreamWriter(filepath, true))
            {
                writer.WriteLine(message);
            }
        }
        public static string CreatePassword()
        {
            int length = 6;
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            string res1 = res.ToString();
            return res1;
        }
        //OTP Generation 
        public static string GenerateOTP()
        {
            int length = 6;
            const string valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            string res1 = res.ToString();
            return res1;
        }
        #region Captcha Ramdom Text Generation
        public static string GetRandomText()
        {
            StringBuilder randomText = new StringBuilder();
            string alphabets = "012345679ACEFGHKLMNPRSWXZabcdefghijkhlmnopqrstuvwxyz";
            Random r = new Random();
            for (int j = 0; j <= 5; j++)
            {
                randomText.Append(alphabets[r.Next(alphabets.Length)]);
            }
            return randomText.ToString();
        }
        #endregion
        //Download Final Excel


        public static string ReturnException(Exception ex)
        {
            StringBuilder messageBuilder = new StringBuilder();
            try
            {
                //messageBuilder.Append("The Exception is:-");
                //messageBuilder.Append("Exception :: " + Convert.ToString(ex.InnerException.InnerException.Message));
                messageBuilder.Append(Convert.ToString(ex.Message));
                if(ex.InnerException!=null)
                    messageBuilder.Append("Innter Exception = " + Convert.ToString(ex.InnerException));

                //if (ex.InnerException.InnerException != null)
                //{
                //    messageBuilder.Append("InnerException :: " + Convert.ToString(ex.InnerException.Message));
                //    messageBuilder.Append("");
                //}
                return messageBuilder.ToString();
            }
            catch (Exception e)
            {
                messageBuilder.Append(Convert.ToString("Unknown error due to , "));
                messageBuilder.Append(Convert.ToString(e.InnerException.Message));
                return messageBuilder.ToString();
            }
        }

        /// <summary>
        /// Gets the ip address.
        /// </summary>
        /// <returns></returns>
        public static string GetIPAddress()
        {
            var strHostName = HttpContext.Current.Request.UserHostAddress;

            if (strHostName != null)
            {
                var ipAddress = Dns.GetHostAddresses(strHostName).GetValue(0).ToString();
                if (ipAddress == "::1")
                {
                    ipAddress = "127.0.0.1";
                }
                return ipAddress;
            }
            return "";
        }

        public static string GetIPAddressold()
        {
            string ipAddress = string.Empty;
            foreach (IPAddress item in Dns.GetHostAddresses(HttpContext.Current.Request.UserHostAddress))
            {
                if (item.AddressFamily.ToString().Equals("InterNetwork"))
                {
                    ipAddress = item.ToString();
                    break;
                }
            }
            if (!string.IsNullOrEmpty(ipAddress))
            {
                return ipAddress;
            }
            foreach (IPAddress item in Dns.GetHostAddresses(Dns.GetHostName()))
            {
                if (item.AddressFamily.ToString().Equals("InterNetwork"))
                {
                    ipAddress = item.ToString();
                    break;
                }
            }
            return ipAddress;
        }



        public static string regenerateId()
        {
            HttpContext Context = HttpContext.Current;
            System.Web.SessionState.SessionIDManager manager = new System.Web.SessionState.SessionIDManager();
            string oldId = manager.GetSessionID(Context);
            string newId = manager.CreateSessionID(Context);
            bool isAdd = false, isRedir = false;
            manager.SaveSessionID(Context, newId, out isRedir, out isAdd);
            HttpApplication ctx = (HttpApplication)HttpContext.Current.ApplicationInstance;
            HttpModuleCollection mods = ctx.Modules;
            System.Web.SessionState.SessionStateModule ssm = (SessionStateModule)mods.Get("Session");
            System.Reflection.FieldInfo[] fields = ssm.GetType().GetFields(BindingFlags.NonPublic | BindingFlags.Instance);
            SessionStateStoreProviderBase store = null;
            System.Reflection.FieldInfo rqIdField = null, rqLockIdField = null, rqStateNotFoundField = null;
            foreach (System.Reflection.FieldInfo field in fields)
            {
                if (field.Name.Equals("_store")) store = (SessionStateStoreProviderBase)field.GetValue(ssm);
                if (field.Name.Equals("_rqId")) rqIdField = field;
                if (field.Name.Equals("_rqLockId")) rqLockIdField = field;
                if (field.Name.Equals("_rqSessionStateNotFound")) rqStateNotFoundField = field;
            }
            object lockId = rqLockIdField.GetValue(ssm);
            if ((lockId != null) && (oldId != null)) store.ReleaseItemExclusive(Context, oldId, lockId);
            rqStateNotFoundField.SetValue(ssm, true);
            rqIdField.SetValue(ssm, newId);

            return newId;
        }

        #region Call Soap Service

        public static string CallWebServiceTransactions(string PfNumber)
        {

            string ITCUrl = ConfigurationManager.AppSettings["ITCUrltrans"];


            var _url = ITCUrl;
            var _action = ITCUrl;
            ServicePointManager.ServerCertificateValidationCallback += (mender, certificate, chain, sslPolicyErrors) => true;
            System.Net.ServicePointManager.Expect100Continue = false;

            XmlDocument soapEnvelopeXml = CreateSoapEnvelopeTransaction(PfNumber);
            HttpWebRequest webRequest = CreateWebRequest(_url, _action);


            InsertSoapEnvelopeIntoWebRequest(soapEnvelopeXml, webRequest);

            // begin async call to web request.
            IAsyncResult asyncResult = webRequest.BeginGetResponse(null, null);

            // suspend this thread until call is complete. You might want to
            // do something usefull here like update your UI.
            asyncResult.AsyncWaitHandle.WaitOne();

            // get the response from the completed web request.

            string soapResult;
            using (WebResponse webResponse = webRequest.EndGetResponse(asyncResult))
            {
                using (StreamReader rd = new StreamReader(webResponse.GetResponseStream()))
                {
                    soapResult = rd.ReadToEnd();
                }
                //Console.Write(soapResult);


            }
            return soapResult;
        }


        public static string CallWebService(string PfNumber)
        {

            string ITCUrl = ConfigurationManager.AppSettings["ITCUrl"];


            var _url = ITCUrl;
            var _action = ITCUrl;
            ServicePointManager.ServerCertificateValidationCallback += (mender, certificate, chain, sslPolicyErrors) => true;
            System.Net.ServicePointManager.Expect100Continue = false;

            XmlDocument soapEnvelopeXml = CreateSoapEnvelope(PfNumber);
            HttpWebRequest webRequest = CreateWebRequest(_url, _action);


            InsertSoapEnvelopeIntoWebRequest(soapEnvelopeXml, webRequest);

            // begin async call to web request.
            IAsyncResult asyncResult = webRequest.BeginGetResponse(null, null);

            // suspend this thread until call is complete. You might want to
            // do something usefull here like update your UI.
            asyncResult.AsyncWaitHandle.WaitOne();

            // get the response from the completed web request.

            string soapResult;
            using (WebResponse webResponse = webRequest.EndGetResponse(asyncResult))
            {
                using (StreamReader rd = new StreamReader(webResponse.GetResponseStream()))
                {
                    soapResult = rd.ReadToEnd();
                }
                //Console.Write(soapResult);


            }
            return soapResult;
        }

        private static HttpWebRequest CreateWebRequest(string url, string action)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            webRequest.Headers.Add("SOAPAction", action);
            webRequest.ContentType = "text/xml;charset=\"utf-8\"";
            webRequest.Accept = "text/xml";
            webRequest.Method = "POST";
            return webRequest;
        }

        private static XmlDocument CreateSoapEnvelope(string PfNumber)
        {
            string ITCUserId = ConfigurationManager.AppSettings["ITCUserId"].ToString();
            string ITCPwd = ConfigurationManager.AppSettings["ITCPwd"].ToString();
            string _soapEnvelope = @"<soapenv:Envelope xmlns:end='http://endpoint.webservice.saspfuw.org' xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'><soapenv:Header><wsse:securityHeader soapenv:mustUnderstand='0' xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd' xmlns:wsu='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'><wsse:username>" + ITCUserId + "</wsse:username><wsse:password Type='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText'>" + ITCPwd + "</wsse:password><wsse:Nonce EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary'>Ba0Q4BBaYSAB8Ey1i1mAuA==</wsse:Nonce><wsu:Created>2018-09-18T12:37:23.776Z</wsu:Created></wsse:securityHeader></soapenv:Header><soapenv:Body><end:getBenefSummary soapenv:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'><pfNo xsi:type='soapenc:string' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/'>" + PfNumber + "</pfNo></end:getBenefSummary></soapenv:Body></soapenv:Envelope>";

            XmlDocument soapEnvelopeDocument = new XmlDocument();
            soapEnvelopeDocument.LoadXml(_soapEnvelope);
            return soapEnvelopeDocument;
        }

        private static XmlDocument CreateSoapEnvelopeTransaction(string PfNumber)
        {
            string ITCUserId = ConfigurationManager.AppSettings["ITCUserId"].ToString();
            string ITCPwd = ConfigurationManager.AppSettings["ITCPwd"].ToString();
            string _soapEnvelope = @"<soapenv:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:end='http://endpoint.webservice.saspfuw.org'> <soapenv:Header> <wsse:securityHeader soapenv:mustUnderstand='0' xmlns:wsse='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd' xmlns:wsu='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd'> <wsse:username>" + ITCUserId + "</wsse:username> <wsse:password Type='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText'>" + ITCPwd + "</wsse:password> <wsse:Nonce EncodingType='http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary'>Ba0Q4BBaYSAB8Ey1i1mAuA==</wsse:Nonce> <wsu:Created>2018-09-18T12:37:23.776Z</wsu:Created> </wsse:securityHeader> </soapenv:Header> <soapenv:Body> <end:getBenefTransactionDetails soapenv:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/'> <pfNo xsi:type='soapenc:string' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/'>" + PfNumber + "</pfNo> </end:getBenefTransactionDetails> </soapenv:Body> </soapenv:Envelope>";
            XmlDocument soapEnvelopeDocument = new XmlDocument();
            soapEnvelopeDocument.LoadXml(_soapEnvelope);
            return soapEnvelopeDocument;
        }

        private static void InsertSoapEnvelopeIntoWebRequest(XmlDocument soapEnvelopeXml, HttpWebRequest webRequest)
        {
            using (Stream stream = webRequest.GetRequestStream())
            {
                soapEnvelopeXml.Save(stream);
            }
        }

        #endregion Call Soap Service

        private static void addCell(PdfPTable table, string text, int rowspan)
        {
            BaseFont bfTimes = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, false);
            iTextSharp.text.Font times = new iTextSharp.text.Font(bfTimes, 10, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.BLACK);

            PdfPCell cell = new PdfPCell(new Phrase(text, times));
            cell.Rowspan = rowspan;
            cell.HorizontalAlignment = PdfPCell.ALIGN_CENTER;
            cell.VerticalAlignment = PdfPCell.ALIGN_MIDDLE;
            cell.FixedHeight = 50f;
            table.AddCell(cell);
        }

    }
}