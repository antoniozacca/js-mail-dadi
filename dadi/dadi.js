'use strict'
const btnGenerate = document.getElementById("btn");
const numeroComputer = document.querySelector("p#numero-computer");
const numeroUtente = document.querySelector("p#numero-utente");
const vincitore = document.querySelector("p#vincitore");

//click
btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();

    //genera un numero casuale computer
    let numeroCasualeComputer = Math.floor(Math.random() * 6) + 1;
    //portare il numero casuale in output
    numeroComputer.innerHTML = numeroCasualeComputer;

    //genera un numero casuale utente
    let numeroCasualeUtente = Math.floor(Math.random() * 6) + 1;
    //portare il numero casuale in output
    numeroUtente.innerHTML = numeroCasualeUtente;

    //confronto dei numeri per decretare il vincitore
    if (numeroCasualeComputer > numeroCasualeUtente) {
        vincitore.innerHTML = "Computer";
    } else if (numeroCasualeComputer < numeroCasualeUtente){
        vincitore.innerHTML = "Utente";
    } else {
        vincitore.innerHTML = "Pareggio";
    }

})
