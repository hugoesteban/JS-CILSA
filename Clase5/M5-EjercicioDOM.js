// 1) y 2)
let nombre = prompt("Ingresa tu nombre: ", "Nombre");
let apellido = prompt("Ingresa tu apellido: ", "Apellido");

// 3)
let parrafos = document.getElementsByTagName("p");
parrafos[0].innerHTML +=
  'Buscá mas info <a href="https://www.google.com.ar/">acá</a>.';

// 4)
let bienvenida = document.createElement("h2");
bienvenida.innerHTML = "Bienvenido " + nombre;
let padre = document.getElementsByTagName("body")[0];
let primerSubtitulo = document.getElementsByTagName("h3")[0];
padre.insertBefore(bienvenida, primerSubtitulo);

// 5)
let enlaces = document.getElementsByTagName("a");
let cantidadDeEnlaces = document.createElement("h3");
cantidadDeEnlaces.innerHTML =
  "La cantidad de enlaces de la página es: " + enlaces.length;
document.body.appendChild(cantidadDeEnlaces);

// 6)
function agrega() {
  let listadoDeNombres = document.getElementById("alumnos");
  let nuevoAlumno = document.createElement("li");
  nuevoAlumno.innerHTML = nombre + " " + apellido;
  listadoDeNombres.appendChild(nuevoAlumno);
}

// 7)
//con esta funcion mostramos el contenido faltante del ultimo parrafo
function muestra() {
  let elemento = document.getElementById("adicional");
  elemento.className = "visible";

  let enlace = document.getElementById("enlace");
  enlace.className = "oculto";
}
