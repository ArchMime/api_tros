/**
 * la funcionalidad principal de main es
 * importar y registrar todos los elementos
 * y manipular el router de la aplicación
 */
import './navbarElement.js'
import './homeElement.js'
import './bookingElement.js'
import './galeryElement.js'
import './contactedElement.js'
import './applicantsElement.js'
import './applicantsFormElement.js'
import './intranetElement.js'
import './carouselElement.js'
import './activityElement.js'
import './activityListElement.js'
import './notfoundElement.js'
import './footerElement.js'

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
            <navbar-el></navbar-el>
            <div id="outlet"></div>
        </div>
        `
    }
    connectedCallback(){
        this.innerHTML = this.main
        console.log('en main')
        document.getElementById('loader').style.display = 'none'
    }

}

window.customElements.define('main-element', MainElement)