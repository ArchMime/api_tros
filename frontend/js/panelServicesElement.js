import __SERVER_PATH from './ENV.js'

class PanelServicesElement extends HTMLElement {
    constructor() {
        super()
        this.loader ='<loader-el></loader-el>'
        this.template = `
        <div class="container mt-3">
            <div class="row">
                <h3>Panel de servicios:</h3>
            </div>
            <div class="row">
                <nav class="col-12 my-3" id="regularnavbar">
                    <p>En esta sección podrá ver los servicios ofrecidos actualmente en la página principal, editar su información, borrarlos o agregar nuevos.</p>
                    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#helpexpand"
                        aria-controls="helpexpand" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="">ayuda</span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="helpexpand">
                        <div class="navbar-nav align-items-center">
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nisi accusamus earum facere sit vero qui voluptatibus consequatur deserunt? Libero molestias deserunt, incidunt ipsum iure aspernatur sed laudantium consectetur in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel eaque recusandae pariatur quidem quam accusamus sequi, id aliquid nihil tempore at exercitationem non fugiat cupiditate enim magni explicabo adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, aspernatur quia neque sapiente optio, quo asperiores, libero aperiam nesciunt praesentium odit cum placeat voluptates itaque nihil rerum enim accusantium. Culpa?
                            </h5>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="d-flex justify-content-center col-12">
            <button class="btn mx-0 mx-md-2 mr-2 btn-secondary" onclick="panelservices.newservice()">nuevo servicio</button>
            </div>
            <div id="newservice"></div>
        </div>
        `
    }

    appendedServicesCard = async()=>{
        let auxtemplate = ''
        const resp = await axios.get(`${__SERVER_PATH}/api_v1/app/services.php`)
        if (resp.data.length) {
            for (let i = 0; i < resp.data.length; i++) {
                let mockup = `
                <cardservices-el id="cardservice_${resp.data[i]['id']}"></cardservices-el>
                `
                auxtemplate += mockup
            }
        } else {
            auxtemplate = `
            <div>No se encontraron elementos, por favot añada un nuevo servicio</div>
            `
        }

        this.innerHTML = this.template + auxtemplate

        if (resp.data.length) {
            for (let i = 0; i < resp.data.length; i++) {
                const cardservices = document.getElementById(`cardservice_${resp.data[i]['id']}`)
                const data = JSON.stringify(resp.data[i])
                cardservices.setAttribute('dataprop', data)
            }
        }
    }

    newservice(){
        let newservice = document.getElementById("newservice")
        newservice.innerHTML = `<cardnewservice-el id="newserviceform"></cardnewservice-el>`
    }

    connectedCallback() {
        this.innerHTML = this.template + this.loader
        this.appendedServicesCard()
    }
}

window.customElements.define('panelservices-el', PanelServicesElement)