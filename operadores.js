/*
    Operadores Aritmeticos
    = Operador de asignacion. Se usa para asignar valores a una variable
    + Suma
    - Resta
    * Multiplicacion
    / Division
    % Modulo
    ++ Aumento
    -- Disminucion
*/

//const resultado = 10 + 10;
//const resultado2 = 10 - 10;
//const resultado3 = 10 % 3;

// let numero = 1;
//numero--;


/*
    Operadores de asignacion
    += Suma un numero al valor de una variable.
    -= Resta un numero al valor de una variable.
    *= Multiplica un numero al valor de una variable.
    /= Divide un numero al valor de una variable.
    %= Modulo un numero al valor de una variable. Obtiene el sobrante de una division y lo asigna a la variable.

*/

let numero = 10;
//numero = numero + 5;
numero += 5;


/*
    Operadores de comparacion:
    Nos permiten comparar valores
    ==  Igual que
    ===  Igual en valor y tipo de valor
    !=  Diferente
    !==  Diferente en valor y tipo de valor
    >  Mayor que
    <  Menor que
    >=  Mayor o igual que
    <=  Menor o igual que
    ?  Operador ternario
*/

// const resultado = 5 > 1; // true
//const resultado = 20 <= 20; // true
// const resultado = 10 == 10; // true ( Solo comprara el valor)
// const resultado = 10 === '10'; // false ( compara si el valor es igual y si el tipo es igual)
const resultado = 7 > 1 ?  'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';

console.log(resultado);