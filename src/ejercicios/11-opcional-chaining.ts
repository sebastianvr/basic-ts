
interface Pasajeros {
    nombre: string,
    hijos?: string[]
}


const pasajero1: Pasajeros = {
    nombre: 'Sebastian'
}

const pasajero2: Pasajeros = {
    nombre: 'Juan',
    hijos: ['Daniela', 'Rodrigo']
}


function imprimeHijos(pasajero: Pasajeros) {
    //return `Nombre ${pasajero.nombre} - hijos ${pasajero.hijos}`

    /*
    * hijos tiene ? para comprobar si un objeto lleva esta propiedad 
    * como parametro opcional definido en la interfaz, si no tiene esa propiedad
    * sera hijos = 0
    */
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}


imprimeHijos(pasajero1);
//console.log(imprimeHijos(pasajero2));