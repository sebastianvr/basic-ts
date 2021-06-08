
function sumar(a: number, b: string): string {
    return `Hola mi nombre es ${b}, tengo ${a} años`;
}

const finalmente = sumar(17, 'Sebastian');
//console.log(finalmente)


/* 
 * Una ventaja de ts es que explicitamente muestra las entradas y 
  las salidas de las funciones
*/
const escribeMensaje = (edad: number, mensaje: string) : string => {
    return `Hola mi nombre es ${mensaje}, tengo ${edad} años`;
}

//console.log(escribeMensaje(33,'sebastian'));


const foo = (nombre : string, edad : number, direccion : string = 'No tengo casa') : string =>{
    return `Hellow my name is ${nombre} i am ${edad} years old ${direccion}`
}

//console.log(foo('Sebastian', 28));
//console.log(foo('Fernando', 46, 'vivo en alfonso xiii'));

/**
 * Se asegura que algun objeto de tipo PersonajeLOR tenga las mismas 
 * caracteristicas
 */
interface PersonajeLOR{
    nombre : string,
    hp : number,
    mostrarNombre : () => void
}

function curar (personaje : PersonajeLOR, curarX : number): string  {
    personaje.hp += curarX; 
 
    return `${personaje.nombre} - ${personaje.hp}`
}

const humano : PersonajeLOR= {
    nombre: 'Sebastian',
    hp: 80,
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`)
    }
}

console.log(curar( humano,1 ))
humano.mostrarNombre();