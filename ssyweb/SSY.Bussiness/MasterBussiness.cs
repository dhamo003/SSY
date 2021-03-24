using SSY.Data;
using SSY.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Bussiness
{
    public class MasterBussiness
    {
        MasterData Md = new MasterData();
        #region
        public List<TblDistrictMst> GetDitrictsList()
        {
            return Md.GetDitrictsList();
        }
        #endregion
        #region
        public List<SpGetSubDivisionList_Result> GetSubDivList(string Name)
        {
            return Md.GetSubDivList(Name);
        }
        #endregion
        #region
        public List<SpGetLocationsList_Result> GetLocationList(string DName, string SName)
        {
            return Md.GetLocationList(DName, SName);
        }
        #endregion
        #region
        public string updateDistrictName(string id, string Name, string Type)
        {
            return Md.updateDistrictName(id, Name, Type);
        }
        #endregion

        #region   Save Gp Ward

        public RequestResponse SaveGpWard(int District, int Subdivision, string Name)
        {
            return Md.SaveGpWard(District, Subdivision, Name);
        }
        #endregion

        #region   Save Post Office

        public RequestResponse SavePostOffice(int District, string Pincode, string Name)
        {
            return Md.SavePostOffice(District, Pincode, Name);
        }
        #endregion


        #region   Save Police Station

        public RequestResponse SavePS(int District,string Name)
        {
            return Md.SavePS(District, Name);
        }
        #endregion




    }
}
