import CryptoJS from 'crypto-js';

export function decode(token, secret) {
  if (secret?.length > 0) {
    const bytes = CryptoJS.AES.decrypt(token, secret);
    const decoded = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decoded;
  }

  return null;
}
