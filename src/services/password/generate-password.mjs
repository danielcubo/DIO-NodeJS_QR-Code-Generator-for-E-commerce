import chalk from "chalk";
import handle from "./handle.mjs";

async function generatePassword() {
  const password = await handle();
  console.log(chalk.green("Senha gerada com sucesso\n"+chalk.gray("\t: ")), password);
}

export default generatePassword;