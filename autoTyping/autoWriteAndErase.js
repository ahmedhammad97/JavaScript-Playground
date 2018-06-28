function autoWrite(comp,word,speed){
  let num = 1;
  let sp = speed;
  let x = setInterval(()=>{
    if(comp.innerText.length != 0){comp.innerText = comp.innerText.slice(0,comp.innerText.length-1);}
    if(comp.innerText.length > word.length-num){clearInterval(x); return;}
    let chCode = word.charCodeAt(comp.innerText.length+num-1);
    if(chCode == 95){num+=1;speed = sp*3;}else{
    if(chCode == 32){comp.innerText = comp.innerText + "\xa0";}
    else comp.innerText = comp.innerText.concat(String.fromCharCode(chCode));
    comp.innerText = comp.innerText + "|";
    }
  },speed);
}
