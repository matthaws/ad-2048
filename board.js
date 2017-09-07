const _ = require('./node_modules/underscore/underscore.js')

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

  move(direction) {
    let newGrid = [];
    let zippedGrid;
    switch(direction) {
      case 'right':
        this.grid.forEach((row) => {
          newGrid.push(this.compact(row));
        });
        this.grid = newGrid;
        break;
      case 'left':
        this.grid.forEach((row) => {
          newGrid.push(this.compact(row.reverse()).reverse());
        });
        this.grid = newGrid;
        break;
      case 'up':
        zippedGrid = _.zip(...this.grid);
        zippedGrid.forEach((row) => {
          newGrid.push(this.compact(row.reverse()).reverse())
        })
        this.grid = _.unzip(newGrid);
        break;
      case 'down':
        zippedGrid = _.zip(...this.grid);
        zippedGrid.forEach((row) => {
          newGrid.push(this.compact(row));
        })
        this.grid = _.unzip(newGrid);
        break;
    }

    // this.newNumber();
  }

  compact(array) {
    let flag = true;
    const row = array.slice(0);
    let count;
    while (flag) {
      flag = false;
      count = 2;
      while (count > -1) {
        if (row[count] === row[count + 1] && row[count] > 0) {
          row[count] = 0;
          row[count+1] = row[count + 1] * 2
          flag = true;
        } else if (row[count+1] === 0 && row[count] > 0) {
          row[count+1] = row[count];
          row[count] = 0
          flag = true;
        }
        count = count - 1
      }
    }
  return row;
  }

}
