import './navbarElement.js'
import './homeElement.js'
import './bookingElement.js'
import './galeryElement.js'
import './contactedElement.js'
import './applicantsElement.js'
import './intranetElement.js'
import './carouselElement.js'
import './loaderElement.js'

/*
paleta de colores
e8e8e8ff
64778bff
fdca35ff
f05454ff
2a384fff
222831ff
*/

const canvas = {'element' : '<home-el/>'}


class MainElement extends HTMLElement{
    constructor(){
        super()
        this.main = `

        <div class="container" id="outlet"></div>
        `
    }
    connectedCallback(){
        this.innerHTML = this.main
        document.getElementById('loader').style.display = 'none'
    }

}

window.customElements.define('main-element', MainElement)