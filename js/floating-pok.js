/**
 * floating-pok.js
 * Inyecta un botón flotante con poc.png que enlaza a LingoPOK.
 * Este script se carga desde index.html SIN modificar su contenido original.
 * Se agrega como <script src="js/floating-pok.js"></script> al final del <body>.
 *
 * INSTRUCCIÓN DE INSTALACIÓN (sin tocar el cuerpo del index.html):
 * Agregar la siguiente línea ANTES del </body> en index.html:
 *   <script src="js/floating-pok.js"></script>
 *
 * ALTERNATIVA sin tocar index.html:
 * Usar un servidor con Server-Side Includes o un proxy que inyecte el script.
 * O bien, incluir el script directamente en el servidor web (Apache/Nginx).
 */

(function () {
  'use strict';

  /* ── Estilos del botón flotante ── */
  var css = `
    #pok-float-btn {
      position: fixed;
      bottom: 28px;
      left: 28px;
      z-index: 99999;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 6px 24px rgba(107, 33, 168, 0.45), 0 2px 8px rgba(0,0,0,0.18);
      transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 3px solid #7c3aed;
      animation: pok-pulse 2.8s infinite;
    }
    #pok-float-btn:hover {
      transform: scale(1.13) rotate(-4deg);
      box-shadow: 0 10px 32px rgba(107, 33, 168, 0.60), 0 4px 12px rgba(0,0,0,0.22);
      animation: none;
    }
    #pok-float-btn img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      display: block;
    }
    #pok-float-tooltip {
      position: fixed;
      bottom: 116px;
      left: 28px;
      z-index: 99998;
      background: #7c3aed;
      color: #fff;
      font-family: 'Inter', 'Lato', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.04em;
      padding: 6px 12px;
      border-radius: 20px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.2s ease, transform 0.2s ease;
      box-shadow: 0 2px 10px rgba(107,33,168,0.3);
    }
    #pok-float-tooltip::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 24px;
      border-width: 6px 6px 0;
      border-style: solid;
      border-color: #7c3aed transparent transparent;
    }
    #pok-float-btn:hover + #pok-float-tooltip,
    #pok-float-btn:focus + #pok-float-tooltip {
      opacity: 1;
      transform: translateY(0);
    }
    @keyframes pok-pulse {
      0%   { box-shadow: 0 6px 24px rgba(107,33,168,0.45), 0 0 0 0 rgba(124,58,237,0.4); }
      60%  { box-shadow: 0 6px 24px rgba(107,33,168,0.45), 0 0 0 14px rgba(124,58,237,0); }
      100% { box-shadow: 0 6px 24px rgba(107,33,168,0.45), 0 0 0 0 rgba(124,58,237,0); }
    }
    @media (max-width: 480px) {
      #pok-float-btn {
        width: 62px;
        height: 62px;
        bottom: 18px;
        left: 18px;
      }
      #pok-float-tooltip {
        bottom: 90px;
        left: 18px;
        font-size: 11px;
      }
    }
  `;

  /* ── Inyectar estilos ── */
  var style = document.createElement('style');
  style.id = 'pok-float-styles';
  style.textContent = css;
  document.head.appendChild(style);

  /* ── Crear el botón flotante ── */
  var link = document.createElement('a');
  link.id = 'pok-float-btn';
  link.href = 'https://www.Edunexuslingo.com/LingoPok/index.html';
  link.title = 'Ir a LingoPOK';
  link.setAttribute('aria-label', 'Ir a LingoPOK — Credenciales Digitales');
  link.setAttribute('rel', 'noopener');

  /* Determinar la ruta de poc.png según la ubicación actual */
  var imgSrc = 'img/poc.png';

  var img = document.createElement('img');
  img.src = imgSrc;
  img.alt = 'LingoPOK';
  img.onerror = function () {
    /* Fallback: mostrar texto si la imagen no carga */
    link.style.background = '#7c3aed';
    link.style.color = '#fff';
    link.style.fontSize = '10px';
    link.style.fontWeight = '700';
    link.style.textAlign = 'center';
    link.style.lineHeight = '1.2';
    link.textContent = 'Lingo\nPOK';
  };

  link.appendChild(img);

  /* ── Tooltip ── */
  var tooltip = document.createElement('span');
  tooltip.id = 'pok-float-tooltip';
  tooltip.textContent = '🎓 Ir a LingoPOK';

  /* ── Insertar en el DOM ── */
  document.body.appendChild(link);
  document.body.appendChild(tooltip);

  /* Accesibilidad: abrir con teclado */
  link.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = link.href;
    }
  });

})();
