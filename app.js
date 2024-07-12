let númeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let numeroMáximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    //Podemos usar el método innerHTML para cambiar por ejemplo el color de la pared
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === númeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        //Habilitar botón de juego nuevo deshabilitando el disable
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > númeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
    } else{
        asignarTextoElemento('p', 'El número secreto es mayor');
            }
            intentos++;//Verificar cuántos intentos hizo
            limpiarCaja();
        }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';//usar el id de nuestro input
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMáximo)+1;
    console.log(numeroGenerado);
    console.log(listaNúmerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == numeroMáximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }else{
        //Si el número generado esta incluido en la lista
        if (listaNúmerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNúmerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMáximo}`);
    númeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar nuevo aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar del botón de Nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}
condicionesIniciales();
