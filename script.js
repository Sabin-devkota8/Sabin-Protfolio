
/* =========================================
   PROJECT MODAL
========================================= */

function openProject(title, type, description, image, technologies) {

   console.log("Explore Project Clicked:", title);

    const modal = document.getElementById("projectModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalType = document.getElementById("modalType");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
    const modalTech = document.getElementById("modalTech");

    if (!modal) return;

    modalTitle.textContent = title;
    modalType.textContent = type;
    modalDescription.textContent = description;

    modalImage.onerror = function () {
        this.onerror = null;
        this.src = "https://placehold.co/1200x700?text=Project+Image+Not+Found";
    };

    modalImage.src = image;
    modalImage.alt = title;

    modalTech.innerHTML = "";

    technologies.forEach(function (tech) {
        const span = document.createElement("span");
        span.textContent = tech;
        modalTech.appendChild(span);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeProject() {

    const modal = document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.remove("active");
    document.body.style.overflow = "";
}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

document.addEventListener("click", function (event) {

    const modal = document.getElementById("projectModal");

    if (modal && event.target === modal) {
        closeProject();
    }

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeProject();
    }

});


/* =========================================
   REVEAL ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(".reveal");

    // Fallback if IntersectionObserver is unavailable
    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

});

  // Close menu using Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");
            document.body.classList.remove("menu-open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");

        }

    });

});
