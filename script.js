// Navbar canvas
const stickyTop = document.querySelector(".sticky-top");
const offCanvas = document.querySelector(".offcanvas");

// ketika offcanvas di buka
offCanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
  document.querySelector(".mynavbar").classList.remove("scroll");
});

// ketika navbar di scorll
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    body.style.overflowX = "hidden";

    document.querySelector(".mynavbar").classList.add("scroll");
  } else {
    document.querySelector(".mynavbar").classList.remove("scroll");
  }
});
