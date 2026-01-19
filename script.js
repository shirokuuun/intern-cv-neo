window.addEventListener("load", function () {
  alert("Welcome to my CV Webpage!");
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", function () {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeToggle.textContent = "Dark Mode";
  }
});

const toggleSkill = document.getElementById("toggleSkill");
const skillSection = document.getElementById("skillSection");

toggleSkill.addEventListener("click", function () {
  skillSection.classList.toggle("hidden");
  if (skillSection.classList.contains("hidden")) {
    toggleSkill.textContent = "Show Skills Section";
  } else {
    toggleSkill.textContent = "Hide Skills Section";
  }
});
