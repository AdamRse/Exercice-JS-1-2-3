function isVirgule(n) {
    return n % 1 > 0 && n != 0;
}

let nb=0;
let nb2=0;
console.log(isVirgule(nb))
let cond = false;

do{
    if(isVirgule(nb)) nb2 = prompt("Un autre nombre à virgule pls pls pls dernier");
    else nb = prompt("Nombre à virgule pls");
    cond = isVirgule(nb) && isVirgule(nb2);
}
while(!cond)
nbTrunc=Math.trunc(nb);
alert(nbTrunc+" x "+nb2+" = "+nbTrunc*nb2+"\nLe reste du premier nombre est "+afficherReste(nb));