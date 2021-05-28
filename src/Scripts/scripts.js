function openNav() {
    var x = document.getElementById("Spotify");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function closeNav() {
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

function reset() {
    location.reload();
}
addEventListener('resize', function() {
    location.reload();
});

function myFunction() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
}

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