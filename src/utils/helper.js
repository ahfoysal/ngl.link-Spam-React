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

export function extractUserName(input) {
  // Check if the input starts with 'https://ngl.link/'
  if (input.startsWith("https://ngl.link/")) {
    // Remove query parameters and fragments, if any
    const url = new URL(input);
    const username = url.pathname.replace(/^\//, "").split("?")[0]; // Extract the path and remove leading '/'
    return username;
  }

  // If it doesn't start with 'https://ngl.link/', assume it's already a username or ID
  return input;
}
