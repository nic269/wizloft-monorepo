# @wizloft/helpers

A collection of generic helper utilities for use across Wizloft packages and applications.

## Installation

This is an internal workspace package. Add it to your package dependencies:

```json
{
  "dependencies": {
    "@wizloft/helpers": "workspace:*"
  }
}
```

## Project Structure

The package is organized by utility category for easy maintenance:

```
src/
├── string/          # String manipulation utilities
│   ├── capitalize.ts
│   ├── truncate.ts
│   ├── randomString.ts
│   └── index.ts
├── number/          # Number formatting utilities
│   ├── formatNumber.ts
│   ├── clamp.ts
│   └── index.ts
├── type/            # Type checking utilities
│   ├── isDefined.ts
│   ├── isEmpty.ts
│   └── index.ts
├── object/          # Object manipulation utilities
│   ├── pick.ts
│   ├── omit.ts
│   └── index.ts
├── array/           # Array manipulation utilities
│   ├── unique.ts
│   ├── chunk.ts
│   ├── groupBy.ts
│   └── index.ts
├── async/           # Async utilities
│   ├── sleep.ts
│   ├── debounce.ts
│   └── index.ts
└── index.ts         # Main entry point
```

## Usage

### Import from Main Package

```typescript
import { 
  capitalize, 
  formatNumber, 
  pick, 
  unique 
} from '@wizloft/helpers';

capitalize('hello'); // 'Hello'
formatNumber(1000000); // '1,000,000'
```

### Import from Specific Categories (Better Tree-Shaking)

```typescript
import { capitalize, truncate } from '@wizloft/helpers/string';
import { formatNumber, clamp } from '@wizloft/helpers/number';
import { pick, omit } from '@wizloft/helpers/object';
import { unique, chunk } from '@wizloft/helpers/array';
import { sleep, debounce } from '@wizloft/helpers/async';
```

## Available Functions

### String Utilities (`@wizloft/helpers/string`)
- **`capitalize(str)`** - Capitalizes the first letter
- **`truncate(str, maxLength, suffix?)`** - Truncates string with ellipsis
- **`randomString(length)`** - Generates random alphanumeric string

### Number Utilities (`@wizloft/helpers/number`)
- **`formatNumber(num, separator?)`** - Formats with thousand separators
- **`clamp(num, min, max)`** - Clamps number between min and max

### Type Checking (`@wizloft/helpers/type`)
- **`isDefined(value)`** - Checks if value is not null/undefined
- **`isEmpty(value)`** - Checks if value is empty

### Object Utilities (`@wizloft/helpers/object`)
- **`pick(obj, keys)`** - Creates object with only specified keys
- **`omit(obj, keys)`** - Creates object without specified keys

### Array Utilities (`@wizloft/helpers/array`)
- **`unique(array)`** - Removes duplicates
- **`chunk(array, size)`** - Splits array into chunks
- **`groupBy(array, key)`** - Groups array items by key

### Async Utilities (`@wizloft/helpers/async`)
- **`sleep(ms)`** - Delays execution
- **`debounce(func, wait)`** - Debounces function calls

## Examples

```typescript
import { capitalize, formatNumber, pick, unique } from '@wizloft/helpers';

// String helpers
capitalize('hello'); // 'Hello'
truncate('Hello World', 5); // 'Hello...'

// Number helpers
formatNumber(1000000); // '1,000,000'
clamp(15, 0, 10); // 10

// Type checking
isDefined(null); // false
isEmpty([]); // true

// Object helpers
pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }
omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }

// Array helpers
unique([1, 2, 2, 3]); // [1, 2, 3]
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// Async helpers
await sleep(1000); // Wait for 1 second
```

## Adding New Helpers

To add a new helper function:

1. Create a new file in the appropriate category folder (e.g., `src/string/myHelper.ts`)
2. Export your function with JSDoc documentation
3. Add the export to the category's `index.ts`
4. Add tests in `src/index.test.ts`
5. Rebuild: `pnpm --filter @wizloft/helpers build`

Example:

```typescript
// src/string/myHelper.ts
/**
 * Description of what this helper does
 * @param input - Description of parameter
 * @returns Description of return value
 * @example
 * myHelper('test'); // 'result'
 */
export const myHelper = (input: string): string => {
  // Implementation
  return input;
};
```

## Development

```bash
# Build the package
pnpm --filter @wizloft/helpers build

# Run in watch mode
pnpm --filter @wizloft/helpers dev

# Run tests
pnpm --filter @wizloft/helpers test

# Type checking
pnpm --filter @wizloft/helpers check-types

# Lint
pnpm --filter @wizloft/helpers lint
```

## License

MIT
