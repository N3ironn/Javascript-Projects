function My_First_Function() { //naming function
    var str = "This text is orange!"; //setting variable string
    var result = str.fontcolor("orange"); //setting font
    document.getElementById("Orange_Text").innerHTML = result; //executing function
}

function myFunction() {
    var sentence = "Yin";
    sentence += "Yang";
    document.getElementById("Concatenate").innerHTML = sentence;
}