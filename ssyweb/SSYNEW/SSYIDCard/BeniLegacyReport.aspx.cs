using mBillPayPortal.Admin.Business;
using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SSYNEW.SSYIDCard
{
    public partial class BeniLegacyReport : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                BindSSRS();
            }
        }
        protected void BindSSRS()
        {
            try
            {

                ReportViewer1.ShowParameterPrompts = false;
                //ReportViewer1.ShowToolBar = false;
                ReportViewer1.WaitMessageFont.Bold = true;

                ReportViewer1.ServerReport.ReportServerUrl = new Uri(ConfigurationManager.AppSettings["ReportServerURL"].ToString());

                //string IsStaging = ConfigurationManager.AppSettings["IsStaging"].ToString();


                ReportViewer1.ServerReport.ReportPath = "/LegacyDataReport";



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
                    // SelectUserid=" + ValuSend +
                    //   "&Districtid=" + $("#disid").val() +
                    //     "&Subdivid=" + SendSubDiv + 
                    //     "&Locid=" + SendLocation + 
                    //   "&Fromdate=" + $("#fromdate").val() 
                    //+ "&Todate=" +  $("#todate").val() + 
                    //"&schemeid=" +$("#schemeid").val()+
                    //"&SchemeStatus=" +$("#SchemeStatus").val()+ 
                    //"&UserCategryid=" +$("#Typeid").val()+ 
                    //"&selectusertype=" +$("#Roleid").val()+
                    //"&userid=" +SelUserid + 
                    //"&Value=" +Value;

                    //1
                   // if (parameters[i].Name.ToLower() == "distid")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["Districtid"].ToString(), false));
                   // }
                   // //2
                   // if (parameters[i].Name.ToLower() == "subdivid")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["Subdivid"].ToString(), false));
                   // }
                   // //3
                   // if (parameters[i].Name.ToLower() == "blockid")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["Locid"].ToString(), false));
                   // }
                   // //4
                   // if (parameters[i].Name.ToLower() == "fromdate")
                   // {

                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), DateTime.ParseExact(Request.QueryString["Fromdate"].ToString(), "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd"), false));
                   // }
                   // //5
                   // if (parameters[i].Name.ToLower() == "todate")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), DateTime.ParseExact(Request.QueryString["Todate"].ToString(), "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd"), false));
                   // }
                   // //6

                   // if (parameters[i].Name.ToLower() == "scheme")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["schemeid"].ToString(), false));
                   // }
                   ////7
                   // if (parameters[i].Name.ToLower() == "Status")
                   // {
                   //     parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["SchemeStatus"].ToString(), false));
                   // }
                    


                }

                ReportViewer1.ServerReport.SetParameters(parmList);

                ReportViewer1.DataBind(); //ReportViewer1.ServerReport.Refresh();   

            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
                lblerror.ForeColor = System.Drawing.Color.DarkRed;
            }
        }
    }
}