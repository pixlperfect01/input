function check(){
var inpt = document.getElementById('input');
var btn = document.getElementById('btn');
var div = document.getElementById('div');
var ans = Math.trunc(Math.random()*10000);
if(inpt.value==ans){
div.hidden=false;
console.log(ans+' was right!');
}
}
