/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


/* Close menu when link clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   CURSOR GLOW
========================= */

const glow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   PROJECT IMAGE PARALLAX
   Very subtle effect
========================= */

const projectImages =
    document.querySelectorAll(".project-image img");

window.addEventListener("scroll", () => {

    projectImages.forEach(image => {

        const rect =
            image.parentElement.getBoundingClientRect();

        const center =
            window.innerHeight / 2;

        const distance =
            (rect.top + rect.height / 2) - center;

        const movement =
            Math.max(-8, Math.min(8, distance * -0.015));

        image.style.transform =
            `translateY(${movement}px) scale(1.02)`;

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

function openProject(title, type, description, image, technologies) {

    const modal = document.getElementById("projectModal");

    const modalTitle = document.getElementById("modalTitle");

    const modalType = document.getElementById("modalType");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalImage =
        document.getElementById("modalImage");

    const modalTech =
        document.getElementById("modalTech");


    modalTitle.textContent = title;

    modalType.textContent = type;

    modalDescription.textContent = description;

    modalImage.src = image;

    modalTech.innerHTML = "";


    technologies.forEach(function (tech) {

        const span = document.createElement("span");

        span.textContent = tech;

        modalTech.appendChild(span);

    });


    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* CLOSE MODAL */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* CLICK OUTSIDE */

document.addEventListener("click", function (event) {

    const modal =
        document.getElementById("projectModal");

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