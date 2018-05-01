// var img;
// var pictures = ["Mecca", "medina", "senegal", "gambia"];
// var description = ["welcome to mecca", "welcome to medina", "welcome to senegal", "welcome to gambia"];


function changeImage(name, text) {

    var theImage = document.getElementById("image");
    theImage.src = name;
    theImage.alt = text;

}


var $ = function(id) {
    return document.getElementById(id).value;
}

function validateForm() {
    var x = $('pname');
    var y = $('aline1');
    var z = $('aline2');

    var pat = /^[a-zA-Z0-9 \s]+$/;

    if (pat.test(x) == false) {
        alert("Place name should be alpha numeric");
        return false;
    } else if ((pat.test(y) == false) || (pat.test(z) == false)) {
        alert("Address should be alphanumeric");
        return false;
    } else {
        return true;
    }
}