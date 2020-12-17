class ContactedFormElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <form class="form-group" action="" method="POST" enctype="multipart/form-data">

            <div class="col-12 my-2">
                <span>
                    Complete los datos para crear su solicitud
                </span>
            </div>

            <div class="col-12 my-2">
                <label class="" for="first-name">Nombre *</label>

                <input id="first-name" class="form-control" type="text" name="first-name"
                    placeholder="Nombre" value="">

                <input class="form-control" type="text" name="last-name" id="last-name"
                    placeholder="Apellido" value="">
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
                <label class="" for="message">Mensaje *</label>
                <textarea id="message" class="form-control message" name="message" rows="6" placeholder="Escribanos un mensaje"></textarea>

            </div>

            <div class="col-12 my-2">
                <label class="" for="archive">Adjuntar un archivo *</label>
                <input type="file" name="archive" id="archive" style="visibility:hidden;"
                    accept="text/plain, image/*, .pdf, .doc, .docx">
                <label for="archive" class="form-control d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                        <path
                            d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z">
                        </path>
                    </svg>
                    <span>Seleccione un archivo</span>
                </label>
            </div>

            <div class="col-12 my-5">
                <button class="class=btn btn-lg btn-block" id="submitMessajeForm"
                onClick="contactedform.sendDataContacted(event);"
                    >
                    Enviar mensaje
                </button>
            </div>
        </form>
    </div>
        `
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    async sendDataContacted(event) {
        event.preventDefault()
        console.log('envianding')
        let firstName = document.getElementById('first-name').value
        let lastName = document.getElementById('last-name').value
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let message = document.getElementById('message').value
        let archive = document.getElementById('archive').files[0]


        if (archive.size > (3 * 1024 * 1024)) {
            return alert('El archivo que está intentando cargar es demasiado grande. Vuelva a intentarlo con un tamaño de archivo menor o igual a 3 megabits.')
        }

        if (!this.validateEmail(email)) {
            return alert('mail invalido, por favor verifique la informacion')
        }



        if (firstName && lastName && phone && message) {

            var formData = new FormData();
            formData.append("archive", archive);
            formData.append("name", firstName);
            formData.append("lastname", lastName);
            formData.append("email", email);
            formData.append("tel", phone);
            formData.append("message", message);
            
            console.log(formData)

             const call = await axios.post('http://localhost:8080/api_tros/api_v1/app/contacted.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log(call)
   
        }
    }


    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('contactedform-el', ContactedFormElement)