function ErrorMessage(Message) {

    //toastr.error(Message, "Error", {
    //    "closeButton": true,
    //    "timeOut": "0",
    //    "extendedTImeout": "0",
    //    "positionClass": "toast-top-right",
    //});

    Command: toastr["error"](Message)

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}

function SuccessMessage(Message) {

    Command: toastr["success"](Message)

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }


  
}

function BottomLeftSuccessMessage(Message) {

    //Command: toastr["success"](Message)

    //toastr.options = {
    //    "closeButton": true,
       
    //    "debug": false,
    //    "position-Class": "toast-top-right",
    //    "preventDuplicates": false,
    //    "onclick": null,
    //    "showDuration": "300",
    //    "hideDuration": "1000",
    //    "timeOut": "5000",
    //    "extendedTimeOut": "1000",
        
    //}
    toastr.success(Message, "", {
        
        "timeOut": "0",
        "extendedTImeout": "0",
        "positionClass": "toast-bottom-right",
        "timeOut": "5000",
    });


}