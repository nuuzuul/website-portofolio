// Toggle & responsive navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const overlay = document.querySelector(".nav-overlay");

  const toggleMenu = () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
    overlay.classList.toggle("active");

    if (nav.classList.contains("nav-active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
};
navSlide();

// Clear form after send message
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
