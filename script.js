document.addEventListener("DOMContentLoaded", function() {
    const herbSections = document.querySelectorAll('.herb');
    const body = document.body;

    let currentBackground = 1;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 400 && scrollPosition <= 1200) {
            if (currentBackground !== 2) {
                body.classList.remove('bg1', 'bg3');
                body.classList.add('bg2');
                currentBackground = 2;
            }
        } else if (scrollPosition > 1200) {
            if (currentBackground !== 3) {
                body.classList.remove('bg1', 'bg2');
                body.classList.add('bg3');
                currentBackground = 3;
            }
        } else {
            if (currentBackground !== 1) {
                body.classList.remove('bg2', 'bg3');
                body.classList.add('bg1');
                currentBackground = 1;
            }
        }
    });

    herbSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = "scale(1.05)";
            section.style.transition = "transform 0.3s ease";
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = "scale(1)";
        });
    });
});
