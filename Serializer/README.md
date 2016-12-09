# Serializer exercise

### Rules.

- Do not use any method in the [JSON module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- Do not use any libraries other than the two npm libraries for testing.
- The serialized string should not contain any character other than:
    - `[0-9]` numbers
    - `[a-zA-Z]` upper and lowercased alphabet characters
    - `%` symbol
    - `$` symbol
    - `@` symbol
    - `&` symbol
    - `_` symbol
    - `-` symbol
    - `+` symbol
- Do not use these characters
  - `:`
  - `,`
  - `.`
  - `(` or `)`
  - `[` or `]`
  - `{` or `}`


## Implement Serializer.encode

`encode(obj)` takes any simple object and serializes it into a string, then returns that string.

## Implement Serializer.decode

`decode(serialized_string)` takes a serialized string, unserializes it back to it's original data structure and values, and returns that object.

## Tests

install all npm dependencies

run tests using `npm test`
