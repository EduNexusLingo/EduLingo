# Guía de Contribución - EduLingo

¡Gracias por tu interés en contribuir a EduLingo! Este documento proporciona pautas y instrucciones para contribuir al proyecto.

## Código de Conducta

Todos los contribuyentes deben adherirse a nuestro código de conducta:
- Sé respetuoso y amable
- Acepta críticas constructivas
- Enfócate en lo mejor para la comunidad
- Reporta comportamiento inaceptable a los mantenedores

## Cómo Contribuir

### Reportar Bugs

Antes de crear un reporte de bug, verifica la lista de issues para asegurarte de que no se haya reportado ya.

**Al reportar un bug, incluye:**
- Título claro y descriptivo
- Descripción detallada del problema
- Pasos para reproducir el problema
- Comportamiento observado
- Comportamiento esperado
- Capturas de pantalla si es relevante
- Tu entorno (OS, navegador, versión de Node)

### Sugerir Mejoras

Las sugerencias de mejora son bienvenidas. Incluye:
- Título claro y descriptivo
- Descripción detallada de la mejora sugerida
- Ejemplos de cómo funcionaría
- Por qué crees que sería útil

### Pull Requests

1. **Fork el repositorio** y crea tu rama desde `main`
2. **Instala dependencias**: `pnpm install`
3. **Haz tus cambios** siguiendo las convenciones del código
4. **Prueba tus cambios**: `pnpm dev` y verifica en el navegador
5. **Verifica tipos**: `pnpm check`
6. **Formatea el código**: `pnpm format`
7. **Commit con mensajes claros**:
   ```
   feat: agregar nueva sección de destinos
   fix: corregir responsive en móvil
   docs: actualizar README
   style: formatear código
   refactor: reorganizar componentes
   ```
8. **Push a tu fork** y abre un Pull Request

## Estándares de Código

### TypeScript
- Usa tipos explícitos siempre que sea posible
- Evita `any` - usa `unknown` si es necesario
- Mantén la consistencia con el código existente

### React
- Usa functional components con hooks
- Mantén los componentes pequeños y enfocados
- Documenta props complejas con comentarios
- Usa nombres descriptivos para variables y funciones

### Estilos
- Usa Tailwind CSS para estilos
- Evita CSS personalizado cuando sea posible
- Mantén consistencia con la paleta de colores existente
- Asegúrate de que el diseño sea responsive

### Estructura de Carpetas
```
client/src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas completas
├── contexts/      # React Contexts
├── hooks/         # Custom hooks
└── lib/           # Utilidades
```

## Proceso de Review

1. Un mantenedor revisará tu PR
2. Se pueden solicitar cambios
3. Una vez aprobado, se hará merge a `main`
4. Tu contribución será reconocida en las notas de lanzamiento

## Preguntas o Necesitas Ayuda?

- Abre un issue con la etiqueta `question`
- Contacta a los mantenedores directamente
- Revisa la documentación existente

## Licencia

Al contribuir, aceptas que tus contribuciones se licencien bajo la misma licencia MIT que el proyecto.

---

¡Gracias por contribuir a EduLingo! 🚀
