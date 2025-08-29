//Untion types:

//UT: Exercise 1

type IDtype = number | string;

const showID = (id: IDtype)  => {
    console.log("Your password is " + id);
};
showID(3);
showID("Mimmi");

//UT: Exercise 2

type Fruit = "apple" | "banana" |"orange" ;

const eatFruit = (fruit : Fruit) => {
    console.log("You ate an " + fruit);
};

eatFruit("apple");
eatFruit("orange");

//UT Exercise 3

type Result = true | false;

const printResult = (result : Result) => {
    result === true ? console.log("Pass") : console.log("Fail");
};

printResult(true);
printResult(false);

//Interfaces and Type Aliases

//I & TA Exercise 1
interface Book {
    titel : string,
    pages : number
};

const describeBook = (book : Book) => {
    console.log(`The book ${book.titel} has ${book.pages} pages.`)
};
describeBook({titel: "The Deed of Paxenarrion", pages: 1024});

// I & TA Exercise 2
interface Teacher {
    name : string,
    subject : string
};
interface Employee {
    id : string | number,
    email : string
};
type SchoolTeacher = Teacher & Employee;

const printTeacherInfo= (teacher : SchoolTeacher) => {
    console.log(`
        Name: ${teacher.name}
        Subject: ${teacher.subject}
        ID: ${teacher.id}
        Email: ${teacher.email}`);
};
printTeacherInfo({name: "Fenris", subject: "Doggography", id: "1", email: "fenris@doge.dk"});

//I & TA Exercise 3

interface Car {
    brand : string,
    year : number
};
const printCar = (car : Car) => {
    console.log("Brand: " + car.brand + " Year: " + car.year);
};

printCar({brand: "Duke Hammiltons' Carrige", year: 1767});

// Enums

//E Exercise 1
enum Color {
    Red, Green, Blue
};
const showColor = (color: Color) => {
    console.log("You choose " + Color[color]);
};
showColor(Color.Red);

//E Exercise 2
enum PizzaSize {
    Small, Meduim, Large
}
const orderPizza = (pizzaSize : PizzaSize) => {
    console.log(`You ordered ${PizzaSize[pizzaSize]} pizza.`);
}
orderPizza(PizzaSize.Large);

//E Exercise 3
enum Role {
    Admin, User, Guest
}
 const printRole = (role:Role) => {
    if (role === Role.Admin) {
        return console.log("You have full access.")
    }
    if (role === Role.User) {
        return console.log("You have limited access.")
    }
        if (role === Role.Guest) {
        return console.log("You have guest access.")
    }
}
printRole(Role.User);

//Generics

//G Exercise 1
const wrapInArray = <T>(item : T) : T[] => {
    return [item]
}
console.log(wrapInArray("cat"));

//G Exercise 2
const firstItem = <T>(array : T[]) => {
    return console.log(array[0])
}
firstItem([1,2,3]);
firstItem(["a","b","c"]);

//G Exercise 3
const swap =  <T>(item1 : T, item2 :T) : T[] => {
    return [item1, item2].reverse();
}
console.log(swap("hello", "world"))