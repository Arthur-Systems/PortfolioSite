var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 1024) {
        if (scroll > position) {
            var items = {
                "#header": "social",
                "#arrow": "flip",
                "#arrow1": "flip",
                "#arrownav": "flip",
                "#arrownav1": "flip",
                "#NavDrop": "drop",
                "#SocialDrop": "drop",
                ".fa-caret-down": "turn",
            };
            Object.keys(items).forEach(function(key) {
                $(key).removeClass(items[key]);
            });
            $("#head").css(
                "top", -$("#header").height() - $("#logo").height() + "px"
            );
        } else if (scroll < position) {
            $("#head").css("top", "0px");
        } else if (scroll == position) {
            $("#head").css("top", "0px");
        } else if (scroll < body) {
            $("#head").css("top", "0px");
        }
        position = scroll;
    }
});
$(window).scroll(function() {
    var position = $(window).scrollTop();
    var body = $("#body").scrollTop();
    if (position <= 1) {
        $("#head").css("top", "0px");
    }
    if ($(document).scrollTop() >= $("#body").position().top) {
        $("#head").css("background-color", "rgba(0, 0, 0, 0.5)");
    }
    if ($(document).scrollTop() < $("#body").position().top && position <= 1) {
        $("#head").css("background-color", "transparent");
    }
});
$(document).ready(function() {
    $("#border").addClass("animate").removeClass("turn");

    $("#splash").css({
        "background-size": $(window).width() + $(window).height(),
        "padding-bottom": $("#Quote").height(),
    });
    if ($(window).width() > 500) {
        var FA = document.createElement("link");
        FA.href = "https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css";
        FA.rel = "stylesheet";
        FA.crossorigin = "anonymous";
        FA.referrerpolicy = "no-referrer";
        $(document).find("head").append(FA);
    }
});

$(window).resize(function() {
    if ($(window).width() < 1024) {}
    $("#splash").css("background-size", $(window).width() + $(window).height());
});

$("#navtext").click(function() {
    $("#arrownav").toggleClass("flip");
    $("#arrownav1").toggleClass("flip");
});
$("#SocialDrop").click(function() {
    $(".fa-caret-down").toggleClass("turn");
    // $("#SocialDrop").toggleClass("drop");
    $("#SocialDrop.drop ul").css("top", "0px");
    $("#SocialDrop ul").slideToggle(1000);
});