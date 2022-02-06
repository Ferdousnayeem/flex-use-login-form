
// variable and array

var favoriteBook = "4 hour work week";
var bookList = ["positioning", "hooked", "start with why", "shoe dog"];
var shoeDogIndex = bookList.indexOf("shoe dog");
bookList[1] = "story Brand";

bookList.push("small giants");
bookList.pop()


// conditionals


if (bookList[1] == "hooked") {
    console.log("i am hooked")
}
else {
    console.log("i am not hooked")
}


// while loop

var i = 0;
while (i < 15) {
    console.log(i);
    console.log("looping looping looping");
    i++;
}

for (var i = 0; i < 15; i++) {
    console.log(i);
}

// function declaration
// function startFan(){
//     console.log('walk towards fan')
//     console.log('press the switch');
// }

// call the function 
// startFan(); 

function shingaraAno(taka) {
    console.log(taka);
}

shingaraAno(100);

// function getReminder(number1, number2){
//     number1 % number2
// }

// const reminder = getReminder(12, 2);
// console.log(reminder);

function addNumber(number1, number2) {
    return "Result is" + number1 + number2;
}

var result = addNumber(5, 4);

// variable 
var time = "10:50pm";
var bookPrice = 150;
var isWhitecolor = false;

// array 
var partners = ["sajid", "mojid", "nojid", "lojid"];
var elementCount = partners.length;
var nojidIndex = partners.indexOf("nojid")
partners.push("kajid");
partners.pop();

//conditionals
if (bookPrice < 120) {
    console.log("I will buy this book")
}
else {
    console.log("Mama, kisu discount den navigator. apni na mama!")
}

//loop
var i = 0;
while (i <= 17) {
    //do some work
    i++;
}

for (i = 0; i <= 17; i++) {
    //do some work
}

//function 
function isMoonUp() {
    if (time >= 19 && time <= 5)
        return true;
}

var moonStatus = isMoonUp(21);

// let const
// value of variable could change
let price = 27;
price = 29;
price = 31;

//value of the variable will not change
const myName = "lal e lal mr. helal"
console.log(myName);
myName = 22;