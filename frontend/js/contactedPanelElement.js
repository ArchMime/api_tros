class PanelContactedElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <div class="container mt-3">
            <div class="row">
                <h3>Panel de Mensajes:</h3>
            </div>
            <div class="row">
                <nav class="col-12" id="regularnavbar">
                    <p>En esta sección puede ver los mensajes recibidos a través del formulario de la página.</p>
                    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#helpexpand"
                        aria-controls="helpexpand" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="">ayuda</span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="helpexpand">
                        <div class="navbar-nav align-items-center">
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nisi accusamus earum
                                facere sit vero qui voluptatibus consequatur deserunt? Libero molestias deserunt,
                                incidunt ipsum iure aspernatur sed laudantium consectetur in. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Aspernatur vel eaque recusandae pariatur quidem quam
                                accusamus sequi, id aliquid nihil tempore at exercitationem non fugiat cupiditate enim
                                magni explicabo adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Unde, aspernatur quia neque sapiente optio, quo asperiores, libero aperiam nesciunt
                                praesentium odit cum placeat voluptates itaque nihil rerum enim accusantium. Culpa?
                            </h5>
                        </div>
                    </div>
                </nav>
            </div>

            <contactedlist-el></contactedlist-el>
        </div>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('panelcontacted-el', PanelContactedElement)