using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SSY.Others
{
   public class PfTransactionscs
    {
        [XmlRoot(ElementName = "getBenefTransactionDetailsReturn")]
        public class GetBenefTransactionDetailsReturn
        {
            [XmlAttribute(AttributeName = "href")]
            public string Href { get; set; }
        }

        [XmlRoot(ElementName = "getBenefTransactionDetailsResponse", Namespace = "http://endpoint.webservice.saspfuw.org")]
        public class GetBenefTransactionDetailsResponse
        {
            [XmlElement(ElementName = "getBenefTransactionDetailsReturn")]
            public GetBenefTransactionDetailsReturn GetBenefTransactionDetailsReturn { get; set; }
            [XmlAttribute(AttributeName = "encodingStyle", Namespace = "http://schemas.xmlsoap.org/soap/envelope/")]
            public string EncodingStyle { get; set; }
            [XmlAttribute(AttributeName = "ns1", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns1 { get; set; }
        }

        [XmlRoot(ElementName = "multiRef")]
        public class MultiRef
        {
            [XmlAttribute(AttributeName = "href")]
            public string Href { get; set; }
            [XmlElement(ElementName = "agent")]
            public Agent Agent { get; set; }
            [XmlElement(ElementName = "amount")]
            public Amount Amount { get; set; }
            [XmlElement(ElementName = "bookNo")]
            public BookNo BookNo { get; set; }
            [XmlElement(ElementName = "contriId")]
            public ContriId ContriId { get; set; }
            [XmlElement(ElementName = "createdBy")]
            public CreatedBy CreatedBy { get; set; }
            [XmlElement(ElementName = "createdDate")]
            public CreatedDate CreatedDate { get; set; }
            [XmlElement(ElementName = "currentBalance")]
            public CurrentBalance CurrentBalance { get; set; }
            [XmlElement(ElementName = "dateOfCollection")]
            public DateOfCollection DateOfCollection { get; set; }
            [XmlElement(ElementName = "description")]
            public Description Description { get; set; }
            [XmlElement(ElementName = "endDate")]
            public EndDate EndDate { get; set; }
            [XmlElement(ElementName = "forMonth")]
            public ForMonth ForMonth { get; set; }
            [XmlElement(ElementName = "forYear")]
            public ForYear ForYear { get; set; }
            [XmlElement(ElementName = "pfNo")]
            public PfNo PfNo { get; set; }
            [XmlElement(ElementName = "receptNo")]
            public ReceptNo ReceptNo { get; set; }
            [XmlElement(ElementName = "reference")]
            public Reference Reference { get; set; }
            [XmlElement(ElementName = "remarks")]
            public Remarks Remarks { get; set; }
            [XmlElement(ElementName = "startDate")]
            public StartDate StartDate { get; set; }
            [XmlElement(ElementName = "transactionDate")]
            public TransactionDate TransactionDate { get; set; }
            [XmlElement(ElementName = "transactionType")]
            public TransactionType TransactionType { get; set; }
            [XmlAttribute(AttributeName = "id")]
            public string Id { get; set; }
            [XmlAttribute(AttributeName = "root", Namespace = "http://schemas.xmlsoap.org/soap/encoding/")]
            public string Root { get; set; }
            [XmlAttribute(AttributeName = "encodingStyle", Namespace = "http://schemas.xmlsoap.org/soap/envelope/")]
            public string EncodingStyle { get; set; }
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlAttribute(AttributeName = "ns2", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns2 { get; set; }
            [XmlAttribute(AttributeName = "soapenc", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Soapenc { get; set; }
            [XmlAttribute(AttributeName = "ns3", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns3 { get; set; }
            [XmlAttribute(AttributeName = "ns4", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns4 { get; set; }
            [XmlAttribute(AttributeName = "ns5", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns5 { get; set; }
            [XmlAttribute(AttributeName = "ns6", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Ns6 { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "agent")]
        public class Agent
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "amount")]
        public class Amount
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "bookNo")]
        public class BookNo
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "contriId")]
        public class ContriId
        {
            [XmlAttribute(AttributeName = "href")]
            public string Href { get; set; }
        }

        [XmlRoot(ElementName = "createdBy")]
        public class CreatedBy
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "createdDate")]
        public class CreatedDate
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "currentBalance")]
        public class CurrentBalance
        {
            [XmlAttribute(AttributeName = "href")]
            public string Href { get; set; }
        }

        [XmlRoot(ElementName = "dateOfCollection")]
        public class DateOfCollection
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "description")]
        public class Description
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "endDate")]
        public class EndDate
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "forMonth")]
        public class ForMonth
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "forYear")]
        public class ForYear
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "pfNo")]
        public class PfNo
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "receptNo")]
        public class ReceptNo
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlAttribute(AttributeName = "nil", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Nil { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "reference")]
        public class Reference
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "remarks")]
        public class Remarks
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "startDate")]
        public class StartDate
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "transactionDate")]
        public class TransactionDate
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "transactionType")]
        public class TransactionType
        {
            [XmlAttribute(AttributeName = "type", Namespace = "http://www.w3.org/2001/XMLSchema-instance")]
            public string Type { get; set; }
            [XmlText]
            public string Text { get; set; }
        }

        [XmlRoot(ElementName = "Body", Namespace = "http://schemas.xmlsoap.org/soap/envelope/")]
        public class Body
        {
            [XmlElement(ElementName = "getBenefTransactionDetailsResponse", Namespace = "http://endpoint.webservice.saspfuw.org")]
            public GetBenefTransactionDetailsResponse GetBenefTransactionDetailsResponse { get; set; }
            [XmlElement(ElementName = "multiRef")]
            public List<MultiRef> MultiRef { get; set; }
        }

        [XmlRoot(ElementName = "Envelope", Namespace = "http://schemas.xmlsoap.org/soap/envelope/")]
        public class Envelope
        {
            [XmlElement(ElementName = "Body", Namespace = "http://schemas.xmlsoap.org/soap/envelope/")]
            public Body Body { get; set; }
            [XmlAttribute(AttributeName = "soapenv", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Soapenv { get; set; }
            [XmlAttribute(AttributeName = "xsd", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Xsd { get; set; }
            [XmlAttribute(AttributeName = "xsi", Namespace = "http://www.w3.org/2000/xmlns/")]
            public string Xsi { get; set; }
        }
    }
}
