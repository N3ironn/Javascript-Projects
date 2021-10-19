function animal_Function() {
    var animal_Outut;
    var animal = document.getElementById("animal_Input").value;
    var animal_String = "is a great color!";
    switch(animal) {
        case "Panther":
            animal_Outut = "Panther" + animal_String;
            break;
        case "Elephant":
            animal_Outut = "Elephant" + animal_String;
            break;
        case "Panda":
            animal_Outut = "Panda" + animal_String;
            break;
        case "Snake":
            animal_Outut = "Snake" + animal_String;
            break;
        case "Shark":
            animal_Outut = "Shark" + animal_String;
            break;
        case "Horse":
            animal_Outut = "Horse" + animal_String;
            break;
            default:
            animal_Outut = "Please enter a animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = animal_Outut;
}