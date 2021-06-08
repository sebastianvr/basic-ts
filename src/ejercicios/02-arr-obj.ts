/**
 * Cuando ejecuto ts transforma el codigo a js debido a que los navegadores lo soportan 
 */

//arreglos

let habilidades : number[]  = [4, 5 , 6, 7];
//console.log(habilidades);
const resultado = habilidades.forEach( (x) => /*console.log(x*2)*/ x);
//console.log(resultado);
habilidades.push(50,60);
//console.log(habilidades);
habilidades.pop();
//console.log(habilidades);

//Objeto - Interface

//una interface determinara que caracteristicas debe tener un objeto
//obliga a que adqueira los comportamientos que fueron declarados dentro
interface Personaje{
    name: string;
    hp: string | number;
    habilidades : string[];
    // ? indica que es un campo opcional 
    direccion? : string;
}

//personaje de tipo Personaje que es tipo interfaz
const personaje : Personaje = {
    name : 'Israel Adesanya',
    hp : 150,
    habilidades: ['Lucha', 'Yiu yitsu', 'Striker']
} 
personaje.direccion = 'Pueblo paleta';
//console.log(personaje);



const separar = personaje;
console.log(separar);