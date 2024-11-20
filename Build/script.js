document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".popup");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Ajoute la classe visible
            }
        });
    });

    categories.forEach(category => observer.observe(category));
});