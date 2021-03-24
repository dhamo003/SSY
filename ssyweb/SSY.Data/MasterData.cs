using SSY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Data
{
    public class MasterData
    {
        SSYEntities db = new SSYEntities();
        #region
        public List<TblDistrictMst> GetDitrictsList()
        {
            var res = (from x in db.TblDistrictMsts select x).ToList();
            return res;
        }
        #endregion
        #region
        public List<SpGetSubDivisionList_Result> GetSubDivList(string Name)
        {
            var res = db.SpGetSubDivisionList().ToList();
            if (Name != "ALL")
                res = (from x in res where x.DistrictName == Name select x).ToList();
            return res;
        }
        #endregion
        #region
        public List<SpGetLocationsList_Result> GetLocationList(string DName, string SName)
        {
            var res = db.SpGetLocationsList().ToList();
            if (DName != "ALL" && SName != "ALL")
                res = (from x in res where x.DistrictName == DName && x.SubDivisionName == SName select x).ToList();
            if (DName != "ALL" && SName == "ALL")
                res = (from x in res where x.DistrictName == DName select x).ToList();
            if (DName == "ALL" && SName != "ALL")
                res = (from x in res where x.SubDivisionName == SName select x).ToList();
            return res;
        }
        #endregion
        #region
        public string updateDistrictName(string id, string Name, string Type)
        {
            try
            {
                var res = db.SpUpdateMasters(Convert.ToInt16(id), Name, Type);
                return "S";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion


        #region   Save Gp Ward

        public RequestResponse SaveGpWard(int District, int Subdivision, string Name)
        {
            RequestResponse Response = new RequestResponse();
                
               
            try
            {
                var res = db.SpCreateGpWard(District, Subdivision, Name).FirstOrDefault();
                Response.Message = res.Message;
                Response.Code = res.Code;
                return Response;

            }

            catch (Exception ex)
            {

                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Response.Message = Message;
                Response.Code = "999";
                return Response;
            }

        }
        #endregion


        #region   Save Post Office

        public RequestResponse SavePostOffice(int District, string Pincode, string Name)
        {
            RequestResponse Response = new RequestResponse();


            try
            {
                var res = db.SpCreatePostOffices(District, Name, Pincode).FirstOrDefault();
                Response.Message = res.Message;
                Response.Code = res.Code;
                return Response;

            }

            catch (Exception ex)
            {

                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Response.Message = Message;
                Response.Code = "999";
                return Response;
            }

        }
        #endregion

        #region   Save Police Station

        public RequestResponse SavePS(int District, string Name)
        {
            RequestResponse Response = new RequestResponse();


            try
            {
                var res = db.SpCreatePoliceStation(District,Name,"").FirstOrDefault();
                Response.Message = res.Message;
                Response.Code = res.Code;
                return Response;

            }

            catch (Exception ex)
            {

                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Response.Message = Message;
                Response.Code = "999";
                return Response;
            }
        }
        #endregion

    }
}
        


