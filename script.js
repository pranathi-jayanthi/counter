const count = document.getElementById("box")
const bleft = document.getElementById("lb");
bleft.addEventListener("click", function() {
    box.textContent = parseInt(box.textContent) - 1;
}); 
const bright = document.getElementById("rb");
bright.addEventListener("click", function() {
    box.textContent = parseInt(box.textContent) + 1;
}); 