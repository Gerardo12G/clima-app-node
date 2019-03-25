const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7d9729cbf75917a66852ddcc3161098b&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}