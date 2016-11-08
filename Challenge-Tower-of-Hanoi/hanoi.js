// A key to solving this puzzle is to recognize that it can be solved by breaking the problem down into a collection of smaller problems and further breaking those problems down into even smaller problems until a solution is reached. For example:

// To move n discs from peg A to peg C:

// move n−1 discs from A to B. This leaves disc n alone on peg A
// move disc n from A to C
// move n−1 discs from B to C so they sit on disc n

var hanoi = function (disc, A, B, C) {

  if (disc > 0) {
    hanoi(disc - 1, A, B, C);
    console.log('Move disc ' + disc + ' from ' + A + ' to ' + C);
    hanoi(disc - 1, B, A, C);
  }
}

hanoi(3, 'A', 'B', 'C');


/*

Recursive breakdown of the solution

hanoi(3,"A","B","C");
    if (disc > 0) {
    hanoi(2,'A','C','B');
        if (disc > 0) {
        hanoi(1,'A','B','C');
            if (disc > 0) {
            hanoi(0,'A','C','B');
                END
            write("Move disc " + 1 + " from " + A + " to " + C + "<br />");
            hanoi(0,'B','A','C');
                END
            }
        write("Move disc " + 2 + " from " + A + " to " + C + "<br />");
        hanoi(1,'C','A','B');
            if (disc > 0) {
            hanoi(0,'A','C','B');
                END
            write("Move disc " + 1 + " from " + A + " to " + C + "<br />");
            hanoi(0,'B','A','C');
                END
            }
        }
    write("Move disc " + 3 + " from " + A + " to " + C + "<br />");
    hanoi(2,'B','A','C');
        if (disc > 0) {
        hanoi(1,'B','C','A');
            if (disc > 0) {
            hanoi(0,'A','C','B');
                END
            write("Move disc " + 1 + " from " + A + " to " + C + "<br />");
            hanoi(0,'B','A','C');
                END
            }
        write("Move disc " + 2 + " from " + A + " to " + C + "<br />");
        hanoi(1,'A','B','C');
            if (disc > 0) {
            hanoi(0,'A','C','B');
                END
            write("Move disc " + 1 + " from " + A + " to " + C + "<br />");
            hanoi(0,'B','A','C');
                END
            }
        }
    }
*/