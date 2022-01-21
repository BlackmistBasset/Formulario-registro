const inputEmail = document.getElementById('input-email');
const inputPass = document.getElementById('input-pass');
const inputRepeatPass = document.getElementById('input-repeat-pass');
const inputCheck = document.getElementById('input-check');
const inputSubmit = document.getElementById('input-submit');

let email, password, repeatPassword;

const guardarDatos = () => {
    email = inputEmail.value
    password = inputPass.value
    repeatPassword = inputRepeatPass.value
}


const notificacionRegistro = document.getElementById('notificacion-registro');

 const validatePass = () => {
     if (inputPass.value === inputRepeatPass.value) {

         notificacionRegistro.style.color = 'green'
         notificacionRegistro.innerText = 'Las contraseñas coinciden!'
         inputSubmit.removeAttribute('disabled', 'disabled');
        } else {
            notificacionRegistro.style.color = 'red'
            notificacionRegistro.innerText = 'Las contraseñas no coinciden!'   
        }
    }
    
    const registroExitoso = () => {
        if ((inputCheck.checked === true) && (email != '') && (password != '') && (repeatPassword != '') ) {
            notificacionRegistro.style.color = 'green'
            notificacionRegistro.innerText = 'Te registraste exitosamente!'
    } else if (inputCheck.checked === false || email === '' || password === '' || repeatPassword === '') {
        notificacionRegistro.style.color = 'red'
        notificacionRegistro.innerText = 'Por favor, completá todos los campos!'
        inputSubmit.setAttribute('disabled', 'disabled');
    }
}
registroExitoso();


inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    guardarDatos();
    registroExitoso();
})

inputRepeatPass.addEventListener('change', validatePass); 

