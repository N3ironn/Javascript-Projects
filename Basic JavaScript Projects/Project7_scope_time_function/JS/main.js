function Multi_X() {
    var y = 8;//local variable (its within the function applying only to this function )
    document.write(8 * y);
}

var y = 8// global variable (outside of the function nest)
function Multi_X() {
    document.write(64 * y)
}


function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function nap_Function() {
    if (new Date().getHours()) < 14) {
        document.getElementById("Nap").innerHTML = "Take a Nap";
    }

}

