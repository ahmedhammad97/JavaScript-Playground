function changeColor(){
  document.body.style.backgroundColor = randomColor();
  if(getSize($("#btn"))<30) enlarge();
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

function getSize(x){
  var size = x.css("font-size");
  size = size.slice(0,-2);
  return size;
}

function enlarge(){
  var size  = getSize($("#btn"));
  size++;
  $("#btn").css("font-size",size + "px");
}

function shrink(){
  if(getSize($("#btn"))<20)return;
  var size = getSize($("#btn"));
  size--;
  $("#btn").css("font-size",size + "px");
}
