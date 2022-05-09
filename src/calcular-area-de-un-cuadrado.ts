let btnEnv = document.getElementById("btnEnv");
rotulo.innerHTML = "Ingrese Base y Altura";
btnEnv.addEventListener("click", () => {
  let numero1 = document.getElementById("numero1");
  let base: number = Number(numero1.value);
  let numero2 = document.getElementById("numero2");
  let altura: number = Number(numero2.value);
  let area: number = Number(base * altura);
  console.log("El area es:", area);
});
