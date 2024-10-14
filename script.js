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

const text = ". . . click me   "; // The text to be typed
let index = 0; // Initialize index

function type() {
    const typingElement = document.querySelector("#typing-text");
    
    // Check if the index is less than the text length
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index); // Append the next character
        index++; // Increment the index
        setTimeout(type, 100); // Adjust speed here
    } else {
        // Once the text is fully typed, wait a bit before restarting
        setTimeout(() => {
            typingElement.innerHTML = ""; // Clear the text
            index = 0; // Reset index
            type(); // Restart typing effect
        }, 1000); // Adjust delay before restart (in milliseconds)
    }
}

// Start both effects when the page loads
window.onload = function() {
    type(); // Start typing effect
    showSlides(); // Start slideshow
};

window.addEventListener('load', function() {
    document.body.classList.add('fade-in');
  });


