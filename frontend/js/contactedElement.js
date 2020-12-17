class ContactedElement extends HTMLElement {
    constructor() {
        super()
        this.template = `
        <link rel="stylesheet" href="./frontend/css/applicantsElement.css">
        <div class="container">
        <div class="container applicants">
            <div class="row d-flex flex-lg-wrap flex-wrap-reverse mb-4">
                <div
                    class="col-12 col-lg-6 p-5 applicantsMessage row d-flex flex-column justify-content-center align-items-center">

                    <div>
                        <p class="jobsList col-12 align-middle">
                            Para dejarnos su comentario o dudas puede llenar el formulario o bien contactarnos por
                            mail
                            a:

                            administracion@tros.com.ar
                        </p>
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
    }
}

window.customElements.define('contacted-el', ContactedElement)