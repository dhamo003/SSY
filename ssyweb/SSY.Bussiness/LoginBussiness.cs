using SSY.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Bussiness
{
    public class LoginBussiness
    {
        LoginData ld = new LoginData();
        #region
        //GetOtherUser
        public string GetOtherUser(string userName, string passWord, string ipAddress, string userSession)
        {
            return ld.GetOtherUser(userName, passWord, ipAddress, userSession);
        }
        #endregion

        #region
        public string GetUser(string userName, string passWord, string loginType, string ipAddress, string userSession)
        {
            return ld.GetUser(userName, passWord, loginType, ipAddress, userSession);
        }
        #endregion
    }
}
