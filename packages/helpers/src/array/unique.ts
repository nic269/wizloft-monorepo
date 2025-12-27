/**
 * Removes duplicate values from an array
 * @param array - Array to deduplicate
 * @returns Array with unique values
 * @example
 * unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
 */
export const unique = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};
