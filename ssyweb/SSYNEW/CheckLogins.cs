using SSY.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SSYNEW
{
    public class CheckLogins : ActionFilterAttribute
    {

        SSYEntities db = new SSYEntities();
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            try
            {
                string Value = "";
                string checkSession = ConfigurationManager.AppSettings["CheckSessions"].ToString();
                HttpContext httpContext = HttpContext.Current;
                if (httpContext.ApplicationInstance.Session.Count > 0)
                    Value = Convert.ToString(httpContext.ApplicationInstance.Session["UserSession"].ToString());
                if (Value != "" && Value != null && checkSession == "True")
                {
                    var res = (from x in db.TblLogins where x.SessionId == Value select x).FirstOrDefault();
                    if (res.Status == 0)
                    {
                        HttpContext.Current.Response.Redirect("~/Home/LogoutSession");
                    }
               
                }
            }
            catch (Exception ex)
            {
                //HttpContext.Current.Response.Redirect("~/Home/Logout");
            }



        }
    }
}
