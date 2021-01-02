import __SERVER_PATH from './ENV.js'

const session = window.localStorage.getItem('session') ? JSON.parse(window.localStorage.getItem('session')) : ''


//window.localStorage.setItem('session', JSON.stringify({'token':'adasd','id':3, 'username':'mimo'}))


class IntranetElement extends HTMLElement {
    constructor() {
        super()
        this.template = `
        <loader-el></loader-el>
        `
    }

    validateCredentials = async () => {

        if (session != '') {
            var formData = new FormData()
            formData.append("username", session['username'])
            formData.append("id", session['id'])
            formData.append("token", session['token'])
            formData.append("action", 'validate')

            const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/login.php`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (resp.data.error) {
                window.localStorage.setItem('session', '')
                this.innerHTML = `
                <login-el id="loginForm"></login-el>
                `
            } else {
                
                this.innerHTML = `
                <intranetdashboard-el id="dashboard" panel="home"></intranetdashboard-el>
                `
            }
        } else {
            this.innerHTML = `
                <login-el id="loginForm"></login-el>
                `
        }
    }

    refreshValidations = async () => {
        if (session != '') {
            var formData = new FormData()
            formData.append("username", session['username'])
            formData.append("id", session['id'])
            formData.append("token", session['token'])
            formData.append("action", 'validate')

            const resp = await axios.post(`${__SERVER_PATH}/api_v1/app/login.php`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (resp.data.error) {
                this.innerHTML = `
                <login-el id="loginForm"></login-el>
                `
            } else {
                setTimeout(() => { this.refreshValidations() }, (10 * 60 * 1000))
            }
        }
    }

    connectedCallback() {
        this.innerHTML = this.template
        this.validateCredentials()
        this.refreshValidations()
        document.getElementById('navbarLanding').style.display = 'none'
    }
}

window.customElements.define('intranet-el', IntranetElement)