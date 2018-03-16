import notes from './notesFrequency';

export const NOTES_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const LIST_OCTAVES_NUBMER = 3;

export const makeSound = (noteName = 'E', octave = LIST_OCTAVES_NUBMER) => {
  const context = new AudioContext();
  const o = context.createOscillator();
  const g = context.createGain();
  o.type = 'Sine';
  o.frequency.value = notes[`${noteName}${octave}`];
  o.connect(g);
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.0000001, context.currentTime + 6);
  setTimeout(() => {
    context.close();
  }, 1000);
}


export const makeIntervalSound = (baseNote, halftones) => {
  makeSound(baseNote);
  let octave = 3;
  const baseNoteIndex = NOTES_NAMES.findIndex((note) => note === baseNote);
  let nextIndex = baseNoteIndex + halftones;
  if (nextIndex > 11) {
    nextIndex = nextIndex - 12;
    octave = 4;
  }
  console.log('log  ', baseNote, ' ', halftones, ' ', NOTES_NAMES[nextIndex], );
  setTimeout(() => {
    makeSound(NOTES_NAMES[nextIndex], octave);
  }, 1000);
}

export const getDescription = (baseNote, halftones) => {
  const baseNoteIndex = NOTES_NAMES.findIndex((note) => note === baseNote);
  let nextIndex = baseNoteIndex + halftones;
  if (nextIndex > 11) {
    nextIndex = nextIndex - 12;
  }
  return `Правильно, от ${baseNote} через ${halftones} расположена нота ${NOTES_NAMES[nextIndex]}, интервал ${intervalesNames[halftones.toString()]}`;
}

const intervalesNames = {
  '1': 'малая секунда, м.2',
  '2': 'Большая секунда, б.2',
  '3': 'Малая терция, м.3',
  '4': 'Большая терция, б.3',
  '5': 'Кварта',
  '6': 'Тритон',
  '7': 'Квинта',
  '8': 'Малая секста, м.6',
  '9': 'Большая секста, б.6',
  '10': 'Малая септима, м.7',
  '11': 'Большая септима, б.7',
}


// export const makeInterval = 