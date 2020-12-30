class CardNewServiceElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en nuevo servicio</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('cardnewservice-el', CardNewServiceElement)