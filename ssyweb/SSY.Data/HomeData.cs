using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
namespace SSY.Data
{
    public class HomeData
    {
        SSYEntities db = new SSYEntities();

        #region
        public List<SelectListItem> GetType(int id)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblUserCategories select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.UserType,
                        Value = x.UserCategoryId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select UserType--", Value = "-1" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetRoles(int id)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblUserTypes where x.IsActive == true select x).ToList();
            if (id == -1)
            {
                list = (from x in res
                        where x.UserTypeId == id
                        select new SelectListItem()
                        {
                            Text = x.UserTypeName,
                            Value = x.UserTypeId.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select Role --", Value = "-1" });
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            }
            if (id == 1)
            {
                list = (from x in res
                        where x.UserCategoryId == 1
                        select new SelectListItem()
                        {
                            Text = x.UserTypeName,
                            Value = x.UserTypeId.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
                list.Insert(0, new SelectListItem { Text = "-- Select Role --", Value = "-1" });
                return list;
            }
            if (id == 2)
            {
                list = (from x in res
                        where x.UserCategoryId == 2
                        select new SelectListItem()
                        {
                            Text = x.UserTypeName,
                            Value = x.UserTypeId.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
                list.Insert(0, new SelectListItem { Text = "-- Select Role --", Value = "-1" });
            }
            if (id == 0)
            {
                list = (from x in res
                        select new SelectListItem()
                        {
                            Text = x.UserTypeName,
                            Value = x.UserTypeId.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "Beneficiary", Value = "15" });
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
                list.Insert(0, new SelectListItem { Text = "-- Select Role --", Value = "-1" });
            }
            return list;
        }

        public List<Field> GetSiteSettingsFileds()
        {
            List<Field> fields = new List<Field>();
            var settings = db.tbl_SiteSettings;
            foreach (var s in settings)
            {
                fields.Add(new Field()
                {
                    FieldName = s.SettingsName,
                    FieldType = s.SettingsDatatype,
                    Value = s.SettingsValue
                });
            }

            return fields;
        }
        #endregion

        #region
        public List<SelectListItem> GetdeptUsers(string Roleids, int Districtid, string Subdivid, string Locid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetUserList(Roleids, Districtid, Subdivid, Locid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.usercode,
                        Value = x.userid.ToString()
                    }).ToList();
            if (Roleids == "")
            {
                //list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
                list.Insert(0, new SelectListItem { Text = "-- Select List --", Value = "-1" });
            }
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetGPNew(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetGPNew(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GPSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "-1" });
            list.Insert(0, new SelectListItem { Text = "-- Select GP --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetAllListofind(int id)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetListOfInd(id);
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.IndustryName,
                        Value = x.ListIndSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select List --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> Getreligion()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetReligion();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.NAME,
                        Value = x.CODE.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Religion --", Value = "0" });
            return list;
        }

        #endregion

        #region
        public List<SelectListItem> GetreligionALL()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetReligion();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.NAME,
                        Value = x.CODE.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- All --", Value = "1,2,3,4,5,6" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> Getcategory()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetCaste();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.NAME,
                        Value = x.CODE.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Category --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> Getmaritalstatus()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetMarital();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.NAME,
                        Value = x.CODE.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Marital Status --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetDistrict()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select District --", Value = "0" });
            return list;
        }

        public List<SelectListItem> GetOnlyDistricts()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "Select District", Value = "-1" });
            return list;
        }
        #endregion
        #region
        //public List<SelectListItem> GetDistrictNew()
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetDistrict();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.DistrictName,
        //				Value = x.DistrictId.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	list.Insert(0, new SelectListItem { Text = "-- Select District --", Value = "-1" });
        //	return list;
        //}
        #endregion

        #region
        public List<SelectListItem> GetRelations()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblRelationTypes select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.RelationName,
                        Value = x.RelationshipID.ToString()
                    }).ToList();

            return list;
        }
        #endregion


