const inputEmail = document.querySelector('#input-email')
const inputPass = document.querySelector('#input-pass')
const inputRepeatPass = document.querySelector('#input-repeat-pass')
const inputCheck = document.querySelector('#input-check')
const inputSubmit = document.querySelector('#input-submit')

let email, password, repeatPassword

const guardarDatos = () => {
    email = inputEmail.value
    password = inputPass.value
    repeatPassword = inputRepeatPass.value
}

const validar = document.querySelector('.mostrarCartelOk'); //Las contraseñas coinciden
const alerta = document.querySelector('.mostrarCartelError'); //Las contraseñas no coinciden
const exito = document.querySelector('.mostrarCartelExito'); //Se registró
const alerta2 = document.querySelector('.mostrarCartelError2'); //No se registró

 const validatePass = () => {
     if (inputPass.value === inputRepeatPass.value) {
         validar.classList.remove('cartelOculto');
         alerta.classList.add('cartelOculto');
     } else {
         alerta.classList.remove('cartelOculto');
         validar.classList.add('cartelOculto');
         inputSubmit.setAttribute('disabled', 'disabled');
     }
}

const registroExitoso = () => {
    if ((inputCheck.checked === true) && (email != '') && (password != '') && (repeatPassword != '') ) {
        exito.classList.remove('cartelOculto');
        validar.classList.add('cartelOculto');
    } else if (inputCheck.checked === false || email === '' || password === '' || repeatPassword === '') {
        alerta2.classList.remove('cartelOculto');
        exito.classList.add('cartelOculto');
        validar.classList.add('cartelOculto');
        inputSubmit.setAttribute('disabled', 'disabled');
    }
}

inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    guardarDatos();
    registroExitoso();
})

inputRepeatPass.addEventListener('change', validatePass) 
inputRepeatPass.addEventListener('change', validatePass) 
