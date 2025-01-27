document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Verificar se a seção do herói existe
    if (heroSection) {
        heroSection.style.opacity = 0;
        heroSection.style.transform = 'translateY(50px)';
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1s, transform 1s';
            heroSection.style.opacity = 1;
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }

    // Verificar se os itens do portfólio existem
    if (portfolioItems.length > 0) {
        portfolioItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s, transform 0.5s';
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
});
