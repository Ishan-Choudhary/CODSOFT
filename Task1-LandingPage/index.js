let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.getElementsByClassName("review_card");
    
    if (index >= slides.length) {
        slideIndex = 0;
    }
    
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
});
