import __SERVER_PATH from './ENV.js'

class CardUpdateServiceElement extends HTMLElement {
    constructor() {
        super()
        this.dataprops
        this.template = ``

    }

    updateService = async () => {

        let name = document.getElementById('usName').value
        let description = document.getElementById('usDescription').value
        let value = document.getElementById('usValue').value

        console.log(name, description, value, this.dataprops.id)
        var formData = new FormData()
        formData.append("id", this.dataprops.id)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("value", value)


        let session = JSON.parse(window.localStorage.getItem('session'))

        const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/services.php`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': session['token'],
                'action': 'update'
            }
        })
        console.log(resp)

        if (resp.data.hasOwnProperty('error')) {
            console.log(resp.data.error)
            alert('ha ocurrido un error, por favor intentelo nuevamente.')
            
        } else {

            let newData = { 'token': resp.data.newtoken, 'id': session.id, 'username': session.username }

            window.localStorage.setItem('session', JSON.stringify(newData))

            alert('Servicio Ingresado con exito')

            document.getElementById('dashboard').setAttribute('panel', 'loader')
            document.getElementById('dashboard').setAttribute('panel', 'services')
        }

    }

    static get observedAttributes() {
        return ['dataprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.dataprops = JSON.parse(newValue)
        this.template = `<div class="row tarjetas">
        <div class="col-12 border border-success rounded my-2">
            <div class="row">
                <div class="col-12 my-3">
                    <h3>Editar servicio</h3>
                </div>
                <div class="col-12 col-lg-6 my-2">
                    <label for="name">* Nombre del servicio:</label>
                </div>
                <div class="col-12 col-lg-6 my-2">
                    <input type="text" name="name" id="usName" class="form-control" value="${this.dataprops.name}">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6 my-2">
                    <label for="description">Descripción del servicio(maximo 200 caracteres):</label>
                </div>
                <div class="col-12 col-lg-6 my-2">
                    <textarea name="description" id="usDescription" rows="8" maxlength="200" class="form-control">${(this.dataprops.description ? this.dataprops.description : '' )}</textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6 my-2">
                    <label for="nsValue">Valor (solo numeros):</label>
                </div>
                <div class="col-12 col-lg-6 my-2">
                    <input type="number" name="nsValue" id="usValue" class="form-control"  value="${(this.dataprops.value ? this.dataprops.value : 0)}">
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6 my-2">
                <button class="btn btn-block btn-primary my-3" onclick="editserviceform_${this.dataprops.id}.updateService()">Actualizar algo</button>
                </div>
            </div>
        </div>
    </div>
    `
    this.innerHTML = this.template

    }

    connectedCallback() {
    }
}

window.customElements.define('cardupdateservice-el', CardUpdateServiceElement)