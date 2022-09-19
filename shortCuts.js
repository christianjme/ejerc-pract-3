export function shortCuts(e) {
  switch (e.key) {
    case "a":
      alert("Hola mundo");
      break;
    case "c":
      let yOn = confirm("Aceptar o cancelar");
      console.log(yOn);
      break;
    case "p":
      let valor = prompt("Ingresa un valor");
      console.log(valor);
      break;
  }
}