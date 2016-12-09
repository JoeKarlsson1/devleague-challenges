var feed = document.getElementById('feed');

window.onload = function() {
  loadBoard('my_boards');
};

function loadBoard(boardName) {
  clearFeed();
  $.getJSON(
    '/api/' + boardName + '.json',
    function load(data) {
      var posts = data.data.children;
      makeAllRows(posts)
    }
  )
}

function clearFeed() {
  while (feed.firstChild) {
    feed.removeChild(feed.firstChild);
  }
}

function makeAllRows(posts) {
  for (var i = 0; i < posts.length; i++) {
    if (i % 2 === 0) {
      makeRow(posts, i)
    }
  }
}

function makeRow(posts, i) {
  var row = document.createElement('div');
  row.className = 'row';
  var de = document.createAttribute('data-equalizer');
  row.setAttributeNode(de);
  feed.appendChild(row);

  var post1 = makePost(posts[i], i);
  row.appendChild(post1);

  var post2 = makePost(posts[i + 1], i);
  row.appendChild(post2);
}

function makePost(post, i) {
  var post1 = document.createElement('div');
  post1.className = 'post small-12 small-centered medium-6 medium-uncentered large-6 columns';
  post1.id = 'post' + i;

  var panel = document.createElement('div');
  panel.className = 'panel';
  var dew = document.createAttribute('data-equalizer-watch');
  panel.setAttributeNode(dew);
  post1.appendChild(panel);

  var image = document.createElement('img');
  image.className = 'post-image';
  image.src = post.data.url;
  panel.appendChild(image);

  var title = document.createElement('h2');
  title.innerHTML = post.data.title;
  panel.appendChild(title);

  var desc = document.createElement('p');
  var isoDate = new Date(post.data.created).toISOString();
  desc.style.color = 'grey';
  desc.innerHTML = '</br> by ' + post.data.author + ' &middot;' + isoDate + ' &middot; ' + post.data.score  ;
  panel.appendChild(desc);

  return post1;
}