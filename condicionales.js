// Estructura de una condicional

// if(true){
    // codigo a ejecutar
// }

// Ejemplo #1:
// const usuario = {
    // edad: 17,
    // pais: 'España',
    //ticket: true,
// }

// if(usuario.edad > 17){
   // console.log('El usuario es mayor de edad, puede entrar al concierto ');
// } else {
   //  console.log('El usuario es menor de edad, no puede entrar al concierto ');
// };

// Ejemplo #2 - combinando operadores
const usuario = {
    edad: 17,
    pais: 'España',
    ticket: true,
};

if(usuario.edad >= 18) {
    if (usuario.ticket) {
        console.log('El usuario es mayor de edad y tiene ticket.');
    } else {  
        console.log('El usuario es mayor de edad, pero  no tiene ticket.');
    } 
} else {
    console.log('El usuario es menor de edad.');
}


