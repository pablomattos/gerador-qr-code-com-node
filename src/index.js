import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

async function main() {
    prompt.start(); 

    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.error("Erro na escolha:", err);
            return;
        }        
        if (choose.select === "1") {
            await createQRCode();
        } else if (choose.select === "2") {
            await createPassword();
        } else {
            console.log("Opção inválida");
        }
    });
}

main();
