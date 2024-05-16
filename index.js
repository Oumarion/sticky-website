const Navbar = document.querySelector("#navBar");
let topEnd = Navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= topEnd) {
    Navbar.classList.add("sticky");
  } else {
    Navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNavbar);
