interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 40,
    cancion: 'Triste y vacia',
    detalles: {
        autor: 'Hector Lavoe',
        anio: 1983
    }
}

// console.log('Cancion', reproductor.cancion);
// console.log('Volumen', reproductor.volumen);
// console.log('Autor', reproductor.detalles.autor);
// console.log('Año', reproductor.detalles.anio);

//desestructuracion de objetos
const { cancion, segundo, volumen } = reproductor;
const { anio, autor } = reproductor.detalles

// console.log('Cancion', cancion);
// console.log('Volumen', volumen);
// console.log('Autor', autor);
// console.log('Año', anio);


const dbz: string[] = ['Goku', 'Piccolo', 'Gohan'];

//desestructuracion de arreglos
const [p1, p2, p3] = dbz;

// console.log('Personaje 1:', dbz[0]);
// console.log('Personaje 2:', dbz[1]);
// console.log('Personaje 3:', dbz[2]);


console.log('Personaje 1: ',p1);
console.log('Personaje 2: ',p2);
console.log('Personaje 3:', p3);