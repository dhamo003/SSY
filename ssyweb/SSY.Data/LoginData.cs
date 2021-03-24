using SSY.Models;
using SSY.Others;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Data
{
   public  class LoginData
    {
        SSYEntities db = new SSYEntities();

        #region
        public string GetOtherUser(string userName, string passWord, string ipAddress, string userSession)
        {
            var data = (from x in db.TblNewRegs where x.UserCode == userName select x).FirstOrDefault();
            if (data == null)
                return "The Username or password is incorrect";
            if (data.IsActive == false)
                return "User In Deactivate";
            if (!Sha1Pbkdf2.ValidatePassword(passWord, data.UserPwd, data.SaltKey))
                return "The Username or password is incorrect";
            else
            {
                string userTypeName = (from x in db.TblUserTypes where x.UserTypeId == data.UserType select x.UserTypeName).FirstOrDefault();
                //if (data.UserType > 7)
                //{
                //    userTypeName = "Service Provider";
                //}

                List<string> restrictLogin = ConfigurationManager.AppSettings["RestrictLogin"].Split(new char[] { ',' }).ToList();
                if (restrictLogin.Contains(data.UserType.ToString()))
                {
                    return ConfigurationManager.AppSettings["RestrictLoginMessage"];
                }
                db.SpUpdateLoginStatus(data.Userid, 1, userTypeName, ipAddress, userSession);
                //var res = db.SPLoginDet(data.Userid);
                return data.Userid.ToString();
            }
        }
        #endregion

        #region
        public string GetUser(string userName, string passWord, string loginType, string ipAddress, string userSession)
        {

            if (loginType == "SSIN")
            {
                var data = (from x in db.TblBeneficiaries where x.SSI_Number == userName || x.BenTempRegNo == userName select x).FirstOrDefault();

                if (data == null)
                    return "The Username or password is incorrect";
                if (data.Status == 0 && data.IsActive == false)
                {
                    return "Please update your Details";
                }
                if ( data.IsActive == false && data.IsUnique=="N")
                {
                    return "The Username or password is incorrect";
                }
                if (data.BenDeathStatus == 1)
				{
					return "Sorry! You cannot Login. Benefciary is in Dead Status.";
				}
				if (!Sha1Pbkdf2.ValidatePassword(passWord, data.BenUserPwd, data.BenUserKey))
                    return "The Username or password is incorrect";
                else
                    db.SpUpdateLoginStatus(data.BenSno, 1, "Beneficiary", ipAddress, userSession);
                return "0";
            }
            else
            {
                var data = (from x in db.TblBeneficiaries where x.AadharCard == userName || x.EpicCard == userName select x).FirstOrDefault();
                if (data == null)
                    return "Invalid User";
                if (data.Status == 0 && data.IsActive == false)
                {
                    return "Please update your Details";
                }
                if (!Sha1Pbkdf2.ValidatePassword(passWord, data.BenUserPwd, data.BenUserKey))
                    return "Invalid username or password.";
                else
                    db.SpUpdateLoginStatus(data.BenSno, 1, "Beneficiary", ipAddress, userSession);
                return "0";
            }



        }
        #endregion
    }
}
