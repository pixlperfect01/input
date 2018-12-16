var ans = Math.trunc(Math.random()*10000);
function check(){
var inpt = document.getElementById('input');
var btn = document.getElementById('btn');
var div = document.getElementById('div');
if(inpt.value==ans){
div.hidden=false;
console.log(ans+' was right!');
}
}
function reset(){
ans = Math.trunc(Math.random()*10000);
document.getElementById('input').value="";
document.getElementById('div').hidden=true;
}
