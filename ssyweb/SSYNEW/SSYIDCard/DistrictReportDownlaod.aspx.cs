using Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution;
using SSY.Bussiness;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SSYNEW.SSYIDCard
{
    public partial class DistrictReportDownlaod : System.Web.UI.Page
    {
        HomeBussiness HB = new HomeBussiness();
        ReportBussiness RB = new ReportBussiness();
        protected void Page_Load(object sender, EventArgs e)
        
        {
            string deviceInfo = null;
            string extension = String.Empty;
            string mimeType = String.Empty;
            string encoding = String.Empty;
            Microsoft.Reporting.WebForms.Internal.Soap.ReportingServices2005.Execution.Warning[] warnings = null;
            string[] streamIDs = null;
            string historyId = null;

            string Path = ConfigurationManager.AppSettings["ExcelPath"].ToString();


            ReportExecutionService rsExec = new ReportExecutionService();
            rsExec.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["RSDomainUserName"].ToString(), ConfigurationManager.AppSettings["RSDomainPassword"].ToString(), ConfigurationManager.AppSettings["RSDomainName"].ToString());

            rsExec.Url = ConfigurationManager.AppSettings["ReportServerURL"].ToString() + "/ReportExecution2005.asmx";

            string RequestId = Request.QueryString["RequestId"].ToString();

            string Name = HB.GetReportName(RequestId);

            if (Name == "District Wise Summary Report")
            {
                rsExec.LoadReport("/SSY_DistrictWiseSummary_Rpt_ForOffline", historyId);

            }
          

            else if(Name == "District Wise Detailed Report")
            {
                rsExec.LoadReport("/SSYDistrictWiseReport_ForOffline", historyId);
            }
            else if(Name == "Legacy Data Report")
            {
                rsExec.LoadReport("/Legacy Data Report for Offline", historyId);
            }
            else if (Name == "Registration Report")
            {
                rsExec.LoadReport("/SSY Registrations Report Offline", historyId);
            }
            else if (Name == "Part I Applications Summary")
            {
                rsExec.LoadReport("/PART1_SUMMARY_Offline", historyId);
            }
			else if (Name == "Legacy Progress Report")
			{
				rsExec.LoadReport("/Legacy Progress Report Offline", historyId);
			}
			//PART1_SUMMARY_Offline

			// pass parameters
			ParameterValue[] parameter = new ParameterValue[1];
            parameter[0] = new ParameterValue();
            parameter[0].Name = "RequestId";
            parameter[0].Label = "RequestId";
            parameter[0].Value = Request.QueryString["RequestId"].ToString();
            rsExec.SetExecutionParameters(parameter, null);

            string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");

            // get pdf of report        
            Byte[] ResultStream = rsExec.Render("EXCEL", deviceInfo, out extension, out encoding, out mimeType, out warnings, out streamIDs);

            bool exists = System.IO.Directory.Exists(Path);

            if (!exists)
            {
                System.IO.Directory.CreateDirectory(Path);
            }
            string filepath = Path + date + ".xls";
            FileStream stream = File.OpenWrite(Path+ date + ".xls");
            stream.Write(ResultStream, 0, ResultStream.Length);
            stream.Close();

            var Det = RB.UpdateDownloadRequest(Convert.ToInt32(RequestId), date + ".xls");

            Response.ContentType = "Application/EXCEL";
            Response.AppendHeader("Content-Disposition", "attachment; filename=" + date + ".xls");
            Response.Buffer = true;
            Response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache);
            Response.TransmitFile(filepath);
            Response.End();
            Response.Close();
            Response.Flush();


        }
    }
}