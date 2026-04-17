$(document).ready(function () {
    
    // slideDown() -> method is used to slide down an element

    // $(selector).slideDown(speed,callback);    
    
    $("#flipDown").click(function () {
        $("#panel").slideDown("slow");
    })


    // slideUp() -> method is used to slide up an element

    // $(selector).slideUp(speed , callback);

    $("#flipUp").click(function () {
        $("#panel").slideUp("slow");
    })

    // slideToggle() -> method is used to toggle between slidedown and slideup

    // $(selector).slideToggle(speed , callback);

    $("#flipToggle").click(function () {
        $("#panel").slideToggle("slow");
    })
})