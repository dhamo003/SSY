using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSY.Models.Models
{
    public class ServiceRequestViewModel
    {
        public long SR_Number { get; set; }
        public DateTime SR_ReceivedDate { get; set; }
        public bool IsSSIN { get; set; }
        public string SSINNumber { get; set; }
        public string RegNumber { get; set; }
        public string SR_Description { get; set; }
        public string BroadCategory { get; set; }
        public string SubCategory { get; set; }

        //  Change Details

        public string CD_From { get; set; } // Change Details From
        public string CD_To { get; set; } // Change Details To


        // Received From

        public string RaisedBy { get; set; } // Received From name
        public string Designation { get; set; } // Received From Designation
        public string email_Id { get; set; } // Received From Designation
        public string ContactNumber { get; set; }
        public string LoggedBy { get; set; }
        public int Status { get; set; }
        public string ImplementedBy { get; set; }
        public DateTime DateofClosure { get; set; }

        public DateTime TargetDateofClosure { get; set; }


        // Supporting Documents 

        public string CorrespondingE_Mail { get; set; }
        public string AuthorizationLetter { get; set; }
        public string OtherDocuments { get; set; }
    }
}
