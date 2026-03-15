# Guía Rápida - EduLingo

## 🚀 Inicio Rápido en 5 Minutos

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/edulingo.git
cd edulingo
```

### 2. Instalar Dependencias
```bash
pnpm install
```

### 3. Iniciar Desarrollo
```bash
pnpm dev
```

Tu aplicación estará en: **http://localhost:3000**

---

## 📋 Requisitos Previos

- **Node.js**: 22.x o superior
- **pnpm**: 10.x o superior (o npm/yarn)

### Verificar versiones instaladas:
```bash
node --version
pnpm --version
```

### Instalar pnpm (si no lo tienes):
```bash
npm install -g pnpm
```

---

## 🎯 Comandos Principales

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo con hot reload |
| `pnpm build` | Compila para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formatea el código |

---

## 📁 Estructura Básica

```
edulingo/
├── client/src/
│   ├── pages/Home.tsx          ← Página principal
│   ├── components/Header.tsx   ← Navegación
│   ├── index.css               ← Estilos globales
│   └── App.tsx                 ← Componente raíz
├── package.json                ← Dependencias
└── README.md                   ← Documentación completa
```

---

## 🎨 Personalización Rápida

### Cambiar Colores
Edita `/client/src/index.css`:
```css
:root {
  --primary: #58CC02;        /* Verde Duolingo */
  --secondary: #1CB0F6;      /* Azul */
}
```

### Cambiar Textos
Edita `/client/src/pages/Home.tsx` - busca las secciones de contenido.

### Agregar Destinos
En `/client/src/pages/Home.tsx`, duplica una tarjeta de destino y personaliza.

---

## 🐛 Solución de Problemas

### Error: "pnpm: command not found"
```bash
npm install -g pnpm
```

### Error: "Port 3000 already in use"
```bash
# Usa otro puerto
pnpm dev -- --port 3001
```

### Error: "node_modules not found"
```bash
pnpm install
```

### Cambios no se reflejan
Reinicia el servidor:
```bash
# Presiona Ctrl+C para detener
# Luego ejecuta nuevamente
pnpm dev
```

---

## 📚 Recursos Útiles

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite Guide](https://vitejs.dev)

---

## 🚀 Próximos Pasos

1. **Personaliza el contenido** - Edita textos, colores e imágenes
2. **Agrega más destinos** - Duplica secciones en Home.tsx
3. **Conecta el formulario** - Integra EmailJS o Mailgun
4. **Publica tu sitio** - Despliega en Vercel, Netlify o tu servidor

---

## 💬 ¿Necesitas Ayuda?

- Revisa [README.md](./README.md) para documentación completa
- Abre un [issue](../../issues) en GitHub
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para contribuir

---

**¡Feliz desarrollo! 🎉**
