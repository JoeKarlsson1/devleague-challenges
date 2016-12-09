Challenge 7
===========

10,001st prime

    From Project Euler Problem 7


By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10,001st prime number?


Write a class in **challenge_7.js** named "**PrimeFinder**" that accepts a single argument **n**,  
where **n** is the **nth** prime number to find.  
Write an instance method named "**getPrimeNumber**" that returns the **nth** prime number.

There are **0** tests, write one test to show the 10,001st prime number.  
Write a test case that checks that the object instance method "**getPrimeNumber**" exists and is a member of the object instance.  
Write another test case that checks that "**getPrimeNumber**" is not a member of the "class" called "**PrimeFinder**".


(you'll need jasmine-node)
    npm install jasmine-node -g

run automated tests by running
    jasmine-node --autotest .