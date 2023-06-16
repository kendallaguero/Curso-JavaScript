/*  Block Scope / Alcance de tipo bloque
    -Pertenecen las variables declaradas con const o let dentro de un bloque { }
    -Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;
let accesoPermitido = false;
if (edad >= 18) {
    const accesoPermitido = true;
    console.log(accesoPermitido);

    if(true) {
        console.log(accesoPermitido);
    }
}

// console.log(accesoPermitido);

if (true) {
    var nombre = 'Kendall';
}

console.log(nombre);