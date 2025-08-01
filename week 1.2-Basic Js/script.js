//Write a function called sum that finds the sum from 1 to a number.

// let summation=0;
// function sum(num){
//     for(let i=0; i<=num; i++){
//         summation+=i;

//     }


//     return summation;

// }
// console.log(sum(32));

/*Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male*/


data = [{ name: 'Rohan', age: 21, gender: 'Male' }, { name: 'luvesh', age: 27, gender: 'Male' }, { name: 'Lata', age: 51, gender: 'Female' }, { name: 'Jeevak', age: 14, gender: 'Male' }];

let validCandiate;
function validUser(arr) {
    validCandiate=arr.filter(criteriaCheck);

    console.log(validCandiate);

}

function criteriaCheck(user){
    if(user.age>=18 && user.gender==='Male'){
        return true;
    }
    

}

validUser(data);


/*Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens? */

// function sum(a,b){
//     return a+b
// }
// console.log(sum(9,78));
// console.log('harkirat'+'singh');


/*Write a function called canVote that returns true or false if the age of a user is > 18 */


// function canVote(age){

//     if(age>18){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(canVote(27));
// console.log(canVote(2));

/*Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd." */

// let num=27;

// function checkNum(num){
//     if(num%2===0){
//         console.log('The number is even. ')
//     }
//     else{
//         console.log('The number is odd.')
//     }

// }

// checkNum(num);
// checkNum(88);
// checkNum(1);
// checkNum(86);

/*Write a function called sum that finds the sum from 1 to a number */


// function sum(num){
//     let totalSum=0;
//     for(let i=1; i<=num;i++){
//         totalSum+=i;
        
//     }
//     return totalSum;

// }    
// console.log(sum(36));

// console.log(sum(3));

/* */