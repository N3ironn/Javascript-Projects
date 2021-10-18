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
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};//variables which never change
    Musical_Instrument.color = "blue";//sub variable of main variable
    Musical_Instrument.price = "$900";//
    document.getElementById("Constant").innerHTML = "The cost of the" + // an equation to combine the variables and strings into a coherent result. 
        Musical_Instrument.type + "was" + Musical_Instrument;
}


const x = 10;//dissonance within the code cannot have a constant and var for the same name
x = 2;
document.write(x);



