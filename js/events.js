
document.body.onclick = function (e) {
    console.log(e);
    if(e.target.classList.contains("toggle")){
        if(e.target.nextElementSibling.classList.contains("visible")){
            e.target.nextElementSibling.className = "none";
        }else{
            e.target.nextElementSibling.className = "visible";
        }
    }
}