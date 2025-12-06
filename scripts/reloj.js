
const reloj = document.getElementById('reloj')
const fecha = document.getElementById('fecha')

function actualizarReloj() {
  const opcionesHora = {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  const opcionesFecha = {
    timeZone: 'Europe/Madrid',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }

  const horaValde = new Intl.DateTimeFormat('es-ES', opcionesHora).format(new Date()),
    fechaValde = new Intl.DateTimeFormat('es-Es', opcionesFecha).format(new Date()),
    [hour, minute] = horaValde.split(':'),
    hm = Number(hour + minute);

  if (hm >= 1 && hm <= 700) {
    const frase = document.getElementById('frase')
    frase.textContent = 'Es hora de descansar.Apaga y sigue mañana'
  } else if (hm >= 701 && hm <= 1200) {
    frase.textContent = 'Buenos dias, desayuna fuerte y a darle caña al código'
  } else if (hm >= 1201 && hm <= 1400) {
    frase.textContent = 'Echa un rato mas pero no olvides comer bien'
  } else if (hm >= 1401 && hm <= 1600) {
    frase.textContent = 'Espero que hayas comido bien'
  } else if (hm >= 1601 && hm <= 1800) {
    frase.textContent = 'Buenas tardes, el ultimo empujón'
  } else if (hm >= 1801 && hm <= 2200) {
    frase.textContent = 'Esto ya son horas extras, deberias dejarlo pronto'
  } else {
    frase.textContent = 'Buenas noches, es hora de pensar en parar y descansar'
  }

  reloj.textContent = horaValde
  fecha.textContent = fechaValde
}

actualizarReloj();
setInterval(actualizarReloj, 1000);


