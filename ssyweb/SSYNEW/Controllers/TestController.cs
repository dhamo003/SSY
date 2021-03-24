using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;


//using SSY.Bussiness;
namespace SSY.Controllers
{
    // 
    
    public class TestController : Controller
    {

        HomeBussiness HB = new HomeBussiness();
        #region
        public ActionResult Index()
        {
            return View();
        }
        #endregion
        #region
        public ActionResult Transalte()
        {
            return View();
        }
        #endregion
        #region
        public ActionResult DataTable()
        {
            return View();
        }
        #endregion
        #region
        public ActionResult TestSearch()
        {


            return View();
        }
        #endregion
        #region
        public ActionResult GetFiles()
        {
            string SavePath = Path.Combine(Server.MapPath("~/Content/pdf/"));
            var pdfFiles = new DirectoryInfo(SavePath).GetFiles("*.pdf");
            List<GetFilename> files = new List<GetFilename>();
            foreach (var x in pdfFiles)
            {
                GetFilename f = new GetFilename();
                f.fileName = x.Name;
                f.filePath = "/Content/pdf/" + x.Name.Replace(" ", "%20");
                files.Add(f);
            }

            return Json(files, JsonRequestBehavior.AllowGet);
        }
        #endregion
        #region
        public ActionResult AnotherView()
        {
            return View();
        }
        #endregion
        #region
        public ActionResult VirtualKeyBoard()
        {
            return View();
        }
        #endregion
        #region
        public ActionResult PassWordStrenghtCheck()
        {
            return View();
        }
        #endregion

        //Editor For Textboxfor
        public ActionResult Practice()
        {
            practise PS = new practise();
            return View(PS);
        }

        // [OutputCache(Duration = 20, VaryByParam = "none")]
        //public ActionResult OuputCache()
        //{

           
        //    ViewBag.Date = DateTime.Now.ToString();
        //    return View();

        //}
        // [HttpGet]
        ////Ouput Cache
        //[OutputCache(Duration = 60,Location = OutputCacheLocation.ServerAndClient, VaryByParam = "Id")]
        //public ActionResult GetOuputCache(int Id)
        //{

        //    var res = HB.GetDeptUserDetails(Id);

        //    return Content(DateTime.Now.ToString());

        
//}
        public ActionResult GetIpAddress()
        {
            //string IPAddress =  string.Empty;

            //IPHostEntry Host = default(IPHostEntry);
            //string Hostname = null;
            //Hostname = System.Environment.MachineName;
            //Host = Dns.GetHostEntry(Hostname);
            //foreach (IPAddress IP in Host.AddressList)
            //{
            //   // if (IP.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
            //    //{
            //    IPAddress += ","+Convert.ToString(IP);
            //   // }
            //}
            string Tdate = DateTime.Now.ToString("yyyyMMddhhmmssfff");
            return Content(Tdate);
        }

        public ActionResult GetIframe()
        {
            string Dob = "";
            string[] str = Sha1Pbkdf2.CreatePasswordHash(Dob).Split(':');

            return View();
        }
        public ActionResult Testing()
        {
            int a = 2;
            var b = "Hello" + a;
            return  Content(b);
        }

    }
}
