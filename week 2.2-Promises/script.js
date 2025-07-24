// class square{
//     constructor(side,color){
//         this.side=side;
//         this.color=color
//     }

//     area(){
//         return this.side*this.side
//     }
//     diagonal(){
//         return this.side*1.141
//     }
//     paint(){
//         console.log(`Painting with the color ${this.color}`)
//     }
// }

// let sqr=new square(4,'Blue');
// let area=sqr.area();
// let diagonal=sqr.diagonal();
// let paint=sqr.paint();

// console.log(area,diagonal,paint)


// class human {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//    printDetails(){
//     console.log(`Hey my name is ${this.name} and I am ${this.age} years old. I am a ${this.gender}`) 
//    }
// }

// let person1=new human('Rohan',28,'Male');// Instance of the  human class, object of the human class
// //new means that I want creat a new object of class human and this person1 is an object or instace of  this human class
// let person2=new human('Harkirat',22,'Male');
// person1.printDetails();
// person2.printDetails();
// console.log(person2)

//Some prebuild classes which js gives access to you
//**DATE**

// let now=new Date();

// console.log(now.getDay());
// console.log(now.getFullYear())
// console.log(now.getHours());
// console.log(now.toISOString());

// let student={
//     name:"rohan",
//     age:15,
//     height:4.3,                     // Object declaration and accessing it using dot and bracket notation  
// }

// console.log(student.name)
// console.log(student["age"]);
// student["name"]="harkirat";
// console.log(student)

//**Map 

// const map= new Map();
// map.set('name', 'harkirat');
// map.set('age',25);

// console.log(map);   //The above exmaple is normal method to assign a value to a an object map methods allows you to write cleaner code.

//Promises in js

//Definition:promise class gives you a promise, that I will return you something in the future.A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

//callback based approach 
// function main(){
//     console.log('3 seconds have passed.');
// }

// setTimeout(main,3000);


//promise based approach

//promisified version of setTimeout

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=> setTimeout(resolve,ms));  //returns object of an promise class
// }
// function callback(){
//     console.log(`3 seconds have passed.`)
// }

// setTimeoutPromisified(3000).then(callback)

// function waitFor3S(resolve){
//     setTimeout(resolve,3000)
// }

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }

// function print(){
//     console.log('hey your text has been printed')
// }

// setTimeoutPromisified(3000).then(print)

// function random(resolve){ //resolve is also a function
//     setTimeout(resolve,3000);

// }

// let p= new Promise(random); //supposed to return u something eventually



// //using the eventual value returned by the promise
// function callback(){
//     console.log('promise succeded')
// }

// p.then(callback);



// creating my own promise class
// const { rejects } = require('assert');
// const fs = require('fs');
// const { resolve } = require('path');
// function readfilePromisified(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }

//         });

//     })
// }

// function callback(data) {
//     console.log(data);

// }
// readfilePromisified('a.txt').then(callback);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }

// setTimeoutPromisified(3000).then(()=>{console.log('hey your program has taken 3 seconds to get runned')})

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('promise resolved!')
//         },2000);
//     })
// }

// myPromise().then((message)=>{
//     console.log(message);
// });


// function callback() {
//     console.log('hello there')
// }
// setTimeout(callback,5000);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))

// }

// setTimeoutPromisified(3000).then(callback)



// function waitFor3S(resolve){
//     setTimeout(resolve,3000)

// }

// function setTimeoutPromisified(){
//     return new Promise(waitFor3S) //it takes function as an input, it basically says the function which I take as an input when it's first arguement gets called in this case it's resolve for the function waitfor3s, I will call the whatever you pass inside .then( )
// }

// function main(){
//     console.log('main is called')
// }

// setTimeoutPromisified().then(main)

// const { rejects } = require('assert');
// const { error } = require('console');
// const fs = require('fs');
// const { resolve } = require('path');


// function readthefile(resolve,reject){
//     if()
// }
// function readfile(filename){
//     return new promise(readthefile)

// }

// const p= readfile('a.txt');

// function callback(contents){
//     console.log(contents);

// }

// p.then(callback)
// function readthefile(resolve,reject){

// }
// function readFile(filename){
//     return new Promise(readthefile)

// }

// const p= readFile();

// //while creating a promise class it says that whenever you are creating a promise class give me an function as an arguement which does an actual asynchronous operation.
// class myPromise{
//     constructor(fn){
//         this.fn=fn;
//     }
//     then(cb){
//         this.resolve=cb;

//     }
// }
// function helloworld(resolve){
//     setTimeout(resolve,3000)
// }
// function message(){
//     console.log('hello world')
// }

// let promise= new Promise(helloworld)

// promise.then(message)

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => { setTimeout(resolve, ms) })

// }

// setTimeoutPromisified(3000).then(() => {
//   console.log('RED');
//   return setTimeoutPromisified(1000)

// }).then(() => {
//   console.log('YELLOW');
//   return setTimeoutPromisified(2000)
// })
//   .then(() => {
//     console.log('GREEN');
//     return setTimeoutPromisified(3000)
//   })
//   .then(() => {
//     console.log('RED');
//     return setTimeoutPromisified(1000)

//   }).then(() => {
//     console.log('YELLOW');
//     return setTimeoutPromisified(2000)
//   })
//   .then(() => {
//     console.log('GREEN');
//   })

const fs = require('fs');
function readfilePromisified(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject('file does not exist');
      }
      else {
        resolve(data)
      }
    })

  })
}

readfilePromisified('a.txt').then((content) => {
  console.log(content);
}).catch(msg => { console.log(msg) })
