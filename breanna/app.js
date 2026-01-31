// GLOBAL 
let totalHobbies = 4;
console.log("Total hobbies:", totalHobbies); // Output to console

// STRING 
const favoriteHobby = "Drawing";

// MATH
let hoursPerHobby = 2;
let totalHours = totalHobbies * hoursPerHobby;

// BLOCK
if (totalHobbies > 0) {
  
  let message = "You have at least one hobby!";

  document.write( message + "<br>");
}

// OBJECT VARIABLE
let hobby = {
  name: "Hiking",
  category: "Outdoor",
  difficulty: "Moderate"
};

// SHOW RESULTS ON THE PAGE
document.write("My favorite hobby is: " + favoriteHobby + "<br>");
document.write("Total hours per week on hobbies: " + totalHours + "<br>");


document.write("<h2>Hobby Details</h2>");
document.write("<p>Name: " + hobby.name + "</p>");
document.write("<p>Category: " + hobby.category + "</p>");
document.write("<p>Difficulty: " + hobby.difficulty + "</p>");
