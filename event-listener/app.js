var nodes = document.getElementsByTagName('button');

for (var j = 0; j < nodes.length; j++) {
  (function(i){nodes[i].addEventListener('click', function() {
      console.log('You clicked Button' + (parseInt(i) + 1));
    });
  })(j);
}
