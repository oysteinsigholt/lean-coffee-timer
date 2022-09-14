import chimeSoundFile from '../sounds/333629__jgreer__chime-sound.ogg?url';

const audio = new Audio(chimeSoundFile);

export function playChime() {
	audio.play();
}
