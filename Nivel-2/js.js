/*
VARIABLE ACUMULADO, ACUMULA LOS NUMERO QUE VAMOS CLICKEANDO 
VARIABLE CIFRA, ALMACENA LO QUE HAY EN EL DISPLAY 

Tenemos dos valores diferentes*/

//creo una variable vacia para poder operar entre los numeros y esta variable vaya almacenando los numeros clickeados
var cifra = "";
//Declaro variable acumulado para almacenar cada numero hasta llegar al final d la operacion
var acumulado = 0;

//hago otra variable de primera operacion, para que cuando cargue la calculadora empiece con una variable booleana
p_operacion = true;
//cada vez que apretamos el mas llamamos a la operacion sumar, cuando pulso =
//Uso booleanos para el =
var sumar = false;
var restar = false;

/**********************************************************************/
 
var dividir = false;
var multiplicar = false;

/*---------------FUNCIONES----------------- */

//ponemos numero para pasarle parametros de acuerdo a cada numero, ya que si ponemos un valor definido hay que hacer cada numero separado
function display_numeros(numero) {
  //document hace referencia en lo que es mi documento es decir la pagina web, el objeto documento tiene una serie de metodos, en lo que esta get element by id
  //identifico objeto y ahora accedo a su propiedad valor OBEJTO.PROPIEDAD=VALOR

  //En estas lineas se almacenan los numeros que apreto y la suma al proximo
  document.getElementById("display").value = cifra + numero;

  //lo que esta en el display se almacena en la variable cifra
  cifra = document.getElementById("display").value;
}

/**************************FUNCIONES OPERACIONES ******************************/

function suma() {
  if (restar) {
    acumulado = acumulado - parseInt(cifra);
    document.getElementById("display").value = acumulado;
  } else {
    //creo una variable para que almacene los numeros en caso de que sea una operacion multiple
    //la variable es igual a lo que se acumule mas lo que tengo alamcenado en cifra
    acumulado = acumulado + parseInt(cifra);
    //ALMACENO Y LUEGO RESETEO
    document.getElementById("display").value = acumulado;
  }
  //reseteo variable cifra para que almacene el nuevo numero luego de clickear el operador
  cifra = "";

  sumar = true;
  restar = false;
  //pongo la variable de la primera operacion en falsa ya que si ponemos una suma luego no seria la primera operacion
  p_operacion = false;
}

function resta() {
  //si no es la primera operacion realiza todo el if anidado
  if (p_operacion == false) {
    //si lo ultimo que hice fue sumar, guardalo y luego lo utilizo
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      document.getElementById("display").value = acumulado;
    } else {
      //si lo ultimo que hice no fue sumar, hace la resta normal
      acumulado = acumulado - parseInt(cifra);
      document.getElementById("display").value = acumulado;
    }
  } else {
    //y si es la primera operacion acumulado es igual a cifra
    acumulado = parseInt(cifra);
    //ponemos la primera operacion en falso, ya que no es la primera operacion
    p_operacion = false;
  }
  cifra = "";
  //sumar es falso
  sumar = false;
  restar = true;
}

function multiplicacion() {
  //si no es la primera operacion realiza todo el if anidado
  if (p_operacion == false) {
    //si lo ultimo que hice fue sumar, guardalo y luego lo utilizo
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      document.getElementById("display").value = acumulado;
      //compruebo la suma y la resta
    } else if (restar) {
      acumulado = acumulado - parseInt(cifra);
      document.getElementById("display").value = acumulado;
    } else {
      //si lo ultimo que hice no fue sumar ni restar, hace la multiplicacion normal
      acumulado = acumulado * parseInt(cifra);
      document.getElementById("display").value = acumulado;
    }
  } else {
    //y si es la primera operacion acumulado es igual a cifra
    acumulado = parseInt(cifra);
    //ponemos la primera operacion en falso, ya que no es la primera operacion
    p_operacion = false;
  }

  cifra = "";
  sumar = false;
  restar = false;
  multiplicar = true;
}

function division() {
  //si no es la primera operacion realiza todo el if anidado
  if (p_operacion == false) {
    //si lo ultimo que hice fue sumar, guardalo y luego lo utilizo
    if (sumar) {
      acumulado = acumulado + parseInt(cifra);
      document.getElementById("display").value = acumulado;
      //compruebo la suma y la resta y multiplicacion
    } else if (restar) {
      acumulado = acumulado - parseInt(cifra);
      document.getElementById("display").value = acumulado;
    } else if (multiplicar) {
      acumulado = acumulado * parseInt(cifra);
      document.getElementById("display").value = acumulado;
    } else {
      //si lo ultimo que hice no fue sumar ni restar ni multiplicar, hace la division normal
      acumulado = acumulado / parseInt(cifra);
      document.getElementById("display").value = acumulado;
    }
  } else {
    //y si es la primera operacion acumulado es igual a cifra
    acumulado = parseInt(cifra);
    //ponemos la primera operacion en falso, ya que no es la primera operacion
    p_operacion = false;
  }

  cifra = "";
  sumar = false;
  restar = false;
  dividir = true;
  multiplicar = false;
}

/**********************FUNCION RESULTADO ************************************/
//esta funcion va a detectar la operacion y luego nos dara el resultado es decir el =
function resultado() {
  if (sumar) {
    //estoy diciendo que el valor del display tiene que ser acumulado, asi a medida que haga la operacion vaya mostrandolo
    document.getElementById("display").value = acumulado + parseInt(cifra);
  } else if (restar) {
    document.getElementById("display").value = acumulado - parseInt(cifra);
  } else if (multiplicar) {
    document.getElementById("display").value = acumulado * parseInt(cifra);
  } else if (dividir) {
    document.getElementById("display").value = acumulado / parseInt(cifra);
  }
  //acumulado no sera lo que habia acumulado sino lo que aparece en el display
  acumulado = parseInt(document.getElementById("display").value);
  //reseteo variable cifra para empezar otra operacion
  cifra = 0;
}
