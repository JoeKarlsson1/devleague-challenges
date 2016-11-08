'use strict';

function ClickAnalyzer() {
  let clicks = {};

  this.test = function(rows, cols) {
    const grid = document.createElement('div');
    const report = document.getElementById('analyze');
    const self = this;
    let buttons = new Array(rows);

    for (let i = 0; i < rows; i++) {
      buttons[i] = new Array(cols);     // make each row;
      for (let j = 0; j < cols; j++) {
        buttons[i][j] = document.createElement('div');
        buttons[i][j].className = 'button';
        buttons[i][j].id = 'x' + j + 'y' + i;
      }
    }
    for (let i = 0; i < rows; i++) {
      let temp = document.createElement('div');
      temp.className = 'row';
      for (let j = 0; j < cols; j++) {
        temp.appendChild(buttons[i][j]);
      }
      grid.appendChild(temp);
    }

    report.addEventListener('click', () => {
      self.report();
    });
    document.getElementById('content').appendChild(grid);
  };

  this.analyze = function() {
    const descendents = document.body.getElementsByTagName('*');
    for (let i = 0; i < descendents.length; i++) {
      descendents[i].addEventListener('click', function(event) {
        if (!clicks[this.id])
          clicks[this.id] = 0;
        clicks[this.id] += 1;
        this.style.background = 'yellow';
        let thisButton = this;
        setTimeout(function (){ thisButton.style.background = 'white'; }, 100);
        event.stopPropagation();
        return false;
      });
    }
  };

  this.report = function() {
    let keys = Object.keys(clicks);
    let str = '';
    for (let i = 0; i < keys.length; i++) {
      str += keys[i] + ': clicks ' + clicks[keys[i]] + '  -  ';
    }
    document.getElementById('report').innerHTML = str;
  };
}

var analyzer = new ClickAnalyzer();
analyzer.test(24, 48);
analyzer.analyze();