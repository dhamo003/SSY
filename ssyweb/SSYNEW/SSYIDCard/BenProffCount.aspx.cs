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

namespace SSYNEW.SSYIDCard
{
    public partial class BenProffCount : System.Web.UI.Page
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

                string District = "";
                string Division = "";
                string location = "";

                Ids = Ids.Substring(2, Ids.Length - 2);

                IndType = IndType.Substring(2, IndType.Length - 2);

                string ConStr = ConfigurationManager.ConnectionStrings["SSYEntities"].ToString().Replace("connection string=", "=");

                string[] StrArry = ConStr.Split('=');

                string[] server = StrArry[4].Split(';');
                string[] database = StrArry[5].Split(';');
                string[] Uid = StrArry[6].Split(';');
                string[] pwd = StrArry[7].Split(';');

                string SQLconstr = "server=" + server[0] + ";database=" + database[0] + ";uid=" + Uid[0] + ";pwd=" + pwd[0] + ";";

                using (SqlConnection cn = new SqlConnection(SQLconstr))
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = cn;
                    cmd.CommandText = "Sp_GetLocationWiseProfessionCount_New";

                    var fdate = CommonMethods.dateconvertion(frDate);
                    var tdate = CommonMethods.dateconvertion(toDate);

                    cmd.Parameters.AddWithValue("@LocationID", Ids);
                    cmd.Parameters.AddWithValue("@IndType", IndType);
                    cmd.Parameters.AddWithValue("@FromDate", Convert.ToDateTime(fdate));
                    cmd.Parameters.AddWithValue("@ToDate", Convert.ToDateTime(tdate));

                    SqlDataAdapter da = new SqlDataAdapter(cmd);

