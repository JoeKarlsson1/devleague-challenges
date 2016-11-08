#Joe - A JavaScript Templating Language

Joe is an Express based logic-less templating engine similar to Mustache. Joe does dynamic template replacements. Joe can be used like the template of a form letter to either generate a large number of "static" (unchanging) web pages in advance, or to produce "dynamic" web pages on demand. Here is an example:

```
// register the template engine
app.set('view engine', 'joe');

app.get('/', function (req, res) {
  res.render('index', { greeting : 'Hello', name : 'Joe' });
})

// returns 'Hello Joe'
```



what are the advantage of using regex?

What are some problems associated with using JavaScript? - Broswer compatibility,

What boolean operators does JS support? &&, ||, !

How do we handle events on the client side? Event listener.

How do you convert a string to a number in JS? ParseInt

What does the date object use in JS? - Its the time stored in milliseconds since Jan , 1970

Shift and unshift? - What's the difference? Shift removes the first element, unshift adds the first

