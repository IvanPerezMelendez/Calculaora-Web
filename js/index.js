
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

/* PORQUE ME ME DA ERROR AL CREAR EL DISPLAY!!! */ 
/* porque puedo crea un elemento de la clase calculadora pero no de la clase display?? */
const calc = new Calculadora();
const display = new Display(displayValorAnterior,displayValorActual);
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => Display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => Display.computar(boton.value))
});

