
var inp = prompt("Enter Expression..");
parse(inp);

function parse(inp){
  var text = removeSpaces(inp);
  if(!validate(text)){alert("Wrong format!");return;}
  var postfix = infixToPostfix(split(text));
  console.log(postfix);


}

function infixToPostfix(arr){
  var s = new Stack();
  var newArr = [];

  for(i=0;i<arr.length;i++){
    if(!isOperation(arr[i])){newArr.push(arr[i]);}
    else if(arr[i]=='\)'){
      while(!s.isEmpty()){
        var temp = s.pop();
        if(temp=='\(')break;
        newArr.push(temp);
      }
    }
    else{
      s.push(arr[i]);
    }
  }
  while(!s.isEmpty()){newArr.push(s.pop());}
  return newArr;
}

function split(text){
  //console.log("text: ", text);
  var arr = [];
  for(i=0;i<text.length;i++){
    if(isOperation(text[i])){arr.push(text[i]);}
    else{
      var temp = "";
      while(!isOperation(text[i]) && i<text.length){
        temp = temp + text[i];
        i++;
      }
      arr.push(temp);
      i--;
    }
  }
  console.log(arr);
  return arr;
}

function removeSpaces(inp){
  var x = "";
  for(i=0;i<inp.length;i++){
    if(inp[i]!=' '){x = x + inp[i];}
  }
  return x;
}

function validate(inp){
  for(i=0;i<inp.length;i++){
    if(isNaN(inp[i]) && !isOperation(inp[i]) && inp[i]!='.'){return false;}
  }
  return true;
}

function isOperation(x){
  if(x=='+' || x=='-' || x=='*' || x=='/' || x=='\(' || x=='\)'){return true;}
  return false;
}
