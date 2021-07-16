// Crear variable para guardar y pedir 
var dias = prompt("Ingresa el número de días y lo convertiremos a Años, Semanas y Días")

// Convertir días en años
var dAnio = parseInt(dias)/365;

// Convertir días en semanas
var dSemana = parseInt(dias)/7

// Mostrar resultado
document.write(dias+ " días equivale a " +Math.floor(dAnio)+ " años aprox. También equivale a " +Math.floor(dSemana)+ " semanas aprox." );

