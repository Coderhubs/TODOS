#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in you Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more? ",
            default: "false"
        },
        {
            name: "addschedule",
            type: "list",
            message: "Want to read books? ",
            choices: ["philip Kotler", "Success story"],
            default: "philip kotler"
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
;
