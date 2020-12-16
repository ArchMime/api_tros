
const template = `
        <link rel="stylesheet" href="./frontend/css/navbarElement.css">
        <nav class="navbar navbar-expand-lg cst-navbar" id="regularnavbar">
            <a class="navbar-brand" href="/api_tros/">
                <img src="./frontend/images/logo_tros_srl-min.png" width="100" class="d-inline-block align-top" alt="" loading="lazy">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
              
            <div class="collapse navbar-collapse justify-content-end" id="navbarToggler">
                <div class="navbar-nav align-items-center">
                    <a class="nav-link" href="/api_tros/contrataciones">Contrataciones</a>
                    <a class="nav-link" href="/api_tros/galeria">Galeria</a>
                    <a class="nav-link" href="/api_tros/contacto">Contacto</a>
                    <a class="nav-link" href="/api_tros/postular">Tabaje con nosotros</a>
                    <a class="nav-link btn lg-ml-2 px-2 cst-btn" href="/api_tros/intranet">Intranet</a>
                </div>
            </div>
        </nav>
`

class NavbarElement extends HTMLElement {
    constructor() {
        super()
        this.template = template
    }
    connectedCallback() {
        this.innerHTML = this.template
    }

    attributeChangedCallback(_name, _oldValue, _newValue) {
        console.log(`${_name}, ${_oldValue}, ${_newValue}`)
    }
    static get observedAttributes() {
        return ['_name']
    }
}

window.customElements.define('navbar-el', NavbarElement)

