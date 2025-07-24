//question 1

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

// async function printMessages(){
//     console.log('Starting up');
//     await delay(2000);
//     console.log('Loading resources');
//     await delay(3000);
//     console.log('Almost there...');
//     await delay(1000);
//     console.log('Done!')
// }

// printMessages()


//question 2
// const urls = [
//   'https://official-joke-api.appspot.com/random_joke',
//   'https://official-joke-api.appspot.com/random_joke',
//   'https://official-joke-api.appspot.com/random_joke'
// ];

// async function fetchapi(arr){
//     for(let i=0;i<arr.length;i++){
//         let object= await fetch(arr[i]);
//         let joke= await object.json()
        
//         console.log('setup:',joke.setup)
//         console.log('punchline:',joke.punchline);
//         await delay(2000)
        

//     }

// }

// fetchapi(urls)


//question 3
function delay(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

async function foodOrderingSimulation(){
    let menu=['Burger','Pizza','Pasta','Noodles','Sushi','Dumplings','Doughnut']
    let randomNum=Math.ceil(Math.random()*menu.length);
    
    console.log('fetching menu...');
    await delay(1000);
    let choice=menu[randomNum];
    console.log(`User selected:${choice}`);
    await delay(2000);
    console.log('Order placed.');
    console.log(`Preparing ${choice}`);
    await delay(3000);
    console.log(`${choice} is on the way`)
    await delay(2000);
    console.log('Order delivered')


}

foodOrderingSimulation()