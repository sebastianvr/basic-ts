
/**
 * - Los decoradores no es mas que una funcion
 * - En JS no reconoce decoradores
 * - TS utiliza decoradores y es de utilidad experimental, exiten muchos
 * tipos de decoradores y sus estructuras pueden ser diferentes
 * - Cambian las clases en momento en que son definidas
 */

//buscar mas info en google para quedar mas claro del tema
function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty: 'new Property';
        hello: 'override'
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase)