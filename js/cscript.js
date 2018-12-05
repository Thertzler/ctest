var handH = document.getElementById("zh");
var handM = document.getElementById("zm");
var handS = document.getElementById("zs");

function setRot(_fraction, _modus){
    if(_fraction === 0){return 0}
    var sTime = new Date;
    var addition = 0;
    var rotation = sTime.getSeconds();

    if(_modus == 1){rotation = sTime.getMinutes();}
    else if(_modus == 2){rotation = (sTime.getHours() > 12) ? sTime.getHours() - 12 : sTime.getHours()}

    if(_modus == 1){addition= sTime.getSeconds()/60}
    else if(_modus==2){addition= sTime.getMinutes()/60}

    return(( (rotation+addition) / _fraction)*360)-180;
}

function clockUpdate(){
    var valS = setRot(60,0);
    var valM = setRot(60,1);
    var valH = setRot(12,2);

    handS.style.transform="rotate("+ valS+"deg)";
    handM.style.transform="rotate("+ valM+"deg)";
    handH.style.transform="rotate("+ valH+"deg)";
}

setInterval(clockUpdate,1000)