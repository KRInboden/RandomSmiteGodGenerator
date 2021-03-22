let godList = [];
let picture = document.getElementById("hero");
var img=new Image();
    
function randomizer() {
  fetch("gods.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      godList = data
      
      let god = godList[selectRandomGod()];
      console.log(god.name);
      let name = god.name;
      let letter = god.name[0].toLowerCase();
      //remove spaces and apostrophes
      name = name.replace(/[\s']/g, '');
      //name = name.replace(/'/g, '');

      let path =`Smite_Project_Site/gods/${letter}/${name}.jpg`
      preloadImage(path, changePicture)
    // Create new img element
      img.src=`Smite_Project_Site/gods/${letter}/${name}.jpg`;
      picture.src = img.src;

      document.getElementById("godName").innerHTML = god.name;
    });
}
function selectRandomGod() {
  return parseInt(Math.floor(Math.random()*godList.length));
}
function preloadImage(url, callback) {
    img.src=url;
    img.onload = callback;
}
function changePicture() {
    picture.src = img.src;
}