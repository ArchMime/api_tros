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
import './cardNewServiceElement.js'
import './cardServicesElement.js'
import './cardSubServicesElement.js'
import './carouselElement.js'
import './contactedElement.js'
import './contactedFormElement.js'
import './footerElement.js'
import './galeryElement.js'
import './homeElement.js'
import './intranetElement.js'
import './intranetDasboardElement.js'
import './loaderElement.js'
import './loginElement.js'
import './navbarElement.js'
import './notfoundElement.js'
import './panelServicesElement.js'
import './cardUpdateServiceElement.js'

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
        //console.clear()
        this.innerHTML = this.main
        console.log('en main')
        document.getElementById('loader').style.display = 'none'
        document.getElementById('navbarLanding').style.display = ''
    }

}

window.customElements.define('main-element', MainElement)