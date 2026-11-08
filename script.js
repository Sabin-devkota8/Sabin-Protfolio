
/* =========================================
   PROJECT MODAL
========================================= */

function openProject(title, type, description, image, technologies) {

    const modal = document.getElementById("projectModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalType = document.getElementById("modalType");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
    const modalTech = document.getElementById("modalTech");

    // Set project details
    modalTitle.textContent = title;
    modalType.textContent = type;
    modalDescription.textContent = description;

    // Set image path
    modalImage.src = image;
    modalImage.alt = title;

    // Handle image loading error
    modalImage.onerror = function () {
        this.src = "https://placehold.co/1200x700?text=Project+Image+Not+Found";
    };

    // Add technologies
    modalTech.innerHTML = "";

    technologies.forEach(function (tech) {
        const span = document.createElement("span");
        span.textContent = tech;
        modalTech.appendChild(span);
    });

    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* CLOSE MODAL */

function closeProject() {

    const modal = document.getElementById("projectModal");

    modal.classList.remove("active");
    document.body.style.overflow = "";

}


/* CLICK OUTSIDE */

document.addEventListener("click", function (event) {

    const modal = document.getElementById("projectModal");

    if (event.target === modal) {
        closeProject();
    }

});


/* ESC KEY */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProject();
    }

});
