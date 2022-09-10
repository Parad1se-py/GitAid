import { appendFile } from "fs";
import { createSpinner } from "nanospinner";
import { READMEmdTemplate } from "../data/templates.js";


export async function createFiles(info) {
    // create the files
    const ReadmeMD_Spinner = createSpinner('Creating README.md').start();
    const READMEmdContent = READMEmdTemplate(info[0], info[1], info[2], info[3]);
    appendFile('README.md', await READMEmdContent, function (err) {
        if ( err ) {
            ReadmeMD_Spinner.error({ text: 'Couldn\'t create README.md', color: 'red' });
            throw err
        };
        ReadmeMD_Spinner.success({ text: 'Created README.md', color: 'green' });
    });
};