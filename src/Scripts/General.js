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
                "#border": "animate",
            };
            Object.keys(items).forEach(function(key) {
                $(key).removeClass(items[key]);
            });
            $("#head").css("top", "-150px");
            //$("#header").removeClass("social");
            // $("#arrow").removeClass("flip");
            // $("#arrow1").removeClass("flip");
            // $("#arrownav").removeClass("flip");
            // $("#arrownav1").removeClass("flip");
            //$("#NavDrop").removeClass("drop");
            //$("#SocialDrop").removeClass("drop");

            setTimeout(function() {
                $("#border").addClass("turn");
            }, 1000);
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
    }
});

$(document).ready(function() {
    $("#border").addClass("animate").removeClass("turn");
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