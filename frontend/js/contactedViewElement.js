import __SERVER_PATH from './ENV.js'

class contactedViewElement extends HTMLElement{
    constructor(){
        super()
        this.dataprops
        this.template = `
        <h3>en panel services</h3>
        `
    }

    static get observedAttributes() {
        return ['dataprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.dataprops = JSON.parse(newValue)

        this.template =`
        <div class="row tarjetas">
                <div class="col-12 border border-success rounded my-2">
                    <div class="row">
                        <div class="col-12 my-3">
                            <h3>Remitente: ${this.dataprops.name} ${this.dataprops.lastname}</h3>
                        </div>
                        <div class="col-12">
                            <label>Fecha: ${this.dataprops.date}</label>
                        </div>
                        <div class="col-12 my-2">
                            <label>Mensaje:</label>
                        </div>
                        <div class="col-12 my-2">
                            <p>${this.dataprops.message}</p>
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-12">
                            <label>Email: ${this.dataprops.email ? `<a href="mailto:${this.dataprops.email}">${this.dataprops.email}</a>`: 'No registrado'}</label>
                        </div>
                        <div class="col-12">
                            <label>Teléfono: ${this.dataprops.tel ? `<a href="Tel:${this.dataprops.tel}">${this.dataprops.tel}</a>`: 'No registrado'}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <label>Documento adjunto: ${this.dataprops.archive ? `<a href="${this.dataprops.archive}" target="_blank">${this.dataprops.archive}</a>`: 'No registrado'}</label>
                        </div>
                    </div>
                    <div class="row">
                        ${!this.dataprops.readed ? `
                        <div class="col-12">
                        <button class="btn btn-block btn-primary my-3" onclick="contactedview_${this.dataprops.id}.readCheck()">Marcar como leido</button>
                        </div>` : ''}
                    </div>
                </div>
            </div>`

        this.innerHTML = this.template
    }

    readCheck = async() =>{

        const r = confirm(`¿Confirma marcar como leido el mensaje de  ${this.dataprops.name} ${this.dataprops.lastname}?.\nEsto hara que el mensaje deje de estar al principio de la lista, pero su informacion no será eliminada.`)

        if(r){

            let session = JSON.parse(window.localStorage.getItem('session'))

            
            var formData = new FormData()
            formData.append("id", this.dataprops.id)
            
            const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/contacted.php`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': session['token'],
                    'action': 'update'
                }
            }
            )
            
            console.log(resp)

            if (resp.data.hasOwnProperty('error')) {
                console.log(resp.data.error)
                alert('ha ocurrido un error, por favor intentelo nuevamente.')
                
            } else {
    
                let newData = { 'token': resp.data.newtoken, 'id': session.id, 'username': session.username }
    
                window.localStorage.setItem('session', JSON.stringify(newData))
    
                alert('Mensaje actualizado con exito')
    
                document.getElementById('dashboard').setAttribute('panel', 'loader')
                document.getElementById('dashboard').setAttribute('panel', 'message')
            }
        }
    }

    connectedCallback(){
    }
}

window.customElements.define('contactedview-el', contactedViewElement)