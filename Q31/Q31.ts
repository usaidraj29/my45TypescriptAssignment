// Add an if test to Exercise 28 to make sure the list of users is not empty.

let user_List : string[] = ["Usaid", "Sufiyan", "Shahbaz"]

// check list if its is empty or not
if(user_List.length === 0){
    console.log("No users found ,we need to find some");}
else{let Age:number = 19;
    if (Age < 2){console.log("Person is Baby");}
    else if ( Age === 2 && Age < 4 ){console.log("Person is a Toddler");}
    else if ( Age === 4 && Age < 13){console.log("Person is a Kid");}
    else if ( Age === 13 && Age < 20){console.log("Person is a teenager");}
    else if ( Age === 20 && Age < 65){console.log("Person is a Adult");}
    else { console.log("Person is an elder");}}

    // Remove all of the usernames from your array
user_List = []
console.log(user_List);
