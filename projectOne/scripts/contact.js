"Use Strict"

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

$(document).ready(function () {
    //console.log("here");
    $("#tabs").tabs();
    $("#dob").datepicker();
    $("#submit").click(function () {
        submit();
    });
    $("#resultId").click(function () {
        display();
    });

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#editForm").click(function () {
        editForm();
    });
});


function hasError(id) {

    var parentDiv = $("#" + id).parent().parent('div');
    parentDiv.addClass("has-error");
    parentDiv.find(".error").html("Invalid " + id);
    parentDiv.find(".error").show();
}

function hasNoError(id) {

    var parentDiv = $("#" + id).parent().parent('div');
    parentDiv.removeClass("has-error");
    parentDiv.find(".error").html();
    parentDiv.find(".error").hide();
}

/* Submit Funtion */
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

    var error = 0;
    var regEx = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])*$', 'g');

    if (fname == "" || fname.match(regEx) == null) {
        error++;
        hasError("firstname");
    } else {
        hasNoError("firstname");
    }
    if (lname == "" || lname.match(regEx) == null) {
        error++;
        hasError("lastname");
    } else {
        hasNoError("lastname");
    }
    if (gender == "") {
        error++;
        console.log("error");
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
        personObj.setFirstName(fname);
        personObj.setLastName(lname);
        personObj.setDob(dob);
        personObj.setGender(gender);
        personObj.setCountry(country);
        personObj.setCars(carsArray);

        personArray.push(personObj);

        $('#userInfo')[0].reset();
        $(".alert-danger").hide();
        $(".alert-success").show();

    } else {
        $(".alert-success").hide();
        $(".alert-danger").show();
    }

} //end of submit

function editForm() {

    var personObjNew = new Person();

    var pos = $("#dialogID").val();
    var newFname = $("#dialogFirstname").val();
    var newlname = $("#dialogLastname").val();

    var error = 0;
    var regExNew = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])*$', 'g');

    if (newFname == "" || newFname.match(regExNew) == null) {
        error++;

    } else {

    }
    if (newlname == "" || newlname.match(regExNew) == null) {
        error++;

    } else {

    }
    if (error == 0) {

        personObjNew.setFirstName(newFname);
        personObjNew.setLastName(newlname);

        personArray[pos] = personObjNew;
        $("#dialog").dialog("close");
        display();
        /*personObj.setDob(dob);
        personObj.setGender(gender);
        personObj.setCountry(country);
        personObj.setCars(carsArray);

        personArray.push(personObj);

        $('#userInfo')[0].reset();
        $(".alert-danger").hide();
        $(".alert-success").show();*/

    } else {
        $(".alert-success").hide();
        $(".alert-danger").show();
    }
}
// Output Format
function generateTable(sample) {

    var template = "";
    var i = 0;

    template += "<div id='accordion'>";
    sample.forEach(function (x) {
        template += "<h3>" + x.getFirstName() + "</h3>";
        template += "<div>";
        template += "First Name : " + x.getFirstName() + "<br>";
        template += "Last Name : " + x.getLastName() + "<br>";
        template += "Country : " + x.getCountry() + "<br>";
        template += "DOB : " + x.getDob() + "<br>";
        template += "Gender : " + x.getGender() + "<br>";
        template += "Cars : " + x.getCars() + "<button type='button' class ='btn btn-primary pull-right editBtn' position='" + i + "'> Edit </button><br>";
        template += "<hr>";
        template += "</div>";

        i++;
    });
    template += "</div>";
    return template;
}
// Display putput
function display() {

    var result = generateTable(personArray);
    $("#resultTab").html(result);
    $("#accordion").accordion({
        collapsible: true,
        active: false,
    });
    $(".editBtn").on("click", function () {

        var pos = $(this).attr("position");

        $("#dialogID").val(pos);
        $("#dialogFirstname").val(personArray[pos].getFirstName());
        $("#dialogLastname").val(personArray[pos].getLastName());

        $("#dialog").dialog("open");
        //console.log(personArray[0].getFirstName());
    });
}
