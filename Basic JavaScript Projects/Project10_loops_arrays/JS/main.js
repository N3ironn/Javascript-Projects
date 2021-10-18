function call_loop() {//name function
    var boom = "bang";//variable name and result
    var x = boom;//making x = to variable boom
    while (x == x) { // double == to compare 
        boom += "<br>" + x; // adding one variable to the other and counting up one
        x++; //increment operator
    }
    document.getElementById("loop").innerHTML = boom //calling the ID and making it equal to variable

}


let str = "Snowboarding season is almost here.";//name let variable
document.getElementById("length").innerHTML = str.length;//follow let variable with a period and length to figure out string character length. 



//For Loops
var Instruments = ["guitars", "drums", "piano", "bass", "violin", "trumpet", "flute"];//
var Content = "";
var y;
function for_Loop() {
    for( y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = Content
}

function array_Function() {
    var game_picture = [];//array name
    game_picture[0] = ":Chess";//individual parts of the array using number list
    game_picture[1] = ":Monopoly";
    game_picture[2] = ":Go";
    game_picture[3] = ":3D-chess";
    document.getElementById("gametheory").innerHTML = "What type of strategy game is" + 
        game_picture[2] + "."; //string is combined with the variable 2

}

function myFunction () {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}


function constant_function() {
    const exotic = {type:"SUV", brand:"ferrari", color:"black", price:"$172k"};//variables which never change
    exotic.color = "red";//sub variable of main variable
    exotic.price = "150k"
    document.getElementById("Constant").innerHTML = "The color of the" + // an equation to combine the variables and strings into a coherent result. 
        exotic.brand + "was" + exotic.color;
}

let banana = "yellow"//

if (banana === "yellow") {
    let banana = "blue"//gets value locally
    console.log(banana)//brings up value within the dev. tools
}

console.log(banana)//gets the value globally


function PI_Function() {
    return Math.PI;//uses the imbedded function for PI 
}

document.getElementById("PI").innerHTML = PI_Function();


let clothing = {// names out the main variable and sub variable below
    brand: "True Religion",
    type: "jeans",
    style: "distressed",
    color: "black",
    description : function() {//property
        return "The product is" + this.brand + this.type + this.style + "in" + this.color; //equation which returns a string
    }

}
document.getElementById("Clothing_store").innerHTML = clothing.description();


function break_Function() {
    var text = "";
    var i;
    for (i=0; i < 20; i++) {//sets start point and up to when. Also to count in increments of 1
        if (i === 20) {//break statement at 20
            break;//break command
        }
        text += "The number is" + i + "<br>";
        if (i === 20) {
            continue;//skip over command
        }
        text += "The number is" + i + "<br>";
    }
document.getElementById("breakit").innerHTML = text;
}
