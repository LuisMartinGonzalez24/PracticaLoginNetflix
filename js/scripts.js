//Validando formulario

const inputs = document.querySelectorAll('form .campo input');

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput (e){

    const estado = ['valido', 'No-valido'];

    let clase;

    if(e.target.value.length === 0){
        clase = estado[1];
    }else{
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);

    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //console.log(e.target.value); con este codigo podiamos validar si recibe lo que escribimos por consola

    //Inyectar dinamicamente el div en caso de que haya error

    if (clase === 'No-valido') {

        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
         
         //Construir mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
        errorDiv.classList.add('alerta');

        //Insertando el error

        e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);

        }

    }else{
        //Limpiar el mensaje de error si existe

        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }

}

//Mostrar y ocultar password

const mostrarPasswordBtn = document.querySelector('form .campo span');

mostrarPasswordBtn.addEventListener('click', e => {

    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')) {
        //Mostrar texto

        e.target.classList.remove('mostrar');

        //cambiar texto

        e.target.textContent = 'Ocultar';

        //Cambiamos a password

        passwordInput.type = 'text';
        
    }else{
        //Ocultar contraseña
        e.target.classList.add('mostrar');

        //cambiar texto

        e.target.textContent = 'Mostrar';

        //Cambiamos a password

        passwordInput.type = 'password';
    }
})

let lenguaje = document.querySelectorAll('.lenguaje');

console.log(lenguaje);