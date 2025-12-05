import './imagenes.js'

const btnPassword = document.getElementById('btnPassword'),
    inputPassword = document.getElementById('inputPassword'),
    contraseñaSegura = document.getElementById('contraseñaSegura');

// Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.

const arrContraseñas = {
    mayus: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minus: "abcdefghijklmnopqrstuvwxyz",
    numeros: "0123456789",
    signos: "!@#$%^&*()-_=+"
}

const todosJuntos = arrContraseñas.mayus + arrContraseñas.minus + arrContraseñas.numeros + arrContraseñas.signos

function aleatorio(max) {
    return Math.floor(Math.random() * max)
}

function crearContraseña(long) {
    let password = ''
    for (let i = 0; i < long; i++) {
        password += todosJuntos[aleatorio(todosJuntos.length)]
    }
    return password
}


btnPassword.addEventListener('click', () => {
    const numero = Number(inputPassword.value.trim())
    if (Number.isNaN(numero) || numero < 12 || numero > 50) {
        contraseñaSegura.textContent = 'Introduce un numero del 12 al 50 ambos incluidos'
        return;
    } else {
        const template = crearContraseña(inputPassword.value.trim())
        contraseñaSegura.textContent = template
    }
})



