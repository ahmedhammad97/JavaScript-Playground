function setName(){
  var name = document.getElementById("name");
  if(name.value==""){alert("Please enter a name!");}
  var x = document.getElementById("txt");
  x.innerHTML = "Welcome " + name.value;
  name.value = "";
}
