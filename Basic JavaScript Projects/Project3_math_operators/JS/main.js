


function addition_Function() { // addition functions
    var addition = 17 + 3;
    document.getElementById("math").innerHTML = "17 + 3=" + addition;
}


function subtraction_Function() { // Subtraction functions
    var Subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 =" + Subtraction;
}

function multiplication () { // multiplication functions
    var simple_math = 6 * 8;
    document.getElementById("math").innerHTML = "6 x 8=" + simple_math;
}


function division() { //division functions
    var simple_math = 48/6;
    document.getElementById("math").innerHTML = "48/6=" + simple_math;
}

function math_examples() { //Order of operations equations
    var simple_math = (4 + 4) * 10/2-5;
    document.getElementById("math").innerHTML = "4 plus 4, multiplied by 10, divided in half and then subtracted by 5 equauls" + simple_math;
}

function modulus_Operator() { //Modulus Operator 
    var simple_math = 25%6;
    document.getElementById("math").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_Operator() { //negation operator using the variable to negate itself.
    var x = 10;
    document.getElementById("math").innerHTML = -x;
}

var x = 8; //increment operator used to increase by one
x++;
document.write(x);

var z = 7; //decrement operator used to decrease by one
z--;
document.write(z);

window.alert(Math.random()); //random number roulette leave blank for 0-1

window.alert(Math.random() * 100); //random number roulette blank parenthesis stand or 0 and add * follow by desired # ex: 0-100




function calculateCircumference() { //naming the function
    var Pie = Math.PI // setting the pie variable to Math.PI math object
    document.getElementById("calculateCircumference").innerHTML = Pie //calling the function and making the element equal to variable
}

function my_Dictionary() { //named function
    var animal = { //named the catagory of information 
        species: "dog", //specific info
        color: "black", //
        breed: "labrador", // 
        age: 5, //
        sound: "bark!" //
    };
    document.getElementById("dictionary").innerHTML = animal.color; //calls the function finds the element and result is equal to the variable specified. 
    //first place marks the catagory period marks the end and second work names the specific data
}









