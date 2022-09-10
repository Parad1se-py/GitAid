export const questions = [ // List of all the questions to be asked
	{
		name: 'project_name',
		type: 'input',
		message: 'Name your project:'
	},
	{
		name: 'project_version',
		type: 'input',
		message: 'Project version:',
		default() {
			return '1.0.0'
		}
	},
	{
		name: 'project_description',
		type: 'input',
		message: 'Project description:'
	},
	{
		name: 'author_name',
		type: 'input',
		message: 'Project author:'
	}
];