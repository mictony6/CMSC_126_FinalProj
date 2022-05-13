var slides = document.getElementsByClassName("slide");
let currentSlide = 0;
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



slideShow();