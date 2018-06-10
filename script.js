function changeColor(){
  document.body.style.backgroundColor = randomColor();
  var btn = document.getElementById("btn");
  btn.style.backgroundColor = randomColor();
  btn.style.color = randomColor();
}

function randomColor(){
  var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var color = "";
  for(i=0; i<6; i++){
    color = color + hex[Math.floor(Math.random()*16)];
  }
  return "#"+color;
}
