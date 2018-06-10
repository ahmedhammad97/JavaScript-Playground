function changeColor(){
  var x = document.getElementById("txt");
  x.style.color = randomColor();
}

function randomColor(){
  var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var color = "";
  for(i=0; i<6; i++){
    color = color + hex[Math.floor(Math.random()*16)];
  }
  //console.log(color);
  return "#"+color;
}