                    da.Fill(dsData);
                }

                DataTable dt = new DataTable();

                string[] SelfEmpl = "".Split('|');
                string[] UnOrganize = "".Split('|');

                string tabHead = string.Empty;
                string TempHead = string.Empty;

                if (IndType == "1,2")
                {
                    tabHead = "<table width=7000><tr style='background-color:#0A80BE;color:white;border: 1px solid #3E3E42;'><td rowspan=2>District Name</td><td rowspan=2>Sub Divistion</td><td rowspan=2>Location</td><th colspan=15>Self Employed</td><th colspan=46>Unorganized</td></tr><tr style='background-color:#87CEEB;color:white;border: 1px solid #3E3E42;'>" +
                        "<td>Amin (Land Surveyors)</td><td>Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.</td><td>Barbers/Beauticians.</td><td>Carpenter.</td><td>Cobbler/Shoe Maker.</td><td>Cycle Rickshaw & Van Puller / Paddler</td><td>Domestic Servants.</td><td>Fishermen.</td><td>Gold Smithery & Silver Smithery.</td><td>Head-load Workers and Workers engaged in Loading & Unloading.</td><td>Idol Makers.</td><td>Railway Hawkers.</td><td>Street Hawkers including News Paper Hawker.</td><td>Waste Pickers</td><td>Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)</td>" +
                    "<td>Automobile Repairing Garages (having less than 20 workers</td><td>Bakery (having less than 20 workers)</td><td>Beedi Making</td><td>Boatman Service</td><td>Bone Mill</td><td>Book Binding.</td><td>Brassware</td><td>Cashew Processing</td><td>Ceramic</td><td>Cinema</td><td>Clinical Nursing Homes / Private Hospitals.</td><td>Coir Industry</td><td>Copy writing work in Court / Registration Office</td><td>Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works</td><td>Dal Mill.</td><td>Decoration.</td><td>Foot Wear (Leather, Rubber, Plastic)</td><td>Forestry & Timber Operation</td><td>Garments Making</td><td>Hand-loom</td><td>Hosiery.</td><td>Hotel & Restaurant</td><td>I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.</td><td>Iron Foundry</td><td>Khadi</td><td>Lac Industry (having less than 20 workers</td><td>Leather & Leather goods.</td><td>Linesman engaged in supply of Bakery Products.</td><td>Medical Plants other than Cinchona</td><td>Oil Mill.</td><td>Paper Board & Straw Board Manufacturing.</td><td>Plastic Industry.</td><td>Power Loom</td><td>Printing Press.</td><td>Rice Mill including Husking Mills</td><td>Rubber & Rubber Products</td><td>Saw Mill</td><td>Security Agencies.</td><td>Sericulture</td><td>Shops (having less than 20 workers)  & Establishments (having less than 20 workers)</td><td>Silk Printing.</td><td>Slaughter House</td><td>Small Scale Chemical Units</td><td>Small Scale Engineering Units.</td><td>Tailoring Industries (having less than 20 workers)</td><td>Type Copying Work</td>";

                    TempHead = "<table width=7000 id=tblProfCount style='display:none;'><tr><td>District Name|</td><td>Sub Divistion|</td><td>Location|</td>" +
                      "<td>Amin (Land Surveyors)|</td><td>Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.|</td><td>Barbers/Beauticians.|</td><td>Carpenter.|</td><td>Cobbler/Shoe Maker.|</td><td>Cycle Rickshaw & Van Puller / Paddler|</td><td>Domestic Servants.|</td><td>Fishermen.|</td><td>Gold Smithery & Silver Smithery.|</td><td>Head-load Workers and Workers engaged in Loading & Unloading.|</td><td>Idol Makers.|</td><td>Railway Hawkers.|</td><td>Street Hawkers including News Paper Hawker.|</td><td>Waste Pickers|</td><td>Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)|</td>" +
                  "<td>Automobile Repairing Garages (having less than 20 workers|</td><td>Bakery (having less than 20 workers)|</td><td>Beedi Making|</td><td>Boatman Service|</td><td>Bone Mill|</td><td>Book Binding.|</td><td>Brassware|</td><td>Cashew Processing|</td><td>Ceramic|</td><td>Cinema|</td><td>Clinical Nursing Homes / Private Hospitals.|</td><td>Coir Industry|</td><td>Copy writing work in Court / Registration Office|</td><td>Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works|</td><td>Dal Mill.|</td><td>Decoration.|</td><td>Foot Wear (Leather, Rubber, Plastic)|</td><td>Forestry & Timber Operation|</td><td>Garments Making|</td><td>Hand-loom|</td><td>Hosiery.|</td><td>Hotel & Restaurant|</td><td>I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.|</td><td>Iron Foundry|</td><td>Khadi|</td><td>Lac Industry (having less than 20 workers|</td><td>Leather & Leather goods.|</td><td>Linesman engaged in supply of Bakery Products.|</td><td>Medical Plants other than Cinchona|</td><td>Oil Mill.|</td><td>Paper Board & Straw Board Manufacturing.|</td><td>Plastic Industry.|</td><td>Power Loom|</td><td>Printing Press.|</td><td>Rice Mill including Husking Mills|</td><td>Rubber & Rubber Products|</td><td>Saw Mill|</td><td>Security Agencies.|</td><td>Sericulture|</td><td>Shops (having less than 20 workers)  & Establishments (having less than 20 workers)|</td><td>Silk Printing.|</td><td>Slaughter House|</td><td>Small Scale Chemical Units|</td><td>Small Scale Engineering Units.|</td><td>Tailoring Industries (having less than 20 workers)|</td><td>Type Copying Work~</td>";

                    SelfEmpl = "Amin (Land Surveyors)|Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.|Barbers/Beauticians.|Carpenter.|Cobbler/Shoe Maker.|Cycle Rickshaw & Van Puller / Paddler|Domestic Servants.|Fishermen.|Gold Smithery & Silver Smithery.|Head-load Workers and Workers engaged in Loading & Unloading.|Idol Makers.|Railway Hawkers.|Street Hawkers including News Paper Hawker.|Waste Pickers|Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)".Split('|');
                    UnOrganize = "Automobile Repairing Garages (having less than 20 workers|Bakery (having less than 20 workers)|Beedi Making|Boatman Service|Bone Mill|Book Binding.|Brassware|Cashew Processing|Ceramic|Cinema|Clinical Nursing Homes / Private Hospitals.|Coir Industry|Copy writing work in Court / Registration Office|Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works|Dal Mill.|Decoration.|Foot Wear (Leather, Rubber, Plastic)|Forestry & Timber Operation|Garments Making|Hand-loom|Hosiery.|Hotel & Restaurant|I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.|Iron Foundry|Khadi|Lac Industry (having less than 20 workers|Leather & Leather goods.|Linesman engaged in supply of Bakery Products.|Medical Plants other than Cinchona|Oil Mill.|Paper Board & Straw Board Manufacturing.|Plastic Industry.|Power Loom|Printing Press.|Rice Mill including Husking Mills|Rubber & Rubber Products|Saw Mill|Security Agencies.|Sericulture|Shops (having less than 20 workers)  & Establishments (having less than 20 workers)|Silk Printing.|Slaughter House|Small Scale Chemical Units|Small Scale Engineering Units.|Tailoring Industries (having less than 20 workers)|Type Copying Work".Split('|');

                }
                else if (IndType == "1")
                {
                    tabHead = "<table width=2000><tr style='background-color:#0A80BE;color:white;border: 1px solid #3E3E42;'><td rowspan=2>District Name</td><td rowspan=2>Sub Divistion</td><td rowspan=2>Location</td><th colspan=15>Self Employed</td><tr style='background-color:#87CEEB;color:white;border: 1px solid #3E3E42;'>" +
                                          "<td>Amin (Land Surveyors)</td><td>Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.</td><td>Barbers/Beauticians.</td><td>Carpenter.</td><td>Cobbler/Shoe Maker.</td><td>Cycle Rickshaw & Van Puller / Paddler</td><td>Domestic Servants.</td><td>Fishermen.</td><td>Gold Smithery & Silver Smithery.</td><td>Head-load Workers and Workers engaged in Loading & Unloading.</td><td>Idol Makers.</td><td>Railway Hawkers.</td><td>Street Hawkers including News Paper Hawker.</td><td>Waste Pickers</td><td>Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)</td>";

                    TempHead = "<table width=2000 id=tblProfCount style='display:none;'><tr><td>District Name|</td><td>Sub Divistion|</td><td>Location|</td>" +
                      "<td>Amin (Land Surveyors)|</td><td>Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.|</td><td>Barbers/Beauticians.|</td><td>Carpenter.|</td><td>Cobbler/Shoe Maker.|</td><td>Cycle Rickshaw & Van Puller / Paddler|</td><td>Domestic Servants.|</td><td>Fishermen.|</td><td>Gold Smithery & Silver Smithery.|</td><td>Head-load Workers and Workers engaged in Loading & Unloading.|</td><td>Idol Makers.|</td><td>Railway Hawkers.|</td><td>Street Hawkers including News Paper Hawker.|</td><td>Waste Pickers|</td><td>Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)~</td>";

                    SelfEmpl = "Amin (Land Surveyors)|Ayah/Attendant engaged in Hospitals/Nursing Homes by the patients.|Barbers/Beauticians.|Carpenter.|Cobbler/Shoe Maker.|Cycle Rickshaw & Van Puller / Paddler|Domestic Servants.|Fishermen.|Gold Smithery & Silver Smithery.|Head-load Workers and Workers engaged in Loading & Unloading.|Idol Makers.|Railway Hawkers.|Street Hawkers including News Paper Hawker.|Waste Pickers|Workers of NGOs & person engaged in W. B. Welfare Scheme run by the Govt. including Self-Employed Labour Organizors ( SLOs)".Split('|');

                }
                if (IndType == "2")
                {
                    tabHead = "<table width=5000><tr style='background-color:#0A80BE;color:white;border: 1px solid #3E3E42;'><td rowspan=2>District Name</td><td rowspan=2>Sub Divistion</td><td rowspan=2>Location</td><th colspan=46>Unorganized</td></tr><tr style='background-color:#87CEEB;color:white;border: 1px solid #3E3E42;'>" +
                  "<td>Automobile Repairing Garages (having less than 20 workers</td><td>Bakery (having less than 20 workers)</td><td>Beedi Making</td><td>Boatman Service</td><td>Bone Mill</td><td>Book Binding.</td><td>Brassware</td><td>Cashew Processing</td><td>Ceramic</td><td>Cinema</td><td>Clinical Nursing Homes / Private Hospitals.</td><td>Coir Industry</td><td>Copy writing work in Court / Registration Office</td><td>Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works</td><td>Dal Mill.</td><td>Decoration.</td><td>Foot Wear (Leather, Rubber, Plastic)</td><td>Forestry & Timber Operation</td><td>Garments Making</td><td>Hand-loom</td><td>Hosiery.</td><td>Hotel & Restaurant</td><td>I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.</td><td>Iron Foundry</td><td>Khadi</td><td>Lac Industry (having less than 20 workers</td><td>Leather & Leather goods.</td><td>Linesman engaged in supply of Bakery Products.</td><td>Medical Plants other than Cinchona</td><td>Oil Mill.</td><td>Paper Board & Straw Board Manufacturing.</td><td>Plastic Industry.</td><td>Power Loom</td><td>Printing Press.</td><td>Rice Mill including Husking Mills</td><td>Rubber & Rubber Products</td><td>Saw Mill</td><td>Security Agencies.</td><td>Sericulture</td><td>Shops (having less than 20 workers)  & Establishments (having less than 20 workers)</td><td>Silk Printing.</td><td>Slaughter House</td><td>Small Scale Chemical Units</td><td>Small Scale Engineering Units.</td><td>Tailoring Industries (having less than 20 workers)</td><td>Type Copying Work</td>";

                    TempHead = "<table width=5000 id=tblProfCount style='display:none;'><tr><td>District Name|</td><td>Sub Divistion|</td><td>Location|</td>" +
                  "<td>Automobile Repairing Garages (having less than 20 workers|</td><td>Bakery (having less than 20 workers)|</td><td>Beedi Making|</td><td>Boatman Service|</td><td>Bone Mill|</td><td>Book Binding.|</td><td>Brassware|</td><td>Cashew Processing|</td><td>Ceramic|</td><td>Cinema|</td><td>Clinical Nursing Homes / Private Hospitals.|</td><td>Coir Industry|</td><td>Copy writing work in Court / Registration Office|</td><td>Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works|</td><td>Dal Mill.|</td><td>Decoration.|</td><td>Foot Wear (Leather, Rubber, Plastic)|</td><td>Forestry & Timber Operation|</td><td>Garments Making|</td><td>Hand-loom|</td><td>Hosiery.|</td><td>Hotel & Restaurant|</td><td>I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.|</td><td>Iron Foundry|</td><td>Khadi|</td><td>Lac Industry (having less than 20 workers|</td><td>Leather & Leather goods.|</td><td>Linesman engaged in supply of Bakery Products.|</td><td>Medical Plants other than Cinchona|</td><td>Oil Mill.|</td><td>Paper Board & Straw Board Manufacturing.|</td><td>Plastic Industry.|</td><td>Power Loom|</td><td>Printing Press.|</td><td>Rice Mill including Husking Mills|</td><td>Rubber & Rubber Products|</td><td>Saw Mill|</td><td>Security Agencies.|</td><td>Sericulture|</td><td>Shops (having less than 20 workers)  & Establishments (having less than 20 workers)|</td><td>Silk Printing.|</td><td>Slaughter House|</td><td>Small Scale Chemical Units|</td><td>Small Scale Engineering Units.|</td><td>Tailoring Industries (having less than 20 workers)|</td><td>Type Copying Work~</td>";

                    UnOrganize = "Automobile Repairing Garages (having less than 20 workers|Bakery (having less than 20 workers)|Beedi Making|Boatman Service|Bone Mill|Book Binding.|Brassware|Cashew Processing|Ceramic|Cinema|Clinical Nursing Homes / Private Hospitals.|Coir Industry|Copy writing work in Court / Registration Office|Cottage / Village based Cottage Industry (Boatman service, Bangle Making, Fire work, Chakki Mills, Kite & Kite sticks Manufacturing, Earthen pottery Work, Paddy Husking, Embroidery & Zari Chicon Works|Dal Mill.|Decoration.|Foot Wear (Leather, Rubber, Plastic)|Forestry & Timber Operation|Garments Making|Hand-loom|Hosiery.|Hotel & Restaurant|I.C.D.S., I.P.P.-VIII & C.U.D.P.-III.|Iron Foundry|Khadi|Lac Industry (having less than 20 workers|Leather & Leather goods.|Linesman engaged in supply of Bakery Products.|Medical Plants other than Cinchona|Oil Mill.|Paper Board & Straw Board Manufacturing.|Plastic Industry.|Power Loom|Printing Press.|Rice Mill including Husking Mills|Rubber & Rubber Products|Saw Mill|Security Agencies.|Sericulture|Shops (having less than 20 workers)  & Establishments (having less than 20 workers)|Silk Printing.|Slaughter House|Small Scale Chemical Units|Small Scale Engineering Units.|Tailoring Industries (having less than 20 workers)|Type Copying Work".Split('|');

                }

                string tab = "";

                string str1 = "";
                string str2 = "";

                bool found = false;

                string subTab = "";

                DataTable dtData = new DataTable();

                dtData.Columns.Add("IndType", typeof(string));
                dtData.Columns.Add("IndustryName", typeof(string));
                dtData.Columns.Add("DistrictName", typeof(string));
                dtData.Columns.Add("SubDivisionName", typeof(string));
                dtData.Columns.Add("BlockName", typeof(string));
                dtData.Columns.Add("TCount", typeof(string));


                //Self - Employed   Railway Hawkers.	Bankura Bankura Bankura - I   1

                for (int i = 0; i < dsData.Tables[5].Rows.Count; i++)
                {
                    found = false;
                    try
                    {
                        for (int j = 0; j < dsData.Tables[0].Rows.Count; j++)
                        {

                            if (Convert.ToString(dsData.Tables[5].Rows[i]["DistrictName"]) == (Convert.ToString(dsData.Tables[0].Rows[j]["DistrictName"])) &&
                                Convert.ToString(dsData.Tables[5].Rows[i]["SubDivisionName"]) == (Convert.ToString(dsData.Tables[0].Rows[j]["SubDivisionName"])) &&
                                Convert.ToString(dsData.Tables[5].Rows[i]["BlockName"]) == (Convert.ToString(dsData.Tables[0].Rows[j]["BlockName"])))
                            {
                                found = true;
                                break;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        ex = null;
                        dtData.Rows.Add("Self-Employed",
                                    "Railway Hawkers.", Convert.ToString(dsData.Tables[5].Rows[i]["DistrictName"]),
                                    Convert.ToString(dsData.Tables[5].Rows[i]["SubDivisionName"]), Convert.ToString(dsData.Tables[5].Rows[i]["BlockName"]),
                                    "0");

                        found = true;
                    }
                    if (!found)
                    {
                        dtData.Rows.Add("Self-Employed",
                            "Railway Hawkers.", Convert.ToString(dsData.Tables[5].Rows[i]["DistrictName"]),
                            Convert.ToString(dsData.Tables[5].Rows[i]["SubDivisionName"]), Convert.ToString(dsData.Tables[5].Rows[i]["BlockName"]),
                            "0");
                    }
                }

                found = false;

                for (int i = 0; i < dsData.Tables[0].Rows.Count; i++)
                {


                    dtData.Rows.Add(Convert.ToString(dsData.Tables[0].Rows[i][0]),
                        Convert.ToString(dsData.Tables[0].Rows[i][1]),
                        Convert.ToString(dsData.Tables[0].Rows[i][2]),
                        Convert.ToString(dsData.Tables[0].Rows[i][3]),
                        Convert.ToString(dsData.Tables[0].Rows[i][4]),
                        Convert.ToString(dsData.Tables[0].Rows[i][5]));
                }

                DataView dv = dtData.DefaultView;

                dv.Sort = "DistrictName,SubDivisionName,BlockName";

                dtData = dv.ToTable();

                for (int r = 0; r < dtData.Rows.Count; r++)
                {
                    if (r != 0)
                    {
                        if (Convert.ToString(dtData.Rows[r]["BlockName"]) == location)
                        {
                            //dtData.Rows
                            continue;
                        }
                    }
                    location = Convert.ToString(dtData.Rows[r]["BlockName"]);


                    var locSelf = from Loc in dsData.Tables[0].AsEnumerable()
                                  where Loc.Field<string>("BlockName") == location
                                  && Loc.Field<string>("IndType") == "Self-Employed"
                                  orderby Loc.Field<string>("IndustryName")
                                  select Loc;


                    if (r != 0)
                    {
                        if (Convert.ToString(dtData.Rows[r]["DistrictName"]) == District)
                        {
                            if (Convert.ToString(dtData.Rows[r]["SubDivisionName"]) == Division)
                            {
                                tab += "<tr><td></td><td></td><td>" + location + "</td>";
                            }
                            else
                            {
                                var locDivision = from Loc in dsData.Tables[1].AsEnumerable()
                                                  where Loc.Field<string>("SubDivisionName") == Convert.ToString(dtData.Rows[r - 1]["SubDivisionName"])
                                                  orderby Loc.Field<string>("IndustryName")
                                                  select Loc;
                                subTab = "";

                                for (int i = 0; i < SelfEmpl.Length; i++)
                                {
                                    if (SelfEmpl[i] != "")
                                    {
                                        foreach (var item in locDivision)
                                        {
                                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                            str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                                            if (str1 == str2)
                                            {
                                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                                found = true;
                                                break;
                                            }

                                        }
                                        if (!found)
                                        {
                                            subTab += "<td>0</td>";
                                        }

                                        found = false;
                                    }
                                }

                                for (int i = 0; i < UnOrganize.Length; i++)
                                {
                                    if (UnOrganize[i] != "")
                                    {
                                        foreach (var item in locDivision)
                                        {
                                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                            str2 = RemoveWhitespace(UnOrganize[i].ToString());

                                            if (str1 == str2)
                                            {
                                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                                found = true;
                                                break;
                                            }

                                        }
                                        if (!found)
                                        {
                                            subTab += "<td>0</td>";
                                        }

                                        found = false;
                                    }
                                }
                                tab += "<tr style='color:#FF6347;'><td></td><td colspan=2 align=center>Sub division wise count</td>" + subTab + "</tr>";

                                Division = Convert.ToString(dtData.Rows[r]["SubDivisionName"]);
                                tab += "<tr><td></td><td>" + Division + "</td><td>" + location + "</td>";
                            }

                        }
                        else
                        {
                            var locDivision = from Loc in dsData.Tables[1].AsEnumerable()
                                              where Loc.Field<string>("SubDivisionName") == Convert.ToString(dtData.Rows[r - 1]["SubDivisionName"])
                                              orderby Loc.Field<string>("IndustryName")
                                              select Loc;
                            subTab = "";

                            for (int i = 0; i < SelfEmpl.Length; i++)
                            {
                                if (SelfEmpl[i] != "")
                                {
                                    foreach (var item in locDivision)
                                    {
                                        str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                        str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                                        if (str1 == str2)
                                        {
                                            subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                            found = true;
                                            break;
                                        }

                                    }
                                    if (!found)
                                    {
                                        subTab += "<td>0</td>";
                                    }

                                    found = false;
                                }
                            }

                            for (int i = 0; i < UnOrganize.Length; i++)
                            {
                                if (UnOrganize[i] != "")
                                {
                                    foreach (var item in locDivision)
                                    {
                                        str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                        str2 = RemoveWhitespace(UnOrganize[i].ToString());

                                        if (str1 == str2)
                                        {
                                            subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                            found = true;
                                            break;
                                        }

                                    }
                                    if (!found)
                                    {
                                        subTab += "<td>0</td>";
                                    }

                                    found = false;
                                }
                            }
                            tab += "<tr style='color:#FF6347;'><td></td><td colspan=2 align=center>Sub division wise count</td>" + subTab + "</tr>";

                            var locDist = from Loc in dsData.Tables[2].AsEnumerable()
                                          where Loc.Field<string>("DistrictName") == Convert.ToString(dtData.Rows[r - 1]["DistrictName"])
                                          orderby Loc.Field<string>("IndustryName")
                                          select Loc;

                            subTab = "";
                            for (int i = 0; i < SelfEmpl.Length; i++)
                            {
                                if (SelfEmpl[i] != "")
                                {
                                    foreach (var item in locDist)
                                    {
                                        str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                        str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                                        if (str1 == str2)
                                        {
                                            subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                            found = true;
                                            break;
                                        }

                                    }
                                    if (!found)
                                    {
                                        subTab += "<td>0</td>";
                                    }

                                    found = false;
                                }
                            }

                            for (int i = 0; i < UnOrganize.Length; i++)
                            {
                                if (UnOrganize[i] != "")
                                {
                                    foreach (var item in locDist)
                                    {
                                        str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                        str2 = RemoveWhitespace(UnOrganize[i].ToString());

                                        if (str1 == str2)
                                        {
                                            subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                            found = true;
                                            break;
                                        }

                                    }
                                    if (!found)
                                    {
                                        subTab += "<td>0</td>";
                                    }

                                    found = false;
                                }
                            }
                            tab += "<tr style='color:red;'><td colspan=3 align=center>District Wise Count</td>" + subTab + "</tr>";

                            District = Convert.ToString(dtData.Rows[r]["DistrictName"]);
                            Division = Convert.ToString(dtData.Rows[r]["SubDivisionName"]);

                            tab += "<tr><td>" + District + "</td><td>" + Division + "</td><td>" + location + "</td>";
                        }
                    }
                    else
                    {
                        District = Convert.ToString(dtData.Rows[r]["DistrictName"]);
                        Division = Convert.ToString(dtData.Rows[r]["SubDivisionName"]);


                        tab += "<tr><td>" + District + "</td><td>" + Division + "</td><td>" + location + "</td>";
                    }


                    for (int i = 0; i < SelfEmpl.Length; i++)
                    {
                        if (SelfEmpl[i] != "")
                        {
                            foreach (var item in locSelf)
                            {
                                str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                str2 = RemoveWhitespace(SelfEmpl[i].ToString());
                                if (str1 == str2)
                                {
                                    tab += "<td>" + item.ItemArray[5].ToString() + "</td>";
                                    found = true;
                                    break;
                                }

                            }
                            if (!found)
                            {
                                tab += "<td>0</td>";
                            }

                            found = false;
                        }
                    }

                    var locUnorg = from Loc in dsData.Tables[0].AsEnumerable()
                                   where Loc.Field<string>("BlockName") == location//block.ItemArray[4].ToString()
                                   && Loc.Field<string>("IndType") == "Un-organized"
                                   orderby Loc.Field<string>("IndustryName")
                                   select Loc;

                    found = false;
                    for (int i = 0; i < UnOrganize.Length; i++)
                    {
                        if (UnOrganize[i] != "")
                        {
                            foreach (var item in locUnorg)
                            {
                                str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                                //.Replace(' ','');
                                str2 = RemoveWhitespace(UnOrganize[i].ToString());
                                if (str1 == str2)
                                {
                                    tab += "<td>" + item.ItemArray[5].ToString() + "</td>";
                                    found = true;
                                    break;
                                }

                            }

                            if (!found)
                            {
                                tab += "<td>0</td>";
                            }

                            found = false;
                        }
                    }



                    tab += "</tr>";

                }


                var locDivisionOut = from Loc in dsData.Tables[1].AsEnumerable()
                                     where Loc.Field<string>("SubDivisionName") == Convert.ToString(dtData.Rows[dtData.Rows.Count - 1]["SubDivisionName"])
                                     orderby Loc.Field<string>("IndustryName")
                                     select Loc;
                subTab = "";

                for (int i = 0; i < SelfEmpl.Length; i++)
                {
                    if (SelfEmpl[i] != "")
                    {
                        foreach (var item in locDivisionOut)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                            str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<td>0</td>";
                        }

                        found = false;
                    }
                }

                for (int i = 0; i < UnOrganize.Length; i++)
                {
                    if (UnOrganize[i] != "")
                    {
                        foreach (var item in locDivisionOut)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                            str2 = RemoveWhitespace(UnOrganize[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<td>0</td>";
                        }

                        found = false;
                    }
                }
                tab += "<tr style='color:#FF6347;'><td></td><td colspan=2 align=center>Sub division wise count</td>" + subTab + "</tr>";

                var locDistOut = from Loc in dsData.Tables[2].AsEnumerable()
                                 where Loc.Field<string>("DistrictName") == Convert.ToString(dtData.Rows[dtData.Rows.Count - 1]["DistrictName"])
                                 orderby Loc.Field<string>("IndustryName")
                                 select Loc;

                subTab = "";
                for (int i = 0; i < SelfEmpl.Length; i++)
                {
                    if (SelfEmpl[i] != "")
                    {
                        foreach (var item in locDistOut)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                            str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<td>0</td>";
                        }

                        found = false;
                    }
                }

                for (int i = 0; i < UnOrganize.Length; i++)
                {
                    if (UnOrganize[i] != "")
                    {
                        foreach (var item in locDistOut)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[1].ToString());

                            str2 = RemoveWhitespace(UnOrganize[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<td>" + item.ItemArray[2].ToString() + "</td>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<td>0</td>";
                        }

                        found = false;
                    }
                }

                tab += "<tr style='color:red;'><td colspan=3 align=center>District Wise Count</td>" + subTab + "</tr>";

                /////Grand Total

                var locDistGrand = from Loc in dsData.Tables[3].AsEnumerable()
                                   orderby Loc.Field<string>("IndustryName")
                                   select Loc;

                subTab = "";
                for (int i = 0; i < SelfEmpl.Length; i++)
                {
                    if (SelfEmpl[i] != "")
                    {
                        foreach (var item in locDistGrand)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[0].ToString());

                            str2 = RemoveWhitespace(SelfEmpl[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<th>" + item.ItemArray[1].ToString() + "</th>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<th>0</th>";
                        }

                        found = false;
                    }
                }

                for (int i = 0; i < UnOrganize.Length; i++)
                {
                    if (UnOrganize[i] != "")
                    {
                        foreach (var item in locDistGrand)
                        {
                            str1 = RemoveWhitespace(item.ItemArray[0].ToString());

                            str2 = RemoveWhitespace(UnOrganize[i].ToString());

                            if (str1 == str2)
                            {
                                subTab += "<th>" + item.ItemArray[1].ToString() + "</th>";
                                found = true;
                                break;
                            }

                        }
                        if (!found)
                        {
                            subTab += "<th>0</th>";
                        }

                        found = false;
                    }
                }

                string tabTemp = tab + "<tr><th></th><th>Grand Total</th><th></th>" + subTab + "</tr></table>";

                tab += "<tr style='color:green;'><th colspan=3 align=center>Grand Total</th>" + subTab + "</tr>";


                tabHead += tab + "</table>";


                //////Total Counts
                hdSelfEmp.Value = "";
                if (IndType == "1")
                {
                    if (Convert.ToString(dsData.Tables[4].Rows[0]["SelfEmp"]) != "")
                    {
                        hdSelfEmp.Value = Convert.ToString(dsData.Tables[4].Rows[0]["SelfEmp"]);
                    }
                    else
                        hdSelfEmp.Value = "0";

                    hdIndType.Value = "1";
                }
                else if (IndType == "2")
                {
                    if (Convert.ToString(dsData.Tables[4].Rows[0]["UnOrg"]) != "")
                    {
                        hdUnorgEmp.Value = Convert.ToString(dsData.Tables[4].Rows[0]["UnOrg"]);
                    }
                    else
                        hdUnorgEmp.Value = "0";

                    hdIndType.Value = "2";
                }
                else if (IndType == "1,2")
                {
                    if (Convert.ToString(dsData.Tables[4].Rows[0]["SelfEmp"]) != "")
                    {
                        hdSelfEmp.Value = Convert.ToString(dsData.Tables[4].Rows[0]["SelfEmp"]);
                    }
                    else
                        hdSelfEmp.Value = "0";

                    if (Convert.ToString(dsData.Tables[4].Rows[0]["UnOrg"]) != "")
                    {
                        hdUnorgEmp.Value = Convert.ToString(dsData.Tables[4].Rows[0]["UnOrg"]);
                    }
                    else
                        hdUnorgEmp.Value = "0";

                    hdIndType.Value = "1,2";
                }

                if (Convert.ToString(dsData.Tables[4].Rows[0]["TotalEmp"]) != "")
                {
                    hdTotal.Value = Convert.ToString(dsData.Tables[4].Rows[0]["TotalEmp"]);
                }
                else
                    hdTotal.Value = "0";
                            
                //<td colspan=2
                //tabTemp = tabTemp.Replace("<td colspan=3 align=center>District Wise Count</td>", "<td></td><th>District Wise Count</th><td></td>");
                //tabTemp = tabTemp.Replace("<td colspan=2 align=center>Sub division wise count</td>", "<th>Sub division wise count</th><td></td>");
                tabTemp = tabTemp.Replace("</td>", "|</td>");
                tabTemp = tabTemp.Replace("</th>", "|</th>");

                tabTemp = tabTemp.Replace("|</td></tr>", "#</td></tr>");
                tabTemp = tabTemp.Replace("|</th></tr>", "#</th></tr>");

                TempHead += tabTemp;



                form1.Controls.Add(new Literal { Text = tabHead });
                form1.Controls.Add(new Literal { Text = TempHead });

            }
            catch (Exception ex)
            {
                lblerror.Text = ex.Message;
                lblerror.ForeColor = System.Drawing.Color.DarkRed;
            }
        }

        private string RemoveWhitespace(string input)
        {
            if (input == null)
                return null;
            return new string(input.ToCharArray()
                .Where(c => !Char.IsWhiteSpace(c))
                .ToArray());
        }


    }
}