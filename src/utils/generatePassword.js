function generatePassword(longitud, selectedOption) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const withSpecialChar =
    ".,&%$!?¿ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let randomPassword = "";

  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(
      Math.random() *
        (selectedOption === "no" ? characters.length : withSpecialChar.length)
    );
    randomPassword +=
      selectedOption === "no"
        ? characters.charAt(randomIndex)
        : withSpecialChar.charAt(randomIndex);
  }

  return randomPassword;
}

export default generatePassword;
