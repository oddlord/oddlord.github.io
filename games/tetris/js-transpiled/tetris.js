'use strict';

var canvas = document.getElementById('tetris');
var context = canvas.getContext('2d');

context.scale(20, 20);

function arenaSweep() {
  var rowCount = 1;
  outer: for (var y = arena.length - 1; y > 0; --y) {
    for (var x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }

    var row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;

    player.score += rowCount * 10;
    rowCount *= 2;
  }
}

function collide(arena, player) {
  var _ref = [player.matrix, player.pos],
      m = _ref[0],
      o = _ref[1];

  for (var y = 0; y < m.length; ++y) {
    for (var x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
}

function createMatrix(w, h) {
  var matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}

function createPiece(type) {
  if (type === 'T') {
    return [[0, 0, 0], [1, 1, 1], [0, 1, 0]];
  } else if (type === 'O') {
    return [[2, 2], [2, 2]];
  } else if (type === 'L') {
    return [[0, 3, 0], [0, 3, 0], [0, 3, 3]];
  } else if (type === 'J') {
    return [[0, 4, 0], [0, 4, 0], [4, 4, 0]];
  } else if (type === 'I') {
    return [[0, 5, 0, 0], [0, 5, 0, 0], [0, 5, 0, 0], [0, 5, 0, 0]];
  } else if (type === 'S') {
    return [[0, 6, 6], [6, 6, 0], [0, 0, 0]];
  } else if (type === 'Z') {
    return [[7, 7, 0], [0, 7, 7], [0, 0, 0]];
  }
}

function draw() {
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawMatrix(arena, { x: 0, y: 0 });
  drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
  matrix.forEach(function (row, y) {
    row.forEach(function (value, x) {
      if (value != 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

function merge(arena, player) {
  player.matrix.forEach(function (row, y) {
    row.forEach(function (value, x) {
      if (value != 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function playerDrop() {
  player.pos.y++;
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
  }
  dropCounter = 0;
}

function playerMove(dir) {
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  }
}

function playerReset() {
  var pieces = 'ILJOTSZ';
  player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
  player.pos.y = 0;
  player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
  if (collide(arena, player)) {
    arena.forEach(function (row) {
      return row.fill(0);
    });
    player.score = 0;
    updateScore();
  }
}

function playerRotate(dir) {
  var pos = player.pos.x;
  var offset = 1;
  rotate(player.matrix, dir);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = pos;
      return;
    }
  }
}

function rotate(matrix, dir) {
  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < y; ++x) {
      var _ref2 = [matrix[y][x], matrix[x][y]];
      matrix[x][y] = _ref2[0];
      matrix[y][x] = _ref2[1];
    }
  }

  if (dir > 0) {
    matrix.forEach(function (row) {
      return row.reverse();
    });
  } else {
    matrix.reverse();
  }
}

var dropCounter = 0;
var dropInterval = 1000;

var lastTime = 0;
function update() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;
  if (dropCounter > dropInterval) {
    playerDrop();
  }

  draw();
  requestAnimationFrame(update);
}

function updateScore() {
  document.getElementById('score').innerText = player.score;
}

var colors = [null, '#FF0D72', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E0D', '#FFE138', '#3877FF'];

var arena = createMatrix(12, 20);

var player = {
  pos: { x: 0, y: 0 },
  matrix: null,
  score: 0
};

document.addEventListener('keydown', function (event) {
  var keyCode = event.keyCode;
  if (keyCode === 37 || keyCode === 65) {
    playerMove(-1);
  } else if (keyCode === 39 || keyCode === 68) {
    playerMove(1);
  } else if (keyCode === 40 || keyCode === 83) {
    playerDrop();
  } else if (keyCode === 81) {
    playerRotate(-1);
  } else if (keyCode === 69) {
    playerRotate(1);
  }
});

playerReset();
updateScore();
update();