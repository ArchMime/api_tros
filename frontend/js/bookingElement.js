class BookingElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <h3>en contrataciones</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
        document.getElementById('navbarLanding').style.display = ''
    }
}

window.customElements.define('booking-el', BookingElement)