using Newtonsoft.Json;
using SSY.Bussiness;
using SSYNEW.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace SSYNEW.Controllers
{
    public class SSYHomeController : Controller
    {
        // GET: SSYHome
        public ActionResult Index()
        {
            return View();
        }
        #region OrganizationStructure  page on home page
        public ActionResult OrganizationStructure()
        {
            return View();

        }
        #endregion
        #region Functions page on home page
        public ActionResult Functions()
        {
            return View();
        }
        #endregion
        #region Rti page on home page
        public ActionResult Rti()
        {
            return View();
        }
        #endregion

        #region Actrules page on home page
        public ActionResult Actrules()
        {
            return View();
        }
        #endregion

        #region Minimum waged notifications on home page
        public ActionResult MinimumWagesNoti()
        {
            return View();
        }
        #endregion

        #region Faqs on home page
        public ActionResult Faqs()
        {
            return View();
        }
        #endregion

        #region UserManual on home page
        public ActionResult UserManual()
        {
            return View();
        }
        #endregion

        #region Schemes on home page
        public ActionResult Schemes()
        {
            return View();
        }
        #endregion

        #region Forms on home page
        public ActionResult Forms()
        {
            return View();
        }
        #endregion


        #region DocumentsUploaded on home page
        public ActionResult UploaddDocuments()
        {
            return View();
        }
        #endregion

        #region Photo gallery on home page
        public ActionResult Photogallery()
        {
            return View();
        }
        #endregion
        #region video gallery on home page
        public ActionResult VideoGallery()
        {
            return View();
        }
        #endregion

        #region
        public ActionResult PressRelease()
        {
            return View();
        }
        #endregion

    }
}