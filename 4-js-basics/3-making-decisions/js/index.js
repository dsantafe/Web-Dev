// ===== Declaración If =====
// Los operadores lógicos se utilizan a menudo para formar la condición.
let currentMoney = 5000;
let laptopPrice = 3000;

if (currentMoney >= laptopPrice){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log("Getting a new laptop!");
}

// ===== IF..Else Declaración =====
// La declaración else ejecutará el código entre sus bloques cuando la condición sea falsa. Es opcional con una declaración if.
currentMoney = 3000;
laptopPrice = 5000;

if (currentMoney >= laptopPrice){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log("Getting a new laptop!");
}
else{
    //La condición era falsa. Se ejecutará el código de este bloque.
    console.log("Can't afford a new laptop, yet!");
}

// ===== Condiciones y decisiones con operadores lógicos =====
// Los operadores lógicos se pueden utilizar para formar condiciones en sentencias if..else.
currentMoney = 4000;
laptopPrice = 3800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Precio del portátil al 20% de descuento

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //La condición era verdadera. Se ejecutará el código de este bloque.
    console.log("Getting a new laptop!");
}
else {
    //La condición era falsa. Se ejecutará el código de este bloque.
    console.log("Can't afford a new laptop, yet!");
}

// ===== Expresiones ternarias =====
// A continuación se muestra un ejemplo más tangible:
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
console.log(biggestNumber);

// La expresión ternaria es solo una forma compacta de escribir el siguiente código:
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}