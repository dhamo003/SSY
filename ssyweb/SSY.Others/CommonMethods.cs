using SSY.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
namespace SSY.Others
{
    public class CommonMethods
    {
        

        #region
        public static string dateconvertion(string date)
        {
            string d = DateTime.ParseExact(date, "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
            return d;
        }
        #endregion

        #region LogError

        public static void LogError(string message, string Id, string innerexception, string methodname, string controllername)
        {
            try
            {
                StringBuilder sb = new StringBuilder("***************** Error Message Start *************************");
                sb.AppendLine();
                sb.AppendLine(string.Format("Date : " + DateTime.Now));
                sb.AppendLine(string.Format("Message : " + message));
                sb.AppendLine(string.Format("Id : " + Id));
                sb.AppendLine(string.Format("Inner Exception : " + innerexception));
                sb.AppendLine(string.Format("Method Name : " + methodname));
                sb.AppendLine(string.Format("Controller Name : " + controllername));
                sb.AppendLine();
                sb.AppendLine("***************** Error Message End *************************");
                sb.AppendLine();

                string filename = @"\SSYError_" + DateTime.Now.ToString("dd-MM-yyyy") + ".log";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {
                    var writer = File.CreateText(filepath);
                    writer.Close();
                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(sb);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }

           
        }

        #endregion

        #region AddtoLogFile
        public static void AddtoLogFile(string message)
        {
            try
            {
                string filename = @"\Log_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {
                    var writer = File.CreateText(filepath);
                    writer.Close();
                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(message);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }
           
        }
        #endregion


        #region
        public static void AddtoLogFileInfor(string message)
        {
            try
            {
                string filename = @"\InfoLog_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {
                    var writer = File.CreateText(filepath);
                    writer.Close();
                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(message);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }
           
        }
        #endregion




        #region
        public static void AddtoLogFileLogoutSessions(string message)
        {
            try
            {
                string filename = @"\LogoutSession_" + DateTime.Now.ToString("dd-MM-yyyy") + ".txt";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\Logs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {
                    var writer = File.CreateText(filepath);
                    writer.Close();
                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(message);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }
           
        }
        #endregion



        #region Genarate Password
        public static string CreatePassword()
        {
            int length = 6;
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            string res1 = res.ToString();
            return res1;
        }
        #endregion

        //#region
        //public static string SendBillSms(string toNumber, string message)
        //{
        //    try
        //    {
        //        //var url = "http://www.myvaluefirst.com/smpp/sendsms?username=raminfohttp1&password=raminfohttp&to=" + toNumber.Trim() + "&udh=0&from=MBILLP&text=" + message;
        //        //var request = WebRequest.Create(url);
        //        //request.Credentials = CredentialCache.DefaultCredentials;
        //        //var httpWebResponse = (HttpWebResponse)request.GetResponse();
        //        //var dataStream = httpWebResponse.GetResponseStream();
        //        //if (dataStream == null) return "";
        //        //var reader = new StreamReader(dataStream);
        //        //return reader.ReadToEnd();


        //        return "";
        //    }
        //    catch
        //    {
        //        AddtoLogFile(toNumber + "-" + message);
        //        return "";
        //    }
        //}
        //#endregion

        #region
        public static string SendBillSms(string toNumber, string message, Int64 UserId, string MessageType, string UserType)
        {
         
            SSYEntities db = new SSYEntities();
            string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");

            string reqid = "SSY" + date;
            try
            {
                if (toNumber.Trim() != "" && toNumber.Trim() != null)
                {

               
                string Url = ConfigurationManager.AppSettings["SMS:CountryUrlSendSms"];
                string UserName = ConfigurationManager.AppSettings["SMS:CountryUser"];
                string PassWord = ConfigurationManager.AppSettings["SMS:CountryPwd"];

                int MesCount = db.SpCheckSmsCount(toNumber, message).Count();

                    if(MesCount == 0)
                    {
                        var res = db.SpSendSMS(1, message, 0, MessageType, UserType, reqid, toNumber);

                        HttpWebRequest HttpWReq; ;

                        HttpWReq = (HttpWebRequest)WebRequest.Create(Url + "User=" + UserName + "&passwd=" + PassWord + "&mobilenumber=" + toNumber + "&message=" + message + "&sid=" + "SMSCntry" + "&mtype=" + "N" + "&DR=" + "Y");
                        HttpWReq.Method = "POST";
                        HttpWReq.ContentLength = 0;
                        HttpWebResponse response = (HttpWebResponse)HttpWReq.GetResponse();
                        Stream datastream = response.GetResponseStream();
                        StreamReader reader = new StreamReader(datastream);
                        string responseFromServer = reader.ReadToEnd();

                        if (responseFromServer.Contains("OK:"))
                        {

                            responseFromServer = responseFromServer.Replace("OK:", "");
                            var Res1 = db.SpUpdateSMS("1", responseFromServer, reqid);
                        }
                        else
                        {
                            var Res1 = db.SpUpdateSMS("0", responseFromServer, reqid);
                        }




                        reader.Close();
                        datastream.Close();
                        response.Close();
                        return "";
                    }
                    else
                    {
                        return "";
                    }
                    }
                else
                {
                    return "";
                }
              
            }
            catch (Exception ex)
            {
                string Message = "";
                if(Convert.ToString(ex.Message) == null)
                {
                    Message =Convert.ToString( ex.InnerException);
                }
                else
                {
                    Message = ex.Message.ToString();
                }
                var Res1 = db.SpUpdateSMS("0", Message, reqid);
                //AddtoLogFile(toNumber + "-" + message);
                return "";
            }
        }
        #endregion


        #region
        public static string NewSms(string toNumber, string message, Int64 UserId, string MessageType, string UserType,string Id)
        {
            SSYEntities db = new SSYEntities();
            string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");

            string reqid = "SSY" + date;
            try
            {
                if (toNumber.Trim() != "" && toNumber.Trim() != null)
                {


                    string Url = ConfigurationManager.AppSettings["SmsCountryUrlSendSms"];
                    string UserName = ConfigurationManager.AppSettings["SmsCountryUser"];
                    string PassWord = ConfigurationManager.AppSettings["SmsCountryPwd"];

                    int MesCount = db.SpCheckSmsCount(toNumber, message).Count();

                    if (MesCount == 0)
                    {
                        var res = db.SpSendSMS(Convert.ToInt64(Id), message, 0, MessageType, UserType, reqid, toNumber);

                        HttpWebRequest HttpWReq; ;

                        HttpWReq = (HttpWebRequest)WebRequest.Create(Url + "User=" + UserName + "&passwd=" + PassWord + "&mobilenumber=" + toNumber + "&message=" + message + "&sid=" + "SMSCntry" + "&mtype=" + "N" + "&DR=" + "Y");
                        HttpWReq.Method = "POST";
                        HttpWReq.ContentLength = 0;
                        HttpWebResponse response = (HttpWebResponse)HttpWReq.GetResponse();
                        Stream datastream = response.GetResponseStream();
                        StreamReader reader = new StreamReader(datastream);
                        string responseFromServer = reader.ReadToEnd();

                        if (responseFromServer.Contains("OK:"))
                        {

                            responseFromServer = responseFromServer.Replace("OK:", "");
                            var Res1 = db.SpUpdateSMS("1", responseFromServer, reqid);
                        }
                        else
                        {
                            var Res1 = db.SpUpdateSMS("0", responseFromServer, reqid);
                        }




                        reader.Close();
                        datastream.Close();
                        response.Close();
                        return "";
                    }
                    else
                    {
                        return "";
                    }
                }
                else
                {
                    return "";
                }

            }
            catch (Exception ex)
            {
                string Message = "";
                if (ex.Message.ToString() == null)
                {
                    Message = ex.InnerException.ToString();
                }
                else
                {
                    Message = ex.Message.ToString();
                }
                var Res1 = db.SpUpdateSMS("0", Message, reqid);
                //AddtoLogFile(toNumber + "-" + message);
                return "";
            }
        }
        #endregion

        #region

        public static string CheckSmsCountryBalance()
        {
            try
            {




                string date = DateTime.Now.ToString("yyyyMMddhhmmssfff");

                string reqid = "SSY" + date;

                string Url = ConfigurationManager.AppSettings["SmsCountryUrlCheckBal"];
                string UserName = ConfigurationManager.AppSettings["SmsCountryUser"];
                string PassWord = ConfigurationManager.AppSettings["SmsCountryPwd"];


           
                HttpWebRequest HttpWReq; ;

                HttpWReq = (HttpWebRequest)WebRequest.Create(Url + "User=" + UserName + "&passwd=" + PassWord );
                HttpWReq.Method = "POST";
                HttpWReq.ContentLength = 0;
                HttpWebResponse response = (HttpWebResponse)HttpWReq.GetResponse();
                Stream datastream = response.GetResponseStream();
                StreamReader reader = new StreamReader(datastream);
                string responseFromServer = reader.ReadToEnd();

                reader.Close();
                datastream.Close();
                response.Close();
                return "";
            }
            catch (Exception ex)
            {
                //AddtoLogFile(toNumber + "-" + message);
                return "";
            }
        }
        #endregion


        #region
        public static string SendMail_WithHtml(string Tomail, string FromMail, string Body, string Subject)
        {
            try
            {
                if (Tomail != null && Tomail != "")
                {
                    using (MailMessage mailMessage = new MailMessage())
                    {
                        mailMessage.From = new MailAddress(FromMail);
                        mailMessage.Subject = Subject;
                        mailMessage.Body = Body;
                        mailMessage.IsBodyHtml = true;
                        mailMessage.To.Add(Tomail.ToString());
                        mailMessage.CC.Add(FromMail.ToString());
                        SmtpClient smtp = new SmtpClient();
                        smtp.Host = ConfigurationManager.AppSettings["SMTPHost"];
                        smtp.EnableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableSsl"]);
                        System.Net.NetworkCredential NetworkCred = new System.Net.NetworkCredential();
                        NetworkCred.UserName = ConfigurationManager.AppSettings["EmailSender"];
                        NetworkCred.Password = ConfigurationManager.AppSettings["EmailPassword"];
                        smtp.UseDefaultCredentials = true;
                        smtp.Credentials = NetworkCred;
                        smtp.Port = int.Parse(ConfigurationManager.AppSettings["SMTPPort"]);
                        smtp.Send(mailMessage);
                        return "sucess";
                    }
                }
                else
                    return "";
            }

            catch (Exception ex)
            {
                return "";
            }
        }
        #endregion

        #region
        void SendMail(object msg)
        {
            try
            {
                MailMessage mail = (MailMessage)msg;
                mail.From = new MailAddress(ConfigurationManager.AppSettings["EmailSender"]);
                mail.IsBodyHtml = true;
                //  configure email settings
                SmtpClient smtp = new SmtpClient(ConfigurationManager.AppSettings["SMTPHost"].ToString(), Convert.ToInt32(ConfigurationManager.AppSettings["SMTPPort"]));
                smtp.EnableSsl = true;
                NetworkCredential netCre = new NetworkCredential(ConfigurationManager.AppSettings["EmailSender"], ConfigurationManager.AppSettings["EmailPassword"]);
                smtp.Credentials = netCre;
                smtp.Send(mail);
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                throw new Exception(ex.Message);
            }
            finally
            {
            }
        }
        #endregion

        #region
        public static string GenerateRandomMpin()
        {
            const string chars = "0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, 4)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }

        public static void RegistrationLog(string inputData, bool issuccess, string MethodName)
        {
            try
            {
                StringBuilder sb = new StringBuilder("***************** Response Message Start *************************");
                sb.AppendLine();
                sb.AppendLine(string.Format("Date : " + DateTime.Now));
                sb.AppendLine(string.Format("Input Data : " + inputData));
                sb.AppendLine(string.Format("Method Name : " + MethodName));
                sb.AppendLine(string.Format("Resonse : " + issuccess));
                sb.AppendLine();
                sb.AppendLine("***************** Response Message End *************************");
                sb.AppendLine();

                string filename = @"\SSYRegisterResponse_" + DateTime.Now.ToString("dd-MM-yyyy") + ".log";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\RegLogs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {

                    using (Stream stream = File.Create(filepath))
                    {
                        TextWriter tw = new StreamWriter(stream); /* this is where the problem was */
                        tw.Close();
                    }

                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(sb);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }
           
        }

        public static void AddHelperLog(string savePath, string index, string bensno, string message)
        {
            try
            {
                StringBuilder sb = new StringBuilder("***************** Response Message Start *************************");
                sb.AppendLine();
                sb.AppendLine(string.Format("Date : " + DateTime.Now));
                sb.AppendLine(string.Format("Input Data : " + savePath));
                sb.AppendLine(string.Format("Index Name : " + index));
                sb.AppendLine(string.Format("bensno : " + bensno));
                sb.AppendLine(string.Format("message : " + message));
                sb.AppendLine();
                sb.AppendLine("***************** Response Message End *************************");
                sb.AppendLine();

                string filename = @"\SSYHelperResponse_" + DateTime.Now.ToString("dd-MM-yyyy") + ".log";
                string value = System.Web.Hosting.HostingEnvironment.MapPath(@"~\") + "\\RegLogs\\";
                if (!System.IO.Directory.Exists(value))
                {
                    System.IO.Directory.CreateDirectory(value);
                }
                var filepath = value + filename;
                if (!File.Exists(filepath))
                {

                    using (Stream stream = File.Create(filepath))
                    {
                        TextWriter tw = new StreamWriter(stream); /* this is where the problem was */
                        tw.Close();
                    }

                }
                using (var writer = new StreamWriter(filepath, true))
                {
                    writer.WriteLine(sb);
                    writer.Close();
                }
            }
            catch (Exception ex)
            {

            }
        }
        #endregion
    }
}
