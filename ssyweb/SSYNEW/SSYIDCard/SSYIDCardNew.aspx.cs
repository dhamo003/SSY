using mBillPayPortal.Admin.Business;
using Microsoft.Reporting.WebForms;
using SSY.Bussiness;
using SSY.Controllers;
using SSY.Models;
using SSYNEW.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SSYNEW.SSYIDCard
{
    public partial class SSYIDCardNew : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            RegistrationController RC = new RegistrationController();
            RegistrationBussiness Rb = new RegistrationBussiness();
            SSYEntities db = new SSYEntities();

            string Bensno = Request.QueryString["Benifid"].ToString();
            var res = Rb.GetEditBenDetails(Convert.ToInt64(Bensno));
            //if (res.BengaliName == "" || res.BengaliName == null)
            //{
            //    var authToken = "c2e22b7cc93449d1af7f4116c3d31d7d";
            //    string Name = res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName;

            //    string bengname = Name;
            //    var res1 = db.SpUpdateBengaliName(bengname, Bensno);
            //}

            string Path = ConfigurationManager.AppSettings["DownloadPath"].ToString(); 

            ReportViewer1.ShowParameterPrompts = false;
            ReportViewer1.ShowPrintButton = true;

            ReportViewer1.ServerReport.ReportServerUrl = new Uri(ConfigurationManager.AppSettings["ReportServerURL"].ToString());

            //string IsStaging = ConfigurationManager.AppSettings["IsStaging"].ToString();

           
                ReportViewer1.ServerReport.ReportPath = "/SSYPDFReport";




            


           // string SubscriptionKey = ConfigurationManager.AppSettings["TransKey"].ToString();

            ReportViewer1.ProcessingMode = ProcessingMode.Remote;
            IReportServerCredentials irsc = new CustomReportCredentials(ConfigurationManager.AppSettings["RSDomainUserName"].ToString(), ConfigurationManager.AppSettings["RSDomainPassword"].ToString(), ConfigurationManager.AppSettings["RSDomainName"].ToString());
            ReportViewer1.ServerReport.ReportServerCredentials = irsc;

            ReportViewer1.SizeToReportContent = true;
            ReportViewer1.Width = Unit.Percentage(100);
            ReportViewer1.Height = Unit.Percentage(100);


            List<ReportParameter> parmList = new List<ReportParameter>();
            ReportParameterInfoCollection parameters;
            parameters = ReportViewer1.ServerReport.GetParameters();
            for (int i = 0; i < parameters.Count; i++)
            {
                if (parameters[i].Name.ToLower() == "bensno")
                {
                    parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Bensno, false));
                }
            }

            ReportViewer1.ServerReport.SetParameters(parmList);

            Warning[] warnings;
            string[] streamids;
            string mimeType, encoding, extension, deviceInfo;

            deviceInfo = "True";

            byte[] bytes = ReportViewer1.ServerReport.Render("PDF", null, out mimeType, out encoding, out extension, out streamids, out warnings);

            Response.Buffer = true;
            Response.Clear();
            Response.ContentType = mimeType;

            /* 
                This header is for saving it as an Attachment and popup window should display to to offer save as or open a PDF file 
                Response.AddHeader("Content-Disposition", "attachment; filename=" + extension);        
            */

            /*
                This header is use for open it in browser.
                Response.AddHeader("content-disposition", "inline; filename=myfile." + extension);
                Response.BinaryWrite(bytes);
            */

            //Creatr PDF file on disk
            bool exists = System.IO.Directory.Exists(Path);

            if (!exists)
            {
                System.IO.Directory.CreateDirectory(Path);
            }
            string pdfPath = "@"+Path+ "\\SSY_" + Bensno + ".pdf";       // Path to export Report.
            //Response.AddHeader("content-disposition", "inline;filename=" + filename + ".pdf");
            System.IO.FileStream pdfFile = new System.IO.FileStream(pdfPath, System.IO.FileMode.Create);
            pdfFile.Write(bytes, 0, bytes.Length);
            pdfFile.Close();

            Response.ContentType = "Application/pdf";
            Response.AppendHeader("Content-Disposition", "attachment; filename=SMCCard.pdf");
            Response.TransmitFile(pdfPath);
            Response.End();
            Response.Flush();
        }
    }
}