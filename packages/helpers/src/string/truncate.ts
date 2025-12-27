/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - String to truncate
 * @param maxLength - Maximum length of the string
 * @param suffix - Suffix to add when truncated (default: '...')
 * @returns Truncated string
 * @example
 * truncate('Hello World', 5); // 'Hello...'
 * truncate('Hello', 10); // 'Hello'
 */
export const truncate = (
  str: string,
  maxLength: number,
  suffix = '...',
): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + suffix;
};
