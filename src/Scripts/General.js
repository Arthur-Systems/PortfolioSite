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
            };
            Object.keys(items).forEach(function(key) {
                $(key).removeClass(items[key]);
            });
            $("#border").removeClass("animate");
            setTimeout(function() {
                $("#border").addClass("turn");
            }, 1000);
            $("#head").css("top", "-150px");
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
    if ($(document).scrollTop() < $("#body").position().top || position <= 1) {
        $("#head").css("background-color", "transparent");
    }
});
$(document).ready(function() {
    $("#border").addClass("animate").removeClass("turn");
    $("#ulheight").css("top", -$("#ulheight").outerHeight());
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
    if ($(window).width() < 1024) {
        $("#ulheight").css("top", -$("#ulheight").outerHeight());
    }
    $("#splash").css("background-size", $(window).width() + $(window).height());
});

$("#navtext").click(function() {
    $("#arrownav").toggleClass("flip");
    $("#arrownav1").toggleClass("flip");
});
$("#navtext1").click(function() {
    $("#arrownav").toggleClass("flip");
    $("#arrownav1").toggleClass("flip");
});
$("#SocialMedia").click(function() {
    $("#header").toggleClass("social");
    $("#arrow").toggleClass("flip");
    $("#arrow1").toggleClass("flip");
});
$("#SocialMedia1").click(function() {
    $("#SocialDrop").toggleClass("drop");
    $("#arrow").toggleClass("flip");
    $("#arrow1").toggleClass("flip");
});