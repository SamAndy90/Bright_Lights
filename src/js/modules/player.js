// ==================  Player  =======================================
const btnPlay = document.querySelector('.player__play');
const btnPlayImg = document.querySelector('.player__play--image');
const audio = document.querySelector('.player__audio');
const progressWrapper = document.querySelector('.player__progressbar--wrapper');
const progressBar = document.querySelector('.player__progressbar');
const trackCurrentTime = document.querySelector('.player__timer--current-time');
const trackDuration = document.querySelector('.player__timer--duration');

const btnPlayMain = document.querySelector('.player__play--main');
const btnPlayImgMain = document.querySelector('.player__play-image--main');
const audioMain = document.querySelector('.player__audio--main');
const progressWrapperMain = document.querySelector('.player__progressbar-wrapper--main');
const progressBarMain = document.querySelector('.player__progressbar--main');
const trackCurrentTimeMain = document.querySelector('.player__timer--current-time--main');
const trackDurationMain = document.querySelector('.player__timer-duration--main');

const tracklist = document.getElementById('tracklist');



// Playlist
let songs = [
    '3LAU, Bright Lights — How You Love Me',
    'Bright Lights, Kaleena Zanders, Kandy — War For Love',
    'Pink Is Punk, Benny Benassi, Bright Lights — Ghost',
    'Hardwell, Dyro, Bright Lights — Never Say Goodbye',
    'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now',
    'Zedd, Bright Lights — Follow You Down',
];


// Default song
let indexSong = 0;


// Init Main Player
function loadSongMain(song) {
    audioMain.src = `audio/${song}.mp3`;
};
loadSongMain(songs[1]);

// Init
function loadSong(song) {
    audio.src = `audio/${song}.mp3`;
};
loadSong(songs[indexSong]);


// Play/Pause Main
function playSongMain() {
    audioMain.classList.add('play');
    btnPlayImgMain.src = 'img/player/pause.svg'
    audioMain.play();
};
function pauseSongMain() {
    audioMain.classList.remove('play');
    btnPlayImgMain.src = 'img/player/play.svg'
    audioMain.pause();
};

btnPlayMain.addEventListener('click', () => {
    let isPlaying = audioMain.classList.contains('play');
    isPlaying ? pauseSongMain() : playSongMain();
});

// Play/Pause
function playSong() {
    audio.classList.add('play');
    btnPlayImg.src = 'img/player/pause.svg'
    audio.play();
    tracklist.children[indexSong].classList.add('active');
};
function pauseSong() {
    audio.classList.remove('play');
    btnPlayImg.src = 'img/player/play.svg'
    audio.pause();
};

btnPlay.addEventListener('click', () => {
    let isPlaying = audio.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
});



//To Start Main
function toStart() {
    pauseSongMain();
    trackCurrentTimeMain.innerHTML = '00:00'
    progressBarMain.style.width = 0;
}

//Next Song
function nextSong() {
    tracklist.children[indexSong].classList.remove('active');
    indexSong++;
    if (indexSong > songs.length - 1) {
        pauseSong();
        indexSong = 0;
        loadSong(songs[indexSong]);
        progressBar.style.width = 0;
    } else {
        loadSong(songs[indexSong]);
        audio.play();
        tracklist.children[indexSong].classList.add('active');
    }
}

// Progressbar Main
function updateProgressMain(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBarMain.style.width = `${progressPercent}%`;
};
audioMain.addEventListener('timeupdate', updateProgressMain);
audioMain.addEventListener('timeupdate', timerMain);

// Progressbar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
};
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('timeupdate', timer);


// Set Progress Main
function setProgressMain(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioMain.duration;
    audioMain.currentTime = (clickX / width) * duration;
};
progressWrapperMain.addEventListener('click', setProgressMain);

// Set Progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
};
progressWrapper.addEventListener('click', setProgress);


// AutoPlayMain
audioMain.addEventListener('ended', toStart);
// AutoPlay
audio.addEventListener('ended', nextSong);


// Timer Main
function timerMain() {
    let currentMinutes = Math.floor(audioMain.currentTime / 60);
    let currentSeconds = Math.floor(audioMain.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audioMain.duration / 60);
    let durationSeconds = Math.floor(audioMain.duration - durationMinutes * 60);

    if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes };
    if (currentSeconds < 10) { currentSeconds = '0' + currentSeconds };
    if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes };
    if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds };

    trackCurrentTimeMain.textContent = `${currentMinutes}:${currentSeconds}`;
    trackDurationMain.textContent = `${durationMinutes}:${durationSeconds}`;
    if (isNaN(durationMinutes) || isNaN(durationSeconds)) { trackDurationMain.textContent = '00:00' };
}

// Timer
function timer() {
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes };
    if (currentSeconds < 10) { currentSeconds = '0' + currentSeconds };
    if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes };
    if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds };

    trackCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
    trackDuration.textContent = `${durationMinutes}:${durationSeconds}`;
    if (isNaN(durationMinutes) || isNaN(durationSeconds)) { trackDuration.textContent = '00:00' };
}


// Playlist
function cleanClassActive() {
    for (let i = 0; i < tracklist.children.length; i++) {
        tracklist.children[i].classList.remove('active');
    };
};
function changeClass(el) {
    cleanClassActive();
    el.classList.add('active');
};

tracklist.addEventListener('click', e => {
    indexSong = e.target.dataset.track;
    loadSong(songs[indexSong]);
    changeClass(e.target)
    playSong();
});
