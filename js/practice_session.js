// // // conseptual session

/* let first = 4;
// or, first = first + 1;
// or, first += 1;
// or, first ++; [variable এর মান প্রত্যেকবার এক হিসাবে বাড়ানোর জন্য এই নিয়মের যে কোনো একটি নিয়ম অনুসরণ করতে হবে।]

first += 5;
// [variable এর মান নির্দিষ্ট সংখ্যক হিসাবে বাড়ানোর জন্য এই নিয়ম অনুসরন করতে হবে]
console.log(first); */


/* function avarage(n) {
    let sum = 0, count = 0;
    for (let i = 0; i < n; i++) {
        if (i%3 == 0) {
            sum = sum + i;
            count = count + 1;
        }
        
    }
    let avg = sum / count;
    return avg;
}  

let result = avarage(5);
console.log(result); 

[এক থেকে n তম সংখ্যা পর্যন্ত সংখ্যার যোগফল এবং তার গড় বের করার পদ্ধতি] */



/* let numbers = [1, 2, 3, 4, 6];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number == 3) {
        console.log(number);
    }
} */










// ** Module 17 **

// // // simple mathmatical operation

/* var eggPrice = 10;
var onionPrice = 42;
var quantity = 7;

// var totalPrice = onionPrice + eggPrice;
var totalEggPrice = eggPrice * quantity;

// console.log(totalPrice);

// console.log(onionPrice + eggPrice);

console.log(totalEggPrice); */



// // //(advance) mathematical operation shorthand

/* var price1 = 10;
price1 = price1 + 10;
[প্রতিবার নতুন variable declare না করে কোনো variable এর মান পরিবর্তন করতে চাইলে উপরের shorthand এর যে কোনো একটা কোড ব্যবহার করলেই হবে]
price1 += 10;
[পরিবর্তনের ক্ষেত্রে বারবার variable এর নাম না লিখেলেও হবে]

var price1 = 10;
price1 = price1 + 1;
price += 1;
price1 ++;
[output-এ প্রতিবার ১ করে বৃদ্ধি করতে উপরের কোডের যে কোনো এক ভাবে লিখলেই কাঙ্ক্ষিত output পাওয়া যাবে।] */



// // //(advanced) String Concatenation, Integer float parseInt parseFloat type conversion

/* // concatenation
var firstName = "hasan";
var lastName = "abdullah";
var fullName = firstName + " " + lastName;

console.log (fullName);


// Integer float parseInt parseFloat type conversion
var price3 = 42;
var price4 = "53";
var totalPrice34 = price3 + parseInt(price4);
[string থেকে integer data type-এ রূপান্তর করার জন্য parseInt ব্যবহার করা হয়]

console.log(totalPrice34); */



// // // Different variable types and use toFixed with parseFloat

/* var tShirtPrice = 200;
console.log(typeof tShirtPrice);

var firstNumber = 0.55;
var secondNumber = 0.65;
var newNumberTotal = firstNumber + secondNumber;
newNumberTotal = newNumberTotal.toFixed(2);
newNumberTotal = parseFloat(newNumberTotal);
console.log(newNumberTotal);

অথবা, এইভাবেও output পাওয়া যায়-

console.log (parseFloat(newNumberTotal.toFixed(2))); */


// // // modulus

/* var mangoes = 7;
var hungryPerson= 2;
var remaining = mangoes % hungryPerson; [ভাগ শেষ দেখার জন্য % ব্যবহার করা হয়। কোনো কোনো জায়গায় remaining কে reminder ও বলা হয়ে থাকে]
console.log(remaining); */

// ====================================================================================================





// // // ** Module 18 **

// // 18-2 Declare Array, array length and array index

/* var friendsAge = [11, 13, 17]
[অ্যারের উপাদানগুলোকে third bracket এর মধ্যে রাখতে হয়]

console.log(friendsAge.length);
[একটি অ্যারের মধ্যে কয়টি উপাদান আছে তা জানার জন্য variable এর সাথে .length দিলে জানা যায়] */


// // 18 - 3 Array index, get and set by index, indexOf


/* [একটি অ্যারের মধ্যে যেই উপাদানগুলা থাকে তাদের অবস্থানকে index বলে এবং অ্যারে index, 0(শূণ্য) দিয়ে শুরু হয়।]

var bookPages = ['hablu', 'bolod', 'chouddogosti', 'battery', 'peracitamol', 'gymnesium']

var batteryIndex = bookPages.indexOf('battery');
console.log(batteryIndex);

// অথবা, এইভাবেও output পাওয়া যায়-
console.log(bookPages.indexOf('battery'));

var numbers = [45, 98, 65, 72, 52, 63];
console.log(numbers.indexOf(52));

console.log(numbers.indexOf(152));
[অ্যারের মধ্যে অনুপস্থিত কোনো উপাদানের index এর অবস্থান -1 দেখা যাবে।]

var secondIndex = numbers[2];
console.log(secondIndex);

// অথবা, এইভাবেও output পাওয়া যায়-
console.log(numbers[2]);

numbers[1] = 95;
console.log(numbers)
[index এর ভিতরের কোনো উপাদানকে উপরের কমান্ড দিয়ে পরিবর্তন করা যায়।] */


