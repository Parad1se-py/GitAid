import inquirer from "inquirer";
import { questions } from "./questions.js";


async function askInfo() {
	// Returns a list that holds the user responses.
	const answers = await inquirer.prompt(questions);

	return [answers.project_name, answers.project_version, answers.project_description];

};

async function yesOrNo(content, information) {
	// Function to deal with user response of yes/no
	const replied = false;
	console.log(`
	Project Name: ${information[0]}
	Project Version: ${information[1]}
	Project Description: ${information[2]}
	Project Author: ${information[3]}
	`)

	while ( replied == false ) {
		const answer = await inquirer.prompt(content);

		if ( answer.yes_or_no.toLowerCase() == 'y' || answer.yes_or_no.toLowerCase() == 'yes' ) {
			// TODO: start loading
			return true;
		} else if ( answer.yes_or_no.toLowerCase() == 'n' || answer.yes_or_no.toLowerCase() == 'no' ) {
			console.log("Quitting process.");
			return false;
		} else {
			console.log("Not a valid option. Retry:");
			continue;
		}
	}
}

export { askInfo as askInfo,
		 yesOrNo as yesOrNo
};