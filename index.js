#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let bmi_calculator = await inquirer.prompt([
    //first number input
    {
        type: "number",
        name: "num1",
        message: "Enter your first number"
    },
    //select operator
    {
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Reminder"],
        name: "operator",
        message: "select your operator for calculation"
    },
    //second number input
    {
        type: "number",
        name: "num2",
        message: "Enter your second number"
    }
]);
if (bmi_calculator.operator === "Addition") {
    console.log(chalk.bgBlueBright(bmi_calculator.num1 + bmi_calculator.num2));
}
else if (bmi_calculator.operator === "Subtraction") {
    console.log(chalk.bgBlueBright(bmi_calculator.num1 - bmi_calculator.num2));
}
else if (bmi_calculator.operator === "Multiplication") {
    console.log(chalk.bgBlueBright(bmi_calculator.num1 * bmi_calculator.num2));
}
else if (bmi_calculator.operator === "Division") {
    console.log(chalk.bgBlueBright(bmi_calculator.num1 / bmi_calculator.num2));
}
else if (bmi_calculator.operator === "Reminder") {
    console.log(chalk.bgBlueBright(bmi_calculator.num1 % bmi_calculator.num2));
}
else {
    console.log("invalid operator");
}
