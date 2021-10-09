

document.write("8"+6);


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test").innerHTML = isNaN('007'); 
    document.getElementById("Test").innerHTML = isNaN('This is a string');//typing words into the isNaN Field results in a false because its a string not a number
}


document.write(2E310);//displays infinity. writing a number larger then the maximum # we force the browser to display infinity
document.write(-3E310);//displays -infinity

document.write(10>2);//using greater then or equal to will display in html as true or false based on boolean logic using and or for comparison.
document.write(10<2);//

console.log(8+18);//math operation displays result in console as 4

console.log(isNaN('008')); //displays in the console as false.

document.write(8==8);//== alerts the computer to check wether they are equal to each other
document.write(4==1);//


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

