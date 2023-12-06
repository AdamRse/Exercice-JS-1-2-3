let nb = false;
let cond = false;

function conforme(n){
    return n%1===0;
}
function auCarre(n){
    return n*n;
}

do{
    nb = prompt("Saisir un nombre entier");
    if(conforme(nb)){
        cond=true
    }
    else
        alert("Mais vous fumez Monsieur !\n"+nb+" n'est pas un entier !");
}
while(!cond);

alert("Le carré de "+nb+" est "+auCarre(nb));