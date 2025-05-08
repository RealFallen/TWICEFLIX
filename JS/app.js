let navLinks = document.querySelectorAll(".nav-links a");

let homeSection = navLinks[0]
let discographySection = navLinks[1]
let fanCamsSection = navLinks[2]
// onClick de homeSection
homeSection.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Hiciste click en: " + homeSection.textContent)
});
// onClick de discographySection
discographySection.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Hiciste click en: " + discographySection.textContent)
});
// onClick de fanCamsSection
fanCamsSection.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Hiciste click en: " + fanCamsSection.textContent)
});