using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Net;
using System.IO;
using SSYNEW.Others;
using Newtonsoft.Json;
using System.Xml.Linq;
using SSY.Models;
using System.Xml.Serialization;
using static SSY.Others.PfTransactionscs;
using Newtonsoft.Json.Linq;
using System.Text;

namespace SSYNEW.Controllers
{
    public class GetPfBalController : Controller
    {
        // GET: GetPfBal
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetPfTransaction(string PfNumber = "1609009205")

        {
            var xml = Helper.CallWebServiceTransactions(PfNumber);

            XmlDocument document = new XmlDocument();
            document.LoadXml(xml);


            // XmlSerializer serializer = new XmlSerializer(typeof(List<MultiRef>), new XmlRootAttribute("MultiRef"));

            //  StringReader stringReader = new StringReader(document.ToString());

            // List<MultiRef> productList = (List<MultiRef>)serializer.Deserialize(stringReader);

            var jsonText = JsonConvert.SerializeXmlNode(document);

            //string Value = "";

            string XmlString = "";

            //XmlElement elt2 = document.SelectSingleNode("//multiRef[@id='id1']") as XmlElement;

            JObject obj = JObject.Parse(jsonText);
            //int count = (int)obj["Count"];
            var xDoc = XDocument.Parse(xml);
            var list = xDoc.Descendants()
                       .Select(x => new
                       {
                           Name = x.Name.LocalName,
                           Namespace = x.Name.Namespace.ToString(),
                           Attributes = x.Attributes().ToDictionary(a => a.Name.LocalName, a => a.Value),
                           Value = x.HasElements ? "" : x.Value
                       })
                       .ToList();

            foreach (var data in list)
            {
                string value = data.Name;
                string AId = data.Attributes["href"].ToString();
            }

            XmlNode nodes = document.SelectSingleNode("//multiRef");

            foreach (XmlNode node in nodes)
            {

                string Id = node.SelectNodes("//multiRef//@href").ToString();

                XmlElement element = document.SelectSingleNode("//multiRef[@id='" + Id + "']") as XmlElement;

            }

            //XmlString += "<Transactions>";
            //foreach (XmlNode node in nodes)
            //{

            //    XmlNode Node1 = node.SelectSingleNode("//multiRef//agent");

            //    foreach (XmlNode innernode in Node1)
            //    {
            //        XmlString += "<Transaction>";
            //        int i = 1;

            //    }



            //}
            //XmlString += "</Transactions>";
            return Content("");

        }

        public ActionResult GetPfBalance(string PfNumber = "")
        {

            PfDetails Res = new PfDetails();
            try
            {
                var res = Helper.CallWebService(PfNumber);
                string Balance = "";
                string Date = "";
                string ContriAfterClose = "";
                string FinalDate = "";
                // To convert an XML node contained in string xml into a JSON string   
                XmlDocument doc = new XmlDocument();
                doc.LoadXml(res);



                XmlNode openBalance = doc.SelectSingleNode("//multiRef/contriAfterLastClos");
                XmlNode ClosingBal = doc.SelectSingleNode("//multiRef/lastClosingBalance");

                XmlNode node = doc.SelectSingleNode("//multiRef/lastClosingBalanceDate");

                string openBalanceid = doc.SelectSingleNode("//multiRef/contriAfterLastClos/@href").Value.Substring(1, doc.SelectSingleNode("//multiRef/contriAfterLastClos/@href").Value.Length - 1);
                string ClosingBalid = doc.SelectSingleNode("//multiRef/lastClosingBalance/@href").Value.Substring(1, doc.SelectSingleNode("//multiRef/lastClosingBalance/@href").Value.Length - 1);


                XmlElement elt2 = doc.SelectSingleNode("//multiRef[@id='" + openBalanceid + "']") as XmlElement;
                XmlElement elt = doc.SelectSingleNode("//multiRef[@id='" + ClosingBalid + "']") as XmlElement;




                if (elt.InnerText != null)
                {
                    Balance = elt.InnerText;
                }
                if (node.InnerText != null)
                {
                    Date = node.InnerText;
                }

                if (elt2.InnerText != null)
                {
                    ContriAfterClose = elt2.InnerText;
                }
                string[] FDate = Date.Split('-');
                FinalDate = FDate[2] + "-" + FDate[1] + "-" + FDate[0];

                Res.Code = "000";
                Res.Balance = Balance;
                Res.Date = FinalDate;
                Res.Contribution = ContriAfterClose;
                return Json(Res, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                string Message = Helper.ReturnException(ex);
                Res.Code = "999";
                Res.Balance = "";
                Res.Date = "";

                return Json(Res, JsonRequestBehavior.AllowGet);
            }
        }

        public class BeniDet
        {
            // public int id;
            public string lastClosingBalance;
            public string lastClosingBalanceDate;

        };


        //public static T SOAPToObject<T>(string SOAP)
        //{
        //    if (string.IsNullOrEmpty(SOAP))
        //    {
        //        throw new ArgumentException("SOAP can not be null/empty");
        //    }
        //    using (MemoryStream Stream = new MemoryStream(UTF8Encoding.UTF8.GetBytes(SOAP)))
        //    {
        //        SoapFormatter Formatter = new SoapFormatter();
        //        return (T)Formatter.Deserialize(Stream);
        //    }
        //}
    }


}


