// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich that is being ordered
var items = [];
var Func3 = function () {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var i = 0; i < item.length; i++) {
        console.log("Man Want Items on Sandwiches are : ".concat(item.join(", ")));
    }
    Func3("Chicken", "Turkey", "Egg");
    Func3("Lettuce", "Tomato", "Onion");
    Func3("salad", "Turkey", "Cheese ");
};
