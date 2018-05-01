// var img;
// var pictures = ["Mecca", "medina", "senegal", "gambia"];
// var description = ["welcome to mecca", "welcome to medina", "welcome to senegal", "welcome to gambia"];


function changeImage(name, text) {

    var theImage = document.getElementById("image");
    theImage.src = name;
    theImage.alt = text;

}

function validateForm() {
    var x = document.getElementById('pname').value;
    var y = document.getElementById('aline1').value;
    var z = document.getElementById('aline2').value;

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