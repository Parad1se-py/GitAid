import { appendFile } from "fs";
import { READMEmdTemplate } from "../data/templates.js";


export async function createFiles(info) {
    const READMEmdContent = READMEmdTemplate(info[0], info[1], info[2], info[3]);
    appendFile('README.md', await READMEmdContent, function (err) {
        if ( err ) throw err;
        console.log("Saved README.md!")
    });
};