const personaArreglo = ['Kendall', 24, 'correo@correo.com', true, true]; 

const persona = {
    nombre: 'Kendall',
    edad: 24,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['Negro', 'Blanco'],
    saludo: function(){
        alert('Hola');
    },
};

// console.log(persona.nombre);
// console.log(persona['edad']);

const variable = 'suscripciones';
// console.log(persona[variable]);

// console.log(persona.suscripciones.correo);

persona.pais = 'Costa Rica';
persona.pais = 'España';

console.log(persona);
persona.saludo();