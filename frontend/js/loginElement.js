class LoginElement extends HTMLElement {
    constructor() {
        super()
        this.template = `
        </div>

        <div class="container d-flex justify-content-center">

        <div class="col-12 col-md-6 border border-primary my-5 p-5 rounded">
        <div class="loginform row ">

            <div class="col-12">
                <img class="img-fluid col-12" src="./frontend/images/logo_tros_srl-min.png" alt="tros srl.">
                <p class="col-12 text-center">Acceso Intranet</p>
            </div>
            
            <div class="col-12">
                <label for="loginusername" class="col-12 text-center mt-4">Username</label>
                <input type="text" name="loginusername" id="loginusername" class="form-control col-12 text-center" autofocus></input>
            </div>
            <div class="col-12">
                <label for="loginpassword" class="col-12 text-center mt-4">Password</label>
                <input type="password" name="loginpassword" id="loginpassword" class="form-control col-12 text-center"></input>
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-primary btn-lg btn-block mt-4 col-12" onclick="loginForm.SendDataLogin()">Login</button>
            </div>
            </div>
            </div>
            </div>

        `
    }

    async SendDataLogin() {

        let username = document.getElementById('loginusername').value
        let password = document.getElementById('loginpassword').value

        var formData = new FormData()
        formData.append("username", username)
        formData.append("password", password)
        formData.append("action", 'login')

        const resp = await axios.post('http://localhost:8080/api_tros/api_v1/app/login.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (!resp.data.error) {
            window.localStorage.setItem('session', JSON.stringify({'token':resp.data.token,'id':resp.data.userid, 'username':resp.data.username}))
            window.location.href = 'http://localhost:8080/api_tros/intranet'
        } else {
            window.localStorage.setItem('session', '')

            console.log(resp)
        }

        console.log(window.localStorage.getItem('session'))
    }

    connectedCallback() {
        this.innerHTML = this.template
    }
}

window.customElements.define('login-el', LoginElement)