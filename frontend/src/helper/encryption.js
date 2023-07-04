export const encrypt = async (data, key = "test") => {
  // Generate a new initialization vector
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  // Convert the key to an AES CryptoKey
  const aesKey = await window.crypto.subtle.importKey(
    "raw",
    key,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

  // Encrypt the data using AES-GCM
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    data
  );

  // Concatenate the initialization vector and ciphertext
  const encryptedData = new Uint8Array(iv.byteLength + ciphertext.byteLength);
  encryptedData.set(iv, 0);
  encryptedData.set(new Uint8Array(ciphertext), iv.byteLength);

  return encryptedData;
};
