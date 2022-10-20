let posiciones = [
  "Jesús",
  "Laura",
  "Nahuel",
  "Mónica",
  "Maria",
  "Leandro",
  "Susana ",
];

document.write("Lista de alumnos" + "<br>");
document.write("1. " + posiciones[0] + "<br>");
document.write("2. " + posiciones[1] + "<br>");
document.write("3. " + posiciones[2] + "<br>");
document.write("4. " + posiciones[3] + "<br>");
document.write("5. " + posiciones[4] + "<br>");
document.write("6. " + posiciones[5] + "<br>");
document.write("7. " + posiciones[6] + "<br><br>");

auxiliar = posiciones[2];
posiciones[2] = posiciones[3];
posiciones[3] = auxiliar; //Cambio Mónica por Nahuel

posiciones.splice(5, 1); //Elimino a Leandro
posiciones.splice(1, 0, "Roberto", "Claudia"); //Agrego 2 alumnos desde [1]

for (let index = 0; index < posiciones.length; index++) {
  document.write(index + 1 + ". " + posiciones[index] + "<br>");
}
