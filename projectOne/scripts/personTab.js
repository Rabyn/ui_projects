"use strict"
//set methods are mutators
//get methods are accessor

$(document).ready(function () {
    //$("#submit").click(submit);
    $("#tabs").tabs();
    $("#dob").datepicker();
    $("#submit").click(function () {
        submit();
        $("#dialog").dialog();
        $('#userInfo')[0].reset();
    });

    $("#validate").on("click", function () {
        validate();
    });


    $(".dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $(".dialog.form").dialog({
        modal: true
    });

    $("#openDialog").on("click", function () {
        console.log("inside");
        $(".dialog.form").dialog("open");
        console.log("after");
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

function validate() {
    console.log('validate');
    var error = 0;
    var regEx = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])*$', 'g');

    var carsArray = [];
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

    if (fname == "" || fname.match(regEx) == null) {
        error++;
        console.log("error: " + error);
    } else {

    }
    if (lname == "" || lname.match(regEx) == null) {
        error++;
        console.log("error: " + error);
    } else {

    }
    if (gender == "") {
        error++;
        console.log("error: " + error);
    } else {

    }
    if (country == "") {
        error++;
        console.log("error: " + error);
    } else {

    }
    if (carsArray.length == 0) {
        error++;
        console.log("error: " + error);
    } else {

    }
    if (error == 0) {
        $('#submit').prop("disabled", false);
    } else {
        $('#submit').prop("disabled", true);
        $(".dialog.error").dialog("open");
        $("#errorCount").html("There are " + error + " errors.");
    }


}

function generateTable(sample) {
    var template = "";

    template += "<div id='accordion'>";
    sample.forEach(function (x) {
        template += "<h3>" + x.getFirstName() + "</h3>";
        template += "<div>";
        template += "First Name : " + x.getFirstName() + "<br>";
        template += "Last Name : " + x.getLastName() + "<br>";
        template += "Country : " + x.getCountry() + "<br>";
        template += "DOB : " + x.getDob() + "<br>";
        template += "Gender : " + x.getGender() + "<br>";
        template += "Cars : " + x.getCars() + "<br>";
        template += "<hr>";
        template += "</div>";
    });
    template += "</div>";
    return template;
}

function display() {

    var result = generateTable(personArray);
    $("#resultTab").html(result);
    $("#accordion").accordion({
        collapsible: true,
        active: false,
    });
}
