let championList = [];
let picture = document.getElementById("hero");
var img=new Image();
    
function randomizer() {
  fetch("champions.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      championList = data
      
      let hero = championList[selectRandomHero()];
      console.log(hero.name);
      let name = hero.name;
      let letter = hero.name[0].toLowerCase();
      //remove spaces and apostrophes
      name = name.replace(/[\s']/g, '');
      //name = name.replace(/'/g, '');

      let path =`Smite_Project_Site/champions/${letter}/${name}.jpg`
      preloadImage(path, changePicture)
    // Create new img element
      img.src=`Smite_Project_Site/champions/${letter}/${name}.jpg`;
      picture.src = img.src;

      document.getElementById("championName").innerHTML = hero.name;
    });
}
function selectRandomHero() {
  return parseInt(Math.floor(Math.random()*47));
}
function preloadImage(url, callback) {
    img.src=url;
    img.onload = callback;
}
function changePicture() {
    picture.src = img.src;
}