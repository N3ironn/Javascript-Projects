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



