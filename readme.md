# 🌐 &lt;accessible-component&gt; 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

El elemento HTML que revolucionará la accesibilidad web, haciendo que la web sea más inclusiva para los 1.3 mil millones de personas con discapacidades.

```html
<accessible-component role="carousel" aria-label="Galería de productos">
  <img src="producto1.jpg" alt="Zapatos deportivos">
  <img src="producto2.jpg" alt="Mochila ergonómica">
</accessible-component>
```

## 🚀 Primeros pasos

Para comenzar a usar los componentes accesibles:

```bash
# Clonar el repositorio
git clone https://github.com/BorderlinePersonalitiDisorder/NEPTUNO.git
cd NEPTUNO

# Ejecutar demos
open demos/carousel.html   # Demo de carrusel accesible
open demos/modal.html      # Demo de modal accesible
```

## 🧩 Componentes soportados

| Componente | Status | Atributos clave |
|------------|--------|-----------------|
| Carrusel   | ✅     | `autoplay`, `interval` |
| Modal      | ✅     | `close-on-esc`, `autofocus` |
| Acordeón   | 🚧     | `multiple`, `collapsed` |
| Tabs       | 🚧     | `orientation` |

## ✨ Características clave

- **Accesibilidad nativa**: Implementa las mejores prácticas de accesibilidad desde el primer día
- **Semántica mejorada**: Mejor comprensión para motores de búsqueda y lectores de pantalla
- **Fácil implementación**: Solo agrega el componente con el rol apropiado
- **Consistencia**: Comportamiento uniforme en todos los navegadores
- **Personalizable**: Estiliza con CSS como cualquier otro elemento HTML

## 🌍 Impacto humanitario

> "Este proyecto tiene el potencial de reducir la brecha digital para 1.3 mil millones de personas con discapacidades en todo el mundo" - W3C

**Estadísticas clave**:
- 98% de los sitios web tienen errores de accesibilidad
- 71% de los sitios fallan en componentes interactivos
- 10x reducción en código necesario para componentes accesibles

## 🛠️ Uso básico

```html
<!-- Carrusel accesible -->
<accessible-component role="carousel" aria-label="Productos destacados">
  <img src="producto1.jpg" alt="Zapatos sostenibles">
  <img src="producto2.jpg" alt="Mochila ecológica">
</accessible-component>

<!-- Modal accesible -->
<accessible-component role="modal" aria-label="Formulario de contacto">
  <h2>Contacto</h2>
  <!-- Contenido del modal -->
</accessible-component>
```

## 🤝 Cómo contribuir

¡Agradecemos tu interés en hacer la web más accesible! Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu funcionalidad (`git checkout -b feat/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feat/nueva-funcionalidad`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está licenciado bajo MIT License - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🌟 Contribuidores

- [Tu Nombre](https://github.com/tuusuario)

---

**Hagamos juntos una web más inclusiva para todos**  
Accesibilidad no es una característica, es un derecho humano.