
document.getElementById("buyPage").style.display = "none"

function closeBox(){

    document.getElementById("buyPage").style.display = "none"
}


function apple(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/apple.jpg";

    itemName.innerHTML = "Register"
    document.getElementById("buyPage").style.top = "20%"
}


function banana(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/banana.jpg";

    itemName.innerHTML = "Ic"
    document.getElementById("buyPage").style.top = "20%"
}

function coc(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/coconut.jpg";

    itemName.innerHTML = "Mother Board"
    document.getElementById("buyPage").style.top = "20%"
    
}

function orange(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/orange.jpg";

    itemName.innerHTML = "Micro-Controller"
    document.getElementById("buyPage").style.top = "20%"
}
function pom(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/pomogranate.jpg";

    itemName.innerHTML = "DC Wire"
    document.getElementById("buyPage").style.top = "20%"
}
function pear(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/pear.jpg";

    itemName.innerHTML = "LED"
    document.getElementById("buyPage").style.top = "20%"
}
function df(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Fruits&Veg/dragonfruit.jpg";

    itemName.innerHTML = "Heat Sink"
    document.getElementById("buyPage").style.top = "20%"
}
function amulL(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/amulmil.jpg";

    itemName.innerHTML = "Wire"
    document.getElementById("buyPage").style.top = "90%"
}
function dahi(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/dahi.jpg";

    itemName.innerHTML = "Switch"
    document.getElementById("buyPage").style.top = "90%"
}
function but(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/butter.jpg";

    itemName.innerHTML = "Fan"
    document.getElementById("buyPage").style.top = "90%"
}
function cheese(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/cheese.jpg";

    itemName.innerHTML = "Motor"
    document.getElementById("buyPage").style.top = "90%"
}
function cheeseC(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/cheesecube.jpg";

    itemName.innerHTML = "Pin"
    document.getElementById("buyPage").style.top = "90%"
}
function pizz(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/pizza.jpg";

    itemName.innerHTML = "Tape"
    document.getElementById("buyPage").style.top = "90%"
}

function paneer(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/paneer.jpg";

    itemName.innerHTML = "Screw Driver"
    document.getElementById("buyPage").style.top = "90%"

}

function add(){


    document.getElementById("num").innerHTML = Number(document.getElementById("num").innerHTML) + 1;
}
function minus(){

if(Number(document.getElementById("num").innerHTML)>1){
    document.getElementById("num").innerHTML = Number(document.getElementById("num").innerHTML) - 1;

}
}

