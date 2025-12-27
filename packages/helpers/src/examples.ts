/**
 * Example usage of @wizloft/helpers package
 * 
 * This file demonstrates how to use the helpers package in your apps or other packages.
 * You can import from the main package or from specific categories.
 */

// Import from main package (recommended for most cases)
import {
  capitalize,
  chunk,
  clamp,
  debounce,
  formatNumber,
  groupBy,
  isDefined,
  isEmpty,
  omit,
  pick,
  randomString,
  sleep,
  truncate,
  unique,
} from './index';

// Or import from specific categories for better tree-shaking
// import { capitalize, truncate } from './string';
// import { formatNumber, clamp } from './number';
// import { isDefined, isEmpty } from './type';
// import { pick, omit } from './object';
// import { unique, chunk, groupBy } from './array';
// import { sleep, debounce } from './async';

// String manipulation examples
console.log('=== String Helpers ===');
console.log(capitalize('hello world')); // 'Hello world'
console.log(truncate('This is a very long text', 10)); // 'This is a ...'
console.log(randomString(8)); // Random 8-character string

// Number formatting examples
console.log('\n=== Number Helpers ===');
console.log(formatNumber(1234567)); // '1,234,567'
console.log(clamp(150, 0, 100)); // 100
console.log(clamp(-10, 0, 100)); // 0

// Type checking examples
console.log('\n=== Type Checking ===');
console.log(isDefined(null)); // false
console.log(isDefined(0)); // true
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2, 3])); // false

// Object manipulation examples
console.log('\n=== Object Helpers ===');
const user = { id: 1, name: 'John', email: 'john@example.com', password: 'secret' };
console.log(pick(user, ['id', 'name'])); // { id: 1, name: 'John' }
console.log(omit(user, ['password'])); // { id: 1, name: 'John', email: 'john@example.com' }

// Array manipulation examples
console.log('\n=== Array Helpers ===');
console.log(unique([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3], [4, 5, 6], [7]]

const items = [
  { category: 'fruit', name: 'apple' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'broccoli' },
];
console.log(groupBy(items, 'category'));
// {
//   fruit: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }],
//   vegetable: [{ category: 'vegetable', name: 'carrot' }, { category: 'vegetable', name: 'broccoli' }]
// }

// Async examples
console.log('\n=== Async Helpers ===');
(async () => {
  console.log('Starting sleep...');
  await sleep(1000);
  console.log('Finished sleeping for 1 second!');
})();

// Debounce example
const debouncedLog = debounce((message: string) => {
  console.log('Debounced:', message);
}, 500);

// These will be debounced - only the last one will execute
debouncedLog('First');
debouncedLog('Second');
debouncedLog('Third'); // Only this will log after 500ms
