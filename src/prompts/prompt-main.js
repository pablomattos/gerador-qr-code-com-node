import chalk from "chalk";

const mainPrompt = [{
    name: "select",
    description: chalk.yellow.bold("\nEscolha a ferramenta: \n(1) QRCODE \n(2) PASSWORD\n") , 
    pattern:  /^[1-2]$/,
    message: chalk.red.italic( "Escolha apenas  entre 1 ou 2." ),
    required: true,
},];

export default mainPrompt;