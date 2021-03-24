using mBillPayPortal.Admin.Business;
using Microsoft.Reporting.WebForms;
using SSY.Bussiness;
using SSY.Controllers;
using SSY.Models;
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
    public partial class AdjustmentTransactionsReport : System.Web.UI.Page
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
                RegistrationController RC = new RegistrationController();
                RegistrationBussiness Rb = new RegistrationBussiness();
                SSYEntities db = new SSYEntities();

                ReportViewer1.ShowParameterPrompts = false;
                //ReportViewer1.ShowToolBar = false;
                ReportViewer1.WaitMessageFont.Bold = true;

                ReportViewer1.ServerReport.ReportServerUrl = new Uri(ConfigurationManager.AppSettings["ReportServerURL"].ToString());

                //string IsStaging = ConfigurationManager.AppSettings["IsStaging"].ToString();


                ReportViewer1.ServerReport.ReportPath = "/AdjustmentTransactionsReport";



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
                    if (parameters[i].Name.ToLower() == "usertype")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["usertype"].ToString(), false));
                    }

                    if (parameters[i].Name.ToLower() == "district")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["district"].ToString(), false));
                    }
                    if (parameters[i].Name.ToLower() == "rlo")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["RLO"].ToString(), false));
                    }
                    if (parameters[i].Name.ToLower() == "fromdate")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), DateTime.ParseExact(Request.QueryString["fromdate"].ToString(), "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd"), false));

                    }
                    if (parameters[i].Name.ToLower() == "todate")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), DateTime.ParseExact(Request.QueryString["todate"].ToString(), "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd"), false));

                    }
                    if (parameters[i].Name.ToLower() == "userid")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["userid"].ToString(), false));
                    }
                    if (parameters[i].Name.ToLower() == "includebentransactions")
                    {
                        parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["includebentransactions"].ToString(), false));
                    }
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