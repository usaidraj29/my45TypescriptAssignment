var arr_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var u = 0; u < arr_Number.length; u++) {
    if (u === 0) {
        console.log("1st");
    }
    else if (u === 1) {
        console.log("2nd");
    }
    else if (u === 2) {
        console.log("3rd");
    }
    else {
        console.log("".concat(u + 1, "th"));
    }
}
