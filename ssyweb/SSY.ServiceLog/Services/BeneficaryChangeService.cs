
using SSY.Data;
using SSY.Models;
using SSY.ServiceLog.Dapper;
using SSY.ServiceLog.Data;
using SSY.ServiceLog.DbConnection;
using SSY.ServiceLog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.ServiceLog.Services
{
    public class BeneficaryChangeService
    {
        private SSYEntities _db;
        private RegistrationData Rd;
        public BeneficaryChangeService()
        {
            _db = new SSYEntities();
            Rd = new RegistrationData();
        }

        public bool UpdateBeneficaryDetails(tblBeneficaryChangesViewModel model)
        {
            TblBeneficiary beneficary = null;
            if (model.IdType == "BenSno")
                beneficary = _db.TblBeneficiaries.Where(s => s.BenSno == Convert.ToInt64(model.UserUniqueKey)).FirstOrDefault();
            else if (model.IdType == "RegNo")
                beneficary = _db.TblBeneficiaries.Where(s => s.RegNumber.Replace(" ", "") == model.UserUniqueKey && s.Status == 1).FirstOrDefault();
            else if (model.IdType == "SSIN")
                beneficary = _db.TblBeneficiaries.Where(s => s.SSI_Number == model.UserUniqueKey && s.Status == 1).FirstOrDefault();

            if (beneficary == null)
            {
                throw new Exception("Given Key is  not found . Key = " + model.UserUniqueKey);
            }
            else
            {
                // Get Address Details
                TblBenAddress presentAddress = Rd.GetPresentAddress(beneficary.BenSno);
                TblBenAddress permanenetAddress = Rd.GetPermanentAddress(beneficary.BenSno);

                // Update details
                beneficary.BenDob = model.BenDetails.DOB;
                beneficary.BenFirstName = model.BenDetails.BenFirstName;
                beneficary.BenLastName = model.BenDetails.BenLastName;
                beneficary.BenMiddleName = model.BenDetails.BenMiddleName;
                beneficary.BenMobileNo = model.BenDetails.MobileNumber;
                beneficary.BenFatherFirstName = model.BenDetails.FatherName;
                beneficary.MotherName = model.BenDetails.MotherName;
                beneficary.BenGender = model.BenDetails.Gender;
                beneficary.BenMaritalStatus = model.BenDetails.MaritialStatus;
                beneficary.HusbandName = model.BenDetails.HusbandName;

                _db.SaveChanges();


                // Log Entry
                using (AuditConnection con = new AuditConnection())
                {
                    using (var scope = con.Db.BeginTransaction())
                    {
                        model.BenDetails.ChangedDescription = model.Description;
                        model.BenDetails.ModifiedBy = model.ModifiedBy;
                        model.BenDetails.ModifiedDate = DateTime.UtcNow;

                        con.Db.Insert<tblBeneficaryModifications>(model.BenDetails, scope);

                        model.BenAddress.ForEach((ba) =>
                        {
                            ba.ChangeId = model.BenDetails.MId;
                            ba.ModifiedBy = model.ModifiedBy;
                            ba.ModifiedDate = DateTime.UtcNow;
                            con.Db.Insert<tblBenAddressModifications>(ba, scope);
                        });
                        scope.Commit();
                    }
                }



                return true;
            }
        }

        public tblBeneficaryChangesViewModel GetBeneficaryDetails(string uniquekey, string type)
        {
            tblBeneficaryChangesViewModel returnmodel = new tblBeneficaryChangesViewModel();
            List<TblBeneficiary> beneficarires = null;
            if (type == "BenSno")
                beneficarires = _db.TblBeneficiaries.Where(s => s.BenSno == Convert.ToInt64(uniquekey)).ToList();
            else if (type == "RegNo")
                beneficarires = _db.TblBeneficiaries.Where(s => s.RegNumber.Replace(" ", "") == uniquekey).ToList();
            else if (type == "SSIN")
                beneficarires = _db.TblBeneficiaries.Where(s => s.SSI_Number == uniquekey).ToList();


            if (beneficarires == null || beneficarires.Count==0)
            {
                throw new Exception("Given Key is  not found . Key = " + uniquekey);
            }
            else
            {
                var beneficary = beneficarires.Where(s => s.Status == 1).FirstOrDefault();
                if (beneficary == null)
                    throw new Exception("Beneficary still not approved = " + uniquekey);
                // Get Address Details
                TblBenAddress presentAddress = Rd.GetPresentAddress(beneficary.BenSno);
                TblBenAddress permanenetAddress = Rd.GetPermanentAddress(beneficary.BenSno);

                returnmodel.BenDetails = new tblBeneficaryModifications()
                {
                    BenSno = beneficary.BenSno,
                    IdType = type,
                    UserUniqueKey = uniquekey,
                    BenFirstName = beneficary.BenFirstName,
                    BenLastName = beneficary.BenLastName,
                    BenMiddleName = beneficary.BenMiddleName,
                    MobileNumber = beneficary.BenMobileNo,
                    FatherName = beneficary.BenFatherFirstName,
                    MotherName = beneficary.MotherName,
                    Gender = beneficary.BenGender,
                    MaritialStatus = beneficary.BenMaritalStatus,
                    HusbandName = beneficary.HusbandName,
                    DOB = beneficary.BenDob

                };
                returnmodel.BenAddress = new List<tblBenAddressModifications>();
                if (permanenetAddress != null)
                    returnmodel.BenAddress.Add(new tblBenAddressModifications()
                    {
                        BenSno = beneficary.BenSno,
                        BenAddressSno = permanenetAddress.BenAddressSno,
                        BenAddressType = permanenetAddress.BenAddressType,
                        BenState = permanenetAddress.BenState,
                        BenDistrict = permanenetAddress.BenDistrict,
                        BenSubDivision = permanenetAddress.BenSubDivision,
                        BenBmc = permanenetAddress.BenBmc,
                        BenVsr = permanenetAddress.BenVsr,
                        BenAddressLine1 = permanenetAddress.BenAddressLine1,
                        BenGpWard = permanenetAddress.BenGpWard,
                        BenPs = permanenetAddress.BenPs,
                        BenPo = permanenetAddress.BenPo,
                        BenPincode = permanenetAddress.BenPincode
                    });
                if (presentAddress != null)
                    returnmodel.BenAddress.Add(new tblBenAddressModifications()
                    {
                        BenSno = beneficary.BenSno,
                        BenAddressSno = presentAddress.BenAddressSno,
                        BenAddressType = presentAddress.BenAddressType,
                        BenState = presentAddress.BenState,
                        BenDistrict = presentAddress.BenDistrict,
                        BenSubDivision = presentAddress.BenSubDivision,
                        BenBmc = presentAddress.BenBmc,
                        BenVsr = presentAddress.BenVsr,
                        BenAddressLine1 = presentAddress.BenAddressLine1,
                        BenGpWard = presentAddress.BenGpWard,
                        BenPs = presentAddress.BenPs,
                        BenPo = presentAddress.BenPo,
                        BenPincode = presentAddress.BenPincode
                    });

                return returnmodel;
            }
        }

        public object UpdateBeneficaryPassword(PasswordUpdateModel passwordUpdateModel)
        {
            TblBeneficiary beneficarire = _db.TblBeneficiaries.Where(s => s.BenSno == passwordUpdateModel.Bennso).FirstOrDefault();
            tblBenPasswordUpdates tblBenPasswordUpdates = new tblBenPasswordUpdates()
            {
                BenSno = passwordUpdateModel.Bennso,
                BenUserkey= beneficarire.BenUserKey,
                BenUserPwd=beneficarire.BenUserPwd,
                ModifiedBy=passwordUpdateModel.ModifiedBy,
                ModifiedDate=DateTime.Now
            };


            beneficarire.BenUserKey = passwordUpdateModel.BenUserKey;
            beneficarire.BenUserPwd = passwordUpdateModel.BenUserPwd;
            _db.SaveChanges();

            using (AuditConnection con = new AuditConnection())
            {
                    con.Db.Insert<tblBenPasswordUpdates>(tblBenPasswordUpdates);
            }

            return new { status = 200, Message = "Updated Successfully" };
        }
    }
}
