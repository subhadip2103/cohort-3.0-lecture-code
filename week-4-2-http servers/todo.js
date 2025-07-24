const express = require('express');
const app = express()

let todos = [];

app.use(express.json());

app.post('/', (req, res) => {
    let todo = req.body;
    todos.push(todo);
    res.status(201).send({ message: "Todo added successfully", todo });

})
app.get('/', (req, res) => {
    res.send({
        todos
    })
})
app.delete('/', (req, res) => {
    let { id } = req.body;
    let index = todos.findIndex(todo => todo.id === id)
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).send(`Your task with id:${id} is deleted sucessfully`)
    }
    else {
        res.status(400).send(`Task not found with the id${id}`)
    }
})
app.patch('/', (req, res) => {
    let {updateid,updatevalue}=req.body;
    let task = todos.find(todo=>todo.id===updateid)
    if(task !==undefined){
        task.completed=updatevalue;
        res.status(200).send('your task is updated succesfully')
    }
    else{
        res.status(400).send(`No task found with this id:${updateid}`)
    }

})

app.listen(3000);


