/**
 * Created by workstation on 23.01.17.
 */


var Slider = function(container_id) {

    this.slideContainer = document.getElementById(container_id);
    this.nextButton = function (id) {
        var next = document.getElementById(id);
        var container = this.slideContainer;
        next.onclick = function () {
            for(var i = 0; i < container.children.length; i++){
                if(container.children[i].className === "active"){
                    container.children[i].className = "";
                    if(typeof container.children[i + 1] !== "undefined"){
                        container.children[i + 1].className = "active";
                        var title = container.children[i + 1].children[0].title;
                        container.children[i + 1].children[1].innerHTML = title;
                    }else{
                        i = 0;
                        container.children[i].className = "active";
                        var title = container.children[i].children[0].title;
                        container.children[i].children[1].innerHTML = title;
                    }
                    break;
                }
            }
        };
    };

    this.prevButton = function (id) {
        var prev = document.getElementById(id);
        var container = this.slideContainer;
        prev.onclick = function () {
            for(var i = 0; i < container.children.length; i++){
                if(container.children[i].className === "active"){
                    container.children[i].className = "";
                    if(typeof container.children[i - 1] !== "undefined"){
                        container.children[i - 1].className = "active";
                        var title = container.children[i - 1].children[0].title;
                        container.children[i - 1].children[1].innerHTML = title;
                    }else{
                        i = container.children.length - 1;
                        container.children[i].className = "active";
                        var title = container.children[i].children[0].title;
                        container.children[i].children[1].innerHTML = title;
                    }
                    break;
                }
            }
        };
    };

};


var mySlider = new Slider("slider");
mySlider.nextButton("next");
mySlider.prevButton("prev");


console.dir(mySlider);
