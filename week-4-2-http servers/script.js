const express=require('express');
const app=express()

// express gives you to access to two of the handlers req and res
// req object gives you all things related to request
// whenever you want to response back with something we use res object


// app.get('/', (req, res) => {
//   res.send('Your site is active')
// })
// app.post('/', (req, res) => {
//   res.json('your response is posted')
// })
// app.get('/asd', (req, res) => {
//   res.send('This  is your response for asd route')
// })

// app.listen(3000)

let todos=[];
//store the data in a file, foundation for database
//add user logic

app.post('/',(req,res)=>{
  //create random id for the todo
  //extract the todo title from the body
  todos.push({
    title,
    id
  })
})

app.delete('/',(req,res)=>{
 //extract the todo id
 //remove the todo from here
 
})

app.get('/',(req,res)=>{
  res.json({
    todos
  })
})
