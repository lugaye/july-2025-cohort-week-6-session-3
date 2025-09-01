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
