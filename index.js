#!/usr/bin/env node

import chalk from "chalk";
// import gradient from "gradient-string";
// import chalkAnimation from "chalk-animation";
// import { createSpinner } from "nanospinner";
import { askInfo, yesOrNo } from "./utils/interaction.js";
import { greeting } from "./utils/welcome.js";
import { createFiles } from "./utils/createFiles.js";


await greeting(); // Welcome screen

const info = await askInfo(); // Ask the questions to the user

const userWantsToContinue = await yesOrNo(
    {
        name: 'yes_or_no',
        type: 'input',
        message: chalk.bgRed('Do you want to proceed with this information? y/n:')
    },
    info
); // Asks user if they want to proceed with the given info

if ( userWantsToContinue == true ) {
    createFiles(info);
} else {
    console.clear();
}
