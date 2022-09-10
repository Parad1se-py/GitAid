import figlet from "figlet";

export async function greeting() {
    console.log(`Welcome to ${figlet.textSync(
        'GitAid', {
            font: 'Rectangles',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: '100',
            whitespaceBreak: true
        }
    )}`);
};