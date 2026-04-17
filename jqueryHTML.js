$(document).ready(function () {

    //this is for get property from html 

    // $("#b1").click(function () {
    //     alert("Text :"+ $("#para").text()); // selector.text()
    // })

    // $("#b2").click(function () {
    //     alert("html :" + $("#para").html());  // selector.html()
    // })

    // $("#b3").click(function (){
    //     alert("Value :" + $("#fname").val()); //selector.val()
    // })

    // $("#b4").click(function () {
    //     alert("link :" + $("a").attr("href")); //selection.attr() -> this is used to fetch the attributes of elements
    // })








    // set property for html

    $("#b1").click(function () {
        $("#para").text("this is the change text by clicking the button");
    });

    $("#b2").click(function() {
        $("#para2").html("this is the change html by clicking the button");
    });

    $("#fname").val("Ayush ...");

    $("a").attr("href","ayushbhai.com");

    $("#b4").click(function () {
        alert("the link is change : "+$("a").attr("href"));
    })





    // add elements of html

    // append() - inserts content at the end of selected elements

    // $(".btn1").click(function (){
    //     $(".para1").append("<i>this is attention to detail that the paragraph is change</i>");
    // })

    // $(".btn2").click(function () {
    //     $("ol").append("<li>this is attention to details that it is add the list element by clicking button</li>")
    // })


    // prepand() - inserts the content at the starting elements

    $(".btn1").click(function () {
        $(".para1").prepend("<i>this is attention to detail that the paragraph is change</i>")
    })    

    $(".btn2").click(function () {
        $("ol").prepend("<li>this is attention to detail that the paragraph is change</li>")
    })  

    // after() : insert the content after the element
    // before() : insert the content before the element


    $(".bnt1").click(function () {
        $("img").before("<b>This is me for before adding the text in the image</b>");
    });

    $(".bnt2").click(function () {
        $("img").after("<i>this is me for after adding the text in image</i>");
    })


    // remove() - Removes the selected elements
    // empty() - Removes the child of elements

    $(".button1").click(function () {
        $(".container").remove();
    })

    $(".button2").click(function () {
        $(".container").empty();
    });

    
});