const { default: nosleep } = require("nosleep.js");

var noSleep = new noSleep();
let SleepSwitch = document.getElementById("SleepSwitch");
function ToggleSleep(){
let canSleep = localStorage.getItem('canSleep');
canSleep = (JSON.parse(localStorage.getItem('canSleep')));
//alert(canSleep);
if(canSleep){
localStorage.setItem('canSleep', "false");
noSleep.disable();
document.getElementById("SleepStatus").innerText = "Off";
}else{
localStorage.setItem('canSleep', "true");
noSleep.enable();
document.getElementById("SleepStatus").innerText = "On";
}
canSleep = (JSON.parse(localStorage.getItem('canSleep')));
//alert(canSleep);
}

function checkSwitch() {
    //alert(JSON.parse(localStorage.getItem('canSleep'))===true);
    if(JSON.parse(localStorage.getItem('canSleep'))===true){
        document.getElementById("SleepSwitch").checked = true;
        document.getElementById("SleepStatus").innerText = "On";
    }
}