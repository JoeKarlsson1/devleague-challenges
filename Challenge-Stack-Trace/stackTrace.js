var addNote = null;
var showNotes = null;
var linkedList = linkedListGenerator();

addNote = function() {
  var note = document.getElementById('notepad').value;
  linkedList.add(note);
  document.getElementById('output').innerHTML = note + ' was added';
}

showNotes = function() {
  var str = '';
  var i = 0;
  var curNode = linkedList.get(i);
  while (curNode.next !== null) {
    str += ('<div>' + curNode.value + '</div>');
    i++;
    curNode = linkedList.get(i);
  }
  str += ('<div>' + curNode.value + '</div>');
  linkedList.reset();
  document.getElementById('notes').innerHTML = str;
}
