const person = {
  firstName: "Breanna",
  lastName: "Powers",
  age: 44,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

function greet(name, age) {
  return "Hello, " + name + "! You are " + age + " years old.";
}

document.getElementById("greetButton").onclick = function() {
  const message = greet(person.fullName(), person.age);
  document.getElementById("output").innerHTML = message;
};
