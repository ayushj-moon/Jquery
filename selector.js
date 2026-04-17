$(document).ready(function(){
    $("button").click(function (){
        console.log("you have click on",this)
    })

    // $("*").click() // select all elements
    // $(this).click() // select the current html element
    // $("p.intro") //select all p tag element with class intro
    // $("p:first") //select the first <p> element

    $("ul li:first") //select the first <li> element of the first <ul>


    // Events in Jquery

    // Mouse events = click, dbclick , mouseenter,mouseleave
    
    // $('p').dbclick(function () {
    //     $(this).hide();
    // })

    // $("p").mouseenter(function () {
    //     alert("you entered p1!");
    // })

    // $('#p1').mouseleave(function () {
    //     alert("Bye! you now leave p1");
    // })


    // on() method

    // method attaches one or more event handler for the selected elements

    $('p').on({
        click: function(){
            console.log("you have click the p");
        },
        dblclick: function(){
            console.log("you have double click");
        }
    })

    // this are the ways to get 

    // $("#para").hide(1000 , () => {
    //     console.log("hidden")
    // });

    // $("#para").show(1000 , () => {
    //     console.log("show");
    // })

    $("#but").click(function () {
        $("#para").toggle(1000);
    });

});