# Currying
Currying, or partial application, is one of the functional techniques that can sound confusing to people familiar with more traditional ways of writing JavaScript. But when applied properly, it can actually make your functional JavaScript more readable.

## More Readable And More Flexible
One of the advantages touted for functional JavaScript is shorter, tighter code that gets right to the point in the fewest lines possible, and with less repetition. Sometimes this can come at the expense of readability; until you’re familiar with the way the functional programming works, code written in this way can be harder to read and understand.

If you’ve come across the term currying before, but never knew what it meant, you can be forgiven for thinking of it as some exotic, spicy technique that you didn’t need to bother about. But currying is actually a very simple concept, and it addresses some familiar problems when dealing with function arguments, while opening up a range of flexible options for the developer.

## What Is Currying?
Briefly, currying is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. It really is that simple.

Currying is elemental in languages such as Haskell and Scala, which are built around functional concepts. JavaScript has functional capabilities, but currying isn’t built in by default (at least not in current versions of the language). But we already know some functional tricks, and we can make currying work for us in JavaScript, too.