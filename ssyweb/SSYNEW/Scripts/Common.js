function binddatepicker() {

    for (i = 1900; i < 2018; i++) {

        $("#ddlyr").append("<option value=" + i + "> " + i + " </option>");


    }

    for (i = 1950; i < 2020; i++) {

        $(".ddlyear").append("<option value=" + i + "> " + i + " </option>");


    }
    for (i = 1; i < 32; i++) {
        if (i < 10)
            $("#ddlday,.ddlday").append("<option value=" + "0" + i + "> " + i + " </option>");
        else
            $("#ddlday,.ddlday").append("<option value=" + i + "> " + i + " </option>");


    }

    $("#ddlmnth,.ddlmnth").append("<option value=" + "01" + "> " + "January" + " </option>");


    $("#ddlmnth,.ddlmnth").append("<option value=" + "02" + "> " + "February" + " </option>");

    $("#ddlmnth,.ddlmnth").append("<option value=" + "03" + "> " + "March" + " </option>");

    $("#ddlmnth,.ddlmnth").append("<option value=" + "04" + "> " + "April" + " </option>");


    $("#ddlmnth,.ddlmnth").append("<option value=" + "05" + "> " + "May" + " </option>");


    $("#ddlmnth,.ddlmnth").append("<option value=" + "06" + "> " + "June" + " </option>");
    $("#ddlmnth,.ddlmnth").append("<option value=" + "07" + "> " + "July" + " </option>");

    $("#ddlmnth,.ddlmnth").append("<option value=" + "08" + "> " + "August" + " </option>");

    $("#ddlmnth,.ddlmnth").append("<option value=" + "09" + "> " + "September" + " </option>");



    $("#ddlmnth,.ddlmnth").append("<option value=" + "10" + "> " + "October" + " </option>");

    $("#ddlmnth,.ddlmnth").append("<option value=" + "11" + "> " + "November" + " </option>");
    $("#ddlmnth,.ddlmnth").append("<option value=" + "12" + "> " + "December" + " </option>");
}


//calculate age




var calculateAge = function (birthday) {
     
    // alert(birthday);
    var now = new Date();
    // alert("gdsgsgsdg"+birthday);
    var past = new Date(birthday);
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();

    //  alert(nowYear +""+pastYear)

    var age = nowYear - pastYear;


    //  $("#age").val(age);

    return age;


};

function openPopupWindow(url, divContainer, callbackFunction) {
    ajaxGet(url, function (html) {
        $(divContainer).html(html);
    });
    closePopup = function () {
        $(divContainer).modal('hide');
        $(divContainer).html("");
        callbackFunction();
    }
}

function ajaxGet(url, successFunction) {
    $.ajax({
        type: 'get',
        url: url,
        cache: false,
        success: successFunction,
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
}
    //window.onbeforeunload = function () {

    //    alert("hi");
    //    return 'Are you really want to perform the action?';
    //}

    //$(window).unload(function() {
    //    var answer=confirm("Are you sure you want to leave?");
    //    if (answer) { //ajax call here
    //        window.location.href = "/Home/Logout";
    //    }
    //});