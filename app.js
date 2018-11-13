const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtene el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temperatura} grados centígrados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.lat, resp.lng);
//         // console.log(resp.lat);
//     }).catch(e => {
//         console.log(e);
//     });

// clima.getClima(9.9280694, -84.0907246)
//     .then(resp => {
//         console.log(resp);
//     }).catch(e => {
//         console.log(e);
//     });