# @iselinmagnusen/password-utilities


> A small JavaScript library for generating strong passwords and checking whether a password is strong.


## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
  - [Examples](#examples)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)


## Installation


Install via npm:



```bash
npm install @iselinmagnusen/password-utilities
```


Install via yarn:


```bash
yarn add @iselinmagnusen/password-utilities
```


## Usage


Basic usage:


```js
const {
  generateStrongPassword,
  isStrongPassword
} = require('@iselinmagnusen/password-utilities');


const password = generateStrongPassword(12);


console.log(password); // e.g., "pC%mD8TpCKn2"
console.log(isStrongPassword(password)); // true
```
### Examples


Generate a strong password:


```js
const { generateStrongPassword } = require('@iselinmagnusen/password-utilities');


const password = generateStrongPassword(12);


console.log(password); // e.g., "pC%mD8TpCKn2"
```


Check whether a password is strong:


```js
const { isStrongPassword } = require('@iselinmagnusen/password-utilities');


console.log(isStrongPassword("Hello World")); // false
console.log(isStrongPassword("pC%mD8TpCKn2")); // true
```


Generate and validate in one flow:


```js
const {
  generateStrongPassword,
  isStrongPassword
} = require('@iselinmagnusen/password-utilities');


const newPassword = generateStrongPassword(16);


if (isStrongPassword(newPassword)) {
  console.log("Generated password is strong:", newPassword);
}
```


## Contribution


Contributions are welcome. Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details on how to report issues, suggest features, and submit pull requests.


## Security


Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policy and how to report vulnerabilities.


This library is designed to generate passwords that satisfy the library’s strength rules:
- at least 8 characters long
- at least one uppercase letter
- at least one lowercase letter
- at least one digit
- at least one special character from `!@#$%^&*()_+`


## License


This project is licensed under the [MIT License](./LICENSE.md).


