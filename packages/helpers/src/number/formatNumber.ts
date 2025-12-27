/**
 * Formats a number with thousand separators
 * @param num - Number to format
 * @param separator - Separator character (default: ',')
 * @returns Formatted number string
 * @example
 * formatNumber(1000); // '1,000'
 * formatNumber(1000000); // '1,000,000'
 */
export const formatNumber = (num: number, separator = ','): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
