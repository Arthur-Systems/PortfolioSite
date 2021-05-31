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

function scroll() {
    window.scrollTo(0, 20);
}

var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        document.getElementById("head").style.top = "-150px";
    } else {
        document.getElementById("head").style.top = "0px";
    }
    position = scroll;
});


function openSpot() {
    var x = document.getElementById("Spotify");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function closeSpot() {
    document.getElementById("Spotify").style.width = "0";
}

function arrowmove() {
    var x = document.getElementById("Arrows");
    x.style.transform;
}

function showsocial() {
    var x = document.getElementById("social");
    if (x.style.display == "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

function arrowturn() {}