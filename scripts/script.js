//2. DOM property => assign a function to an element's event property

document.getElementById("myInput").oninput = function() {
    console.log("Input changed to: " + this.value);
}

//3. addEventListener => attach an event handler to an element without overwriting existing handlers
let txtArea = document.getElementById("myTextArea");
txtArea.addEventListener("input", function() {
    console.log("Text area content: " + this.value);
});

txtArea.addEventListener("focus", function() {
    console.log("Text area focused");
});

txtArea.addEventListener("blur", function() {
    console.log("Text area lost focus");
});

txtArea.addEventListener("copy", function() {
    console.log("Text copied from text area");
});

txtArea.addEventListener("paste", function() {
    console.log("Text pasted into text area");
});

txtArea.addEventListener("keydown", function(event) {
    console.log("Key down: " + event.key);
});

txtArea.addEventListener("keyup", function(event) {
    console.log("Key up: " + event.key);
});

//toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark");   
}

//carousel
let images = [
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-4.jpg",
    "images/image-5.jpg",
    "images/image-6.jpg",
    "images/image-1.jpg"
];

let currentIndex = 0; 

function showImage() {
    document.getElementById("carouselImage").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

setInterval(nextImage, 3000); // Change image every 3 seconds