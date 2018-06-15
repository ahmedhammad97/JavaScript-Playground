let bar = document.createElement('div');
bar.style.width = '200px';
bar.style.height = '40px';
bar.style.background = 'lightblue';

document.body.appendChild(bar);
window.setInterval(()=>{
  bar.style.background = randomColor();
},500);

let lastX,lastY;
  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
      lastX = event.clientX;
      lastY = event.clientY;
      window.addEventListener("mousemove", moved);
    }
  });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      let distX = event.clientX - lastX;
      let distY = event.clientY - lastY;
      let newWidth = Math.max(10, bar.offsetWidth + distX);
      let newHeight = Math.max(10, bar.offsetHeight + distY);
      bar.style.width = newWidth + "px";
      bar.style.height = newHeight + "px";
      lastX = event.clientX;
      lastY = event.clientY;
    }
  }
