let btnEnv = document.getElementById("btnEnviar");
let datos = document.getElementById("datos");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese un dato";
// btnEnviar.innerHTML = "Esto es un boton";
btnEnv.addEventListener("click", () => {
  console.log("el dato ingresado es ", datos.value);
});
