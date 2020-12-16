class BookingElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en contrataciones</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('booking-el', BookingElement)