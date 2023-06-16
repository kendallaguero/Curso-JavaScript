/*
    Ciclo for Each
    Es un metodo de los arreglos que podemos usar para recorrer los elementos.
*/
// const amigos = ['Kendall', 'Manuel', 'Chris'];
// amigos.forEach((amigo, index) => {console.log(`El amigo #${index} es: ${amigo}`)});

/*
    Ciclo for in
    Nos permite recorrer las propiedades de un objeto.
*/
// const persona = {
//    nombre: 'Kendall',
//    edad: 24,
//    correo: 'correo@correo.com',
// };

// for(propiedad in persona){
//    console.log(propiedad) = '';
// };
// console.log(persona);

/*
    Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Podemos recorrer: Arreglos, Cadenas de texto, Mapas y Listas de nodos, etc
*/
const etiquetas = document.head.children;
cconsole.log(etiquetas);

// etiquetas.forEach((etiqueta) => {
//     console.log(etiqueta);
// });

// for(elemento of etiquetas){
//     console.log(elemento);
// };

[...etiquetas].forEach((elemento) => console.log(elemento));