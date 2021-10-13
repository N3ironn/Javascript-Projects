function Multi_X() {
    var y = 8;//local variable (its within the function applying only to this function )
    document.write(8 * y);
}

var y = 8// global variable (outside of the function nest)
function Multi_X() {
    document.write(64 * y)
}


function getDate() {//naming function
    if (new Date().getHours() < 18) {//an if statement and getHours command which is compared to the written value. if greater than it displays the greeting. 
        document.getElementById("Greeting").innerHTML = "How are you today?";//gets the id
    }
}

function nap_Function() {
    if (new Date().getHours() < 14) {
        document.getElementById("Nap").innerHTML = "Nap";
    }

}

function Age_Function() {//function name
    Age= document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function guess_Function() {//function name
    number = document.getElementById("number").value;
    if (number == 8) {//double == forces the function to compare value to the number
        Play = "Win!";

    document.getElementById("Guess a number between 1 - 10").innerHTML = Play; 

    }
    else {
        TryAgain = "Miss!";
    }
    
    document.getElementById("Guess a number between 1 - 10").innerHTML = TryAgain;
}


function t_function () {//function name
    var Time = new Date().getHours(); // assigning variable time equal to the current time and date 
    var Reply; // statements assigned to different conditons and if/else depending on what the .gethours function results
    if (Time < 12 == Time > 0) { // if less then noon but greater than 0, reply is resulted in morning 
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {// if the function does not meet previous criteria the script moves on to options 2 and 3. 
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("daytime").innerHTML = Reply; //calls the id an makes it equal to the reply
}


