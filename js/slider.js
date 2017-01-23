/**
 * Created by workstation on 23.01.17.
 */


var Slider = function (container_id) {


    this.container = document.getElementById(container_id);


    this.getNext = function (classname) {
        var next = document.getElementsByClassName(classname)[0];
        var container = this.container;

        next.onclick = function () {
            for (var i = 0; i <= container.children.length; i++) {
                // Probaly Bug, what if className is predefined
                if (container.children[i].className === "active") {
                    container.children[i].className = "";
                    if (typeof container.children[i + 1] === "undefined") {
                        i = 0
                        container.children[i].className = "active";
                    } else {
                        container.children[i + 1].className = "active";
                    }
                    break;
                }

            }
        }
    };


    this.getPrevious = function (classname) {

        var prev = document.getElementsByClassName(classname)[0];
        var container = this.container;

        prev.onclick = function () {
            for (var i = 0; i <= container.children.length; i++) {
                // Probaly Bug, what if className is predefined
                if (container.children[i].className === "active") {
                    container.children[i].className = "";
                    if (typeof container.children[i - 1] === "undefined") {
                        i = container.children.length - 1;
                        container.children[i].className = "active";
                    } else {
                        container.children[i - 1].className = "active";

                    }
                    break;
                }

            }
        }
    };


    this.start = function () {
        var images = this.container.children;
        images[0].className = "active";
    }

}


var test = new Slider("slider");
test.getNext("next");
test.getPrevious("prev");
test.start();
