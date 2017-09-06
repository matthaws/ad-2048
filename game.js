class Board {
  constructor() {
    this.grid = [];
    for (var i = 0; i < 4; i++) {
      this.grid.push(new Array(4))
    }

    this.setupBoard()
  }

  setupBoard() {
    let x, y;
    let a, b;
    debugger
    [x, y] = this.randomPos();
    this.newNumber(x, y)
    [a, b] = this.randomPos();
    this.newNumber(x, y)
  }

  newNumber(x, y) {
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

}
