let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("rectangles");
    const cities_link = document.getElementsByClassName("cities_link");

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    };

    
    for (i = 0; i < cities_link.length; i++) {
        cities_link[i].className = cities_link[i].className.replace("active_link", "");
    };

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    cities_link[slideIndex - 1].className += " active_link";
}

showSlides(slideIndex);