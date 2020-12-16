class loaderElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <link rel="stylesheet" href="./frontend/css/loadElement.css">
        <div class="col-12 d-flex justify-content-center">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('loader-el', loaderElement)