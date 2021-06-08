
let nombre : string = 'Sebastian';
nombre = 'Camilo';

//identidicar dos tipos de datos para una misma variable
let hp : number | string;
hp = 'FULL';
console.log(hp);

hp = 55;
console.log(hp)


let roles = ['ADMIN_ROLE', 'VENTAS_ROLE', 'USUARIO_ROLE'];
console.log(roles.includes('ADMIN_ROLE'));

let estaVivo : boolean = true;

estaVivo = false;
if(!estaVivo){
    console.log('esta re muerto');
}
