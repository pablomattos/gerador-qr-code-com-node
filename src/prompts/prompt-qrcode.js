import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE:"),
    required: true,
    pattern: /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
    message: chalk.red("Digite um link válido (ex: https://site.com)")
  }
];

export default promptQRCode;
