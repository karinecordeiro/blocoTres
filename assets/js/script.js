    let nome = document.querySelector("#nome")
    let email = document.querySelector("#email")
    let assunto = document.querySelector("#assunto")
    let nomeOk = false
    let emailOk = false
    let assuntoOk = false
    let mapa = document.querySelector("#mapa")

    nome.style.width = '100%'
    email.style.width = '100%'
    assunto.style.width ="100%"

    function validaNome() {
        let txtNome = document.querySelector("#txtNome")
        if (nome.value.length <3){
            txtNome.innerHTML = "Nome Invalido"
            txtNome.style.color = "red"
        } else {
            txtNome.innerHTML = "Nome Valido"
            txtNome.style.color = "green"
            nomeOk= true
        }
    }

    function validaEmail(){
        let txtEmail = document.querySelector("#txtEmail")
        if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){ //se for assim: ex(email.email@ fica valido), por que?
            txtEmail.innerHTML = "E-mail Invalido"
            txtEmail.style.color = "red"
        } else {
            txtEmail.innerHTML = "E-mail Valido"
            txtEmail.style.color = "green"
            emailOk = true
        }  
    }

    function validaAssunto(){
        let txtAssunto = document.querySelector("#txtAssunto")
        if (assunto.value.length >=100){
            txtAssunto.innerHTML = "O assunto comporta apenas 100 caracteres."
            txtAssunto.style.color = "red"
            txtAssunto.style.display = "block" //por que não bloqueia quando chega ao número de caracteres máximos?
        } else {
            txtAssunto.style.display = "none" // para não aparecer mensagem da div caso esteja correto
            assuntoOk = true
        }
 }

 function enviar(){
     if (nomeOk == true && emailOk == true && assuntoOk == true){
         alert ("Formulário enviado com sucesso!")
     } else {
         alert ("Preencha seu formulário corretamente antes de enviar.")
     }
 }

 function mapaMaior(){ // como descer a tela quando o mapa aumenta?
     mapa.style.width ="650px"
     mapa.style.height= "425px"
 }

 function mapaNormal(){
    mapa.style.width ="600px"
     mapa.style.height= "400px"
 }

