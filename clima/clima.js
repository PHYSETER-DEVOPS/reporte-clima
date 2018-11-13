const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=YOUR_KEY`);
    // if (resp.cod === 400) {
    //     throw new Error('Error inesperado!');
    // }
    // let temperatura = resp.main;
    // console.log(temperatura);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}