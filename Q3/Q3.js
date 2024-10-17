// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "muhammad Usaid";
console.log("Lowercase: ".concat(Name.toLowerCase()));
console.log("Uppercase: ".concat(Name.toUpperCase()));
var word = Name.split(" ");
var titleCase = "";
for (var i = 0; i < word.length; i++) {
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
}
console.log("TitleCase: ".concat(titleCase));
