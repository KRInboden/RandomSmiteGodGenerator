let godList = [];
let godListNew = [];
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

      let sortRoleType = document.getElementById("sortRoleType").value;
      if(sortRoleType === "All") {
        godListNew = godList
      } else {
        godListNew = godList.filter(function(item) {
          return item.role === sortRoleType
        })
      }
      console.log('godlistnew',godListNew )

      //create new gaurdian,hunter,assassin,mage,warrior arrays
      // if (sortRoleType == "Guardian") {
      //   godListNew = [];
      //   for (let i= 0;i<godList.length;i++) {
      //     if (godList[i].role == "Guardian") {
      //       godListNew.push(godList[i]);
      //     }
      //   }
      // }
      // else if (sortRoleType == "Hunter") {
      //   godListNew = [];
      //   for (let i= 0;i<godList.length;i++) {
      //     if (godList[i].role == "Hunter") {
      //       godListNew.push(godList[i]);
      //     }
      //   }
      // }
      // else if (sortRoleType == "Assassin") {
      //   godListNew = [];
      //   for (let i= 0;i<godList.length;i++) {
      //     if (godList[i].role == "Assassin") {
      //       godListNew.push(godList[i]);
      //     }
      //   }
      // }
      // else if (sortRoleType == "Mage") {
      //   godListNew = [];
      //   for (let i= 0;i<godList.length;i++) {
      //     if (godList[i].role == "Mage") {
      //       godListNew.push(godList[i]);
      //     }
      //   }
      // }
      // else if (sortRoleType == "Warrior") {
      //   godListNew = [];
      //   for (let i= 0;i<godList.length;i++) {
      //     if (godList[i].role == "Warrior") {
      //       godListNew.push(godList[i]);
      //     }
      //   }
      // }
      // else {
      //   godListNew = [];
      //   godListNew = godList;
      // }
      let randomGodIndex = selectRandomGod()
      console.log('randomgodindex', randomGodIndex)
      let god = godListNew[randomGodIndex];
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

      // console.clear();
      console.log(god.name);
      console.log(god.role, god.pantheon, god.attack_type, god.power_type);
      console.log(godListNew.length);
    });
}
function selectRandomGod() {
  return parseInt(Math.floor(Math.random()*godListNew.length));
}
function preloadImage(url, callback) {
    img.src=url;
    img.onload = callback;
}
function changePicture() {
    picture.src = img.src;
}
let button = document.querySelector("button");
  button.addEventListener("click", () => {
    randomizer();
  });
    
