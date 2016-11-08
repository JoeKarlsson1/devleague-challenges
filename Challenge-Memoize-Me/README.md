##Memoize Me
We are going to be building an in-memory cache to improve performance and extend the `getElementById()` and `querySelector()` functions of the DOM. Querying the DOM for elements can be an inefficient operation and if we are finding elements in the DOM repeatedly we would like to improve performance but we also don't want to clutter our codebase with many variables to hold references to the various elements we will use and to keep things a bit more dynamic.

##Your Challenge
Write a __module__ that anyone can add to their project and call your module's functions instead of the native DOM functions.

1. Use good naming conventions for the module as well as the methods you're exposing. This is subjective to you but put yourself in someone elses shoes of what would make sense to them.
2. Use __memoization__ to __cache__ elements if they have not been retrieved before from the DOM and return the element just as the above functions would do normally by calling them directly.
3. If the element has been retrieved before, then it should return the referenced element from your cache instead of querying the DOM directly again.
4. Create a repo for your module and push to your GitHub account and please post your link in the class chatroom so that we can review.
5. If you finish early, write a blog post on memoization and the benefits your module provides. Do research if you need to gather more information on the strategy.