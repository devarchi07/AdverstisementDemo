const videos = document.querySelectorAll('video');
let currentVideoIndex = 0;
const interval = 100 

function playNextVideo() {
    videos[currentVideoIndex].pause();
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videos[currentVideoIndex].play().then(() => {
        
        console.error('Video playback failed');
    });

    setTimeout(playNextVideo, interval);
}

playNextVideo();
