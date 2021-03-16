function selectRandomGod() {
  var rndInt = Math.floor(Math.random()*113);
  console.log(rndInt)
}
fetch("gods.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data){
    console.log(data);
  });
selectRandomGod();