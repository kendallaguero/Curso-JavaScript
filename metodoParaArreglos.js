const colores = ['Rojo', 'Verde', 'Azul'];

/*
    .length 
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores.length );


/*
        .toString()
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString();

/*
        .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/

console.log(colores.join('-'));

/*
        .sort()
    Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort());

const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

/*
        .reverse()
    Nos permite ordenar unm arreglo de forma descendente.
*/

console.log(letras.reverse());
console.log(numeros.reverse());

/*
        .concat()
    Nos permite juntar dos arreglos en uno solo.
 */

const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);

console.log(arreglo3);

/*
        .push()
    Nos permite agregar un elemento al final de un arreglo.
 */

colores.push('Amarillo');
console.log(colores);

/*
        .pop()
    Nos permite eliminar el ultimo elemento de un arreglo.
*/
colores.pop();
console.log(colores);

/*
        .shift()
    Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const diaEliminado = dias.shift();
// console.log(diaEliminado);
console.log(dias[0]);

/*
        .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Kendall');
console.log(dias);

/*
        .splice()
    Nos permite insertar elemnetos a un arreglo donde le especificamos.
    - 1er parametro - posicion donde queremos comenzar a insertar los elementos.
    - 2do parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada.
    - Resto de parametros - Los elementos a insertar.
*/

const amigos = ['Kendall', 'Manuel', 'Carlos'];
amigos.splice(1, 2, 'Rafa', 'Chris');
console.log(amigos);

/*
        .slice()
    Nos permite copiar una parte de un arrelgo a otro.
    - 1er parametro - Posicion desde donde queremos copiar.
    - 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);