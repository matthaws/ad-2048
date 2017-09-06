class Board {
  constructor() {
    this.grid = [];
    for (var i = 0; i < 4; i++) {
      this.grid.push(new Array(4))
    }

    this.setupBoard();
  }

  setupBoard() {
    this.newNumber();
    this.newNumber();
  }

  newNumber() {
    let x, y;
    [x, y] = this.randomPos();
    while (this.grid[x][y]) {
      [x, y] = this.randomPos();
    }

    this.grid[x][y] = 2
  }

  randomPos() {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    return [x, y];
  }

  gameOver() {
    this.grid.forEach( (row) => {
      row.forEach( (space) => {
        if (space === undefined) {
          return false;
        }
      });
    });

    return true;
  }
}

export default Board;
