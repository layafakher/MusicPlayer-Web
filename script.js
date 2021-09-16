class Music {
    constructor(name, cover, audio) {
        this.name = name;
        this.cover = cover;
        this.audio = new Audio(audio);
    }
}

let music1 = new Music('Set Fire To The rain','imgs/set-fire.jpg', 'musics/set-fire.mp3');
let music2 = new Music('Lose Yourself','imgs/lose-yourself.jpg', 'musics/lose-yourself.mp3');
let music3 = new Music('Ready For It','imgs/ready-for-it.jpg', 'musics/ready-for-it.mp3');
let musics = [music2, music1, music3];



let musicCover = document.querySelector('#music-cover');
let musicName = document.querySelector('#music-name');
let musicTime = document.querySelector('#music-time');
let playButton = document.querySelector('#play-btn');
let nextButton = document.querySelector('#next-btn');
let prevButton = document.querySelector('#pre-btn');

let currentMusicIndex = 0;
let currentAudio = musics[currentMusicIndex].audio;
let currentCover = musics[currentMusicIndex].cover;
let currentName = musics[currentMusicIndex].name;
//
// musicCover.setAttribute('src',currentCover);
// musicName.innerText = currentName;
setMusic();
currentAudio.addEventListener('canplay',(e)=>{
    musicTime.max = currentAudio.duration;
});
currentAudio.addEventListener('timeupdate', (e)=>{
    musicTime.value = currentAudio.currentTime;
});
 musicTime.addEventListener('input',(e)=>{
     currentAudio.currentTime = musicTime.value;
 });

 playButton.addEventListener('click',(e)=>{
     if (currentAudio.paused){
         currentAudio.play();
         musicCover.style.animationPlayState = 'running';
         playButton.classList = 'fas fa-pause';
     }else {
         currentAudio.pause();
         musicCover.style.animationPlayState = 'paused';
         playButton.className = 'fas fa-play';
     }
 });

 nextButton.addEventListener('click',(e)=>{
     changeAudio('next');
 });

 prevButton.addEventListener('click',(e)=>{
     changeAudio('prev');
 })


function changeAudio(state) {
    currentAudio.pause();
    musicTime.value = 0;
    playButton.className = 'fas fa-play';
    musicCover.style.animationPlayState = 'paused';
    currentAudio.currentTime = 0;
    if (state == 'next'){

        if (currentMusicIndex == musics.length-1){
            currentMusicIndex = 0;
        }else {
            currentMusicIndex += 1;
        }
    }else {
        if (currentMusicIndex == 0){
            currentMusicIndex = musics.length-1;
        }else {
            currentMusicIndex -= 1;
        }
    }
    setMusic();

}


function setMusic() {
    currentAudio = musics[currentMusicIndex].audio;
    currentCover = musics[currentMusicIndex].cover;
    currentName = musics[currentMusicIndex].name;
    musicCover.setAttribute('src',currentCover);
    musicName.innerText = currentName;
}