(function() {
    console.log('EduNexusLingo Translation System Initializing...');

    window.changeLanguage = function(lang) {
        console.log('Attempting to change language to:', lang);
        
        // 1. Validar que el objeto de traducciones existe
        if (typeof translations === 'undefined') {
            console.error('CRITICAL ERROR: translations.js was not loaded or is empty.');
            return;
        }

        const texts = translations[lang];
        if (!texts) {
            console.error('ERROR: No translations found for language key:', lang);
            return;
        }

        // 2. Actualizar UI de banderas
        document.querySelectorAll('.lang-flag').forEach(flag => {
            flag.classList.remove('active');
            if (flag.getAttribute('data-lang') === lang) {
                flag.classList.add('active');
            }
        });

        // 3. Aplicar traducciones a elementos con data-i18n
        let translatedCount = 0;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key] !== undefined) {
                el.innerHTML = texts[key];
                translatedCount++;
            }
        });

        // 4. Aplicar placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (texts[key] !== undefined) {
                el.placeholder = texts[key];
            }
        });

        // 5. Metadatos del documento
        document.documentElement.lang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        console.log(`Success! Translated ${translatedCount} elements to ${lang}.`);
    };

    // Inicialización al cargar el DOM
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Content Loaded. Checking for saved language...');
        const savedLang = localStorage.getItem('selectedLanguage') || 'es';
        
        // Pequeño retraso para asegurar que translations.js esté totalmente disponible
        setTimeout(() => {
            window.changeLanguage(savedLang);
        }, 100);

        // Menú móvil
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');
        if (menuToggle && mainNav) {
            menuToggle.onclick = () => mainNav.classList.toggle('open');
        }
    });
})();
