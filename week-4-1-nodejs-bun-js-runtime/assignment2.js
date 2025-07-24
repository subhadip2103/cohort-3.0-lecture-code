const fs=require('fs');
const { Command } = require('commander');
const program = new Command();
const filepath=todos.json;

function readtodo(){
  if(!fs.existsSync(filepath)){
    fs.writeFileSync(filepath,[])
  }
}

program
  .name('CLI-Todolist')
  .description('CLI to replicate a todo list application')
  .version('0.1.0');

program.command('ADD')
  .description('Adds a task in your todo list')
  .argument('<string>','<date>','takes a string as a task')
  .action()
program.command('DELETE')
  .description('Deltes a task from your todo list')
  .argument('<id>','takes a number as id to delete a task')
  .action()
program.command('MARK')
  .description('Marks your task as done')
  .argument('<id>','takes a id to mark the element with that id to be marked as done')
  .action()
program.command('VIEWDONE')
  .description('Adds a task in your todo list')
  .action()

program.parse();