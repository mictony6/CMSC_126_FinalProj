var slides = document.getElementsByClassName("slide");
let currentSlide = 0;
const home = document.getElementById("home");
const commissions = document.getElementById("commissions");
const about = document.getElementById("about");


slideShow();


function slideShow() {
    let n = slides.length;
    for (let i = 0; i < n; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
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



