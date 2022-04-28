
var scroll1 = $(window).scrollTop();
$(window).scroll(function() {
var scroll2 = $(window).scrollTop();
   
    if ($(window).width() > 1024) {
        if (scroll2 > scroll1) {
            // var items = {
            //     "#header": "social",
            //     "#arrow": "flip",
            //     "#arrow1": "flip",
            //     "#arrownav": "flip",
            //     "#arrownav1": "flip",
            //     "#NavDrop": "drop",
            //     "#SocialDrop": "drop",
            //     ".fa-caret-down": "turn",
            // };
            // Object.keys(items).forEach(function(key) {
            //     $(key).removeClass(items[key]);
            // });

            if (scroll2 < scroll1) {
            $("#head").css(
                "top", -$("#header").height() - $("#logo").height() + "px"
            );
            }
        } else if (scroll2 <= scroll1 ) {
            $("#head").css("top", "0px");
        } else if (scroll2 == scroll1) {
            $("#head").css("top", "0px");
        } 
        scroll1 = scroll2;
    }

    if ($(document).scrollTop() > $("#body").offset().top) {
        $("#head").addClass("past") 
        $("#head").removeClass("attop")
        $("#logo").children('img').attr("src", "/src/Images/Public/UCSCLARGE.png");
    }

    if ($(document).scrollTop() < $("#body").offset().top) {
        $("#head").removeClass("past")
        $("#head").addClass("attop")
        $("#logo").children('img').attr("src", "/src/Images/Public/UCSC.png");

    }
    
});

$(document).ready(function() {
    $("#SocialDrop li ul").css(
        "top",
        "-" + $("#SocialDrop li ul").outerHeight() + "px"
    );

    if ($(window).width() > 500) {
        var FA = document.createElement("link");
        FA.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
        FA.rel = "stylesheet";
        FA.crossorigin = "anonymous";
        FA.referrerpolicy = "no-referrer";
        $(document).find("head").append(FA);
    }
});

$(window).on("load ready", function() {
    if ($(window).width() < 1024) {}
    // $("#splash").css("min-height", $(document).height() + "px");
});

$("#navtext").click(function() {
    $("#arrownav").toggleClass("flip");
    $("#arrownav1").toggleClass("flip");
});
$("#SocialDrop").click(function() {
    $(".fa-caret-down").toggleClass("turn");
    $("#SocialDrop").toggleClass("drop");

    // $("#SocialDrop.drop li ul").css("top", "0px");
    // $("#SocialDrop ul").slideToggle(1000);
});