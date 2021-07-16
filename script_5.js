// Crear variable y que usario ingrese 5 números
let n1 = prompt("Ingrese número 1");
let n2 = prompt("Ingrese número 2");
let n3 = prompt("Ingrese número 3");
let n4 = prompt("Ingrese número 4");
let n5 = prompt("Ingrese número 5");

// Calcular suma de todos los números
let sumaTodos = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5);

// Promedio de todos los númeos
let promedio = sumaTodos/5;

// Mostar resultados
document.write("La suma de todos los números es " +sumaTodos+ ". El promedio es " +promedio+ ".")
