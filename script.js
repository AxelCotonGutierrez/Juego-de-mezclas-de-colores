// Axel Cotón Gutiérrez Copyright 2023

const colores = ['red', 'white', 'green', 'black']; 
const mezclas = {
    'redwhite': 'pink',
    'whitered': 'pink',
    'greenred': 'brown',
    'redgreen': 'brown',
    'blackwhite': 'grey',
    'whiteblack': 'grey'
};

let color1, color2, mezclaCorrecta;

let ultimaCombinacion = '';

function seleccionarColores() {
    let combinacion;
    do {
        color1 = colores[Math.floor(Math.random() * colores.length)];
        do {
            color2 = colores[Math.floor(Math.random() * colores.length)];
        } while (!esCombinacionValida(color1, color2));

        combinacion = color1 + color2;
    } while (combinacion === ultimaCombinacion); // Evitar repetir la misma combinación

    ultimaCombinacion = combinacion; // Actualizar la última combinación

    mezclaCorrecta = mezclas[color1 + color2];

    document.getElementById('color-circle-1').style.backgroundColor = color1;
    document.getElementById('color-circle-2').style.backgroundColor = color2;
}


function esCombinacionValida(color1, color2) {
    // Asegurarse de que los colores no sean iguales
    if (color1 === color2) return false;

    // Las demás reglas
    if (color1 === 'green' && color2 !== 'red') return false;
    if (color1 === 'black' && color2 !== 'white') return false;
    if (color1 === 'red' && (color2 === 'green' || color2 === 'black')) return false;
    if (color1 === 'white' && color2 === 'green') return false;
    return true;
}



function checkColor(colorSeleccionado) {
    const result = document.getElementById('result');
    if (colorSeleccionado === mezclaCorrecta) {
        result.innerHTML = '¡Correcto! Buen trabajo.';
        result.style.color = "green";
    } else {
        result.innerHTML = 'Incorrecto. Vuelve a intentarlo.';
        result.style.color = "red";
    }
}

function nextQuestion() {
    seleccionarColores();
    document.getElementById('result').innerText = '';
}

// Inicializar el primer juego
seleccionarColores();

// Navegación
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
});
