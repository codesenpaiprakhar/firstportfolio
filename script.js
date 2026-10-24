const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(hover: hover)").matches) {
    glow.style.opacity = "1";
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("pointerleave", () => button.style.transform = "");
});

document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(hover: hover)").matches) {
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
