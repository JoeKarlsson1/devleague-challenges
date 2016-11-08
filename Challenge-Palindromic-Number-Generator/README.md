# Palindromic Number Generator
When given a positive number value, return a palindromic number and how many steps it took to reach that number.

## Specs
Create a function named `palindromeNumberGenerator` which takes a Number value. Check if the number is a Palindromic Number, if it's not then add together the value and the value-reversed and check if the sum is a palindromic number, repeat until you reach a palindromic number value. Each time you sum up the values to get a new number to check, increase the step count by 1.

Input will always be a positive integer.

## Example #1
Lets, start with `palindromeNumberGenerator(87)`:
- `87` is not a palindromic number, so we will add `87 + 78` (78 is 87 reversed)
  - increase our steps by 1
- `165` is not a palindromic number, so we will add `165 + 651`
  - increase our steps by 1
- `726` is not a palindromic number, so we will add `726 + 627`
  - increase our steps by 1
- `1353` is not a palindromic number, so we will add `1353 + 3531`
  - increase our steps by 1
- `4884` is a palindromic number. Your function will return an object `{ value: 4884, steps: 4 }`

## Example #2
`palindromeNumberGenerator(1331)`:
- `1331` is a palindromic number. Your function will return an object `{ value: 1331, steps: 0 }`

## Additional Requirements
- Create a Git Repository for this challenge
    - commit often and have your commit messages be descriptive
- Write tests for your function using the Mocha and Chai Libraries.
  - Provide test for all cases. Handle unexpected inputs, invalid arguments, etc.
