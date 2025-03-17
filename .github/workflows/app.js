// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []

function agregarAmigo () {
    let campo = document.getElementById('amigo');
    let nombreAmigo = campo.value 
    if (nombreAmigo.trim() !== "") {
        let listaAmigos = document.getElementById('listaAmigos');
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = nombreAmigo;
        listaAmigos.appendChild(nuevoAmigo);
        campo.value = ""
    } else {
        alert("Por favor, inserte un nombre")
    }
}