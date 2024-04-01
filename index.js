#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bold.blue.underline("\n\t\tWellocome To ToDo List !!!"));
while (conditions) {
    let addTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter Your Task"
        }]);
    todoList.push(addTask.task);
    console.log(chalk.bold.green(addTask.task) + " Task Added In List Successfully");
    let addmoreTask = await inquirer.prompt([{
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add More Task ?",
            default: "false"
        }]);
    conditions = addmoreTask.addmore;
}
console.log("Your Todo List Is Updated :" + chalk.bold.red(todoList));
