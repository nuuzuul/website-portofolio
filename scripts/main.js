const initNavToggle = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
    document.body.classList.toggle("no-scroll");
  });

  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("nav-active") &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
      document.body.classList.remove("no-scroll");
    }
  });
};
initNavToggle();
