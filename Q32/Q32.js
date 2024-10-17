//checking usernames
var current_Users = ["Usaid", "Sufiyan", "Shahzeb", "Ayaan", "Saba"];
var new_Users = ["Usaid", "Saba", "Asad", "Usman", "Ibaad"];
for (var i = 0; i < new_Users.length; i++) {
    if (current_Users.includes(new_Users[i])) {
        console.log("".concat(new_Users[i], " You Have To Enter New User Name"));
    }
    else {
        console.log("".concat(new_Users[i], " That UserName is Available"));
    }
}
