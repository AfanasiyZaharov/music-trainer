const notesFrequency = require("./notesFrequency");
const NOTES_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

const generateArray = () => {
  const resArrayNotes = [];
  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("E", 4, i);
    resultObject.stringNumber = 1;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;
    resArrayNotes.push(resultObject);
  }

  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("B", 3, i);
    resultObject.stringNumber = 2;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;
    resArrayNotes.push(resultObject);
  }

  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("G", 3, i);
    resultObject.stringNumber = 3;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;
    resArrayNotes.push(resultObject);
  }

  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("D", 3, i);
    resultObject.stringNumber = 4;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;
    resArrayNotes.push(resultObject);
  }

  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("A", 2, i);
    resultObject.stringNumber = 5;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;

    resArrayNotes.push(resultObject);
  }

  for (let i = 0; i < 13; i++) {
    const resultObject = makeInterval("E", 2, i);
    resultObject.stringNumber = 6;
    resultObject.lad = i;
    resultObject.fileName = `${resultObject.stringNumber}-${resultObject.lad}`;
    resArrayNotes.push(resultObject);
  }
  console.log(JSON.stringify(resArrayNotes));
  return resArrayNotes;
};

const makeInterval = (baseNote, octave, halftones) => {
  const baseNoteIndex = NOTES_NAMES.findIndex(note => note === baseNote);
  let nextIndex = baseNoteIndex + halftones;
  if (nextIndex > 11) {
    nextIndex = nextIndex - 12;
    octave++;
  }
  console.log("log  ", baseNote, " ", halftones, " ", NOTES_NAMES[nextIndex]);
  return {
    noteName: NOTES_NAMES[nextIndex],
    ferquency: notesFrequency[`${NOTES_NAMES[nextIndex]}${octave}`]
  };
};

generateArray();
