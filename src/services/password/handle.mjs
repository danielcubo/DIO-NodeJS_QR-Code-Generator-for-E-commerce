import chalk from "chalk";
import allowedCharacters from "./utils/allowed-characters.mjs";

async function handle(err) {
  let characters = [];
  let password = "";

  const passwordLength = parseInt(process.env.PASSWORD_LENGTH);

  // if(process.env.UPPERCASE_LETTERS  === 'true') characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  // if(process.env.LOWERCASE_LETTERS  === 'true') characters.push(...'abcdefghijklmnopqrstuvwxyz');
  // if(process.env.NUMBERS            === 'true') characters.push(...'0123456789');
  // if(process.env.SPECIAL_CHARACTERS === 'true') characters.push(...'!@#$%^&*()_+[]{}|;:,.<>?');
  characters = await allowedCharacters();

  // console.log(characters);
  // console.log(characters.length);

  if(characters.length === 0) {
    console.error(chalk.red("Nenhum tipo de caractere selecionado para a senha."));
    return;
  }

  if (err) {
    console.error(chalk.red("Erro ao processar a solicitação:"), err);
    return;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // console.log(chalk.blue(`Caractere aleatório selecionado: ${characters[randomIndex]}`));
    password += characters[randomIndex];
  }

  return password;
}
  
export default handle;