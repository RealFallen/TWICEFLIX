document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = {
        "Home": document.getElementById("home-section"),
        "Discography": document.getElementById("discography-section"),
        "Fan Cams": document.getElementById("fan-cams-section")
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const selected = link.textContent.trim();

            // Quitar .active de todos los enlaces
            navLinks.forEach(l => l.classList.remove("active"));
            // Agregar .active al enlace actual
            link.classList.add("active");

            // Ocultar y limpiar animaciones
            Object.values(sections).forEach(sec => {
                sec.style.display = "none";
                sec.classList.remove("section-animated");
            });

            // Mostrar sección con animación
            const section = sections[selected];
            if (section) {
                section.style.display = "block";
                void section.offsetWidth;
                section.classList.add("section-animated");
            }
        });
    });
});