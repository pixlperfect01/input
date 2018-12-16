var ans = Math.trunc(Math.random()*100000);
function check(){
var inpt = document.getElementById('input');
var btn = document.getElementById('btn');
var div = document.getElementById('div');
if(inpt.value==ans){
div.hidden=false;
console.log(ans+' was right!');
}
}
