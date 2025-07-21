import chalk from "chalk";

const schemeQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link ou texto que deseja converter em QR Code:\n\t"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha o tipo de QR Code:\n\t1 - QR Code para terminal\n\t2 - QR Code para imagem\n\t"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Número inválido. Por favor, escolha 1 ou 2."),
    required: true,
  }
];

export default schemeQrCode;