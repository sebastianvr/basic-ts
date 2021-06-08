import { calculaIVA, Producto } from "./06-desest-arr-obj";


const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 140
    },
    {
        desc: 'telefono 2',
        precio: 120
    }
];


const [total, ivas] = calculaIVA(carritoCompras);
console.log(total);
console.log(ivas);