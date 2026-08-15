"use strict";

const taskStatuses = document.querySelectorAll(".task-status");

taskStatuses.forEach((status) => {
    status.addEventListener("click", () => {
        if (status.textContent.trim() === "To Do") {
            status.textContent = "In Progress";
        } else if (status.textContent.trim() === "In Progress") {
            status.textContent = "Done";
        } else {
            status.textContent = "To Do";
        }
    });
});
const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});