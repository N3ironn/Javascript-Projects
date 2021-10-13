
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


function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

