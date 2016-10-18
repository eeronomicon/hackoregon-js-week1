'use strict';
var gridsize = 9;
var line;
for (var i = 1; i <= gridsize; i++) {
    line = '';
    for (var j = 1; j <= gridsize; j++) {
      if ((j + i) % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
    console.log(line);
}
