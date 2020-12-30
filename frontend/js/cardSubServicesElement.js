class CardSubServicesElement extends HTMLElement{
    constructor(){
        super()
        this.dataprops
        this.template = `
        <div class="border border-success rounded bg-success my-2">
            <h3>en la tarjeta de subservicio</h3>
            <div class="d-flex justify-content-center col-12">
                <button class="btn mx-0 mx-md-2 mr-2 btn-secondary">editar</button>
                <button class="btn mx-0 mx-md-2 ml-2 btn-secondary">eliminar</button>
            </div>
        </div>
        `
    }

    static get observedAttributes() {
        return ['dataprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'dataprop') {
            this.dataprops = JSON.parse(newValue)
            console.log(this.dataprops)
        }
    }

    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('cardsubservices-el', CardSubServicesElement)