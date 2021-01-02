class ContactedElement extends HTMLElement {
    constructor() {
        super()
        this.template = `
        <link rel="stylesheet" href="./frontend/css/applicantsElement.css">
        <div class="container my-3">
        <div class="applicants">
                <div class="row d-flex flex-lg-nowrap flex-wrap-reverse mb-4">
                <div class="col-12 col-lg-6 applicantsMessage d-flex justify-content-center align-items-center">

                    <div>
                        <p class="jobsList col-12 text-center my-5">Para dejarnos su comentario o dudas puede llenar el formulario o bien contactarnos por mail a:
                        administracion@tros.com.ar</p>
                    </div>
                </div>
                
                
                <contactedform-el class="jobsFom col-12 col-lg-6 my-2 px-2" id="contactedform"></contactedform-el>

            </div>
        </div>
    </div>
    <footer-el></footer-el>
            `
    }


    connectedCallback() {
        this.innerHTML = this.template
        document.getElementById('navbarLanding').style.display = ''
    }
}

window.customElements.define('contacted-el', ContactedElement)