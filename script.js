```javascript
// ============================
// Navigation background
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(17, 17, 15, 0.92)";
        navbar.style.backdropFilter = "blur(12px)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
    }

});


// ============================
// Smooth reveal animation
// ============================

const sections = document.querySelectorAll(
    ".intro-content, .feature-content, .menu-item, .story-content, .reservation"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});
```
