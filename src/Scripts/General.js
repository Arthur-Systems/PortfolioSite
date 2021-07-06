var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if ($(window).width() > 1024) {
        if (scroll > position) {
            document.getElementById("head").style.top = "-150px";
            document.getElementById("header").classList.remove("social");
            document.getElementById("arrow").classList.remove("flip");
            document.getElementById("arrow1").classList.remove("flip");
            document.getElementById("NavDrop").classList.remove("drop");
            document.getElementById("arrownav").classList.remove("flip");
            document.getElementById("arrownav1").classList.remove("flip");
            document.getElementById("SocialDrop").classList.remove("drop");
            document.getElementById("border").classList.remove("animate");
            document.getElementById("border").classList.add("turn");
        } else if (scroll < position) {
            document.getElementById("head").style.top = "0px";
        } else if (scroll == position) {
            document.getElementById("head").style.top = "0px";
        }
        position = scroll;
    }
});
$(window).scroll(function() {
    var position = $(window).scrollTop();
    if (position <= 1) {
        document.getElementById("head").style.top = "0px";
        document.getElementById("border").classList.add("animate");
        document.getElementById("border").classList.remove("turn");
    }
});

$(document).ready(function() {
    document.getElementById("border").classList.toggle("animate");
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