
/// voir https://www.youtube.com/watch?v=A87bvZgkaOU
var x;
function episode () {
 x =  document.getElementById('boutton2').value;
}



function succes(data) {
     var titre = document.querySelector('.lien');

  document.onkeydown = function (e) {
      console.log(data)
             var key = e.keyCode;
             if(key == 13){

          titre.innerHTML = data[x].title;
             }
       }
        if(x<0||x>102){
      alert('Veuillez svp entrez un nombre entre 1 et 102 Merci !')
      return null;
  }
        let datax = data[x];
     titre.textContent = datax.title + ' avec l acteur : '+ datax.characters[5];


        console.log(data)

}
let url;
let erreur;
function getEpisode(){
  // x =  Math.floor(Math.random() * 102) + 1   si on veut des episodes au hasard en cliquant
    url = 'https://www.breakingbadapi.com/api/episodes';
    $.get(url,succes).done(function () {

    }).fail(function () {
         erreur = 'api non disponible';
         console.log(erreur)
    }).always(function () {

    })
}