// // // 18 - 4 Add or remove element from array using push, pop


/* var lastBench = ['kalam', 'balam', 'salam'];
lastBench.push('nilam');
console.log(lastBench);

[অ্যারের নামের সাথে .push() input দিলে অ্যারের শেষে এক বা একাধিক উপাদান যোগ করে এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে।
আবার, .unshift() input দিলে অ্যারের শুরুতে যোগ করে।]

var friendsAge = [11, 13, 17, 12];
friendsAge.pop();
console.log(friendsAge);

[অ্যারের নামের সাথে .pop() input দিলে অ্যারের শেষের দিকে থেকে এক বা একাধিক উপাদান বাদ দেয় এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে।]
আবার, .shift() input দিলে অ্যারের শুরুর দিক থেকে বাদ দেয়] */


// // //18 - 5 Compare variables and Comparison operator


/* var firstNum = 5;
var secondNum = 6;

console.log(firstNum != secondNum);


18-6 Make conditional decision, if-else, comparison


var phonePrice = 45000;
var myBudget = 53000;

if (phonePrice > myBudget) {
    console.log('dhur! button phone-e chalamu!')
}
else (phonePrice < myBudget) {
    console.log('ekhoni kinmu re mama!!')
} */



// 18 - 6 Make conditional decision, if-else, comparison


/* var chickenPrice = 180;
var myMoney = 50;

if (chickenPrice < myMoney){
    console.log('Yes!! murgi diya vat khamu ajke!')
}
else {
    console.log('dal-alu votta-e den. murgi thak!')
}

[ else ব্যবহারের সময় কোনো condition দিতে হবেনা। ] */


// 18 - 7 Handle multiple conditions, and or


/* var gotJob = false;
var moneySaved = 15000;
var backupAse = true;

if (gotJob == true && moneySaved > 10000){
    console.log('cholo kisu ekta koira feli')
}
else{
    console.log('tore diya jiboneo hoibo na!')
} */


/* if (gotJob == true || moneySaved > 10000){
    console.log('cholo kisu ekta koira feli')
}
else{
    console.log('tore diya jiboneo hoibo na!')
} */


// 18 - 8(advanced) Multi stage condition and nested conditions


/* var danishPrice = 60;
var butterBunPrice = 55;
var toastPrice = 10;
var myBudget = 400;
var packedWell = true;

if (danishPrice < myBudget) {
    console.log('danish khamu ajke')
}
else if (butterBunPrice < myBudget) {
    console.log('butterbun khamu, khabi naki?')
}
else {
    console.log('toast khamu')
} */


/* if (danishPrice < myBudget){
    if(packedWell == true){
        console.log('danish kamu')
    }
    else {
        console.log('danish khamu na')
    }
} */


// 18 - 9 Module summary and two more comparisons


/* var tableLength = 12;
var tourDestinations = ['coxbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';

tourDestinations.push('london');
tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log('pahare ahare ahare')
}
else if (tourDestinations[1] == 'nepal') {
    console.log('china tor kase jamuna')
}
else if (tourDestinations.length == 4) {
    console.log('china tor kase jamuna')
}
else {
    console.log('kothao jamu na')
} */



// // //18_5-2 While loop, debug and understand while loop


/* var roastGiven = 0;
while (roastGiven < 7) {
    console.log('roast den, please.');
    roastGiven++;
    console.log(roastGiven);
}
 */


// // 18_5 - 3 More while loops, odd numbers, even numbers


/* even numbers
var number = 0; //loop variable

while (number <= 20) {
    console.log(number);
    number = number + 2;
} */

// odd numbers

/* var number = 1

while (number <= 20) {
    console.log(number);
    number = number + 2;
} */



// // 18_5 - 4 For loop, how for loop works, while vs for loop


// even numbers
/* for ( var i = 0; i < 7; i+=2){
    console.log(i);
} */


// 18_5 - 5 Recap loop, run a loop for each element of an array


/* var numbers = [45, 86, 34, 87, 12, 98, 82];

for(var i = 0; i < numbers.length; i++){
    var elements = numbers[i];
    console.log(elements);
} */



// // // 19-2 Declare a Function, call function, function vs loop

/* // function declaration
function startFan(params) {
    console.log('walk toward the switch');
    console.log('press the switch');
}

// call function
startFan(); */



// // // 19 - 4(advanced) Multiple parameter add, multiplication, etc



/* function addTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var total = addTwoNumbers(firstNumber, secondNumber);
console.log('result:', total); */


