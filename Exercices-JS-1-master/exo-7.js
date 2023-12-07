function calculExo7(pt, an){
    //1
    pt=pt*2
    //2
    pt+=5;
    //3
    pt=pt*50;
    //4
    pt=pt-an;
    //5
    pt+=1766;

    return pt;
}

let pointure = false;
let annee = false;
let cond = false;

do{
    if(pointure && pointure%1===0){
        let annee = prompt("Année de naissance");
        cond = (annee && annee%1===0 && annee>1950 && annee<2004);
    }
    else
        pointure = prompt("Votre pointure (sans le demi)");
}
while(!cond)

alert("Calcul hyper compliqué :\n"+calculExo7(pointure, annee));