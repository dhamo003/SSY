<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BenProffDetailCount.aspx.cs" Inherits="SSYNEW.SSYIDCard.BenProffDetailCount" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=15.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        table {
            border-collapse: collapse;
        }

        table, td, th {
            border: 1px solid black;
        }
    </style>

    <script src="../Scripts/jquery.js"></script>

    <script>
        function downloadExcel() {
            var Tmptbl = $('#tblDataExcel').text();

            var TmpTable = Tmptbl.split('~');

            var FinalTbl = "<table border=1><tr style='background-color:#0A80BE;color:white;'>";

            var tblHeader = TmpTable[0].split('|');

            for (var i = 0; i < tblHeader.length; i++) {
                FinalTbl += "<th>" + tblHeader[i] + "</th>";
            }
            FinalTbl += "</tr>";


            var tblRows = TmpTable[1].split('#');

            var enter = false;


            for (var i = 0; i < tblRows.length; i++) {
                var tblRow = tblRows[i].split('|');
                FinalTbl += "<tr>";
                for (var j = 0; j < tblRow.length; j++) {
                    if (tblRow[j] == "Total") {
                        FinalTbl += "<td style='color:green;' colspan=2 align=center><b>" + tblRow[j] + "</b></td>";
                        enter = true;
                    }
                    else if (enter) {
                        FinalTbl += "<td style='color:green;'><b>" + tblRow[j] + "</b></td>";
                    }
                    else {
                        FinalTbl += "<td>" + tblRow[j] + "</td>";
                    }
                }
                FinalTbl += "</tr>";

            }

            FinalTbl += "</table>";


            //FinalTbl += "<table border=1><tr><th></th></tr><tr><th colspan=2 style='background-color:#0A80BE;color:white;'>Summary</th></tr></table>";


            //if ($("#hdIndType").val() == "1") {
            //    FinalTbl += "<table border=1><tr><th>Total No.Of Self Employed Beneficiaries</th><th align=right>" + $("#hdSelfCount").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th align=right>" + $("#hdTotal").val() + "</th></tr>";
            //}
            //else if ($("#hdIndType").val() == "2") {
            //    FinalTbl += "<table border=1><tr><th>Total No.Of Unorganized Beneficiaries</th><th align=right>" + $("#hdUnorgCount").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th align=right>" + $("#hdTotal").val() + "</th></tr>";
            //}
            //else {
            //    FinalTbl += "<table border=1><tr><th>Total No.Of Self Employed Beneficiaries</th><th align=right>" + $("#hdSelfCount").val() + "</th></tr><tr><th>Total No.Of Unorganized Beneficiaries</th><th align=right>" + $("#hdUnorgCount").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th align=right>" + $("#hdTotal").val() + "</th></tr>";
            //}



            window.open('data:application/vnd.ms-excel,' + encodeURIComponent(FinalTbl));

            e.preventDefault();


        }
    </script>
</head>
<body>

    <form id="form1" runat="server">
        <div>
            <div>
                <input type="button" class="btn btn-primary" id="btnExport" style="height: 30px; background-color: #0a80be; color: white; border: solid 0.5px white; border-radius: 5px; margin-bottom: 2px;" onclick="downloadExcel()" value="Export Excel" />
                <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

                <div class="errordiv">
                    <asp:Label ID="lblerror" Visible="true" runat="server"></asp:Label>
                </div>
                <asp:HiddenField ID="hdSelfCount" runat="server" />
                <asp:HiddenField ID="hdUnorgCount" runat="server" />
                <asp:HiddenField ID="hdTotal" runat="server" />
                <asp:HiddenField ID="hdIndType" runat="server" />
            </div>
        </div>

    </form>

</body>
</html>
