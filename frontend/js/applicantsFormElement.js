const template = `
    <form class="form-group" action="postulantes" method="POST"
        enctype="multipart/form-data">

        <div class="col-12 my-2">
            <span>
                Complete los datos para crear su solicitud
                            </span>
        </div>

        <div class="col-12 my-2">
            <label class="" for="first-name">Nombre *</label>

            <input id="first-name" class="form-control" type="text" name="first-name"
                placeholder="Nombre" value="">

                <input class="form-control" type="text" name="last-name" id="last-name" placeholder="Apellido" value="">
                        </div>

                <div class="col-12 my-2">
                    <label for="email">Email *</label>
                    <input id="email" class="form-control" type="text" name="email"
                        placeholder="Ejemplo: ejemplo@mail.com" value="">
                        </div>

                    <div class="col-12 my-2">
                        <label class="" for="phone">Telefono</label>
                        <input id="phone" class="form-control" type="text" name="phone"
                            placeholder="Ejemplo: 15 4444 2222" value="">
                        </div>

                        <div class="col-12 my-2">
                        <label class="" for="phone">Telefono Secundario</label>
                        <input id="second-phone" class="form-control" type="text" name="phone"
                            placeholder="Ejemplo: 15 4444 2222" value="">
                        </div>

                        <div class="col-12 my-2">
                            <label class="" for="profesion">Quiero trabajar en:</label>
                            <select class="form-control" style="border: 1px solid #e6e6e6;" name="profesion" id="profession" value="">
                                <option value="Electricidad">Electricidad</option>
                                <option value="Plomería">Plomería</option>
                                <option value="Cloaquista">Cloaquista</option>
                                <option value="Zanjeros">Zanjeros</option>
                                <option value="Gas">Gas</option>
                                <option value="Albañilería">Albañilería</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Carpintería">Carpintería</option>
                                <option value="Herrería">Herrería</option>
                                <option value="Impermeabilizaciones">Impermeabilizaciones</option>
                                <option value="Mantenimiento de techos">Mantenimiento de techos</option>
                                <option value="Durlock">Durlock</option>
                                <option value="Construcción en seco">Construcción en seco</option>
                                <option value="Pisos Flotantes">Pisos Flotantes</option>
                                <option value="Colocacion de mamparas y gabinetes de ducha">Colocacion de mamparas y
                                    gabinetes de ducha</option>
                                <option value="Instalacion de Tromen">Instalacion de Tromen</option>
                            </select>

                        </div>

                        <div class="col-12 my-2">
                            <label class="" for="curso">Me gustaría capacitarme en:</label>
                            <select class="form-control" style="border: 1px solid #e6e6e6;" name="curso" id="training" value="">
                                <option value="Electricidad">Electricidad</option>
                                <option value="Plomería">Plomería</option>
                                <option value="Cloaquista">Cloaquista</option>
                                <option value="Zanjeros">Zanjeros</option>
                                <option value="Gas">Gas</option>
                                <option value="Albañilería">Albañilería</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Carpintería">Carpintería</option>
                                <option value="Herrería">Herrería</option>
                                <option value="Impermeabilizaciones">Impermeabilizaciones</option>
                                <option value="Mantenimiento de techos">Mantenimiento de techos</option>
                                <option value="Durlock">Durlock</option>
                                <option value="Construcción en seco">Construcción en seco</option>
                                <option value="Pisos Flotantes">Pisos Flotantes</option>
                                <option value="Colocacion de mamparas y gabinetes de ducha">Colocacion de mamparas y
                                    gabinetes de ducha</option>
                                <option value="Instalacion de Tromen">Instalacion de Tromen</option>
                            </select>
                        </div>

                        <div class="col-12 my-2">
                            <label class="" for="monotributo">Poseo monotributo:</label>
                            <select class="form-control" style="border: 1px solid #e6e6e6;" name="monotributo" id="monotax" value="">
                                <option value="0">No</option>
                                <option value="1">Si</option>
                            </select>

                        </div>
                        <div class="col-12 my-2">
                            <label for="cuit">Cuit:</label>
                            <input id="cuit" class="form-control" type="text" name="cuit"
                                placeholder="Cuit de 11 dígitos" value="">
                        </div>

                            <div class="col-12 my-2">
                                <label class="" for="message">Mensaje *</label>
                                <textarea id="message" class="form-control" name="message" rows="6"
                                    placeholder="Escriba una descripción de su perfil"></textarea>

                            </div>

                            <div class="col-12 my-2">
                                <label class="" for="cv">Curriculum *</label>
                                <input type="file" name="cv" id="cv" style="visibility:hidden;" accept="text/plain, image/*, .pdf, .doc, .docx">
                                    <label for="cv" class="form-control d-flex justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                                            <path
                                                d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                                            </path>
                                        </svg>
                                        <span>Seleccione su CV</span>
                                    </label>
                        </div>

                                <div class="col-12 my-5">
                                    <button class="class=btn btn-lg btn-block" id="submitContactForm" onclick="applicantForm.sendDataApplicant(event);">
                                        Enviar solicitud
                            </button>
                                </div>
                    </form>
                        </div>
                    </div>
`


class ApplicantFormElement extends HTMLElement {
    constructor() {
        super()
        this.template

    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    async sendDataApplicant(event) {
        event.preventDefault()
        console.log('envianding')
        let firstName = document.getElementById('first-name').value
        let lastName = document.getElementById('last-name').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let secondPhone = document.getElementById('second-phone').value
        let sel = document.getElementById('profession')
        let profession = sel.options[sel.selectedIndex].text
        sel = document.getElementById('training')
        let training = sel.options[sel.selectedIndex].text
        sel = document.getElementById('monotax')
        let monotax = sel.options[sel.selectedIndex].text
        let cuit = document.getElementById('cuit').value
        let message = document.getElementById('message').value
        let cv = document.getElementById('cv').files[0]


        if (!cv) {
            return alert('Debe subir un cv, por favor intentelo otra vez.')
        }

        if (cv.size > (3 * 1024 * 1024)) {
            return alert('El archivo que está intentando cargar es demasiado grande. Vuelva a intentarlo con un tamaño de archivo menor o igual a 3 megabits.')
        }

        if (!this.validateEmail(email)) {
            return alert('mail invalido, por favor verifique la informacion')
        }



        if (firstName && lastName && phone && message) {

            var formData = new FormData();
            formData.append("cv", cv);
            formData.append("name", firstName);
            formData.append("lastname", lastName);
            formData.append("email", email);
            formData.append("tel", phone);
            formData.append("secondTel", secondPhone);
            formData.append("profession", profession);
            formData.append("training", training);
            formData.append("monotax", monotax);
            formData.append("message", message);
            formData.append("cuit", cuit);
            
            console.log(formData)

             const call = await axios.post('http://localhost:8080/api_tros/api_v1/app/applicants.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log(call.status)
   
        }
    }

    connectedCallback() {
        this.innerHTML = template
        document.getElementById('navbarLanding').style.display = ''
    }
}

window.customElements.define('applicantform-el', ApplicantFormElement)