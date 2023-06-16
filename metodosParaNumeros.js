/*
    .toString()
*/
// const numero = 10;
// console.log(numero, typeof numero);

// const texto = numero.toString();
// console.log(texto, typeof texto);

/*
    .toFixed()
    Permite obtener un numero con la cantidad de decimales especificados.
*/
// const numero = 3.1415;
// console.log(numero.toFixed(3));

/*
    parseInt()
    Intenta transformar un valor a un entero.
*/
// const numero1 = parseInt(prompt('Escribe un numero'));
// const numero2 = -parseInt(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
    parseFloat()
    Intenta transformar un valor a un numero con decimales.
*/

// const numero1 = parseFloat(prompt('Escribe un numero'));
// const numero2 = parseFloat(prompt('Escribe un numero'));
// console.log(numero1 + numero2);

/*
    .Math.random()
    Genera un numero aleatorio entre 0 y 1.
*/
// const numero = Math.random();
// console.log(numero);

/*
    Math.floor()
    Redondea hacia abajo un numero.
*/
// console.log(Math.floor('10.1'));
// console.log(Math.floor('10.99'));

/*
    Math.ceil()
    Redondea hacia arriba un numero.
*/
// console.log(Math.ceil('10.1'));
// console.log(Math.ceil('10.99'));

/*
    Math.round()
    Redondea hacia el entero mas cercano
*/
// console.log(Math.round('10.1'));
// console.log(Math.round('10.99'));

/*
    Ejemplo de numero al azar de 0 a 100.
*/
// const numero = Math.random();

/*
    Operador Spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos
    en otro sitio.
*/
/*   const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
   const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
    console.log(comidaFavorita);

    const datosLogin = {
        correo: 'correo@correo.com',
        password: '123',
    };

    const usuario = {
        nombre: 'Kendall',
        ...datosLogin,
        edad: 24
    }

  console.log(usuario); */

/*
    Parametro Rest
    Permite que una funcion contenga un numero indefinido de argumentos.
    Los argumentos extra que encuentre los convertira en un arreglo. 
*/

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//    console.log(nombre, correo, datosAdicionales);
// }

// registrarUsuario('Kendall', 'correo@correo.com');
// registrarUsuario('Chris', 'chris@chris.com', 31, 'Costa Rica');

/*
    Destructuracion de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto
    y guardarlos en una variable.
*/

// const amigos = ['Kendall', 'Manuel', 'Chris'];
// const [amigo1, amigo2, amigo3] = amigos;
// console.log(amigo2);

// const persona = {
//    nombre: 'Jostin',
//    edad: 21,
//    pais: 'Costa Rica',
// };

// const {nombre, pais} = persona;
// console.log(nombre, pais);

// const mostrarEdad = ({nombre, edad}) => {
//    console.log(`${nombre} tiene ${edad} años`);
// };
// mostrarEdad(persona);