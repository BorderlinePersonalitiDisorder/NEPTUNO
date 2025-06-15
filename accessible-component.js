// Dentro de _initComponent
case 'tabs':
    this._initTabs();
    break;

// Añadir este nuevo método
_initTabs() {
    const tablist = this.querySelector('[role="tablist"]');
    const tabs = this.querySelectorAll('[role="tab"]');
    const panels = this.querySelectorAll('[role="tabpanel"]');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Desactivar todos los tabs
            tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
            panels.forEach(p => p.hidden = true);
            
            // Activar tab seleccionado
            tab.setAttribute('aria-selected', 'true');
            const panelId = tab.getAttribute('aria-controls');
            const panel = panelId 
                ? document.getElementById(panelId) 
                : panels[Array.from(tabs).indexOf(tab)];
            panel.hidden = false;
        });
        
        tab.addEventListener('keydown', e => {
            // Navegación con teclado
            if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
                const currentIndex = Array.from(tabs).indexOf(tab);
                const direction = e.key === 'ArrowRight' ? 1 : -1;
                const newIndex = (currentIndex + direction + tabs.length) % tabs.length;
                tabs[newIndex].click();
                tabs[newIndex].focus();
            }
        });
    });
    
    // Activar primer tab
    if (tabs.length > 0) {
        tabs[0].click();
    }
    
    console.log("Componente de pestañas inicializado");
}