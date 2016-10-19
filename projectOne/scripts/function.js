"use strict"

function Person() {
    var firstname = "";
    var lastname = "";
    this.address = "Texas";
    this.setFirstName = function (fname) {
        firstname = fname;
    }
    this.getFirstName = function () {
        return firstname;
    }
    this.setLastName = function (lname) {
        lastname = lname;
    }
    this.getLastName = function () {
        return lastname;
    }
}

var personObj = new Person();
personObj.setFirstName("Rabin");
console.log(personObj.getFirstName());
personObj.setLastName("Shrestha");
console.log(personObj.getLastName());
console.log(personObj.address);


// Sample Test
function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(add(1, 2));

console.log(add(3));

var add3 = (num1 = 0, num2 = 0) => num1 + num2;
console.log(add3(3, 4));
