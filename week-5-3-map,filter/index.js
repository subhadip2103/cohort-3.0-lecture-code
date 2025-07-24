// //given an array return a new array in which every array is multiplied by 2

// //Map function
// let arr=[1,13,32,4,5,6,7,9];
// let newarr=arr.map(n=>n*2); //Map funciton is used to return a new array when you are asked to transform an array and return a new one
// console.log(newarr)


// //Filter function

// //given an array return all the even values fo the array

// let evenarr=arr.filter(n=>n%2===0);
// console.log(evenarr)


//creating own map function

async function customAsyncMap(arr, callback) {
  const result = [];
  for (let item of arr) {
    const transformed = await callback(item); // user only writes this logic
    result.push(transformed);
  }
  return result;
}

async function map(arr,callback){
    const newarr=[];
    for(let i=0;i<arr.length;i++){
        let num=callback(arr[i]);
        newarr.push(num)
    }
    return newarr
}