const sidebarToggleBtn = document.querySelector("#sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector("#toggle-check");
const html = document.querySelector("html");

sidebarToggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("closed");
});

toggle.addEventListener("change", function (e) {
  html.classList.toggle("light");
});

// Showcase
function showCase() {
  setTimeout(function () {
    sidebar.classList.toggle("closed");
  }, 1000);
  setTimeout(function () {
    toggle.checked = false;
    html.classList.toggle("light");
  }, 2000);
  setTimeout(function () {
    sidebar.classList.toggle("closed");
  }, 3000);
}

showCase();
