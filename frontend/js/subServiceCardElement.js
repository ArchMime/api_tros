import __SERVER_PATH from './ENV.js'

class CardSubServicesElement extends HTMLElement {
    constructor() {
        super()
        this.dataprops
        this.template = ``
    }

    static get observedAttributes() {
        return ['dataprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'dataprop') {
            this.dataprops = JSON.parse(newValue)
            this.template = `
        <div class="border border-success rounded bg-success my-2">
            <div class="row col-12 my-2">
                <div class="col-12 col-lg-8 mb-2 mb-lg-0">
                    <h3 class="text-center text-lg-left">Subservicio: ${this.dataprops.name}</h3>
                </div>
                <div class="row d-flex justify-content-center  col-12">
                    <div class="justify-content-center col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">Descripción:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.description ? this.dataprops.description : 'no asignado')}</h4>
                    </div>
                    <div class="justify-content-center col-12 col-md-6 my-2">
                        <h5 class="text-center text-md-left">valor:</h5>
                        <h4 class="text-center text-md-left">${(this.dataprops.value ? '$ '.concat(this.dataprops.value) : 'no asignado')}</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center col-12 mb-4">
                <button class="btn mx-0 mx-md-2 mr-2 btn-secondary" onclick="subservice_${this.dataprops.id}.editSubservice()">editar</button>
                <button class="btn mx-0 mx-md-2 ml-2 btn-secondary" onclick="subservice_${this.dataprops.id}.removeSubservice()">eliminar</button>
            </div>
            <div class="row col-12" id="editsubservicecontainer_${this.dataprops.id}">
            </div>
        </div>
        `

        this.innerHTML = this.template

        }
    }

    editSubservice(){

        const updatecontainer = document.getElementById(`editsubservicecontainer_${this.dataprops.id}`)

        updatecontainer.innerHTML = `<cardupdatesubservice-el id="updatesubservice_${this.dataprops.id}"></cardupdatesubservice-el>`

        const updateform = document.getElementById(`updatesubservice_${this.dataprops.id}`)
        updateform.setAttribute('dataprop', JSON.stringify(this.dataprops))
    }

    removeSubservice = async()=>{
        let r = confirm(`¿Esta seguro de querer eliminar el subservicio: ${this.dataprops.name}?`)
        if(r){

            var formData = new FormData()
            formData.append("id", this.dataprops.id)


            let session = JSON.parse(window.localStorage.getItem('session'))

            const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/subservices.php`, formData, {
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

    connectedCallback() {
    }
}

window.customElements.define('cardsubservices-el', CardSubServicesElement)