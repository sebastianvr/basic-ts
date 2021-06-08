export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: 'Iphone 8',
    precio: 100
}

const tablet: Producto = {
    desc: 'Hawei',
    precio: 100
}

const arrProductos: Producto[] = [telefono, tablet]

// function calculaIVA(productos: Producto[]): number {
//     let total = 0;
//     productos.forEach(element => {
//         total += element.precio;

//     });
//     return total * 0.19;
// }

//desestructuracion de argumentos, de un arreglo de objetos
// function calculaIVA(productos: Producto[]): number {
//     let total = 0;
//     productos.forEach(({precio}) => {
//         total += precio;

//     });
//     return total * 0.19;
// }

export function calculaIVA(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;

    });
    return [total, total * 0.19];
}

const [res, iva] = calculaIVA(arrProductos);
console.log('Resultado', res);
console.log('IVA', iva);