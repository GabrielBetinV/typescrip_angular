
const skills: string[] = ['Bash','Counter','Healing'];


// Interfaz, se puede colocar opcional
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// Objeto literal de javascript
const strider1 = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};




// Objeto tipado con una interfaz
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

// Se puede agregar lo que falta
strider.hometown = 'Rivendell';


// imprimir en tabla
console.table(strider1)
console.table(strider)

console.log(skills);


// -------------------------------------------------------



/*
    ===== Código de TypeScript =====
*/

/*Arreglos*/

/* Actualmente este arreglo es de tipo Any (Recibe cualquier datos
    pero se debe evitar hacer esto) */
    let habilidades = [1, 'Gabriel', [10,10,15]];

    console.log(habilidades);
    
    /* En este caso TS interpreta el arreglo de string */
    
    let habili = ['Gabriel','Stefany','Angel','Samuel'];
    
    console.log(habilidades);
    console.log(habili);
    
    /* En este caso TS interpreta el arreglo de string o de numero, pasar ek cursor para compprobar */
    
    let habilid = ['Gabriel','Stefany','Angel','Samuel',10];
    
    console.log(habilid);
    
    /*Insertar datos*/
    
    habilidades.push('David')
    
    console.log(habilidades);
    
    
    /*Especificando el tipo de datos en arreglos*/
    
    /* se debe evitar la variedad de tipo de datos */
    let hab: (boolean | string | number) []= ['Bash', 'Couter',10];
    
    hab.push(true);
    
    console.log(hab);
    
    
    /*Esto si se puede*/
    
    let arreglo:string[] = ['Hola', 'Adios']
    
    arreglo.push('Llegue')   
    
    
    console.log(arreglo);
    
    
    /* Objetos de tipo any: aunque no se inicialice una propiedad, se puede agregar mas adelante
    NO es buena practica, lo mejor es restringir
    */
    
    const personaje1: any = {
    
         nombre: 'Strider',
         hp: 100,
         habilidad: ['Correr','Dormir']
    }
    
    personaje1.pueblo = 'Sabanalarga';
    
    console.log(personaje1);
    
    
    /* Objeto con restriccion */
    const personaje2 = {
    
        nombre: 'Strider',
        hp: 100,
        habilidad: ['Correr','Dormir']
    }
    
    /*personaje2.pueblo = 'Sabanalarga'; No deja agregar*/
    
    console.log(personaje2);
    
    
    /* Para trabajar con objetos se puede trabar con interface*/
    
    interface Personaje {
    
        nombre: string;
        hap: number;
        habilidades: string[];
    
        /* De esta manera colocamos la propiedad como opcional*/
        pueblo?: string;
    
    }
    
    /* Inicializamos el objeto del tipo de la interface*/
    
    const personaje3: Personaje = {
    
        nombre:'Gabriel',
        hap: 10,
        habilidades: ['sdsd','sdsd']
    
    }
        /* Ahora si permite agregarlo, porque lo colocamos como opcional en la interface* */
        personaje3.pueblo = 'Sabanalarga'; 
    
    
        console.table(personaje3)



export {};