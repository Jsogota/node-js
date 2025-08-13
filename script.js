// Adjust logo size on scroll
window.addEventListener("scroll", function() {
    const logo = document.getElementById("brandLogo");
    if (window.scrollY > 50) {
        logo.style.height = "40px";
    } else {
        logo.style.height = "55px";
    }
});
