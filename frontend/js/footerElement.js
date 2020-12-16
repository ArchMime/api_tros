class footerElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <link rel="stylesheet" href="./frontend/css/footerElelemt.css">
        <div class="shellFooter container rounded-top">

            <div class="row">
                <div class="col-lg-3 col-sm-12 ml-lg-5 ml-0 my-5">
                    <div class="row">
                        <div class="col-lg-5 col-sm-12 d-flex justify-content-center">
                            <img class="imglogoFooter" src="./frontend/images/logo_tr-min.png" alt="logo">
                        </div>
                        <div class="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                            <img class="troslogoFooter" src="./frontend/images/tros_srl-min.png" alt="logo">
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <div class="col-12 my-4">
                        <p class="contacto text-center text-lg-left">Contactenos</p>
                    </div>
                    <div class="col-12 my-2">
                        <p class="contacto text-lg-left text-center">
                            <a class="contacto" href="tel:+549 11 5450-9014"><img
                                    src="./frontend/images/tel_icon.png" alt="tel"> tel +54 9 11 5450-9014</a>
                        </p>
                    </div>
                    <div class="col-12 my-2">
                        <p class="contacto text-lg-left text-center">
                            <a href="/api_tros/contacto" class="contacto"><img src="./frontend/images/mail_icon.png"
                                    alt="mail"> e-mail
                                administracion@tros.com.ar</a>
                        </p>
                    </div>
                    <div class="col-12 my-2">
                        <p class="contacto text-lg-left text-center">
                            <a href="/api_tros/postular" class="contacto"><img src="./frontend/images/trabajo_icon.png"
                                    alt="trabajo"> Trabaje con nosotros</a>
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-12 d-flex justify-content-lg-end justify-content-center align-items-center mb-4 mb-lg-0">
                    <a href="http://qr.afip.gob.ar/?qr=W28E5GE5BGvGAG36EOV88Q,," target="_F960AFIPInfo"><img class="logo-footer rounded" src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" border="0"></a>
                </div>
            </div>
        </div>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('footer-el', footerElement)