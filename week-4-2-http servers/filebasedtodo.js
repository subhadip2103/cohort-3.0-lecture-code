const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

// POST - Add a new task
app.post("/", (req, res) => {
  let newtask = req.body;

  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("ERROR READING FILE");
    }

    let todos = JSON.parse(data);

    // Optional: Prevent duplicate IDs
    let exists = todos.some(todo => todo.id === newtask.id);
    if (exists) {
      return res.status(409).send("Todo with this ID already exists.");
    }

    todos.push(newtask);

    fs.writeFile("todos.json", JSON.stringify(todos, null, 2), "utf-8", (err) => {
      if (err) {
        return res.status(500).send("ERROR WRITING FILE");
      }

      res.status(201).send({ message: "Task added successfully", newtask });
    });
  });
});

// GET - Fetch all tasks
app.get("/", (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("ERROR READING FILE");
    }

    let tasks = JSON.parse(data);
    res.status(200).send({ tasks });
  });
});

// PATCH - Update a task
app.patch("/", (req, res) => {
  let { updateid, updatevalue } = req.body;

  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("ERROR READING FILE.");
    }

    let todotasks = JSON.parse(data);
    let index = todotasks.findIndex(todo => todo.id === updateid);

    if (index !== -1) {
      todotasks[index].completed = updatevalue;

      fs.writeFile("todos.json", JSON.stringify(todotasks, null, 2), err => {
        if (err) {
          return res.status(500).send("ERROR WRITING FILE");
        }
        res.status(200).send("FILE UPDATED SUCCESSFULLY");
      });
    } else {
      res.status(404).send(`Todo with id ${updateid} not found`);
    }
  });
});

// DELETE - Delete a task
app.delete("/", (req, res) => {
  let { id } = req.body;

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("ERROR READING FILE");
    }

    let todos = JSON.parse(data);
    let index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);

      fs.writeFile("todos.json", JSON.stringify(todos, null, 2), err => {
        if (err) {
          return res.status(500).send("ERROR WRITING FILE");
        } else {
          res.status(200).send("FILE UPDATED SUCCESSFULLY");
        }
      });
    } else {
      res.status(404).send(`Todo with the id ${id} not found`);
    }
  });
});

// Server listen
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
