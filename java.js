function saludo() {
  var nombre = prompt ("Por favor, ingrese su nombre");

  if (nombre === "") {
    alert("Por favor, ingrese su nombre");
  } else {
    alert ("¡Bienvenido, " +nombre+ "!");
  }
}

saludo();