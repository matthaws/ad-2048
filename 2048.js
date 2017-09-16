import GameView from './game';

$(() => {
  const game = new GameView();
  const sound = $('#sound');
  const toggleMute = () => {
    if (sound.muted) {
      sound.muted = false;
    } else {
      sound.muted = true;
    }
  }
})
