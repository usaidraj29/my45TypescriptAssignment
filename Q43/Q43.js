// Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array.
var magicianNames = ["kamran tissori", "jaggu kalia", "crime master gogo", "junaid bangali"];
var new_Array = [];
var makegreat = function (L) {
    for (var i = 0; i < magicianNames.length; i++) {
        L[i] = "The Great Magician ".concat(L[i]);
    }
};
var showMagicians = function (M, L) {
    console.log("Magicians Names Are: ".concat(M.join(", ")));
    console.log("Magicians Names Are: ".concat(L.join(", ")));
};
makegreat(new_Array);
showMagicians(magicianNames, new_Array);
