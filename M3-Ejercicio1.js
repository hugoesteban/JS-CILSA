function informarRadioButton() {
  let radios = document.getElementsByName("nacionalidad");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      alert("Seleccionaste " + radios[i].value);
      break;
    }
  }
}
function comparaValores() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);
  if (numero1 > numero2) alert("El primero es mayor");
  else if (numero2 > numero1) alert("El segundo es mayor");
  else alert("Son iguales");
}
function sumaValores() {
  let numero3 = parseInt(document.getElementById("numero3").value);
  let numero4 = parseInt(document.getElementById("numero4").value);
  console.log("La suma es: ", numero3 + numero4);
  alert("La suma es: " + (numero3 + numero4));
}
