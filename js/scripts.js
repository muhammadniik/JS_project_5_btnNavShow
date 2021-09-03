const icon = document.querySelector(".icon");
const menu = document.querySelector(".mainMenu");
icon.addEventListener("click", function() {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
    icon.style.src = "images/1.png";

})