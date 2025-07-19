import permittedCharacters from "./utils/permitted.js";

async function handle() {
    const characters = await permittedCharacters();
    const length = parseInt(process.env.PASSWORD_LENGTH);
    
    if (isNaN(length) || length <= 0) {
        throw new Error("PASSWORD_LENGTH inválido ou ausente no arquivo .env");
    }

    if (characters.length === 0) {
        throw new Error("Nenhum tipo de caractere permitido está ativado no .env");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;
