x = 8;
y = 8;
document.write(x===y); //3=== signs is a comparison of value/type (single variable = assign values)

x = 90;
y = "98";
document.write(x===y); //

a = "Jack";
b = "Jack";
document.write(a===b); //


document.write(5>2 && 10>4);//AND/&& verifies both must be true to get a true
document.write(5>10 && 10>4);// comes back false (because both arent true)
document.write(5>10 || 10>4); //comes back true (one of them is true so its true because || stands for OR)
document.write(5>10 || 10>20);// comes back false because neither are true (both are not true returns false)


function not_Function() {
    document.getElementById("Not").innerHTML = !(10>10); //!(not) operator checks if its true. (True)
}

document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger"); // ? is the ternary operator (3 part operator)
// based on the the conditions it responds with the correct value given to it. 

function ride_Function() { //name of function
    var height, can_ride; // naming variables as "height" and "can_ride"
    height = document.getElementById("height").value; // assigning value to the variable "height" by calling the html ID "height and the value of 52 minimum"
    can_ride = (height < 52) ? "You are too short" : "You are tall enough"; //assigning "can_ride" variable the value of height is greater than 52 and using the ? 
    //ternary operator to return the value of can or cant ride. 
    document.getElementById("ride").innerHTML = can_ride + "to ride."; //concatenating 2 statements to form the return or to short or tall enough + to ride. 
}

console.log(typeof 89); // returns as number in the console when ctrl + shift + I 
console.log(typeof jenny);//returns as undefined need to link variable
console.log(typeof false)//returns as a boolean comparison
console.log(typeof 'Keanu')//returns as a string because of the single quotes 

function vote_Function() { //name of function
    var age, can_vote; // naming variables as "age" and "can vote"
    age = document.getElementById("age").value; // assigning value to the variable "age" by calling the html ID "age and the value of 18 minimum"
    can_vote = (age < 18) ? "You are too young" : "You are old enough"; //assigning "can_vote" variable the value of age is equal to or greater than 18 and using the ? 
    //ternary operator to return the value of can or cant vote. 
    document.getElementById("vote").innerHTML = can_vote + "to vote"; //concatenating 2 statements to form the return or to young or old enough + to vote. 
}


function vehicle(make, model, year, color) { //names the function then names subdata. 
    this.vehicle_make = make;//value of the object is this. ()
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red"); //names the variable value and creates a new object.
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");//vehicle() is the object constructor.
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");//

function car_Function() { //names the function
    document.getElementById("Cars").innerHTML = //calls the ID 
    "Erik drives a" + Erik.vehicle_color + "-colored" + Erik.vehicle_model +//strings interlaced with variable to result in calling the correct data spelled out in the sentence.
    "manufactured in" + Erik.vehicle_year;
}



function Person(first, last, age, eye) { //object constructor
    this.firstName = first; //Data points to be linked too variable
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var Keanu = new Person("Keanu", "Reeves", 57, "Hazel"); //Variables with data within the paraenthesis
var Margot = new Person("Margot", "Robbie", 31, "Blue");
var Anthony = new Person("Anthony", "Hopkins", 83, "Blue");

function p_Function() {
    document.getElementById("stats").innerHTML =
    "Name is" + Keanu.firstName + Keanu.lastName + ",Keanu is" + Keanu.age + "years old" + ",and has" + Keanu.eyeColor + "eyes";
}

function count_Function() { //name function
    document.getElementById("Counting").innerHTML = Count(); //calling ID and making it equal to the nested function "Count"
    function Count() {//name function
        var Starting_point = 9;//naming variable and giving it a value which will be our counting beginning point
        function Plus_one() {Starting_point += 10;}//nesting a function which will count by whatever value by using the "=" and any other operator applicable here.
        Plus_one();
        return Starting_point;
    }
}


function nested_Function() { //name function
    document.getElementById("Nest").innerHTML = point(); //calling ID and making it equal to the nested function "Count"
    function point() {//name function
        var point = 9;//naming variable and giving it a value which will be our counting beginning point
        function MultiX() {point *=2;}//nesting a function which will count by whatever value by using the "=" and any other operator applicable here.
        MultiX();
        return point;
    }
}



