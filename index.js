// price-displayer






function price(price,changer,ida,butid,plusminusid){
    var c = document.getElementById(ida).innerHTML;
    if(parseInt(c)+changer>=0){    
var a = document.getElementById('price-displayer').innerHTML;
var b = parseFloat(a);
document.getElementById('price-displayer').innerHTML = b+price;
document.getElementById(ida).innerHTML = parseInt(c)+changer;
    }
var g = document.getElementById(ida).innerHTML;
if(parseInt(g)===0){
    document.getElementById(butid).style.display = 'block';
document.getElementById(plusminusid).style.display = 'none';
}




}

function hide(id1,id2,id3,price){
    var aa = document.getElementById(id3).innerHTML;
    document.getElementById(id3).innerHTML = parseInt(aa)+1;
  var b =document.getElementById('price-displayer').innerHTML;  
 document.getElementById('price-displayer').innerHTML = parseInt(b)+price;
    
    document.getElementById(id1).style.display = 'none';
    document.getElementById(id2).style.display = 'flex';





}
function hello(){
    var ck = Math.random()*10000000;
    ck = ck.toFixed(0);
   document.getElementById('randomdede').innerHTML =  "OR"+ck;
   document.getElementById('paisa').innerHTML = document.getElementById('price-displayer').innerHTML;
}


function Reload(){
    location.reload();
}
var aaa = 0;
 function explore(){
     if(aaa%2===0){    
     document.getElementById('cards-section').style.display = 'none';
     aaa++;
     }
     else{
        document.getElementById('cards-section').style.display = 'flex'; 
        aaa++;
     }
 }
