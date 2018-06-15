function randomColor(){
  let color = "#";
  let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];
  for(i=0;i<6;i++){
    color = color + arr[Math.floor(Math.random()*15)];
  }
  return color;
}
