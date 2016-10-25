"use strict"
//set methods are mutators
//get methods are accessor

$(document).ready(function () {
    //$("#submit").click(submit);
    $("#tabs").tabs();
    $("#dob").datepicker();
    $("#submit").click(function () {
        submit();
    });

    $("#display").click(function () {
        display();
    });

});

function Person() {
    var firstName = "";
    var lastName = "";
    var address = "";
    var dob = "";
    var gender = "";
    var country = "";
    var cars = [];

    // Sets the Values
    this.setFirstName = function (fname) {
        firstName = fname;
    }
    this.setLastName = function (lname) {
        lastName = lname;
    }
    this.setDob = function (dateOfBirth) {
        dob = dateOfBirth;
    }
    this.setGender = function (gen) {
        gender = gen;
    }
    this.setCountry = function (count) {
        country = count;
    }
    this.setCars = function (car) {
        cars = car;
    }

    // Get the Values
    this.getFirstName = function () {
        return firstName;
    }
    this.getLastName = function () {
        return lastName;
    }
    this.getDob = function () {
        return dob;
    }
    this.getGender = function () {
        return gender;
    }
    this.getCountry = function () {
        return country;
    }
    this.getCars = function () {
        return cars;
    }
}

var personArray = [];

function submit() {

    var carsArray = [];
    var personObj = new Person();
    var fname = $("#firstname").val();
    var lname = $("#lastname").val();
    var gender = $("#gender:checked").val();
    var country = $("#country").val();
    var dob = $("#dob").val();
    var cars = document.getElementsByName("car");
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].checked) {
            carsArray.push(cars[i].value);
        }
    }

    personObj.setFirstName(fname);
    personObj.setLastName(lname);
    personObj.setDob(dob);
    personObj.setGender(gender);
    personObj.setCountry(country);
    personObj.setCars(carsArray);

    personArray.push(personObj);
}

function generateTable(sample) {
    var template = "";
    var i = 1;
    sample.forEach(function (x) {
        template += "Item " + i + "<br>";
        template += "First Name : " + x.getFirstName() + "<br>";
        template += "Last Name : " + x.getLastName() + "<br>";
        template += "Country : " + x.getCountry() + "<br>";
        template += "DOB : " + x.getDob() + "<br>";
        template += "Gender : " + x.getGender() + "<br>";
        template += "Cars : " + x.getCars() + "<br>";
        template += "<hr>";

        i++;

    });
    return template;
}

function display() {
    var result = generateTable(personArray);
    $("#output").html(result);
}
