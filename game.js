import Board from './board';

class GameView {
  constructor($el) {
    this.board = new Board;
    this.$el = $el;
  }

}
