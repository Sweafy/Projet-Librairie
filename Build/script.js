document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".popup");
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    categories.forEach(category => observer.observe(category));

    // Toggle menu mobile
    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
