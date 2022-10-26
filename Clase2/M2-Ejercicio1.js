let persona = [];

persona[0] = prompt("Ingresa tu nombre: ", "Nombre");
persona[1] = prompt("Ingresa tu apellido: ", "Apellido");
persona[2] = prompt("Ingresa tu edad: ", "Edad");
persona[3] = prompt("Ingresa ciudad dónde vives: ", "Ciudad");

for (let index = 0; index < persona.length; index++) {
  document.write("<br/> ", persona[index]);
}
