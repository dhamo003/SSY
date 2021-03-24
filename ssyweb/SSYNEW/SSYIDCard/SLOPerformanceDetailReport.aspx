<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SLOPerformanceDetailReport.aspx.cs" Inherits="SSYNEW.SSYIDCard.SLOPerformanceDetailReport" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=15.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <div class="errordiv">
                <asp:Label ID="lblerror" Visible="true" runat="server"></asp:Label>
            </div>
            <rsweb:ReportViewer ID="ReportViewer1" runat="server" ShowPrintButton="true" BackColor="white" InternalBorderStyle="None">
            </rsweb:ReportViewer>
    </div>
    </form>
</body>
</html>
