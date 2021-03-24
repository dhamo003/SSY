<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DistWiseAbstract.aspx.cs" Inherits="SSYNEW.SSYIDCard.DistWiseAbstract" %>


<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=15.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>


<%--<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=10.0.0.0, Culture=neutral, PublicKeyToken=B03F5F7F11D50A3A" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>--%>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
	</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div>
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <div class="errordiv">
                <asp:Label ID="lblerror" Visible="true" runat="server"></asp:Label>
            </div>
            <rsweb:ReportViewer ID="ReportViewer1" runat="server" ShowPrintButton="true">
            </rsweb:ReportViewer>
        </div>    
    </div>
    </form>
</body>
</html>




<%--<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <div class="errordiv">
                <asp:Label ID="lblerror" Visible="true" runat="server"></asp:Label>
            </div>
            <rsweb:reportviewer id="ReportViewer1" runat="server" showprintbutton="true">
            </rsweb:reportviewer>
        </div>
    </form>
</body>
</html>--%>

