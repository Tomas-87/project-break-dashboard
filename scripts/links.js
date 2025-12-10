
const btnLink = document.getElementById('btnLink'),
    titulo = document.getElementById('titulo'),
    link = document.getElementById('link'),
    lista = document.getElementById('lista');


function crearLi(texto) {
    const li = document.createElement('li')


    const a = document.createElement('a')
    a.href = texto.url
    a.textContent = texto.titulo
    a.target = '_blank'


    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar'
    btnEliminar.style.marginLeft = '10px'
    btnEliminar.style.cursor = 'pointer'
    btnEliminar.style.border = 'none'

    btnEliminar.addEventListener('click', () => {
        eliminarLocal(texto.url)
        li.remove()
    })
    li.appendChild(a)
    li.appendChild(btnEliminar)
    return li
}


btnLink.addEventListener('click', () => {
    const nombre = titulo.value.trim()
    const enlace = link.value.trim()

    if (!nombre || !enlace) return

    const nuevoTexto = { titulo: nombre, url: enlace }

    lista.appendChild(crearLi(nuevoTexto))
    guardarLocal(nuevoTexto)
    titulo.value = ''
    link.value = ''
})

function guardarLocal(nuevoTexto) {
    const local = JSON.parse(localStorage.getItem('link')) || []
    local.push(nuevoTexto)
    localStorage.setItem('link', JSON.stringify(local))
}


function eliminarLocal(url) {
    const link = JSON.parse(localStorage.getItem('link')) || []
    const actualizado = link.filter(f => f.url !== url)
    localStorage.setItem('link', JSON.stringify(actualizado))
}


window.addEventListener('DOMContentLoaded', () => {
    const link = JSON.parse(localStorage.getItem('link')) || []

    link.forEach(texto => {
        const li = crearLi(texto)
        lista.appendChild(li)
    });
})