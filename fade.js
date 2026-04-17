$(document).ready(function () {
    $("#butIN").click(function () {
        $(".box1").fadeIn();
        $(".box2").fadeIn("slow");
        $(".box3").fadeIn(3000);
        $(".box4").fadeIn(5000);
    });



// fadeIn() methods is used to fade in a hidden elements

// $(selector).fadeIn(speed, callback);

// speed parameter is used to specifics the duration of the useEffect.




// fadeOut() methods is used to fade out a visible element

// $(selector).fadeOut(speed , callback);

    $("#butOUT").click(function (){
        $(".box1").fadeOut();
        $(".box2").fadeOut("slow");
        $(".box3").fadeOut(3000);
        $(".box4").fadeOut(2000);
    })

// fadeToggle() methods is used to toggle between fade in and fade out.

// $(selector).fadeToggle(speed , callback);

    $("#butToggle").click(function (){
        $(".box1").fadeToggle();
        $(".box2").fadeToggle("slow");
        $(".box3").fadeToggle(3000);
        $(".box4").fadeToggle(2000);
    });

// fadeTo() methods is used to give opacity for fading element

// $(selector).fadeTo(speed , callback);

    $("#butTo").click(function () {
        $(".box1").fadeTo("slow",0.34);
        $(".box2").fadeTo("slow",0.67);
        $(".box3").fadeTo("slow",0.87);
        $(".box4").fadeTo("slow",0.11);
    })

});