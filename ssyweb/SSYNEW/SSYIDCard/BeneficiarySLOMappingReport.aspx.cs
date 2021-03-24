using mBillPayPortal.Admin.Business;
using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace SSYNEW.SSYIDCard
{
	public partial class BeneficiarySLOMappingReport : System.Web.UI.Page
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


				ReportViewer1.ServerReport.ReportPath = "/Beneficiary SLO Mapping Report";



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
					if (parameters[i].Name.ToLower() == "districtid")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["DistrictId"].ToString(), false));
					}
					if (parameters[i].Name.ToLower() == "subdivisionid")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["SubDivisionId"].ToString(), false));
					}
					if (parameters[i].Name.ToLower() == "blockid")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["blockid"].ToString(), false));
					}
					if (parameters[i].Name.ToLower() == "gpward")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["Gpward"].ToString(), false));
					}
					
					if (parameters[i].Name.ToLower() == "regtype")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["Regtyp"].ToString(), false));
					}
					
					if (parameters[i].Name.ToLower() == "schemes")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["schemes"].ToString(), false));
					}
					if (parameters[i].Name.ToLower() == "fromdate")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["fromdate"].ToString(), false));
					}
					if (parameters[i].Name.ToLower() == "todate")
					{
						parmList.Add(new ReportParameter(parameters[i].Name.ToString(), Request.QueryString["todate"].ToString(), false));
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