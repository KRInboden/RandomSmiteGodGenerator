let godList = [];
let picture = document.getElementById("hero");
var img=new Image();
    
// var picture = new Image(200,200); 
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
    // let safeName = "";

    // for (const letter of name){
    //   if(letter!=" ")
    //     safeName += letter;
    // }

    name = name.replace(/\s/g, '');

    let path =`Smite_Project_Site/gods/${letter}/${name}.jpg`
    preloadImage(path, changePicture)
  // Create new img element
    img.src=`Smite_Project_Site/gods/${letter}/${name}.jpg`;
    picture.src = img.src;
  });

function selectRandomGod() {
  return parseInt(Math.floor(Math.random()*113));
  //console.log(rndInt); 
}
function preloadImage(url, callback)
{
    img.src=url;
    img.onload = callback;
}
function changePicture()
{
    picture.src = img.src;
}