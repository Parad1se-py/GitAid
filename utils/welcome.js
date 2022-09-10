import figlet from "figlet";
import gradient from "gradient-string";

export async function greeting() {
    // Function to greet user
    console.log(`Welcome to ${gradient.pastel.multiline(
        figlet.textSync(
            'GitAid', {
                font: 'Rectangles',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: '100',
                whitespaceBreak: true
            }
        )
    )}`)
};