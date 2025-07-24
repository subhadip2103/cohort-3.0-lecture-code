const { rejects } = require('assert');

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// setTimeoutPromisified(1000).then(() => {
//     console.log('hi');
//     return setTimeoutPromisified(3000)        //This is the traditional promsified version which uses .then chaining
// }
// ).then(() => {
//     console.log('hello');
//     return setTimeoutPromisified(5000)

// }).then(()=>console.log('hello there'))


//Async Await version 

async function solve() {
    await setTimeoutPromisified(1000)
    console.log('hi');
    await setTimeoutPromisified(3000)
    console.log('hello');
    await setTimeoutPromisified(5000)
    console.log('hello there');
    await readfileAsync(1000)


}

solve()

//fs.readfile async version

