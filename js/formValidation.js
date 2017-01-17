/**
 * Created by workstation on 17.01.17.
 */

var form = document.getElementById("orderForm");

var firstname = form[0];
var agb = form[1];
var pizzas = form[2];
var message = form[3];
var submit = form[4];
var string = "test";

var regexpString = /[a-zA-ZÄäÖöÜüß]/;

console.dir(firstname);
console.dir(form);

form.onsubmit = function(e) {
  console.dir(e);
  e.preventDefault();

    if(typeof firstname.value === "string" && firstname.value !== ""){

        var checkedResult = firstname.value.match(regexpString);

        console.dir(checkedResult);

        if (checkedResult !== null){
            console.log("deine eingabe ist korrekt");
        }else{
            console.log ("du hast shice gebaut... idiot");
        }

    }else{
        console.log ("du hast shice gebaut... idiot");
    }

};
