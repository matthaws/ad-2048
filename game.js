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
    const ranks = {
      2: "Puny Human",
      4: "Less Puny Human",
      8: "Mutating Human",
      16: "Minor Mutant",
      32: "Mutant Warrior",
      64: "Mutant Lord",
      128: "Dark Spectre",
      256: "Dark Archbishop",
      512: "Dark Knight",
      1024: "Son of Darkness",
      2048: "Lord of Darkness and God of the Apocalypse"
    };

    let highest = 0;
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
        if (square > highest) {
          highest = square
        }
      })
    }
    $('#score').empty();
    $('#score').append(`<h3>${ranks[highest]}</h3>`)
    $('#score').append(`<div class="image-${highest}"></div>`)
  }

}

export default GameView
