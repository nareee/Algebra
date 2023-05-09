// Obtener los elementos HTML necesarios
const selectNumDimensiones = document.getElementById("num-dimensiones");
const coordenadas2D = document.getElementById("coordenadas-2d");
const coordenadas3D = document.getElementById("coordenadas-3d");
const z3Container = document.getElementById("z-3-container");
const btnCalcular = document.getElementById("btn-calcular");
const spanMagnitud = document.getElementById("magnitud");
const pFormulaMagnitud = document.getElementById("formula-magnitud");
const spanAngulo = document.getElementById("angulo");
const pFormulaAngulo = document.getElementById("formula-angulo");
const spanSentido = document.getElementById("sentido");
const spanCuadrante = document.getElementById("cuadrante");


// Agregar evento al select para cambiar las coordenadas mostradas según el número de dimensiones seleccionado
selectNumDimensiones.addEventListener("change", (event) => {
  const numDimensiones = event.target.value;
  if (numDimensiones === "2") {
    coordenadas2D.style.display = "block";
    coordenadas3D.style.display = "none";
  } else if (numDimensiones === "3") {
    coordenadas2D.style.display = "none";
    coordenadas3D.style.display = "block";
  }
});

// Agregar evento al botón para calcular la magnitud y el ángulo del vector
btnCalcular.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de las coordenadas según el número de dimensiones seleccionado
  let x, y, z;
  const numDimensiones =
    selectNumDimensiones.options[selectNumDimensiones.selectedIndex].value;
  if (numDimensiones === "2") {
    x = Number(document.getElementById("x-2d").value);
    y = Number(document.getElementById("y-2d").value);
    z = 0;
  } else if (numDimensiones === "3") {
    x = Number(document.getElementById("x-3d").value);
    y = Number(document.getElementById("y-3d").value);
    z = Number(document.getElementById("z-3d").value);
  }

  // Comprobar si se han introducido valores en todas las coordenadas antes de calcular la magnitud y el ángulo del vector
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert("Introduce un valor numérico en todas las coordenadas");
    return;
  }

  // Calcular la magnitud y el ángulo del vector
  const magnitud = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  const angulo =
    (numDimensiones === "2"
      ? Math.atan2(y, x)
      : Math.atan2(Math.sqrt(x ** 2 + y ** 2), z)) *
    (180 / Math.PI);
    let sentido;
    if (numDimensiones === "2") {
      if (x > 0 && y > 0) {
        sentido = "primer cuadrante";
      } else if (x < 0 && y > 0) {
        sentido = "segundo cuadrante";
      } else if (x < 0 && y < 0) {
        sentido = "tercer cuadrante";
      } else if (x > 0 && y < 0) {
        sentido = "cuarto cuadrante";
      } else if (x === 0 && y === 0) {
        sentido = "punto en el origen";
      } else if (x === 0) {
        sentido = "eje Y";
      } else if (y === 0) {
        sentido = "eje X";
      }
    } else if (numDimensiones === "3") {
      if (x === 0 && y === 0 && z === 0) {
        sentido = "punto en el origen";
      } else if (x > 0 && y > 0 && z > 0) {
        sentido = "primer octante";
      } else if (x < 0 && y > 0 && z > 0) {
        sentido = "segundo octante";
      } else if (x < 0 && y < 0 && z > 0) {
        sentido = "tercer octante";
      } else if (x > 0 && y < 0 && z > 0) {
        sentido = "cuarto octante";
      } else if (x > 0 && y > 0 && z < 0) {
        sentido = "quinto octante";
      } else if (x < 0 && y > 0 && z < 0) {
        sentido = "sexto octante";
      } else if (x < 0 && y < 0 && z < 0) {
        sentido = "séptimo octante";
      } else if (x > 0 && y < 0 && z < 0) {
        sentido = "octavo octante";
      } else if (x === 0 && y === 0) {
        sentido = "eje Z";
      } else if (x === 0 && z === 0) {
        sentido = "plano YZ";
      } else if (y === 0 && z === 0) {
        sentido = "plano XZ";
      } else if (x === 0) {
        sentido = "eje YZ";
      } else if (y === 0) {
        sentido = "eje XZ";
      } else if (z === 0) {
        sentido = "eje XY";
      }
    }
    
  // Mostrar la magnitud y el ángulo del vector en la página
  spanMagnitud.textContent = `La magnitud es: ${magnitud.toFixed(2)}`;
  pFormulaMagnitud.style.display = "block";
  spanAngulo.textContent = `El ángulo es: ${angulo.toFixed(2)}°`;
  pFormulaAngulo.style.display = "block";
  spanSentido.textContent = `El vector esta en el : ${sentido}`;
});



