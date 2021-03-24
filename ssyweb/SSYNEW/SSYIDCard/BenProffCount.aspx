<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="BenProffCount.aspx.cs" Inherits="SSYNEW.SSYIDCard.BenProffCount" %>

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
            var Tmptbl = $('#tblProfCount').text();

            var TmpTable = Tmptbl.split('~');

            var FinalTbl = "<table border=1><tr style='background-color:#0A80BE;color:white;'>";

            var tblHeader = TmpTable[0].split('|');

            for (var i = 0; i < tblHeader.length; i++) {
                FinalTbl += "<th>" + tblHeader[i] + "</th>";
            }
            FinalTbl += "</tr>";


            var tblRows = TmpTable[1].split('#');

            var enter = false;
            var DistricrEnter = false;
            var SubDivisionEnter = false;


            for (var i = 0; i < tblRows.length; i++) {
                var tblRow = tblRows[i].split('|');
                FinalTbl += "<tr>";

                DistricrEnter = false;
                SubDivisionEnter = false;

                for (var j = 0; j < tblRow.length; j++) {
                    if (tblRow[j] == "District Wise Count") {
                        FinalTbl += "<td colspan='3' align=center style='color:red;'>" + tblRow[j] + "</td>";
                        DistricrEnter = true;
                    }
                    else if (tblRow[j] == "Sub division wise count") {
                        FinalTbl += "<td colspan='2' align=center style='color:#FF6347;'>" + tblRow[j] + "</td>";
                        SubDivisionEnter = true;
                    }
                    else if (tblRow[j] == "Grand Total") {
                        FinalTbl += "<td style='color:green;'><b>" + tblRow[j] + "</b></td>";
                        enter = true;
                    }
                    else if (DistricrEnter) {
                        FinalTbl += "<td style='color:red;'>" + tblRow[j] + "</td>";
                    }
                    else if (SubDivisionEnter) {
                        FinalTbl += "<td style='color:#FF6347;'>" + tblRow[j] + "</td>";
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


            FinalTbl += "<table border=1><tr><th></th></tr><tr><th colspan=2 style='background-color:#0A80BE;color:white;'>Summary</th></tr></table>";


            if ($("#hdIndType").val() == "1") {
                FinalTbl += "<table border=1><tr><th>Total No.Of Self Employed Beneficiaries</th><th>" + $("#hdSelfEmp").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th>" + $("#hdTotal").val() + "</th></tr>";
            }
            else if ($("#hdIndType").val() == "2") {
                FinalTbl += "<table border=1><tr><th>Total No.Of Unorganized Beneficiaries</th><th>" + $("#hdUnorgEmp").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th>" + $("#hdTotal").val() + "</th></tr>";
            }
            else {
                FinalTbl += "<table border=1><tr><th>Total No.Of Self Employed Beneficiaries</th><th>" + $("#hdSelfEmp").val() + "</th></tr><tr><th>Total No.Of Unorganized Beneficiaries</th><th>" + $("#hdUnorgEmp").val() + "</th></tr><tr><th>Total No.Of Beneficiaries</th><th>" + $("#hdTotal").val() + "</th></tr>";
            }



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
                <asp:HiddenField ID="hdSelfEmp" runat="server" />
                <asp:HiddenField ID="hdUnorgEmp" runat="server" />
                <asp:HiddenField ID="hdTotal" runat="server" />
                <asp:HiddenField ID="hdIndType" runat="server" />
            </div>
        </div>

    </form>

</body>
</html>
