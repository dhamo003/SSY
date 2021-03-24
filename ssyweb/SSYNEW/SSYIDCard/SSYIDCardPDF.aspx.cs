using Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution;
using SSY.Bussiness;
using SSY.Controllers;
using SSY.Models;
using SSYNEW.Models;
using SSYNEW.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SSYNEW.SSYIDCard
{
    public partial class SSYIDCardPDF : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {

            RegistrationController RC = new RegistrationController();
            RegistrationBussiness Rb = new RegistrationBussiness();
            SSYEntities db = new SSYEntities();

            

          string Bensno =  Request.QueryString["Benifid"].ToString();
          var res = Rb.GetEditBenDetails(Convert.ToInt64(Bensno));
			//if (res.BengaliName == "" || res.BengaliName == null)
			//{
			//    var authToken = "c2e22b7cc93449d1af7f4116c3d31d7d";
			//    string Name = res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName;

			//    string bengname = RC.Getbangaliname(authToken, Name);
			//    var res1 = db.SpUpdateBengaliName(bengname, res.SSIN); 
			//}
			var UserId = "";
			var UserName = "";
			if (Convert.ToString(Session["LoginType"]) == "Department")
			{
				UserId = Convert.ToString(Session["DeptUserid"]);
				UserName = Convert.ToString(Session["UserName"]);
			}
			else
			{
				UserId = Convert.ToString(Session["Userid"]);
				UserName = Convert.ToString(Session["BenName"]);
			}
			Helper.AddtoLogFile(Environment.NewLine + " Download SMC Card of Benifid: " + Bensno + ";By  Usertype " + Convert.ToString(Session["UserType"]) + " UserID :" + UserId + " UserName " + UserName);





			string Path = ConfigurationManager.AppSettings["DownloadPath"].ToString(); 

            SqlConnection SQLConnection = new SqlConnection();
          
            string deviceInfo = null;
            string extension = String.Empty;
            string mimeType = String.Empty;
            string encoding = String.Empty;
            Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.Warning[] warnings = null;
            string[] streamIDs = null;
            string historyId = null;


            ReportExecutionService rsExec = new ReportExecutionService();
            rsExec.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["RSDomainUserName"].ToString(), ConfigurationManager.AppSettings["RSDomainPassword"].ToString(), ConfigurationManager.AppSettings["RSDomainName"].ToString());

            rsExec.Url = ConfigurationManager.AppSettings["ReportServerURL"].ToString() + "/ReportExecution2005.asmx";
            rsExec.LoadReport("/SSYPDFReport", historyId);

            // pass parameters
            ParameterValue[] parameter = new ParameterValue[1];
            parameter[0] = new ParameterValue();
            parameter[0].Name = "BenSno";
            parameter[0].Label = "BenSno";
            parameter[0].Value = Request.QueryString["Benifid"].ToString();
            rsExec.SetExecutionParameters(parameter, null);


            // get pdf of report        
            Byte[] ResultStream = rsExec.Render("PDF", deviceInfo, out extension, out encoding, out mimeType, out warnings, out streamIDs);

            bool exists = System.IO.Directory.Exists(Path);

            if (!exists)
            {
                System.IO.Directory.CreateDirectory(Path);
            }
            string filepath = Path + "\\SSY_" + Request.QueryString["Benifid"].ToString() + ".pdf";
            FileStream stream = File.OpenWrite(Path + "\\SSY_" + Request.QueryString["Benifid"].ToString() + ".pdf");
            stream.Write(ResultStream, 0, ResultStream.Length);
            stream.Close();

            Response.ContentType = "Application/pdf";
            Response.AppendHeader("Content-Disposition", "attachment; filename=SSY_" + Request.QueryString["Benifid"].ToString() + ".pdf");
            Response.Buffer = true;
            Response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache);
            Response.TransmitFile(filepath);
            Response.End();
            Response.Close();
            Response.Flush();


        }
    }
}
