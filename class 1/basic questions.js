//Question1: Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// let color='Blue';
// const height='180 cm';
// let likePizza=true;

// console.log(color,height,likePizza
// );

/* Question 2:Write a function sum that finds the sum of two numbers.
Side quest - Try passing in a string instead of a number and see what happens?
Write a function called canVote that returns true or false if the age of a user is > 18 */

// function sum(num1,num2){
//     return num1+num2;
// }

// console.log(sum(3,9));
// console.log(sum(7,89));
// console.log(sum(8,'Black'));

/*Question 3:Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd." */
// let num = 32;
// function checkeven(num) {
//     if (num % 2 === 0) {
//         console.log('The number is even.')
//     }
//     else {
//         console.log('The number is odd.')
//     }
// }

// checkeven(63);
// checkeven(num);

/*Question 4:Write a function called sum that finds the sum from 1 to a number */

// function sum(num){
//     let digitalSum=0;

//     for(let i=1;i<=num;i++){
//         digitalSum=digitalSum+i

//     }

//     return digitalSum;
// }

// console.log(sum(5));
// console.log(sum(7));
// console.log(sum(9));

/*Question 5:Write a function that takes a user as an input and greets them with their name and age
Write a function that takes a new object as input which has name , age and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
Also tell the user if they are legal to vote or not */

// let user={
//     name:'rahan',
//     age:52,
// }

// function greet(user){
//     console.log(`Good Morning ${user.name}, your Age is ${user.age}, We are happy to have you on Board.`)
// }

// console.log(greet({name:'shyam',age:72}));
// console.log(greet(user));

/*Question 6:Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS*/

// let evenNumArr;
// function evenNumFilter(arr) {
//     evenNumArr = arr.filter(evenNumCheck);
    
//     return evenNumArr;
// }

// function evenNumCheck(num){
//     if(num%2===0){
//         return true
//     }
//     else{
//         return false
//     }

// }

// console.log(evenNumFilter([2,7,8,9,56,43,58,74,86,93,59]));


/*question 7:Write a function that takes an array of users as input and returns only the users who are more than 18 years old */

// let validUsers;
// function arrAgeCheck(arr){
//     validUsers= arr.filter(ageCheck);
    
//     return validUsers;
// }

// function ageCheck(user){
//     return user.age>18;

    

// }

// console.log(arrAgeCheck([{Name:'Suresh',age:12,gender:'Male'},{Name:'Nitin',age:56,gender:'Male'},{Name:'Jitendra',age:28,gender:'Male'}]));

//question 8:
let validUsers

function ageGenderCheck(arr){
    validUsers=arr.filter(conditionCheck);
    return validUsers;
}

function conditionCheck(user){
    return user.age>18 && user.Gender==='Male';
}

const users=[
    {Name:'Suresh',age:89,Gender:'Male'},
    {Name:'Asha',age:56,Gender:'Female'},
    {Name:'Nisith',age:12,Gender:'Male'},
    {Name:'Harry',age:31,Gender:'Male'},
    {Name:'Lata',age:28,Gender:'Female'}]