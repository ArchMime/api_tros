class ApplicantElement extends HTMLElement{
    constructor(){
        super()
        this.template = `
        <navbar-el></navbar-el>
        <h3>en postulantes</h3>
        `
    }
    connectedCallback(){
        this.innerHTML = this.template
    }
}

window.customElements.define('applicant-el', ApplicantElement)