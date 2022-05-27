var slides = document.getElementsByClassName("slide");
var counter = document.getElementById("counter");
var dots;
let currentSlide = 0;
const home = document.getElementById("home");
const commissions = document.getElementById("commissions");
const about = document.getElementById("about");




initialize();

dots = document.getElementsByClassName("dot");
slideShow();


function initialize() {
    let n = slides.length;
    for (let i = 0; i < n; i++) {
        counter.appendChild(newDot())

    }

}
function newDot() {

    let dot = document.createElement("div");
    dot.className = "dot";
    return dot;
}


function slideShow() {
    let n = slides.length;
    for (let i = 0; i < n; i++) {
        slides[i].style.display = "none";
        dots[i].style = "background-color:var(--blackish)";

    }
    slides[currentSlide].style.display = "flex";
    dots[currentSlide].style = "background-color:var(--powder)";

    currentSlide++;
    currentSlide %= n;
    setTimeout(slideShow, 5000);


}

home.onclick = function () {
    this.className = "active";
    commissions.className = "";
    about.className = "";

}

commissions.onclick = function () {
    this.className = "active";
    home.className = "";
    about.className = "";

}
about.onclick = function () {
    this.className = "active";
    commissions.className = "";
    home.className = "";

}

