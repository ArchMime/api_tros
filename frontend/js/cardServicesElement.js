import __SERVER_PATH from './ENV.js'

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
                            <button class="btn btn-lg col-5 btn-secondary" onclick="cardservice_${this.dataprops.id}.editService()">Editar</button>
                            <button class="btn btn-lg col-5 btn-secondary" onclick="cardservice_${this.dataprops.id}.removeService()">Borrar</button>
                        </div>
                    </div>
                </div>
                <div class="row col-12" id="editservicecontainer_${this.dataprops.id}">
                </div>
                <div class="row col-12">
                    <div class="justify-content-center justify-content-md-start col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">Descripción:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.description ? this.dataprops.description : 'no asignado')}</h4>
                    </div>
                    <div class="justify-content-center justify-content-md-start col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">valor:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.value ? '$ '.concat(this.dataprops.value) : 'no asignado')}</h4>
                    </div>
                </div>
            </div>
            <div class="row col-12">
        `
        return cardTemplate
    }

    editService() {
        let editservice = document.getElementById(`editservicecontainer_${this.dataprops.id}`)

        editservice.innerHTML = `<cardupdateservice-el class="d-flex col-12 justify-content-center" id="editserviceform_${this.dataprops.id}"></cardupdateservice-el>`

        let editserviceform = document.getElementById(`editserviceform_${this.dataprops.id}`)

        editserviceform.setAttribute('dataprop', JSON.stringify(this.dataprops))
    }
    removeService = async()=>{
        let r = confirm(`Confirma eliminar el servicio: "${this.dataprops.name}".\nEsto a su vez eliminará a todos los sub servicios que este contenga.`)
        if (r) {
            var formData = new FormData()
            formData.append("id", this.dataprops.id)


            let session = JSON.parse(window.localStorage.getItem('session'))

            const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/services.php`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': session['token'],
                    'action': 'delete'
                }
            })
            if (resp.data.hasOwnProperty('error')) {
                console.log(resp.data.error)
                alert('ha ocurrido un error, por favor intentelo nuevamente.')
                
            } else {
    
                let newData = { 'token': resp.data.newtoken, 'id': session.id, 'username': session.username }
    
                window.localStorage.setItem('session', JSON.stringify(newData))
    
                alert('Servicio y subservicios eliminados con exito')
    
                document.getElementById('dashboard').setAttribute('panel', 'loader')
                document.getElementById('dashboard').setAttribute('panel', 'services')
            }
        }
    }

    appendedSubServicesCard = async (template) => {
        let auxtemplate = ''
        const resp = await axios.get(`${__SERVER_PATH}/api_v1/app/subservices.php`,
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