document.getElementById("formTask").addEventListener("submit", guardarTarea);

function guardarTarea(evento) {
  let titulo = document.getElementById("titulo").value;
  let descripcion = document.getElementById("descripcion").value;

  const tarea = {
    titulo,
    descripcion,
  };
  // console.log(tarea);
  // localStorage.setItem("tareas", JSON.stringify(tarea));
  //console.log(localStorage.getItem("tareas")); como String
  //console.log(JSON.parse(localStorage.getItem("tareas"))); como Object

  if (localStorage.getItem("tareas") === null) {
    let tareas = [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }
  obtenerTareas();
  document.getElementById("formTask").reset();
  evento.preventDefault(); //usar para poder ver salida en consola
}

function obtenerTareas() {
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  let listaTareas = document.getElementById("tareas");

  listaTareas.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    let title = tareas[i].titulo;
    let description = tareas[i].descripcion;
    listaTareas.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${title} - ${description}</p>
        <a class="btn btn-danger" onclick="eliminarTarea('${title}')">Eliminar</a>
        </div>
        </div>`;

    //console.log(tareas[i]);
  }
}

function eliminarTarea(titulo) {
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo == titulo) {
      tareas.splice(i, 1);
    }
  }
  localStorage.setItem("tareas", JSON.stringify(tareas));
  obtenerTareas();
}

obtenerTareas();
