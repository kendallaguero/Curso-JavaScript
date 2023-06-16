/*
    .length - Devuelve el numero de caracteres de una cadena de texto.
*/

// const texto = 'Hola Mundo';
// console.log(texto.length);

/*
    .indexOf() .lastIndexOf() - Devuelve el index del primer/ultimo caracter especificado.
*/

// const texto = 'Hola Mundo';
// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o'));

/*
    .slice() - Devuelve un fragmento de una cadena de texto.
    1er parametro - index donde queremos cortar
    2do parametro - index hasta donde queremos cortar
*/
//const texto = 'Hola Mundo';
// const index = texto.indexOf('M');
// console.log(texto.slice(index));

/*
    .replace() - Devuelve una cadena de texto en donde reemplaza un valor por otro.
    1er parametro - el texto que queremos reemplazar
    2do parametro - el texto que queremos poner en lugar del primer parametro
*/
// const texto = 'Hola Mundo';
// console.log(texto.replace('Mundo', 'Kendall'));

/*
    .split() - Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.

    1er parametro - el caracter que funcionara como separador.
*/
 const texto = 'Hola Mundo';
 console.log(texto.split(' '));

/*
    .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto de puras minusculas/mayusculas.
*/
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());