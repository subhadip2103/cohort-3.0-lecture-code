/*Promisified version of Fetch*/
// function fetchPromisified(fileurl){
//     return new Promise((resolve,reject)=>{
//         fetch(fileurl).then(res=>res.json()).then(data=>resolve(data)).catch(err=>reject(err))
//     })
// }

// fetchPromisified('https://randomuser.me/api/').then(data=>{console.log('Fulldata:',data)}).catch(err=>{console.log(err)})

//Shortcut version as Promises already return a Promise

function fetchPromisified(fileurl){
    return fetch(fileurl).then(res=>res.json())
}


fetchPromisified('https://randomuser.me/api/').then((data)=>{
    console.log('Fulldata:',data);
    conso
})

