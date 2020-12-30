class CardServicesElement extends HTMLElement {
    constructor() {
        super()
        this.dataprops
        this.subservicesCard
        this.template = `
        <div class="row tarjetas">
                <div class="col-12 border border-success bg-primary rounded my-2">
                    <loader-el></loader-el>
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
            this.template = this.makeServicesCard()
            this.appendedSubServicesCard(this.template)
        }
    }

    makeServicesCard() {
        let cardTemplate = `
        <div class="row tarjetas border border-success bg-primary rounded my-3 py-2 justify-content-center">
            <div class="row col-12 border border-warning rounder my-4">
                <div class="row col-12 my-2">
                    <div class="col-12 col-lg-8 mb-2 mb-lg-0">
                        <h3 class="text-center text-lg-left">Servicio: ${this.dataprops.name}</h3>
                    </div>
                    <div class="d-flex justify-content-center justify-content-md-end col-12 col-lg-4">
                        <div class="col-12 d-flex justify-content-around">
                            <button class="btn btn-lg col-5 btn-secondary">Editar</button>
                            <button class="btn btn-lg col-5 btn-secondary">Borrar</button>
                        </div>
                    </div>
                </div>
                <div class="row col-12">
                    <div class="justify-content-center justify-content-md-start col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">Descripción:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.description ? this.dataprops.description : 'no asignado')}</h4>
                    </div>
                    <div class="justify-content-center justify-content-md-start col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">valor:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.value ? '$ '.concat( this.dataprops.value ) : 'no asignado' )}</h4>
                    </div>
                </div>
            </div>
            <div class="row col-12">
        `
        return cardTemplate
    }

    appendedSubServicesCard = async (template) => {
        let auxtemplate = ''
        const resp = await axios.get('http://localhost:8080/api_tros/api_v1/app/subservices.php',
        {
            headers: {
                'action': 'getbyserviceid',
                'servicesid': this.dataprops['id']
            }
        })


        if (resp.data.length) {
            for (let i = 0; i < resp.data.length; i++) {

                const data = resp.data[i];

                let mockup = `
                <cardsubservices-el class="col-12" id="subservice_${this.dataprops['id']}_${data['id']}"></cardsubservices-el>
                `
                auxtemplate += mockup
            }
        } else {
            let mockup = '<div>No se encontraron elementos, si lo desea puede añadir un nuevo sub servicio</div>'

            auxtemplate += mockup
        }

        auxtemplate += `
        <div class="d-flex justify-content-center col-12">
            <button class="btn mx-0 mx-md-2 mr-2 btn-secondary">nuevo sub servicio</button>
        </div>
        </div></div>
        `

        this.innerHTML = template + auxtemplate

        if (resp.data.length) {
            for (let i = 0; i < resp.data.length; i++) {
                const cardsubservices = document.getElementById(`subservice_${this.dataprops['id']}_${resp.data[i]['id']}`)
                const data = JSON.stringify(resp.data[i])
                cardsubservices.setAttribute('dataprop', data)
            }
        }
    }

    connectedCallback() {
        this.innerHTML = this.template
    }
}

window.customElements.define('cardservices-el', CardServicesElement)