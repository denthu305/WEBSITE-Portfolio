let slideIndex = 0; // global variable for slides

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // reset to the first slide
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and add active class to the current dot
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 

    // Change image every 3 seconds
    setTimeout(showSlides, 3000); 
}

const text = "WELCOME TO MY WEB PORTFOLIO";
let index = 0;

function type() {
    const typingElement = document.querySelector("#typing-text strong");
    
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed here
    }
}

// Start both effects when the page loads
window.onload = function() {
    type(); // Start typing effect
    showSlides(); // Start slideshow
};


