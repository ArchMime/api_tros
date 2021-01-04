import __SERVER_PATH from './ENV.js'

class CardUpdateSubServiceElement extends HTMLElement{
    constructor(){
        super()
        this.dataprops
        this.template 
    }
    saveSubService = async()=>{

        let name = document.getElementById('nsName').value
        let description = document.getElementById('nsDescription').value
        let value = document.getElementById('nsValue').value

        var formData = new FormData()
        formData.append("service", this.dataprops.id)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("value", value)

        let session = JSON.parse(window.localStorage.getItem('session'))

        const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/subservices.php`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token' : session['token'],
                'action' : 'add'
            }
        })

        if(resp.data.hasOwnProperty('error')){
            console.log(resp.data.error)
            alert('ha ocurrido un error, por favor intentelo nuevamente.')

        }else{
            console.log(resp.data)

            let newData = {'token': resp.data.newtoken, 'id': session.id, 'username': session.username}

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
        if (name === 'dataprop') {
            
            this.dataprops = JSON.parse(newValue)
            this.template = `
            <div class="row tarjetas">
                    <div class="col-12 border border-success rounded my-2">
                        <div class="row">
                            <div class="col-12 my-3">
                                <h3>Editar subservicio</h3>
                            </div>
                            <div class="col-12 col-lg-6 my-2">
                                <label for="name">* Nombre del subservicio:</label>
                            </div>
                            <div class="col-12 col-lg-6 my-2">
                                <input type="text" name="name" id="ussName" class="form-control" value="${this.dataprops.name}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-6 my-2">
                                <label for="description">Descripción del servicio(maximo 200 caracteres):</label>
                            </div>
                            <div class="col-12 col-lg-6 my-2">
                                <textarea name="description" id="ussDescription" rows="8" maxlength="200" class="form-control">${(this.dataprops.description ? this.dataprops.description : '')}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-6 my-2">
                                <label for="nsValue">Valor (solo numeros):</label>
                            </div>
                            <div class="col-12 col-lg-6 my-2">
                                <input type="number" name="nsValue" id="ussValue" class="form-control" value="${(this.dataprops.value ? this.dataprops.value : 0)}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-6 my-2">
                            <button class="btn btn-block btn-primary my-3" onclick="updatesubservice_${this.dataprops.id}.updateSubService()">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            this.innerHTML = this.template
        }
    }
    
    updateSubService = async () => {

        let name = document.getElementById('ussName').value
        let description = document.getElementById('ussDescription').value
        let value = document.getElementById('ussValue').value

        console.log(name, description, value, this.dataprops.id)
        var formData = new FormData()
        formData.append("id", this.dataprops.id)
        formData.append("service", this.dataprops.service)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("value", value)


        let session = JSON.parse(window.localStorage.getItem('session'))

        const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/subservices.php`, formData, {
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


    connectedCallback(){
    }
}

window.customElements.define('cardupdatesubservice-el', CardUpdateSubServiceElement)