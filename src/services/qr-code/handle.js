import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.error(chalk.red("Erro ao gerar QR Code:"), err.message || err);
        return;
    }

    qr.generate(result.link, { small: true }, (qrcode) => {
        console.log(chalk.green("\nQR Code gerado com sucesso:\n"));
        console.log(qrcode);
        console.log(chalk.cyan("\nLink: ") + chalk.underline.blue(result.link));
    });
}

export default handle;
