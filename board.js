class Board {
  constructor() {
    this.grid = [];
    for (var i = 0; i < 4; i++) {
      this.grid.push([0, 0, 0, 0]);
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
    let result = true;
    this.grid.forEach( (row) => {
      row.forEach( (space) => {
        if (space === 0) {
          result = false;
        }
      });
    });
    return result;
  }


}

export default Board;
