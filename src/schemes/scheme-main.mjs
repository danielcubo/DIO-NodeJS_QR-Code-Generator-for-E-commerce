import chalk from "chalk";

const schemeMain = {
  properties: {
    name: {
      pattern: /^[1-2]+$/,
      message: chalk.red("Opção inválida. Por favor, escolha 1 ou 2."),
      description: chalk.yellow("Escolha a ferramenta que deseja utilizar: \n\t1 - Gerar QR Code\n\t2 - Gerar Password\n\t"),
      required: true
    }
  }
}
export default schemeMain;