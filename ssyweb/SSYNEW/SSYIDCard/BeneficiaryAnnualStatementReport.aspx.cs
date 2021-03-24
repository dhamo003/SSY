using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using mBillPayPortal.Admin.Business;
using Microsoft.Reporting.WebForms;
using SSY.Bussiness;
using SSY.Controllers;
using SSY.Models;
using System.Configuration;
using System.Globalization;

namespace SSYNEW.SSYIDCard
{
    public partial class BeneficiaryAnnualStatementReport : System.Web.UI.Page
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
                ReportViewer1.WaitMessageFont.Bold = true;

                ReportViewer1.ServerReport.ReportServerUrl = new Uri(ConfigurationManager.AppSettings["ReportServerURL"].ToString());


				if (Request.QueryString["isForm6"].ToString() == "1") //For Beneficiary Form6
				{
					ReportViewer1.ServerReport.ReportPath = "/BeneficiaryAnnualStatementReportForm-VI";
				}
				else //For SLO
				{
					ReportViewer1.ServerReport.ReportPath = "/BeneficiaryAnnualStatementReport";
				}

				

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
                    if (parameters[i].Name.ToLower() == "pfaccountnumber")
                    {
                        parmList.Add(new ReportParameter("PFAccountNumber", Request.QueryString["pfAccountNumber"].ToString(), false));
                    }
                    if (parameters[i].Name.ToLower() == "financialyearid")
                    {
                        parmList.Add(new ReportParameter("FinancialYearId", Request.QueryString["financialYear"].ToString(), false));
                    }
                }

                ReportViewer1.ServerReport.SetParameters(parmList);

                ReportViewer1.DataBind();

            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
                lblerror.ForeColor = System.Drawing.Color.DarkRed;
            }
        }
    }
}