
var login = document.getElementById("login");
var overlay = document.getElementsByClassName("overlay")[0];
var popup = document.getElementsByClassName("popup")[0];

// JS pure way
console.dir(login);
login.onclick = function () {
    //alert("huhu");
    overlay.style.display = "block";
    popup.style.display = "block";
}


overlay.onclick = function () {
    console.log(this);
    overlay.style.display = "none";
    popup.style.display = "none";
}

// Attribute Way
function openOverlay() {
    if(overlay.style.display == "none"){
        overlay.style.display = "block";
        popup.style.display = "block";
    }
}

function closeOverlay() {
    if(overlay.style.display == "block"){
        overlay.style.display = "none";
        popup.style.display = "none";
    }
}