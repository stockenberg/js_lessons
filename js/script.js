console.log(window);



var xy = {
    property: "value",
    myFunc: function(){

    }
};

xy.myFunc();


var Person = function (name) {
    this.firstname = name;
    this.sayMyName = function () {console.log("Mein name ist: " + name)};
};

var Lightbox = function () {
    this.height = "";
    this.width = "";
    this.opacity = "";

    this.open = function () {
        
    };

    this.close = function () {
        
    };
};

lightbox = new Lightbox();


var Marten = new Person("Marten");
Marten.sayMyName();

var Franz = new Person("Franz");
Franz.sayMyName();

var Ronny = new Person("Ronny");
Ronny.sayMyName();

