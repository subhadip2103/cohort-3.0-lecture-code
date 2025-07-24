const fs = require('fs');
const express = require("express");
const { json } = require('stream/consumers');
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    let name = req.query.name;
    let newtask = req.body;

    if (!name || !newtask.title) {
        res.status(400).send("Missing 'name' or 'title'")
    }

    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(404).send('ERROR READING FILE')
        }

        let users = JSON.parse(data);

        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (users[i].name === name) {
                users[i].todos.push(newtask)
                found = true;
                break
            }
        }

        if (!found) {
            users.push({
                name: name,
                todos: [newtask]
            })
        }

        fs.writeFile("db.json", JSON.stringify(users, null, 2), err => {
            if (err) {
                return res.status(404).send('ERROR WRITING FILE')
            }
            else {
                res.status(200).json({ msg: "file updated succesfully", task: newtask })
            }
        })
    })

})


app.get("/", (req, res) => {
    let name = req.query.name;

    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(404).send('ERROR READING FILE')
        }
        let users = JSON.parse(data);
        let user = users.find(user => user.name === name);

        if (user === undefined) {
            return res.status(404).send("User not found")
        }
        let { todos } = user;

        res.status(200).json({ todos: todos })

    })
})

app.patch("/", (req, res) => {
    let name = req.query.name;
    let task = req.body;
    if (!name) {
        res.status(404).send("Name is missing")
    }

    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(404).send('FILE NOT FOUND')
        }
        let users = JSON.parse(data);
        let user = users.find(user => user.name === name);
        let { todos } = user;
        if (user === undefined) {
            return res.status(404).send('USER NOT FOUND')
        }
        todos.forEach(todo => {
            if (todo.title === task) {
                todo.completed = true;
                res.status(200).send('TASK UPDATED SUCCESSFULLY')
            }
            else {
                return res.status(500).send('TASK NOT FOUND')
            }
        })

        fs.writeFile("db.json", JSON.stringify(users, null, 2), "utf-8", (err) => {
            if (err) {
                return res.status(500).send('Error writing file')
            }
            else {
                res.status(200).json({ msg: "file has been updated succesfully", todos: todos })
            }
        })

    })
})

app.delete("/", (req, res) => {
    let name = req.query.name;
    let task=req.body.title;
    if (!name) {
        res.status(404).send("Name is missing")
    }
    fs.readFile("db.json","utf-8",(err,data)=>{
        if (err) {
            res.status(404).send('FILE NOT FOUND')
        }
        let users = JSON.parse(data);
        let user = users.find(user => user.name === name);
        if(user===undefined){
            return res.status(404).send("User not found")
        }
        let { todos } = user;
        let found=false;
        let index;
        for(let i=0;i<todos.length;i++){
            if(todos[i].title===task){
                index=i;
                found=true;
                break;
            }
        }
        if(!found){
            return res.status(404).send('Task not found')
        }
        
        todos.splice(index,1)

        fs.writeFile("db.json",JSON.stringify(users,null,2),"utf-8",(err)=>{
            if(err){
                return res.status(404).send("ERROR WRITING FILE")
            }
            res.status(200).json({Msg:"Task deleted sucessfully",todos:todos})
        })
    })

})

app.listen(3000)