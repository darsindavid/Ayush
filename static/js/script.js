document.querySelector('.hero-button').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});
