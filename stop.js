$(document).ready(function () {
    $(".flip").click(function () {
        $(".panel").slideDown(6000);
    })

    $("#but").click(function () {
        $(".panel").stop();
    })

});



