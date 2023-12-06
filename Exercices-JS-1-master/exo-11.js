let nb = false;
let cond = false;

function conforme(n){
    return n%1===0 && n>0 && n<=10;
}

do{
    nb = prompt("Saisir un nombre entier");
    if(conforme(nb)){
        cond=true
    }
    else{
        alert("Mais vous fumez Monsieur !\n"+nb+" n'est pas un chiffre compris entre 1 et 10 !");
    }
}
while(!cond);

if(nb>5){
    alert(nb+" est supérieur à 5");
}
else if(nb<5){
    alert(nb+" est inférieur à 5");
}
else
    alert("Le nombre est égal à 5 évidemment...");