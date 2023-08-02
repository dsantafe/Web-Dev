// ===== Creando y llamando a una función =====
function displayGreeting() { // definición de función
    // Código de la función
    console.log('Hello, world!');
}

// llamando nuestra función
displayGreeting();

// ===== Pasar información a una función =====

function displayGreetingWithParam(name) {
    const message = `¡Hola, ${name}!`;
    console.log(message);
}

displayGreetingWithParam('Paco');
// dice "¡Hola, Paco!" cuando ejecutas el comando 

// ===== Valores predeterminados =====

function displayGreetingWithParamDefault(name, salutation = 'Hola') {
    console.log(`${salutation}, ${name}`);
}

displayGreetingWithParamDefault('Paco');
// dice "Hola, Paco"

displayGreetingWithParamDefault('Paco', 'Hola');
// dice "Bienvenido, Paco"

// ===== Parámetro =====

// Un ejemplo más completo puede verse así:
function add(firstValue, secondValue) {
    let sum = firstValue + secondValue;
    return sum;
}

// Invocación
let result = add(1, 3);
console.log(result); // imprime 4

// Valores predeterminados
function add5(firstValue, secondValue = 5) {
    return firstValue + secondValue;
}

// La invocación de la función anterior podría verse así:
add5(4) // devuelve 9
add5(4, 2) // devuelve 6

// ===== Ejercicios en clase =====

let nombresApellidos = prompt("Ingrese nombres:");
let edad = prompt("Ingrese edad:");
validarEdad(nombresApellidos, edad);

nombresApellidos = prompt("Ingrese nombres:");
edad = prompt("Ingrese edad:");
validarEdad(nombresApellidos, edad);

function validarEdad(nombresApellidosParam, edadParam) {
    alert("Hola " + nombresApellidosParam);
    alert(edadParam > 18 ? "Eres mayor de edad" : "Eres menor de edad"); // forma de validar lineal

    if (edadParam > 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}