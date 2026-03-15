# EduLingo - Construye una Vida que Valga la Pena Contar

Página web responsiva para cursos de inglés y castellano con experiencias de viaje académico en destinos internacionales.

## 🌍 Características

- **Cursos Online Flexible**: Clases 24/7 con profesores nativos y práctica de speaking con IA
- **Experiencias Inmersivas**: Estudia en Malta, Irlanda, Londres, Edimburgo y más
- **Certificación Cambridge**: Preparación oficial para exámenes internacionales
- **Asesoría Personalizada**: Soporte experto en cada paso del camino
- **Precios Garantizados**: Igualamos cualquier oferta del mercado

## 🎨 Diseño

- Estética inspirada en **Duolingo** con colores vibrantes
- Totalmente **responsive** para móvil, tablet y desktop
- Tipografía **Poppins** para máxima legibilidad
- Animaciones suaves y transiciones fluidas
- Imágenes de alta calidad de destinos internacionales

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Estilos**: Tailwind CSS 4 + CSS personalizado
- **Componentes**: shadcn/ui
- **Enrutamiento**: Wouter
- **Build**: Vite
- **Servidor**: Express.js (Node.js)

## 📦 Instalación

### Requisitos previos
- Node.js 22.x o superior
- pnpm 10.x o superior

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/edulingo.git
cd edulingo
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo**
```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`

## 🚀 Comandos disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo con hot reload

# Build
pnpm build        # Compila el proyecto para producción

# Preview
pnpm preview      # Previsualiza la build de producción localmente

# Verificación
pnpm check        # Verifica tipos TypeScript
pnpm format       # Formatea el código con Prettier
```

## 📁 Estructura del Proyecto

```
edulingo/
├── client/
│   ├── public/                 # Archivos estáticos (favicon, robots.txt)
│   ├── src/
│   │   ├── components/         # Componentes React reutilizables
│   │   │   ├── ui/            # Componentes shadcn/ui
│   │   │   ├── Header.tsx      # Navegación principal
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/             # Páginas de la aplicación
│   │   │   ├── Home.tsx       # Página principal
│   │   │   └── NotFound.tsx   # Página 404
│   │   ├── contexts/          # React Contexts
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilidades
│   │   ├── App.tsx            # Componente raíz
│   │   ├── main.tsx           # Entry point
│   │   └── index.css          # Estilos globales y temas
│   └── index.html             # Template HTML
├── server/
│   └── index.ts               # Servidor Express
├── shared/
│   └── const.ts               # Constantes compartidas
├── package.json               # Dependencias del proyecto
├── vite.config.ts             # Configuración de Vite
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Este archivo
```

## 🎯 Secciones de la Página

### Hero Section
Presentación impactante con imagen de fondo y llamada a la acción principal.

### El Método
Cuatro opciones de aprendizaje:
- Inglés Online Flexible (desde 59€/mes)
- Vive el Idioma en el Extranjero (desde 2.280€/6 meses)
- Certifícate y Triunfa (Preparación Cambridge)
- Acompañamiento Total (Asesoría personalizada)

### Destinos
Galería interactiva de destinos:
- 🇲🇹 Malta
- 🇮🇪 Irlanda
- 🇬🇧 Londres
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Edimburgo

### Testimonios
Historias reales de estudiantes que han transformado sus vidas.

### Planes de Precios
Tres opciones de suscripción con características detalladas.

### Formulario de Contacto
Captura de leads con campos: nombre, email, teléfono e interés.

### Footer
Enlaces, redes sociales e información de contacto.

## 📞 Contacto

- **Email**: lingo@EduNexus.eu
- **WhatsApp**: +353 83 103 6031
- **Disponible en**: Malta, Irlanda, Inglaterra, Escocia, Chipre, EE.UU., Canadá, Argentina y España

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Verde Duolingo | `#58CC02` | Botones principales, CTAs |
| Azul | `#1CB0F6` | Secundario, acentos |
| Blanco | `#FFFFFF` | Fondo principal |
| Gris Oscuro | `#1F2937` | Texto principal |
| Gris Claro | `#F3F4F6` | Fondos secundarios |

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Opcional - Para integraciones futuras
VITE_API_URL=https://api.example.com
```

## 📱 Responsividad

La página está optimizada para:
- 📱 Móvil (320px - 640px)
- 📱 Tablet (640px - 1024px)
- 💻 Desktop (1024px+)

## 🚀 Despliegue

### En Manus
El proyecto está configurado para desplegarse en la plataforma Manus:
1. Haz clic en "Publish" en el Management UI
2. Configura tu dominio personalizado
3. ¡Listo! Tu sitio estará en vivo

### En otros servidores
```bash
# Build para producción
pnpm build

# Los archivos compilados estarán en dist/
# Sube la carpeta dist/ a tu servidor
```

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto como base para tus propios proyectos.

## 👨‍💻 Autor

**EduLingo Team**
- Diseño y desarrollo de página web responsiva
- Especializado en experiencias de aprendizaje de idiomas
- Enfoque en conversión y experiencia del usuario

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ❓ Preguntas Frecuentes

**¿Cómo personalizo los colores?**
Edita `/client/src/index.css` y modifica las variables CSS en la sección `:root`.

**¿Cómo agrego más destinos?**
Edita `/client/src/pages/Home.tsx` y agrega nuevas tarjetas en la sección "Imagina tu Vida en...".

**¿Cómo conecto el formulario a mi email?**
Puedes integrar servicios como EmailJS, Mailgun o Formspree. Consulta la documentación de cada servicio.

---

**Última actualización**: Marzo 2026
**Versión**: 1.0.0
