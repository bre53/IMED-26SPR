// Select elements
var forButton = document.querySelector(".forBtn");
var whileButton = document.querySelector(".whileBtn");
var styleButton = document.querySelector(".styleBtn");
var list = document.querySelector(".list");
var heading = document.querySelector("h1");

// Array of hobbies
var hobbies = ["Painting", "Hiking", "Photography", "Cooking", "Gardening"];


// FOR LOOP - shows ALL hobbies
forButton.addEventListener("click", function () {

    list.innerHTML = "";
    heading.textContent = "All Hobbies (For Loop)";
    heading.style.color = "blue";
    heading.style.backgroundColor = "";

    for (var i = 0; i < hobbies.length; i++) {

        var listItem = document.createElement("li");
        listItem.textContent = hobbies[i];

        list.appendChild(listItem);
    }

});


// WHILE LOOP - shows ONLY first 3 hobbies
whileButton.addEventListener("click", function () {

    list.innerHTML = "";
    heading.textContent = "Top 3 Hobbies (While Loop)";
    heading.style.color = "green";
    heading.style.backgroundColor = "";

    var index = 0;

    while (index < 3) {

        var listItem = document.createElement("li");
        listItem.textContent = hobbies[index];

        list.appendChild(listItem);

        index++;
    }

});


// CHANGE STYLE BUTTON
styleButton.addEventListener("click", function () {

    heading.textContent = "Styled with JavaScript";
    heading.style.backgroundColor = "black";
    heading.style.color = "white";
    heading.style.padding = "10px";

});
