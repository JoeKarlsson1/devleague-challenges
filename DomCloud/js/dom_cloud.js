 window.onload = function () {

   var masterArr = [];
   var masterList = {};

   var mover = function(node) {
    //pushes all the node names into the temp array
    masterArr.push(node.nodeName)

    //pushes all the attribute names into the temp array, if there are more than one
    console.log(node.nodeName);
    for (var j = 0; j < node.attributes.length; j++) {
      masterArr.push(node.attributes[j].name);
    }

    //Recursion.
    //goes to each sibling if there are no children
    if (node.children.length > 0) {
      //Goes to the end of the node children
      for (var i = 0; i < node.children.length; i++) {
        mover(node.children[i]);
      }
    }else {
      //Base case of recursion function
      return;
    }

  };

   //Calls the above function on the page with the body tag
   mover(document.body);

   //mapping the array of the elements/attributes to an object and counting them
   masterArr.map(function(current) {

     var exists = masterList.hasOwnProperty(current);

     if (exists) {
       masterList[current] += 1;
     }else {
       masterList[current] = 1;
     }
   });

   //Loops through the mapped object and puts them into arrays to be sorted
   var listSorter = [];

   for (var q in masterList) {
     listSorter.push([q, masterList[q]])
   }

   //Sorts the inner arrays by highest count
   listSorter.sort(function(a,b) {return b[1] - a[1]});

   //creates a generic div to be placed directly after the body opening
   var node = document.createElement('div');
   node.className = 'most_common_list';

   //places the newly created div
   node = document.body.insertBefore(node, document.body.firstChild);

   //loops through the sorted array to add the top 20 highest counts to the newly created div
   for (var p = 0; p < 20; p++) {
     var divy = document.createElement('div');
     divy.innerHTML = listSorter[p][0];
     divy.style.fontSize = listSorter[p][1] * .5 + 'px';
     divy.id = 'top_20_list';
     node.appendChild(divy);
   }

 };

