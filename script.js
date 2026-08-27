const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});
function openFindClass(event) {
    event.preventDefault();
    window.location.href = "find-class.html";
}