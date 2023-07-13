import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    console.log('Оновлений час відтворення:', currentTime);
    localStorage.setItem('videoplayer-current-time', currentTime.toFixed(2));

  }, 1000));

  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }

