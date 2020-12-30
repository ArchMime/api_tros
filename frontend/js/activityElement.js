const template = `
    <link rel="stylesheet" href="./frontend/css/activitysElement.css">
        <div class="actContent col-12 d-flex justify-content-center px-2 my-5 rounded">
            <div class="shellact col-lg-10 col-sm-12 justify-content-center my-2 rounded">
                <div class="actRow rounded px-4 col-sm-12">
                    <div class="text-center col-12">
                        <p class="my-2 py-4">¿En que nos especializamos?</p>
                    </div>
                </div>

                <div class="actRow col-12 rounded">

                    <div class="row mt-2 ">

                        <activitylist-el class="rounded col-sm-12 col-lg-4"></activitylist-el>
                        
                        <div class="col-sm-12 col-lg-8 fixed-left" id="desc">
                            <div class="sticky">

                                <div class="descripcion text-center col-sm-12 my-4" id="p-desc">
                                    <p>Reaizamos nuestro trabajo en distintas zonas de capital y gran buenos aires</p>
                                </div>
                                <div class="mapa" id="mapa-desc">
                                    <img class="img-fluid" id="mapa" src="./frontend/images/bsas_map-min.png"
                                        alt="mapa gran buenos aires">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`


class ActivityElement extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = template
        document.getElementById('navbarLanding').style.display = ''

    }
}

window.customElements.define('activity-el', ActivityElement)