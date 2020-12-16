const template = `
<link rel="stylesheet" href="./frontend/css/applicantsElement.css">
        <div class="container applicants">
            <div class="row d-flex flex-lg-wrap flex-wrap-reverse mb-4">
                <div class="col-12 col-lg-6 p-5 applicantsMessage flex-column justify-content-center">
                    <p class="jobsList col-12 ml-n2">
                        En Tros estámos buscando profesionales con experiencia en los siguientes rubros:
                    </p>
                    <ul class="jobsList col-12">
                        <li>Electricidad</li>
                        <li>Plomería</li>
                        <li>Cloaquista</li>
                        <li>Zanjeros</li>
                        <li>Gas</li>
                        <li>Albañilería</li>
                        <li>Pintura</li>
                        <li>Carpintería</li>
                        <li>Herrería</li>
                        <li>Impermeabilizaciones</li>
                        <li>Mantenimiento de techos</li>
                        <li>Durlock</li>
                        <li>Construcción en seco</li>
                        <li>Pisos Flotantes</li>
                        <li>Colocacion de mamparas y gabinetes de ducha</li>
                        <li>Instalacion de Tromen</li>
                    </ul>

                    <div class="">
                        <span class="jobsList">
                            Puede llenar el formulario o bien contactarnos por mail a
                        </span>

                        <span class="jobsList">
                            postulantes@tros.com.ar
                        </span>
                    </div>
                </div>

                <applicantform-el class="jobsFom col-12 col-lg-6 my-2 px-2" id="applicantForm"></applicantform-el>

                </div>
                <footer-el></footer-el>
`


class ApplicantElement extends HTMLElement{
    constructor(){
        super()
        this.template
    }
    connectedCallback(){
        this.innerHTML = template
    }
}

window.customElements.define('applicant-el', ApplicantElement)