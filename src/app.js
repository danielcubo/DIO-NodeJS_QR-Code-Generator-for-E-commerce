import prompt from 'prompt';
import schemaMain from './schemes/scheme-main.mjs';
import generateQRCode from './services/qr-code/generate-qr-code.mjs';
import generatePassword from './services/password/generate-password.mjs';

async function main() {
  prompt.start();
  prompt.get(schemaMain, async (err, input) => {
    const { name } = input;

    if (err) console.error("Erro ao processar a solicitação:", err);
    // console.log(input);
    // const result = input.name == 1 ? await generateQRCode() : 'Escolheu a ferramenta para gerar Password';
    const result = name == 1 ? await generateQRCode() : await generatePassword();
    return result;
  });
}

main();