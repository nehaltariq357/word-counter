import chalk from "chalk";
import inquirer from "inquirer";
const { wordCounter } = await inquirer.prompt([
    {
        name: "wordCounter",
        type: "input",
        message: "Enter your sentence to count the word",
    },
]);
const word = wordCounter.trim().split(" ");
console.log(word);
console.log(chalk.yellowBright(`your sentence word count is ${word.length}`));
