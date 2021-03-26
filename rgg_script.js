let godList = [];
let picture = document.getElementById("hero");
let img=new Image();

var _username = localStorage.getItem("_usernameSmite");
let usernameLocation = document.getElementById("username");
let username = document.createTextNode(_username);
usernameLocation.appendChild(username);
    

function randomizer() {
  fetch("gods.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      godList = data;

      let godListNew = []

      //for loop to create new gaurdian,hunter,assassin,mage,warrior arrays
      for (let i= 0;i<godList.length;i++) {
        if (godList[i].role == "Guardian") {
          godListNew.push(godList[i]);
        }
        else if (godList[i].role == "Guardian") {
          godListNew.push(godList[i]);
        }
        else if (godList[i].role == "Guardian") {
          godListNew.push(godList[i]);
        }
        else if (godList[i].role == "Guardian") {
          godListNew.push(godList[i]);
        }
        else if (godList[i].role == "Guardian") {
          godListNew.push(godList[i]);
        }
      }

      let god = godList[selectRandomGod()];
      //saving god info into variables
      // let role = god.role;
      // let pantheon = god.pantheon;
      // let attack_type = god.attack_type;
      // let power_type = god.power_type;

      
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
      let _name = document.getElementById("godName");
      let godName = document.createTextNode("Name: " + god.name);
      _name.appendChild(godName);
      
      let _role = document.getElementById("godRole");
      let godRole = document.createTextNode("Role: " + god.role);
      _role.appendChild(godRole);
      
      let _attackType = document.getElementById("godAttack");
      let godAttackType = document.createTextNode("Attack Type: " + god.attack_type);
      _attackType.appendChild(godAttackType);
      
      let _powerType = document.getElementById("godPower");
      let godPowerType = document.createTextNode("Power Type: " + god.power_type);
      _powerType.appendChild(godPowerType);
      
      let _pantheon = document.getElementById("godPantheon");
      let godPantheon = document.createTextNode("Pantheon: " + god.pantheon);
      _pantheon.appendChild(godPantheon);

      console.clear();
      console.log(god.name);
      console.log(god.role, god.pantheon, god.attack_type, god.power_type);
      console.log(godListGuardian.length);
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