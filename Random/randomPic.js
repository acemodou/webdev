var iconImg;
var image = ["CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO"];
var descreption = ["Common Programming Error", "Error-Prevention Tip", "Good Programming Practice", "Look-and-Feel Observation", "Performance Tip", "Portability Tip", "Software Engineering Observation"];


// every time
// a user clicks on the image
// pick a random image and corresponding description then modify
// the img element in the document's body 

function pickImage() {

    var index = Math.floor(Math.random() * 7);
    iconImg.setAttribute("src", image[index] + ".png");
    iconImg.setAttribute("alt", descreption[index]);
}

function start() {
    iconImg = document.getElementById("myImg");
    iconImg.addEventListener("click", pickImage, false);

}
window.addEventListener("load", start, false);