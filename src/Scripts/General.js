var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        document.getElementById("head").style.top = "-150px";
        document.getElementById("header").classList.remove("social");
        document.getElementById("arrow").classList.remove("flip");
        document.getElementById("NavDrop").classList.remove("drop");

    } else if (document.documentElement.scrollTop < 0) {
        document.getElementById("head").style.top = "0px";

    } else {

        document.getElementById("head").style.top = "0px";
    }
    position = scroll;
});

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (isChrome) {

}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    console.log("Oh No! Mobile device! Sound the Alarms!!!");
    alert("It looks like you are using a mobile device. I have NOT optimized this site for mobile usage. Rest assured, mobile optimization is one of my top priorities. For now, please use a desktop computer to view this site! ");


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