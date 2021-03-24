// Validating Email
function validateEmail() {
    var expr = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test($("#email").val())) {
        alert("Invalid email address.");
        $("#email").focus();
        return false;
    }
}
function onlynumber(e, t) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        return false;
    }
}
function onlyAlphabets(e, t) {
    // ;
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 46) || (charCode == 32))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}
function onlyAlphabetswithoutspaces(e, t) {
    // ;
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 46))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}
function IsNumericOnly(e) {
    var value = $(e.target).val();
    var n = value.indexOf(".");
    if (n > 0) {
        if ((e.keyCode == 65) || (e.keyCode == 66) || (e.keyCode >= 68 && e.keyCode <= 85) || e.keyCode == 89 || e.keyCode == 87 || e.keyCode == 90 || (e.keyCode == 86 && e.ctrlKey == false) || (e.keyCode == 67 && e.ctrlKey == false) || (e.keyCode == 88 && e.ctrlKey == false) || e.keyCode == 187 || (e.keyCode == 189 && e.shiftKey == true) || e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111 || e.keyCode == 189 || e.keyCode == 110 || e.keyCode == 186 || e.keyCode == 188 || (e.keyCode == 61 && e.shiftKey == false) || (e.keyCode == 173 && e.shiftKey == true) || e.keyCode == 192 || (e.keyCode == 191 && e.shiftKey == true) || (e.keyCode >= 219 && e.keyCode <= 222) || e.keyCode == 106 || e.keyCode == 59 || (e.keyCode >= 48 && e.keyCode <= 57 && e.shiftKey == true))
            return false;
    } else {
        if ((e.keyCode == 65) || (e.keyCode == 66) || (e.keyCode >= 68 && e.keyCode <= 85) || e.keyCode == 89 || e.keyCode == 87 || e.keyCode == 90 || (e.keyCode == 86 && e.ctrlKey == false) || (e.keyCode == 67 && e.ctrlKey == false) || (e.keyCode == 88 && e.ctrlKey == false) || e.keyCode == 187 || (e.keyCode == 189 && e.shiftKey == true) || (e.keyCode == 190 && e.shiftKey == true) || e.keyCode == 191 || e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 111 || e.keyCode == 189 || e.keyCode == 186 || e.keyCode == 188 || (e.keyCode == 61 && e.shiftKey == false) || (e.keyCode == 173 && e.shiftKey == true) || e.keyCode == 192 || (e.keyCode == 191 && e.shiftKey == true) || (e.keyCode >= 219 && e.keyCode <= 222) || e.keyCode == 106 || e.keyCode == 59 || (e.keyCode >= 48 && e.keyCode <= 57 && e.shiftKey == true))
            return false;
    }
}
function IsAlphaNumaric(e) {

    if ((e.keyCode >= 186 && e.keyCode <= 188) || (e.keyCode == 190) || e.keyCode == 191 ||
        e.keyCode == 192 || e.keyCode == 109 || (e.keyCode >= 219 && e.keyCode <= 222) || (e.keyCode >= 110 && e.keyCode <= 111) ||
        (e.keyCode >= 106 && e.keyCode <= 107) || e.keyCode == 59 || e.keyCode == 189 || e.keyCode == 61 || e.keyCode == 173 ||
        ((e.keyCode >= 48 && e.keyCode <= 57) && e.shiftKey == true)) {
        return false;
    }
}
function IsAlphaNumaricWithSpecialCharecter(e) {

    if ((e.keyCode >= 186 && e.keyCode <= 188) || (e.keyCode == 190) ||
        e.keyCode == 192 || e.keyCode == 109 || (e.keyCode >= 219 && e.keyCode <= 222) || (e.keyCode >= 110 && e.keyCode <= 111) ||
        (e.keyCode >= 106 && e.keyCode <= 107) || e.keyCode == 59 || e.keyCode == 189 || e.keyCode == 61 || e.keyCode == 173 ||
        ((e.keyCode >= 48 && e.keyCode <= 57) && e.shiftKey == true)) {
        return false;
    }
}
function IsAplhanumericwithHypenandSlash(e) {
    var keyCode = event.keyCode || event.which
    var regex = new RegExp("^[a-zA-Z0-9\-/\]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    // alert(regex +" "+key);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}