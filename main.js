const input = document.getElementById("input");

//web audio api elements here
const audioCtx = new AudioContext(); // the object which controls the playing and pausing of computer speakers
const gainNode = audioCtx.createGain(); //gainnode controls the volume of audio context

//oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine"; // set oscillator type (we want sine waves so set to sine)

oscillator.start();
gainNode.gain.value = 0;

notenames = new Map() //created map so users can input letters rather than numbers (easier!!)
notenames.set("C", 261.6);
notenames.set("D", 293.7);
notenames.set("E", 329.6);
notenames.set("F", 349.2);
notenames.set("G", 392.0);
notenames.set("A", 440);
notenames.set("B", 493.9);



function frequency(pitch){
    gainNode.gain.setValueAtTime(100, audioCtx.currentTime);// 100 is the percentage of the volume
    oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1) //audioCtx.currentTime + 1 is one second after. 0 is the percentage of the volume

}

function handle() {
    var usernotes = String(input.value);
    audioCtx.resume();
    gainNode.gain.value = 0;
    frequency(notenames.get(usernotes));
}