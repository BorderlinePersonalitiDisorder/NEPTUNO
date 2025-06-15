
class AccessibleComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    contain: content;
                    position: relative;
                }
            </style>
            <slot></slot>
        `;
        this._initComponent();
    }

    _initComponent() {
        const role = this.getAttribute('role');
        switch(role) {
            case 'carousel':
                this._initCarousel();
                break;
            case 'tabs':
                this._initTabs();
                break;
            case 'modal':
                this._initModal();
                break;
            case 'accordion':
                this._initAccordion();
                break;
            default:
                console.warn(`Rol no soportado: ${role}`);
        }
    }

    _initCarousel() {
        // Lógica accesible para carruseles
        const items = this.querySelectorAll('img, section, div');
        items.forEach((item, index) => {
            item.setAttribute('role', 'tabpanel');
            item.setAttribute('aria-label', `Ítem ${index + 1} de ${items.length}`);
            item.tabIndex = 0;
        });
        
        console.log("Carrusel accesible inicializado");
        
        // Añadir controles de navegación
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Anterior';
        prevButton.setAttribute('aria-label', 'Elemento anterior');
        prevButton.addEventListener('click', () => this._scrollCarousel(-1));
        
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Siguiente';
        nextButton.setAttribute('aria-label', 'Elemento siguiente');
        nextButton.addEventListener('click', () => this._scrollCarousel(1));
        
        this.shadowRoot.appendChild(prevButton);
        this.shadowRoot.appendChild(nextButton);
    }

    _scrollCarousel(direction) {
        // Lógica para desplazar el carrusel
        const container = this.shadowRoot.querySelector('.carousel-container');
        if (container) {
            const scrollAmount = container.clientWidth * direction;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    _initTabs() {
        console.log("Pestañas accesibles inicializadas");
        // Implementación básica de tabs
        const tabs = this.querySelectorAll('[role="tab"]');
        const panels = this.querySelectorAll('[role="tabpanel"]');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => this._activateTab(tab));
        });
    }

    _activateTab(selectedTab) {
        // Lógica para activar pestaña
    }

    _initModal() {
        console.log("Modal accesible inicializado");
        this.setAttribute('aria-modal', 'true');
        this.setAttribute('role', 'dialog');
        this.setAttribute('aria-hidden', 'true');
    }

    _initAccordion() {
        console.log("Acordeón accesible inicializado");
        // Implementación básica de acordeón
    }
}

// Registrar el componente personalizado
customElements.define('accessible-component', AccessibleComponent);