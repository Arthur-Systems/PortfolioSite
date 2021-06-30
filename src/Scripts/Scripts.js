function closeSpot() {
    document.getElementById("Spotify").style.width = "0";
}

function arrowmove() {
    var x = document.getElementById("Arrows");
    x.style.transform;
}


function arrowturn() {}

function openSpot() {
    var x = document.getElementById("Spotify");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function social() {

    var x = document.getElementById("header");
    if (x.classList.contains("social")) {
        x.classList.remove("social");
    } else {
        x.classList.add("social");
    }

}


function Drop() {
    var x = document.getElementById("NavDrop");
    if (x.classList.contains("drop")) {
        x.classList.remove("drop");
    } else {
        x.classList.add("drop");
    }
}

function Socialdrop() {
    var x = document.getElementById("SocialDrop");
    if (x.classList.contains("drop")) {
        x.classList.remove("drop");
    } else {
        x.classList.add("drop");
    }
}

function Flip() {
    var x = document.getElementById("arrow");
    var y = document.getElementById("arrow1");

    if (x.classList.contains("flip")) {
        x.classList.remove("flip");
    } else {
        x.classList.add("flip");
    }
    if (y.classList.contains("flip")) {
        y.classList.remove("flip");
    } else {
        y.classList.add("flip");
    }
}

function NavFlip() {
    var x = document.getElementById("arrownav");
    var y = document.getElementById("arrownav1");
    if (x.classList.contains("flip")) {
        x.classList.remove("flip");
    } else {
        x.classList.add("flip");
    }

    if (y.classList.contains("flip")) {
        y.classList.remove("flip");
    } else {
        y.classList.add("flip");
    }
}