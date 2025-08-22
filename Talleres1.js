// ======================================
// Taller de Ejercicios Cortos 

// Ejercicio 1.1
var nombre = "Laura";
console.log("Ejercicio 1.1 - Primer nombre:", nombre);

nombre = "Andrea"; // 
console.log("Ejercicio 1.1 - Nuevo nombre:", nombre);

// Ejercicio 1.2
const nombreConst = "Laura";
console.log("Ejercicio 1.2 - Primer nombre con const:", nombreConst);
// nombreConst = "Andrea"; // Esto falla: const no permite reasignar

// Ejercicio 1.3
if (false) {
    let edad = 20;
    console.log("Edad dentro del bloque:", edad);
}
// console.log(edad); // Error: edad no esta definida 
// Explicacion: let solo existe dentro del bloque de las llaves { }

// 2. Tipos de Datos (Primitivos y Complejos)

// Ejercicio 2.1
let texto = "Hola";       // string
let numero = 42;          // number
let esVerdadero = true;   // boolean
let valorNulo = null;     // null
let sinDefinir;           // undefined

console.log(typeof texto);       // string
console.log(typeof numero);      // number
console.log(typeof esVerdadero); // boolean
console.log(typeof valorNulo);   // object (bug)
console.log(typeof sinDefinir);  // undefined

// Ejercicio 2.2
let persona = {
    nombre: "Laura",
    edad: 19
};

let hobbies = ["leer", "correr", "viajar"];

console.log(typeof persona); 
console.log(typeof hobbies); 
console.log(Array.isArray(hobbies)); 

// 3. Conversion de Tipos


// Ejercicio 3.1 
let numero1 = 10;
let numero2 = "5";

console.log(numero1 + numero2); // "105"  concatenacion (10 se convierte a string)
console.log(numero1 * numero2); // 50  "5" se convierte a numero

// Ejercicio 3.2 
let numeroComoString = String(25);
console.log(numeroComoString, typeof numeroComoString);

let textoComoNumero = Number("100");
console.log(textoComoNumero, typeof textoComoNumero);

console.log(Boolean(""));     // false
console.log(Boolean("hola")); // true


// 4. Operadores, Condicionales, Ciclos y Excepciones


// Ejercicio 4.1
console.log(10 === "10"); // false comparacion estricta (tipo distinto)
console.log(10 == "10");  // true  comparacion flexible (convierte tipos)

// Ejercicio 4.2
let numeroCheck = 7;
if (numeroCheck % 2 === 0) {
    console.log("Ejercicio 4.2 - El numero es par");
} else {
    console.log("Ejercicio 4.2 - El numero es impar");
}

// Ejercicio 4.3
for (let i = 1; i <= 5; i++) {
    console.log("Ejercicio 4.3 - Numero:", i);
}

// Ejercicio 4.4
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ejercicio 4.4 - Se capturo un error:", error.message);
}


// 5. Funciones y Arrow Functions


// Ejercicio 5.1
function multiplicar(a, b) {
    return a * b;
}
console.log("Ejercicio 5.1 - multiplicar:", multiplicar(3, 4));

// Ejercicio 5.2
const multiplicarArrow = (a, b) => a * b;
console.log("Ejercicio 5.2 - multiplicarArrow:", multiplicarArrow(3, 4));

// Ejercicio 5.3
const saludar = () => "¡Hola a todos!";
console.log("Ejercicio 5.3 - saludar:", saludar());


// 6. Scope y Contextos


// Ejercicio 6.1
let globalVar = "Soy global";

function miFuncion() {
    let localVar = "Soy local";
    console.log("Dentro de la funcion:", globalVar); // funciona
    console.log("Dentro de la funcion:", localVar);  // funciona
}
miFuncion();
// console.log(localVar); // Error: localVar no esta definida fuera

// Ejercicio 6.2
let coche = {
    marca: "Toyota",
    mostrarMarca: function () {
        console.log("Ejercicio 6.2 - La marca es:", this.marca);
    }
};
coche.mostrarMarca();
// Explicación: this se refiere al objeto coche


// 7. Arrays


// Ejercicio 7.1 (Mutables)
let frutas = ["Manzana", "Banana"];
console.log("Ejercicio 7.1 - Inicial:", frutas);

frutas.push("Naranja");
console.log("Ejercicio 7.1 - Despues de push:", frutas);

frutas.pop();
console.log("Ejercicio 7.1 - Despues de pop:", frutas);

// Ejercicio 7.2
let numeros = [1, 2, 3];
let dobles = numeros.map(n => n * 2);
let mayoresA1 = numeros.filter(n => n > 1);

console.log("Ejercicio 7.2 - dobles:", dobles);
console.log("Ejercicio 7.2 - mayoresA1:", mayoresA1);

// Ejercicio 7.3 
frutas.forEach(fruta => console.log("Ejercicio 7.3 - fruta:", fruta));

let banana = frutas.find(f => f === "Banana");
console.log("Ejercicio 7.3 - Encontrada:", banana);

let indiceManzana = frutas.findIndex(f => f === "Manzana");
console.log("Ejercicio 7.3 - indice de Manzana:", indiceManzana);


// 8. Objetos y Clases


// Ejercicio 8.1
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    mostrarInfo: function () {
        console.log(`Ejercicio 8.1 - Libro: "${this.titulo}" de ${this.autor}`);
    }
};
libro.mostrarInfo();

// Ejercicio 8.2
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
let animal1 = new Animal("Firulais");
console.log("Ejercicio 8.2 - Animal:", animal1.saludar());

// Ejercicio 8.3
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    saludar() {
        return `Guau, soy ${this.nombre}, un ${this.raza}`;
    }
}
let perro1 = new Perro("Max", "Labrador");
console.log("Ejercicio 8.3 - Perro:", perro1.saludar());