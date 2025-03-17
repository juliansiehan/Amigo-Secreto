// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

function agregarAmigo() {
    let campo = document.getElementById('amigo');
    let nombreAmigo = campo.value.trim(); 

    if (nombreAmigo !== "") {
        listaAmigos.push(nombreAmigo); 
        actualizarLista(); 
        campo.value = "";  
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function actualizarLista() {
    let listaAmigosHTML = document.getElementById('listaAmigos'); 
    listaAmigosHTML.innerHTML = ""; 

    listaAmigos.forEach((amigo) => {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo; 
        listaAmigosHTML.appendChild(nuevoAmigo); 
    });
}
