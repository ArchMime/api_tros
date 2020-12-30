class HomeElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <link rel="stylesheet" href="./frontend/css/headerElement.css">
        <div class="header rounded-bottom">
            <div class="headerLogo d-flex justify-content-center">
                <img class="imglogo" src="./frontend/images/logo_tr-min.png" alt="logo">
            </div>
            <div class="leyenda col-12 d-flex justify-content-center">
                <p class="text-center col-sm-12 my-5 col-lg-6">Somos una empresa prestadora de servicios de instalación y construccion. En TROS s.r.l. contamos con especialistas en diversas areas y trabajamos en distintas zonas de capital federal y gran Buenos Aires.</p>
            </div>
        </div>
        <carrousel-el></carrousel-el>
        <activity-el></activity-el>
        <footer-el></footer-el>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
        document.getElementById('navbarLanding').style.display = ''
    }
}

window.customElements.define('home-el', HomeElement)