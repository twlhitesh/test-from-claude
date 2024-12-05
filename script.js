document.addEventListener('DOMContentLoaded', () => {
    const mediaPlayer = document.getElementById('mediaPlayer');
    const fileInput = document.getElementById('fileInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeSlider = document.getElementById('volumeSlider');

    // File input change event
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const fileURL = URL.createObjectURL(file);
        mediaPlayer.src = fileURL;
        mediaPlayer.play();
    });

    // Play/Pause button
    playPauseBtn.addEventListener('click', () => {
        if (mediaPlayer.paused) {
            mediaPlayer.play();
        } else {
            mediaPlayer.pause();
        }
    });

    // Stop button
    stopBtn.addEventListener('click', () => {
        mediaPlayer.pause();
        mediaPlayer.currentTime = 0;
    });

    // Volume slider
    volumeSlider.addEventListener('input', () => {
        mediaPlayer.volume = volumeSlider.value;
    });
});