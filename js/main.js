document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos relevantes
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const lightModeStylesheet = document.getElementById('light-mode-style');
    const darkModeStylesheet = document.getElementById('dark-mode-style');
    const htmlElement = document.documentElement; // También puedes usar document.body

    // Agregar un controlador de eventos al botón de cambio de modo
    darkModeToggle.addEventListener('change', function() {
        // Verificar si el modo oscuro está activado o desactivado
        if (darkModeToggle.checked) {
            // Si está activado, cambiar a modo oscuro
            htmlElement.classList.add('dark-mode');
            lightModeStylesheet.disabled = true; // Deshabilitar la hoja de estilo del modo claro
            darkModeStylesheet.disabled = false; // Habilitar la hoja de estilo del modo oscuro
        } else {
            // Si está desactivado, cambiar a modo claro
            htmlElement.classList.remove('dark-mode');
            lightModeStylesheet.disabled = false; // Habilitar la hoja de estilo del modo claro
            darkModeStylesheet.disabled = true; // Deshabilitar la hoja de estilo del modo oscuro
        }
    });
});


// code

// Variables globales
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

const display = document.getElementById('display');

// Función para limpiar el display
function limpiar() {
    display.value = '';
}

// Función para cambiar el signo del número
function cambiarSigno() {
    if (display.value !== '') {
        display.value = parseFloat(display.value) * -1;
    }
}

// Función para agregar el porcentaje
function agregarPorcentaje() {
    if (display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}

// Función para agregar un dígito al display
function agregarDigito(digito) {
    display.value += digito;
}

// Función para agregar el operador
function agregarOperador(op) {
    if (display.value === '') return;
    if (operacionActual !== '') {
        calcular();
    }
    operacion = op;
    operacionAnterior = display.value;
    display.value = '';
}

// Función para agregar un punto decimal
function agregarPunto() {
    if (display.value.includes('.')) return;
    display.value += '.';
}

// Función para calcular el resultado
function calcular() {
    let resultado;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(display.value);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            if (actual === 0) {
                resultado = 'Error';
            } else {
                resultado = anterior / actual;
            }
            break;
        default:
            return;
    }
    display.value = resultado;
    operacionActual = resultado;
    operacionAnterior = '';
    operacion = undefined;
}
