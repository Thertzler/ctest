var handH = document.getElementById("zh");
var handM = document.getElementById("zm");
var handS = document.getElementById("zs");
var change = document.getElementById("clockChange")

var mainClock = document.getElementById("cbody");
var pfix = "translateX(-50%)"
var numDiv=1;

change.addEventListener("click",function(){
delFace();
if(numDiv == 1){
 numDiv = 2;
 change.setAttribute("value","12 Hours")
}else{
change.setAttribute("value","24 Hours")
numDiv = 1;
}
drawFace();
})

function genLine(_class,_rot){
var newLine= document.createElement("div");
newLine.classList.add("nline",_class)
newLine.style.transform = pfix+" rotate("+ setRot(60,0,_rot) +"deg)";
if(_class!=="mini"){
var numero=document.createElement("p");
numero.textContent= _rot/(5/numDiv);
numero.style.transform = pfix+" rotate("+ setRot(60,0,_rot)*-1 +"deg)";
newLine.appendChild(numero)
}
mainClock.appendChild(newLine)
}
function drawFace(){
for(var i=0.5; i<60.5; i += 0.5)
{
    if(i%(5/numDiv) == 0){
        if(i%((5/numDiv)*3) == 0)
            {genLine("quarter",i)}
        else
            {genLine("medium",i)}
    }
    else
    {genLine("mini",i)}
}}
drawFace();

function delFace(){
    lineList = document.getElementsByClassName("nline");
    for(var i=lineList.length; i > 0; --i){
    lineList[i-1].parentNode.removeChild(lineList[i-1])
    }
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
        rotation = sTime.getHours();
        addition = sTime.getMinutes()/60;
    }

    return (((rotation+addition) / _fraction)*360)-reverse;
}

function clockUpdate(){
    handS.style.transform=pfix+" rotate("+ setRot(60,0) +"deg)";
    handM.style.transform=pfix+" rotate("+ setRot(60,1) +"deg)";
    handH.style.transform=pfix+" rotate("+ setRot(12*numDiv,2) +"deg)";
}

setInterval(clockUpdate,1000)