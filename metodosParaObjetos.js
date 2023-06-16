const usuario = {
    nombre: 'Kendall',
    edad: 24,
    amigos: ['Chris', 'Eddy', 'Manuel'],
    saludo: () => {
        console.log('Hola');
    },
};

/*
        Metodos propios
    - Los objetos pueden tener metodos personalizados.
*/
// usuario.saludo();

/*
        Object.keys()
    - Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
// const resultados = Object.keys(usuario);  

/*
        Object.values()
    - Nos devuelve un arreglo con los valores (values) del objeto.
*/
// const resultados = Object.values(usuario);

/*
        Object.entries()
    - Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

// const resultados = Object.entries(usuario); 

// console.log(resultados);  

/*
        .length - Devuelve el numero de caracteres de una cadena de texto
*/
// const texto = 'Hola soy Kendall';
// console.log(texto.length);

/*
        .indexOf() .lastIndexOf() - Devuelve el index del primer/ultimo caracter especificando.
*/

// const texto = 'Hola soy Kendall';
// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o'));

/*
        .slice() - Devuelve un fragmento de una cadena de texto.
        1er parametro - index desde donde queremos cortar.
        2do parametro (opcional) - index hasta donde queremos cortar.
*/
const texto = 'Hola soy Kendall';
const index = texto.indexOf('K');
const lastIndex = texto.lastIndexOf('K')
// console.log(texto.slice(index, lastIndex + 1));
console.log(texto.slice(10, 14));

console.log(texto);