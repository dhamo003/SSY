<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SSYIDCardNew.aspx.cs" Inherits="SSYNEW.SSYIDCard.SSYIDCardNew" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=15.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <rsweb:reportviewer id="ReportViewer1" runat="server" showprintbutton="true">
            </rsweb:reportviewer>
        </div>
    </form>
</body>
</html>

