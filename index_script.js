function getUsernames() {
  var playerSmite = document.getElementById("smiteUsername").value;
  ///Paladins coding ---var playerPaladins = document.getElementById("paladinsUsername").value;
  localStorage.setItem("_usernameSmite",playerSmite);
  ///Paladins coding ---localStorage.setItem("_usernamePaladins",playerPaladins);
  console.log(playerSmite);
  ///Paladins coding ---console.log(playerPaladins);
}

document.getElementById("btn").addEventListener("click", function(evt) {
  evt.preventDefault();
  window.location.replace("random_god_generator_smite.html");
  return false;
});