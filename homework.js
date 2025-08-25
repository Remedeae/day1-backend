const firstName = "Maya";
const favoriteNumber = 42;
const likesCoding = true;

console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`); 

const birthYear = 1991;
const currentYear = 2025;

console.log("I have been alive for", currentYear - birthYear, "years, somehow.");

const foods = ["sushi", "BANANA!", "gröt"]
const lastName = "Blomdahl"
const student = {
    name: firstName + " " + lastName,
    favoriteNumber: favoriteNumber,
    likesCoding: likesCoding,
    niceFood: foods
};

console.log(student);
console.log(firstName, "thinks that it's very fun to yell", student.niceFood[1], "at passing stangers.")