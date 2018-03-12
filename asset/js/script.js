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
*****/



     var nb_random = Math.floor(Math.random()*100);
     console.log(nb_random)
var bouton = document.getElementById('bouton');
bouton.addEventListener('click', function()

{
var saisie = document.getElementById('proposition').value;

if (saisie==nb_random){
    document.getElementById('resultat').innerHTML = "C'est la bonne réponse";
}
if (saisie<nb_random){
    document.getElementById('resultat').innerHTML = "C'est plus !";
}
if (saisie>nb_random){
    document.getElementById('resultat').innerHTML = "C'est moins !";
}
}
);
