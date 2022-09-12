export async function READMEmdTemplate(name, version, description, author) {
    // Function to return the README.md template
    return `# ${name} | \`${version}\`\n\n## ${description}\n\n### By: ${author}`
}

export async function gitignoreTemplate() {
    // Function to return the .gitignore template
    return `node_modules`
}