class bookingElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <navbar-el></navbar-el>
        <h3>en contrataciones</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('booking-el', bookingElement)