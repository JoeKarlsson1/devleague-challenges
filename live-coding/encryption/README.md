# How To Safely Store A Password

Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt. Use bcrypt.

### Hashing Algorithm
The key in public-key encryption is based on a hash value. This is a value that is computed from a base input number using a hashing algorithm. Essentially, the hash value is a summa

### Input Number
10,667

###  Hashing Algorithm
Input# x 143

### Hash Value
1,525,381

You can see how hard it would be to determine that the value 1,525,381 came from the multiplication of 10,667 and 143. But if you knew that the multiplier was 143, then it would be very easy to calculate the value 10,667. Public-key encryption is actually much more complex than this example, but that's the basic idea.

### Why Not {MD5, SHA1, SHA256, SHA512, SHA-3, etc}?
These are all general purpose hash functions, designed to calculate a digest of huge amounts of data in as short a time as possible. This means that they are fantastic for ensuring the integrity of data and utterly rubbish for storing passwords.

### bcrypt Solves These Problems
How? Basically, it’s slow as hell. It uses a variant of the Blowfish encryption algorithm’s keying schedule, and introduces a work factor, which allows you to determine how expensive the hash function will be.

## What is a Salt?
In cryptography, a salt is random data that is used as an additional input to a one-way function that "hashes" a password or passphrase. Salts are closely related to the concept of nonce. The primary function of salts is to defend against dictionary attacks versus a list of password hashes and against pre-computed rainbow table attacks.


https://github.com/ncb000gt/node.bcrypt.js
https://en.wikipedia.org/wiki/Bcrypt
https://codahale.com/how-to-safely-store-a-password/