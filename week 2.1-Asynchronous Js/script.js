// let finalsum=0;

// function sum(n){
//     for(let i=1;i<=n;i++){
//         finalsum+=i
//     }
//     return finalsum
//     //return n*(n+1)/2
// }

// console.log(sum(5))
// inorder to find a sum of number upto the number x the formula for it would be x*(x+1);

/* NOTE:Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one. */
 
//Example:
// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100); // This code runs in order means the line which is defined at top would run first then the second one and so on.
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);

// const fs= require('fs');// it's not necessary that the variables name should be 'fs' only it can be anything.

// const contents=fs.readFile("a.txt","utf-8");// fs is an external library that stands for file system
// // readfile function reads the file asynchronously 
// const content1=fs.readFileSync("b.txt","utf-8");
// // //readFileSync read the file sychronously



// // console.log(contents);
// // console.log(content1);

// /*Functional arguements: Functional arguements are nothing but just passing a function as an arguement in another fuction*/
// //Example:
// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(doOperation(1, 2, sum));


// const fs=require("fs");

// function print(err,data){
//     if(err){
//         console.log("file not found");
//     }
//     else[
//         console.log(data)
//     ]
// }

// fs.readFile("a.txt","utf-8",print);


// fs.readFile("b.txt","utf-8",print);

// console.log("Done!");
// //Interview question: What will be logged first?

// // The answer to above question would be done would get logged first as it's not synchronous anymore we just started the task and then moved on so the it doesn't waits for the task to get completed so once the file which gets read first it would get logged on the console.

// function readfile(filePath,encoding,op){
//     //read file
//     op("Error!!","Hi there")
// }


console.log("Hi!");
function timeout() {
    console.log("Click the button!");
}    
setTimeout(timeout, 1000);

console.log("Welcome to loupe.");
let c=0;
for(let i=0; i<10000000000; i++){

    c=c+1;

}
console.log("expensive operation done.")


/*What makes a function asynchronous?
Anything that requires browser api's means that it needs to offload a task someone else means the web api's is called a asynchronous function. Or you can call that anything that is I/O intesive.*/