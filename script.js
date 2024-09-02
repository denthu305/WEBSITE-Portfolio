
let slideIndex = 0; //global variable
showSlides();
let dots = document.getElementsByClassName("dot");


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); //gives you current slide
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides"); //getting images from blog.html
    let dots = document.getElementsByClassName("dot"); //getting element dot from blog.html

    //for loops hide images and dots by default
    for (let i = 0; i < slides.length; i++) 
        { slides[i].style.display = "none"; } //hides images as we increment 
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } //resets index to 1 slides
    
    for (let i = 0; i < dots.length; i++) 
        { dots[i].className = dots[i].className.replace(" active", ""); } //active is for shapes

    slides[slideIndex - 1].style.display = "block"; //displays image
    //slideIndex initializes with 1 while array starts with 0.

    dots[slideIndex - 1].className += " active"; //displays dots

    setTimeout(showSlides, 3000); // Change image every 2 seconds
} 

