
/******
$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "C'est plus !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "C'est la bonne réponse";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "C'est moins !";
    }
}

$bouton.onclick = verifier;

*****/

var nb_random = Math.floor(Math.random()*100)+1;
     console.log(nb_random)
var bouton = document.getElementById('bouton');
var coup = 0
var max = 100
var min = 1
bouton.addEventListener('click', function()

{
var saisie = document.getElementById('proposition').value;
coup++
if ((saisie>100)||(saisie<1)){
    document.getElementById('resultat').innerHTML = "Ce nombre est incorrect : il doit être compris entre 1 et 100!"

}
else{

if (saisie==nb_random){
    document.getElementById('resultat').innerHTML = "C'est la bonne réponse. Vous avez eu besoin de "+coup+" tentavives.";
}
if (saisie<nb_random){
    document.getElementById('resultat').innerHTML = "C'est plus!";
}
if (saisie>nb_random){
    document.getElementById('resultat').innerHTML = "C'est moins!";
}
}

});
