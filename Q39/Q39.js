// Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:"Lahore, Pakistan"
var City_Country = function (City, Country) {
    return "\"".concat(City, ", ").concat(Country, "\"");
};
console.log(City_Country("Kashmir", "Pakistan"));
console.log(City_Country("Islamabad", "Pakistan"));
console.log(City_Country("Swat", "Pakistan"));
