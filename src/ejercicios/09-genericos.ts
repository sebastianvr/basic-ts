
//<generico> es una funcion generica que puede tomar cualqueir tipo de dato
//
function queTipoSoy<T> (argumento: T){
    return argumento;
} 


let numeroo = queTipoSoy(4);
//esperar que tipo de datp quiero que retorne <string>
let palabra = queTipoSoy<string>('Hola mundo');
let arreglo = queTipoSoy([1,2,3,4,5,6,7]);

console.log(numeroo);
console.log(palabra);