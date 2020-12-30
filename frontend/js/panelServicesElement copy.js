class PanelServicesElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en panel services</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('panelservices-el', PanelServicesElement)