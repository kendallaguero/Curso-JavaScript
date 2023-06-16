/*
        Estructura de una clase:
        -Definicion 
        -Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
        -Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
        -Metodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado!');
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
};

const usuario = new Usuario('Kendall Manuel', 'Aguero');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Chris', 'Lorag');
console.log(usuario2.obtenerNombreCompleto());