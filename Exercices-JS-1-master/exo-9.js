let nb = false;
let conf = false;

function isEntier(n){
    return n%1===0;
}

do{
    nb = prompt("Saisir un nombre entier");
}
while(!isEntier(nb))

let result = "";
for(let i = 1;i<=10;i++){
    result+=i+" x "+nb+" = "+i*nb+"\n";
}
alert(result);