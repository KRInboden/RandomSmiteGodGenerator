function getUsernames() {
  var playerSmite = document.getElementById("smiteUsername").value;
  var playerPaladins = document.getElementById("paladinsUsername").value;
  localStorage.setItem("_usernameSmite",playerSmite);
  localStorage.setItem("_usernamePaladins",playerPaladins);
  console.log(playerSmite);
  console.log(playerPaladins);
}

function clearLocal() {
  localStorage.clear();
}

document.getElementById("signIn").addEventListener("click", function(evt) {
  evt.preventDefault();
  return false;
});

let button = document.querySelector("button");
  button.addEventListener("click", () => {
    getUsernames();
    window.location.replace("random_god_generator.html");
  });