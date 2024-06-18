const audioInput = document.getElementById("audio");
let noise = new SimplexNoise();
const area = document.getElementsById("visualizer");
const label = document.getElementById("label");
audioInput.addEventListener("change", setAudio, false);
let audio = new Audio(""); 

function setAudio() {
    audio.pause()
    const audioFile = this.files[0]; 
    if (audioFile.name.includes(".mp3")) {
        const audioURL = URL.createObjectURL(audioFile); 
        audio = new Audio(audioURL); 
        clearScene(); // Clear the scene
        startVis(); // Start the visualization
    } 
    else {
        alert("Please upload an mp3 file");
    }
}

area.addEventListener('click', () => {
    console.log("audio");
    if (audio.paused) {
        audio.play();
        label.style.display = "none";
    }
    else {
        audio.pause();
        label.style.display = "flex";
    }
});

startVis();

function clearScene() { 
    const canvas = area.firstElementChild; 
    area.removeChild(canvas);
}

function startVis() {
    
}