import chalk from "chalk";
import clipboardy from 'clipboardy';
import handle from "./handle.js";

async function createPassword() {
    const password = await handle();
    console.log(chalk.green(`Senha gerada: ${password}`));
    await clipboardy.write(password);
    console.log(chalk.gray("Senha copiada para a área de transferência."));

}

export default createPassword;