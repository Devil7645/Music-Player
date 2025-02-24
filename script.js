const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const trackTitle = document.getElementById('track-title');
const artistName = document.getElementById('artist-name');
const coverImage = document.getElementById('cover');

const tracks = [
    { title: "Song 1", artist: "Artist Devil", src: "song.mp3", cover: "icon.png" },
    { title: "Song 2", artist: "Artist Devil", src: "song1.mp3", cover: "icon1.jpeg" },
    { title: "Song 3", artist: "Artist Devil", src: "song2.mp3", cover: "icon2.jpeg" }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    audio.src = tracks[index].src;
    trackTitle.textContent = tracks[index].title;
    artistName.textContent = tracks[index].artist;
    coverImage.src = tracks[index].cover;
    audio.load();
}

function playTrack() {
    audio.play();
}

function pauseTrack() {
    audio.pause();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

playButton.addEventListener('click',()=>{
    if(audio.paused){ 
       playTrack();
       playButton.textContent="pause";
}else{
pauseTrack();
playButton.textContent="play";
}
});

prevButton.addEventListener('click', prevTrack);
nextButton.addEventListener('click', nextTrack);

// Load the first track
loadTrack(currentTrackIndex);
