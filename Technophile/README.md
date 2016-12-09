# Technophile

## ECMAScript 5 Exercise on Multiple Inheritence

[Multiple Inheritence in ECMAScript 5](https://slides.com/jasonsewell/multiple-inheritance)

All module files will be saved to `lib/`.  
Each `module` will `export` a single class.

### Install Dependencies

```
npm install
```

### Run Tests

```
mocha -w
```

## Create Classes

### Phone

The constructor should accept a single argument `phoneNumber`, and set a public variable `phoneNumber` to the value of that constructor argument.

The class should define a `callPhone` method that accepts a single argument `phoneNumber` and return a status message. status message should be in the format: '`this phone number` calls `other phone number`'  
example: `5555555 calls 4444444`

### Tablet

The class should define a `touch` method that accepts two arguments `x` and `y` and return a literal object with keys `x` and `y` with values set to the method's arguments. 

### Game Console

The constructor should accept a single argument `systemName`, and set a public variable `systemName` to the value of that constructor argument.

The class should have a `play` method that accepts a single argument `game` and return a status message.  
`game` is an object with a single key `title` with a value that's a string.  
status message should be in the format: '`this system name` plays `the game object's title`'  
example: `Jupiter Station plays Shynobie`

### Web Browser

The class should have an `open` method that accepts a single argument `url` and return a status message.  
status message should be in the format: 'Browsing to `url`'  
example: `Browsing to http://reddit.com/r/aww`

### Watch

The constructor should set a public variable `bodyPart` to no value.

The class should have an `wear` method that accepts a single argument `bodyPart` and assign the value of that argument to `this.bodyPart`

### Nintendo DS

This class inherits from the Game Console class and the Web Browser class.

The constructor should invoke the Game Console class constructor with the hard coded constructor argument `'Nintendo DS'`

### Smart Watch

This class inherits from the Watch class and the Tablet class.

The constructor should invoke the Watch class constructor.

### Smart Phone

This class inherits from the Phone class, Tablet class, Game Console class, and the Web Browser class.

The constructor should accept a single argument `phoneNumber` and invoke the Phone class constructor passing in `phoneNumber`, and invoke the Game Console class constructor with the hard coded constructor argument `'Smart Phone'`