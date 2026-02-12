let text1="Hobby";
let text2="HQ";

document.write (text1 + text2);

const type = 'active';
const hours = 4;

document.write (`<p>An ${type} hobby requires ${hours} per week.<p>`);

if (hours < 2) {
    document.write("Get started with a simple hobby like sketching.");
} else {
    document.write(` Since you have more time, try an ${type} hobby outside.`);
}

let difficulty = 3;

switch(difficulty){
    case 1:
        document.write("So easy.");
        break;
    case 2:
        document.write("It takes a little skill but not bad.")
        break;
    case 3:
        document.write("You may have to work at it a bit, but it's doable!")
        break;
    case 4:
        document.write("It's a challenge, but you'll get there with practice!")
        break;
    case 5:
        document.write("Super hard, but so gratifying!")
        break;
    default:
        document.write(`${difficulty} is undetermined.`);
}