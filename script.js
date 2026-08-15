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