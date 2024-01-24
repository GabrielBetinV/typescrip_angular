
/*
    ===== Código de TypeScript =====
*/

// Constante en casi de que no  vaya a cambiar el valor
const name: string = 'Strider';

// Se puede colocar 2 tipos datos, o un valor como por ejemplo un string
let hpPoints: number | 'FULL' = 95;



const isAlive: boolean = true;


hpPoints = 'FULL';

// Imprimimos el objeto
console.log({
    name, hpPoints, isAlive
});





/* Variable  Implicita*/
let nombre1 = 'Strider';

/* Variable explicita*/

let nombre2: string = 'Gabriel'

/* Costantes */

const nombre3 = 'Strider';

/* Dos tipos de datos para una variable */


    let hp: number | string = 95;

/* Variables boolean*/

    let estaVivo: boolean = true;

    console.log(nombre1)
    console.log(nombre2)
    console.log(nombre3)
    console.log(hp)
    console.log(estaVivo)


    export {};