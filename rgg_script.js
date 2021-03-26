let godList = [];
let picture = document.getElementById("hero");
var img=new Image();
    
function randomizer() {
  fetch("gods.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      godList = data;

      
      
      let god = godList[selectRandomGod()];
      //saving god info into variables
      var role = god.role;
      var pantheon = god.pantheon;
      var attack_type = god.attack_type;
      var power_type = god.power_type;

      
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

      //removing previous txt nodes
      document.getElementById("godName").innerHTML = "";
      document.getElementById("godRole").innerHTML = "";
      document.getElementById("godAttack").innerHTML = "";
      document.getElementById("godPower").innerHTML = "";
      document.getElementById("godPantheon").innerHTML = "";

      //creating txt node on page
      var _name = document.getElementById("godName");
      var godName = document.createTextNode("Name: " + god.name);
      _name.appendChild(godName);
      
      var _role = document.getElementById("godRole");
      var godRole = document.createTextNode("Role: " + role);
      _role.appendChild(godRole);
      
      var _attackType = document.getElementById("godAttack");
      var godAttackType = document.createTextNode("Attack Type: " + attack_type);
      _attackType.appendChild(godAttackType);
      
      var _powerType = document.getElementById("godPower");
      var godPowerType = document.createTextNode("Power Type: " + power_type);
      _powerType.appendChild(godPowerType);
      
      var _pantheon = document.getElementById("godPantheon");
      var godPantheon = document.createTextNode("Pantheon: " + pantheon);
      _pantheon.appendChild(godPantheon);

      console.clear();
      console.log(god.name);
      console.log(role, pantheon, attack_type, power_type);
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