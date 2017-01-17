
// var Users = new Array("admin", "user");
var Users = [
    "admin",
    "user",
    "manager",
    "unregistered",
    "guest",
    ["hallo", "asd"]
];

/* Beispiel für Mehrdimensionales Array */
var Register = [
    ["Firstname", "lastname", ".."],
    ["Paypal", "Amount", "taxes"],
    ["AGB", "Impressum"]
];
console.log(Register);

// Push example
console.log(Users);
console.log("users push");
Users.push("Unknown");
console.log(Users);

// Pop Example
var lastValue = Users.pop();
console.log(lastValue);
console.log("users pop'ed");
console.log(Users);

// Overwrite
Users[1] = "DAU";
console.log(Users);




