import GameView from './game';

$(() => {
  const game = new GameView();
  const sound = $('#sound');
  window.toggleMute = () => {
    if (sound[0].muted) {
      sound[0].muted = false;
    } else {
      sound[0].muted = true;
    }
  }
})
