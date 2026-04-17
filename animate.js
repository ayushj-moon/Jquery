
// for this the box should be first position:relative then only this will work

$(document).ready(function () {
    $("#butAni").click(function () {
        $(".box1").animate({
            left: '240px'
        }, "slow")
    })

    $("#butAni2").click(function () {
        $(".box2").animate({
            left: "300px",
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, "slow")
    })

    $("#butAni3").click(function () {
        $(".box3").animate({
            left:"250px",
            height: "+=150px",
            width:"+=150px"
        },"slow")
    })

    $("#butAni4").click(function () {
        let div = $(".box4");

        div.animate({height:"500px",opacity:'0.4'},"slow")
        div.animate({width:"300px",opacity:'0.8'},"slow")
        div.animate({height:"100px",opacity:'0.4'},"slow")
        div.animate({width:"100px",opacity:'0.8'},"slow")

    })




});







