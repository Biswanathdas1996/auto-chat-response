export const decrypt = async (encryptedData, key = "test") => {
  // Extract the initialization vector from the encrypted data
  const iv = encryptedData.slice(0, 12);

  // Convert the key to an AES CryptoKey
  const aesKey = await window.crypto.subtle.importKey(
    "raw",
    key,
    { name: "AES-GCM" },
    false,
    ["decrypt"]
  );

  // Decrypt the data using AES-GCM
  const ciphertext = encryptedData.slice(12);
  const plaintext = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    aesKey,
    ciphertext
  );

  return plaintext;
};
