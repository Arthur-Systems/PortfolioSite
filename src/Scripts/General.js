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
                // document.querySelector(key).classList.remove(items[key]);
            });
            setTimeout(function() {
                $("#border").addClass("turn").removeClass("animate");
            }, 1000);
            $("#head").css("top", "-150px");
        } else if (scroll < position) {
            $("#head").css("top", "0px");
        } else if (scroll == position) {
            $("#head").css("top", "0px");
        }
        position = scroll;
    }
});
$(window).scroll(function() {
    var position = $(window).scrollTop();
    if (position <= 1) {
        $("#head").css("top", "0px");
        $("#border").removeClass("turn");
        setTimeout(function() {
            $("#border").removeClass("turn").addClass("animate");
        }, 1000);
    }
});
$(document).ready(function() {
    $("#border").addClass("animate").removeClass("turn");
});
//find the height of a div
var height = $("#SocialDrop").outerHeight();
$("#SocialDrop").css("top", height);

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

/*$(window).on('resize', function() {
    if ($(window).width() >= 300) {
        document.getElementById("SocialMedia").innerHTML = "Testing"
    }
});
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (isChrome) {
}*/

/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("Oh No! Mobile device! Sound the Alarms!!!");
    alert("It looks like you are using a mobile device. I have NOT optimized this site for mobile usage. Rest assured, mobile optimization is one of my top priorities. For now, please use a desktop computer to view this site! ");
} else {
    // not mobile device
    console.log("not mobile device");
};*/