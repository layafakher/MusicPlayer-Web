class Music {
    constructor(name, cover, audio) {
        this.name = name;
        this.cover = cover;
        this.audio = new Audio(audio);
    }
}

let music1 = new Music('Set Fire To The rain','imgs/set-fire.jpg', 'musics/set-fire.mp3');
let music2 = new Music('Set Fire To The rain','imgs/set-fire.jpg', 'musics/set-fire.mp3');
let music3 = new Music('Set Fire To The rain','imgs/set-fire.jpg', 'musics/set-fire.mp3');
let musics = [music1, music2, music3];
console.log(musics[0].audio);



let cover = document.querySelector('#music-cover');
let musicName = document.querySelector('#music-name');
