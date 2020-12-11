const dataTemplate = (_attr)=>{
    return `
    <link rel="stylesheet" href="./frontend/css/carouselElement.css">
    <div class="carouselImages col-12 d-flex justify-content-center px-2 my-5">
        <div class="shellcrs col-lg-10 col-sm-12 d-flex justify-content-center mt-2 mb-2">
            <div id="carouselIndicators" class="carousel slide col-12" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 imgcrs" src="${_attr[0]['path']}"
                            alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${_attr[0]['title']}</h5>
                            <p>${_attr[0]['description']}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 imgcrs" src="${_attr[1]['path']}"
                            alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${_attr[1]['title']}</h5>
                            <p>${_attr[1]['description']}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 imgcrs" src="${_attr[2]['path']}"
                            alt="Third slide">
                        <div class="spacing d-block"></div>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${_attr[2]['title']}</h5>
                            <p>${_attr[2]['description']}</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>`
}

class CarrouselElement extends HTMLElement{
    constructor(){
        super()
        this.template = `<loader-el></loader-el>`
    }

    calledBD = async()=>{
        const resp = await axios.get('http://localhost:8080/api_tros/api_v1/app/carousel.php')

        
        var templateUpdate = dataTemplate(resp.data)
        this.innerHTML = templateUpdate
    }

    connectedCallback(){
        this.innerHTML = this.template
        this.calledBD()
    }

}

window.customElements.define('carrousel-el', CarrouselElement)


/*
<link rel="stylesheet" href="./frontend/css/carouselElement.css">
        <div class="carouselImages col-12 d-flex justify-content-center px-2 my-5">
            <div class="shellcrs col-lg-10 col-sm-12 d-flex justify-content-center mt-2 mb-2">
                <div id="carouselIndicators" class="carousel slide col-12" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 imgcrs" src="./frontend/images/crs_aire-min.jpg"
                                alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>este es el titulo.</h5>
                                <p>esta es la descripcion.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 imgcrs" src="./frontend/images/crs_cabina-min.jpg"
                                alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>este es el titulo.</h5>
                                <p>esta es la descripcion.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 imgcrs" src="./frontend/images/crs_piso-min.jpg"
                                alt="Third slide">
                            <div class="spacing d-block"></div>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>este es el titulo.</h5>
                                <p>esta es la descripcion.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
*/