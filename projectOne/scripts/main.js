"use strict"

$(document).ready(function () {
    $("#btnCalculate").click(function () {
        var num1 = $("#firstnum").val();
        var num2 = $("#secondnum").val();
        var fun = $("input[name=calculate]:checked").val();

        if (fun != "" && num1 != "" && num2 != "") {
            console.log('Checked');
        }

        if (fun == "add") {
            var result = parseInt(num1) + parseInt(num2);
        } else if (fun == "subtract") {
            var result = parseInt(num1) - parseInt(num2);
        } else if (fun == "multiply") {
            var result = parseInt(num1) * parseInt(num2);
        } else if (fun == "divide") {
            var result = parseInt(num1) / parseInt(num2);
        }

        console.log(result);
    });
});
