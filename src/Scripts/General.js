
var TopOfPage = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
   
    if ($(window).width() > 1024) {
        if (scroll > TopOfPage) {
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

            if (scroll < TopOfPage) {
            $("#head").css(
                "top", -$("#header").height() - $("#logo").height() + "px"
            );
            }
        } else if (scroll <= TopOfPage ) {
            $("#head").css("top", "0px");
        } else if (scroll == TopOfPage) {
            $("#head").css("top", "0px");
        } 
        TopOfPage = scroll;
    }

    if ($(document).scrollTop() > $("#body").offset().top) {
        $("#head").addClass("past") 
        $("#head").removeClass("attop")
    }

    if ($(document).scrollTop() < $("#body").offset().top) {
        $("#head").removeClass("past")
        $("#head").addClass("attop")
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