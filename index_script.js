function getUsername() {
  var player = document.getElementById("player").value;
  localStorage.setItem("username",player);
  console.log(player);
  window.location.replace("random_god_generator.html");
}