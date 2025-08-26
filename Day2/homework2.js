//Task 1
function sayHello(){
    console.log("Hello from Node.js!")
};
//sayHello();

//Task 2
function welcomeUser(name) {
    console.log("Welcome, " + name + "!")
}
//welcomeUser("Kitty");
//welcomeUser("Fenris");

//Task 3
function subtract(a, b) {
    console.log(a-b)
}
//subtract(10, 3);

//Task 4
/* function square(number) {
    number = Math.pow(number,2);
    let result = number;
    console.log(result);
} */
//square(2);
//square(8);

//Task 5
/* function profile(name, age, likesCoding) {
    console.log(`Hi I'm ${name}, I am ${age}, and it's ${likesCoding} that I like coding.`);
    } */
//profile("Sam", 25, true);
//profile("Kirsten", 4, false);

//Task 6
function greetWithTime(name, timeOfDay= "morning"){
    console.log(`Good ${timeOfDay}, ${name}!`)
}
//greetWithTime("Frederika", "Evening");
//greetWithTime("Emily");

//Task 7
function calculator(a, b, operator) {
    if (operator === "add") {
        console.log(a+b);
        return;
    }
    if (operator === "subtract") {
        console.log(a-b);
        return;
    }
    if (operator === "multiply") {
        console.log(a*b);
        return;
    }
        if (operator === "divide") {
        console.log(a/b);
    }

};
//calculator(3,5,"add");
//calculator(5,1, "subtract");
//calculator(5,3,"multiply");
//calculator(20,10,"divide");

//Task 8
square = (a) => a * a;
//console.log(square(3));

//Task 9
isAdult = (age) => {
    return age < 18 ? false : true;
};
function profile(name, age, likesCoding) {
    let confirmAdult = "";
    if (isAdult(age) === false) {
        confirmAdult = "not "
    }
    console.log(`Hi I'm ${name}, I am ${age} and I'm ${confirmAdult}an adult. Additionally it's ${likesCoding} that I like coding.`);
    };

profile("Kvik", 13, false);
profile("Elisa", 33, true);