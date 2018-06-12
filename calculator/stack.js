class Stack{
  constructor(){
    this.top = 0;
    this.arr = [];
  }
  push(x){
    this.arr[this.top] = x;
    this.top++;
  }
  pop(){
    this.top--;
    return this.arr[this.top];
  }
  isEmpty(){
    if(this.top==0){return true;}
    return false;
  }

}
