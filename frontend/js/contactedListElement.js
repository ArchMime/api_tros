import __SERVER_PATH from './ENV.js'

class ContactedListElement extends HTMLElement {
    constructor() {
        super()
        this.template = ``
    }

    callBD = async () => {

        let session = JSON.parse(window.localStorage.getItem('session'))

        const resp = await axios.get(`${__SERVER_PATH}/api_v1/app/contacted.php`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': session['token']
            }
        }
        )

        if (resp.data.hasOwnProperty('error')) {
            console.log(resp.data.error)
            alert('ha ocurrido un error, por favor intentelo nuevamente.')

        } else {
            let newData = { 'token': resp.data.newtoken, 'id': session.id, 'username': session.username }

            window.localStorage.setItem('session', JSON.stringify(newData))

            for (let i = 0; i < resp.data.response.length; i++) {

                let auxdata = resp.data.response[i]

                let auxTemplate = `
                <contactedview-el id="contactedview_${auxdata.id}"></contactedview-el>`



                this.template += auxTemplate
            }


            this.innerHTML = this.template

            for (let i = 0; i < resp.data.response.length; i++) {

                let auxdata = resp.data.response[i]

                let contacted = document.getElementById(`contactedview_${auxdata.id}`)

                contacted.setAttribute('dataprop', JSON.stringify(auxdata))
            }
        }

    }

    connectedCallback() {
        this.callBD()
    }
}

window.customElements.define('contactedlist-el', ContactedListElement)