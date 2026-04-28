const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const navLinks = document.querySelectorAll(".nav-link");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("hidden") === false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const sections = document.querySelectorAll("main section[id]");

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 140;
  let activeId = "home";

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("bg-zinc-900", isActive);
    link.classList.toggle("text-zinc-100", isActive);
    link.classList.toggle("text-zinc-400", !isActive);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
window.addEventListener("load", setActiveLink);
