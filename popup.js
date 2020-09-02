//je veux récuperer l'identifiant de bouton de popup
//dans ces trois ligns je récupere les id de 3 élements 
//pour ajouter l'action
let btnPopup = document.getElementById('btnPopup');
let overlay = document.getElementById('overlay');
let btnClose = document.getElementById('btnClose');

//récupere l'evenement

//openModal c'est une fonction qui va être executer lorsque je click sur le bouton pupup
btnPopup.addEventListener('click', openModal);
btnClose.addEventListener('click', closPopup);

//permet d'ouvrir notre popup
function openModal(){
    overlay.style.display = 'block';
}

//permet de fermer le popups
function closPopup(){
    overlay.style.display = 'none';
}