function myPrint(id, ReportFor) {
     
    var dat = new Date();
    var month = (dat.getMonth() + 1) < 10 ? '0' + (dat.getMonth() + 1) : '' + (dat.getMonth() + 1);
    var day = (dat.getDate()) < 10 ? '0' + (dat.getDate()) : '' + (dat.getDate());
    var today = day + "-" + month + "-" + dat.getFullYear();
    var nowTime = dat.getHours() + ":" + dat.getMinutes();

    var divContents = id[0].outerHTML;
    //var columnNames = $(id).jqGrid('getGridParam', 'colNames');

    var html = "";
    //for (var k = 1; k < columnNames.length; k++) {
    //    if (k == 1)
    //        continue;
    //    html = html + "<th>" + columnNames[k] + "</th>";
    //}
    var printWindow = window.open('', 'Print Data', 'height=500, width=1200');
    printWindow.document.write('<html><head><title></title>');
    printWindow.document.write('</head><body><table border="0" style="margin-left: 150px;"><tr><td align="center" style="font-size:22px"><b><font color="Olive">GOVERNMENT OF WEST BENGAL</font></b></td></tr><tr><td align="center" style="font-size:18px"><b><font color="Olive">GOVERNMENT OF WEST BENGAL</font></b></td></tr><tr><td align="center" style="font-size:16px"><font color="Olive">' + ReportFor + '</font></td></tr></table><table border="0" align="center" style="margin-left:420px;"><tr style="font-size:14px"><td><font color="Olive">Report Generated Time: ' + today + "  " + nowTime + '</font></td></tr></table><br />');
    printWindow.document.write('<table id="tblPrint" border="1" style=" margin-left: 1cm; margin-right: 1cm; border-collapse: collapse;"><tr><th>' + html + '</th></tr>' + divContents + '</table></div></body>');
   
    $(id).trigger('reloadGrid');
    printWindow.print();
    printWindow.close();
}