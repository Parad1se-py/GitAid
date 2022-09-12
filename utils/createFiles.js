import { appendFile, createFile } from "fs";
import { createSpinner } from "nanospinner";
import { READMEmdTemplate, gitignoreTemplate } from "../data/templates.js";


export async function createFiles(info) {
    // create the files
    
    // creating README.md
    const ReadmeMD_Spinner = createSpinner('Creating README.md').start();
    const READMEmdContent = READMEmdTemplate(info[0], info[1], info[2], info[3]);
    appendFile('README.md', await READMEmdContent, function (err) {
        if ( err ) {
            ReadmeMD_Spinner.error({ text: 'Couldn\'t create README.md', color: 'red' });
            throw err
        };
        ReadmeMD_Spinner.success({ text: 'Created README.md', color: 'green' });
    });

    // Creating .gitignore
    const gitignore_Spinner = createSpinner('Creating .gitignore').start();
    const gitignoreContent = gitignoreTemplate();
    appendFile('.gitignore', await gitignoreContent, function (err) {
        if ( err ) {
            gitignore_Spinner.error({ text: 'Couldn\'t create .gitignore', color: 'red' });
        }
        gitignore_Spinner.success({ text: 'Created .gitignore', color: 'green' });
    });
};