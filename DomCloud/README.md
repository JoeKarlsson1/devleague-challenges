DomCloud
========

Build a program to recursively traverse the DOM and create a word cloud of most common attributes and elements to create a tag cloud.

**index.html** contains sample html, you will be parsing this as your sample dom tree, and this is your main JavaScript launcher. Make sure to commit early, commit often.  

## Part 1
  
- Plan your execution on white board before forking and cloning.
- Write a program that will recursively traverse the DOM and create a word list of the 20 most common attributes and elements
- Print the results in #dom_cloud_container
- Each word should be a different size based on it’s popularity

**HINT:** You will need to use recursion to solve this challenge!

## Part 2
  
- Create a bookmarklet that will parse the currently opened page, and generate a tag cloud on a new layer in the current window. You will need to research on your own HOW to create a bookmarklet.

**REFERENCE:** 

http://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154

## Part 3
**Stretch goal:** See if you can add tests to your application that takes in a defined HTML document that you can define the desired results for and verify that your application passes tests for:

* Total Counts
* Top 20 Expected Results
* Total rendered elements showing word list are the count and height/width you expect after being rendered on page

**REFERENCE:** 

http://www.codechewing.com/library/javascript-dom-browser-tests-mocha-chai/

## File structure
  - index.html
  - js/dom_cloud.js
  - css/styles.css
