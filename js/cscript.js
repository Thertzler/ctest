var handH = document.getElementById("zh");
var handM = document.getElementById("zm");
var handS = document.getElementById("zs");

function setRot(_fraction, _rotation){
if(_fraction === 0){return 0}
return((_rotation/_fraction)*360)-180;
}

function clockUpdate(){
var sTime = new Date;
var valS = setRot(60,sTime.getSeconds());
var valM = setRot(60,sTime.getMinutes());
var valH = setRot(12,sTime.getHours());
handS.style.transform="rotate("+ valS+"deg)";
handM.style.transform="rotate("+ valM+"deg)";
handH.style.transform="rotate("+ valH+"deg)";

console.log(valS/360)
}

setInterval(clockUpdate,1000)