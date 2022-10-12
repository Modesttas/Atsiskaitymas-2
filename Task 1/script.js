/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */




var element = document.getElementById("submit-btn");
element.addEventListener("click" ,rezult);


function rezult(e) {
    e.preventDefault();
    var enterKilograms = document.getElementById("search").value;
    console.log(enterKilograms);
    document.getElementById("rezultatai").style.visibility="hide"
 
    document.getElementById("SvaraiRez").innerHTML=enterKilograms*2.2046;
    document.getElementById("GramaiRez").innerHTML=enterKilograms/0.0010000;
    document.getElementById("UncijosRez").innerHTML=enterKilograms*35.274;


} 

