//primero creo las funciones
function suma(num1, num2) {
  alert("La suma es: " + (num1 + num2));
}

function resta(num1, num2) {
  alert("La resta es: " + (num1 - num2));
}

function multiplicacion(num1, num2) {
  alert("La multiplicacion es: " + num1 * num2);
}

function division(num1, num2) {
  alert("La division es: " + num1 / num2);
}




//hago un bucle para que se repita si el usuario lo desea
var repetir = "si";
//hago bucle fuera de las funciones para optimizar recursos
do {
  //luego le pregunto al usuario y creo variables

  alert("A continuacion haremos una Calculadora Arcaica");

  //transformo string a numero, ya que siempre se considera como texto y cuando usamos el operador de suma + , concatena
  var operador1 = parseInt(prompt("Introduce el primer nº"));
  var operador2 = parseInt(prompt("Introduce el segundo nº"));

  var operacion = prompt(
    "¿Que operacion deseas realizar? Sumar(+) | Restar(-) | Multiplicar(*) | Dividir(/)"
  );

  //despues con el if planteo las diferentes operaciones

  if (operacion == "sumar" || operacion == "+" || operacion == "Sumar") {
    suma(operador1, operador2);
  } else if (
    operacion == "restar" ||
    operacion == "-" ||
    operacion == "Restar"
  ) {
    resta(operador1, operador2);
  } else if (
    operacion == "multiplicar" ||
    operacion == "*" ||
    operacion == "Multiplicar"
  ) {
    multiplicacion(operador1, operador2);
  } else if (
    operacion == "dividir" ||
    operacion == "/" ||
    operacion == "Dividir"
  ) {
    division(operador1, operador2);
  } else {
    alert("Esta operacion no esta contemplada");
  }



  
  //Cierro el bucle mientras la respuesta sea si
  repetir = prompt("¿Deseas repetir?");
} while (repetir == "si");
