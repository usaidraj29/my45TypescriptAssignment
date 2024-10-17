// Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magician_Names = ["jaggu kalia", "crime master gogo", "Kamran Tissori", "Nawaz chor"];
var show_Magicians = function (M) {
    console.log("Magicians Names Are: ".concat(M.join(", ")));
};
show_Magicians(magician_Names);
// Question 42
/* Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
var magician_Namess = ["jaggu kalia", "crime master gogo", "kamran tissori", "Nawaz chor"];
var make_great = function (M) {
    for (var i = 0; i < magician_Namess.length; i++) {
        M[i] = "The Great Magician ".concat(M[i]);
    }
};
var show_Magicianss = function (M) {
    console.log("Magicians Names Are: ".concat(M.join(", ")));
};
make_great(magician_Namess);
show_Magicianss(magician_Namess);
