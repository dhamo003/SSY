using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.ServiceLog.DbConnection
{
    public class AuditConnection:IDisposable
    {
        private IDbConnection _db;
        public AuditConnection()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["SSYAuditLogEntities"].ConnectionString);
            _db.Open();
        }

        public IDbConnection Db { get { return _db; } }


        public void Dispose()
        {
            
        }
    }
}
