class Persona {

    /**
     *
     */
    constructor(
        public nombre: string,
        public direccion: string
    ) {


    }

}

//heroe hereda de persona
class Heroe extends Persona {
    // public alterEgo : string;
    // public edad: number;
    // public nombreReal: string;

    //en los parmetros de constructor puedo definir campos sin necesidad
    //de escribirlos como campos de clase,
    //ESTO ES MUY PARCECIDO A LA INYECCION DE DEPENDENCIAS DE ANGULAR
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        //llamo el constructor de la clase padre
        super(nombreReal, 'Avenida las Rosas');
    }
}



const spiderman = new Heroe('spiderman', 32, 'Peter Parker');
// spiderman.alterEgo = 'spiderman';
// spiderman.edad = 30;
// spiderman.nombreReal = 'Peter Parker'

console.log(spiderman);