/* function multiplyTwoNumber(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumber(30, 40)
console.log('total multiplication result:', total); */



// // //19-6 multiple ways to get and set object property



/* var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

// to read the value of an object
console.log(computer.processor);
var computerPrice = computer.price;
console.log(computerPrice);

//set a property valu of an object
computer.price = 22000;
//or,
computer['price'] = 22000;
//or,
var priceProperty = 'price'
computer[priceProperty] = 22000;

console.log(computer); */



// // //19 - 7(optional) Javascript switch case break and default


/* var color = 'red';

if(color == 'blue'){
    console.log('color is blue');
}
else if (color == 'red'){
    console.log('color is red');
}
else if (color == 'green'){
    console.log('color is green');
}
else if (color == 'yellow'){
    console.log('color is yellow');
}
else {
    console.log('color is black');
} */

// // // or,

/* switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;

    default:
        console.log('color is black');
        break;
} */



// // // 19 - 8(advanced) while and for loop break and continue

//while loop break
/* var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
} */

//for loop break,
/* for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
} */


//continue
/* var numbers = [54, 35, 21, 98, 23, 101, 45, 67];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
} */



// // // 20-2 Unit Convert Inch to Feet, miles to kilometer



//inches to feet
/* function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log("myInches to feet", feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log("dadiInches to feet", feet); */


//mile to kilometter
/* function mileToKilometter(miles) {
    var km = miles * 1.60934;
    return km;
}

var result = mileToKilometter(26);
console.log(result); */


/* const number = 4;
const reminder = number % 2;
console.log(reminder == 0); */


/* function oddNumber(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

let result = oddNumber(145);
console.log(result); */





/* প্রাকটিস চ্যালেঞ্জ -১:

ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো.আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে ?

১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A +. */



/* প্রাকটিস প্রব্লেম -২:

তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

var signal = 'yellow';

if (signal == 'red'){
    console.log('stop! you might be fall in a danger')
}
else if(signal == 'yellow') {
    console.log('wait. let the road clear first.')
}
else{
    console.log('go, cross the road.')
} */





/* var aliaGot = 95;
var daliaGot = 66;
var saliaGot= 80;
var maliaGot = 59;
var liliaGot = 47;
var jalaiyaGot = 77; */













// 21-2 Swap variable, swap without temp, destructing


/* var first = 5;
var second = 7;
console.log(first, second);

// first approach
var temp = first;
first = second;
second = temp;
console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second); */



// // // 22-1 Introduction and increase problem solving ability
// // maximum number or minimum number

/* function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
} */


/* function largestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
} */



// // // 22 - 2 Remove duplicate items from an array


/* const names = ['abul', 'abu', 'babul', 'kabul', 'dabul', 'fabul', 'fabul', 'ebul', 'gabul', 'abul', 'habul', 'dabul'];
console.log(names.length);

 function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element)
    // }
    for (const element of names) {
       console.log(element);
         if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */



// // // 22 - 3 Explore string nature and reverse a string


/* const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reverse = reverseString(greetings);
console.log(reverse); */


// // // 22 - 4 Handle unexpected function input parameter error

// //add numbers

/* function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(63, 7);
console.log(firstTotal);
const secondTotal = add(54, 981);
console.log(secondTotal); */


// //multiplication

/* function multiply(num1, num2) {
    const multiplication = num1 * num2;
    return multiplication;
}

const fistMultiplication = multiply(7, 3);
console.log(fistMultiplication); */



// // // 22 - 5 Use add and multiplication to calculate wood requirements

/* function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption); */


// // // 22 - 6 Write foo, bar, foobar if divisible by 3 or 5 or both


/* for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar')
    }
    else if (i % 5 == 0) {
        console.log('bar')
    }
    else if (i % 3 == 0) {
        console.log('foo')
    }
    else {
        console.log(i);
    }
} */



// // // 22 - 7 Find the cheapest phone from an array of phone objects



/* const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'wlaton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'xiaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 },
];

let cheapest = phones[0];
for (const phone of phones) {
    //compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest); */



// // // 22 - 8 Calculate the total cost of the products in a shopping cart



/* const cart = [
    {name: 'laptop', price: 43000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 8},
    {name: 'watch', price: 3680, quantity: 3},
    {name: 'phone', price: 55000, quantity: 1},
]

let cartTotal = 0;

for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + product.price;
}
console.log(cartTotal); */



// // // 22 - 9 Traveling in a Jungle and counting wild animals



/* function animalCount(miles) {
    const animalDensityFirst10PerMile = 10;
    const animalDensitySecond10PerMile = 10;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10PerMile;
        return count;
    }
    else if (miles <= 20) {
        const first10 = miles * animalDensityFirst10PerMile;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10PerMile;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(13);
console.log(animals); */


