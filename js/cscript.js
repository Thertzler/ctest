var handH = document.getElementById("zh");
var handM = document.getElementById("zm");
var handS = document.getElementById("zs");
var pfix = "translateX(-50%)"
var mainClock = document.getElementById("cbody");

function genLine(_class,_rot,_num){
var newLine= document.createElement("div");
newLine.classList.add("nline",_class)
newLine.style.transform = pfix+" rotate("+ setRot(60,0,_rot) +"deg)";
if(_num){
var numero=document.createElement("p");
numero.textContent= _rot/5;
newLine.appendChild(numero)
}
mainClock.appendChild(newLine)
}

for(var i=1; i<61; ++i)
{

    genLine("nline",i)


}



function setRot(_fraction, _modus, _manum){
    if(_fraction === 0){return 0}
    var sTime = new Date;
    var addition = 0;
    var rotation = _manum? _manum: sTime.getSeconds();
    var reverse = _manum? 0 : 180;

    if(_modus == 1){
        rotation = sTime.getMinutes();
        addition = sTime.getSeconds()/60;
    }
    else if (_modus == 2){
        rotation = (sTime.getHours() > 12) ? sTime.getHours() - 12 : sTime.getHours;
        addition = sTime.getMinutes()/60;
    }

    return (((rotation+addition) / _fraction)*360)-reverse;
}

function clockUpdate(){
    handS.style.transform=pfix+" rotate("+ setRot(60,0) +"deg)";
    handM.style.transform=pfix+" rotate("+ setRot(60,1) +"deg)";
    handH.style.transform=pfix+" rotate("+ setRot(12,2) +"deg)";
}

setInterval(clockUpdate,1000)