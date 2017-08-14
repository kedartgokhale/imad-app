var  button =document.getElementById('bt1');
var counter =0;
button.onclick=function(){
    counter=counter+1;
    var span =document.getElementById('sp1');
    span.innerHTML=counter.toString();
};