//**************** */ api key   '5b92565559da46d7b6490336250212'
const apiKey = '5b92565559da46d7b6490336250212',
  city = 'Valderrobres',
  api = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;
;
const tiempo = document.getElementById('tiempo')



const fetchData = async () => {
  try {
    const res = await fetch(api)
    if (!res.ok) throw new Error(`ERROR: ${res.status}`)
    return res.json()

  } catch (error) {
    console.log(`ERROR:  ${error.message}`)
  }
}

const crearLi = ({
  forecast: { forecastday },
  location: { country, name, },
  current: { condition: { icon, text, },
    temp_c, precip_mm, humidity, wind_kph } }) => {
  const horas = forecastday[0].hour

  const li = document.createElement('li')
  li.innerHTML = `
  <div class="tituloTiempo">
    <div class="lugar">
      <h3>En estos momentos el Tiempo en:</h3>
      <h3>${name} ${country}</h3>
    </div>
    <div class="infoTiempo">
      <p>Tiempo: ${text}</p>
      <p>Temperatura: ${temp_c}Grados</p>
      <p>Precipitaciones: ${precip_mm}mm</p>
      <p>Humedad: ${humidity}</p>
      <p>Viento: ${wind_kph} Kmhora</p>
    </div>
    <img src="${icon}" />
  </div>
  <div class="porHoras">
      ${horas.map(h => `
       <div class="hora">
          <p>Hora: ${h.time.split(" ")[1]}</p>
          <img src="https:${h.condition.icon}">
          <p>Temperatura: ${h.temp_c}°C</p>
          <p>Precipitaciones: ${h.precip_mm} mm</p>
          <p>Viento: ${h.wind_kph} Km/Hora</p>
        </div>
        `).join('')}
  </div>  
  `

  return li
}

const renderTiempo = (time) => {
  tiempo.innerHTML = ''
  tiempo.appendChild(crearLi(time))
}


const cargar = async () => {
  try {
    const data = await fetchData()
    console.log(data)
    renderTiempo(data)
  } catch (error) {
    console.log(error)
  }
}

cargar()