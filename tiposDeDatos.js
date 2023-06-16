/*  Tipos de datos que podemos guardar en las variables :
    string - cadena de texto
    number - numero
    boolean - es o no (verdadero o falso)
    object - objeto
    function - funciones

    null - valor nulo
    undefined - valor sin definir
*/ 


// Cadena de texto
const nombre = 'Kendall';
const parrafo = 'Este es un "parrafo"';
const parrafo2 = "Este es un 'parrafo'";
// const parrafo3 = 'Este es un \'parrafo\'';


// Numero
const numero = 4;
const numero2 = -4.123;


// booleano
const usuarioConectado = false;
const mayorQue = 10 > 2;
 
console.log(mayorQue);

//  Arrays - Arreglos
const arreglo = ['texto', 45, true, { propiedad: 'valor' }, [1, 2, 3]];
console.log(arreglo);

// Objeto 
const persona = {
    nombre: 'Kendall',
    edad: 24,
    carro: {
        marca: 'Ford',
        color: 'negro',
    }
};

// Function - Funciones
function hola() {
    console.log('Hola');
}

hola();