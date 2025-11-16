document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const themeSwitcher = document.getElementById("themeSwitcher");

  if (themeSwitcher) {
    themeSwitcher.addEventListener("change", () => {
      const theme = themeSwitcher.value;

      document.body.classList.remove("light-mode", "dark-mode", "sunset-mode");
document.body.classList.add(`${theme}-mode`);

      const header = document.querySelector("header");
      const footer = document.querySelector("footer");

      if (header) header.className = `${theme}-mode`;
      if (footer) footer.className = `${theme}-mode`;

      document.querySelectorAll("nav a").forEach(link => {
        link.className = `${theme}-mode`;
      });

      document.querySelectorAll("section").forEach(section => {
        section.className = `${theme}-mode`;
      });

      document.querySelectorAll(".project-card").forEach(card => {
        card.className = `${theme}-mode`;
      });

      document.querySelectorAll("input, textarea").forEach(field => {
        field.className = `${theme}-mode`;
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("themeSwitcher");

  if (themeSwitcher) {
    themeSwitcher.addEventListener("change", () => {
      const theme = themeSwitcher.value;

      // Remove all theme classes
      document.body.classList.remove("light-mode", "dark-mode", "sunset-mode");
      document.body.classList.add(`${theme}-mode`);

      const header = document.querySelector("header");
      const footer = document.querySelector("footer");

      if (header) {
        header.classList.remove("light-mode", "dark-mode", "sunset-mode");
        header.classList.add(`${theme}-mode`);
      }

      if (footer) {
        footer.classList.remove("light-mode", "dark-mode", "sunset-mode");
        footer.classList.add(`${theme}-mode`);
      }
    });
  }
});