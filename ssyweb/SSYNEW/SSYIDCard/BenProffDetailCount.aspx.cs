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
using System.Data;
using System.Data.SqlClient;
using SSY.Others;
using SSYNEW.Others;

namespace SSYNEW.SSYIDCard
{
    public partial class BenProffDetailCount : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string Ids = Request.QueryString["Ids"].ToString();
                string IndType = Request.QueryString["IndType"].ToString();
                string frDate = Request.QueryString["frDate"].ToString();
                string toDate = Request.QueryString["toDate"].ToString();


                BindReport(Ids, IndType, frDate, toDate);

            }
        }
        protected void BindReport(string Ids, string IndType, string frDate, string toDate)
        {
            try
            {
                DataSet dsData = new DataSet();

                Ids = Ids.Substring(2, Ids.Length - 2);

                IndType = IndType.Substring(2, IndType.Length - 2);

                int[] DistIds = new int[Ids.Split(',').Length+1];

               string ConStr = ConfigurationManager.ConnectionStrings["SSYEntities"].ToString().Replace("connection string=", "=");

               // string ConStr = ConfigurationManager.ConnectionStrings["SSYEntities"].ConnectionString;

                Helper.AddtoLogFile("connection string 1" + DateTime.Now + " : " + ConStr);

                string[] StrArry = ConStr.Split('=');

                string[] server = StrArry[4].Split(';');
                string[] database = StrArry[5].Split(';');
                string[] Uid = StrArry[6].Split(';');
                string[] pwd = StrArry[7].Split(';');

                string SQLconstr = "server=" + server[0] + ";database=" + database[0] + ";uid=" + Uid[0] + ";pwd=" + pwd[0] + ";";

                Helper.AddtoLogFile("connection string 2" + DateTime.Now + " : " + ConStr);

                using (SqlConnection cn = new SqlConnection(SQLconstr))
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = cn;
                    cmd.CommandText = "Sp_GetDistrictWiseSummaryCount";

                    var fdate = CommonMethods.dateconvertion(frDate);
                    var tdate = CommonMethods.dateconvertion(toDate);

                    cmd.Parameters.AddWithValue("@DistrictId", Ids);
                    cmd.Parameters.AddWithValue("@IndType", IndType);
                    cmd.Parameters.AddWithValue("@FromDate", Convert.ToDateTime(fdate));
                    cmd.Parameters.AddWithValue("@ToDate", Convert.ToDateTime(tdate));

                    SqlDataAdapter da = new SqlDataAdapter(cmd);

                    da.Fill(dsData);
                }

                dsData.Tables[0].Columns.Add("Total", typeof(Int64));

                foreach (DataRow row in dsData.Tables[0].Rows)
                {
                    decimal rowSum = 0;
                    foreach (DataColumn col in dsData.Tables[0].Columns)
                    {
                        if (!row.IsNull(col))
                        {
                            string stringValue = row[col].ToString();
                            decimal d;
                            if (decimal.TryParse(stringValue, out d))
                                rowSum += d;
                        }
                    }
                    row.SetField("Total", rowSum);
                }

                string TblData = "<table id=tblData width=" + (DistIds.Length * 70 + 150) + ">";
                string TblDataExcel = "<table id=tblDataExcel style='display:none;' width=" + (DistIds.Length * 70 + 150) + ">";

                if (dsData != null)
                {
                    if (dsData.Tables.Count > 0)
                    {
                        TblData += "<tr style='background-color:#0A80BE;color:white;'><td>Industry Type</td><td>Industry Name</td>";
                        TblDataExcel += "<tr style='background-color:#0A80BE;color:white;'><td>Industry Type |</td><td>Industry Name|</td>";
                        for (int i = 2; i < dsData.Tables[0].Columns.Count; i++)
                        {
                            TblData += "<td>" + Convert.ToString(dsData.Tables[0].Columns[i]) + "</td>";
                            if (i != dsData.Tables[0].Columns.Count - 1)
                            {
                                TblDataExcel += "<td>" + Convert.ToString(dsData.Tables[0].Columns[i]) + "|</td>";
                            }
                            else
                            {
                                TblDataExcel += "<td>" + Convert.ToString(dsData.Tables[0].Columns[i]) + "~</td>";
                            }


                        }


                        for (int i = 0; i < dsData.Tables[0].Rows.Count; i++)
                        {
                            TblData += "<tr>";
                            TblDataExcel += "<tr>";
                            for (int j = 0; j < dsData.Tables[0].Columns.Count; j++)
                            {
                                TblData += "<td>" + Convert.ToString(dsData.Tables[0].Rows[i][j]) + "</td>";
                                TblDataExcel += "<td>" + Convert.ToString(dsData.Tables[0].Rows[i][j]) + "|</td>";
                                if (j > 1)
                                {
                                    DistIds[j - 2] += Convert.ToInt32(dsData.Tables[0].Rows[i][j]);
                                }
                            }
                            
                            TblData += "</tr>";
                            TblDataExcel += "</tr>";
                        }

                        TblData += "<tr style='color:green;'><th colspan=2 aling=center>Total</th>";
                        TblDataExcel += "<tr style='color:green;'><th colspan=2 aling=center>Total|</th>";

                        for (int i = 0; i < DistIds.Length; i++)
                        {
                            TblData += "<th aling=center>" + DistIds[i] + "</th>";
                            TblDataExcel += "<th aling=center>" + DistIds[i] + "|</th>";
                        }

                        TblData += "</tr>";
                        TblDataExcel += "</tr>";
                    }
                }

                TblData += "</table>";
                TblDataExcel += "</table>";

                TblDataExcel = TblDataExcel.Replace("|</td></tr>", "#</td></tr>");
                TblDataExcel = TblDataExcel.Replace("|</th></tr>", "#</th></tr>");

                form1.Controls.Add(new Literal { Text = TblData });
                form1.Controls.Add(new Literal { Text = TblDataExcel });

                if (IndType == "1")
                {
                    if (Convert.ToString(dsData.Tables[1].Rows[0]["Self-Employed"]) != "")
                    {
                        hdSelfCount.Value = Convert.ToString(dsData.Tables[1].Rows[0]["Self-Employed"]);
                    }
                    else
                        hdSelfCount.Value = "0";

                    hdIndType.Value = "1";
                }
                else if (IndType == "2")
                {
                    if (Convert.ToString(dsData.Tables[1].Rows[0]["Un-organized"]) != "")
                    {
                        hdUnorgCount.Value = Convert.ToString(dsData.Tables[1].Rows[0]["Un-organized"]);
                    }
                    else
                        hdUnorgCount.Value = "0";

                    hdIndType.Value = "2";
                }
                else if (IndType == "1,2")
                {
                    if (Convert.ToString(dsData.Tables[1].Rows[0]["Self-Employed"]) != "")
                    {
                        hdSelfCount.Value = Convert.ToString(dsData.Tables[1].Rows[0]["Self-Employed"]);
                    }
                    else
                        hdSelfCount.Value = "0";

                    if (Convert.ToString(dsData.Tables[1].Rows[0]["Un-organized"]) != "")
                    {
                        hdUnorgCount.Value = Convert.ToString(dsData.Tables[1].Rows[0]["Un-organized"]);
                    }
                    else
                        hdUnorgCount.Value = "0";

                    hdIndType.Value = "1,2";
                }

                if (Convert.ToString(dsData.Tables[1].Rows[0]["Total"]) != "")
                {
                    hdTotal.Value = Convert.ToString(dsData.Tables[1].Rows[0]["Total"]);
                }
                else
                    hdTotal.Value = "0";
            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
                lblerror.ForeColor = System.Drawing.Color.DarkRed;
            }
        }



    }
}