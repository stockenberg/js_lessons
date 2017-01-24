var Accordeon = function (acc_id, color) {

    this.textcolor = color;

    this.container = document.getElementById(acc_id);

    this.init = function () {
        // just hide the elements...
        for (var i = 0; i < this.container.children.length; i++){
            container.children[i].children[1].style.display = "none";
            container.children[i].children[1].style.color = this.textcolor;
        }
    }

    this.container.onclick = function (e) {
        // just hide the elements...
        for (var i = 0; i < this.children.length; i++){
            this.children[i].children[1].style.display = "none";
        }
        // Get the Target of my Click Event to see what element was clicked
        if(e.target.nodeName == "H2"){
            // go to clicked parent, see 2nd child and show it
            e.target.parentNode.children[1].style.display = "block";
        }
    }

};


document.getElementById("accordeon").onclick = function ( event ){
    console.log(event);
}

/*
var myAcc = new Accordeon("accordeon");
myAcc.textcolor = "blue";
myAcc.init();
*/