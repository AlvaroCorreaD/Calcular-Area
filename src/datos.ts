// let btnEnv = document.getElementById("btnEnviar");
// let datos = document.getElementById("datos");
// let rotulo = document.getElementById("rotulo");
// rotulo.innerHTML = "Ingrese un dato";
// // btnEnviar.innerHTML = "Esto es un boton";
// btnEnv.addEventListener("click", () => {
//   console.log("el dato ingresado es ", datos.value);
// });

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let base: number = Number(dato1.value);
let altura: number = Number(dato2.value);
let area: number = base * altura;
// let btnEnv = document.getElementById("btnEnviararea");
// btnEnv.addEventListener("click", () => {
  console.log("El area es:", area);
});
