import __SERVER_PATH from './ENV.js'

class applicantsViewElement extends HTMLElement {
    constructor() {
        super()
        this.dataprops
        this.template = `
        `
    }

    static get observedAttributes() {
        return ['dataprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.dataprops = JSON.parse(newValue)

        this.template = `
        <div class="row tarjetas">
                <div class="col-12 border border-success rounded my-2">
                    <div class="row">
                        <div class="col-12 my-3">
                            <h3>Postulante: ${this.dataprops.name} ${this.dataprops.lastname}</h3>
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
                            <label>Email: ${this.dataprops.email ? `<a href="mailto:${this.dataprops.email}">${this.dataprops.email}</a>` : 'No registrado'}</label>
                        </div>
                        <div class="col-12">
                            <label>Teléfono: ${this.dataprops.tel ? `<a href="Tel:${this.dataprops.tel}">${this.dataprops.tel}</a>` : 'No registrado'}</label>
                        </div>
                        <div class="col-12">
                            <label>Teléfono secundario: ${this.dataprops.secondTel ? `<a href="Tel:${this.dataprops.secondTel}">${this.dataprops.secondTel}</a>` : 'No registrado'}</label>
                        </div>
                        <div class="col-12">
                            <label>Profesión: ${this.dataprops.profession}</label>
                        </div>
                        <div class="col-12">
                            <label>Quiere perfeccionarse en: ${this.dataprops.trainings}</label>
                        </div>
                        <div class="col-12">
                            <label>Posee monotributo: ${this.dataprops.monotax ? `Si` : 'No'}</label>
                        </div>
                        <div class="col-12">
                            <label>Cuit: ${this.dataprops.cuit ? this.dataprops.cuit : 'No registrado'}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <label class="col-12">Documento adjunto: ${this.dataprops.cv ? `<a  class="col-6" href="${this.dataprops.cv}" target="_blank">${this.dataprops.cv}</a>` : 'No registrado'}</label>
                        </div>
                    </div>
                    <div class="col-12 border border-success rounded my-2">
                    <div class="row">
                        <div class="col-12 my-2">
                        <label class="mb-3 mr-4">Contactado ${this.dataprops.contacted ? `: Si <input type="checkbox" style="display: none;" checked value=1 id="contacted_${this.dataprops.id}"> </label>` : `</label><input type="checkbox" value=1 id="contacted_${this.dataprops.id}">`}
                        </div>
                        <div class="col-12 my-2">
                        <label>Comentario interno:</label>
                        <textarea class="form-control col-12" id="comment_${this.dataprops.id}" rows="4">${this.dataprops.internal_comment ? this.dataprops.internal_comment : ''}</textarea>
                        </div>
                        <div class="col-12">
                        <button class="btn btn-block btn-primary my-3" onclick="applicantsview_${this.dataprops.id}.updateAppicants()">Actualizar</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`

        this.innerHTML = this.template
    }

    updateAppicants = async () => {

        const check = document.getElementById(`contacted_${this.dataprops.id}`)
        const comment = document.getElementById(`comment_${this.dataprops.id}`)
        

        let session = JSON.parse(window.localStorage.getItem('session'))

        var formData = new FormData()
        formData.append("id", this.dataprops.id)
        formData.append("contacted", check.checked)
        formData.append("comment", comment.value)


        const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/applicants.php`, formData, {
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
            document.getElementById('dashboard').setAttribute('panel', 'applicants')
        }
        
    }

    connectedCallback() {
    }
}

window.customElements.define('applicantsview-el', applicantsViewElement)