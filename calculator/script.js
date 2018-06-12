
var inp = prompt("Enter Expression..");
calc(inp);

function calc(inp){
  var text = removeSpaces(inp);
  if(!validate(text)){alert("Wrong format!");return;}
  var postfix = infixToPostfix(split(text));
  console.log(postfix);
  var result = evaluatePostfix(postfix);
  if(result){alert("Result : " + result);}
  else{alert("Error, wrong format");}
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

function evaluatePostfix(arr){
  var s = new Stack();
  for(i=0;i<arr.length;i++){
    if(isOperation(arr[i])){
        if(s.isEmpty()){return null;}
        var one = s.pop();
        if(s.isEmpty()){return null;}
        var two = s.pop();
        s.push(evaluate(one,two,arr[i]));
    }
    else{
        s.push(arr[i]);
    }
    console.log(s.arr);
  }
  var result = s.pop();
  if(!s.isEmpty()){return null;}
  return result;
}

function evaluate(a,b,x){
  if(x=='+'){return +a + +b;}
  if(x=='-'){return +b - +a;}
  if(x=='*'){return +a * +b;}
  if(x=='/'){return +b / +a;}
  return null;
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
