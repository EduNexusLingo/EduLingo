
function changeLanguage(lang) {
    // Actualizar flags activas
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.classList.remove('active');
        if (flag.getAttribute('data-lang') === lang) {
            flag.classList.add('active');
        }
    });

    // Cambiar textos
    const texts = translations[lang];
    if (texts) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                el.innerHTML = texts[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (texts[key]) {
                el.placeholder = texts[key];
            }
        });
    }

    // Guardar preferencia
    localStorage.setItem('selectedLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    changeLanguage(savedLang);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // Sparkles Effect
    const sparklesContainer = document.getElementById('sparkles');
    if (sparklesContainer) {
        for (let i = 0; i < 50; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 5 + 's';
            sparklesContainer.appendChild(sparkle);
        }
    }
});
