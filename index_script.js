function getUsernames() {
  var playerSmite = document.getElementById("smiteUsername").value;
  ///Paladins coding ---var playerPaladins = document.getElementById("paladinsUsername").value;
  localStorage.setItem("_usernameSmite",playerSmite);
  ///Paladins coding ---localStorage.setItem("_usernamePaladins",playerPaladins);
  console.log(playerSmite);
  ///Paladins coding ---console.log(playerPaladins);
}

document.getElementById("signIn").addEventListener("click", function(evt) {
  evt.preventDefault();
  window.location.replace("paladins_random_champion.html");
  return false;
});