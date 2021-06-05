//Refresh on screenresize
jQuery(function($) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $(window).resize(function() {
        if (windowWidth != $(window).width() || windowHeight != $(window).height()) {
            location.reload();
            return;
        }
    });
});
var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        document.getElementById("head").style.top = "-150px";

    } else if (document.documentElement.scrollTop <= 0) {
        document.getElementById("head").style.top = "-150px";
    } else {

        document.getElementById("head").style.top = "0px";
    }
    position = scroll;
});


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    console.log("mobile device");
} else {
    // false for not mobile device
    console.log("not mobile device");
}

function closeSpot() {
    document.getElementById("Spotify").style.width = "0";
}

function arrowmove() {
    var x = document.getElementById("Arrows");
    x.style.transform;
}


function arrowturn() {}