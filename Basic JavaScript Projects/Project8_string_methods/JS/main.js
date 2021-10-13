
function full_Sentence() {
    var part_1 = "I have";//naming the variables
    var part_2 = "made this";//
    var part_3 = "into a complete";//
    var part_4 = "sentence";//
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//links to the innerhtml using the whole_sentence element. part_1.concate spells out in which order they should be loaded. 
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); // cuts out a portion of the sentence. 
    document.getElementById("Slice").innerHTML = Section;// Displays the variable section which is equaul to the slice from the sentence. 
}


function Vamp_Method() {
    var Sentence = "Keanu Reeves is a Vampire, he does not age.";
    var Section = Sentence.slice(18,25); // cuts out a portion of the sentence. 
    document.getElementById("Vampires").innerHTML = Section;// Displays the variable section which is equaul to the slice from the sentence. 
}


var firstName = 'Keanu'
var lastName = 'Reeves'

console.log(firstName.toLowerCase())//seems like may be helpful if you wanted to change all at once like titles, headings or highlight specific words. 
console.log(lastName.toUpperCase()) //locates instances of firstName and results to either lower or uppercase. 


let str = "Fall is Here"; //declares a string. 
document.getElementById("fall").innerHTML = str.search('is'); //finds ID, the str.search looks for a particular string and finds what is specified within the paraenthesis. and its character start #


function string_Method() {//function name
    var X = 182;//variable and value. single = (double == if you want the function to compare to another value)
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //searchs for ID element and equates .innerhtml to the X variable.to string (its supposed to return  an object as its string representation according to google)
}

function precision_Method() {//naming the function
    var X = 12938.3012987376112;//naming variable X and giving it a value
    document.getElementById("Precision").innerHTML = X.toPrecision(9);//toPrecision method formats it to specific length placed in the () in this example 10 characters not including the decimal 
}//also looks like it rounds up that 9 to make the 2 into a 3. 

let digit = 8.88674; //let is kind of like variable but used under different conditions, variables are used in functions, let used in block statements.
let x1 = digit.toFixed(3); //toFixed rounds the decimal point to 3rd place as specified in the (). 
document.getElementById("twix").innerHTML = x1;

let PBC = "Peanut Butter Cups";
document.getElementById("reeses").innerHTML = PBC.valueOf();