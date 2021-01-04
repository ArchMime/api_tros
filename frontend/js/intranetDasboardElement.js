const session = window.localStorage.getItem('session') ? JSON.parse(window.localStorage.getItem('session')) : ''

class IntranetDashboardElement extends HTMLElement {
    constructor() {
        super()
        this.panel
        this.template
        this.prop
        this.session = session
    }

    logout() {
        window.localStorage.removeItem('session')
        location.reload()
    }

    panels(action) {
        switch (action) {
            case 'message':
                document.getElementById('dashboard').setAttribute('panel', 'message')

                break;

            case 'services':
                document.getElementById('dashboard').setAttribute('panel', 'services')

                break;

            case 'booking':
                document.getElementById('dashboard').setAttribute('panel', 'booking')

                break;

            case 'applicants':
                document.getElementById('dashboard').setAttribute('panel', 'applicants')

                break;

            case 'gallery':
                document.getElementById('dashboard').setAttribute('panel', 'gallery')

                break;

            case 'users':
                document.getElementById('dashboard').setAttribute('panel', 'users')

                break;


        }

    }

    static get observedAttributes() {
        return ['panel', 'sendprop']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'sendprop') {
            this.prop = JSON.parse(newValue)
        }

        switch (newValue) {
            case 'home':
                this.panel = `
                <div id="panel" class="d-flex justify-content-center mt-3">

                    <img src="./frontend/images/logo_tr-min.png" alt="">

                </div>
                `
                break
            case 'message':
                this.panel = `
                <panelcontacted-el id="panelcontacted" position="list"></panelcontacted-el>
                `
                break;
            case 'services':
                this.panel = `
                    <panelservices-el id="panelservices"></panelservices-el>
                    `
                break;
            case 'booking':
                this.panel = `
                    <div id="panel" class="d-flex justify-content-center mt-3">
        
                        <p>contrataciones</p>
        
                    </div>
                        `
                break;
            case 'applicants':
                this.panel = `
                    <panelaplicants-el></panelaplicants-el>
                    `
                break;
            case 'gallery':
                this.panel = `
                <div id="panel" class="d-flex justify-content-center mt-3">

                    <p>galeria</p>

                </div>
                `
                break;
            case 'users':
                this.panel = `
                        <div id="panel" class="d-flex justify-content-center mt-3">
        
                            <p>usuarios</p>
        
                        </div>
                        `
                break;
            case 'loader':
                this.panel = `
                        <loader-el></loader-el>
                            `
                break;

        }

        this.template = `
        </div></div>
        <div class="container">
        
        <div class="title d-flex justify-content-center py-5">
        <img src="./frontend/images/logo_tros_inet_Y-min.png" width="200" class="d-inline-block align-top" alt="" loading="lazy">
        </div>
        <div class="d-flex justify-content-end align-items-center w-100 my-1">
            <div class="mr-4">
                <span>Usuario: ${(this.session ? this.session['username'] : '')}</span>
            </div>
            <button class="btn btn-lg btn-warning" onclick="dashboard.logout()">Cerrar sesión</button>
        </div>
        
        <div class="innavbar">
            <link rel="stylesheet" href="./frontend/css/inNavbarElement.css">
            <nav class="navbar navbar-expand-lg cst-navbar" id="regularnavbar">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarToggler">
                    <div class="navbar-nav align-items-center">
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('booking')">Contrataciones</button>
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('message')">Mensajes</button>
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('applicants')">Postulantes</button>
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('services')">Servicios</button>
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('gallery')">Galeria</button>
                        <button class="btn btn-lg btn-light btn-block my-1 text-nowrap" onclick="dashboard.panels('users')">Usuarios</button>
                    </div>
                </div>
            </nav>
        </div>

            ${this.panel}
    </div>
        `
        this.innerHTML = this.template

    }

    connectedCallback() {
    }
}

window.customElements.define('intranetdashboard-el', IntranetDashboardElement)