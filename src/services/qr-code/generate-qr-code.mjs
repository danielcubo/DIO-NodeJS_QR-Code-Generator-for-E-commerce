import prompt from 'prompt';
import schemaQrCode from "../../schemes/scheme-qrcode.mjs";
import handle from "./handle.mjs";

async function generateQRCode() {
  prompt.get(schemaQrCode, handle);
  prompt.start();
}

export default generateQRCode;