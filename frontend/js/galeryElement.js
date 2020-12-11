class GaleryElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <navbar-el></navbar-el>
        <h3>en galeria</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('galery-el', GaleryElement)