let submit=document.getElementById("submitme");
submit.addEventListener("click",clickall);
function clickall(){
let tron=document.getElementById("tron").value;

if(tron!==""){
  window.location.assign("payme.html");
}
else{
    alert("input wallet address");
}
document.getElementById("tron").value='';
if(document.getElementById(tron).value.lenght>0){
  document.getElementById("submitme").disabled=false;
}else{
   document.getElementById("submitme").disabled=true;

}
}






