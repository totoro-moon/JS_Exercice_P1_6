function displayCondition(){
var age = document.getElementById('age').value;
//si la variable age existe
if (age){
// si age(ne comprend pas de lettre) est supérieur à 0
    if(isNaN(age) == false && age > 0){
// si age est supérieur ou egal à 18
        if(age >= 18){
// une modale vous indique : vous etes majeur
            alert('Vous êtes majeur');
// sinon une modale indique : vous etes mineur
    }else{
        alert('vous êtes mineur');
    }  
// si la condition ligne 6 n'est pas remplie une modale indique : entrer un age valide    
    }else{
    alert ('Entrez un age valide');
    }
// si la condition ligne 4 n'est pas remplie (si age n'existe pas) une modale affiche : veuillez remplir les champs
}else{
    alert ('veuillez remplir les champs')
}
}