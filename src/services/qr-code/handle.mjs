import chalk from 'chalk';
import qrCodeTerminal from 'qrcode-terminal';

async function handle(err, input) {
  if (err) {
    console.error(chalk.red("Erro ao processar a solicitação:"), err);
    return;
  }

  const {link, type} = input;
  // console.log(input);

  if(type == 1) {
    // Gerar QR Code no Terminal
    qrCodeTerminal.generate(link, { small: true }, qrcode => {
      console.log(chalk.green("QR Code gerado com sucesso"));
      console.log(qrcode);
    });
  } else if(type == 2) {
    // Gerar QR Code em arquivo
    qrCodeTerminal.generate(link, { small: false }, qrcode => {
      console.log(chalk.green("QR Code gerado com sucesso"));
      console.log(`\n${qrcode}\n`);
    });
  } else {
    console.error("Tipo de geração inválido. Por favor, escolha 1 ou 2.");
  }
}

export default handle;