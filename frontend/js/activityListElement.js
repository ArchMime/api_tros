const makeTemplate = (_services, _subservices) => {
    let templateServices = ''
    let templateSubservices = ''
    let resultTemplate = ''

    _services.forEach( (el, i) => {
        _subservices.forEach((subel, ii) => {
            if(subel['service']=== el['id']){
                templateSubservices += `
                <li class="list-group-item">
            <a href="#cllpsubservice${subel['id']}" class="btn btn-lg btn-block" data-toggle="collapse"
                role="button" aria-expanded="false" aria-controls="cllpsubservice${subel['id']}">${subel['name']}</a>
            <div class="collapse" id="cllpsubservice${subel['id']}">
                <div class="justify-content-center">
                    <p class="col-12 text-center">${(subel['description']?subel['description']:'')}</p>
                    <button type="button" class="btn btn-primary btn-lg btn-block">contratar</button>
                </div>
            </div>
        </li>
                `
            }
        })
        if(templateSubservices){
            templateServices += `
        <li class="list-group-item">
            <a href="#cllpservice${el['id']}" class="btn btn-lg btn-block" data-toggle="collapse"
                role="button" aria-expanded="false" aria-controls="cllpservice${el['id']}">${el['name']}</a>
            <div class="collapse" id="cllpservice${el['id']}">
                <ul class="list-group list-group-flush">
                ${templateSubservices}
                </ul>
            </div>
        </li>
            `
        }else{
            templateServices += `
            <li class="list-group-item">
            <a href="#cllps${el['id']}" class="btn btn-lg btn-block" data-toggle="collapse"
                role="button" aria-expanded="false" aria-controls="cllps${el['id']}">${el['name']}</a>
            <div class="collapse" id="cllps${el['id']}">
                <div class="justify-content-center">
                    <p class="col-12 text-center">${(el['description']?el['description']:'')}</p>
                    <button type="button" class="btn btn-primary btn-lg btn-block">contratar</button>
                </div>
            </div>
        </li>
            `
            
        }
        templateSubservices = ''
    });

    resultTemplate = `
    <div id="lista">
        <ul class="list-group">
            ${templateServices}
        </ul>
    </div>
    `
    return resultTemplate
}



class ActivityListElement extends HTMLElement {
    constructor() {
        super()
        this.template = `<loader-el></loader-el>`
    }

    calledBD = async () => {
        const resp = await axios.get('http://localhost:8080/api_tros/api_v1/app/services.php')
        const subresp = await axios.get('http://localhost:8080/api_tros/api_v1/app/subservices.php', {headers: {
            'action': 'getall'
        }})
        
        this.innerHTML = makeTemplate(resp.data, subresp.data)
    }

    connectedCallback() {
        this.innerHTML = this.template
        document.getElementById('navbarLanding').style.display = ''
        this.calledBD()
    }
}

window.customElements.define('activitylist-el', ActivityListElement)