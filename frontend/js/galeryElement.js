class GaleryElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en galeria</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('galery-el', GaleryElement)