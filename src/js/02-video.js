import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const videoplayerCurrentTime = 'videoplayer-current-time';


player.on('timeupdate', throttle(onSaveStorage, 1000));

function onSaveStorage(event) {
    localStorage.setItem(videoplayerCurrentTime, event.seconds);

    if (event.seconds === event.duration) {
    
        localStorage.removeItem(videoplayerCurrentTime);
    }
}

setCurrentTime();

function setCurrentTime() {
    const saveTime = localStorage.getItem(videoplayerCurrentTime);
    if (saveTime) {
    player.setCurrentTime(saveTime);
    }
}