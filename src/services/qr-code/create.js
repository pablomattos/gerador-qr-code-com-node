import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";
import chalk from "chalk";

async function createQRCode() {
    try {
        prompt.start();

        const { link } = await prompt.get(promptQRCode);
        await handle(null, { link });

    } catch (error) {
        console.error(chalk.red("Erro ao gerar o QR Code:"), error.message);
    }
}
export default createQRCode;
