alert("Bem vindo a HallowNest aventureiro") 

let p1=prompt("Diga o seu titulo? "); 
let p2=prompt("O que faz uma pessoa igual você visitar nossa cidade?  ");
let p3=prompt("Qual arma você carrega?");

let msg= document.getElementById('msg');

msg.innerHTML = `<p>Nobre ${p1} portador de/da ${p3} espero que consiga ${p2}`