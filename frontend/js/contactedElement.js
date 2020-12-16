class ContactedElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en contacto</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('contacted-el', ContactedElement)