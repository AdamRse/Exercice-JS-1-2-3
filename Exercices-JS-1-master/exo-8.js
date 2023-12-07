let age = false;
let cond = false;

do{
    if(age > 0 && age < 120 && age%1 === 0){
        cond=true;
    }
    else
        age = prompt("Entrez votre age");
}
while(!cond)

alert((age>=18)?"Vous êtes majeur":"vous êtes mineur");