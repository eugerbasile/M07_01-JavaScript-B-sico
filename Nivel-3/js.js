//Declaro variables para utilizar mas adelante
var opeA;
var opeB;
var operacion;

function init() {
  //variables
  var resultado = document.getElementById("resultado");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var igual = document.getElementById("igual");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
}
//Dentro de la misma función init nos encargaremos de programar los eventos de click sobre todos los elementos tipo button  que son números, operaciones, igual y reset.
/*********************EVENTOS **********************/
//Eventos de click
uno.onclick = function (e) {
  resultado.textContent = resultado.textContent + "1";
};
dos.onclick = function (e) {
  resultado.textContent = resultado.textContent + "2";
};
tres.onclick = function (e) {
  resultado.textContent = resultado.textContent + "3";
};
cuatro.onclick = function (e) {
  resultado.textContent = resultado.textContent + "4";
};
cinco.onclick = function (e) {
  resultado.textContent = resultado.textContent + "5";
};
seis.onclick = function (e) {
  resultado.textContent = resultado.textContent + "6";
};
siete.onclick = function (e) {
  resultado.textContent = resultado.textContent + "7";
};
ocho.onclick = function (e) {
  resultado.textContent = resultado.textContent + "8";
};
nueve.onclick = function (e) {
  resultado.textContent = resultado.textContent + "9";
};
cero.onclick = function (e) {
  resultado.textContent = resultado.textContent + "0";
};
reset.onclick = function (e) {
  resetear();
};
suma.onclick = function (e) {
  opeA = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = function (e) {
  opeA = resultado.textContent;
  operacion = "-";
  limpiar();
};
multiplicacion.onclick = function (e) {
  opeA = resultado.textContent;
  operacion = "*";
  limpiar();
};
division.onclick = function (e) {
  opeA = resultado.textContent;
  operacion = "/";
  limpiar();
};
igual.onclick = function (e) {
  opeB = resultado.textContent;
  resolver();
};

/*Dentro de este bloque hago referencia a dos funciones, limpiar y resetear que creo más adelante.

Para los eventos de suma, resta, multiplicación y división siempre guardo en la variable operandoa lo que tenemos en el contenedor resultado y la operación que se desea realizar.

Para el botón de igual almacenamos en operandob lo que hay en el contenedor de resultado y mandamos llamar el metodo resolver.

Creo la función limpiar donde simplemente pongo en vacío el contenedor de resultado y también creo la función resetear para resetear las variables operandoa, operandob y operacion.*/
/****************METODOS*******************************/

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  opeA = 0;
  opeB = 0;
  operacion = "";
}

/*Finalmente creo la función resolver, de acuerdo a los valores que se han ingresado realizamos la operación necesaria y mostramos el resultado en el contenedor de resultado. */

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(opeA) + parseFloat(opeB);
      break;

    case "-":
      res = parseFloat(opeA) - parseFloat(opeB);
      break;

    case "*":
      res = parseFloat(opeA) * parseFloat(opeB);
      break;

    case "/":
      res = parseFloat(opeA) / parseFloat(opeB);
      break;
  }
  resetear();
  resultado.textContent = res;
}
