// Imperitive greet method
const greet = (greeting, name) => {
  console.log(greeting + ", " + name);
};
greet("Hello", "Heidi"); //"Hello, Heidi"

// Curried Greet Method
const greetCurried = (greeting) => {
  return (name) => {
    console.log(greeting + ", " + name);
  };
};

const greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"

const greetDeeplyCurried = (greeting) => {
  return (separator) => {
    return (emphasis) => {
      return (name) => {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

const greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"