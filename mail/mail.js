'use strict'
const btnGenerate = document.getElementById("btn");
const elencoUsers= ["antonio@gmail.com", "giuseppe@gmail.com", "ignazio@gmail.com"];
const emailUser= document.getElementById("email");
//click
btnGenerate.addEventListener('click', function(e) {
    e.preventDefault();

    //leggere email da input
    const email = emailUser.value;
    if (elencoUsers.includes(email)){
        alert('Accesso eseguito');
    } else {
        alert('Accesso non consentito');
    }

})
