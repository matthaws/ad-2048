import Board from './board';

class GameView {
  constructor() {
    this.board = new Board;
    this.setListeners();
    this.render();
    this.sound = $('#sound');
  }

  setListeners() {
    $('body').keydown((e) => {
      switch (e.key) {
        case 'ArrowUp':
          this.board.move('up');
          this.render();
          break;
        case 'ArrowDown':
          this.board.move('down');
          this.render();
          break;
        case 'ArrowRight':
          this.board.move('right');
          this.render();
          break;
        case 'ArrowLeft':
          this.board.move('left');
          this.render();
      }
    })
  }

  render() {
    let $row, $square;
    for (let i = 0; i < this.board.grid.length; i++) {
      $row = $(`#row${i + 1}`);
      $row.empty();
      this.board.grid[i].forEach((square) => {
        if (square > 0) {
          $square = $(`<li class="image-${square}"><p>${square}</p></li>`)
        } else {
          $square = $('<li></li>');
        }
        $row.append($square)
      })
    }
  }

}

export default GameView
