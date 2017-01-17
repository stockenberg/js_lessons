
document.body.onclick = function (e) {
    console.log(e);
    if(e.target.classList.contains("toggle")){
        if(e.target.nextElementSibling.classList.contains("none")){
            e.target.nextElementSibling.className = "visible";
        }else{
            e.target.nextElementSibling.className = "none";
        }
    }
}