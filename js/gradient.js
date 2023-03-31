var number        = document.getElementById("nmbrcolr"),
    continputcolr = document.getElementById("continputcolr"),
    Merge         = document.getElementById("Merge"),
    degree        = document.getElementById("degree"),
    gradient      = document.getElementById("gradient"),
    textGradient  = document.getElementById("textGradient");

number.onkeyup = function () {
    "use strict";
    if (number.value < 2) {
        number.value = 2; 
    } else if (number.value > 10) {
        number.value = 10; 
    }
    continputcolr.innerHTML = "";
    for (var i = 0; i < nmbrcolr.value; i++) {
    var inpcolr = document.createElement("input");
    inpcolr.type = "color";
    inpcolr.style.border="none";
    inpcolr.style.margin=" 0 10px";
    inpcolr.style.height="30px";
    inpcolr.style.backgroundColor="#005164";
    continputcolr.appendChild(inpcolr);
    }
}
degree.onkeyup = function() {
    "use strict";
    if (degree.value < 0 ) {
    degree.value = 0; 
    }else if (degree.value > 360) {
    degree.value = 360; 
    }
}
Merge.onclick = function() {
    "use strict";
var colrin = document.querySelectorAll("input[type='color']"),
    allclr = [];
for (var i=0; i < colrin.length; i++){
    allclr.push(colrin[i].value);
}
var newclr = allclr.toString();
var angle  = degree.value;
    gradient.style.background = "linear-gradient("+angle+"deg,"+newclr+")";
    textGradient.textContent = "background-image: linear-gradient("+angle+"deg,"+newclr+")";
}
let today = new Date();
document.getElementsByClassName("footer")[0].innerHTML= today.getFullYear();
