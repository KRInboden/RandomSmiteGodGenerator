function getUsernames() {
  var playerSmite = document.getElementById("smiteUsername").value;
  var playerPaladins = document.getElementById("paladinsUsername").value;
  localStorage.setItem("_usernameSmite",playerSmite);
  localStorage.setItem("_usernamePaladins",playerPaladins);
  console.log(playerSmite);
  console.log(playerPaladins);
  window.location.href = "random_god_generator.html";
}