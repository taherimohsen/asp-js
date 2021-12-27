/** @format */

// if statement
/*
    if Shaden is a mentor print out "Hi Shaden, you are a mentor"
    if Shaden is a student print out "Hi Shaden, you are student"
    if Shaden is a teacher print out "Hi Shaden, you are a teacher"
    if she is none of above, print out "Hi Shaden, you should join IMD"
*/

let yourName = "Shaden";
let yourRole = "mentor";

if (yourRole === "mentor") {
  console.log("Hi Shaden, you are mentor");
} else if (yourRole === "student") {
  console.log("Hi Shaden, you are student");
} else if (yourRole === "mentor") {
  console.log("Hi Shaden, you are a teacher");
} else {
  console.log("Hi Shaden, you should join IMD");
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Shaden, you are a mentor.
*/
