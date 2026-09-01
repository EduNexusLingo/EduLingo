/**
 * EduNexusLingo — Main JavaScript
 * Handles: Language detection & switching, Carousel, Chat widget,
 *          Sparkles, Flying certs, Scroll animations, Mobile menu
 */

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */

/**
 * Detect browser language and map to supported languages.
 * Supported: es, en, fr, zh, el, uk, mn, ja
 */
function detectBrowserLanguage() {
  const supported = ['es', 'en', 'fr', 'zh', 'el', 'uk', 'mn', 'ja'];
  const browserLangs = navigator.languages || [navigator.language || 'es'];

  for (const lang of browserLangs) {
    const code = lang.toLowerCase().split('-')[0];
    if (supported.includes(code)) return code;
    // Map variants
    if (code === 'zh') return 'zh';
    if (code === 'uk') return 'uk';
  }
  return 'es'; // default
}

let currentLang = 'es';

function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text === undefined) return;

    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      el.placeholder = text;
    } else if (tag === 'OPTION') {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  });

  // Update active flag
  document.querySelectorAll('.lang-flag').forEach(flag => {
    flag.classList.remove('active');
    if (flag.dataset.lang === lang) flag.classList.add('active');
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Persist
  try { localStorage.setItem('edunexus_lang', lang); } catch(e) {}
}

/* ============================================================
   CAROUSEL
   ============================================================ */
let carouselIndex = 0;
let carouselTimer = null;

function initCarousel() {
  const inner = document.getElementById('carouselInner');
  const controls = document.getElementById('carouselControls');
  if (!inner || !controls) return;

  const items = inner.querySelectorAll('.carousel-item');
  const total = items.length;

  // Build dots
  controls.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    controls.appendChild(dot);
  }

  function goToSlide(idx) {
    carouselIndex = ((idx % total) + total) % total;
    inner.style.transform = `translateX(-${carouselIndex * 100}%)`;
    controls.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === carouselIndex);
    });
  }

  window.prevSlide = () => { clearInterval(carouselTimer); goToSlide(carouselIndex - 1); startAutoPlay(); };
  window.nextSlide = () => { clearInterval(carouselTimer); goToSlide(carouselIndex + 1); startAutoPlay(); };

  function startAutoPlay() {
    carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), 4500);
  }

  goToSlide(0);
  startAutoPlay();
}

/* ============================================================
   CHAT WIDGET
   ============================================================ */
function initChat() {
  const btn  = document.getElementById('chatButton');
  const popup = document.getElementById('chatPopup');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const msgs = document.getElementById('chatMessages');
  if (!btn || !popup) return;

  btn.addEventListener('click', () => {
    popup.classList.toggle('active');
    if (popup.classList.contains('active') && msgs.children.length === 0) {
      addBotMsg(translations[currentLang]?.chat_welcome || '¡Hola! ¿En qué puedo ayudarte?');
    }
  });

  function addBotMsg(text) {
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function addUserMsg(text) {
    const div = document.createElement('div');
    div.className = 'chat-message user';
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function handleSend() {
    const val = input.value.trim();
    if (!val) return;
    addUserMsg(val);
    input.value = '';
    setTimeout(() => {
      const responses = {
        es: '¡Gracias por tu mensaje! Un asesor se pondrá en contacto contigo pronto. También puedes escribirnos por WhatsApp.',
        en: 'Thank you for your message! An advisor will contact you shortly. You can also reach us on WhatsApp.',
        fr: 'Merci pour votre message ! Un conseiller vous contactera bientôt. Vous pouvez aussi nous écrire sur WhatsApp.',
        zh: '感谢您的留言！顾问将很快与您联系。您也可以通过WhatsApp联系我们。',
        el: 'Ευχαριστούμε για το μήνυμά σας! Ένας σύμβουλος θα επικοινωνήσει μαζί σας σύντομα.',
        uk: 'Дякуємо за ваше повідомлення! Консультант зв\'яжеться з вами найближчим часом.',
        mn: 'Мессежийн хариуд баярлалаа! Зөвлөх тантай удахгүй холбоо барина.',
        ja: 'メッセージありがとうございます！アドバイザーがすぐにご連絡いたします。'
      };
      addBotMsg(responses[currentLang] || responses.es);
    }, 800);
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(); });
}

/* ============================================================
   SPARKLES
   ============================================================ */
function createSparkles() {
  const container = document.getElementById('sparkles');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 18 + 's';
    s.style.animationDuration = (12 + Math.random() * 10) + 's';
    s.style.width = s.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(s);
  }
}

/* ============================================================
   FLYING CERTS
   ============================================================ */
function startFlyingCerts() {
  const certs = ['img/Toelf.png', 'img/Ielts.png'];
  let idx = 0;

  function fly() {
    const wrap = document.createElement('div');
    wrap.className = 'flying-certs';
    const img = document.createElement('img');
    img.src = certs[idx];
    img.className = 'flying-cert-img';
    wrap.appendChild(img);
    document.body.appendChild(wrap);

    const startY = Math.random() * window.innerHeight;
    const endY   = Math.random() * window.innerHeight;
    let posX = -160, posY = startY;
    const speedX = 4 + Math.random() * 4;
    const stepY  = (endY - startY) / (window.innerWidth / speedX);

    function animate() {
      posX += speedX;
      posY += stepY;
      wrap.style.left = posX + 'px';
      wrap.style.top  = posY + 'px';
      wrap.style.transform = `rotate(${posX / 12}deg)`;
      if (Math.random() > 0.75) createStar(posX + 55, posY + 25);
      if (posX < window.innerWidth + 160) {
        requestAnimationFrame(animate);
      } else {
        wrap.remove();
        idx = (idx + 1) % certs.length;
        setTimeout(fly, 6000);
      }
    }
    animate();
  }

  function createStar(x, y) {
    const star = document.createElement('div');
    star.className = 'star-trail';
    star.style.left = x + 'px';
    star.style.top  = y + 'px';
    star.style.background = `hsl(${40 + Math.random() * 30}, 90%, 65%)`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 900);
  }

  setTimeout(fly, 3000);
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav    = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.style.padding = '0.6rem 3rem';
    } else {
      header.style.padding = '0.85rem 3rem';
    }
  }, { passive: true });
}

/* ============================================================
   FORM HANDLER
   ============================================================ */
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const original = btn.textContent;
    btn.textContent = '✓ Enviado';
    btn.style.background = 'linear-gradient(135deg, #2d6a1a, #4a9c28)';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Determine language
  let lang = 'es';
  try {
    const saved = localStorage.getItem('edunexus_lang');
    if (saved && translations[saved]) {
      lang = saved;
    } else {
      lang = detectBrowserLanguage();
    }
  } catch(e) {
    lang = detectBrowserLanguage();
  }

  // 2. Apply language
  changeLanguage(lang);

  // 3. Init modules
  initCarousel();
  initChat();
  createSparkles();
  startFlyingCerts();
  initScrollAnimations();
  initMobileMenu();
  initHeaderScroll();
  initForm();
});
