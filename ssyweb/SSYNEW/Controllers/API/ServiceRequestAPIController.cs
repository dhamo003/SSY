using SSY.Bussiness;
using SSY.Models;
using SSY.Others;
using SSY.ServiceLog.Models;
using SSY.ServiceLog.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SSYNEW.Controllers
{
    [RoutePrefix("api/ServiceRequestAPI")]
    public class ServiceRequestAPIController : ApiController
    {
        private BeneficaryChangeService beneficaryChangeService;
        private HomeBussiness homeBussiness;
        public ServiceRequestAPIController()
        {

        }

        #region Master Data
        [Route("GetMaritialStatus")]
        [HttpGet]
        public HttpResponseMessage GetMaritialStatus()
        {
            homeBussiness = new HomeBussiness();
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, homeBussiness.Getmaritalstatus());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        [Route("GetDistricts")]
        [HttpGet]
        public HttpResponseMessage GetDistricts()
        {
            homeBussiness = new HomeBussiness();
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, homeBussiness.GetDistrict());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        [Route("Getsubdivision")]
        [HttpGet]
        public HttpResponseMessage Getsubdivision(int distid)
        {
            homeBussiness = new HomeBussiness();
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, homeBussiness.Getsubdivision(distid));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        [Route("Getblocks")]
        [HttpGet]
        public HttpResponseMessage GetTotalblockBySubdiv(int subdivid)
        {
            homeBussiness = new HomeBussiness();
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, homeBussiness.GetTotalblockBySubdiv(subdivid));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }

        #endregion

        #region Change beneficary update Process
        [Route("GetbeneficaryDetails")]
        [HttpGet]
        public HttpResponseMessage GetbeneficaryDetails(string uniquekey, string type)
        {
            try
            {
                beneficaryChangeService = new BeneficaryChangeService();
                return Request.CreateResponse(HttpStatusCode.OK, beneficaryChangeService.GetBeneficaryDetails(uniquekey,type));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }


        [Route("UpdateBeneficaryDetails")]
        [HttpPost]
        public HttpResponseMessage UpdateBeneficaryDetails(tblBeneficaryChangesViewModel model)
        {
            try
            {
                beneficaryChangeService = new BeneficaryChangeService();
                return Request.CreateResponse(HttpStatusCode.OK, beneficaryChangeService.UpdateBeneficaryDetails(model));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        #endregion


        #region Password Update process
        [HttpPost]
        public HttpResponseMessage UpdateBeneficaryPassword(PasswordUpdateModel passwordUpdateModel)
        {
            try
            {
                string[] str = Sha1Pbkdf2.CreatePasswordHash(passwordUpdateModel.Password).Split(':');
                beneficaryChangeService = new BeneficaryChangeService();

                passwordUpdateModel.BenUserKey = str[0];
                passwordUpdateModel.BenUserPwd = str[1];
                return Request.CreateResponse(HttpStatusCode.OK, beneficaryChangeService.UpdateBeneficaryPassword(passwordUpdateModel));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
      
        #endregion
    }
}
