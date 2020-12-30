class GaleryElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en galeria</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
        document.getElementById('navbarLanding').style.display = ''
    }
}

window.customElements.define('galery-el', GaleryElement)