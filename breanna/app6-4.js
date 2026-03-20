const hobbies =["Watercolor ", "Hiking ", "Genealogy ", "Board Games ", "Stamp Collecting"];

console.log(hobbies[2]);

hobbies.forEach(function(hobby) {
    document.write(hobby + "<br>");
});


const hobby = {
    name: "Painting",
    type: "Creative",
    years: 2,

    describe: function() {
        return this.name + " is a " + this.type +
        " hobby I have done for " + this.years + " years.";
    }
};

document.write("<h2>Favorite Hobby:</h2>");
document.write(hobby.describe());

