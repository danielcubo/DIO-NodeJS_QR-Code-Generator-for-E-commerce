async function allowedCharacters() {
  const allowedChars = [];
  if (process.env.UPPERCASE_LETTERS === 'true') allowedChars.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (process.env.LOWERCASE_LETTERS === 'true') allowedChars.push(...'abcdefghijklmnopqrstuvwxyz');
  if (process.env.NUMBERS === 'true') allowedChars.push(...'0123456789');
  if (process.env.SPECIAL_CHARACTERS === 'true') allowedChars.push(...'!@#$%^&*()_+[]{}|;:,.<>?');

  return allowedChars;
}

export default allowedCharacters;