// Crear variables para guardar y pedir temperatura en ºC
var celsius = prompt("Ingresa la temperatura en ºC")

// Calcular conversión a Kelvin y Fahrenheit
var kelvin = parseInt(celsius) + 273.15;
var farenheit = (parseInt(celsius) * 9/5) + 32;


// Mostrar resultado en Kelvin y Fahrenheit
document.write(celsius+ "ºC son " +kelvin+ " ºK y " +farenheit+ " ºF");
