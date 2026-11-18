// Variables para guardar lo que se va haciendo
var numeroAnterior = "";
var operacion = "";
var empezarNuevo = false;

// Agrega un número a la pantalla
function agregarNumero(numero) {
    var display = document.getElementById("display");

    // Si venimos de una operación o de un error, se empieza de cero
    if (empezarNuevo || display.value === "0" || display.value === "Error") {
        display.value = "";
        empezarNuevo = false;
    }

    display.value = display.value + numero;
}

// Guarda la operación (+, -, *, /)
function agregarOperacion(op) {
    var display = document.getElementById("display");

    if (display.value === "" || display.value === "Error") {
        return;
    }

    if (operacion !== "" && empezarNuevo === false) {
        calcularResultado();
        if (display.value === "Error") {
            return;
        }
    }

    numeroAnterior = display.value;
    operacion = op;
    empezarNuevo = true;
}

// Calcula el resultado cuando se aprieta el signo "="
function calcularResultado() {
    var display = document.getElementById("display");

    // Si falta la operación o el segundo número, no se hace nada 
    if (operacion === "" || empezarNuevo === true) {
        return;
    }

    var a = parseFloat(numeroAnterior);
    var b = parseFloat(display.value);
    var resultado = 0;

    if (operacion === "+") {
        resultado = a + b;
    } else if (operacion === "-") {
        resultado = a - b;
    } else if (operacion === "*") {
        resultado = a * b;
    } else if (operacion === "/") {
        if (b === 0) {
            display.value = "Error";
            numeroAnterior = "";
            operacion = "";
            empezarNuevo = true;
            return;
        }
        resultado = a / b;
    }

    // Se redondea un poco para que no salgan decimales tan largos
    display.value = Math.round(resultado * 10000000000) / 10000000000;
    numeroAnterior = "";
    operacion = "";
    empezarNuevo = true;
}

// Borra todo (botón C)
function limpiar() {
    document.getElementById("display").value = "";
    numeroAnterior = "";
    operacion = "";
    empezarNuevo = false;
}
