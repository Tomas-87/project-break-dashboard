
const reloj = document.getElementById('reloj');
const frase = document.getElementById('frase');

//construir reloj 2 digitos
const actualizarReloj = () => {
  const opcionesReloj = {
    timeZone: 'Europe/Madrid',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }

  const horaValde = Intl.DateTimeFormat('es-Es', opcionesReloj).format(new Date()),
    [hour, minute] = horaValde.split(':'),
    //convertimos horas y minutos en un solo numro numero
    hm = Number(hour + minute);

  if (hm > 1 && hm <= 700) {
    frase.textContent = 'Es hora de descansar.Apaga y sigue mañana 💤';
  } else if (hm > 701 && hm <= 1200) {
    frase.textContent = 'Buenos dias, desayuna fuerte y a darle caña al código 🧋🥐'
  } else if (hm >= 1201 && hm <= 1400) {
    frase.textContent = 'Echa un rato mas pero no olvides comer bien 🍽️'
  } else if (hm >= 1401 && hm <= 1600) {
    frase.textContent = 'Espero que hayas comido bien y a seguir programando 💪'
  } else if (hm >= 1601 && hm <= 1800) {
    frase.textContent = 'Buenas tardes, el ultimo empujón antes de acabar el dia 🌤️'
  } else if (hm >= 1801 && hm <= 2200) {
    frase.textContent = 'Esto ya son horas extras, deberias dejarlo pronto y descansar 🛌'
  } else {
    frase.textContent = 'Buenas noches, es hora de pensar en parar y descansar 😴'
  }

  return horaValde
}

//creamos la fecha 
const actualizarFecha = () => {
  const opcionesFecha = {
    timeZone: 'Europe/Madrid',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const fechaValde = Intl.DateTimeFormat('es-Es', opcionesFecha).format(new Date());
  return fechaValde;
}

//crear elemento
function crearH3(hora) {
  const h3 = document.createElement('h3')
  h3.classList.add('hora')
  h3.textContent = hora
  return h3;
}


function cargar() {
  reloj.innerHTML = ''
  const horaActual = actualizarReloj()
  const h3 = crearH3(horaActual)
  reloj.appendChild(h3)
  const fechaActual = actualizarFecha()
  const h3Fecha = crearH3(fechaActual)
  reloj.appendChild(h3Fecha)
}

//recargar reloj y fecha cada segundo
setInterval(cargar, 1000);
cargar();


