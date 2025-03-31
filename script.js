// Effet de survol des liens de navigation
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
    });
});
