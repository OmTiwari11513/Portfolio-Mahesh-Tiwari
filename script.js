// Scroll Animation for Fade-in Sections
const sections = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Accordion Effect
const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
