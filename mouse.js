var suiveur = document.querySelector(".mouse");

function setup() {
  document.addEventListener("mousemove", function (event) {
    suiveur.classList.remove("mouse_hidden");
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    suiveur.style.left = this.mouseX - suiveur.offsetWidth / 2 + "px";
    suiveur.style.top = this.mouseY - suiveur.offsetHeight / 2 + "px";
    document.addEventListener("scroll", function (event) {
      // on verra bien
    });
  });
}
setup();

function Mouse() {
  const navbarSection = document.querySelectorAll(".hover");
  // Quand je hover navh2Elements
  navbarSection.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      suiveur.classList.add("mouse_hover");
    });
    element.addEventListener("mouseout", function () {
      suiveur.classList.remove("mouse_hover");
    });
  });
}
Mouse();

// When cursor enter the site show it
document.addEventListener("mouseenter", () => {
  suiveur.classList.remove("mouse_hidden");
});
// When cursor leave the site hide it
document.addEventListener("mouseleave", () => {
  suiveur.classList.add("mouse_hidden");
});




