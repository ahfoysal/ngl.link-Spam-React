// Encode Password Function (Not secure for production)
export function encodePassword(password) {
  const encodedPassword = Array.from(password)
    .map((char) => char.charCodeAt(0))
    .join("-");
  return encodedPassword;
}

// Decode Password Function (Not secure for production)
export function decodePassword(pass) {
  const decodedPassword = pass
    .split("-")
    .map((charCode) => String.fromCharCode(parseInt(charCode)))
    .join("");
  return decodedPassword;
}
