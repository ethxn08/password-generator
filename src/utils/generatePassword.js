function generatePassword(longitud, selectedOption) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const specialChars = ".,&%$!?¿";

  let randomPassword = "";

  if (selectedOption === "yes") {
    // Agrega al menos un carácter especial
    const randomSpecialChar = specialChars.charAt(
      Math.floor(Math.random() * specialChars.length)
    );
    randomPassword += randomSpecialChar;
    longitud--; // Reduce la longitud restante en 1
  }

  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomPassword += characters.charAt(randomIndex);
  }

  return randomPassword;
}

export default generatePassword;
