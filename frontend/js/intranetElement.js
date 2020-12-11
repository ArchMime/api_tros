class IntranetElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en intranet</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('intranet-el', IntranetElement)