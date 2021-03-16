function getUsernames() {
  var playerSmite = document.getElementById("smiteUsername").value;
  var playerPaladins = document.getElementById("paladinsUsername").value;
  localStorage.setItem("_usernameSmite",playerSmite);
  localStorage.setItem("_usernamePaladins",playerPaladins);
  console.log(playerSmite);
  console.log(playerPaladins);
  ///window.location.href = "random_god_generator.html";
}
///function nextPage() {
  ///evt.preventDefault();
 /// window.location.replace("random_god_generator.html");
///  return false;
///}

///btn.addEventListener("click", nextPage());
document.getElementById("btn").addEventListener("click", function(evt) {
  evt.preventDefault();
  window.location.replace("random_god_generator.html");
  return false;
});