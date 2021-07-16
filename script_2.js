// Se crean dos variables y se le pide al usuario ingresar un número
var n1 = prompt("Ingresa primer número (Mayor que 0): ");
var n2 = prompt("Ingresa segundo número (Diferente al primer número y mayor que 0): ");

// Calcular Suma - Resta - División - Multimplicación - Módulo
var suma = parseInt(n1)+parseInt(n2);
var resta = parseInt(n1)-parseInt(n2);
var division = parseInt(n1)/parseInt(n2);
var multiplicacion = parseInt(n1)*parseInt(n2);
var modulo = parseInt(n1)%parseInt(n2);

// Mostrar resultado
document.write("El resultado de la suma es " +suma + " <br>");
document.write("El resultado de la resta es " +resta + " <br>");
document.write("El resultado de la división es " +division + " <br>");
document.write("El resultado de la multiplicación es " +multiplicacion + " <br>");
document.write("El resultado del módulo es " +modulo);







