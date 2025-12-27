/**
 * Generates a random string of specified length
 * @param length - Length of the random string
 * @returns Random string
 * @example
 * randomString(10); // 'a3f9d2k1m5'
 */
export const randomString = (length: number): string => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
