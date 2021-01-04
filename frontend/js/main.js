/**
 * la funcionalidad principal de main es
 * importar y registrar todos los elementos
 * y manipular el router de la aplicación
 */
import './activityElement.js'
import './activityListElement.js'
import './applicantsElement.js'
import './applicantsFormElement.js'
import './bookingElement.js'
import './carouselElement.js'
import './contactedElement.js'
import './contactedFormElement.js'
import './contactedListElement.js'
import './contactedPanelElement.js'
import './contactedViewElement.js'
import './footerElement.js'
import './galeryElement.js'
import './homeElement.js'
import './intranetDasboardElement.js'
import './intranetElement.js'
import './loaderElement.js'
import './loginElement.js'
import './navbarElement.js'
import './notfoundElement.js'
import './serviceNewElement.js'
import './servicesCardElement.js'
import './servicesPanelElement.js'
import './serviceUpdateElement.js'
import './subServiceCardElement.js'
import './subServiceNewElement.js'
import './subServiceUpdateElement.js'

/*
paleta de colores
e8e8e8ff
64778bff
fdca35ff
f05454ff
2a384fff
222831ff
*/


class MainElement extends HTMLElement{
    constructor(){
        super()
        this.main = `
        <div class="container">
            <navbar-el id="navbarLanding"></navbar-el>
            <div id="outlet"></div>
        </div>
        `
    }
    connectedCallback(){
        console.clear()
        this.innerHTML = this.main
        document.getElementById('loader').style.display = 'none'
        document.getElementById('navbarLanding').style.display = ''
    }

}

window.customElements.define('main-element', MainElement)