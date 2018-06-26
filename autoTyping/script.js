function write(comp,word,speed){
  let x = setInterval(()=>{
    if(comp.innerText.length > word.length-1){clearInterval(x); return;}
    let chCode = word.charCodeAt(comp.innerText.length);
    if(chCode == 32){comp.innerText = comp.innerText + "\xa0";}
    else comp.innerText = comp.innerText.concat(String.fromCharCode(chCode));
  },speed);
}

write(document.getElementsByTagName('h1')[0],"Hello friends, My name is Hammad!",150);
