let mot = prompt("Saisir un mot");
let result = "";
let divResult = document.querySelector("#result");

for(let i = 0;i<mot.length;i++){
    result += mot[i];
    if(i<mot.length-1)result += "\n";
}

divResult.innerHTML = result.split("\n").join("<br/>");
alert(result);