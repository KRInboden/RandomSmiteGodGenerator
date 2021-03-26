let championList = [];
let picture = document.getElementById("hero");
var img=new Image();
    
function randomizer() {
  fetch("champions.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      championList = data;
      
      
      let hero = championList[selectRandomHero()];
      
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

      //remove previous txt nodes
      document.getElementById("championName").innerHTML = "";
      document.getElementById("championRole").innerHTML = "";

      //create txt node in txtbox
      var _name = document.getElementById("championName");
      var heroName = document.createTextNode("Name: " + hero.name);
      _name.appendChild(heroName);
      
      var _role = document.getElementById("championRole");
      var heroRole = document.createTextNode("Role: " + hero.class);
      _role.appendChild(heroRole);
      
      console.clear();
      console.log(hero.name);
      console.log(hero.class);
    });
}
function selectRandomHero() {
  return parseInt(Math.floor(Math.random()*championList.length));
}
function preloadImage(url, callback) {
    img.src=url;
    img.onload = callback;
}
function changePicture() {
    picture.src = img.src;
}