        #region
        public List<SelectListItem> GetDistrictsMulti()
        {
            List<SelectListItem> list = null;

            var res = db.SpGetDistrict();

            list = (from x in res

                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();



            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetDistrictAll()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetBankAll()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblBankMsts select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BankName,
                        Value = x.BankSno.ToString()

                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Bank--", Value = "-1" });
            return list;
        }
        #endregion

        #region
        //Get District by Id
        public List<SelectListItem> GetDistrictbyID(int id)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    where x.DistrictId == id
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();

            return list;
        }
        #endregion
        #region
        public string GetBranchAddrs(int brnchid)
        {
            string data = (from x in db.TblBankBranches where x.BankBranchSno == brnchid select x.BankAddress).FirstOrDefault();
            return data;
        }
        #endregion
        #region
        public List<SelectListItem> Getsubdivision(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetSubDivision(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "0" });
            return list;
        }
        #endregion
        #region
        //public List<SelectListItem> GetsubdivisionNew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetSubDivisionNew(distid).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.SubDivisionName,
        //				Value = x.SubDivisionSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "-1" });
        //	return list;
        //}
        #endregion
        #region
        //GetsubdivisionAll
        public List<SelectListItem> GetsubdivisionAll(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetSubDivision(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleDistricts(int Uid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetMultipleDisbyUser(Uid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.UserDist.ToString()
                    }).ToList();

            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleSubDiv(int Uid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetMultipleSubDivbyUser(Uid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivision.ToString()
                    }).ToList();

            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleLoca(int Uid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetMultipleLocabyUser(Uid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.Location.ToString()
                    }).ToList();

            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetMultipleGpWard(int Uid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetMultipleGpWardbyUser(Uid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GpWard.ToString()
                    }).ToList();
            // list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> Gettotalsubdivisions()
        {
            List<SelectListItem> list = null;
            list = (from x in db.TblSubDivisions
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetIssueauth()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetIssAuthNames().ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.IssAuthName,
                        Value = x.IssAuthSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Certifyng Authority --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SPGetContactDet_Result> GetContactDataDet()
        {
            List<SPGetContactDet_Result> List = new List<SPGetContactDet_Result>();
            var res = db.SPGetContactDet(0).ToList();
            // res = (from x in res where x.UserType == 5 select x).ToList();
            return res;
        }
        #endregion
        #region
        public List<SelectListItem> GetLocation(int bankno, int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBankCenter(bankno, distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BankCenter,
                        Value = x.BankCenterSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Location --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> Getblock(int subdivid, int typedata)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBlockDetail(subdivid, typedata).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block/Muncipality/Corporation  --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalblockBySubdiv(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetToltalBlockDetail(subdivid).ToList();
            list = (from x in res

                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "0" });
            return list;
        }
        //public List<SelectListItem> GetTotalblockBySubdivNew(int subdivid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetToltalBlockDetailNew(subdivid).ToList();
        //	list = (from x in res

        //			select new SelectListItem()
        //			{
        //				Text = x.BlockName,
        //				Value = x.BlockSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "-1" });
        //	return list;
        //}
        #endregion
        #region
        public List<SelectListItem> GetTotalblocks()
        {
            List<SelectListItem> list = null;

            list = (from x in db.TblBlockDetails
                        // where x.BlockSno == subdivid
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetAllBankCenters()
        {
            List<SelectListItem> list = null;
            list = (from x in db.TblBankCenters
                    select new SelectListItem()
                    {
                        Text = x.BankCenter,
                        Value = x.BankCenterSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Location --", Value = "0" });
            return list;
        }
        #endregion
        #region
        // Gettotalsubdivisions
        public List<SelectListItem> GetBank(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBankList(distid).ToList();
            list = (from x in res
                        // where x.BlockSno == subdivid
                    select new SelectListItem()
                    {
                        Text = x.BankName,
                        Value = x.BankSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Bank --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetBankCenter(int bnkid, int distid)
        {
            List<SelectListItem> list = null;
            //  var res = db.SpGetBankList(bnkid).ToList();
            list = (from x in db.TblBankCenters
                    where x.BankSno == bnkid && x.DistrictId == distid
                    select new SelectListItem()
                    {
                        Text = x.BankCenter,
                        Value = x.BankCenterSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Center --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetBranch(int locid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBankBranch(locid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BankBranchName,
                        Value = x.BankAddress
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Branch --", Value = "0" });
            return list;
        }
        #endregion


        #region
        public List<SelectListItem> GetPO(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetPo(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PoName,
                        Value = x.PoPinCode
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Po --", Value = "0" });
            return list;
        }
        #endregion
        #region
        //public List<SelectListItem> GetPONew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetPoNew(distid).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.PoName,
        //				Value = x.PoPinCode
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	list.Insert(0, new SelectListItem { Text = "-- Select Po --", Value = "-1" });
        //	return list;
        //}
        #endregion

        #region
        public List<SelectListItem> GetPOSTOFFICE(int distid)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblPostOfficeDatas where x.DistrictId == distid select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PoName,
                        Value = x.PoSno.ToString()

                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "-1" });
            return list;
        }







        #endregion

        #region Role Management
        public object GetAllRoleList()
        {
            List<SSYRoleViewModel> roleList = new List<SSYRoleViewModel>();
            var dbroles = (from x in db.TblUserTypes select x).ToList();
            dbroles.ForEach((s =>
            {
                roleList.Add(new SSYRoleViewModel()
                {
                    Id = s.Id,
                    IsActive = s.IsActive,
                    Order = s.Order,
                    Reg = s.Reg,
                    UserCategoryId = s.UserCategoryId,
                    UserTypeId = s.UserTypeId,
                    UserTypeName = s.UserTypeName
                });
            }));
            return roleList.OrderBy(s => s.UserTypeName).ToList();
        }
        public object GetRole(int rId)
        {
            return db.TblUserTypes.Where(s => s.UserTypeId == rId).SingleOrDefault();
        }
        public object GetAllUserCategory()
        {
            return db.TblUserCategories.Where(s => s.Isactive == true).Select(s => new { Categoryname = s.UserType, Id = s.UserCategoryId }).ToList();
        }

        public object CreateNewUserType(SSYRoleViewModel model)
        {
           db.SP_CreateRole(model.UserTypeName, model.Reg, model.Order, model.IsActive, model.UserCategoryId);
            return true;
        }
        public object UpdateUserType(SSYRoleViewModel model)
        {
            var dbmodel = db.TblUserTypes.Where(s => s.UserTypeId == model.UserTypeId).SingleOrDefault();
            dbmodel.UserTypeName = model.UserTypeName;
            dbmodel.Reg = model.Reg;
            dbmodel.Order = model.Order;
            dbmodel.IsActive = model.IsActive;
            dbmodel.ModifiedBy = 1;
            dbmodel.ModifiedDate = DateTime.Now;
            dbmodel.UserCategoryId = model.UserCategoryId;
            db.SaveChanges();

            return true;
        }
        #endregion

        #region Site management
        #endregion

        #region Menu Management

        public List<SSYMenuViewModel> GetAllMenuList()
        {
            List<SSYMenuViewModel> menuList = new List<SSYMenuViewModel>();
            var dbmenus = (from x in db.TblMenus where x.SubMenuId == 0 select x).ToList();
            dbmenus.ForEach((s =>
            {
                menuList.Add(new SSYMenuViewModel()
                {
                    Class = s.Class,
                    Id = s.ID,
                    IsActive = true,
                    MenuId = s.MenuId,
                    MenuName = s.MenuName,
                    MenuURL = s.MenuUrl,
                    Order = s.Order,
                    SubMenuId = s.SubMenuId
                });
            }));
            return menuList.OrderBy(s => s.MenuName).ToList();
        }

        public object GetUserTypes()
        {
            return db.TblUserTypes.Where(s => s.IsActive == true).Select(v => new { UserTypeName = v.UserTypeName, Id = v.UserTypeId }).ToList();
        }

        public object CreateNewSubMenu(SSYMenuViewModel model)
        {
            db.SP_CreateMenu(model.SubMenuId, model.MenuName, model.MenuName, model.MenuURL, model.Order, model.RoleIds);
            return true;
        }

        public object GetMenu(int mId)
        {
            var menu = db.TblMenus.Where(s => s.MenuId == mId).FirstOrDefault();
            return new SSYMenuViewModel()
            {
                Class = menu.Class,
                Id = menu.ID,
                IsActive = true,
                MenuId = menu.MenuId,
                MenuName = menu.MenuName,
                MenuURL = menu.MenuUrl,
                Order = menu.Order,
                RoleIds = string.Join(",", db.TblRoles.Where(s => s.MenuId == mId).Select(s => s.RoleId)),
                SubMenuId = menu.SubMenuId

            };
        }

        public object UpdateExistingMenu(SSYMenuViewModel model)
        {
            var menu = db.TblMenus.Where(s => s.ID == model.Id).FirstOrDefault();
            menu.MenuName = model.MenuName;
            menu.MenuUrl = model.MenuURL;
            menu.Class = model.Class;
            menu.ModifiedBy = 1;
            menu.MofiedDate = DateTime.Now;
            List<int?> roleids = model.RoleIds.Split(new char[] { ',' }).Select(s => (Nullable<int>)Convert.ToInt32(s)).ToList();
            List<TblRole> roles = db.TblRoles.Where(s => s.MenuId == menu.MenuId).ToList();
            foreach (var role in roles)
            {
                if (!roleids.Contains(role.Id))
                {
                    db.TblRoles.Remove(role);
                }
            }
            var alreadyexizstsids = roles.Select(s => (Nullable<int>)s.Id).ToList();
            var newroles = roleids.Where(x => !alreadyexizstsids.Contains(x)).ToList();

            foreach (var newrole in newroles)
            {
                db.TblRoles.Add(new TblRole()
                {
                    AccessLevel = "F",
                    CreatedBy = 1,
                    Createddate = DateTime.Now,
                    MenuId = menu.MenuId,
                    RoleId = newrole
                });
            }

            db.SaveChanges();
            return "Updated Successfully";
        }

        public List<SSYMenuViewModel> GetAllSubMenuList(int menuId)
        {
            List<SSYMenuViewModel> menuList = new List<SSYMenuViewModel>();
            var dbmenus = (from x in db.TblMenus where x.SubMenuId == menuId select x).ToList();
            dbmenus.ForEach((s =>
            {
                menuList.Add(new SSYMenuViewModel()
                {
                    Class = s.Class,
                    Id = s.ID,
                    IsActive = true,
                    MenuId = s.MenuId,
                    MenuName = s.MenuName,
                    MenuURL = s.MenuUrl,
                    Order = s.Order,
                    SubMenuId = s.SubMenuId
                });
            }));
            return menuList.OrderBy(s => s.Order).ToList();
        }

        public object CreateNewMenu(SSYMenuViewModel model)
        {
            db.SP_CreateMenu(model.SubMenuId, model.MenuName, model.MenuURL, model.Class, model.Order, model.RoleIds);
            return true;
        }


        #endregion

        #region
        public List<SelectListItem> GetPS(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetPsDts(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PsName,
                        Value = x.PsSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Ps --", Value = "0" });
            return list;
        }
        #endregion
        #region
        //public List<SelectListItem> GetPSNew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetPsDtsNew(distid).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.PsName,
        //				Value = x.PsSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	list.Insert(0, new SelectListItem { Text = "-- Select Ps --", Value = "-1" });
        //	return list;
        //}
        #endregion

        #region
        public List<SelectListItem> GetPSAll(int distid)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblPsMsts where x.DistrictId == distid select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PsName,
                        Value = x.PsSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "-1" });
            return list;
        }
        #endregion


        #region
        public List<SelectListItem> GetGP(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetGP(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GPSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select GP --", Value = "0" });
            return list;
        }
        #endregion


        #region
        public List<SelectListItem> GetGPAll(int subdivid)
        {
            List<SelectListItem> list = null;
            if (subdivid == 29)
            {
                var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

                list = (from x in res1
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }
            else
            {
                var res = db.SpGetGP(subdivid).ToList();
                list = (from x in res
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "-1" });
            }

            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetAgentGP(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetGP(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GPSno.ToString()
                    }).ToList();

            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetAgentGPMore(int SubID, int ID)
        {
            List<SelectListItem> list = null;
            List<SelectListItem> list2 = null;
            var res = db.SpGetGP(SubID).ToList();

            var res2 = (from x in db.TblGPMsts where x.SubDivisionId == 0 select x).ToList();

            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GPSno.ToString()
                    }).ToList();

            list2 = (from x in res2
                     select new SelectListItem()
                     {
                         Text = x.GPName,
                         Value = x.GPSno.ToString()
                     }).ToList();

            list.AddRange(list2);

            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalblock(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetToltalBlockDetail(subdivid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public string PasswordCheck(int uid, string oldPassword)
        {
            var res = (from x in db.TblNewRegs where x.Userid == uid select x).FirstOrDefault();
            if (res == null)
                return "Invalid User";
            if (!Sha1Pbkdf2.ValidatePassword(oldPassword, res.UserPwd, res.SaltKey))
                return "Invalid  password.";
            else
                return "0";
        }
        #endregion
        #region
        public string GetUserTypeName(int Id)
        {
            var res = (from x in db.TblUserTypes where x.UserTypeId == Id select x.UserTypeName).FirstOrDefault();
            return res;
        }
        #endregion

        #region
        public TblNewReg GetDeptUserDetails(int userid)
        {
            var res = (from x in db.TblNewRegs where x.Userid == userid select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<TblBeneficiary> GetApplicationSum()
        {
            var Res = (from x in db.TblBeneficiaries select x).ToList();
            List<TblBeneficiary> retval = new List<TblBeneficiary>();
            foreach (var k in Res)
            {
                TblBeneficiary ret = new TblBeneficiary();
                ret.BenSno = k.BenSno;
                ret.BenFirstName = k.BenFirstName + " " + k.BenMiddleName + " " + k.BenLastName;
                ret.CreatedDate = (Convert.ToDateTime(k.CreatedDate));
                DateTime now = DateTime.Now;
                double dif = (now - k.CreatedDate).TotalDays;
                ret.BenAge = Convert.ToInt16(dif);
                ret.Status = k.Status;
                ret.Remarks = k.Remarks;
                retval.Add(ret);
            }
            return retval;
        }
        public List<TblBeneficiary> GetBeneDistDetails(string bensno, string sSSINumber, string benOccupation)
        {
            var Res = (from x in db.TblBeneficiaries select x).ToList();
            List<TblBeneficiary> retval = new List<TblBeneficiary>();
            foreach (var k in Res)
            {
                TblBeneficiary ret = new TblBeneficiary();
                ret.BenSno = k.BenSno;
                ret.BenFirstName = k.BenFirstName + " " + k.BenMiddleName + " " + k.BenLastName;
                ret.CreatedDate = (Convert.ToDateTime(k.CreatedDate));
                DateTime now = DateTime.Now;
                double dif = (now - k.CreatedDate).TotalDays;
                ret.BenAge = Convert.ToInt16(dif);
                ret.Status = k.Status;
                ret.Remarks = k.Remarks;
                retval.Add(ret);
            }
            return retval;
        }

        public TblDownlaodRequest GetDownLoadRequest(int requestId)
        {
            return db.TblDownlaodRequests.Where(s => s.Id == requestId).FirstOrDefault();
        }
        #endregion
        //#region Pending/Approved/Reject Application
        //public List<SpGetApllicationSummery> GetApplicationSumByLocation(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue)
        //      {
        //          var List = new List<SpGetApllicationSummery>();

        //          var fdate = CommonMethods.dateconvertion(fromdate);
        //          var tdate = CommonMethods.dateconvertion(todate);
        //          var res = db.SpGetApllicationSummery(UserType, UserId, Convert.ToInt32(status), Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), pageSize, skip, SearchValue, null).ToList();

        //          int i = skip + 1;

        //          if (SearchValue != "")
        //          {
        //              i = 1;
        //          }

        //          foreach (var m in res)
        //          {
        //              List.Add(new SpGetApllicationSummery
        //              {

        //                  Sno = Convert.ToString(i),
        //                  BenSno = m.BenSno,
        //                  Name = m.Name,
        //                  Date = m.Date,
        //                  Status = m.Status,
        //                  DiffDate = m.DiffDate ?? 0,
        //                  SSI_Number = m.SSI_Number,
        //                  BenTempRegNo = m.BenTempRegNo,
        //                  UploadDocument = m.UploadDocument,
        //                  Remarks = m.Remarks,
        //                  VerifyDate = m.VerifyDate,
        //                  RejectedDocumnet = m.RejectedDocumnet,
        //                  IsUnique = m.IsUnique,
        //                  CommentsByInspector = m.CommentsByInspector,
        //                  RegNumber = m.RegNumber,
        //                  Regtype = m.RegType,
        //                  ReviveStatus = m.ReviveStatus


        //              });
        //              i++;
        //          }

        //          return List;
        //      }
        //      #endregion

        #region Pending/Approved/Reject Application
        public List<SpGetApllicationSummery> GetApplicationSumByLocation(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue, string Locations, string WorkerType)
        {
            var List = new List<SpGetApllicationSummery>();

            var fdate = CommonMethods.dateconvertion(fromdate);
            var tdate = CommonMethods.dateconvertion(todate);
            var res = db.SpGetApllicationSummery(UserType, UserId, Convert.ToInt32(status), Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), pageSize, skip, SearchValue, null, Locations, WorkerType).ToList();


            int i = 1;

            //if (SearchValue != "")
            //{
            //    i = 1;
            //}

            foreach (var m in res)
            {
                List.Add(new SpGetApllicationSummery
                {

                    Sno = Convert.ToString(i),
                    BenSno = m.BenSno,
                    Name = m.Name,
                    Date = m.Date,
                    Status = m.Status,
                    DiffDate = m.DiffDate ?? 0,
                    SSI_Number = m.SSI_Number,
                    BenTempRegNo = m.BenTempRegNo,
                    UploadDocument = m.UploadDocument,
                    Remarks = m.Remarks,
                    VerifyDate = m.VerifyDate,
                    RejectedDocumnet = m.RejectedDocumnet,
                    IsUnique = m.IsUnique,
                    CommentsByInspector = m.CommentsByInspector,
                    RegNumber = m.RegNumber,
                    Regtype = m.RegType,
                    ReviveStatus = m.ReviveStatus


                });
                i++;
            }
            return List;

        }


        public List<SpGetApllicationSummery> GetApplicationSumByLocationext(int UserType, int UserId, string status, string fromdate, string todate, int skip, int pageSize, string SearchValue, string Locations, string WorkerType, string BenRegType)
        {
            var List = new List<SpGetApllicationSummery>();

            var fdate = CommonMethods.dateconvertion(fromdate);
            var tdate = CommonMethods.dateconvertion(todate);
            var res = db.SpGetApllicationSummeryExt(UserType, UserId, Convert.ToInt32(status), Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), pageSize, skip, SearchValue, null, Locations, WorkerType, BenRegType).ToList();


            int i = 1;

            //if (SearchValue != "")
            //{
            //    i = 1;
            //}

            foreach (var m in res)
            {
                List.Add(new SpGetApllicationSummery
                {

                    Sno = Convert.ToString(i),
                    BenSno = m.BenSno,
                    Name = m.Name,
                    Date = m.Date,
                    Status = m.Status,
                    DiffDate = m.DiffDate ?? 0,
                    SSI_Number = m.SSI_Number,
                    BenTempRegNo = m.BenTempRegNo,
                    UploadDocument = m.UploadDocument,
                    Remarks = m.Remarks,
                    VerifyDate = m.VerifyDate,
                    RejectedDocumnet = m.RejectedDocumnet,
                    IsUnique = m.IsUnique,
                    CommentsByInspector = m.CommentsByInspector,
                    RegNumber = m.RegNumber,
                    Regtype = m.RegType,
                    ReviveStatus = m.ReviveStatus


                });
                i++;
            }
            return List;

        }
        #endregion

        //#region Pending/Approved/Reject Application Count

        //public string GetApplicationSumByLocationCount(int UserType, int UserId, string status, string fromdate, string todate)
        //      {

        //          try
        //          {
        //              var fdate = CommonMethods.dateconvertion(fromdate);
        //              var tdate = CommonMethods.dateconvertion(todate);
        //              Int64 Count = 0;


        //              var res = db.SpGetApllicationSummeryCount(UserType, UserId, Convert.ToInt32(status), Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null).ToList();

        //              foreach (var d in res)
        //              {
        //                  Count = (Count + d) ?? 0;
        //              }
        //              return Count.ToString();
        //          }
        //          catch (Exception ex)
        //          {
        //              return "50000";
        //          }
        //      }
        //      #endregion

        #region Pending/Approved/Reject Application Count

        public string GetApplicationSumByLocationCount(int UserType, int UserId, string status, string fromdate, string todate, string Locations, string WorkerType)
        {

            try
            {
                var fdate = CommonMethods.dateconvertion(fromdate);
                var tdate = CommonMethods.dateconvertion(todate);
                Int64 Count = 0;


                // var res = db.SpGetApllicationSummeryCount(UserType, UserId, Convert.ToInt32(status), Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), null, Locations, WorkerType).ToList();

                //foreach (var d in res)
                //{
                //    Count = (Count + d) ?? 0;
                //}
                return Count.ToString();
            }
            catch (Exception ex)
            {
                return "50000";
            }
        }
        #endregion


        #region
        public List<sp_GetSchemeDetailsSummery_Result> GetSchemeApplicationSumByLocation(int UserType, int UserId, int status, int schemid)
        {
            var res = db.sp_GetSchemeDetailsSummery(UserType, UserId, status, schemid).ToList();
            return res;
        }
        #endregion
        #region
        public TblBeneficiary GetUserDetails(string UserMobileNo)
        {
            var res = (from x in db.TblBeneficiaries where x.BenMobileNo == UserMobileNo select x).FirstOrDefault();
            return res;
        }
        #endregion

        #region
        public TblBeneficiary GetBeniDetailsByBenSno(Int64 BenSno)
        {
            var res = (from x in db.TblBeneficiaries where x.BenSno == BenSno select x).FirstOrDefault();
            return res;
        }

        #endregion
        #region
        public int CheckPayment(Int64 BenSno)
        {
            string Bno = Convert.ToString(BenSno);
            var res = (from x in db.TblTransactionLogs where x.PaidTo == Bno && x.IsActive == true select x).ToList();
            if (res.Count > 0)
                return 1;
            else
                return 0;
        }
        #endregion
        #region
        public TblTransactionLog CheckPaymentStat(Int64 BenSno)
        {
            string Bno = Convert.ToString(BenSno);
            var res = (from x in db.TblTransactionLogs where x.PaidTo == Bno && x.IsActive == true select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public int CheckSSYPayment(Int64 BenSno)
        {
            string Bno = Convert.ToString(BenSno);
            var res = (from x in db.TblTransactions where x.PaidTo == Bno && x.IsActive == true && x.Scheme == "SSY" select x).ToList();
            if (res.Count > 0)
                return 1;
            else
                return 0;
        }
        #endregion
        #region
        public int CheckSchem(Int64 BenSno)
        {
            var res = (from x in db.TblBenSchemes where x.BenId == BenSno select x).ToList();
            if (res.Count > 0)
                return 1;
            else
                return 0;
        }
        #endregion
        #region
        public TblBenScheme CheckSchemStatus(Int64 BenSno)
        {
            var res = (from x in db.TblBenSchemes where x.BenId == BenSno select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public string Save(SignUpUser RegData, int chkvalue, string MultiSubdiv, string MultiDis, string MultiLoca, string password)
        {

            int i = (from x in db.TblNewRegs where x.UserCode == RegData.MobileNumber select x).Count();
            if (i > 0)
            {
                return "User Already  Registered With This Mobile Number..";
            }
            else
            {
                string Landline = RegData.Code + '-' + RegData.Landline;
                string stpass = password;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                if (RegData.typeid == 5)
                {
                    RegData.muncorp = 0;
                }
                if (RegData.typeid == 6)
                {
                    RegData.subdivid = 0;
                }
                if (RegData.typeid == 7 || RegData.typeid == 3 || RegData.typeid == 4)
                {
                    RegData.disid = 0;
                }
                var res1 = db.SpUserRegistration(RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.typeid, str[1], str[0], RegData.CreatedBy, RegData.muncorp, RegData.disid, RegData.subdivid, RegData.Designation, RegData.MobileNumber, chkvalue, Landline).FirstOrDefault();
                if (RegData.typeid == 5)
                {
                    string[] Loca = MultiLoca.Split(',');
                    foreach (string Loc in Loca)
                    {
                        if (Loc != "0")
                        {
                            var inspector = db.SpUserLocationSave(Convert.ToInt32(res1), Convert.ToInt32(Loc), 1);
                        }
                    }
                }
                if (RegData.typeid == 6)
                {
                    string[] Subdiv = MultiSubdiv.Split(',');
                    foreach (string div in Subdiv)
                    {
                        if (div != "0")
                        {
                            var inspector = db.SpUserSubDivSave(Convert.ToInt32(res1), Convert.ToInt32(div), 1);
                        }
                    }
                }
                if (RegData.typeid == 7 || RegData.typeid == 3 || RegData.typeid == 4)
                {
                    string[] District = MultiDis.Split(',');
                    foreach (string Dis in District)
                    {
                        if (Dis != "0")
                        {
                            var inspector = db.SpUserDisSave(Convert.ToInt32(res1), Convert.ToInt32(Dis), 1);
                        }
                    }
                }
                return "User Registered Successfully..";
            }
        }

        public string UpdateDepartmentUserPassword(ResetPasswordViewModel model)
        {
            db.SP_UpdateUserPassword(model.UserId, model.Userkey, model.UserPwd);
            return "Updated";
        }
        #endregion
        #region
        public string UpdateUser(SignUpUser RegData, string DeptUserid, string MultiSubdiv, string MultiDis, string MultiLoca)
        {
            try
            {
                string Lanline = RegData.Code + '-' + RegData.Landline;
                if (RegData.typeid == 5)
                {
                    RegData.muncorp = 0;
                }
                if (RegData.typeid == 6)
                {
                    RegData.subdivid = 0;
                }
                if (RegData.typeid == 7 || RegData.typeid == 3 || RegData.typeid == 4)
                {
                    RegData.disid = 0;
                }
                var res = db.SpUpdateDeptUserDetails(Convert.ToInt32(DeptUserid), RegData.FirstName, RegData.LastName, RegData.MobileNumber, RegData.Email, RegData.typeid, RegData.muncorp, RegData.disid, RegData.subdivid, RegData.UpdatedBy, RegData.Designation, "", Lanline);
                if (RegData.typeid == 5)
                {
                    string[] Loca = MultiLoca.Split(',');
                    foreach (string Loc in Loca)
                    {
                        if (Loc != "0")
                        {
                            var inspector = db.SpUserLocationSave(Convert.ToInt32(DeptUserid), Convert.ToInt32(Loc), 1);
                        }
                    }
                }
                if (RegData.typeid == 6)
                {
                    string[] Subdiv = MultiSubdiv.Split(',');
                    foreach (string div in Subdiv)
                    {
                        if (div != "0")
                        {
                            var inspector = db.SpUserSubDivSave(Convert.ToInt32(DeptUserid), Convert.ToInt32(div), 1);
                        }
                    }
                }
                if (RegData.typeid == 7 || RegData.typeid == 3 || RegData.typeid == 4)
                {
                    string[] District = MultiDis.Split(',');
                    foreach (string Dis in District)
                    {
                        if (Dis != "0")
                        {
                            var inspector = db.SpUserDisSave(Convert.ToInt32(DeptUserid), Convert.ToInt32(Dis), 1);
                        }
                    }
                }
                return "User Details Updated Successfully..";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string DeptPassWordChange(SignUpUser RegData, string DeptUserid)
        {
            try
            {
                string stpass = RegData.NewPassWord;
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                var res = db.SpDeptPassWordChange(str[1], str[0], Convert.ToInt32(DeptUserid), "", 1);
                return "Password Changed Successfully..";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        private string RedirectToAction(string p1, string p2)
        {
            throw new NotImplementedException();
        }
        #endregion
        #region
        public List<SelectListItem> GetType(string Type)
        {
            List<SelectListItem> list = null;


            var res = db.SpGetUserTypes(Type).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.UserTypeName.ToString(),
                        Value = x.UserTypeId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select User Type --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTypeNotiSubmit()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetUserTypes("0").ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.UserTypeName.ToString(),
                        Value = x.UserTypeId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            return list;
        }
        #endregion
        #region
        public string CreateRole(string Name, int CreatedBy)
        {
            try
            {
                var res = db.SpRoleCreation(Name, CreatedBy);
                return "Role Created Successfully..";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public TblNewReg GetDeptUserDet(string Userid)
        {
            int uid = Convert.ToInt32(Userid);
            var res = (from x in db.TblNewRegs where x.Userid == uid select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<SelectListItem> GetJsonUsersNew(string Roleids, int Districtid, string Subdivid, string Locid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetUserListNew(Roleids, Districtid, Subdivid, Locid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.usercode,
                        Value = x.userid.ToString()
                    }).ToList();
            if (Roleids == "")
            {
                //list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
                list.Insert(0, new SelectListItem { Text = "-- Select List --", Value = "-1" });
            }
            return list;
        }
        #endregion
        #region
        public TblNewReg GetDeptUserByUniqId(string Userid)
        {
            var res = (from x in db.TblNewRegs where x.Mobileno == Userid select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public TblNewReg GetDeptUserbyId(string Userid)
        {
            var res = (from x in db.TblNewRegs where (x.Userid).ToString() == Userid select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<SelectListItem> GetsubdivbyId(string subdivid)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblSubDivisions where (x.SubDivisionSno).ToString() == subdivid select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName.ToString(),
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetBlockById(int BlockId)
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblBlockDetails where x.BlockSno == BlockId select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName.ToString(),
                        Value = x.BlockSno.ToString()
                    }).ToList();
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetDistrictwiseApp()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            //  list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select District --", Value = "-1" });
            return list;
        }
        #endregion

        #region

        public int GetLocType(int UserId)
        {
            var res = (from x in db.UserLocationMaps where x.UserId == UserId && x.IsActive == true select x.Location).FirstOrDefault();

            var getlocatype = (from x in db.TblBlockDetails where x.BlockSno == res select x.TypeOfData).FirstOrDefault();


            return Convert.ToInt16(getlocatype);



        }

        #endregion

        #region
        public string SaveNotifications(int Usertype, string FileName, string NotyMessage, int CreatedBy, string Startdate, string Enddate, int usertypeid, int status, int active, int Editid)
        {
            var fdate = CommonMethods.dateconvertion(Startdate);
            var tdate = CommonMethods.dateconvertion(Enddate);
            try
            {
                var res = db.SpSaveNoty(Usertype, NotyMessage, FileName, CreatedBy, Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), usertypeid, status, active, Editid);
                if (status == 1)
                {
                    return "Notification Updated Successfully";
                }
                else
                {
                    return "Notification Inserted Successfully";
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public Sp_Deptuserdetails_Result GetDeptdet(int userid)
        {
            var res = db.Sp_Deptuserdetails(userid).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<SpGetNotificationList_Result> getnotylist(string usertypeid)
        {
            int id = Convert.ToInt32(usertypeid);
            var res = db.SpGetNotificationList(id).ToList();
            res = (from x in res where x.Status == 1 && x.Isactive == true select x).ToList();
            return res;

        }
        #endregion

        #region
        public List<SpRoleWiseNotificationList_Result> GetRoleBasedNotyList(string usertypeid, string deptUserId)
        {
            int id = Convert.ToInt32(usertypeid);
            int userId = Convert.ToInt32(deptUserId);

            var res = db.SpRoleWiseNotificationList(id, userId).ToList();
            res = (from x in res where x.Status == 1 && x.Isactive == true select x).ToList();
            return res;

        }
        #endregion

        #region
        public List<SpDistrictWiseSummary_Result> GetDistrictSum()
        {
            var res = db.SpDistrictWiseSummary().ToList();
            return res;
        }
        #endregion
        #region
        //getnotylistPortal
        public List<SpGetNotificationList_Result> getnotylistPortal(string usertypeid)
        {
            int id = Convert.ToInt32(usertypeid);
            var res = db.SpGetNotificationList(id).ToList();
            res = (from x in res where x.UserType == 20 && x.Status == 1 && x.Isactive == true select x).ToList();
            return res;

        }
        #endregion
        #region
        public string ReadNotyfications(string DeptUserid, string usertypeid)
        {
            try
            {
                var res = db.SpReadNotifications(Convert.ToInt32(usertypeid), Convert.ToInt32(DeptUserid));
                return "";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public List<ApplictnStatus> GetApplicationStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            int SentBack = 0;
            string occupa = "";
            var res = db.SpNewApplicationStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.Approved);
                ret.Rejected = Convert.ToInt32(k.Rejected);
                ret.Pending = Convert.ToInt32(k.Pending);
                ret.BenOccupation = k.BenOccupation;
                ret.Sentback = Convert.ToInt32(k.SentBack);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }


        #endregion
        #region 
        public List<ApplictnStatus> GetReferStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            int SentBack = 0;
            string occupa = "";
            var res = db.SpDashReferStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        #endregion
        #region
        public List<ApplictnStatus> GetFundStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            int SentBack = 0;
            string occupa = "";
            var res = db.SpDashFundStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        public List<ApplictnStatus> GetSuperAdminFundStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Released = 0;
            int Rejected = 0;
            int totApp = 0;
            int Pending = 0;
            int SentBack = 0;
            var res = db.SpDashFundStatusSuperAdmin(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Released = Convert.ToInt32(k.RELEASED);
                ret.Total = (ret.Approved + ret.Pending + ret.Sentback + ret.Rejected + ret.Released);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Released = (Released + (ret.Released));
                Rejected = (Rejected + (ret.Rejected));
                Pending = (Pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Pending = Pending;
            rec.Sentback = SentBack;
            rec.Rejected = Rejected;
            rec.Approved = Approved;
            rec.Released = Released;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        public List<ApplictnStatus> GetFundReleaseStatusList(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int Released = 0;
            int SentBack = 0;
            int totApp = 0;
            var res = db.SpDashFundReleaseStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.Released = Convert.ToInt32(k.RELEASED);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback + ret.Released);

                // if ((ret.Approved + ret.Rejected + ret.Pending) > ret.Released)
                // {
                //     ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback - ret.Released);

                // }

                //else if ((ret.Approved + ret.Rejected + ret.Pending) < ret.Released)
                // {
                //     ret.Total = (ret.Released -(ret.Approved + ret.Rejected + ret.Pending + ret.Sentback));

                // }
                // else if((ret.Approved + ret.Rejected + ret.Pending) == ret.Released)
                // {
                //     ret.Total = (ret.Released - (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback));

                // }

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                Released = (Released + (ret.Released));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Released = Released;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        #endregion

        #region Claim Status
        public List<ApplictnStatus> GetClaimStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            int SentBack = 0;
            string occupa = "";
            var res = db.SpDashClaimStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                SentBack = (SentBack + (ret.Sentback));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Sentback = SentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        public List<ApplictnStatus> GetDLCClaimStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int approvedByALC = 0;
            int rejectedByALC = 0;
            int pendingAtALC = 0;
            int pendingAtInspector = 0;
            int totApp = 0;
            int sentBackFromInspector = 0;
            int sentBackFromALC = 0;
            int forcedClosedFromInspector = 0;
            string occupa = "";
            var res = db.SpDashClaimStatusDLC(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.BenOccupation = k.BENOCCUPATION;
                ret.ApprovedByALC = Convert.ToInt32(k.APPROVED_BY_ALC);
                ret.RejectedByALC = Convert.ToInt32(k.REJECTED_BY_ALC);
                ret.PendingAtInspector = Convert.ToInt32(k.PENDING_AT_INSPECTOR);
                ret.PendingAtALC = Convert.ToInt32(k.PENDING_AT_ALC);
                ret.SentBackFromInspector = Convert.ToInt32(k.SENTBACK_FROM_INSPECTOR);
                ret.SentBackFromALC = Convert.ToInt32(k.SENTBACK_FROM_ALC);
                ret.ForcedClosedFromInspector = Convert.ToInt32(k.FORCEDCLOSED_FROM_INSPECTOR);
                ret.Total = (ret.ApprovedByALC + ret.RejectedByALC + ret.PendingAtInspector + ret.PendingAtALC + ret.SentBackFromInspector + ret.SentBackFromALC + ret.ForcedClosedFromInspector);

                lst.Add(ret);
                approvedByALC = (approvedByALC + (ret.ApprovedByALC));
                rejectedByALC = (rejectedByALC + (ret.RejectedByALC));
                pendingAtALC = (pendingAtALC + (ret.PendingAtALC));
                pendingAtInspector = (pendingAtInspector + (ret.PendingAtInspector));
                sentBackFromInspector = (sentBackFromInspector + (ret.SentBackFromInspector));
                sentBackFromALC = (sentBackFromALC + (ret.SentBackFromALC));
                forcedClosedFromInspector = (forcedClosedFromInspector + (ret.ForcedClosedFromInspector));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.ApprovedByALC = approvedByALC;
            rec.RejectedByALC = rejectedByALC;
            rec.PendingAtInspector = pendingAtInspector;
            rec.PendingAtALC = pendingAtALC;
            rec.SentBackFromInspector = sentBackFromInspector;
            rec.SentBackFromALC = sentBackFromALC;
            rec.ForcedClosedFromInspector = forcedClosedFromInspector;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        public List<ApplictnStatus> GetSuperAdminClaimStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int approved = 0;
            int rejected = 0;
            int pending = 0;
            int totApp = 0;
            int sentBack = 0;
            var res = db.SpDashClaimStatusSuperAdmin(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.Sentback = Convert.ToInt32(k.SENTBACK);

                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);

                lst.Add(ret);
                approved = (approved + (ret.Approved));
                rejected = (rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                sentBack = (sentBack + (ret.Sentback));

                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Approved = approved;
            rec.Rejected = rejected;
            rec.Pending = pending;
            rec.Sentback = sentBack;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }


        public List<ApplictnStatus> GetSLOClaimStatusList(int usertypeid)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int submitted = 0;
            int approvedByALC = 0;
            int rejectedByALC = 0;
            int totApp = 0;
            int sentBackFromALC = 0;
            var res = db.SpDashClaimStatusSLO(usertypeid).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.BenOccupation = k.BENOCCUPATION;
                ret.Submitted = Convert.ToInt32(k.SUBMITTED);
                ret.ApprovedByALC = Convert.ToInt32(k.APPROVEDBYALC);
                ret.RejectedByALC = Convert.ToInt32(k.REJECTFROMALC);
                ret.SentBackFromALC = Convert.ToInt32(k.SENDBACKFROMALC);

                ret.Total = (ret.Submitted + ret.ApprovedByALC + ret.RejectedByALC + ret.SentBackFromALC);

                lst.Add(ret);
                submitted = (submitted + (ret.Submitted));
                approvedByALC = (approvedByALC + (ret.ApprovedByALC));
                rejectedByALC = (rejectedByALC + (ret.RejectedByALC));
                sentBackFromALC = (sentBackFromALC + (ret.SentBackFromALC));

                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.BenOccupation = "TOTAL";
            rec.Submitted = submitted;
            rec.ApprovedByALC = approvedByALC;
            rec.RejectedByALC = rejectedByALC;
            rec.SentBackFromALC = sentBackFromALC;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        #endregion
        #region Overall Claim Status
        public List<ClaimStatus> GetOverallClaimStatus(int usertypeid, string Mapping)
        {
            List<ClaimStatus> lst = new List<ClaimStatus>();
            int Total = 0;
            var res = db.SpDashOverallClaimStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ClaimStatus ret = new ClaimStatus();
                ret.Count = Convert.ToInt32(k.COUNT);
                ret.StatusName = k.STATUSNAME;
                Total = Total + ret.Count;
                lst.Add(ret);
            }
            ClaimStatus rec = new ClaimStatus();
            rec.StatusName = "TOTAL";
            rec.Count = Total;
            lst.Add(rec);
            return lst;
        }
        public List<ApplictnStatus> GetPaymentStatus(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            var res = db.SpDashPaymentStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.BenOccupation = "TOTAL";
                ret.Approved = Convert.ToInt32(k.APPROVED);
                ret.Rejected = Convert.ToInt32(k.REJECTED);
                ret.Pending = Convert.ToInt32(k.PENDING);
                ret.Sentback = Convert.ToInt32(k.SENTBACK);
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending + ret.Sentback);
                lst.Add(ret);
            }
            return lst;
        }
        #endregion
        #region
        public List<ApplictnStatus> GeSchemetStatusList(int usertypeid, string Mapping)
        {
            List<ApplictnStatus> lst = new List<ApplictnStatus>();
            int i = 1;
            int Approved = 0;
            int Rejected = 0;
            int pending = 0;
            int totApp = 0;
            var res = db.SpSchemeNewApplicationStatus(usertypeid, 0, 0, 0, null, null, Mapping, 0).ToList();
            foreach (var k in res)
            {
                ApplictnStatus ret = new ApplictnStatus();
                ret.Approved = Convert.ToInt32(k.Approved);
                ret.Rejected = Convert.ToInt32(k.Rejected);
                ret.Pending = Convert.ToInt32(k.Pending);
                ret.SchemeName = k.SchemeName;
                ret.Total = (ret.Approved + ret.Rejected + ret.Pending);

                lst.Add(ret);
                Approved = (Approved + (ret.Approved));
                Rejected = (Rejected + (ret.Rejected));
                pending = (pending + (ret.Pending));
                totApp = (totApp + ret.Total);
                i++;
            }
            ApplictnStatus rec = new ApplictnStatus();
            rec.SchemeName = "TOTAL";
            rec.Approved = Approved;
            rec.Pending = pending;
            rec.Rejected = Rejected;
            rec.Total = totApp;
            lst.Add(rec);
            return lst;
        }
        #endregion
        #region
        public string GetMapDetails(int usertypeid, int DeptUserid)
        {
            string Mapdet = "";
            if (usertypeid == 5)
            {
                var res = (from x in db.UserLocationMaps where x.UserId == DeptUserid && x.IsActive == true select x.Location).ToList();
                foreach (var x in res)
                {
                    Mapdet += x + ",";
                }
            }
            if (usertypeid == 6)
            {
                var res = (from x in db.UserSubDivMaps where x.UserId == DeptUserid && x.IsActive == true select x.SubDivision).ToList();
                foreach (var x in res)
                {
                    Mapdet += Mapdet + ",";
                }
            }
            if (usertypeid == 7)
            {
                var res = (from x in db.UserDisMaps where x.UserId == DeptUserid && x.IsActive == true select x.UserDist).ToList();
                foreach (var x in res)
                {
                    Mapdet += Mapdet + ",";
                }
            }
            return Mapdet;
        }
        #endregion
        #region
        public int GetNotyCount(int UserType, int Userid)
        {
            var Res = db.SpUnReadNotyCount(UserType, Userid).ToList();
            int count = Res[0] ?? 0;
            return count;
        }
        #endregion
        #region For Approve & reject & sentback benificiary application

        public string GetStatusChange(int benSno, int status, int userid, string remarks, string SSNINGen, string fileName, string regDate)
        {
            try
            {
                DateTime? FinalRegDate = null;
                if (regDate != "" && regDate != null)
                {
                    string currentDate = regDate;
                    string[] dat = currentDate.Split('-');
                    FinalRegDate = new DateTime(Convert.ToInt32(dat[2]), Convert.ToInt32(dat[1]), Convert.ToInt32(dat[0]));
                }

                var res = db.SPUpdateAppStatus(benSno, status, userid, remarks, SSNINGen, fileName, FinalRegDate).FirstOrDefault();
                if (res.Code == "000")
                {
                    if (status == 1)
                        return "Status Approved Successfully";
                    if (status == 3)
                        return "Application Sent Back To Beneficiary";
                    else
                        return "Status Rejected";
                }
                else
                {
                    return res.Message.ToString();
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        //For Approve & reject
        public string SchemeStatus(int schemebenid, int status)
        {
            try
            {
                var res = db.Sp_UpdateSchemeStatus(schemebenid, status, "");
                if (status == 1)
                    return "Status Approved Successfully";
                else
                    return "Status Rejected";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        //Get Usertype Nmae
        public string GetUsertypeName(int TypeId)
        {
            string Name = (from x in db.TblUserTypes where x.UserTypeId == TypeId select x.UserTypeName).FirstOrDefault();
            return Name;
        }
        #endregion
        #region
        // Get District Name
        public string GetDisTrictName(int Id)
        {
            string Name = (from x in db.TblDistrictMsts where x.DistrictId == Id select x.DistrictName).FirstOrDefault();
            return Name;
        }
        #endregion
        #region
        // Get Location Name
        public string GetLocationName(int Id)
        {
            string Name = (from x in db.TblBlockDetails where x.BlockSno == Id select x.BlockName).FirstOrDefault();
            return Name;
        }
        #endregion
        #region
        // Get SubDiv Name
        public string GetSubDivName(int Id)
        {
            string Name = (from x in db.TblSubDivisions where x.SubDivisionSno == Id select x.SubDivisionName).FirstOrDefault();
            return Name;
        }
        #endregion
        #region
        public string beniPassWordChange(SignUpUser RegData)
        {
            try
            {
                string stpass = RegData.NewPassWord;
                // Helper.GenerateRandomPassword();
                string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
                var res = db.SpBenifPassWordChange(str[1], str[0], RegData.userid, "", 1);
                return "Password Changed Successfully..";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string getlogindetals(string MobileNumber, string Password)
        {

            var res = (from x in db.TblBeneficiaries where x.BenMobileNo == MobileNumber && x.IsActive == true select x).ToList();

            if (res == null || res.Count() == 0)
            {
                return "";
            }
            else
            {
                foreach (var x in res)
                {
                    if (!Sha1Pbkdf2.ValidatePassword(Password, x.BenUserPwd, x.BenUserKey))
                        return "Invalid username or password.";
                    else
                        return x.BenSno.ToString();
                }

                return "";
            }




        }
        #endregion
        #region
        public TblBeneficiary GetDeatilsByMobileNumber(string MobileNumber)
        {
            var res = (from x in db.TblBeneficiaries where x.BenMobileNo == MobileNumber select x).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public string SaveBocwScheme(string FinalSchemeDet, string Createdby, int Benifid)
        {
            try
            {
                Int64 cby = Convert.ToInt64(Createdby);
                var res = db.SaveBocw(FinalSchemeDet, cby, Benifid);
                return "Scheme Data Saved Successfully";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string SaveWBTScheme(string Type, string Vehicle, string Duty, int Benifid, string Createdby)
        {
            try
            {
                Int64 cby = Convert.ToInt64(Createdby);
                var res = db.SaveWBTWSS(Benifid, 3, Type, Vehicle, Duty, null, cby);
                return "Scheme Data Saved Successfully";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public List<sp_GetSchemeDetails_Result> GetBOCWDetails(int bensno, int schemeid)
        {
            try
            {
                var res = db.sp_GetSchemeDetails(bensno, schemeid).ToList();
                return res;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalPS()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblPsMsts select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PsName,
                        Value = x.PsSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Ps --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalPO()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblPostOfficeDatas select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PoName,
                        Value = (x.PoPinCode + "-" + x.PoSno).ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select PO --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalGP()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblGPMsts select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.GPName,
                        Value = x.GPSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select GP --", Value = "0" });
            return list;
        }
        #endregion

        #region
        public List<SelectListItem> GetGPBasedOnDistrict(int DistrictId)
        {
            List<SelectListItem> list = null;

            if (DistrictId == 12)
            {
                var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

                list = (from x in res1
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }
            else
            {
                var res = (from x in db.TblGPMsts where x.DistrictId == DistrictId select x).ToList();

                list = (from x in res
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }



            list.Insert(0, new SelectListItem { Text = "All", Value = "-1" });
            return list;
        }
        #endregion
        #region
        //Get Total Bank List
        public List<SelectListItem> GetTotalBank()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblBankMsts select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BankName,
                        Value = x.BankSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Bank --", Value = "0" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetTotalBranch()
        {
            List<SelectListItem> list = null;
            var res = (from x in db.TblBankBranches select x).ToList();
            list = (from x in res

                    select new SelectListItem()
                    {
                        Text = x.BankBranchName,
                        Value = (x.BankIfscCode + "-" + x.BankBranchSno).ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Branch --", Value = "0" });
            return list;
        }
        #endregion
        #region
        //get status
        public int GetStatusCount(int status)
        {
            int res = (from x in db.TblBeneficiaries where x.Status == status select x).Count();
            return res;
        }
        #endregion
        #region
        //Get Total Submitted Count
        public int GetsubmittedCount()
        {
            int res = (from x in db.TblBeneficiaries select x).Count();
            return res;
        }
        #endregion
        #region
        //Get Site Count
        public Int64 GetSiteCount()
        {
            //Int64 res = (from x in db.TblSitecounts select x.Count).FirstOrDefault();
            Int64 res = 0;
            res = (Int64)db.SP_GetSiteCount().FirstOrDefault();
            return res;
        }
        #endregion
        #region
        //SSIN count For Homepage
        public string SSINCount()
        {
            var res = db.SP_SSINGenerateCount().FirstOrDefault();
            return res.ToString();
        }
        #endregion
        #region
        //Site count
        public string sitecount()
        {
            var res = db.SpGetsitecount();
            return " ";
        }
        #endregion
        #region
        //Get Menu List
        public static List<SpGetMenuList_Result> GetMenuList(int RoleId)


        {
            SSYEntities SSY = new SSYEntities();
            var res = SSY.SpGetMenuList(RoleId).ToList();
            res = (from x in res where x.AccessLevel == "F" select x).ToList();
            return res;
        }
        #endregion
        #region
        public List<SpGetMenuList_Result> GetMenuListReport(int RoleId)
        {
            SSYEntities SSY = new SSYEntities();
            var res = SSY.SpGetMenuList(RoleId).ToList();

            return res;
        }
        #endregion
        #region
        public string AssignRoles(int Id, string AccLev)
        {
            try
            {
                var res = db.SpAssignRoles(0, 0, AccLev, Id);
                return "Roles Updated Successfully...";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string GenratePassword(string BenSno, string password)
        {
            string stpass = password;
            string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
            try
            {
                var res = db.BenForgotPassword(Convert.ToInt32(BenSno), str[0], str[1]);
                return "Password Generated Successfully";
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }
        #endregion
        #region
        public List<SpGettotalNotificationList_Result> GetNotificatioDetails(int id)
        {
            var res1 = db.SpGettotalNotificationList().ToList();
            if (id == 0)
            {
                var res = (from x in res1 where x.Status == 1 select x).ToList();
                return res;
            }
            else
            {
                var res = (from x in res1 where x.Id == id select x).ToList();
                return res;
            }
        }
        #endregion
        #region
        public string GetDeleteNotiDetails(int id, int Status)
        {
            var res = db.SpDeleteNotify(id, Status);
            return " Deleted Succesfully ";
        }
        #endregion
        #region
        public string UpdateBengaliname(string id, string bengaliname)
        {
            try
            {
                var res = db.SpUpdateBengaliName(bengaliname, id);
                return "Name Updated";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string BenSaveActionHistory(string UserId, string BenUserId, string Reason, string Type, string Schemeid)
        {
            try
            {
                var res = db.Sp_SaveActionistory(Convert.ToInt32(UserId), Convert.ToInt32(BenUserId), Reason, Type, Convert.ToInt32(Schemeid));
                return "Success";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public List<Sp_ActionHistory_Result> GetActionHistory(string BenId, string DeptUserType)
        {
            var res = db.Sp_ActionHistory(Convert.ToInt32(BenId), Convert.ToInt32(DeptUserType)).ToList();
            return res;
        }
        #endregion
        #region
        //Get District Id By Distrct Name
        public int GetDistrictId(string Name)
        {
            var res = (from x in db.TblDistrictMsts where x.DistrictName == Name select x).FirstOrDefault();
            if (res == null)
                return 0;
            else
                return res.DistrictId;
        }
        #endregion
        #region
        //Get SubDivision Id By Subdivision Name
        public int GetsubDivisionId(string Name)
        {
            if (Name.Contains("1"))
            {
                Name = Name.Replace("1", "");
            }
            var res = (from x in db.TblSubDivisions where x.SubDivisionName == Name select x).FirstOrDefault();
            if (res == null)
                return 0;
            else
                return res.SubDivisionId;
        }
        #endregion
        #region
        //Get Block Id By Block Name
        public int GetBlockId(string Name)
        {
            if (Name == "Jalpaiguri1")
                Name = "Jalpaiguri";
            if (Name == "Jhargram1")
                Name = "Jhargram";
            var res = (from x in db.TblBlockDetails where x.BlockName == Name select x).FirstOrDefault();
            if (res == null)
                return 0;
            else
                return res.BlockSno;
        }
        #endregion
        #region
        //Get Ps Id By Ps Name
        public int GetPsId(string Name)
        {
            var res = (from x in db.TblPsMsts where x.PsName == Name select x).FirstOrDefault();
            if (res == null)
                return 0;
            else
                return res.PsSno;
        }
        #endregion
        #region
        // Get Po Id By Po Name
        public int GetPoId(string Name)
        {
            var res = (from x in db.TblPostOfficeDatas where x.PoName == Name select x).FirstOrDefault();
            if (res == null)
                return 0;
            else
                return res.PoSno;
        }
        #endregion
        #region De_Duplication
        public List<GetGroupData> GetGroupWiseSummary(string userId, string userType, string regNo, string GroupId, int skip, int pageSize)
        {
            var getGroup = new List<GetGroupData>();
            try
            {
                using (var db = new SSYEntities())
                {
                    int i = skip + 1;

                    var data = db.SpGetGroupWiseSummary(Convert.ToInt32(userType), Convert.ToInt32(userId), regNo, GroupId, skip, pageSize).ToList();
                    foreach (var nm in data)
                    {
                        getGroup.Add(new GetGroupData { GNo = Convert.ToString(i), GroupID = Convert.ToString(nm.GRP_NO), NoofRecords = Convert.ToString(nm.NoofRecords) });
                        i++;
                    }
                    return getGroup;
                }
            }
            catch (Exception ex)
            {
                return getGroup;
            }
        }
        public List<GroupDetails> GetGroupUniqueDetails(string grpNo, int UserType, int UserId)
        {
            try
            {
                var result = new List<GroupDetails>();
                using (var db = new SSYEntities())
                {
                    int i = 1;
                    var data = db.SpGetGroupUniqueDetails(grpNo, UserId, UserType).ToList();
                    foreach (var nm in data)
                    {
                        var dt = new GroupDetails();
                        dt.SNo = Convert.ToString(i);
                        dt.Address = nm.ADDRESS1 + ", " + nm.CITY1 + ", " + nm.STATE1 + ", " + nm.PINCODE1;
                        dt.NAME = nm.NAME;
                        dt.MOTHER_NAME = nm.MOTHER_NAME;
                        dt.FATHER_NAME = nm.FATHER_NAME;
                        dt.SPOUSE_NAME = nm.SPOUSE_NAME;
                        dt.Source = nm.Source;
                        dt.RINFO_DISTRICT_NAME = nm.RINFO_DISTRICT_NAME;
                        dt.RINFO_LOCATION_NAME = nm.RINFO_LOCATION_NAME;
                        dt.RINFO_RLO_NAME = nm.RINFO_RLO_NAME;
                        dt.PSX_ID = nm.PSX_ID;
                        dt.RegNo = nm.RegNo;
                        dt.UNIQUE_ID = nm.UNIQUE_ID;
                        dt.Check = nm.Check;
                        if (nm.DOB == null || nm.DOB == "")
                        {
                            dt.DOB = "";
                        }
                        else
                        {
                            dt.DOB = nm.DOB;
                        }
                        result.Add(dt);
                        i++;
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<GroupDetails> GetGroupDuplicateDetails(string grpNo, int UserType, int UserId)
        {
            try
            {
                var result = new List<GroupDetails>();
                using (var db = new SSYEntities())
                {
                    int i = 1;
                    var data = db.SpGetGroupDuplicateDetails(grpNo, UserId, UserType).ToList();
                    foreach (var nm in data)
                    {
                        var dt = new GroupDetails();
                        dt.SNo = Convert.ToString(i);
                        dt.Address = nm.ADDRESS1 + ", " + nm.CITY1 + ", " + nm.STATE1 + ", " + nm.PINCODE1;
                        dt.NAME = nm.NAME;
                        dt.MOTHER_NAME = nm.MOTHER_NAME;
                        dt.FATHER_NAME = nm.FATHER_NAME;
                        dt.SPOUSE_NAME = nm.SPOUSE_NAME;
                        dt.Source = nm.Source;
                        dt.RINFO_DISTRICT_NAME = nm.RINFO_DISTRICT_NAME;
                        dt.RINFO_LOCATION_NAME = nm.RINFO_LOCATION_NAME;
                        dt.RINFO_RLO_NAME = nm.RINFO_RLO_NAME;
                        dt.PSX_ID = nm.PSX_ID;
                        dt.RegNo = nm.RegNo;
                        dt.UNIQUE_ID = nm.UNIQUE_ID;
                        dt.SUB_GROUP_ID = nm.SUB_GROUP_ID;
                        dt.SUB_GROUP_STATUS = nm.SUB_GROUP_STATUS;
                        dt.UNIQUE_ID = nm.UNIQUE_ID;
                        dt.Check = nm.Check;
                        dt.ActionCheck = nm.ActionCheck;
                        dt.DlcActions = nm.DlcActions;
                        dt.RloActions = nm.RloActions;
                        dt.SaActions = nm.SaActions;
                        dt.InspectorActions = nm.InspectorActions;
                        if (nm.DOB == null || nm.DOB == "")
                        {
                            dt.DOB = "";
                        }
                        else
                        {
                            dt.DOB = nm.DOB;
                        }
                        result.Add(dt);
                        i++;
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public SpGetSSYStats_Result GetSSYStats(string userId, string userType)
        {
            using (var db = new SSYEntities())
            {
                var data = db.SpGetSSYStats(Convert.ToInt32(userType), Convert.ToInt32(userId)).FirstOrDefault();

                //data.NoofGroups = data.NoofGroups;
                //data.NoofRecords = data.NoofRecords;
                //data.GroupedPending = data.GroupedPending;
                //data.GroupedReviewed = (data.NoofGroups - data.GroupedPending);
                //data.RecordsPending = data.RecordsPending;
                //data.RecordsReviewed = data.RecordsReviewed;


                return data;
            }
        }
        public List<SpGetGroupWiseActions_Result> GetPreviousActions(string grpNo)
        {
            using (var db = new SSYEntities())
            {
                int grp = Convert.ToInt32(grpNo);
                var data = db.SpGetGroupWiseActions(grp).ToList();
                return data;
            }
        }
        public string SaveActionHistory(string grpNo, string action, string noofRec, string selRec, string creBy)
        {
            using (var db = new SSYEntities())
            {
                db.SpInsertAction(Convert.ToInt32(grpNo), action, Convert.ToInt32(noofRec), Convert.ToInt32(selRec), Convert.ToInt32(creBy)).ToString();
                return "Action Saved Successfully.";
            }
        }
        public string UpdateRecordStatus(string grpNo, string unqList)
        {
            try
            {
                var list = (unqList == "") ? null : unqList.Split(',').ToList();
                using (var db = new SSYEntities())
                {
                    var grpIds = db.SpGetGroupIDSList(Convert.ToInt32(grpNo)).ToList();
                    foreach (var mn in list)
                    {
                        if (grpIds.Contains(mn))
                            db.SpUpdateDeDupRecStatus(Convert.ToInt32(mn), "U", "U").ToString();
                    }
                }
                return "Details updated successfully.";
            }
            catch (Exception ex)
            {
                return (ex.InnerException == null) ? ex.Message : ex.InnerException.Message;
            }
        }
        #endregion
        #region DeDup SubGroup Update & Reset
        public string SubGroupDataUpdate(string PSXIDlist = "", string subGroupNo = "")
        {
            try
            {
                PSXIDlist = PSXIDlist.TrimEnd(',');
                var list = (PSXIDlist == "") ? null : PSXIDlist.Split(',').ToList();
                using (var db = new SSYEntities())
                {
                    foreach (var mn in list)
                    {
                        var Res = db.SPUpdateSubGroupData(subGroupNo, 1, mn).FirstOrDefault();
                    }
                }
                return "Details updated successfully.";
            }
            catch (Exception ex)
            {
                return (ex.InnerException == null) ? ex.Message : ex.InnerException.Message;
            }
        }
        public List<string> GetSubGroupDetails(string grpNo)
        {
            try
            {
                using (var db = new SSYEntities())
                {
                    var Res = db.GetSubGroups(grpNo).ToList();
                    return Res;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public List<SPGetSubGroupDetails_Result> GetSubGroupDetailbySubGroupID(string grpNo, string SubGID = "")
        {
            try
            {
                var result = new List<SPGetSubGroupDetails_Result>();
                using (var db = new SSYEntities())
                {
                    int i = 1;
                    var data = db.SPGetSubGroupDetails(grpNo, SubGID).ToList();
                    foreach (var nm in data)
                    {
                        var dt = new GetSubGroupDetails();
                        dt.SNo = Convert.ToString(i);
                        dt.Address = nm.ADDRESS1 + ", " + nm.CITY1 + ", " + nm.STATE1 + ", " + nm.PINCODE1;
                        dt.NAME = nm.NAME;
                        dt.MOTHER_NAME = nm.MOTHER_NAME;
                        dt.FATHER_NAME = nm.FATHER_NAME;
                        dt.SPOUSE_NAME = nm.SPOUSE_NAME;
                        dt.Source = nm.Source;
                        dt.RINFO_DISTRICT_NAME = nm.RINFO_DISTRICT_NAME;
                        dt.RINFO_LOCATION_NAME = nm.RINFO_LOCATION_NAME;
                        dt.RINFO_RLO_NAME = nm.RINFO_RLO_NAME;
                        dt.PSX_ID = nm.PSX_ID;
                        dt.RegNo = nm.RegNo;
                        dt.UNIQUE_ID = nm.UNIQUE_ID;
                        dt.SUB_GROUP_ID = nm.SUB_GROUP_ID;
                        dt.SUB_GROUP_STATUS = nm.SUB_GROUP_STATUS;
                        dt.UNIQUE_ID = nm.UNIQUE_ID;
                        if (nm.DOB == null || nm.DOB == "")
                        {
                            dt.DOB = "";
                        }
                        else
                        {
                            dt.DOB = nm.DOB;
                        }
                        result.Add(dt);
                        i++;
                    }
                    return result;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        public SPSubGroupDelete_Result DeleteSubGroup(string grpNo = "")
        {
            var Res = new SPSubGroupDelete_Result();
            try
            {
                using (var db = new SSYEntities())
                {
                    Res = db.SPSubGroupDelete(grpNo).FirstOrDefault();
                    return Res;
                }
            }
            catch (Exception ex)
            {
                Res.Code = "999";
                Res.Message = (ex.InnerException == null) ? ex.Message : ex.InnerException.Message;
                return Res;
            }
        }
        #endregion

        public string SaveDeeDoopActionhis(string Message, string Id, string DeptUserId, string DeptUserType)
        {
            try
            {
                var res = db.SpSingleActionHistory(Convert.ToInt32(Id), Message, Convert.ToInt32(DeptUserId), Convert.ToInt32(DeptUserType));
                return "0";
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }

        #region
        public string Savebank(string BnkName)
        {
            try
            {
                var res = db.Sp_SaveBankName(BnkName).FirstOrDefault();
                if (res.Code == "000")
                    return res.Message;
                else
                    return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string Savebankcenter(int Dist, int Bank, string bankcenter)
        {
            try
            {
                var res = db.Sp_SaveBankCenter(Dist, Bank, bankcenter).FirstOrDefault();
                if (res.Code == "000")
                    return res.Message;
                else
                    return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public string Savebankbranch(int bnkbrnchcenter, string brnchname, string Ifsccode, string brnchAddress)
        {
            try
            {
                var res = db.Sp_SaveBankBranch(bnkbrnchcenter, brnchname, Ifsccode, brnchAddress).FirstOrDefault();
                if (res.Code == "000")
                    return res.Message;
                else
                    return res.Message;
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }
        }
        #endregion
        #region
        public List<Sp_DeeDoopActionHistory_Result> GetActionHistoryDetails(string Id, string Roleid)
        {
            var res = db.Sp_DeeDoopActionHistory(Convert.ToInt32(Id), 0, Convert.ToInt32(Roleid)).ToList();
            return res;
        }
        #endregion
        #region
        public int Getreligion(string Name)
        {
            var res = (from x in db.TblReligionMsts where x.Name == Name select x.Code).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public int GetSocialCat(string Name)
        {
            var res = (from x in db.TblCasteMsts where x.Name == Name select x.Code).FirstOrDefault();
            return res;
        }
        #endregion
        //#region
        //public List<SpCheckDedupe_Result> GetDeDupdata(Int64 BenSno)
        //{
        //    var res = (from x in db.TblBeneficiaries where x.BenSno == BenSno select x).FirstOrDefault();
        //    var Add = (from x in db.TblBenAddresses where x.BenSno == BenSno && (x.BenAddressType) == "Present" select x).FirstOrDefault();
        //    var name = (res.BenFirstName + ' ' + res.BenMiddleName + ' ' + res.BenLastName);
        //    var Fname = (res.BenFatherFirstName);
        //    var DOB = res.BenDob;
        //    var BenDistrict = (Add.BenDistrict).ToString();
        //    var BenSubDivision = (Add.BenSubDivision).ToString();
        //    var BenBmc = (Add.BenBmc).ToString();
        //    var BenMobileNo = res.BenMobileNo;
        //    var AadharCard = res.AadharCard;
        //    var EpicCard = res.EpicCard;
        //    var BankAccNo = res.BankAccNo;
        //    var BenTempRegNo = res.BenTempRegNo;
        //    var HusbandName = res.HusbandName;
        //    var res1 = db.SpCheckDedupe(name, Fname, DOB, Add.BenDistrict, Add.BenSubDivision, Add.BenBmc, res.BenMobileNo, res.AadharCard, res.EpicCard, res.BankAccNo, res.BenTempRegNo, res.HusbandName).ToList();
        //    return res1;

        //}
        //#endregion
        #region
        public List<SpGetMenuListByRole_Result> GetUserRights(string Url, string RoleID)
        {
            List<SpGetMenuListByRole_Result> Data = new List<SpGetMenuListByRole_Result>();
            using (var db = new SSYEntities())
            {
                Data = db.SpGetMenuListByRole(Url, Convert.ToInt32(RoleID)).ToList();
            }
            return Data;
        }
        #endregion
        #region
        public List<SpGetSingleActionHistory_Result> GetSingleActionHistory(string grpNo)
        {
            var res = db.SpGetSingleActionHistory(grpNo).ToList();
            return res;
        }
        #endregion
        #region
        public string DeptGenratePassword(string Userid, string password)
        {
            string stpass = password;
            string[] str = Sha1Pbkdf2.CreatePasswordHash(stpass).Split(':');
            try
            {
                var res = db.DeptForgotPassword(Convert.ToInt32(Userid), str[1], str[0]);
                return "Password Generated Successfully";
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }
        #endregion
        #region
        //Details through Usercode
        public SpGetUserInfByUserCode_Result GetDeptUserByUsercode(string Userid)
        {
            var res = db.SpGetUserInfByUserCode(Userid).FirstOrDefault();
            return res;
        }
        #endregion
        #region
        public List<SpGetRejectedhistory_Result> GetRejectedDetails(Int32 Bensno)
        {
            var res = db.SpGetRejectedhistory(Bensno).ToList();
            return res;
        }
        #endregion
        #region
        public List<SpGetDeedoopDet_Result> GetDedoopDetails(Int32 Bensno)
        {
            var res = db.SpGetDeedoopDet(Bensno).ToList();
            return res;
        }
        #endregion
        #region
        public TblBeneficiary GetBeniDetails(Int64 BenSno)
        {
            var res = (from x in db.TblBeneficiaries where x.BenSno == BenSno select x).FirstOrDefault();
            return res;
        }
        #endregion

        #region
        public spGetSLOCode_Result GetSLOForBen(Int64 BenSno)
        {
            var res = db.spGetSLOCode(BenSno).FirstOrDefault();
            return res;
        }
        #endregion

        #region
        public List<SpGetSLOList_Result> GetSLODetails(string BenSno)
        {
            var res = db.SpGetSLOList(Convert.ToInt64(BenSno)).ToList();
            return res;
        }
        #endregion

        #region
        public int GetClaimCount(Int64 BenId)
        {
            var res = (from x in db.TblClaims where x.StatusId == 2 && x.BenSno == BenId select x).Count();

            return res;
        }
        #endregion



        #region
        public List<SelectListItem> GetDistrictwiseAll()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select District --", Value = "-1" });
            return list;
        }
        #endregion
        #region
        public List<SelectListItem> GetSubdivisionwiseAll(int id)
        {
            List<SelectListItem> list = null;
            if (id == -1)
            {
                list = (from x in db.TblSubDivisions
                        where x.SubDivisionId == 0
                        select new SelectListItem()
                        {
                            Text = x.SubDivisionName,
                            Value = x.SubDivisionSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "-1" });
                return list;
            }
            else
            {
                list = (from x in db.TblSubDivisions
                            // where x.DistrictId == id
                        select new SelectListItem()
                        {
                            Text = x.SubDivisionName,
                            Value = x.SubDivisionSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
                return list;
            }
        }
        #endregion
        #region
        public List<SelectListItem> GetLocationwiseAll(int id)
        {
            List<SelectListItem> list = null;

            if (id == -1)
            {
                list = (from x in db.TblBlockDetails
                        where x.BlockSno == 0
                        select new SelectListItem()
                        {
                            Text = x.BlockName,
                            Value = x.BlockSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select Location --", Value = "-1" });
                return list;
            }
            else
            {
                list = (from x in db.TblBlockDetails
                        select new SelectListItem()
                        {
                            Text = x.BlockName,
                            Value = x.BlockSno.ToString()
                        }).ToList();
                return list;
            }
        }
        #endregion


        #region
        public SpGetDetailsbyRegnum_Result GetSsinDetails(string val)
        {
            var result = db.SpGetDetailsbyRegnum(val).FirstOrDefault();
            return result;
        }
        #endregion

        #region Get Login Counts
        public List<Get_LoginCounts_Result> GetLoginCounts()
        {
            var res = db.Get_LoginCounts().ToList();

            return res;
        }
        #endregion


        //public List<Report_BeneficiaryApplicationDistrictWiseStaus_Result> DivistionWiseStatus(string districtId, string fromDate, string toDate)
        //{
        //    var List = new List<Report_BeneficiaryApplicationDistrictWiseStaus_Result>();

        //   // var fdate = CommonMethods.dateconvertion(fromDate);
        //  //  var tdate = CommonMethods.dateconvertion(toDate);
        //    var res = db.Report_BeneficiaryApplicationDistrictWiseStaus(0).ToList();

        //    int LegacyData = 0;
        //    int AppApproved = 0;
        //    int AppForCorrection = 0;
        //    int AppPending = 0;
        //    int AppReceived = 0;
        //    int AppRejected = 0;

        //    foreach (var item in res)
        //    {
        //        LegacyData += Convert.ToInt32(item.LegacyData);
        //        AppApproved += Convert.ToInt32(item.AppApproved);
        //        AppForCorrection += Convert.ToInt32(item.AppForCorrection);
        //        AppPending += Convert.ToInt32(item.AppPending);
        //        AppReceived += Convert.ToInt32(item.AppReceived);
        //        AppRejected += Convert.ToInt32(item.AppRejected);
        //    }

        //    Report_BeneficiaryApplicationDistrictWiseStaus_Result result = new Report_BeneficiaryApplicationDistrictWiseStaus_Result();

        //    result.SubDivisionName = "Total";
        //    result.LegacyData = LegacyData;
        //    result.AppApproved = AppApproved;
        //    result.AppForCorrection = AppForCorrection;
        //    result.AppPending = AppPending;
        //    result.AppReceived = AppReceived;
        //    result.AppRejected = AppRejected;

        //    res.Add(result);

        //    return res;
        //}

        public List<Report_BeneficiaryApplicationStaus_Result> DistrictWiseStatus(string fromDate, string toDate)
        {
            var List = new List<SpGetApllicationSummery>();

            //var fdate = CommonMethods.dateconvertion(fromDate);
            // var tdate = CommonMethods.dateconvertion(toDate);
            var res = db.Report_BeneficiaryApplicationStaus().ToList();

            int LegacyData = 0;
            int AppApproved = 0;
            int AppForCorrection = 0;
            int AppPending = 0;
            int AppReceivedBasic = 0;
            int AppReceivedFull = 0;
            int AppRejected = 0;

            foreach (var item in res)
            {
                LegacyData += Convert.ToInt32(item.LegacyData);
                AppApproved += Convert.ToInt32(item.AppApproved);
                AppForCorrection += Convert.ToInt32(item.AppForCorrection);
                AppPending += Convert.ToInt32(item.AppPending);
                AppReceivedBasic += Convert.ToInt32(item.AppReceivedBasicInf);
                AppReceivedFull += Convert.ToInt32(item.AppReceivedFullInf);
                AppRejected += Convert.ToInt32(item.AppRejected);
            }

            Report_BeneficiaryApplicationStaus_Result result = new Report_BeneficiaryApplicationStaus_Result();

            result.DistrictName = "Total";
            result.LegacyData = LegacyData;
            result.AppApproved = AppApproved;
            result.AppForCorrection = AppForCorrection;
            result.AppPending = AppPending;
            result.AppReceivedBasicInf = AppReceivedBasic;
            result.AppReceivedFullInf = AppReceivedFull;
            result.AppRejected = AppRejected;

            res.Add(result);

            return res;
        }

        public Sp_ConvertingRejectedToPending_Result ReviewBenificiary(string remark, string benId, string userId)
        {
            Sp_ConvertingRejectedToPending_Result Result = new Sp_ConvertingRejectedToPending_Result();
            Int32 BenSno = Convert.ToInt32(benId);

            int status = (from x in db.TblBeneficiaries where x.BenSno == BenSno select x.Status).FirstOrDefault();
            if (status != 2)
            {
                Result.Message = "Invalid Request";
                Result.MessageCode = "000";
                return Result;
            }

            else
            {
                var res = db.Sp_ConvertingRejectedToPending(Convert.ToInt32(userId), Convert.ToInt32(benId), remark).FirstOrDefault();
                return res;
            }

        }

        public List<Get_BenRevivedDetails_Result> GetBenRevivedDetails(string Benid)
        {
            var res = db.Get_BenRevivedDetails(Convert.ToInt32(Benid)).ToList();
            return res;
        }

        #region Rlo Wise Legcay 1 and legacy 2
        public List<Sp_RLOwiseRegCount_Result> RLOWiseLegacy1and2Count(string fromDate, string toDate, string Subdivision)
        {
            var fdate = CommonMethods.dateconvertion(fromDate);
            var tdate = CommonMethods.dateconvertion(toDate);

            //List<Sp_RLOwiseLegacy1and2Count_Result> List = new List<Sp_RLOwiseLegacy1and2Count_Result>();

            var res = db.Sp_RLOwiseRegCount(Convert.ToDateTime(fdate), Convert.ToDateTime(tdate), Subdivision).ToList();

            return res;

        }
        #endregion

        #region Get Report Name
        public string GetReportName(string requestId)
        {
            int Id = Convert.ToInt32(requestId);
            var Name = (from x in db.TblDownlaodRequests where x.Id == Id select x.Report_Name).FirstOrDefault();
            return Name.ToString();
        }
        #endregion

        public List<SpGet_AgentDetails_Result> GetAgentDetails(string ds)
        {
            List<SpGet_AgentDetails_Result> List = new List<SpGet_AgentDetails_Result>();

            var res = db.SpGet_AgentDetails(ds, "").ToList();

            return res;
        }


        public List<SelectListItem> GetDidssubdivision(string ds)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDidsSubDivision(ds).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            return list;
        }
        public List<SelectListItem> GetDidssubdivisionbyDLC(string ds, int dlcId)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDidsSubDivisionByDLC(ds, dlcId).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            return list;
        }
        public List<SpGet_AgentDetails_Result> GetAgentDetailsByAdmin(string ds, string status)
        {
            List<SpGet_AgentDetails_Result> List = new List<SpGet_AgentDetails_Result>();

            var res = db.SpGet_AgentDetails(ds, status).ToList();

            return res;
        }

        #region
        //// For other registration multiple typies will come -- Ranjit kumar
        public List<SelectListItem> Getblocks(int subdivid, string typedata)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetBlockDetail_New(subdivid, typedata).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select Block/Muncipality/Corporation  --", Value = "0" });
            return list;
        }
        #endregion

        #region Get Label Names Based On Language
        public List<SPgetlabelNames_Result> GetLabelNames(string Id)
        {
            var res = db.SPgetlabelNames(Convert.ToInt16(Id)).ToList();
            return res;
        }
        #endregion

        #region SubmitRemarks
        public RequestResponse SubmitRemarks(string Remarks, string Mail)
        {
            RequestResponse Response = new RequestResponse();
            try
            {
                var res = db.SpSaveReamrks(Remarks, Mail).FirstOrDefault();

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

        #region

        public List<TblHelp> GetRemarks()
        {

            var res = (from x in db.TblHelps select x).ToList();
            return res;
        }
        #endregion

        #region

        public SpGetUserInfo_Result GetCreatedBInfo(string benSno)
        {
            var res = db.SpGetUserInfo(Convert.ToInt64(benSno)).FirstOrDefault();
            return res;

        }
        #endregion

        #region
        public RequestResponse RequiredDocuments(Int64 bsno, bool BenPhoto, bool BenSignature, bool BenPassBook, bool BenAadhar, bool BenIdentity, bool BenForm, bool BenOtherDoc, bool SchemeCertificate)
        {
            RequestResponse Res = new RequestResponse();

            try
            {
                var res = db.SpSaveRequiredDocs(bsno, Convert.ToInt16(BenPhoto), Convert.ToInt16(BenSignature), Convert.ToInt16(BenPassBook), Convert.ToInt16(BenAadhar), Convert.ToInt16(BenIdentity), Convert.ToInt16(BenForm), Convert.ToInt16(BenOtherDoc), Convert.ToInt16(SchemeCertificate));
                Res.Code = "000";
                Res.Message = "Success";
                return Res;
            }
            catch (Exception ex)
            {
                string Message = "";

                if (ex.Message == null)
                    Message = ex.InnerException.ToString();
                else
                    Message = ex.Message.ToString();

                Res.Message = Message;
                Res.Code = "999";
                return Res;
            }


        }
        #endregion


        #region
        public SpGetRequiredDocs_Result GetRequiredDocuments(Int64 bensno)
        {
            var res = db.SpGetRequiredDocs(bensno).FirstOrDefault();
            return res;

        }
        #endregion


        #region
        public List<SpGetBenePersonalDetEditHistory_Result> GetBenePersonalDetEditHistory(string benSno)
        {
            var res = db.SpGetBenePersonalDetEditHistory(Convert.ToInt64(benSno)).ToList();
            return res;
        }
        #endregion

        #region
        public List<SpGetBeneHusbandDetEditHistory_Result> GetBeneHusbandDetEditHistory(string benSno)
        {
            var res = db.SpGetBeneHusbandDetEditHistory(Convert.ToInt64(benSno)).ToList();
            return res;
        }
        #endregion

        #region
        public List<SpGetBeneDOBDetEditHistory_Result> GetBeneDOBDetEditHistory(string benSno)
        {
            var res = db.SpGetBeneDOBDetEditHistory(Convert.ToInt64(benSno)).ToList();
            return res;
        }
        #endregion
        #region
        public List<SpEditBankDetHistory_Result> GetBankHistory(string benSno)
        {
            var res = db.SpEditBankDetHistory(Convert.ToInt64(benSno)).ToList();

            return res;
        }
        #endregion

        #region
        public int GetPersonalHusbandCount(string benSno)
        {
            var res = db.SpGetBeneHusbandDetEditHistory(Convert.ToInt64(benSno)).ToList();

            int Count = (from x in res where x.Status == "Pending" select x).Count();
            return Count;
        }
        #endregion

        #region
        public int GetPersonalNameCount(string benSno)
        {
            var res = db.SpGetBenePersonalDetEditHistory(Convert.ToInt64(benSno)).ToList();

            int Count = (from x in res where x.Status == "Pending" select x).Count();
            return Count;
        }
        #endregion

        #region
        public int GetPersonalDOBCount(string benSno)
        {
            var res = db.SpGetBeneDOBDetEditHistory(Convert.ToInt64(benSno)).ToList();

            int Count = (from x in res where x.Status == "Pending" select x).Count();
            return Count;
        }
        #endregion

        #region
        public int GetBankPendingCount(string benSno)
        {
            var res = db.SpEditBankDetHistory(Convert.ToInt64(benSno)).ToList();

            int Count = (from x in res where x.Status == "Pending" select x).Count();
            return Count;
        }
        #endregion

        #region
        public int GetAddressPendingCount(string benSno)
        {
            var res = db.SpGetBeneAddressDetEditHistory(Convert.ToInt64(benSno)).ToList();

            int Count = (from x in res where x.Status == "Pending" select x).Count();
            return Count;
        }
        #endregion

        #region Check All Users
        public int GetUserLoginCount(string UserId, string Type)
        {

            var res = db.SpCheckUserStatus(Convert.ToInt64(UserId)).FirstOrDefault();

            return Convert.ToInt32(res);
        }
        #endregion

        #region Clear Session
        public string ClearSession(string Userid)
        {
            db.SPClearAllSessions(Convert.ToInt64(Userid));
            return "Your all sessions are clear";
        }
        #endregion
        #region Work Type
        public List<SelectListItem> GetWorkType(string workType)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetConstructTransList(workType);
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.ConTranName,
                        Value = x.ConTranSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "-- Select List --", Value = "0" });
            return list;
        }
        #endregion Work Type


        #region Detailed Report New

        //public List<SelectListItem> GetsubdivisionNew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetSubDivisionNew(distid).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.SubDivisionName,
        //				Value = x.SubDivisionSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "-1" });
        //	list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
        //	return list;
        //}

        //public List<SelectListItem> GetPSAllNew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = new List<TblPsMst>();

        //	if (distid == 0)
        //		res = (from x in db.TblPsMsts select x).ToList();
        //	else
        //		res = (from x in db.TblPsMsts where x.DistrictId == distid select x).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.PsName,
        //				Value = x.PsSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	return list;
        //}

        //public List<SelectListItem> GetPOSTOFFICENew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = new List<TblPostOfficeData>();
        //	if (distid == 0)
        //		res = (from x in db.TblPostOfficeDatas select x).ToList();
        //	else
        //		res = (from x in db.TblPostOfficeDatas where x.DistrictId == distid select x).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.PoName,
        //				Value = x.PoSno.ToString()

        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	return list;
        //}

        //public List<SelectListItem> GetGPBasedOnDistrictNew(int DistrictId)
        //{
        //	List<SelectListItem> list = null;

        //	if (DistrictId == 12)
        //	{
        //		var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

        //		list = (from x in res1
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //	}
        //	else if (DistrictId == 0)
        //	{
        //		var res2 = (from x in db.TblGPMsts select x).ToList();

        //		list = (from x in res2
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //	}
        //	else
        //	{
        //		var res = (from x in db.TblGPMsts where x.DistrictId == DistrictId select x).ToList();

        //		list = (from x in res
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //	}



        //	list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	return list;
        //}

        //public List<SelectListItem> GetGPAllNew(int subdivid)
        //{
        //	List<SelectListItem> list = null;
        //	if (subdivid == 29)
        //	{
        //		var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

        //		list = (from x in res1
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //	}
        //	else if (subdivid == 0)
        //	{
        //		var res2 = (from x in db.TblGPMsts select x).ToList();

        //		list = (from x in res2
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //	}
        //	else
        //	{
        //		var res = db.SpGetGP(subdivid).ToList();
        //		list = (from x in res
        //				select new SelectListItem()
        //				{
        //					Text = x.GPName,
        //					Value = x.GPSno.ToString()
        //				}).ToList();
        //		list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
        //	}

        //	return list;
        //}


        //public List<SelectListItem> GetsubdivisionNew(int distid)
        //{
        //	List<SelectListItem> list = null;
        //	var res = db.SpGetSubDivisionNew(distid).ToList();
        //	list = (from x in res
        //			select new SelectListItem()
        //			{
        //				Text = x.SubDivisionName,
        //				Value = x.SubDivisionSno.ToString()
        //			}).ToList();
        //	list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "-1" });
        //	list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
        //	return list;
        //}
        public List<SelectListItem> GetsubdivisionNew(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetSubDivisionNew(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.SubDivisionName,
                        Value = x.SubDivisionSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select SubDivision --", Value = "-1" });
            return list;
        }

        public List<SelectListItem> GetPSAllNew(int distid)
        {
            List<SelectListItem> list = null;
            var res = new List<TblPsMst>();

            if (distid == 0)
                res = (from x in db.TblPsMsts select x).ToList();
            else
                res = (from x in db.TblPsMsts where x.DistrictId == distid select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PsName,
                        Value = x.PsSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            return list;
        }

        public List<SelectListItem> GetPOSTOFFICENew(int distid)
        {
            List<SelectListItem> list = null;
            var res = new List<TblPostOfficeData>();
            if (distid == 0)
                res = (from x in db.TblPostOfficeDatas select x).ToList();
            else
                res = (from x in db.TblPostOfficeDatas where x.DistrictId == distid select x).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PoName,
                        Value = x.PoSno.ToString()

                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            return list;
        }

        public List<SelectListItem> GetGPBasedOnDistrictNew(int DistrictId)
        {
            List<SelectListItem> list = null;

            if (DistrictId == 12)
            {
                var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

                list = (from x in res1
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }
            else if (DistrictId == 0)
            {
                var res2 = (from x in db.TblGPMsts select x).ToList();

                list = (from x in res2
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }
            else
            {
                var res = (from x in db.TblGPMsts where x.DistrictId == DistrictId select x).ToList();

                list = (from x in res
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
            }



            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            return list;
        }

        public List<SelectListItem> GetGPAllNew(int subdivid)
        {
            List<SelectListItem> list = null;
            if (subdivid == 29)
            {
                var res1 = (from x in db.TblGPMsts where x.DistrictId == 0 && x.SubDivisionId == 0 select x).ToList();

                list = (from x in res1
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            }
            else if (subdivid == 0)
            {
                var res2 = (from x in db.TblGPMsts select x).ToList();

                list = (from x in res2
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            }
            else
            {
                var res = db.SpGetGP(subdivid).ToList();
                list = (from x in res
                        select new SelectListItem()
                        {
                            Text = x.GPName,
                            Value = x.GPSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            }

            return list;
        }



        public List<SelectListItem> GetDistrictNew()
        {
            List<SelectListItem> list = null;
            var res = db.SpGetDistrict();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.DistrictName,
                        Value = x.DistrictId.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select District --", Value = "-1" });
            return list;
        }

        public List<SelectListItem> GetTotalblockBySubdivNew(int subdivid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetToltalBlockDetailNew(subdivid).ToList();
            list = (from x in res

                    select new SelectListItem()
                    {
                        Text = x.BlockName,
                        Value = x.BlockSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select Block --", Value = "-1" });
            return list;
        }



        public List<SelectListItem> GetPSNew(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetPsDtsNew(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PsName,
                        Value = x.PsSno.ToString()
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select Ps --", Value = "-1" });
            return list;
        }



        public List<SelectListItem> GetPONew(int distid)
        {
            List<SelectListItem> list = null;
            var res = db.SpGetPo(distid).ToList();
            list = (from x in res
                    select new SelectListItem()
                    {
                        Text = x.PoName,
                        Value = x.PoPinCode
                    }).ToList();
            list.Insert(0, new SelectListItem { Text = "All", Value = "0" });
            list.Insert(0, new SelectListItem { Text = "-- Select Po --", Value = "-1" });
            return list;
        }

        #endregion

        #region BeneficiaryAnnualStatementReport

        public List<SelectListItem> GetFinancialYears()

        {

            List<SelectListItem> list = null;

            var res = (from x in db.TblFinancialYears orderby x.FinancialYear ascending select x).ToList();

            list = (from x in res

                    select new SelectListItem()

                    {

                        Text = x.FinancialYear,

                        Value = x.FinancialYearId.ToString()

                    }).ToList();

            list.Insert(0, new SelectListItem { Text = "-- Select Financial Year --", Value = "-1" });

            return list;

        }

        #endregion

        public SpGeteDistDetailsforDashBoard_Result GetEDistrictBeneDetailsForDashBoard(Int64 benSno, string sSINumber, string benOccupation, string aINNo, string oldRegNO)
        {
            var res = db.SpGeteDistDetailsforDashBoard(Convert.ToInt64(benSno), sSINumber, benOccupation, aINNo, oldRegNO).FirstOrDefault();
            return res;
        }

        #region
        public SpgetSSI_NumberDetails_Result GetMerSsinDetails(string benSSin)
        {
            var res = db.SpgetSSI_NumberDetails(benSSin).FirstOrDefault();

            return res;
        }
        #endregion

        #region
        public SpSaveMergedSSI_NoDetails_Result MergSSinData(string UniD, string MerId, string deptUserId, string ipAddress)
        {
            var res = db.SpSaveMergedSSI_NoDetails(MerId, UniD, Convert.ToInt32(deptUserId), ipAddress).FirstOrDefault();
            return res; // "Password Generated Successfully";

        }
        #endregion

        #region

        public RequestResponse UpdateSLOChange(string benslno, string newslno, string ipAddress)
        {
            RequestResponse Res = new RequestResponse();
            var res = db.SpSLOMapping(Convert.ToInt64(benslno), Convert.ToInt32(newslno), ipAddress).FirstOrDefault();
            Res.Code = res.Code;
            Res.Message = res.Message;

            return Res;
        }

        public SpGetUserInfByUserCode_Result GetUserInfo(string useid)
        {

            var res = db.SpGetUserInfByUserCode(useid).FirstOrDefault();

            return res;
        }

        #endregion

        #region  New PF Reports
        public List<SelectListItem> GetRLOsAll(string id)
        {
            List<SelectListItem> list = null;
            List<int> list1 = null;
            List<SelectListItem> list2 = null;
            if (id == "-1")
            {
                list = (from x in db.TblRLOOffices
                        where x.SubDivisionId == 0
                        select new SelectListItem()
                        {
                            Text = x.RLOOfficeName,
                            Value = x.RLOOfficeId.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select RLO Office --", Value = "-1" });
                return list;
            }
            else
            {
                list1 = (from x in db.TblSubDivisions
                         where x.DistrictId.ToString() == id
                         select x.SubDivisionSno).ToList();
                list2 = (from x in db.TblRLOOffices
                         where list1.Contains(x.SubDivisionId.Value)
                         select new SelectListItem()
                         {
                             Text = x.RLOOfficeName,
                             Value = x.RLOOfficeId.ToString()
                         }).ToList();
                //list2.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
                return list2;
            }
        }
        public List<SelectListItem> GetAgentsByRLOAll(string id)
        {
            List<SelectListItem> list = null;
            List<int> list1 = null;
            List<SelectListItem> list2 = null;
            List<int> userTypes = new List<int> { 8, 9 };
            if (id == "-1")
            {
                list = (from x in db.TblNewRegs
                        where x.SubDivId == 0
                        select new SelectListItem()
                        {
                            Text = x.UserCode,
                            Value = x.Userid.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select Agent ARN No --", Value = "-1" });
                return list;
            }
            else
            {
                list1 = (from x in db.TblRLOOffices
                         where id.Contains(x.RLOOfficeId.ToString())
                         select x.SubDivisionId.Value).ToList();
                list2 = (from x in db.TblNewRegs
                         where list1.Contains(x.SubDivId.Value) && userTypes.Contains(x.UserType)
                         select new SelectListItem()
                         {
                             Text = x.UserCode,
                             Value = x.Userid.ToString()
                         }).OrderBy(o => o.Text).ToList();
                //list2.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
                return list2;
            }
        }
        public List<SelectListItem> GetBlocksByRLOJSON(string id)
        {
            List<SelectListItem> list = null;
            List<int> list1 = null;
            List<SelectListItem> list2 = null;
            if (id == "-1")
            {
                list = (from x in db.TblBlockDetails
                        where x.SubDivisionSno == 0
                        select new SelectListItem()
                        {
                            Text = x.BlockName,
                            Value = x.BlockSno.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select Location --", Value = "-1" });
                return list;
            }
            else
            {
                IList<string> rlos = id.Split(new string[] { ",", " " }, StringSplitOptions.RemoveEmptyEntries);
                list1 = (from x in db.TblRLOOffices
                         where rlos.Contains(x.RLOOfficeId.ToString())
                         select x.SubDivisionId.Value).ToList();
                list2 = (from x in db.TblBlockDetails
                         where list1.Contains(x.SubDivisionSno)
                         select new SelectListItem()
                         {
                             Text = x.BlockName,
                             Value = x.BlockSno.ToString()
                         }).ToList();
                //list2.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
                return list2;
            }
        }
        public List<SelectListItem> GetAgentsByBlockJSON(string id)
        {
            List<SelectListItem> list = null;
            List<int> list1 = null;
            List<SelectListItem> list2 = null;
            List<int> userTypes = new List<int> { 8, 9 };
            if (id == "-1")
            {
                list = (from x in db.TblNewRegs
                        where x.Userid == 0
                        select new SelectListItem()
                        {
                            Text = x.UserCode,
                            Value = x.Userid.ToString()
                        }).ToList();
                list.Insert(0, new SelectListItem { Text = "-- Select Agent ARN No --", Value = "-1" });
                return list;
            }
            else
            {
                IList<string> blocks = id.Split(new string[] { ",", " " }, StringSplitOptions.RemoveEmptyEntries);
                list1 = (from x in db.UserLocationMaps
                         where blocks.Contains(x.Location.ToString()) && x.IsActive == true
                         select x.UserId).ToList();
                list2 = (from x in db.TblNewRegs
                         where list1.Contains(x.Userid) && userTypes.Contains(x.UserType)
                         select new SelectListItem()
                         {
                             Text = x.UserCode,
                             Value = x.Userid.ToString()
                         }).OrderBy(o => o.Text).ToList();
                //list2.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
                return list2;
            }
        }

        public List<SelectListItem> GetMultipleRLO(int Uid, int Utype)
        {
            List<SelectListItem> list3 = null;
            if (Utype == 7 || Utype == 3 || Utype == 4)
            {
                List<int> list1 = (from x in db.UserDisMaps
                                   where x.UserId == Uid && x.IsActive == true
                                   select x.UserDist).ToList();
                List<int> list2 = (from x in db.TblSubDivisions
                                   where list1.Contains(x.DistrictId)
                                   select x.SubDivisionSno).ToList();
                list3 = (from x in db.TblRLOOffices
                         where list2.Contains(x.SubDivisionId.Value)
                         select new SelectListItem()
                         {
                             Text = x.RLOOfficeName,
                             Value = x.RLOOfficeId.ToString()
                         }).ToList();
            }
            else
            {
                List<int> list1 = (from x in db.UserSubDivMaps
                                   where x.UserId == Uid && x.IsActive == true
                                   select x.SubDivision).ToList();
                list3 = (from x in db.TblRLOOffices
                         where list1.Contains(x.SubDivisionId.Value)
                         select new SelectListItem()
                         {
                             Text = x.RLOOfficeName,
                             Value = x.RLOOfficeId.ToString()
                         }).ToList();
            }
            //list2.Insert(0, new SelectListItem { Text = "ALL", Value = "0" });
            return list3;
        }
        #endregion

    }
}
