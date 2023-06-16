/*
        .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1
*/

const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];
// console.log(nombres.indexOf('Kendall'));

/*
        .lastIndexOf()
    Obtenemos el ultimo index de un elemento.
*/

// console.log(nombres.lastIndexOf('Rafael'));

/*
        .forEach()
    Nos permite ejecutar una funcion por cada elemento.
*/

// nombres.forEach((nombre, index) =>{
//    console.log(`Hola ${nombres} (${index})`);
// });

/*
        .find()
    Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const resultado = nombres.find((nombre) => {
//    if (nombre[0] === 'E') {
//        return nombre;
//    }
// });

// console.log(resultado);

/*
        .map()
    Nos permite ejecutar una funcion por cada elemento y crear un nuevo 
    arreglo en base a los resultados de esa funcion.
*/

// const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
// console.log(nombresMayusculas);

/*
        .filter()
    Nos permite ejecutar una funcion por cada elemento y
    luego crear un arreglo en base a los resultados de esa funcion.
*/

// const nombres4Letras = nombre.filter((nombres) => {
//    return nombres;
// });
// console.log(nombres4Letras);  

/*
        .every()
        Nos permite ejecutar una funcion por cada elemento y
        nos devuelve true si TODOS los elementos cumplieron la condicion.
*/

// const nombresValidos = nombres.every((nombres) => {
//     if (typeof nombres === 'string') {
//        return true;
//    } else {
//    return false;
//    }
// });
// console.log('Todos los nombres son validos? ' + nombresValidos);

 /*
        .some()
    Nos permite ejecutar un condicional sobre cada elemento y nos
    devuelve true si algun elemento cumplio la condicion.
 */

const nombresValidos = nombres.some((nombres) => {
    if (typeof nombres !== 'string') {
        return true;
    } else {
        return false;
    }
});
console.log('El arreglo es invalido? ' + nombresValidos);
// true si hay algun valor invalido
// false si no hay algun valor invalido